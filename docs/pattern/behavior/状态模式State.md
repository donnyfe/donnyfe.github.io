# 状态模式 State

## 定义

**什么是状态模式？**

状态模式（State）： 当一个对象的内部状态发生改变时，会导致其行为的改变，这看起来像是改变了对象。

状态模式既是解决程序中臃肿的分支判断语句问题，将每个分支转化为一种状态独立出来，方便每种状态的管理又不至于每次执行时遍历所有分支。

在程序中到底产出哪种行为结果，决定于选择哪种状态，而选择何种状态又是在程序运行时决定的。当然状态模式最终的目的即是简化分支判断流程。

## 实例

- 根据不同角色状态显示内容
- 超级玛利亚
- 游戏角色的不同状态（如站立、跑动、跳跃、攻击等，比如角色要站立之后可以根据用户的按键决定他是否可以进入奔跑状态）
- 订单处理系统中订单的不同状态（如新建、已支付、已发货、已完成、已取消等，比如当用户支付订单之后，订单流转到已发货的处理逻辑）。
- 电梯的不同运行状态（如静止、上升、下降、维修状态等，当电梯到达了目的楼层，就可以是否有用户请求电梯，决定是停止还是运行至用户的目标楼层）
- 网络连接的不同状态（如连接中、已连接、断开、重连等，如果配置了断线自动重连，当网络状态变化的时候，自动切换至连接中的状态并处理对应的逻辑）。

### 根据不同角色状态显示内容

```js
// 先把各种角色都包装到一个ShowController类里面
function ShowController() {
  this.role = "";
  this.roleMap = {
    // 领导
    boss: function () {
      showContent1();
      showContent2();
      showContent3();
    },
    // 管理者
    manager: function () {
      showContent1();
      showContent2();
    },
    // 职员
    staff: function () {
      showContent3();
    },
  };
}

// ShowController上添加一个实例方法show，用来根据角色展示不同的内容
ShowController.prototype.show = function () {
  axios.get("xxx").then((role) => {
    this.role = role;
    this.roleMap[this.role]();
  });
};

// 使用时
const control = new ShowController()
control.show();
```

### 超级玛利亚

```js
// 创建超级玛丽状态类
 class Marry {
  constructor() {
   this._currentstate = {}
   this.states = this.initStates()
  }

  initStates() {
   const states = {
    jump: function () {
     // 跳跃
     console.log('jump')
    },
    move: function () {
     // 移动
     console.log('move')
    },
    shoot: function () {
     // 射击
     console.log('shoot')
    },
    squat: function () {
     // 蹲下
     console.log('squat')
    },
   }

   return states
  }
  /** 执行动作 */
  goes() {
   console.log('触发—次动作')
   // 遍历内部状态保存的动作
   for (let i in this._currentstate) {
    // 如果该动作存在则执行
    this.states[i] && this.states[i]()
   }
   // 返回动作控制类
   return this
  }
  /** 变更状态 */
  change() {
   // 组合动作通过传递多个参数实现
   let arg = arguments
   // 重置内部状态
   this._currentstate = {}

   // 如果有动作则添加动作
   if (arg.length) {
    // 遍历动作
    for (let i = 0, len = arg.length; i < len; i++) {
     // 向内部状态中添加动作
     this._currentstate[arg[i]] = true
    }
   }
   // 返回动作控制类
   return this
  }
 }

 const marry = new Marry()
 marry
  .change('jump', 'shoot') // 添加跳跃与射击动作
  .goes() // 执行动作
  .goes()
  .change('jump')
  .goes()
```
