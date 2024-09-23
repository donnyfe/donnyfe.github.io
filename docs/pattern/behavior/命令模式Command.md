# 命令模式 Command

命令模式（Command）: 将请求与实现解耦并封装成独立对象，从而使不同的请求对客户端的实现参数化。

命令模式是将执行的命令封装，解决命令的发起者与命令的执行者之间的耦合。每一条命令实质上是一个操作。命令的使用者不必要了解命令的执行者（命令对象）的命令接口是如何实现的、命令是如何接受的、命令是如何执行的。所有的命令都被存储在命令对象中。

优点：

- 解决命令使用者之间的耦合。
- 新的命令很容易加入到命令系统中，供使用者使用。
- 命令的使用具有一致性，多数的命令在一定程度上是简化操作方法的使用的。

缺点:

- 命令模式是对一些操作的封装，这就造成每执行一次操作都要调用一次命令对象，增加了系统的复杂度。

## 实例

- 创建DOM视图
- Canvas绘图

### 创建DOM视图

```js
let viewCommand = (function () {
 let templates = {
   // 图片结构模板
   productTpl: `<div>
      <img src="{{src}}"/>
      <p>{{text}}</p>
     </div>`,
   // 标题结构模板
   titleTpl: ` <div class="title">
      <div class="main">
       <h2>{{title}}</h2>
       <p>{{content}}</p>
      </div>
     </div>`,
  },
  // 格式化字符串缓存字符串
  html = ''

 // 格式化字符串 如:'<div>{{content}}</div>'用{content:'demo'}替换后可得到字符串:'<div>demo</div>'
 const formatString = function (str, obj) {
  return str.replace(/\{\{(\w+)\}\}/g, function (match, key) {
   return obj[key]
  })
 }

 // 方法集合
 let actions = {
  create: function (data, viewType) {
   let tpl = templates[viewType]
   // 解析数据 如果数据是—个数组
   if (data.length) {
    for (let i = 0, len = data.length; i < len; i++) {
     // 将格式化之后的字符串缓存到html中
     html += formatString(tpl, data[i])
    }
   } else {
    // 直接格式化字符串缓存到html中
    html += formatString(tpl, data)
   }
  },
  // 展示方法
  display: function (container, data, viewType) {
   if (data) {
    // 如果传入数据, 根据给定数据创建视图
    this.create(data, viewType)
   }
   document.getElementById(container).innerHTML = html
   // 展示后清空缓存的字符串
   html = ''
  },
 }

 // 命令执行器
 const excutor = function (msg) {
  // 解析命令，如果msg.param不是数组则将其转化为数组（apply方法要求第二个参数为数组）
  msg.param = Array.isArray(msg.param) ? msg.param : [msg.param]
  // actions内部调用的方法引用this，所以此处为保证作用域this执行,故传入actions
  actions[msg.command].apply(actions, msg.param)
 }

 return excutor
})()

// 模块标题数据
let titleData = { 
  title: '夏日里的—片温馨', 
  content: '暖暖的温情带给人们家的感受。' 
  },
 // 产品展示数据
 productData = [
  { src: '02.jpg', text: '绽放的桃花' },
  { src: '03.jpg', text: '阳光下的温馨' },
  { src: '04.jpg', text: '镜头前的绿色' },
 ]

viewCommand({
 command: 'create',
 param: [{ src: '01.jpg', text: '迎着朝阳的野菊花' }, 'productTpl'],
})

viewCommand({
 command: 'display',
 param: ['titleId', titleData, 'titleTpl'],
})

viewCommand({
 command: 'display',
 param: ['productId', productData, 'productTpl'],
})

```

### Canvas绘图

```js
// 实现对象
let canvasCommand = (function () {
 let canvas = document.getElementById('canvasId'),
  // canvas元素的上下文引用对象缓存在命令对象的内部
  ctx = canvas.getContext('2d')

 let actions = {
  // 填充色彩
  fillStyle: function (c) {
   ctx.fillStyle = c
  },
  // 填充矩形
  fillRect: function (x, y, width, height) {
   ctx.fillRect(x, y, width, height)
  },
  // 描边色彩
  strokeStyle: function (c) {
   ctx.strokeStyle = c
  },
  // 描边矩形
  strokeRect: function (x, y, width, height) {
   ctx.strokeRect(x, y, width, height)
  },
  // 填充字体
  fillText: function (text, x, y) {
   ctx.fillText(text, x, y)
  },
  // 开启路径
  beginPath: function () {
   ctx.beginPath()
  },
  // 移动画笔
  moveTo: function (x, y) {
   ctx.moveTo(x, y)
  },
  // 画笔连线
  lineTo: function (x, y) {
   ctx.lineTo(x, y)
  },
  // 绘制弧线
  arc: function (x, y, r, begin, end, dir) {
   ctx.arc(x, y, r, begin, end, dir)
  },
  // 填充
  fill: function () {
   ctx.fill()
   ctx.stroke()
  },
  // 描边
  stroke: function () {
   ctx.stroke()
  },
 }

 // 命令执行器
 const excutor = function (msg) {
  if (!msg) return
  // 如果命令是—个数组， 遍历执行多个命令
  if (msg.length) {
   for (let i = 0, len = msg.length; i < len; i++) {
    // arguments.callee(msg[i]) // TypeError: 'caller', 'callee', and 'arguments' properties may not be accessed on strict mode functions
    run(msg[i].command, msg[i].param)
   }
  } else {
   run(msg.command, msg.param)
  }

  function run(command, param) {
   // 如果msg.param不是—个数组，将其转化为数组，apply第二个参数要求格式
   let params = Array.isArray(param) ? param : [param]
   // actions内部调用的方法可能引用this，为保证作用域中this指向正确，故传入actions
   actions[command].apply(actions, params)
  }
 }

 return {
  excute: excutor,
 }
})()

canvasCommand.excute([
 // 着色
 { command: 'fillStyle', param: '#f00' },
 // 绘制矩形
 { command: 'fillRect', param: [20, 20, 50, 50] },
 // 填充文字
 { command: 'fillText', param: ['abc', 150, 150] },
 // 描边
 { command: 'beginPath', param: {} },
 { command: 'moveTo', param: [100, 100] },
 { command: 'lineTo', param: [120, 140] },
 { command: 'lineTo', param: [150, 140] },
 { command: 'stroke', param: {} },
])
```
