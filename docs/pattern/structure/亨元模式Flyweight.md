# 亨元模式 Flyweight

亨元模式（Flyweight Pattern）是一种结构型设计模式，旨在通过共享尽可能多的相似对象来有效地支持大量细粒度对象的复用，从而减少内存消耗。

## 核心思想

亨元模式的核心思想是将对象的状态分为内部状态和外部状态：

- 内部状态：可以在多个对象之间共享，不会随环境的改变而改变。
- 外部状态：每个对象独有的状态，会随环境的改变而改变。

## 亨元模式的优点

- 减少内存消耗：通过共享对象，减少了对内存的需求。
- 提高性能：减少了对象的创建和销毁，提高了性能。
- 减少对象数量：通过共享对象，减少了对象的数量。

## 亨元模式的缺点

- 复杂性增加：需要区分内部状态和外部状态，增加了系统的复杂性。
- 不适用于所有场景：只有在大量细粒度对象需要共享时才适用。

## 亨元模式的应用场景

亨元模式在需要大量相似对象的场景中非常有用，例如图形界面系统中的字符对象、游戏中的粒子系统等。

- 文本编辑器：用于管理大量文本对象，如文档、段落、单词等。
- 游戏开发：用于管理大量游戏对象，如角色、道具、场景等。
- 数据库连接池：用于管理大量数据库连接。

## 实例

```ts
abstract class FlyWeight {
	abstract notify(msg: string): void
}

class ConcreteFlyWeight extends FlyWeight {
	notify(msg: string): void {
		console.log('我是享元对象输出消息：' + msg)
	}
}

class UnsharedConcreteFlyWeight extends FlyWeight {
	notify(msg: string): void {
		console.log('我是非享元对象输出消息：' + msg)
	}
}

class FlyWeightFactory {
	private static map: Map<string, FlyWeight> = new Map()

	static {
		// 系统初始化一些干活儿的对象
		this.map.set('A', new ConcreteFlyWeight())
		this.map.set('B', new ConcreteFlyWeight())
	}

	static getFlyWeight(type: string): FlyWeight {
		// 如果对象不存在，则创建，如果存在，直接复用对象
		let flyWeightInstance = this.map.get(type)
		if (!flyWeightInstance) {
			flyWeightInstance = new ConcreteFlyWeight()
			this.map.set(type, flyWeightInstance)
		}
		return flyWeightInstance
	}
}

const flyA = FlyWeightFactory.getFlyWeight('A')
const flyB = FlyWeightFactory.getFlyWeight('B')
const flyC = FlyWeightFactory.getFlyWeight('C')
const flyD = FlyWeightFactory.getFlyWeight('A')
const normalObj = new UnsharedConcreteFlyWeight()
flyA.notify('你好，比尔盖茨~')
flyB.notify('你好，库克~')
flyC.notify('你好，乔布斯~')
flyD.notify('你好，马云~')
normalObj.notify('你好，雷军~')
```
