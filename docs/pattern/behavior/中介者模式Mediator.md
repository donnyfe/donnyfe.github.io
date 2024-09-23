# 中介者模式 Mediator

中介者模式(Mediator): 通过中介者对象封装一系列对象之间的交互，使对象之间不再相互引用，降低他们之间的耦合。有时中介者对象也可改变对象之间的交互。

同观察者模式一样，中介者模式的主要业务也是通过模块间或者对象间的复杂通信，来解决模块间或对象间的耦合。对于中介者对象的本质是分装多个对象的交互，并且这些对象的交互一般都是在中介者内部实现的。

与外观模式的封装特性相比，中介者模式对多个对象交互地封装，且这些对象一般处于同一层面上，并且封装的交互在中介者内部，而外观模式封装的目的是为了提供更简单的易用接口，而不会添加其他功能。

与观察者模式相比，虽然两种模式都是通过消息传递实现对象间或模块间的解耦。观察者模式中的订阅者是双向的，既可以是消息的发布者，也可以是消息的订阅者。而在中介者模式中，订阅者是单向的，只能是消息的订阅者。而消息统一由中介者对象发布，所有的订阅者对象间接地被中介者管理。

## 实例

- 插件系统的通信机制

```js
//中介者对象
const Mediator = (function () {
 // 消息对象
 const msg = {}

 /**
  * 订阅消息方法
  * @param type   消息名称
  * @param action  消息回调函数
  */
 const register = function (type, action) {
  if (!msg[type]) {
   // 不存在 则建立该消息容器
   msg[type] = []
  }
  // 存入新消息回调函数
  msg[type].push(action)
 }

 /**
  * 发布消息方法
  * @param type 消息名称
  */
 const send = function (type) {
  // 如果该消息己经被订阅
  if (msg[type]) {
   // 遍历己存储的消息回调函数并逐一执行
   for (var i = 0, len = msg[type].length; i < len; i++) {
    msg[type][i] && msg[type][i]()
   }
  }
 }

 return {
  register,
  send,
 }
})()

/**
 * 显隐导航小组件
 * @param selectorId 模块
 * @param tag 处理的标签（ 消息提醒b， 网址span）
 * @param show 显示还是隐藏
 */
const setNav = function (selectorId, tagName, show) {
 // 获取导航模块
 let el = document.getElementById(selectorId),
  tag = el.getElementsByTagName(tagName),
  visible = !show || show === 'hide' ? 'hidden' : 'visible'
 // 隐藏标签
 for (let i = tag.length - 1; i >= 0; i--) {
  tag.style.visibility = visible
 }
}

// 订阅层模块
const registerModule = (function () {
 /**
  * 用户收藏导航模块
  */
 // 订阅隐藏用户收藏导航消息提醒消息
 Mediator.register('hideNavNum', function () {
  setNav('collectionNav', 'b', false)
 })
 // 订阅显示用户收藏导航消息提醒消息
 Mediator.register('showNavNum', function () {
  setNav('collectionNav', 'b', true)
 })
 // 订阅隐藏用户收藏导航网址消息
 Mediator.register('hideNavUrl', function () {
  setNav('collectionNav', 'span', false)
 })
 // 订阅显示用户收藏导航网址消息
 Mediator.register('showNavUrl', function () {
  setNav('collectionNav', 'span', true)
 })

 /**
  * 推荐用户导航
  */
 // 订阅隐藏推荐用户导航消息提醒消息
 Mediator.register('hideNavNum', function () {
  setNav('recommendNav', 'b', false)
 })
 // 订阅显示推荐用户导航消息提醒消息
 Mediator.register('showNavNum', function () {
  setNav('recommendNav', 'b', true)
 })

 /**
  * 最近常用导航
  */
 // 订阅隐藏最近常用导航网址消息
 Mediator.register('hideNavUrl', function () {
  setNav('recentlyNav', 'span', 'hide')
 })
 // 订阅显示最近常用导航网址消息
 Mediator.register('showNavUrl', function () {
  setNav('recentlyNav', 'span', 'show')
 })
})()

// 设置层模块
const settingModule = (function () {
  // 消息提醒选框
 let hideNum = document.getElementById('hideNum'), 
   // 网址选框
  hideUrl = document.getElementById('hideUrl')

 // 消息提醒选框事件
 hideNum.onchange = function () {
  if (hideNum.checked) {
   // 中介者发布隐藏消息提醒功能消息
   Mediator.send('hideNavNum')
  } else {
   // 中介者发布显示消息提醒功能消息
   Mediator.send('showNavNum')
  }
 }
 // 网址选框事件
 hideUrl.onchange = function () {
  if (hideUrl.checked) {
   // 中介者发布隐藏所有网址功能消息
   Mediator.send('hideNavUrl')
  } else {
   // 中介者发布显示所有网址功能消息
   Mediator.send('showNavUrl')
  }
 }
```
