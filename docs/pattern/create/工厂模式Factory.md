# 工厂模式 Factory

工厂模式主要是为了创建对象实例或者类簇（抽象工厂），关心的是最终产出（创建）的是什么。不关心你创建的整个过程，仅仅需要知道最终创建的结果。所以通过工厂模式我们得到的都是对象实例或者类簇。

根据抽象程度划分工厂模式类型：

- 简单工厂模式（静态工厂方法）；作用：用来创建某一种产品对象的实例，用来创建单一对象；
- 复杂工厂模式（工厂方法模式）；作用：是将创建实例推迟到子类中进行；
- 超级工厂模式（抽象工厂模式）；作用：是对类的工厂抽象用来创建产品类簇，不负责创建某一类产品的实例

## 简单工厂模式

### 用户工厂(简单工厂)

```js
class User {
  //构造器
  constructor(opt) {
    this.name = opt.name;
    this.viewPage = opt.viewPage;
  }

  //静态方法
  static getInstance(role) {
    switch (role) {
      case "superAdmin":
        return new User({
          name: "超级管理员",
          viewPage: ["首页", "通讯录", "发现页", "应用数据", "权限管理"],
        });
        break;
      case "admin":
        return new User({
          name: "管理员",
          viewPage: ["首页", "通讯录", "发现页", "应用数据"],
        });
        break;
      case "user":
        return new User({
          name: "普通用户",
          viewPage: ["首页", "通讯录", "发现页"],
        });
        break;
      default:
        throw new Error("参数错误, 可选参数:superAdmin、admin、user");
    }
  }
}

//调用
let superAdmin = User.getInstance("superAdmin");
let admin = User.getInstance("admin");
let normalUser = User.getInstance("user");
```

### 角色工厂(简单工厂)

```js
const RoleFactory = function (role) {
  function SuperAdmin() {
    (this.name = "超级管理员"),
      (this.viewPage = ["首页", "通讯录", "发现页", "应用数据", "权限管理"]);
  }
  function Admin() {
    (this.name = "管理员"),
      (this.viewPage = ["首页", "通讯录", "发现页", "应用数据"]);
  }
  function NormalUser() {
    (this.name = "普通用户"), (this.viewPage = ["首页", "通讯录", "发现页"]);
  }

  switch (role) {
    case "superAdmin":
      return new SuperAdmin();
      break;
    case "admin":
      return new Admin();
      break;
    case "user":
      return new NormalUser();
      break;
    default:
      throw new Error("参数错误, 可选参数:superAdmin、admin、user");
  }
};

let superAdmin = RoleFactory("superAdmin");
let admin = RoleFactory("admin");
let normalUser = RoleFactory("user");
```

进一步优化

```js
let RoleFactory = function (role) {
  function Role(opt) {
    this.name = opt.name;
    this.viewPage = opt.viewPage;
  }

  switch (role) {
    case "superAdmin":
      return new Role({
        name: "超级管理员",
        viewPage: ["首页", "通讯录", "发现页", "应用数据", "权限管理"],
      });
      break;
    case "admin":
      return new Role({
        name: "管理员",
        viewPage: ["首页", "通讯录", "发现页", "应用数据"],
      });
      break;
    case "user":
      return new Role({
        name: "普通用户",
        viewPage: ["首页", "通讯录", "发现页"],
      });
      break;
    default:
      throw new Error("参数错误, 可选参数:superAdmin、admin、user");
  }
};

//调用
let superAdmin = RoleFactory("superAdmin");
let admin = RoleFactory("admin");
let normalUser = RoleFactory("user");
```

缺点：对象不是上面的 3 个而是 30 个或更多时，这个函数会成为一个庞大的超级函数，便得难以维护。所以，简单工厂只能作用于创建的对象数量较少，对象的创建逻辑不复杂时使用。

