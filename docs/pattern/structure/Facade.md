# 外观模式 Facade

外观模式是对接口方法的外层包装，以供上层代码调用。因此有时外观模式封装的接口方法不需要接口的具体实现，只需要按照接口使用规则使用即可。这也是对系统与客户（使用者）之间的一种松散耦合。使得系统与客户之间不会因结构的变化而相互影响。

## 场景

- 封装DOM监听事件
- 兼容浏览器阻止冒泡、默认事件

## 示例

### 封装DOM监听事件

```js
// 外观模式实现
function addEvent(dom, type, fn){
  // 对于支持DoM2级事件处理程序addEventListener方法的浏览器
  if(dom.addEventListener) {
    dom.addEventListener(type, fn, false)；
  // 对于不支持addEventListener方法但支持attachEvent方法的浏览器
  } else if(dom.attachEvent) {
    dom.attachEvent('on' + type, fn)；
  } else {
    // 对于不支持addEventListener方法也不支持attachEvent方法，但支持on+'事件名'的浏览器
    dom['on' + type] = fn；
  }
}

var myInput = document.getElementById('myinput');
addEvent(myInput, 'click', function(){
  console.log("绑定第—个事件")
})
```

### 兼容浏览器阻止冒泡、默认事件

```js
// 获取事件对象
var getEvent = function(event){
  // 标准浏览器返回event，IE下window.event
  return event || window.event；
}

// 获取元素
var getTarget = function(event){
  var event = getEvent(event)；
  // 标准浏览器下event.target，IE下event.srcElement
  return event.target || event.srcElement；
}

// 阻止默认行为
var preventDefault = function(event){
  var event = getEvent(event)；
  // 标准浏览器
  if(event.preventDefault) {
    event.preventDefault()；
  } else { // IE浏览器
    event.returnValue = false；
  }
}
```
