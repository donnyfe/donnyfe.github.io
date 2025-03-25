import{_ as n,c as a,o as l,ag as p}from"./chunks/framework.DPDPlp3K.js";const A=JSON.parse('{"title":"惰性模式 layier","description":"","frontmatter":{},"headers":[],"relativePath":"pattern/skill/惰性模式Layier.md","filePath":"pattern/skill/惰性模式Layier.md"}'),o={name:"pattern/skill/惰性模式Layier.md"};function t(e,s,c,r,y,i){return l(),a("div",null,s[0]||(s[0]=[p(`<h1 id="惰性模式-layier" tabindex="-1">惰性模式 layier <a class="header-anchor" href="#惰性模式-layier" aria-label="Permalink to &quot;惰性模式 layier&quot;">​</a></h1><p>惰性模式是一种拖延模式,由于对象的创建或者数据的计算会花费高昂的代价（如页面刚加载时无法辨别是该浏览器支持某个功能,此时创建对象是不够安全的）,因此页面之处会延迟对这一类对象的创建。</p><p>惰性模式又分为两种:</p><ul><li><p>第一种是文件加载后立即执行对象方法来重定义对象。对于第一种方式,由于文件加载时执行,因此会占用一些资源。</p></li><li><p>第二种是当第一次使用方法对象时重定义对象。对于第二种方式由于在第一次使用时重定义对象,以致第一次执行时间增加。</p></li></ul><p>有时候两种方式对资源的开销都是可接受的,因此到底使用哪种方式,要看具体需求而定。</p><h2 id="实例" tabindex="-1">实例 <a class="header-anchor" href="#实例" aria-label="Permalink to &quot;实例&quot;">​</a></h2><ul><li>封装惰性事件监听器</li><li>创建 XHR 对象</li></ul><h3 id="封装惰性事件监听器" tabindex="-1">封装惰性事件监听器 <a class="header-anchor" href="#封装惰性事件监听器" aria-label="Permalink to &quot;封装惰性事件监听器&quot;">​</a></h3><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-light vp-code" tabindex="0"><code><span class="line"><span style="color:#6A737D;">// 加载即执行</span></span>
<span class="line"><span style="color:#6A737D;">// 添加绑定事件方法on</span></span>
<span class="line"><span style="color:#005CC5;">A</span><span style="color:#24292E;">.on </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> (</span><span style="color:#D73A49;">function</span><span style="color:#24292E;"> (</span><span style="color:#E36209;">dom</span><span style="color:#24292E;">, </span><span style="color:#E36209;">type</span><span style="color:#24292E;">, </span><span style="color:#E36209;">fn</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#6A737D;">	// 如果支持addEventListener方法</span></span>
<span class="line"><span style="color:#D73A49;">	if</span><span style="color:#24292E;"> (document.addEventListener) {</span></span>
<span class="line"><span style="color:#6A737D;">		// 返回新定义方法</span></span>
<span class="line"><span style="color:#D73A49;">		return</span><span style="color:#D73A49;"> function</span><span style="color:#24292E;"> (</span><span style="color:#E36209;">dom</span><span style="color:#24292E;">, </span><span style="color:#E36209;">type</span><span style="color:#24292E;">, </span><span style="color:#E36209;">fn</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">			dom.</span><span style="color:#6F42C1;">addEventListener</span><span style="color:#24292E;">(type, fn, </span><span style="color:#005CC5;">false</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#24292E;">		}</span></span>
<span class="line"><span style="color:#6A737D;">		// 如果支持attachEvent方法（IE）</span></span>
<span class="line"><span style="color:#24292E;">	} </span><span style="color:#D73A49;">else</span><span style="color:#D73A49;"> if</span><span style="color:#24292E;"> (document.attachEvent) {</span></span>
<span class="line"><span style="color:#6A737D;">		// 返回新定义方法</span></span>
<span class="line"><span style="color:#D73A49;">		return</span><span style="color:#D73A49;"> function</span><span style="color:#24292E;"> (</span><span style="color:#E36209;">dom</span><span style="color:#24292E;">, </span><span style="color:#E36209;">type</span><span style="color:#24292E;">, </span><span style="color:#E36209;">fn</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">			dom.</span><span style="color:#6F42C1;">attachEvent</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;on&#39;</span><span style="color:#D73A49;"> +</span><span style="color:#24292E;"> type, fn)</span></span>
<span class="line"><span style="color:#24292E;">		}</span></span>
<span class="line"><span style="color:#6A737D;">		// 定义on方法</span></span>
<span class="line"><span style="color:#24292E;">	} </span><span style="color:#D73A49;">else</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#6A737D;">		// 返回新定义方法</span></span>
<span class="line"><span style="color:#D73A49;">		return</span><span style="color:#D73A49;"> function</span><span style="color:#24292E;"> (</span><span style="color:#E36209;">dom</span><span style="color:#24292E;">, </span><span style="color:#E36209;">type</span><span style="color:#24292E;">, </span><span style="color:#E36209;">fn</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">			dom[</span><span style="color:#032F62;">&#39;on&#39;</span><span style="color:#D73A49;"> +</span><span style="color:#24292E;"> type] </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> fn</span></span>
<span class="line"><span style="color:#24292E;">		}</span></span>
<span class="line"><span style="color:#24292E;">	}</span></span>
<span class="line"><span style="color:#24292E;">})()</span></span>
<span class="line"><span style="color:#6A737D;">// 惰性执行</span></span>
<span class="line"><span style="color:#6A737D;">// 添加绑定事件方法on</span></span>
<span class="line"><span style="color:#005CC5;">A</span><span style="color:#24292E;">.</span><span style="color:#6F42C1;">on</span><span style="color:#D73A49;"> =</span><span style="color:#D73A49;"> function</span><span style="color:#24292E;"> (</span><span style="color:#E36209;">dom</span><span style="color:#24292E;">, </span><span style="color:#E36209;">type</span><span style="color:#24292E;">, </span><span style="color:#E36209;">fn</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#6A737D;">	// 如果支持addEventListener方法</span></span>
<span class="line"><span style="color:#D73A49;">	if</span><span style="color:#24292E;"> (dom.addEventListener) {</span></span>
<span class="line"><span style="color:#6A737D;">		// 显示重定义on方法</span></span>
<span class="line"><span style="color:#005CC5;">		A</span><span style="color:#24292E;">.</span><span style="color:#6F42C1;">on</span><span style="color:#D73A49;"> =</span><span style="color:#D73A49;"> function</span><span style="color:#24292E;"> (</span><span style="color:#E36209;">dom</span><span style="color:#24292E;">, </span><span style="color:#E36209;">type</span><span style="color:#24292E;">, </span><span style="color:#E36209;">fn</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">			dom.</span><span style="color:#6F42C1;">addEventListener</span><span style="color:#24292E;">(type, fn, </span><span style="color:#005CC5;">false</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#24292E;">		}</span></span>
<span class="line"><span style="color:#6A737D;">		// 如果支持attachEvent方法（IE）</span></span>
<span class="line"><span style="color:#24292E;">	} </span><span style="color:#D73A49;">else</span><span style="color:#D73A49;"> if</span><span style="color:#24292E;"> (dom.attachEvent) {</span></span>
<span class="line"><span style="color:#6A737D;">		// 显示重定义on方法</span></span>
<span class="line"><span style="color:#005CC5;">		A</span><span style="color:#24292E;">.</span><span style="color:#6F42C1;">on</span><span style="color:#D73A49;"> =</span><span style="color:#D73A49;"> function</span><span style="color:#24292E;"> (</span><span style="color:#E36209;">dom</span><span style="color:#24292E;">, </span><span style="color:#E36209;">type</span><span style="color:#24292E;">, </span><span style="color:#E36209;">fn</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">			dom.</span><span style="color:#6F42C1;">attachEvent</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;on&#39;</span><span style="color:#D73A49;"> +</span><span style="color:#24292E;"> type, fn)</span></span>
<span class="line"><span style="color:#24292E;">		}</span></span>
<span class="line"><span style="color:#6A737D;">		// 如果支持DoM0级事件绑定</span></span>
<span class="line"><span style="color:#24292E;">	} </span><span style="color:#D73A49;">else</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#6A737D;">		// 显示重定义on方法</span></span>
<span class="line"><span style="color:#005CC5;">		A</span><span style="color:#24292E;">.</span><span style="color:#6F42C1;">on</span><span style="color:#D73A49;"> =</span><span style="color:#D73A49;"> function</span><span style="color:#24292E;"> (</span><span style="color:#E36209;">dom</span><span style="color:#24292E;">, </span><span style="color:#E36209;">type</span><span style="color:#24292E;">, </span><span style="color:#E36209;">fn</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">			dom[</span><span style="color:#032F62;">&#39;on&#39;</span><span style="color:#D73A49;"> +</span><span style="color:#24292E;"> type] </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> fn</span></span>
<span class="line"><span style="color:#24292E;">		}</span></span>
<span class="line"><span style="color:#24292E;">	}</span></span>
<span class="line"><span style="color:#6A737D;">	// 执行重定义on方法</span></span>
<span class="line"><span style="color:#005CC5;">	A</span><span style="color:#24292E;">.</span><span style="color:#6F42C1;">on</span><span style="color:#24292E;">(dom, type, fn)</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#005CC5;">A</span><span style="color:#24292E;">.</span><span style="color:#6F42C1;">on</span><span style="color:#24292E;">(document.body, </span><span style="color:#032F62;">&#39;click&#39;</span><span style="color:#24292E;">, </span><span style="color:#D73A49;">function</span><span style="color:#24292E;"> () {</span></span>
<span class="line"><span style="color:#6F42C1;">	alert</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">11</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#24292E;">})</span></span></code></pre></div><h3 id="创建-xhr-对象" tabindex="-1">创建 XHR 对象 <a class="header-anchor" href="#创建-xhr-对象" aria-label="Permalink to &quot;创建 XHR 对象&quot;">​</a></h3><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-light vp-code" tabindex="0"><code><span class="line"><span style="color:#6A737D;">// 创建XHR对象</span></span>
<span class="line"><span style="color:#D73A49;">function</span><span style="color:#6F42C1;"> createXHR</span><span style="color:#24292E;">() {</span></span>
<span class="line"><span style="color:#6A737D;">	// 标准浏览器</span></span>
<span class="line"><span style="color:#D73A49;">	if</span><span style="color:#24292E;"> (</span><span style="color:#D73A49;">typeof</span><span style="color:#24292E;"> XMLHttpRequest </span><span style="color:#D73A49;">!=</span><span style="color:#032F62;"> &#39;undefined&#39;</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#D73A49;">		return</span><span style="color:#D73A49;"> new</span><span style="color:#6F42C1;"> XMLHttpRequest</span><span style="color:#24292E;">()</span></span>
<span class="line"><span style="color:#6A737D;">		// IE浏览器</span></span>
<span class="line"><span style="color:#24292E;">	} </span><span style="color:#D73A49;">else</span><span style="color:#D73A49;"> if</span><span style="color:#24292E;"> (</span><span style="color:#D73A49;">typeof</span><span style="color:#24292E;"> ActiveXobject </span><span style="color:#D73A49;">!=</span><span style="color:#032F62;"> &#39;undefined&#39;</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#D73A49;">		if</span><span style="color:#24292E;"> (</span><span style="color:#D73A49;">typeof</span><span style="color:#005CC5;"> arguments</span><span style="color:#24292E;">.callee.activeXstring </span><span style="color:#D73A49;">!=</span><span style="color:#032F62;"> &#39;string&#39;</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#D73A49;">			var</span><span style="color:#24292E;"> versions </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> [</span><span style="color:#032F62;">&#39;MsXML2.XMLHttp.6.0&#39;</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&#39;MsXML2.XMLHttp.3.0&#39;</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&#39;MsXML2. XMLHttp&#39;</span><span style="color:#24292E;">],</span></span>
<span class="line"><span style="color:#24292E;">				i </span><span style="color:#D73A49;">=</span><span style="color:#005CC5;"> 0</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">				len </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> versions.</span><span style="color:#005CC5;">length</span></span>
<span class="line"><span style="color:#6A737D;">			//遍历并设置版本</span></span>
<span class="line"><span style="color:#D73A49;">			for</span><span style="color:#24292E;"> (; i </span><span style="color:#D73A49;">&lt;</span><span style="color:#24292E;"> len; i</span><span style="color:#D73A49;">++</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#D73A49;">				try</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#D73A49;">					new</span><span style="color:#6F42C1;"> ActiveXobect</span><span style="color:#24292E;">(versions[i])</span></span>
<span class="line"><span style="color:#005CC5;">					arguments</span><span style="color:#24292E;">.callee.activeXstring </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> versions[i]</span></span>
<span class="line"><span style="color:#D73A49;">					break</span></span>
<span class="line"><span style="color:#24292E;">				} </span><span style="color:#D73A49;">catch</span><span style="color:#24292E;"> (ex) {}</span></span>
<span class="line"><span style="color:#24292E;">			}</span></span>
<span class="line"><span style="color:#24292E;">		}</span></span>
<span class="line"><span style="color:#D73A49;">		return</span><span style="color:#D73A49;"> new</span><span style="color:#6F42C1;"> ActiveXobect</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">arguments</span><span style="color:#24292E;">.callee.activeXstring)</span></span>
<span class="line"><span style="color:#6A737D;">		// 对不支持的浏览器抛出错误提示</span></span>
<span class="line"><span style="color:#24292E;">	} </span><span style="color:#D73A49;">else</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#D73A49;">		throw</span><span style="color:#D73A49;"> new</span><span style="color:#6F42C1;"> Error</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;您的浏览器并不支持Ajax.&#39;</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#24292E;">	}</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"><span style="color:#6A737D;">// 第—种 加载时损失性能,但是第—次调用时不损失性能</span></span>
<span class="line"><span style="color:#D73A49;">var</span><span style="color:#24292E;"> createXHR </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> (</span><span style="color:#D73A49;">function</span><span style="color:#24292E;"> () {</span></span>
<span class="line"><span style="color:#D73A49;">	if</span><span style="color:#24292E;"> (</span><span style="color:#D73A49;">typeof</span><span style="color:#24292E;"> XMLHttpRequest </span><span style="color:#D73A49;">!=</span><span style="color:#032F62;"> &#39;undefined&#39;</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#D73A49;">		return</span><span style="color:#D73A49;"> function</span><span style="color:#24292E;"> () {</span></span>
<span class="line"><span style="color:#D73A49;">			return</span><span style="color:#D73A49;"> new</span><span style="color:#6F42C1;"> XMLHttpRequest</span><span style="color:#24292E;">()</span></span>
<span class="line"><span style="color:#24292E;">		}</span></span>
<span class="line"><span style="color:#24292E;">	} </span><span style="color:#D73A49;">else</span><span style="color:#D73A49;"> if</span><span style="color:#24292E;"> (</span><span style="color:#D73A49;">typeof</span><span style="color:#24292E;"> ActiveXobject </span><span style="color:#D73A49;">!=</span><span style="color:#032F62;"> &#39;undefined&#39;</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#D73A49;">		return</span><span style="color:#D73A49;"> function</span><span style="color:#24292E;"> () {</span></span>
<span class="line"><span style="color:#6A737D;">			// 省略代码</span></span>
<span class="line"><span style="color:#24292E;">		}</span></span>
<span class="line"><span style="color:#24292E;">	} </span><span style="color:#D73A49;">else</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#D73A49;">		return</span><span style="color:#D73A49;"> function</span><span style="color:#24292E;"> () {</span></span>
<span class="line"><span style="color:#D73A49;">			throw</span><span style="color:#D73A49;"> new</span><span style="color:#6F42C1;"> Error</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;No XHR object available.&#39;</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#24292E;">		}</span></span>
<span class="line"><span style="color:#24292E;">	}</span></span>
<span class="line"><span style="color:#24292E;">})()</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 第二种 加载时不损失性能,但是第—次调用时损失性能</span></span>
<span class="line"><span style="color:#D73A49;">function</span><span style="color:#6F42C1;"> createXHR</span><span style="color:#24292E;">() {</span></span>
<span class="line"><span style="color:#D73A49;">	if</span><span style="color:#24292E;"> (</span><span style="color:#D73A49;">typeof</span><span style="color:#24292E;"> XMLHttpRequest </span><span style="color:#D73A49;">!=</span><span style="color:#032F62;"> &#39;undefined&#39;</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#6F42C1;">		createXHR</span><span style="color:#D73A49;"> =</span><span style="color:#D73A49;"> function</span><span style="color:#24292E;"> () {</span></span>
<span class="line"><span style="color:#D73A49;">			return</span><span style="color:#D73A49;"> new</span><span style="color:#6F42C1;"> XMLHttpRequest</span><span style="color:#24292E;">()</span></span>
<span class="line"><span style="color:#24292E;">		}</span></span>
<span class="line"><span style="color:#24292E;">	} </span><span style="color:#D73A49;">else</span><span style="color:#D73A49;"> if</span><span style="color:#24292E;"> (</span><span style="color:#D73A49;">typeof</span><span style="color:#24292E;"> ActiveXobject </span><span style="color:#D73A49;">!=</span><span style="color:#032F62;"> &#39;undefined&#39;</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#6F42C1;">		createXHR</span><span style="color:#D73A49;"> =</span><span style="color:#D73A49;"> function</span><span style="color:#24292E;"> () {</span></span>
<span class="line"><span style="color:#6A737D;">			// 省略代码</span></span>
<span class="line"><span style="color:#24292E;">		}</span></span>
<span class="line"><span style="color:#24292E;">	} </span><span style="color:#D73A49;">else</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#6F42C1;">		createXHR</span><span style="color:#D73A49;"> =</span><span style="color:#D73A49;"> function</span><span style="color:#24292E;"> () {</span></span>
<span class="line"><span style="color:#D73A49;">			throw</span><span style="color:#D73A49;"> new</span><span style="color:#6F42C1;"> Error</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;No XHR object available.&#39;</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#24292E;">		}</span></span>
<span class="line"><span style="color:#24292E;">	}</span></span>
<span class="line"><span style="color:#D73A49;">	return</span><span style="color:#6F42C1;"> createXHR</span><span style="color:#24292E;">()</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div>`,11)]))}const D=n(o,[["render",t]]);export{A as __pageData,D as default};
