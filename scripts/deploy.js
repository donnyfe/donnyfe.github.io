import fs from 'fs'
import path from 'path'
import SftpClient from 'ssh2-sftp-client'
import inquirer from 'inquirer'
import ora from 'ora'
import dotenv from 'dotenv'
import { fileURLToPath } from 'url'

// 加载环境变量
dotenv.config()

// 获取当前文件的目录路径
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

// 源目录和目标目录
const sourceDir = path.resolve(__dirname, '../docs/.vitepress/dist')
const targetDir = process.env.REMOTE_DIR || '/www/'

// 检查源目录是否存在
if (!fs.existsSync(sourceDir)) {
	console.error('错误: 构建目录不存在，请先运行 npm run build')
	process.exit(1)
}

// 部署函数
async function deploy() {
	// 如果没有在环境变量中设置服务器信息，则提示用户输入
	const serverConfig = await promptForServerConfig()

	const spinner = ora('正在连接到远程服务器...').start()
	const sftp = new SftpClient()

	try {
		// 连接到服务器
		await sftp.connect({
			host: serverConfig.host,
			port: serverConfig.port,
			username: serverConfig.username,
			password: serverConfig.password,
		})

		spinner.text = '连接成功，正在上传文件...'

		// 确保目标目录存在
		try {
			await sftp.mkdir(targetDir, true)
		} catch (error) {
			// 如果目录已存在，忽略错误
		}

		// 上传文件
		await sftp.uploadDir(sourceDir, targetDir)

		spinner.succeed('部署完成！')
	} catch (error) {
		spinner.fail(`部署失败: ${error.message}`)
		console.error(error)
	} finally {
		// 关闭连接
		await sftp.end()
	}
}

// 提示用户输入服务器配置
async function promptForServerConfig() {
	// 如果环境变量中已有配置，则使用环境变量
	if (process.env.SSH_HOST && process.env.SSH_USERNAME) {
		return {
			host: process.env.SSH_HOST,
			port: process.env.SSH_PORT || 22,
			username: process.env.SSH_USERNAME,
			password: process.env.SSH_PASSWORD,
		}
	}

	// 否则提示用户输入
	const answers = await inquirer.prompt([
		{
			type: 'input',
			name: 'host',
			message: '请输入远程服务器地址:',
			validate: (input) => (input ? true : '服务器地址不能为空'),
		},
		{
			type: 'number',
			name: 'port',
			message: '请输入SSH端口号:',
			default: 22,
		},
		{
			type: 'input',
			name: 'username',
			message: '请输入用户名:',
			default: 'root',
			validate: (input) => (input ? true : '用户名不能为空'),
		},
		{
			type: 'password',
			name: 'password',
			message: '请输入密码:',
			mask: '*',
		},
	])

	return answers
}

// 执行部署
deploy().catch((err) => {
	console.error('部署过程中发生错误:', err)
	process.exit(1)
})
