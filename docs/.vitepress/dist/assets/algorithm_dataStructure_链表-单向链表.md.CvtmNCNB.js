import{_ as n,c as a,o as l,ag as p}from"./chunks/framework.DPDPlp3K.js";const d=JSON.parse('{"title":"单向链表","description":"","frontmatter":{},"headers":[],"relativePath":"algorithm/dataStructure/链表-单向链表.md","filePath":"algorithm/dataStructure/链表-单向链表.md"}'),o={name:"algorithm/dataStructure/链表-单向链表.md"};function e(t,s,c,r,y,i){return l(),a("div",null,s[0]||(s[0]=[p(`<h1 id="单向链表" tabindex="-1">单向链表 <a class="header-anchor" href="#单向链表" aria-label="Permalink to &quot;单向链表&quot;">​</a></h1><ul><li><p>特点：</p><ul><li>单链表的每个节点只包含一个后继指针；</li><li>单链表的头结点和尾结点比较特殊，头结点用来记录链表的基地址，是链表遍历的起点，尾结点的后继指针不指向任何结点，而是指向一个空地址NULL。</li><li>单链表的插入、删除操作时间复杂度为O(1)，随机查找时间复杂度为O(n)。</li></ul></li><li><p>优点：</p><ul><li>1、内存空间不是必须连续的，可以充分利用计算机的内存，实现灵活的内存动态管理</li><li>2、链表不必创建时就确定大小，并且大小可以无限的延伸下去</li><li>3、链表在插入和删除数据时，时间复杂度可以达到O(1)，相对数组效率高很多</li></ul></li><li><p>缺点：</p><ul><li>1、链表访问任何一个位置的元素时，都需要从头开始访问（无法跳过第一个元素访问任何元素）</li><li>2、无法通过下标直接访问元素，需要从头一个个访问，直到找到元素</li></ul></li></ul><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-light vp-code" tabindex="0"><code><span class="line"><span style="color:#D73A49;">class</span><span style="color:#6F42C1;"> Node</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#D73A49;">    constructor</span><span style="color:#24292E;">(</span><span style="color:#E36209;">data</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#005CC5;">        this</span><span style="color:#24292E;">.data </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> data;</span></span>
<span class="line"><span style="color:#005CC5;">        this</span><span style="color:#24292E;">.next </span><span style="color:#D73A49;">=</span><span style="color:#005CC5;"> null</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">class</span><span style="color:#6F42C1;"> LinkedList</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#D73A49;">    constructor</span><span style="color:#24292E;">() {</span></span>
<span class="line"><span style="color:#005CC5;">        this</span><span style="color:#24292E;">.head </span><span style="color:#D73A49;">=</span><span style="color:#D73A49;"> new</span><span style="color:#6F42C1;"> Node</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;head&quot;</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6F42C1;">    find</span><span style="color:#24292E;">(</span><span style="color:#E36209;">item</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#D73A49;">        var</span><span style="color:#24292E;"> currentNode </span><span style="color:#D73A49;">=</span><span style="color:#005CC5;"> this</span><span style="color:#24292E;">.head;</span></span>
<span class="line"><span style="color:#D73A49;">        while</span><span style="color:#24292E;"> (currentNode.data </span><span style="color:#D73A49;">!=</span><span style="color:#24292E;"> item) {</span></span>
<span class="line"><span style="color:#24292E;">           currentNode </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> currentNode.next;</span></span>
<span class="line"><span style="color:#24292E;">        }</span></span>
<span class="line"><span style="color:#D73A49;">        return</span><span style="color:#24292E;"> currentNode;</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6F42C1;">    findPrevious</span><span style="color:#24292E;">(</span><span style="color:#E36209;">item</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#D73A49;">       var</span><span style="color:#24292E;"> currentNode </span><span style="color:#D73A49;">=</span><span style="color:#005CC5;"> this</span><span style="color:#24292E;">.head;</span></span>
<span class="line"><span style="color:#D73A49;">       while</span><span style="color:#24292E;"> (</span><span style="color:#D73A49;">!</span><span style="color:#24292E;">(currentNode.next </span><span style="color:#D73A49;">==</span><span style="color:#005CC5;"> null</span><span style="color:#24292E;">) </span><span style="color:#D73A49;">&amp;&amp;</span></span>
<span class="line"><span style="color:#24292E;">               (currentNode.next.data </span><span style="color:#D73A49;">!=</span><span style="color:#24292E;"> item)) {</span></span>
<span class="line"><span style="color:#24292E;">           currentNode </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> currentNode.next;</span></span>
<span class="line"><span style="color:#24292E;">        }</span></span>
<span class="line"><span style="color:#D73A49;">        return</span><span style="color:#24292E;"> currentNode;</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6F42C1;">    insert</span><span style="color:#24292E;">(</span><span style="color:#E36209;">newElement</span><span style="color:#24292E;">, </span><span style="color:#E36209;">item</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#D73A49;">       var</span><span style="color:#24292E;"> newNode </span><span style="color:#D73A49;">=</span><span style="color:#D73A49;"> new</span><span style="color:#6F42C1;"> Node</span><span style="color:#24292E;">(newElement);</span></span>
<span class="line"><span style="color:#D73A49;">       var</span><span style="color:#24292E;"> current </span><span style="color:#D73A49;">=</span><span style="color:#005CC5;"> this</span><span style="color:#24292E;">.</span><span style="color:#6F42C1;">find</span><span style="color:#24292E;">(item);</span></span>
<span class="line"><span style="color:#24292E;">       newNode.next </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> current.next;</span></span>
<span class="line"><span style="color:#24292E;">       current.next </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> newNode;</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6F42C1;">    remove</span><span style="color:#24292E;">(</span><span style="color:#E36209;">item</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#D73A49;">       var</span><span style="color:#24292E;"> prevNode </span><span style="color:#D73A49;">=</span><span style="color:#005CC5;"> this</span><span style="color:#24292E;">.</span><span style="color:#6F42C1;">findPrevious</span><span style="color:#24292E;">(item);</span></span>
<span class="line"><span style="color:#D73A49;">       if</span><span style="color:#24292E;"> (</span><span style="color:#D73A49;">!</span><span style="color:#24292E;">(prevNode.next </span><span style="color:#D73A49;">==</span><span style="color:#005CC5;"> null</span><span style="color:#24292E;">)) {</span></span>
<span class="line"><span style="color:#24292E;">           prevNode.next </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> prevNode.next.next;</span></span>
<span class="line"><span style="color:#24292E;">      }</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6F42C1;">    display</span><span style="color:#24292E;">() {</span></span>
<span class="line"><span style="color:#D73A49;">       var</span><span style="color:#24292E;"> currentNode </span><span style="color:#D73A49;">=</span><span style="color:#005CC5;"> this</span><span style="color:#24292E;">.head;</span></span>
<span class="line"><span style="color:#D73A49;">       while</span><span style="color:#24292E;"> (</span><span style="color:#D73A49;">!</span><span style="color:#24292E;">(currentNode.next </span><span style="color:#D73A49;">==</span><span style="color:#005CC5;"> null</span><span style="color:#24292E;">)) {</span></span>
<span class="line"><span style="color:#24292E;">           console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(currentNode.next.data);</span></span>
<span class="line"><span style="color:#24292E;">           currentNode </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> currentNode.next;</span></span>
<span class="line"><span style="color:#24292E;">       }</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div>`,3)]))}const u=n(o,[["render",e]]);export{d as __pageData,u as default};
