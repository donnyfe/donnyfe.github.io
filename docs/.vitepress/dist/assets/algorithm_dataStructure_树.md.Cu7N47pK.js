import{_ as n,c as a,o as l,ag as p}from"./chunks/framework.DPDPlp3K.js";const A=JSON.parse('{"title":"二叉树 Tree","description":"","frontmatter":{},"headers":[],"relativePath":"algorithm/dataStructure/树.md","filePath":"algorithm/dataStructure/树.md"}'),o={name:"algorithm/dataStructure/树.md"};function e(c,s,t,r,y,i){return l(),a("div",null,s[0]||(s[0]=[p(`<h1 id="二叉树-tree" tabindex="-1">二叉树 Tree <a class="header-anchor" href="#二叉树-tree" aria-label="Permalink to &quot;二叉树 Tree&quot;">​</a></h1><ul><li><p>二叉查找树（Binary Search Tree）</p></li><li><p>平衡二叉查找树（Balanced Binary Search Tree）</p></li><li><p>红黑树(Red-Black Tree )</p></li><li><p>B-tree</p></li><li><p>B+-tree</p></li><li><p>B*-tree (B~Tree)</p></li><li><p>基本信息:</p><ul><li>名称: 二叉树</li><li>作者:</li><li>时间:</li></ul></li></ul><h2 id="特性" tabindex="-1">特性 <a class="header-anchor" href="#特性" aria-label="Permalink to &quot;特性&quot;">​</a></h2><ol><li>每个父节点下只有两个子节点</li><li>左边的子节点比父节点小，右边的子节点比父节点大</li></ol><h2 id="场景" tabindex="-1">场景 <a class="header-anchor" href="#场景" aria-label="Permalink to &quot;场景&quot;">​</a></h2><ul><li><p>DOM树</p></li><li><p>AST树</p></li><li><p>Virtual DOM</p></li><li><p>查找一组数据中的最大值和最小值</p></li><li><p>目录文件遍历——后序遍历</p></li><li><p>红黑树</p><ul><li>TCP 连接实现多路复用时借助的epoll(红黑树、队列)</li><li>Linux 进程调度、进程空间管理</li><li>Nginx 定义缓存 key</li></ul></li><li><p>B+树</p><ul><li>MySQL数据库索引使用 B+ 树提高查询效率</li></ul></li><li><p>Tire 树</p><ul><li>Linux 文件系统中为了提高目录项对象的处理效率：LRU、哈希表Linux 路由表 Tire 树</li></ul></li></ul><h2 id="方法" tabindex="-1">方法 <a class="header-anchor" href="#方法" aria-label="Permalink to &quot;方法&quot;">​</a></h2><ul><li><p>添加节点 insert(value)</p></li><li><p>查找节点 search(value)</p></li><li><p>移除节点 remove(value)</p></li><li><p>遍历节点 traverse(value)</p></li><li><p>获取最小值 min()</p></li><li><p>获取最大值 max()</p></li></ul><h2 id="实现" tabindex="-1">实现 <a class="header-anchor" href="#实现" aria-label="Permalink to &quot;实现&quot;">​</a></h2><h3 id="es6" tabindex="-1">ES6 <a class="header-anchor" href="#es6" aria-label="Permalink to &quot;ES6&quot;">​</a></h3><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-light vp-code" tabindex="0"><code><span class="line"><span style="color:#6A737D;">// ES6</span></span>
<span class="line"><span style="color:#D73A49;">class</span><span style="color:#6F42C1;"> Node</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#D73A49;">    constructor</span><span style="color:#24292E;">() {</span></span>
<span class="line"><span style="color:#005CC5;">        this</span><span style="color:#24292E;">.value </span><span style="color:#D73A49;">=</span><span style="color:#005CC5;"> null</span></span>
<span class="line"><span style="color:#005CC5;">        this</span><span style="color:#24292E;">.left </span><span style="color:#D73A49;">=</span><span style="color:#005CC5;"> null</span></span>
<span class="line"><span style="color:#005CC5;">        this</span><span style="color:#24292E;">.right </span><span style="color:#D73A49;">=</span><span style="color:#005CC5;"> null</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">class</span><span style="color:#6F42C1;"> Tree</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#D73A49;">    constructor</span><span style="color:#24292E;">() {</span></span>
<span class="line"><span style="color:#005CC5;">        this</span><span style="color:#24292E;">.root </span><span style="color:#D73A49;">=</span><span style="color:#005CC5;"> null</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#6A737D;">    // 添加树节点</span></span>
<span class="line"><span style="color:#6F42C1;">    insert</span><span style="color:#24292E;">(</span><span style="color:#E36209;">node</span><span style="color:#24292E;">, </span><span style="color:#E36209;">newNode</span><span style="color:#24292E;">) {</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#6F42C1;">    search</span><span style="color:#24292E;">(</span><span style="color:#E36209;">node</span><span style="color:#24292E;">) {</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><h3 id="es5" tabindex="-1">ES5 <a class="header-anchor" href="#es5" aria-label="Permalink to &quot;ES5&quot;">​</a></h3><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-light vp-code" tabindex="0"><code><span class="line"></span>
<span class="line"><span style="color:#6A737D;">// ES5</span></span>
<span class="line"><span style="color:#D73A49;">var</span><span style="color:#6F42C1;"> Tree</span><span style="color:#D73A49;"> =</span><span style="color:#D73A49;"> function</span><span style="color:#24292E;">() {</span></span>
<span class="line"><span style="color:#D73A49;">    var</span><span style="color:#24292E;"> root </span><span style="color:#D73A49;">=</span><span style="color:#005CC5;"> null</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">    var</span><span style="color:#6F42C1;"> Node</span><span style="color:#D73A49;"> =</span><span style="color:#D73A49;"> function</span><span style="color:#24292E;">(</span><span style="color:#E36209;">value</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#005CC5;">        this</span><span style="color:#24292E;">.value </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> value</span></span>
<span class="line"><span style="color:#005CC5;">        this</span><span style="color:#24292E;">.left </span><span style="color:#D73A49;">=</span><span style="color:#005CC5;"> null</span></span>
<span class="line"><span style="color:#005CC5;">        this</span><span style="color:#24292E;">.right </span><span style="color:#D73A49;">=</span><span style="color:#005CC5;"> null</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">    // 递归函数</span></span>
<span class="line"><span style="color:#D73A49;">    var</span><span style="color:#6F42C1;"> insertNode</span><span style="color:#D73A49;"> =</span><span style="color:#D73A49;"> function</span><span style="color:#24292E;">(</span><span style="color:#E36209;">parentNode</span><span style="color:#24292E;">, </span><span style="color:#E36209;">childNode</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#6A737D;">        // 子节点大于父节点-则子节点放在父节点的右分支</span></span>
<span class="line"><span style="color:#D73A49;">        if</span><span style="color:#24292E;">(childNode.value </span><span style="color:#D73A49;">&gt;</span><span style="color:#24292E;"> parentNode.value) {</span></span>
<span class="line"><span style="color:#D73A49;">            if</span><span style="color:#24292E;">(parentNode.right </span><span style="color:#D73A49;">==</span><span style="color:#005CC5;"> null</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">                parentNode.right </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> childNode</span></span>
<span class="line"><span style="color:#24292E;">            } </span><span style="color:#D73A49;">else</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#6F42C1;">                insertNode</span><span style="color:#24292E;">(node.right, childNode)</span></span>
<span class="line"><span style="color:#24292E;">            }</span></span>
<span class="line"><span style="color:#24292E;">        } </span><span style="color:#D73A49;">else</span><span style="color:#D73A49;"> if</span><span style="color:#24292E;">(childNode.value </span><span style="color:#D73A49;">&lt;</span><span style="color:#24292E;"> parentNode.value) {</span></span>
<span class="line"><span style="color:#6A737D;">            // 子节点大于父节点-则子节点放在父节点的左分支</span></span>
<span class="line"><span style="color:#D73A49;">            if</span><span style="color:#24292E;">(parentNode.left </span><span style="color:#D73A49;">==</span><span style="color:#005CC5;"> null</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">                parentNode.left </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> childNode</span></span>
<span class="line"><span style="color:#24292E;">            } </span><span style="color:#D73A49;">else</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#6F42C1;">                insertNode</span><span style="color:#24292E;">(node.left, childNode)</span></span>
<span class="line"><span style="color:#24292E;">            }</span></span>
<span class="line"><span style="color:#24292E;">        }</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">    var</span><span style="color:#6F42C1;"> traverse</span><span style="color:#D73A49;"> =</span><span style="color:#D73A49;"> function</span><span style="color:#24292E;">(</span><span style="color:#E36209;">node</span><span style="color:#24292E;">, </span><span style="color:#E36209;">callback</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#D73A49;">        if</span><span style="color:#24292E;">(node </span><span style="color:#D73A49;">==</span><span style="color:#005CC5;"> null</span><span style="color:#24292E;">) </span><span style="color:#D73A49;">return</span></span>
<span class="line"><span style="color:#6A737D;">        // callback(node.value)</span><span style="color:#6A737D;"> // 前序遍历 8 2 3 9</span></span>
<span class="line"><span style="color:#6F42C1;">        traverse</span><span style="color:#24292E;">(node.left, callback)</span></span>
<span class="line"><span style="color:#6A737D;">        // callback(node.value)</span><span style="color:#6A737D;"> // 中序遍历 2 3 8 9</span></span>
<span class="line"><span style="color:#6F42C1;">        traverse</span><span style="color:#24292E;">(node.right, callback)</span></span>
<span class="line"><span style="color:#6A737D;">        // callback(node.value)</span><span style="color:#6A737D;"> // 后序遍历 3 2 9 8</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">    // 插入</span></span>
<span class="line"><span style="color:#005CC5;">    this</span><span style="color:#24292E;">.</span><span style="color:#6F42C1;">insert</span><span style="color:#D73A49;"> =</span><span style="color:#D73A49;"> function</span><span style="color:#24292E;">(</span><span style="color:#E36209;">value</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#6A737D;">        // 实例一个新节点</span></span>
<span class="line"><span style="color:#D73A49;">        var</span><span style="color:#24292E;"> treeNode </span><span style="color:#D73A49;">=</span><span style="color:#D73A49;"> new</span><span style="color:#6F42C1;"> Node</span><span style="color:#24292E;">(value)</span></span>
<span class="line"><span style="color:#6A737D;">        // 1、树是空的</span></span>
<span class="line"><span style="color:#D73A49;">        if</span><span style="color:#24292E;">(root </span><span style="color:#D73A49;">==</span><span style="color:#005CC5;"> null</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">            root </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> treeNode</span></span>
<span class="line"><span style="color:#24292E;">        } </span><span style="color:#D73A49;">else</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#6A737D;">            // 2、树不是空的, 需要比较值</span></span>
<span class="line"><span style="color:#6F42C1;">            insertNode</span><span style="color:#24292E;">(root, treeNode)</span></span>
<span class="line"><span style="color:#24292E;">        }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#6A737D;">    // 查找</span></span>
<span class="line"><span style="color:#005CC5;">    this</span><span style="color:#24292E;">.</span><span style="color:#6F42C1;">search</span><span style="color:#D73A49;"> =</span><span style="color:#D73A49;"> function</span><span style="color:#24292E;">(</span><span style="color:#E36209;">value</span><span style="color:#24292E;">) {</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">    var</span><span style="color:#6F42C1;"> findMinNode</span><span style="color:#D73A49;"> =</span><span style="color:#D73A49;"> function</span><span style="color:#24292E;">(</span><span style="color:#E36209;">nnode</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#D73A49;">        if</span><span style="color:#24292E;">(node </span><span style="color:#D73A49;">==</span><span style="color:#005CC5;"> null</span><span style="color:#24292E;">) </span><span style="color:#D73A49;">return</span><span style="color:#005CC5;"> null</span></span>
<span class="line"><span style="color:#D73A49;">        while</span><span style="color:#24292E;">(node </span><span style="color:#D73A49;">&amp;&amp;</span><span style="color:#24292E;"> node.left) {</span></span>
<span class="line"><span style="color:#24292E;">            node </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> node.left</span></span>
<span class="line"><span style="color:#24292E;">        }</span></span>
<span class="line"><span style="color:#D73A49;">        return</span><span style="color:#24292E;"> node</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">    var</span><span style="color:#6F42C1;"> removeNode</span><span style="color:#D73A49;"> =</span><span style="color:#D73A49;"> function</span><span style="color:#24292E;">(</span><span style="color:#E36209;">node</span><span style="color:#24292E;">, </span><span style="color:#E36209;">value</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#D73A49;">        if</span><span style="color:#24292E;">(node </span><span style="color:#D73A49;">==</span><span style="color:#005CC5;"> null</span><span style="color:#24292E;">) </span><span style="color:#D73A49;">return</span><span style="color:#005CC5;"> null</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">        if</span><span style="color:#24292E;">(value </span><span style="color:#D73A49;">&gt;</span><span style="color:#24292E;"> node.value) {</span></span>
<span class="line"><span style="color:#6A737D;">            // 继续向右查找</span></span>
<span class="line"><span style="color:#24292E;">            node.right </span><span style="color:#D73A49;">=</span><span style="color:#6F42C1;"> removeNode</span><span style="color:#24292E;">(node.right, value)</span></span>
<span class="line"><span style="color:#D73A49;">            return</span><span style="color:#24292E;"> node</span></span>
<span class="line"><span style="color:#24292E;">        } </span><span style="color:#D73A49;">else</span><span style="color:#D73A49;"> if</span><span style="color:#24292E;">(value </span><span style="color:#D73A49;">&lt;</span><span style="color:#24292E;"> node.value) {</span></span>
<span class="line"><span style="color:#6A737D;">            // 继续向左查找</span></span>
<span class="line"><span style="color:#24292E;">            node.left </span><span style="color:#D73A49;">=</span><span style="color:#6F42C1;"> removeNode</span><span style="color:#24292E;">(node.left, value)</span></span>
<span class="line"><span style="color:#D73A49;">            return</span><span style="color:#24292E;"> node</span></span>
<span class="line"><span style="color:#24292E;">        } </span><span style="color:#D73A49;">else</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#6A737D;">            // value == node.value</span></span>
<span class="line"><span style="color:#6A737D;">            // 执行删除</span></span>
<span class="line"><span style="color:#D73A49;">            if</span><span style="color:#24292E;">(node.left </span><span style="color:#D73A49;">==</span><span style="color:#005CC5;"> null</span><span style="color:#D73A49;"> &amp;&amp;</span><span style="color:#24292E;"> node.right </span><span style="color:#D73A49;">==</span><span style="color:#005CC5;"> null</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#6A737D;">                // 叶节点操作</span></span>
<span class="line"><span style="color:#24292E;">                node </span><span style="color:#D73A49;">=</span><span style="color:#005CC5;"> null</span></span>
<span class="line"><span style="color:#D73A49;">                return</span><span style="color:#24292E;"> node</span></span>
<span class="line"><span style="color:#24292E;">            }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">            // 只有一个子节点</span></span>
<span class="line"><span style="color:#D73A49;">            if</span><span style="color:#24292E;">(node.left </span><span style="color:#D73A49;">==</span><span style="color:#005CC5;"> null</span><span style="color:#D73A49;"> &amp;&amp;</span><span style="color:#24292E;"> node.right) {</span></span>
<span class="line"><span style="color:#D73A49;">                return</span><span style="color:#24292E;"> node.right</span></span>
<span class="line"><span style="color:#24292E;">            } </span><span style="color:#D73A49;">else</span><span style="color:#D73A49;"> if</span><span style="color:#24292E;">(node.right </span><span style="color:#D73A49;">==</span><span style="color:#005CC5;"> null</span><span style="color:#D73A49;"> &amp;&amp;</span><span style="color:#24292E;"> node.left) {</span></span>
<span class="line"><span style="color:#D73A49;">                return</span><span style="color:#24292E;"> node.left</span></span>
<span class="line"><span style="color:#24292E;">            }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">            // 有两个子节点的条件</span></span>
<span class="line"><span style="color:#D73A49;">            var</span><span style="color:#24292E;"> minNode </span><span style="color:#D73A49;">=</span><span style="color:#6F42C1;"> findMinNode</span><span style="color:#24292E;">(node.right)</span></span>
<span class="line"><span style="color:#24292E;">            node.value </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> minNode.value</span></span>
<span class="line"><span style="color:#24292E;">            node.right </span><span style="color:#D73A49;">=</span><span style="color:#6F42C1;"> removeNode</span><span style="color:#24292E;">(node.right, minNode.key)</span></span>
<span class="line"><span style="color:#D73A49;">            return</span><span style="color:#24292E;"> node</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">        }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">        return</span><span style="color:#24292E;"> node</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">    // 删除</span></span>
<span class="line"><span style="color:#005CC5;">    this</span><span style="color:#24292E;">.</span><span style="color:#6F42C1;">remove</span><span style="color:#D73A49;"> =</span><span style="color:#D73A49;"> function</span><span style="color:#24292E;">(</span><span style="color:#E36209;">value</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#6A737D;">        // 1、移除没有子节点的节点</span></span>
<span class="line"><span style="color:#6A737D;">        // 2、移除只有一个子节点的节点</span></span>
<span class="line"><span style="color:#6A737D;">        // 3、移除有两个子节点的节点</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">        // 一句话总结：要替换为右侧子树的最小节点</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">        root </span><span style="color:#D73A49;">=</span><span style="color:#6F42C1;"> removeNode</span><span style="color:#24292E;">(root, value)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#6A737D;">    // 遍历</span></span>
<span class="line"><span style="color:#005CC5;">    this</span><span style="color:#24292E;">.</span><span style="color:#6F42C1;">traverse</span><span style="color:#D73A49;"> =</span><span style="color:#D73A49;"> function</span><span style="color:#24292E;">(</span><span style="color:#E36209;">value</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#6F42C1;">        traverse</span><span style="color:#24292E;">(root, </span><span style="color:#D73A49;">function</span><span style="color:#24292E;">(</span><span style="color:#E36209;">value</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">            console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(value)</span></span>
<span class="line"><span style="color:#24292E;">        })</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#6A737D;">    // 获取最小值</span></span>
<span class="line"><span style="color:#005CC5;">    this</span><span style="color:#24292E;">.</span><span style="color:#6F42C1;">min</span><span style="color:#D73A49;"> =</span><span style="color:#D73A49;"> function</span><span style="color:#24292E;">() {</span></span>
<span class="line"><span style="color:#D73A49;">        var</span><span style="color:#6F42C1;"> min</span><span style="color:#D73A49;"> =</span><span style="color:#D73A49;"> function</span><span style="color:#24292E;">(</span><span style="color:#E36209;">node</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#D73A49;">            if</span><span style="color:#24292E;">(node </span><span style="color:#D73A49;">==</span><span style="color:#005CC5;"> null</span><span style="color:#24292E;">) </span><span style="color:#D73A49;">return</span><span style="color:#005CC5;"> null</span></span>
<span class="line"><span style="color:#D73A49;">            while</span><span style="color:#24292E;">(node </span><span style="color:#D73A49;">&amp;&amp;</span><span style="color:#24292E;"> node.left) {</span></span>
<span class="line"><span style="color:#24292E;">                node </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> node.left</span></span>
<span class="line"><span style="color:#24292E;">            }</span></span>
<span class="line"><span style="color:#D73A49;">            return</span><span style="color:#24292E;"> node.value</span></span>
<span class="line"><span style="color:#24292E;">        }</span></span>
<span class="line"><span style="color:#D73A49;">        return</span><span style="color:#6F42C1;"> min</span><span style="color:#24292E;">(root)</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">    // 获取最小值</span></span>
<span class="line"><span style="color:#005CC5;">    this</span><span style="color:#24292E;">.</span><span style="color:#6F42C1;">max</span><span style="color:#D73A49;"> =</span><span style="color:#D73A49;"> function</span><span style="color:#24292E;">() {</span></span>
<span class="line"><span style="color:#D73A49;">        var</span><span style="color:#6F42C1;"> max</span><span style="color:#D73A49;"> =</span><span style="color:#D73A49;"> function</span><span style="color:#24292E;">(</span><span style="color:#E36209;">node</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#D73A49;">            if</span><span style="color:#24292E;">(node </span><span style="color:#D73A49;">==</span><span style="color:#005CC5;"> null</span><span style="color:#24292E;">) </span><span style="color:#D73A49;">return</span><span style="color:#005CC5;"> null</span></span>
<span class="line"><span style="color:#D73A49;">            while</span><span style="color:#24292E;">(node </span><span style="color:#D73A49;">&amp;&amp;</span><span style="color:#24292E;"> node.right) {</span></span>
<span class="line"><span style="color:#24292E;">                node </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> node.right</span></span>
<span class="line"><span style="color:#24292E;">            }</span></span>
<span class="line"><span style="color:#D73A49;">            return</span><span style="color:#24292E;"> node.value</span></span>
<span class="line"><span style="color:#24292E;">        }</span></span>
<span class="line"><span style="color:#D73A49;">        return</span><span style="color:#6F42C1;"> max</span><span style="color:#24292E;">(root)</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div>`,13)]))}const D=n(o,[["render",e]]);export{A as __pageData,D as default};
