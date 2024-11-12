# DOM元素操作

## 元素创建

### 动态添加JS

```js
// defer属性规定是否对脚本执行进行延迟，直到页面加载为止
<script type="text/javascript" src="xxx.js" defer="defer"></script>

// async属性规定一旦加载脚本可用，则会异步执行
<script type="text/javascript" src="xxx.js" async="async"></script>
```

```js
const loadJs = function(src, async = true) {
  return new Promise((resolve, reject) => {
    const script = document.createElement("script");
    script.type = "text/javasctipt";
    script.async = async;
    script.src = src;
    script.onload = function() {
      const head = document.getElementsByTagName("head")[0];
      head.insertBefore(script, head.firstChild);
      resolve()
    }
    script.onerror = function() {
      reject()
    }
  })
}
await loadJs("http://cdn.bootcss.com/jquery/3.0.0-beta1/jquery.min.js")
```

### 动态添加CSS样式

```js
// https://davidwalsh.name/add-rules-stylesheets
const STYLE_SHEET = (function() {
  // Create the <style> tag
  const style = document.createElement("style");
  const comment = document.createTextNode("/* dynamic stylesheet */")

  // WebKit hack :(
  style.appendChild(comment);

  // Add the <style> element to the page
  document.head.appendChild(style);

  return style.sheet;
})();

export function addCSSRule(selector, rules, index = 0) {
  if ("insertRule" in STYLE_SHEET) {
    const ruleIndex = STYLE_SHEET.insertRule(
      selector + "{" + rules + "}",
      index,
    );
    return STYLE_SHEET.cssRules[ruleIndex];
  } else if ("addRule" in STYLE_SHEET) {
    const ruleIndex = STYLE_SHEET.addRule(selector, rules, index);
    return STYLE_SHEET.rules[ruleIndex];
  }
}
```

### 动态创建链接

```js
export function clickLink(url, blank = false) {
  const a = document.createElement("a");
  a.style.display = "none";
  document.body.appendChild(a);
  try {
    a.href = url;
    a.rel = "noopener";
    if (blank) {
      a.target = "_blank";
    }
    a.click();
  } finally {
    a.remove();
  }
}
```

## 元素校验

### 判断元素类型

- 判断是否为HTML元素

```js
export const isHtmlElement = (node) => {
  return node && node.nodeType === Node.ELEMENT_NODE;
}
```

### 元素是否可见

```js
// based on http://stackoverflow.com/a/38039019/113
export function elementIsInView(element, percentX = 1, percentY = 1) {
  const tolerance = 0.01; //needed because the rects returned by getBoundingClientRect provide the position up to 10 decimals

  const elementRect = element.getBoundingClientRect();
  const parentRects = [];

  while (element.parentElement != null) {
    parentRects.push(element.parentElement.getBoundingClientRect());
    element = element.parentElement;
  }

  return parentRects.every(parentRect => {
    const visiblePixelX =
      Math.min(elementRect.right, parentRect.right) -
      Math.max(elementRect.left, parentRect.left);
    const visiblePixelY =
      Math.min(elementRect.bottom, parentRect.bottom) -
      Math.max(elementRect.top, parentRect.top);
    const visiblePercentageX = visiblePixelX / elementRect.width;
    const visiblePercentageY = visiblePixelY / elementRect.height;
    return (
      visiblePercentageX + tolerance > percentX &&
      visiblePercentageY + tolerance > percentY
    );
  });
}
```

### 判断元素是否在指定容器内

```js
export const isInContainer = (el, container) => {
  if (!el || !container) return false;
  const elRect = el.getBoundingClientRect();
  let containerRect;

  if ([window, document, document.documentElement, null, undefined].includes(container)) {
    containerRect = {
      top: 0,
      right: window.innerWidth,
      bottom: window.innerHeight,
      left: 0
    };
  } else {
    containerRect = container.getBoundingClientRect();
  }

  return elRect.top < containerRect.bottom &&
    elRect.bottom > containerRect.top &&
    elRect.right > containerRect.left &&
    elRect.left < containerRect.right;
};
```

### 判断元素是否遮盖指定元素

```js
export function isObscured(element, offset) {
  if (!document.elementFromPoint) {
    return false;
  }
  const box = element.getBoundingClientRect();
  // default to the center of the element
  offset = offset || {
    top: Math.round(box.height / 2),
    left: Math.round(box.width / 2),
  };
  const position = {
    left: box.x + offset.left,
    top: box.y + offset.top,
  };
  const elem = document.elementFromPoint(position.left, position.top);
  return !element.contains(elem);
}
```

### 判断元素是否可见

```js
// based on http://stackoverflow.com/a/38039019/113
export function elementIsInView(element, percentX = 1, percentY = 1) {
  //needed because the rects returned by getBoundingClientRect provide the position up to 10 decimals
  const tolerance = 0.01; 

  const elementRect = element.getBoundingClientRect();
  const parentRects = [];

  while (element.parentElement != null) {
    parentRects.push(element.parentElement.getBoundingClientRect());
    element = element.parentElement;
  }

  return parentRects.every(parentRect => {
    const visiblePixelX =
      Math.min(elementRect.right, parentRect.right) -
      Math.max(elementRect.left, parentRect.left);
    const visiblePixelY =
      Math.min(elementRect.bottom, parentRect.bottom) -
      Math.max(elementRect.top, parentRect.top);
    const visiblePercentageX = visiblePixelX / elementRect.width;
    const visiblePercentageY = visiblePixelY / elementRect.height;
    return (
      visiblePercentageX + tolerance > percentX &&
      visiblePercentageY + tolerance > percentY
    );
  });
}
```

### 判断元素是否处于焦点

```js
const elementIsInFocus = (el) => (el === document.activeElement);
```

### 判断元素是否可滚动

```js
export const isScroll = (el, vertical) => {
  const determinedDirection = vertical !== null || vertical !== undefined;
  const overflow = determinedDirection
    ? vertical
      ? getStyle(el, 'overflow-y')
      : getStyle(el, 'overflow-x')
    : getStyle(el, 'overflow');

  return overflow.match(/(scroll|auto)/);
}
```

### 判断事件是否发生在指定元素上

```js
export function isEventOverElement(event, element) {
  const { clientX: x, clientY: y } = event;
  const { top, bottom, left, right } = element.getBoundingClientRect();
  
  // 事件触发范围是否在元素边界内
  return y >= top && y <= bottom && x >= left && x <= right;
}

```

## 元素操作

### 获取可滚动元素的容器

```js
// vertical: true代表方向垂直
export const getScrollContainer = (el, vertical) => {
  let parent = el;
  while (parent) {
    if ([window, document, document.documentElement].includes(parent)) {
      return window;
    }
    // 判断是否可滚动元素
    if (isScroll(parent, vertical)) {
      return parent;
    }
    parent = parent.parentNode;
  }
  return parent;
};
```

### 操作元素滚动到指定位置

```js
/**
 * 滚动到指定位置
 * @param {*} element 
 * @param {*} to 
 * @param {*} duration 
 * @returns 
 */
export const scrollTo = function(element, to, duration) {
  if (duration <= 0) return;
  const difference = to - element.scrollTop;
  const perTick = (difference / duration) * 10;
  setTimeout(() => {
    element.scrollTop = element.scrollTop + perTick;
    if (element.scrollTop === to) return;
    scrollTo(element, to, duration - 10);
  }, 10);
}
```
