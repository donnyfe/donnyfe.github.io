# 节流模式 Throttler

构造节流器的思路是这样的:

首先节流器应该能做两件事情,第一件事情就是清除将要执行的函数,此时要对节流器传递两个参数（是否清除,执行函数）,如果第一个参数为 true,则表示清除将要执行的函数。同时会判断第二个参数（执行函数）有没有计时器句柄,有则清除计时器。

节流器能做的第二件事情就是延迟执行函数。此时要传递两个参数（执行函数,相关参数）。在节流器内部首先要为执行函数绑定一个计时器句柄,来保存该执行函数的计时器,对于第二个参数——相关参数来说,大致包括 3 个部分,执行函数在执行时的作用域、执行函数的参数、执行函数延迟执行的时间。

节流模式优化了图片加载时的用户体验,对于一些前后端的数据请求有时也可通过节流模式打包来优化请求次数。

比如在统计中（尤其对于鼠标移入移出等频发性事件）,我们经常监听事件触发次数,当触发次数达到某一值时才发送请求。

对于 DOM 的操作,常常会占用大量的内存资源和 cpu 处理时间。甚至大量的 DOM 操作在一些浏览器中也很可能导致浏览器的崩溃。由于 JavaScript 的单线程处理机制,导致 DOM 操作占用大量资源时会严重堵塞后面重要程序的执行。

节流模式的核心思想是创建计时器,延迟程序的执行。这也使得计时器中回调函数的操作异步执行（这里的异步执行并不是说 JavaScript 是多线程语言,JavaScript 从设计之初就是单线程语言,异步只是说脱离原来程序执行的顺序,看上去,异步程序像是在同时执行。但是某一时刻,当前执行的程序一定是所有异步程序（包括原程序）中的某一个）。

由此可看出节流模式主要有两点优势:

第一,程序能否执行是可控的。执行前的某一时刻是否清除计时器来决定程序是否可以继续执行。

第二,程序是异步的。由于计时器机制,使得程序脱离原程序而异步执行（当然随着 worker 技术的兴起,也可开启多线程模式实现）

因此不会影响后面的程序的正常执行。在其他方面,比如对异步请求（ajax）应用节流,此时可以优化请求次数来节省资源。

最后,对于在节流器中对计时器的设置,有的人可能感觉直接绑定在原函数会暴露计时器句柄,这使得外部可修改。当然你也可以将节流器改造成类的形式,将计时器句柄作为私有变量存放在类内部。

## 实例

- 封装节流器

### 封装节流器

```js
var throttle = function () {
  // 获取第—个参数
  var isclear = arguments[0],
    fn;
  // 如果第—个参数是boolean类型那么第—个参数则表示是否清除计时器
  if (typeof isclear === "boolean") {
    // 第二个参数则为函数
    fn = arguments[1];
    // 函数的计时器句柄存在,这清除该计时器
    fn.__throttleID && clearTimeout(fn.__throttleID);
    // 通过计时器延迟函数的执行
  } else {
    // 第—个参数为函数
    fn = isclear;
    // 第二个参数为函数执行时的参数
    param = arguments[1];
    // 对执行时的参数适配默认值,这里我们用到以前学过的extend方法
    var p = extend(
      {
        context: null, // 执行函数执行时的作用域
        args: [], // 执行函数执行时的相关参数（IE下要为数组）
        time: 300, // 执行函数延迟执行的时间
      },
      param
    );
    // 清除执行函数计时器句柄
    arguments.callee(true, fn);
    // 为函数绑定计时器句柄,延迟执行函数
    fn.__throttleID = setTimeout(function () {
      // 执行函数
      fn.apply(p.context, p.args);
    }, p.time);
  }
};
// 返回顶部按钮动画
function movescroll() {
  var top = $(document).scrollTop();
  $("#back").animate(
    {
      top: top + 300,
    },
    400,
    "easeoutcubic"
  );
}

// 监听页面滚动条事件
$(window).on("scroll", function () {
  // 节流执行返回顶部按钮动画
  throttle(movescroll);
});
```

### 懒加载

