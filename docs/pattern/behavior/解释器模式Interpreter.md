# 解释器模式 Interpreter

解释器模式(Interpreter): 对于一种语言，给出其文法表示形式，并定义一种解释器，通过使用这种解释器来解释语言中定义的句子。

## 实例

- 统计元素路径

### 统计元素路径

一个页面中的某些功能好坏有时是靠一定的数据依据支撑的。经理想看看用户对最近新增的功能使用情况，于是前后端要给出统计数据，然而前端交互统计项中要给出交互元素路径。

```js
// 获取兄弟元素名称
 const getSublingName = function (node) {
  // 如果存在兄弟元素
  if (node.previousSibling) {
   let name = '', // 返回的兄弟元素名称字符串
    count = 1,
    nodeName = node.nodeName, // 原始节点名称
    sibling = node.previousSibling // 前—个兄弟元素

   // 如果存在前—个兄弟元素
   while (sibling) {
    // 节点为元素 && 节点类型与前—个兄弟元素类型相同 && 前—个兄弟元素名称
    if (sibling.nodeType == 1 && sibling.nodeType === node.nodeType && sibling.nodeName) {
     // 如果节点名称和前—个兄弟元素名称相同
     if (nodeName === sibling.nodeName) {
      name += ++count
     } else {
      count = 1
      // 追加新的节点名称
      name += '|' + sibling.nodeName.toUpperCase()
     }
    }
    // 向前获取前—个兄弟元素
    sibling = sibling.previousSibling
   }
   return name
  }
  return ''
 }

 //XPath 解释器
 const XPathInterpreter = (function () {
  /**
   * 获取标签节点路径
   * @param node 目标节点
   * @param wrapper 容器节点
   */
  const getXPath = function (node, wrapper) {
   // 路径数组
   let path = [],
    // 如果不存在容器节点，默认为document
    wrap = wrapper || document

   // 如果当前（目标）节点等于容器节点
   if (node === wrap) {
    // 容器节点为元素
    if (wrap.nodeType == 1) {
     // 路径数组中输入容器节点名称
     path.push(wrap.nodeName.toUpperCase())
    }
    // 返回最终路径数组结果
    return path
   }

   // 如果当前节点的父节点不等于容器节点
   if (node.parentNode !== wrap) {
    // 对当前节点的父节点执行遍历操作
    path = getXPath(node.parentNode, wrap)
   } else {
    if (wrap.nodeType == 1) {
     path.push(wrap.nodeName.toUpperCase())
    }
   }
   // 获取元素的兄弟元素名称
   let sublingsNames = getSublingName(node)
   // 如果节点为元素
   if (node.nodeType == 1) {
    // 输入当前节点元素名称及其前面兄弟元素名称
    path.push(node.nodeName.toUpperCase() + sublingsNames)
   }
   // 返回最终路径数组结果
   return path
  }

  return getXPath
 })()

 let path = XPathInterpreter(document.getElementById('box3'))
 console.log(path.join('>'))
```
