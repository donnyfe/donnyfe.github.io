import{_ as n,c as a,o as l,ag as p}from"./chunks/framework.DPDPlp3K.js";const C=JSON.parse('{"title":"数组 Array","description":"","frontmatter":{},"headers":[],"relativePath":"algorithm/dataStructure/数组.md","filePath":"algorithm/dataStructure/数组.md"}'),o={name:"algorithm/dataStructure/数组.md"};function e(t,s,c,r,i,y){return l(),a("div",null,s[0]||(s[0]=[p(`<h1 id="数组-array" tabindex="-1">数组 Array <a class="header-anchor" href="#数组-array" aria-label="Permalink to &quot;数组 Array&quot;">​</a></h1><h2 id="简介" tabindex="-1">简介 <a class="header-anchor" href="#简介" aria-label="Permalink to &quot;简介&quot;">​</a></h2><p>数组（Array）：是一种线性表数据结构。它用一组连续的内存空间来存储一组具有相同类型的数据（特征）。</p><p>线性表（Linear List）：线性表就是数据排成像一条线一样的结构。每个线性表上的数据最多只有前和后两个方向。其实除了数组，链表、队列、栈等也是线性表结构。</p><p>优点：</p><ul><li>随机访问</li></ul><p>缺点：</p><ul><li>数组增加、删除操作低效，原因：为了保证连续性，就需要做大量的数据搬移工作。</li><li>数组必须占用整块、连续的内存空间，如果声明数组过大，可能会导致“内存不足”。</li><li>数组不够灵活，一旦需要扩容，会重新申请连续整块空间，并需要把原数组的数据全部拷贝到新申请的空间。</li></ul><h2 id="实例" tabindex="-1">实例 <a class="header-anchor" href="#实例" aria-label="Permalink to &quot;实例&quot;">​</a></h2><ul><li>Reat Hooks</li></ul><h2 id="实现" tabindex="-1">实现 <a class="header-anchor" href="#实现" aria-label="Permalink to &quot;实现&quot;">​</a></h2><h3 id="属性" tabindex="-1">属性 <a class="header-anchor" href="#属性" aria-label="Permalink to &quot;属性&quot;">​</a></h3><ul><li>listSize——列表的元素个数</li><li>pos——列表的当前位置</li><li>length——返回列表中元素的个数</li></ul><h3 id="方法" tabindex="-1">方法 <a class="header-anchor" href="#方法" aria-label="Permalink to &quot;方法&quot;">​</a></h3><ul><li>clear——清空列表中的所有元素</li><li>toString——返回列表的字符串形式</li><li>getElement——返回当前位置的元素</li><li>insert——在现有元素后插入新元素</li><li>append——在列表的末尾添加新元素</li><li>remove——从列表中删除元素</li><li>front——将列表的当前位置设移动到第一个元素</li><li>end——将列表的当前位置移动到最后一个元素</li><li>prev——将当前位置后移一位</li><li>next——将当前位置前移一位</li><li>currPos——返回列表的当前位置</li><li>moveTo——将当前位置移动到指定位置</li></ul><p>原生方法:</p><ul><li>indexOf</li><li>lastIndexOf</li><li>includes</li><li>fill</li><li>join</li></ul><p>支持回调函数:</p><ul><li>findIndex</li><li>find</li><li>filter</li><li>forEach</li><li>map</li><li>some</li><li>every</li><li>reduce</li></ul><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-light vp-code" tabindex="0"><code><span class="line"><span style="color:#D73A49;">class</span><span style="color:#6F42C1;"> List</span><span style="color:#24292E;">() {</span></span>
<span class="line"><span style="color:#D73A49;">    constructor</span><span style="color:#24292E;">() {</span></span>
<span class="line"><span style="color:#005CC5;">        this</span><span style="color:#24292E;">.data </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> []; </span><span style="color:#6A737D;">//初始化一个空数组来保存列表元素</span></span>
<span class="line"><span style="color:#005CC5;">        this</span><span style="color:#24292E;">.listSize </span><span style="color:#D73A49;">=</span><span style="color:#005CC5;"> 0</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#005CC5;">        this</span><span style="color:#24292E;">.pos </span><span style="color:#D73A49;">=</span><span style="color:#005CC5;"> 0</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6F42C1;">    append</span><span style="color:#24292E;">(</span><span style="color:#E36209;">element</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#005CC5;">        this</span><span style="color:#24292E;">.data[</span><span style="color:#005CC5;">this</span><span style="color:#24292E;">.listSize</span><span style="color:#D73A49;">++</span><span style="color:#24292E;">] </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> element;</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6F42C1;">    find</span><span style="color:#24292E;">(</span><span style="color:#E36209;">element</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#D73A49;">        for</span><span style="color:#24292E;"> (</span><span style="color:#D73A49;">let</span><span style="color:#24292E;"> i </span><span style="color:#D73A49;">=</span><span style="color:#005CC5;"> 0</span><span style="color:#24292E;">; i </span><span style="color:#D73A49;">&lt;</span><span style="color:#005CC5;"> this</span><span style="color:#24292E;">.data.</span><span style="color:#005CC5;">length</span><span style="color:#24292E;">; </span><span style="color:#D73A49;">++</span><span style="color:#24292E;">i) {</span></span>
<span class="line"><span style="color:#D73A49;">            if</span><span style="color:#24292E;"> (</span><span style="color:#005CC5;">this</span><span style="color:#24292E;">.data[i] </span><span style="color:#D73A49;">==</span><span style="color:#24292E;"> element) {</span></span>
<span class="line"><span style="color:#D73A49;">                return</span><span style="color:#24292E;"> i;</span></span>
<span class="line"><span style="color:#24292E;">            }</span></span>
<span class="line"><span style="color:#24292E;">        }</span></span>
<span class="line"><span style="color:#D73A49;">        return</span><span style="color:#D73A49;"> -</span><span style="color:#005CC5;">1</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6F42C1;">    remove</span><span style="color:#24292E;">(</span><span style="color:#E36209;">element</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#D73A49;">        let</span><span style="color:#24292E;"> foundAt </span><span style="color:#D73A49;">=</span><span style="color:#005CC5;"> this</span><span style="color:#24292E;">.</span><span style="color:#6F42C1;">find</span><span style="color:#24292E;">(element);</span></span>
<span class="line"><span style="color:#D73A49;">        if</span><span style="color:#24292E;"> (foundAt </span><span style="color:#D73A49;">&gt;</span><span style="color:#D73A49;"> -</span><span style="color:#005CC5;">1</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#005CC5;">            this</span><span style="color:#24292E;">.data.</span><span style="color:#6F42C1;">splice</span><span style="color:#24292E;">(foundAt,</span><span style="color:#005CC5;">1</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#D73A49;">            --</span><span style="color:#005CC5;">this</span><span style="color:#24292E;">.listSize;</span></span>
<span class="line"><span style="color:#D73A49;">            return</span><span style="color:#005CC5;"> true</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">        }</span></span>
<span class="line"><span style="color:#D73A49;">        return</span><span style="color:#005CC5;"> false</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6F42C1;">    length</span><span style="color:#24292E;">() {</span></span>
<span class="line"><span style="color:#D73A49;">        return</span><span style="color:#005CC5;"> this</span><span style="color:#24292E;">.listSize;</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6F42C1;">    toString</span><span style="color:#24292E;">() {</span></span>
<span class="line"><span style="color:#D73A49;">        return</span><span style="color:#005CC5;"> this</span><span style="color:#24292E;">.data;</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6F42C1;">    insert</span><span style="color:#24292E;">(</span><span style="color:#E36209;">element</span><span style="color:#24292E;">, </span><span style="color:#E36209;">after</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#D73A49;">        var</span><span style="color:#24292E;"> insertPos </span><span style="color:#D73A49;">=</span><span style="color:#005CC5;"> this</span><span style="color:#24292E;">.</span><span style="color:#6F42C1;">find</span><span style="color:#24292E;">(after);</span></span>
<span class="line"><span style="color:#D73A49;">        if</span><span style="color:#24292E;"> (insertPos </span><span style="color:#D73A49;">&gt;</span><span style="color:#D73A49;"> -</span><span style="color:#005CC5;">1</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#005CC5;">            this</span><span style="color:#24292E;">.data.</span><span style="color:#6F42C1;">splice</span><span style="color:#24292E;">(insertPos</span><span style="color:#D73A49;">+</span><span style="color:#005CC5;">1</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">0</span><span style="color:#24292E;">, element);</span></span>
<span class="line"><span style="color:#D73A49;">            ++</span><span style="color:#005CC5;">this</span><span style="color:#24292E;">.listSize;</span></span>
<span class="line"><span style="color:#D73A49;">            return</span><span style="color:#005CC5;"> true</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">        }</span></span>
<span class="line"><span style="color:#D73A49;">        return</span><span style="color:#005CC5;"> false</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6F42C1;">    clear</span><span style="color:#24292E;">() {</span></span>
<span class="line"><span style="color:#D73A49;">        delete</span><span style="color:#005CC5;"> this</span><span style="color:#24292E;">.data;</span></span>
<span class="line"><span style="color:#005CC5;">        this</span><span style="color:#24292E;">.data.</span><span style="color:#005CC5;">length</span><span style="color:#D73A49;"> =</span><span style="color:#005CC5;"> 0</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#005CC5;">        this</span><span style="color:#24292E;">.listSize </span><span style="color:#D73A49;">=</span><span style="color:#005CC5;"> this</span><span style="color:#24292E;">.pos </span><span style="color:#D73A49;">=</span><span style="color:#005CC5;"> 0</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6F42C1;">    contains</span><span style="color:#24292E;">(</span><span style="color:#E36209;">element</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#6A737D;">        // for (var i = 0; i &lt; this.data.length; ++i) {</span></span>
<span class="line"><span style="color:#6A737D;">        //     if (this.data[i] == element) {</span></span>
<span class="line"><span style="color:#6A737D;">        //         return true;</span></span>
<span class="line"><span style="color:#6A737D;">        //     }</span></span>
<span class="line"><span style="color:#6A737D;">        // }</span></span>
<span class="line"><span style="color:#6A737D;">        // return false;</span></span>
<span class="line"><span style="color:#D73A49;">        return</span><span style="color:#005CC5;"> this</span><span style="color:#24292E;">.data.</span><span style="color:#6F42C1;">includes</span><span style="color:#24292E;">(element)</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#6A737D;">    // 遍历列表</span></span>
<span class="line"><span style="color:#6F42C1;">    front</span><span style="color:#24292E;">() {</span></span>
<span class="line"><span style="color:#005CC5;">        this</span><span style="color:#24292E;">.pos </span><span style="color:#D73A49;">=</span><span style="color:#005CC5;"> 0</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#6F42C1;">    end</span><span style="color:#24292E;">() {</span></span>
<span class="line"><span style="color:#005CC5;">        this</span><span style="color:#24292E;">.pos </span><span style="color:#D73A49;">=</span><span style="color:#005CC5;"> this</span><span style="color:#24292E;">.listSize</span><span style="color:#D73A49;">-</span><span style="color:#005CC5;">1</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#6F42C1;">    prev</span><span style="color:#24292E;">() {</span></span>
<span class="line"><span style="color:#D73A49;">        if</span><span style="color:#24292E;"> (</span><span style="color:#005CC5;">this</span><span style="color:#24292E;">.pos </span><span style="color:#D73A49;">&gt;</span><span style="color:#005CC5;"> 0</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#D73A49;">            --</span><span style="color:#005CC5;">this</span><span style="color:#24292E;">.pos;</span></span>
<span class="line"><span style="color:#24292E;">        }</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#6F42C1;">    next</span><span style="color:#24292E;">() {</span></span>
<span class="line"><span style="color:#D73A49;">        if</span><span style="color:#24292E;"> (</span><span style="color:#005CC5;">this</span><span style="color:#24292E;">.pos </span><span style="color:#D73A49;">&lt;</span><span style="color:#005CC5;"> this</span><span style="color:#24292E;">.listSize</span><span style="color:#D73A49;">-</span><span style="color:#005CC5;">1</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#D73A49;">            ++</span><span style="color:#005CC5;">this</span><span style="color:#24292E;">.pos;</span></span>
<span class="line"><span style="color:#24292E;">        }</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#6F42C1;">    currPos</span><span style="color:#24292E;">() {</span></span>
<span class="line"><span style="color:#D73A49;">        return</span><span style="color:#005CC5;"> this</span><span style="color:#24292E;">.pos;</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#6F42C1;">    moveTo</span><span style="color:#24292E;">(</span><span style="color:#E36209;">position</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#005CC5;">        this</span><span style="color:#24292E;">.pos </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> position;</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#6F42C1;">    getElement</span><span style="color:#24292E;">() {</span></span>
<span class="line"><span style="color:#D73A49;">        return</span><span style="color:#005CC5;"> this</span><span style="color:#24292E;">.data[</span><span style="color:#005CC5;">this</span><span style="color:#24292E;">.pos];</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><h2 id="拓展思考" tabindex="-1">拓展思考 <a class="header-anchor" href="#拓展思考" aria-label="Permalink to &quot;拓展思考&quot;">​</a></h2><p>为什么数组要从 0 开始编号，而不是从 1 开始呢？</p>`,22)]))}const h=n(o,[["render",e]]);export{C as __pageData,h as default};
