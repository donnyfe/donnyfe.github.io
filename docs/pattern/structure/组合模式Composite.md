# 组合模式 Composite

组合模式(Composite)又称部分-整体模式，将对象组合成树形结构以表示“部分整体”的层次结构。组合模式使得用户对单个对象和组合对象的使用具有一致性。

组合模式提供了一个清晰的组成结构。组合对象类通过继承同一个父类使其具有统一的方法，这样方便统一管理与使用，当然此时单体成员与组合体成员行为表现就比较一致了。这也就模糊了简单对象与组合对象的区别。有时这也是一种对数据的分级式处理。清晰而又方便对数据的管理与使用。

当然组合模式有时在实现需求上也带来更多的选择方式，虽然对于单体对象的实现简单而又单一，但是通过对其组合将会给我们带来更多的使用形式。

该模式由两部分构成：

- 子对象（Leaf）：组成组合对象的最基本对象。
- 组合对象（Composite）：由子对象组合起来的复杂对象。

## 作用

组合模式可以优化处理递归或分级数据结构。

## 实例

具有部分-整体特征的场景。

- 文件目录结构
- 组合式新闻模块
- 组合式表单模块

- 系统目录结构
- 网站导航结构
- DOM 的机制，一个 DOM 节点可以包含子节点，不管是父节点还是子节点都有添加、删除、遍历子节点的通用功能。

### 文件扫描

```js
/** 文件夹类 */
class Folder {
 constructor(name) {
  this.name = name
  this.files = []
 }
 add(file) {
  file.parent = this
  this.files.push(file)
 }
 scan() {
  for (let i = 0, file; (file = this.files[i++]); ) {
   file.scan()
  }
 }
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
 add() {
  throw new Error('文件下面不能再添加文件')
 }
 scan() {
  console.log('扫瞄文件名称：' + this.name)
 }
 remove() {
  if (this.parent === null) return

  for (let i = 0, file, files = this.parent.files; (file = files[i]); i++) {
   if (file === this) {
    files.splice(i, 1)
   }
  }
 }
}

// 一级目录
let folder = new Folder('前端学习')
// 二级目录
let subFolder1 = new Folder('JS学习')
let subFolder2 = new Folder('JQ学习')
// 文件
let file1 = new File('JS设计模式')
let file2 = new File('JQ实战')
let file3 = new File('前端性能')
// 添加文件
subFolder1.add(file1)
subFolder2.add(file2)
// 添加目录
folder.add(subFolder1)
folder.add(subFolder2)
folder.add(file3)
// 开始扫描
subFolder1.remove()
folder.scan()

```
