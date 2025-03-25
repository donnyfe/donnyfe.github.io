import{_ as n,c as a,o as l,ag as p}from"./chunks/framework.DPDPlp3K.js";const m=JSON.parse('{"title":"命令模式 Command","description":"","frontmatter":{},"headers":[],"relativePath":"pattern/behavior/命令模式Command.md","filePath":"pattern/behavior/命令模式Command.md"}'),o={name:"pattern/behavior/命令模式Command.md"};function e(c,s,t,r,y,i){return l(),a("div",null,s[0]||(s[0]=[p(`<h1 id="命令模式-command" tabindex="-1">命令模式 Command <a class="header-anchor" href="#命令模式-command" aria-label="Permalink to &quot;命令模式 Command&quot;">​</a></h1><p>命令模式（Command）: 将请求与实现解耦并封装成独立对象，从而使不同的请求对客户端的实现参数化。</p><p>命令模式是将执行的命令封装，解决命令的发起者与命令的执行者之间的耦合。每一条命令实质上是一个操作。命令的使用者不必要了解命令的执行者（命令对象）的命令接口是如何实现的、命令是如何接受的、命令是如何执行的。所有的命令都被存储在命令对象中。</p><p>优点：</p><ul><li>解决命令使用者之间的耦合。</li><li>新的命令很容易加入到命令系统中，供使用者使用。</li><li>命令的使用具有一致性，多数的命令在一定程度上是简化操作方法的使用的。</li></ul><p>缺点:</p><ul><li>命令模式是对一些操作的封装，这就造成每执行一次操作都要调用一次命令对象，增加了系统的复杂度。</li></ul><h2 id="实例" tabindex="-1">实例 <a class="header-anchor" href="#实例" aria-label="Permalink to &quot;实例&quot;">​</a></h2><ul><li>创建DOM视图</li><li>Canvas绘图</li></ul><h3 id="创建dom视图" tabindex="-1">创建DOM视图 <a class="header-anchor" href="#创建dom视图" aria-label="Permalink to &quot;创建DOM视图&quot;">​</a></h3><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-light vp-code" tabindex="0"><code><span class="line"><span style="color:#D73A49;">let</span><span style="color:#24292E;"> viewCommand </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> (</span><span style="color:#D73A49;">function</span><span style="color:#24292E;"> () {</span></span>
<span class="line"><span style="color:#D73A49;"> let</span><span style="color:#24292E;"> templates </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#6A737D;">   // 图片结构模板</span></span>
<span class="line"><span style="color:#24292E;">   productTpl: </span><span style="color:#032F62;">\`&lt;div&gt;</span></span>
<span class="line"><span style="color:#032F62;">      &lt;img src=&quot;{{src}}&quot;/&gt;</span></span>
<span class="line"><span style="color:#032F62;">      &lt;p&gt;{{text}}&lt;/p&gt;</span></span>
<span class="line"><span style="color:#032F62;">     &lt;/div&gt;\`</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#6A737D;">   // 标题结构模板</span></span>
<span class="line"><span style="color:#24292E;">   titleTpl: </span><span style="color:#032F62;">\` &lt;div class=&quot;title&quot;&gt;</span></span>
<span class="line"><span style="color:#032F62;">      &lt;div class=&quot;main&quot;&gt;</span></span>
<span class="line"><span style="color:#032F62;">       &lt;h2&gt;{{title}}&lt;/h2&gt;</span></span>
<span class="line"><span style="color:#032F62;">       &lt;p&gt;{{content}}&lt;/p&gt;</span></span>
<span class="line"><span style="color:#032F62;">      &lt;/div&gt;</span></span>
<span class="line"><span style="color:#032F62;">     &lt;/div&gt;\`</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  },</span></span>
<span class="line"><span style="color:#6A737D;">  // 格式化字符串缓存字符串</span></span>
<span class="line"><span style="color:#24292E;">  html </span><span style="color:#D73A49;">=</span><span style="color:#032F62;"> &#39;&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"> // 格式化字符串 如:&#39;&lt;div&gt;{{content}}&lt;/div&gt;&#39;用{content:&#39;demo&#39;}替换后可得到字符串:&#39;&lt;div&gt;demo&lt;/div&gt;&#39;</span></span>
<span class="line"><span style="color:#D73A49;"> const</span><span style="color:#6F42C1;"> formatString</span><span style="color:#D73A49;"> =</span><span style="color:#D73A49;"> function</span><span style="color:#24292E;"> (</span><span style="color:#E36209;">str</span><span style="color:#24292E;">, </span><span style="color:#E36209;">obj</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#D73A49;">  return</span><span style="color:#24292E;"> str.</span><span style="color:#6F42C1;">replace</span><span style="color:#24292E;">(</span><span style="color:#032F62;">/</span><span style="color:#22863A;font-weight:bold;">\\{\\{</span><span style="color:#032F62;">(</span><span style="color:#005CC5;">\\w</span><span style="color:#D73A49;">+</span><span style="color:#032F62;">)</span><span style="color:#22863A;font-weight:bold;">\\}\\}</span><span style="color:#032F62;">/</span><span style="color:#D73A49;">g</span><span style="color:#24292E;">, </span><span style="color:#D73A49;">function</span><span style="color:#24292E;"> (</span><span style="color:#E36209;">match</span><span style="color:#24292E;">, </span><span style="color:#E36209;">key</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#D73A49;">   return</span><span style="color:#24292E;"> obj[key]</span></span>
<span class="line"><span style="color:#24292E;">  })</span></span>
<span class="line"><span style="color:#24292E;"> }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"> // 方法集合</span></span>
<span class="line"><span style="color:#D73A49;"> let</span><span style="color:#24292E;"> actions </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#6F42C1;">  create</span><span style="color:#24292E;">: </span><span style="color:#D73A49;">function</span><span style="color:#24292E;"> (</span><span style="color:#E36209;">data</span><span style="color:#24292E;">, </span><span style="color:#E36209;">viewType</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#D73A49;">   let</span><span style="color:#24292E;"> tpl </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> templates[viewType]</span></span>
<span class="line"><span style="color:#6A737D;">   // 解析数据 如果数据是—个数组</span></span>
<span class="line"><span style="color:#D73A49;">   if</span><span style="color:#24292E;"> (data.</span><span style="color:#005CC5;">length</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#D73A49;">    for</span><span style="color:#24292E;"> (</span><span style="color:#D73A49;">let</span><span style="color:#24292E;"> i </span><span style="color:#D73A49;">=</span><span style="color:#005CC5;"> 0</span><span style="color:#24292E;">, len </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> data.</span><span style="color:#005CC5;">length</span><span style="color:#24292E;">; i </span><span style="color:#D73A49;">&lt;</span><span style="color:#24292E;"> len; i</span><span style="color:#D73A49;">++</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#6A737D;">     // 将格式化之后的字符串缓存到html中</span></span>
<span class="line"><span style="color:#24292E;">     html </span><span style="color:#D73A49;">+=</span><span style="color:#6F42C1;"> formatString</span><span style="color:#24292E;">(tpl, data[i])</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">   } </span><span style="color:#D73A49;">else</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#6A737D;">    // 直接格式化字符串缓存到html中</span></span>
<span class="line"><span style="color:#24292E;">    html </span><span style="color:#D73A49;">+=</span><span style="color:#6F42C1;"> formatString</span><span style="color:#24292E;">(tpl, data)</span></span>
<span class="line"><span style="color:#24292E;">   }</span></span>
<span class="line"><span style="color:#24292E;">  },</span></span>
<span class="line"><span style="color:#6A737D;">  // 展示方法</span></span>
<span class="line"><span style="color:#6F42C1;">  display</span><span style="color:#24292E;">: </span><span style="color:#D73A49;">function</span><span style="color:#24292E;"> (</span><span style="color:#E36209;">container</span><span style="color:#24292E;">, </span><span style="color:#E36209;">data</span><span style="color:#24292E;">, </span><span style="color:#E36209;">viewType</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#D73A49;">   if</span><span style="color:#24292E;"> (data) {</span></span>
<span class="line"><span style="color:#6A737D;">    // 如果传入数据, 根据给定数据创建视图</span></span>
<span class="line"><span style="color:#005CC5;">    this</span><span style="color:#24292E;">.</span><span style="color:#6F42C1;">create</span><span style="color:#24292E;">(data, viewType)</span></span>
<span class="line"><span style="color:#24292E;">   }</span></span>
<span class="line"><span style="color:#24292E;">   document.</span><span style="color:#6F42C1;">getElementById</span><span style="color:#24292E;">(container).innerHTML </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> html</span></span>
<span class="line"><span style="color:#6A737D;">   // 展示后清空缓存的字符串</span></span>
<span class="line"><span style="color:#24292E;">   html </span><span style="color:#D73A49;">=</span><span style="color:#032F62;"> &#39;&#39;</span></span>
<span class="line"><span style="color:#24292E;">  },</span></span>
<span class="line"><span style="color:#24292E;"> }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"> // 命令执行器</span></span>
<span class="line"><span style="color:#D73A49;"> const</span><span style="color:#6F42C1;"> excutor</span><span style="color:#D73A49;"> =</span><span style="color:#D73A49;"> function</span><span style="color:#24292E;"> (</span><span style="color:#E36209;">msg</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#6A737D;">  // 解析命令，如果msg.param不是数组则将其转化为数组（apply方法要求第二个参数为数组）</span></span>
<span class="line"><span style="color:#24292E;">  msg.param </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> Array.</span><span style="color:#6F42C1;">isArray</span><span style="color:#24292E;">(msg.param) </span><span style="color:#D73A49;">?</span><span style="color:#24292E;"> msg.param </span><span style="color:#D73A49;">:</span><span style="color:#24292E;"> [msg.param]</span></span>
<span class="line"><span style="color:#6A737D;">  // actions内部调用的方法引用this，所以此处为保证作用域this执行,故传入actions</span></span>
<span class="line"><span style="color:#24292E;">  actions[msg.command].</span><span style="color:#6F42C1;">apply</span><span style="color:#24292E;">(actions, msg.param)</span></span>
<span class="line"><span style="color:#24292E;"> }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;"> return</span><span style="color:#24292E;"> excutor</span></span>
<span class="line"><span style="color:#24292E;">})()</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 模块标题数据</span></span>
<span class="line"><span style="color:#D73A49;">let</span><span style="color:#24292E;"> titleData </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> { </span></span>
<span class="line"><span style="color:#24292E;">  title: </span><span style="color:#032F62;">&#39;夏日里的—片温馨&#39;</span><span style="color:#24292E;">, </span></span>
<span class="line"><span style="color:#24292E;">  content: </span><span style="color:#032F62;">&#39;暖暖的温情带给人们家的感受。&#39;</span><span style="color:#24292E;"> </span></span>
<span class="line"><span style="color:#24292E;">  },</span></span>
<span class="line"><span style="color:#6A737D;"> // 产品展示数据</span></span>
<span class="line"><span style="color:#24292E;"> productData </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> [</span></span>
<span class="line"><span style="color:#24292E;">  { src: </span><span style="color:#032F62;">&#39;02.jpg&#39;</span><span style="color:#24292E;">, text: </span><span style="color:#032F62;">&#39;绽放的桃花&#39;</span><span style="color:#24292E;"> },</span></span>
<span class="line"><span style="color:#24292E;">  { src: </span><span style="color:#032F62;">&#39;03.jpg&#39;</span><span style="color:#24292E;">, text: </span><span style="color:#032F62;">&#39;阳光下的温馨&#39;</span><span style="color:#24292E;"> },</span></span>
<span class="line"><span style="color:#24292E;">  { src: </span><span style="color:#032F62;">&#39;04.jpg&#39;</span><span style="color:#24292E;">, text: </span><span style="color:#032F62;">&#39;镜头前的绿色&#39;</span><span style="color:#24292E;"> },</span></span>
<span class="line"><span style="color:#24292E;"> ]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6F42C1;">viewCommand</span><span style="color:#24292E;">({</span></span>
<span class="line"><span style="color:#24292E;"> command: </span><span style="color:#032F62;">&#39;create&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;"> param: [{ src: </span><span style="color:#032F62;">&#39;01.jpg&#39;</span><span style="color:#24292E;">, text: </span><span style="color:#032F62;">&#39;迎着朝阳的野菊花&#39;</span><span style="color:#24292E;"> }, </span><span style="color:#032F62;">&#39;productTpl&#39;</span><span style="color:#24292E;">],</span></span>
<span class="line"><span style="color:#24292E;">})</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6F42C1;">viewCommand</span><span style="color:#24292E;">({</span></span>
<span class="line"><span style="color:#24292E;"> command: </span><span style="color:#032F62;">&#39;display&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;"> param: [</span><span style="color:#032F62;">&#39;titleId&#39;</span><span style="color:#24292E;">, titleData, </span><span style="color:#032F62;">&#39;titleTpl&#39;</span><span style="color:#24292E;">],</span></span>
<span class="line"><span style="color:#24292E;">})</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6F42C1;">viewCommand</span><span style="color:#24292E;">({</span></span>
<span class="line"><span style="color:#24292E;"> command: </span><span style="color:#032F62;">&#39;display&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;"> param: [</span><span style="color:#032F62;">&#39;productId&#39;</span><span style="color:#24292E;">, productData, </span><span style="color:#032F62;">&#39;productTpl&#39;</span><span style="color:#24292E;">],</span></span>
<span class="line"><span style="color:#24292E;">})</span></span></code></pre></div><h3 id="canvas绘图" tabindex="-1">Canvas绘图 <a class="header-anchor" href="#canvas绘图" aria-label="Permalink to &quot;Canvas绘图&quot;">​</a></h3><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-light vp-code" tabindex="0"><code><span class="line"><span style="color:#6A737D;">// 实现对象</span></span>
<span class="line"><span style="color:#D73A49;">let</span><span style="color:#24292E;"> canvasCommand </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> (</span><span style="color:#D73A49;">function</span><span style="color:#24292E;"> () {</span></span>
<span class="line"><span style="color:#D73A49;"> let</span><span style="color:#24292E;"> canvas </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> document.</span><span style="color:#6F42C1;">getElementById</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;canvasId&#39;</span><span style="color:#24292E;">),</span></span>
<span class="line"><span style="color:#6A737D;">  // canvas元素的上下文引用对象缓存在命令对象的内部</span></span>
<span class="line"><span style="color:#24292E;">  ctx </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> canvas.</span><span style="color:#6F42C1;">getContext</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;2d&#39;</span><span style="color:#24292E;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;"> let</span><span style="color:#24292E;"> actions </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#6A737D;">  // 填充色彩</span></span>
<span class="line"><span style="color:#6F42C1;">  fillStyle</span><span style="color:#24292E;">: </span><span style="color:#D73A49;">function</span><span style="color:#24292E;"> (</span><span style="color:#E36209;">c</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">   ctx.fillStyle </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> c</span></span>
<span class="line"><span style="color:#24292E;">  },</span></span>
<span class="line"><span style="color:#6A737D;">  // 填充矩形</span></span>
<span class="line"><span style="color:#6F42C1;">  fillRect</span><span style="color:#24292E;">: </span><span style="color:#D73A49;">function</span><span style="color:#24292E;"> (</span><span style="color:#E36209;">x</span><span style="color:#24292E;">, </span><span style="color:#E36209;">y</span><span style="color:#24292E;">, </span><span style="color:#E36209;">width</span><span style="color:#24292E;">, </span><span style="color:#E36209;">height</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">   ctx.</span><span style="color:#6F42C1;">fillRect</span><span style="color:#24292E;">(x, y, width, height)</span></span>
<span class="line"><span style="color:#24292E;">  },</span></span>
<span class="line"><span style="color:#6A737D;">  // 描边色彩</span></span>
<span class="line"><span style="color:#6F42C1;">  strokeStyle</span><span style="color:#24292E;">: </span><span style="color:#D73A49;">function</span><span style="color:#24292E;"> (</span><span style="color:#E36209;">c</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">   ctx.strokeStyle </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> c</span></span>
<span class="line"><span style="color:#24292E;">  },</span></span>
<span class="line"><span style="color:#6A737D;">  // 描边矩形</span></span>
<span class="line"><span style="color:#6F42C1;">  strokeRect</span><span style="color:#24292E;">: </span><span style="color:#D73A49;">function</span><span style="color:#24292E;"> (</span><span style="color:#E36209;">x</span><span style="color:#24292E;">, </span><span style="color:#E36209;">y</span><span style="color:#24292E;">, </span><span style="color:#E36209;">width</span><span style="color:#24292E;">, </span><span style="color:#E36209;">height</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">   ctx.</span><span style="color:#6F42C1;">strokeRect</span><span style="color:#24292E;">(x, y, width, height)</span></span>
<span class="line"><span style="color:#24292E;">  },</span></span>
<span class="line"><span style="color:#6A737D;">  // 填充字体</span></span>
<span class="line"><span style="color:#6F42C1;">  fillText</span><span style="color:#24292E;">: </span><span style="color:#D73A49;">function</span><span style="color:#24292E;"> (</span><span style="color:#E36209;">text</span><span style="color:#24292E;">, </span><span style="color:#E36209;">x</span><span style="color:#24292E;">, </span><span style="color:#E36209;">y</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">   ctx.</span><span style="color:#6F42C1;">fillText</span><span style="color:#24292E;">(text, x, y)</span></span>
<span class="line"><span style="color:#24292E;">  },</span></span>
<span class="line"><span style="color:#6A737D;">  // 开启路径</span></span>
<span class="line"><span style="color:#6F42C1;">  beginPath</span><span style="color:#24292E;">: </span><span style="color:#D73A49;">function</span><span style="color:#24292E;"> () {</span></span>
<span class="line"><span style="color:#24292E;">   ctx.</span><span style="color:#6F42C1;">beginPath</span><span style="color:#24292E;">()</span></span>
<span class="line"><span style="color:#24292E;">  },</span></span>
<span class="line"><span style="color:#6A737D;">  // 移动画笔</span></span>
<span class="line"><span style="color:#6F42C1;">  moveTo</span><span style="color:#24292E;">: </span><span style="color:#D73A49;">function</span><span style="color:#24292E;"> (</span><span style="color:#E36209;">x</span><span style="color:#24292E;">, </span><span style="color:#E36209;">y</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">   ctx.</span><span style="color:#6F42C1;">moveTo</span><span style="color:#24292E;">(x, y)</span></span>
<span class="line"><span style="color:#24292E;">  },</span></span>
<span class="line"><span style="color:#6A737D;">  // 画笔连线</span></span>
<span class="line"><span style="color:#6F42C1;">  lineTo</span><span style="color:#24292E;">: </span><span style="color:#D73A49;">function</span><span style="color:#24292E;"> (</span><span style="color:#E36209;">x</span><span style="color:#24292E;">, </span><span style="color:#E36209;">y</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">   ctx.</span><span style="color:#6F42C1;">lineTo</span><span style="color:#24292E;">(x, y)</span></span>
<span class="line"><span style="color:#24292E;">  },</span></span>
<span class="line"><span style="color:#6A737D;">  // 绘制弧线</span></span>
<span class="line"><span style="color:#6F42C1;">  arc</span><span style="color:#24292E;">: </span><span style="color:#D73A49;">function</span><span style="color:#24292E;"> (</span><span style="color:#E36209;">x</span><span style="color:#24292E;">, </span><span style="color:#E36209;">y</span><span style="color:#24292E;">, </span><span style="color:#E36209;">r</span><span style="color:#24292E;">, </span><span style="color:#E36209;">begin</span><span style="color:#24292E;">, </span><span style="color:#E36209;">end</span><span style="color:#24292E;">, </span><span style="color:#E36209;">dir</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">   ctx.</span><span style="color:#6F42C1;">arc</span><span style="color:#24292E;">(x, y, r, begin, end, dir)</span></span>
<span class="line"><span style="color:#24292E;">  },</span></span>
<span class="line"><span style="color:#6A737D;">  // 填充</span></span>
<span class="line"><span style="color:#6F42C1;">  fill</span><span style="color:#24292E;">: </span><span style="color:#D73A49;">function</span><span style="color:#24292E;"> () {</span></span>
<span class="line"><span style="color:#24292E;">   ctx.</span><span style="color:#6F42C1;">fill</span><span style="color:#24292E;">()</span></span>
<span class="line"><span style="color:#24292E;">   ctx.</span><span style="color:#6F42C1;">stroke</span><span style="color:#24292E;">()</span></span>
<span class="line"><span style="color:#24292E;">  },</span></span>
<span class="line"><span style="color:#6A737D;">  // 描边</span></span>
<span class="line"><span style="color:#6F42C1;">  stroke</span><span style="color:#24292E;">: </span><span style="color:#D73A49;">function</span><span style="color:#24292E;"> () {</span></span>
<span class="line"><span style="color:#24292E;">   ctx.</span><span style="color:#6F42C1;">stroke</span><span style="color:#24292E;">()</span></span>
<span class="line"><span style="color:#24292E;">  },</span></span>
<span class="line"><span style="color:#24292E;"> }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"> // 命令执行器</span></span>
<span class="line"><span style="color:#D73A49;"> const</span><span style="color:#6F42C1;"> excutor</span><span style="color:#D73A49;"> =</span><span style="color:#D73A49;"> function</span><span style="color:#24292E;"> (</span><span style="color:#E36209;">msg</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#D73A49;">  if</span><span style="color:#24292E;"> (</span><span style="color:#D73A49;">!</span><span style="color:#24292E;">msg) </span><span style="color:#D73A49;">return</span></span>
<span class="line"><span style="color:#6A737D;">  // 如果命令是—个数组， 遍历执行多个命令</span></span>
<span class="line"><span style="color:#D73A49;">  if</span><span style="color:#24292E;"> (msg.</span><span style="color:#005CC5;">length</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#D73A49;">   for</span><span style="color:#24292E;"> (</span><span style="color:#D73A49;">let</span><span style="color:#24292E;"> i </span><span style="color:#D73A49;">=</span><span style="color:#005CC5;"> 0</span><span style="color:#24292E;">, len </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> msg.</span><span style="color:#005CC5;">length</span><span style="color:#24292E;">; i </span><span style="color:#D73A49;">&lt;</span><span style="color:#24292E;"> len; i</span><span style="color:#D73A49;">++</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#6A737D;">    // arguments.callee(msg[i])</span><span style="color:#6A737D;"> // TypeError: &#39;caller&#39;, &#39;callee&#39;, and &#39;arguments&#39; properties may not be accessed on strict mode functions</span></span>
<span class="line"><span style="color:#6F42C1;">    run</span><span style="color:#24292E;">(msg[i].command, msg[i].param)</span></span>
<span class="line"><span style="color:#24292E;">   }</span></span>
<span class="line"><span style="color:#24292E;">  } </span><span style="color:#D73A49;">else</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#6F42C1;">   run</span><span style="color:#24292E;">(msg.command, msg.param)</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">  function</span><span style="color:#6F42C1;"> run</span><span style="color:#24292E;">(</span><span style="color:#E36209;">command</span><span style="color:#24292E;">, </span><span style="color:#E36209;">param</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#6A737D;">   // 如果msg.param不是—个数组，将其转化为数组，apply第二个参数要求格式</span></span>
<span class="line"><span style="color:#D73A49;">   let</span><span style="color:#24292E;"> params </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> Array.</span><span style="color:#6F42C1;">isArray</span><span style="color:#24292E;">(param) </span><span style="color:#D73A49;">?</span><span style="color:#24292E;"> param </span><span style="color:#D73A49;">:</span><span style="color:#24292E;"> [param]</span></span>
<span class="line"><span style="color:#6A737D;">   // actions内部调用的方法可能引用this，为保证作用域中this指向正确，故传入actions</span></span>
<span class="line"><span style="color:#24292E;">   actions[command].</span><span style="color:#6F42C1;">apply</span><span style="color:#24292E;">(actions, params)</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"><span style="color:#24292E;"> }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;"> return</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  excute: excutor,</span></span>
<span class="line"><span style="color:#24292E;"> }</span></span>
<span class="line"><span style="color:#24292E;">})()</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">canvasCommand.</span><span style="color:#6F42C1;">excute</span><span style="color:#24292E;">([</span></span>
<span class="line"><span style="color:#6A737D;"> // 着色</span></span>
<span class="line"><span style="color:#24292E;"> { command: </span><span style="color:#032F62;">&#39;fillStyle&#39;</span><span style="color:#24292E;">, param: </span><span style="color:#032F62;">&#39;#f00&#39;</span><span style="color:#24292E;"> },</span></span>
<span class="line"><span style="color:#6A737D;"> // 绘制矩形</span></span>
<span class="line"><span style="color:#24292E;"> { command: </span><span style="color:#032F62;">&#39;fillRect&#39;</span><span style="color:#24292E;">, param: [</span><span style="color:#005CC5;">20</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">20</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">50</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">50</span><span style="color:#24292E;">] },</span></span>
<span class="line"><span style="color:#6A737D;"> // 填充文字</span></span>
<span class="line"><span style="color:#24292E;"> { command: </span><span style="color:#032F62;">&#39;fillText&#39;</span><span style="color:#24292E;">, param: [</span><span style="color:#032F62;">&#39;abc&#39;</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">150</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">150</span><span style="color:#24292E;">] },</span></span>
<span class="line"><span style="color:#6A737D;"> // 描边</span></span>
<span class="line"><span style="color:#24292E;"> { command: </span><span style="color:#032F62;">&#39;beginPath&#39;</span><span style="color:#24292E;">, param: {} },</span></span>
<span class="line"><span style="color:#24292E;"> { command: </span><span style="color:#032F62;">&#39;moveTo&#39;</span><span style="color:#24292E;">, param: [</span><span style="color:#005CC5;">100</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">100</span><span style="color:#24292E;">] },</span></span>
<span class="line"><span style="color:#24292E;"> { command: </span><span style="color:#032F62;">&#39;lineTo&#39;</span><span style="color:#24292E;">, param: [</span><span style="color:#005CC5;">120</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">140</span><span style="color:#24292E;">] },</span></span>
<span class="line"><span style="color:#24292E;"> { command: </span><span style="color:#032F62;">&#39;lineTo&#39;</span><span style="color:#24292E;">, param: [</span><span style="color:#005CC5;">150</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">140</span><span style="color:#24292E;">] },</span></span>
<span class="line"><span style="color:#24292E;"> { command: </span><span style="color:#032F62;">&#39;stroke&#39;</span><span style="color:#24292E;">, param: {} },</span></span>
<span class="line"><span style="color:#24292E;">])</span></span></code></pre></div>`,13)]))}const A=n(o,[["render",e]]);export{m as __pageData,A as default};
