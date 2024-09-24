# 桥接模式 Bridge

桥接模式（Bridge Pattern）是一种结构型设计模式，它通过将抽象部分与实现部分分离，使它们可以独立变化。桥接模式的主要目的是解耦，使得抽象和实现可以独立扩展，而不影响对方。

通过桥接模式实现的解耦，使实现层与抽象层分开处理，避免需求的改变造成对象内部的修改，体现了面向对象对拓展的开放及对修改的关闭原则。

## 桥接模式的优点

- 分离抽象和实现：桥接模式将抽象部分与实现部分分离，使它们可以独立变化。
- 提高系统的可扩展性：抽象和实现可以独立扩展，不会相互影响。
- 符合开闭原则：增加新的抽象部分和实现部分时，不需要修改已有代码。

## 桥接模式的缺点

- 增加系统的理解与设计难度：由于引入了抽象层，系统的理解和设计难度增加。
- 需要正确识别系统中的两个独立变化的维度：只有在正确识别出系统中两个独立变化的维度时，才能合理地使用桥接模式。

## 适用场景

- 希望抽象和实现部分可以独立变化：例如，图形系统中的形状和颜色可以独立变化。
- 不希望在抽象和实现之间有固定的绑定关系：例如，数据库系统中的数据库和操作系统可以独立变化。

## 实例

- 多维变量类

```js
// 运动单元
class Speed {
	constructor(x, y) {
		this.x = x
		this.y = y
	}
	run() {
		console.log('运动起来')
	}
}
// 着色单元
class Color {
	constructor(cl) {
		this.color = cl
	}
	draw() {
		console.log('绘制色彩')
	}
}
// 变形单元
class Shape {
	constructor(sp) {
		this.shape = sp
	}
	change() {
		console.log('改变形状')
	}
}
// 说话单元
class Speak {
	constructor(wd) {
		this.word = wd
	}
	say() {
		console.log('书写字体')
	}
}
// 球类
class Ball {
	constructor(x, y, c) {
		this.speed = new Speed(x, y)
		this.color = new Color(c)
	}
	init() {
		this.speed.run()
		this.color.draw()
	}
}
// 人类
class People {
	constructor(x, y, f) {
		this.speed = new Speed(x, y)
		this.font = new Speak(f)
	}
	init() {
		this.speed.run()
		this.font.say()
	}
}
// 精灵类
class Spirite {
	constructor(x, y, c, s) {
		this.speed = new Speed(x, y)
		this.color = new Color(c)
		this.shape = new Shape(s)
	}
	init() {
		this.speed.run()
		this.color.draw()
		this.shape.change()
	}
}
```
