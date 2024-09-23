# 单例模式 Singleton

作用意义: 限制类只能实例化一次

特征: 全局唯一性

原理: 在该实例不存在的情况下，可以通过一个方法创建一个类来实现创建类的新实例；如果实例已经存在，它会简单返回该对象的引用

## 实例

- 登录弹窗
- 自定义事件 EventBus
- vue-router
- Vuex、Redux 的 Store

### 全局数据存储对象 Store

```js
function Store() {
  // 使用instanceof检测
  if (!(this instanceof Store)) {
    return new Store();
  }
  if (Store.instance) {
    return Store.instance;
  }
  Store.instance = this;
}

// 调用方式
new Store();
```
