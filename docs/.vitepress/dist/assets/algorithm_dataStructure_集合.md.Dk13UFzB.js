import{_ as n,c as a,o as l,ag as p}from"./chunks/framework.DPDPlp3K.js";const C=JSON.parse('{"title":"集合 Collection","description":"","frontmatter":{},"headers":[],"relativePath":"algorithm/dataStructure/集合.md","filePath":"algorithm/dataStructure/集合.md"}'),o={name:"algorithm/dataStructure/集合.md"};function e(t,s,c,r,y,i){return l(),a("div",null,s[0]||(s[0]=[p(`<h1 id="集合-collection" tabindex="-1">集合 Collection <a class="header-anchor" href="#集合-collection" aria-label="Permalink to &quot;集合 Collection&quot;">​</a></h1><ul><li>概念 <ul><li>空集</li><li>子集</li><li>交集</li><li>并集</li><li>差集</li></ul></li><li>特征： 无重复性</li></ul><p>Set 强引用 WeakSet 弱引用</p><h2 id="场景" tabindex="-1">场景 <a class="header-anchor" href="#场景" aria-label="Permalink to &quot;场景&quot;">​</a></h2><h2 id="方法" tabindex="-1">方法 <a class="header-anchor" href="#方法" aria-label="Permalink to &quot;方法&quot;">​</a></h2><ul><li>添加值 add(value)</li><li>检查值 has(value)</li><li>删除值 delete(value)</li><li>清除集合 clear()</li><li>获取集合长度 size()</li><li>并集 union()</li><li>交集 intersection()</li><li>差集 difference()</li></ul><h2 id="实现" tabindex="-1">实现 <a class="header-anchor" href="#实现" aria-label="Permalink to &quot;实现&quot;">​</a></h2><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-light vp-code" tabindex="0"><code><span class="line"></span>
<span class="line"><span style="color:#D73A49;">class</span><span style="color:#6F42C1;"> Set</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#D73A49;">    constructor</span><span style="color:#24292E;">() {</span></span>
<span class="line"><span style="color:#005CC5;">        this</span><span style="color:#24292E;">.items </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> {}</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#6A737D;">    // 检查</span></span>
<span class="line"><span style="color:#6F42C1;">    has</span><span style="color:#24292E;">(</span><span style="color:#E36209;">value</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#D73A49;">        return</span><span style="color:#005CC5;"> this</span><span style="color:#24292E;">.items.</span><span style="color:#6F42C1;">hasOwnProperty</span><span style="color:#24292E;">(value);</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#6A737D;">    // 添加</span></span>
<span class="line"><span style="color:#6F42C1;">    add</span><span style="color:#24292E;">(</span><span style="color:#E36209;">value</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#D73A49;">        if</span><span style="color:#24292E;">(</span><span style="color:#D73A49;">!</span><span style="color:#005CC5;">this</span><span style="color:#24292E;">.</span><span style="color:#6F42C1;">has</span><span style="color:#24292E;">(value)) {</span></span>
<span class="line"><span style="color:#005CC5;">            this</span><span style="color:#24292E;">.items[value] </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> value;</span></span>
<span class="line"><span style="color:#D73A49;">            return</span><span style="color:#24292E;"> value;</span></span>
<span class="line"><span style="color:#24292E;">        }</span></span>
<span class="line"><span style="color:#D73A49;">        return</span><span style="color:#005CC5;"> false</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#6A737D;">    // 删除</span></span>
<span class="line"><span style="color:#6F42C1;">    delete</span><span style="color:#24292E;">(</span><span style="color:#E36209;">value</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#D73A49;">        if</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">this</span><span style="color:#24292E;">.</span><span style="color:#6F42C1;">has</span><span style="color:#24292E;">(value)) {</span></span>
<span class="line"><span style="color:#D73A49;">            delete</span><span style="color:#005CC5;"> this</span><span style="color:#24292E;">.items[value]</span></span>
<span class="line"><span style="color:#D73A49;">            return</span><span style="color:#005CC5;"> true</span></span>
<span class="line"><span style="color:#24292E;">        }</span></span>
<span class="line"><span style="color:#D73A49;">        return</span><span style="color:#005CC5;"> null</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#6A737D;">    // 清除集合</span></span>
<span class="line"><span style="color:#6F42C1;">    clear</span><span style="color:#24292E;">() {</span></span>
<span class="line"><span style="color:#005CC5;">        this</span><span style="color:#24292E;">.items </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> {}</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#6A737D;">    // 获取集合长度</span></span>
<span class="line"><span style="color:#6F42C1;">    size</span><span style="color:#24292E;">() {</span></span>
<span class="line"><span style="color:#D73A49;">        return</span><span style="color:#24292E;"> Object.</span><span style="color:#6F42C1;">keys</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">this</span><span style="color:#24292E;">.items).</span><span style="color:#005CC5;">length</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6F42C1;">    value</span><span style="color:#24292E;">() {</span></span>
<span class="line"><span style="color:#D73A49;">        let</span><span style="color:#24292E;"> values </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> []</span></span>
<span class="line"><span style="color:#D73A49;">        for</span><span style="color:#24292E;">(</span><span style="color:#D73A49;">let</span><span style="color:#24292E;"> k </span><span style="color:#D73A49;">in</span><span style="color:#005CC5;"> this</span><span style="color:#24292E;">.items) {</span></span>
<span class="line"><span style="color:#D73A49;">            if</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">this</span><span style="color:#24292E;">.items.</span><span style="color:#6F42C1;">hasOwnProperty</span><span style="color:#24292E;">(k)) {</span></span>
<span class="line"><span style="color:#24292E;">                values.</span><span style="color:#6F42C1;">push</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">this</span><span style="color:#24292E;">.items[key])</span></span>
<span class="line"><span style="color:#24292E;">            }</span></span>
<span class="line"><span style="color:#24292E;">        }</span></span>
<span class="line"><span style="color:#D73A49;">        return</span><span style="color:#24292E;"> values</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#6A737D;">    // 并集</span></span>
<span class="line"><span style="color:#6F42C1;">    union</span><span style="color:#24292E;">(</span><span style="color:#E36209;">otherSet</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#D73A49;">        let</span><span style="color:#24292E;"> resultSet </span><span style="color:#D73A49;">=</span><span style="color:#D73A49;"> new</span><span style="color:#6F42C1;"> Set</span><span style="color:#24292E;">()</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">        // 1.取出自己的值</span></span>
<span class="line"><span style="color:#D73A49;">        let</span><span style="color:#24292E;"> arr </span><span style="color:#D73A49;">=</span><span style="color:#005CC5;"> this</span><span style="color:#24292E;">.</span><span style="color:#6F42C1;">value</span><span style="color:#24292E;">()</span></span>
<span class="line"><span style="color:#24292E;">        arr.</span><span style="color:#6F42C1;">forEach</span><span style="color:#24292E;">(</span><span style="color:#E36209;">v</span><span style="color:#D73A49;"> =&gt;</span><span style="color:#24292E;"> resultSet.</span><span style="color:#6F42C1;">add</span><span style="color:#24292E;">(v))</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">        // 2.取出另一个集合的值</span></span>
<span class="line"><span style="color:#24292E;">        arr </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> otherSet.</span><span style="color:#6F42C1;">value</span><span style="color:#24292E;">()</span></span>
<span class="line"><span style="color:#24292E;">        arr.</span><span style="color:#6F42C1;">forEach</span><span style="color:#24292E;">(</span><span style="color:#E36209;">v</span><span style="color:#D73A49;"> =&gt;</span><span style="color:#24292E;"> resultSet.</span><span style="color:#6F42C1;">add</span><span style="color:#24292E;">(v))</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">        return</span><span style="color:#24292E;"> resultSet</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">    // 交集</span></span>
<span class="line"><span style="color:#6F42C1;">    intersection</span><span style="color:#24292E;">(</span><span style="color:#E36209;">otherSet</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#D73A49;">        let</span><span style="color:#24292E;"> resultSet </span><span style="color:#D73A49;">=</span><span style="color:#D73A49;"> new</span><span style="color:#6F42C1;"> Set</span><span style="color:#24292E;">()</span></span>
<span class="line"><span style="color:#D73A49;">        let</span><span style="color:#24292E;"> arr </span><span style="color:#D73A49;">=</span><span style="color:#005CC5;"> this</span><span style="color:#24292E;">.</span><span style="color:#6F42C1;">value</span><span style="color:#24292E;">()</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">        arr.</span><span style="color:#6F42C1;">forEach</span><span style="color:#24292E;">(</span><span style="color:#E36209;">v</span><span style="color:#D73A49;"> =&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#D73A49;">            if</span><span style="color:#24292E;">(otherSet.</span><span style="color:#6F42C1;">has</span><span style="color:#24292E;">(v)) {</span></span>
<span class="line"><span style="color:#24292E;">                resultSet.</span><span style="color:#6F42C1;">add</span><span style="color:#24292E;">(v)</span></span>
<span class="line"><span style="color:#24292E;">            }</span></span>
<span class="line"><span style="color:#24292E;">        })</span></span>
<span class="line"><span style="color:#D73A49;">        return</span><span style="color:#24292E;"> resultSet</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">    // 差集</span></span>
<span class="line"><span style="color:#6F42C1;">    difference</span><span style="color:#24292E;">(</span><span style="color:#E36209;">otherSet</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#D73A49;">        let</span><span style="color:#24292E;"> resultSet </span><span style="color:#D73A49;">=</span><span style="color:#D73A49;"> new</span><span style="color:#6F42C1;"> Set</span><span style="color:#24292E;">()</span></span>
<span class="line"><span style="color:#D73A49;">        let</span><span style="color:#24292E;"> arr </span><span style="color:#D73A49;">=</span><span style="color:#005CC5;"> this</span><span style="color:#24292E;">.</span><span style="color:#6F42C1;">value</span><span style="color:#24292E;">()</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">        arr.</span><span style="color:#6F42C1;">forEach</span><span style="color:#24292E;">(</span><span style="color:#E36209;">v</span><span style="color:#D73A49;"> =&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#D73A49;">            if</span><span style="color:#24292E;">(</span><span style="color:#D73A49;">!</span><span style="color:#24292E;">otherSet.</span><span style="color:#6F42C1;">has</span><span style="color:#24292E;">(v)) {</span></span>
<span class="line"><span style="color:#24292E;">                resultSet.</span><span style="color:#6F42C1;">add</span><span style="color:#24292E;">(v)</span></span>
<span class="line"><span style="color:#24292E;">            }</span></span>
<span class="line"><span style="color:#24292E;">        })</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div>`,8)]))}const u=n(o,[["render",e]]);export{C as __pageData,u as default};
