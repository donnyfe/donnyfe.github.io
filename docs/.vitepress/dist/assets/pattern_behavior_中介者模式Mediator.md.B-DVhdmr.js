import{_ as n,c as a,o as l,ag as p}from"./chunks/framework.DPDPlp3K.js";const A=JSON.parse('{"title":"中介者模式 Mediator","description":"","frontmatter":{},"headers":[],"relativePath":"pattern/behavior/中介者模式Mediator.md","filePath":"pattern/behavior/中介者模式Mediator.md"}'),o={name:"pattern/behavior/中介者模式Mediator.md"};function e(c,s,t,r,y,i){return l(),a("div",null,s[0]||(s[0]=[p(`<h1 id="中介者模式-mediator" tabindex="-1">中介者模式 Mediator <a class="header-anchor" href="#中介者模式-mediator" aria-label="Permalink to &quot;中介者模式 Mediator&quot;">​</a></h1><p>中介者模式(Mediator): 通过中介者对象封装一系列对象之间的交互，使对象之间不再相互引用，降低他们之间的耦合。有时中介者对象也可改变对象之间的交互。</p><p>同观察者模式一样，中介者模式的主要业务也是通过模块间或者对象间的复杂通信，来解决模块间或对象间的耦合。对于中介者对象的本质是分装多个对象的交互，并且这些对象的交互一般都是在中介者内部实现的。</p><p>与外观模式的封装特性相比，中介者模式对多个对象交互地封装，且这些对象一般处于同一层面上，并且封装的交互在中介者内部，而外观模式封装的目的是为了提供更简单的易用接口，而不会添加其他功能。</p><p>与观察者模式相比，虽然两种模式都是通过消息传递实现对象间或模块间的解耦。观察者模式中的订阅者是双向的，既可以是消息的发布者，也可以是消息的订阅者。而在中介者模式中，订阅者是单向的，只能是消息的订阅者。而消息统一由中介者对象发布，所有的订阅者对象间接地被中介者管理。</p><h2 id="实例" tabindex="-1">实例 <a class="header-anchor" href="#实例" aria-label="Permalink to &quot;实例&quot;">​</a></h2><ul><li>插件系统的通信机制</li></ul><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-light vp-code" tabindex="0"><code><span class="line"><span style="color:#6A737D;">//中介者对象</span></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#005CC5;"> Mediator</span><span style="color:#D73A49;"> =</span><span style="color:#24292E;"> (</span><span style="color:#D73A49;">function</span><span style="color:#24292E;"> () {</span></span>
<span class="line"><span style="color:#6A737D;"> // 消息对象</span></span>
<span class="line"><span style="color:#D73A49;"> const</span><span style="color:#005CC5;"> msg</span><span style="color:#D73A49;"> =</span><span style="color:#24292E;"> {}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"> /**</span></span>
<span class="line"><span style="color:#6A737D;">  * 订阅消息方法</span></span>
<span class="line"><span style="color:#6A737D;">  * </span><span style="color:#D73A49;">@param</span><span style="color:#24292E;"> type</span><span style="color:#6A737D;">   消息名称</span></span>
<span class="line"><span style="color:#6A737D;">  * </span><span style="color:#D73A49;">@param</span><span style="color:#24292E;"> action</span><span style="color:#6A737D;">  消息回调函数</span></span>
<span class="line"><span style="color:#6A737D;">  */</span></span>
<span class="line"><span style="color:#D73A49;"> const</span><span style="color:#6F42C1;"> register</span><span style="color:#D73A49;"> =</span><span style="color:#D73A49;"> function</span><span style="color:#24292E;"> (</span><span style="color:#E36209;">type</span><span style="color:#24292E;">, </span><span style="color:#E36209;">action</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#D73A49;">  if</span><span style="color:#24292E;"> (</span><span style="color:#D73A49;">!</span><span style="color:#24292E;">msg[type]) {</span></span>
<span class="line"><span style="color:#6A737D;">   // 不存在 则建立该消息容器</span></span>
<span class="line"><span style="color:#24292E;">   msg[type] </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> []</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"><span style="color:#6A737D;">  // 存入新消息回调函数</span></span>
<span class="line"><span style="color:#24292E;">  msg[type].</span><span style="color:#6F42C1;">push</span><span style="color:#24292E;">(action)</span></span>
<span class="line"><span style="color:#24292E;"> }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"> /**</span></span>
<span class="line"><span style="color:#6A737D;">  * 发布消息方法</span></span>
<span class="line"><span style="color:#6A737D;">  * </span><span style="color:#D73A49;">@param</span><span style="color:#24292E;"> type</span><span style="color:#6A737D;"> 消息名称</span></span>
<span class="line"><span style="color:#6A737D;">  */</span></span>
<span class="line"><span style="color:#D73A49;"> const</span><span style="color:#6F42C1;"> send</span><span style="color:#D73A49;"> =</span><span style="color:#D73A49;"> function</span><span style="color:#24292E;"> (</span><span style="color:#E36209;">type</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#6A737D;">  // 如果该消息己经被订阅</span></span>
<span class="line"><span style="color:#D73A49;">  if</span><span style="color:#24292E;"> (msg[type]) {</span></span>
<span class="line"><span style="color:#6A737D;">   // 遍历己存储的消息回调函数并逐一执行</span></span>
<span class="line"><span style="color:#D73A49;">   for</span><span style="color:#24292E;"> (</span><span style="color:#D73A49;">var</span><span style="color:#24292E;"> i </span><span style="color:#D73A49;">=</span><span style="color:#005CC5;"> 0</span><span style="color:#24292E;">, len </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> msg[type].</span><span style="color:#005CC5;">length</span><span style="color:#24292E;">; i </span><span style="color:#D73A49;">&lt;</span><span style="color:#24292E;"> len; i</span><span style="color:#D73A49;">++</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">    msg[type][i] </span><span style="color:#D73A49;">&amp;&amp;</span><span style="color:#24292E;"> msg[type][i]()</span></span>
<span class="line"><span style="color:#24292E;">   }</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"><span style="color:#24292E;"> }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;"> return</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  register,</span></span>
<span class="line"><span style="color:#24292E;">  send,</span></span>
<span class="line"><span style="color:#24292E;"> }</span></span>
<span class="line"><span style="color:#24292E;">})()</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">/**</span></span>
<span class="line"><span style="color:#6A737D;"> * 显隐导航小组件</span></span>
<span class="line"><span style="color:#6A737D;"> * </span><span style="color:#D73A49;">@param</span><span style="color:#24292E;"> selectorId</span><span style="color:#6A737D;"> 模块</span></span>
<span class="line"><span style="color:#6A737D;"> * </span><span style="color:#D73A49;">@param</span><span style="color:#24292E;"> tag</span><span style="color:#6A737D;"> 处理的标签（ 消息提醒b， 网址span）</span></span>
<span class="line"><span style="color:#6A737D;"> * </span><span style="color:#D73A49;">@param</span><span style="color:#24292E;"> show</span><span style="color:#6A737D;"> 显示还是隐藏</span></span>
<span class="line"><span style="color:#6A737D;"> */</span></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#6F42C1;"> setNav</span><span style="color:#D73A49;"> =</span><span style="color:#D73A49;"> function</span><span style="color:#24292E;"> (</span><span style="color:#E36209;">selectorId</span><span style="color:#24292E;">, </span><span style="color:#E36209;">tagName</span><span style="color:#24292E;">, </span><span style="color:#E36209;">show</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#6A737D;"> // 获取导航模块</span></span>
<span class="line"><span style="color:#D73A49;"> let</span><span style="color:#24292E;"> el </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> document.</span><span style="color:#6F42C1;">getElementById</span><span style="color:#24292E;">(selectorId),</span></span>
<span class="line"><span style="color:#24292E;">  tag </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> el.</span><span style="color:#6F42C1;">getElementsByTagName</span><span style="color:#24292E;">(tagName),</span></span>
<span class="line"><span style="color:#24292E;">  visible </span><span style="color:#D73A49;">=</span><span style="color:#D73A49;"> !</span><span style="color:#24292E;">show </span><span style="color:#D73A49;">||</span><span style="color:#24292E;"> show </span><span style="color:#D73A49;">===</span><span style="color:#032F62;"> &#39;hide&#39;</span><span style="color:#D73A49;"> ?</span><span style="color:#032F62;"> &#39;hidden&#39;</span><span style="color:#D73A49;"> :</span><span style="color:#032F62;"> &#39;visible&#39;</span></span>
<span class="line"><span style="color:#6A737D;"> // 隐藏标签</span></span>
<span class="line"><span style="color:#D73A49;"> for</span><span style="color:#24292E;"> (</span><span style="color:#D73A49;">let</span><span style="color:#24292E;"> i </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> tag.</span><span style="color:#005CC5;">length</span><span style="color:#D73A49;"> -</span><span style="color:#005CC5;"> 1</span><span style="color:#24292E;">; i </span><span style="color:#D73A49;">&gt;=</span><span style="color:#005CC5;"> 0</span><span style="color:#24292E;">; i</span><span style="color:#D73A49;">--</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">  tag.style.visibility </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> visible</span></span>
<span class="line"><span style="color:#24292E;"> }</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 订阅层模块</span></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#005CC5;"> registerModule</span><span style="color:#D73A49;"> =</span><span style="color:#24292E;"> (</span><span style="color:#D73A49;">function</span><span style="color:#24292E;"> () {</span></span>
<span class="line"><span style="color:#6A737D;"> /**</span></span>
<span class="line"><span style="color:#6A737D;">  * 用户收藏导航模块</span></span>
<span class="line"><span style="color:#6A737D;">  */</span></span>
<span class="line"><span style="color:#6A737D;"> // 订阅隐藏用户收藏导航消息提醒消息</span></span>
<span class="line"><span style="color:#24292E;"> Mediator.</span><span style="color:#6F42C1;">register</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;hideNavNum&#39;</span><span style="color:#24292E;">, </span><span style="color:#D73A49;">function</span><span style="color:#24292E;"> () {</span></span>
<span class="line"><span style="color:#6F42C1;">  setNav</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;collectionNav&#39;</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&#39;b&#39;</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">false</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#24292E;"> })</span></span>
<span class="line"><span style="color:#6A737D;"> // 订阅显示用户收藏导航消息提醒消息</span></span>
<span class="line"><span style="color:#24292E;"> Mediator.</span><span style="color:#6F42C1;">register</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;showNavNum&#39;</span><span style="color:#24292E;">, </span><span style="color:#D73A49;">function</span><span style="color:#24292E;"> () {</span></span>
<span class="line"><span style="color:#6F42C1;">  setNav</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;collectionNav&#39;</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&#39;b&#39;</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">true</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#24292E;"> })</span></span>
<span class="line"><span style="color:#6A737D;"> // 订阅隐藏用户收藏导航网址消息</span></span>
<span class="line"><span style="color:#24292E;"> Mediator.</span><span style="color:#6F42C1;">register</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;hideNavUrl&#39;</span><span style="color:#24292E;">, </span><span style="color:#D73A49;">function</span><span style="color:#24292E;"> () {</span></span>
<span class="line"><span style="color:#6F42C1;">  setNav</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;collectionNav&#39;</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&#39;span&#39;</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">false</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#24292E;"> })</span></span>
<span class="line"><span style="color:#6A737D;"> // 订阅显示用户收藏导航网址消息</span></span>
<span class="line"><span style="color:#24292E;"> Mediator.</span><span style="color:#6F42C1;">register</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;showNavUrl&#39;</span><span style="color:#24292E;">, </span><span style="color:#D73A49;">function</span><span style="color:#24292E;"> () {</span></span>
<span class="line"><span style="color:#6F42C1;">  setNav</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;collectionNav&#39;</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&#39;span&#39;</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">true</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#24292E;"> })</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"> /**</span></span>
<span class="line"><span style="color:#6A737D;">  * 推荐用户导航</span></span>
<span class="line"><span style="color:#6A737D;">  */</span></span>
<span class="line"><span style="color:#6A737D;"> // 订阅隐藏推荐用户导航消息提醒消息</span></span>
<span class="line"><span style="color:#24292E;"> Mediator.</span><span style="color:#6F42C1;">register</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;hideNavNum&#39;</span><span style="color:#24292E;">, </span><span style="color:#D73A49;">function</span><span style="color:#24292E;"> () {</span></span>
<span class="line"><span style="color:#6F42C1;">  setNav</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;recommendNav&#39;</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&#39;b&#39;</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">false</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#24292E;"> })</span></span>
<span class="line"><span style="color:#6A737D;"> // 订阅显示推荐用户导航消息提醒消息</span></span>
<span class="line"><span style="color:#24292E;"> Mediator.</span><span style="color:#6F42C1;">register</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;showNavNum&#39;</span><span style="color:#24292E;">, </span><span style="color:#D73A49;">function</span><span style="color:#24292E;"> () {</span></span>
<span class="line"><span style="color:#6F42C1;">  setNav</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;recommendNav&#39;</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&#39;b&#39;</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">true</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#24292E;"> })</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"> /**</span></span>
<span class="line"><span style="color:#6A737D;">  * 最近常用导航</span></span>
<span class="line"><span style="color:#6A737D;">  */</span></span>
<span class="line"><span style="color:#6A737D;"> // 订阅隐藏最近常用导航网址消息</span></span>
<span class="line"><span style="color:#24292E;"> Mediator.</span><span style="color:#6F42C1;">register</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;hideNavUrl&#39;</span><span style="color:#24292E;">, </span><span style="color:#D73A49;">function</span><span style="color:#24292E;"> () {</span></span>
<span class="line"><span style="color:#6F42C1;">  setNav</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;recentlyNav&#39;</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&#39;span&#39;</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&#39;hide&#39;</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#24292E;"> })</span></span>
<span class="line"><span style="color:#6A737D;"> // 订阅显示最近常用导航网址消息</span></span>
<span class="line"><span style="color:#24292E;"> Mediator.</span><span style="color:#6F42C1;">register</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;showNavUrl&#39;</span><span style="color:#24292E;">, </span><span style="color:#D73A49;">function</span><span style="color:#24292E;"> () {</span></span>
<span class="line"><span style="color:#6F42C1;">  setNav</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;recentlyNav&#39;</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&#39;span&#39;</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&#39;show&#39;</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#24292E;"> })</span></span>
<span class="line"><span style="color:#24292E;">})()</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 设置层模块</span></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#005CC5;"> settingModule</span><span style="color:#D73A49;"> =</span><span style="color:#24292E;"> (</span><span style="color:#D73A49;">function</span><span style="color:#24292E;"> () {</span></span>
<span class="line"><span style="color:#6A737D;">  // 消息提醒选框</span></span>
<span class="line"><span style="color:#D73A49;"> let</span><span style="color:#24292E;"> hideNum </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> document.</span><span style="color:#6F42C1;">getElementById</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;hideNum&#39;</span><span style="color:#24292E;">), </span></span>
<span class="line"><span style="color:#6A737D;">   // 网址选框</span></span>
<span class="line"><span style="color:#24292E;">  hideUrl </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> document.</span><span style="color:#6F42C1;">getElementById</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;hideUrl&#39;</span><span style="color:#24292E;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"> // 消息提醒选框事件</span></span>
<span class="line"><span style="color:#24292E;"> hideNum.</span><span style="color:#6F42C1;">onchange</span><span style="color:#D73A49;"> =</span><span style="color:#D73A49;"> function</span><span style="color:#24292E;"> () {</span></span>
<span class="line"><span style="color:#D73A49;">  if</span><span style="color:#24292E;"> (hideNum.checked) {</span></span>
<span class="line"><span style="color:#6A737D;">   // 中介者发布隐藏消息提醒功能消息</span></span>
<span class="line"><span style="color:#24292E;">   Mediator.</span><span style="color:#6F42C1;">send</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;hideNavNum&#39;</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#24292E;">  } </span><span style="color:#D73A49;">else</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#6A737D;">   // 中介者发布显示消息提醒功能消息</span></span>
<span class="line"><span style="color:#24292E;">   Mediator.</span><span style="color:#6F42C1;">send</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;showNavNum&#39;</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"><span style="color:#24292E;"> }</span></span>
<span class="line"><span style="color:#6A737D;"> // 网址选框事件</span></span>
<span class="line"><span style="color:#24292E;"> hideUrl.</span><span style="color:#6F42C1;">onchange</span><span style="color:#D73A49;"> =</span><span style="color:#D73A49;"> function</span><span style="color:#24292E;"> () {</span></span>
<span class="line"><span style="color:#D73A49;">  if</span><span style="color:#24292E;"> (hideUrl.checked) {</span></span>
<span class="line"><span style="color:#6A737D;">   // 中介者发布隐藏所有网址功能消息</span></span>
<span class="line"><span style="color:#24292E;">   Mediator.</span><span style="color:#6F42C1;">send</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;hideNavUrl&#39;</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#24292E;">  } </span><span style="color:#D73A49;">else</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#6A737D;">   // 中介者发布显示所有网址功能消息</span></span>
<span class="line"><span style="color:#24292E;">   Mediator.</span><span style="color:#6F42C1;">send</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;showNavUrl&#39;</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"><span style="color:#24292E;"> }</span></span></code></pre></div>`,8)]))}const D=n(o,[["render",e]]);export{A as __pageData,D as default};
