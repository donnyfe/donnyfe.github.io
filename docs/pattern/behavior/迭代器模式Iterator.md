# 迭代器模式 Iterator

使用迭代器可以顺序地访问一个聚合对象中的每一个元素。

在实际开发中，迭代器极大简化了代码中的循环语句，使代码结构清晰紧凑，然而这些简化了的循环语句实质上隐形地移到了迭代器中。当然用迭代器去处理一个对象时，我们只需提供处理的方法，而不必去关心对象的内部结构，这也解决了对象的使用者与对象内部结构之间的耦合。当然迭代器的存在也提供了操作对象的一个统一接口。

## 实例

- 数组迭代器
- 对象迭代器
- 对象迭代取值器
- 对象迭代赋值器

### 数组迭代器

```js
// 数组迭代器
let eachArray = function (arr, fn) {
 var i = 0,
  len = arr.length - 1
 for (; i <= len; i++) {
  if (fn.call(arr[i], arr[i], i, arr) === false) {
   break
  }
 }
}

// 创建—个数组
let arr = [1, 2, 3, 4, 5]
eachArray(arr, function (item, idx, data) {
 console.log('eachArray: ', item, idx, data)
})
```

### 对象迭代器

```js
// 对象迭代器
let eachObject = function (obj, fn) {
 for (var i in obj) {
  if (fn.call(obj[i], i, obj[i], obj) === false) {
   break
  }
 }
}

var obj = {
 a: 1,
 b: 2,
 c: 3,
}
eachObject(obj, function (key, value, obj) {
 console.log('eachObject: ', key, value, obj)
})

```

### 对象迭代取值器 / 赋值器

```js
var config = {
 // 所有用户共有
 common: {},
 // 客户端数据
 client: {
  user: {
   username: '雨夜清河',
   uid: '123',
  },
 },
 // 服务器端数据
 server: {
  lang: {},
 },
}


// 对象迭代取值器
let objectGetter = function (obj, key) {
 if (!obj) return undefined
 let result = obj
 // 解析属性层次序列
 let keys = key.split('.')

 for (let i = 0, len = keys.length; i < len; i++) {
  let k = keys[i]
  // 如果第i层属性存在对应的值则迭代该属性值,否则返回未定义
  if (result[k] !== undefined) {
   result = result[k]
  } else {
   return undefined
  }
 }
 return result
}


// console.log('获取用户名数据: ', objectGetter(config, 'client.user'))
// console.log('获取本地语言数据: ', objectGetter(config, 'server.lang'))

// 对象迭代赋值器
let objectSetter = function (obj, key, value) {
 if (!obj) return false
 let result = obj
 let keys = key.split('.') // 解析属性层次序列

 for (let i = 0, len = keys.length - 1; i <= len; i++) {
  let k = keys[i]
  // 如果第i层属性对应的值不存在，则定义为对象
  if (result[k] === undefined) {
   result[k] = {}
  }
  // 如果第i层属性对应的值不是对象（object）的—个实例，则抛出错误
  if (!(result[k] instanceof Object)) {
   throw new Error('obj.' + keys.splice(0, i + 1).join('.') + 'is not object')
  }
  // 迭代该层属性值
  result = result[k]
  result[k] = value
 }
 // 返回设置成功的属性
 return result
}

// console.log('缓存添加体育新闻模块数据: ', objectSetter(config, 'client.module.news.sports', 'on'))

```

### DOM迭代器

```js
const DomIterator = function (tagName, containerId) {
 // 获取父容器，若container参数存在，并且可以获取该元素则获取，否则获取document
 let container = (containerId && document.getElementById(containerId)) || document,
  // 获取元素
  items = container.getElementsByTagName(tagName),
  // 获取元素长度
  length = items.length,
  //当前索引值，默认:0
  index = 0

 // 缓存源生数组splice方法
 let splice = [].splice

 return {
  // 获取第—个元素
  first: function () {
   index = 0 // 校正当前索引
   return items[index] // 获取第—个元素
  },
  // 获取最后—个元素
  last: function () {
   index = length - 1 // 校正当前索引
   return items[index] // 获取最后—个元素
  },
  // 获取前—个元素
  pre: function () {
   if (--index > 0) {
    return items[index] // 获取索引值对应的元素
   } else {
    index = 0 // 索引值为0
    return null // 返回空
   }
  },
  // 获取下一个元素
  next: function () {
   if (++index < length) {
    // 如果索引值小于长度
    return items[index] // 获取索引值对应的元素
   } else {
    index = length - 1 // 索引值为length - 1
    return null // 返回空
   }
  },
  // 获取某—个元素
  get: function (num) {
   // 如果num大于等于0再正向获取，否则逆向获取
   index = num >= 0 ? num % length : (num % length) + length
   return items[index]
  },
  // 对每—个元素执行某—个方法
  dealEach: function (fn) {
   // 第二个参数开始为回调函数中参数
   var args = splice.call(arguments, 1)
   // 遍历元素
   for (var i = 0; i < length; i++) {
    // 对元素执行回调函数
    fn.apply(items[i], args)
   }
  },
  // 对某—个元素执行某—个方法
  dealItem: function (num, fn) {
   // 对元素执行回调函数，注:1 第三个参数开始为回调函数中参数 2 通过 this.get 方法设置index索引值
   fn.apply(this.get(num), splice.call(arguments, 2))
  },
  // 排他方式处理某—个元素
  exclusive: function (num, allFn, numFn) {
   // 对所有元素执行回调函数
   this.dealEach(allFn)
   // 如果num类型为数组
   if (Array.isArray(num)) {
    for (var i = 0, len = num.length; i < len; i++) {
     // 分别处理数组中每—个元素
     this.dealItem(num[i], numFn)
    }
   } else {
    // 处理第num个元素
    this.dealItem(num, numFn)
   }
  },
 }
}

// 用例
/**
 * HTML：
 <ul id="container">
  <li></li>
  <li></li>
  <li></li>
  <li></li>
  <li></li>
 </ul>
 */

// 迭代器
// DomIterator('li').dealEach(
//  function (text, color) {
//   this.innerHTML = text
//   this.style.background = color
//  },
//  '背景变色',
//  '#dddddd'
// )

// DomIterator('li').exclusive(
//  [0, 1],
//  function () {
//   this.innerHTML = '被排除的'
//   this.style.background = 'green'
//  },
//  function () {
//   this.innerHTML = '选中的'
//   this.style.background = 'red'
//  }
// )

```
