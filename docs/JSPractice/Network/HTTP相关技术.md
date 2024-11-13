# 网络相关

## 获取URL参数

### new URLSearchParams()

```js
const getQueryString = key => new URLSearchParams(location.search).get(key);
```

### new URL()

```js

const getQueryString = key => new URL(location.href).searchParams.get(key);
// URLObj.searchParams instanceof URLSearchParams 为 true，证明是其实例
```

### reduce()

```js
function getQueryString(key) {
  const urlObj = location.search
    .slice(1)
    .split("&")
    .filter(Boolean)
    .reduce((obj, cur) => {
        const arr = cur.split("=");
        if (arr.length != 2) {
            return obj;
        }
        obj[decodeURIComponent(arr[0])] = decodeURIComponent(arr[1]);
        return obj;
    }, {});

    return urlObj[key];
}
```

## 获取URL参数并转为对象

示例1

```js
/**
 * 获取URL参数
 * @param {*} url
 */
export function queryObject(url) {
  url = url == null ? window.location.href : url;
  const search = url.substring(url.lastIndexOf("?") + 1);
  const obj = {};
  const reg = /([^?&=]+)=([^?&=]*)/g;
  search.replace(reg, (rs, $1, $2) => {
    const name = decodeURIComponent($1);
    let val = decodeURIComponent($2);
    val = String(val);
    obj[name] = val;
    return rs;
  });
  return obj;
}
```

示例2

```js
// 返回参数对象
function getQueryString(url) {
  const pattern = /(\w+)=(\w+)/ig;
  const parames = {}; // 定义参数对象
  url.replace(pattern, ($, $1, $2) => parames[$1] = $2);
  return parames;
}

// 利用正则表达式 
let url = "http://www.baidu.com?name=elephant&age=25&sex=male&num=100"
getQueryString(url)
```

## 对象转URL参数

示例1

```js
/**
 * @description 对象转url参数
 * @param {object} data,对象
 * @param {Boolean} isPrefix,是否自动加上"?"
 * @param {string} arrayFormat 规则 indices|brackets|repeat|comma
 */
function queryParams(data = {}, isPrefix = true, arrayFormat = 'brackets') {
 const prefix = isPrefix ? '?' : ''
 const _result = []
 if (['indices', 'brackets', 'repeat', 'comma'].indexOf(arrayFormat) == -1) {
  arrayFormat = 'brackets'
 }
 for (const key in data) {
  const value = data[key]
  // 去掉为空的参数
  if (['', undefined, null].indexOf(value) >= 0) {
   continue
  }
  // 如果值为数组，另行处理
  if (value.constructor === Array) {
   // e.g. {ids: [1, 2, 3]}
   switch (arrayFormat) {
    case 'indices':
     // 结果: ids[0]=1&ids[1]=2&ids[2]=3
     for (let i = 0; i < value.length; i++) {
      _result.push(`${key}[${i}]=${value[i]}`)
     }
     break
    case 'brackets':
     // 结果: ids[]=1&ids[]=2&ids[]=3
     value.forEach((_value) => {
      _result.push(`${key}[]=${_value}`)
     })
     break
    case 'repeat':
     // 结果: ids=1&ids=2&ids=3
     value.forEach((_value) => {
      _result.push(`${key}=${_value}`)
     })
     break
    case 'comma':
     // 结果: ids=1,2,3
     let commaStr = ''
     value.forEach((_value) => {
      commaStr += (commaStr ? ',' : '') + _value
     })
     _result.push(`${key}=${commaStr}`)
     break
    default:
     value.forEach((_value) => {
      _result.push(`${key}[]=${_value}`)
     })
   }
  } else {
   _result.push(`${key}=${value}`)
  }
 }
 return _result.length ? prefix + _result.join('&') : ''
}

```

示例2

```js
// 请求参数转换
export function queryString(obj) {
  let str = [];
  for (const key in obj) {
    str.push(encodeURIComponent(key) + "=" + encodeURIComponent(obj[key]));
  }
  return str.join("&");
}
```

