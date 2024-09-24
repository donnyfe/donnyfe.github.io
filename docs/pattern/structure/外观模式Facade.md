# 外观模式 Facade

外观模式（Facade Pattern）是一种结构型设计模式，它为复杂的子系统提供一个更高级的统一接口，使得子系统更容易使用。外观模式通过定义一个高层接口来简化子系统的使用，隐藏了子系统的复杂性，从而减少了客户端与子系统之间的耦合。

## 外观模式的优点

1. 简化接口：外观模式提供了一个简单的接口，隐藏了子系统的复杂性，使得子系统更容易使用。
2. 减少耦合：客户端通过外观模式与子系统交互，减少了客户端与子系统之间的直接依赖，从而降低了耦合度。
3. 更好的分层：外观模式可以帮助我们更好地组织代码，使得系统的分层更加清晰。

## 外观模式的缺点

1. 不完全封装：外观模式并不能完全封装子系统，客户端仍然可以直接访问子系统的类。
2. 可能增加复杂性：如果子系统本身已经很简单，使用外观模式可能会增加不必要的复杂性。

## 适用场景

简化复杂系统的使用：当一个系统包含多个复杂的子系统时，可以使用外观模式提供一个简单的接口。
分层结构：在分层结构中，外观模式可以用来定义每一层的入口点，从而简化层与层之间的交互。 3. 减少依赖：当需要减少客户端与多个子系统之间的依赖时，可以使用外观模式。

## 实例

- 封装 DOM 监听事件
- 兼容浏览器阻止冒泡、默认事件

### 封装 DOM 监听事件

```js
// 外观模式实现
function addEvent(dom, type, fn) {
	// 对于支持DoM2级事件处理程序addEventListener方法的浏览器
	if (dom.addEventListener) {
		dom.addEventListener(type, fn, false)
		// 对于不支持addEventListener方法但支持attachEvent方法的浏览器
	} else if (dom.attachEvent) {
		dom.attachEvent('on' + type, fn)
	} else {
		// 对于不支持addEventListener方法也不支持attachEvent方法，但支持on+'事件名'的浏览器
		dom['on' + type] = fn
	}
}

var myInput = document.getElementById('myinput')
addEvent(myInput, 'click', function () {
	console.log('绑定第—个事件')
})
```

### 兼容浏览器阻止冒泡、默认事件

```js
// 获取事件对象
var getEvent = function (event) {
	// 标准浏览器返回event，IE下window.event
	return event || window.event
}

// 获取元素
var getTarget = function (event) {
	var event = getEvent(event)
	// 标准浏览器下event.target，IE下event.srcElement
	return event.target || event.srcElement
}

// 阻止默认行为
var preventDefault = function (event) {
	var event = getEvent(event)
	// 标准浏览器
	if (event.preventDefault) {
		event.preventDefault()
	} else {
		// IE浏览器
		event.returnValue = false
	}
}
```
