# JS 优化

## DOM 操作优化

### 减少 DOM 操作频率

- 使用 DocumentFragment 批量操作 DOM
- 使用 innerHTML 替代大量 appendChild
- 使用 cloneNode 复制节点而不是重新创建
- 使用虚拟 DOM 技术(如 Vue/React)

### 使用 DocumentFragment 批量操作 DOM

```js
// 使用 DocumentFragment 批量操作
const fragment = document.createDocumentFragment()
const items = ['item1', 'item2', 'item3']

items.forEach(item => {
	const li = document.createElement('li')
	li.textContent = item
	fragment.appendChild(li)
})

// 一次性添加到 DOM
document.querySelector('ul').appendChild(fragment)
```

### 使用 innerHTML 替代大量 appendChild

```js
// 使用 innerHTML 替代大量 appendChild
document.querySelector('ul').innerHTML = `
  <li>item1</li>
  <li>item2</li>
  <li>item3</li>
`
```

### 使用 cloneNode 复制节点而不是重新创建

```js
// 使用 cloneNode 复制节点而不是重新创建
const template = document.querySelector('#template')
const clone = template.cloneNode(true)
```

### 避免重排(reflow)和重绘(repaint)

- 缓存 DOM 查询结果
- 批量修改样式
- 使用 transform/opacity 等性能友好的属性
- 使用 position: absolute/fixed 脱离文档流
- 避免频繁读取会触发重排的属性(如 offsetWidth)

#### 批量修改样式

```js
// 批量修改样式
const el = document.getElementById('target')
el.style.cssText = 'width: 100px; height: 100px; background: red;'
```

#### 使用 transform/opacity 等性能友好的属性

```js
// 使用 transform 代替 top/left
el.style.transform = 'translate(10px, 20px)'
```

## 执行优化

- 避免长任务阻塞主线程
- 使用 Web Workers 处理计算密集型任务
- 使用 requestIdleCallback 处理非关键任务
- 合理使用防抖和节流

## 内存优化

- 及时清除定时器和事件监听
- 避免闭包导致的内存泄漏
- 使用 WeakMap/WeakSet 存储对象引用
- 合理使用缓存策略

## 代码分割和懒加载

- 路由级别代码分割
- 组件级别动态导入
- 第三方库按需加载

## 异步更新优化

- 使用 requestIdleCallback 处理非关键任务
- 使用 Web Workers 处理耗时计算
- 使用 IntersectionObserver 优化滚动监听
- 使用 MutationObserver 监听 DOM 变化
- 使用 requestAnimationFrame 调度视图更新

### 使用 requestAnimationFrame 调度视图更新

```js
// 使用 requestAnimationFrame 调度视图更新
function updateView() {
	requestAnimationFrame(() => {
		// 更新视图
	})
}
```

## 事件处理优化

- 及时解绑不需要的事件
- 避免频繁的内联事件绑定


### 合理使用事件委托(Event Delegation)

```js
// 合理使用事件委托
document.querySelector('ul').addEventListener('click', e => {
	// 处理 li 元素点击
	if (e.target.tagName === 'LI') {
		console.log(e.target.textContent)
	}
})
```

### 使用防抖(debounce)技术

防抖用于控制函数在短时间内被频繁调用时的执行频率。其核心思想是:在一定时间内，只执行最后一次调用。

**工作原理：**

1. 当触发事件时，设置一个延迟执行的定时器
2. 如果在延迟时间内再次触发事件，则清除原定时器，重新设置新的定时器
3. 直到延迟时间内没有新的事件触发，才最终执行一次函数

**防抖的优势：**

- **性能优化**: 减少函数的执行频率，避免频繁操作导致的性能问题
- **资源节约**: 减少不必要的服务器请求和计算
- **用户体验**: 避免频繁更新导致的页面抖动

**使用场景：**

