# 中介者模式 Mediator

中介者模式（Mediator: 通过中介者对象封装一系列对象之间的交互，使对象之间不再相互引用，降低他们之间的耦合。有时中介者对象也可改变对象之间的交互。

同观察者模式一样，中介者模式的主要业务也是通过模块间或者对象间的复杂通信，来解决模块间或对象间的耦合。对于中介者对象的本质是分装多个对象的交互，并且这些对象的交互一般都是在中介者内部实现的。

与外观模式的封装特性相比，中介者模式对多个对象交互地封装，且这些对象一般处于同一层面上，并且封装的交互在中介者内部，而外观模式封装的目的是为了提供更简单的易用接口，而不会添加其他功能。

与观察者模式相比，虽然两种模式都是通过消息传递实现对象间或模块间的解耦。观察者模式中的订阅者是双向的，既可以是消息的发布者，也可以是消息的订阅者。而在中介者模式中，订阅者是单向的，只能是消息的订阅者。而消息统一由中介者对象发布，所有的订阅者对象间接地被中介者管理。

## 应用场景

```js
//中介者对象
var Mediator = (function () {
  // 消息对象
  var _msg = {};
  return {
    /***
     * 订阅消息方法
     * 参数 type   消息名称
     * 参数 action  消息回调函数
     ****/
    register: function (type, action) {
      // 如果该消息存在
      if (_msg[type])
        // 存入回调函数
        _msg[type].push(action);
      else {
        // 不存在 则建立该消息容器
        _msg[type] = [];
        // 存入新消息回调函数
        _msg[type].push(action);
      }
    },
    /***
     * 发布消息方法
     * 参数 type 消息名称
     ****/
    send: function (type) {
      // 如果该消息己经被订阅
      if (_msg[type]) {
        // 遍历己存储的消息回调函数
        for (var i = 0, len = _msg[type].length; i < len; i++) {
          // 执行该回调函数
          _msg[type][i] && _msg[type][i]();
        }
      }
    },
  };
})();

// 单元测试
// 订阅demo消息 执行回调函数--输出first
Mediator.register("demo", function () {
  console.log("first");
});

// 订阅demo消息 执行回调函数--输出second
Mediator.register("demo", function () {
  console.log("second");
});

// 发布demo消息
Mediator.send("demo");
// 输出结果依次为
// first
// second

/****
显隐导航小组件

* 参数 mod 模块
* 参数 tag 处理的标签（ 消息提醒b， 网址span）
* 参数 showorHide 显示还是隐藏
****/
var showHideNavWidget = function (mod, tag, showorHide) {
  // 获取导航模块
  var mod = document.getElementById(mod),
    // 获取下面的标签名为tag的元素
    tag = mod.getElementsByTagName(tag),
    // 如果设置为false或者为hide则值为hidden，否则为visible
    showorHide = !showorHide || showorHide == "hide" ? "hidden" : "visible";

  // 占位隐藏这些标签
  for (var i = tag.length - 1; i >= 0; i--) {
    tag.style.visibility = showorHide;
  }
};

// 用户收藏导航模块
(function () {
  // …其他交互逻辑
  // 订阅隐藏用户收藏导航消息提醒消息
  Mediator.register("hideAllNavNum", function () {
    showHideNavWidget("collection_nav", "b", false);
  });
  // 订阅显示用户收藏导航消息提醒消息
  Mediator.register("showAllNavNum", function () {
    showHideNavWidget("collection_nav", "b", true);
  });
  // 订阅隐藏用户收藏导航网址消息
  Mediator.register("hideAllNavUrl", function () {
    showHideNavWidget("collection_nav", "span", false);
  });
  // 订阅显示用户收藏导航网址消息
  Mediator.register("showAllNavUrl", function () {
    showHideNavWidget("collection_nav", "span", true);
  });
})();

// 推荐用户导航
(function () {
  // …其他交互逻辑
  // 订阅隐藏推荐用户导航消息提醒消息
  Mediator.register("hideAllNavNum", function () {
    showHideNavWidget("recommend_nav", "b", false);
  });
  // 订阅显示推荐用户导航消息提醒消息
  Mediator.register("showAllNavNum", function () {
    showHideNavWidget("recommend_nav", "b", true);
  });
})();

// 最近常用导航
(function () {
  // …其他交互逻辑
  // 订阅显示最近常用导航网址消息
  Mediator.register("hideAllNavUrl", function () {
    showHideNavWidget("recently_nav", "span", "hide");
  });
  // 订阅显示最近常用导航网址消息
  Mediator.register("showAllNavUrl", function () {
    showHideNavWidget("recently_nav", "span", "show");
  });
})();

// 设置层模块
(function () {
  // 消息提醒选框
  var hideNum = document.getElementById("hide_num"),
    // 网址选框
    hideUrl = document.getElementById("hide_url");
  // 消息提醒选框事件
  hideNum.onchange = function () {
    // 如果勾选
    if (hideNum.checked) {
      // 中介者发布隐藏消息提醒功能消息
      Mediator.send("hideAllNavNum");
    } else {
      // 中介者发布显示消息提醒功能消息
      Mediator.send("showAllNavNum");
    }
  };
  // 网址选框事件
  hideUrl.onchange = function () {
    // 如果勾选
    if (hideUrl.checked) {
      // 中介者发布隐藏所有网址功能消息
      Mediator.send("hideAllNavUrl");
    } else {
      // 中介者发布显示所有网址功能消息
      Mediator.send("showAllNavUrl");
    }
  };
})();
```
