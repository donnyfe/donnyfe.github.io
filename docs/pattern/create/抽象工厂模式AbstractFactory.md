# 抽象工厂模式 Abstract Factory

抽象工厂模式是设计模式中最抽象的一种，也是创建模式中唯一一种抽象化创建模式。该模式创建出的结果不是一个真实的对象实例，而是一个类簇，它制定了类的结构，这也就区别于简单工厂模式创建单一对象，工厂方法模式创建多类对象。当然由于JavaScript中不支持抽象化创建与虚拟方法，所以导致这种模式不能像其他面向对象语言中应用得那么广泛。

## 应用场景

### 汽车抽象工厂

```js
// 抽象工厂方法
var VehicleFactory = function(subType, superType) {
  // 判断抽象工厂中是否有该抽象类
  if(typeof VehicleFactory[superType] === 'function') {
    // 缓存类
    function F() {};
    // 继承父类属性和方法
    F.prototype = new VehicleFactory[superType]();
    // 将子类constructor指向子类
    subType.constructor = subType;
    // 子类原型继承“父类”
    subType.prototype = new F();
  } else {
    // 不存在该抽象类抛出错误
    throw new Error('未创建该抽象类');
  }
}

// 小汽车抽象类
VehicleFactory.car = function() {
  this.type = 'car';
};

VehicleFactory.car.prototype = {
  getPrice: function() {
    return new Error('抽象方法不能调用');
  },
  getspeed: function() {
    return new Error('抽象方法不能调用');
  }
};

// 公交车抽象类
VehicleFactory.Bus = function() {
 this.type = 'bus';
};

VehicleFactory.Bus.prototype = {
  getPrice: function() {
    return new Error('抽象方法不能调用');
  },
  getPassengerNum: function() {
    return new Error('抽象方法不能调用');
  }
};

// 货车抽象类
VehicleFactory.Truck = function() {
  this.type = 'truck';
};

VehicleFactory.Truck.prototype = {
  getPrice: function() {
    return new Error('抽象方法不能调用');
  },
  getTrainload: function() {
    return new Error('抽象方法不能调用');
  }
}

// 宝马汽车子类
var BMW = function(price, speed) {
  this.price = price;
  this.speed = speed;
}

// 抽象工厂实现对car抽象类的继承
VehicleFactory(BMW, 'car');

BMW.prototype.getPrice = function() {
  return this.price;
}

BMW.prototype.getspeed = function() {
  return this.speed;
}

// 兰博基尼汽车子类
var Lamborghini = function(price, speed) {
  this.price = price;
  this.speed = speed;
}

// 抽象工厂实现对car抽象类的继承
VehicleFactory(Lamborghini, 'car');

Lamborghini.prototype.getPrice = function() {
  return this.price;
}

Lamborghini.prototype.getspeed = function() {
  return this.speed;
}

// 宇通汽车子类
var YUToNG = function(price, passenger) {
  this.price = price;
  this.passenger = passenger;
}

// 抽象工厂实现对Bus抽象类的继承
VehicleFactory(YUToNG, 'Bus');

YUToNG.prototype.getPrice = function() {
  return this.price;
}

YUToNG.prototype.getPassengerNum = function() {
  return this.passenger;
}

// 奔驰汽车子类
var BenzTruck = function(price, trainLoad) {
  this.price = price;
  this.trainLoad = trainLoad;
}

// 抽象工厂实现对Truck抽象类的继承
VehicleFactory(BenzTruck, 'Truck')

BenzTruck.prototype.getPrice = function() {
  return this.price;
}

BenzTruck.prototype.getTrainload = function() {
  return this.price;
}

var truck = new BenzTruck(1000000, 1000)；
console.log(truck.getPrice())；  // 1000000
console.log(truck.type)；         // truck

```
