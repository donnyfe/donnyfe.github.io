# 命令模式 Command

命令模式（Command）: 将请求与实现解耦并封装成独立对象，从而使不同的请求对客户端的实现参数化。

命令模式是将执行的命令封装，解决命令的发起者与命令的执行者之间的耦合。每一条命令实质上是一个操作。命令的使用者不必要了解命令的执行者（命令对象）的命令接口是如何实现的、命令是如何接受的、命令是如何执行的。所有的命令都被存储在命令对象中。

优点：

- 解决命令使用者之间的耦合。
- 新的命令很容易加入到命令系统中，供使用者使用。
- 命令的使用具有一致性，多数的命令在一定程度上是简化操作方法的使用的。

缺点:

- 命令模式是对一些操作的封装，这就造成每执行一次操作都要调用一次命令对象，增加了系统的复杂度。

## 应用场景

```js
// 模块实现模块
var viewcommand = (function () {
  var tpl = {
      // 展示图片结构模板
      product: [
        "<div>",
        '<img src="{#src#}"/>',
        "<p>{#text#}</p>",
        "</div>",
      ].join(""),
      // 展示标题结构模板
      title: [
        '<div class="title">',
        '<div class="main">',
        "<h2>{#title#}</h2>",
        "<p>{#tips#}</p>",
        "</div>",
        "</div>",
      ].join(""),
    },
    // 格式化字符串缓存字符串
    html = "";

  // 格式化字符串 如:'<div>{#content#}</div>'用{content:'demo'}替换后可得到字符串:'<div>demo</div>'
  function formatestring(str, obj) {
    // 替换'{#'与'#}'之间的字符串
    return str.replace(/\{#(\w+)#\}/g, function (match, key) {
      return obj[key];
    });
  }

  // 方法集合
  var Action = {
    create: function (data, view) {
      // 解析数据 如果数据是—个数组
      if (data.length) {
        // 遍历数组
        for (var i = 0, len = data.length; i < len; i++) {
          // 将格式化之后的字符串缓存到html中
          html += formatestring(tpl[view], data[i]);
        }
      } else {
        // 直接格式化字符串缓存到html中
        html += formatestring(tpl[view], data);
      }
    },
    // 展示方法
    display: function (container, data, view) {
      // 如果传入数据
      if (data) {
        // 根据给定数据创建视图
        this.create(data, view);
      }
      // 展示模块
      document.getElementById(container).innerHTML = html;
      // 展示后清空缓存的字符串
      html = "";
    },
  };

  // 命令接口
  return function excute(msg) {
    // 解析命令，如果msg.param不是数组则将其转化为数组（apply方法要求第二个参数为数组）
    msg.param =
      object.prototype.tostring.call(msg.param) === "[object Array]"
        ? msg.param
        : [msg.param];
    // Action内部调用的方法引用this，所以此处为保证作用域this执行传入Action
    Action[msg.command].apply(Action, msg.param);
  };
})();

// 产品展示数据
var productData = [
    {
      src: "command/02.jpg",
      text: "绽放的桃花",
    },
    {
      src: "command/03.jpg",
      text: "阳光下的温馨",
    },
    {
      src: "command/04.jpg",
      text: "镜头前的绿色",
    },
  ],
  // 模块标题数据
  titleData = {
    title: "夏日里的—片温馨",
    tips: "暖暖的温情带给人们家的感受。",
  };

viewcommand({
  // 参数说明 方法 display
  command: "display",
  // 参数说明 param1 元素容器 param2 标题数据 param3 元素模板 详见display方法
  param: ["title", titleData, "title"],
});

viewcommand({
  command: "create",
  // 详见 create 方法参数
  param: [
    {
      src: "command/01.jpg",
      text: "迎着朝阳的野菊花",
    },
    "product",
  ],
});

viewcommand({
  command: "display",
  param: ["product", productData, "product"],
});

// 实现对象
var canvascommand = (function () {
  // 获取canvas
  var canvas = document.getElementById("canvas"),
    // canvas元素的上下文引用对象缓存在命令对象的内部
    ctx = canvas.getcontext("2d");

  // 内部方法对象
  var Action = {
    // 填充色彩
    fillstyle: function (c) {
      ctx.fillstyle = c;
    },
    // 填充矩形
    fillRect: function (x, y, width, height) {
      ctx.fillRect(x, y, width, height);
    },
    // 描边色彩
    strokestyle: function (c) {
      ctx.strokestyle = c;
    },
    // 描边矩形
    strokeRect: function (x, y, width, height) {
      ctx.strokeRect(x, y, width, height);
    },
    // 填充字体
    fillText: function (text, x, y) {
      ctx.fillText(text, x, y);
    },
    // 开启路径
    beginPath: function () {
      ctx.beginPath();
    },
    // 移动画笔触电
    moveTo: function (x, y) {
      ctx.moveTo(x, y);
    },
    // 画笔连线
    lineTo: function (x, y) {
      ctx.lineTo(x, y);
    },
    // 绘制弧线
    arc: function (x, y, r, begin, end, dir) {
      ctx.arc(x, y, r, begin, end, dir);
    },
    // 填充
    fill: function () {
      ctx.fill();
      ctx.stroke();
    },
    // 描边
    stroke: function () {},
  };
  return {
    // 命令接口
    excute: function (msg) {
      // 如果设有指令返回
      if (!msg) return;
      // 如果命令是—个数组
      if (msg.length) {
        // 遍历执行多个命令
        for (var i = 0, len = msg.length; i < len; i++)
          arguments.callee(msg[i]);
        // 执行—个命令
      } else {
        // 如果msg.param不是—个数组，将其转化为数组，apply第二个参数要求格式
        msg.param =
          object.prototype.tostring.call(msg.param) === "[object Array]"
            ? msg.param
            : [msg.param];

        // Action内部调用的方法可能引用this，为保证作用域中this指向正确，故传入Action
        Action[msg.command].apply(Action, msg.param);
      }
    },
  };
})();

canvascommand.excute([
  {
    command: "fillstyle",
    param: "red",
  },
  {
    command: "fillRect",
    param: [20, 20, 100, 100],
  },
]);
```
