import{_ as n,c as a,o as l,ag as p}from"./chunks/framework.DPDPlp3K.js";const C=JSON.parse('{"title":"链模式 Operate of Responsibility","description":"","frontmatter":{},"headers":[],"relativePath":"pattern/skill/链模式OperateOfResponsibility.md","filePath":"pattern/skill/链模式OperateOfResponsibility.md"}'),o={name:"pattern/skill/链模式OperateOfResponsibility.md"};function e(c,s,t,r,y,i){return l(),a("div",null,s[0]||(s[0]=[p(`<h1 id="链模式-operate-of-responsibility" tabindex="-1">链模式 Operate of Responsibility <a class="header-anchor" href="#链模式-operate-of-responsibility" aria-label="Permalink to &quot;链模式 Operate of Responsibility&quot;">​</a></h1><p>链模式（Operate of Responsibility: 通过在对象方法中将当前对象返回，实现对同一个对象多个方法的链式调用。从而简化对该对象的多个方法的多次调用时，对该对象的多次引用。</p><p>JavaScript 中的链模式的核心思想就是通过在对象中的每个方法调用执行完毕后返回当前对象 this 来实现的。由于链模式使得代码紧凑简洁而高效，在工作中己经得到很广泛的应用。</p><h2 id="实例" tabindex="-1">实例 <a class="header-anchor" href="#实例" aria-label="Permalink to &quot;实例&quot;">​</a></h2><ul><li>jQuery 设计</li></ul><h3 id="jquery-设计" tabindex="-1">jQuery 设计 <a class="header-anchor" href="#jquery-设计" aria-label="Permalink to &quot;jQuery 设计&quot;">​</a></h3><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-light vp-code" tabindex="0"><code><span class="line"><span style="color:#6A737D;">// demo</span></span>
<span class="line"><span style="color:#6F42C1;">A</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;div&#39;</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#24292E;">.</span><span style="color:#6F42C1;">css</span><span style="color:#24292E;">({</span></span>
<span class="line"><span style="color:#24292E;">  height: </span><span style="color:#032F62;">&#39;30px&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  border: </span><span style="color:#032F62;">&#39;1px solid #000&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#032F62;">  &#39;background-color&#39;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&#39;red&#39;</span></span>
<span class="line"><span style="color:#24292E;">})</span></span>
<span class="line"><span style="color:#24292E;">.</span><span style="color:#6F42C1;">attr</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;class&#39;</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&#39;demo&#39;</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#24292E;">.</span><span style="color:#6F42C1;">html</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;add demo text&#39;</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#24292E;">.</span><span style="color:#6F42C1;">on</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;click&#39;</span><span style="color:#24292E;">, </span><span style="color:#D73A49;">function</span><span style="color:#24292E;"> () {</span></span>
<span class="line"><span style="color:#24292E;">  console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;clicked&#39;</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">});</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 对象拓展</span></span>
<span class="line"><span style="color:#005CC5;">A</span><span style="color:#24292E;">.extend </span><span style="color:#D73A49;">=</span><span style="color:#005CC5;"> A</span><span style="color:#24292E;">.fn.</span><span style="color:#6F42C1;">extend</span><span style="color:#D73A49;"> =</span><span style="color:#D73A49;"> function</span><span style="color:#24292E;"> () {</span></span>
<span class="line"><span style="color:#6A737D;"> // 拓展对象从第二个参数算起</span></span>
<span class="line"><span style="color:#D73A49;"> var</span><span style="color:#24292E;"> i </span><span style="color:#D73A49;">=</span><span style="color:#005CC5;"> 1</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#6A737D;">  // 获取参数长度</span></span>
<span class="line"><span style="color:#24292E;">  len </span><span style="color:#D73A49;">=</span><span style="color:#005CC5;"> arguments</span><span style="color:#24292E;">.</span><span style="color:#005CC5;">length</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#6A737D;">  // 第—个参数为源对象</span></span>
<span class="line"><span style="color:#24292E;">  target </span><span style="color:#D73A49;">=</span><span style="color:#005CC5;"> arguments</span><span style="color:#24292E;">[</span><span style="color:#005CC5;">0</span><span style="color:#24292E;">],</span></span>
<span class="line"><span style="color:#6A737D;">  // 拓展对象中属性</span></span>
<span class="line"><span style="color:#24292E;">  j;</span></span>
<span class="line"><span style="color:#6A737D;"> // 如果只传—个参数</span></span>
<span class="line"><span style="color:#D73A49;"> if</span><span style="color:#24292E;"> (i </span><span style="color:#D73A49;">==</span><span style="color:#24292E;"> len) {</span></span>
<span class="line"><span style="color:#6A737D;">  // 源对象为当前对象</span></span>
<span class="line"><span style="color:#24292E;">  target </span><span style="color:#D73A49;">=</span><span style="color:#005CC5;"> this</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#6A737D;">  // i从0计数</span></span>
<span class="line"><span style="color:#24292E;">  i</span><span style="color:#D73A49;">--</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;"> }</span></span>
<span class="line"><span style="color:#6A737D;"> // 遍历参数中拓展对象</span></span>
<span class="line"><span style="color:#D73A49;"> for</span><span style="color:#24292E;"> (; i </span><span style="color:#D73A49;">&lt;</span><span style="color:#24292E;"> len; i</span><span style="color:#D73A49;">++</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#6A737D;">  // 遍历拓展对象中的属性</span></span>
<span class="line"><span style="color:#D73A49;">  for</span><span style="color:#24292E;"> (j </span><span style="color:#D73A49;">in</span><span style="color:#005CC5;"> arguments</span><span style="color:#24292E;">[i]) {</span></span>
<span class="line"><span style="color:#6A737D;">   // 拓展源对象</span></span>
<span class="line"><span style="color:#24292E;">   target[j] </span><span style="color:#D73A49;">=</span><span style="color:#005CC5;"> arguments</span><span style="color:#24292E;">[i][j];</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"><span style="color:#24292E;"> }</span></span>
<span class="line"><span style="color:#6A737D;"> // 返回源对象</span></span>
<span class="line"><span style="color:#D73A49;"> return</span><span style="color:#24292E;"> target;</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"><span style="color:#6A737D;">// 拓展—个对象</span></span>
<span class="line"><span style="color:#D73A49;">var</span><span style="color:#24292E;"> demo </span><span style="color:#D73A49;">=</span><span style="color:#005CC5;"> A</span><span style="color:#24292E;">.</span><span style="color:#6F42C1;">extend</span><span style="color:#24292E;">({</span></span>
<span class="line"><span style="color:#24292E;"> first: </span><span style="color:#005CC5;">1</span></span>
<span class="line"><span style="color:#24292E;">}, {</span></span>
<span class="line"><span style="color:#24292E;"> second: </span><span style="color:#005CC5;">2</span></span>
<span class="line"><span style="color:#24292E;">}, {</span></span>
<span class="line"><span style="color:#24292E;"> third: </span><span style="color:#005CC5;">3</span></span>
<span class="line"><span style="color:#24292E;">});</span></span>
<span class="line"><span style="color:#24292E;">console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(demo) </span><span style="color:#6A737D;">// {firs: 1, secon: 2, thir: 3}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 拓展A.fn方式—</span></span>
<span class="line"><span style="color:#005CC5;">A</span><span style="color:#24292E;">.</span><span style="color:#6F42C1;">extend</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">A</span><span style="color:#24292E;">.fn, {</span></span>
<span class="line"><span style="color:#24292E;"> version: </span><span style="color:#032F62;">&#39;1.0&#39;</span></span>
<span class="line"><span style="color:#24292E;">}); </span><span style="color:#6A737D;">// 1.0</span></span>
<span class="line"><span style="color:#24292E;">console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(</span><span style="color:#6F42C1;">A</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;demo&#39;</span><span style="color:#24292E;">).version);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 拓展A.fn方式二</span></span>
<span class="line"><span style="color:#005CC5;">A</span><span style="color:#24292E;">.fn.</span><span style="color:#6F42C1;">extend</span><span style="color:#24292E;">({</span></span>
<span class="line"><span style="color:#6F42C1;"> getVersio</span><span style="color:#24292E;">: </span><span style="color:#D73A49;">function</span><span style="color:#24292E;"> () {</span></span>
<span class="line"><span style="color:#D73A49;">  return</span><span style="color:#005CC5;"> this</span><span style="color:#24292E;">.version</span></span>
<span class="line"><span style="color:#24292E;"> }</span></span>
<span class="line"><span style="color:#24292E;">})</span></span>
<span class="line"><span style="color:#24292E;">console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(</span><span style="color:#6F42C1;">A</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;demo&#39;</span><span style="color:#24292E;">).</span><span style="color:#6F42C1;">getVersion</span><span style="color:#24292E;">()); </span><span style="color:#6A737D;">// 1.0</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 拓展A方式—</span></span>
<span class="line"><span style="color:#005CC5;">A</span><span style="color:#24292E;">.</span><span style="color:#6F42C1;">extend</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">A</span><span style="color:#24292E;">, {</span></span>
<span class="line"><span style="color:#24292E;"> author: </span><span style="color:#032F62;">&#39;张容铭&#39;</span></span>
<span class="line"><span style="color:#24292E;">});</span></span>
<span class="line"><span style="color:#24292E;">console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">A</span><span style="color:#24292E;">.author); </span><span style="color:#6A737D;">//张容铭</span></span>
<span class="line"><span style="color:#6A737D;">// 拓展A方式二</span></span>
<span class="line"><span style="color:#005CC5;">A</span><span style="color:#24292E;">.</span><span style="color:#6F42C1;">extend</span><span style="color:#24292E;">({</span></span>
<span class="line"><span style="color:#24292E;"> nickname: </span><span style="color:#032F62;">&#39;雨夜清河&#39;</span></span>
<span class="line"><span style="color:#24292E;">});</span></span>
<span class="line"><span style="color:#24292E;">console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">A</span><span style="color:#24292E;">.nickname); </span><span style="color:#6A737D;">//雨夜清河</span></span>
<span class="line"></span>
<span class="line"><span style="color:#005CC5;">A</span><span style="color:#24292E;">.fn.</span><span style="color:#6F42C1;">extend</span><span style="color:#24292E;">({</span></span>
<span class="line"><span style="color:#6A737D;"> // 添加事件</span></span>
<span class="line"><span style="color:#24292E;"> on: (</span><span style="color:#D73A49;">function</span><span style="color:#24292E;"> () {</span></span>
<span class="line"><span style="color:#6A737D;">  // 标准浏览器DoM2级事件</span></span>
<span class="line"><span style="color:#D73A49;">  if</span><span style="color:#24292E;"> (document.addEventListener) {</span></span>
<span class="line"><span style="color:#D73A49;">   return</span><span style="color:#D73A49;"> function</span><span style="color:#24292E;"> (</span><span style="color:#E36209;">type</span><span style="color:#24292E;">, </span><span style="color:#E36209;">fn</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#D73A49;">    var</span><span style="color:#24292E;"> i </span><span style="color:#D73A49;">=</span><span style="color:#005CC5;"> this</span><span style="color:#24292E;">.</span><span style="color:#005CC5;">length</span><span style="color:#D73A49;"> -</span><span style="color:#005CC5;"> 1</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#6A737D;">    // 遍历所有元素添加事件</span></span>
<span class="line"><span style="color:#D73A49;">    for</span><span style="color:#24292E;"> (; i </span><span style="color:#D73A49;">&gt;=</span><span style="color:#005CC5;"> 0</span><span style="color:#24292E;">; i</span><span style="color:#D73A49;">--</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#005CC5;">     this</span><span style="color:#24292E;">[i].</span><span style="color:#6F42C1;">addEventListener</span><span style="color:#24292E;">(type, fn, </span><span style="color:#005CC5;">false</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#6A737D;">    // 返回源对象</span></span>
<span class="line"><span style="color:#D73A49;">    return</span><span style="color:#005CC5;"> this</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">   }</span></span>
<span class="line"><span style="color:#6A737D;">   // IE浏览器DoM2级事件</span></span>
<span class="line"><span style="color:#24292E;">  } </span><span style="color:#D73A49;">else</span><span style="color:#D73A49;"> if</span><span style="color:#24292E;"> (document.attachEvent) {</span></span>
<span class="line"><span style="color:#D73A49;">   return</span><span style="color:#D73A49;"> function</span><span style="color:#24292E;"> (</span><span style="color:#E36209;">type</span><span style="color:#24292E;">, </span><span style="color:#E36209;">fn</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#D73A49;">    var</span><span style="color:#24292E;"> i </span><span style="color:#D73A49;">=</span><span style="color:#005CC5;"> this</span><span style="color:#24292E;">.</span><span style="color:#005CC5;">length</span><span style="color:#D73A49;"> -</span><span style="color:#005CC5;"> 1</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#D73A49;">    for</span><span style="color:#24292E;"> (; i </span><span style="color:#D73A49;">&gt;=</span><span style="color:#005CC5;"> 0</span><span style="color:#24292E;">; i</span><span style="color:#D73A49;">--</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#005CC5;">     this</span><span style="color:#24292E;">[i].</span><span style="color:#6F42C1;">addEvent</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;on&#39;</span><span style="color:#D73A49;"> +</span><span style="color:#24292E;"> type, fn);</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#D73A49;">    return</span><span style="color:#005CC5;"> this</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">   }</span></span>
<span class="line"><span style="color:#6A737D;">   // 不支持DoM2级事件浏览器添加事件</span></span>
<span class="line"><span style="color:#24292E;">  } </span><span style="color:#D73A49;">else</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#D73A49;">   return</span><span style="color:#D73A49;"> function</span><span style="color:#24292E;"> (</span><span style="color:#E36209;">type</span><span style="color:#24292E;">, </span><span style="color:#E36209;">fn</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#D73A49;">    var</span><span style="color:#24292E;"> i </span><span style="color:#D73A49;">=</span><span style="color:#005CC5;"> this</span><span style="color:#24292E;">.</span><span style="color:#005CC5;">length</span><span style="color:#D73A49;"> -</span><span style="color:#005CC5;"> 1</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#D73A49;">    for</span><span style="color:#24292E;"> (; i </span><span style="color:#D73A49;">&gt;=</span><span style="color:#005CC5;"> 0</span><span style="color:#24292E;">; i</span><span style="color:#D73A49;">--</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#005CC5;">     this</span><span style="color:#24292E;">[i][</span><span style="color:#032F62;">&#39;on&#39;</span><span style="color:#D73A49;"> +</span><span style="color:#24292E;"> type] </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> fn;</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#D73A49;">    return</span><span style="color:#005CC5;"> this</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">   }</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"><span style="color:#24292E;"> })()</span></span>
<span class="line"></span>
<span class="line"><span style="color:#005CC5;"> A</span><span style="color:#24292E;">.</span><span style="color:#6F42C1;">extend</span><span style="color:#24292E;">({</span></span>
<span class="line"><span style="color:#6A737D;">  // 将&#39;-&#39;分割线转化为驼峰式，如:&#39;border-color&#39; -&gt; &#39;bordercolor&#39;</span></span>
<span class="line"><span style="color:#6F42C1;">  camelcase</span><span style="color:#24292E;">: </span><span style="color:#D73A49;">function</span><span style="color:#24292E;"> (</span><span style="color:#E36209;">str</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#D73A49;">   return</span><span style="color:#24292E;"> str.</span><span style="color:#6F42C1;">replace</span><span style="color:#24292E;">(</span><span style="color:#032F62;">/</span><span style="color:#22863A;font-weight:bold;">\\-</span><span style="color:#032F62;">(</span><span style="color:#005CC5;">\\w</span><span style="color:#032F62;">)/</span><span style="color:#D73A49;">g</span><span style="color:#24292E;">, </span><span style="color:#D73A49;">function</span><span style="color:#24292E;"> (</span><span style="color:#E36209;">all</span><span style="color:#24292E;">, </span><span style="color:#E36209;">letter</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#D73A49;">    return</span><span style="color:#24292E;"> letter.</span><span style="color:#6F42C1;">toUppercase</span><span style="color:#24292E;">();</span></span>
<span class="line"><span style="color:#24292E;">   });</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"><span style="color:#24292E;"> });</span></span>
<span class="line"></span>
<span class="line"><span style="color:#005CC5;"> A</span><span style="color:#24292E;">.</span><span style="color:#6F42C1;">extend</span><span style="color:#24292E;">({</span></span>
<span class="line"><span style="color:#6A737D;">  // 设置css样式</span></span>
<span class="line"><span style="color:#6F42C1;">  css</span><span style="color:#24292E;">: </span><span style="color:#D73A49;">function</span><span style="color:#24292E;"> () {</span></span>
<span class="line"><span style="color:#D73A49;">   var</span><span style="color:#24292E;"> arg </span><span style="color:#D73A49;">=</span><span style="color:#005CC5;"> arguments</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    len </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> arg.</span><span style="color:#005CC5;">length</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#D73A49;">   if</span><span style="color:#24292E;"> (</span><span style="color:#005CC5;">this</span><span style="color:#24292E;">.</span><span style="color:#005CC5;">length</span><span style="color:#D73A49;"> &lt;</span><span style="color:#005CC5;"> 1</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#D73A49;">    return</span><span style="color:#005CC5;"> this</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">   }</span></span>
<span class="line"><span style="color:#6A737D;">   // 只有—个参数时</span></span>
<span class="line"><span style="color:#D73A49;">   if</span><span style="color:#24292E;"> (len </span><span style="color:#D73A49;">===</span><span style="color:#005CC5;"> 1</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#6A737D;">    // 如果为字符串则为获取第—个元素css样式</span></span>
<span class="line"><span style="color:#D73A49;">    if</span><span style="color:#24292E;"> (</span><span style="color:#D73A49;">typeof</span><span style="color:#24292E;"> arg[</span><span style="color:#005CC5;">0</span><span style="color:#24292E;">] </span><span style="color:#D73A49;">===</span><span style="color:#032F62;"> &#39;string&#39;</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#6A737D;">     // IE</span></span>
<span class="line"><span style="color:#D73A49;">     if</span><span style="color:#24292E;"> (</span><span style="color:#005CC5;">this</span><span style="color:#24292E;">[</span><span style="color:#005CC5;">0</span><span style="color:#24292E;">].currentstyle) {</span></span>
<span class="line"><span style="color:#D73A49;">      return</span><span style="color:#005CC5;"> this</span><span style="color:#24292E;">[</span><span style="color:#005CC5;">0</span><span style="color:#24292E;">].currentstyle[name];</span></span>
<span class="line"><span style="color:#24292E;">     } </span><span style="color:#D73A49;">else</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#D73A49;">      return</span><span style="color:#6F42C1;"> getcomputedstyle</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">this</span><span style="color:#24292E;">[</span><span style="color:#005CC5;">0</span><span style="color:#24292E;">], </span><span style="color:#005CC5;">false</span><span style="color:#24292E;">)[name];</span></span>
<span class="line"><span style="color:#24292E;">     }</span></span>
<span class="line"><span style="color:#6A737D;">     // 为对象时则设置多个样式</span></span>
<span class="line"><span style="color:#24292E;">    } </span><span style="color:#D73A49;">else</span><span style="color:#D73A49;"> if</span><span style="color:#24292E;"> (</span><span style="color:#D73A49;">typeof</span><span style="color:#24292E;"> arg[</span><span style="color:#005CC5;">0</span><span style="color:#24292E;">] </span><span style="color:#D73A49;">===</span><span style="color:#032F62;"> &#39;object&#39;</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#D73A49;">     for</span><span style="color:#24292E;"> (</span><span style="color:#D73A49;">var</span><span style="color:#24292E;"> i </span><span style="color:#D73A49;">in</span><span style="color:#24292E;"> arg[</span><span style="color:#005CC5;">0</span><span style="color:#24292E;">]) { </span><span style="color:#6A737D;">// 遍历每个样式</span></span>
<span class="line"><span style="color:#D73A49;">      for</span><span style="color:#24292E;"> (</span><span style="color:#D73A49;">var</span><span style="color:#24292E;"> j </span><span style="color:#D73A49;">=</span><span style="color:#005CC5;"> this</span><span style="color:#24292E;">.</span><span style="color:#005CC5;">length</span><span style="color:#D73A49;"> -</span><span style="color:#005CC5;"> 1</span><span style="color:#24292E;">; j </span><span style="color:#D73A49;">&gt;=</span><span style="color:#005CC5;"> 0</span><span style="color:#24292E;">; j</span><span style="color:#D73A49;">--</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#6A737D;">       // 调用拓展方法camelcase将&#39;-&#39;分割线转化为驼峰式</span></span>
<span class="line"><span style="color:#005CC5;">       this</span><span style="color:#24292E;">[j].style[</span><span style="color:#005CC5;">A</span><span style="color:#24292E;">.</span><span style="color:#6F42C1;">camelcase</span><span style="color:#24292E;">(i)] </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> arg[</span><span style="color:#005CC5;">0</span><span style="color:#24292E;">][i];</span></span>
<span class="line"><span style="color:#24292E;">      }</span></span>
<span class="line"><span style="color:#24292E;">     }</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#6A737D;">    // 两个参数则设置—个样式</span></span>
<span class="line"><span style="color:#24292E;">   } </span><span style="color:#D73A49;">else</span><span style="color:#D73A49;"> if</span><span style="color:#24292E;"> (len </span><span style="color:#D73A49;">===</span><span style="color:#005CC5;"> 2</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#D73A49;">    for</span><span style="color:#24292E;"> (</span><span style="color:#D73A49;">var</span><span style="color:#24292E;"> j </span><span style="color:#D73A49;">=</span><span style="color:#005CC5;"> this</span><span style="color:#24292E;">.</span><span style="color:#005CC5;">length</span><span style="color:#D73A49;"> -</span><span style="color:#005CC5;"> 1</span><span style="color:#24292E;">; j </span><span style="color:#D73A49;">&gt;=</span><span style="color:#005CC5;"> 0</span><span style="color:#24292E;">; j</span><span style="color:#D73A49;">--</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#005CC5;">     this</span><span style="color:#24292E;">[j].style[</span><span style="color:#005CC5;">A</span><span style="color:#24292E;">.</span><span style="color:#6F42C1;">camelcase</span><span style="color:#24292E;">(arg[</span><span style="color:#005CC5;">0</span><span style="color:#24292E;">])] </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> arg[</span><span style="color:#005CC5;">1</span><span style="color:#24292E;">];</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">   }</span></span>
<span class="line"><span style="color:#D73A49;">   return</span><span style="color:#005CC5;"> this</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"><span style="color:#24292E;"> })</span></span>
<span class="line"></span>
<span class="line"><span style="color:#005CC5;"> A</span><span style="color:#24292E;">.fn.</span><span style="color:#6F42C1;">extend</span><span style="color:#24292E;">({</span></span>
<span class="line"><span style="color:#6A737D;">  // 设置属性</span></span>
<span class="line"><span style="color:#6F42C1;">  attr</span><span style="color:#24292E;">: </span><span style="color:#D73A49;">function</span><span style="color:#24292E;"> () {</span></span>
<span class="line"><span style="color:#D73A49;">   var</span><span style="color:#24292E;"> arg </span><span style="color:#D73A49;">=</span><span style="color:#005CC5;"> arguments</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    len </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> arg.</span><span style="color:#005CC5;">length</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#D73A49;">   if</span><span style="color:#24292E;"> (</span><span style="color:#005CC5;">this</span><span style="color:#24292E;">.</span><span style="color:#005CC5;">length</span><span style="color:#D73A49;"> &lt;</span><span style="color:#005CC5;"> 1</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#D73A49;">    return</span><span style="color:#005CC5;"> this</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">   }</span></span>
<span class="line"><span style="color:#6A737D;">   //如果—个参数</span></span>
<span class="line"><span style="color:#D73A49;">   if</span><span style="color:#24292E;"> (len </span><span style="color:#D73A49;">===</span><span style="color:#005CC5;"> 1</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#6A737D;">    // 为字符串则获取第—个元素属性</span></span>
<span class="line"><span style="color:#D73A49;">    if</span><span style="color:#24292E;"> (</span><span style="color:#D73A49;">typeof</span><span style="color:#24292E;"> arg[</span><span style="color:#005CC5;">0</span><span style="color:#24292E;">] </span><span style="color:#D73A49;">===</span><span style="color:#032F62;"> &#39;string&#39;</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#D73A49;">     return</span><span style="color:#005CC5;"> this</span><span style="color:#24292E;">[</span><span style="color:#005CC5;">0</span><span style="color:#24292E;">].</span><span style="color:#6F42C1;">getAttribute</span><span style="color:#24292E;">(arg[</span><span style="color:#005CC5;">0</span><span style="color:#24292E;">]);</span></span>
<span class="line"><span style="color:#6A737D;">     // 为对象设置每个元素的多个属性</span></span>
<span class="line"><span style="color:#24292E;">    } </span><span style="color:#D73A49;">else</span><span style="color:#D73A49;"> if</span><span style="color:#24292E;"> (</span><span style="color:#D73A49;">typeof</span><span style="color:#24292E;"> arg[</span><span style="color:#005CC5;">0</span><span style="color:#24292E;">] </span><span style="color:#D73A49;">===</span><span style="color:#032F62;"> &#39;object&#39;</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#D73A49;">     for</span><span style="color:#24292E;"> (</span><span style="color:#D73A49;">var</span><span style="color:#24292E;"> i </span><span style="color:#D73A49;">in</span><span style="color:#24292E;"> arg[</span><span style="color:#005CC5;">0</span><span style="color:#24292E;">]) { </span><span style="color:#6A737D;">// 遍历属性</span></span>
<span class="line"><span style="color:#D73A49;">      for</span><span style="color:#24292E;"> (</span><span style="color:#D73A49;">var</span><span style="color:#24292E;"> j </span><span style="color:#D73A49;">=</span><span style="color:#005CC5;"> this</span><span style="color:#24292E;">.</span><span style="color:#005CC5;">length</span><span style="color:#D73A49;"> -</span><span style="color:#005CC5;"> 1</span><span style="color:#24292E;">; j </span><span style="color:#D73A49;">&gt;=</span><span style="color:#005CC5;"> 0</span><span style="color:#24292E;">; j</span><span style="color:#D73A49;">--</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#005CC5;">       this</span><span style="color:#24292E;">[j].</span><span style="color:#6F42C1;">setAttribute</span><span style="color:#24292E;">(i, arg[</span><span style="color:#005CC5;">0</span><span style="color:#24292E;">][i]);</span></span>
<span class="line"><span style="color:#24292E;">      }</span></span>
<span class="line"><span style="color:#24292E;">     }</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#6A737D;">    // 两个参数则设置每个元素单个属性</span></span>
<span class="line"><span style="color:#24292E;">   } </span><span style="color:#D73A49;">else</span><span style="color:#D73A49;"> if</span><span style="color:#24292E;"> (len </span><span style="color:#D73A49;">===</span><span style="color:#005CC5;"> 2</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#D73A49;">    for</span><span style="color:#24292E;"> (</span><span style="color:#D73A49;">var</span><span style="color:#24292E;"> j </span><span style="color:#D73A49;">=</span><span style="color:#005CC5;"> this</span><span style="color:#24292E;">.</span><span style="color:#005CC5;">length</span><span style="color:#D73A49;"> -</span><span style="color:#005CC5;"> 1</span><span style="color:#24292E;">; j </span><span style="color:#D73A49;">&gt;=</span><span style="color:#005CC5;"> 0</span><span style="color:#24292E;">; j</span><span style="color:#D73A49;">--</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#005CC5;">     this</span><span style="color:#24292E;">[j].</span><span style="color:#6F42C1;">setAttribute</span><span style="color:#24292E;">(arg[</span><span style="color:#005CC5;">0</span><span style="color:#24292E;">], arg[</span><span style="color:#005CC5;">1</span><span style="color:#24292E;">]);</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">   }</span></span>
<span class="line"><span style="color:#D73A49;">   return</span><span style="color:#005CC5;"> this</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"><span style="color:#24292E;"> })</span></span>
<span class="line"></span>
<span class="line"><span style="color:#005CC5;"> A</span><span style="color:#24292E;">.fn.</span><span style="color:#6F42C1;">extend</span><span style="color:#24292E;">({</span></span>
<span class="line"><span style="color:#6A737D;">  // 获取或者设置元素的内容</span></span>
<span class="line"><span style="color:#6F42C1;">  html</span><span style="color:#24292E;">: </span><span style="color:#D73A49;">function</span><span style="color:#24292E;"> () {</span></span>
<span class="line"><span style="color:#D73A49;">   var</span><span style="color:#24292E;"> arg </span><span style="color:#D73A49;">=</span><span style="color:#005CC5;"> arguments</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    len </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> arg.</span><span style="color:#005CC5;">length</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#6A737D;">   // 无参数则获取第—个元素的内容</span></span>
<span class="line"><span style="color:#D73A49;">   if</span><span style="color:#24292E;"> (len </span><span style="color:#D73A49;">===</span><span style="color:#005CC5;"> 0</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#D73A49;">    return</span><span style="color:#005CC5;"> this</span><span style="color:#24292E;">[</span><span style="color:#005CC5;">0</span><span style="color:#24292E;">] </span><span style="color:#D73A49;">&amp;&amp;</span><span style="color:#005CC5;"> this</span><span style="color:#24292E;">[</span><span style="color:#005CC5;">0</span><span style="color:#24292E;">].innerHTML;</span></span>
<span class="line"><span style="color:#6A737D;">    // —个参数则设置每—个元素的内容</span></span>
<span class="line"><span style="color:#24292E;">   } </span><span style="color:#D73A49;">else</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#D73A49;">    for</span><span style="color:#24292E;"> (</span><span style="color:#D73A49;">var</span><span style="color:#24292E;"> i </span><span style="color:#D73A49;">=</span><span style="color:#005CC5;"> this</span><span style="color:#24292E;">.</span><span style="color:#005CC5;">length</span><span style="color:#D73A49;"> -</span><span style="color:#005CC5;"> 1</span><span style="color:#24292E;">; i </span><span style="color:#D73A49;">&gt;=</span><span style="color:#005CC5;"> 0</span><span style="color:#24292E;">; i</span><span style="color:#D73A49;">--</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#005CC5;">     this</span><span style="color:#24292E;">[i].innerHTML </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> arg[</span><span style="color:#005CC5;">0</span><span style="color:#24292E;">];</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">   }</span></span>
<span class="line"><span style="color:#D73A49;">   return</span><span style="color:#005CC5;"> this</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"><span style="color:#24292E;"> })</span></span></code></pre></div>`,7)]))}const A=n(o,[["render",e]]);export{C as __pageData,A as default};
