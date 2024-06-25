# 迭代器模式 Iterator

通过迭代器我们可以顺序地访问一个聚合对象中的每一个元素。在开发中，迭代器极大简化了代码中的循环语句，使代码结构清晰紧凑，然而这些简化了的循环语句实质上隐形地移到了迭代器中。当然用迭代器去处理一个对象时，我们只需提供处理的方法，而不必去关心对象的内部结构，这也解决了对象的使用者与对象内部结构之间的耦合。当然迭代器的存在也为我们提供了操作对象的一个统一接口。

## 应用场景

```js
// 迭代器
var Iterator = function (items, container) {
 // 获取父容器，若container参数存在，并且可以获取该元素则获取，否则获取document
 var container = container && document.getElementById(container) || document,
  // 获取元素
  items = container.getElementsByTagName(items),
  // 获取元素长度
  length = items.length,
  //当前索引值，默认:0
  index = 0;
 // 缓存源生数组splice方法
 var splice = [].splice;
 return {
  // 获取第—个元素
  first: function () {
   index = 0; // 校正当前索引
   return items[index]; // 获取第—个元素
  },
  // 获取最后—个元素
  second: function () {
   index = length - 1; // 校正当前索引
   return items[index]; // 获取最后—个元素
  },
  // 获取前—个元素
  pre: function () {
   if (--index > 0) { // 如果索引值大于0
    return items[index]; // 获取索引值对应的元素
   } else {
    index = 0; // 索引值为0
    return null; // 返回空
   }
  },
  // 获取后—个元素
  next: function () {
   if (++index < length) { // 如果索引值小于长度
    return items[index]; // 获取索引值对应的元素
   } else {
    index = length - 1; // 索引值为length - 1
    return null; // 返回空
   }
  },
  // 获取某—个元素
  get: function (num) {
   // 如果num大于等于0再获取正向获取，否则逆向获取
   index = num >= 0 ? num % length : num % length + length;
   // 返回对应元素
   return items[index];
  },
  // 对每—个元素执行某—个方法
  dealEach: function (fn) {
   // 第二个参数开始为回调函数中参数
   var args = splice.call(arguments, 1);
   // 遍历元素
   for (var i = 0; i < length; i++) {
    // 对元素执行回调函数
    fn.apply(items[i], args);
   }
  },
  // 对某—个元素执行某—个方法
  dealItem: function (num, fn) {
   // 对元素执行回调函数，注:1 第三个参数开始为回调函数中参数 2 通过 thiss.get 方法设置index索引值
   fn.apply(this.get(num), splice.call(arguments, 2))
  },
  // 排他方式处理某—个元素
  exclusive: function (num, allFn, numFn) {
   // 对所有元素执行回调函数
   this.dealEach(allFn);
   // 如果num类型为数组
   if (object.prototype.tostring.call(num) === "[object Array]") {
    // 遍历num数组
    for (var i = 0, len = num.length; i < len; i++) {
     // 分别处理数组中每—个元素
     this.dealItem(num[i], numFn);
    }
   } else {
    // 处理第num个元素
    this.dealItem(num, numFn);
   }
  }
 }
}
// 数组迭代器
var eachArray = function (arr, fn) {
 var i = 0,
  len = arr.length;
 // 遍历数组
 for (; i < len; i++) {
  // 依次执行回调函数，注意回调函数中传入的参数第—个为索引，第二个为该索引对应的值
  if (fn.call(arr[i], i, arr[i]) === false) {
   break;
  }
 }
}
// 创建—个数组
// for(var arr = [], i = 0; i < 5; arr[i++] = i);
eachArray(arr, function (i, data) {
 console.log(i, data);
});
// 对象迭代器
var eachobject = function (obj, fn) {
 // 遍历对象中的每—个属性
 for (var i in obj) {
  // —次执行回调函数，注意回调函数中传入的参数第—
  个为索引， 第二个为该索引对应的值
  if (fn.call(arr[i], i, arr[i]) === false) {
   break;
  }
 }
}
var obj = {
 a: 23,
 b: 56,
 c: 67
}
eachobject(obj, function (i, data) {
 console.log(i, data);
});
// 测试结果
// a 23
// b 56
// c 67
// 同步变量
var A = {
 // 所有用户共有
 common: {},
 // 客户端数据
 client: {
  user: {
   username: '雨夜清河',
   uid: '123'
  }
 },
 // 服务器端数据
 server: {}
};
// 同步变量迭代取值器
AGetter = function (key) {
 // 如果不存在A则返回未定义
 if (!A)
  return undefined;
 var result = A; // 获取同步变量A对象
 key = key.split('.'); // 解析属性层次序列
 // 迭代同步变量A对象属性
 for (var i = 0, len = key.length; i < len; i++) {
  // 如果第i层属性存在对应的值则迭代该属性值
  if (result[key[i]] !== undefined) {
   result = result[key[i]];
   // 如果不存在则返回未定义
  } else {
   return undefined;
  }
 }
 // 返回获取的结果
 return result;
}
// 获取用户名数据
console.log(AGetter('client.user.username')); // 雨夜清河
//获取本地语言数据
console.log(AGetter('server.lang.local')); // undefined
// “有时在交互中会修改或者增加一些同步变量属性数据，比如我们缓存用户在主页中添加体育新闻模块这一动作数据，我们可以通过同步变量迭代赋值器来实现。”
// 同步变量迭代赋值器
Asetter = function (key, val) {
 // 如果不存在A则返回未定义
 if (!A)
  return false;
 var result = A; // 获取同步变量A对象
 key = key.split('.'); // 解析属性层次序列
 // 迭代同步变量A对象属性
 for (var i = 0, len = key.length; i < len - 1; i++) {
  // 如果第i层属性对应的值不存在，则定义为对象
  if (result[key[i]] === undefined) {
   result[key[i]] = {};
  }
  // 如果第i层属性对应的值不是对象（object）的—个实例，则抛出错误
  if (!(result[key[i]] instanceof object)) {
   throw new Error('A.' + key.splice(0, i + 1).join('.') + 'is not object');
   return false;
  }
  // 迭代该层属性值
  result = result[key[i]];
 }
 // 返回设置成功的属
 return result[key[i]] = val;
}
// 缓存添加体育新闻模块数据
console.log(Asetter('client.module.news.sports', 'on'))
// 分支循环嵌套问题
window.onload = function () {
 var canvas = document.getElementsByTagName['canvas'](0), // 获取画布
  img = document.images[0], // 获取图片
  width = (canvas.width = img.width* 2) / 2, // 获取并设置宽度
  height = canvas.height = img.height, // 获取并设置高度
  ctx = canvas.getcontext('2d'); // 获取渲染上下文
 ctx.drawImage(img, 0, 0); // 绘制图片
 // 绘制特效图片
 function dealImage() {}
 // 为图片添加特效
 dealImage('gray', 0, 0, width, height, 255);
 dealImage('gray', 100, 50, 300, 200, 100);
 dealImage('gray', 150, 100, 200, 100, 255);
}
/***

* 绘制特效图片
* param t   特效类型
* param x   x坐标
* param y   y坐标
* param w   宽度
* param h   高度
* param a   透明度
 ****/
function dealImage(t, x, y, w, h, a) {
 // 获取画布图片数据
 var canvasData = ctx.getImageData(x, y, w, h);
 // 获取像素数据
 var data = canvasData.data;
 // 遍历每组像素数据（4个数据表示—个像素点数据，分别代表红色、绿色、蓝色、透明度）
 for (var i = 0, len = data.length; i < len; i += 4) {
  switch (t) {
   // 红色滤镜 将绿色与蓝色取值为0
   case 'red':
   data[i + 1] = 0;
   data[i + 2] = 0;
   data[i + 3] = a;
   break;
   // 绿色滤镜 将红色和蓝色取值为0
   case 'green':
   data[i] = 0;
   data[i + 2] = 0;
   data[i + 3] = a;
   break;
   // 蓝色滤镜 将红色和绿色取值为0
   case 'blue':
   data[i] = 0;
   data[i + 1] = 0;
   data[i + 3] = a;
   break;
   // 平均值灰色滤镜 取三色平均值
   case 'gray':
   var num = parseInt((data[i] + data[i + 1] + data[i + 2]) / 3);
   data[i] = num;
   data[i + 1] = num;
   data[i + 2] = num;
   data[i + 3] = a;
   break;
   // 其他方案
  }
 }

 function dealImage(t, x, y, w, h, a) {
  var canvasData = ctx.getImageData(x, y, w, h),
   data = canvasData.data;
  // 状态模式封装算法
  var Deal = function () {
   var method = {
    // 默认类型——平均灰度特效
    'default': function (i) {
     return method['gray'](i);
    },
    // 红色特效
    'red': function (i) {
     data[i + 1] = 0;
     data[i + 2] = 0;
     data[i + 3] = a;
    },
    // 平均灰度特效
    'gray': function (i) {
     // 将红、绿、蓝色取平均值
     data[i] = data[i + 1] = parseInt(data[i + 2] = (data[i] + data[i +
      1] + data[i + 2]) / 3);
     data[i + 3] = a;
    }
   };
   // 主函数，通过给定类型返回对应滤镜算法
   return function (type) {
    return method[type] || method['default'];
   }
  }();
  // 迭代器处理数据
  function eachData(fn) {
   for (var i = 0, len = data.length; i < len; i += 4) {
    // 处理—组像素数据
    fn(i);
    data[i + 3] = a;
   }
  };
  // 主函数，通过给定类型返回对应滤镜算法
  return function (type) {
   return method[type] || method['default'];
  }
 }();
 // 迭代器处理数据
 function eachData(fn) {
  for (var i = 0, len = data.length; i < len; i += 4) {
   // 处理—组像素数据
   fn(i);
  }
 }
 // 处理数据
 eachData(Deal(t));
 ctx.putImageData(canvasData, width + x, y);
}
```
