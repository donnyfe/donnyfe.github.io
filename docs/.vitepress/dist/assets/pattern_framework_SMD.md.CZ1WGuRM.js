import{_ as n,c as a,o as l,ag as p}from"./chunks/framework.DPDPlp3K.js";const D=JSON.parse('{"title":"同步模块模式 SMD(Synchronous Module Definition)","description":"","frontmatter":{},"headers":[],"relativePath":"pattern/framework/SMD.md","filePath":"pattern/framework/SMD.md"}'),o={name:"pattern/framework/SMD.md"};function e(c,s,t,r,y,i){return l(),a("div",null,s[0]||(s[0]=[p(`<h1 id="同步模块模式-smd-synchronous-module-definition" tabindex="-1">同步模块模式 SMD(Synchronous Module Definition) <a class="header-anchor" href="#同步模块模式-smd-synchronous-module-definition" aria-label="Permalink to &quot;同步模块模式 SMD(Synchronous Module Definition)&quot;">​</a></h1><p>模块: 将复杂的系统分解成高内聚、低耦合的模块,使系统开发变得可控、可维护、可拓展,提高模块的复用率。</p><p>同步模块模式——SMD（Synchronous Module Definition: 请求发出后,无论模块是否存在,立即执行后续的逻辑,实现模块开发中对模块的立即引用。</p><p>模块化开发即是以分而治之的思想,实现对复杂系统的分解,使系统随着其功能的增加而变得可控、可拓展、可维护。这就要求我们对模块细化。随着系统功能的增加模块的数量也随之增加。模块开发的成本随之减少,但是模块的接口数量却随之增加,接口的使用成本和开发与维护成本也随之增加,所以合理的模块分割显得尤为重要。</p><p>模块化开发是一种对系统的分解,但使用时又像是以组合模式对模块的组合。因此这也使得系统中的问题一般出现在局部,使得开发人员处理相应模块即可,而不用顾虑整个系统。因此相对于整个复杂的系统,对于局部模块的改造、优化甚至替换所需成本要小得多。组合的灵活性也使得我们可以实现更复杂、多样化的功能。</p><p>在 Web 前段,实现的模块化开发往往创建了大量的闭包,这会在内存中占用大量的资源得不到释放,这是一种资源的浪费,但相对于解决的问题来说,这种开销是值得的。</p><p>同步模块模式是模块化开发的一种最简单的形式,这种模式使得依赖的模块无论加载,无论有无,模块创建即执行,这就要求依赖的模块必然是创建过的。同步模块模式无法处理异步加载的模块,因此浏览器端异步加载文件的环境模式限制了同步模块模式的应用。不过对于服务器端如 nodejs 等,他们的文件都存储在本地,因此同步模块模式更适用。</p><h2 id="实例" tabindex="-1">实例 <a class="header-anchor" href="#实例" aria-label="Permalink to &quot;实例&quot;">​</a></h2><ul><li>模块管理器与创建方法</li></ul><h3 id="模块管理器与创建方法" tabindex="-1">模块管理器与创建方法 <a class="header-anchor" href="#模块管理器与创建方法" aria-label="Permalink to &quot;模块管理器与创建方法&quot;">​</a></h3><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-light vp-code" tabindex="0"><code><span class="line"><span style="color:#6A737D;">// 定义模块管理器单体对象</span></span>
<span class="line"><span style="color:#D73A49;">var</span><span style="color:#005CC5;"> F</span><span style="color:#D73A49;"> =</span><span style="color:#005CC5;"> F</span><span style="color:#D73A49;"> ||</span><span style="color:#24292E;"> {};</span></span>
<span class="line"><span style="color:#6A737D;">/**</span></span>
<span class="line"><span style="color:#6A737D;">  定义模块方法（ 理论上, 模块方法应放在闭包中实现, 可以隐蔽内部信息, 为了能够看明白, 因此忽略此步骤）</span></span>
<span class="line"><span style="color:#6A737D;">* </span><span style="color:#D73A49;">@param</span><span style="color:#24292E;"> str</span><span style="color:#6A737D;"> 模块路由</span></span>
<span class="line"><span style="color:#6A737D;">* </span><span style="color:#D73A49;">@param</span><span style="color:#24292E;"> fn</span><span style="color:#6A737D;"> 模块方法</span></span>
<span class="line"><span style="color:#6A737D;">*/</span></span>
<span class="line"><span style="color:#005CC5;">F</span><span style="color:#24292E;">.</span><span style="color:#6F42C1;">define</span><span style="color:#D73A49;"> =</span><span style="color:#D73A49;"> function</span><span style="color:#24292E;"> (</span><span style="color:#E36209;">str</span><span style="color:#24292E;">, </span><span style="color:#E36209;">fn</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#6A737D;">  // 解析模块路由</span></span>
<span class="line"><span style="color:#D73A49;">  var</span><span style="color:#24292E;"> parts </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> str.</span><span style="color:#6F42C1;">split</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;.&#39;</span><span style="color:#24292E;">),</span></span>
<span class="line"><span style="color:#6A737D;">    // old当前模块的祖父模块,parent当前模块父模块</span></span>
<span class="line"><span style="color:#6A737D;">    // 如果在闭包中,为了屏蔽对模块直接访问,建议将模块添加给闭包内部私有变量</span></span>
<span class="line"><span style="color:#24292E;">    old </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> parent </span><span style="color:#D73A49;">=</span><span style="color:#005CC5;"> this</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#6A737D;">    // i 模块层级,len 模块层级长度</span></span>
<span class="line"><span style="color:#24292E;">    i </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> len </span><span style="color:#D73A49;">=</span><span style="color:#005CC5;"> 0</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#6A737D;">  // 如果第—个模式是模块管理器单体对象,则移除</span></span>
<span class="line"><span style="color:#D73A49;">  if</span><span style="color:#24292E;"> (parts[</span><span style="color:#005CC5;">0</span><span style="color:#24292E;">] </span><span style="color:#D73A49;">===</span><span style="color:#032F62;"> &#39;F&#39;</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">    parts </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> parts.</span><span style="color:#6F42C1;">slice</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">1</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"><span style="color:#6A737D;">  // 屏蔽对define与module模块方法的重写</span></span>
<span class="line"><span style="color:#D73A49;">  if</span><span style="color:#24292E;"> (parts[</span><span style="color:#005CC5;">0</span><span style="color:#24292E;">] </span><span style="color:#D73A49;">===</span><span style="color:#032F62;"> &#39;define&#39;</span><span style="color:#D73A49;"> ||</span><span style="color:#24292E;"> parts[</span><span style="color:#005CC5;">0</span><span style="color:#24292E;">] </span><span style="color:#D73A49;">===</span><span style="color:#032F62;"> &#39;module&#39;</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#D73A49;">    return</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"><span style="color:#6A737D;">  // 遍历路由模块并定义每层模块</span></span>
<span class="line"><span style="color:#D73A49;">  for</span><span style="color:#24292E;"> (len </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> parts.</span><span style="color:#005CC5;">length</span><span style="color:#24292E;">; i </span><span style="color:#D73A49;">&lt;</span><span style="color:#24292E;"> len; i</span><span style="color:#D73A49;">++</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#6A737D;">    // 如果父模块中不存在当前模块</span></span>
<span class="line"><span style="color:#D73A49;">    if</span><span style="color:#24292E;"> (</span><span style="color:#D73A49;">typeof</span><span style="color:#24292E;"> parent[parts[i]] </span><span style="color:#D73A49;">===</span><span style="color:#032F62;"> &#39;undefined&#39;</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#6A737D;">      // 声明当前模块</span></span>
<span class="line"><span style="color:#24292E;">      parent[parts[i]] </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> {};</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#6A737D;">    // 缓存下—层级的祖父模块</span></span>
<span class="line"><span style="color:#24292E;">    old </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> parent;</span></span>
<span class="line"><span style="color:#6A737D;">    // 缓存下—层级父模块</span></span>
<span class="line"><span style="color:#24292E;">    parent </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> parent[parts[i]];</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"><span style="color:#6A737D;">  // 如果给定模块方法则定义该模块方法</span></span>
<span class="line"><span style="color:#D73A49;">  if</span><span style="color:#24292E;"> (fn) {</span></span>
<span class="line"><span style="color:#6A737D;">    // 此时i等于parts.length,故减—</span></span>
<span class="line"><span style="color:#24292E;">    old[parts[</span><span style="color:#D73A49;">--</span><span style="color:#24292E;">i]] </span><span style="color:#D73A49;">=</span><span style="color:#6F42C1;"> fn</span><span style="color:#24292E;">();</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"><span style="color:#6A737D;">  // 返回模块管理器单体对象</span></span>
<span class="line"><span style="color:#D73A49;">  return</span><span style="color:#005CC5;"> this</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"><span style="color:#6A737D;">// 创建模块</span></span>
<span class="line"><span style="color:#6A737D;">// F.string 模块</span></span>
<span class="line"><span style="color:#005CC5;">F</span><span style="color:#24292E;">.</span><span style="color:#6F42C1;">define</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;string&#39;</span><span style="color:#24292E;">, </span><span style="color:#D73A49;">function</span><span style="color:#24292E;"> () {</span></span>
<span class="line"><span style="color:#6A737D;">  // 接口方法</span></span>
<span class="line"><span style="color:#D73A49;">  return</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#6A737D;">    // 清楚字符串两边空白</span></span>
<span class="line"><span style="color:#6F42C1;">    trim</span><span style="color:#24292E;">: </span><span style="color:#D73A49;">function</span><span style="color:#24292E;"> (</span><span style="color:#E36209;">str</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#D73A49;">      return</span><span style="color:#24292E;"> str.</span><span style="color:#6F42C1;">replace</span><span style="color:#24292E;">(</span><span style="color:#032F62;">/</span><span style="color:#D73A49;">^</span><span style="color:#005CC5;">\\s</span><span style="color:#D73A49;">+|</span><span style="color:#005CC5;">\\s</span><span style="color:#D73A49;">+$</span><span style="color:#032F62;">/</span><span style="color:#D73A49;">g</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&#39;&#39;</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"><span style="color:#24292E;">});</span></span>
<span class="line"><span style="color:#005CC5;">F</span><span style="color:#24292E;">.string.</span><span style="color:#6F42C1;">trim</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;测试用例。&#39;</span><span style="color:#24292E;">) </span><span style="color:#6A737D;">//&quot;测试用例。&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#005CC5;">F</span><span style="color:#24292E;">.</span><span style="color:#6F42C1;">define</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;dom&#39;</span><span style="color:#24292E;">, </span><span style="color:#D73A49;">function</span><span style="color:#24292E;"> () {</span></span>
<span class="line"><span style="color:#6A737D;">  // 简化获取元素方法(重复获取可被替代,此设计用于演示模块添加)</span></span>
<span class="line"><span style="color:#D73A49;">  var</span><span style="color:#6F42C1;"> $</span><span style="color:#D73A49;"> =</span><span style="color:#D73A49;"> function</span><span style="color:#24292E;"> (</span><span style="color:#E36209;">id</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">    $.dom </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> document.</span><span style="color:#6F42C1;">getElementById</span><span style="color:#24292E;">(id);</span></span>
<span class="line"><span style="color:#6A737D;">    // 返回构造函数对象</span></span>
<span class="line"><span style="color:#D73A49;">    return</span><span style="color:#24292E;"> $;</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"><span style="color:#6A737D;">  // 获取或者设置元素内容</span></span>
<span class="line"><span style="color:#24292E;">  $.</span><span style="color:#6F42C1;">html</span><span style="color:#D73A49;"> =</span><span style="color:#D73A49;"> function</span><span style="color:#24292E;"> (</span><span style="color:#E36209;">html</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#6A737D;">    // 如果传参则设置元素内容,否则获取元素内容</span></span>
<span class="line"><span style="color:#D73A49;">    if</span><span style="color:#24292E;"> (html) {</span></span>
<span class="line"><span style="color:#005CC5;">      this</span><span style="color:#24292E;">.dom.innerHTML </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> html;</span></span>
<span class="line"><span style="color:#D73A49;">      return</span><span style="color:#005CC5;"> this</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">    } </span><span style="color:#D73A49;">else</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#D73A49;">      return</span><span style="color:#005CC5;"> this</span><span style="color:#24292E;">.dom.innerHTML;</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"><span style="color:#6A737D;">  // 返回构造函数</span></span>
<span class="line"><span style="color:#D73A49;">  return</span><span style="color:#24292E;"> $;</span></span>
<span class="line"><span style="color:#24292E;">});</span></span>
<span class="line"><span style="color:#6A737D;">// 测试用例（页面元素:&lt;div id=&quot;test&quot;&gt; test &lt;/div&gt;）</span></span>
<span class="line"><span style="color:#005CC5;">F</span><span style="color:#24292E;">.</span><span style="color:#6F42C1;">dom</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;test&#39;</span><span style="color:#24292E;">).</span><span style="color:#6F42C1;">html</span><span style="color:#24292E;">(); </span><span style="color:#6A737D;">//&quot;test&quot;</span></span>
<span class="line"><span style="color:#6A737D;">// 为dom模块添加addclass方法</span></span>
<span class="line"><span style="color:#6A737D;">// 注意,此种添加模式之所以可行,是因为将模块添加到F对象上,模块化开发中只允许上面的添加方式</span></span>
<span class="line"><span style="color:#005CC5;">F</span><span style="color:#24292E;">.</span><span style="color:#6F42C1;">define</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;dom.addclass&#39;</span><span style="color:#24292E;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#005CC5;">F</span><span style="color:#24292E;">.dom.</span><span style="color:#6F42C1;">addclass</span><span style="color:#D73A49;"> =</span><span style="color:#D73A49;"> function</span><span style="color:#24292E;"> (</span><span style="color:#E36209;">type</span><span style="color:#24292E;">, </span><span style="color:#E36209;">fn</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#D73A49;">  return</span><span style="color:#D73A49;"> function</span><span style="color:#24292E;"> (</span><span style="color:#E36209;">className</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#6A737D;">    // 如果不存在该类</span></span>
<span class="line"><span style="color:#D73A49;">    if</span><span style="color:#24292E;"> (</span><span style="color:#D73A49;">!</span><span style="color:#24292E;">～</span><span style="color:#005CC5;">this</span><span style="color:#24292E;">.dom.className.</span><span style="color:#6F42C1;">indexof</span><span style="color:#24292E;">(className)) {</span></span>
<span class="line"><span style="color:#6A737D;">      // 简单添加类</span></span>
<span class="line"><span style="color:#005CC5;">      this</span><span style="color:#24292E;">.dom.className </span><span style="color:#D73A49;">+=</span><span style="color:#032F62;"> &#39; &#39;</span><span style="color:#D73A49;"> +</span><span style="color:#24292E;"> className;</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"><span style="color:#24292E;">}();</span></span>
<span class="line"><span style="color:#6A737D;">// 测试用例</span></span>
<span class="line"><span style="color:#005CC5;">F</span><span style="color:#24292E;">.</span><span style="color:#6F42C1;">dom</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;test&#39;</span><span style="color:#24292E;">).</span><span style="color:#6F42C1;">addclass</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;test&#39;</span><span style="color:#24292E;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 模块调用方法</span></span>
<span class="line"><span style="color:#005CC5;">F</span><span style="color:#24292E;">.</span><span style="color:#6F42C1;">module</span><span style="color:#D73A49;"> =</span><span style="color:#D73A49;"> function</span><span style="color:#24292E;"> () {</span></span>
<span class="line"><span style="color:#6A737D;">  // 将参数转化为数组</span></span>
<span class="line"><span style="color:#D73A49;">  var</span><span style="color:#24292E;"> args </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> [].slice.</span><span style="color:#6F42C1;">call</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">arguments</span><span style="color:#24292E;">),</span></span>
<span class="line"><span style="color:#6A737D;">    // 获取回调执行函数</span></span>
<span class="line"><span style="color:#24292E;">    fn </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> args.</span><span style="color:#6F42C1;">pop</span><span style="color:#24292E;">(),</span></span>
<span class="line"><span style="color:#6A737D;">    // 获取依赖模块,如果args[0]是数组,则依赖模块为args[0]。否则依赖模块为arg</span></span>
<span class="line"><span style="color:#24292E;">    parts </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> args[</span><span style="color:#005CC5;">0</span><span style="color:#24292E;">] </span><span style="color:#D73A49;">&amp;&amp;</span><span style="color:#24292E;"> args[</span><span style="color:#005CC5;">0</span><span style="color:#24292E;">] </span><span style="color:#D73A49;">instanceof</span><span style="color:#6F42C1;"> Array</span><span style="color:#D73A49;"> ?</span><span style="color:#24292E;"> args[</span><span style="color:#005CC5;">0</span><span style="color:#24292E;">] </span><span style="color:#D73A49;">:</span><span style="color:#24292E;"> args,</span></span>
<span class="line"><span style="color:#6A737D;">    // 依赖模块列表</span></span>
<span class="line"><span style="color:#24292E;">    modules </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> [],</span></span>
<span class="line"><span style="color:#6A737D;">    // 模块路由</span></span>
<span class="line"><span style="color:#24292E;">    modIDs </span><span style="color:#D73A49;">=</span><span style="color:#032F62;"> &#39;&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#6A737D;">    // 依赖模块索引</span></span>
<span class="line"><span style="color:#24292E;">    i </span><span style="color:#D73A49;">=</span><span style="color:#005CC5;"> 0</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#6A737D;">    // 依赖模块长度</span></span>
<span class="line"><span style="color:#24292E;">    ilen </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> parts.</span><span style="color:#005CC5;">length</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#6A737D;">    // 父模块,模块路由层级索引,模块路由层级长度</span></span>
<span class="line"><span style="color:#24292E;">    parent, j, jlen;</span></span>
<span class="line"><span style="color:#6A737D;">  // 遍历依赖模块</span></span>
<span class="line"><span style="color:#D73A49;">  while</span><span style="color:#24292E;"> (i </span><span style="color:#D73A49;">&lt;</span><span style="color:#24292E;"> ilen) {</span></span>
<span class="line"><span style="color:#6A737D;">    // 如果是模块路由</span></span>
<span class="line"><span style="color:#D73A49;">    if</span><span style="color:#24292E;"> (</span><span style="color:#D73A49;">typeof</span><span style="color:#24292E;"> parts[i] </span><span style="color:#D73A49;">===</span><span style="color:#032F62;"> &#39;string&#39;</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#6A737D;">      // 设置当前模块父对象（F）</span></span>
<span class="line"><span style="color:#24292E;">      parent </span><span style="color:#D73A49;">=</span><span style="color:#005CC5;"> this</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#6A737D;">      // 解析模块路由,并屏蔽掉模块父对象</span></span>
<span class="line"><span style="color:#24292E;">      modIDs </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> parts[i].</span><span style="color:#6F42C1;">replace</span><span style="color:#24292E;">(</span><span style="color:#032F62;">/</span><span style="color:#D73A49;">^</span><span style="color:#032F62;">F</span><span style="color:#22863A;font-weight:bold;">\\.</span><span style="color:#032F62;">/</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&#39;&#39;</span><span style="color:#24292E;">).</span><span style="color:#6F42C1;">split</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;.&#39;</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#6A737D;">      // 遍历模块路由层级</span></span>
<span class="line"><span style="color:#D73A49;">      for</span><span style="color:#24292E;"> (j </span><span style="color:#D73A49;">=</span><span style="color:#005CC5;"> 0</span><span style="color:#24292E;">, jlen </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> modIDs.</span><span style="color:#005CC5;">length</span><span style="color:#24292E;">; j </span><span style="color:#D73A49;">&lt;</span><span style="color:#24292E;"> jlen; j</span><span style="color:#D73A49;">++</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#6A737D;">        // 重置父模块</span></span>
<span class="line"><span style="color:#24292E;">        parent </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> parent[modIDs[j]] </span><span style="color:#D73A49;">||</span><span style="color:#005CC5;"> false</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">      }</span></span>
<span class="line"><span style="color:#6A737D;">      // 将模块添加到依赖模块列表中</span></span>
<span class="line"><span style="color:#24292E;">      modules.</span><span style="color:#6F42C1;">push</span><span style="color:#24292E;">(parent);</span></span>
<span class="line"><span style="color:#6A737D;">      // 如果是模块对象</span></span>
<span class="line"><span style="color:#24292E;">    } </span><span style="color:#D73A49;">else</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#6A737D;">      // 直接加入依赖模块列表中</span></span>
<span class="line"><span style="color:#24292E;">      modules.</span><span style="color:#6F42C1;">push</span><span style="color:#24292E;">(parts[i]);</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#6A737D;">    // 取下—个依赖模块</span></span>
<span class="line"><span style="color:#24292E;">    i</span><span style="color:#D73A49;">++</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"><span style="color:#6A737D;">  // 执行回调执行函数</span></span>
<span class="line"><span style="color:#24292E;">  fn.</span><span style="color:#6F42C1;">apply</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">null</span><span style="color:#24292E;">, modules);</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"><span style="color:#6A737D;">// 引用dom模块与document对象（注意,依赖模块对象通常为己创建的模块对象）</span></span>
<span class="line"><span style="color:#005CC5;">F</span><span style="color:#24292E;">.</span><span style="color:#6F42C1;">module</span><span style="color:#24292E;">([</span><span style="color:#032F62;">&#39;dom&#39;</span><span style="color:#24292E;">, document], </span><span style="color:#D73A49;">function</span><span style="color:#24292E;"> (</span><span style="color:#E36209;">dom</span><span style="color:#24292E;">, </span><span style="color:#E36209;">doc</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#6A737D;">  // 通过dom模块设置元素内容</span></span>
<span class="line"><span style="color:#6F42C1;">  dom</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;test&#39;</span><span style="color:#24292E;">).</span><span style="color:#6F42C1;">html</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;new add!&#39;</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#6A737D;">  // 通过document设置body元素背景色</span></span>
<span class="line"><span style="color:#24292E;">  doc.body.style.background </span><span style="color:#D73A49;">=</span><span style="color:#032F62;"> &#39;red&#39;</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">});</span></span>
<span class="line"><span style="color:#6A737D;">// 依赖引用dom模块,string.trim方法</span></span>
<span class="line"><span style="color:#005CC5;">F</span><span style="color:#24292E;">.</span><span style="color:#6F42C1;">module</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;dom&#39;</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&#39;string.trim&#39;</span><span style="color:#24292E;">, </span><span style="color:#D73A49;">function</span><span style="color:#24292E;"> (</span><span style="color:#E36209;">dom</span><span style="color:#24292E;">, </span><span style="color:#E36209;">trim</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#6A737D;">  // 测试元素 &lt;div id=&quot;test&quot;&gt; test &lt;/div&gt;</span></span>
<span class="line"><span style="color:#D73A49;">  var</span><span style="color:#24292E;"> html </span><span style="color:#D73A49;">=</span><span style="color:#6F42C1;"> dom</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;test&#39;</span><span style="color:#24292E;">).</span><span style="color:#6F42C1;">html</span><span style="color:#24292E;">(); </span><span style="color:#6A737D;">// 获取元素内容</span></span>
<span class="line"><span style="color:#D73A49;">  var</span><span style="color:#24292E;"> str </span><span style="color:#D73A49;">=</span><span style="color:#6F42C1;"> trim</span><span style="color:#24292E;">(html); </span><span style="color:#6A737D;">// 去除字符串两边空白符</span></span>
<span class="line"><span style="color:#24292E;">  console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;*&quot;</span><span style="color:#D73A49;"> +</span><span style="color:#24292E;"> html </span><span style="color:#D73A49;">+</span><span style="color:#032F62;"> &quot;*&quot;</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&quot;*&quot;</span><span style="color:#D73A49;"> +</span><span style="color:#24292E;"> str </span><span style="color:#D73A49;">+</span><span style="color:#032F62;"> &quot;*&quot;</span><span style="color:#24292E;">); </span><span style="color:#6A737D;">// *test* *test*</span></span>
<span class="line"><span style="color:#24292E;">});</span></span>
<span class="line"><span style="color:#6A737D;">/*</span></span>
<span class="line"><span style="color:#6A737D;">模块: 将复杂的系统分解成高内聚、低耦合的模块,使系统开发变得可控、可维护、可拓展,提高模块的复用率。</span></span>
<span class="line"><span style="color:#6A737D;">异步模块模式——AMD（Asynchronous Module Definition: 请求发出后,继续其他业务逻辑,知道模块加载完成执行后续的逻辑,实现模块开发中对模块加载完成后的引用。</span></span>
<span class="line"><span style="color:#6A737D;">浏览器环境不同于服务器环境,在浏览器中对文件的加载是异步的。因此要使用未加载文件中的某些模块方法时必然经历文件加载过程。因此对未加载文件中的模块引用,同步模块模式是无能为力的.</span></span>
<span class="line"><span style="color:#6A737D;">*/</span></span>
<span class="line"><span style="color:#6A737D;">// 加载脚本文件</span></span>
<span class="line"><span style="color:#D73A49;">var</span><span style="color:#6F42C1;"> loadscript</span><span style="color:#D73A49;"> =</span><span style="color:#D73A49;"> function</span><span style="color:#24292E;"> (</span><span style="color:#E36209;">src</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#D73A49;">  var</span><span style="color:#24292E;"> _script </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> document.</span><span style="color:#6F42C1;">createElement</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;script&#39;</span><span style="color:#24292E;">); </span><span style="color:#6A737D;">// 创建脚本元素</span></span>
<span class="line"><span style="color:#24292E;">  _script.type </span><span style="color:#D73A49;">=</span><span style="color:#032F62;"> &#39;text/Javascript&#39;</span><span style="color:#24292E;">; </span><span style="color:#6A737D;">// 设置类型</span></span>
<span class="line"><span style="color:#24292E;">  _script.src </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> src; </span><span style="color:#6A737D;">// 设置加载路径</span></span>
<span class="line"><span style="color:#24292E;">  document.getElementsByTagName[</span><span style="color:#032F62;">&#39;head&#39;</span><span style="color:#24292E;">](</span><span style="color:#005CC5;">0</span><span style="color:#24292E;">).</span><span style="color:#6F42C1;">appendchild</span><span style="color:#24292E;">(_script);</span></span>
<span class="line"><span style="color:#6A737D;">  // 将元素插入到页面中</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"><span style="color:#6A737D;">// 加载localstorage文件</span></span>
<span class="line"><span style="color:#6F42C1;">loadscript</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;localstorage.js&#39;</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#6A737D;">// 使用localstorage模块</span></span>
<span class="line"><span style="color:#005CC5;">F</span><span style="color:#24292E;">.</span><span style="color:#6F42C1;">module</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;localstorage&#39;</span><span style="color:#24292E;">, </span><span style="color:#D73A49;">function</span><span style="color:#24292E;"> (</span><span style="color:#E36209;">ls</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#6A737D;">  // do something</span></span>
<span class="line"><span style="color:#24292E;">});</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 首先要创建一个闭包,目的是封闭己创建的模块,防止外界对其直接访问,并在闭包中创建模块管理器F,并作为接口保存在全局作用域中。</span></span>
<span class="line"><span style="color:#6A737D;">// 向闭包中传入模块管理器对象F（～屏蔽压缩文件时,前面漏写;报错）</span></span>
<span class="line"><span style="color:#24292E;">～(</span><span style="color:#D73A49;">function</span><span style="color:#24292E;"> (</span><span style="color:#E36209;">F</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#6A737D;">  // 模块缓存器。存储己创建模块</span></span>
<span class="line"><span style="color:#D73A49;">  var</span><span style="color:#24292E;"> modulecache </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> {}</span></span>
<span class="line"><span style="color:#24292E;">})((</span><span style="color:#D73A49;">function</span><span style="color:#24292E;"> () {</span></span>
<span class="line"><span style="color:#6A737D;">  // 创建模块管理器对象F,并保存在全局作用域中</span></span>
<span class="line"><span style="color:#D73A49;">  return</span><span style="color:#24292E;"> window.</span><span style="color:#005CC5;">F</span><span style="color:#D73A49;"> =</span><span style="color:#24292E;"> {};</span></span>
<span class="line"><span style="color:#24292E;">})());</span></span>
<span class="line"><span style="color:#6A737D;">// 这里的module方法集模块创建方法于一身。在这个方法中要遍历所有依赖模块,并判断所有模块都存在才可执行回调函数,否则加载相应文件,直到文件加载完成才执行回调函数。</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">/**</span></span>
<span class="line"><span style="color:#6A737D;">* 创建或调用模块方法</span></span>
<span class="line"><span style="color:#6A737D;">* </span><span style="color:#D73A49;">@param</span><span style="color:#24292E;"> url</span><span style="color:#6A737D;"> 参数为模块url</span></span>
<span class="line"><span style="color:#6A737D;">* </span><span style="color:#D73A49;">@param</span><span style="color:#24292E;"> deps</span><span style="color:#6A737D;"> 参数为依赖模块</span></span>
<span class="line"><span style="color:#6A737D;">* </span><span style="color:#D73A49;">@param</span><span style="color:#24292E;"> callback</span><span style="color:#6A737D;"> 参数为模块主函数</span></span>
<span class="line"><span style="color:#6A737D;">*/</span></span>
<span class="line"><span style="color:#005CC5;">F</span><span style="color:#24292E;">.</span><span style="color:#6F42C1;">module</span><span style="color:#D73A49;"> =</span><span style="color:#D73A49;"> function</span><span style="color:#24292E;"> (</span><span style="color:#E36209;">url</span><span style="color:#24292E;">, </span><span style="color:#E36209;">modDeps</span><span style="color:#24292E;">, </span><span style="color:#E36209;">modcallback</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#6A737D;">  // 将参数转化为数组</span></span>
<span class="line"><span style="color:#D73A49;">  var</span><span style="color:#24292E;"> args </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> [].slice.</span><span style="color:#6F42C1;">call</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">arguments</span><span style="color:#24292E;">),</span></span>
<span class="line"><span style="color:#6A737D;">    // 获取模块构造函数（参数数组中最后—个参数成员）</span></span>
<span class="line"><span style="color:#24292E;">    callback </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> args.</span><span style="color:#6F42C1;">pop</span><span style="color:#24292E;">(),</span></span>
<span class="line"><span style="color:#6A737D;">    // 获取依赖模块（紧邻回调函数参数,且数据类型为数组）</span></span>
<span class="line"><span style="color:#24292E;">    deps </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> (args.</span><span style="color:#005CC5;">length</span><span style="color:#D73A49;"> &amp;&amp;</span><span style="color:#24292E;"> args[args.</span><span style="color:#005CC5;">length</span><span style="color:#D73A49;"> -</span><span style="color:#005CC5;"> 1</span><span style="color:#24292E;">] </span><span style="color:#D73A49;">instanceof</span><span style="color:#6F42C1;"> Array</span><span style="color:#24292E;">) </span><span style="color:#D73A49;">?</span><span style="color:#24292E;"> args.</span></span>
<span class="line"><span style="color:#6F42C1;">      pop</span><span style="color:#24292E;">() </span><span style="color:#D73A49;">:</span><span style="color:#24292E;"> [],</span></span>
<span class="line"><span style="color:#6A737D;">    // 该模块url（模块ID）</span></span>
<span class="line"><span style="color:#24292E;">    url </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> args.</span><span style="color:#005CC5;">length</span><span style="color:#D73A49;"> ?</span><span style="color:#24292E;"> args.</span><span style="color:#6F42C1;">pop</span><span style="color:#24292E;">() </span><span style="color:#D73A49;">:</span><span style="color:#005CC5;"> null</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#6A737D;">    // 依赖模块序列</span></span>
<span class="line"><span style="color:#24292E;">    params </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> [],</span></span>
<span class="line"><span style="color:#6A737D;">    // 未加载的依赖模块数量统计</span></span>
<span class="line"><span style="color:#24292E;">    depscount </span><span style="color:#D73A49;">=</span><span style="color:#005CC5;"> 0</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#6A737D;">    // 依赖模块序列中索引值</span></span>
<span class="line"><span style="color:#24292E;">    i </span><span style="color:#D73A49;">=</span><span style="color:#005CC5;"> 0</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#6A737D;">    // 依赖模块序列长度</span></span>
<span class="line"><span style="color:#24292E;">    len;</span></span>
<span class="line"><span style="color:#6A737D;">  // 获取依赖模块长度</span></span>
<span class="line"><span style="color:#D73A49;">  if</span><span style="color:#24292E;"> (len </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> deps.</span><span style="color:#005CC5;">length</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#6A737D;">    // 遍历依赖模块</span></span>
<span class="line"><span style="color:#D73A49;">    while</span><span style="color:#24292E;"> (i </span><span style="color:#D73A49;">&lt;</span><span style="color:#24292E;"> len) {</span></span>
<span class="line"><span style="color:#6A737D;">      // 闭包保存i</span></span>
<span class="line"><span style="color:#24292E;">      (</span><span style="color:#D73A49;">function</span><span style="color:#24292E;"> (</span><span style="color:#E36209;">i</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#6A737D;">        // 增加未加载依赖模块数量统计</span></span>
<span class="line"><span style="color:#24292E;">        depscount</span><span style="color:#D73A49;">++</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#6A737D;">        // 异步加载依赖模块</span></span>
<span class="line"><span style="color:#6F42C1;">        loadModule</span><span style="color:#24292E;">(deps[i], </span><span style="color:#D73A49;">function</span><span style="color:#24292E;"> (</span><span style="color:#E36209;">mod</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#6A737D;">          // 依赖模块序列中添加依赖模块接口引用</span></span>
<span class="line"><span style="color:#24292E;">          params[i] </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> mod;</span></span>
<span class="line"><span style="color:#6A737D;">          // 依赖模块加载完成,依赖模块数量统计减—</span></span>
<span class="line"><span style="color:#24292E;">          depscount</span><span style="color:#D73A49;">--</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#6A737D;">          // 如果依赖模块全部加载</span></span>
<span class="line"><span style="color:#D73A49;">          if</span><span style="color:#24292E;"> (depscount </span><span style="color:#D73A49;">===</span><span style="color:#005CC5;"> 0</span><span style="color:#24292E;">) { </span><span style="color:#6A737D;">// 在模块缓存器中矫正该模块,并执行构造函数</span></span>
<span class="line"><span style="color:#6F42C1;">            setModule</span><span style="color:#24292E;">(url, params, callback);</span></span>
<span class="line"><span style="color:#24292E;">          }</span></span>
<span class="line"><span style="color:#24292E;">        });</span></span>
<span class="line"><span style="color:#24292E;">      })(i);</span></span>
<span class="line"><span style="color:#6A737D;">      // 遍历下—依赖模块</span></span>
<span class="line"><span style="color:#24292E;">      i</span><span style="color:#D73A49;">++</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#6A737D;">    // 无依赖模块,直接执行回调函数</span></span>
<span class="line"><span style="color:#24292E;">  } </span><span style="color:#D73A49;">else</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#6A737D;">    // 在模块缓存器中矫正该模块,并执行构造函数</span></span>
<span class="line"><span style="color:#6F42C1;">    setModule</span><span style="color:#24292E;">(url, [], callback);</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"><span style="color:#D73A49;">var</span><span style="color:#24292E;"> modulecache </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> {},</span></span>
<span class="line"><span style="color:#6F42C1;">  setModule</span><span style="color:#D73A49;"> =</span><span style="color:#D73A49;"> function</span><span style="color:#24292E;"> (</span><span style="color:#E36209;">moduleName</span><span style="color:#24292E;">, </span><span style="color:#E36209;">params</span><span style="color:#24292E;">, </span><span style="color:#E36209;">callback</span><span style="color:#24292E;">) { },</span></span>
<span class="line"><span style="color:#6A737D;">  /**</span></span>
<span class="line"><span style="color:#6A737D;">  * 异步加载依赖模块所在文件</span></span>
<span class="line"><span style="color:#6A737D;">  * </span><span style="color:#D73A49;">@param</span><span style="color:#24292E;"> moduleName</span><span style="color:#6A737D;"> 模块路径（ id）</span></span>
<span class="line"><span style="color:#6A737D;">  * </span><span style="color:#D73A49;">@param</span><span style="color:#24292E;"> callback</span><span style="color:#6A737D;"> 模块加载完成回调函数</span></span>
<span class="line"><span style="color:#6A737D;">  */</span></span>
<span class="line"><span style="color:#6F42C1;">  loadModule</span><span style="color:#D73A49;"> =</span><span style="color:#D73A49;"> function</span><span style="color:#24292E;"> (</span><span style="color:#E36209;">moduleName</span><span style="color:#24292E;">, </span><span style="color:#E36209;">callback</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#6A737D;">    // 依赖模块</span></span>
<span class="line"><span style="color:#D73A49;">    var</span><span style="color:#24292E;"> _module;</span></span>
<span class="line"><span style="color:#6A737D;">    // 如果依赖模块被要求加载过</span></span>
<span class="line"><span style="color:#D73A49;">    if</span><span style="color:#24292E;"> (modulecache[moduleName]) {</span></span>
<span class="line"><span style="color:#6A737D;">      // 获取该模块信息</span></span>
<span class="line"><span style="color:#24292E;">      _module </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> modulecache[moduleName];</span></span>
<span class="line"><span style="color:#6A737D;">      // 如果模块加载完成</span></span>
<span class="line"><span style="color:#D73A49;">      if</span><span style="color:#24292E;"> (_module.status </span><span style="color:#D73A49;">===</span><span style="color:#032F62;"> &#39;loaded&#39;</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#6A737D;">        // 执行模块加载完成回调函数</span></span>
<span class="line"><span style="color:#6F42C1;">        setTimeout</span><span style="color:#24292E;">(</span><span style="color:#6F42C1;">callback</span><span style="color:#24292E;">(_module.exports), </span><span style="color:#005CC5;">0</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">      } </span><span style="color:#D73A49;">else</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#6A737D;">        // 缓存该模块所处文件加载完成回调函数</span></span>
<span class="line"><span style="color:#24292E;">        _module.onload.</span><span style="color:#6F42C1;">push</span><span style="color:#24292E;">(callback);</span></span>
<span class="line"><span style="color:#24292E;">      }</span></span>
<span class="line"><span style="color:#6A737D;">      // 模块第—次被依赖引用</span></span>
<span class="line"><span style="color:#24292E;">    } </span><span style="color:#D73A49;">else</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#6A737D;">      // 缓存该模块初始化信息</span></span>
<span class="line"><span style="color:#24292E;">      modulecache[moduleName] </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">        moduleName: moduleName, </span><span style="color:#6A737D;">// 模块Id</span></span>
<span class="line"><span style="color:#24292E;">        status: </span><span style="color:#032F62;">&#39;loading&#39;</span><span style="color:#24292E;">, </span><span style="color:#6A737D;">// 模块对应文件加载状态（默认加载中）</span></span>
<span class="line"><span style="color:#24292E;">        exports: </span><span style="color:#005CC5;">null</span><span style="color:#24292E;">, </span><span style="color:#6A737D;">//模块接口</span></span>
<span class="line"><span style="color:#24292E;">        onload: [callback] </span><span style="color:#6A737D;">// 模块对应文件加载完成回调函数缓冲器</span></span>
<span class="line"><span style="color:#24292E;">      };</span></span>
<span class="line"><span style="color:#6A737D;">      // 加载模块对应文件</span></span>
<span class="line"><span style="color:#6F42C1;">      loadscript</span><span style="color:#24292E;">(</span><span style="color:#6F42C1;">getUrl</span><span style="color:#24292E;">(moduleName));</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">  },</span></span>
<span class="line"><span style="color:#6A737D;">  // 获取文件路径</span></span>
<span class="line"><span style="color:#6F42C1;">  getUrl</span><span style="color:#D73A49;"> =</span><span style="color:#D73A49;"> function</span><span style="color:#24292E;"> (</span><span style="color:#E36209;">moduleName</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#6A737D;">    // 拼接完整的文件路径字符串,如&#39;lib/ajax&#39; =&gt; &#39;lib/ajax.js&#39;</span></span>
<span class="line"><span style="color:#D73A49;">    return</span><span style="color:#6F42C1;"> string</span><span style="color:#24292E;">(moduleName).</span><span style="color:#6F42C1;">replace</span><span style="color:#24292E;">(</span><span style="color:#032F62;">/</span><span style="color:#22863A;font-weight:bold;">\\.</span><span style="color:#032F62;">js</span><span style="color:#D73A49;">$</span><span style="color:#032F62;">/</span><span style="color:#D73A49;">g</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&#39;&#39;</span><span style="color:#24292E;">) </span><span style="color:#D73A49;">+</span><span style="color:#032F62;"> &#39;.js&#39;</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">  },</span></span>
<span class="line"><span style="color:#6A737D;">  // 加载脚本文件</span></span>
<span class="line"><span style="color:#6F42C1;">  loadscript</span><span style="color:#D73A49;"> =</span><span style="color:#D73A49;"> function</span><span style="color:#24292E;"> (</span><span style="color:#E36209;">src</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#6A737D;">    // 创建script元素</span></span>
<span class="line"><span style="color:#D73A49;">    var</span><span style="color:#24292E;"> _script </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> document.</span><span style="color:#6F42C1;">createElement</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;script&#39;</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">    _script.type </span><span style="color:#D73A49;">=</span><span style="color:#032F62;"> &#39;text/Javascript&#39;</span><span style="color:#24292E;">; </span><span style="color:#6A737D;">// 文件类型</span></span>
<span class="line"><span style="color:#24292E;">    _script.charset </span><span style="color:#D73A49;">=</span><span style="color:#032F62;"> &#39;UTF-8&#39;</span><span style="color:#24292E;">; </span><span style="color:#6A737D;">// 确认编码</span></span>
<span class="line"><span style="color:#24292E;">    _script.async </span><span style="color:#D73A49;">=</span><span style="color:#005CC5;"> true</span><span style="color:#24292E;">; </span><span style="color:#6A737D;">// 异步加载</span></span>
<span class="line"><span style="color:#24292E;">    _script.src </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> src; </span><span style="color:#6A737D;">// 文件路径</span></span>
<span class="line"><span style="color:#24292E;">    document.getElementsByTagName[</span><span style="color:#032F62;">&#39;head&#39;</span><span style="color:#24292E;">](</span><span style="color:#005CC5;">0</span><span style="color:#24292E;">).</span><span style="color:#6F42C1;">appendchild</span><span style="color:#24292E;">(_script); </span><span style="color:#6A737D;">// 插入页面中</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"><span style="color:#6A737D;">/**</span></span>
<span class="line"><span style="color:#6A737D;">* 设置模块并执行模块构造函数</span></span>
<span class="line"><span style="color:#6A737D;">* </span><span style="color:#D73A49;">@param</span><span style="color:#24292E;"> moduleName</span><span style="color:#6A737D;"> 模块id名称</span></span>
<span class="line"><span style="color:#6A737D;">* </span><span style="color:#D73A49;">@param</span><span style="color:#24292E;"> params</span><span style="color:#6A737D;"> 依赖模块</span></span>
<span class="line"><span style="color:#6A737D;">* </span><span style="color:#D73A49;">@param</span><span style="color:#24292E;"> callback</span><span style="color:#6A737D;"> 模块构造函数</span></span>
<span class="line"><span style="color:#6A737D;">*/</span></span>
<span class="line"><span style="color:#6F42C1;">setModule</span><span style="color:#D73A49;"> =</span><span style="color:#D73A49;"> function</span><span style="color:#24292E;"> (</span><span style="color:#E36209;">moduleName</span><span style="color:#24292E;">, </span><span style="color:#E36209;">params</span><span style="color:#24292E;">, </span><span style="color:#E36209;">callback</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#6A737D;">  // 模块容器,模块文件加载完成回调函数</span></span>
<span class="line"><span style="color:#D73A49;">  var</span><span style="color:#24292E;"> _module, fn;</span></span>
<span class="line"><span style="color:#6A737D;">  // 如果模块被调用过</span></span>
<span class="line"><span style="color:#D73A49;">  if</span><span style="color:#24292E;"> (modulecache[moduleName]) {</span></span>
<span class="line"><span style="color:#6A737D;">    // 获取模块</span></span>
<span class="line"><span style="color:#24292E;">    _module </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> modulecache[moduleName];</span></span>
<span class="line"><span style="color:#6A737D;">    // 设置模块己经加载完成</span></span>
<span class="line"><span style="color:#24292E;">    _module.status </span><span style="color:#D73A49;">=</span><span style="color:#032F62;"> &#39;loaded&#39;</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#6A737D;">    // 矫正模块接口</span></span>
<span class="line"><span style="color:#24292E;">    _module.exports </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> callback </span><span style="color:#D73A49;">?</span><span style="color:#24292E;"> callback.</span><span style="color:#6F42C1;">apply</span><span style="color:#24292E;">(_module, params) </span><span style="color:#D73A49;">:</span><span style="color:#005CC5;"> null</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#6A737D;">    // 执行模块文件加载完成回调函数</span></span>
<span class="line"><span style="color:#D73A49;">    while</span><span style="color:#24292E;"> (fn </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> _module.onload.</span><span style="color:#6F42C1;">shift</span><span style="color:#24292E;">()) {</span></span>
<span class="line"><span style="color:#6F42C1;">      fn</span><span style="color:#24292E;">(_module.exports);</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">  } </span><span style="color:#D73A49;">else</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#6A737D;">    // 模块不存在（匿名模块）,则直接执行构造函数</span></span>
<span class="line"><span style="color:#24292E;">    callback </span><span style="color:#D73A49;">&amp;&amp;</span><span style="color:#24292E;"> callback.</span><span style="color:#6F42C1;">apply</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">null</span><span style="color:#24292E;">, params);</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"><span style="color:#005CC5;">F</span><span style="color:#24292E;">.</span><span style="color:#6F42C1;">module</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;lib/dom&#39;</span><span style="color:#24292E;">, </span><span style="color:#D73A49;">function</span><span style="color:#24292E;"> () {</span></span>
<span class="line"><span style="color:#D73A49;">  return</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#6A737D;">    // 获取元素方法</span></span>
<span class="line"><span style="color:#6F42C1;">    g</span><span style="color:#24292E;">: </span><span style="color:#D73A49;">function</span><span style="color:#24292E;"> (</span><span style="color:#E36209;">id</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#D73A49;">      return</span><span style="color:#24292E;"> document.</span><span style="color:#6F42C1;">getElementById</span><span style="color:#24292E;">(id);</span></span>
<span class="line"><span style="color:#24292E;">    },</span></span>
<span class="line"><span style="color:#6A737D;">    // 获取或者设置元素内容方法</span></span>
<span class="line"><span style="color:#6F42C1;">    html</span><span style="color:#24292E;">: </span><span style="color:#D73A49;">function</span><span style="color:#24292E;"> (</span><span style="color:#E36209;">id</span><span style="color:#24292E;">, </span><span style="color:#E36209;">html</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#D73A49;">      if</span><span style="color:#24292E;"> (html)</span></span>
<span class="line"><span style="color:#005CC5;">        this</span><span style="color:#24292E;">.</span><span style="color:#6F42C1;">g</span><span style="color:#24292E;">(id).innerHTML </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> html;</span></span>
<span class="line"><span style="color:#D73A49;">      else</span></span>
<span class="line"><span style="color:#D73A49;">        return</span><span style="color:#005CC5;"> this</span><span style="color:#24292E;">.</span><span style="color:#6F42C1;">g</span><span style="color:#24292E;">(id).innerHTML;</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"><span style="color:#24292E;">});</span></span>
<span class="line"><span style="color:#005CC5;">F</span><span style="color:#24292E;">.</span><span style="color:#6F42C1;">module</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;lib/event&#39;</span><span style="color:#24292E;">, [</span><span style="color:#032F62;">&#39;lib/dom&#39;</span><span style="color:#24292E;">], </span><span style="color:#D73A49;">function</span><span style="color:#24292E;"> (</span><span style="color:#E36209;">dom</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#D73A49;">  var</span><span style="color:#24292E;"> events </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#6A737D;">    // 绑定事件</span></span>
<span class="line"><span style="color:#6F42C1;">    on</span><span style="color:#24292E;">: </span><span style="color:#D73A49;">function</span><span style="color:#24292E;"> (</span><span style="color:#E36209;">id</span><span style="color:#24292E;">, </span><span style="color:#E36209;">type</span><span style="color:#24292E;">, </span><span style="color:#E36209;">fn</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">      dom.g[id](</span><span style="color:#032F62;">&#39;on&#39;</span><span style="color:#D73A49;"> +</span><span style="color:#24292E;"> type) </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> fn;</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"><span style="color:#D73A49;">  return</span><span style="color:#24292E;"> events;</span></span>
<span class="line"><span style="color:#24292E;">});</span></span>
<span class="line"><span style="color:#6A737D;">//index.html页面中</span></span>
<span class="line"><span style="color:#005CC5;">F</span><span style="color:#24292E;">.</span><span style="color:#6F42C1;">module</span><span style="color:#24292E;">([</span><span style="color:#032F62;">&#39;lib/event&#39;</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&#39;lib/dom&#39;</span><span style="color:#24292E;">], </span><span style="color:#D73A49;">function</span><span style="color:#24292E;"> (</span><span style="color:#E36209;">events</span><span style="color:#24292E;">, </span><span style="color:#E36209;">dom</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">  events.</span><span style="color:#6F42C1;">on</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;demo&#39;</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&#39;click&#39;</span><span style="color:#24292E;">, </span><span style="color:#D73A49;">function</span><span style="color:#24292E;"> () {</span></span>
<span class="line"><span style="color:#24292E;">    dom.</span><span style="color:#6F42C1;">html</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;demo&#39;</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&#39;success&#39;</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">  })</span></span>
<span class="line"><span style="color:#24292E;">});</span></span></code></pre></div>`,11)]))}const A=n(o,[["render",e]]);export{D as __pageData,A as default};
