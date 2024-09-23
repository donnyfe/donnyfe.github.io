# 亨元模式 Flyweight

享元模式，是一种用于性能优化的设计模式，享元模式的英文叫 fly-weight，其含义是蝇量级，主要用于减少创建对象的数量，以减少内存占用和提高性能。

享元模式的关键是划分内部和外部状态（变化和不变，不变的就是复用对象的内部状态，变化的内容则由外界传递进来，在某一刻得到执行来实现对象的复用的。另外，享元模式会有工厂模式的思想在其中，工厂实现对象的复用逻辑的控制。

```js
abstract class FlyWeight {
  abstract notify(msg: string): void;
}

class ConcreteFlyWeight extends FlyWeight {
  notify(msg: string): void {
    console.log("我是享元对象输出消息：" + msg);
  }
}

class UnsharedConcreteFlyWeight extends FlyWeight {
  notify(msg: string): void {
    console.log("我是非享元对象输出消息：" + msg);
  }
}

class FlyWeightFactory {
  private static map: Map<string, FlyWeight> = new Map();

  static {
    // 系统初始化一些干活儿的对象
    this.map.set("A", new ConcreteFlyWeight());
    this.map.set("B", new ConcreteFlyWeight());
  }

  static getFlyWeight(type: string): FlyWeight {
    // 如果对象不存在，则创建，如果存在，直接复用对象
    let flyWeightInstance = this.map.get(type);
    if (!flyWeightInstance) {
      flyWeightInstance = new ConcreteFlyWeight();
      this.map.set(type, flyWeightInstance);
    }
    return flyWeightInstance;
  }
}

function bootstrap() {
  const flyA = FlyWeightFactory.getFlyWeight("A");
  const flyB = FlyWeightFactory.getFlyWeight("B");
  const flyC = FlyWeightFactory.getFlyWeight("C");
  const flyD = FlyWeightFactory.getFlyWeight("A");
  const normalObj = new UnsharedConcreteFlyWeight();
  flyA.notify("你好，比尔盖茨~");
  flyB.notify("你好，库克~");
  flyC.notify("你好，乔布斯~");
  flyD.notify("你好，马云~");
  normalObj.notify("你好，雷军~");
}

```
