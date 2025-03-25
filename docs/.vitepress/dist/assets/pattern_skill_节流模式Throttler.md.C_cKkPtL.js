import{_ as n,c as a,o as l,ag as p}from"./chunks/framework.DPDPlp3K.js";const D=JSON.parse('{"title":"节流模式 Throttler","description":"","frontmatter":{},"headers":[],"relativePath":"pattern/skill/节流模式Throttler.md","filePath":"pattern/skill/节流模式Throttler.md"}'),o={name:"pattern/skill/节流模式Throttler.md"};function t(e,s,c,r,y,i){return l(),a("div",null,s[0]||(s[0]=[p(`<h1 id="节流模式-throttler" tabindex="-1">节流模式 Throttler <a class="header-anchor" href="#节流模式-throttler" aria-label="Permalink to &quot;节流模式 Throttler&quot;">​</a></h1><p>构造节流器的思路是这样的:</p><p>首先节流器应该能做两件事情,第一件事情就是清除将要执行的函数,此时要对节流器传递两个参数（是否清除,执行函数）,如果第一个参数为 true,则表示清除将要执行的函数。同时会判断第二个参数（执行函数）有没有计时器句柄,有则清除计时器。</p><p>节流器能做的第二件事情就是延迟执行函数。此时要传递两个参数（执行函数,相关参数）。在节流器内部首先要为执行函数绑定一个计时器句柄,来保存该执行函数的计时器,对于第二个参数——相关参数来说,大致包括 3 个部分,执行函数在执行时的作用域、执行函数的参数、执行函数延迟执行的时间。</p><p>节流模式优化了图片加载时的用户体验,对于一些前后端的数据请求有时也可通过节流模式打包来优化请求次数。</p><p>比如在统计中（尤其对于鼠标移入移出等频发性事件）,我们经常监听事件触发次数,当触发次数达到某一值时才发送请求。</p><p>对于 DOM 的操作,常常会占用大量的内存资源和 cpu 处理时间。甚至大量的 DOM 操作在一些浏览器中也很可能导致浏览器的崩溃。由于 JavaScript 的单线程处理机制,导致 DOM 操作占用大量资源时会严重堵塞后面重要程序的执行。</p><p>节流模式的核心思想是创建计时器,延迟程序的执行。这也使得计时器中回调函数的操作异步执行（这里的异步执行并不是说 JavaScript 是多线程语言,JavaScript 从设计之初就是单线程语言,异步只是说脱离原来程序执行的顺序,看上去,异步程序像是在同时执行。但是某一时刻,当前执行的程序一定是所有异步程序（包括原程序）中的某一个）。</p><p>由此可看出节流模式主要有两点优势:</p><p>第一,程序能否执行是可控的。执行前的某一时刻是否清除计时器来决定程序是否可以继续执行。</p><p>第二,程序是异步的。由于计时器机制,使得程序脱离原程序而异步执行（当然随着 worker 技术的兴起,也可开启多线程模式实现）</p><p>因此不会影响后面的程序的正常执行。在其他方面,比如对异步请求（ajax）应用节流,此时可以优化请求次数来节省资源。</p><p>最后,对于在节流器中对计时器的设置,有的人可能感觉直接绑定在原函数会暴露计时器句柄,这使得外部可修改。当然你也可以将节流器改造成类的形式,将计时器句柄作为私有变量存放在类内部。</p><h2 id="实例" tabindex="-1">实例 <a class="header-anchor" href="#实例" aria-label="Permalink to &quot;实例&quot;">​</a></h2><ul><li>封装节流器</li></ul><h3 id="封装节流器" tabindex="-1">封装节流器 <a class="header-anchor" href="#封装节流器" aria-label="Permalink to &quot;封装节流器&quot;">​</a></h3><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-light vp-code" tabindex="0"><code><span class="line"><span style="color:#D73A49;">var</span><span style="color:#6F42C1;"> throttle</span><span style="color:#D73A49;"> =</span><span style="color:#D73A49;"> function</span><span style="color:#24292E;"> () {</span></span>
<span class="line"><span style="color:#6A737D;">	// 获取第—个参数</span></span>
<span class="line"><span style="color:#D73A49;">	var</span><span style="color:#24292E;"> isclear </span><span style="color:#D73A49;">=</span><span style="color:#005CC5;"> arguments</span><span style="color:#24292E;">[</span><span style="color:#005CC5;">0</span><span style="color:#24292E;">],</span></span>
<span class="line"><span style="color:#24292E;">		fn</span></span>
<span class="line"><span style="color:#6A737D;">	// 如果第—个参数是boolean类型那么第—个参数则表示是否清除计时器</span></span>
<span class="line"><span style="color:#D73A49;">	if</span><span style="color:#24292E;"> (</span><span style="color:#D73A49;">typeof</span><span style="color:#24292E;"> isclear </span><span style="color:#D73A49;">===</span><span style="color:#032F62;"> &#39;boolean&#39;</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#6A737D;">		// 第二个参数则为函数</span></span>
<span class="line"><span style="color:#24292E;">		fn </span><span style="color:#D73A49;">=</span><span style="color:#005CC5;"> arguments</span><span style="color:#24292E;">[</span><span style="color:#005CC5;">1</span><span style="color:#24292E;">]</span></span>
<span class="line"><span style="color:#6A737D;">		// 函数的计时器句柄存在,这清除该计时器</span></span>
<span class="line"><span style="color:#24292E;">		fn.__throttleID </span><span style="color:#D73A49;">&amp;&amp;</span><span style="color:#6F42C1;"> clearTimeout</span><span style="color:#24292E;">(fn.__throttleID)</span></span>
<span class="line"><span style="color:#6A737D;">		// 通过计时器延迟函数的执行</span></span>
<span class="line"><span style="color:#24292E;">	} </span><span style="color:#D73A49;">else</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#6A737D;">		// 第—个参数为函数</span></span>
<span class="line"><span style="color:#24292E;">		fn </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> isclear</span></span>
<span class="line"><span style="color:#6A737D;">		// 第二个参数为函数执行时的参数</span></span>
<span class="line"><span style="color:#24292E;">		param </span><span style="color:#D73A49;">=</span><span style="color:#005CC5;"> arguments</span><span style="color:#24292E;">[</span><span style="color:#005CC5;">1</span><span style="color:#24292E;">]</span></span>
<span class="line"><span style="color:#6A737D;">		// 对执行时的参数适配默认值,这里我们用到以前学过的extend方法</span></span>
<span class="line"><span style="color:#D73A49;">		var</span><span style="color:#24292E;"> p </span><span style="color:#D73A49;">=</span><span style="color:#6F42C1;"> extend</span><span style="color:#24292E;">(</span></span>
<span class="line"><span style="color:#24292E;">			{</span></span>
<span class="line"><span style="color:#24292E;">				context: </span><span style="color:#005CC5;">null</span><span style="color:#24292E;">, </span><span style="color:#6A737D;">// 执行函数执行时的作用域</span></span>
<span class="line"><span style="color:#24292E;">				args: [], </span><span style="color:#6A737D;">// 执行函数执行时的相关参数（IE下要为数组）</span></span>
<span class="line"><span style="color:#24292E;">				time: </span><span style="color:#005CC5;">300</span><span style="color:#24292E;">, </span><span style="color:#6A737D;">// 执行函数延迟执行的时间</span></span>
<span class="line"><span style="color:#24292E;">			},</span></span>
<span class="line"><span style="color:#24292E;">			param</span></span>
<span class="line"><span style="color:#24292E;">		)</span></span>
<span class="line"><span style="color:#6A737D;">		// 清除执行函数计时器句柄</span></span>
<span class="line"><span style="color:#005CC5;">		arguments</span><span style="color:#24292E;">.</span><span style="color:#6F42C1;">callee</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">true</span><span style="color:#24292E;">, fn)</span></span>
<span class="line"><span style="color:#6A737D;">		// 为函数绑定计时器句柄,延迟执行函数</span></span>
<span class="line"><span style="color:#24292E;">		fn.__throttleID </span><span style="color:#D73A49;">=</span><span style="color:#6F42C1;"> setTimeout</span><span style="color:#24292E;">(</span><span style="color:#D73A49;">function</span><span style="color:#24292E;"> () {</span></span>
<span class="line"><span style="color:#6A737D;">			// 执行函数</span></span>
<span class="line"><span style="color:#24292E;">			fn.</span><span style="color:#6F42C1;">apply</span><span style="color:#24292E;">(p.context, p.args)</span></span>
<span class="line"><span style="color:#24292E;">		}, p.time)</span></span>
<span class="line"><span style="color:#24292E;">	}</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"><span style="color:#6A737D;">// 返回顶部按钮动画</span></span>
<span class="line"><span style="color:#D73A49;">function</span><span style="color:#6F42C1;"> movescroll</span><span style="color:#24292E;">() {</span></span>
<span class="line"><span style="color:#D73A49;">	var</span><span style="color:#24292E;"> top </span><span style="color:#D73A49;">=</span><span style="color:#6F42C1;"> $</span><span style="color:#24292E;">(document).</span><span style="color:#6F42C1;">scrollTop</span><span style="color:#24292E;">()</span></span>
<span class="line"><span style="color:#6F42C1;">	$</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;#back&#39;</span><span style="color:#24292E;">).</span><span style="color:#6F42C1;">animate</span><span style="color:#24292E;">(</span></span>
<span class="line"><span style="color:#24292E;">		{</span></span>
<span class="line"><span style="color:#24292E;">			top: top </span><span style="color:#D73A49;">+</span><span style="color:#005CC5;"> 300</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">		},</span></span>
<span class="line"><span style="color:#005CC5;">		400</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#032F62;">		&#39;easeoutcubic&#39;</span></span>
<span class="line"><span style="color:#24292E;">	)</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 监听页面滚动条事件</span></span>
<span class="line"><span style="color:#6F42C1;">$</span><span style="color:#24292E;">(window).</span><span style="color:#6F42C1;">on</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;scroll&#39;</span><span style="color:#24292E;">, </span><span style="color:#D73A49;">function</span><span style="color:#24292E;"> () {</span></span>
<span class="line"><span style="color:#6A737D;">	// 节流执行返回顶部按钮动画</span></span>
<span class="line"><span style="color:#6F42C1;">	throttle</span><span style="color:#24292E;">(movescroll)</span></span>
<span class="line"><span style="color:#24292E;">})</span></span></code></pre></div><h3 id="懒加载" tabindex="-1">懒加载 <a class="header-anchor" href="#懒加载" aria-label="Permalink to &quot;懒加载&quot;">​</a></h3><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-light vp-code" tabindex="0"><code><span class="line"><span style="color:#6A737D;">/**</span></span>
<span class="line"><span style="color:#6A737D;"> * 节流延迟加载图片类</span></span>
<span class="line"><span style="color:#6A737D;"> * param id 延迟加载图片的容器id</span></span>
<span class="line"><span style="color:#6A737D;"> * 注: 图片格式如下 &lt;img src=&quot;img/loading.gif&quot; alt=&quot;&quot; data-src=&quot;img/1.jpg&quot;&gt;</span></span>
<span class="line"><span style="color:#6A737D;"> */</span></span>
<span class="line"><span style="color:#D73A49;">function</span><span style="color:#6F42C1;"> LazyLoad</span><span style="color:#24292E;">(</span><span style="color:#E36209;">id</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#6A737D;">	// 获取需要节流延迟加载图片的容器</span></span>
<span class="line"><span style="color:#005CC5;">	this</span><span style="color:#24292E;">.container </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> document.</span><span style="color:#6F42C1;">getElementById</span><span style="color:#24292E;">(id)</span></span>
<span class="line"><span style="color:#6A737D;">	// 缓存图片</span></span>
<span class="line"><span style="color:#005CC5;">	this</span><span style="color:#24292E;">.imgs </span><span style="color:#D73A49;">=</span><span style="color:#005CC5;"> this</span><span style="color:#24292E;">.</span><span style="color:#6F42C1;">getImgs</span><span style="color:#24292E;">()</span></span>
<span class="line"><span style="color:#6A737D;">	// 执行逻辑</span></span>
<span class="line"><span style="color:#005CC5;">	this</span><span style="color:#24292E;">.</span><span style="color:#6F42C1;">init</span><span style="color:#24292E;">()</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 节流延迟加载图片类原型方法</span></span>
<span class="line"><span style="color:#005CC5;">LazyLoad</span><span style="color:#24292E;">.</span><span style="color:#005CC5;">prototype</span><span style="color:#D73A49;"> =</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#6A737D;">	// 起始执行逻辑</span></span>
<span class="line"><span style="color:#6F42C1;">	init</span><span style="color:#24292E;">: </span><span style="color:#D73A49;">function</span><span style="color:#24292E;"> () {</span></span>
<span class="line"><span style="color:#6A737D;">		// 加载当前视图图片</span></span>
<span class="line"><span style="color:#005CC5;">		this</span><span style="color:#24292E;">.</span><span style="color:#6F42C1;">update</span><span style="color:#24292E;">()</span></span>
<span class="line"><span style="color:#6A737D;">		// 绑定事件</span></span>
<span class="line"><span style="color:#005CC5;">		this</span><span style="color:#24292E;">.</span><span style="color:#6F42C1;">bindEvent</span><span style="color:#24292E;">()</span></span>
<span class="line"><span style="color:#24292E;">	},</span></span>
<span class="line"><span style="color:#6A737D;">	// 获取延迟加载图片</span></span>
<span class="line"><span style="color:#6F42C1;">	getImgs</span><span style="color:#24292E;">: </span><span style="color:#D73A49;">function</span><span style="color:#24292E;"> () {</span></span>
<span class="line"><span style="color:#6A737D;">		// 新数组容器</span></span>
<span class="line"><span style="color:#D73A49;">		var</span><span style="color:#24292E;"> arr </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> []</span></span>
<span class="line"><span style="color:#6A737D;">		// 获取图片</span></span>
<span class="line"><span style="color:#D73A49;">		var</span><span style="color:#24292E;"> imgs </span><span style="color:#D73A49;">=</span><span style="color:#005CC5;"> this</span><span style="color:#24292E;">.container.</span><span style="color:#6F42C1;">getElementsByTagName</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;img&#39;</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#6A737D;">		// 将获取的图片转化为数组(IE下通过Array.prototype.slice会报错)</span></span>
<span class="line"><span style="color:#D73A49;">		for</span><span style="color:#24292E;"> (</span><span style="color:#D73A49;">var</span><span style="color:#24292E;"> i </span><span style="color:#D73A49;">=</span><span style="color:#005CC5;"> 0</span><span style="color:#24292E;">, len </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> imgs.</span><span style="color:#005CC5;">length</span><span style="color:#24292E;">; i </span><span style="color:#D73A49;">&lt;</span><span style="color:#24292E;"> len; i</span><span style="color:#D73A49;">++</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">			arr.</span><span style="color:#6F42C1;">push</span><span style="color:#24292E;">(imgs[i])</span></span>
<span class="line"><span style="color:#24292E;">		}</span></span>
<span class="line"><span style="color:#D73A49;">		return</span><span style="color:#24292E;"> arr</span></span>
<span class="line"><span style="color:#24292E;">	},</span></span>
<span class="line"><span style="color:#6A737D;">	// 加载图片</span></span>
<span class="line"><span style="color:#6F42C1;">	update</span><span style="color:#24292E;">: </span><span style="color:#D73A49;">function</span><span style="color:#24292E;"> () {</span></span>
<span class="line"><span style="color:#6A737D;">		// 如果图片都加载完成,返回</span></span>
<span class="line"><span style="color:#D73A49;">		if</span><span style="color:#24292E;"> (</span><span style="color:#D73A49;">!</span><span style="color:#005CC5;">this</span><span style="color:#24292E;">.imgs.</span><span style="color:#005CC5;">length</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#D73A49;">			return</span></span>
<span class="line"><span style="color:#24292E;">		}</span></span>
<span class="line"><span style="color:#6A737D;">		// 获取图片长度</span></span>
<span class="line"><span style="color:#D73A49;">		var</span><span style="color:#24292E;"> i </span><span style="color:#D73A49;">=</span><span style="color:#005CC5;"> this</span><span style="color:#24292E;">.imgs.</span><span style="color:#005CC5;">length</span></span>
<span class="line"><span style="color:#6A737D;">		// 遍历图片</span></span>
<span class="line"><span style="color:#D73A49;">		for</span><span style="color:#24292E;"> (</span><span style="color:#D73A49;">--</span><span style="color:#24292E;">i; i </span><span style="color:#D73A49;">&gt;=</span><span style="color:#005CC5;"> 0</span><span style="color:#24292E;">; i</span><span style="color:#D73A49;">--</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#6A737D;">			// 如果图片在可视范围内</span></span>
<span class="line"><span style="color:#D73A49;">			if</span><span style="color:#24292E;"> (</span><span style="color:#005CC5;">this</span><span style="color:#24292E;">.</span><span style="color:#6F42C1;">shouldshow</span><span style="color:#24292E;">(i)) {</span></span>
<span class="line"><span style="color:#6A737D;">				// 加载图片</span></span>
<span class="line"><span style="color:#005CC5;">				this</span><span style="color:#24292E;">.imgs[i].src </span><span style="color:#D73A49;">=</span><span style="color:#005CC5;"> this</span><span style="color:#24292E;">.imgs[i].</span><span style="color:#6F42C1;">getAttribute</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;data-src&#39;</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#6A737D;">				// 清除缓存中的此图片</span></span>
<span class="line"><span style="color:#005CC5;">				this</span><span style="color:#24292E;">.imgs.</span><span style="color:#6F42C1;">splice</span><span style="color:#24292E;">(i, </span><span style="color:#005CC5;">1</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#24292E;">			}</span></span>
<span class="line"><span style="color:#24292E;">		}</span></span>
<span class="line"><span style="color:#24292E;">	},</span></span>
<span class="line"><span style="color:#6A737D;">	// 判断图片是否在可视范围内</span></span>
<span class="line"><span style="color:#6F42C1;">	shouldshow</span><span style="color:#24292E;">: </span><span style="color:#D73A49;">function</span><span style="color:#24292E;"> (</span><span style="color:#E36209;">i</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#6A737D;">		// 获取当前图片</span></span>
<span class="line"><span style="color:#D73A49;">		var</span><span style="color:#24292E;"> img </span><span style="color:#D73A49;">=</span><span style="color:#005CC5;"> this</span><span style="color:#24292E;">.imgs[i],</span></span>
<span class="line"><span style="color:#6A737D;">			// 可视范围内顶部高度(页面滚动条top值)</span></span>
<span class="line"><span style="color:#24292E;">			scrollTop </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> document.documentElement.scrollTop </span><span style="color:#D73A49;">||</span><span style="color:#24292E;"> document.body.scrollTop,</span></span>
<span class="line"><span style="color:#6A737D;">			// 可视范围内底部高度</span></span>
<span class="line"><span style="color:#24292E;">			scrollBottom </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> scrollTop </span><span style="color:#D73A49;">+</span><span style="color:#24292E;"> document.documentElement.clientHeight</span></span>
<span class="line"><span style="color:#6A737D;">		// 图片的顶部位置</span></span>
<span class="line"><span style="color:#24292E;">		;(imgTop </span><span style="color:#D73A49;">=</span><span style="color:#005CC5;"> this</span><span style="color:#24292E;">.</span><span style="color:#6F42C1;">pageY</span><span style="color:#24292E;">(img)),</span></span>
<span class="line"><span style="color:#6A737D;">			// 图片的底部位置</span></span>
<span class="line"><span style="color:#24292E;">			(imgBottom </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> imgTop </span><span style="color:#D73A49;">+</span><span style="color:#24292E;"> img.offsetHeight)</span></span>
<span class="line"><span style="color:#6A737D;">		// 判断图片是否在可视范围内:图片底部高度大于可视视图顶部高度并且图片底部高度小于可视视</span></span>
<span class="line"><span style="color:#6A737D;">		// 图底部高度,或者图片顶部高度大于可视视图顶部高度并且图片顶部高度小于可视视图底部高度</span></span>
<span class="line"><span style="color:#D73A49;">		if</span><span style="color:#24292E;"> (</span></span>
<span class="line"><span style="color:#24292E;">			(imgBottom </span><span style="color:#D73A49;">&gt;</span><span style="color:#24292E;"> scrollTop </span><span style="color:#D73A49;">&amp;&amp;</span><span style="color:#24292E;"> imgBottom </span><span style="color:#D73A49;">&lt;</span><span style="color:#24292E;"> scrollBottom) </span><span style="color:#D73A49;">||</span></span>
<span class="line"><span style="color:#24292E;">			(imgTop </span><span style="color:#D73A49;">&gt;</span><span style="color:#24292E;"> scrollTop </span><span style="color:#D73A49;">&amp;&amp;</span><span style="color:#24292E;"> imgTop </span><span style="color:#D73A49;">&lt;</span><span style="color:#24292E;"> scrollBottom)</span></span>
<span class="line"><span style="color:#24292E;">		)</span></span>
<span class="line"><span style="color:#D73A49;">			return</span><span style="color:#005CC5;"> true</span></span>
<span class="line"><span style="color:#6A737D;">		// 不满足上面条件则返回false</span></span>
<span class="line"><span style="color:#D73A49;">		return</span><span style="color:#005CC5;"> false</span></span>
<span class="line"><span style="color:#24292E;">	},</span></span>
<span class="line"><span style="color:#6A737D;">	// 获取元素页面中的纵坐标位置</span></span>
<span class="line"><span style="color:#6F42C1;">	pageY</span><span style="color:#24292E;">: </span><span style="color:#D73A49;">function</span><span style="color:#24292E;"> (</span><span style="color:#E36209;">element</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#6A737D;">		// 如果元素有父元素</span></span>
<span class="line"><span style="color:#D73A49;">		if</span><span style="color:#24292E;"> (element.offsetParent) {</span></span>
<span class="line"><span style="color:#6A737D;">			// 返回元素+父元素高度</span></span>
<span class="line"><span style="color:#D73A49;">			return</span><span style="color:#24292E;"> element.offsetTop </span><span style="color:#D73A49;">+</span><span style="color:#005CC5;"> this</span><span style="color:#24292E;">.</span><span style="color:#6F42C1;">pageY</span><span style="color:#24292E;">(element.offsetParent)</span></span>
<span class="line"><span style="color:#24292E;">		} </span><span style="color:#D73A49;">else</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#6A737D;">			//否则返回元素高度</span></span>
<span class="line"><span style="color:#D73A49;">			return</span><span style="color:#24292E;"> element.offsetTop</span></span>
<span class="line"><span style="color:#24292E;">		}</span></span>
<span class="line"><span style="color:#24292E;">	},</span></span>
<span class="line"><span style="color:#6A737D;">	// 绑定事件（简化版）</span></span>
<span class="line"><span style="color:#6F42C1;">	on</span><span style="color:#24292E;">: </span><span style="color:#D73A49;">function</span><span style="color:#24292E;"> (</span><span style="color:#E36209;">element</span><span style="color:#24292E;">, </span><span style="color:#E36209;">type</span><span style="color:#24292E;">, </span><span style="color:#E36209;">fn</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#D73A49;">		if</span><span style="color:#24292E;"> (element.addEventListener) {</span></span>
<span class="line"><span style="color:#6F42C1;">			addEventListener</span><span style="color:#24292E;">(type, fn, </span><span style="color:#005CC5;">false</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#24292E;">		} </span><span style="color:#D73A49;">else</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">			element.</span><span style="color:#6F42C1;">attachEvent</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;on&#39;</span><span style="color:#D73A49;"> +</span><span style="color:#24292E;"> type, fn, </span><span style="color:#005CC5;">false</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#24292E;">		}</span></span>
<span class="line"><span style="color:#24292E;">	},</span></span>
<span class="line"><span style="color:#6A737D;">	// 为窗口绑定resize事件与scroll事件</span></span>
<span class="line"><span style="color:#6F42C1;">	bindEvent</span><span style="color:#24292E;">: </span><span style="color:#D73A49;">function</span><span style="color:#24292E;"> () {</span></span>
<span class="line"><span style="color:#D73A49;">		var</span><span style="color:#24292E;"> that </span><span style="color:#D73A49;">=</span><span style="color:#005CC5;"> this</span></span>
<span class="line"><span style="color:#005CC5;">		this</span><span style="color:#24292E;">.</span><span style="color:#6F42C1;">on</span><span style="color:#24292E;">(window, </span><span style="color:#032F62;">&#39;resize&#39;</span><span style="color:#24292E;">, </span><span style="color:#D73A49;">function</span><span style="color:#24292E;"> () {</span></span>
<span class="line"><span style="color:#6A737D;">			// 节流处理更新图片逻辑</span></span>
<span class="line"><span style="color:#6F42C1;">			throttle</span><span style="color:#24292E;">(that.update, {</span></span>
<span class="line"><span style="color:#24292E;">				context: that,</span></span>
<span class="line"><span style="color:#24292E;">			})</span></span>
<span class="line"><span style="color:#24292E;">		})</span></span>
<span class="line"><span style="color:#005CC5;">		this</span><span style="color:#24292E;">.</span><span style="color:#6F42C1;">on</span><span style="color:#24292E;">(window, </span><span style="color:#032F62;">&#39;scroll&#39;</span><span style="color:#24292E;">, </span><span style="color:#D73A49;">function</span><span style="color:#24292E;"> () {</span></span>
<span class="line"><span style="color:#6A737D;">			// 节流处理更新图片逻辑</span></span>
<span class="line"><span style="color:#6F42C1;">			throttle</span><span style="color:#24292E;">(that.update, {</span></span>
<span class="line"><span style="color:#24292E;">				context: that,</span></span>
<span class="line"><span style="color:#24292E;">			})</span></span>
<span class="line"><span style="color:#24292E;">		})</span></span>
<span class="line"><span style="color:#24292E;">	},</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"><span style="color:#6A737D;">// 延迟加载container容器内的图片</span></span>
<span class="line"><span style="color:#D73A49;">new</span><span style="color:#6F42C1;"> LazyLoad</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;container&#39;</span><span style="color:#24292E;">)</span></span></code></pre></div><h3 id="组装统计" tabindex="-1">组装统计 <a class="header-anchor" href="#组装统计" aria-label="Permalink to &quot;组装统计&quot;">​</a></h3><p>简单的 img 图片即可作为请求触发器,因为当为 img 赋值 src 属性时即向服务器发送了 1 次 get 请求。然而每次调用 LogPack 方法时不会发送统计,而是当缓存的统计数组长度大于 MaxNum 数值时,才会发送统计。下面我们就要实现 sendLog 方法,在该方法中我们要做 3 件事,首先我们要从统计缓存中截取 MaxNum 统计项,然后将截取的统计项打包成 1 个字符串,最后通过请求触发器发送请求。</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-light vp-code" tabindex="0"><code><span class="line"><span style="color:#6A737D;">// 打包统计对象</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">var</span><span style="color:#24292E;"> LogPack </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> (</span><span style="color:#D73A49;">function</span><span style="color:#24292E;"> () {</span></span>
<span class="line"><span style="color:#D73A49;">	var</span><span style="color:#24292E;"> data </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> [], </span><span style="color:#6A737D;">// 请求缓存数组</span></span>
<span class="line"><span style="color:#24292E;">		MaxNum </span><span style="color:#D73A49;">=</span><span style="color:#005CC5;"> 10</span><span style="color:#24292E;">, </span><span style="color:#6A737D;">// 请求缓存最大值</span></span>
<span class="line"><span style="color:#24292E;">		itemsplitstr </span><span style="color:#D73A49;">=</span><span style="color:#032F62;"> &#39;|&#39;</span><span style="color:#24292E;">, </span><span style="color:#6A737D;">// 统计项统计参数间隔符</span></span>
<span class="line"><span style="color:#24292E;">		keyValuesplitstr </span><span style="color:#D73A49;">=</span><span style="color:#032F62;"> &#39;*&#39;</span><span style="color:#24292E;">, </span><span style="color:#6A737D;">// 统计项统计参数键值对间隔符</span></span>
<span class="line"><span style="color:#24292E;">		img </span><span style="color:#D73A49;">=</span><span style="color:#D73A49;"> new</span><span style="color:#6F42C1;"> Image</span><span style="color:#24292E;">() </span><span style="color:#6A737D;">// 请求触发器,通过图片src属性实现简单的get请求</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">	// 发送请求方法</span></span>
<span class="line"><span style="color:#D73A49;">	function</span><span style="color:#6F42C1;"> sendLog</span><span style="color:#24292E;">() {</span></span>
<span class="line"><span style="color:#6A737D;">		// 请求参数</span></span>
<span class="line"><span style="color:#D73A49;">		var</span><span style="color:#24292E;"> logstr </span><span style="color:#D73A49;">=</span><span style="color:#032F62;"> &#39;&#39;</span></span>
<span class="line"><span style="color:#6A737D;">		// 截取MaxNum个统计项发送</span></span>
<span class="line"><span style="color:#24292E;">		fireData </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> data.</span><span style="color:#6F42C1;">splice</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">0</span><span style="color:#24292E;">, MaxNum)</span></span>
<span class="line"><span style="color:#6A737D;">		// 遍历统计项</span></span>
<span class="line"><span style="color:#D73A49;">		for</span><span style="color:#24292E;"> (</span><span style="color:#D73A49;">var</span><span style="color:#24292E;"> i </span><span style="color:#D73A49;">=</span><span style="color:#005CC5;"> 0</span><span style="color:#24292E;">, len </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> fireData.</span><span style="color:#005CC5;">length</span><span style="color:#24292E;">; i </span><span style="color:#D73A49;">&lt;</span><span style="color:#24292E;"> len; i</span><span style="color:#D73A49;">++</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#6A737D;">			// 添加统计项顺序索引</span></span>
<span class="line"><span style="color:#24292E;">			logstr </span><span style="color:#D73A49;">+=</span><span style="color:#032F62;"> &#39;log&#39;</span><span style="color:#D73A49;"> +</span><span style="color:#24292E;"> i </span><span style="color:#D73A49;">+</span><span style="color:#032F62;"> &#39;=&#39;</span></span>
<span class="line"><span style="color:#6A737D;">			// 遍历统计项内的统计参数</span></span>
<span class="line"><span style="color:#D73A49;">			for</span><span style="color:#24292E;"> (</span><span style="color:#D73A49;">var</span><span style="color:#24292E;"> j </span><span style="color:#D73A49;">in</span><span style="color:#24292E;"> fireData[i]) {</span></span>
<span class="line"><span style="color:#6A737D;">				// 添加统计项参数键 + 间隔符 + 值</span></span>
<span class="line"><span style="color:#24292E;">				logstr </span><span style="color:#D73A49;">+=</span><span style="color:#24292E;"> j </span><span style="color:#D73A49;">+</span><span style="color:#24292E;"> keyValuesplitstr </span><span style="color:#D73A49;">+</span><span style="color:#24292E;"> fireData[i][j]</span></span>
<span class="line"><span style="color:#6A737D;">				// 添加统计项统计参数间隔符</span></span>
<span class="line"><span style="color:#24292E;">				logstr </span><span style="color:#D73A49;">+=</span><span style="color:#24292E;"> itemsplitstr</span></span>
<span class="line"><span style="color:#24292E;">			}</span></span>
<span class="line"><span style="color:#6A737D;">			// &amp;符拼接多个统计项</span></span>
<span class="line"><span style="color:#24292E;">			logstr </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> logstr.</span><span style="color:#6F42C1;">replace</span><span style="color:#24292E;">(</span><span style="color:#032F62;">/</span><span style="color:#22863A;font-weight:bold;">\\|</span><span style="color:#D73A49;">$</span><span style="color:#032F62;">/</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&#39;&#39;</span><span style="color:#24292E;">) </span><span style="color:#D73A49;">+</span><span style="color:#032F62;"> &#39;&amp;&#39;</span></span>
<span class="line"><span style="color:#24292E;">		}</span></span>
<span class="line"><span style="color:#6A737D;">		// 添加统计项打包长度</span></span>
<span class="line"><span style="color:#24292E;">		logstr </span><span style="color:#D73A49;">+=</span><span style="color:#032F62;"> &#39;logLength=&#39;</span><span style="color:#D73A49;"> +</span><span style="color:#24292E;"> len</span></span>
<span class="line"><span style="color:#6A737D;">		// 请求触发器发送统计</span></span>
<span class="line"><span style="color:#24292E;">		img.src </span><span style="color:#D73A49;">=</span><span style="color:#032F62;"> &#39;a.gif?&#39;</span><span style="color:#D73A49;"> +</span><span style="color:#24292E;"> logstr</span></span>
<span class="line"><span style="color:#24292E;">	}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">	// 统计方法</span></span>
<span class="line"><span style="color:#D73A49;">	return</span><span style="color:#D73A49;"> function</span><span style="color:#24292E;"> (</span><span style="color:#E36209;">param</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#6A737D;">		// 如果无参数则发送统计</span></span>
<span class="line"><span style="color:#D73A49;">		if</span><span style="color:#24292E;"> (</span><span style="color:#D73A49;">!</span><span style="color:#24292E;">param) {</span></span>
<span class="line"><span style="color:#6F42C1;">			sendLog</span><span style="color:#24292E;">()</span></span>
<span class="line"><span style="color:#D73A49;">			return</span></span>
<span class="line"><span style="color:#24292E;">		}</span></span>
<span class="line"><span style="color:#6A737D;">		// 添加统计项</span></span>
<span class="line"><span style="color:#24292E;">		data.</span><span style="color:#6F42C1;">push</span><span style="color:#24292E;">(param)</span></span>
<span class="line"><span style="color:#6A737D;">		// 如果统计项大于请求缓存最大值则发送统计请求包</span></span>
<span class="line"><span style="color:#24292E;">		data.</span><span style="color:#005CC5;">length</span><span style="color:#D73A49;"> &gt;=</span><span style="color:#24292E;"> MaxNum </span><span style="color:#D73A49;">&amp;&amp;</span><span style="color:#6F42C1;"> sendLog</span><span style="color:#24292E;">()</span></span>
<span class="line"><span style="color:#24292E;">	}</span></span>
<span class="line"><span style="color:#24292E;">})()</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 测试统计</span></span>
<span class="line"><span style="color:#6A737D;">// 点击统计</span></span>
<span class="line"><span style="color:#24292E;">btn.</span><span style="color:#6F42C1;">onclick</span><span style="color:#D73A49;"> =</span><span style="color:#D73A49;"> function</span><span style="color:#24292E;"> () {</span></span>
<span class="line"><span style="color:#6F42C1;">	LogPack</span><span style="color:#24292E;">({</span></span>
<span class="line"><span style="color:#24292E;">		btnId: </span><span style="color:#005CC5;">this</span><span style="color:#24292E;">.id,</span></span>
<span class="line"><span style="color:#24292E;">		context: </span><span style="color:#005CC5;">this</span><span style="color:#24292E;">.innerHTML,</span></span>
<span class="line"><span style="color:#24292E;">		type: </span><span style="color:#032F62;">&#39;click&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">	})</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"><span style="color:#6A737D;">// 点击统计</span></span>
<span class="line"><span style="color:#24292E;">btn.</span><span style="color:#6F42C1;">onmouseover</span><span style="color:#D73A49;"> =</span><span style="color:#D73A49;"> function</span><span style="color:#24292E;"> () {</span></span>
<span class="line"><span style="color:#6F42C1;">	LogPack</span><span style="color:#24292E;">({</span></span>
<span class="line"><span style="color:#24292E;">		btnId: </span><span style="color:#005CC5;">this</span><span style="color:#24292E;">.id,</span></span>
<span class="line"><span style="color:#24292E;">		context: </span><span style="color:#005CC5;">this</span><span style="color:#24292E;">.innerHTML,</span></span>
<span class="line"><span style="color:#24292E;">		type: </span><span style="color:#032F62;">&#39;mouseover&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">	})</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div>`,22)]))}const A=n(o,[["render",t]]);export{D as __pageData,A as default};
