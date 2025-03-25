import{_ as n,c as a,o as l,ag as p}from"./chunks/framework.DPDPlp3K.js";const A=JSON.parse('{"title":"函数柯里化 curry","description":"","frontmatter":{},"headers":[],"relativePath":"pattern/skill/函数柯里化Curry.md","filePath":"pattern/skill/函数柯里化Curry.md"}'),o={name:"pattern/skill/函数柯里化Curry.md"};function t(e,s,c,r,y,i){return l(),a("div",null,s[0]||(s[0]=[p(`<h1 id="函数柯里化-curry" tabindex="-1">函数柯里化 curry <a class="header-anchor" href="#函数柯里化-curry" aria-label="Permalink to &quot;函数柯里化 curry&quot;">​</a></h1><p>函数柯里化的思想是对函数的参数分割,这有点像其他面向语言中的类的多态,就是根据传递的参数不同,可以让一个函数存在多种状态,只不过函数柯里化处理的是函数,因此要实现函数的柯里化是要以函数为基础的,借助柯里化器伪造其他函数,让这些伪造的函数在执行时调用这个基函数完成不同的功能。还是跟函数绑定一样,首先创建出一个函数柯里化器。</p><p>参与者模式实质上是两种技术的结晶,函数绑定和函数柯里化。</p><p>早期浏览器中并未提供 bind 方法,因此聪明的工程师们为了使添加的事件能够移除,事件回调函数中能够访问到事件源,并且可以向事件回调函数中传入自定义数据,才发明了函数绑定与函数柯里化技术。</p><p>对于函数绑定,它将函数以函数指针（函数名）的形式传递,使函数在被绑定的对象作用域中执行,因此函数的执行中可以顺利地访问到对象内部的数据,由于函数绑定构造复杂,执行时需消耗更多的内存,因此执行速度上要稍慢一些。不过相对于解决的问题来说这种消耗还是值得的,因此它常用于事件,setTimeout 或 setInterval 等异步逻辑中的回调函数。</p><p>对于函数柯里化即是将接受多个参数的函数转化为接受一部分参数的新函数,余下的参数保存下来,当函数调用时,返回传入的参数与保存的参数共同执行的结果。</p><p>通常保存下来的参数保存于闭包内,因此函数柯里化的实现要消耗一定的资源。</p><p>函数的柯里化有点类似类的重载, 不同点是类的重载是同一个类对象,函数的柯里化是两个不同的函数。随着函数柯里化的发展,现在又衍生出一种反柯里化的函数,其目的是方便我们对方法的调用,它的实现如下。</p><h2 id="实例" tabindex="-1">实例 <a class="header-anchor" href="#实例" aria-label="Permalink to &quot;实例&quot;">​</a></h2><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-light vp-code" tabindex="0"><code><span class="line"><span style="color:#6A737D;">// 函数柯里化</span></span>
<span class="line"><span style="color:#D73A49;">function</span><span style="color:#6F42C1;"> curry</span><span style="color:#24292E;">(</span><span style="color:#E36209;">fn</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#6A737D;">	// 保存数组slice方法 Array.prototype.slice</span></span>
<span class="line"><span style="color:#D73A49;">	var</span><span style="color:#24292E;"> slice </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> [].slice</span></span>
<span class="line"><span style="color:#6A737D;">	// 从第二个参数开始截取参数</span></span>
<span class="line"><span style="color:#D73A49;">	var</span><span style="color:#24292E;"> args </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> slice.</span><span style="color:#6F42C1;">call</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">arguments</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">1</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#6A737D;">	// 闭包返回新函数</span></span>
<span class="line"><span style="color:#D73A49;">	return</span><span style="color:#D73A49;"> function</span><span style="color:#24292E;"> () {</span></span>
<span class="line"><span style="color:#6A737D;">		// 将参数（类数组）转化为数组</span></span>
<span class="line"><span style="color:#D73A49;">		var</span><span style="color:#24292E;"> addArgs </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> slice.</span><span style="color:#6F42C1;">call</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">arguments</span><span style="color:#24292E;">),</span></span>
<span class="line"><span style="color:#6A737D;">			// 拼接参数</span></span>
<span class="line"><span style="color:#24292E;">			allArgs </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> args.</span><span style="color:#6F42C1;">concat</span><span style="color:#24292E;">(addArgs)</span></span>
<span class="line"><span style="color:#6A737D;">		// 返回新函数</span></span>
<span class="line"><span style="color:#D73A49;">		return</span><span style="color:#24292E;"> fn.</span><span style="color:#6F42C1;">apply</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">null</span><span style="color:#24292E;">, allArgs)</span></span>
<span class="line"><span style="color:#24292E;">	}</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 加法器</span></span>
<span class="line"><span style="color:#D73A49;">function</span><span style="color:#6F42C1;"> add</span><span style="color:#24292E;">(</span><span style="color:#E36209;">num1</span><span style="color:#24292E;">, </span><span style="color:#E36209;">num2</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#D73A49;">	return</span><span style="color:#24292E;"> num1 </span><span style="color:#D73A49;">+</span><span style="color:#24292E;"> num2</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"><span style="color:#6A737D;">// 加5加法器</span></span>
<span class="line"><span style="color:#D73A49;">function</span><span style="color:#6F42C1;"> add5</span><span style="color:#24292E;">(</span><span style="color:#E36209;">num</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#D73A49;">	return</span><span style="color:#6F42C1;"> add</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">5</span><span style="color:#24292E;">, num)</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 测试add加法器</span></span>
<span class="line"><span style="color:#24292E;">console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(</span><span style="color:#6F42C1;">add</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">1</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">2</span><span style="color:#24292E;">)) </span><span style="color:#6A737D;">// 3</span></span>
<span class="line"><span style="color:#6A737D;">// 测试加5加法器</span></span>
<span class="line"><span style="color:#24292E;">console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(</span><span style="color:#6F42C1;">add5</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">6</span><span style="color:#24292E;">)) </span><span style="color:#6A737D;">// 11</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 函数柯里化创建加5加法器</span></span>
<span class="line"><span style="color:#D73A49;">var</span><span style="color:#24292E;"> add5 </span><span style="color:#D73A49;">=</span><span style="color:#6F42C1;"> curry</span><span style="color:#24292E;">(add, </span><span style="color:#005CC5;">5</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#24292E;">console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(</span><span style="color:#6F42C1;">add5</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">7</span><span style="color:#24292E;">)) </span><span style="color:#6A737D;">// 12</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 7+8</span></span>
<span class="line"><span style="color:#D73A49;">var</span><span style="color:#24292E;"> add7and8 </span><span style="color:#D73A49;">=</span><span style="color:#6F42C1;"> curry</span><span style="color:#24292E;">(add, </span><span style="color:#005CC5;">7</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">8</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#24292E;">console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(</span><span style="color:#6F42C1;">add7and8</span><span style="color:#24292E;">()) </span><span style="color:#6A737D;">// 15</span></span></code></pre></div><h3 id="重写-bind-方法" tabindex="-1">重写 bind 方法 <a class="header-anchor" href="#重写-bind-方法" aria-label="Permalink to &quot;重写 bind 方法&quot;">​</a></h3><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-light vp-code" tabindex="0"><code><span class="line"><span style="color:#6A737D;">// 函数柯里化 重写bind</span></span>
<span class="line"><span style="color:#D73A49;">function</span><span style="color:#6F42C1;"> bind</span><span style="color:#24292E;">(</span><span style="color:#E36209;">fn</span><span style="color:#24292E;">, </span><span style="color:#E36209;">context</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#6A737D;">	// 缓存数组slice方法</span></span>
<span class="line"><span style="color:#D73A49;">	var</span><span style="color:#24292E;"> slice </span><span style="color:#D73A49;">=</span><span style="color:#005CC5;"> Array</span><span style="color:#24292E;">.</span><span style="color:#005CC5;">prototype</span><span style="color:#24292E;">.slice,</span></span>
<span class="line"><span style="color:#6A737D;">		// 从第三个参数开始截取参数（包括第三个参数）</span></span>
<span class="line"><span style="color:#24292E;">		args </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> slice.</span><span style="color:#6F42C1;">call</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">arguments</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">2</span><span style="color:#24292E;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">	// 返回新方法</span></span>
<span class="line"><span style="color:#D73A49;">	return</span><span style="color:#D73A49;"> function</span><span style="color:#24292E;"> () {</span></span>
<span class="line"><span style="color:#6A737D;">		// 将参数转化为数组</span></span>
<span class="line"><span style="color:#D73A49;">		var</span><span style="color:#24292E;"> addArgs </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> slice.</span><span style="color:#6F42C1;">call</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">arguments</span><span style="color:#24292E;">),</span></span>
<span class="line"><span style="color:#6A737D;">			// 拼接参数</span></span>
<span class="line"><span style="color:#24292E;">			allArgs </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> addArgs.</span><span style="color:#6F42C1;">concat</span><span style="color:#24292E;">(args)</span></span>
<span class="line"><span style="color:#6A737D;">		// 对fn装饰并返回</span></span>
<span class="line"><span style="color:#D73A49;">		return</span><span style="color:#24292E;"> fn.</span><span style="color:#6F42C1;">apply</span><span style="color:#24292E;">(context, allArgs)</span></span>
<span class="line"><span style="color:#24292E;">	}</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">var</span><span style="color:#24292E;"> demoData1 </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">	text: </span><span style="color:#032F62;">&#39;这是第—组数据&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">var</span><span style="color:#24292E;"> demoData2 </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">	text: </span><span style="color:#032F62;">&#39;这是第二组数据&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"><span style="color:#6A737D;">// 提供btn元素、demoData1参与对象</span></span>
<span class="line"><span style="color:#6A737D;">// var bindFn = bind(demoFn, btn, demoData1);</span></span>
<span class="line"><span style="color:#6A737D;">// chrome输: [MouseEvent, object] &lt;button&gt;按钮&lt;/button&gt;</span></span>
<span class="line"><span style="color:#6A737D;">// 提供btn元素、demoData1、demoData2参与对象</span></span>
<span class="line"><span style="color:#6A737D;">// var bindFn = bind(demoFn, btn, demoData1, demoData2);</span></span>
<span class="line"><span style="color:#6A737D;">// chrome输: [MouseEvent, object, object] &lt;button&gt;按钮&lt;/button&gt;</span></span>
<span class="line"><span style="color:#6A737D;">// 提供p元素、demoData1参与对象</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">var</span><span style="color:#24292E;"> bindFn </span><span style="color:#D73A49;">=</span><span style="color:#6F42C1;"> bind</span><span style="color:#24292E;">(demoFn, p, demoData1)</span></span>
<span class="line"><span style="color:#6A737D;">// [MouseEvent, object] &lt;p&gt;hello&lt;/p&gt;</span></span>
<span class="line"><span style="color:#6A737D;">// 兼容各个浏览器</span></span>
<span class="line"><span style="color:#D73A49;">if</span><span style="color:#24292E;"> (</span><span style="color:#005CC5;">Function</span><span style="color:#24292E;">.</span><span style="color:#005CC5;">prototype</span><span style="color:#24292E;">.bind </span><span style="color:#D73A49;">===</span><span style="color:#005CC5;"> undefined</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#005CC5;">	Function</span><span style="color:#24292E;">.</span><span style="color:#005CC5;">prototype</span><span style="color:#24292E;">.</span><span style="color:#6F42C1;">bind</span><span style="color:#D73A49;"> =</span><span style="color:#D73A49;"> function</span><span style="color:#24292E;"> (</span><span style="color:#E36209;">context</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#6A737D;">		// 缓存数组slice方法</span></span>
<span class="line"><span style="color:#D73A49;">		var</span><span style="color:#24292E;"> slice </span><span style="color:#D73A49;">=</span><span style="color:#005CC5;"> Array</span><span style="color:#24292E;">.</span><span style="color:#005CC5;">prototype</span><span style="color:#24292E;">.slice,</span></span>
<span class="line"><span style="color:#6A737D;">			// 从第二个参数截取参数</span></span>
<span class="line"><span style="color:#24292E;">			args </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> slice.</span><span style="color:#6F42C1;">call</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">arguments</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">1</span><span style="color:#24292E;">),</span></span>
<span class="line"><span style="color:#6A737D;">			// 保存当前函数引用</span></span>
<span class="line"><span style="color:#24292E;">			that </span><span style="color:#D73A49;">=</span><span style="color:#005CC5;"> this</span></span>
<span class="line"><span style="color:#6A737D;">		// 返回新函数</span></span>
<span class="line"><span style="color:#D73A49;">		return</span><span style="color:#D73A49;"> function</span><span style="color:#24292E;"> () {</span></span>
<span class="line"><span style="color:#6A737D;">			// 将参数数组化</span></span>
<span class="line"><span style="color:#D73A49;">			var</span><span style="color:#24292E;"> addArgs </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> slice.</span><span style="color:#6F42C1;">call</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">arguments</span><span style="color:#24292E;">),</span></span>
<span class="line"><span style="color:#6A737D;">				// 拼接参数,注意:传入的参数放在了后面</span></span>
<span class="line"><span style="color:#24292E;">				allArgs </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> args.</span><span style="color:#6F42C1;">concat</span><span style="color:#24292E;">(addArgs)</span></span>
<span class="line"><span style="color:#6A737D;">			// 对当前函数装饰并返回</span></span>
<span class="line"><span style="color:#D73A49;">			return</span><span style="color:#24292E;"> that.</span><span style="color:#6F42C1;">apply</span><span style="color:#24292E;">(context, allArgs)</span></span>
<span class="line"><span style="color:#24292E;">		}</span></span>
<span class="line"><span style="color:#24292E;">	}</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><h3 id="反柯里化" tabindex="-1">反柯里化 <a class="header-anchor" href="#反柯里化" aria-label="Permalink to &quot;反柯里化&quot;">​</a></h3><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-light vp-code" tabindex="0"><code><span class="line"><span style="color:#6A737D;">// 反柯里化</span></span>
<span class="line"><span style="color:#005CC5;">Function</span><span style="color:#24292E;">.</span><span style="color:#005CC5;">prototype</span><span style="color:#24292E;">.</span><span style="color:#6F42C1;">uncurry</span><span style="color:#D73A49;"> =</span><span style="color:#D73A49;"> function</span><span style="color:#24292E;"> () {</span></span>
<span class="line"><span style="color:#6A737D;">	// 保存当前对象</span></span>
<span class="line"><span style="color:#D73A49;">	var</span><span style="color:#24292E;"> that </span><span style="color:#D73A49;">=</span><span style="color:#005CC5;"> this</span></span>
<span class="line"><span style="color:#D73A49;">	return</span><span style="color:#D73A49;"> function</span><span style="color:#24292E;"> () {</span></span>
<span class="line"><span style="color:#D73A49;">		return</span><span style="color:#005CC5;"> Function</span><span style="color:#24292E;">.</span><span style="color:#005CC5;">prototype</span><span style="color:#24292E;">.call.</span><span style="color:#6F42C1;">apply</span><span style="color:#24292E;">(that, </span><span style="color:#005CC5;">arguments</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#24292E;">	}</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 获取校验方法</span></span>
<span class="line"><span style="color:#D73A49;">var</span><span style="color:#24292E;"> toString </span><span style="color:#D73A49;">=</span><span style="color:#005CC5;"> Object</span><span style="color:#24292E;">.</span><span style="color:#005CC5;">prototype</span><span style="color:#24292E;">.toString.</span><span style="color:#6F42C1;">uncurry</span><span style="color:#24292E;">()</span></span>
<span class="line"><span style="color:#6A737D;">// 测试对象数据类型</span></span>
<span class="line"><span style="color:#24292E;">console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(</span><span style="color:#6F42C1;">toString</span><span style="color:#24292E;">(</span><span style="color:#D73A49;">function</span><span style="color:#24292E;"> () {})) </span><span style="color:#6A737D;">// chrome:[object Function]</span></span>
<span class="line"><span style="color:#24292E;">console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(</span><span style="color:#6F42C1;">toString</span><span style="color:#24292E;">([])) </span><span style="color:#6A737D;">// chrome:[object Array]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 保存数组push方法</span></span>
<span class="line"><span style="color:#D73A49;">var</span><span style="color:#24292E;"> push </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> [].push.</span><span style="color:#6F42C1;">uncurry</span><span style="color:#24292E;">()</span></span>
<span class="line"><span style="color:#6A737D;">// 创建—个对象</span></span>
<span class="line"><span style="color:#D73A49;">var</span><span style="color:#24292E;"> demoArr </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> {}</span></span>
<span class="line"><span style="color:#6A737D;">// 通过push方法为对象添加数据成员</span></span>
<span class="line"><span style="color:#6F42C1;">push</span><span style="color:#24292E;">(demoArr, </span><span style="color:#032F62;">&#39;第—个成员&#39;</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&#39;第二个成员&#39;</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#24292E;">console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(demoArr)</span></span>
<span class="line"><span style="color:#6A737D;">//chrome:object{0:&quot;第—个成员&quot;,1:&quot;第二个成员&quot;,length:2}</span></span></code></pre></div>`,14)]))}const D=n(o,[["render",t]]);export{A as __pageData,D as default};
