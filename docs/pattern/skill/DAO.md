# 数据访问对象模式 Data access object-DAO

数据访问对象模式（Data access object-DAO: 抽象和封装对数据源的访问与存储,DAO通过对数据源链接的管理方便对数据的访问与存储。

存储数据库不同于服务器端关系型数据库,它是将数据保存在localStorage这个对象里。

localStorage相当于一个大容器,对于同一个站点,它里面根本没有分割库,所以别人使用localStorage的时候和你用的是一个,所以你应该将每次存储的数据字段前面添加前缀标识来‘分割’localStorage 存储。

本地存储对数据的保存实际上是localStorage的一个字符串属性。

有时对于本地存储来说,了解他的存储时间是很有必要的,它能方便日后对数据的管理（如定期清除）,因此你可以添加一个时间戳,但对于每个人存储的数据内容不同,时间戳与将要存储的数据都是属性字符串,所以他们之间要设置一个拼接符。

数据访问对象（DAO）模式即是对数据库的操作（如简单的CRUD创建、读取、更新、删除）进行封装,用户不必为操作数据库感到苦恼, DAO 己经为我们提供了简单而统一的操作接口。并且对于使用者来说,不必了解DAO内部操作是如何实现的,有时甚至不必了解数据库是如何操作的。

对于后端数据库来说（如MongoDB）,DAO对象甚至会保留对数据库的链接,这样我们每次操作数据库时不必一次次地向数据库发送链接请求。

DAO 是一个对象,因此它封装了属性和方法,并通过这些属性与方法管理着数据库。因此有时为了实现需求我们还可以对DAO对象进行拓展。但是更佳实践是对DAO做一层试用于你自己的封装,这样在团队开发中不会影响到他人的使用。

## 场景

- 封装本地数据库Localstorage操作
- 封装数据库操作方法

## 示例

### 封装本地数据库操作

```js
/**
 * 本地存储类
 * 参数 preId 本地存储数据库前缀
 * 参数 timesign 时间戳与存储数据之间的拼接符
 */
var BaseLocalstorage = function (preId, timesign) {
  // 定义本地存储数据库前缀
  this.preId = preId;
  // 定义时间戳与存储数据之间的拼接符
  this.timesign = timesign || '|-|';
}
// 本地存储类原型方法
BaseLocalstorage.prototype = {
  // 操作状态
  status: {
    SUCCESS: 0, // 成功
    FAILURE: 1, // 失败
    OVERFLOW: 2, // 溢出
    TIMEOUT: 3 // 过期
  },

  // 保存本地存储链接
  storage: localstorage || window.localstorage,

  // 获取本地存储数据库数据真实字段
  getKey: function (key) {
    return this.preId + key;
  },
  /**
   * 添加（ 修改） 数据
   * 参数 key: 数据字段标识
   * 参数 value: 数据值
   * 参数 callbac: 回调函数
   * 参数 time: 添加时间
   */
  set: function (key, value, callback, time) {
    // 默认操作状态时成功
    var status = this.status.SUCCESS,
      // 获取真实字段
      key = this.getKey(key);

    try {
      // 参数时间参数时获取时间戳
      time = new Date(time).getTime() || time.getTime();
    } catch (e) {
      // 为传入时间参数或者时间参数有误获取默认时间:—个月
      time = new Date().getTime() + 1000 * 60 * 60 * 24 * 31;
    }

    try {
      // 向数据库中添加数据
      this.storage.setItem(key, time + this.timesign + value);
    } catch (e) {
      // 溢出失败,返回溢出状态
      status = this.status.OVERFLOW;
    }

    // 有回调函数则执行回调函数并传入参数操作状态,真实数据字段标识以及存储数据值
    callback && callback.call(this, status, key, value);
  },


  /****
   * 获取数据
   * 参数 key: 数据字段标识
   * 参数 callbac: 回调函数
   */
  get: function (key, callback) {
    // 默认操作状态时成功
    var status = this.status.SUCCESS,
      // 获取
      key = this.getKey(key),
      // 默认值为空
      value = null,
      // 时间戳与存储数据之间的拼接符长度
      timesignLen = this.timesign.length,
      // 缓存当前对象
      that = this,
      // 时间戳与存储数据之间的拼接符起始位置
      index,
      // 时间戳
      time,
      // 最终获取的数据
      result;

    try {
      // 获取字段对应的数据字符串
      value = that.storage.getItem(key);
    } catch (e) {
      // 获取失败则返回失败状态,数据结果为null
      result = {
        status: that.status.FAILURE,
        value: null
      };
      // 执行回调并返回
      callback && callback.call(this, result.status, result.value);
      return result;
    }
    // 如果成功获取数据字符串
    if (value) {
      // 获取时间戳与存储数据之间的拼接符起始位置
      index = value.indexof(that.timesign);
      // 获取时间戳
      time = +value.slice(0, index);
      // 如果时间为过期
      if (new Date(time).getTime() > new Date().getTime() || time == 0) {
        // 获取数据结果（拼接符后面的字符串）
        value = value.slice(index + timesignLen);
      } else {
        // 过期则结果为null
        value = null;
        // 设置状态为过期状态
        status = that.status.TIMEOUT;
        // 删除该字段
        that.remove(key);
      }
    } else {
      // 未获取数据字符串状态为失败状态
      status = that.status.FAILURE;
    }
    // 设置结果
    result = {
      status: status,
      value: value
    };
    // 执行回调函数
    callback && callback.call(this, result.status, result.value);
    // 返回结果
    return result;
  },

  /**
   * 删除数据
   * 参数 key: 数据字段标识
   * 参数 callback: 回调函数
   */
  remove: function (key, cb) {
    // 设置默认操作状态为失败
    let _status = this.status.FAILURE,
      // 获取实际数据字段名称
      _key = this.getKey(key),
      // 设置默认数据结果为空
      _value = null;

    try {
      // 获取字段对应的数据
      _value = this.storage.getItem(_key)
    } catch (e) {}

    if(_value) {
      try {
        this.storage.removeItem(_key)
        _status = this.status.SUCCESS;
      } catch(e) {}
    }

    // 成功则返回真实的数据结果,否则返回空
    cb && cb.call(this, _status, _status > 0
      ? null
      : _value.slice(_value.indexof(this.timesign) + this.timesign.length))
  }
};


var Ls = new BaseLocalstorage('Ls__');
Ls.set('a', 'xiao ming', function () {
 console.log(arguments);
});
// [0,"Ls__a", "xiao ming"]

Ls.get('a', function () {
 console.log(arguments)
});
// [0, "xiao ming"]

Ls.remove('a', function () {
 console.log(arguments)
});
// [0, "xiao ming"]

Ls.remove('a', function () {
 console.log(arguments)
});
// [1, null]

Ls.get('a', function () {
 console.log(arguments)
});
// [1, null]


```

