# 装饰者模式 Decorator

**装饰者模式（Decorator）： 在不改变原对象的基础上，通过对其进行包装拓展（添加属性或者方法）使原有对象可以满足用户的更复杂需求。**

装饰者模式是一种可以在不了解原有功能的基础上对功能拓展模式，这是对原有功能的一种增强与拓展。

当然同样对原有对象进行拓展的模式还有适配器模式，所不同的是适配器进行拓展很多时候是对对象内部结构的重组，因此了解其自身结构是必需的。

而装饰者对对象的拓展是一种良性拓展，不用了解其具体实现，只是在外部进行了一次封装拓展，这也是对原有功能完整性的一种保护。

在实际项目中，凡是你想增强或者削弱一个函数提供的能力的时候，都可以使用装饰模式。
在编写装饰模式的代码的时候，有两三种编码思路，一种是利用闭包编写高阶函数，这种场景是任何函数都可以，没有什么限制，但是写法并不是特别优雅。

另外一种方式是利用 ES6 提供的装饰器语法，但是这个有使用的条件限制，必须是基于类的代码才能使用装饰器的语法，在目前前端的开发中，基本上都是函数式的开发思想，所以这种写法的使用场景较少，不过在 Nodejs 开发中，大量的使用 OOP 思想进行开发，比如 NestJS，这种业务场景下使用装饰器实现要比高阶函数好，写法上看起来更加的优雅。

最后就是给原型上追加 AOP 函数的实现方式，在实际开发中不推荐，比如某些团队明确禁止在原型上扩展内容，因为这种操作可能带来一些潜在的隐患。

## 实例

- 前置/后置执行函数
- input 表单功能装饰器
- vue 数组监听
- 日志装饰器
- 节流/防抖装饰器
- Nest.js
- 请求防抖
- 点击防抖

### 前置/后置执行函数

```js
/**
 * 增加前置执行的函数
 */
Function.prototype.beforeExec = function (fn) {
  const _this = this;
  return function wrapper() {
    fn.apply(this, arguments);
    return _this.apply(this, arguments);
  };
};
/**
 * 增加后置执行的函数
 */
Function.prototype.afterExec = function (fn) {
  const _this = this;
  return function wrapper() {
    const response = _this.apply(this, arguments);
    fn.apply(this, arguments);
    return response;
  };
};

// use
function onLoad() {
  console.log("我想处理一些业务逻辑");
}
// 不需要担心覆盖其它开发者增加的onload事件
window.onload =
  typeof window.onload === "function"
    ? window.onload.beforeExec(onLoad)
    : onLoad;
```

### input 表单功能装饰器

```js
// 装饰者
let decorator = function (inputId, fn) {
  // 获取事件源
  let input = document.getElementById(inputId);

  // 若事件源己经绑定事件
  if (typeof input.onclick === "function") {
    // 缓存事件源原有回调函数
    let oldclickFn = input.onclick;
    // 为事件源定义新的事件
    input.onclick = function () {
      // 事件源原有回调函数
      oldclickFn();
      // 执行事件源新增回调函数
      fn();
    };
  } else {
    // 事件源未绑定事件，直接为事件源添加新增回调函数
    input.onclick = fn;
  }
  // To Do...
};

// 电话输入框功能装饰
decorator("tel_input", function () {
  document.getElementById("tel_demo_text").style.display = "none";
});

// 姓名输入框功能装饰
decorator("name_input", function () {
  document.getElementById("name_demo_text").style.display = "none";
});

// 地址输入框功能装饰
decorator("adress_input", function () {
  document.getElementById("adress_demo_text").style.display = "none";
});
```

### vue 数组监听

```js
// 先拿到原生数组的原型
let arrayProto = Array.prototype;
// 用原生数组的原型创建一个新对象，免得污染原生数组
let arrObj = Object.create(arrayProto);
// 需要扩展的方法，这里只写了两个，但是不止这两个
let methods = ["push", "shift"];

// 循环methods数组，扩展他们
methods.forEach(function (method) {
  // 用扩展的方法替换arrObj上的方法
  arrObj[method] = function () {
    // 先执行老方法
    let result = arrayProto[method].apply(this, arguments);
    // 这个是Vue的方法，用来做响应式
    dep.notify();
    return result;
  };
});

// 对于用户定义的数组，手动将它的原型指向扩展了的arrObj
let a = [1, 2, 3];
a.__proto__ = arrObj;
```

