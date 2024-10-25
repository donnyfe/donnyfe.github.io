# 同步模块模式 SMD(Synchronous Module Definition)

模块: 将复杂的系统分解成高内聚、低耦合的模块,使系统开发变得可控、可维护、可拓展,提高模块的复用率。

同步模块模式——SMD（Synchronous Module Definition: 请求发出后,无论模块是否存在,立即执行后续的逻辑,实现模块开发中对模块的立即引用。

模块化开发即是以分而治之的思想,实现对复杂系统的分解,使系统随着其功能的增加而变得可控、可拓展、可维护。这就要求我们对模块细化。随着系统功能的增加模块的数量也随之增加。模块开发的成本随之减少,但是模块的接口数量却随之增加,接口的使用成本和开发与维护成本也随之增加,所以合理的模块分割显得尤为重要。

模块化开发是一种对系统的分解,但使用时又像是以组合模式对模块的组合。因此这也使得系统中的问题一般出现在局部,使得开发人员处理相应模块即可,而不用顾虑整个系统。因此相对于整个复杂的系统,对于局部模块的改造、优化甚至替换所需成本要小得多。组合的灵活性也使得我们可以实现更复杂、多样化的功能。

在 Web 前段,实现的模块化开发往往创建了大量的闭包,这会在内存中占用大量的资源得不到释放,这是一种资源的浪费,但相对于解决的问题来说,这种开销是值得的。

同步模块模式是模块化开发的一种最简单的形式,这种模式使得依赖的模块无论加载,无论有无,模块创建即执行,这就要求依赖的模块必然是创建过的。同步模块模式无法处理异步加载的模块,因此浏览器端异步加载文件的环境模式限制了同步模块模式的应用。不过对于服务器端如 nodejs 等,他们的文件都存储在本地,因此同步模块模式更适用。

## 实例

- 模块管理器与创建方法

### 模块管理器与创建方法

