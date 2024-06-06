# State 状态模式

## 什么是状态模式？

状态模式（State）： 当一个对象的内部状态发生改变时，会导致其行为的改变，这看起来像是改变了对象。

状态模式既是解决程序中臃肿的分支判断语句问题，将每个分支转化为一种状态独立出来，方便每种状态的管理又不至于每次执行时遍历所有分支。

在程序中到底产出哪种行为结果，决定于选择哪种状态，而选择何种状态又是在程序运行时决定的。当然状态模式最终的目的即是简化分支判断流程。

## 场景

### 访问权限

```js
// 先把各种角色都包装到一个ShowController类里面
function ShowController() {
  this.role = '';
  this.roleMap = {
    boss: function() {
      showPart1();
      showPart2();
      showPart3();
    },
    manager: function() {
      showPart1();
      showPart2();
    },
    staff: function() {
      showPart3();
    }
  }
}

// ShowController上添加一个实例方法show，用来根据角色展示不同的内容
ShowController.prototype.show = function() {
  axios.get('xxx').then((role) => {
    this.role = role;
    this.roleMap[this.role]();
  });
}

// 使用时
new ShowController().show();

```

### 投票程序

```js
 // 投票结果状态对象
 var Resutlstate = function() {

    // 判断结果保存在内部状态中
    var states = {
        // 每种状态作为—种独立方法保存
        state0: function() {
            // 处理结果0
            console.log('这是第—种情况')
        },

        state1: function() {
            // 处理结果1
            console.log('这是第二种情况')
        },

        state2: function() {
            // 处理结果2
            console.log('这是第三种情况')
        },
        state3: function() {
            // 处理结果3
            console.log('这是第四种情况')
        }
    }

    // 获取某—种状态并执行其对应的方法
    function show(result) {
      states['state' + result] && states['state' + result]();
    }

    return {
      // 返回调用状态方法接口
      show: show
    }
}();

// 展示结果3
Resutlstate.show(3);
```

### 超级玛利亚游戏

```js
// 超级玛利亚
// 创建超级玛丽状态类
var Marrystate = function() {
  // 内部状态私有变量
  var _currentstate = {},
  // 动作与状态方法映射
  states = {
    jump: function() {
        // 跳跃
        console.log('jump');
    },
    move: function() {
        // 移动
        console.log('move');
    },
    shoot: function() {
        // 射击
        console.log('shoot');
    },
    squat: function() {
        // 蹲下
        console.log('squat');
    }
  };

  // 动作控制类
  var Action = {
      // 改变状态方法
      changestate: function() {
        // 组合动作通过传递多个参数实现
        var arg = arguments;
            // 重置内部状态
            _currentstate = {};

        // 如果有动作则添加动作
        if(arg.length) {
          // 遍历动作
          for(var i = 0, len = arg.length; i < len; i++) {
              // 向内部状态中添加动作
              _currentstate[arg[i]] = true;
          }
        }
        // 返回动作控制类
        return this;
      },

      // 执行动作
      goes: function() {
        console.log('触发—次动作');
        // 遍历内部状态保存的动作
        for(var i in _currentstate) {
            // 如果该动作存在则执行
            states[i] && states[i]();
        }
        // 返回动作控制类
        return this;
      },
  }

  // 返回接口方法 change、gose
  return {
      change: Action.changestate,
      goes: Action.goes
  }
}

// 创建—个超级玛丽
var marry = new Marrystate();

marry
    .change('jump', 'shoot')     // 添加跳跃与设计动作
    .goes()                       // 执行动作
    .goes()                       // 执行动作
    .change('shoot')              // 添加射击动作
    .goes();                      // 执行动作
```
