import{_ as n,c as a,o as p,ag as l}from"./chunks/framework.DPDPlp3K.js";const g=JSON.parse('{"title":"原型模式 Prototype","description":"","frontmatter":{},"headers":[],"relativePath":"pattern/Create/原型模式Prototype.md","filePath":"pattern/Create/原型模式Prototype.md"}'),o={name:"pattern/Create/原型模式Prototype.md"};function e(t,s,c,r,y,i){return p(),a("div",null,s[0]||(s[0]=[l(`<h1 id="原型模式-prototype" tabindex="-1">原型模式 Prototype <a class="header-anchor" href="#原型模式-prototype" aria-label="Permalink to &quot;原型模式 Prototype&quot;">​</a></h1><p>原型模式就是将原型对象指向创建对象的类，使这些类共享原型对象的方法与属性。当然 JavaScript 是基于原型链实现对象之间的继承，这种继承是基于一种对属性或者方法的共享，而不是对属性和方法的复制。</p><p>原型模式可以让多个对象分享同一个原型对象的属性与方法，这也是一种继承方式，不过这种继承的实现是不需要创建的，而是将原型对象分享给那些继承的对象。当然有时需要让每个继承对象独立拥有一份原型对象，此时我们就需要对原型对象进行复制。</p><p>由此我们可以看出，原型对象更适合在创建复杂的对象时，对于那些需求一直在变化而导致对象结构不停地改变时，将那些比较稳定的属性与方法共用而提取的继承的实现。</p><h2 id="实例" tabindex="-1">实例 <a class="header-anchor" href="#实例" aria-label="Permalink to &quot;实例&quot;">​</a></h2><ul><li>图片轮播</li></ul><h3 id="图片轮播" tabindex="-1">图片轮播 <a class="header-anchor" href="#图片轮播" aria-label="Permalink to &quot;图片轮播&quot;">​</a></h3><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-light vp-code" tabindex="0"><code><span class="line"><span style="color:#6A737D;">// 图片轮播类</span></span>
<span class="line"><span style="color:#D73A49;">var</span><span style="color:#6F42C1;"> LoopImages</span><span style="color:#D73A49;"> =</span><span style="color:#D73A49;"> function</span><span style="color:#24292E;"> (</span><span style="color:#E36209;">imgArr</span><span style="color:#24292E;">, </span><span style="color:#E36209;">container</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#6A737D;">	// 轮播图片数组</span></span>
<span class="line"><span style="color:#005CC5;">	this</span><span style="color:#24292E;">.imagesArray </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> imgArr</span></span>
<span class="line"><span style="color:#6A737D;">	// 轮播图片容器</span></span>
<span class="line"><span style="color:#005CC5;">	this</span><span style="color:#24292E;">.container </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> container</span></span>
<span class="line"><span style="color:#6A737D;">	// 创建轮播图片</span></span>
<span class="line"><span style="color:#005CC5;">	this</span><span style="color:#24292E;">.</span><span style="color:#6F42C1;">createImage</span><span style="color:#D73A49;"> =</span><span style="color:#D73A49;"> function</span><span style="color:#24292E;"> () {}</span></span>
<span class="line"><span style="color:#6A737D;">	// 切换下—张图片</span></span>
<span class="line"><span style="color:#005CC5;">	this</span><span style="color:#24292E;">.</span><span style="color:#6F42C1;">changeImage</span><span style="color:#D73A49;"> =</span><span style="color:#D73A49;"> function</span><span style="color:#24292E;"> () {}</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 上下滑动切换类</span></span>
<span class="line"><span style="color:#D73A49;">var</span><span style="color:#6F42C1;"> slideLoopImg</span><span style="color:#D73A49;"> =</span><span style="color:#D73A49;"> function</span><span style="color:#24292E;"> (</span><span style="color:#E36209;">imgArr</span><span style="color:#24292E;">, </span><span style="color:#E36209;">container</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#6A737D;">	// 构造函数继承图片轮播类</span></span>
<span class="line"><span style="color:#24292E;">	LoopImages.</span><span style="color:#6F42C1;">call</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">this</span><span style="color:#24292E;">, imgArr, container)</span></span>
<span class="line"><span style="color:#6A737D;">	// 重写继承的切换下—张图片方法</span></span>
<span class="line"><span style="color:#005CC5;">	this</span><span style="color:#24292E;">.</span><span style="color:#6F42C1;">changeImage</span><span style="color:#D73A49;"> =</span><span style="color:#D73A49;"> function</span><span style="color:#24292E;"> () {</span></span>
<span class="line"><span style="color:#24292E;">		console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;slideLoopImg changeImage function&#39;</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#24292E;">	}</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 渐隐切换类</span></span>
<span class="line"><span style="color:#D73A49;">var</span><span style="color:#6F42C1;"> FadeLoopImg</span><span style="color:#D73A49;"> =</span><span style="color:#D73A49;"> function</span><span style="color:#24292E;"> (</span><span style="color:#E36209;">imgArr</span><span style="color:#24292E;">, </span><span style="color:#E36209;">container</span><span style="color:#24292E;">, </span><span style="color:#E36209;">arrow</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#6A737D;">	// 构造函数继承图片轮播类</span></span>
<span class="line"><span style="color:#24292E;">	LoopImages.</span><span style="color:#6F42C1;">call</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">this</span><span style="color:#24292E;">, imgArr, container)</span></span>
<span class="line"><span style="color:#6A737D;">	// 切换箭头私有变量</span></span>
<span class="line"><span style="color:#005CC5;">	this</span><span style="color:#24292E;">.arrow </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> arrow</span></span>
<span class="line"><span style="color:#6A737D;">	// 重写继承的切换下—张图片方法</span></span>
<span class="line"><span style="color:#005CC5;">	this</span><span style="color:#24292E;">.</span><span style="color:#6F42C1;">changeImage</span><span style="color:#D73A49;"> =</span><span style="color:#D73A49;"> function</span><span style="color:#24292E;"> () {</span></span>
<span class="line"><span style="color:#24292E;">		console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;FadeLoopImg changeImage function&#39;</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#24292E;">	}</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">var</span><span style="color:#24292E;"> fadeImg </span><span style="color:#D73A49;">=</span><span style="color:#D73A49;"> new</span><span style="color:#6F42C1;"> FadeLoopImg</span><span style="color:#24292E;">([</span><span style="color:#032F62;">&#39;01.jpg&#39;</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&#39;02.jpg&#39;</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&#39;03.jpg&#39;</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&#39;04.jpg&#39;</span><span style="color:#24292E;">], </span><span style="color:#032F62;">&#39;slide&#39;</span><span style="color:#24292E;">, [</span></span>
<span class="line"><span style="color:#032F62;">	&#39;left.jpg&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#032F62;">	&#39;right.jpg&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">])</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">fadeImg.</span><span style="color:#6F42C1;">changeImage</span><span style="color:#24292E;">() </span><span style="color:#6A737D;">// FadeLoopImg changeImage function</span></span></code></pre></div><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-light vp-code" tabindex="0"><code><span class="line"><span style="color:#6A737D;">// 图片轮播类</span></span>
<span class="line"><span style="color:#D73A49;">var</span><span style="color:#6F42C1;"> LoopImages</span><span style="color:#D73A49;"> =</span><span style="color:#D73A49;"> function</span><span style="color:#24292E;"> (</span><span style="color:#E36209;">imgArr</span><span style="color:#24292E;">, </span><span style="color:#E36209;">container</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#6A737D;">	// 轮播图片数组</span></span>
<span class="line"><span style="color:#005CC5;">	this</span><span style="color:#24292E;">.imagesArray </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> imgArr</span></span>
<span class="line"><span style="color:#6A737D;">	// 轮播图片容器</span></span>
<span class="line"><span style="color:#005CC5;">	this</span><span style="color:#24292E;">.container </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> container</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#005CC5;">LoopImages</span><span style="color:#24292E;">.</span><span style="color:#005CC5;">prototype</span><span style="color:#D73A49;"> =</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#6A737D;">	// 创建轮播图片</span></span>
<span class="line"><span style="color:#6F42C1;">	createImage</span><span style="color:#24292E;">: </span><span style="color:#D73A49;">function</span><span style="color:#24292E;"> () {</span></span>
<span class="line"><span style="color:#24292E;">		console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;LoopImages createImage function&#39;</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#24292E;">	},</span></span>
<span class="line"><span style="color:#6A737D;">	// 切换下—张图片</span></span>
<span class="line"><span style="color:#6F42C1;">	changeImage</span><span style="color:#24292E;">: </span><span style="color:#D73A49;">function</span><span style="color:#24292E;"> () {</span></span>
<span class="line"><span style="color:#24292E;">		console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;LoopImages changeImage function&#39;</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#24292E;">	},</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 上下滑动切换类</span></span>
<span class="line"><span style="color:#D73A49;">var</span><span style="color:#6F42C1;"> slideLoopImg</span><span style="color:#D73A49;"> =</span><span style="color:#D73A49;"> function</span><span style="color:#24292E;"> (</span><span style="color:#E36209;">imgArr</span><span style="color:#24292E;">, </span><span style="color:#E36209;">container</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#6A737D;">	// 构造函数继承图片轮播类</span></span>
<span class="line"><span style="color:#24292E;">	LoopImages.</span><span style="color:#6F42C1;">call</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">this</span><span style="color:#24292E;">, imgArr, container)</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#005CC5;">slideLoopImg</span><span style="color:#24292E;">.</span><span style="color:#005CC5;">prototype</span><span style="color:#D73A49;"> =</span><span style="color:#D73A49;"> new</span><span style="color:#6F42C1;"> LoopImages</span><span style="color:#24292E;">()</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 重写继承的切换下—张图片方法</span></span>
<span class="line"><span style="color:#005CC5;">slideLoopImg</span><span style="color:#24292E;">.</span><span style="color:#005CC5;">prototype</span><span style="color:#24292E;">.</span><span style="color:#6F42C1;">changeImage</span><span style="color:#D73A49;"> =</span><span style="color:#D73A49;"> function</span><span style="color:#24292E;"> () {</span></span>
<span class="line"><span style="color:#24292E;">	console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;slideLoopImg changeImage function&#39;</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 渐隐切换类</span></span>
<span class="line"><span style="color:#D73A49;">var</span><span style="color:#6F42C1;"> FadeLoopImg</span><span style="color:#D73A49;"> =</span><span style="color:#D73A49;"> function</span><span style="color:#24292E;"> (</span><span style="color:#E36209;">imgArr</span><span style="color:#24292E;">, </span><span style="color:#E36209;">container</span><span style="color:#24292E;">, </span><span style="color:#E36209;">arrow</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">	LoopImages.</span><span style="color:#6F42C1;">call</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">this</span><span style="color:#24292E;">, imgArr, container)</span></span>
<span class="line"><span style="color:#6A737D;">	// 切换箭头私有变量</span></span>
<span class="line"><span style="color:#005CC5;">	this</span><span style="color:#24292E;">.arrow </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> arrow</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#005CC5;">FadeLoopImg</span><span style="color:#24292E;">.</span><span style="color:#005CC5;">prototype</span><span style="color:#D73A49;"> =</span><span style="color:#D73A49;"> new</span><span style="color:#6F42C1;"> LoopImages</span><span style="color:#24292E;">()</span></span>
<span class="line"></span>
<span class="line"><span style="color:#005CC5;">FadeLoopImg</span><span style="color:#24292E;">.</span><span style="color:#005CC5;">prototype</span><span style="color:#24292E;">.</span><span style="color:#6F42C1;">changeImage</span><span style="color:#D73A49;"> =</span><span style="color:#D73A49;"> function</span><span style="color:#24292E;"> () {</span></span>
<span class="line"><span style="color:#24292E;">	console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;FadeLoopImg changeImage function&#39;</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 测试用例</span></span>
<span class="line"><span style="color:#6A737D;">// slide</span></span>
<span class="line"><span style="color:#24292E;">console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(fadeImg.container)</span></span>
<span class="line"><span style="color:#6A737D;">// FadeLoopImg changeImage function</span></span>
<span class="line"><span style="color:#24292E;">fadeImg.</span><span style="color:#6F42C1;">changeImage</span><span style="color:#24292E;">()</span></span>
<span class="line"></span>
<span class="line"><span style="color:#005CC5;">LoopImages</span><span style="color:#24292E;">.</span><span style="color:#005CC5;">prototype</span><span style="color:#24292E;">.</span><span style="color:#6F42C1;">getImageLength</span><span style="color:#D73A49;"> =</span><span style="color:#D73A49;"> function</span><span style="color:#24292E;"> () {</span></span>
<span class="line"><span style="color:#D73A49;">	return</span><span style="color:#005CC5;"> this</span><span style="color:#24292E;">.imagesArray.</span><span style="color:#005CC5;">length</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#005CC5;">FadeLoopImg</span><span style="color:#24292E;">.</span><span style="color:#005CC5;">prototype</span><span style="color:#24292E;">.</span><span style="color:#6F42C1;">getcontainer</span><span style="color:#D73A49;"> =</span><span style="color:#D73A49;"> function</span><span style="color:#24292E;"> () {</span></span>
<span class="line"><span style="color:#D73A49;">	return</span><span style="color:#005CC5;"> this</span><span style="color:#24292E;">.container</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(fadeImg.</span><span style="color:#6F42C1;">getImageLength</span><span style="color:#24292E;">()) </span><span style="color:#6A737D;">// 4</span></span>
<span class="line"><span style="color:#24292E;">console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(fadeImg.</span><span style="color:#6F42C1;">getcontainer</span><span style="color:#24292E;">()) </span><span style="color:#6A737D;">//slide</span></span></code></pre></div>`,9)]))}const C=n(o,[["render",e]]);export{g as __pageData,C as default};
