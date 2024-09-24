# 函数柯里化 curry

函数柯里化的思想是对函数的参数分割,这有点像其他面向语言中的类的多态,就是根据传递的参数不同,可以让一个函数存在多种状态,只不过函数柯里化处理的是函数,因此要实现函数的柯里化是要以函数为基础的,借助柯里化器伪造其他函数,让这些伪造的函数在执行时调用这个基函数完成不同的功能。还是跟函数绑定一样,首先创建出一个函数柯里化器。

参与者模式实质上是两种技术的结晶,函数绑定和函数柯里化。

早期浏览器中并未提供 bind 方法,因此聪明的工程师们为了使添加的事件能够移除,事件回调函数中能够访问到事件源,并且可以向事件回调函数中传入自定义数据,才发明了函数绑定与函数柯里化技术。

对于函数绑定,它将函数以函数指针（函数名）的形式传递,使函数在被绑定的对象作用域中执行,因此函数的执行中可以顺利地访问到对象内部的数据,由于函数绑定构造复杂,执行时需消耗更多的内存,因此执行速度上要稍慢一些。不过相对于解决的问题来说这种消耗还是值得的,因此它常用于事件,setTimeout 或 setInterval 等异步逻辑中的回调函数。

对于函数柯里化即是将接受多个参数的函数转化为接受一部分参数的新函数,余下的参数保存下来,当函数调用时,返回传入的参数与保存的参数共同执行的结果。

通常保存下来的参数保存于闭包内,因此函数柯里化的实现要消耗一定的资源。

函数的柯里化有点类似类的重载, 不同点是类的重载是同一个类对象,函数的柯里化是两个不同的函数。随着函数柯里化的发展,现在又衍生出一种反柯里化的函数,其目的是方便我们对方法的调用,它的实现如下。

## 实例

```js
// 函数柯里化
function curry(fn) {
	// 保存数组slice方法 Array.prototype.slice
	var slice = [].slice
	// 从第二个参数开始截取参数
	var args = slice.call(arguments, 1)
	// 闭包返回新函数
	return function () {
		// 将参数（类数组）转化为数组
		var addArgs = slice.call(arguments),
			// 拼接参数
			allArgs = args.concat(addArgs)
		// 返回新函数
		return fn.apply(null, allArgs)
	}
}

// 加法器
function add(num1, num2) {
	return num1 + num2
}
// 加5加法器
function add5(num) {
	return add(5, num)
}

// 测试add加法器
console.log(add(1, 2)) // 3
// 测试加5加法器
console.log(add5(6)) // 11

// 函数柯里化创建加5加法器
var add5 = curry(add, 5)
console.log(add5(7)) // 12

// 7+8
var add7and8 = curry(add, 7, 8)
console.log(add7and8()) // 15
```

### 重写 bind 方法

```js
// 函数柯里化 重写bind
function bind(fn, context) {
	// 缓存数组slice方法
	var slice = Array.prototype.slice,
		// 从第三个参数开始截取参数（包括第三个参数）
		args = slice.call(arguments, 2)

	// 返回新方法
	return function () {
		// 将参数转化为数组
		var addArgs = slice.call(arguments),
			// 拼接参数
			allArgs = addArgs.concat(args)
		// 对fn装饰并返回
		return fn.apply(context, allArgs)
	}
}

var demoData1 = {
	text: '这是第—组数据',
}

var demoData2 = {
	text: '这是第二组数据',
}
// 提供btn元素、demoData1参与对象
// var bindFn = bind(demoFn, btn, demoData1);
// chrome输: [MouseEvent, object] <button>按钮</button>
// 提供btn元素、demoData1、demoData2参与对象
// var bindFn = bind(demoFn, btn, demoData1, demoData2);
// chrome输: [MouseEvent, object, object] <button>按钮</button>
// 提供p元素、demoData1参与对象

var bindFn = bind(demoFn, p, demoData1)
// [MouseEvent, object] <p>hello</p>
// 兼容各个浏览器
if (Function.prototype.bind === undefined) {
	Function.prototype.bind = function (context) {
		// 缓存数组slice方法
		var slice = Array.prototype.slice,
			// 从第二个参数截取参数
			args = slice.call(arguments, 1),
			// 保存当前函数引用
			that = this
		// 返回新函数
		return function () {
			// 将参数数组化
			var addArgs = slice.call(arguments),
				// 拼接参数,注意:传入的参数放在了后面
				allArgs = args.concat(addArgs)
			// 对当前函数装饰并返回
			return that.apply(context, allArgs)
		}
	}
}
```

### 反柯里化

```js
// 反柯里化
Function.prototype.uncurry = function () {
	// 保存当前对象
	var that = this
	return function () {
		return Function.prototype.call.apply(that, arguments)
	}
}

// 获取校验方法
var toString = Object.prototype.toString.uncurry()
// 测试对象数据类型
console.log(toString(function () {})) // chrome:[object Function]
console.log(toString([])) // chrome:[object Array]

// 保存数组push方法
var push = [].push.uncurry()
// 创建—个对象
var demoArr = {}
// 通过push方法为对象添加数据成员
push(demoArr, '第—个成员', '第二个成员')
console.log(demoArr)
//chrome:object{0:"第—个成员",1:"第二个成员",length:2}
```
