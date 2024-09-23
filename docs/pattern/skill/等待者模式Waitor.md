# 等待者模式 Waiter

等待者模式（waiter: 通过对多个异步进程监听,来触发未来发生的动作。

等待者对象不用实时监听异步逻辑的完成,它只需要对注册监听的异步逻辑发生状态改变时（请求成功或者请求失败）对所有异步逻辑的状态做一次确认迭代。

等待者模式意在处理耗时比较长的操作,比如 canvas 中遍历并操作一张大图片中的每一个像素点、定时器操作、异步请求等。等待者模式为我们提供了一个抽象的非阻塞的解决方案,通过创建 Primise 对象,对耗时逻辑的未来状态变化返回一个响应,通过在等待者对象内部捕获这些响应信息,为耗时较长的操作提供了回调方案,使我们可以捕获耗时操作完成时或中断时的状态并执行相应的回调方案。

## 实例

对于等待者对象, 其内部定义了三个数组,分别是监控对象容器,以及成功与失败回调函数容器:一个类-监控对象,该对象有两个属性,即监控解决成功状态与监控解决失败状态,两个方法,解决成功方法与解决失败方法:一个私有方法\_exec 来处理成功失败回调函数的方法:3 个共有方法接口:when 方法监控异步逻辑,done 方法添加成功回调函数, fail 方法添加失败回调函数。”小铭喘口气,歇了一下继续说,“等待者对象内部的属性我们己经定义好了,下面我们一一实现这些方法吧,首先我们还是完成监控对象类的原型方法 resolve 和 reject。

```js
// 等待对象
var Waiter = function () {
 // 注册了的等待对象容器
 var dfd = [],
  // 成功回调方法容器
  doneArr = [],
  // 失败回调方法容器
  failArr = [],
  // 缓存Array方法slice
  slice = Array.prototype.slice,
  // 保存当前等待者对象
  that = this;
 // 监控对象类
 var Primise = function () {
  // 监控对象是否解决成功状态
  this.resolved = false;
  // 监控对象是否解决失败状态
  this.rejected = false;
 }
 // 监控对象类原型方法
 Primise.prototype = {
  // 解决成功
  resolve: function () {},
  // 解决失败
  reject: function () {}
 }
 // 创建监控对象
 that.Deferred = function () {
  return new Primise();
 }
 // 回调执行方法
function_exec(arr) {}
 // 监控异步方法 参数:监控对象
 that.when = function () {};
 // 解决成功回调函数添加方法
 that.done = function () {};
 // 解决失败回调函数添加方法
 that.fail = function () {}
}
// 首先他们都是因异步逻辑状态的改变而执行相应操作的,不同的是resolve方法是要执行成功回调函数,所以要对所有被监控的异步逻辑进行状态校验。而reject方法是要执行失败回调函数,所以只要有一个被监控的异步逻辑状态改变成失败状态,就要执行失败回调函数。
// 监控对象原型方法
Primise.prototype = {
 // 解决成功
 resolve: function () {
  // 设置当前监控对象解决成功
  this.resolved = true;
  // 如果设有监控对象则取消执行
  if (!dfd.length)
   return;
  // 遍历所有注册了的监控对象
  for (var i = dfd.length - 1; i >= 0; i--) {
   // 如果有任意—个监控对象设有被解决或者解决失败则返回
   if (dfd[i] && !dfd[i].resolved || dfd[i].rejected) {
    return;
   }
   // 清除监控对象
   dfd.splice(i, 1);
  }
  // 执行解决成功回调方法
  _exec(doneArr);
 },
 // 解决失败
 reject: function () {
  // 设置当前监控对象解决失败
  this.rejected = true;
  // 如果设有监控对象则取消执行
  if (!dfd.length)
   return;
  // 清除所有监控对象
  dfd.splice(0);
  // 执行解决成功回调方法
  _exec(failArr);
 }
}
// 回调执行方法
function _exec(arr) {
 var i = 0,
  len = arr.length;
 // 遍历回调数组执行回调
 for (; i < len; i++) {
  try {
   // 执行回调函数
   arr[i] && arr[i]();
  } catch (e) {}
 }
}
// 等待者对象还定义了三个共有接口方法when、done和fail,对于when方法是要监测己注册过的监控对象的异步逻辑（请求:ajax请求等:方法:setTimeout方法等）,所以when方法就要将监测对象放入监测对象容器中,当然还要判断监测对象是否存在、是否解决、是否是监控对象类的实例。最后还要返回该等待对象便于链式调用。
// 监控异步方法 参数:监控对象
that.when = function () {
 // 设置监控对象
 dfd = slice.call(arguments);
 // 获取监控对象数组长度
 var i = dfd.length;
 // 向前遍历监控对象,最后—个监控对象的索引值为length-1
 for (--i; i >= 0; i--) {
  // 如果不存在监控对象,或者监控对象己经解决,或者不是监控对象
  if (!dfd[i] || dfd[i].resolved || dfd[i].rejected || !dfd[i] instanceof Primise) {
   // 清理内存 清除当前监控对象
   dfd.splice(i, 1);
  }
 }
 // 返回等待者对象
 return that;
};
// 解决成功回调函数添加方法
that.done = function () {
 // 向成功回调函数容器中添加回调方法
 doneArr = doneArr.concat(slice.call(arguments));
 // 返回等待者对象
 return that;
};
// 解决失败回调函数添加方法
that.fail = function () {
 // 向失败回调函数容器中添加回调方法
 failArr = failArr.concat(slice.call(arguments));
 // 返回等待者对象
 return that;
}
var waiter = new Waiter();
// 第—个彩蛋,5秒后停止
var first = function () {
 // 创建监听对象
 var dtd = waiter.Deferred();
 setTimeout(function () {
  console.log('first finish');
  // 发布解决成功消息
  dtd.resolve();
 }, 5000);
 // 返回监听对象
 return dtd;
}();
// 第二个彩蛋,10秒后停止
var second = function () {
 // 创建监听对象
 var dtd = waiter.Deferred();
 setTimeout(function () {
  console.log('second finish');
  // 发布解决成功消息
  dtd.resolve();
 }, 10000);
 // 返回监听对象
 return dtd;
}();

waiter
 // 监听两个彩蛋
 .when(first, second)
 // 添加成功回调函数
 .done(function () {
  console.log('success');
 }, function () {
  console.log('success again')
 })
 // 添加失败回调函数
 .fail(function () {
  console.log('fail');
 });
// 输出结果
// first
// second
// success
// success again

var first = function () {
 var dtd = waiter.Deferred();
 setTimeout(function () {
  console.log('first finish');
  // 发布解决失败消息
  dtd.reject();
 }, 5000);
 return dtd;
}();
// 输出结果
// first
// fail
// second finish
// 封装get请求
var ajaxGet = function (url, success, fail) {
 var xhr = new XMLHttpRequest();
 // 创建检测对象
 var dtd = waiter.Deferred();
 xhr.onload = function (event) {
  // 请求成功
  if ((xhr.status >= 200 && xhr.status < 300) || xhr.status == 304) {
   success && success()
   dtd.resolve();
   // 请求失败
  } else {
   dtd.reject();
   fail && fail();
  }
 };
 xhr.open("get", url, true);
 xhr.send(null);
};

// 长轮询
(function getAjaxData() {
 // 保存当前函数
 var fn = arguments.callee;
 setTimeout(function () {
  $.get('./test.php', function () {
   console.log('轮询—次');
   // 再—次执行轮询
   fn();
  })
 }, 5000)
})();
```
