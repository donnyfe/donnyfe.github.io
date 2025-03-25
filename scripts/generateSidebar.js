import { readdirSync, statSync, writeFileSync, mkdirSync } from 'fs'
import { join, dirname } from 'path'
import chokidar from 'chokidar'

// let highlighter = null

// async function getHighlighter() {
// 	if (!highlighter) {
// 		const { getHighlighter } = await import('shiki')
// 		highlighter = await getHighlighter({
// 			theme: 'nord',
// 		})
// 	}
// 	return highlighter
// }
// getHighlighter()

function generateSidebar(options) {
	const { rootPath, outputPath, include, exclude } = options
	const sidebar = {}

	// 读取一级目录
	const firstLevelDirs = readdirSync(rootPath)
		.filter((name) => {
			const isDir = statSync(join(rootPath, name)).isDirectory()

			if (include?.length) {
				return isDir && include.includes(name)
			}

			if (exclude?.length) {
				return isDir && !exclude.includes(name)
			}

			return isDir
		})
		.sort() // 对目录排序

	// 遍历一级目录
	for (const dir of firstLevelDirs) {
		const dirPath = join(rootPath, dir)
		const subDirs = readdirSync(dirPath).filter((name) => {
			const isDir = statSync(join(dirPath, name)).isDirectory()

			if (exclude?.length) {
				return isDir && !exclude.includes(name)
			}

			return isDir
		})

		// 关键修改:如果没有子目录,直接读取当前目录下的 md 文件
		if (subDirs.length === 0) {
			sidebar[`/${dir}/`] = [
				{
					text: `${dir}`,
					items: getMarkdownFiles(dirPath).map((file) => {
						return { text: file.name, link: `/${dir}/${file.path}` }
					}),
				},
			]
			continue
		}

		// 有子目录时的处理逻辑保持不变
		sidebar[`/${dir}/`] = subDirs.map((subDir) => ({
			text: subDir,
			items: getMarkdownFiles(join(dirPath, subDir)).map((file) => {
				return { text: file.name, link: `/${dir}/${subDir}/${file.path}` }
			}),
		}))
	}

	// 生成配置文件
	const fileContent = `
		// 此文件由脚本自动生成，请勿手动修改
		export const sidebarConfig = ${JSON.stringify(sidebar, null, 2)} as const

		export default sidebarConfig
	`

	// 写入文件
	try {
		const outputDir = dirname(outputPath)
		mkdirSync(outputDir, { recursive: true })
		writeFileSync(outputPath, fileContent, 'utf8')
		console.log(`侧边栏配置已成功生成到: ${outputPath}`)
	} catch (error) {
		console.error('写入文件时发生错误:', error)
	}

	// 在生成完成后释放 highlighter
	// if (highlighter) {
	// 	highlighter.dispose()
	// 	highlighter = null
	// }

	return sidebar
}

// 获取目录下的 markdown 文件
function getMarkdownFiles(dirPath) {
	try {
		const files = readdirSync(dirPath)
			.filter((name) => name.endsWith('.md'))
			// 添加文件排序
			.sort((a, b) => {
				// 可以根据需要自定义排序规则
				// 这里按文件名字母顺序排序
				return a.localeCompare(b)
			})
			.map((name) => ({
				name: name.replace('.md', ''),
				path: name,
			}))
		return files
	} catch (error) {
		console.error(`读取目录 ${dirPath} 时发生错误:`, error)
		return []
	}
}

async function watchAndGenerate(options) {
	// 首次生成
	generateSidebar(options)

	// 设置监听器
	const watcher = chokidar.watch(options.rootPath, {
		ignored: /(^|[\/\\])\../, // 忽略隐藏文件
		persistent: true,
		ignoreInitial: true,
	})

	// 监听所有可能触发侧边栏更新的事件
	// const events = ['add', 'change', 'unlink', 'addDir', 'unlinkDir'] // 添加 'change' 事件
	const events = ['change'] // 只监听 change 事件
	events.forEach((event) => {
		watcher.on(event, (path) => {
			// 只处理 .md 文件的变化
			if (event === 'change' && !path.endsWith('.md')) {
				return
			}
			console.log(`检测到${event}事件: ${path}`)
			generateSidebar(options)
		})
	})

	// 错误处理
	watcher.on('error', (error) => {
		console.error('监听文件时发生错误:', error)
	})

	console.log(`开始监听文件变化: ${options.rootPath}`)
}

// 使用示例
const options = {
	rootPath: './docs', // 文档根目录路径
	outputPath: './docs/.vitepress/config/pre-sidebar.ts', // 输出文件路径
	include: [], // 只包含这些目录
	exclude: [
		// 排除这些目录
		'.vitepress',
		'测试',
		'img',
	],
}

// 启动监听
watchAndGenerate(options).catch((error) => {
	console.error('运行时发生错误:', error)
})

// 在进程退出时确保释放资源
process.on('exit', () => {
	if (highlighter) {
		highlighter.dispose()
		highlighter = null
	}
})
