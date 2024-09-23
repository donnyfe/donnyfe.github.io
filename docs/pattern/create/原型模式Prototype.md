# 原型模式 Prototype

原型模式就是将原型对象指向创建对象的类，使这些类共享原型对象的方法与属性。当然 JavaScript 是基于原型链实现对象之间的继承，这种继承是基于一种对属性或者方法的共享，而不是对属性和方法的复制。

原型模式可以让多个对象分享同一个原型对象的属性与方法，这也是一种继承方式，不过这种继承的实现是不需要创建的，而是将原型对象分享给那些继承的对象。当然有时需要让每个继承对象独立拥有一份原型对象，此时我们就需要对原型对象进行复制。

由此我们可以看出，原型对象更适合在创建复杂的对象时，对于那些需求一直在变化而导致对象结构不停地改变时，将那些比较稳定的属性与方法共用而提取的继承的实现。

## 实例

- 图片轮播

### 图片轮播

```js
// 图片轮播类
var LoopImages = function (imgArr, container) {
  // 轮播图片数组
  this.imagesArray = imgArr;
  // 轮播图片容器
  this.container = container;
  // 创建轮播图片
  this.createImage = function () {};
  // 切换下—张图片
  this.changeImage = function () {};
};

// 上下滑动切换类
var slideLoopImg = function (imgArr, container) {
  // 构造函数继承图片轮播类
  LoopImages.call(this, imgArr, container);
  // 重写继承的切换下—张图片方法
  this.changeImage = function () {
    console.log("slideLoopImg changeImage function");
  };
};

// 渐隐切换类
var FadeLoopImg = function (imgArr, container, arrow) {
  // 构造函数继承图片轮播类
  LoopImages.call(this, imgArr, container);
  // 切换箭头私有变量
  this.arrow = arrow;
  // 重写继承的切换下—张图片方法
  this.changeImage = function () {
    console.log("FadeLoopImg changeImage function");
  };
};

var fadeImg = new FadeLoopImg(
  ["01.jpg", "02.jpg", "03.jpg", "04.jpg"],
  "slide",
  ["left.jpg", "right.jpg"]
);

fadeImg.changeImage(); // FadeLoopImg changeImage function
```

```js
// 图片轮播类
var LoopImages = function (imgArr, container) {
  // 轮播图片数组
  this.imagesArray = imgArr;
  // 轮播图片容器
  this.container = container;
};

LoopImages.prototype = {
  // 创建轮播图片
  createImage: function () {
    console.log("LoopImages createImage function");
  },
  // 切换下—张图片
  changeImage: function () {
    console.log("LoopImages changeImage function");
  },
};

// 上下滑动切换类
var slideLoopImg = function (imgArr, container) {
  // 构造函数继承图片轮播类
  LoopImages.call(this, imgArr, container);
};

slideLoopImg.prototype = new LoopImages();

// 重写继承的切换下—张图片方法
slideLoopImg.prototype.changeImage = function () {
  console.log("slideLoopImg changeImage function");
};

// 渐隐切换类
var FadeLoopImg = function (imgArr, container, arrow) {
  LoopImages.call(this, imgArr, container);
  // 切换箭头私有变量
  this.arrow = arrow;
};

FadeLoopImg.prototype = new LoopImages();

FadeLoopImg.prototype.changeImage = function () {
  console.log("FadeLoopImg changeImage function");
};

// 测试用例
// slide
console.log(fadeImg.container);
// FadeLoopImg changeImage function
fadeImg.changeImage();

LoopImages.prototype.getImageLength = function () {
  return this.imagesArray.length;
};

FadeLoopImg.prototype.getcontainer = function () {
  return this.container;
};

console.log(fadeImg.getImageLength()); // 4
console.log(fadeImg.getcontainer()); //slide
```
