# 模板方法模式 Template Method

模板方法模式（Template Method）： 父类中定义一组操作算法骨架，而将一些实现步骤延迟到子类中，使得子类可以不改变父类的算法结构的同时可重新定义算法中某些实现步骤。

模板方法的核心在于对方法的重用，它将核心方法封装在基类中，让子类继承基类的方法，实现基类方法的共享，达到方法共用。当然这种设计模式也将导致基类控制子类必须遵守某些法则。这是一种行为的约束。当然为了让行为的约束更可靠，基类中封装的方法通常是不变的算法，或者具有稳定的调用方式。

子类继承的方法亦是可以扩展的，这就要求对基类继承的方法进行重写。当然为了更好地实践，我们通常要控制这种拓展，这样才能让基类对子类有更稳健的束缚力。然而子类对自身私有行为的拓展还是很有必要的。

模板方法模式是一个基于继承的设计模式，它是里氏代换原则的体现。它的核心思路很简单，将一些抽象化的操作抽离到基类中，将一些可能变化的操作操作交给子类根据对应的业务实现，利用了多态的特性，从而实现代码复用。

## 实例

- 提示框设计
- 多类导航设计

### 提示框设计

```js
// 基本提示框
class Alert {
 constructor(data) {
  // 设有数据则返回，防止后面程序执行
  if (!data) return
  // 设置内容
  this.content = data.content
  // 创建提示框面板
  this.panel = document.createElement('div')
  // 创建提示内容组件
  this.contentNode = document.createElement('p')
  // 创建确定按钮组件
  this.confirmBtn = document.createElement('div')
  // 创建关闭按钮组件
  this.closeBtn = document.createElement('div')

  // 为提示框面板添加类
  this.panel.className = 'alert'
  // 为关闭按钮添加类
  this.closeBtn.className = 'alert-close'
  // 为确定按钮添加类
  this.confirmBtn.className = 'alert-confirm'
  // 为确定按钮添加文案
  this.confirmBtn.innerHTML = data.confirm || '确认'
  // 为提示内容添加文本
  this.contentNode.innerHTML = this.content
  // 点击确定按钮执行方法 如果data中有success方法则为success方法，否则为空函数
  this.success = data.success || (() => {})
  // 点击关闭按钮执行方法
  this.fail = data.fail || (() => {})
 }

 init() {
  // 生成提示框
  this.panel.appendChild(this.closeBtn)
  this.panel.appendChild(this.contentNode)
  this.panel.appendChild(this.confirmBtn)
  document.body.appendChild(this.panel)
  // 绑定事件
  this.bindEvent()
  // 显示提示框
  this.show()
 }
 bindEvent() {
  // 关闭按钮点击事件
  this.closeBtn.onclick = () => {
   // 执行关闭取消方法
   this.fail()
   // 隐藏弹层
   this.hide()
  }

  // 确定按钮点击事件
  this.confirmBtn.onclick = () => {
   // 执行关闭确认方法
   this.success()
   // 隐藏弹层
   this.hide()
  }
 }
 // 隐藏弹层方法
 hide() {
  this.panel.style.display = 'none'
 }
 // 显示弹层方法
 show() {
  this.panel.style.display = 'block'
 }
}

// 确认按钮右侧的提示框
class RightAlert extends Alert {
 constructor(data) {
  super(data)
  // 为确认按钮添加right类设置位置居右
  this.confirmBtn.className = this.confirmBtn.className + ' right'
 }
}

// 带有标题的弹出框
class TitleAlert extends Alert {
 constructor(data) {
  super(data)
  // 设置标题内容
  this.title = data.title
  // 创建标题组件
  this.titleNode = document.createElement('h3')
  // 标题组件中写入标题内容
  this.titleNode.innerHTML = this.title
 }
 init() {
  // 插入标题
  this.panel.insertBefore(this.titleNode, this.panel.firstchild)
  // 继承基本提示框init方法
  Alert.prototype.init.call(this)
 }
}

// 带有取消按钮的弹出框
class CancelAlert extends TitleAlert {
 constructor(data) {
  super(data)
  // 取消按钮文案
  this.cancel = data.cancel
  // 创建取消按钮
  this.cancelBtn = document.createElement('span')
  // 为取消按钮添加类
  this.cancelBtn.className = 'cancel'
  // 设置取消按钮内容
  this.cancelBtn.innerHTML = this.cancel || '取消'
 }
 init() {
  // 继承标题提示框创建方法
  TitleAlert.prototype.init.call(this)

  // 由于取消按钮要添加在末尾，所以在创建完其他组件后添加
  this.panel.appendChild(this.cancelBtn)
 }
 bindEvent() {
  // 标题提示框绑定事件方法继承
  TitleAlert.prototype.bindEvent.call(this)

  // 取消按钮绑定事件
  this.cancelBtn.onclick = () => {
   // 执行取消回调函数
   this.fail()
   // 隐藏弹层
   this.hide()
  }
 }
}

// // 基础提示框
// const alert = new Alert({
//  content: '内容: 基础提示框',
//  confirm: '确定',
//  success: () => {},
//  fail: () => {},
// })
// alert.init()

// // 右侧确认提示框
// const rightAlert = new RightAlert({
//  content: '内容: 右侧确认提示框',
//  confirm: '确定',
//  success: () => {
//   console.log('suc')
//  },
//  fail: () => {
//   console.log('fail')
//  },
// })
// rightAlert.init()

// // 含标题提示框
// const titleAlert = new TitleAlert({
//  title: '标题: 我是标题',
//  content: '内容: 含标题弹窗',
//  confirm: '确定',
//  success: () => {
//   console.log('suc')
//  },
//  fail: () => {
//   console.log('fail')
//  },
// })
// titleAlert.init()

// 可关闭弹窗
const cancelAlert = new CancelAlert({
 title: '标题: 关闭',
 content: '内容: 可关闭提示框',
 confirm: '确定',
 cancel: '关闭',
 success: () => {
  console.log('suc')
 },
 fail: () => {
  console.log('fail')
 },
})
cancelAlert.init()

```