```js
/**
 * 节流延迟加载图片类
 * param id 延迟加载图片的容器id
 * 注: 图片格式如下 <img src="img/loading.gif" alt="" data-src="img/1.jpg">
 */
function LazyLoad(id) {
  // 获取需要节流延迟加载图片的容器
  this.container = document.getElementById(id);
  // 缓存图片
  this.imgs = this.getImgs();
  // 执行逻辑
  this.init();
}

// 节流延迟加载图片类原型方法
LazyLoad.prototype = {
  // 起始执行逻辑
  init: function () {
    // 加载当前视图图片
    this.update();
    // 绑定事件
    this.bindEvent();
  },
  // 获取延迟加载图片
  getImgs: function () {
    // 新数组容器
    var arr = [];
    // 获取图片
    var imgs = this.container.getElementsByTagName("img");
    // 将获取的图片转化为数组(IE下通过Array.prototype.slice会报错)
    for (var i = 0, len = imgs.length; i < len; i++) {
      arr.push(imgs[i]);
    }
    return arr;
  },
  // 加载图片
  update: function () {
    // 如果图片都加载完成,返回
    if (!this.imgs.length) {
      return;
    }
    // 获取图片长度
    var i = this.imgs.length;
    // 遍历图片
    for (--i; i >= 0; i--) {
      // 如果图片在可视范围内
      if (this.shouldshow(i)) {
        // 加载图片
        this.imgs[i].src = this.imgs[i].getAttribute("data-src");
        // 清除缓存中的此图片
        this.imgs.splice(i, 1);
      }
    }
  },
  // 判断图片是否在可视范围内
  shouldshow: function (i) {
    // 获取当前图片
    var img = this.imgs[i],
      // 可视范围内顶部高度(页面滚动条top值)
      scrollTop = document.documentElement.scrollTop || document.body.scrollTop,
      // 可视范围内底部高度
      scrollBottom = scrollTop + document.documentElement.clientHeight;
    // 图片的顶部位置
    (imgTop = this.pageY(img)),
      // 图片的底部位置
      (imgBottom = imgTop + img.offsetHeight);
    // 判断图片是否在可视范围内:图片底部高度大于可视视图顶部高度并且图片底部高度小于可视视
    // 图底部高度,或者图片顶部高度大于可视视图顶部高度并且图片顶部高度小于可视视图底部高度
    if (
      (imgBottom > scrollTop && imgBottom < scrollBottom) ||
      (imgTop > scrollTop && imgTop < scrollBottom)
    )
      return true;
    // 不满足上面条件则返回false
    return false;
  },
  // 获取元素页面中的纵坐标位置
  pageY: function (element) {
    // 如果元素有父元素
    if (element.offsetParent) {
      // 返回元素+父元素高度
      return element.offsetTop + this.pageY(element.offsetParent);
    } else {
      //否则返回元素高度
      return element.offsetTop;
    }
  },
  // 绑定事件（简化版）
  on: function (element, type, fn) {
    if (element.addEventListener) {
      addEventListener(type, fn, false);
    } else {
      element.attachEvent("on" + type, fn, false);
    }
  },
  // 为窗口绑定resize事件与scroll事件
  bindEvent: function () {
    var that = this;
    this.on(window, "resize", function () {
      // 节流处理更新图片逻辑
      throttle(that.update, {
        context: that,
      });
    });
    this.on(window, "scroll", function () {
      // 节流处理更新图片逻辑
      throttle(that.update, {
        context: that,
      });
    });
  },
};
// 延迟加载container容器内的图片
new LazyLoad("container");
```

### 组装统计

简单的 img 图片即可作为请求触发器,因为当为 img 赋值 src 属性时即向服务器发送了 1 次 get 请求。然而每次调用 LogPack 方法时不会发送统计,而是当缓存的统计数组长度大于 MaxNum 数值时,才会发送统计。下面我们就要实现 sendLog 方法,在该方法中我们要做 3 件事,首先我们要从统计缓存中截取 MaxNum 统计项,然后将截取的统计项打包成 1 个字符串,最后通过请求触发器发送请求。

```js
// 打包统计对象

var LogPack = (function () {
  var data = [], // 请求缓存数组
    MaxNum = 10, // 请求缓存最大值
    itemsplitstr = "|", // 统计项统计参数间隔符
    keyValuesplitstr = "*", // 统计项统计参数键值对间隔符
    img = new Image(); // 请求触发器,通过图片src属性实现简单的get请求

  // 发送请求方法
  function sendLog() {
    // 请求参数
    var logstr = "";
    // 截取MaxNum个统计项发送
    fireData = data.splice(0, MaxNum);
    // 遍历统计项
    for (var i = 0, len = fireData.length; i < len; i++) {
      // 添加统计项顺序索引
      logstr += "log" + i + "=";
      // 遍历统计项内的统计参数
      for (var j in fireData[i]) {
        // 添加统计项参数键 + 间隔符 + 值
        logstr += j + keyValuesplitstr + fireData[i][j];
        // 添加统计项统计参数间隔符
        logstr += itemsplitstr;
      }
      // &符拼接多个统计项
      logstr = logstr.replace(/\|$/, "") + "&";
    }
    // 添加统计项打包长度
    logstr += "logLength=" + len;
    // 请求触发器发送统计
    img.src = "a.gif?" + logstr;
  }

  // 统计方法
  return function (param) {
    // 如果无参数则发送统计
    if (!param) {
      sendLog();
      return;
    }
    // 添加统计项
    data.push(param);
    // 如果统计项大于请求缓存最大值则发送统计请求包
    data.length >= MaxNum && sendLog();
  };
})();

// 测试统计
// 点击统计
btn.onclick = function () {
  LogPack({
    btnId: this.id,
    context: this.innerHTML,
    type: "click",
  });
};
// 点击统计
btn.onmouseover = function () {
  LogPack({
    btnId: this.id,
    context: this.innerHTML,
    type: "mouseover",
  });
};
```
