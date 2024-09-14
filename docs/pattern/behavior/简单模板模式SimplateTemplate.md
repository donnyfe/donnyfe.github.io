# 简单模板模式 Simple template

简单模板模式（Simple template: 通过格式化字符串拼凑出视图避免创建视图时大量节点操作。优化内存开销。

简单模板模式意在解决运用 DOM 操作创建视图时造成资源消耗大、性能低下、操作复杂等问题。用正则匹配方式去格式化字符串的执行的性能要远高于 DOM 操作拼接视图的执行性能,因此这种方式常备用于大型框架（如 MVC 等）创建视图操作中。

简单模板模式主要包含三部分,字符串模板库,格式化方法,字符串拼接操作。然而前者,在不同需求的实现中,视图往往是不一致的,因此字符串模板常常是多变的,如何更好地创建模板,给了我们极大的灵活性,对于字符串格式化方法在一个项目中通常是不变的,团队中所有成员都应该以同种方式去格式化模板才能使模板更易读。对于字符串拼接操作,常常是随需求中的视图变化而变化,这里对拼接的灵活的运用可以使你创建的视图过程更高效,模板复用率更高。

## 应用场景

```js
// 命名空间 单体对象
var A = A || {};
// 主体展示区容器
A.root = document.getElementById('container');
// 创建视图方法集合
A.strategy = {
 // 文字列表展示
 'listPart': function (data) {
  //……
  // 模块模板
  tpl = A.view(['h2', 'p', 'ul']),
   // 列表项模板
   liTpl = A.formatestring(A.view('li'), {
    li: A.view(['strong', 'span'])
   }),
   // ……
 },
 'codePart': function () {},
 'onlyTitle': function () {},
 'guide': function () {}
 // ……
}
// 创建视图入口
A.init = function (data) {
 // 根据传输的视图类型创建视图
 this.strategy[data.type](data);
}
// 模板渲染方法
A.formatestring = function (str, data) {
 return str.replace(/\{#(\w+)#\}/g, function (match, key) {
  return typeof
  data[key] === undefined ? '' : data[key]
 });
}
// 模板生成器name:标识
A.view = function (name) {
 // 模板库
 var v = {
  // 代码模板
  code: '<pre><code>{#code#}</code></pre>',
  // 图片模板
  img: '<img src="{#src#}" alt="{#alt#}" title="{#title#}" />',
  // 带有id和类的模块模板
  part: '<div id="{#id#}" class="{#class#}">{#part#}</div>',
  // 组合模板
  theme: [
   '<div>',
   '<h1>{#title#}</h1>',
   '{#content#}',
   '</div>'
  ].join('')
 }
 // 如果参数是—个数组,则返回多行模板
 if (object.prototype.tostring.call(name) === "[object Array]") {
  // 模板缓存器
  var tpl = '';
  // 遍历标识
  for (var i = 0, len = name.length; i < len; i++) {
   // 模板缓存器追加模板
   tpl += arguments.callee(name[i]);
  }
  // 返回最终模板
  return tpl;
 } else {
  // 如果模板库中有该模板则返回该模板,否则返回简易模板
  return v[name] ? v[name] : ('<' + name + '>{#' + name + '#}</' + name + '>');
 }
}
```