### 封装数据库操作方法

```js

// 在nodejs中写入配置项 config.js
// 将配置数据输出
module.exports = {
  // 数据库相关配置数据
  DB: {
    db: 'demo', // 数据库名称
    host: 'localhost', // 主机名
    port: 27017 // 端口号
  }
}

// 连接MongoDB
/* db.js */
// 引用mongodb模块
var mongodb = require('mongodb');
// 引用配置模块的数据库配置信息
var config = require('./config').DB;

// 创建数据库对象
var d = new mongodb.Db(
  config.db, // 数据库名称
  new mongodb.server(
    config.host, // 主机名
    config.port, // 端口号
    {
      auto_reconnect: true
    } // 自动连接
  ), {
    safe: true
  } // 安全模式
);

// 输出数据访问对象
exports.DB = function () {}

// 操作集合
/**
  * 打开数据库, 操作集合
  * @param col 集合名
  * @param fn 操作方法
  **/
function connect(col, fn) {
  // 打开数据库
  d.open(function (err, db) {
  // 打开数据库报错则抛出错误
  if (err) {
    throw err;
  } else {
    db.collection(col, function (err, col) {
      // 操作集合报错则抛出错误
      if (err) {
        throw err;
      } else {
        // 执行操作
        fn && fn(col, db);
      }
    });
  }
  });
}

exports.DB = function (col) {
 return {
  /****
  插入数据
  * @param data 插入数据项
  * @param success 操作成功回调函数
  * @param fail 操作失败回调函数
  **/
  insert: function (data, success, fail) {
   // 打开数据库操作col集合
   connect(col, function (col, db) {
    // 向集合中插入数据
    col.insert(data, function (err, docs) {
     // 失败,抛出插入错误
     if (err)
      fail && fail(err);
     // 成功,执行成功回调函数
     else
      success && success(docs);
     // 关闭数据库
     db.close();
    });
   });
  },
  
  /****
  删除数据
  * @param data 删除数据项
  * @param success 成功回调
  * @param fail 失败回调
  **/
  remove: function (data, success, fail) {
   // 打开数据库操作col集合
   connect(col, function (col, db) {
    // 在集合中删除数据项
    col.remove(data, function (err, len) {
     if (err)
      fail && fail(err);
     else
      success && success(len);
     db.close();
    });
   });
  },
  
  /**
  * 更新数据
  * @param con 筛选条件
  * @param doc 更新数据项
  * @param success 成功回调
  * @param fail 失败回调
  **/
  update: function (con, doc, success, fail) {
   connect(col, function (col, db) {
    // 在集合中更新数据项
    col.update(con, doc, function (err, len) {
     if (err)
      fail && fail(err);
     else
      success && success(len);
     db.close();
    })
   });
  },
  
  /****
  查找数据
  * @param con 查找条件
  * @param success 成功回调
  * @param fail 失败回调
  **/
  find: function (con, success, fail) {
   connect(col, function (col, db) {
    // 在集合中查找数据
    col.find(con).toArray(function (err, docs) {
     if (err)
      fail && fail(err);
     else
      success && success(docs);
     db.close();
    });
   });
  }
 }
}

/*test.js*/
var DB = require('./db').DB; // 引用数据访问对象模块
var user = DB('user'); // 操作user集合

// 向集合中插入—条数据
user.insert({
 name: '小白',
 nick: '雨夜清荷'
}, function (docs) {
 console.log(docs);
 // [{name: '小白', nick: '雨夜清荷', _id :54e956410017 a3fc06195be9}]（ id为数据项的索引值）
});

user.remove({
 name: '小白'
}, function (len) {
 console.log(len); // 1（删除数据项长度）
})

user.update({
 name: '小白'
}, {
 name: '小白',
 nick: '雨夜'
}, function (len) {
 console.log(len); // 1
})

user.find({
 name: '小白'
}, function (doc) {
 console.log(doc) // [{name: '小白', nick: '雨夜清荷', _id :54e956410017a3fc06195be9}]
});
```
