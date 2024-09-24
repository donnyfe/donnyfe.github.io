# 组合模式 Composite

组合模式（Composite Pattern）是一种结构型设计模式，它允许将对象组合成树形结构来表示“部分-整体”的层次结构。组合模式使得用户对单个对象和组合对象的使用具有一致性。

组合模式提供了一个清晰的组成结构。组合对象类通过继承同一个父类使其具有统一的方法，这样方便统一管理与使用，当然此时单体成员与组合体成员行为表现就比较一致了。这也就模糊了简单对象与组合对象的区别。有时这也是一种对数据的分级式处理。清晰而又方便对数据的管理与使用。

**组合模式的结构：**
该模式由两部分构成：

- 子对象（Leaf）：组成组合对象的最基本对象。
- 组合对象（Composite）：由子对象组合起来的复杂对象。

**组合模式的作用：**
组合模式可以优化处理递归或分级数据结构。

## 适用场景

- 需要表示对象的部分-整体层次结构。
- 希望用户忽略组合对象与单个对象的不同，统一的使用组合结构中的所有对象。

## 实例

具有部分-整体特征的场景。

- 文件目录结构
- 组合式新闻模块
- 组合式表单模块
- 系统目录结构
- 网站导航结构
- DOM 的机制，一个 DOM 节点可以包含子节点，不管是父节点还是子节点都有添加、删除、遍历子节点的通用功能。

### 文件扫描

以下是一个文件扫描的示例，展示了如何使用组合模式来管理文件和文件夹。

```js
/** 文件夹类 */
class Folder {
	constructor(name) {
		this.name = name
		this.files = []
	}
	/** 添加文件或文件夹 */
	add(file) {
		file.parent = this
		this.files.push(file)
	}
	/** 扫描文件夹内的所有文件和子文件夹 */
	scan() {
		for (let i = 0, file; (file = this.files[i++]); ) {
			file.scan()
		}
	}
	/** 从父文件夹中移除自己 */
	remove() {
		if (this.parent === null) return

		for (let i = 0, file, files = this.parent.files; (file = files[i]); i++) {
			if (file === this) {
				files.splice(i, 1)
			}
		}
	}
}

/** 文件类 */
class File {
	constructor(name) {
		this.name = name
		this.parent = null
	}
	/** 文件不能添加子文件 */
	add() {
		throw new Error('文件下面不能再添加文件')
	}
	/** 扫描文件 */
	scan() {
		console.log('扫描文件名称：' + this.name)
	}
	/** 从父文件夹中移除自己 */
	remove() {
		if (this.parent === null) return

		for (let i = 0, file, files = this.parent.files; (file = files[i]); i++) {
			if (file === this) {
				files.splice(i, 1)
			}
		}
	}
}

// 示例使用
// 一级目录
let folder = new Folder('前端学习')
// 二级目录
let subFolder1 = new Folder('JS学习')
let subFolder2 = new Folder('JQ学习')
// 文件
let file1 = new File('JS设计模式')
let file2 = new File('JQ实战')
let file3 = new File('前端性能')

// 添加文件到子目录
subFolder1.add(file1)
subFolder2.add(file2)
// 添加子目录到主目录
folder.add(subFolder1)
folder.add(subFolder2)
folder.add(file3)

// 移除子目录
subFolder1.remove()
// 开始扫描主目录
folder.scan()
```
