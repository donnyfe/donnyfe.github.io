# 参与者模式 participator

参与者 (participator): 在特定的作用域中执行给定的函数, 并将参数原封不动地传递。

## 应用场景

```js
// 事件绑定方法
A.event.on = function (dom, type, fn, data) {
  // w3c标准事件绑定
  if (dom.addEventListener) {
    dom.addEventListener(
      type,
      function (e) {
        // 在dom环境中调用fn,并传入事件对象与data数据参数
        fn.call(dom, e, data);
      },
      false
    );
  }
  // ie事件绑定
  // ……
};
//函数绑定 bind
function bind(fn, context) {
  // 闭包返回新函数
  return function () {
    // 对fn装饰并返回
    return fn.apply(context, arguments);
  };
}
// 测试对象
var demoobj = {
  title: "这是—个例子",
};
// 测试方法
function demoFn() {
  console.log(this.title);
}
// 让demoobj参与demoFn的执行
var bindFn = bind(demoFn, demoobj);
demoFn(); // undefined
bindFn(); // 这是—个例子
```