- **输入框搜索**: 用户输入停止后再发起请求
- **窗口调整**: resize 事件触发后再执行计算
- **表单验证**: 输入停止后再进行验证
- **按钮提交**: 防止重复提交
- **滚动事件**: scroll 事件触发后再执行相关操作

**防抖实现：**

```js
// 防抖
function debounce(fn, delay) {
	let timer = null
	return function (...args) {
		clearTimeout(timer)
		timer = setTimeout(() => {
			fn.apply(this, args)
		}, delay)
	}
}

/**
 * 防抖函数
 * @param {Function} fn 需要防抖的函数
 * @param {number} delay 延迟时间(ms)
 * @param {boolean} immediate 是否立即执行
 * @returns {Function} 经过防抖处理的函数
 */
function debounce(fn, delay = 300, immediate = false) {
	let timer = null

	return function (...args) {
		// 清除之前的定时器
		if (timer) clearTimeout(timer)

		// 立即执行
		if (immediate && !timer) {
			fn.apply(this, args)
		}

		// 设置新的定时器
		timer = setTimeout(() => {
			if (!immediate) {
				fn.apply(this, args)
			}
			timer = null
		}, delay)
	}
}

// 使用示例
const handleSearch = debounce(value => {
	console.log('搜索:', value)
}, 500)

// 监听输入框
searchInput.addEventListener('input', e => {
	handleSearch(e.target.value)
})
```

### 使用节流(throttle)技术

节流用于限制函数在一定时间内被调用的频率。其核心思想是:在指定的时间间隔内，函数只能被执行一次。

**工作原理：**

1. 设置一个定时器，在指定的时间间隔内，函数只能被执行一次
2. 如果在时间间隔内再次触发事件，则忽略该事件，直到时间间隔结束

**节流的优势：**

和防抖优势同。

**使用场景：**

- 滚动事件处理: 控制滚动事件触发频率
- 窗口调整: resize 事件处理
- 按钮点击: 防止重复提交
- API 调用: 限制接口请求频率
- 游戏中的射击: 限制发射子弹的频率

**节流实现：**

```js
// 节流
function throttle(fn, delay) {
	let timer = null
	return function (...args) {
		if (!timer) {
			timer = setTimeout(() => {
				fn.apply(this, args)
				timer = null
			}, delay)
		}
	}
}

/**
 * 节流函数
 * @param fn 需要节流的函数
 * @param delay 延迟时间(ms)
 * @returns 经过节流处理的函数
 */
function throttle(fn: Function, delay = 300) {
	let timer: NodeJS.Timeout | null = null

	return function (this: any, ...args: any[]) {
		// 如果已经存在定时器,直接返回
		if (timer) return

		// 执行函数
		fn.apply(this, args)

		// 设置定时器
		timer = setTimeout(() => {
			timer = null
		}, delay)
	}
}

// 使用示例
const handleScroll = throttle(() => {
	console.log('页面滚动')
}, 500)

// 监听滚动事件
window.addEventListener('scroll', handleScroll)
```

## 列表渲染优化

- 使用虚拟列表处理大数据渲染
- 使用 DocumentFragment 批量插入
- 采用分页或无限滚动加载
- key 的合理使用

### 虚拟列表实现原理

```js
// 虚拟列表实现
class VirtualList {
	constructor(options) {
		this.itemHeight = options.itemHeight
		this.container = options.container
		this.items = options.items

		// 计算可视区域内的元素数量 = 可视区域高度/单个元素高度
		this.visibleCount = Math.ceil(container.clientHeight / itemHeight)
		this.startIndex = 0
		this.endIndex = this.startIndex + this.visibleCount

		this.render()
	}

	render() {
		const fragment = document.createDocumentFragment()
		const visibleItems = this.items.slice(this.startIndex, this.endIndex)

		visibleItems.forEach(item => {
			const div = document.createElement('div')
			div.textContent = item
			fragment.appendChild(div)
		})

		this.container.innerHTML = ''
		this.container.appendChild(fragment)
	}
}
```