```js
// 安全模式创建的工厂方法函数
const RoleFactory = function (role) {
  if (this instanceof RoleFactory) {
    return new this[role]();
  } else {
    return new RoleFactory(role);
  }
};

//工厂方法函数的原型中设置所有对象的构造函数
RoleFactory.prototype = {
  SuperAdmin: function () {
    (this.name = "超级管理员"),
      (this.viewPage = ["首页", "通讯录", "发现页", "应用数据", "权限管理"]);
  },
  Admin: function () {
    (this.name = "管理员"),
      (this.viewPage = ["首页", "通讯录", "发现页", "应用数据"]);
  },
  NormalUser: function () {
    (this.name = "普通用户"), (this.viewPage = ["首页", "通讯录", "发现页"]);
  },
};

//调用
let superAdmin = RoleFactory("SuperAdmin");
let admin = RoleFactory("Admin");
let normalUser = RoleFactory("NormalUser");

// 调用
let factory = new RoleFactory();
let superAdmin = new factory.SuperAdmin();
```

在上面的调用函数的过程中, 一旦我们在任何阶段忘记使用 new, 那么就无法正确获取到 superAdmin 这个对象。其目的在于解决对 new 的疏忽。

## 复杂工厂模式

### 用户工厂(复杂工厂)

```js
class User {
  constructor(name = "", viewPage = []) {
    if (new.target === User) {
      throw new Error("抽象类不能实例化!");
    }
    this.name = name;
    this.viewPage = viewPage;
  }
}

class UserFactory extends User {
  constructor(name, viewPage) {
    super(name, viewPage);
  }
  create(role) {
    switch (role) {
      case "superAdmin":
        return new UserFactory("超级管理员", [
          "首页",
          "通讯录",
          "发现页",
          "应用数据",
          "权限管理",
        ]);
        break;
      case "admin":
        return new UserFactory("普通用户", ["首页", "通讯录", "发现页"]);
        break;
      case "user":
        return new UserFactory("普通用户", ["首页", "通讯录", "发现页"]);
        break;
      default:
        throw new Error("参数错误, 可选参数:superAdmin、admin、user");
    }
  }
}

let userFactory = new UserFactory();
let superAdmin = userFactory.create("superAdmin");
let admin = userFactory.create("admin");
let user = userFactory.create("user");
```

## 超级工厂模式

### 用户工厂(超级工厂)

```js
class User {
  constructor(type) {
    if (new.target === User) {
      throw new Error("抽象类不能实例化!");
    }
    this.type = type;
  }
}

class UserOfWechat extends User {
  constructor(name) {
    super("wechat");
    this.name = name;
    this.viewPage = ["首页", "通讯录", "发现页"];
  }
}

class UserOfQq extends User {
  constructor(name) {
    super("qq");
    this.name = name;
    this.viewPage = ["首页", "通讯录", "发现页"];
  }
}

class UserOfWeibo extends User {
  constructor(name) {
    super("weibo");
    this.name = name;
    this.viewPage = ["首页", "通讯录", "发现页"];
  }
}

function getAbstractUserFactory(type) {
  switch (type) {
    case "wechat":
      return UserOfWechat;
      break;
    case "qq":
      return UserOfQq;
      break;
    case "weibo":
      return UserOfWeibo;
      break;
    default:
      throw new Error("参数错误, 可选参数:superAdmin、admin、user");
  }
}

let WechatUserClass = getAbstractUserFactory("wechat");
let QqUserClass = getAbstractUserFactory("qq");
let WeiboUserClass = getAbstractUserFactory("weibo");

let wechatUser = new WechatUserClass("微信小李");
let qqUser = new QqUserClass("QQ小李");
let weiboUser = new WeiboUserClass("微博小李");
```

### 社交用户(超级工厂)

超级工厂，它不直接创建实例，而是通过类的继承进行类簇的管理。抽象工厂模式一般用在多人协作的超大型项目中，并且严格的要求项目以面向对象的思想进行完成。

