import{_ as a,c as n,o as l,ag as p}from"./chunks/framework.DPDPlp3K.js";const C=JSON.parse('{"title":"堆栈 Heap Stack","description":"","frontmatter":{},"headers":[],"relativePath":"algorithm/dataStructure/堆栈.md","filePath":"algorithm/dataStructure/堆栈.md"}'),o={name:"algorithm/dataStructure/堆栈.md"};function e(t,s,c,r,y,i){return l(),n("div",null,s[0]||(s[0]=[p(`<h1 id="堆栈-heap-stack" tabindex="-1">堆栈 Heap Stack <a class="header-anchor" href="#堆栈-heap-stack" aria-label="Permalink to &quot;堆栈 Heap Stack&quot;">​</a></h1><ul><li>基本信息: <ul><li>名称: 栈 Stack</li><li>作者: Alan M. Turing（艾伦·图灵）</li><li>时间: 1946年</li><li>著作: <ul><li>《艾伦·图灵传：如谜的解谜者》</li><li>《图灵的秘密》</li></ul></li></ul></li></ul><blockquote><p>为了解决子程序的调用和返回 是一种后进先出（LIFO）的数据结构</p></blockquote><h2 id="场景" tabindex="-1">场景 <a class="header-anchor" href="#场景" aria-label="Permalink to &quot;场景&quot;">​</a></h2><ul><li>浏览器前进后退功能</li></ul><h2 id="实现" tabindex="-1">实现 <a class="header-anchor" href="#实现" aria-label="Permalink to &quot;实现&quot;">​</a></h2><h3 id="方法" tabindex="-1">方法 <a class="header-anchor" href="#方法" aria-label="Permalink to &quot;方法&quot;">​</a></h3><ul><li>栈顶添加元素(入栈) push()</li><li>栈顶移元素(出栈) pop()</li><li>查看栈顶元素 peek()</li><li>清空栈 clear()</li><li>栈个数 size()</li><li>检查栈是否为空 isEmpty()</li></ul><h2 id="场景-1" tabindex="-1">场景 <a class="header-anchor" href="#场景-1" aria-label="Permalink to &quot;场景&quot;">​</a></h2><ul><li>十进制转二进制</li><li>历史操作，记录-撤回</li></ul><h2 id="实现-1" tabindex="-1">实现 <a class="header-anchor" href="#实现-1" aria-label="Permalink to &quot;实现&quot;">​</a></h2><h3 id="es6" tabindex="-1">ES6 <a class="header-anchor" href="#es6" aria-label="Permalink to &quot;ES6&quot;">​</a></h3><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-light vp-code" tabindex="0"><code><span class="line"><span style="color:#6A737D;">// ES6</span></span>
<span class="line"><span style="color:#D73A49;">class</span><span style="color:#6F42C1;"> Stack</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#D73A49;">    constructor</span><span style="color:#24292E;">() {</span></span>
<span class="line"><span style="color:#005CC5;">        this</span><span style="color:#24292E;">.items </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> []</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#6A737D;">   // 入栈</span></span>
<span class="line"><span style="color:#6F42C1;">    push</span><span style="color:#24292E;">(</span><span style="color:#E36209;">item</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#005CC5;">        this</span><span style="color:#24292E;">.items.</span><span style="color:#6F42C1;">push</span><span style="color:#24292E;">(item)</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#6F42C1;">    pop</span><span style="color:#24292E;">() {</span></span>
<span class="line"><span style="color:#D73A49;">        return</span><span style="color:#005CC5;"> this</span><span style="color:#24292E;">.items.</span><span style="color:#6F42C1;">pop</span><span style="color:#24292E;">()</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#6F42C1;">    peek</span><span style="color:#24292E;">() {</span></span>
<span class="line"><span style="color:#D73A49;">        return</span><span style="color:#005CC5;"> this</span><span style="color:#24292E;">.items[</span><span style="color:#005CC5;">this</span><span style="color:#24292E;">.items.</span><span style="color:#005CC5;">length</span><span style="color:#D73A49;"> -</span><span style="color:#005CC5;">1</span><span style="color:#24292E;">]</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#6F42C1;">    clear</span><span style="color:#24292E;">() {</span></span>
<span class="line"><span style="color:#005CC5;">        this</span><span style="color:#24292E;">.items </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> []</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#6F42C1;">    size</span><span style="color:#24292E;">() {</span></span>
<span class="line"><span style="color:#D73A49;">        return</span><span style="color:#005CC5;"> this</span><span style="color:#24292E;">.items.</span><span style="color:#005CC5;">length</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#6F42C1;">    isEmpty</span><span style="color:#24292E;">() {</span></span>
<span class="line"><span style="color:#D73A49;">        return</span><span style="color:#005CC5;"> this</span><span style="color:#24292E;">.items.</span><span style="color:#005CC5;">length</span><span style="color:#D73A49;"> ==</span><span style="color:#005CC5;"> 0</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#6F42C1;">    getItems</span><span style="color:#24292E;">() {</span></span>
<span class="line"><span style="color:#D73A49;">        return</span><span style="color:#005CC5;"> this</span><span style="color:#24292E;">.items</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-light vp-code" tabindex="0"><code><span class="line"><span style="color:#D73A49;">class</span><span style="color:#6F42C1;"> Stack</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#D73A49;">    constructor</span><span style="color:#24292E;">(</span><span style="color:#D73A49;">...</span><span style="color:#E36209;">items</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#005CC5;">        this</span><span style="color:#24292E;">.reverse </span><span style="color:#D73A49;">=</span><span style="color:#005CC5;"> false</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#005CC5;">        this</span><span style="color:#24292E;">.stack </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> [</span><span style="color:#D73A49;">...</span><span style="color:#24292E;">items];</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6F42C1;">    push</span><span style="color:#24292E;">(</span><span style="color:#D73A49;">...</span><span style="color:#E36209;">items</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#D73A49;">        return</span><span style="color:#005CC5;"> this</span><span style="color:#24292E;">.reverse</span></span>
<span class="line"><span style="color:#D73A49;">            ?</span><span style="color:#005CC5;"> this</span><span style="color:#24292E;">.stack.</span><span style="color:#6F42C1;">unshift</span><span style="color:#24292E;">(</span><span style="color:#D73A49;">...</span><span style="color:#24292E;">items)</span></span>
<span class="line"><span style="color:#D73A49;">            :</span><span style="color:#005CC5;"> this</span><span style="color:#24292E;">.stack.</span><span style="color:#6F42C1;">push</span><span style="color:#24292E;">(</span><span style="color:#D73A49;">...</span><span style="color:#24292E;">items);</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6F42C1;">    pop</span><span style="color:#24292E;">() {</span></span>
<span class="line"><span style="color:#D73A49;">        return</span><span style="color:#005CC5;"> this</span><span style="color:#24292E;">.reverse</span></span>
<span class="line"><span style="color:#D73A49;">         ?</span><span style="color:#005CC5;"> this</span><span style="color:#24292E;">.stack.</span><span style="color:#6F42C1;">shift</span><span style="color:#24292E;">()</span></span>
<span class="line"><span style="color:#D73A49;">         :</span><span style="color:#005CC5;"> this</span><span style="color:#24292E;">.stack.</span><span style="color:#6F42C1;">pop</span><span style="color:#24292E;">();</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#005CC5;"> stack</span><span style="color:#D73A49;"> =</span><span style="color:#D73A49;"> new</span><span style="color:#6F42C1;"> Stack</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">4</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">5</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">stack.reverse </span><span style="color:#D73A49;">=</span><span style="color:#005CC5;"> true</span><span style="color:#24292E;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(stack.</span><span style="color:#6F42C1;">push</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">1</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">2</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">3</span><span style="color:#24292E;">) </span><span style="color:#D73A49;">===</span><span style="color:#005CC5;"> 5</span><span style="color:#24292E;">) </span><span style="color:#6A737D;">// true</span></span>
<span class="line"><span style="color:#24292E;">console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(stack.stack </span><span style="color:#D73A49;">===</span><span style="color:#24292E;">[</span><span style="color:#005CC5;">1</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">2</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">3</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">4</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">5</span><span style="color:#24292E;">]) </span><span style="color:#6A737D;">// true</span></span></code></pre></div><h3 id="" tabindex="-1"><a class="header-anchor" href="#" aria-label="Permalink to &quot;&quot;">​</a></h3><h3 id="十进制转二进制" tabindex="-1">十进制转二进制 <a class="header-anchor" href="#十进制转二进制" aria-label="Permalink to &quot;十进制转二进制&quot;">​</a></h3><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-light vp-code" tabindex="0"><code><span class="line"></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#6F42C1;"> dec2bin</span><span style="color:#D73A49;"> =</span><span style="color:#D73A49;"> function</span><span style="color:#24292E;">(</span><span style="color:#E36209;">decNumber</span><span style="color:#24292E;">) {</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">    // 不是数字返回 Err</span></span>
<span class="line"><span style="color:#D73A49;">    if</span><span style="color:#24292E;"> (</span><span style="color:#6F42C1;">isNaN</span><span style="color:#24292E;">(decNumber)) </span><span style="color:#D73A49;">throw</span><span style="color:#24292E;"> (</span><span style="color:#032F62;">&#39;decNumber must a number&#39;</span><span style="color:#24292E;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">    if</span><span style="color:#24292E;"> (decNumber </span><span style="color:#D73A49;">===</span><span style="color:#005CC5;"> 0</span><span style="color:#24292E;">) </span><span style="color:#D73A49;">return</span><span style="color:#032F62;"> &#39;0&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">    // 取绝对值， 用来处理负数</span></span>
<span class="line"><span style="color:#D73A49;">    var</span><span style="color:#24292E;"> absDecNumber </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> Math.</span><span style="color:#6F42C1;">abs</span><span style="color:#24292E;">(decNumber)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">    // 1. 定义栈对象</span></span>
<span class="line"><span style="color:#D73A49;">    var</span><span style="color:#24292E;"> stack </span><span style="color:#D73A49;">=</span><span style="color:#D73A49;"> new</span><span style="color:#6F42C1;"> Stack</span><span style="color:#24292E;">()</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">    // 2.循环操作</span></span>
<span class="line"><span style="color:#D73A49;">    while</span><span style="color:#24292E;"> (absDecNumber </span><span style="color:#D73A49;">&gt;</span><span style="color:#005CC5;"> 0</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#6A737D;">        // 2.1 获取余数 压入栈中</span></span>
<span class="line"><span style="color:#24292E;">        stack.</span><span style="color:#6F42C1;">push</span><span style="color:#24292E;">(absDecNumber </span><span style="color:#D73A49;">%</span><span style="color:#005CC5;"> 2</span><span style="color:#24292E;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">        // 2.2 获取整除后的余数结果，作为下一次允许的数字</span></span>
<span class="line"><span style="color:#24292E;">        absDecNumber </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> Math.</span><span style="color:#6F42C1;">floor</span><span style="color:#24292E;">(absDecNumber </span><span style="color:#D73A49;">/</span><span style="color:#005CC5;"> 2</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#6A737D;">        // absDecNumber = ~~(Math.floor(absDecNumber / 2))</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">    // 3. 从栈中取出 0 和 1</span></span>
<span class="line"><span style="color:#D73A49;">    var</span><span style="color:#24292E;"> binaryString </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> decNumber </span><span style="color:#D73A49;">&lt;</span><span style="color:#005CC5;"> 0</span><span style="color:#D73A49;"> ?</span><span style="color:#032F62;"> &#39;-&#39;</span><span style="color:#D73A49;"> :</span><span style="color:#032F62;"> &#39;&#39;</span></span>
<span class="line"><span style="color:#D73A49;">    while</span><span style="color:#24292E;"> (</span><span style="color:#D73A49;">!</span><span style="color:#24292E;">stack.</span><span style="color:#6F42C1;">isEmpty</span><span style="color:#24292E;">()) {</span></span>
<span class="line"><span style="color:#24292E;">        binaryString </span><span style="color:#D73A49;">+=</span><span style="color:#24292E;"> stack.</span><span style="color:#6F42C1;">pop</span><span style="color:#24292E;">()</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">    return</span><span style="color:#24292E;"> binaryString</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div>`,17)]))}const h=a(o,[["render",e]]);export{C as __pageData,h as default};
