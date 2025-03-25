import{_ as n,c as a,o as l,ag as p}from"./chunks/framework.DPDPlp3K.js";const d=JSON.parse('{"title":"双向链表","description":"","frontmatter":{},"headers":[],"relativePath":"algorithm/dataStructure/链表-双向链表.md","filePath":"algorithm/dataStructure/链表-双向链表.md"}'),o={name:"algorithm/dataStructure/链表-双向链表.md"};function e(t,s,c,r,y,i){return l(),a("div",null,s[0]||(s[0]=[p(`<h1 id="双向链表" tabindex="-1">双向链表 <a class="header-anchor" href="#双向链表" aria-label="Permalink to &quot;双向链表&quot;">​</a></h1><ul><li>双向链表中的每个结点具有两个方向指针，后继指针(next)指向后面的结点，前驱指针(prev)指向前面的结点。</li><li>双向链表也有两个特殊结点，首节点的前驱指针和尾结点的后继指针均指向空地址 NULL。</li></ul><h2 id="双向链表优点" tabindex="-1">双向链表优点 <a class="header-anchor" href="#双向链表优点" aria-label="Permalink to &quot;双向链表优点&quot;">​</a></h2><ul><li>双向链表在处理根据已知结点查找上一节点、有序链表查找等问题上，都表现的更灵活高效。</li></ul><h2 id="双向链表缺点" tabindex="-1">双向链表缺点 <a class="header-anchor" href="#双向链表缺点" aria-label="Permalink to &quot;双向链表缺点&quot;">​</a></h2><ul><li>与单链表相比，储存同样的数据，双向链表会占用更多的内存空间。</li></ul><h2 id="代码实现" tabindex="-1">代码实现 <a class="header-anchor" href="#代码实现" aria-label="Permalink to &quot;代码实现&quot;">​</a></h2><p><strong>方法定义:</strong></p><ul><li>append(element) 向链表尾部追加一个新元素</li><li>insert(position, element) 向链表的指定位置插入一个新元素</li><li>getElement(position) 获取指定位置的元素</li><li>indexOf(element) 返回元素在链表中的索引。如果链表中没有该元素就返回 -1</li><li>update(position, element) 修改指定位置上的元素</li><li>removeAt(position) 从链表中的删除指定位置的元素</li><li>remove(element) 从链表删除指定的元素</li><li>isEmpty() 如果链表中不包含任何元素，返回 trun，如果链表长度大于 0 则返回 false</li><li>size() 返回链表包含的元素个数，与数组的 length 属性类似</li><li>toString() 由于链表项使用了 Node 类，就需要重写继承自 JavaScript 对象默认的 toString 方法，让其只输出元素的值</li><li>forwardString() 返回正向遍历节点字符串形式</li><li>backwordString() 返回反向遍历的节点的字符串形式</li></ul><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-light vp-code" tabindex="0"><code><span class="line"><span style="color:#6A737D;">// 双向链表</span></span>
<span class="line"><span style="color:#D73A49;">class</span><span style="color:#6F42C1;"> Node</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#D73A49;">  constructor</span><span style="color:#24292E;">(</span><span style="color:#E36209;">data</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#005CC5;">    this</span><span style="color:#24292E;">.data </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> data;</span></span>
<span class="line"><span style="color:#005CC5;">    this</span><span style="color:#24292E;">.next </span><span style="color:#D73A49;">=</span><span style="color:#005CC5;"> null</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#005CC5;">    this</span><span style="color:#24292E;">.prev </span><span style="color:#D73A49;">=</span><span style="color:#005CC5;"> null</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">class</span><span style="color:#6F42C1;"> DoublyLinkedList</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#D73A49;">  constructor</span><span style="color:#24292E;">() {</span></span>
<span class="line"><span style="color:#005CC5;">    this</span><span style="color:#24292E;">.head </span><span style="color:#D73A49;">=</span><span style="color:#D73A49;"> new</span><span style="color:#6F42C1;"> Node</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;head&quot;</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6F42C1;">  find</span><span style="color:#24292E;">(</span><span style="color:#E36209;">item</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#D73A49;">    let</span><span style="color:#24292E;"> currentNode </span><span style="color:#D73A49;">=</span><span style="color:#005CC5;"> this</span><span style="color:#24292E;">.head;</span></span>
<span class="line"><span style="color:#D73A49;">    while</span><span style="color:#24292E;"> (currentNode.data </span><span style="color:#D73A49;">!=</span><span style="color:#24292E;"> item) {</span></span>
<span class="line"><span style="color:#24292E;">      currentNode </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> currentNode.next;</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#D73A49;">    return</span><span style="color:#24292E;"> currentNode;</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6F42C1;">  findLast</span><span style="color:#24292E;">() {</span></span>
<span class="line"><span style="color:#D73A49;">    let</span><span style="color:#24292E;"> currentNode </span><span style="color:#D73A49;">=</span><span style="color:#005CC5;"> this</span><span style="color:#24292E;">.head;</span></span>
<span class="line"><span style="color:#D73A49;">    while</span><span style="color:#24292E;"> (</span><span style="color:#D73A49;">!</span><span style="color:#24292E;">(currentNode.next </span><span style="color:#D73A49;">==</span><span style="color:#005CC5;"> null</span><span style="color:#24292E;">)) {</span></span>
<span class="line"><span style="color:#24292E;">      currentNode </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> currentNode.next;</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#D73A49;">    return</span><span style="color:#24292E;"> currentNode;</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6F42C1;">  insert</span><span style="color:#24292E;">(</span><span style="color:#E36209;">data</span><span style="color:#24292E;">, </span><span style="color:#E36209;">item</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#D73A49;">    let</span><span style="color:#24292E;"> newNode </span><span style="color:#D73A49;">=</span><span style="color:#D73A49;"> new</span><span style="color:#6F42C1;"> Node</span><span style="color:#24292E;">(data);</span></span>
<span class="line"><span style="color:#D73A49;">    let</span><span style="color:#24292E;"> currentNode </span><span style="color:#D73A49;">=</span><span style="color:#005CC5;"> this</span><span style="color:#24292E;">.</span><span style="color:#6F42C1;">find</span><span style="color:#24292E;">(item);</span></span>
<span class="line"><span style="color:#24292E;">    newNode.next </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> currentNode.next;</span></span>
<span class="line"><span style="color:#24292E;">    newNode.prev </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> currentNode;</span></span>
<span class="line"><span style="color:#24292E;">    currentNode.next </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> newNode;</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6F42C1;">  remove</span><span style="color:#24292E;">(</span><span style="color:#E36209;">item</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#D73A49;">    let</span><span style="color:#24292E;"> currentNode </span><span style="color:#D73A49;">=</span><span style="color:#005CC5;"> this</span><span style="color:#24292E;">.</span><span style="color:#6F42C1;">find</span><span style="color:#24292E;">(item);</span></span>
<span class="line"><span style="color:#D73A49;">    if</span><span style="color:#24292E;"> (</span><span style="color:#D73A49;">!</span><span style="color:#24292E;">(currentNode.next </span><span style="color:#D73A49;">==</span><span style="color:#005CC5;"> null</span><span style="color:#24292E;">)) {</span></span>
<span class="line"><span style="color:#24292E;">      currentNode.prev.next </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> currentNode.next;</span></span>
<span class="line"><span style="color:#24292E;">      currentNode.next.prev </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> currentNode.prev;</span></span>
<span class="line"><span style="color:#24292E;">      currentNode.next </span><span style="color:#D73A49;">=</span><span style="color:#005CC5;"> null</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">      currentNode.prev </span><span style="color:#D73A49;">=</span><span style="color:#005CC5;"> null</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6F42C1;">  display</span><span style="color:#24292E;">() {</span></span>
<span class="line"><span style="color:#D73A49;">    let</span><span style="color:#24292E;"> currentNode </span><span style="color:#D73A49;">=</span><span style="color:#005CC5;"> this</span><span style="color:#24292E;">.head;</span></span>
<span class="line"><span style="color:#D73A49;">    while</span><span style="color:#24292E;"> (</span><span style="color:#D73A49;">!</span><span style="color:#24292E;">(currentNode.next </span><span style="color:#D73A49;">==</span><span style="color:#005CC5;"> null</span><span style="color:#24292E;">)) {</span></span>
<span class="line"><span style="color:#24292E;">      console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(currentNode.next.data);</span></span>
<span class="line"><span style="color:#24292E;">      currentNode </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> currentNode.next;</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6F42C1;">  displayReverse</span><span style="color:#24292E;">() {</span></span>
<span class="line"><span style="color:#D73A49;">    let</span><span style="color:#24292E;"> currentNode </span><span style="color:#D73A49;">=</span><span style="color:#005CC5;"> this</span><span style="color:#24292E;">.head;</span></span>
<span class="line"><span style="color:#24292E;">    currentNode </span><span style="color:#D73A49;">=</span><span style="color:#005CC5;"> this</span><span style="color:#24292E;">.</span><span style="color:#6F42C1;">findLast</span><span style="color:#24292E;">();</span></span>
<span class="line"><span style="color:#D73A49;">    while</span><span style="color:#24292E;"> (</span><span style="color:#D73A49;">!</span><span style="color:#24292E;">(currentNode.prev </span><span style="color:#D73A49;">==</span><span style="color:#005CC5;"> null</span><span style="color:#24292E;">)) {</span></span>
<span class="line"><span style="color:#24292E;">      console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(currentNode.data);</span></span>
<span class="line"><span style="color:#24292E;">      currentNode </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> currentNode.prev;</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">let</span><span style="color:#24292E;"> cityData </span><span style="color:#D73A49;">=</span><span style="color:#D73A49;"> new</span><span style="color:#6F42C1;"> DoublyLinkedList</span><span style="color:#24292E;">();</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">cityData.</span><span style="color:#6F42C1;">insert</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;Conway&quot;</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&quot;head&quot;</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">cityData.</span><span style="color:#6F42C1;">insert</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;Russellville&quot;</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&quot;Conway&quot;</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">cityData.</span><span style="color:#6F42C1;">insert</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;Carlisle&quot;</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&quot;Russellville&quot;</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">cityData.</span><span style="color:#6F42C1;">insert</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;Alma&quot;</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&quot;Carlisle&quot;</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">cityData.</span><span style="color:#6F42C1;">display</span><span style="color:#24292E;">();</span></span>
<span class="line"><span style="color:#24292E;">cityData.</span><span style="color:#6F42C1;">remove</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;Carlisle&quot;</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">cityData.</span><span style="color:#6F42C1;">display</span><span style="color:#24292E;">();</span></span>
<span class="line"><span style="color:#24292E;">cityData.</span><span style="color:#6F42C1;">displayReverse</span><span style="color:#24292E;">();</span></span></code></pre></div>`,10)]))}const u=n(o,[["render",e]]);export{d as __pageData,u as default};
