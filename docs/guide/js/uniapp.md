# uniapp

## 运行期判断平台

```js

/**
 * @description 运行期判断平台
 * @returns {string} 返回所在平台(小写) 
 * @link 运行期判断平台 https://uniapp.dcloud.io/frame?id=判断平台
 */
function os() {
 return uni.getSystemInfoSync().platform.toLowerCase()
}

```

## 获取系统信息同步接口

```js
/**
 * @description 获取系统信息同步接口
 * @link 获取系统信息同步接口 https://uniapp.dcloud.io/api/system/info?id=getsysteminfosync 
 */
function sys() {
 return uni.getSystemInfoSync()
}

```

## 显示消息提示框

```js
/**
 * 显示消息提示框
 * @param {String} title 提示的内容，长度与 icon 取值有关。
 * @param {Number} duration 提示的延迟时间，单位毫秒，默认：2000
 */
function toast(title, duration = 2000) {
 uni.showToast({
  title: String(title),
  icon: 'none',
  duration
 })
}
```

## 获取当前页面栈

```js
/**
 * @description 获取当前路由栈实例数组
 */
function pages() {
 const pages = getCurrentPages()
 return pages
}

```

## 获取当前页面路径

```js
/**
 * @description 获取当前页面路径
 */
function page() {
 const pages = getCurrentPages()
 // 某些特殊情况下(比如页面进行redirectTo时的一些时机)，pages可能为空数组
 return `/${pages[pages.length - 1]?.route ?? ''}`
}

```
