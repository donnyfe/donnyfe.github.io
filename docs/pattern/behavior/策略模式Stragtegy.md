# 策略模式 Stragtegy

策略模式（Strategy: 将定义的一组算法封装起来，使其相互之间可以替换。

策略模式最主要的特色是创建一系列策略算法，每组算法处理的业务都是相同的，只是处理的过程或者处理的结果不一样，所以它们又是可以相互替换的，这样就解决了算法与使用者之间的耦合。在测试层面上讲，由于每组算法相互之间的独立性，该模式更方便于对每组算法进行单元测试，保证算法的质量。

对于策略模式的优点可以归纳为3点，第一，策略模式封装了一组代码簇，并且封装的代码相互之间独立，便于对算法的重复引用，提高了算法的复用率。第二，策略模式与继承相比，在类的继承中继承的方法是被封装在类中，因此当需求很多算法时，就不得不创建出多种类，这样会导致算法与算法的使用者耦合在一起，不利于算法的独立演化，并且在类的外部改变类的算法难度也是极大的。第三，同状态模式一样，策略模式也是一种优化分支判断语句的模式，采用策略模式对算法封装使得算法更利于维护。

当然策略模式也有其自身的缺点。由于选择哪种算法的决定权在用户，所以对用户来说就必须了解每种算法的实现。这就增加了用户对策略对象的使用成本。其次，由于每种算法间相互独立，这样对于一些复杂的算法处理相同逻辑的部分无法实现共享，这就会造成一些资源的浪费。当然你可以通过享元模式（第十三章）来解决。

对于分支语句的优化，目前为止我们己经学习了3种模式，分别为工厂方法模式，状态模式与策略模式。对于工厂方法模式来说，它是一种创建型模式，他的最终目的是创建对象。而状态模式与策略模式都是行为性模式，不过在状态模式中，其核心是对状态的控制来决定表现行为，所以状态之间通常是不能相互替代的，否则将产生不同的行为结果。而策略模式核心是算法，由于每种算法要处理的业务逻辑相同，因此他们可以相互替换，当然策略模式并不关心使用者环境，因为同一种策略模式最终产出的结果是一定的。

## 应用场景

- 表单验证
- 校验规则
- 价格策略
- 根据评分计算等级

### 表单验证

```js
// 表单正则验证策略对象
var InputStrategy = function() {

  var strategy = {
      // 是否为空
      notNull: function(value) {
        return /\s+/.test(value) ? '请输入内容': '';
      },
      // 是否是—个数字
      number: function(value) {
        return /^[0-9]+(\.[0-9]+)?$/.test(value) ? '' : '请输入数字';
      },
      // 是否是本地电话
      phone: function(value) {
        return /^\d{3}\-\d{8}$|^\d{4}\-\d{7}$/.test(value)
          ?  ''
          : '请输入正确的电话号码格式，如：010-12345678 或 0418-1234567';
      }
  }


  return {
    // 验证接口 type 算法 value 表单值
    check: function(type, value) {
        // 去除收尾空白符
        value = value.replace(/^\s+|\s+$/g, '');
        return strategy[type] ? strategy[type](value): '没有该类型的检测方法'
    },
    // 添加策略
    addstrategy: function(type, fn) {
        strategy[type] = fn;
    }
  }
}();

// 拓展 可以延伸算法
InputStrategy.addstrategy('nickname', function(value) {
    return /^[a-zA-Z]\w{3,7}$/.test(value) ? '' : '请输入4-8位昵称，如：YYQH';
});
```

### 校验规则

```js
// 校验规则策略类
var strategies = {
 isNoEmpty: function(value, errorMsg) {
  if (value == '') {
   return errorMsg
  }
 },
 minLength: function(value, length, errorMsg) {
  if (value.length < length) {
   return errorMsg
  }
 },
 isMobile: function(value, errorMsg) {
  if (!/(^1[3][5][8][0-9]{9}$)/.test(value)) {
   return errorMsg
  }
 }
};

// 校验环境类
function ValidService(strategies) {
 this.strategy = strategies;
 this.caches = [];
};

ValidService.prototype.add = function(value, rules, errorMsg) {

 var ary = rules.split(':') // forExample : 'minLength:10'==[minLength, 10]

 this.cache.push(function() {
  var strategy = ary.shift() //  minLength
  ary.unshift(value) // forExample : formDemo.username
  ary.push(errorMsg); //  ary = [formDemo.username,10]

  return this.strategy[strategy].apply(this, ary) //bring the dom & ary into strategies props.
 });
};

ValidService.prototype.start = function() {
 for (var i = 0; ValidatorFn; ValidatorFn = this.cache[i++]) {
  var msg = ValidatorFn();
  if (msg) {
   return msg;
  }
 };
};

var ValidatorFunc = function(strategies) {

 var validator = new Validator(strategies);
 validator.add(formDemo.username, 'isNoEmpty', 'username cannot be none');
 validator.add(formDemo.password, 'minLength:6', 'password cannot be none');
 validator.add(formDemo.phoneNumber, 'isMoblie', 'phoneNumber cannot be none');

 var errorMsg = validator.start() // get the check result
 return errorMsg // return the result. if exsit ...
};

var submitForm = function() {
 var errorMsg = ValidatorFunc(strategies);
 if (errorMsg) {
  alert(errorMsg);
 }
 return false;
};
```

### 价格策略

```js
// 价格策略对象
var Pricestrategy = function() {

    // 内部算法对象
    var stragtegy = {
        //  100 返 30
        return30: function(price) {
          // parseInt可通过～～、|等运算符替换，要注意此时price要在[-2147483648, 2147483647]之间
          // +price 转化为数字类型
          return +price + parseInt(price / 100) * 30;
        },
        // 100 返 50
        return50: function(price) {
          return +price + parseInt(price / 100) * 50;
        },
        // 9 折
        percent90: function(price) {
          // Javascript 在处理小数乘除法有bug，故运算前转化为整数
          return price * 100 * 90 / 10000;
        },
        // 8 折
        parcent80: function(price) {
          return price * 100 * 80 / 10000;
        },
        // 5 折
        percent50: function() {
          return price * 100 * 50 / 10000;
        }
    }
    // 策略算法调用接口
    return function(algorithm, price) {
      // 如果算法存在，则调用算法，否则返回false
      return stragtegy[algorithm] && stragtegy[algorithm](price)
    }
}();

var price = Pricestrategy('return50', '314.67');
console.log(price);         // 464.67

```

### 数学计算策略

```js
function calculator(type, a, b) {
  const strategy = {
    add: function(a, b) {
      return a + b;
    },
    minus: function(a, b) {
      return a - b;
    },
    division: function(a, b) {
      return a / b;
    },
    times: function(a, b) {
      return a * b;
    }
  }
  
  return strategy[type](a, b);
}

// 使用时
calculator('add', 1, 1);

```

### 根据评分计算等级

```js
// 加权映射关系
var levelMap = {
    S: 10,
    A: 8,
    B: 6,
    C: 4
};

// 组策略
var scoreLevel = {
    basicScore: 80,

    S: function() {
        return this.basicScore + levelMap['S']; 
    },

    A: function() {
        return this.basicScore + levelMap['A']; 
    },

    B: function() {
        return this.basicScore + levelMap['B']; 
    },

    C: function() {
        return this.basicScore + levelMap['C']; 
    }
}

// 调用
function getScore(level) {
    return scoreLevel[level] ? scoreLevel[level]() : 0;
}

console.log(
    getScore('S'),
    getScore('A'),
    getScore('B'),
    getScore('C'),
    getScore('D')
); 
// 90 88 86 84 0
```
