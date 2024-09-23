# 观察者模式 Observer

观察者模式最主要的作用是解决类或对象之间的耦合，解耦两个相互依赖的对象，使其依赖于观察者的消息机制。

这样对于任意一个订阅者对象来说，其他订阅者对象的改变不会影响到自身。对于每一个订阅者来说，其自身既可以是消息的发出者也可以是消息的执行者，这都依赖于调用观察者对象的三种方法（订阅消息，注销消息，发布消息）中的任一种。

团队开发中，尤其是大型项目的模块化开发中，一位工程师很难做到熟知项目中的每个模块，此时为完成一个涉及多模块调用的需求，观察者模式的优势就显而易见了，模块间的信息传递不必要相互引用其他模块，只需要通过观察者模式注册或者发布消息即可。通过观察者模式，工程师间对功能的开发只需要按照给定的消息格式开发各自功能即可，而不必去担忧他人的模块。

## 具体实现

```js
class Observer {
 constructor() {
  // 一个对象存放所有的消息订阅，key为消息类型，value为该消息对应的动作，结构为{ "event1": [cb1, cb2] }
  this.events = {}
 }

 register(event, fn) {
  if (!this.events[event]) {
   // 初始动作队列
   this.events[event] = []
  }
  // 如果有人订阅过了，这个键已经存在，就往里面加就好了
  this.events[event].push(fn)
 }

 // 取出所有订阅者的回调执行
 send(event, ...args) {
  const events = this.events[event]

  if (events && events.length) {
   events.forEach((fn) => {
    fn.call(this, ...args)
   })
  }
 }

 // 删除某个订阅，保留其他订阅
 remove(event, fn) {
  const events = this.events[event]

  if (events && events.length) {
   this.events[event] = this.events[event].filter((cb) => cb !== fn)
  }
 }
}

// 使用的时候
const observer = new Observer()
// 注册事件
observer.register('event1', () => {})
// 发布事件
observer.send('event1')
```

## 实例
