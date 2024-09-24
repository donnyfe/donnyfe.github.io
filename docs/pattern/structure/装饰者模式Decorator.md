# 装饰者模式 Decorator

**装饰者模式（Decorator）**：在不改变原对象的基础上，通过对其进行包装拓展（添加属性或者方法），使原有对象可以满足用户的更复杂需求。

装饰者模式是一种结构型设计模式，它允许在不修改原有功能的情况下对功能进行扩展和增强。这种模式通过对对象进行包装，从而在外部对其进行功能拓展，而无需了解其内部实现。这种方式不仅保护了原有功能的完整性，还提供了灵活的功能扩展手段。

与适配器模式不同，装饰者模式不需要了解对象的内部结构。适配器模式通常需要对对象内部结构进行重组，而装饰者模式则是在外部进行封装和拓展。

在实际项目中，当需要增强或削弱一个函数的能力时，可以使用装饰者模式。编写装饰者模式的代码有几种常见的方式：

1. **高阶函数**：利用闭包编写高阶函数，这种方式适用于任何函数，但写法可能不够优雅。
2. **ES6 装饰器语法**：这种方式需要基于类的代码，适用于 OOP 开发思想的项目，如 Node.js 中的 NestJS。
3. **原型扩展**：在原型上追加 AOP 函数，但这种方式在实际开发中不推荐，因为可能带来潜在隐患。

## 适用场景

装饰者模式适用于以下场景：

1. **功能扩展**：需要在不修改现有代码的情况下，为对象添加新的功能。
2. **职责分离**：将核心功能与附加功能分离，使代码更具模块化和可维护性。
3. **动态组合**：需要动态地组合多个行为或功能。
4. **透明增强**：希望增强对象的功能，但不改变其接口和使用方式。
5. **跨切面关注点**：如日志记录、性能监控、安全控制等，适合使用装饰者模式进行实现。

## 实例

- 前置/后置执行函数
- 日志装饰器

### 前置/后置执行函数

```js
/**
 * 增加前置执行的函数
 */
Function.prototype.beforeFn = function (fn) {
	const _this = this
	return function wrapper() {
		fn.apply(this, arguments)
		return _this.apply(this, arguments)
	}
}
/**
 * 增加后置执行的函数
 */
Function.prototype.afterFn = function (fn) {
	const _this = this
	return function wrapper() {
		const response = _this.apply(this, arguments)
		fn.apply(this, arguments)
		return response
	}
}

// use
function onLoad() {
	console.log('我想处理一些业务逻辑')
}
// 不需要担心覆盖其它开发者增加的onload事件
window.onload = typeof window.onload === 'function' ? window.onload.beforeFn(onLoad) : onLoad
```

### 日志装饰器

```js
function log(target: Object, name: string, descriptor: PropertyDescriptor) {
	var oldValue = descriptor.value
	descriptor.value = function () {
		console.log(`Calling ${name} with`, arguments)
		return oldValue.apply(this, arguments)
	}
	return descriptor
}

class MyClass {
	@log
	handleClick() {
		console.log('用户点击了按钮')
	}
}
```
