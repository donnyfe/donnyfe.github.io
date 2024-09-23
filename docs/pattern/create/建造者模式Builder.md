# 建造者模式 Builder

建造者模式（Builder）： 将一个复杂对象的构建层与其表示层相互分离，同样的构建过程可采用不同的表示。

它更多关心的是创建这个对象的整个过程，甚至于创建对象的每一个细节，比如创建一个人，我们创建的结果不仅仅要得到人的实例，还要关注创建人的时候，这个人应该穿什么衣服，男的还是女的，兴趣爱好都是什么。

在建造者模式中我们关心的是对象创建过程，因此我们通常将创建对象的类模块化，这样使被创建的类的每一个模块都可以得到灵活的运用与高质量的复用。当然我们最终的需求是要得到一个完整的个体，因此在拆分创建的整个过程，我们将得到一个统一的结果。

当然这种方式对于整体对象类的拆分无形中增加了结构的复杂性，因此如果对象粒度很小，或者模块间的复用率很低并且变动不大，我们最好还是要创建整体对象。

## 实例

- 应聘者
- 编辑器

### 应聘者

分析:

- 需要一个人类
- 需要一个姓名类
- 需要一个职位类

```js
// 创建一个人类
var Human = function(param) {
  // 技能
  this.skill = param && param.skill || '保密';
  // 兴趣爱好
  this.hobby = param && param.hobby || '保密';
}

// 人类原型方法
Human.prototype = {
  getskill: function() {
    return this.skill;
  },
  getHobby: function() {
    return this.hobby;
  }
}

// 实例化姓名类
var Named = function(name) {
  var that = this;
  // 构造器
  // 构造函数解析姓名的姓与名
  (function(name, that) {
    that.wholeName = name;
    if(name.indexof(' ') ＞ -1) {
      that.FirstName = name.slice(0, name.indexof(' '));
      that.secondName = name.slice(name.indexof(' '));
    }
  })(name, that);
}

// 实例化职位类
var Work = function(work) {
  var that = this;
  // 构造器
  // 构造函数中通过传入的职位特征来设置相应职位以及描述
  (function(work, that) {
    switch(work) {
      case 'code':
        that.work = '工程师';
        that.workDescript = '每天沉醉于编程';
        break;
      case 'UI':
      case 'UE':
        that.work = '设计师';
        that.workDescript = '设计更似—种艺术';
        break;
      case 'teach':
        that.work = '教师';
        that.workDescript = '分享也是—种快乐';
        break;
      default:
        that.work = work;
        that.workDescript = '对不起，我们还不清楚您所选择职位的相关描述';
    }
  })(work, that);
}

// 更换期望的职位
Work.prototype.changeWork = function(work) {
  this.work = work;
}

// 添加对职位的描述
Work.prototype.changeDescript = function(setence) {
  this.workDescript = setence;
}


/*
* 应聘者建造者
* 参数 name: 姓名（全名）
* 参数 work: 期望职位
*/
var Person = function(name, work) {
  // 创建应聘者缓存对象
  var person = new Human();
  // 创建应聘者姓名解析对象
  person.name = new Named(name);
  // 创建应聘者期望职位
  person.work = new Work(work);
  // 将创建的应聘者对象返回
  return person;
}
```

### 编辑器

分析:

- 编辑器本身肯定需要一个类，是给外部调用的接口
- 需要一个控制参数初始化和页面渲染的类
- 需要一个控制字体的类
- 需要一个状态管理的类

```js
// 编辑器本身，对外暴露
function Editor() {
  // 编辑器里面就是将各个模块组合起来实现功能
  this.initer = new HtmlInit();
  this.fontController = new FontController();
  this.stateController = new StateController(this.fontController);
}

// 初始化参数，渲染页面
function HtmlInit() {}
// 初始化样式
HtmlInit.prototype.initStyle = function () {};
// 渲染DOM
HtmlInit.prototype.renderDom = function () {};

// 字体控制器
function FontController() {}
// 改变字体颜色
FontController.prototype.changeFontColor = function () {};
// 改变字体大小
FontController.prototype.changeFontSize = function () {};

// 状态控制器
function StateController(fontController) {
  this.states = []; // 一个数组，存储所有状态
  this.currentState = 0; // 一个指针，指向当前状态
  this.fontController = fontController; // 将字体管理器注入，便于改变状态的时候改变字体
}
// 保存状态
StateController.prototype.saveState = function () {};
// 后退状态
StateController.prototype.backState = function () {
  // 取出上一个状态
  var state = this.states[this.currentState - 1];
  // 改回上次颜色
  this.fontController.changeFontColor(state.color);
  // 改回上次大小
  this.fontController.changeFontSize(state.size);
};
// 前进状态
StateController.prototype.forwardState = function () {};
```
