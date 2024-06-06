# 单例模式 Singleton

作用意义: 限制类只能实例化一次

特征: 全局唯一性

## 原理

在该实例不存在的情况下，可以通过一个方法创建一个类来实现创建类的新实例；如果实例已经存在，它会简单返回该对象的引用

## 场景

- 登录弹窗
- 自定义事件EventBus
- vue-router
- Vuex、Redux的store

## 示例

```ts
class SingleTon {
  private constructor() { }
  
  private static instance: SingleTon | null

  static getInstance(): SingleTon {
    if (SingleTon.instance == null) {
      SingleTon.instance = new SingleTon()
    }
    return SingleTon.instance
  }
}
```

```js
// Singleton
let Singleton = (function () {
  // 实例保持了Singleton的一个引用
  let instance;

  function init() {
    // 私有变量
    let privateVariable = "Im also private";
 　　// 私有方法
    function privateMethod() {
      console.log("I am private");
    }

    return {
      // 公有变量
      publicProperty: "I am also public",
      // 公有方法
      publicMethod: function () {
        console.log("The public can see me!");
      },
      getRandomNumber: function () {
        return Math.random();
      }
    };
  };

  return {
  　// 获取Singleton的实例，如果存在就返回，不存在就创建新实例
    getInstance: function () {
      if (!instance) {
        instance = init();
      }
      return instance;
    }
  };
})();
```

### 全局数据存储对象

```js
function Store() {
  // 加一个instanceof检测
  if(!(this instanceof store)) {
    return new store();
  }
  if(store.instance) {
    return store.instance;
  }
  store.instance = this;
}

// 调用方式
new Store()
// 调用方式
Store()
```
