import{_ as n,c as a,o as l,ag as p}from"./chunks/framework.DPDPlp3K.js";const C=JSON.parse('{"title":"桥接模式 Bridge","description":"","frontmatter":{},"headers":[],"relativePath":"pattern/structure/桥接模式Bridge.md","filePath":"pattern/structure/桥接模式Bridge.md"}'),o={name:"pattern/structure/桥接模式Bridge.md"};function e(t,s,c,r,y,i){return l(),a("div",null,s[0]||(s[0]=[p(`<h1 id="桥接模式-bridge" tabindex="-1">桥接模式 Bridge <a class="header-anchor" href="#桥接模式-bridge" aria-label="Permalink to &quot;桥接模式 Bridge&quot;">​</a></h1><p>桥接模式（Bridge Pattern）是一种结构型设计模式，它通过将抽象部分与实现部分分离，使它们可以独立变化。桥接模式的主要目的是解耦，使得抽象和实现可以独立扩展，而不影响对方。</p><p>通过桥接模式实现的解耦，使实现层与抽象层分开处理，避免需求的改变造成对象内部的修改，体现了面向对象对拓展的开放及对修改的关闭原则。</p><h2 id="桥接模式的优点" tabindex="-1">桥接模式的优点 <a class="header-anchor" href="#桥接模式的优点" aria-label="Permalink to &quot;桥接模式的优点&quot;">​</a></h2><ul><li>分离抽象和实现：桥接模式将抽象部分与实现部分分离，使它们可以独立变化。</li><li>提高系统的可扩展性：抽象和实现可以独立扩展，不会相互影响。</li><li>符合开闭原则：增加新的抽象部分和实现部分时，不需要修改已有代码。</li></ul><h2 id="桥接模式的缺点" tabindex="-1">桥接模式的缺点 <a class="header-anchor" href="#桥接模式的缺点" aria-label="Permalink to &quot;桥接模式的缺点&quot;">​</a></h2><ul><li>增加系统的理解与设计难度：由于引入了抽象层，系统的理解和设计难度增加。</li><li>需要正确识别系统中的两个独立变化的维度：只有在正确识别出系统中两个独立变化的维度时，才能合理地使用桥接模式。</li></ul><h2 id="适用场景" tabindex="-1">适用场景 <a class="header-anchor" href="#适用场景" aria-label="Permalink to &quot;适用场景&quot;">​</a></h2><ul><li>希望抽象和实现部分可以独立变化：例如，图形系统中的形状和颜色可以独立变化。</li><li>不希望在抽象和实现之间有固定的绑定关系：例如，数据库系统中的数据库和操作系统可以独立变化。</li></ul><h2 id="实例" tabindex="-1">实例 <a class="header-anchor" href="#实例" aria-label="Permalink to &quot;实例&quot;">​</a></h2><ul><li>多维变量类</li></ul><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-light vp-code" tabindex="0"><code><span class="line"><span style="color:#6A737D;">// 运动单元</span></span>
<span class="line"><span style="color:#D73A49;">class</span><span style="color:#6F42C1;"> Speed</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#D73A49;">	constructor</span><span style="color:#24292E;">(</span><span style="color:#E36209;">x</span><span style="color:#24292E;">, </span><span style="color:#E36209;">y</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#005CC5;">		this</span><span style="color:#24292E;">.x </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> x</span></span>
<span class="line"><span style="color:#005CC5;">		this</span><span style="color:#24292E;">.y </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> y</span></span>
<span class="line"><span style="color:#24292E;">	}</span></span>
<span class="line"><span style="color:#6F42C1;">	run</span><span style="color:#24292E;">() {</span></span>
<span class="line"><span style="color:#24292E;">		console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;运动起来&#39;</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#24292E;">	}</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"><span style="color:#6A737D;">// 着色单元</span></span>
<span class="line"><span style="color:#D73A49;">class</span><span style="color:#6F42C1;"> Color</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#D73A49;">	constructor</span><span style="color:#24292E;">(</span><span style="color:#E36209;">cl</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#005CC5;">		this</span><span style="color:#24292E;">.color </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> cl</span></span>
<span class="line"><span style="color:#24292E;">	}</span></span>
<span class="line"><span style="color:#6F42C1;">	draw</span><span style="color:#24292E;">() {</span></span>
<span class="line"><span style="color:#24292E;">		console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;绘制色彩&#39;</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#24292E;">	}</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"><span style="color:#6A737D;">// 变形单元</span></span>
<span class="line"><span style="color:#D73A49;">class</span><span style="color:#6F42C1;"> Shape</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#D73A49;">	constructor</span><span style="color:#24292E;">(</span><span style="color:#E36209;">sp</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#005CC5;">		this</span><span style="color:#24292E;">.shape </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> sp</span></span>
<span class="line"><span style="color:#24292E;">	}</span></span>
<span class="line"><span style="color:#6F42C1;">	change</span><span style="color:#24292E;">() {</span></span>
<span class="line"><span style="color:#24292E;">		console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;改变形状&#39;</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#24292E;">	}</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"><span style="color:#6A737D;">// 说话单元</span></span>
<span class="line"><span style="color:#D73A49;">class</span><span style="color:#6F42C1;"> Speak</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#D73A49;">	constructor</span><span style="color:#24292E;">(</span><span style="color:#E36209;">wd</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#005CC5;">		this</span><span style="color:#24292E;">.word </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> wd</span></span>
<span class="line"><span style="color:#24292E;">	}</span></span>
<span class="line"><span style="color:#6F42C1;">	say</span><span style="color:#24292E;">() {</span></span>
<span class="line"><span style="color:#24292E;">		console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;书写字体&#39;</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#24292E;">	}</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"><span style="color:#6A737D;">// 球类</span></span>
<span class="line"><span style="color:#D73A49;">class</span><span style="color:#6F42C1;"> Ball</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#D73A49;">	constructor</span><span style="color:#24292E;">(</span><span style="color:#E36209;">x</span><span style="color:#24292E;">, </span><span style="color:#E36209;">y</span><span style="color:#24292E;">, </span><span style="color:#E36209;">c</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#005CC5;">		this</span><span style="color:#24292E;">.speed </span><span style="color:#D73A49;">=</span><span style="color:#D73A49;"> new</span><span style="color:#6F42C1;"> Speed</span><span style="color:#24292E;">(x, y)</span></span>
<span class="line"><span style="color:#005CC5;">		this</span><span style="color:#24292E;">.color </span><span style="color:#D73A49;">=</span><span style="color:#D73A49;"> new</span><span style="color:#6F42C1;"> Color</span><span style="color:#24292E;">(c)</span></span>
<span class="line"><span style="color:#24292E;">	}</span></span>
<span class="line"><span style="color:#6F42C1;">	init</span><span style="color:#24292E;">() {</span></span>
<span class="line"><span style="color:#005CC5;">		this</span><span style="color:#24292E;">.speed.</span><span style="color:#6F42C1;">run</span><span style="color:#24292E;">()</span></span>
<span class="line"><span style="color:#005CC5;">		this</span><span style="color:#24292E;">.color.</span><span style="color:#6F42C1;">draw</span><span style="color:#24292E;">()</span></span>
<span class="line"><span style="color:#24292E;">	}</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"><span style="color:#6A737D;">// 人类</span></span>
<span class="line"><span style="color:#D73A49;">class</span><span style="color:#6F42C1;"> People</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#D73A49;">	constructor</span><span style="color:#24292E;">(</span><span style="color:#E36209;">x</span><span style="color:#24292E;">, </span><span style="color:#E36209;">y</span><span style="color:#24292E;">, </span><span style="color:#E36209;">f</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#005CC5;">		this</span><span style="color:#24292E;">.speed </span><span style="color:#D73A49;">=</span><span style="color:#D73A49;"> new</span><span style="color:#6F42C1;"> Speed</span><span style="color:#24292E;">(x, y)</span></span>
<span class="line"><span style="color:#005CC5;">		this</span><span style="color:#24292E;">.font </span><span style="color:#D73A49;">=</span><span style="color:#D73A49;"> new</span><span style="color:#6F42C1;"> Speak</span><span style="color:#24292E;">(f)</span></span>
<span class="line"><span style="color:#24292E;">	}</span></span>
<span class="line"><span style="color:#6F42C1;">	init</span><span style="color:#24292E;">() {</span></span>
<span class="line"><span style="color:#005CC5;">		this</span><span style="color:#24292E;">.speed.</span><span style="color:#6F42C1;">run</span><span style="color:#24292E;">()</span></span>
<span class="line"><span style="color:#005CC5;">		this</span><span style="color:#24292E;">.font.</span><span style="color:#6F42C1;">say</span><span style="color:#24292E;">()</span></span>
<span class="line"><span style="color:#24292E;">	}</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"><span style="color:#6A737D;">// 精灵类</span></span>
<span class="line"><span style="color:#D73A49;">class</span><span style="color:#6F42C1;"> Spirite</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#D73A49;">	constructor</span><span style="color:#24292E;">(</span><span style="color:#E36209;">x</span><span style="color:#24292E;">, </span><span style="color:#E36209;">y</span><span style="color:#24292E;">, </span><span style="color:#E36209;">c</span><span style="color:#24292E;">, </span><span style="color:#E36209;">s</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#005CC5;">		this</span><span style="color:#24292E;">.speed </span><span style="color:#D73A49;">=</span><span style="color:#D73A49;"> new</span><span style="color:#6F42C1;"> Speed</span><span style="color:#24292E;">(x, y)</span></span>
<span class="line"><span style="color:#005CC5;">		this</span><span style="color:#24292E;">.color </span><span style="color:#D73A49;">=</span><span style="color:#D73A49;"> new</span><span style="color:#6F42C1;"> Color</span><span style="color:#24292E;">(c)</span></span>
<span class="line"><span style="color:#005CC5;">		this</span><span style="color:#24292E;">.shape </span><span style="color:#D73A49;">=</span><span style="color:#D73A49;"> new</span><span style="color:#6F42C1;"> Shape</span><span style="color:#24292E;">(s)</span></span>
<span class="line"><span style="color:#24292E;">	}</span></span>
<span class="line"><span style="color:#6F42C1;">	init</span><span style="color:#24292E;">() {</span></span>
<span class="line"><span style="color:#005CC5;">		this</span><span style="color:#24292E;">.speed.</span><span style="color:#6F42C1;">run</span><span style="color:#24292E;">()</span></span>
<span class="line"><span style="color:#005CC5;">		this</span><span style="color:#24292E;">.color.</span><span style="color:#6F42C1;">draw</span><span style="color:#24292E;">()</span></span>
<span class="line"><span style="color:#005CC5;">		this</span><span style="color:#24292E;">.shape.</span><span style="color:#6F42C1;">change</span><span style="color:#24292E;">()</span></span>
<span class="line"><span style="color:#24292E;">	}</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div>`,12)]))}const d=n(o,[["render",e]]);export{C as __pageData,d as default};
