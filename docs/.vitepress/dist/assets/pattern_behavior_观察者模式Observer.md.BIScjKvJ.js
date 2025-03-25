import{_ as n,c as a,o as l,ag as p}from"./chunks/framework.DPDPlp3K.js";const v=JSON.parse('{"title":"观察者模式 Observer","description":"","frontmatter":{},"headers":[],"relativePath":"pattern/behavior/观察者模式Observer.md","filePath":"pattern/behavior/观察者模式Observer.md"}'),e={name:"pattern/behavior/观察者模式Observer.md"};function o(t,s,c,r,y,i){return l(),a("div",null,s[0]||(s[0]=[p(`<h1 id="观察者模式-observer" tabindex="-1">观察者模式 Observer <a class="header-anchor" href="#观察者模式-observer" aria-label="Permalink to &quot;观察者模式 Observer&quot;">​</a></h1><p>观察者模式最主要的作用是解决类或对象之间的耦合，解耦两个相互依赖的对象，使其依赖于观察者的消息机制。</p><p>这样对于任意一个订阅者对象来说，其他订阅者对象的改变不会影响到自身。对于每一个订阅者来说，其自身既可以是消息的发出者也可以是消息的执行者，这都依赖于调用观察者对象的三种方法（订阅消息，注销消息，发布消息）中的任一种。</p><p>团队开发中，尤其是大型项目的模块化开发中，一位工程师很难做到熟知项目中的每个模块，此时为完成一个涉及多模块调用的需求，观察者模式的优势就显而易见了，模块间的信息传递不必要相互引用其他模块，只需要通过观察者模式注册或者发布消息即可。通过观察者模式，工程师间对功能的开发只需要按照给定的消息格式开发各自功能即可，而不必去担忧他人的模块。</p><h2 id="具体实现" tabindex="-1">具体实现 <a class="header-anchor" href="#具体实现" aria-label="Permalink to &quot;具体实现&quot;">​</a></h2><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-light vp-code" tabindex="0"><code><span class="line"><span style="color:#D73A49;">class</span><span style="color:#6F42C1;"> Observer</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#D73A49;"> constructor</span><span style="color:#24292E;">() {</span></span>
<span class="line"><span style="color:#6A737D;">  // 一个对象存放所有的消息订阅，key为消息类型，value为该消息对应的动作，结构为{ &quot;event1&quot;: [cb1, cb2] }</span></span>
<span class="line"><span style="color:#005CC5;">  this</span><span style="color:#24292E;">.events </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> {}</span></span>
<span class="line"><span style="color:#24292E;"> }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6F42C1;"> register</span><span style="color:#24292E;">(</span><span style="color:#E36209;">event</span><span style="color:#24292E;">, </span><span style="color:#E36209;">fn</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#D73A49;">  if</span><span style="color:#24292E;"> (</span><span style="color:#D73A49;">!</span><span style="color:#005CC5;">this</span><span style="color:#24292E;">.events[event]) {</span></span>
<span class="line"><span style="color:#6A737D;">   // 初始动作队列</span></span>
<span class="line"><span style="color:#005CC5;">   this</span><span style="color:#24292E;">.events[event] </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> []</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"><span style="color:#6A737D;">  // 如果有人订阅过了，这个键已经存在，就往里面加就好了</span></span>
<span class="line"><span style="color:#005CC5;">  this</span><span style="color:#24292E;">.events[event].</span><span style="color:#6F42C1;">push</span><span style="color:#24292E;">(fn)</span></span>
<span class="line"><span style="color:#24292E;"> }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"> // 取出所有订阅者的回调执行</span></span>
<span class="line"><span style="color:#6F42C1;"> send</span><span style="color:#24292E;">(</span><span style="color:#E36209;">event</span><span style="color:#24292E;">, </span><span style="color:#D73A49;">...</span><span style="color:#E36209;">args</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#D73A49;">  const</span><span style="color:#005CC5;"> events</span><span style="color:#D73A49;"> =</span><span style="color:#005CC5;"> this</span><span style="color:#24292E;">.events[event]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">  if</span><span style="color:#24292E;"> (events </span><span style="color:#D73A49;">&amp;&amp;</span><span style="color:#24292E;"> events.</span><span style="color:#005CC5;">length</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">   events.</span><span style="color:#6F42C1;">forEach</span><span style="color:#24292E;">((</span><span style="color:#E36209;">fn</span><span style="color:#24292E;">) </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">    fn.</span><span style="color:#6F42C1;">call</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">this</span><span style="color:#24292E;">, </span><span style="color:#D73A49;">...</span><span style="color:#24292E;">args)</span></span>
<span class="line"><span style="color:#24292E;">   })</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"><span style="color:#24292E;"> }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"> // 删除某个订阅，保留其他订阅</span></span>
<span class="line"><span style="color:#6F42C1;"> remove</span><span style="color:#24292E;">(</span><span style="color:#E36209;">event</span><span style="color:#24292E;">, </span><span style="color:#E36209;">fn</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#D73A49;">  const</span><span style="color:#005CC5;"> events</span><span style="color:#D73A49;"> =</span><span style="color:#005CC5;"> this</span><span style="color:#24292E;">.events[event]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">  if</span><span style="color:#24292E;"> (events </span><span style="color:#D73A49;">&amp;&amp;</span><span style="color:#24292E;"> events.</span><span style="color:#005CC5;">length</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#005CC5;">   this</span><span style="color:#24292E;">.events[event] </span><span style="color:#D73A49;">=</span><span style="color:#005CC5;"> this</span><span style="color:#24292E;">.events[event].</span><span style="color:#6F42C1;">filter</span><span style="color:#24292E;">((</span><span style="color:#E36209;">cb</span><span style="color:#24292E;">) </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> cb </span><span style="color:#D73A49;">!==</span><span style="color:#24292E;"> fn)</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"><span style="color:#24292E;"> }</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 使用的时候</span></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#005CC5;"> observer</span><span style="color:#D73A49;"> =</span><span style="color:#D73A49;"> new</span><span style="color:#6F42C1;"> Observer</span><span style="color:#24292E;">()</span></span>
<span class="line"><span style="color:#6A737D;">// 注册事件</span></span>
<span class="line"><span style="color:#24292E;">observer.</span><span style="color:#6F42C1;">register</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;event1&#39;</span><span style="color:#24292E;">, () </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {})</span></span>
<span class="line"><span style="color:#6A737D;">// 发布事件</span></span>
<span class="line"><span style="color:#24292E;">observer.</span><span style="color:#6F42C1;">send</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;event1&#39;</span><span style="color:#24292E;">)</span></span></code></pre></div><h2 id="实例" tabindex="-1">实例 <a class="header-anchor" href="#实例" aria-label="Permalink to &quot;实例&quot;">​</a></h2>`,7)]))}const C=n(e,[["render",o]]);export{v as __pageData,C as default};
