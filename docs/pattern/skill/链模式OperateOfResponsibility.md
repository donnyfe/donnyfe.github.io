# 链模式 Operate of Responsibility

链模式（Operate of Responsibility: 通过在对象方法中将当前对象返回，实现对同一个对象多个方法的链式调用。从而简化对该对象的多个方法的多次调用时，对该对象的多次引用。

JavaScript 中的链模式的核心思想就是通过在对象中的每个方法调用执行完毕后返回当前对象 this 来实现的。由于链模式使得代码紧凑简洁而高效，在工作中己经得到很广泛的应用。

## 实例

- jQuery 设计

### jQuery 设计

```js
// demo
A('div')
.css({
  height: '30px',
  border: '1px solid #000',
  'background-color': 'red'
})
.attr('class', 'demo')
.html('add demo text')
.on('click', function () {
  console.log('clicked');
});

// 对象拓展
A.extend = A.fn.extend = function () {
 // 拓展对象从第二个参数算起
 var i = 1,
  // 获取参数长度
  len = arguments.length,
  // 第—个参数为源对象
  target = arguments[0],
  // 拓展对象中属性
  j;
 // 如果只传—个参数
 if (i == len) {
  // 源对象为当前对象
  target = this;
  // i从0计数
  i--;
 }
 // 遍历参数中拓展对象
 for (; i < len; i++) {
  // 遍历拓展对象中的属性
  for (j in arguments[i]) {
   // 拓展源对象
   target[j] = arguments[i][j];
  }
 }
 // 返回源对象
 return target;
}
// 拓展—个对象
var demo = A.extend({
 first: 1
}, {
 second: 2
}, {
 third: 3
});
console.log(demo) // {firs: 1, secon: 2, thir: 3}

// 拓展A.fn方式—
A.extend(A.fn, {
 version: '1.0'
}); // 1.0
console.log(A('demo').version);

// 拓展A.fn方式二
A.fn.extend({
 getVersio: function () {
  return this.version
 }
})
console.log(A('demo').getVersion()); // 1.0

// 拓展A方式—
A.extend(A, {
 author: '张容铭'
});
console.log(A.author); //张容铭
// 拓展A方式二
A.extend({
 nickname: '雨夜清河'
});
console.log(A.nickname); //雨夜清河

A.fn.extend({
 // 添加事件
 on: (function () {
  // 标准浏览器DoM2级事件
  if (document.addEventListener) {
   return function (type, fn) {
    var i = this.length - 1;
    // 遍历所有元素添加事件
    for (; i >= 0; i--) {
     this[i].addEventListener(type, fn, false);
    }
    // 返回源对象
    return this;
   }
   // IE浏览器DoM2级事件
  } else if (document.attachEvent) {
   return function (type, fn) {
    var i = this.length - 1;
    for (; i >= 0; i--) {
     this[i].addEvent('on' + type, fn);
    }
    return this;
   }
   // 不支持DoM2级事件浏览器添加事件
  } else {
   return function (type, fn) {
    var i = this.length - 1;
    for (; i >= 0; i--) {
     this[i]['on' + type] = fn;
    }
    return this;
   }
  }
 })()

 A.extend({
  // 将'-'分割线转化为驼峰式，如:'border-color' -> 'bordercolor'
  camelcase: function (str) {
   return str.replace(/\-(\w)/g, function (all, letter) {
    return letter.toUppercase();
   });
  }
 });

 A.extend({
  // 设置css样式
  css: function () {
   var arg = arguments,
    len = arg.length;
   if (this.length < 1) {
    return this;
   }
   // 只有—个参数时
   if (len === 1) {
    // 如果为字符串则为获取第—个元素css样式
    if (typeof arg[0] === 'string') {
     // IE
     if (this[0].currentstyle) {
      return this[0].currentstyle[name];
     } else {
      return getcomputedstyle(this[0], false)[name];
     }
     // 为对象时则设置多个样式
    } else if (typeof arg[0] === 'object') {
     for (var i in arg[0]) { // 遍历每个样式
      for (var j = this.length - 1; j >= 0; j--) {
       // 调用拓展方法camelcase将'-'分割线转化为驼峰式
       this[j].style[A.camelcase(i)] = arg[0][i];
      }
     }
    }
    // 两个参数则设置—个样式
   } else if (len === 2) {
    for (var j = this.length - 1; j >= 0; j--) {
     this[j].style[A.camelcase(arg[0])] = arg[1];
    }
   }
   return this;
  }
 })

 A.fn.extend({
  // 设置属性
  attr: function () {
   var arg = arguments,
    len = arg.length;
   if (this.length < 1) {
    return this;
   }
   //如果—个参数
   if (len === 1) {
    // 为字符串则获取第—个元素属性
    if (typeof arg[0] === 'string') {
     return this[0].getAttribute(arg[0]);
     // 为对象设置每个元素的多个属性
    } else if (typeof arg[0] === 'object') {
     for (var i in arg[0]) { // 遍历属性
      for (var j = this.length - 1; j >= 0; j--) {
       this[j].setAttribute(i, arg[0][i]);
      }
     }
    }
    // 两个参数则设置每个元素单个属性
   } else if (len === 2) {
    for (var j = this.length - 1; j >= 0; j--) {
     this[j].setAttribute(arg[0], arg[1]);
    }
   }
   return this;
  }
 })

 A.fn.extend({
  // 获取或者设置元素的内容
  html: function () {
   var arg = arguments,
    len = arg.length;
   // 无参数则获取第—个元素的内容
   if (len === 0) {
    return this[0] && this[0].innerHTML;
    // —个参数则设置每—个元素的内容
   } else {
    for (var i = this.length - 1; i >= 0; i--) {
     this[i].innerHTML = arg[0];
    }
   }
   return this;
  }
 })


```
