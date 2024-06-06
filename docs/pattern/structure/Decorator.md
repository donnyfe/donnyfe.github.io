# 装饰者模式 Decorator

装饰者模式（Decorator）： 在不改变原对象的基础上，通过对其进行包装拓展（添加属性或者方法）使原有对象可以满足用户的更复杂需求。

装饰者模式是一种可以在不了解原有功能的基础上对功能拓展模式，这是对原有功能的一种增强与拓展。

当然同样对原有对象进行拓展的模式还有适配器模式，所不同的是适配器进行拓展很多时候是对对象内部结构的重组，因此了解其自身结构是必需的。

而装饰者对对象的拓展是一种良性拓展，不用了解其具体实现，只是在外部进行了一次封装拓展，这也是对原有功能完整性的一种保护。

这种模式特别适合我们引入的第三方UI组件，有些UI组件自己封装了很多功能，但是并没有暴露出接口，如果我们要添加功能，又不能直接修改他的源码，最好的方法就是这样使用装饰器模式来扩展，而且有了装饰工厂之后，我们还可以快速批量修改。

## 场景

- 第三方UI组件拓展功能
- input表单功能装饰器
- vue数组监听

## 示例

### input表单功能装饰器

```js
// 装饰者
var inputDecorator = function(inputId, fn) {
  // 获取事件源
  var input = document.getElementById(inputId);

  // 若事件源己经绑定事件
  if(typeof input.onclick === 'function') {
    // 缓存事件源原有回调函数
    var oldclickFn = input.onclick;
    // 为事件源定义新的事件
    input.onclick = function() {
      // 事件源原有回调函数
      oldclickFn();
      // 执行事件源新增回调函数
      fn();
    }
  } else {
    // 事件源未绑定事件，直接为事件源添加新增回调函数
    input.onclick = fn;
  }
  // To Do...
}

// 电话输入框功能装饰
decorator('tel_input', function() {
  document.getElementById('tel_demo_text').style.display = 'none';
});

// 姓名输入框功能装饰
decorator('name_input', function() {
  document.getElementById('name_demo_text').style.display = 'none';
});

// 地址输入框功能装饰
decorator('adress_input', function() {
  document.getElementById('adress_demo_text').style.display = 'none';
});
```

### vue数组监听

```js
// 先拿到原生数组的原型
var arrayProto = Array.prototype;    
// 用原生数组的原型创建一个新对象，免得污染原生数组
var arrObj = Object.create(arrayProto);     
// 需要扩展的方法，这里只写了两个，但是不止这两个
var methods = ['push', 'shift'];    

// 循环methods数组，扩展他们
methods.forEach(function(method) {
  // 用扩展的方法替换arrObj上的方法
  arrObj[method] = function() {
    // 先执行老方法
    var result = arrayProto[method].apply(this, arguments);    
    // 这个是Vue的方法，用来做响应式
    dep.notify();     
    return result;
  }
});

// 对于用户定义的数组，手动将它的原型指向扩展了的arrObj
var a = [1, 2, 3];
a.__proto__ = arrObj;
```
