# 观察者模式 Observer

观察者模式最主要的作用是解决类或对象之间的耦合，解耦两个相互依赖的对象，使其依赖于观察者的消息机制。
这样对于任意一个订阅者对象来说，其他订阅者对象的改变不会影响到自身。
对于每一个订阅者来说，其自身既可以是消息的发出者也可以是消息的执行者，
这都依赖于调用观察者对象的三种方法（订阅消息，注销消息，发布消息）中的哪一种。

团队开发中，尤其是大型项目的模块化开发中，一位工程师很难做到熟知项目中的每个模块，此时为完成一个涉及多模块调用的需求，观察者模式的优势就显而易见了，模块间的信息传递不必要相互引用其他模块，只需要通过观察者模式注册或者发布消息即可。通过观察者模式，工程师间对功能的开发只需要按照给定的消息格式开发各自功能即可，而不必去担忧他人的模块。

## 应用场景

- 师生讲课
- 转盘抽奖

### 类实现

```js
class PubSub {
  constructor() {
    // 一个对象存放所有的消息订阅
    // 每个消息对应一个数组，数组结构如下
    // { "event1": [cb1, cb2] }
    this.events = {}
  }

  subscribe(event, callback) {
    if(this.events[event]) {
      // 如果有人订阅过了，这个键已经存在，就往里面加就好了
      this.events[event].push(callback);
    } else {
      // 没人订阅过，就建一个数组，回调放进去
      this.events[event] = [callback]
    }
  }

  publish(event, ...args) {
    // 取出所有订阅者的回调执行
    const subscribedEvents = this.events[event];

    if(subscribedEvents && subscribedEvents.length) {
      subscribedEvents.forEach(callback => {
        callback.call(this, ...args);
      });
    }
  }

  unsubscribe(event, callback) {
    // 删除某个订阅，保留其他订阅
    const subscribedEvents = this.events[event];

    if(subscribedEvents && subscribedEvents.length) {
      this.events[event] = this.events[event].filter(cb => cb !== callback)
    }
  }
}

// 使用的时候
const pubSub = new PubSub();
pubSub.subscribe('event1', () => {});    // 注册事件
pubSub.publish('event1');                // 发布事件

```

### 闭包实现

```js
// 将观察者放在闭包中，当页面加载就立即执行
var observer = (function() {
  // 防止消息队列暴漏而被篡改故将消息容器作为静态私有变量保存
  var events = {};

  return {
    // 注册信息接口
    regist: function(type, fn) {
      // 如果此消息不存在则应该创建—个该消息类型
      if(typeof events[type] === 'undefined') {
        // 将动作推入到该消息对应的动作执行队列中
        events[type] = [fn];
      } else {
        // 如果此消息存在
        // 将动作方法推入该消息对应的动作执行序列中
        events[type].push(fn);
      }
    },
    // 发布信息接口
    fire: function(type, args) {

        // 如果该消息设有被注册，则返回
        if(!events[type]) return;

        // 定义消息信息
        var events = {
          type: type,                   // 消息类型
          args: args || {}              // 消息携带数据
        },
        i = 0,                             // 消息动作循环变量
        len = events[type].length;    // 消息动作长度

        // 遍历消息动作
        for(; i ＜ len; i++) {
            // 依次执行注册的消息对应的动作序列
            events[type][i].call(this, events);
        }
    },
    // 移除信息接口
    remove: function(type, fn) {
        // 如果消息动作队列存在
        if(events[type] instanceof Array) {
            // 从最后—个消息动作遍历
            var i = events[type].length - 1;

            for(; i >= 0; i--) {
                // 如果存在该动作则在消息动作序列中移除相应动作
                events[type][i] === fn && events[type].splice(i, 1);
            }
        }
    }
  }
})();


observer.regist('test', function(e) {
  console.log(e.type, e.args.msg);
})

observer.fire('test', {msg: '传递参数'});    // test 传递参数

```

### 转圈抽奖

```js
// 实例化一个事件中心
const pubSub = new PubSub();

// 总共有 初始化页面 -> 获取最终结果 -> 运动效果 -> 运动控制 四个模块
// 初始化页面
const domArr = [];
function initHTML(target) {
  // 总共10个可选奖品，也就是10个DIV
  for(let i = 0; i < 10; i++) {
    let div = document.createElement('div');
    div.innerHTML = i;
    div.setAttribute('class', 'item');
    target.appendChild(div);
    domArr.push(div);
  }
}

// 获取最终结果，也就是总共需要转几次，我们采用一个随机数加40(4圈)
function getFinal() {
  let _num = Math.random() * 10 + 40;

  return Math.floor(_num, 0);
}

// 运动模块，具体运动方法
function move(moveConfig) {
  // moveConfig = {
  //   times: 10,     // 本圈移动次数
  //   speed: 50      // 本圈速度
  // }
  let current = 0; // 当前位置
  let lastIndex = 9;   // 上个位置

  const timer = setInterval(() => {
    // 每次移动给当前元素加上边框,移除上一个的边框
    if(current !== 0) {
      lastIndex = current - 1;
    }

    domArr[lastIndex].setAttribute('class', 'item');
    domArr[current].setAttribute('class', 'item item-on');

    current++;

    if(current === moveConfig.times) {
      clearInterval(timer);

      // 转完了一圈广播事件
      if(moveConfig.times === 10) {
        pubSub.publish('finish');
      }
    }
  }, moveConfig.speed);
}

// 运动控制模块，控制每圈的参数
function moveController() {
  let allTimes = getFinal();
  let circles = Math.floor(allTimes / 10, 0);
  let stopNum = allTimes % circles;
  let speed = 250;  
  let ranCircle = 0;

  move({
    times: 10,
    speed
  });    // 手动开启第一次旋转

  // 监听事件，每次旋转完成自动开启下一次旋转
  pubSub.subscribe('finish', () => {
    let time = 0;
    speed -= 50;
    ranCircle++;

    if(ranCircle <= circles) {
      time = 10;
    } else {
      time = stopNum;
    }

    move({
      times: time,
      speed,
    })
  });
}

// 绘制页面，开始转动
initHTML(document.getElementById('root'));
moveController();

```

### 师生讲课

```js
// 对象间解耦

// 学生类
var student = function(result) {
  var that = this;

  // 学生回答结果
  this.result = result;

  // 学生回答问题动作
  this.say = function() {
    console.log(that.result);
  }
};

// 回答问题方法
student.prototype.answer = function(question) {
  // 注册参数问题
  observer.regist(question, this.say);
}

// 学生呼呼睡觉，此时不能回答问题
student.prototype.sleep = function(question) {
  console.log(this.result + ' ' + question + ' 己被注销')
  // 取消对老师问题的监听
  observer.remove(question, this.say)
}

// 教师类
var Teacher = function() {};

// 教师提问问题的方法
Teacher.prototype.ask = function(question) {
  console.log('问题是：' + question);
  // 发布提问消息
  observer.fire(question)
}
```
