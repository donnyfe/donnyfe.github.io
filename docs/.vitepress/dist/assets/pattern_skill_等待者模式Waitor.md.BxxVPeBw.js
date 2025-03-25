import{_ as n,c as a,o as l,ag as p}from"./chunks/framework.DPDPlp3K.js";const A=JSON.parse('{"title":"等待者模式 Waiter","description":"","frontmatter":{},"headers":[],"relativePath":"pattern/skill/等待者模式Waitor.md","filePath":"pattern/skill/等待者模式Waitor.md"}'),o={name:"pattern/skill/等待者模式Waitor.md"};function e(c,s,t,r,y,i){return l(),a("div",null,s[0]||(s[0]=[p(`<h1 id="等待者模式-waiter" tabindex="-1">等待者模式 Waiter <a class="header-anchor" href="#等待者模式-waiter" aria-label="Permalink to &quot;等待者模式 Waiter&quot;">​</a></h1><p>等待者模式（waiter: 通过对多个异步进程监听,来触发未来发生的动作。</p><p>等待者对象不用实时监听异步逻辑的完成,它只需要对注册监听的异步逻辑发生状态改变时（请求成功或者请求失败）对所有异步逻辑的状态做一次确认迭代。</p><p>等待者模式意在处理耗时比较长的操作,比如 canvas 中遍历并操作一张大图片中的每一个像素点、定时器操作、异步请求等。等待者模式为我们提供了一个抽象的非阻塞的解决方案,通过创建 Primise 对象,对耗时逻辑的未来状态变化返回一个响应,通过在等待者对象内部捕获这些响应信息,为耗时较长的操作提供了回调方案,使我们可以捕获耗时操作完成时或中断时的状态并执行相应的回调方案。</p><h2 id="实例" tabindex="-1">实例 <a class="header-anchor" href="#实例" aria-label="Permalink to &quot;实例&quot;">​</a></h2><p>对于等待者对象, 其内部定义了三个数组,分别是监控对象容器,以及成功与失败回调函数容器:一个类-监控对象,该对象有两个属性,即监控解决成功状态与监控解决失败状态,两个方法,解决成功方法与解决失败方法:一个私有方法_exec 来处理成功失败回调函数的方法:3 个共有方法接口:when 方法监控异步逻辑,done 方法添加成功回调函数, fail 方法添加失败回调函数。”小铭喘口气,歇了一下继续说,“等待者对象内部的属性我们己经定义好了,下面我们一一实现这些方法吧,首先我们还是完成监控对象类的原型方法 resolve 和 reject。</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-light vp-code" tabindex="0"><code><span class="line"><span style="color:#6A737D;">// 等待对象</span></span>
<span class="line"><span style="color:#D73A49;">var</span><span style="color:#6F42C1;"> Waiter</span><span style="color:#D73A49;"> =</span><span style="color:#D73A49;"> function</span><span style="color:#24292E;"> () {</span></span>
<span class="line"><span style="color:#6A737D;"> // 注册了的等待对象容器</span></span>
<span class="line"><span style="color:#D73A49;"> var</span><span style="color:#24292E;"> dfd </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> [],</span></span>
<span class="line"><span style="color:#6A737D;">  // 成功回调方法容器</span></span>
<span class="line"><span style="color:#24292E;">  doneArr </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> [],</span></span>
<span class="line"><span style="color:#6A737D;">  // 失败回调方法容器</span></span>
<span class="line"><span style="color:#24292E;">  failArr </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> [],</span></span>
<span class="line"><span style="color:#6A737D;">  // 缓存Array方法slice</span></span>
<span class="line"><span style="color:#24292E;">  slice </span><span style="color:#D73A49;">=</span><span style="color:#005CC5;"> Array</span><span style="color:#24292E;">.</span><span style="color:#005CC5;">prototype</span><span style="color:#24292E;">.slice,</span></span>
<span class="line"><span style="color:#6A737D;">  // 保存当前等待者对象</span></span>
<span class="line"><span style="color:#24292E;">  that </span><span style="color:#D73A49;">=</span><span style="color:#005CC5;"> this</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#6A737D;"> // 监控对象类</span></span>
<span class="line"><span style="color:#D73A49;"> var</span><span style="color:#6F42C1;"> Primise</span><span style="color:#D73A49;"> =</span><span style="color:#D73A49;"> function</span><span style="color:#24292E;"> () {</span></span>
<span class="line"><span style="color:#6A737D;">  // 监控对象是否解决成功状态</span></span>
<span class="line"><span style="color:#005CC5;">  this</span><span style="color:#24292E;">.resolved </span><span style="color:#D73A49;">=</span><span style="color:#005CC5;"> false</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#6A737D;">  // 监控对象是否解决失败状态</span></span>
<span class="line"><span style="color:#005CC5;">  this</span><span style="color:#24292E;">.rejected </span><span style="color:#D73A49;">=</span><span style="color:#005CC5;"> false</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;"> }</span></span>
<span class="line"><span style="color:#6A737D;"> // 监控对象类原型方法</span></span>
<span class="line"><span style="color:#005CC5;"> Primise</span><span style="color:#24292E;">.</span><span style="color:#005CC5;">prototype</span><span style="color:#D73A49;"> =</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#6A737D;">  // 解决成功</span></span>
<span class="line"><span style="color:#6F42C1;">  resolve</span><span style="color:#24292E;">: </span><span style="color:#D73A49;">function</span><span style="color:#24292E;"> () {},</span></span>
<span class="line"><span style="color:#6A737D;">  // 解决失败</span></span>
<span class="line"><span style="color:#6F42C1;">  reject</span><span style="color:#24292E;">: </span><span style="color:#D73A49;">function</span><span style="color:#24292E;"> () {}</span></span>
<span class="line"><span style="color:#24292E;"> }</span></span>
<span class="line"><span style="color:#6A737D;"> // 创建监控对象</span></span>
<span class="line"><span style="color:#24292E;"> that.</span><span style="color:#6F42C1;">Deferred</span><span style="color:#D73A49;"> =</span><span style="color:#D73A49;"> function</span><span style="color:#24292E;"> () {</span></span>
<span class="line"><span style="color:#D73A49;">  return</span><span style="color:#D73A49;"> new</span><span style="color:#6F42C1;"> Primise</span><span style="color:#24292E;">();</span></span>
<span class="line"><span style="color:#24292E;"> }</span></span>
<span class="line"><span style="color:#6A737D;"> // 回调执行方法</span></span>
<span class="line"><span style="color:#6F42C1;">function_exec</span><span style="color:#24292E;">(arr) {}</span></span>
<span class="line"><span style="color:#6A737D;"> // 监控异步方法 参数:监控对象</span></span>
<span class="line"><span style="color:#24292E;"> that.</span><span style="color:#6F42C1;">when</span><span style="color:#D73A49;"> =</span><span style="color:#D73A49;"> function</span><span style="color:#24292E;"> () {};</span></span>
<span class="line"><span style="color:#6A737D;"> // 解决成功回调函数添加方法</span></span>
<span class="line"><span style="color:#24292E;"> that.</span><span style="color:#6F42C1;">done</span><span style="color:#D73A49;"> =</span><span style="color:#D73A49;"> function</span><span style="color:#24292E;"> () {};</span></span>
<span class="line"><span style="color:#6A737D;"> // 解决失败回调函数添加方法</span></span>
<span class="line"><span style="color:#24292E;"> that.</span><span style="color:#6F42C1;">fail</span><span style="color:#D73A49;"> =</span><span style="color:#D73A49;"> function</span><span style="color:#24292E;"> () {}</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"><span style="color:#6A737D;">// 首先他们都是因异步逻辑状态的改变而执行相应操作的,不同的是resolve方法是要执行成功回调函数,所以要对所有被监控的异步逻辑进行状态校验。而reject方法是要执行失败回调函数,所以只要有一个被监控的异步逻辑状态改变成失败状态,就要执行失败回调函数。</span></span>
<span class="line"><span style="color:#6A737D;">// 监控对象原型方法</span></span>
<span class="line"><span style="color:#005CC5;">Primise</span><span style="color:#24292E;">.</span><span style="color:#005CC5;">prototype</span><span style="color:#D73A49;"> =</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#6A737D;"> // 解决成功</span></span>
<span class="line"><span style="color:#6F42C1;"> resolve</span><span style="color:#24292E;">: </span><span style="color:#D73A49;">function</span><span style="color:#24292E;"> () {</span></span>
<span class="line"><span style="color:#6A737D;">  // 设置当前监控对象解决成功</span></span>
<span class="line"><span style="color:#005CC5;">  this</span><span style="color:#24292E;">.resolved </span><span style="color:#D73A49;">=</span><span style="color:#005CC5;"> true</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#6A737D;">  // 如果设有监控对象则取消执行</span></span>
<span class="line"><span style="color:#D73A49;">  if</span><span style="color:#24292E;"> (</span><span style="color:#D73A49;">!</span><span style="color:#24292E;">dfd.</span><span style="color:#005CC5;">length</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#D73A49;">   return</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#6A737D;">  // 遍历所有注册了的监控对象</span></span>
<span class="line"><span style="color:#D73A49;">  for</span><span style="color:#24292E;"> (</span><span style="color:#D73A49;">var</span><span style="color:#24292E;"> i </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> dfd.</span><span style="color:#005CC5;">length</span><span style="color:#D73A49;"> -</span><span style="color:#005CC5;"> 1</span><span style="color:#24292E;">; i </span><span style="color:#D73A49;">&gt;=</span><span style="color:#005CC5;"> 0</span><span style="color:#24292E;">; i</span><span style="color:#D73A49;">--</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#6A737D;">   // 如果有任意—个监控对象设有被解决或者解决失败则返回</span></span>
<span class="line"><span style="color:#D73A49;">   if</span><span style="color:#24292E;"> (dfd[i] </span><span style="color:#D73A49;">&amp;&amp;</span><span style="color:#D73A49;"> !</span><span style="color:#24292E;">dfd[i].resolved </span><span style="color:#D73A49;">||</span><span style="color:#24292E;"> dfd[i].rejected) {</span></span>
<span class="line"><span style="color:#D73A49;">    return</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">   }</span></span>
<span class="line"><span style="color:#6A737D;">   // 清除监控对象</span></span>
<span class="line"><span style="color:#24292E;">   dfd.</span><span style="color:#6F42C1;">splice</span><span style="color:#24292E;">(i, </span><span style="color:#005CC5;">1</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"><span style="color:#6A737D;">  // 执行解决成功回调方法</span></span>
<span class="line"><span style="color:#6F42C1;">  _exec</span><span style="color:#24292E;">(doneArr);</span></span>
<span class="line"><span style="color:#24292E;"> },</span></span>
<span class="line"><span style="color:#6A737D;"> // 解决失败</span></span>
<span class="line"><span style="color:#6F42C1;"> reject</span><span style="color:#24292E;">: </span><span style="color:#D73A49;">function</span><span style="color:#24292E;"> () {</span></span>
<span class="line"><span style="color:#6A737D;">  // 设置当前监控对象解决失败</span></span>
<span class="line"><span style="color:#005CC5;">  this</span><span style="color:#24292E;">.rejected </span><span style="color:#D73A49;">=</span><span style="color:#005CC5;"> true</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#6A737D;">  // 如果设有监控对象则取消执行</span></span>
<span class="line"><span style="color:#D73A49;">  if</span><span style="color:#24292E;"> (</span><span style="color:#D73A49;">!</span><span style="color:#24292E;">dfd.</span><span style="color:#005CC5;">length</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#D73A49;">   return</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#6A737D;">  // 清除所有监控对象</span></span>
<span class="line"><span style="color:#24292E;">  dfd.</span><span style="color:#6F42C1;">splice</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">0</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#6A737D;">  // 执行解决成功回调方法</span></span>
<span class="line"><span style="color:#6F42C1;">  _exec</span><span style="color:#24292E;">(failArr);</span></span>
<span class="line"><span style="color:#24292E;"> }</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"><span style="color:#6A737D;">// 回调执行方法</span></span>
<span class="line"><span style="color:#D73A49;">function</span><span style="color:#6F42C1;"> _exec</span><span style="color:#24292E;">(</span><span style="color:#E36209;">arr</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#D73A49;"> var</span><span style="color:#24292E;"> i </span><span style="color:#D73A49;">=</span><span style="color:#005CC5;"> 0</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  len </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> arr.</span><span style="color:#005CC5;">length</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#6A737D;"> // 遍历回调数组执行回调</span></span>
<span class="line"><span style="color:#D73A49;"> for</span><span style="color:#24292E;"> (; i </span><span style="color:#D73A49;">&lt;</span><span style="color:#24292E;"> len; i</span><span style="color:#D73A49;">++</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#D73A49;">  try</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#6A737D;">   // 执行回调函数</span></span>
<span class="line"><span style="color:#24292E;">   arr[i] </span><span style="color:#D73A49;">&amp;&amp;</span><span style="color:#24292E;"> arr[i]();</span></span>
<span class="line"><span style="color:#24292E;">  } </span><span style="color:#D73A49;">catch</span><span style="color:#24292E;"> (e) {}</span></span>
<span class="line"><span style="color:#24292E;"> }</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"><span style="color:#6A737D;">// 等待者对象还定义了三个共有接口方法when、done和fail,对于when方法是要监测己注册过的监控对象的异步逻辑（请求:ajax请求等:方法:setTimeout方法等）,所以when方法就要将监测对象放入监测对象容器中,当然还要判断监测对象是否存在、是否解决、是否是监控对象类的实例。最后还要返回该等待对象便于链式调用。</span></span>
<span class="line"><span style="color:#6A737D;">// 监控异步方法 参数:监控对象</span></span>
<span class="line"><span style="color:#24292E;">that.</span><span style="color:#6F42C1;">when</span><span style="color:#D73A49;"> =</span><span style="color:#D73A49;"> function</span><span style="color:#24292E;"> () {</span></span>
<span class="line"><span style="color:#6A737D;"> // 设置监控对象</span></span>
<span class="line"><span style="color:#24292E;"> dfd </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> slice.</span><span style="color:#6F42C1;">call</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">arguments</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#6A737D;"> // 获取监控对象数组长度</span></span>
<span class="line"><span style="color:#D73A49;"> var</span><span style="color:#24292E;"> i </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> dfd.</span><span style="color:#005CC5;">length</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#6A737D;"> // 向前遍历监控对象,最后—个监控对象的索引值为length-1</span></span>
<span class="line"><span style="color:#D73A49;"> for</span><span style="color:#24292E;"> (</span><span style="color:#D73A49;">--</span><span style="color:#24292E;">i; i </span><span style="color:#D73A49;">&gt;=</span><span style="color:#005CC5;"> 0</span><span style="color:#24292E;">; i</span><span style="color:#D73A49;">--</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#6A737D;">  // 如果不存在监控对象,或者监控对象己经解决,或者不是监控对象</span></span>
<span class="line"><span style="color:#D73A49;">  if</span><span style="color:#24292E;"> (</span><span style="color:#D73A49;">!</span><span style="color:#24292E;">dfd[i] </span><span style="color:#D73A49;">||</span><span style="color:#24292E;"> dfd[i].resolved </span><span style="color:#D73A49;">||</span><span style="color:#24292E;"> dfd[i].rejected </span><span style="color:#D73A49;">||</span><span style="color:#D73A49;"> !</span><span style="color:#24292E;">dfd[i] </span><span style="color:#D73A49;">instanceof</span><span style="color:#6F42C1;"> Primise</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#6A737D;">   // 清理内存 清除当前监控对象</span></span>
<span class="line"><span style="color:#24292E;">   dfd.</span><span style="color:#6F42C1;">splice</span><span style="color:#24292E;">(i, </span><span style="color:#005CC5;">1</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"><span style="color:#24292E;"> }</span></span>
<span class="line"><span style="color:#6A737D;"> // 返回等待者对象</span></span>
<span class="line"><span style="color:#D73A49;"> return</span><span style="color:#24292E;"> that;</span></span>
<span class="line"><span style="color:#24292E;">};</span></span>
<span class="line"><span style="color:#6A737D;">// 解决成功回调函数添加方法</span></span>
<span class="line"><span style="color:#24292E;">that.</span><span style="color:#6F42C1;">done</span><span style="color:#D73A49;"> =</span><span style="color:#D73A49;"> function</span><span style="color:#24292E;"> () {</span></span>
<span class="line"><span style="color:#6A737D;"> // 向成功回调函数容器中添加回调方法</span></span>
<span class="line"><span style="color:#24292E;"> doneArr </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> doneArr.</span><span style="color:#6F42C1;">concat</span><span style="color:#24292E;">(slice.</span><span style="color:#6F42C1;">call</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">arguments</span><span style="color:#24292E;">));</span></span>
<span class="line"><span style="color:#6A737D;"> // 返回等待者对象</span></span>
<span class="line"><span style="color:#D73A49;"> return</span><span style="color:#24292E;"> that;</span></span>
<span class="line"><span style="color:#24292E;">};</span></span>
<span class="line"><span style="color:#6A737D;">// 解决失败回调函数添加方法</span></span>
<span class="line"><span style="color:#24292E;">that.</span><span style="color:#6F42C1;">fail</span><span style="color:#D73A49;"> =</span><span style="color:#D73A49;"> function</span><span style="color:#24292E;"> () {</span></span>
<span class="line"><span style="color:#6A737D;"> // 向失败回调函数容器中添加回调方法</span></span>
<span class="line"><span style="color:#24292E;"> failArr </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> failArr.</span><span style="color:#6F42C1;">concat</span><span style="color:#24292E;">(slice.</span><span style="color:#6F42C1;">call</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">arguments</span><span style="color:#24292E;">));</span></span>
<span class="line"><span style="color:#6A737D;"> // 返回等待者对象</span></span>
<span class="line"><span style="color:#D73A49;"> return</span><span style="color:#24292E;"> that;</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"><span style="color:#D73A49;">var</span><span style="color:#24292E;"> waiter </span><span style="color:#D73A49;">=</span><span style="color:#D73A49;"> new</span><span style="color:#6F42C1;"> Waiter</span><span style="color:#24292E;">();</span></span>
<span class="line"><span style="color:#6A737D;">// 第—个彩蛋,5秒后停止</span></span>
<span class="line"><span style="color:#D73A49;">var</span><span style="color:#6F42C1;"> first</span><span style="color:#D73A49;"> =</span><span style="color:#D73A49;"> function</span><span style="color:#24292E;"> () {</span></span>
<span class="line"><span style="color:#6A737D;"> // 创建监听对象</span></span>
<span class="line"><span style="color:#D73A49;"> var</span><span style="color:#24292E;"> dtd </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> waiter.</span><span style="color:#6F42C1;">Deferred</span><span style="color:#24292E;">();</span></span>
<span class="line"><span style="color:#6F42C1;"> setTimeout</span><span style="color:#24292E;">(</span><span style="color:#D73A49;">function</span><span style="color:#24292E;"> () {</span></span>
<span class="line"><span style="color:#24292E;">  console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;first finish&#39;</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#6A737D;">  // 发布解决成功消息</span></span>
<span class="line"><span style="color:#24292E;">  dtd.</span><span style="color:#6F42C1;">resolve</span><span style="color:#24292E;">();</span></span>
<span class="line"><span style="color:#24292E;"> }, </span><span style="color:#005CC5;">5000</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#6A737D;"> // 返回监听对象</span></span>
<span class="line"><span style="color:#D73A49;"> return</span><span style="color:#24292E;"> dtd;</span></span>
<span class="line"><span style="color:#24292E;">}();</span></span>
<span class="line"><span style="color:#6A737D;">// 第二个彩蛋,10秒后停止</span></span>
<span class="line"><span style="color:#D73A49;">var</span><span style="color:#6F42C1;"> second</span><span style="color:#D73A49;"> =</span><span style="color:#D73A49;"> function</span><span style="color:#24292E;"> () {</span></span>
<span class="line"><span style="color:#6A737D;"> // 创建监听对象</span></span>
<span class="line"><span style="color:#D73A49;"> var</span><span style="color:#24292E;"> dtd </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> waiter.</span><span style="color:#6F42C1;">Deferred</span><span style="color:#24292E;">();</span></span>
<span class="line"><span style="color:#6F42C1;"> setTimeout</span><span style="color:#24292E;">(</span><span style="color:#D73A49;">function</span><span style="color:#24292E;"> () {</span></span>
<span class="line"><span style="color:#24292E;">  console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;second finish&#39;</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#6A737D;">  // 发布解决成功消息</span></span>
<span class="line"><span style="color:#24292E;">  dtd.</span><span style="color:#6F42C1;">resolve</span><span style="color:#24292E;">();</span></span>
<span class="line"><span style="color:#24292E;"> }, </span><span style="color:#005CC5;">10000</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#6A737D;"> // 返回监听对象</span></span>
<span class="line"><span style="color:#D73A49;"> return</span><span style="color:#24292E;"> dtd;</span></span>
<span class="line"><span style="color:#24292E;">}();</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">waiter</span></span>
<span class="line"><span style="color:#6A737D;"> // 监听两个彩蛋</span></span>
<span class="line"><span style="color:#24292E;"> .</span><span style="color:#6F42C1;">when</span><span style="color:#24292E;">(first, second)</span></span>
<span class="line"><span style="color:#6A737D;"> // 添加成功回调函数</span></span>
<span class="line"><span style="color:#24292E;"> .</span><span style="color:#6F42C1;">done</span><span style="color:#24292E;">(</span><span style="color:#D73A49;">function</span><span style="color:#24292E;"> () {</span></span>
<span class="line"><span style="color:#24292E;">  console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;success&#39;</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;"> }, </span><span style="color:#D73A49;">function</span><span style="color:#24292E;"> () {</span></span>
<span class="line"><span style="color:#24292E;">  console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;success again&#39;</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#24292E;"> })</span></span>
<span class="line"><span style="color:#6A737D;"> // 添加失败回调函数</span></span>
<span class="line"><span style="color:#24292E;"> .</span><span style="color:#6F42C1;">fail</span><span style="color:#24292E;">(</span><span style="color:#D73A49;">function</span><span style="color:#24292E;"> () {</span></span>
<span class="line"><span style="color:#24292E;">  console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;fail&#39;</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;"> });</span></span>
<span class="line"><span style="color:#6A737D;">// 输出结果</span></span>
<span class="line"><span style="color:#6A737D;">// first</span></span>
<span class="line"><span style="color:#6A737D;">// second</span></span>
<span class="line"><span style="color:#6A737D;">// success</span></span>
<span class="line"><span style="color:#6A737D;">// success again</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">var</span><span style="color:#6F42C1;"> first</span><span style="color:#D73A49;"> =</span><span style="color:#D73A49;"> function</span><span style="color:#24292E;"> () {</span></span>
<span class="line"><span style="color:#D73A49;"> var</span><span style="color:#24292E;"> dtd </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> waiter.</span><span style="color:#6F42C1;">Deferred</span><span style="color:#24292E;">();</span></span>
<span class="line"><span style="color:#6F42C1;"> setTimeout</span><span style="color:#24292E;">(</span><span style="color:#D73A49;">function</span><span style="color:#24292E;"> () {</span></span>
<span class="line"><span style="color:#24292E;">  console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;first finish&#39;</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#6A737D;">  // 发布解决失败消息</span></span>
<span class="line"><span style="color:#24292E;">  dtd.</span><span style="color:#6F42C1;">reject</span><span style="color:#24292E;">();</span></span>
<span class="line"><span style="color:#24292E;"> }, </span><span style="color:#005CC5;">5000</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#D73A49;"> return</span><span style="color:#24292E;"> dtd;</span></span>
<span class="line"><span style="color:#24292E;">}();</span></span>
<span class="line"><span style="color:#6A737D;">// 输出结果</span></span>
<span class="line"><span style="color:#6A737D;">// first</span></span>
<span class="line"><span style="color:#6A737D;">// fail</span></span>
<span class="line"><span style="color:#6A737D;">// second finish</span></span>
<span class="line"><span style="color:#6A737D;">// 封装get请求</span></span>
<span class="line"><span style="color:#D73A49;">var</span><span style="color:#6F42C1;"> ajaxGet</span><span style="color:#D73A49;"> =</span><span style="color:#D73A49;"> function</span><span style="color:#24292E;"> (</span><span style="color:#E36209;">url</span><span style="color:#24292E;">, </span><span style="color:#E36209;">success</span><span style="color:#24292E;">, </span><span style="color:#E36209;">fail</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#D73A49;"> var</span><span style="color:#24292E;"> xhr </span><span style="color:#D73A49;">=</span><span style="color:#D73A49;"> new</span><span style="color:#6F42C1;"> XMLHttpRequest</span><span style="color:#24292E;">();</span></span>
<span class="line"><span style="color:#6A737D;"> // 创建检测对象</span></span>
<span class="line"><span style="color:#D73A49;"> var</span><span style="color:#24292E;"> dtd </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> waiter.</span><span style="color:#6F42C1;">Deferred</span><span style="color:#24292E;">();</span></span>
<span class="line"><span style="color:#24292E;"> xhr.</span><span style="color:#6F42C1;">onload</span><span style="color:#D73A49;"> =</span><span style="color:#D73A49;"> function</span><span style="color:#24292E;"> (</span><span style="color:#E36209;">event</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#6A737D;">  // 请求成功</span></span>
<span class="line"><span style="color:#D73A49;">  if</span><span style="color:#24292E;"> ((xhr.status </span><span style="color:#D73A49;">&gt;=</span><span style="color:#005CC5;"> 200</span><span style="color:#D73A49;"> &amp;&amp;</span><span style="color:#24292E;"> xhr.status </span><span style="color:#D73A49;">&lt;</span><span style="color:#005CC5;"> 300</span><span style="color:#24292E;">) </span><span style="color:#D73A49;">||</span><span style="color:#24292E;"> xhr.status </span><span style="color:#D73A49;">==</span><span style="color:#005CC5;"> 304</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">   success </span><span style="color:#D73A49;">&amp;&amp;</span><span style="color:#6F42C1;"> success</span><span style="color:#24292E;">()</span></span>
<span class="line"><span style="color:#24292E;">   dtd.</span><span style="color:#6F42C1;">resolve</span><span style="color:#24292E;">();</span></span>
<span class="line"><span style="color:#6A737D;">   // 请求失败</span></span>
<span class="line"><span style="color:#24292E;">  } </span><span style="color:#D73A49;">else</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">   dtd.</span><span style="color:#6F42C1;">reject</span><span style="color:#24292E;">();</span></span>
<span class="line"><span style="color:#24292E;">   fail </span><span style="color:#D73A49;">&amp;&amp;</span><span style="color:#6F42C1;"> fail</span><span style="color:#24292E;">();</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"><span style="color:#24292E;"> };</span></span>
<span class="line"><span style="color:#24292E;"> xhr.</span><span style="color:#6F42C1;">open</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;get&quot;</span><span style="color:#24292E;">, url, </span><span style="color:#005CC5;">true</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;"> xhr.</span><span style="color:#6F42C1;">send</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">null</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">};</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 长轮询</span></span>
<span class="line"><span style="color:#24292E;">(</span><span style="color:#D73A49;">function</span><span style="color:#6F42C1;"> getAjaxData</span><span style="color:#24292E;">() {</span></span>
<span class="line"><span style="color:#6A737D;"> // 保存当前函数</span></span>
<span class="line"><span style="color:#D73A49;"> var</span><span style="color:#24292E;"> fn </span><span style="color:#D73A49;">=</span><span style="color:#005CC5;"> arguments</span><span style="color:#24292E;">.callee;</span></span>
<span class="line"><span style="color:#6F42C1;"> setTimeout</span><span style="color:#24292E;">(</span><span style="color:#D73A49;">function</span><span style="color:#24292E;"> () {</span></span>
<span class="line"><span style="color:#24292E;">  $.</span><span style="color:#6F42C1;">get</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;./test.php&#39;</span><span style="color:#24292E;">, </span><span style="color:#D73A49;">function</span><span style="color:#24292E;"> () {</span></span>
<span class="line"><span style="color:#24292E;">   console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;轮询—次&#39;</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#6A737D;">   // 再—次执行轮询</span></span>
<span class="line"><span style="color:#6F42C1;">   fn</span><span style="color:#24292E;">();</span></span>
<span class="line"><span style="color:#24292E;">  })</span></span>
<span class="line"><span style="color:#24292E;"> }, </span><span style="color:#005CC5;">5000</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#24292E;">})();</span></span></code></pre></div>`,7)]))}const D=n(o,[["render",e]]);export{A as __pageData,D as default};
