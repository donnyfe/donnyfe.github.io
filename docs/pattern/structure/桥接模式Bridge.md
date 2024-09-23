# 桥接模式 Bridge

桥接模式（Bridge）： 在系统沿着多个维度变化的同时，又不增加其复杂度并己达到解耦。

桥接模式最主要的特点即是将实现层（如元素绑定的事件）与抽象层（如修饰页面 UI 逻辑）解耦分离，使两部分可以独立变化，即对结构之间的解构。

而抽象工厂模式与创建者模式主要业务在于创建。

通过桥接模式实现的解耦，使实现层与抽象层分开处理，避免需求的改变造成对象内部的修改，体现了面向对象对拓展的开放及对修改的关闭原则

## 实例

```js
// 多维变量类

// 运动单元
function Speed(x, y) {
  this.x = x;
  this.y = y;
}
Speed.prototype.run = function () {
  console.log("运动起来");
};

// 着色单元
function Color(cl) {
  this.color = cl;
}
Color.prototype.draw = function () {
  console.log("绘制色彩");
};

// 变形单元
function Shape(sp) {
  this.shape = sp;
}
Shape.prototype.change = function () {
  console.log("改变形状");
};

// 说话单元
function Speek(wd) {
  this.word = wd;
}
Speek.prototype.say = function () {
  console.log("书写字体");
};

// 球类
function Ball(x, y, c) {
  // 实现运动单元
  this.speed = new speed(x, y);
  // 实现着色单元
  this.color = new color(c);
}

Ball.prototype.init = function () {
  // 实现运动
  this.speed.run();
  // 实现着色
  this.color.draw();
};

// 人类
function People(x, y, f) {
  this.speed = new speed(x, y);
  this.font = new speek(f);
}
People.prototype.init = function () {
  this.speed.run();
  this.font.say();
};

// 精灵类
function Spirite(x, y, c, s) {
  this.speed = new speed(x, y);
  this.color = new color(c);
  this.shape = new shape(s);
}

Spirite.prototype.init = function () {
  this.speed.run();
  this.color.draw();
  this.shape.change();
};
```
