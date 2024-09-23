# 访问者模式 Visitor

访问者模式(Visitor): 针对于对象结构中的元素，定义在不改变该对象的前提下访问结构中元素的新方法。

访问者模式解决数据与数据的操作方法之间的耦合，将数据的操作方法独立于数据，使其可以自由化演变。因此访问者更适合于那些数据稳定，但是数据的操作方法易变的环境下。因此当操作环境改变时，可以自由修改操作方法以适应操作环境，而不用修改原数据，实现操作方法的拓展。同时对于同一个数据，它可以被多个访问对象所访问，这极大增加了操作数据的灵活性。

## 实例

```js
// 访问器
let Visitor = (function () {
 return {
  // 截取方法
  splice: function () {
   // splice方法参数，从原参数的第二个参数开始算起
   let args = Array.prototype.splice.call(arguments, 1)
   // 对第—个参数对象执行splice方法
   return Array.prototype.splice.apply(arguments[0], args)
  },
  // 追加数据方法
  push: function () {
   // 强化类数组对象，使他拥有length属性
   let len = arguments[0].length || 0
   // 添加的数据从原参数的第二个参数算起
   let args = this.splice(arguments, 1)
   // 校正length属性
   arguments[0].length = len + arguments.length - 1
   // 对第—个参数对象执行push方法
   return Array.prototype.push.apply(arguments[0], args)
  },
  // 弹出最后—次添加的元素
  pop: function () {
   // 对第—个参数对象执行pop方法
   return Array.prototype.pop.apply(arguments[0])
  },
 }
})()

let data = [1, 2, 3, 4, 5]
 Visitor.splice(data, 0, 1)
 console.log('截取: ', data) // [2, 3, 4, 5]

 let data2 = [1, 2, 3, 4, 5]
 Visitor.push(data2, 6)
 console.log('追加数据: ', data2) // [1, 2, 3, 4, 5, 6]

 let data3 = [1, 2, 3, 4, 5]
 Visitor.pop(data3)
 console.log('弹出数据: ', data3) //  [1, 2, 3, 4]
```
