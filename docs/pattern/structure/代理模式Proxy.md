# 代理模式 Proxy

## 应用场景

- 图片预加载
- 图片懒加载
- 合并 HTTP 请求（代理收集一定时间内的所有 HTTP 请求，然后一次性发给服务器）
- 惰性加载（通过代理处理和收集一些基本操作，然后仅在真正需要本体的时候才加载本体）
- 缓存代理（缓存请求结果、计算结果）

### 图片懒加载

```js
// 本体对象
const imgFunc = (function () {
  const imgNode = document.createElement("img");
  document.body.appendChild(imgNode);
  return {
    setSrc(src) {
      imgNode.src = src;
    },
  };
})();

// 代理对象
const proxyImage = (function () {
  const img = new Image();
  img.onload = function () {
    imgFunc.setSrc(this.src);
  };
  return {
    setSrc(src) {
      imgFunc.setSrc("./loading.gif");
      img.src = src;
    },
  };
})();

// 使用代理对象
proxyImage.setSrc("./reality.png");
```

### 缓存代理

#### 缓存计算结果

```js
// 先实现具体的两个算法
const mult = function () {
  let a = 1;
  for (let i = 0; i < arguments.length; i++) {
    a *= arguments[i];
  }
  return a;
};

const plus = function () {
  let a = 0;
  for (let i = 0; i < arguments.length; i++) {
    a += arguments[i];
  }
  return a;
};

// 创建缓存代理
const createProxyFactory = function (fn) {
  // 保存计算的结果
  let cache = {};
  // 使用闭包在内存中保留对cache的引用
  return function () {
    // 将所有参数转化为字符串作为缓存的 key
    let args = Array.from(arguments).join(",");
    if (args in cache) {
      return cache[args];
    } else {
      return (cache[args] = fn.apply(this, arguments));
    }
  };
};

// 使用代理对象
const proxyMult = createProxyFactory(mult);
const proxyPlus = createProxyFactory(plus);
console.log(proxyMult(1, 2, 3, 4)); // 24
console.log(proxyPlus(1, 2, 3, 4)); // 10
```

```js
const getCacheProxy = (fn, cache = new Map()) => {
  return new Proxy(fn, {
    apply(target, context, args) {
      const argsString = args.join(" ");
      if (cache.has(argsString)) {
        // 如果有缓存,直接返回缓存数据
        // console.log(`输出${args}的缓存结果: ${cache.get(argsString)}`);
        return cache.get(argsString);
      }
      return fn(...args);
    },
  });
};
```

### 保护代理

字符过滤

### 验证代理

### 虚拟代理
