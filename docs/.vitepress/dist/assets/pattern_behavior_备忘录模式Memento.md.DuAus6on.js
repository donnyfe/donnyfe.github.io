import{_ as n,c as a,o as l,ag as p}from"./chunks/framework.DPDPlp3K.js";const C=JSON.parse('{"title":"备忘录模式 Memento","description":"","frontmatter":{},"headers":[],"relativePath":"pattern/behavior/备忘录模式Memento.md","filePath":"pattern/behavior/备忘录模式Memento.md"}'),o={name:"pattern/behavior/备忘录模式Memento.md"};function e(t,s,c,r,y,i){return l(),a("div",null,s[0]||(s[0]=[p(`<h1 id="备忘录模式-memento" tabindex="-1">备忘录模式 Memento <a class="header-anchor" href="#备忘录模式-memento" aria-label="Permalink to &quot;备忘录模式 Memento&quot;">​</a></h1><p>备忘录模式（Memento）: 在不破坏对象的封装性的前提下，在对象之外捕获并保存该对象内部的状态以便日后对象使用或者对象恢复到以前的某个状态。</p><p>备忘录模式最主要的任务是对现有的数据或状态做缓存，为将来某个时刻使用或恢复做准备。在 JavaScript 编程中，备忘录模式常常运用于对数据的缓存备份，浏览器端获取的数据往往是从服务器端请求获取到的，而请求流程往往是以时间与流量为代价的。因此对重复性数据反复请求不仅增加了服务器端的压力，而且造成浏览器端对请求数据的等待进而影响用户体验。</p><p>在备忘录模式中，数据常常存储在备忘录对象的缓存器中，这样对于数据的读取必定要通过调用备忘录提供的方法，因此备忘录对象也是对数据缓存器的一次保护性封装，防止外界的直接访问，方便数据的管理，规范化外界对象对数据的使用。一旦备忘录对象发现请求的数据或状态在缓存器中己存在，将直接从缓存器中读取，从而降低对数据的获取成本。</p><p>当数据量过大时，会严重占用系统提供的资源，这会极大降低系统性能。此时对缓存器的缓存策略优化是很有必要的，复用率低的数据缓存下来是不值得的。因此资源空间的限制是影响备忘录模式应用的一大障碍。不过随着硬件水平的提高以及浏览器的不断优化，资源空间的限制在不久的将来也会得到改善。</p><h2 id="实例" tabindex="-1">实例 <a class="header-anchor" href="#实例" aria-label="Permalink to &quot;实例&quot;">​</a></h2><ul><li><p>打开页面中的换肤的设置层，第一次打开是要向服务器端发送请求来获取响应数据的，但是第二次就不需要再发送了，此时可以将第一次获取的数据缓存下来即可。</p></li><li><p>MVC 架构中的 M（model）部分。很多时候它都会缓存一些数据，供视图或者控制器模块使用。</p></li><li><p>文章缓存</p></li><li><p>前进后退功能</p></li><li><p>换肤设置</p></li><li><p>视图缓存</p></li></ul><h3 id="文章缓存" tabindex="-1">文章缓存 <a class="header-anchor" href="#文章缓存" aria-label="Permalink to &quot;文章缓存&quot;">​</a></h3><p>用户每次点进一个新文章都需要从 API 请求数据，如果他下次再点进同一篇文章，我们可能希望直接用上次请求的数据，而不再次请求，这时候就可以用到备忘录模式了</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-light vp-code" tabindex="0"><code><span class="line"><span style="color:#6A737D;">/**</span></span>
<span class="line"><span style="color:#6A737D;"> * 文章缓存</span></span>
<span class="line"><span style="color:#6A737D;"> * </span><span style="color:#D73A49;">@param</span><span style="color:#6F42C1;"> {*}</span><span style="color:#24292E;"> articleId</span></span>
<span class="line"><span style="color:#6A737D;"> * </span><span style="color:#D73A49;">@returns</span></span>
<span class="line"><span style="color:#6A737D;"> */</span></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#6F42C1;"> ArticleCache</span><span style="color:#D73A49;"> =</span><span style="color:#D73A49;"> function</span><span style="color:#24292E;"> (</span><span style="color:#E36209;">articleId</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#D73A49;"> let</span><span style="color:#24292E;"> cache </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> {}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;"> return</span><span style="color:#D73A49;"> function</span><span style="color:#24292E;"> (</span><span style="color:#E36209;">articleId</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#D73A49;">  if</span><span style="color:#24292E;"> (cache[articleId]) {</span></span>
<span class="line"><span style="color:#D73A49;">   return</span><span style="color:#005CC5;"> Promise</span><span style="color:#24292E;">.</span><span style="color:#6F42C1;">resolve</span><span style="color:#24292E;">(cache[articleId])</span></span>
<span class="line"><span style="color:#24292E;">  } </span><span style="color:#D73A49;">else</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#D73A49;">   return</span><span style="color:#24292E;"> axios.</span><span style="color:#6F42C1;">get</span><span style="color:#24292E;">(articleId).</span><span style="color:#6F42C1;">then</span><span style="color:#24292E;">((</span><span style="color:#E36209;">data</span><span style="color:#24292E;">) </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">    cache[articleId] </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> data</span></span>
<span class="line"><span style="color:#D73A49;">    return</span><span style="color:#24292E;"> data</span></span>
<span class="line"><span style="color:#24292E;">   })</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"><span style="color:#24292E;"> }</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><h3 id="前进后退功能" tabindex="-1">前进后退功能 <a class="header-anchor" href="#前进后退功能" aria-label="Permalink to &quot;前进后退功能&quot;">​</a></h3><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-light vp-code" tabindex="0"><code><span class="line"><span style="color:#D73A49;">class</span><span style="color:#6F42C1;"> Move</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#D73A49;"> constructor</span><span style="color:#24292E;">() {</span></span>
<span class="line"><span style="color:#6A737D;">  // 一个数组记录所有状态</span></span>
<span class="line"><span style="color:#005CC5;">  this</span><span style="color:#24292E;">.states </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> []</span></span>
<span class="line"><span style="color:#6A737D;">  // 一个变量记录当前状态位置</span></span>
<span class="line"><span style="color:#005CC5;">  this</span><span style="color:#24292E;">.currentIndex </span><span style="color:#D73A49;">=</span><span style="color:#005CC5;"> 0</span></span>
<span class="line"><span style="color:#24292E;"> }</span></span>
<span class="line"><span style="color:#6A737D;"> // 移动方法，每次移动记录状态</span></span>
<span class="line"><span style="color:#6F42C1;"> move</span><span style="color:#24292E;">(</span><span style="color:#E36209;">type</span><span style="color:#24292E;">, </span><span style="color:#E36209;">num</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#6A737D;">  // 移动DIV的具体操作，此处未实现</span></span>
<span class="line"><span style="color:#6A737D;">  // changeDiv(type, num)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">  // 记录本次操作到states里面去</span></span>
<span class="line"><span style="color:#005CC5;">  this</span><span style="color:#24292E;">.states.</span><span style="color:#6F42C1;">push</span><span style="color:#24292E;">({ type, num })</span></span>
<span class="line"><span style="color:#6A737D;">  // 改变当前状态指针</span></span>
<span class="line"><span style="color:#005CC5;">  this</span><span style="color:#24292E;">.currentIndex </span><span style="color:#D73A49;">=</span><span style="color:#005CC5;"> this</span><span style="color:#24292E;">.states.</span><span style="color:#005CC5;">length</span><span style="color:#D73A49;"> -</span><span style="color:#005CC5;"> 1</span></span>
<span class="line"><span style="color:#24292E;"> }</span></span>
<span class="line"><span style="color:#6A737D;"> // 前进</span></span>
<span class="line"><span style="color:#6F42C1;"> forward</span><span style="color:#24292E;">() {</span></span>
<span class="line"><span style="color:#6A737D;">  // 如果当前不是最后一个状态</span></span>
<span class="line"><span style="color:#D73A49;">  if</span><span style="color:#24292E;"> (</span><span style="color:#005CC5;">this</span><span style="color:#24292E;">.currentIndex </span><span style="color:#D73A49;">&lt;</span><span style="color:#005CC5;"> this</span><span style="color:#24292E;">.states.</span><span style="color:#005CC5;">length</span><span style="color:#D73A49;"> -</span><span style="color:#005CC5;"> 1</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#6A737D;">   // 取出前进的状态</span></span>
<span class="line"><span style="color:#005CC5;">   this</span><span style="color:#24292E;">.currentIndex</span><span style="color:#D73A49;">++</span></span>
<span class="line"><span style="color:#D73A49;">   const</span><span style="color:#005CC5;"> state</span><span style="color:#D73A49;"> =</span><span style="color:#005CC5;"> this</span><span style="color:#24292E;">.states[</span><span style="color:#005CC5;">this</span><span style="color:#24292E;">.currentIndex]</span></span>
<span class="line"><span style="color:#24292E;">   console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;前进: &#39;</span><span style="color:#24292E;">, state)</span></span>
<span class="line"><span style="color:#6A737D;">   // 执行该状态位置</span></span>
<span class="line"><span style="color:#6A737D;">   // changeDiv(state.type, state.num)</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"><span style="color:#24292E;"> }</span></span>
<span class="line"><span style="color:#6A737D;"> // 后退</span></span>
<span class="line"><span style="color:#6F42C1;"> back</span><span style="color:#24292E;">() {</span></span>
<span class="line"><span style="color:#6A737D;">  // 如果当前不是第一个状态</span></span>
<span class="line"><span style="color:#D73A49;">  if</span><span style="color:#24292E;"> (</span><span style="color:#005CC5;">this</span><span style="color:#24292E;">.currentIndex </span><span style="color:#D73A49;">&gt;</span><span style="color:#005CC5;"> 0</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#6A737D;">   // 取出后退的状态</span></span>
<span class="line"><span style="color:#005CC5;">   this</span><span style="color:#24292E;">.currentState</span><span style="color:#D73A49;">--</span></span>
<span class="line"><span style="color:#D73A49;">   const</span><span style="color:#005CC5;"> state</span><span style="color:#D73A49;"> =</span><span style="color:#005CC5;"> this</span><span style="color:#24292E;">.states[</span><span style="color:#005CC5;">this</span><span style="color:#24292E;">.currentIndex]</span></span>
<span class="line"><span style="color:#24292E;">   console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;后退: &#39;</span><span style="color:#24292E;">, state)</span></span>
<span class="line"><span style="color:#6A737D;">   // 执行该状态位置</span></span>
<span class="line"><span style="color:#6A737D;">   // changeDiv(state.type, state.num)</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"><span style="color:#24292E;"> }</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div>`,12)]))}const D=n(o,[["render",e]]);export{C as __pageData,D as default};