```js
let AccountAbstractFactory = function (subType, superType) {
  //判断抽象工厂中是否有该抽象类
  if (typeof AccountAbstractFactory[superType] === "function") {
    //缓存类
    function F() {}
    //继承父类属性和方法
    F.prototype = new AccountAbstractFactory[superType]();
    //将子类的constructor指向子类
    subType.constructor = subType;
    //子类原型继承父类
    subType.prototype = new F();
  } else {
    throw new Error("抽象类不存在!");
  }
};

//微信用户抽象类
AccountAbstractFactory.WechatUser = function () {
  this.type = "wechat";
};
AccountAbstractFactory.WechatUser.prototype = {
  getName: function () {
    return new Error("抽象方法不能调用");
  },
};

//qq用户抽象类
AccountAbstractFactory.QqUser = function () {
  this.type = "qq";
};
AccountAbstractFactory.QqUser.prototype = {
  getName: function () {
    return new Error("抽象方法不能调用");
  },
};

//新浪微博用户抽象类
AccountAbstractFactory.WeiboUser = function () {
  this.type = "weibo";
};
AccountAbstractFactory.WeiboUser.prototype = {
  getName: function () {
    return new Error("抽象方法不能调用");
  },
};

// AccountAbstractFactory就是一个抽象工厂方法，该方法在参数中传递子类和父类，在方法体内部实现了子类对父类的继承。对抽象工厂方法添加抽象类的方法我们是通过点语法进行添加的。

//普通微信用户子类
function UserOfWechat(name) {
  this.name = name;
  this.viewPage = ["首页", "通讯录", "发现页"];
}
//抽象工厂实现WechatUser类的继承
AccountAbstractFactory(UserOfWechat, "WechatUser");
//子类中重写抽象方法
UserOfWechat.prototype.getName = function () {
  return this.name;
};

//普通qq用户子类
function UserOfQq(name) {
  this.name = name;
  this.viewPage = ["首页", "通讯录", "发现页"];
}
//抽象工厂实现QqUser类的继承
AccountAbstractFactory(UserOfQq, "QqUser");
//子类中重写抽象方法
UserOfQq.prototype.getName = function () {
  return this.name;
};

//普通微博用户子类
function UserOfWeibo(name) {
  this.name = name;
  this.viewPage = ["首页", "通讯录", "发现页"];
}
//抽象工厂实现WeiboUser类的继承
AccountAbstractFactory(UserOfWeibo, "WeiboUser");
//子类中重写抽象方法
UserOfWeibo.prototype.getName = function () {
  return this.name;
};

//实例化微信用户
let wechatUserA = new UserOfWechat("微信小李");
wechatUserA.getName();
wechatUserA.type; // 微信小李 wechat

let wechatUserB = new UserOfWechat("微信小王");
wechatUserB.getName(); // 微信小王
wechatUserB.type; // wechat

//实例化qq用户
let qqUserA = new UserOfQq("QQ小李");
qqUserA.getName(); // QQ小李
qqUserA.type; // qq

let qqUserB = new UserOfQq("QQ小王");
qqUserB.getName(); // QQ小王
qqUserB.type; // qq

//实例化微博用户
let weiboUserA = new UserOfWeibo("微博小李");
weiboUserA.getName(); // 微博小李
weiboUserA.type; // weibo

let weiboUserB = new UserOfWeibo("微博小王");
weiboUserB.getName(); // 微博小王
weiboUserB.type; // weibo
```

## 应用场景

- JQuery $
- Vue createElementVNode
- React createElement
- 用户类型（QQ 用户、微信用户、微博用户）
- 角色类型（超级管理员、管理员、普通用户）

### JQuery $

```ts
window.$ = (selector: string) => {
  return new JQuery(selector);
};
```

### 弹窗组件

```js
(function () {
  function Popup(type, content, color) {
    // 单例模式
    if (this instanceof Popup) {
      return new this[type](content, color);
    } else {
      return new Popup(type, content, color);
    }
  }
  // 消息弹窗
  Popup.prototype.infoPopup = function (content, color) {};
  // 确认对话框
  Popup.prototype.confirmPopup = function (content, color) {};
  // 取消
  Popup.prototype.cancelPopup = function (content, color) {};

  window.Popup = Popup;
})();

let infoPopup = Popup("infoPopup", content, color);
```

