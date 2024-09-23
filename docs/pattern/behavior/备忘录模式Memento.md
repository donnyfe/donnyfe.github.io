# 备忘录模式 Memento

备忘录模式（Memento）: 在不破坏对象的封装性的前提下，在对象之外捕获并保存该对象内部的状态以便日后对象使用或者对象恢复到以前的某个状态。

备忘录模式最主要的任务是对现有的数据或状态做缓存，为将来某个时刻使用或恢复做准备。在 JavaScript 编程中，备忘录模式常常运用于对数据的缓存备份，浏览器端获取的数据往往是从服务器端请求获取到的，而请求流程往往是以时间与流量为代价的。因此对重复性数据反复请求不仅增加了服务器端的压力，而且造成浏览器端对请求数据的等待进而影响用户体验。

在备忘录模式中，数据常常存储在备忘录对象的缓存器中，这样对于数据的读取必定要通过调用备忘录提供的方法，因此备忘录对象也是对数据缓存器的一次保护性封装，防止外界的直接访问，方便数据的管理，规范化外界对象对数据的使用。一旦备忘录对象发现请求的数据或状态在缓存器中己存在，将直接从缓存器中读取，从而降低对数据的获取成本。

当数据量过大时，会严重占用系统提供的资源，这会极大降低系统性能。此时对缓存器的缓存策略优化是很有必要的，复用率低的数据缓存下来是不值得的。因此资源空间的限制是影响备忘录模式应用的一大障碍。不过随着硬件水平的提高以及浏览器的不断优化，资源空间的限制在不久的将来也会得到改善。

## 实例

- 打开页面中的换肤的设置层，第一次打开是要向服务器端发送请求来获取响应数据的，但是第二次就不需要再发送了，此时可以将第一次获取的数据缓存下来即可。
- MVC 架构中的 M（model）部分。很多时候它都会缓存一些数据，供视图或者控制器模块使用。

- 文章缓存
- 前进后退功能
- 换肤设置
- 视图缓存

### 文章缓存

用户每次点进一个新文章都需要从 API 请求数据，如果他下次再点进同一篇文章，我们可能希望直接用上次请求的数据，而不再次请求，这时候就可以用到备忘录模式了

```js
/**
 * 文章缓存
 * @param {*} articleId
 * @returns
 */
const ArticleCache = function (articleId) {
 let cache = {}

 return function (articleId) {
  if (cache[articleId]) {
   return Promise.resolve(cache[articleId])
  } else {
   return axios.get(articleId).then((data) => {
    cache[articleId] = data
    return data
   })
  }
 }
}
```

### 前进后退功能

```js
class Move {
 constructor() {
  // 一个数组记录所有状态
  this.states = []
  // 一个变量记录当前状态位置
  this.currentIndex = 0
 }
 // 移动方法，每次移动记录状态
 move(type, num) {
  // 移动DIV的具体操作，此处未实现
  // changeDiv(type, num)

  // 记录本次操作到states里面去
  this.states.push({ type, num })
  // 改变当前状态指针
  this.currentIndex = this.states.length - 1
 }
 // 前进
 forward() {
  // 如果当前不是最后一个状态
  if (this.currentIndex < this.states.length - 1) {
   // 取出前进的状态
   this.currentIndex++
   const state = this.states[this.currentIndex]
   console.log('前进: ', state)
   // 执行该状态位置
   // changeDiv(state.type, state.num)
  }
 }
 // 后退
 back() {
  // 如果当前不是第一个状态
  if (this.currentIndex > 0) {
   // 取出后退的状态
   this.currentState--
   const state = this.states[this.currentIndex]
   console.log('后退: ', state)
   // 执行该状态位置
   // changeDiv(state.type, state.num)
  }
 }
}
```