### axios 请求拓展 loading

```js
import axios from "axios";
import Vue from "vue";
/**
 * 为请求注入loading
 * @param {Function} fn 请求后端的函数
 * @param {String} msg loading提示信息
 * @returns
 */
function decorate(fn, msg = "") {
  return function enhance() {
    Vue.prototype.$loading.show(msg);
    const result = fn.apply(this, arguments);
    if (result && typeof result.then === "function") {
      return result
        .then((resp) => {
          Vue.prototype.$loading.hide();
          return resp;
        })
        .catch(() => {
          Vue.prototype.$loading.hide();
        });
    }
    return result;
  };
}

/**
 * 获取活动配置
 */
export const getAppInfo = decorate(function () {
  return axios("/api/y2023/index");
});
```

### 日志装饰器

```js
function log(target: Object, name: string, descriptor: PropertyDescriptor) {
  var oldValue = descriptor.value;
  descriptor.value = function () {
    console.log(`Calling ${name} with`, arguments);
    return oldValue.apply(this, arguments);
  };
  return descriptor;
}

class MyClass {
  @log
  handleClick() {
    console.log("用户点击了按钮");
  }
}
```

### 节流/防抖装饰器

```js
/**
 * 防抖装饰函数
 * @param delay 延迟的时间
 * @returns
 */
function debounce(delay: number): MethodDecorator {
  return function (
    target: any,
    propertyKey: string | symbol,
    descriptor: PropertyDescriptor
  ): PropertyDescriptor {
    const originalMethod = descriptor.value;
    let timerId: NodeJS.Timeout | null = null;

    descriptor.value = function (...args: any[]) {
      if (timerId) {
        clearTimeout(timerId);
      }
      timerId = setTimeout(() => originalMethod.apply(this, args), delay);
    };

    return descriptor;
  };
}

class MyClass {
  @debounce(500)
  myMethod() {
    console.log("Debounced method called");
  }
}
```

### 请求防抖

```js
let hasExecuteFn = false;

type Resolve = (value: unknown) => void;

type Reject = (reason?: any) => void;

type Executor = "resolve" | "reject";

const queue: Array<{
  resolve: Resolve;
  reject: Reject;
}> = [];

function flushQueue(exec: Executor, val: unknown) {
  while (queue.length) {
    const node = queue.shift();
    const executor = node![exec];
    executor(val);
  }
}

export function singlePromise<T extends unknown[], R>(fn: (...args: T) => R, ctx?: unknown): (...args: T) => Promise<R> {
  return function decorate(...args: T) {
    return new Promise((resolve, reject) => {
      if (hasExecuteFn) {
        queue.push({ resolve: resolve as Resolve, reject });
      } else {
        // @ts-ignore
        const p = fn.apply(ctx || this, args);
        hasExecuteFn = true;
        Promise.resolve(p)
          .then((res) => {
            hasExecuteFn = false;
            resolve(res);
            flushQueue("resolve", res);
          })
          .catch((err) => {
            hasExecuteFn = false;
            reject(err);
            flushQueue("reject", err);
          });
      }
    });
  };
}

```

### 点击防抖

```js
export function fastClickPrevent<T extends unknown[], R>(
  fn: (...args: T) => R,
  ctx?: unknown
): (...args: T) => Promise<R> {
  let prevent = false;
  return function decorate(...args: T) {
    if (prevent) {
      return Promise.resolve(null as R);
    }
    return new Promise((resolve, reject) => {
      // @ts-ignore
      const p = fn.apply(ctx || this, args);
      prevent = true;
      Promise.resolve(p)
        .then((res) => {
          prevent = false;
          resolve(res);
        })
        .catch((err) => {
          prevent = false;
          reject(err);
        });
    });
  };
}

```