示例3

```js
const getParameters = URL => JSON.parse(`{"${decodeURI(URL.split("?")[1]).replace(/"/g, '\\"').replace(/&/g, '","').replace(/=/g, '":"')}"}`
  )

getParameters("https://www.google.com.hk/search?q=js+md&newwindow=1");
// {q: 'js+md', newwindow: '1'}
```

## 对象转FormData

```js
/**
 * 对象转formdata
 * @param {Object} obj
 */
export function objToFormData(obj) {
  const formData = new FormData();
  Object.keys(obj).forEach((key) => {
    const value = obj[key];
    if (Array.isArray(value)) {
      value.forEach((subValue, i) => formData.append(key + `[${i}]`, subValue));
    } else {
      formData.append(key, obj[key]);
    }
  });
  return formData;
}
```

## 请求休眠

```js
/**
 * 请求休眠xxxms
 * @param {Number} milliseconds
 * 
 * @demo
  const fetchData = async () => {
    await sleep(1000);
    await request()
  };
 */
const sleep = ms => new Promise((resolve) => setTimeout(resolve, ms));
```

## AJAX

```js
export function ajax(options) {
  let { method, url, data, params, async, success, headers } = options;
  // init options
  method = method || "GET";
  async = async !== false;
  if (params) {
    const query = Object.keys(params)
      .map((key) => +params[key])
      .join("&");
    url = `${url}?${query}`;
  }

  // get xhr
  let xhr = window.XMLHttpRequest && new XMLHttpRequest();

  if (!xhr) {
    const getActiveXObject = () => {
      const version = [
        "MSXML2.XMLHttp.6.0",
        "MSXML2.XMLHttp.3.0",
        "MSXML2.XMLHttp",
      ];
      for (let i = 0; version.length; i++) {
        try {
          // eslint-disable-next-line no-undef
          return new ActiveXObject(version[i]);
        } catch (e) {
          throw Error("Not support ActiveXObject");
        }
      }
    };
    xhr = getActiveXObject();
  }

  // request success callback
  xhr.onreadystatechange = function () {
    if (
      (xhr.readyState === 4 && xhr.status >= 200 && xhr.status < 300) ||
      xhr.status === 304
    ) {
      success && success(xhr.responseText);
    }
  };

  // create request
  xhr.open(method, url, async);

  // extends headers
  if (headers) {
    Object.keys(headers).map((key) => xhr.setRequestHeader(key, headers[key]));
  }

  // send request
  method.toLowerCase() === "get" ? xhr.send() : xhr.send(data);
};

```

## Promise顺序执行

```js
function runPromises(promiseCreators, initData) {
  return promiseCreators.reduce((promise, next) => {
    return promise.then((data) => next(data));
  }, Promise.resolve(initData));
}

function login(data) {
  console.log("login:", data);
  return new Promise((resolve) => {
    setTimeout(() => {
      return resolve({
        token: "token",
      });
    }, 500);
  });
}

function getUserInfo(data) {
  console.log("getUserInfo:", data);
  return new Promise((resolve) => {
    setTimeout(() => {
      return resolve({
        name: "user-1",
        id: 988,
      });
    }, 300);
  });
}

function getOrders(data) {
  console.log("getOrders: data", data);
  return new Promise((resolve) => {
    setTimeout(() => {
      return resolve([
        {
          orderId: 1,
          productId: 100,
          price: 100,
        },
      ]);
    }, 100);
  });
}

const initData = { name: "name", pwd: "pwd" };

// Promise.resolve(initData)
//   .then((data) => login(data))
//   .then((data) => getUserInfo(data))
//   .then((data) => getOrders(data))
//   .then((data) => console.log("orders", data));

// 使用 reduce 封装的 runPromises 方法，确保返回 Promise 且执行结果是下一个函数的入参
runPromises([login, getUserInfo, getOrders], initData).then((res) => {
  console.log("res", res);
});
```
