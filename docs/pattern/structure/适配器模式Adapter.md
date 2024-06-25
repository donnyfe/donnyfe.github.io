# 适配器模式 Adapter

适配器模式（Adapter）： 将一个类（对象）的接口（方法或者属性）转化成另外一个接口，以满足用户需求，使类（对象）之间接口的不兼容问题通过适配器得以解决。

传统设计模式中，适配器模式往往是适配两个类接口不兼容的问题，然而在JavaScript中，适配器的应用范围更广，比如适配两个代码库，适配前后端数据，等等。

JavaScript 中的适配器的应用，更多应用在对象之间，为了使对象可用，通常我们会将对象拆分并重新包装，这样我们就要了解适配对象的内部结构，这也是与外观模式的区别所在，当然适配器模式同样解决了对象之间的耦合度。包装的适配器代码增加了一些资源开销，当然这是微乎其微的。

## 应用场景

- 后端接口适配
- 代码库适配
- 对象参数适配

### 对象参数适配

```js
function Adapter(config){
  var defaultConfig = {
    name: '雨夜清荷',
    title: '设计模式',
    age: 24,
    color: 'pink',
    size: 100,
    prize: 50
  }；
  for(var i in defaultConfig){
    defaultConfig[i] = config[i] || defaultConfig[i]；
  }
  // 或者 extend(adapter, config) 注：此时可能会多添加属性
  // do things
}
```
