# 职责链模式 Chain of Responsibility

职责链模式（Chain of Responsibility）: 解决请求的发送者与请求的接受者之间的耦合,通过职责链上的多个对象对分解请求流程,实现请求在多个对象之间的传递,直到最后一个对象完成请求的处理。

职责链模式（Chain of responsibility）是使多个对象都有机会处理请求，从而避免请求的发送者和接受者之间的耦合关系。将这个对象连成一条链，并沿着这条链传递该请求，直到有一个对象处理他为止。职责链模式的名字非常形象，一系列可能会处理请求的对象被该连接成一条链，请求在这些对象之间依次传递，直到遇到一个可以处理它的对象，我们把这些对象成为链中的节点。

优点：请求发送者只需要知道链中的第一个节点，从而弱化了发送者和一组接收者之间的强联系。

## 应用场景

- axios 拦截器
- 表单验证
- 交押金预定手机
- 挤公交车递钱（只有售票员可以收钱）

项目经理准备改善页面中的输入验证与输入提示交互体验。如用户在输入框输入信息后,在输入框的下面提示出一些备选项,当用户输入完成后,则要对用户输入的信息进行验证等等,页面中很多模块需要用户提交信息,为增强用户体验,这些输入框大部分需要具备上面两种功能。

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

### 表单验证

```js
// 前端验证先写个方法
function frontEndValidator(inputValue) {
  return Promise.resolve(inputValue); // 注意返回值是个promise
}

// 后端验证也写个方法
function backEndValidator(inputValue) {
  return Promise.resolve(inputValue);
}

// 写一个验证器
function validator(inputValue) {
  // 仿照Axios，将各个步骤放入一个数组
  const validators = [frontEndValidator, backEndValidator];

  // 前面Axios是循环调用promise.then来执行的职责链，我们这里换个方式，用async来执行下
  async function runValidate() {
    let result = inputValue;
    while (validators.length) {
      result = await validators.shift()(result);
    }

    return result;
  }

  // 执行runValidate，注意返回值也是一个promise
  runValidate().then((res) => {
    console.log(res);
  });
}

// 上述代码已经可以执行了，只是我们没有具体的校验逻辑，输入值会原封不动的返回
validator(123); // 输出: 123
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
// 500 元客户订单
var order500 = function (orderType, pay, stock) {
  if (orderType === 1 && pay) {
    console.log("500 rmb deposit, get 100 coupon ");
  } else {
    return "nextSuccessor"; // unknow the next node but always pass to next.
  }
};

// 200 元客户订单
var order200 = function (orderType, pay, stock) {
  if (orderType === 2 && pay) {
    console.log("200 rmb deposit , get 50 coupon");
  } else {
    return "nextSuccessor";
  }
};

// 无预约客户订单
var orderNormal = function (orderType, pay, stock) {
  if (stock > 0) {
    console.log("normal buy no coupon");
  } else {
    console.log("the stock lack");
  }
};

// 定制职责链对象（作用是形成订单职责链）
var Chain = function (fn) {
  this.fn = fn;
  this.successor = null;
};
// 设置职责链
Chain.prototype.setNextSuccessor = function (successor) {
  return (this.successor = successor);
};
// 设置每个节点的调用方式
Chain.prototype.passRequest = function () {
  var ret = this.fn.apply(this.arguments);
  if (ret === "nextSuccessor") {
    return (
      this.successor &&
      this.successor.passRequest.apply(this.successor, arguments)
    );
  }
  return ret;
};

// 现在我们把3个订单函数分别包装成职责链的节点
var chainOrder500 = new Chain(order500);
var chainOrder200 = new Chain(order200);
var chainOrderNormal = new Chain(orderNormal);

// 这里我们把上面封装的节点连成一条线，依次判断执行
chainOrder500.setNextSuccessor(chainOrder200);
chainOrder200.setNextSuccessor(chainOrderNormal);

// 测试代码
chainOrder500.passRequest(1, true, 6); // 500 rmb deposit, get 100 coupon
chainOrder500.passRequest(2, true, 4); // 200 rmb deposit , get 50 coupon
```

### 其它

```js
/***

* 异步请求对象（简化版本）
* 参数 data    请求数据
* 参数 dealType  响应数据处理对象
* 参数 dom     事件源
 ****/
var sendData = function (data, dealType, dom) {
  // XHR对象 简化版本 IE另行处理
  var xhr = new XMLHttpRequest(),
    // 请求路径
    url = "getData.php?mod=userInfo";
  // 请求返回事件
  xhr.onload = function (event) {
    // 请求成功
    if ((xhr.status >= 200 && xhr.status < 300) || xhr.status == 304) {
      dealData(xhr.responseText, dealType, dom);
    } else {
      // 请求失败
    }
  };
  // 拼接请求字符串
  for (var i in data) {
    url += "&" + i + "=" + data[i];
  }
  // 发送异步请求
  xhr.open("get", url, true);
  xhr.send(null);
};

/***

* 处理响应数据
* 参数 data    响应数据
* 参数 dealType  响应数据处理对象
* 参数 dom     事件源
 *****/
var dealData = function (data, dealType, dom) {
  // 对象tostring方法简化引用
  var dataType = object.prototype.tostring.call(data);
  // 判断相应数据处理对象
  switch (dealType) {
    // 输入框提示功能
    case "sug":
      // 如果数据为数组
      if (dataType === "[object Array]") {
        // 创建提示框组件
        return createsug(data, dom);
      }
      // 将响应的对象数据转化为数组
      if (dataType === "[object object]") {
        var newData = [];
        for (var i in data) newData.push(data[i]);
        // 创建提示框组件
        return createsug(newData, dom);
      }
      // 将响应的其他数据转化为数组
      return createsug([data], dom);
      break;
    case "validate":
      // 创建校验组件
      return createValidataResult(data, dom);
      break;
  }
};
/***
 * 创建提示框组件
 * 参数 data  响应适配数据
 * 参数 dom  事件源
 ****/
var createsug = function (data, dom) {
  var i = 0,
    len = data.length,
    html = "";
  // 拼接每—条提示语句
  for (; i < len; i++) {
    html += "<li>" + data[i] + "</li>";
  }
  // 显示提示框
  dom.parentNode.getElementsByTagName["ul"](0).innerHTML = html;
};

/***

* 创建校验组件
* 参数 data  响应适配数据
* 参数 dom  事件源
 ****/
var createValidataResult = function (data, dom) {
  // 显示校验结果
  dom.parentNode.getElementsByTagName["span"](0).innerHTML = data;
};

dealData("用户名不正确", "validate", input[0]);
dealData(123, "sug", input[1]);
dealData(["爱奇艺", "阿里巴巴", "爱漫画"], "sug", input[1]);
dealData(
  {
    iqy: "爱奇艺",
    albb: "阿里巴巴",
    imh: "爱漫画",
  },
  "sug",
  input[1]
);

var createsug = function (data, dom) {
  console.log(data, dom, "createsug");
};

var createValidataResult = function (data, dom) {
  console.log(data, dom, "createValidataResult");
};
```
