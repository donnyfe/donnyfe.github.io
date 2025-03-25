import{_ as n,c as a,o as l,ag as p}from"./chunks/framework.DPDPlp3K.js";const A=JSON.parse('{"title":"图 Graph","description":"","frontmatter":{},"headers":[],"relativePath":"algorithm/dataStructure/图.md","filePath":"algorithm/dataStructure/图.md"}'),o={name:"algorithm/dataStructure/图.md"};function e(c,s,r,t,y,i){return l(),a("div",null,s[0]||(s[0]=[p(`<h1 id="图-graph" tabindex="-1">图 Graph <a class="header-anchor" href="#图-graph" aria-label="Permalink to &quot;图 Graph&quot;">​</a></h1><ul><li><p>类型:</p><ul><li>有向图</li><li>无向图</li></ul></li><li><p>策略:</p><ul><li>广度优先搜索</li><li>深度优先搜索</li></ul></li><li><p>表现形式:</p><ul><li>邻接矩阵表(缺点：1、浪费计算机内存。2、添加、删除点麻烦)</li><li>邻接表</li></ul></li></ul><h2 id="场景" tabindex="-1">场景 <a class="header-anchor" href="#场景" aria-label="Permalink to &quot;场景&quot;">​</a></h2><ul><li>地图 - 寻找最短路径</li><li>社交网络</li><li>城市距离</li></ul><h2 id="方法" tabindex="-1">方法 <a class="header-anchor" href="#方法" aria-label="Permalink to &quot;方法&quot;">​</a></h2><ul><li>添加顶点</li><li>添加边缘</li></ul><h2 id="实现" tabindex="-1">实现 <a class="header-anchor" href="#实现" aria-label="Permalink to &quot;实现&quot;">​</a></h2><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-light vp-code" tabindex="0"><code><span class="line"><span style="color:#D73A49;">var</span><span style="color:#6F42C1;"> Graph</span><span style="color:#D73A49;"> =</span><span style="color:#D73A49;"> function</span><span style="color:#24292E;">() {</span></span>
<span class="line"><span style="color:#6A737D;">    // 存储顶点</span></span>
<span class="line"><span style="color:#D73A49;">    var</span><span style="color:#24292E;"> vertices </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> []</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">    // 存储边</span></span>
<span class="line"><span style="color:#D73A49;">    var</span><span style="color:#24292E;"> adjList </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> {}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">    // 1、添加顶点</span></span>
<span class="line"><span style="color:#005CC5;">    this</span><span style="color:#24292E;">.</span><span style="color:#6F42C1;">addVertex</span><span style="color:#D73A49;"> =</span><span style="color:#D73A49;"> function</span><span style="color:#24292E;">(</span><span style="color:#E36209;">v</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">        vertices.</span><span style="color:#6F42C1;">push</span><span style="color:#24292E;">(v)</span></span>
<span class="line"><span style="color:#24292E;">        adjList[v] </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> []</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">    // 2、添加边缘</span></span>
<span class="line"><span style="color:#005CC5;">    this</span><span style="color:#24292E;">.</span><span style="color:#6F42C1;">addEdge</span><span style="color:#D73A49;"> =</span><span style="color:#D73A49;"> function</span><span style="color:#24292E;">(</span><span style="color:#E36209;">a</span><span style="color:#24292E;">, </span><span style="color:#E36209;">b</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">        adjList[a].</span><span style="color:#6F42C1;">push</span><span style="color:#24292E;">(b)</span></span>
<span class="line"><span style="color:#24292E;">        adjList[b].</span><span style="color:#6F42C1;">push</span><span style="color:#24292E;">(a)</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">    // white 未发现</span></span>
<span class="line"><span style="color:#6A737D;">    // grey 已发现</span></span>
<span class="line"><span style="color:#6A737D;">    // black 已探索</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">    var</span><span style="color:#6F42C1;"> initColor</span><span style="color:#D73A49;"> =</span><span style="color:#D73A49;"> function</span><span style="color:#24292E;">() {</span></span>
<span class="line"><span style="color:#D73A49;">        var</span><span style="color:#24292E;"> color </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> {}</span></span>
<span class="line"><span style="color:#D73A49;">        for</span><span style="color:#24292E;">(</span><span style="color:#D73A49;">var</span><span style="color:#24292E;"> i </span><span style="color:#D73A49;">=</span><span style="color:#005CC5;"> 0</span><span style="color:#24292E;">; i </span><span style="color:#D73A49;">&lt;</span><span style="color:#24292E;"> vertices.</span><span style="color:#005CC5;">length</span><span style="color:#24292E;">; i __) {</span></span>
<span class="line"><span style="color:#24292E;">            color[vertices[i]] </span><span style="color:#D73A49;">=</span><span style="color:#032F62;"> &#39;white&#39;</span></span>
<span class="line"><span style="color:#24292E;">        }</span></span>
<span class="line"><span style="color:#D73A49;">        return</span><span style="color:#24292E;"> color</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#005CC5;">    this</span><span style="color:#24292E;">.</span><span style="color:#6F42C1;">bfs</span><span style="color:#D73A49;"> =</span><span style="color:#D73A49;"> function</span><span style="color:#24292E;">(</span><span style="color:#E36209;">v</span><span style="color:#24292E;">, </span><span style="color:#E36209;">callback</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#D73A49;">        var</span><span style="color:#24292E;"> color </span><span style="color:#D73A49;">=</span><span style="color:#6F42C1;"> initColor</span><span style="color:#24292E;">()</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">        var</span><span style="color:#24292E;"> queue </span><span style="color:#D73A49;">=</span><span style="color:#D73A49;"> new</span><span style="color:#6F42C1;"> Queue</span><span style="color:#24292E;">()</span></span>
<span class="line"><span style="color:#24292E;">        queue.</span><span style="color:#6F42C1;">enqueue</span><span style="color:#24292E;">(v)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">        while</span><span style="color:#24292E;">(</span><span style="color:#D73A49;">!</span><span style="color:#24292E;">queue.</span><span style="color:#6F42C1;">isEmpty</span><span style="color:#24292E;">()) {</span></span>
<span class="line"><span style="color:#D73A49;">            var</span><span style="color:#24292E;"> now </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> queue.</span><span style="color:#6F42C1;">dequeue</span><span style="color:#24292E;">()</span></span>
<span class="line"><span style="color:#D73A49;">            var</span><span style="color:#24292E;"> border </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> adjList[nnow]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">            for</span><span style="color:#24292E;">(</span><span style="color:#D73A49;">var</span><span style="color:#24292E;"> i </span><span style="color:#D73A49;">=</span><span style="color:#005CC5;"> 0</span><span style="color:#24292E;">; i </span><span style="color:#D73A49;">&lt;</span><span style="color:#24292E;"> border.</span><span style="color:#005CC5;">length</span><span style="color:#24292E;">; i</span><span style="color:#D73A49;">++</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#D73A49;">                var</span><span style="color:#24292E;"> w </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> border[i]</span></span>
<span class="line"><span style="color:#D73A49;">                if</span><span style="color:#24292E;">(color[w] </span><span style="color:#D73A49;">==</span><span style="color:#032F62;"> &#39;white&#39;</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#6A737D;">                    // 未发现，全部入列，并且标注为已发现</span></span>
<span class="line"><span style="color:#24292E;">                    color[w] </span><span style="color:#D73A49;">=</span><span style="color:#032F62;"> &#39;gray&#39;</span></span>
<span class="line"><span style="color:#24292E;">                    queue.</span><span style="color:#6F42C1;">enqueue</span><span style="color:#24292E;">(w)</span></span>
<span class="line"><span style="color:#24292E;">                }</span></span>
<span class="line"><span style="color:#24292E;">            }</span></span>
<span class="line"><span style="color:#24292E;">            color[now] </span><span style="color:#D73A49;">=</span><span style="color:#032F62;"> &#39;black&#39;</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">            callback </span><span style="color:#D73A49;">&amp;&amp;</span><span style="color:#6F42C1;"> callback</span><span style="color:#24292E;">(now)</span></span>
<span class="line"><span style="color:#24292E;">        }</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#005CC5;">    this</span><span style="color:#24292E;">.</span><span style="color:#6F42C1;">BFS</span><span style="color:#D73A49;"> =</span><span style="color:#D73A49;"> function</span><span style="color:#24292E;">(</span><span style="color:#E36209;">v</span><span style="color:#24292E;">, </span><span style="color:#E36209;">callback</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#D73A49;">        var</span><span style="color:#24292E;"> color </span><span style="color:#D73A49;">=</span><span style="color:#6F42C1;"> initColor</span><span style="color:#24292E;">()</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">        var</span><span style="color:#24292E;"> queue </span><span style="color:#D73A49;">=</span><span style="color:#D73A49;"> new</span><span style="color:#6F42C1;"> Queue</span><span style="color:#24292E;">()</span></span>
<span class="line"><span style="color:#24292E;">        queue.</span><span style="color:#6F42C1;">enqueue</span><span style="color:#24292E;">(v)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">        var</span><span style="color:#24292E;"> d </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> {} </span><span style="color:#6A737D;">// 记录距离</span></span>
<span class="line"><span style="color:#D73A49;">        var</span><span style="color:#24292E;"> pred </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> {} </span><span style="color:#6A737D;">// 记录上一级</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">        // 初始化</span></span>
<span class="line"><span style="color:#D73A49;">        for</span><span style="color:#24292E;">(</span><span style="color:#D73A49;">var</span><span style="color:#24292E;"> i </span><span style="color:#D73A49;">=</span><span style="color:#005CC5;">0</span><span style="color:#24292E;">; i </span><span style="color:#D73A49;">&lt;</span><span style="color:#24292E;"> vertices.</span><span style="color:#005CC5;">length</span><span style="color:#24292E;">; i</span><span style="color:#D73A49;">++</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">            d[vertices[i]] </span><span style="color:#D73A49;">=</span><span style="color:#005CC5;"> 0</span></span>
<span class="line"><span style="color:#24292E;">            pred[vertices[i]] </span><span style="color:#D73A49;">=</span><span style="color:#005CC5;"> null</span></span>
<span class="line"><span style="color:#24292E;">        }</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">        while</span><span style="color:#24292E;">(</span><span style="color:#D73A49;">!</span><span style="color:#24292E;">queue.</span><span style="color:#6F42C1;">isEmpty</span><span style="color:#24292E;">()) {</span></span>
<span class="line"><span style="color:#D73A49;">            var</span><span style="color:#24292E;"> now </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> queue.</span><span style="color:#6F42C1;">dequeue</span><span style="color:#24292E;">()</span></span>
<span class="line"><span style="color:#D73A49;">            var</span><span style="color:#24292E;"> border </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> adjList[nnow]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">            for</span><span style="color:#24292E;">(</span><span style="color:#D73A49;">var</span><span style="color:#24292E;"> i </span><span style="color:#D73A49;">=</span><span style="color:#005CC5;"> 0</span><span style="color:#24292E;">; i </span><span style="color:#D73A49;">&lt;</span><span style="color:#24292E;"> border.</span><span style="color:#005CC5;">length</span><span style="color:#24292E;">; i</span><span style="color:#D73A49;">++</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#D73A49;">                var</span><span style="color:#24292E;"> w </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> border[i]</span></span>
<span class="line"><span style="color:#D73A49;">                if</span><span style="color:#24292E;">(color[w] </span><span style="color:#D73A49;">==</span><span style="color:#032F62;"> &#39;white&#39;</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#6A737D;">                    // 未发现，全部入列，并且标注为已发现</span></span>
<span class="line"><span style="color:#24292E;">                    color[w] </span><span style="color:#D73A49;">=</span><span style="color:#032F62;"> &#39;gray&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">                    // 设置回溯点</span></span>
<span class="line"><span style="color:#24292E;">                    pred[w] </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> now</span></span>
<span class="line"><span style="color:#24292E;">                    d[w] </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> d[now] </span><span style="color:#D73A49;">+</span><span style="color:#005CC5;"> 1</span><span style="color:#6A737D;"> // d[&#39;E&#39;] = d[&#39;B&#39;] + 1</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">                    queue.</span><span style="color:#6F42C1;">enqueue</span><span style="color:#24292E;">(w)</span></span>
<span class="line"><span style="color:#24292E;">                }</span></span>
<span class="line"><span style="color:#24292E;">            }</span></span>
<span class="line"><span style="color:#24292E;">            color[now] </span><span style="color:#D73A49;">=</span><span style="color:#032F62;"> &#39;black&#39;</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">            callback </span><span style="color:#D73A49;">&amp;&amp;</span><span style="color:#6F42C1;"> callback</span><span style="color:#24292E;">(now)</span></span>
<span class="line"><span style="color:#24292E;">        }</span></span>
<span class="line"><span style="color:#D73A49;">        return</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">            pred,</span></span>
<span class="line"><span style="color:#24292E;">            d</span></span>
<span class="line"><span style="color:#24292E;">        }</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">    var</span><span style="color:#6F42C1;"> dfsVisit</span><span style="color:#D73A49;"> =</span><span style="color:#D73A49;"> function</span><span style="color:#24292E;"> (</span><span style="color:#E36209;">v</span><span style="color:#24292E;">, </span><span style="color:#E36209;">callback</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">        color[u] </span><span style="color:#D73A49;">=</span><span style="color:#032F62;"> &#39;gray&#39;</span></span>
<span class="line"><span style="color:#D73A49;">        var</span><span style="color:#24292E;"> n </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> adjList[u]</span></span>
<span class="line"><span style="color:#D73A49;">        for</span><span style="color:#24292E;">(</span><span style="color:#D73A49;">var</span><span style="color:#24292E;"> i </span><span style="color:#D73A49;">=</span><span style="color:#005CC5;"> 0</span><span style="color:#24292E;">; i </span><span style="color:#D73A49;">&lt;</span><span style="color:#24292E;"> n.</span><span style="color:#005CC5;">length</span><span style="color:#24292E;">; i</span><span style="color:#D73A49;">++</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#D73A49;">            var</span><span style="color:#24292E;"> w </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> n[i]</span></span>
<span class="line"><span style="color:#D73A49;">            if</span><span style="color:#24292E;">(color[w] </span><span style="color:#D73A49;">==</span><span style="color:#032F62;"> &#39;white&#39;</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#6F42C1;">                dfsVisit</span><span style="color:#24292E;">(w, color, callback)</span></span>
<span class="line"><span style="color:#24292E;">            }</span></span>
<span class="line"><span style="color:#24292E;">        }</span></span>
<span class="line"><span style="color:#24292E;">        color[u] </span><span style="color:#D73A49;">=</span><span style="color:#032F62;"> &#39;black&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">        callback </span><span style="color:#D73A49;">&amp;&amp;</span><span style="color:#6F42C1;"> callback</span><span style="color:#24292E;">(u)</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#005CC5;">    this</span><span style="color:#24292E;">.</span><span style="color:#6F42C1;">dfs</span><span style="color:#D73A49;"> =</span><span style="color:#D73A49;"> function</span><span style="color:#24292E;">(</span><span style="color:#E36209;">v</span><span style="color:#24292E;">, </span><span style="color:#E36209;">callback</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#D73A49;">        var</span><span style="color:#24292E;"> color </span><span style="color:#D73A49;">=</span><span style="color:#6F42C1;"> initColor</span><span style="color:#24292E;">()</span></span>
<span class="line"><span style="color:#6F42C1;">        dfsVisit</span><span style="color:#24292E;">(v, color, callback)</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">    // 打印邻接表</span></span>
<span class="line"><span style="color:#005CC5;">    this</span><span style="color:#24292E;">.</span><span style="color:#6F42C1;">print</span><span style="color:#D73A49;"> =</span><span style="color:#D73A49;"> function</span><span style="color:#24292E;">() {</span></span>
<span class="line"><span style="color:#D73A49;">        var</span><span style="color:#24292E;"> s </span><span style="color:#D73A49;">=</span><span style="color:#032F62;"> &#39;</span><span style="color:#005CC5;">\\n</span><span style="color:#032F62;">&#39;</span></span>
<span class="line"><span style="color:#D73A49;">        for</span><span style="color:#24292E;">(</span><span style="color:#D73A49;">var</span><span style="color:#24292E;"> i </span><span style="color:#D73A49;">=</span><span style="color:#005CC5;"> 0</span><span style="color:#24292E;">; i </span><span style="color:#D73A49;">&lt;</span><span style="color:#24292E;"> vertices.</span><span style="color:#005CC5;">length</span><span style="color:#24292E;">; i</span><span style="color:#D73A49;">++</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#D73A49;">            var</span><span style="color:#24292E;"> point </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> vertices[i]</span></span>
<span class="line"><span style="color:#24292E;">            s </span><span style="color:#D73A49;">+=</span><span style="color:#24292E;"> point </span><span style="color:#D73A49;">+</span><span style="color:#032F62;"> &#39; =&gt; &#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">            var</span><span style="color:#24292E;"> border </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> adjList[point]</span></span>
<span class="line"><span style="color:#D73A49;">            for</span><span style="color:#24292E;">(</span><span style="color:#D73A49;">var</span><span style="color:#24292E;"> j </span><span style="color:#D73A49;">=</span><span style="color:#005CC5;"> 0</span><span style="color:#24292E;">; j </span><span style="color:#D73A49;">&lt;</span><span style="color:#24292E;"> border.</span><span style="color:#005CC5;">length</span><span style="color:#24292E;">; j</span><span style="color:#D73A49;">++</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">                s </span><span style="color:#D73A49;">+=</span><span style="color:#24292E;"> border[j]</span></span>
<span class="line"><span style="color:#24292E;">            }</span></span>
<span class="line"><span style="color:#24292E;">            s </span><span style="color:#D73A49;">+=</span><span style="color:#032F62;"> &#39;</span><span style="color:#005CC5;">\\n</span><span style="color:#032F62;">&#39;</span></span>
<span class="line"><span style="color:#24292E;">        }</span></span>
<span class="line"><span style="color:#24292E;">        console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(s)</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">var</span><span style="color:#24292E;"> Graph </span><span style="color:#D73A49;">=</span><span style="color:#D73A49;"> new</span><span style="color:#6F42C1;"> Graph</span><span style="color:#24292E;">()</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">Graph.</span><span style="color:#6F42C1;">addVertex</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;A&#39;</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#24292E;">Graph.</span><span style="color:#6F42C1;">addVertex</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;B&#39;</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#24292E;">Graph.</span><span style="color:#6F42C1;">addVertex</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;C&#39;</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#24292E;">Graph.</span><span style="color:#6F42C1;">addVertex</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;D&#39;</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#24292E;">Graph.</span><span style="color:#6F42C1;">addVertex</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;E&#39;</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#24292E;">Graph.</span><span style="color:#6F42C1;">addVertex</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;F&#39;</span><span style="color:#24292E;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 添加边</span></span>
<span class="line"><span style="color:#24292E;">Graph.</span><span style="color:#6F42C1;">addEdge</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;A&#39;</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&#39;B&#39;</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#24292E;">Graph.</span><span style="color:#6F42C1;">addEdge</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;A&#39;</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&#39;C&#39;</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#24292E;">Graph.</span><span style="color:#6F42C1;">addEdge</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;A&#39;</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&#39;D&#39;</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#24292E;">Graph.</span><span style="color:#6F42C1;">addEdge</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;C&#39;</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&#39;D&#39;</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#24292E;">Graph.</span><span style="color:#6F42C1;">addEdge</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;B&#39;</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&#39;E&#39;</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#24292E;">Graph.</span><span style="color:#6F42C1;">addEdge</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;F&#39;</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&#39;B&#39;</span><span style="color:#24292E;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// Graph.print()</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 广度优先算法</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">Graph.</span><span style="color:#6F42C1;">addEdge</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;D&#39;</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&#39;F&#39;</span><span style="color:#24292E;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">var</span><span style="color:#24292E;"> s </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> g.</span><span style="color:#6F42C1;">BFS</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;A&#39;</span><span style="color:#24292E;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 最短路径函数</span></span>
<span class="line"><span style="color:#D73A49;">var</span><span style="color:#6F42C1;"> minShortPath</span><span style="color:#D73A49;"> =</span><span style="color:#D73A49;"> function</span><span style="color:#24292E;">(</span><span style="color:#E36209;">from</span><span style="color:#24292E;">, </span><span style="color:#E36209;">to</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#D73A49;">    var</span><span style="color:#24292E;"> v </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> to </span><span style="color:#6A737D;">// 设置当前点</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">    var</span><span style="color:#24292E;"> pathStack </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> [];</span></span>
<span class="line"><span style="color:#D73A49;">    while</span><span style="color:#24292E;">(v </span><span style="color:#D73A49;">!==</span><span style="color:#24292E;"> from) {</span></span>
<span class="line"><span style="color:#24292E;">        pathStack.</span><span style="color:#6F42C1;">push</span><span style="color:#24292E;">(v)</span></span>
<span class="line"><span style="color:#24292E;">        v </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> s.pred[v];</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">    pathStack.</span><span style="color:#6F42C1;">push</span><span style="color:#24292E;">(v)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">    var</span><span style="color:#24292E;"> str </span><span style="color:#D73A49;">=</span><span style="color:#032F62;"> &#39;&#39;</span></span>
<span class="line"><span style="color:#D73A49;">    while</span><span style="color:#24292E;">(pathStack.</span><span style="color:#005CC5;">length</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">        str </span><span style="color:#D73A49;">+=</span><span style="color:#24292E;"> pathStack.</span><span style="color:#6F42C1;">pop</span><span style="color:#24292E;">() </span><span style="color:#D73A49;">+</span><span style="color:#032F62;"> &#39;-&#39;</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    str </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> str.</span><span style="color:#6F42C1;">slice</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">0</span><span style="color:#24292E;">, str.</span><span style="color:#005CC5;">length</span><span style="color:#D73A49;"> -</span><span style="color:#005CC5;"> 1</span><span style="color:#24292E;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6F42C1;">minShortPath</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;A&#39;</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&#39;F&#39;</span><span style="color:#24292E;">)</span></span></code></pre></div>`,8)]))}const D=n(o,[["render",e]]);export{A as __pageData,D as default};
