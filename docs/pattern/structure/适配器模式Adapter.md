# 适配器模式 Adapter

适配器模式（Adapter Pattern）是一种结构型设计模式，它允许接口不兼容的类可以一起工作。通过引入一个适配器类，适配器模式将一个类的接口转换成客户希望的另一个接口，从而使原本由于接口不兼容而不能一起工作的类可以协同工作。

## 实例

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
}
```