### RPG 职业（战士、法师、射手）

```js
// 先创建各个角色的构造函数
function Warrior() {
  this.skill = "回血";
  this.blood = 150; // 初始化生命值
  this.hit = 8; // 普通攻击伤害
  // 其他特有属性和方法比如生命值
}
function Mage() {
  this.skill = "冰冻";
  this.blood = 120; // 初始化生命值
  this.hit = 3; // 普通攻击伤害
  // 其他特有属性和方法
}
function Archer() {
  this.skill = "消耗";
  this.blood = 110; // 初始化生命值
  this.hit = 10; // 普通攻击伤害
  // 其他特有属性和方法
}

// 工厂对象 可以是普通对象是的方法 和 构造函数，这里使用前者
const RoleFactory = {
  createRole(role) {
    let roler;
    switch (role) {
      case "战士":
        roler = new Warrior();
        break;
      case "法师":
        roler = new Mage();
        break;
      case "射手":
        roler = new Archer();
        break;
      // 后续扩展角色直接追加选择语句和添加角色构造函数
      default:
        roler = new Warrior();
    }
  },
};
Object.freeze(RoleFactory); // 冻结该对象，防止他人操作

// 创建各个角色的实例
var warrior = RoleFactory.createRole("战士"); // 创建一个战士
var mage = RoleFactory.createRole("法师"); // 创建一个法师
var arche = RoleFactory.createRole("射手"); // 创建一个射手

// 或者这样设计工厂函数
const RoleFactory = function (role) {
  return new role();
};

var warrior = RoleFactory(Warrior); // 创建一个战士
var mage = RoleFactory(Mage); // 创建一个法师
var arche = RoleFactory(Archer); // 创建一个射手
```

### 课程工厂

```js
// 安全模式创建的工厂类
var Factory = function(type, content) {
  if(this instanceof Factory) {
    return new this[type](content);
  } else {
    return new Factory(type, content);
  }
}

// 工厂原型中设置创建所有类型数据对象的基类
Factory.prototype = {
  Java: function(content){
    //  ……
  },
  Javascript: function(content){
    //  ……
  },
  UI: function(content){

    this.content = content;

    (function(content){
      var div = document.createElement('div');
      div.innerHTML = content;
      div.style.border = '1px solid red';
      document.getElementById('container').appendchild(div);
    })(content);
  },
  php: function(content){
    //  ……
  }
};

var data = [
 {type: 'Javascript', content: 'Javascript哪家强'},
 {type: 'Java', content: 'Java哪家强'},
 {type: 'php', content: 'php哪家强'},
 {type: 'UI', content: 'UI哪家强'},
 {type: 'UI', content: 'UI哪家强'},
 {type: 'Javascript', content: 'Javascript哪家强'},
 {type: 'Javascript', content: 'Javascript哪家强'}
];


for(var i = 6; i ＞= 0; i--) {
 Factory(s[i].type, s[i].content);
}
```

### 运动工厂

```js
// 篮球基类
var Basketball = function () {
  this.intro = "篮球";
};

Basketball.prototype = {
  getMember: function () {},
  getBallSize: function () {},
};

// 足球基类
var Football = function () {
  this.intro = "足球在世界范围内很流行";
};

Football.prototype = {
  getMember: function () {
    console.log("每个队伍需要11名队员");
  },
  getBallsize: function () {
    console.log("足球很大");
  },
};

// 网球基类
var Tennis = function () {
  this.intro = "每年有很多网球系列赛";
};

Tennis.prototype = {
  getMember: function () {
    console.log("每个队伍需要1名队员");
  },
  getBallsize: function () {
    console.log("网球很小");
  },
};

// 运动工厂
var sportsFactory = function (name) {
  switch (name) {
    case "NBA":
      return new Basketball();
    case "wordcup":
      return new Football();
    case "Frenchopen":
      return new Tennis();
  }
};
var footnall = sportsFactory("wordcup");
footnall.getMember();
```
