import{_ as n,c as a,o as l,ag as p}from"./chunks/framework.DPDPlp3K.js";const C=JSON.parse('{"title":"状态模式 State","description":"","frontmatter":{},"headers":[],"relativePath":"pattern/behavior/状态模式State.md","filePath":"pattern/behavior/状态模式State.md"}'),o={name:"pattern/behavior/状态模式State.md"};function e(t,s,c,r,y,i){return l(),a("div",null,s[0]||(s[0]=[p(`<h1 id="状态模式-state" tabindex="-1">状态模式 State <a class="header-anchor" href="#状态模式-state" aria-label="Permalink to &quot;状态模式 State&quot;">​</a></h1><h2 id="定义" tabindex="-1">定义 <a class="header-anchor" href="#定义" aria-label="Permalink to &quot;定义&quot;">​</a></h2><p><strong>什么是状态模式？</strong></p><p>状态模式（State）： 当一个对象的内部状态发生改变时，会导致其行为的改变，这看起来像是改变了对象。</p><p>状态模式既是解决程序中臃肿的分支判断语句问题，将每个分支转化为一种状态独立出来，方便每种状态的管理又不至于每次执行时遍历所有分支。</p><p>在程序中到底产出哪种行为结果，决定于选择哪种状态，而选择何种状态又是在程序运行时决定的。当然状态模式最终的目的即是简化分支判断流程。</p><h2 id="实例" tabindex="-1">实例 <a class="header-anchor" href="#实例" aria-label="Permalink to &quot;实例&quot;">​</a></h2><ul><li>根据不同角色状态显示内容</li><li>超级玛利亚</li><li>游戏角色的不同状态（如站立、跑动、跳跃、攻击等，比如角色要站立之后可以根据用户的按键决定他是否可以进入奔跑状态）</li><li>订单处理系统中订单的不同状态（如新建、已支付、已发货、已完成、已取消等，比如当用户支付订单之后，订单流转到已发货的处理逻辑）。</li><li>电梯的不同运行状态（如静止、上升、下降、维修状态等，当电梯到达了目的楼层，就可以是否有用户请求电梯，决定是停止还是运行至用户的目标楼层）</li><li>网络连接的不同状态（如连接中、已连接、断开、重连等，如果配置了断线自动重连，当网络状态变化的时候，自动切换至连接中的状态并处理对应的逻辑）。</li></ul><h3 id="根据不同角色状态显示内容" tabindex="-1">根据不同角色状态显示内容 <a class="header-anchor" href="#根据不同角色状态显示内容" aria-label="Permalink to &quot;根据不同角色状态显示内容&quot;">​</a></h3><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-light vp-code" tabindex="0"><code><span class="line"><span style="color:#6A737D;">// 先把各种角色都包装到一个ShowController类里面</span></span>
<span class="line"><span style="color:#D73A49;">function</span><span style="color:#6F42C1;"> ShowController</span><span style="color:#24292E;">() {</span></span>
<span class="line"><span style="color:#005CC5;">  this</span><span style="color:#24292E;">.role </span><span style="color:#D73A49;">=</span><span style="color:#032F62;"> &quot;&quot;</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#005CC5;">  this</span><span style="color:#24292E;">.roleMap </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#6A737D;">    // 领导</span></span>
<span class="line"><span style="color:#6F42C1;">    boss</span><span style="color:#24292E;">: </span><span style="color:#D73A49;">function</span><span style="color:#24292E;"> () {</span></span>
<span class="line"><span style="color:#6F42C1;">      showContent1</span><span style="color:#24292E;">();</span></span>
<span class="line"><span style="color:#6F42C1;">      showContent2</span><span style="color:#24292E;">();</span></span>
<span class="line"><span style="color:#6F42C1;">      showContent3</span><span style="color:#24292E;">();</span></span>
<span class="line"><span style="color:#24292E;">    },</span></span>
<span class="line"><span style="color:#6A737D;">    // 管理者</span></span>
<span class="line"><span style="color:#6F42C1;">    manager</span><span style="color:#24292E;">: </span><span style="color:#D73A49;">function</span><span style="color:#24292E;"> () {</span></span>
<span class="line"><span style="color:#6F42C1;">      showContent1</span><span style="color:#24292E;">();</span></span>
<span class="line"><span style="color:#6F42C1;">      showContent2</span><span style="color:#24292E;">();</span></span>
<span class="line"><span style="color:#24292E;">    },</span></span>
<span class="line"><span style="color:#6A737D;">    // 职员</span></span>
<span class="line"><span style="color:#6F42C1;">    staff</span><span style="color:#24292E;">: </span><span style="color:#D73A49;">function</span><span style="color:#24292E;"> () {</span></span>
<span class="line"><span style="color:#6F42C1;">      showContent3</span><span style="color:#24292E;">();</span></span>
<span class="line"><span style="color:#24292E;">    },</span></span>
<span class="line"><span style="color:#24292E;">  };</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// ShowController上添加一个实例方法show，用来根据角色展示不同的内容</span></span>
<span class="line"><span style="color:#005CC5;">ShowController</span><span style="color:#24292E;">.</span><span style="color:#005CC5;">prototype</span><span style="color:#24292E;">.</span><span style="color:#6F42C1;">show</span><span style="color:#D73A49;"> =</span><span style="color:#D73A49;"> function</span><span style="color:#24292E;"> () {</span></span>
<span class="line"><span style="color:#24292E;">  axios.</span><span style="color:#6F42C1;">get</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;xxx&quot;</span><span style="color:#24292E;">).</span><span style="color:#6F42C1;">then</span><span style="color:#24292E;">((</span><span style="color:#E36209;">role</span><span style="color:#24292E;">) </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#005CC5;">    this</span><span style="color:#24292E;">.role </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> role;</span></span>
<span class="line"><span style="color:#005CC5;">    this</span><span style="color:#24292E;">.roleMap[</span><span style="color:#005CC5;">this</span><span style="color:#24292E;">.role]();</span></span>
<span class="line"><span style="color:#24292E;">  });</span></span>
<span class="line"><span style="color:#24292E;">};</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 使用时</span></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#005CC5;"> control</span><span style="color:#D73A49;"> =</span><span style="color:#D73A49;"> new</span><span style="color:#6F42C1;"> ShowController</span><span style="color:#24292E;">()</span></span>
<span class="line"><span style="color:#24292E;">control.</span><span style="color:#6F42C1;">show</span><span style="color:#24292E;">();</span></span></code></pre></div><h3 id="超级玛利亚" tabindex="-1">超级玛利亚 <a class="header-anchor" href="#超级玛利亚" aria-label="Permalink to &quot;超级玛利亚&quot;">​</a></h3><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-light vp-code" tabindex="0"><code><span class="line"><span style="color:#6A737D;">// 创建超级玛丽状态类</span></span>
<span class="line"><span style="color:#D73A49;"> class</span><span style="color:#6F42C1;"> Marry</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#D73A49;">  constructor</span><span style="color:#24292E;">() {</span></span>
<span class="line"><span style="color:#005CC5;">   this</span><span style="color:#24292E;">._currentstate </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> {}</span></span>
<span class="line"><span style="color:#005CC5;">   this</span><span style="color:#24292E;">.states </span><span style="color:#D73A49;">=</span><span style="color:#005CC5;"> this</span><span style="color:#24292E;">.</span><span style="color:#6F42C1;">initStates</span><span style="color:#24292E;">()</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6F42C1;">  initStates</span><span style="color:#24292E;">() {</span></span>
<span class="line"><span style="color:#D73A49;">   const</span><span style="color:#005CC5;"> states</span><span style="color:#D73A49;"> =</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#6F42C1;">    jump</span><span style="color:#24292E;">: </span><span style="color:#D73A49;">function</span><span style="color:#24292E;"> () {</span></span>
<span class="line"><span style="color:#6A737D;">     // 跳跃</span></span>
<span class="line"><span style="color:#24292E;">     console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;jump&#39;</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#24292E;">    },</span></span>
<span class="line"><span style="color:#6F42C1;">    move</span><span style="color:#24292E;">: </span><span style="color:#D73A49;">function</span><span style="color:#24292E;"> () {</span></span>
<span class="line"><span style="color:#6A737D;">     // 移动</span></span>
<span class="line"><span style="color:#24292E;">     console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;move&#39;</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#24292E;">    },</span></span>
<span class="line"><span style="color:#6F42C1;">    shoot</span><span style="color:#24292E;">: </span><span style="color:#D73A49;">function</span><span style="color:#24292E;"> () {</span></span>
<span class="line"><span style="color:#6A737D;">     // 射击</span></span>
<span class="line"><span style="color:#24292E;">     console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;shoot&#39;</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#24292E;">    },</span></span>
<span class="line"><span style="color:#6F42C1;">    squat</span><span style="color:#24292E;">: </span><span style="color:#D73A49;">function</span><span style="color:#24292E;"> () {</span></span>
<span class="line"><span style="color:#6A737D;">     // 蹲下</span></span>
<span class="line"><span style="color:#24292E;">     console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;squat&#39;</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#24292E;">    },</span></span>
<span class="line"><span style="color:#24292E;">   }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">   return</span><span style="color:#24292E;"> states</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"><span style="color:#6A737D;">  /** 执行动作 */</span></span>
<span class="line"><span style="color:#6F42C1;">  goes</span><span style="color:#24292E;">() {</span></span>
<span class="line"><span style="color:#24292E;">   console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;触发—次动作&#39;</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#6A737D;">   // 遍历内部状态保存的动作</span></span>
<span class="line"><span style="color:#D73A49;">   for</span><span style="color:#24292E;"> (</span><span style="color:#D73A49;">let</span><span style="color:#24292E;"> i </span><span style="color:#D73A49;">in</span><span style="color:#005CC5;"> this</span><span style="color:#24292E;">._currentstate) {</span></span>
<span class="line"><span style="color:#6A737D;">    // 如果该动作存在则执行</span></span>
<span class="line"><span style="color:#005CC5;">    this</span><span style="color:#24292E;">.states[i] </span><span style="color:#D73A49;">&amp;&amp;</span><span style="color:#005CC5;"> this</span><span style="color:#24292E;">.states[i]()</span></span>
<span class="line"><span style="color:#24292E;">   }</span></span>
<span class="line"><span style="color:#6A737D;">   // 返回动作控制类</span></span>
<span class="line"><span style="color:#D73A49;">   return</span><span style="color:#005CC5;"> this</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"><span style="color:#6A737D;">  /** 变更状态 */</span></span>
<span class="line"><span style="color:#6F42C1;">  change</span><span style="color:#24292E;">() {</span></span>
<span class="line"><span style="color:#6A737D;">   // 组合动作通过传递多个参数实现</span></span>
<span class="line"><span style="color:#D73A49;">   let</span><span style="color:#24292E;"> arg </span><span style="color:#D73A49;">=</span><span style="color:#005CC5;"> arguments</span></span>
<span class="line"><span style="color:#6A737D;">   // 重置内部状态</span></span>
<span class="line"><span style="color:#005CC5;">   this</span><span style="color:#24292E;">._currentstate </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> {}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">   // 如果有动作则添加动作</span></span>
<span class="line"><span style="color:#D73A49;">   if</span><span style="color:#24292E;"> (arg.</span><span style="color:#005CC5;">length</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#6A737D;">    // 遍历动作</span></span>
<span class="line"><span style="color:#D73A49;">    for</span><span style="color:#24292E;"> (</span><span style="color:#D73A49;">let</span><span style="color:#24292E;"> i </span><span style="color:#D73A49;">=</span><span style="color:#005CC5;"> 0</span><span style="color:#24292E;">, len </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> arg.</span><span style="color:#005CC5;">length</span><span style="color:#24292E;">; i </span><span style="color:#D73A49;">&lt;</span><span style="color:#24292E;"> len; i</span><span style="color:#D73A49;">++</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#6A737D;">     // 向内部状态中添加动作</span></span>
<span class="line"><span style="color:#005CC5;">     this</span><span style="color:#24292E;">._currentstate[arg[i]] </span><span style="color:#D73A49;">=</span><span style="color:#005CC5;"> true</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">   }</span></span>
<span class="line"><span style="color:#6A737D;">   // 返回动作控制类</span></span>
<span class="line"><span style="color:#D73A49;">   return</span><span style="color:#005CC5;"> this</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"><span style="color:#24292E;"> }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;"> const</span><span style="color:#005CC5;"> marry</span><span style="color:#D73A49;"> =</span><span style="color:#D73A49;"> new</span><span style="color:#6F42C1;"> Marry</span><span style="color:#24292E;">()</span></span>
<span class="line"><span style="color:#24292E;"> marry</span></span>
<span class="line"><span style="color:#24292E;">  .</span><span style="color:#6F42C1;">change</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;jump&#39;</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&#39;shoot&#39;</span><span style="color:#24292E;">) </span><span style="color:#6A737D;">// 添加跳跃与射击动作</span></span>
<span class="line"><span style="color:#24292E;">  .</span><span style="color:#6F42C1;">goes</span><span style="color:#24292E;">() </span><span style="color:#6A737D;">// 执行动作</span></span>
<span class="line"><span style="color:#24292E;">  .</span><span style="color:#6F42C1;">goes</span><span style="color:#24292E;">()</span></span>
<span class="line"><span style="color:#24292E;">  .</span><span style="color:#6F42C1;">change</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;jump&#39;</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#24292E;">  .</span><span style="color:#6F42C1;">goes</span><span style="color:#24292E;">()</span></span></code></pre></div>`,12)]))}const h=n(o,[["render",e]]);export{C as __pageData,h as default};
