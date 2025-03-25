import{_ as n,c as a,o as l,ag as p}from"./chunks/framework.DPDPlp3K.js";const C=JSON.parse('{"title":"组合模式 Composite","description":"","frontmatter":{},"headers":[],"relativePath":"pattern/structure/组合模式Composite.md","filePath":"pattern/structure/组合模式Composite.md"}'),o={name:"pattern/structure/组合模式Composite.md"};function e(t,s,c,r,y,i){return l(),a("div",null,s[0]||(s[0]=[p(`<h1 id="组合模式-composite" tabindex="-1">组合模式 Composite <a class="header-anchor" href="#组合模式-composite" aria-label="Permalink to &quot;组合模式 Composite&quot;">​</a></h1><p>组合模式（Composite Pattern）是一种结构型设计模式，它允许将对象组合成树形结构来表示“部分-整体”的层次结构。组合模式使得用户对单个对象和组合对象的使用具有一致性。</p><p>组合模式提供了一个清晰的组成结构。组合对象类通过继承同一个父类使其具有统一的方法，这样方便统一管理与使用，当然此时单体成员与组合体成员行为表现就比较一致了。这也就模糊了简单对象与组合对象的区别。有时这也是一种对数据的分级式处理。清晰而又方便对数据的管理与使用。</p><p><strong>组合模式的结构：</strong> 该模式由两部分构成：</p><ul><li>子对象（Leaf）：组成组合对象的最基本对象。</li><li>组合对象（Composite）：由子对象组合起来的复杂对象。</li></ul><p><strong>组合模式的作用：</strong> 组合模式可以优化处理递归或分级数据结构。</p><h2 id="适用场景" tabindex="-1">适用场景 <a class="header-anchor" href="#适用场景" aria-label="Permalink to &quot;适用场景&quot;">​</a></h2><ul><li>需要表示对象的部分-整体层次结构。</li><li>希望用户忽略组合对象与单个对象的不同，统一的使用组合结构中的所有对象。</li></ul><h2 id="实例" tabindex="-1">实例 <a class="header-anchor" href="#实例" aria-label="Permalink to &quot;实例&quot;">​</a></h2><p>具有部分-整体特征的场景。</p><ul><li>文件目录结构</li><li>组合式新闻模块</li><li>组合式表单模块</li><li>系统目录结构</li><li>网站导航结构</li><li>DOM 的机制，一个 DOM 节点可以包含子节点，不管是父节点还是子节点都有添加、删除、遍历子节点的通用功能。</li></ul><h3 id="文件扫描" tabindex="-1">文件扫描 <a class="header-anchor" href="#文件扫描" aria-label="Permalink to &quot;文件扫描&quot;">​</a></h3><p>以下是一个文件扫描的示例，展示了如何使用组合模式来管理文件和文件夹。</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-light vp-code" tabindex="0"><code><span class="line"><span style="color:#6A737D;">/** 文件夹类 */</span></span>
<span class="line"><span style="color:#D73A49;">class</span><span style="color:#6F42C1;"> Folder</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#D73A49;">	constructor</span><span style="color:#24292E;">(</span><span style="color:#E36209;">name</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#005CC5;">		this</span><span style="color:#24292E;">.name </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> name</span></span>
<span class="line"><span style="color:#005CC5;">		this</span><span style="color:#24292E;">.files </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> []</span></span>
<span class="line"><span style="color:#24292E;">	}</span></span>
<span class="line"><span style="color:#6A737D;">	/** 添加文件或文件夹 */</span></span>
<span class="line"><span style="color:#6F42C1;">	add</span><span style="color:#24292E;">(</span><span style="color:#E36209;">file</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">		file.parent </span><span style="color:#D73A49;">=</span><span style="color:#005CC5;"> this</span></span>
<span class="line"><span style="color:#005CC5;">		this</span><span style="color:#24292E;">.files.</span><span style="color:#6F42C1;">push</span><span style="color:#24292E;">(file)</span></span>
<span class="line"><span style="color:#24292E;">	}</span></span>
<span class="line"><span style="color:#6A737D;">	/** 扫描文件夹内的所有文件和子文件夹 */</span></span>
<span class="line"><span style="color:#6F42C1;">	scan</span><span style="color:#24292E;">() {</span></span>
<span class="line"><span style="color:#D73A49;">		for</span><span style="color:#24292E;"> (</span><span style="color:#D73A49;">let</span><span style="color:#24292E;"> i </span><span style="color:#D73A49;">=</span><span style="color:#005CC5;"> 0</span><span style="color:#24292E;">, file; (file </span><span style="color:#D73A49;">=</span><span style="color:#005CC5;"> this</span><span style="color:#24292E;">.files[i</span><span style="color:#D73A49;">++</span><span style="color:#24292E;">]); ) {</span></span>
<span class="line"><span style="color:#24292E;">			file.</span><span style="color:#6F42C1;">scan</span><span style="color:#24292E;">()</span></span>
<span class="line"><span style="color:#24292E;">		}</span></span>
<span class="line"><span style="color:#24292E;">	}</span></span>
<span class="line"><span style="color:#6A737D;">	/** 从父文件夹中移除自己 */</span></span>
<span class="line"><span style="color:#6F42C1;">	remove</span><span style="color:#24292E;">() {</span></span>
<span class="line"><span style="color:#D73A49;">		if</span><span style="color:#24292E;"> (</span><span style="color:#005CC5;">this</span><span style="color:#24292E;">.parent </span><span style="color:#D73A49;">===</span><span style="color:#005CC5;"> null</span><span style="color:#24292E;">) </span><span style="color:#D73A49;">return</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">		for</span><span style="color:#24292E;"> (</span><span style="color:#D73A49;">let</span><span style="color:#24292E;"> i </span><span style="color:#D73A49;">=</span><span style="color:#005CC5;"> 0</span><span style="color:#24292E;">, file, files </span><span style="color:#D73A49;">=</span><span style="color:#005CC5;"> this</span><span style="color:#24292E;">.parent.files; (file </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> files[i]); i</span><span style="color:#D73A49;">++</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#D73A49;">			if</span><span style="color:#24292E;"> (file </span><span style="color:#D73A49;">===</span><span style="color:#005CC5;"> this</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">				files.</span><span style="color:#6F42C1;">splice</span><span style="color:#24292E;">(i, </span><span style="color:#005CC5;">1</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#24292E;">			}</span></span>
<span class="line"><span style="color:#24292E;">		}</span></span>
<span class="line"><span style="color:#24292E;">	}</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">/** 文件类 */</span></span>
<span class="line"><span style="color:#D73A49;">class</span><span style="color:#6F42C1;"> File</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#D73A49;">	constructor</span><span style="color:#24292E;">(</span><span style="color:#E36209;">name</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#005CC5;">		this</span><span style="color:#24292E;">.name </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> name</span></span>
<span class="line"><span style="color:#005CC5;">		this</span><span style="color:#24292E;">.parent </span><span style="color:#D73A49;">=</span><span style="color:#005CC5;"> null</span></span>
<span class="line"><span style="color:#24292E;">	}</span></span>
<span class="line"><span style="color:#6A737D;">	/** 文件不能添加子文件 */</span></span>
<span class="line"><span style="color:#6F42C1;">	add</span><span style="color:#24292E;">() {</span></span>
<span class="line"><span style="color:#D73A49;">		throw</span><span style="color:#D73A49;"> new</span><span style="color:#6F42C1;"> Error</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;文件下面不能再添加文件&#39;</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#24292E;">	}</span></span>
<span class="line"><span style="color:#6A737D;">	/** 扫描文件 */</span></span>
<span class="line"><span style="color:#6F42C1;">	scan</span><span style="color:#24292E;">() {</span></span>
<span class="line"><span style="color:#24292E;">		console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;扫描文件名称：&#39;</span><span style="color:#D73A49;"> +</span><span style="color:#005CC5;"> this</span><span style="color:#24292E;">.name)</span></span>
<span class="line"><span style="color:#24292E;">	}</span></span>
<span class="line"><span style="color:#6A737D;">	/** 从父文件夹中移除自己 */</span></span>
<span class="line"><span style="color:#6F42C1;">	remove</span><span style="color:#24292E;">() {</span></span>
<span class="line"><span style="color:#D73A49;">		if</span><span style="color:#24292E;"> (</span><span style="color:#005CC5;">this</span><span style="color:#24292E;">.parent </span><span style="color:#D73A49;">===</span><span style="color:#005CC5;"> null</span><span style="color:#24292E;">) </span><span style="color:#D73A49;">return</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">		for</span><span style="color:#24292E;"> (</span><span style="color:#D73A49;">let</span><span style="color:#24292E;"> i </span><span style="color:#D73A49;">=</span><span style="color:#005CC5;"> 0</span><span style="color:#24292E;">, file, files </span><span style="color:#D73A49;">=</span><span style="color:#005CC5;"> this</span><span style="color:#24292E;">.parent.files; (file </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> files[i]); i</span><span style="color:#D73A49;">++</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#D73A49;">			if</span><span style="color:#24292E;"> (file </span><span style="color:#D73A49;">===</span><span style="color:#005CC5;"> this</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">				files.</span><span style="color:#6F42C1;">splice</span><span style="color:#24292E;">(i, </span><span style="color:#005CC5;">1</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#24292E;">			}</span></span>
<span class="line"><span style="color:#24292E;">		}</span></span>
<span class="line"><span style="color:#24292E;">	}</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 示例使用</span></span>
<span class="line"><span style="color:#6A737D;">// 一级目录</span></span>
<span class="line"><span style="color:#D73A49;">let</span><span style="color:#24292E;"> folder </span><span style="color:#D73A49;">=</span><span style="color:#D73A49;"> new</span><span style="color:#6F42C1;"> Folder</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;前端学习&#39;</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#6A737D;">// 二级目录</span></span>
<span class="line"><span style="color:#D73A49;">let</span><span style="color:#24292E;"> subFolder1 </span><span style="color:#D73A49;">=</span><span style="color:#D73A49;"> new</span><span style="color:#6F42C1;"> Folder</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;JS学习&#39;</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#D73A49;">let</span><span style="color:#24292E;"> subFolder2 </span><span style="color:#D73A49;">=</span><span style="color:#D73A49;"> new</span><span style="color:#6F42C1;"> Folder</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;JQ学习&#39;</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#6A737D;">// 文件</span></span>
<span class="line"><span style="color:#D73A49;">let</span><span style="color:#24292E;"> file1 </span><span style="color:#D73A49;">=</span><span style="color:#D73A49;"> new</span><span style="color:#6F42C1;"> File</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;JS设计模式&#39;</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#D73A49;">let</span><span style="color:#24292E;"> file2 </span><span style="color:#D73A49;">=</span><span style="color:#D73A49;"> new</span><span style="color:#6F42C1;"> File</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;JQ实战&#39;</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#D73A49;">let</span><span style="color:#24292E;"> file3 </span><span style="color:#D73A49;">=</span><span style="color:#D73A49;"> new</span><span style="color:#6F42C1;"> File</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;前端性能&#39;</span><span style="color:#24292E;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 添加文件到子目录</span></span>
<span class="line"><span style="color:#24292E;">subFolder1.</span><span style="color:#6F42C1;">add</span><span style="color:#24292E;">(file1)</span></span>
<span class="line"><span style="color:#24292E;">subFolder2.</span><span style="color:#6F42C1;">add</span><span style="color:#24292E;">(file2)</span></span>
<span class="line"><span style="color:#6A737D;">// 添加子目录到主目录</span></span>
<span class="line"><span style="color:#24292E;">folder.</span><span style="color:#6F42C1;">add</span><span style="color:#24292E;">(subFolder1)</span></span>
<span class="line"><span style="color:#24292E;">folder.</span><span style="color:#6F42C1;">add</span><span style="color:#24292E;">(subFolder2)</span></span>
<span class="line"><span style="color:#24292E;">folder.</span><span style="color:#6F42C1;">add</span><span style="color:#24292E;">(file3)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 移除子目录</span></span>
<span class="line"><span style="color:#24292E;">subFolder1.</span><span style="color:#6F42C1;">remove</span><span style="color:#24292E;">()</span></span>
<span class="line"><span style="color:#6A737D;">// 开始扫描主目录</span></span>
<span class="line"><span style="color:#24292E;">folder.</span><span style="color:#6F42C1;">scan</span><span style="color:#24292E;">()</span></span></code></pre></div>`,14)]))}const D=n(o,[["render",e]]);export{C as __pageData,D as default};