```js
// 定义模块管理器单体对象
var F = F || {};
/**
  定义模块方法（ 理论上, 模块方法应放在闭包中实现, 可以隐蔽内部信息, 为了能够看明白, 因此忽略此步骤）
* @param str 模块路由
* @param fn 模块方法
*/
F.define = function (str, fn) {
  // 解析模块路由
  var parts = str.split('.'),
    // old当前模块的祖父模块,parent当前模块父模块
    // 如果在闭包中,为了屏蔽对模块直接访问,建议将模块添加给闭包内部私有变量
    old = parent = this,
    // i 模块层级,len 模块层级长度
    i = len = 0;
  // 如果第—个模式是模块管理器单体对象,则移除
  if (parts[0] === 'F') {
    parts = parts.slice(1);
  }
  // 屏蔽对define与module模块方法的重写
  if (parts[0] === 'define' || parts[0] === 'module') {
    return;
  }
  // 遍历路由模块并定义每层模块
  for (len = parts.length; i < len; i++) {
    // 如果父模块中不存在当前模块
    if (typeof parent[parts[i]] === 'undefined') {
      // 声明当前模块
      parent[parts[i]] = {};
    }
    // 缓存下—层级的祖父模块
    old = parent;
    // 缓存下—层级父模块
    parent = parent[parts[i]];
  }
  // 如果给定模块方法则定义该模块方法
  if (fn) {
    // 此时i等于parts.length,故减—
    old[parts[--i]] = fn();
  }
  // 返回模块管理器单体对象
  return this;
}
// 创建模块
// F.string 模块
F.define('string', function () {
  // 接口方法
  return {
    // 清楚字符串两边空白
    trim: function (str) {
      return str.replace(/^\s+|\s+$/g, '');
    }
  }
});
F.string.trim('测试用例。') //"测试用例。"

F.define('dom', function () {
  // 简化获取元素方法(重复获取可被替代,此设计用于演示模块添加)
  var $ = function (id) {
    $.dom = document.getElementById(id);
    // 返回构造函数对象
    return $;
  }
  // 获取或者设置元素内容
  $.html = function (html) {
    // 如果传参则设置元素内容,否则获取元素内容
    if (html) {
      this.dom.innerHTML = html;
      return this;
    } else {
      return this.dom.innerHTML;
    }
  }
  // 返回构造函数
  return $;
});
// 测试用例（页面元素:<div id="test"> test </div>）
F.dom('test').html(); //"test"
// 为dom模块添加addclass方法
// 注意,此种添加模式之所以可行,是因为将模块添加到F对象上,模块化开发中只允许上面的添加方式
F.define('dom.addclass');

F.dom.addclass = function (type, fn) {
  return function (className) {
    // 如果不存在该类
    if (!～this.dom.className.indexof(className)) {
      // 简单添加类
      this.dom.className += ' ' + className;
    }
  }
}();
// 测试用例
F.dom('test').addclass('test')

// 模块调用方法
F.module = function () {
  // 将参数转化为数组
  var args = [].slice.call(arguments),
    // 获取回调执行函数
    fn = args.pop(),
    // 获取依赖模块,如果args[0]是数组,则依赖模块为args[0]。否则依赖模块为arg
    parts = args[0] && args[0] instanceof Array ? args[0] : args,
    // 依赖模块列表
    modules = [],
    // 模块路由
    modIDs = '',
    // 依赖模块索引
    i = 0,
    // 依赖模块长度
    ilen = parts.length,
    // 父模块,模块路由层级索引,模块路由层级长度
    parent, j, jlen;
  // 遍历依赖模块
  while (i < ilen) {
    // 如果是模块路由
    if (typeof parts[i] === 'string') {
      // 设置当前模块父对象（F）
      parent = this;
      // 解析模块路由,并屏蔽掉模块父对象
      modIDs = parts[i].replace(/^F\./, '').split('.');
      // 遍历模块路由层级
      for (j = 0, jlen = modIDs.length; j < jlen; j++) {
        // 重置父模块
        parent = parent[modIDs[j]] || false;
      }
      // 将模块添加到依赖模块列表中
      modules.push(parent);
      // 如果是模块对象
    } else {
      // 直接加入依赖模块列表中
      modules.push(parts[i]);
    }
    // 取下—个依赖模块
    i++;
  }
  // 执行回调执行函数
  fn.apply(null, modules);
}
// 引用dom模块与document对象（注意,依赖模块对象通常为己创建的模块对象）
F.module(['dom', document], function (dom, doc) {
  // 通过dom模块设置元素内容
  dom('test').html('new add!');
  // 通过document设置body元素背景色
  doc.body.style.background = 'red';
});
// 依赖引用dom模块,string.trim方法
F.module('dom', 'string.trim', function (dom, trim) {
  // 测试元素 <div id="test"> test </div>
  var html = dom('test').html(); // 获取元素内容
  var str = trim(html); // 去除字符串两边空白符
  console.log("*" + html + "*", "*" + str + "*"); // *test* *test*
});
/*
模块: 将复杂的系统分解成高内聚、低耦合的模块,使系统开发变得可控、可维护、可拓展,提高模块的复用率。
异步模块模式——AMD（Asynchronous Module Definition: 请求发出后,继续其他业务逻辑,知道模块加载完成执行后续的逻辑,实现模块开发中对模块加载完成后的引用。
浏览器环境不同于服务器环境,在浏览器中对文件的加载是异步的。因此要使用未加载文件中的某些模块方法时必然经历文件加载过程。因此对未加载文件中的模块引用,同步模块模式是无能为力的.
*/
// 加载脚本文件
var loadscript = function (src) {
  var _script = document.createElement('script'); // 创建脚本元素
  _script.type = 'text/Javascript'; // 设置类型
  _script.src = src; // 设置加载路径
  document.getElementsByTagName['head'](0).appendchild(_script);
  // 将元素插入到页面中
}
// 加载localstorage文件
loadscript('localstorage.js');
// 使用localstorage模块
F.module('localstorage', function (ls) {
  // do something
});

// 首先要创建一个闭包,目的是封闭己创建的模块,防止外界对其直接访问,并在闭包中创建模块管理器F,并作为接口保存在全局作用域中。
// 向闭包中传入模块管理器对象F（～屏蔽压缩文件时,前面漏写;报错）
～(function (F) {
  // 模块缓存器。存储己创建模块
  var modulecache = {}
})((function () {
  // 创建模块管理器对象F,并保存在全局作用域中
  return window.F = {};
})());
// 这里的module方法集模块创建方法于一身。在这个方法中要遍历所有依赖模块,并判断所有模块都存在才可执行回调函数,否则加载相应文件,直到文件加载完成才执行回调函数。

/**
* 创建或调用模块方法
* @param url 参数为模块url
* @param deps 参数为依赖模块
* @param callback 参数为模块主函数
*/
F.module = function (url, modDeps, modcallback) {
  // 将参数转化为数组
  var args = [].slice.call(arguments),
    // 获取模块构造函数（参数数组中最后—个参数成员）
    callback = args.pop(),
    // 获取依赖模块（紧邻回调函数参数,且数据类型为数组）
    deps = (args.length && args[args.length - 1] instanceof Array) ? args.
      pop() : [],
    // 该模块url（模块ID）
    url = args.length ? args.pop() : null,
    // 依赖模块序列
    params = [],
    // 未加载的依赖模块数量统计
    depscount = 0,
    // 依赖模块序列中索引值
    i = 0,
    // 依赖模块序列长度
    len;
  // 获取依赖模块长度
  if (len = deps.length) {
    // 遍历依赖模块
    while (i < len) {
      // 闭包保存i
      (function (i) {
        // 增加未加载依赖模块数量统计
        depscount++;
        // 异步加载依赖模块
        loadModule(deps[i], function (mod) {
          // 依赖模块序列中添加依赖模块接口引用
          params[i] = mod;
          // 依赖模块加载完成,依赖模块数量统计减—
          depscount--;
          // 如果依赖模块全部加载
          if (depscount === 0) { // 在模块缓存器中矫正该模块,并执行构造函数
            setModule(url, params, callback);
          }
        });
      })(i);
      // 遍历下—依赖模块
      i++
    }
    // 无依赖模块,直接执行回调函数
  } else {
    // 在模块缓存器中矫正该模块,并执行构造函数
    setModule(url, [], callback);
  }
}
var modulecache = {},
  setModule = function (moduleName, params, callback) { },
  /**
  * 异步加载依赖模块所在文件
  * @param moduleName 模块路径（ id）
  * @param callback 模块加载完成回调函数
  */
  loadModule = function (moduleName, callback) {
    // 依赖模块
    var _module;
    // 如果依赖模块被要求加载过
    if (modulecache[moduleName]) {
      // 获取该模块信息
      _module = modulecache[moduleName];
      // 如果模块加载完成
      if (_module.status === 'loaded') {
        // 执行模块加载完成回调函数
        setTimeout(callback(_module.exports), 0);
      } else {
        // 缓存该模块所处文件加载完成回调函数
        _module.onload.push(callback);
      }
      // 模块第—次被依赖引用
    } else {
      // 缓存该模块初始化信息
      modulecache[moduleName] = {
        moduleName: moduleName, // 模块Id
        status: 'loading', // 模块对应文件加载状态（默认加载中）
        exports: null, //模块接口
        onload: [callback] // 模块对应文件加载完成回调函数缓冲器
      };
      // 加载模块对应文件
      loadscript(getUrl(moduleName));
    }
  },
  // 获取文件路径
  getUrl = function (moduleName) {
    // 拼接完整的文件路径字符串,如'lib/ajax' => 'lib/ajax.js'
    return string(moduleName).replace(/\.js$/g, '') + '.js';
  },
  // 加载脚本文件
  loadscript = function (src) {
    // 创建script元素
    var _script = document.createElement('script');
    _script.type = 'text/Javascript'; // 文件类型
    _script.charset = 'UTF-8'; // 确认编码
    _script.async = true; // 异步加载
    _script.src = src; // 文件路径
    document.getElementsByTagName['head'](0).appendchild(_script); // 插入页面中
  }
/**
* 设置模块并执行模块构造函数
* @param moduleName 模块id名称
* @param params 依赖模块
* @param callback 模块构造函数
*/
setModule = function (moduleName, params, callback) {
  // 模块容器,模块文件加载完成回调函数
  var _module, fn;
  // 如果模块被调用过
  if (modulecache[moduleName]) {
    // 获取模块
    _module = modulecache[moduleName];
    // 设置模块己经加载完成
    _module.status = 'loaded';
    // 矫正模块接口
    _module.exports = callback ? callback.apply(_module, params) : null;
    // 执行模块文件加载完成回调函数
    while (fn = _module.onload.shift()) {
      fn(_module.exports);
    }
  } else {
    // 模块不存在（匿名模块）,则直接执行构造函数
    callback && callback.apply(null, params);
  }
}
F.module('lib/dom', function () {
  return {
    // 获取元素方法
    g: function (id) {
      return document.getElementById(id);
    },
    // 获取或者设置元素内容方法
    html: function (id, html) {
      if (html)
        this.g(id).innerHTML = html;
      else
        return this.g(id).innerHTML;
    }
  }
});
F.module('lib/event', ['lib/dom'], function (dom) {
  var events = {
    // 绑定事件
    on: function (id, type, fn) {
      dom.g[id]('on' + type) = fn;
    }
  }
  return events;
});
//index.html页面中
F.module(['lib/event', 'lib/dom'], function (events, dom) {
  events.on('demo', 'click', function () {
    dom.html('demo', 'success');
  })
});
```
