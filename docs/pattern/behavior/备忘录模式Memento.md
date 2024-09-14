# 备忘录模式 Memento

备忘录模式（Memento）: 在不破坏对象的封装性的前提下，在对象之外捕获并保存该对象内部的状态以便日后对象使用或者对象恢复到以前的某个状态。

备忘录模式的应用还挺多的，比如你打开页面中的换肤的设置层，第一次打开是要向服务器端发送请求来获取响应数据的，但是第二次就不需要再发送了，我们可以将第一次获取的数据缓存下来即可。再有 MVC 架构中的 M（model）部分。其实很多时候它都会缓存一些数据，供视图或者控制器模块使用。这些都是应用了备忘录模式的思想而实现的。

备忘录模式最主要的任务是对现有的数据或状态做缓存，为将来某个时刻使用或恢复做准备。在 JavaScript 编程中，备忘录模式常常运用于对数据的缓存备份，浏览器端获取的数据往往是从服务器端请求获取到的，而请求流程往往是以时间与流量为代价的。因此对重复性数据反复请求不仅增加了服务器端的压力，而且造成浏览器端对请求数据的等待进而影响用户体验。

在备忘录模式中，数据常常存储在备忘录对象的缓存器中，这样对于数据的读取必定要通过调用备忘录提供的方法，因此备忘录对象也是对数据缓存器的一次保护性封装，防止外界的直接访问，方便数据的管理，规范化外界对象对数据的使用。一旦备忘录对象发现请求的数据或状态在缓存器中己存在，将直接从缓存器中读取，从而降低对数据的获取成本。

当数据量过大时，会严重占用系统提供的资源，这会极大降低系统性能。此时对缓存器的缓存策略优化是很有必要的，复用率低的数据缓存下来是不值得的。因此资源空间的限制是影响备忘录模式应用的一大障碍。不过随着硬件水平的提高以及浏览器的不断优化，相信资源空间的限制在不久的将来也会得到改善。

## 应用场景

- 前进后退功能
- 文章缓存

### 前进后退功能

```js
function moveDiv() {
  this.states = []; // 一个数组记录所有状态
  this.currentState = 0; // 一个变量记录当前状态位置
}

// 移动方法，每次移动记录状态
moveDiv.prototype.move = function (type, num) {
  changeDiv(type, num); // 伪代码，移动DIV的具体操作，这里并未实现

  // 记录本次操作到states里面去
  this.states.push({ type, num });
  this.currentState = this.states.length - 1; // 改变当前状态指针
};

// 前进方法，取出状态执行
moveDiv.prototype.forward = function () {
  // 如果当前不是最后一个状态
  if (this.currentState < this.states.length - 1) {
    // 取出前进的状态
    this.currentState++;
    const state = this.states[this.currentState];

    // 执行该状态位置
    changeDiv(state.type, state.num);
  }
};

// 后退方法是类似的
moveDiv.prototype.back = function () {
  // 如果当前不是第一个状态
  if (this.currentState > 0) {
    // 取出后退的状态
    this.currentState--;
    const state = this.states[this.currentState];

    // 执行该状态位置
    changeDiv(state.type, state.num);
  }
};
```

### 文章缓存

> 这个例子在实际项目中也比较常见，用户每次点进一个新文章都需要从 API 请求数据，如果他下次再点进同一篇文章，我们可能希望直接用上次请求的数据，而不再次请求，这时候就可以用到备忘录模式了

```js
function pageCache(pageId) {
  const cache = {};

  return function (pageId) {
    // 为了保持返回类型一致，我们都返回一个Promise
    if (cache[pageId]) {
      return Promise.resolve(cache[pageId]);
    } else {
      return axios.get(pageId).then((data) => {
        cache[pageId] = data;
        return data;
      });
    }
  };
}
```

```js
// Page备忘录类
var Page = (function () {
  // 信息缓存对象
  var cache = {};

  /**
   * 参数 page 页码
   * 参数 fn 成功回调函数
   **/
  return function (page, fn) {
    // 判断该页数据是否在缓存中
    if (cache[page]) {
      // 恢复到该页状态，显示该页内容
      showPage(page, cache[page]);
      // 执行成功回调函数
      fn && fn();
    } else {
      // 若缓存cache中无该页数据
      $.post(
        "./data/getNewsData.php",
        {
          // 请求携带数据 page 页码
          page: page,
        },
        function (res) {
          // 成功返回
          if (res.errNo == 0) {
            // 显示该页数据
            showPage(page, res.data);
            // 将该页数据种入缓存中
            cache[page] = res.data;
            // 执行成功回调函数
            fn && fn();
          } else {
            // 处理异常
          }
        }
      );
    }
  };
})();
```
