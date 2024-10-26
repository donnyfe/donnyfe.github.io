# 使用SSH2部署到服务器

假设自己有一台服务器，并且已经在服务器的根目录上创建了目标文件夹，这里以docs目录为例，远程待上传的目录路径为 `/root/docs`。

## 实现步骤流程

### 1.添加部署脚本

在项目根目录创建deploy.js文件

```js
const Client = require('ssh2').Client
const path = require('path')
const fs = require('fs')
const childProcess = require('child_process')

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
			})
			this.log.success('部署完成!')
			this.client?.end()
		} catch (error) {
			this.log.error(`部署失败: ${error.message}`)
			// 确保出错时关闭连接
			this.client?.end()
			throw error
		}
	}
	/**
	 * Step 1:打包压缩应用
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
				const fullPath = path.join(__dirname, localPath)

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

const options = {
	// ssh2客户端配置
	ssh: {
		host: 'x.x.x.x', // 服务器公网IP地址
		port: 22,
		username: 'root', // 登录用户名，默认root
		password: '', // 登录密码, 如果使用密钥登录则不需要密码
	},
	// 部署文件的本地路径
	localPath: 'docs/.vitepress/dist.tar.gz',
	// 部署文件的服务器路径
	remotePath: '/root/docs/dist.tar.gz',

	shellMap: {
		compression: [
			'cd ./docs/.vitepress',
			// 打包压缩dist目录
			'tar zcvf dist.tar.gz dist',
		].join('\n'),
		// 远程执行Shell命令
		remoteShell: [
			// 进入远端docs目录
			'cd ./docs',
			// 将上传压缩包复制一份到bak目录下并更名带上时间戳，通常用于代码回退， 根据实际情况选择
			'cp dist.tar.gz bak/dist.bak.$(date "+%Y%m%d%H%M%S").tar.gz',
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

```



### 2. 添加部署指令

修改package.json文件，在scripts字段的build指令中添加`&& node ./deploy.js`，这样在执行`npm run build`时，会先执行`vitepress build docs`打包文档应用，然后再执行`node ./deploy.js`命令实现自动部署。

```js
{
  "scripts": {
    "build": "vitepress build docs && node ./deploy.js"
  }
}
```

### 3. 运行部署

应用开发完毕，在本地执行`npm run build`命令，即可实现自动打包并部署到服务器。


### 其它事项

1. 如果使用密钥登录，则需要将密钥文件上传到服务器，并设置好密钥文件的权限。

2. 如果需要使用密钥登录，则需要在ssh配置中将password字段设置为空。

```js
const { readFileSync } = require('fs')

{
  ssh: {
    host: '192.168.100.100',
    port: 22,
    username: 'frylock',
    privateKey: readFileSync('/path/to/my/key')
  }
}
```

3. 由于脚本中涉及隐私信息，故使用Git提交文件时需要在`.gitignore`文件中忽略deploy.js文件。


## 参考资料

- [ssh2](https://www.npmjs.com/package/ssh2)

