# 职责链模式 Chain of Responsibility

职责链模式（Chain of Responsibility）: 解决请求的发送者与请求的接受者之间的耦合,通过职责链上的多个对象对分解请求流程,实现请求在多个对象之间的传递,直到最后一个对象完成请求的处理。

职责链模式（Chain of responsibility）是使多个对象都有机会处理请求，从而避免请求的发送者和接受者之间的耦合关系。将这个对象连成一条链，并沿着这条链传递该请求，直到有一个对象处理他为止。职责链模式的名字非常形象，一系列可能会处理请求的对象被该连接成一条链，请求在这些对象之间依次传递，直到遇到一个可以处理它的对象，我们把这些对象成为链中的节点。

优点：请求发送者只需要知道链中的第一个节点，从而弱化了发送者和一组接收者之间的强联系。

## 实例

- axios 拦截器
- 交押金预定手机

### axios 拦截器

Axios 的拦截器有请求拦截器和响应拦截器，执行的顺序是请求拦截器 -> 发起请求 -> 响应拦截器，这其实就是一个链条上串起了三个职责。

```js
// instance.interceptors.request.use(fulfilled, rejected)
function Axios() {
  // 实例上有个interceptors对象，里面有request和response两个属性
  // 这两个属性都是InterceptorManager的实例
  this.interceptors = {
    request: new InterceptorManager(),
    response: new InterceptorManager(),
  };
}

function InterceptorManager() {
  // 实例上有一个数组，存储拦截器方法
  this.handlers = [];
}

// InterceptorManager有一个实例方法use
InterceptorManager.prototype.use = function (fulfilled, rejected) {
  // 这个方法很简单，把传入的回调放到handlers里面就行
  this.handlers.push({ fulfilled, rejected });
};

// 发起请求调用instance.request的时候真正执行的就是请求拦截器 -> 发起请求 -> 响应拦截器链条
Axios.prototype.request = function (config) {
  // chain里面存的就是要执行的方法链条
  // dispatchRequest是发起网络请求的方法

  // chain里面先把发起网络请求的方法放进去，他的位置应该在chain的中间
  const chain = [dispatchRequest, undefined];

  // chain前面是请求拦截器的方法,从request.handlers里面取出来放进去
  this.interceptors.request.handlers.forEach(
    function unshiftRequestInterceptors(interceptor) {
      chain.unshift(interceptor.fulfilled, interceptor.rejected);
    }
  );

  // chain后面是响应拦截器的方法，从response.handlers里面取出来放进去
  this.interceptors.response.handlers.forEach(function pushResponseInterceptors(
    interceptor
  ) {
    chain.push(interceptor.fulfilled, interceptor.rejected);
  });

  // 经过上述代码的组织，chain这时候是这样的：
  // [request.fulfilled, request.rejected, dispatchRequest, undefined, response.fulfilled,
  // response.rejected]
  // 这其实已经按照请求拦截器 -> 发起请求 -> 响应拦截器的顺序排好了，拿来执行就行

  let promise = Promise.resolve(config); // 先来个空的promise，好开启then
  while (chain.length) {
    // 用promise.then进行链式调用
    promise = promise.then(chain.shift(), chain.shift());
  }

  return promise;
};
```

### 交押金预定手机

假设一个电视购物网站对于某部新上市的手机经过了 2 轮缴纳 500 元定金与 200 元定金的预定，现在已经到了正式购买的阶段。
支付了 500 元定金的用户在购买阶段可以使用 100 元优惠券，200 元定金可以使用 50 元优惠券，普通用户没有优惠且当库存不足不一定能买到。

约定：
orderType: 表示订单类型(定金或者普通用户),code 的值为 1 时候是 500 元定金用户，为 2 是 200 元定金用户，为 3 则是普通用户。
pay : 表示用户是否支付定金，用户虽然下过 500 元定金的订单但是如果他一直没有支付定金，那么只能降级为普通用户。
stock : 仅用户普通用户的库存数量，定金用户不受限制。
首先定义三种预定的客户的订单并且让每种客户订单有满足当前预定条件和不满足当前预定条件（需后面继续处理）

```js
 // 创建职责链对象
class Chain {
  constructor(fn) {
    this.fn = fn
    this.successor = null
  }
  // 设置下一个职责
  setNextSuccessor(successor) {
    return (this.successor = successor)
  }
  // 执行下一个职责
  passRequest() {
    let result = this.fn.apply(this, arguments)
    if (result === 'nextSuccessor') {
      return this.successor && this.successor.passRequest.apply(this.successor, arguments)
    }
    return result
  }
  // 支持异步手动调用执行下一个职责
  next() {
    return this.successor && this.successor.passRequest.apply(this.successor, arguments)
  }
}

// 500 元客户订单
const order500 = function (orderType, pay, stock) {
  if (orderType === 1 && pay) {
    console.log('500 元定金预购, 得到100 优惠券')
  } else {
    return 'nextSuccessor' // unknow the next node but always pass to next.
  }
}

// 200 元客户订单
const order200 = function (orderType, pay, stock) {
  if (orderType === 2 && pay) {
    console.log('200 元定金预购，得到100 优惠券')
  } else {
    return 'nextSuccessor'
  }
}

// 无预约客户订单
const orderNormal = function (orderType, pay, stock) {
  if (stock > 0) {
    console.log('正常购买, 无优惠券')
  } else {
    console.log('无库存')
  }
}

// 把3个订单函数分别包装成职责链的节点
let chainOrder500 = new Chain(order500)
let chainOrder200 = new Chain(order200)
let chainOrderNormal = new Chain(orderNormal)

// 把上面封装的节点连成一条线，依次判断执行
chainOrder500.setNextSuccessor(chainOrder200)
chainOrder200.setNextSuccessor(chainOrderNormal)

// 用例
chainOrder500.passRequest(1, true, 10) // 500 元定金预购, 得到100 优惠券
chainOrder200.passRequest(2, false, 8) // 正常购买, 无优惠券
```
