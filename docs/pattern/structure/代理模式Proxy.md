# 代理模式 Proxy

代理模式：它通过提供一个代理对象来代理或者替代一个真实对象的操作。代理控制对原对象的访问，并允许在不改变原对象代码的前提下，在执行操作前后添加额外的操作。

## 代理模式的作用

- 访问控制: 代理模式可以在不改变原始对象的基础上添加访问控制的逻辑。
- 性能优化: 代理模式可以用于性能优化，比如实现懒加载、结果缓存等。
- 数据验证: 代理模式可以用来进行数据验证，确保对象的属性在设置时不会违反某些规则。

## 实例

- 缓存代理：缓存请求结果、计算结果
- Nest.js 统一的错误捕获

### 缓存代理-缓存计算结果

```js
const mult = function () {
	let a = 1
	for (let i = 0; i < arguments.length; i++) {
		a *= arguments[i]
	}
	return a
}

const plus = function () {
	let a = 0
	for (let i = 0; i < arguments.length; i++) {
		a += arguments[i]
	}
	return a
}

// 创建缓存代理
const createCacheProxy = function (fn) {
	// 保存计算的结果
	let cache = {}
	// 使用闭包在内存中保留对cache的引用
	return function () {
		// 将所有参数转化为字符串作为缓存的 key
		let args = Array.from(arguments).join(',')
		if (args in cache) {
			return cache[args]
		} else {
			return (cache[args] = fn.apply(this, arguments))
		}
	}
}

// 使用代理对象
const proxyMult = createCacheProxy(mult)
console.log(proxyMult(1, 2, 3, 4)) // 24

const proxyPlus = createCacheProxy(plus)
console.log(proxyPlus(1, 2, 3, 4)) // 10
```

---

在实际的开发中，有些操作可能比较耗费系统资源，所以我们可以利用将其缓存起来，从而提高软件整体的运行效率，以下就是使用代理模式来实现对函数的结果的缓存的一个示例，lodash 也提供了一个这样的 API->memoize。

```js
function createMemoized(func) {
	const cache = new Map()

	return new Proxy(func, {
		apply(target, thisArg, args) {
			// 创建一个唯一的缓存键，基于函数的参数
			const cacheKey = args.toString()
			if (cache.has(cacheKey)) {
				console.log('从缓存中获取结果')
				return cache.get(cacheKey)
			}

			console.log('计算结果并缓存')
			const result = target.apply(thisArg, args)
			cache.set(cacheKey, result)
			return result
		},
	})
}

// 示例函数：计算两个数的和
function add(a, b) {
	return a + b
}

// 创建一个记忆化版本的 add 函数
const memoizedAdd = createMemoized(add)

// 使用记忆化函数
console.log(memoizedAdd(2, 3)) // 计算结果并缓存
console.log(memoizedAdd(2, 3)) // 从缓存中获取结果
console.log(memoizedAdd(4, 5)) // 计算结果并缓存
```

### Nest.js 统一的错误捕获

```ts
class NestFactoryStatic {
	public async create() {
		// 节选了部分代码
		const instance = new NestApplication()
		const target = this.createNestInstance(instance)
		return this.createAdapterProxy<T>(target, httpServer)
	}

	private createNestInstance<T>(instance: T): T {
		return this.createProxy(instance)
	}

	private createProxy(target: any) {
		const proxy = this.createExceptionProxy()
		return new Proxy(target, {
			get: proxy,
			set: proxy,
		})
	}

	private createExceptionProxy() {
		return (receiver: Record<string, any>, prop: string) => {
			if (!(prop in receiver)) {
				return
			}
			if (isFunction(receiver[prop])) {
				// 进行可能的错误捕获
				return this.createExceptionZone(receiver, prop)
			}
			// 对于属性的访问直接放行
			return receiver[prop]
		}
	}
}
```
