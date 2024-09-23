# 策略模式 Strategy

**策略模式(Strategy): 将定义的一组算法封装起来，使其相互之间可以替换。**

策略模式最主要的特色是创建一系列策略算法，每组算法处理的业务都是相同的，只是处理的过程或者处理的结果不一样，所以它们又是可以相互替换的，这样就解决了算法与使用者之间的耦合。在测试层面上讲，由于每组算法相互之间的独立性，该模式更方便于对每组算法进行单元测试，保证算法的质量。

**策略模式的优点：**

1. 策略模式封装了一组代码簇，并且封装的代码相互之间独立，便于对算法的重复引用，提高了算法的复用率。

2. 策略模式与继承相比，在类的继承中继承的方法是被封装在类中，因此当需求很多算法时，就不得不创建出多种类，这样会导致算法与算法的使用者耦合在一起，不利于算法的独立演化，并且在类的外部改变类的算法难度也是极大的。

3. 同状态模式一样，策略模式也是一种优化分支判断语句的模式，采用策略模式对算法封装使得算法更利于维护。

**策略模式的缺点：**

1. 由于选择哪种算法的决定权在用户，所以对用户来说就必须了解每种算法的实现。这就增加了用户对策略对象的使用成本。

2. 由于每种算法间相互独立，这样对于一些复杂的算法处理相同逻辑的部分无法实现共享，这就会造成一些资源的浪费。不过这可以通过享元模式来解决。

策略模式提供了一种遵循开闭原则的方法来处理算法的选择和变化，使得算法可以独立于使用它们的客户端代码进行变化。通过使用策略模式，可以提高算法的重用性和应用程序的灵活性。

---

对于分支语句的优化，目前为止有 3 种模式，分别为工厂方法模式，状态模式与策略模式。

对于工厂方法模式来说，它是一种创建型模式，他的最终目的是创建对象。而状态模式与策略模式都是行为性模式，不过在状态模式中，其核心是对状态的控制来决定表现行为，所以状态之间通常是不能相互替代的，否则将产生不同的行为结果。而策略模式核心是算法，由于每种算法要处理的业务逻辑相同，因此他们可以相互替换，当然策略模式并不关心使用者环境，因为同一种策略模式最终产出的结果是一定的。

## 实例

- Vue-Router 路由模式

### Vue-Router 路由模式

vue-router 支持两种模式：哈希模式和 history 模式。

在 vue-router/src/index.js 中，会根据用户选择的模式匹配相应的路由替换规则。（以版本 3.5.4 为例）

```js
// 节选vue-router/src/index.js
import { HashHistory } from "./history/hash";
import { HTML5History } from "./history/html5";
import { AbstractHistory } from "./history/abstract";

export default class VueRouter {
  constructor(options: RouterOptions = {}) {
    let mode = options.mode || "hash";
    this.fallback =
      mode === "history" && !supportsPushState && options.fallback !== false;
    if (this.fallback) {
      mode = "hash";
    }
    if (!inBrowser) {
      mode = "abstract";
    }
    this.mode = mode;

    switch (mode) {
      case "history":
        this.history = new HTML5History(this, options.base);
        break;
      case "hash":
        this.history = new HashHistory(this, options.base, this.fallback);
        break;
      case "abstract":
        this.history = new AbstractHistory(this, options.base);
        break;
      default:
        if (process.env.NODE_ENV !== "production") {
          assert(false, `invalid mode: ${mode}`);
        }
    }
  }
}
```

在 vue-router/src/history 目录下，History 类定义了一些基础的约束，面向不同 API 的实现策略，继承自 History。

```js
// 节选自vue-router/src/history/base.js
export class History {
  // implemented by sub-classes
  +setupListeners: Function;
}

// 节选自vue-router/src/history/hash.js
export class HashHistory extends History {
  /**
   * 哈希模式用hashchange事件进行监听
   */
  setupListeners() {
    const eventType = supportsPushState ? "popstate" : "hashchange";
    window.addEventListener(eventType, handleRoutingEvent);
    this.listeners.push(() => {
      window.removeEventListener(eventType, handleRoutingEvent);
    });
  }
}

// 节选自vue-router/src/history/history.js
export class HTML5History extends History {
  /**
   * Html5 History模式用popstate事件进行监听
   */
  setupListeners() {
    window.addEventListener("popstate", handleRoutingEvent);
    this.listeners.push(() => {
      window.removeEventListener("popstate", handleRoutingEvent);
    });
  }
}
```
