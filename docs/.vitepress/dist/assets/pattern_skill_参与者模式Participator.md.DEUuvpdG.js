import{_ as n,c as a,o as p,ag as l}from"./chunks/framework.DPDPlp3K.js";const d=JSON.parse('{"title":"参与者模式 participator","description":"","frontmatter":{},"headers":[],"relativePath":"pattern/skill/参与者模式Participator.md","filePath":"pattern/skill/参与者模式Participator.md"}'),o={name:"pattern/skill/参与者模式Participator.md"};function t(e,s,c,r,i,y){return p(),a("div",null,s[0]||(s[0]=[l(`<h1 id="参与者模式-participator" tabindex="-1">参与者模式 participator <a class="header-anchor" href="#参与者模式-participator" aria-label="Permalink to &quot;参与者模式 participator&quot;">​</a></h1><p>参与者 (participator): 在特定的作用域中执行给定的函数, 并将参数原封不动地传递。</p><h2 id="实例" tabindex="-1">实例 <a class="header-anchor" href="#实例" aria-label="Permalink to &quot;实例&quot;">​</a></h2><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-light vp-code" tabindex="0"><code><span class="line"><span style="color:#6A737D;">// 事件绑定方法</span></span>
<span class="line"><span style="color:#005CC5;">A</span><span style="color:#24292E;">.event.</span><span style="color:#6F42C1;">on</span><span style="color:#D73A49;"> =</span><span style="color:#D73A49;"> function</span><span style="color:#24292E;"> (</span><span style="color:#E36209;">dom</span><span style="color:#24292E;">, </span><span style="color:#E36209;">type</span><span style="color:#24292E;">, </span><span style="color:#E36209;">fn</span><span style="color:#24292E;">, </span><span style="color:#E36209;">data</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#6A737D;">	// w3c标准事件绑定</span></span>
<span class="line"><span style="color:#D73A49;">	if</span><span style="color:#24292E;"> (dom.addEventListener) {</span></span>
<span class="line"><span style="color:#24292E;">		dom.</span><span style="color:#6F42C1;">addEventListener</span><span style="color:#24292E;">(</span></span>
<span class="line"><span style="color:#24292E;">			type,</span></span>
<span class="line"><span style="color:#D73A49;">			function</span><span style="color:#24292E;"> (</span><span style="color:#E36209;">e</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#6A737D;">				// 在dom环境中调用fn,并传入事件对象与data数据参数</span></span>
<span class="line"><span style="color:#24292E;">				fn.</span><span style="color:#6F42C1;">call</span><span style="color:#24292E;">(dom, e, data)</span></span>
<span class="line"><span style="color:#24292E;">			},</span></span>
<span class="line"><span style="color:#005CC5;">			false</span></span>
<span class="line"><span style="color:#24292E;">		)</span></span>
<span class="line"><span style="color:#24292E;">	}</span></span>
<span class="line"><span style="color:#6A737D;">	// ie事件绑定</span></span>
<span class="line"><span style="color:#6A737D;">	// ……</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"><span style="color:#6A737D;">//函数绑定 bind</span></span>
<span class="line"><span style="color:#D73A49;">function</span><span style="color:#6F42C1;"> bind</span><span style="color:#24292E;">(</span><span style="color:#E36209;">fn</span><span style="color:#24292E;">, </span><span style="color:#E36209;">context</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#6A737D;">	// 闭包返回新函数</span></span>
<span class="line"><span style="color:#D73A49;">	return</span><span style="color:#D73A49;"> function</span><span style="color:#24292E;"> () {</span></span>
<span class="line"><span style="color:#6A737D;">		// 对fn装饰并返回</span></span>
<span class="line"><span style="color:#D73A49;">		return</span><span style="color:#24292E;"> fn.</span><span style="color:#6F42C1;">apply</span><span style="color:#24292E;">(context, </span><span style="color:#005CC5;">arguments</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#24292E;">	}</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"><span style="color:#6A737D;">// 测试对象</span></span>
<span class="line"><span style="color:#D73A49;">var</span><span style="color:#24292E;"> demoobj </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">	title: </span><span style="color:#032F62;">&#39;这是—个例子&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"><span style="color:#6A737D;">// 测试方法</span></span>
<span class="line"><span style="color:#D73A49;">function</span><span style="color:#6F42C1;"> demoFn</span><span style="color:#24292E;">() {</span></span>
<span class="line"><span style="color:#24292E;">	console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">this</span><span style="color:#24292E;">.title)</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"><span style="color:#6A737D;">// 让demoobj参与demoFn的执行</span></span>
<span class="line"><span style="color:#D73A49;">var</span><span style="color:#24292E;"> bindFn </span><span style="color:#D73A49;">=</span><span style="color:#6F42C1;"> bind</span><span style="color:#24292E;">(demoFn, demoobj)</span></span>
<span class="line"><span style="color:#6F42C1;">demoFn</span><span style="color:#24292E;">() </span><span style="color:#6A737D;">// undefined</span></span>
<span class="line"><span style="color:#6F42C1;">bindFn</span><span style="color:#24292E;">() </span><span style="color:#6A737D;">// 这是—个例子</span></span></code></pre></div>`,4)]))}const A=n(o,[["render",t]]);export{d as __pageData,A as default};