### 多类导航设计

```js
const formatString = function (str, data) {
 return str.replace(/\{\{(\w+)\}\}/g, function (match, key) {
  return typeof data[key] === undefined ? '' : data[key]
 })
}
// 基础导航
class Nav {
 constructor(data) {
  // 基础导航样式模板
  let tpl = '<a href="{{href}}" title="{{title}}">{{name}}</a>'
  // 创建字符串
  this.html = ''

  for (let i = 0, len = data.length; i < len; i++) {
   this.html += formatString(tpl, data[i])
  }
  // 返回字符串数据
  return this.html
 }
}
// 带有消息提醒信息导航
class NumNav extends Nav {
 constructor(data) {
  super(data)
  // 消息提醒信息组件模板
  let tpl = '<b>{{num}}</b>'

  // 装饰数据
  for (let i = data.length - 1; i >= 0; i--) {
   data[i].name = data[i].name + formatString(tpl, data[i])
  }

  return new Nav(data)
 }
}
// 带有链接地址的导航
class LinkNav extends Nav {
 constructor(data) {
  super(data)
  // 链接地址模板
  let tpl = '<span>{{href}}</span>'

  // 装饰数据
  for (let i = data.length - 1; i >= 0; i--) {
   data[i].name += formatString(tpl, data[i])
  }
  return new Nav(data)
 }
}

// 获取导航容器
let navWrapper = document.getElementById('contentId')
let navData = [
 { href: 'http://www.baidu.com/', title: '百度—下，你就知道', name: '百度', num: '10' },
 { href: 'http://www.taobao.com/', title: '淘宝商城', name: '淘宝', num: '2' },
 { href: 'http://www.qq.com/', title: '腾讯首页', name: '腾讯', num: '3' },
]

// 用例
// const numNav = new NumNav(navData)
// navWrapper.innerHTML = numNav.html

const linkNav = new LinkNav(navData)
navWrapper.innerHTML = linkNav.html
```
