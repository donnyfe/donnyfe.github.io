# DOM元素匹配

## 匹配DOCTYPE

```js
const doctype = /^<!DOCTYPE [^>]+>/i
```

## 匹配注释

```js
const comment = /^<!\--/

const conditionalComment = /^<!\[/

const ncname = '[a-zA-Z_][\\w\\-\\.]*'

const qnameCapture = `((?:${ncname}\\:)?${ncname})`
```

## 匹配起始标签

```js
const startTagOpen = new RegExp(`^<${qnameCapture}`)
const startTagClose = /^\s*(\/?)>/
```

## 匹配结束标签

```js
const endTag = new RegExp(`^<\\/${qnameCapture}[^>]*>`)
```

## 匹配元素属性

如：`<div id="index"> 的 id="index"`属性部分

```js
const attribute = /^\s*([^\s"'<>\/=]+)(?:\s*(=)\s*(?:"([^"]*)"+|'([^']*)'+|([^\s"'=<>`]+)))?/
```

## 匹配style标签内容

```js
const styleReg = /<style(?:[^>]*)?>([\s\S]*?)<\/style>/ig
```

## 移除HTML中的注释

```js
const commentReg = /<!--[\w\W\r\n]*?-->/gmi
const str = '<!-- 注释1 --><h1 style="color:#00ff00;text-align: center;">ProsperLee<!-- 注释 --></h1>';
str.replace(commentReg, '');
```

## 移除HTML标签

```js
str.replace(/<[^>]+>/g,"");
```

## 移除HTML标签中的属性

```js
str.replace(/(<[^\s\/>]+)\b[^>]*>/gi,"$1>");
```
