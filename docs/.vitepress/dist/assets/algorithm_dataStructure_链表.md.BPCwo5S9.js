import{_ as n,c as a,o as l,ag as p}from"./chunks/framework.DPDPlp3K.js";const C=JSON.parse('{"title":"链表 linked-list","description":"","frontmatter":{},"headers":[],"relativePath":"algorithm/dataStructure/链表.md","filePath":"algorithm/dataStructure/链表.md"}'),o={name:"algorithm/dataStructure/链表.md"};function e(t,s,c,r,y,i){return l(),a("div",null,s[0]||(s[0]=[p(`<h1 id="链表-linked-list" tabindex="-1">链表 linked-list <a class="header-anchor" href="#链表-linked-list" aria-label="Permalink to &quot;链表 linked-list&quot;">​</a></h1><p>链表是一种线性表数据结构；</p><p>链表不需要一整块连续的存储空间，而是通过“指针”将一组零散的内存块串联起来使用；</p><p>链表中的每个内存块被称为链表的“结点”，每个结点除了要存储数据外，还需要记录上(下)一个结点的地址。</p><h2 id="链表的缺点" tabindex="-1">链表的缺点 <a class="header-anchor" href="#链表的缺点" aria-label="Permalink to &quot;链表的缺点&quot;">​</a></h2><ul><li>内存空间消耗更大，用于储存结点指针信息。</li><li>对链表进行频繁的插入、删除操作会导致频繁的内存申请、释放，容易造成内存碎片，如果是JAVA语言，还有可能会导致频繁的GC（Garbage Collection，垃圾回收）。</li></ul><h2 id="链表的类型" tabindex="-1">链表的类型 <a class="header-anchor" href="#链表的类型" aria-label="Permalink to &quot;链表的类型&quot;">​</a></h2><ul><li>单向链表</li><li>双向链表</li><li>循环链表</li><li>跳表</li></ul><h2 id="场景" tabindex="-1">场景 <a class="header-anchor" href="#场景" aria-label="Permalink to &quot;场景&quot;">​</a></h2><ul><li>React Fiber</li></ul><h2 id="实现" tabindex="-1">实现 <a class="header-anchor" href="#实现" aria-label="Permalink to &quot;实现&quot;">​</a></h2><h3 id="方法" tabindex="-1">方法 <a class="header-anchor" href="#方法" aria-label="Permalink to &quot;方法&quot;">​</a></h3><ul><li>插入元素 insert(position, element)</li><li>尾部添加元素 append(element)</li><li>获取元素索引 indexOf(element)</li><li>移除指定元素 remove(element)</li><li>移除指定位置的元素 removeAt(positions)</li><li>获取链表头 getHead()</li><li>获取链表长度 size()</li></ul><h2 id="源码" tabindex="-1">源码 <a class="header-anchor" href="#源码" aria-label="Permalink to &quot;源码&quot;">​</a></h2><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-light vp-code" tabindex="0"><code><span class="line"><span style="color:#6A737D;">// 链表类的基本骨架</span></span>
<span class="line"><span style="color:#6A737D;">// 链表类</span></span>
<span class="line"><span style="color:#D73A49;">class</span><span style="color:#6F42C1;"> LinkedList</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#D73A49;">    constructor</span><span style="color:#24292E;">() {</span></span>
<span class="line"><span style="color:#005CC5;">        this</span><span style="color:#24292E;">.head </span><span style="color:#D73A49;">=</span><span style="color:#005CC5;"> null</span></span>
<span class="line"><span style="color:#005CC5;">        this</span><span style="color:#24292E;">.</span><span style="color:#005CC5;">length</span><span style="color:#D73A49;"> =</span><span style="color:#005CC5;"> 0</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#6A737D;">    // 添加元素</span></span>
<span class="line"><span style="color:#6F42C1;">    append</span><span style="color:#24292E;">(</span><span style="color:#E36209;">element</span><span style="color:#24292E;">) {}</span></span>
<span class="line"><span style="color:#6A737D;">    // 插入元素到指定位置</span></span>
<span class="line"><span style="color:#6F42C1;">    insert</span><span style="color:#24292E;">(</span><span style="color:#E36209;">position</span><span style="color:#24292E;">, </span><span style="color:#E36209;">element</span><span style="color:#24292E;">) {}</span></span>
<span class="line"><span style="color:#6A737D;">    // 删除指定位置的元素</span></span>
<span class="line"><span style="color:#6F42C1;">    removeAt</span><span style="color:#24292E;">(</span><span style="color:#E36209;">position</span><span style="color:#24292E;">) {}</span></span>
<span class="line"><span style="color:#6A737D;">    // 删除指定元素</span></span>
<span class="line"><span style="color:#6F42C1;">    remove</span><span style="color:#24292E;">(</span><span style="color:#E36209;">element</span><span style="color:#24292E;">) {}</span></span>
<span class="line"><span style="color:#6A737D;">    //查找节点</span></span>
<span class="line"><span style="color:#6F42C1;">    find</span><span style="color:#24292E;">(</span><span style="color:#E36209;">element</span><span style="color:#24292E;">) {}</span></span>
<span class="line"><span style="color:#6A737D;">    // 获取指定元素索引</span></span>
<span class="line"><span style="color:#6F42C1;">    indexOf</span><span style="color:#24292E;">(</span><span style="color:#E36209;">element</span><span style="color:#24292E;">) {}</span></span>
<span class="line"><span style="color:#6A737D;">    // 获取链表长度</span></span>
<span class="line"><span style="color:#6F42C1;">    size</span><span style="color:#24292E;">() {}</span></span>
<span class="line"><span style="color:#6A737D;">    // 获取链表头</span></span>
<span class="line"><span style="color:#6F42C1;">    getHead</span><span style="color:#24292E;">() {}</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-light vp-code" tabindex="0"><code><span class="line"><span style="color:#6A737D;">/*</span></span>
<span class="line"><span style="color:#6A737D;"> 节点类</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"> 包含两个属性：</span></span>
<span class="line"><span style="color:#6A737D;">  element: 用来保存节点上的数据</span></span>
<span class="line"><span style="color:#6A737D;">  next: 用来保存指向下一个节点的链接。</span></span>
<span class="line"><span style="color:#6A737D;">*/</span><span style="color:#24292E;">  </span></span>
<span class="line"><span style="color:#D73A49;">class</span><span style="color:#6F42C1;"> Node</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#D73A49;">    constructor</span><span style="color:#24292E;">(</span><span style="color:#E36209;">element</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#005CC5;">        this</span><span style="color:#24292E;">.element </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> element</span></span>
<span class="line"><span style="color:#005CC5;">        this</span><span style="color:#24292E;">.next </span><span style="color:#D73A49;">=</span><span style="color:#005CC5;"> null</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 链表类</span></span>
<span class="line"><span style="color:#D73A49;">class</span><span style="color:#6F42C1;"> NodeList</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#D73A49;">    constructor</span><span style="color:#24292E;">() {</span></span>
<span class="line"><span style="color:#005CC5;">        this</span><span style="color:#24292E;">.head </span><span style="color:#D73A49;">=</span><span style="color:#005CC5;"> null</span></span>
<span class="line"><span style="color:#005CC5;">        this</span><span style="color:#24292E;">.</span><span style="color:#005CC5;">length</span><span style="color:#D73A49;"> =</span><span style="color:#005CC5;"> 0</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#6A737D;">    // 添加节点</span></span>
<span class="line"><span style="color:#6F42C1;">    append</span><span style="color:#24292E;">(</span><span style="color:#E36209;">element</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#6A737D;">        // 实例一个新节点</span></span>
<span class="line"><span style="color:#D73A49;">        let</span><span style="color:#24292E;"> node </span><span style="color:#D73A49;">=</span><span style="color:#D73A49;"> new</span><span style="color:#6F42C1;"> Node</span><span style="color:#24292E;">(element)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">        // 如果链头为空</span></span>
<span class="line"><span style="color:#D73A49;">        if</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">this</span><span style="color:#24292E;">.head </span><span style="color:#D73A49;">==</span><span style="color:#005CC5;"> null</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#6A737D;">            // 添加的节点就是链头</span></span>
<span class="line"><span style="color:#005CC5;">            this</span><span style="color:#24292E;">.head </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> node</span></span>
<span class="line"><span style="color:#24292E;">        } </span><span style="color:#D73A49;">else</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#6A737D;">            // 存在链头的情形</span></span>
<span class="line"><span style="color:#D73A49;">            let</span><span style="color:#24292E;"> currentNode </span><span style="color:#D73A49;">=</span><span style="color:#005CC5;"> this</span><span style="color:#24292E;">.head</span></span>
<span class="line"><span style="color:#6A737D;">            // 循环遍历节点</span></span>
<span class="line"><span style="color:#D73A49;">            while</span><span style="color:#24292E;">(currentNode.next) {</span></span>
<span class="line"><span style="color:#6A737D;">                // 当前节点改为当前节点指向的下一个节点</span></span>
<span class="line"><span style="color:#24292E;">                currentNode </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> currentNode.next</span></span>
<span class="line"><span style="color:#24292E;">            }</span></span>
<span class="line"><span style="color:#6A737D;">            // 循环结束，currentNode 为链表尾项</span></span>
<span class="line"><span style="color:#24292E;">            currentNode.next </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> node</span></span>
<span class="line"><span style="color:#24292E;">        }</span></span>
<span class="line"><span style="color:#005CC5;">        this</span><span style="color:#24292E;">.</span><span style="color:#005CC5;">length</span><span style="color:#D73A49;">++</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#6A737D;">    // 插入元素到指定位置</span></span>
<span class="line"><span style="color:#6F42C1;">    insert</span><span style="color:#24292E;">(</span><span style="color:#E36209;">position</span><span style="color:#24292E;">, </span><span style="color:#E36209;">element</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#6A737D;">        // 越界检查</span></span>
<span class="line"><span style="color:#D73A49;">        if</span><span style="color:#24292E;">(position </span><span style="color:#D73A49;">&lt;</span><span style="color:#005CC5;"> 0</span><span style="color:#D73A49;"> ||</span><span style="color:#24292E;"> position </span><span style="color:#D73A49;">&gt;</span><span style="color:#005CC5;"> this</span><span style="color:#24292E;">.</span><span style="color:#005CC5;">length</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#D73A49;">            return</span></span>
<span class="line"><span style="color:#24292E;">        };</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">        let</span><span style="color:#24292E;"> node </span><span style="color:#D73A49;">=</span><span style="color:#D73A49;"> new</span><span style="color:#6F42C1;"> Node</span><span style="color:#24292E;">(element)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">        if</span><span style="color:#24292E;">(position </span><span style="color:#D73A49;">==</span><span style="color:#005CC5;"> 0</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#D73A49;">            let</span><span style="color:#24292E;"> currentNode </span><span style="color:#D73A49;">=</span><span style="color:#005CC5;"> this</span><span style="color:#24292E;">.head</span></span>
<span class="line"><span style="color:#005CC5;">            this</span><span style="color:#24292E;">.head </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> node</span></span>
<span class="line"><span style="color:#24292E;">            head.next </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> currentNode</span></span>
<span class="line"><span style="color:#24292E;">        } </span><span style="color:#D73A49;">else</span><span style="color:#24292E;"> {</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">            let</span><span style="color:#24292E;"> currentNode </span><span style="color:#D73A49;">=</span><span style="color:#005CC5;"> this</span><span style="color:#24292E;">.head</span></span>
<span class="line"><span style="color:#D73A49;">            let</span><span style="color:#24292E;"> previous </span><span style="color:#D73A49;">=</span><span style="color:#005CC5;"> null</span></span>
<span class="line"><span style="color:#D73A49;">            let</span><span style="color:#24292E;"> index </span><span style="color:#D73A49;">=</span><span style="color:#005CC5;"> 0</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">            // 遍历链表中的节点</span></span>
<span class="line"><span style="color:#D73A49;">            while</span><span style="color:#24292E;">(index </span><span style="color:#D73A49;">&lt;</span><span style="color:#24292E;"> position) {</span></span>
<span class="line"><span style="color:#24292E;">                previous </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> currentNode</span></span>
<span class="line"><span style="color:#24292E;">                currentNode </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> currentNode.next</span></span>
<span class="line"><span style="color:#24292E;">                index</span><span style="color:#D73A49;">++</span></span>
<span class="line"><span style="color:#24292E;">            }</span></span>
<span class="line"><span style="color:#6A737D;">            // 循环结束 index == position</span></span>
<span class="line"><span style="color:#24292E;">            previous.next </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> node</span></span>
<span class="line"><span style="color:#24292E;">            node.next </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> currentNode</span></span>
<span class="line"><span style="color:#24292E;">        }</span></span>
<span class="line"><span style="color:#005CC5;">        this</span><span style="color:#24292E;">.</span><span style="color:#005CC5;">length</span><span style="color:#D73A49;"> ++</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#6A737D;">    // 删除某个位置的元素</span></span>
<span class="line"><span style="color:#6F42C1;">    removeAt</span><span style="color:#24292E;">(</span><span style="color:#E36209;">position</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#6A737D;">        // 越界检查</span></span>
<span class="line"><span style="color:#D73A49;">        if</span><span style="color:#24292E;">(position </span><span style="color:#D73A49;">&lt;</span><span style="color:#005CC5;"> 0</span><span style="color:#D73A49;"> ||</span><span style="color:#24292E;"> position </span><span style="color:#D73A49;">&gt;</span><span style="color:#005CC5;"> this</span><span style="color:#24292E;">.</span><span style="color:#005CC5;">length</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#D73A49;">            return</span></span>
<span class="line"><span style="color:#24292E;">        };</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">        if</span><span style="color:#24292E;">(position </span><span style="color:#D73A49;">==</span><span style="color:#005CC5;"> 0</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#D73A49;">            let</span><span style="color:#24292E;"> currentNode </span><span style="color:#D73A49;">=</span><span style="color:#005CC5;"> this</span><span style="color:#24292E;">.head</span></span>
<span class="line"><span style="color:#005CC5;">            this</span><span style="color:#24292E;">.head </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> currentNode.next</span></span>
<span class="line"><span style="color:#24292E;">        } </span><span style="color:#D73A49;">else</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#6A737D;">            // </span></span>
<span class="line"><span style="color:#D73A49;">            let</span><span style="color:#24292E;"> currentNode </span><span style="color:#D73A49;">=</span><span style="color:#005CC5;"> this</span><span style="color:#24292E;">.head</span></span>
<span class="line"><span style="color:#D73A49;">            let</span><span style="color:#24292E;"> previous </span><span style="color:#D73A49;">=</span><span style="color:#005CC5;"> null</span></span>
<span class="line"><span style="color:#D73A49;">            let</span><span style="color:#24292E;"> index </span><span style="color:#D73A49;">=</span><span style="color:#005CC5;"> 0</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">            while</span><span style="color:#24292E;">(index </span><span style="color:#D73A49;">&lt;</span><span style="color:#24292E;"> position) {</span></span>
<span class="line"><span style="color:#24292E;">                previous </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> currentNode</span></span>
<span class="line"><span style="color:#24292E;">                currentNode </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> currentNode.next</span></span>
<span class="line"><span style="color:#24292E;">                index </span><span style="color:#D73A49;">++</span></span>
<span class="line"><span style="color:#24292E;">            }</span></span>
<span class="line"><span style="color:#6A737D;">            // 循环结束 index == position</span></span>
<span class="line"><span style="color:#24292E;">            previous.next </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> currentNode.next</span></span>
<span class="line"><span style="color:#24292E;">        }</span></span>
<span class="line"><span style="color:#005CC5;">        this</span><span style="color:#24292E;">.</span><span style="color:#005CC5;">length</span><span style="color:#D73A49;"> --</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#6F42C1;">    find</span><span style="color:#24292E;">(</span><span style="color:#E36209;">element</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#D73A49;">        var</span><span style="color:#24292E;"> currentNode </span><span style="color:#D73A49;">=</span><span style="color:#005CC5;"> this</span><span style="color:#24292E;">.head;</span></span>
<span class="line"><span style="color:#D73A49;">        while</span><span style="color:#24292E;"> (currentNode.element </span><span style="color:#D73A49;">!=</span><span style="color:#24292E;"> element) {</span></span>
<span class="line"><span style="color:#24292E;">           currentNode </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> currentNode.next;</span></span>
<span class="line"><span style="color:#24292E;">        }</span></span>
<span class="line"><span style="color:#D73A49;">        return</span><span style="color:#24292E;"> currentNode;</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#6A737D;">    // 获取某个元素的位置</span></span>
<span class="line"><span style="color:#6F42C1;">    indexOf</span><span style="color:#24292E;">(</span><span style="color:#E36209;">element</span><span style="color:#24292E;">) {</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">        let</span><span style="color:#24292E;"> currentNode </span><span style="color:#D73A49;">=</span><span style="color:#005CC5;"> this</span><span style="color:#24292E;">.head,</span></span>
<span class="line"><span style="color:#24292E;">            index </span><span style="color:#D73A49;">=</span><span style="color:#005CC5;"> 0</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">        while</span><span style="color:#24292E;">(currentNode) {</span></span>
<span class="line"><span style="color:#D73A49;">            if</span><span style="color:#24292E;">(element </span><span style="color:#D73A49;">===</span><span style="color:#24292E;"> currentNode.element) {</span></span>
<span class="line"><span style="color:#D73A49;">                return</span><span style="color:#24292E;"> index;</span></span>
<span class="line"><span style="color:#24292E;">            }</span></span>
<span class="line"><span style="color:#24292E;">            currentNode </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> currentNode.next;</span></span>
<span class="line"><span style="color:#24292E;">            index </span><span style="color:#D73A49;">++</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">        }</span></span>
<span class="line"><span style="color:#D73A49;">        return</span><span style="color:#D73A49;"> -</span><span style="color:#005CC5;">1</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#6A737D;">    // 移除链表中的指定元素</span></span>
<span class="line"><span style="color:#6F42C1;">    remove</span><span style="color:#24292E;">(</span><span style="color:#E36209;">element</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#D73A49;">        return</span><span style="color:#005CC5;"> this</span><span style="color:#24292E;">.</span><span style="color:#6F42C1;">removeAt</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">this</span><span style="color:#24292E;">.</span><span style="color:#6F42C1;">indexOf</span><span style="color:#24292E;">(element))</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#6F42C1;">    isEmpty</span><span style="color:#24292E;">() {</span></span>
<span class="line"><span style="color:#D73A49;">        return</span><span style="color:#005CC5;"> this</span><span style="color:#24292E;">.</span><span style="color:#005CC5;">length</span><span style="color:#D73A49;"> ==</span><span style="color:#005CC5;"> 0</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#6F42C1;">    size</span><span style="color:#24292E;">() {</span></span>
<span class="line"><span style="color:#D73A49;">        return</span><span style="color:#005CC5;"> this</span><span style="color:#24292E;">.</span><span style="color:#005CC5;">length</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#6F42C1;">    getHead</span><span style="color:#24292E;">() {</span></span>
<span class="line"><span style="color:#D73A49;">        return</span><span style="color:#005CC5;"> this</span><span style="color:#24292E;">.head</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">let</span><span style="color:#24292E;"> list </span><span style="color:#D73A49;">=</span><span style="color:#D73A49;"> new</span><span style="color:#6F42C1;"> NodeList</span><span style="color:#24292E;">()</span></span>
<span class="line"><span style="color:#24292E;">list.</span><span style="color:#6F42C1;">append</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">1</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#24292E;">list.</span><span style="color:#6F42C1;">append</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">2</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#24292E;">list.</span><span style="color:#6F42C1;">append</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">3</span><span style="color:#24292E;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">list.</span><span style="color:#6F42C1;">insert</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">1</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">10</span><span style="color:#24292E;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// list.removeAt(1)</span></span>
<span class="line"><span style="color:#D73A49;">let</span><span style="color:#24292E;"> index </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> list.</span><span style="color:#6F42C1;">indexOf</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">10</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#24292E;">console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(index)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(list)</span></span></code></pre></div><p>检查链表代码是否正确的边界条件:</p><ul><li>如果链表为空时，代码是否能正常工作？</li><li>如果链表只包含一个结点时，代码是否能正常工作？</li><li>如果链表只包含两个结点时，代码是否能正常工作？</li><li>代码逻辑在处理头结点和尾结点的时候，是否能正常工作？</li></ul><h2 id="参考资料" tabindex="-1">参考资料 <a class="header-anchor" href="#参考资料" aria-label="Permalink to &quot;参考资料&quot;">​</a></h2><ul><li><p>LRU Cache - Linked list：<a href="http://leetcode-cn.com/problems/lru-cache" target="_blank" rel="noreferrer">LRU 缓存机制</a></p></li><li><p><a href="http://www.geeksforgeeks.org/implementing-a-linked-list-in-java-using-class/" target="_blank" rel="noreferrer">Linked List 的标准实现代码</a></p></li></ul>`,20)]))}const A=n(o,[["render",e]]);export{C as __pageData,A as default};
