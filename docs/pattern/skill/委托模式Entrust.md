# 委托模式 Entrust

委托模式（Delegation Pattern）是一种设计模式，它允许对象将操作委托给另一个对象来处理。

委托模式是通过委托者将请求委托给被委托者去处理实现的。因此委托模式解决了请求与委托者之间的耦合。通过被委托者对接收到的请求的处理后,分发给相应的委托者去处理。这种模式可以减少代码重复，提高代码的可维护性和可扩展性。

在 JavaScript 中,委托模式己经得到很广泛的应用,尤其在处理事件上,当然委托模式是一种基础技巧,因此也同样在其他设计模式中被引用,如状态模式中状态对象对接收的状态处理,策略模式中策略对象对接收到的算法处理,命令模式中命令对象对接收到的命令处理等。

## 委托模式的优点

- 代码复用：通过委托，可以复用已有对象的方法，减少代码重复。
- 灵活性：委托模式比类继承更灵活，可以在运行时动态改变委托对象。

## 委托模式的缺点

- 性能开销：由于委托模式依赖于原型链查找，可能会带来一定的性能开销。
- 调试困难：在复杂的委托关系中，调试代码可能会变得更加困难。

## 适用场景

- 事件处理：在 DOM 事件处理中，常常使用事件委托来处理多个子元素的事件。
- 对象继承：通过对象委托，可以实现对象之间的行为共享，而不需要使用类继承。

## 实例

- 事件委托
- 对象委托

### 事件委托

假设我们有一个包含多个按钮的列表，我们希望在点击任意一个按钮时执行相同的操作。使用事件委托可以简化代码：

```html
<!DOCTYPE html>
<html lang="en">
	<head>
		<meta charset="UTF-8" />
		<title>Event Delegation</title>
	</head>
	<body>
		<ul id="buttonList">
			<li><button>Button 1</button></li>
			<li><button>Button 2</button></li>
			<li><button>Button 3</button></li>
		</ul>

		<script>
			// 将点击事件委托给ul元素，而不是为每个按钮单独添加事件监听器。
			document.getElementById('buttonList').addEventListener('click', function (event) {
				if (event.target.tagName === 'BUTTON') {
					alert(event.target.textContent)
				}
			})
		</script>
	</body>
</html>
```

### 对象委托

通过对象委托，我们可以创建一个对象，并将其方法委托给另一个对象来实现

```js
const printer = {
	print() {
		console.log('Printing...')
	},
}

const pdfPrinter = {
	__proto__: printer,
	printPDF() {
		console.log('Printing PDF...')
	},
}

pdfPrinter.print() // 输出: Printing...
pdfPrinter.printPDF() // 输出: Printing PDF...
```
