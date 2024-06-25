# 惰性模式 layier

惰性模式是一种拖延模式,由于对象的创建或者数据的计算会花费高昂的代价（如页面刚加载时无法辨别是该浏览器支持某个功能,此时创建对象是不够安全的）,因此页面之处会延迟对这一类对象的创建。

惰性模式又分为两种:

- 第一种是文件加载后立即执行对象方法来重定义对象。对于第一种方式,由于文件加载时执行,因此会占用一些资源。

- 第二种是当第一次使用方法对象时重定义对象。对于第二种方式由于在第一次使用时重定义对象,以致第一次执行时间增加。
  
有时候两种方式对资源的开销都是可接受的,因此到底使用哪种方式,要看具体需求而定。

## 应用场景

- 封装惰性事件监听器
- 创建XHR对象

### 封装惰性事件监听器

```js
// 加载即执行
// 添加绑定事件方法on
A.on = function (dom, type, fn) {
  // 如果支持addEventListener方法
  if (document.addEventListener) {
    // 返回新定义方法
    return function (dom, type, fn) {
      dom.addEventListener(type, fn, false);
    }
    // 如果支持attachEvent方法（IE）
  } else if (document.attachEvent) {
    // 返回新定义方法
    return function (dom, type, fn) {
      dom.attachEvent('on' + type, fn);
    }
    // 定义on方法
  } else {
    // 返回新定义方法
    return function (dom, type, fn) {
      dom['on' + type] = fn;
    }
  }
}();
// 惰性执行
// 添加绑定事件方法on
A.on = function (dom, type, fn) {
 // 如果支持addEventListener方法
 if (dom.addEventListener) {
  // 显示重定义on方法
  A.on = function (dom, type, fn) {
   dom.addEventListener(type, fn, false);
  }
  // 如果支持attachEvent方法（IE）
 } else if (dom.attachEvent) {
  // 显示重定义on方法
  A.on = function (dom, type, fn) {
   dom.attachEvent('on' + type, fn);
  }
  // 如果支持DoM0级事件绑定
 } else {
  // 显示重定义on方法
  A.on = function (dom, type, fn) {
   dom['on' + type] = fn;
  }
 }
 // 执行重定义on方法
 A.on(dom, type, fn);
};

A.on(document.body, 'click', function () {
 alert(11);
})
```

### 创建XHR对象

```js
// 创建XHR对象
function createXHR() {
 // 标准浏览器
 if (typeof XMLHttpRequest != "undefined") {
  return new XMLHttpRequest();
  // IE浏览器
 } else if (typeof ActiveXobject != "undefined") {
  if (typeof arguments.callee.activeXstring != "string") {
   var versions = ["MsXML2.XMLHttp.6.0", "MsXML2.XMLHttp.3.0", "MsXML2. XMLHttp"],
    i = 0,
    len = versions.length;
   //遍历并设置版本
   for (; i < len; i++) {
    try {
     new ActiveXobect(versions[i]);
     arguments.callee.activeXstring = versions[i];
     break;
    } catch (ex) {}
   }
  }
  return new ActiveXobect(arguments.callee.activeXstring);
  // 对不支持的浏览器抛出错误提示
 } else {
  throw new Error("您的浏览器并不支持Ajax.");
 }
}
// 第—种 加载时损失性能,但是第—次调用时不损失性能
var createXHR = (function () {
  if (typeof XMLHttpRequest != "undefined") {
    return function () {
      return new XMLHttpRequest();
    };
  } else if (typeof ActiveXobject != "undefined") {
    return function () {
      // 省略代码
    };
  } else {
    return function () {
      throw new Error("No XHR object available.");
    };
  }
})();

// 第二种 加载时不损失性能,但是第—次调用时损失性能
function createXHR() {
  if (typeof XMLHttpRequest != "undefined") {
    createXHR = function () {
      return new XMLHttpRequest();
    };
  } else if (typeof ActiveXobject != "undefined") {
    createXHR = function () {
      // 省略代码
    };
  } else {
    createXHR = function () {
      throw new Error("No XHR object available.");
    };
  }
  return createXHR();
}
```
