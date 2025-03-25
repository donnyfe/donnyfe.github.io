import{_ as n,c as a,o as l,ag as p}from"./chunks/framework.DPDPlp3K.js";const A=JSON.parse('{"title":"迭代器模式 Iterator","description":"","frontmatter":{},"headers":[],"relativePath":"pattern/behavior/迭代器模式Iterator.md","filePath":"pattern/behavior/迭代器模式Iterator.md"}'),o={name:"pattern/behavior/迭代器模式Iterator.md"};function e(c,s,t,r,y,i){return l(),a("div",null,s[0]||(s[0]=[p(`<h1 id="迭代器模式-iterator" tabindex="-1">迭代器模式 Iterator <a class="header-anchor" href="#迭代器模式-iterator" aria-label="Permalink to &quot;迭代器模式 Iterator&quot;">​</a></h1><p>使用迭代器可以顺序地访问一个聚合对象中的每一个元素。</p><p>在实际开发中，迭代器极大简化了代码中的循环语句，使代码结构清晰紧凑，然而这些简化了的循环语句实质上隐形地移到了迭代器中。当然用迭代器去处理一个对象时，我们只需提供处理的方法，而不必去关心对象的内部结构，这也解决了对象的使用者与对象内部结构之间的耦合。当然迭代器的存在也提供了操作对象的一个统一接口。</p><h2 id="实例" tabindex="-1">实例 <a class="header-anchor" href="#实例" aria-label="Permalink to &quot;实例&quot;">​</a></h2><ul><li>数组迭代器</li><li>对象迭代器</li><li>对象迭代取值器</li><li>对象迭代赋值器</li></ul><h3 id="数组迭代器" tabindex="-1">数组迭代器 <a class="header-anchor" href="#数组迭代器" aria-label="Permalink to &quot;数组迭代器&quot;">​</a></h3><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-light vp-code" tabindex="0"><code><span class="line"><span style="color:#6A737D;">// 数组迭代器</span></span>
<span class="line"><span style="color:#D73A49;">let</span><span style="color:#6F42C1;"> eachArray</span><span style="color:#D73A49;"> =</span><span style="color:#D73A49;"> function</span><span style="color:#24292E;"> (</span><span style="color:#E36209;">arr</span><span style="color:#24292E;">, </span><span style="color:#E36209;">fn</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#D73A49;"> var</span><span style="color:#24292E;"> i </span><span style="color:#D73A49;">=</span><span style="color:#005CC5;"> 0</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  len </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> arr.</span><span style="color:#005CC5;">length</span><span style="color:#D73A49;"> -</span><span style="color:#005CC5;"> 1</span></span>
<span class="line"><span style="color:#D73A49;"> for</span><span style="color:#24292E;"> (; i </span><span style="color:#D73A49;">&lt;=</span><span style="color:#24292E;"> len; i</span><span style="color:#D73A49;">++</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#D73A49;">  if</span><span style="color:#24292E;"> (fn.</span><span style="color:#6F42C1;">call</span><span style="color:#24292E;">(arr[i], arr[i], i, arr) </span><span style="color:#D73A49;">===</span><span style="color:#005CC5;"> false</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#D73A49;">   break</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"><span style="color:#24292E;"> }</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 创建—个数组</span></span>
<span class="line"><span style="color:#D73A49;">let</span><span style="color:#24292E;"> arr </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> [</span><span style="color:#005CC5;">1</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">2</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">3</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">4</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">5</span><span style="color:#24292E;">]</span></span>
<span class="line"><span style="color:#6F42C1;">eachArray</span><span style="color:#24292E;">(arr, </span><span style="color:#D73A49;">function</span><span style="color:#24292E;"> (</span><span style="color:#E36209;">item</span><span style="color:#24292E;">, </span><span style="color:#E36209;">idx</span><span style="color:#24292E;">, </span><span style="color:#E36209;">data</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;"> console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;eachArray: &#39;</span><span style="color:#24292E;">, item, idx, data)</span></span>
<span class="line"><span style="color:#24292E;">})</span></span></code></pre></div><h3 id="对象迭代器" tabindex="-1">对象迭代器 <a class="header-anchor" href="#对象迭代器" aria-label="Permalink to &quot;对象迭代器&quot;">​</a></h3><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-light vp-code" tabindex="0"><code><span class="line"><span style="color:#6A737D;">// 对象迭代器</span></span>
<span class="line"><span style="color:#D73A49;">let</span><span style="color:#6F42C1;"> eachObject</span><span style="color:#D73A49;"> =</span><span style="color:#D73A49;"> function</span><span style="color:#24292E;"> (</span><span style="color:#E36209;">obj</span><span style="color:#24292E;">, </span><span style="color:#E36209;">fn</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#D73A49;"> for</span><span style="color:#24292E;"> (</span><span style="color:#D73A49;">var</span><span style="color:#24292E;"> i </span><span style="color:#D73A49;">in</span><span style="color:#24292E;"> obj) {</span></span>
<span class="line"><span style="color:#D73A49;">  if</span><span style="color:#24292E;"> (fn.</span><span style="color:#6F42C1;">call</span><span style="color:#24292E;">(obj[i], i, obj[i], obj) </span><span style="color:#D73A49;">===</span><span style="color:#005CC5;"> false</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#D73A49;">   break</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"><span style="color:#24292E;"> }</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">var</span><span style="color:#24292E;"> obj </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;"> a: </span><span style="color:#005CC5;">1</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;"> b: </span><span style="color:#005CC5;">2</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;"> c: </span><span style="color:#005CC5;">3</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"><span style="color:#6F42C1;">eachObject</span><span style="color:#24292E;">(obj, </span><span style="color:#D73A49;">function</span><span style="color:#24292E;"> (</span><span style="color:#E36209;">key</span><span style="color:#24292E;">, </span><span style="color:#E36209;">value</span><span style="color:#24292E;">, </span><span style="color:#E36209;">obj</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;"> console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;eachObject: &#39;</span><span style="color:#24292E;">, key, value, obj)</span></span>
<span class="line"><span style="color:#24292E;">})</span></span></code></pre></div><h3 id="对象迭代取值器-赋值器" tabindex="-1">对象迭代取值器 / 赋值器 <a class="header-anchor" href="#对象迭代取值器-赋值器" aria-label="Permalink to &quot;对象迭代取值器 / 赋值器&quot;">​</a></h3><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-light vp-code" tabindex="0"><code><span class="line"><span style="color:#D73A49;">var</span><span style="color:#24292E;"> config </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#6A737D;"> // 所有用户共有</span></span>
<span class="line"><span style="color:#24292E;"> common: {},</span></span>
<span class="line"><span style="color:#6A737D;"> // 客户端数据</span></span>
<span class="line"><span style="color:#24292E;"> client: {</span></span>
<span class="line"><span style="color:#24292E;">  user: {</span></span>
<span class="line"><span style="color:#24292E;">   username: </span><span style="color:#032F62;">&#39;雨夜清河&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">   uid: </span><span style="color:#032F62;">&#39;123&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  },</span></span>
<span class="line"><span style="color:#24292E;"> },</span></span>
<span class="line"><span style="color:#6A737D;"> // 服务器端数据</span></span>
<span class="line"><span style="color:#24292E;"> server: {</span></span>
<span class="line"><span style="color:#24292E;">  lang: {},</span></span>
<span class="line"><span style="color:#24292E;"> },</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 对象迭代取值器</span></span>
<span class="line"><span style="color:#D73A49;">let</span><span style="color:#6F42C1;"> objectGetter</span><span style="color:#D73A49;"> =</span><span style="color:#D73A49;"> function</span><span style="color:#24292E;"> (</span><span style="color:#E36209;">obj</span><span style="color:#24292E;">, </span><span style="color:#E36209;">key</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#D73A49;"> if</span><span style="color:#24292E;"> (</span><span style="color:#D73A49;">!</span><span style="color:#24292E;">obj) </span><span style="color:#D73A49;">return</span><span style="color:#005CC5;"> undefined</span></span>
<span class="line"><span style="color:#D73A49;"> let</span><span style="color:#24292E;"> result </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> obj</span></span>
<span class="line"><span style="color:#6A737D;"> // 解析属性层次序列</span></span>
<span class="line"><span style="color:#D73A49;"> let</span><span style="color:#24292E;"> keys </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> key.</span><span style="color:#6F42C1;">split</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;.&#39;</span><span style="color:#24292E;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;"> for</span><span style="color:#24292E;"> (</span><span style="color:#D73A49;">let</span><span style="color:#24292E;"> i </span><span style="color:#D73A49;">=</span><span style="color:#005CC5;"> 0</span><span style="color:#24292E;">, len </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> keys.</span><span style="color:#005CC5;">length</span><span style="color:#24292E;">; i </span><span style="color:#D73A49;">&lt;</span><span style="color:#24292E;"> len; i</span><span style="color:#D73A49;">++</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#D73A49;">  let</span><span style="color:#24292E;"> k </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> keys[i]</span></span>
<span class="line"><span style="color:#6A737D;">  // 如果第i层属性存在对应的值则迭代该属性值,否则返回未定义</span></span>
<span class="line"><span style="color:#D73A49;">  if</span><span style="color:#24292E;"> (result[k] </span><span style="color:#D73A49;">!==</span><span style="color:#005CC5;"> undefined</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">   result </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> result[k]</span></span>
<span class="line"><span style="color:#24292E;">  } </span><span style="color:#D73A49;">else</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#D73A49;">   return</span><span style="color:#005CC5;"> undefined</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"><span style="color:#24292E;"> }</span></span>
<span class="line"><span style="color:#D73A49;"> return</span><span style="color:#24292E;"> result</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// console.log(&#39;获取用户名数据: &#39;, objectGetter(config, &#39;client.user&#39;))</span></span>
<span class="line"><span style="color:#6A737D;">// console.log(&#39;获取本地语言数据: &#39;, objectGetter(config, &#39;server.lang&#39;))</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 对象迭代赋值器</span></span>
<span class="line"><span style="color:#D73A49;">let</span><span style="color:#6F42C1;"> objectSetter</span><span style="color:#D73A49;"> =</span><span style="color:#D73A49;"> function</span><span style="color:#24292E;"> (</span><span style="color:#E36209;">obj</span><span style="color:#24292E;">, </span><span style="color:#E36209;">key</span><span style="color:#24292E;">, </span><span style="color:#E36209;">value</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#D73A49;"> if</span><span style="color:#24292E;"> (</span><span style="color:#D73A49;">!</span><span style="color:#24292E;">obj) </span><span style="color:#D73A49;">return</span><span style="color:#005CC5;"> false</span></span>
<span class="line"><span style="color:#D73A49;"> let</span><span style="color:#24292E;"> result </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> obj</span></span>
<span class="line"><span style="color:#D73A49;"> let</span><span style="color:#24292E;"> keys </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> key.</span><span style="color:#6F42C1;">split</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;.&#39;</span><span style="color:#24292E;">) </span><span style="color:#6A737D;">// 解析属性层次序列</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;"> for</span><span style="color:#24292E;"> (</span><span style="color:#D73A49;">let</span><span style="color:#24292E;"> i </span><span style="color:#D73A49;">=</span><span style="color:#005CC5;"> 0</span><span style="color:#24292E;">, len </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> keys.</span><span style="color:#005CC5;">length</span><span style="color:#D73A49;"> -</span><span style="color:#005CC5;"> 1</span><span style="color:#24292E;">; i </span><span style="color:#D73A49;">&lt;=</span><span style="color:#24292E;"> len; i</span><span style="color:#D73A49;">++</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#D73A49;">  let</span><span style="color:#24292E;"> k </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> keys[i]</span></span>
<span class="line"><span style="color:#6A737D;">  // 如果第i层属性对应的值不存在，则定义为对象</span></span>
<span class="line"><span style="color:#D73A49;">  if</span><span style="color:#24292E;"> (result[k] </span><span style="color:#D73A49;">===</span><span style="color:#005CC5;"> undefined</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">   result[k] </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> {}</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"><span style="color:#6A737D;">  // 如果第i层属性对应的值不是对象（object）的—个实例，则抛出错误</span></span>
<span class="line"><span style="color:#D73A49;">  if</span><span style="color:#24292E;"> (</span><span style="color:#D73A49;">!</span><span style="color:#24292E;">(result[k] </span><span style="color:#D73A49;">instanceof</span><span style="color:#6F42C1;"> Object</span><span style="color:#24292E;">)) {</span></span>
<span class="line"><span style="color:#D73A49;">   throw</span><span style="color:#D73A49;"> new</span><span style="color:#6F42C1;"> Error</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;obj.&#39;</span><span style="color:#D73A49;"> +</span><span style="color:#24292E;"> keys.</span><span style="color:#6F42C1;">splice</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">0</span><span style="color:#24292E;">, i </span><span style="color:#D73A49;">+</span><span style="color:#005CC5;"> 1</span><span style="color:#24292E;">).</span><span style="color:#6F42C1;">join</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;.&#39;</span><span style="color:#24292E;">) </span><span style="color:#D73A49;">+</span><span style="color:#032F62;"> &#39;is not object&#39;</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"><span style="color:#6A737D;">  // 迭代该层属性值</span></span>
<span class="line"><span style="color:#24292E;">  result </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> result[k]</span></span>
<span class="line"><span style="color:#24292E;">  result[k] </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> value</span></span>
<span class="line"><span style="color:#24292E;"> }</span></span>
<span class="line"><span style="color:#6A737D;"> // 返回设置成功的属性</span></span>
<span class="line"><span style="color:#D73A49;"> return</span><span style="color:#24292E;"> result</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// console.log(&#39;缓存添加体育新闻模块数据: &#39;, objectSetter(config, &#39;client.module.news.sports&#39;, &#39;on&#39;))</span></span></code></pre></div><h3 id="dom迭代器" tabindex="-1">DOM迭代器 <a class="header-anchor" href="#dom迭代器" aria-label="Permalink to &quot;DOM迭代器&quot;">​</a></h3><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-light vp-code" tabindex="0"><code><span class="line"><span style="color:#D73A49;">const</span><span style="color:#6F42C1;"> DomIterator</span><span style="color:#D73A49;"> =</span><span style="color:#D73A49;"> function</span><span style="color:#24292E;"> (</span><span style="color:#E36209;">tagName</span><span style="color:#24292E;">, </span><span style="color:#E36209;">containerId</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#6A737D;"> // 获取父容器，若container参数存在，并且可以获取该元素则获取，否则获取document</span></span>
<span class="line"><span style="color:#D73A49;"> let</span><span style="color:#24292E;"> container </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> (containerId </span><span style="color:#D73A49;">&amp;&amp;</span><span style="color:#24292E;"> document.</span><span style="color:#6F42C1;">getElementById</span><span style="color:#24292E;">(containerId)) </span><span style="color:#D73A49;">||</span><span style="color:#24292E;"> document,</span></span>
<span class="line"><span style="color:#6A737D;">  // 获取元素</span></span>
<span class="line"><span style="color:#24292E;">  items </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> container.</span><span style="color:#6F42C1;">getElementsByTagName</span><span style="color:#24292E;">(tagName),</span></span>
<span class="line"><span style="color:#6A737D;">  // 获取元素长度</span></span>
<span class="line"><span style="color:#24292E;">  length </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> items.</span><span style="color:#005CC5;">length</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#6A737D;">  //当前索引值，默认:0</span></span>
<span class="line"><span style="color:#24292E;">  index </span><span style="color:#D73A49;">=</span><span style="color:#005CC5;"> 0</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"> // 缓存源生数组splice方法</span></span>
<span class="line"><span style="color:#D73A49;"> let</span><span style="color:#24292E;"> splice </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> [].splice</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;"> return</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#6A737D;">  // 获取第—个元素</span></span>
<span class="line"><span style="color:#6F42C1;">  first</span><span style="color:#24292E;">: </span><span style="color:#D73A49;">function</span><span style="color:#24292E;"> () {</span></span>
<span class="line"><span style="color:#24292E;">   index </span><span style="color:#D73A49;">=</span><span style="color:#005CC5;"> 0</span><span style="color:#6A737D;"> // 校正当前索引</span></span>
<span class="line"><span style="color:#D73A49;">   return</span><span style="color:#24292E;"> items[index] </span><span style="color:#6A737D;">// 获取第—个元素</span></span>
<span class="line"><span style="color:#24292E;">  },</span></span>
<span class="line"><span style="color:#6A737D;">  // 获取最后—个元素</span></span>
<span class="line"><span style="color:#6F42C1;">  last</span><span style="color:#24292E;">: </span><span style="color:#D73A49;">function</span><span style="color:#24292E;"> () {</span></span>
<span class="line"><span style="color:#24292E;">   index </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> length </span><span style="color:#D73A49;">-</span><span style="color:#005CC5;"> 1</span><span style="color:#6A737D;"> // 校正当前索引</span></span>
<span class="line"><span style="color:#D73A49;">   return</span><span style="color:#24292E;"> items[index] </span><span style="color:#6A737D;">// 获取最后—个元素</span></span>
<span class="line"><span style="color:#24292E;">  },</span></span>
<span class="line"><span style="color:#6A737D;">  // 获取前—个元素</span></span>
<span class="line"><span style="color:#6F42C1;">  pre</span><span style="color:#24292E;">: </span><span style="color:#D73A49;">function</span><span style="color:#24292E;"> () {</span></span>
<span class="line"><span style="color:#D73A49;">   if</span><span style="color:#24292E;"> (</span><span style="color:#D73A49;">--</span><span style="color:#24292E;">index </span><span style="color:#D73A49;">&gt;</span><span style="color:#005CC5;"> 0</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#D73A49;">    return</span><span style="color:#24292E;"> items[index] </span><span style="color:#6A737D;">// 获取索引值对应的元素</span></span>
<span class="line"><span style="color:#24292E;">   } </span><span style="color:#D73A49;">else</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">    index </span><span style="color:#D73A49;">=</span><span style="color:#005CC5;"> 0</span><span style="color:#6A737D;"> // 索引值为0</span></span>
<span class="line"><span style="color:#D73A49;">    return</span><span style="color:#005CC5;"> null</span><span style="color:#6A737D;"> // 返回空</span></span>
<span class="line"><span style="color:#24292E;">   }</span></span>
<span class="line"><span style="color:#24292E;">  },</span></span>
<span class="line"><span style="color:#6A737D;">  // 获取下一个元素</span></span>
<span class="line"><span style="color:#6F42C1;">  next</span><span style="color:#24292E;">: </span><span style="color:#D73A49;">function</span><span style="color:#24292E;"> () {</span></span>
<span class="line"><span style="color:#D73A49;">   if</span><span style="color:#24292E;"> (</span><span style="color:#D73A49;">++</span><span style="color:#24292E;">index </span><span style="color:#D73A49;">&lt;</span><span style="color:#24292E;"> length) {</span></span>
<span class="line"><span style="color:#6A737D;">    // 如果索引值小于长度</span></span>
<span class="line"><span style="color:#D73A49;">    return</span><span style="color:#24292E;"> items[index] </span><span style="color:#6A737D;">// 获取索引值对应的元素</span></span>
<span class="line"><span style="color:#24292E;">   } </span><span style="color:#D73A49;">else</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">    index </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> length </span><span style="color:#D73A49;">-</span><span style="color:#005CC5;"> 1</span><span style="color:#6A737D;"> // 索引值为length - 1</span></span>
<span class="line"><span style="color:#D73A49;">    return</span><span style="color:#005CC5;"> null</span><span style="color:#6A737D;"> // 返回空</span></span>
<span class="line"><span style="color:#24292E;">   }</span></span>
<span class="line"><span style="color:#24292E;">  },</span></span>
<span class="line"><span style="color:#6A737D;">  // 获取某—个元素</span></span>
<span class="line"><span style="color:#6F42C1;">  get</span><span style="color:#24292E;">: </span><span style="color:#D73A49;">function</span><span style="color:#24292E;"> (</span><span style="color:#E36209;">num</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#6A737D;">   // 如果num大于等于0再正向获取，否则逆向获取</span></span>
<span class="line"><span style="color:#24292E;">   index </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> num </span><span style="color:#D73A49;">&gt;=</span><span style="color:#005CC5;"> 0</span><span style="color:#D73A49;"> ?</span><span style="color:#24292E;"> num </span><span style="color:#D73A49;">%</span><span style="color:#24292E;"> length </span><span style="color:#D73A49;">:</span><span style="color:#24292E;"> (num </span><span style="color:#D73A49;">%</span><span style="color:#24292E;"> length) </span><span style="color:#D73A49;">+</span><span style="color:#24292E;"> length</span></span>
<span class="line"><span style="color:#D73A49;">   return</span><span style="color:#24292E;"> items[index]</span></span>
<span class="line"><span style="color:#24292E;">  },</span></span>
<span class="line"><span style="color:#6A737D;">  // 对每—个元素执行某—个方法</span></span>
<span class="line"><span style="color:#6F42C1;">  dealEach</span><span style="color:#24292E;">: </span><span style="color:#D73A49;">function</span><span style="color:#24292E;"> (</span><span style="color:#E36209;">fn</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#6A737D;">   // 第二个参数开始为回调函数中参数</span></span>
<span class="line"><span style="color:#D73A49;">   var</span><span style="color:#24292E;"> args </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> splice.</span><span style="color:#6F42C1;">call</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">arguments</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">1</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#6A737D;">   // 遍历元素</span></span>
<span class="line"><span style="color:#D73A49;">   for</span><span style="color:#24292E;"> (</span><span style="color:#D73A49;">var</span><span style="color:#24292E;"> i </span><span style="color:#D73A49;">=</span><span style="color:#005CC5;"> 0</span><span style="color:#24292E;">; i </span><span style="color:#D73A49;">&lt;</span><span style="color:#24292E;"> length; i</span><span style="color:#D73A49;">++</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#6A737D;">    // 对元素执行回调函数</span></span>
<span class="line"><span style="color:#24292E;">    fn.</span><span style="color:#6F42C1;">apply</span><span style="color:#24292E;">(items[i], args)</span></span>
<span class="line"><span style="color:#24292E;">   }</span></span>
<span class="line"><span style="color:#24292E;">  },</span></span>
<span class="line"><span style="color:#6A737D;">  // 对某—个元素执行某—个方法</span></span>
<span class="line"><span style="color:#6F42C1;">  dealItem</span><span style="color:#24292E;">: </span><span style="color:#D73A49;">function</span><span style="color:#24292E;"> (</span><span style="color:#E36209;">num</span><span style="color:#24292E;">, </span><span style="color:#E36209;">fn</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#6A737D;">   // 对元素执行回调函数，注:1 第三个参数开始为回调函数中参数 2 通过 this.get 方法设置index索引值</span></span>
<span class="line"><span style="color:#24292E;">   fn.</span><span style="color:#6F42C1;">apply</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">this</span><span style="color:#24292E;">.</span><span style="color:#6F42C1;">get</span><span style="color:#24292E;">(num), splice.</span><span style="color:#6F42C1;">call</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">arguments</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">2</span><span style="color:#24292E;">))</span></span>
<span class="line"><span style="color:#24292E;">  },</span></span>
<span class="line"><span style="color:#6A737D;">  // 排他方式处理某—个元素</span></span>
<span class="line"><span style="color:#6F42C1;">  exclusive</span><span style="color:#24292E;">: </span><span style="color:#D73A49;">function</span><span style="color:#24292E;"> (</span><span style="color:#E36209;">num</span><span style="color:#24292E;">, </span><span style="color:#E36209;">allFn</span><span style="color:#24292E;">, </span><span style="color:#E36209;">numFn</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#6A737D;">   // 对所有元素执行回调函数</span></span>
<span class="line"><span style="color:#005CC5;">   this</span><span style="color:#24292E;">.</span><span style="color:#6F42C1;">dealEach</span><span style="color:#24292E;">(allFn)</span></span>
<span class="line"><span style="color:#6A737D;">   // 如果num类型为数组</span></span>
<span class="line"><span style="color:#D73A49;">   if</span><span style="color:#24292E;"> (Array.</span><span style="color:#6F42C1;">isArray</span><span style="color:#24292E;">(num)) {</span></span>
<span class="line"><span style="color:#D73A49;">    for</span><span style="color:#24292E;"> (</span><span style="color:#D73A49;">var</span><span style="color:#24292E;"> i </span><span style="color:#D73A49;">=</span><span style="color:#005CC5;"> 0</span><span style="color:#24292E;">, len </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> num.</span><span style="color:#005CC5;">length</span><span style="color:#24292E;">; i </span><span style="color:#D73A49;">&lt;</span><span style="color:#24292E;"> len; i</span><span style="color:#D73A49;">++</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#6A737D;">     // 分别处理数组中每—个元素</span></span>
<span class="line"><span style="color:#005CC5;">     this</span><span style="color:#24292E;">.</span><span style="color:#6F42C1;">dealItem</span><span style="color:#24292E;">(num[i], numFn)</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">   } </span><span style="color:#D73A49;">else</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#6A737D;">    // 处理第num个元素</span></span>
<span class="line"><span style="color:#005CC5;">    this</span><span style="color:#24292E;">.</span><span style="color:#6F42C1;">dealItem</span><span style="color:#24292E;">(num, numFn)</span></span>
<span class="line"><span style="color:#24292E;">   }</span></span>
<span class="line"><span style="color:#24292E;">  },</span></span>
<span class="line"><span style="color:#24292E;"> }</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 用例</span></span>
<span class="line"><span style="color:#6A737D;">/**</span></span>
<span class="line"><span style="color:#6A737D;"> * HTML：</span></span>
<span class="line"><span style="color:#6A737D;"> &lt;ul id=&quot;container&quot;&gt;</span></span>
<span class="line"><span style="color:#6A737D;">  &lt;li&gt;&lt;/li&gt;</span></span>
<span class="line"><span style="color:#6A737D;">  &lt;li&gt;&lt;/li&gt;</span></span>
<span class="line"><span style="color:#6A737D;">  &lt;li&gt;&lt;/li&gt;</span></span>
<span class="line"><span style="color:#6A737D;">  &lt;li&gt;&lt;/li&gt;</span></span>
<span class="line"><span style="color:#6A737D;">  &lt;li&gt;&lt;/li&gt;</span></span>
<span class="line"><span style="color:#6A737D;"> &lt;/ul&gt;</span></span>
<span class="line"><span style="color:#6A737D;"> */</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 迭代器</span></span>
<span class="line"><span style="color:#6A737D;">// DomIterator(&#39;li&#39;).dealEach(</span></span>
<span class="line"><span style="color:#6A737D;">//  function (text, color) {</span></span>
<span class="line"><span style="color:#6A737D;">//   this.innerHTML = text</span></span>
<span class="line"><span style="color:#6A737D;">//   this.style.background = color</span></span>
<span class="line"><span style="color:#6A737D;">//  },</span></span>
<span class="line"><span style="color:#6A737D;">//  &#39;背景变色&#39;,</span></span>
<span class="line"><span style="color:#6A737D;">//  &#39;#dddddd&#39;</span></span>
<span class="line"><span style="color:#6A737D;">// )</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// DomIterator(&#39;li&#39;).exclusive(</span></span>
<span class="line"><span style="color:#6A737D;">//  [0, 1],</span></span>
<span class="line"><span style="color:#6A737D;">//  function () {</span></span>
<span class="line"><span style="color:#6A737D;">//   this.innerHTML = &#39;被排除的&#39;</span></span>
<span class="line"><span style="color:#6A737D;">//   this.style.background = &#39;green&#39;</span></span>
<span class="line"><span style="color:#6A737D;">//  },</span></span>
<span class="line"><span style="color:#6A737D;">//  function () {</span></span>
<span class="line"><span style="color:#6A737D;">//   this.innerHTML = &#39;选中的&#39;</span></span>
<span class="line"><span style="color:#6A737D;">//   this.style.background = &#39;red&#39;</span></span>
<span class="line"><span style="color:#6A737D;">//  }</span></span>
<span class="line"><span style="color:#6A737D;">// )</span></span></code></pre></div>`,13)]))}const D=n(o,[["render",e]]);export{A as __pageData,D as default};
