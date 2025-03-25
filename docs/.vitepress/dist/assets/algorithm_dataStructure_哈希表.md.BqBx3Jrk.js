import{_ as n,c as a,o as l,ag as p}from"./chunks/framework.DPDPlp3K.js";const C=JSON.parse('{"title":"哈希表 / 散列表 Hash","description":"","frontmatter":{},"headers":[],"relativePath":"algorithm/dataStructure/哈希表.md","filePath":"algorithm/dataStructure/哈希表.md"}'),o={name:"algorithm/dataStructure/哈希表.md"};function e(t,s,c,r,y,i){return l(),a("div",null,s[0]||(s[0]=[p(`<h1 id="哈希表-散列表-hash" tabindex="-1">哈希表 / 散列表 Hash <a class="header-anchor" href="#哈希表-散列表-hash" aria-label="Permalink to &quot;哈希表 / 散列表 Hash&quot;">​</a></h1><p>优点：插入、删除和取用数据非常快</p><p>缺点：查找操作来效率低下</p><h2 id="场景" tabindex="-1">场景 <a class="header-anchor" href="#场景" aria-label="Permalink to &quot;场景&quot;">​</a></h2><h2 id="方法" tabindex="-1">方法 <a class="header-anchor" href="#方法" aria-label="Permalink to &quot;方法&quot;">​</a></h2><ul><li>添加 put(key, value)</li><li>移除</li></ul><h2 id="实现" tabindex="-1">实现 <a class="header-anchor" href="#实现" aria-label="Permalink to &quot;实现&quot;">​</a></h2><h3 id="开链法" tabindex="-1">开链法 <a class="header-anchor" href="#开链法" aria-label="Permalink to &quot;开链法&quot;">​</a></h3><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-light vp-code" tabindex="0"><code><span class="line"><span style="color:#D73A49;">class</span><span style="color:#6F42C1;"> HashTable</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#D73A49;">    constructor</span><span style="color:#24292E;">() {</span></span>
<span class="line"><span style="color:#005CC5;">        this</span><span style="color:#24292E;">.items </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> []</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">    // 散列函数</span></span>
<span class="line"><span style="color:#6A737D;">    // key --&gt; number --&gt; items[nnumber]</span></span>
<span class="line"><span style="color:#6F42C1;">    transferHashCode</span><span style="color:#24292E;">(</span><span style="color:#E36209;">key</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#D73A49;">        let</span><span style="color:#24292E;"> hash </span><span style="color:#D73A49;">=</span><span style="color:#005CC5;"> 0</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">        for</span><span style="color:#24292E;">(</span><span style="color:#D73A49;">let</span><span style="color:#24292E;"> i </span><span style="color:#D73A49;">=</span><span style="color:#005CC5;"> 0</span><span style="color:#24292E;">; i </span><span style="color:#D73A49;">&lt;</span><span style="color:#24292E;"> key.</span><span style="color:#005CC5;">length</span><span style="color:#24292E;">; i</span><span style="color:#D73A49;">++</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">            hash </span><span style="color:#D73A49;">+=</span><span style="color:#24292E;"> key[i].</span><span style="color:#6F42C1;">charCodeAt</span><span style="color:#24292E;">()</span></span>
<span class="line"><span style="color:#24292E;">        }</span></span>
<span class="line"><span style="color:#D73A49;">        return</span><span style="color:#24292E;"> hash </span><span style="color:#D73A49;">%</span><span style="color:#005CC5;"> 37</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6F42C1;">    put</span><span style="color:#24292E;">(</span><span style="color:#E36209;">key</span><span style="color:#24292E;">, </span><span style="color:#E36209;">value</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#005CC5;">        this</span><span style="color:#24292E;">.items[</span><span style="color:#6F42C1;">transferHashCode</span><span style="color:#24292E;">(key)] </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> value</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6F42C1;">    remove</span><span style="color:#24292E;">(</span><span style="color:#E36209;">key</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#005CC5;">        this</span><span style="color:#24292E;">.items[</span><span style="color:#6F42C1;">transferHashCode</span><span style="color:#24292E;">(key)] </span><span style="color:#D73A49;">=</span><span style="color:#005CC5;"> undefined</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">let</span><span style="color:#24292E;"> h </span><span style="color:#D73A49;">=</span><span style="color:#D73A49;"> new</span><span style="color:#6F42C1;"> HashTable</span><span style="color:#24292E;">()</span></span>
<span class="line"><span style="color:#24292E;">h.</span><span style="color:#6F42C1;">transferHashCode</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;Jobs&#39;</span><span style="color:#24292E;">)</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 普通哈希表存在引发冲突的缺陷，需要进一步改善</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 分离链接法</span></span>
<span class="line"><span style="color:#D73A49;">class</span><span style="color:#6F42C1;"> Node</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#D73A49;">    constructor</span><span style="color:#24292E;">(</span><span style="color:#E36209;">key</span><span style="color:#24292E;">, </span><span style="color:#E36209;">value</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#005CC5;">        this</span><span style="color:#24292E;">.key </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> key</span></span>
<span class="line"><span style="color:#005CC5;">        this</span><span style="color:#24292E;">.value </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> value</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"><span style="color:#D73A49;">class</span><span style="color:#6F42C1;"> HashTable</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#D73A49;">    constructor</span><span style="color:#24292E;">() {</span></span>
<span class="line"><span style="color:#005CC5;">        this</span><span style="color:#24292E;">.table </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> []</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">    // 散列函数</span></span>
<span class="line"><span style="color:#6A737D;">    // key --&gt; number --&gt; table[nnumber]</span></span>
<span class="line"><span style="color:#6F42C1;">    transferHashCode</span><span style="color:#24292E;">(</span><span style="color:#E36209;">key</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#D73A49;">        let</span><span style="color:#24292E;"> hash </span><span style="color:#D73A49;">=</span><span style="color:#005CC5;"> 0</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">        for</span><span style="color:#24292E;">(</span><span style="color:#D73A49;">let</span><span style="color:#24292E;"> i </span><span style="color:#D73A49;">=</span><span style="color:#005CC5;"> 0</span><span style="color:#24292E;">; i </span><span style="color:#D73A49;">&lt;</span><span style="color:#24292E;"> key.</span><span style="color:#005CC5;">length</span><span style="color:#24292E;">; i</span><span style="color:#D73A49;">++</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">            hash </span><span style="color:#D73A49;">+=</span><span style="color:#24292E;"> key[i].</span><span style="color:#6F42C1;">charCodeAt</span><span style="color:#24292E;">()</span></span>
<span class="line"><span style="color:#24292E;">        }</span></span>
<span class="line"><span style="color:#D73A49;">        return</span><span style="color:#24292E;"> hash </span><span style="color:#D73A49;">%</span><span style="color:#005CC5;"> 37</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6F42C1;">    put</span><span style="color:#24292E;">(</span><span style="color:#E36209;">key</span><span style="color:#24292E;">, </span><span style="color:#E36209;">value</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#D73A49;">        let</span><span style="color:#24292E;"> position </span><span style="color:#D73A49;">=</span><span style="color:#6F42C1;"> transferHashCode</span><span style="color:#24292E;">(key)</span></span>
<span class="line"><span style="color:#D73A49;">        let</span><span style="color:#24292E;"> node </span><span style="color:#D73A49;">=</span><span style="color:#D73A49;"> new</span><span style="color:#6F42C1;"> Node</span><span style="color:#24292E;">(key, value)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">        if</span><span style="color:#24292E;">(</span><span style="color:#D73A49;">!</span><span style="color:#005CC5;">this</span><span style="color:#24292E;">.table[position]) {</span></span>
<span class="line"><span style="color:#6A737D;">            // 实例一个链表（需要链表类）</span></span>
<span class="line"><span style="color:#D73A49;">            let</span><span style="color:#24292E;"> list </span><span style="color:#D73A49;">=</span><span style="color:#D73A49;"> new</span><span style="color:#6F42C1;"> LinkedList</span><span style="color:#24292E;">()</span></span>
<span class="line"><span style="color:#005CC5;">            this</span><span style="color:#24292E;">.table[position] </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> list</span></span>
<span class="line"><span style="color:#24292E;">        }</span></span>
<span class="line"><span style="color:#005CC5;">        this</span><span style="color:#24292E;">.table[position].</span><span style="color:#6F42C1;">append</span><span style="color:#24292E;">(node);</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6F42C1;">    get</span><span style="color:#24292E;">(</span><span style="color:#E36209;">key</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#D73A49;">        let</span><span style="color:#24292E;"> position </span><span style="color:#D73A49;">=</span><span style="color:#6F42C1;"> transferHashCode</span><span style="color:#24292E;">(key)</span></span>
<span class="line"><span style="color:#D73A49;">        if</span><span style="color:#24292E;">(</span><span style="color:#D73A49;">!</span><span style="color:#005CC5;">this</span><span style="color:#24292E;">.table[position]) </span><span style="color:#D73A49;">return</span><span style="color:#005CC5;"> undefined</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">        // 获取链表头</span></span>
<span class="line"><span style="color:#D73A49;">        let</span><span style="color:#24292E;"> current </span><span style="color:#D73A49;">=</span><span style="color:#005CC5;"> this</span><span style="color:#24292E;">.table[position].</span><span style="color:#6F42C1;">getHead</span><span style="color:#24292E;">()</span></span>
<span class="line"><span style="color:#D73A49;">        while</span><span style="color:#24292E;">(current) {</span></span>
<span class="line"><span style="color:#6A737D;">            // current.element —— 链表的节点， 存储了需要存储哈希表的数据对象</span></span>
<span class="line"><span style="color:#D73A49;">            if</span><span style="color:#24292E;">(current.element.key </span><span style="color:#D73A49;">==</span><span style="color:#24292E;"> key) {</span></span>
<span class="line"><span style="color:#D73A49;">                return</span><span style="color:#24292E;"> current.element.value</span></span>
<span class="line"><span style="color:#24292E;">            }</span></span>
<span class="line"><span style="color:#24292E;">            current </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> current.next</span></span>
<span class="line"><span style="color:#24292E;">        }</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6F42C1;">    remove</span><span style="color:#24292E;">(</span><span style="color:#E36209;">key</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#D73A49;">        let</span><span style="color:#24292E;"> position </span><span style="color:#D73A49;">=</span><span style="color:#6F42C1;"> transferHashCode</span><span style="color:#24292E;">(key);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 线性探测法</span></span>
<span class="line"><span style="color:#D73A49;">class</span><span style="color:#6F42C1;"> Node</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#D73A49;">    constructor</span><span style="color:#24292E;">(</span><span style="color:#E36209;">key</span><span style="color:#24292E;">, </span><span style="color:#E36209;">value</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#005CC5;">        this</span><span style="color:#24292E;">.key </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> key</span></span>
<span class="line"><span style="color:#005CC5;">        this</span><span style="color:#24292E;">.value </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> value</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"><span style="color:#D73A49;">class</span><span style="color:#6F42C1;"> HashTable</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#D73A49;">    constructor</span><span style="color:#24292E;">() {</span></span>
<span class="line"><span style="color:#005CC5;">        this</span><span style="color:#24292E;">.table </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> []</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">    /*</span></span>
<span class="line"><span style="color:#6A737D;">     * 散列函数</span></span>
<span class="line"><span style="color:#6A737D;">     * 作用：把key转化成散列值 key --&gt; number --&gt; table[nnumber]</span></span>
<span class="line"><span style="color:#6A737D;">     * 缺点：散列值重复率高</span></span>
<span class="line"><span style="color:#6A737D;">     */</span></span>
<span class="line"><span style="color:#6F42C1;">    transferHashCode</span><span style="color:#24292E;">(</span><span style="color:#E36209;">key</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#D73A49;">        let</span><span style="color:#24292E;"> hash </span><span style="color:#D73A49;">=</span><span style="color:#005CC5;"> 0</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">        for</span><span style="color:#24292E;">(</span><span style="color:#D73A49;">let</span><span style="color:#24292E;"> i </span><span style="color:#D73A49;">=</span><span style="color:#005CC5;"> 0</span><span style="color:#24292E;">; i </span><span style="color:#D73A49;">&lt;</span><span style="color:#24292E;"> key.</span><span style="color:#005CC5;">length</span><span style="color:#24292E;">; i</span><span style="color:#D73A49;">++</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">            hash </span><span style="color:#D73A49;">+=</span><span style="color:#24292E;"> key[i].</span><span style="color:#6F42C1;">charCodeAt</span><span style="color:#24292E;">()</span></span>
<span class="line"><span style="color:#24292E;">        }</span></span>
<span class="line"><span style="color:#D73A49;">        return</span><span style="color:#24292E;"> hash </span><span style="color:#D73A49;">%</span><span style="color:#005CC5;"> 37</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6F42C1;">    put</span><span style="color:#24292E;">(</span><span style="color:#E36209;">key</span><span style="color:#24292E;">, </span><span style="color:#E36209;">value</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#D73A49;">        let</span><span style="color:#24292E;"> position </span><span style="color:#D73A49;">=</span><span style="color:#6F42C1;"> transferHashCode</span><span style="color:#24292E;">(key)</span></span>
<span class="line"><span style="color:#D73A49;">        if</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">this</span><span style="color:#24292E;">.table[position] </span><span style="color:#D73A49;">==</span><span style="color:#005CC5;"> undefined</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#005CC5;">            this</span><span style="color:#24292E;">.table[position] </span><span style="color:#D73A49;">=new</span><span style="color:#6F42C1;"> Node</span><span style="color:#24292E;">(key, value)</span></span>
<span class="line"><span style="color:#24292E;">        } </span><span style="color:#D73A49;">else</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#6A737D;">            // 哈希表当前位置有元素占据</span></span>
<span class="line"><span style="color:#D73A49;">            let</span><span style="color:#24292E;"> index </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> position </span><span style="color:#D73A49;">+</span><span style="color:#005CC5;"> 1</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#D73A49;">            while</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">this</span><span style="color:#24292E;">.table[inndex] </span><span style="color:#D73A49;">!==</span><span style="color:#005CC5;"> undefined</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">                index </span><span style="color:#D73A49;">++</span></span>
<span class="line"><span style="color:#24292E;">            }</span></span>
<span class="line"><span style="color:#005CC5;">            this</span><span style="color:#24292E;">.table[index] </span><span style="color:#D73A49;">=</span><span style="color:#D73A49;"> new</span><span style="color:#6F42C1;"> Node</span><span style="color:#24292E;">(key, value)</span></span>
<span class="line"><span style="color:#24292E;">        }</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6F42C1;">    get</span><span style="color:#24292E;">(</span><span style="color:#E36209;">key</span><span style="color:#24292E;">) {</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6F42C1;">    remove</span><span style="color:#24292E;">() {</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 散列函数</span></span>
<span class="line"><span style="color:#D73A49;">var</span><span style="color:#6F42C1;"> djb2HashCode</span><span style="color:#D73A49;"> =</span><span style="color:#D73A49;"> function</span><span style="color:#24292E;">(</span><span style="color:#E36209;">key</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#D73A49;">    var</span><span style="color:#24292E;"> hash </span><span style="color:#D73A49;">=</span><span style="color:#005CC5;"> 5381</span></span>
<span class="line"><span style="color:#D73A49;">    for</span><span style="color:#24292E;">(</span><span style="color:#D73A49;">var</span><span style="color:#24292E;"> i </span><span style="color:#D73A49;">=</span><span style="color:#005CC5;"> 0</span><span style="color:#24292E;">; i </span><span style="color:#D73A49;">&lt;</span><span style="color:#24292E;"> key.</span><span style="color:#005CC5;">length</span><span style="color:#24292E;">; i</span><span style="color:#D73A49;">++</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">        hash </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> hash </span><span style="color:#D73A49;">*</span><span style="color:#005CC5;"> 33</span><span style="color:#D73A49;"> +</span><span style="color:#24292E;"> key[i].</span><span style="color:#6F42C1;">charCodeAt</span><span style="color:#24292E;">()</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#D73A49;">    return</span><span style="color:#24292E;"> hash </span><span style="color:#D73A49;">%</span><span style="color:#005CC5;"> 1013</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">/*</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">散列表</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">数组长度应该是一个质数, 为了避免碰撞</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">*/</span></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#6F42C1;"> HashTable</span><span style="color:#D73A49;"> =</span><span style="color:#D73A49;"> function</span><span style="color:#24292E;">() {</span></span>
<span class="line"></span>
<span class="line"><span style="color:#005CC5;">    this</span><span style="color:#24292E;">.table </span><span style="color:#D73A49;">=</span><span style="color:#D73A49;"> new</span><span style="color:#6F42C1;"> Array</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">137</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#005CC5;">    this</span><span style="color:#24292E;">.simpleHash </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> simpleHash</span></span>
<span class="line"><span style="color:#005CC5;">    this</span><span style="color:#24292E;">.betterHash </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> betterHash</span></span>
<span class="line"><span style="color:#005CC5;">    this</span><span style="color:#24292E;">.showDistro </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> showDistro</span></span>
<span class="line"><span style="color:#005CC5;">    this</span><span style="color:#24292E;">.put </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> put</span></span>
<span class="line"><span style="color:#005CC5;">    this</span><span style="color:#24292E;">.get </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> get</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">    /*</span></span>
<span class="line"><span style="color:#6A737D;">        散列函数：离散化整型类型键</span></span>
<span class="line"><span style="color:#6A737D;">        如果键是整型，最简单的散列函数就是以数组的长度对键取余</span></span>
<span class="line"><span style="color:#6A737D;">    */</span></span>
<span class="line"><span style="color:#D73A49;">    function</span><span style="color:#6F42C1;"> simpleHash</span><span style="color:#24292E;">(</span><span style="color:#E36209;">data</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#D73A49;">        var</span><span style="color:#24292E;"> total </span><span style="color:#D73A49;">=</span><span style="color:#005CC5;"> 0</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#D73A49;">        for</span><span style="color:#24292E;"> (</span><span style="color:#D73A49;">var</span><span style="color:#24292E;"> i </span><span style="color:#D73A49;">=</span><span style="color:#005CC5;"> 0</span><span style="color:#24292E;">; i </span><span style="color:#D73A49;">&lt;</span><span style="color:#24292E;"> data.</span><span style="color:#005CC5;">length</span><span style="color:#24292E;">; </span><span style="color:#D73A49;">++</span><span style="color:#24292E;">i) {</span></span>
<span class="line"><span style="color:#24292E;">            total </span><span style="color:#D73A49;">+=</span><span style="color:#24292E;"> data.</span><span style="color:#6F42C1;">charCodeAt</span><span style="color:#24292E;">(i);</span></span>
<span class="line"><span style="color:#24292E;">        }</span></span>
<span class="line"><span style="color:#24292E;">        console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;Hash value: &quot;</span><span style="color:#D73A49;"> +</span><span style="color:#24292E;"> data </span><span style="color:#D73A49;">+</span><span style="color:#032F62;"> &quot; -&gt; &quot;</span><span style="color:#D73A49;"> +</span><span style="color:#24292E;"> total);</span></span>
<span class="line"><span style="color:#D73A49;">        return</span><span style="color:#24292E;"> total </span><span style="color:#D73A49;">%</span><span style="color:#005CC5;"> this</span><span style="color:#24292E;">.table.</span><span style="color:#005CC5;">length</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">    /*</span></span>
<span class="line"><span style="color:#6A737D;">        散列函数：离散化字符串类型键</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">        备注：存在将两个键映射成同一个值的可能，这种现象称为碰撞 （collision）</span></span>
<span class="line"><span style="color:#6A737D;">        解决：开链法和线性探测法。</span></span>
<span class="line"><span style="color:#6A737D;">        使用：如果数组的大小是待存储数据个数的1.5倍，那么使用开链法；</span></span>
<span class="line"><span style="color:#6A737D;">             如果数组的大小是待存储数据的两倍及两倍以上时，那么使用线性探测法。</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">        开链法是指实现散列表的底层数组中，每个数组元素又是一个新的数据结构，比如另一个数组。</span></span>
<span class="line"><span style="color:#6A737D;">        实现：开链法的方法是：在创建存储散列过的键值的数组时，通过调用一个函数创建一个新的空数组，然后将该数组赋给散列表里的每个数组元素。</span></span>
<span class="line"><span style="color:#6A737D;">    */</span></span>
<span class="line"><span style="color:#D73A49;">    function</span><span style="color:#6F42C1;"> betterHash</span><span style="color:#24292E;">(</span><span style="color:#E36209;">string</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#D73A49;">        const</span><span style="color:#005CC5;"> H</span><span style="color:#D73A49;"> =</span><span style="color:#005CC5;"> 39</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#D73A49;">        var</span><span style="color:#24292E;"> total </span><span style="color:#D73A49;">=</span><span style="color:#005CC5;"> 0</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#D73A49;">        for</span><span style="color:#24292E;"> (</span><span style="color:#D73A49;">var</span><span style="color:#24292E;"> i </span><span style="color:#D73A49;">=</span><span style="color:#005CC5;"> 0</span><span style="color:#24292E;">; i </span><span style="color:#D73A49;">&lt;</span><span style="color:#24292E;"> string.</span><span style="color:#005CC5;">length</span><span style="color:#24292E;">; </span><span style="color:#D73A49;">++</span><span style="color:#24292E;">i) {</span></span>
<span class="line"><span style="color:#6A737D;">            // 霍纳算法 计算每个字母ASCII码 求和时乘以一个质数</span></span>
<span class="line"><span style="color:#24292E;">            total </span><span style="color:#D73A49;">+=</span><span style="color:#005CC5;"> H</span><span style="color:#D73A49;"> *</span><span style="color:#24292E;"> total </span><span style="color:#D73A49;">+</span><span style="color:#24292E;"> string.</span><span style="color:#6F42C1;">charCodeAt</span><span style="color:#24292E;">(i);</span></span>
<span class="line"><span style="color:#24292E;">        }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">        total </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> total </span><span style="color:#D73A49;">%</span><span style="color:#005CC5;"> this</span><span style="color:#24292E;">.table.</span><span style="color:#005CC5;">length</span><span style="color:#24292E;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">        if</span><span style="color:#24292E;"> (total </span><span style="color:#D73A49;">&lt;</span><span style="color:#005CC5;"> 0</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">            total </span><span style="color:#D73A49;">+=</span><span style="color:#005CC5;"> this</span><span style="color:#24292E;">.table.</span><span style="color:#005CC5;">length</span><span style="color:#D73A49;">-</span><span style="color:#005CC5;">1</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">        }</span></span>
<span class="line"><span style="color:#24292E;">        console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;Hash value: &quot;</span><span style="color:#D73A49;"> +</span><span style="color:#24292E;"> string </span><span style="color:#D73A49;">+</span><span style="color:#032F62;"> &quot; -&gt; &quot;</span><span style="color:#D73A49;"> +</span><span style="color:#24292E;"> total);</span></span>
<span class="line"><span style="color:#D73A49;">        return</span><span style="color:#6F42C1;"> parseInt</span><span style="color:#24292E;">(total);</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">    function</span><span style="color:#6F42C1;"> put</span><span style="color:#24292E;">(</span><span style="color:#E36209;">key</span><span style="color:#24292E;">, </span><span style="color:#E36209;">data</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#6A737D;">        // 使用散列表存储数据时，通过一个散列函数 将键映射为一个数字，这个数字的范围是0到散列表的长度。</span></span>
<span class="line"><span style="color:#D73A49;">        let</span><span style="color:#24292E;"> pos </span><span style="color:#D73A49;">=</span><span style="color:#005CC5;"> this</span><span style="color:#24292E;">.</span><span style="color:#6F42C1;">betterHash</span><span style="color:#24292E;">(key);</span></span>
<span class="line"><span style="color:#005CC5;">        this</span><span style="color:#24292E;">.table[pos] </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> data;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">        console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">this</span><span style="color:#24292E;">.table);</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">    function</span><span style="color:#6F42C1;"> get</span><span style="color:#24292E;">(</span><span style="color:#E36209;">key</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#D73A49;">        return</span><span style="color:#005CC5;"> this</span><span style="color:#24292E;">.table[</span><span style="color:#005CC5;">this</span><span style="color:#24292E;">.</span><span style="color:#6F42C1;">betterHash</span><span style="color:#24292E;">(key)];</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;"> function</span><span style="color:#6F42C1;"> showDistro</span><span style="color:#24292E;">() {</span></span>
<span class="line"><span style="color:#D73A49;">  var</span><span style="color:#24292E;"> n </span><span style="color:#D73A49;">=</span><span style="color:#005CC5;"> 0</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#D73A49;">  for</span><span style="color:#24292E;"> (</span><span style="color:#D73A49;">var</span><span style="color:#24292E;"> i </span><span style="color:#D73A49;">=</span><span style="color:#005CC5;"> 0</span><span style="color:#24292E;">; i </span><span style="color:#D73A49;">&lt;</span><span style="color:#005CC5;"> this</span><span style="color:#24292E;">.table.</span><span style="color:#005CC5;">length</span><span style="color:#24292E;">; </span><span style="color:#D73A49;">++</span><span style="color:#24292E;">i) {</span></span>
<span class="line"><span style="color:#D73A49;">   if</span><span style="color:#24292E;"> (</span><span style="color:#005CC5;">this</span><span style="color:#24292E;">.table[i] </span><span style="color:#D73A49;">!=</span><span style="color:#005CC5;"> undefined</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">    console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(i </span><span style="color:#D73A49;">+</span><span style="color:#032F62;"> &quot;: &quot;</span><span style="color:#D73A49;"> +</span><span style="color:#005CC5;"> this</span><span style="color:#24292E;">.table[i]);</span></span>
<span class="line"><span style="color:#24292E;">   }</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"><span style="color:#24292E;"> }</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">/*</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">开链法</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">*/</span></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#6F42C1;"> HashTable</span><span style="color:#D73A49;"> =</span><span style="color:#D73A49;"> function</span><span style="color:#24292E;">() {</span></span>
<span class="line"></span>
<span class="line"><span style="color:#005CC5;">    this</span><span style="color:#24292E;">.table </span><span style="color:#D73A49;">=</span><span style="color:#D73A49;"> new</span><span style="color:#6F42C1;"> Array</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">137</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#005CC5;">    this</span><span style="color:#24292E;">.betterHash </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> betterHash</span></span>
<span class="line"><span style="color:#005CC5;">    this</span><span style="color:#24292E;">.showDistro </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> showDistro</span></span>
<span class="line"><span style="color:#005CC5;">    this</span><span style="color:#24292E;">.put </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> put</span></span>
<span class="line"><span style="color:#005CC5;">    this</span><span style="color:#24292E;">.get </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> get</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;"> for</span><span style="color:#24292E;"> (</span><span style="color:#D73A49;">var</span><span style="color:#24292E;"> i </span><span style="color:#D73A49;">=</span><span style="color:#005CC5;"> 0</span><span style="color:#24292E;">; i </span><span style="color:#D73A49;">&lt;</span><span style="color:#005CC5;"> this</span><span style="color:#24292E;">.table.</span><span style="color:#005CC5;">length</span><span style="color:#24292E;">; </span><span style="color:#D73A49;">++</span><span style="color:#24292E;">i) {</span></span>
<span class="line"><span style="color:#005CC5;">  this</span><span style="color:#24292E;">.table[i] </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> [];</span></span>
<span class="line"><span style="color:#24292E;"> }</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">    function</span><span style="color:#6F42C1;"> betterHash</span><span style="color:#24292E;">(</span><span style="color:#E36209;">string</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#D73A49;">        const</span><span style="color:#005CC5;"> H</span><span style="color:#D73A49;"> =</span><span style="color:#005CC5;"> 39</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#D73A49;">        var</span><span style="color:#24292E;"> total </span><span style="color:#D73A49;">=</span><span style="color:#005CC5;"> 0</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#D73A49;">        for</span><span style="color:#24292E;"> (</span><span style="color:#D73A49;">var</span><span style="color:#24292E;"> i </span><span style="color:#D73A49;">=</span><span style="color:#005CC5;"> 0</span><span style="color:#24292E;">; i </span><span style="color:#D73A49;">&lt;</span><span style="color:#24292E;"> string.</span><span style="color:#005CC5;">length</span><span style="color:#24292E;">; </span><span style="color:#D73A49;">++</span><span style="color:#24292E;">i) {</span></span>
<span class="line"><span style="color:#6A737D;">            // 霍纳算法 计算每个字母ASCII码 求和时乘以一个质数</span></span>
<span class="line"><span style="color:#24292E;">            total </span><span style="color:#D73A49;">+=</span><span style="color:#005CC5;"> H</span><span style="color:#D73A49;"> *</span><span style="color:#24292E;"> total </span><span style="color:#D73A49;">+</span><span style="color:#24292E;"> string.</span><span style="color:#6F42C1;">charCodeAt</span><span style="color:#24292E;">(i);</span></span>
<span class="line"><span style="color:#24292E;">        }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">        total </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> total </span><span style="color:#D73A49;">%</span><span style="color:#005CC5;"> this</span><span style="color:#24292E;">.table.</span><span style="color:#005CC5;">length</span><span style="color:#24292E;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">        if</span><span style="color:#24292E;"> (total </span><span style="color:#D73A49;">&lt;</span><span style="color:#005CC5;"> 0</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">            total </span><span style="color:#D73A49;">+=</span><span style="color:#005CC5;"> this</span><span style="color:#24292E;">.table.</span><span style="color:#005CC5;">length</span><span style="color:#D73A49;">-</span><span style="color:#005CC5;">1</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">        }</span></span>
<span class="line"><span style="color:#24292E;">        console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;Hash value: &quot;</span><span style="color:#D73A49;"> +</span><span style="color:#24292E;"> string </span><span style="color:#D73A49;">+</span><span style="color:#032F62;"> &quot; -&gt; &quot;</span><span style="color:#D73A49;"> +</span><span style="color:#24292E;"> total);</span></span>
<span class="line"><span style="color:#D73A49;">        return</span><span style="color:#6F42C1;"> parseInt</span><span style="color:#24292E;">(total);</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">    function</span><span style="color:#6F42C1;"> put</span><span style="color:#24292E;">(</span><span style="color:#E36209;">key</span><span style="color:#24292E;">, </span><span style="color:#E36209;">data</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#D73A49;">        let</span><span style="color:#24292E;"> pos </span><span style="color:#D73A49;">=</span><span style="color:#005CC5;"> this</span><span style="color:#24292E;">.</span><span style="color:#6F42C1;">betterHash</span><span style="color:#24292E;">(key);</span></span>
<span class="line"><span style="color:#D73A49;">        let</span><span style="color:#24292E;"> index </span><span style="color:#D73A49;">=</span><span style="color:#005CC5;"> 0</span><span style="color:#24292E;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">        if</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">this</span><span style="color:#24292E;">.table[pos][index] </span><span style="color:#D73A49;">===</span><span style="color:#005CC5;"> undefined</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#005CC5;">            this</span><span style="color:#24292E;">.table[pos][index] </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> key;</span></span>
<span class="line"><span style="color:#005CC5;">            this</span><span style="color:#24292E;">.table[pos][index] </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> data;</span></span>
<span class="line"><span style="color:#24292E;">        } </span><span style="color:#D73A49;">else</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#D73A49;">            while</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">this</span><span style="color:#24292E;">.table[pos][index] </span><span style="color:#D73A49;">!==</span><span style="color:#005CC5;"> undefined</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#D73A49;">                ++</span><span style="color:#24292E;">index;</span></span>
<span class="line"><span style="color:#24292E;">            }</span></span>
<span class="line"><span style="color:#005CC5;">            this</span><span style="color:#24292E;">.table[pos][index] </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> key;</span></span>
<span class="line"><span style="color:#005CC5;">            this</span><span style="color:#24292E;">.table[pos][index] </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> data;</span></span>
<span class="line"><span style="color:#24292E;">        }</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">    function</span><span style="color:#6F42C1;"> get</span><span style="color:#24292E;">(</span><span style="color:#E36209;">key</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#D73A49;">        let</span><span style="color:#24292E;"> pos </span><span style="color:#D73A49;">=</span><span style="color:#005CC5;"> this</span><span style="color:#24292E;">.</span><span style="color:#6F42C1;">betterHash</span><span style="color:#24292E;">(key);</span></span>
<span class="line"><span style="color:#D73A49;">        let</span><span style="color:#24292E;"> index </span><span style="color:#D73A49;">=</span><span style="color:#005CC5;"> 0</span><span style="color:#24292E;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">        if</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">this</span><span style="color:#24292E;">.table[pos][index] </span><span style="color:#D73A49;">===</span><span style="color:#24292E;"> key) {</span></span>
<span class="line"><span style="color:#D73A49;">            return</span><span style="color:#005CC5;"> this</span><span style="color:#24292E;">.table[pos][index </span><span style="color:#D73A49;">+</span><span style="color:#005CC5;"> 1</span><span style="color:#24292E;">];</span></span>
<span class="line"><span style="color:#24292E;">        } </span><span style="color:#D73A49;">else</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#D73A49;">            while</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">this</span><span style="color:#24292E;">.table[pos][index] </span><span style="color:#D73A49;">!==</span><span style="color:#24292E;"> key) {</span></span>
<span class="line"><span style="color:#24292E;">                index </span><span style="color:#D73A49;">+=</span><span style="color:#005CC5;"> 2</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">            }</span></span>
<span class="line"><span style="color:#D73A49;">            return</span><span style="color:#005CC5;"> this</span><span style="color:#24292E;">.table[pos][index</span><span style="color:#D73A49;">+</span><span style="color:#005CC5;">1</span><span style="color:#24292E;">];</span></span>
<span class="line"><span style="color:#24292E;">        }</span></span>
<span class="line"><span style="color:#D73A49;">        return</span><span style="color:#005CC5;"> undefined</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;"> function</span><span style="color:#6F42C1;"> showDistro</span><span style="color:#24292E;">() {</span></span>
<span class="line"><span style="color:#D73A49;">  var</span><span style="color:#24292E;"> n </span><span style="color:#D73A49;">=</span><span style="color:#005CC5;"> 0</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#D73A49;">  for</span><span style="color:#24292E;"> (</span><span style="color:#D73A49;">var</span><span style="color:#24292E;"> i </span><span style="color:#D73A49;">=</span><span style="color:#005CC5;"> 0</span><span style="color:#24292E;">; i </span><span style="color:#D73A49;">&lt;</span><span style="color:#005CC5;"> this</span><span style="color:#24292E;">.table.</span><span style="color:#005CC5;">length</span><span style="color:#24292E;">; </span><span style="color:#D73A49;">++</span><span style="color:#24292E;">i) {</span></span>
<span class="line"><span style="color:#D73A49;">   if</span><span style="color:#24292E;"> (</span><span style="color:#005CC5;">this</span><span style="color:#24292E;">.table[i] </span><span style="color:#D73A49;">!=</span><span style="color:#005CC5;"> undefined</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">    console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(i </span><span style="color:#D73A49;">+</span><span style="color:#032F62;"> &quot;: &quot;</span><span style="color:#D73A49;"> +</span><span style="color:#005CC5;"> this</span><span style="color:#24292E;">.table[i]);</span></span>
<span class="line"><span style="color:#24292E;">   }</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"><span style="color:#24292E;"> }</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">/*</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">线性探测法</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">第二种处理碰撞的方法是线性探测法 。线性探测法隶属于一种更一般化的散列技术：开放寻址散列</span></span>
<span class="line"><span style="color:#6A737D;">。当发生碰撞时，线性探测法检查散列表中的下一个位置是否为空。</span></span>
<span class="line"><span style="color:#6A737D;">如果为空，就将数据存入该位置；如果不为空，则继续检查下一个位置，直到找到一个空的位置为止。</span></span>
<span class="line"><span style="color:#6A737D;">该技术是基于这样一个事实：每个散列表都会有很多空的单元格，可以使用它们来存储数据。</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">当存储数据使用的数组特别大时，选择线性探测法要比开链法好。</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">场景：</span></span>
<span class="line"><span style="color:#6A737D;">使用线性探测法创建一个字典，用来保存单词的定义。</span></span>
<span class="line"><span style="color:#6A737D;">该程序需要包含两个部分：</span></span>
<span class="line"><span style="color:#6A737D;">    第一部分从文本文件中读取一组单词和它们的定义，并将其存入散列表；</span></span>
<span class="line"><span style="color:#6A737D;">    第二部分让用户输入单词，程序给出该单词的定义。</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">读取一个文本文件，使用散列显示该文件中出现的单词和它们在文件中出现的次数。</span></span>
<span class="line"><span style="color:#6A737D;">*/</span></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#6F42C1;"> HashTable</span><span style="color:#D73A49;"> =</span><span style="color:#D73A49;"> function</span><span style="color:#24292E;">() {</span></span>
<span class="line"></span>
<span class="line"><span style="color:#005CC5;">    this</span><span style="color:#24292E;">.table </span><span style="color:#D73A49;">=</span><span style="color:#D73A49;"> new</span><span style="color:#6F42C1;"> Array</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">137</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#005CC5;">    this</span><span style="color:#24292E;">.values </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> [];</span></span>
<span class="line"><span style="color:#005CC5;">    this</span><span style="color:#24292E;">.betterHash </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> betterHash</span></span>
<span class="line"><span style="color:#005CC5;">    this</span><span style="color:#24292E;">.showDistro </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> showDistro</span></span>
<span class="line"><span style="color:#005CC5;">    this</span><span style="color:#24292E;">.put </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> put</span></span>
<span class="line"><span style="color:#005CC5;">    this</span><span style="color:#24292E;">.get </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> get</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">    function</span><span style="color:#6F42C1;"> betterHash</span><span style="color:#24292E;">(</span><span style="color:#E36209;">string</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#D73A49;">        const</span><span style="color:#005CC5;"> H</span><span style="color:#D73A49;"> =</span><span style="color:#005CC5;"> 39</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#D73A49;">        var</span><span style="color:#24292E;"> total </span><span style="color:#D73A49;">=</span><span style="color:#005CC5;"> 0</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#D73A49;">        for</span><span style="color:#24292E;"> (</span><span style="color:#D73A49;">var</span><span style="color:#24292E;"> i </span><span style="color:#D73A49;">=</span><span style="color:#005CC5;"> 0</span><span style="color:#24292E;">; i </span><span style="color:#D73A49;">&lt;</span><span style="color:#24292E;"> string.</span><span style="color:#005CC5;">length</span><span style="color:#24292E;">; </span><span style="color:#D73A49;">++</span><span style="color:#24292E;">i) {</span></span>
<span class="line"><span style="color:#6A737D;">            // 霍纳算法 计算每个字母ASCII码 求和时乘以一个质数</span></span>
<span class="line"><span style="color:#24292E;">            total </span><span style="color:#D73A49;">+=</span><span style="color:#005CC5;"> H</span><span style="color:#D73A49;"> *</span><span style="color:#24292E;"> total </span><span style="color:#D73A49;">+</span><span style="color:#24292E;"> string.</span><span style="color:#6F42C1;">charCodeAt</span><span style="color:#24292E;">(i);</span></span>
<span class="line"><span style="color:#24292E;">        }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">        total </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> total </span><span style="color:#D73A49;">%</span><span style="color:#005CC5;"> this</span><span style="color:#24292E;">.table.</span><span style="color:#005CC5;">length</span><span style="color:#24292E;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">        if</span><span style="color:#24292E;"> (total </span><span style="color:#D73A49;">&lt;</span><span style="color:#005CC5;"> 0</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">            total </span><span style="color:#D73A49;">+=</span><span style="color:#005CC5;"> this</span><span style="color:#24292E;">.table.</span><span style="color:#005CC5;">length</span><span style="color:#D73A49;">-</span><span style="color:#005CC5;">1</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">        }</span></span>
<span class="line"><span style="color:#24292E;">        console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;Hash value: &quot;</span><span style="color:#D73A49;"> +</span><span style="color:#24292E;"> string </span><span style="color:#D73A49;">+</span><span style="color:#032F62;"> &quot; -&gt; &quot;</span><span style="color:#D73A49;"> +</span><span style="color:#24292E;"> total);</span></span>
<span class="line"><span style="color:#D73A49;">        return</span><span style="color:#6F42C1;"> parseInt</span><span style="color:#24292E;">(total);</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">    function</span><span style="color:#6F42C1;"> put</span><span style="color:#24292E;">(</span><span style="color:#E36209;">key</span><span style="color:#24292E;">, </span><span style="color:#E36209;">data</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#D73A49;">        let</span><span style="color:#24292E;"> pos </span><span style="color:#D73A49;">=</span><span style="color:#005CC5;"> this</span><span style="color:#24292E;">.</span><span style="color:#6F42C1;">betterHash</span><span style="color:#24292E;">(key);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">        if</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">this</span><span style="color:#24292E;">.table[pos] </span><span style="color:#D73A49;">===</span><span style="color:#005CC5;"> undefined</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#005CC5;">            this</span><span style="color:#24292E;">.table[pos] </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> key;</span></span>
<span class="line"><span style="color:#005CC5;">            this</span><span style="color:#24292E;">.values[pos] </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> data;</span></span>
<span class="line"><span style="color:#24292E;">        } </span><span style="color:#D73A49;">else</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#D73A49;">            while</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">this</span><span style="color:#24292E;">.table[pos] </span><span style="color:#D73A49;">!==</span><span style="color:#005CC5;"> undefined</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">                pos</span><span style="color:#D73A49;">++</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">            }</span></span>
<span class="line"><span style="color:#005CC5;">            this</span><span style="color:#24292E;">.table[pos] </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> key;</span></span>
<span class="line"><span style="color:#005CC5;">            this</span><span style="color:#24292E;">.values[pos] </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> data;</span></span>
<span class="line"><span style="color:#24292E;">        }</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">    function</span><span style="color:#6F42C1;"> get</span><span style="color:#24292E;">(</span><span style="color:#E36209;">key</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#D73A49;">        var</span><span style="color:#24292E;"> hash </span><span style="color:#D73A49;">=</span><span style="color:#005CC5;"> this</span><span style="color:#24292E;">.</span><span style="color:#6F42C1;">betterHash</span><span style="color:#24292E;">(key);</span></span>
<span class="line"><span style="color:#D73A49;">        if</span><span style="color:#24292E;"> (hash </span><span style="color:#D73A49;">&gt;</span><span style="color:#D73A49;"> -</span><span style="color:#005CC5;">1</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#D73A49;">            for</span><span style="color:#24292E;"> (</span><span style="color:#D73A49;">var</span><span style="color:#24292E;"> i </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> hash; </span><span style="color:#005CC5;">this</span><span style="color:#24292E;">.table[hash] </span><span style="color:#D73A49;">!=</span><span style="color:#005CC5;"> undefined</span><span style="color:#24292E;">; i</span><span style="color:#D73A49;">++</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#D73A49;">                if</span><span style="color:#24292E;"> (</span><span style="color:#005CC5;">this</span><span style="color:#24292E;">.table[hash] </span><span style="color:#D73A49;">==</span><span style="color:#24292E;"> key) {</span></span>
<span class="line"><span style="color:#D73A49;">                    return</span><span style="color:#005CC5;"> this</span><span style="color:#24292E;">.values[hash];</span></span>
<span class="line"><span style="color:#24292E;">                }</span></span>
<span class="line"><span style="color:#24292E;">            }</span></span>
<span class="line"><span style="color:#24292E;">        }</span></span>
<span class="line"><span style="color:#D73A49;">        return</span><span style="color:#005CC5;"> undefined</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;"> function</span><span style="color:#6F42C1;"> showDistro</span><span style="color:#24292E;">() {</span></span>
<span class="line"><span style="color:#D73A49;">  var</span><span style="color:#24292E;"> n </span><span style="color:#D73A49;">=</span><span style="color:#005CC5;"> 0</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#D73A49;">  for</span><span style="color:#24292E;"> (</span><span style="color:#D73A49;">var</span><span style="color:#24292E;"> i </span><span style="color:#D73A49;">=</span><span style="color:#005CC5;"> 0</span><span style="color:#24292E;">; i </span><span style="color:#D73A49;">&lt;</span><span style="color:#005CC5;"> this</span><span style="color:#24292E;">.table.</span><span style="color:#005CC5;">length</span><span style="color:#24292E;">; </span><span style="color:#D73A49;">++</span><span style="color:#24292E;">i) {</span></span>
<span class="line"><span style="color:#D73A49;">   if</span><span style="color:#24292E;"> (</span><span style="color:#005CC5;">this</span><span style="color:#24292E;">.table[i] </span><span style="color:#D73A49;">!=</span><span style="color:#005CC5;"> undefined</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">    console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(i </span><span style="color:#D73A49;">+</span><span style="color:#032F62;"> &quot;: &quot;</span><span style="color:#D73A49;"> +</span><span style="color:#005CC5;"> this</span><span style="color:#24292E;">.table[i]);</span></span>
<span class="line"><span style="color:#24292E;">   }</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"><span style="color:#24292E;"> }</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 测试1</span></span>
<span class="line"><span style="color:#D73A49;">var</span><span style="color:#24292E;"> names </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> [</span><span style="color:#032F62;">&quot;David&quot;</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&quot;Jennifer&quot;</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&quot;Donnie&quot;</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&quot;Raymond&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#032F62;">                 &quot;Cynthia&quot;</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&quot;Mike&quot;</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&quot;Clayton&quot;</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&quot;Danny&quot;</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&quot;Jonathan&quot;</span><span style="color:#24292E;">];</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">var</span><span style="color:#24292E;"> hTable </span><span style="color:#D73A49;">=</span><span style="color:#D73A49;"> new</span><span style="color:#6F42C1;"> HashTable</span><span style="color:#24292E;">();</span></span>
<span class="line"><span style="color:#D73A49;">for</span><span style="color:#24292E;"> (</span><span style="color:#D73A49;">var</span><span style="color:#24292E;"> i </span><span style="color:#D73A49;">=</span><span style="color:#005CC5;"> 0</span><span style="color:#24292E;">; i </span><span style="color:#D73A49;">&lt;</span><span style="color:#24292E;"> names.</span><span style="color:#005CC5;">length</span><span style="color:#24292E;">; </span><span style="color:#D73A49;">++</span><span style="color:#24292E;">i) {</span></span>
<span class="line"><span style="color:#24292E;">    hTable.</span><span style="color:#6F42C1;">put</span><span style="color:#24292E;">(names[i], names[i]);</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"><span style="color:#24292E;">hTable.</span><span style="color:#6F42C1;">showDistro</span><span style="color:#24292E;">();</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">/*</span></span>
<span class="line"><span style="color:#6A737D;">    测试2</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">    // 创建学生成绩数据</span></span>
<span class="line"><span style="color:#6A737D;">    function getRandomInt (min, max) {</span></span>
<span class="line"><span style="color:#6A737D;">        return Math.floor(Math.random() * (max - min + 1)) + min;</span></span>
<span class="line"><span style="color:#6A737D;">    }</span></span>
<span class="line"><span style="color:#6A737D;">    function genStuData(arr) {</span></span>
<span class="line"><span style="color:#6A737D;">        for (var i = 0; i &lt; arr.length; ++i) {</span></span>
<span class="line"><span style="color:#6A737D;">            var num = &quot;&quot;;</span></span>
<span class="line"><span style="color:#6A737D;">            for (var j = 1; j &lt;= 9; ++j) {</span></span>
<span class="line"><span style="color:#6A737D;">                num += Math.floor(Math.random() * 10);</span></span>
<span class="line"><span style="color:#6A737D;">            }</span></span>
<span class="line"><span style="color:#6A737D;">            num += getRandomInt(50, 100);</span></span>
<span class="line"><span style="color:#6A737D;">            arr[i] = num;</span></span>
<span class="line"><span style="color:#6A737D;">        }</span></span>
<span class="line"><span style="color:#6A737D;">    }</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">    var numStudents = 10;</span></span>
<span class="line"><span style="color:#6A737D;">    var arrSize = 97;</span></span>
<span class="line"><span style="color:#6A737D;">    var idLen = 9;</span></span>
<span class="line"><span style="color:#6A737D;">    var students = new Array(numStudents);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">    genStuData(students);</span></span>
<span class="line"><span style="color:#6A737D;">    console.log (&quot;Student data: \\n&quot;);</span></span>
<span class="line"><span style="color:#6A737D;">    for (var i = 0; i &lt; students.length; ++i) {</span></span>
<span class="line"><span style="color:#6A737D;">        console.log(students[i].substring(0,8) + &quot; &quot; + students[i].substring(9));</span></span>
<span class="line"><span style="color:#6A737D;">    }</span></span>
<span class="line"><span style="color:#6A737D;">    console.log(&quot;\\n\\nData distribution: \\n&quot;);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">    var hTable = new HashTable();</span></span>
<span class="line"><span style="color:#6A737D;">    for (var i = 0; i &lt; students.length; ++i) {</span></span>
<span class="line"><span style="color:#6A737D;">       hTable.put(students[i]);</span></span>
<span class="line"><span style="color:#6A737D;">    }</span></span>
<span class="line"><span style="color:#6A737D;">    hTable.showDistro();</span></span>
<span class="line"><span style="color:#6A737D;">*/</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">/*</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">ES6</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">*/</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">class</span><span style="color:#6F42C1;"> Node</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#D73A49;"> constructor</span><span style="color:#24292E;">( </span><span style="color:#E36209;">data</span><span style="color:#24292E;"> ){</span></span>
<span class="line"><span style="color:#005CC5;">  this</span><span style="color:#24292E;">.data </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> data;</span></span>
<span class="line"><span style="color:#005CC5;">  this</span><span style="color:#24292E;">.next </span><span style="color:#D73A49;">=</span><span style="color:#005CC5;"> null</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;"> }</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">class</span><span style="color:#6F42C1;"> HashTableWithChaining</span><span style="color:#24292E;"> {</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;"> constructor</span><span style="color:#24292E;">( </span><span style="color:#E36209;">size</span><span style="color:#D73A49;"> =</span><span style="color:#005CC5;"> 10</span><span style="color:#24292E;"> ) {</span></span>
<span class="line"><span style="color:#005CC5;">  this</span><span style="color:#24292E;">.table </span><span style="color:#D73A49;">=</span><span style="color:#D73A49;"> new</span><span style="color:#6F42C1;"> Array</span><span style="color:#24292E;">( size );</span></span>
<span class="line"><span style="color:#24292E;"> }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6F42C1;"> computeHash</span><span style="color:#24292E;">( </span><span style="color:#E36209;">string</span><span style="color:#24292E;"> ) {</span></span>
<span class="line"><span style="color:#D73A49;">  let</span><span style="color:#005CC5;"> H</span><span style="color:#D73A49;"> =</span><span style="color:#005CC5;"> this</span><span style="color:#24292E;">.</span><span style="color:#6F42C1;">findPrime</span><span style="color:#24292E;">( </span><span style="color:#005CC5;">this</span><span style="color:#24292E;">.table.</span><span style="color:#005CC5;">length</span><span style="color:#24292E;"> );</span></span>
<span class="line"><span style="color:#D73A49;">  let</span><span style="color:#24292E;"> total </span><span style="color:#D73A49;">=</span><span style="color:#005CC5;"> 0</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#D73A49;">  for</span><span style="color:#24292E;"> (</span><span style="color:#D73A49;">let</span><span style="color:#24292E;"> i </span><span style="color:#D73A49;">=</span><span style="color:#005CC5;"> 0</span><span style="color:#24292E;">; i </span><span style="color:#D73A49;">&lt;</span><span style="color:#24292E;"> string.</span><span style="color:#005CC5;">length</span><span style="color:#24292E;">; </span><span style="color:#D73A49;">++</span><span style="color:#24292E;">i) {</span></span>
<span class="line"><span style="color:#24292E;">   total </span><span style="color:#D73A49;">+=</span><span style="color:#005CC5;"> H</span><span style="color:#D73A49;"> *</span><span style="color:#24292E;"> total </span><span style="color:#D73A49;">+</span><span style="color:#24292E;"> string.</span><span style="color:#6F42C1;">charCodeAt</span><span style="color:#24292E;">(i);</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"><span style="color:#D73A49;">  return</span><span style="color:#24292E;"> total </span><span style="color:#D73A49;">%</span><span style="color:#005CC5;"> this</span><span style="color:#24292E;">.table.</span><span style="color:#005CC5;">length</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;"> }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"> // 取模</span></span>
<span class="line"><span style="color:#6F42C1;"> findPrime</span><span style="color:#24292E;">( </span><span style="color:#E36209;">num</span><span style="color:#24292E;"> ) {</span></span>
<span class="line"><span style="color:#D73A49;">  while</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">true</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#D73A49;">   if</span><span style="color:#24292E;">( </span><span style="color:#005CC5;">this</span><span style="color:#24292E;">.</span><span style="color:#6F42C1;">isPrime</span><span style="color:#24292E;">(num) ){ </span><span style="color:#D73A49;">break</span><span style="color:#24292E;">; }</span></span>
<span class="line"><span style="color:#24292E;">   num </span><span style="color:#D73A49;">+=</span><span style="color:#005CC5;"> 1</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"><span style="color:#D73A49;">  return</span><span style="color:#24292E;"> num;</span></span>
<span class="line"><span style="color:#24292E;"> }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"> // 判断素数</span></span>
<span class="line"><span style="color:#6F42C1;">    isPrime</span><span style="color:#24292E;">( </span><span style="color:#E36209;">num</span><span style="color:#24292E;"> ) {</span></span>
<span class="line"><span style="color:#D73A49;">  for</span><span style="color:#24292E;">(</span><span style="color:#D73A49;">let</span><span style="color:#24292E;"> i </span><span style="color:#D73A49;">=</span><span style="color:#005CC5;"> 2</span><span style="color:#24292E;">, s </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> Math.</span><span style="color:#6F42C1;">sqrt</span><span style="color:#24292E;">(num); i </span><span style="color:#D73A49;">&lt;=</span><span style="color:#24292E;"> s; i</span><span style="color:#D73A49;">++</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#D73A49;">   if</span><span style="color:#24292E;">(num </span><span style="color:#D73A49;">%</span><span style="color:#24292E;"> i </span><span style="color:#D73A49;">===</span><span style="color:#005CC5;"> 0</span><span style="color:#24292E;">) </span><span style="color:#D73A49;">return</span><span style="color:#005CC5;"> false</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#D73A49;">  return</span><span style="color:#24292E;"> num </span><span style="color:#D73A49;">!==</span><span style="color:#005CC5;"> 1</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;"> }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"> // 插入值</span></span>
<span class="line"><span style="color:#6F42C1;"> put</span><span style="color:#24292E;">( </span><span style="color:#E36209;">item</span><span style="color:#24292E;"> ) {</span></span>
<span class="line"><span style="color:#D73A49;">  let</span><span style="color:#24292E;"> key </span><span style="color:#D73A49;">=</span><span style="color:#005CC5;"> this</span><span style="color:#24292E;">.</span><span style="color:#6F42C1;">computeHash</span><span style="color:#24292E;">( item );</span></span>
<span class="line"><span style="color:#D73A49;">  let</span><span style="color:#24292E;"> node </span><span style="color:#D73A49;">=</span><span style="color:#D73A49;"> new</span><span style="color:#6F42C1;"> Node</span><span style="color:#24292E;">(item)</span></span>
<span class="line"><span style="color:#D73A49;">  if</span><span style="color:#24292E;"> ( </span><span style="color:#005CC5;">this</span><span style="color:#24292E;">.table[key] ) {</span></span>
<span class="line"><span style="color:#24292E;">   node.next </span><span style="color:#D73A49;">=</span><span style="color:#005CC5;"> this</span><span style="color:#24292E;">.table[key]</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"><span style="color:#005CC5;">  this</span><span style="color:#24292E;">.table[key] </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> node</span></span>
<span class="line"><span style="color:#24292E;"> }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"> // 删除值</span></span>
<span class="line"><span style="color:#6F42C1;"> remove</span><span style="color:#24292E;">( </span><span style="color:#E36209;">item</span><span style="color:#24292E;"> ) {</span></span>
<span class="line"><span style="color:#D73A49;">  let</span><span style="color:#24292E;"> key </span><span style="color:#D73A49;">=</span><span style="color:#005CC5;"> this</span><span style="color:#24292E;">.</span><span style="color:#6F42C1;">computeHash</span><span style="color:#24292E;">( item );</span></span>
<span class="line"><span style="color:#D73A49;">  if</span><span style="color:#24292E;">( </span><span style="color:#005CC5;">this</span><span style="color:#24292E;">.table[key] ) {</span></span>
<span class="line"><span style="color:#D73A49;">   if</span><span style="color:#24292E;">( </span><span style="color:#005CC5;">this</span><span style="color:#24292E;">.table[key].data </span><span style="color:#D73A49;">===</span><span style="color:#24292E;"> item ) {</span></span>
<span class="line"><span style="color:#005CC5;">    this</span><span style="color:#24292E;">.table[key] </span><span style="color:#D73A49;">=</span><span style="color:#005CC5;"> this</span><span style="color:#24292E;">.table[key].next</span></span>
<span class="line"><span style="color:#24292E;">   } </span><span style="color:#D73A49;">else</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#D73A49;">    let</span><span style="color:#24292E;"> current </span><span style="color:#D73A49;">=</span><span style="color:#005CC5;"> this</span><span style="color:#24292E;">.table[key].next;</span></span>
<span class="line"><span style="color:#D73A49;">    let</span><span style="color:#24292E;"> prev </span><span style="color:#D73A49;">=</span><span style="color:#005CC5;"> this</span><span style="color:#24292E;">.table[key];</span></span>
<span class="line"><span style="color:#D73A49;">    while</span><span style="color:#24292E;">( current ) {</span></span>
<span class="line"><span style="color:#D73A49;">     if</span><span style="color:#24292E;">( current.data </span><span style="color:#D73A49;">===</span><span style="color:#24292E;"> item ) {</span></span>
<span class="line"><span style="color:#24292E;">      prev.next </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> current.next</span></span>
<span class="line"><span style="color:#24292E;">     }</span></span>
<span class="line"><span style="color:#24292E;">     prev </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> current</span></span>
<span class="line"><span style="color:#24292E;">     current </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> current.next;</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">   }</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"><span style="color:#24292E;"> }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"> // 判断包含</span></span>
<span class="line"><span style="color:#6F42C1;"> contains</span><span style="color:#24292E;">(</span><span style="color:#E36209;">item</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#D73A49;">  for</span><span style="color:#24292E;"> (</span><span style="color:#D73A49;">let</span><span style="color:#24292E;"> i </span><span style="color:#D73A49;">=</span><span style="color:#005CC5;"> 0</span><span style="color:#24292E;">; i </span><span style="color:#D73A49;">&lt;</span><span style="color:#005CC5;"> this</span><span style="color:#24292E;">.table.</span><span style="color:#005CC5;">length</span><span style="color:#24292E;">; i</span><span style="color:#D73A49;">++</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#D73A49;">   if</span><span style="color:#24292E;"> (</span><span style="color:#005CC5;">this</span><span style="color:#24292E;">.table[i]) {</span></span>
<span class="line"><span style="color:#D73A49;">    let</span><span style="color:#24292E;"> current </span><span style="color:#D73A49;">=</span><span style="color:#005CC5;"> this</span><span style="color:#24292E;">.table[i];</span></span>
<span class="line"><span style="color:#D73A49;">    while</span><span style="color:#24292E;"> (current) {</span></span>
<span class="line"><span style="color:#D73A49;">     if</span><span style="color:#24292E;"> (current.data </span><span style="color:#D73A49;">===</span><span style="color:#24292E;"> item) {</span></span>
<span class="line"><span style="color:#D73A49;">      return</span><span style="color:#005CC5;"> true</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">     }</span></span>
<span class="line"><span style="color:#24292E;">     current </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> current.next;</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">   }</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"><span style="color:#D73A49;">  return</span><span style="color:#005CC5;"> false</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;"> }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"> // 判断长度</span></span>
<span class="line"><span style="color:#6F42C1;"> size</span><span style="color:#24292E;">( </span><span style="color:#E36209;">item</span><span style="color:#24292E;"> ) {</span></span>
<span class="line"><span style="color:#D73A49;">  let</span><span style="color:#24292E;"> counter </span><span style="color:#D73A49;">=</span><span style="color:#005CC5;"> 0</span></span>
<span class="line"><span style="color:#D73A49;">  for</span><span style="color:#24292E;">(</span><span style="color:#D73A49;">let</span><span style="color:#24292E;"> i</span><span style="color:#D73A49;">=</span><span style="color:#005CC5;">0</span><span style="color:#24292E;">; i</span><span style="color:#D73A49;">&lt;</span><span style="color:#005CC5;">this</span><span style="color:#24292E;">.table.</span><span style="color:#005CC5;">length</span><span style="color:#24292E;">; i</span><span style="color:#D73A49;">++</span><span style="color:#24292E;">){</span></span>
<span class="line"><span style="color:#D73A49;">   if</span><span style="color:#24292E;">( </span><span style="color:#005CC5;">this</span><span style="color:#24292E;">.table[i] ) {</span></span>
<span class="line"><span style="color:#D73A49;">   let</span><span style="color:#24292E;"> current </span><span style="color:#D73A49;">=</span><span style="color:#005CC5;"> this</span><span style="color:#24292E;">.table[i]</span></span>
<span class="line"><span style="color:#D73A49;">   while</span><span style="color:#24292E;">( current ) {</span></span>
<span class="line"><span style="color:#24292E;">    counter</span><span style="color:#D73A49;">++</span></span>
<span class="line"><span style="color:#24292E;">    current </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> current.next</span></span>
<span class="line"><span style="color:#24292E;">   }</span></span>
<span class="line"><span style="color:#24292E;">   }</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"><span style="color:#D73A49;">  return</span><span style="color:#24292E;"> counter</span></span>
<span class="line"><span style="color:#24292E;"> }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"> // 判断空</span></span>
<span class="line"><span style="color:#6F42C1;"> isEmpty</span><span style="color:#24292E;">() {</span></span>
<span class="line"><span style="color:#D73A49;">  return</span><span style="color:#005CC5;"> this</span><span style="color:#24292E;">.</span><span style="color:#6F42C1;">size</span><span style="color:#24292E;">() </span><span style="color:#D73A49;">&lt;</span><span style="color:#005CC5;"> 1</span></span>
<span class="line"><span style="color:#24292E;"> }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"> // 遍历</span></span>
<span class="line"><span style="color:#6F42C1;"> traverse</span><span style="color:#24292E;">( </span><span style="color:#E36209;">fn</span><span style="color:#24292E;"> ) {</span></span>
<span class="line"><span style="color:#D73A49;">  for</span><span style="color:#24292E;">(</span><span style="color:#D73A49;">let</span><span style="color:#24292E;"> i</span><span style="color:#D73A49;">=</span><span style="color:#005CC5;">0</span><span style="color:#24292E;">; i</span><span style="color:#D73A49;">&lt;</span><span style="color:#005CC5;">this</span><span style="color:#24292E;">.table.</span><span style="color:#005CC5;">length</span><span style="color:#24292E;">; i</span><span style="color:#D73A49;">++</span><span style="color:#24292E;">){</span></span>
<span class="line"><span style="color:#D73A49;">   if</span><span style="color:#24292E;">( </span><span style="color:#005CC5;">this</span><span style="color:#24292E;">.table[i] ) {</span></span>
<span class="line"><span style="color:#D73A49;">    let</span><span style="color:#24292E;"> current </span><span style="color:#D73A49;">=</span><span style="color:#005CC5;"> this</span><span style="color:#24292E;">.table[i];</span></span>
<span class="line"><span style="color:#D73A49;">    while</span><span style="color:#24292E;">( current ) {</span></span>
<span class="line"><span style="color:#6F42C1;">     fn</span><span style="color:#24292E;">( current );</span></span>
<span class="line"><span style="color:#24292E;">     current </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> current.next;</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">   }</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"><span style="color:#24292E;"> }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div>`,9)]))}const A=n(o,[["render",e]]);export{C as __pageData,A as default};
