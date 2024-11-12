import { Client } from 'ssh2'
import path from 'path'
import fs from 'fs'
import childProcess from 'child_process'
import { fileURLToPath } from 'url'
import 'dotenv/config'

class Deploy {
	constructor(options) {
		// 验证必要参数
		const required = ['ssh', 'localPath', 'remotePath']
		required.forEach((field) => {
			if (!options[field]) {
				throw new Error(`Missing required option: ${field}`)
			}
		})

		this.log = this.initLogger()

		this.options = options
		this.client = new Client()

		// 获取当前文件的目录路径
		this.dirname = path.join(path.dirname(fileURLToPath(import.meta.url)), '..')
	}
	// 初始化日志记录器
	initLogger() {
		return {
			info: (msg) => console.log(`[INFO] ${msg}`),
			error: (msg) => console.error(`[ERROR] ${msg}`),
			success: (msg) => console.log(`[SUCCESS] ${msg}`),
		}
	}
	async start() {
		try {
			this.log.info('开始部署流程...')
			await this.compression()
			await this.connect(async (conn) => {
				await this.upload()
				await this.runShell()
				this.log.success('部署完成!')
			})
			this.client?.end()
		} catch (error) {
			this.log.error(`部署失败: ${error.message}`)
			// 确保出错时关闭连接
			this.client?.end()
			throw error
		}
	}
	/**
	 * Step 1:压缩代码包
	 */
	async compression() {
		return new Promise((resolve, reject) => {
			this.log.info('正在压缩代码包...')
			const pro = childProcess.exec(this.options.shellMap.compression, (err) => {
				if (err) reject(err)
			})

			pro.stdout.pipe(process.stdout)
			pro.stderr.pipe(process.stderr)

			pro.on('exit', (code) => {
				if (code === 0) {
					this.log.success('代码包压缩成功!')
					resolve()
				} else {
					reject(new Error(`打包失败,退出码: ${code}`))
				}
			})
		})
	}

	/**
	 * Step 2: 连接服务器
	 */
	async connect(excutor) {
		this.log.info('正在连接远程服务器……')
		return new Promise((resolve, reject) => {
			// 连接ssh上传
			this.client.connect(this.options.ssh).on('ready', async () => {
				this.log.info('SSH2连接成功!')

				await excutor(this.client)
				resolve()
			})
		})
	}

	/**
	 * Step 3: 上传资源文件
	 */
	async upload() {
		return new Promise((resolve, reject) => {
			// 建立sftp连接
			this.client.sftp((err, sftp) => {
				if (err) {
					this.log.error('SFTP连接失败')
					return reject(err)
				}

				const { localPath, remotePath } = this.options
				const fullPath = path.join(this.dirname, localPath)

				// 先检查文件是否存在
				if (!fs.existsSync(fullPath)) {
					return reject(new Error(`本地文件不存在: ${fullPath}`))
				}

				this.log.info(`本地路径: ${fullPath}`)
				this.log.info(`远程路径: ${remotePath}`)

				// 增加上传进度显示
				const startTime = Date.now()
				sftp.fastPut(
					fullPath,
					remotePath,
					{
						step: (transferred, chunk, total) => {
							const percent = Math.round((transferred / total) * 100)
							this.log.info(`上传进度: ${percent}%`)
						},
					},
					(err) => {
						if (err) {
							this.log.error('文件上传失败')
							return reject(err)
						}
						const duration = ((Date.now() - startTime) / 1000).toFixed(2)
						this.log.success(`代码包上传成功! 耗时${duration}秒`)
						resolve()
					}
				)
			})
		})
	}

	/**
	 * Step 4: 执行shell脚本
	 */
	async runShell() {
		return new Promise((resolve, reject) => {
			try {
				this.client.shell((err, stream) => {
					if (err) {
						this.log.error('执行shell脚本失败')
						return reject(err)
					}

					stream
						.on('data', (data) => {
							this.log.info(`Shell输出: ${data.toString()}`)
						})
						.on('close', () => {
							this.log.success('服务器端代码包解压完成!')
							resolve()
							this.client.end()
						})
						.on('error', (err) => {
							this.log.error('Shell执行错误')
							reject(err)
						})
						.end(this.options.shellMap.remoteShell)
				})
			} catch (err) {
				this.log.error(`执行shell脚本失败: ${err.message}`)
			}
		})
	}
}

const sshOptions = {
	host: process.env.SSH_HOST, // 服务器公网IP地址
	port: process.env.SSH_PORT, // 登录端口
	username: process.env.SSH_USERNAME, // 登录用户名，默认root
	password: process.env.SSH_PASSWORD, // 登录密码
}

const options = {
	// ssh2客户端配置
	ssh: sshOptions,
	// 部署文件的本地路径
	localPath: 'docs/.vitepress/dist.tar.gz',
	// 部署文件的服务器路径
	remotePath: '/root/web/docs/dist.tar.gz',

	shellMap: {
		compression: [
			'cd ./docs/.vitepress',
			// 打包压缩dist目录
			'tar zcvf dist.tar.gz dist',
		].join('\n'),
		// 远程执行Shell命令
		remoteShell: [
			// 进入远端docs目录
			'cd /root/web/docs',
			// 移除远端dist目录
			'rm -rf dist',
			// 解压上传的压缩包
			'tar zxvf dist.tar.gz',
			// 移除压缩包
			'rm -rf dist.tar.gz',
			// 退出ssh2
			'exit',
		].join('\n'),
	},
}

new Deploy(options).start()
