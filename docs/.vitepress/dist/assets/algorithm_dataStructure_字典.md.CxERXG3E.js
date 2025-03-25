import{_ as a,c as n,o as l,ag as p}from"./chunks/framework.DPDPlp3K.js";const C=JSON.parse('{"title":"字典 Dictionary","description":"","frontmatter":{},"headers":[],"relativePath":"algorithm/dataStructure/字典.md","filePath":"algorithm/dataStructure/字典.md"}'),o={name:"algorithm/dataStructure/字典.md"};function e(t,s,c,r,y,i){return l(),n("div",null,s[0]||(s[0]=[p(`<h1 id="字典-dictionary" tabindex="-1">字典 Dictionary <a class="header-anchor" href="#字典-dictionary" aria-label="Permalink to &quot;字典 Dictionary&quot;">​</a></h1><h2 id="方法" tabindex="-1">方法 <a class="header-anchor" href="#方法" aria-label="Permalink to &quot;方法&quot;">​</a></h2><ul><li>添加键值对 set(key, value)</li><li>通过键值移除元素 delete(key)</li><li>检查键 has(key)</li><li>由键获取值 get(key)</li></ul><h2 id="实现" tabindex="-1">实现 <a class="header-anchor" href="#实现" aria-label="Permalink to &quot;实现&quot;">​</a></h2><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-light vp-code" tabindex="0"><code><span class="line"><span style="color:#D73A49;">class</span><span style="color:#6F42C1;"> Dictionary</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#D73A49;">    constructor</span><span style="color:#24292E;">() {</span></span>
<span class="line"><span style="color:#005CC5;">        this</span><span style="color:#24292E;">.items </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> {}</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6F42C1;">    set</span><span style="color:#24292E;">(</span><span style="color:#E36209;">key</span><span style="color:#24292E;">, </span><span style="color:#E36209;">value</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#005CC5;">        this</span><span style="color:#24292E;">.items[key] </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> value</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#6F42C1;">    delete</span><span style="color:#24292E;">(</span><span style="color:#E36209;">key</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#D73A49;">        if</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">this</span><span style="color:#24292E;">.</span><span style="color:#6F42C1;">has</span><span style="color:#24292E;">(key)) {</span></span>
<span class="line"><span style="color:#D73A49;">            delete</span><span style="color:#005CC5;"> this</span><span style="color:#24292E;">.items[key]</span></span>
<span class="line"><span style="color:#D73A49;">            return</span><span style="color:#005CC5;"> true</span></span>
<span class="line"><span style="color:#24292E;">        }</span></span>
<span class="line"><span style="color:#D73A49;">        return</span><span style="color:#005CC5;"> false</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#6F42C1;">    has</span><span style="color:#24292E;">(</span><span style="color:#E36209;">key</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#D73A49;">        return</span><span style="color:#24292E;"> key </span><span style="color:#D73A49;">in</span><span style="color:#005CC5;"> this</span><span style="color:#24292E;">.items</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#6F42C1;">    get</span><span style="color:#24292E;">(</span><span style="color:#E36209;">key</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#D73A49;">        if</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">this</span><span style="color:#24292E;">.</span><span style="color:#6F42C1;">has</span><span style="color:#24292E;">(key)) {</span></span>
<span class="line"><span style="color:#D73A49;">            return</span><span style="color:#005CC5;"> this</span><span style="color:#24292E;">.items[key]</span></span>
<span class="line"><span style="color:#24292E;">        }</span></span>
<span class="line"><span style="color:#D73A49;">        return</span><span style="color:#005CC5;"> undefined</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#6A737D;">    // 清空</span></span>
<span class="line"><span style="color:#6F42C1;">    clear</span><span style="color:#24292E;">() {</span></span>
<span class="line"><span style="color:#005CC5;">        this</span><span style="color:#24292E;">.items </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> {}</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#6A737D;">    // 显示全部</span></span>
<span class="line"><span style="color:#6F42C1;">    showAll</span><span style="color:#24292E;">() {</span></span>
<span class="line"><span style="color:#D73A49;">        for</span><span style="color:#24292E;">(</span><span style="color:#D73A49;">let</span><span style="color:#24292E;"> key </span><span style="color:#D73A49;">in</span><span style="color:#24292E;"> Object.</span><span style="color:#6F42C1;">keys</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">this</span><span style="color:#24292E;">.datastore)) {</span></span>
<span class="line"><span style="color:#24292E;">            console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(key </span><span style="color:#D73A49;">+</span><span style="color:#032F62;"> &#39; --&gt; &#39;</span><span style="color:#D73A49;"> +</span><span style="color:#005CC5;"> this</span><span style="color:#24292E;">.datastore[key])</span></span>
<span class="line"><span style="color:#24292E;">        }</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#6A737D;">    // 显示长度</span></span>
<span class="line"><span style="color:#6F42C1;">    count</span><span style="color:#24292E;">() {</span></span>
<span class="line"><span style="color:#D73A49;">        return</span><span style="color:#24292E;"> Object.</span><span style="color:#6F42C1;">keys</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">this</span><span style="color:#24292E;">.datastore).</span><span style="color:#005CC5;">length</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">let</span><span style="color:#24292E;"> d </span><span style="color:#D73A49;">=</span><span style="color:#D73A49;"> new</span><span style="color:#6F42C1;"> Dictonary</span><span style="color:#24292E;">();</span></span>
<span class="line"><span style="color:#24292E;">d.</span><span style="color:#6F42C1;">add</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;a&#39;</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">1</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#24292E;">d.</span><span style="color:#6F42C1;">add</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;b&#39;</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">2</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#24292E;">d.</span><span style="color:#6F42C1;">showAll</span><span style="color:#24292E;">()</span></span></code></pre></div>`,5)]))}const d=a(o,[["render",e]]);export{C as __pageData,d as default};
