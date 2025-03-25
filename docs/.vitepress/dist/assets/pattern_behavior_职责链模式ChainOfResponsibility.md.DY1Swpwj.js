import{_ as n,c as a,o as p,ag as l}from"./chunks/framework.DPDPlp3K.js";const C=JSON.parse('{"title":"职责链模式 Chain of Responsibility","description":"","frontmatter":{},"headers":[],"relativePath":"pattern/behavior/职责链模式ChainOfResponsibility.md","filePath":"pattern/behavior/职责链模式ChainOfResponsibility.md"}'),o={name:"pattern/behavior/职责链模式ChainOfResponsibility.md"};function e(c,s,t,r,y,i){return p(),a("div",null,s[0]||(s[0]=[l(`<h1 id="职责链模式-chain-of-responsibility" tabindex="-1">职责链模式 Chain of Responsibility <a class="header-anchor" href="#职责链模式-chain-of-responsibility" aria-label="Permalink to &quot;职责链模式 Chain of Responsibility&quot;">​</a></h1><p>职责链模式（Chain of Responsibility）: 解决请求的发送者与请求的接受者之间的耦合,通过职责链上的多个对象对分解请求流程,实现请求在多个对象之间的传递,直到最后一个对象完成请求的处理。</p><p>职责链模式（Chain of responsibility）是使多个对象都有机会处理请求，从而避免请求的发送者和接受者之间的耦合关系。将这个对象连成一条链，并沿着这条链传递该请求，直到有一个对象处理他为止。职责链模式的名字非常形象，一系列可能会处理请求的对象被该连接成一条链，请求在这些对象之间依次传递，直到遇到一个可以处理它的对象，我们把这些对象成为链中的节点。</p><p>优点：请求发送者只需要知道链中的第一个节点，从而弱化了发送者和一组接收者之间的强联系。</p><h2 id="实例" tabindex="-1">实例 <a class="header-anchor" href="#实例" aria-label="Permalink to &quot;实例&quot;">​</a></h2><ul><li>axios 拦截器</li><li>交押金预定手机</li></ul><h3 id="axios-拦截器" tabindex="-1">axios 拦截器 <a class="header-anchor" href="#axios-拦截器" aria-label="Permalink to &quot;axios 拦截器&quot;">​</a></h3><p>Axios 的拦截器有请求拦截器和响应拦截器，执行的顺序是请求拦截器 -&gt; 发起请求 -&gt; 响应拦截器，这其实就是一个链条上串起了三个职责。</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-light vp-code" tabindex="0"><code><span class="line"><span style="color:#6A737D;">// instance.interceptors.request.use(fulfilled, rejected)</span></span>
<span class="line"><span style="color:#D73A49;">function</span><span style="color:#6F42C1;"> Axios</span><span style="color:#24292E;">() {</span></span>
<span class="line"><span style="color:#6A737D;">  // 实例上有个interceptors对象，里面有request和response两个属性</span></span>
<span class="line"><span style="color:#6A737D;">  // 这两个属性都是InterceptorManager的实例</span></span>
<span class="line"><span style="color:#005CC5;">  this</span><span style="color:#24292E;">.interceptors </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">    request: </span><span style="color:#D73A49;">new</span><span style="color:#6F42C1;"> InterceptorManager</span><span style="color:#24292E;">(),</span></span>
<span class="line"><span style="color:#24292E;">    response: </span><span style="color:#D73A49;">new</span><span style="color:#6F42C1;"> InterceptorManager</span><span style="color:#24292E;">(),</span></span>
<span class="line"><span style="color:#24292E;">  };</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">function</span><span style="color:#6F42C1;"> InterceptorManager</span><span style="color:#24292E;">() {</span></span>
<span class="line"><span style="color:#6A737D;">  // 实例上有一个数组，存储拦截器方法</span></span>
<span class="line"><span style="color:#005CC5;">  this</span><span style="color:#24292E;">.handlers </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> [];</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// InterceptorManager有一个实例方法use</span></span>
<span class="line"><span style="color:#005CC5;">InterceptorManager</span><span style="color:#24292E;">.</span><span style="color:#005CC5;">prototype</span><span style="color:#24292E;">.</span><span style="color:#6F42C1;">use</span><span style="color:#D73A49;"> =</span><span style="color:#D73A49;"> function</span><span style="color:#24292E;"> (</span><span style="color:#E36209;">fulfilled</span><span style="color:#24292E;">, </span><span style="color:#E36209;">rejected</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#6A737D;">  // 这个方法很简单，把传入的回调放到handlers里面就行</span></span>
<span class="line"><span style="color:#005CC5;">  this</span><span style="color:#24292E;">.handlers.</span><span style="color:#6F42C1;">push</span><span style="color:#24292E;">({ fulfilled, rejected });</span></span>
<span class="line"><span style="color:#24292E;">};</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 发起请求调用instance.request的时候真正执行的就是请求拦截器 -&gt; 发起请求 -&gt; 响应拦截器链条</span></span>
<span class="line"><span style="color:#005CC5;">Axios</span><span style="color:#24292E;">.</span><span style="color:#005CC5;">prototype</span><span style="color:#24292E;">.</span><span style="color:#6F42C1;">request</span><span style="color:#D73A49;"> =</span><span style="color:#D73A49;"> function</span><span style="color:#24292E;"> (</span><span style="color:#E36209;">config</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#6A737D;">  // chain里面存的就是要执行的方法链条</span></span>
<span class="line"><span style="color:#6A737D;">  // dispatchRequest是发起网络请求的方法</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">  // chain里面先把发起网络请求的方法放进去，他的位置应该在chain的中间</span></span>
<span class="line"><span style="color:#D73A49;">  const</span><span style="color:#005CC5;"> chain</span><span style="color:#D73A49;"> =</span><span style="color:#24292E;"> [dispatchRequest, </span><span style="color:#005CC5;">undefined</span><span style="color:#24292E;">];</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">  // chain前面是请求拦截器的方法,从request.handlers里面取出来放进去</span></span>
<span class="line"><span style="color:#005CC5;">  this</span><span style="color:#24292E;">.interceptors.request.handlers.</span><span style="color:#6F42C1;">forEach</span><span style="color:#24292E;">(</span></span>
<span class="line"><span style="color:#D73A49;">    function</span><span style="color:#6F42C1;"> unshiftRequestInterceptors</span><span style="color:#24292E;">(</span><span style="color:#E36209;">interceptor</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">      chain.</span><span style="color:#6F42C1;">unshift</span><span style="color:#24292E;">(interceptor.fulfilled, interceptor.rejected);</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">  );</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">  // chain后面是响应拦截器的方法，从response.handlers里面取出来放进去</span></span>
<span class="line"><span style="color:#005CC5;">  this</span><span style="color:#24292E;">.interceptors.response.handlers.</span><span style="color:#6F42C1;">forEach</span><span style="color:#24292E;">(</span><span style="color:#D73A49;">function</span><span style="color:#6F42C1;"> pushResponseInterceptors</span><span style="color:#24292E;">(</span></span>
<span class="line"><span style="color:#E36209;">    interceptor</span></span>
<span class="line"><span style="color:#24292E;">  ) {</span></span>
<span class="line"><span style="color:#24292E;">    chain.</span><span style="color:#6F42C1;">push</span><span style="color:#24292E;">(interceptor.fulfilled, interceptor.rejected);</span></span>
<span class="line"><span style="color:#24292E;">  });</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">  // 经过上述代码的组织，chain这时候是这样的：</span></span>
<span class="line"><span style="color:#6A737D;">  // [request.fulfilled, request.rejected, dispatchRequest, undefined, response.fulfilled,</span></span>
<span class="line"><span style="color:#6A737D;">  // response.rejected]</span></span>
<span class="line"><span style="color:#6A737D;">  // 这其实已经按照请求拦截器 -&gt; 发起请求 -&gt; 响应拦截器的顺序排好了，拿来执行就行</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">  let</span><span style="color:#24292E;"> promise </span><span style="color:#D73A49;">=</span><span style="color:#005CC5;"> Promise</span><span style="color:#24292E;">.</span><span style="color:#6F42C1;">resolve</span><span style="color:#24292E;">(config); </span><span style="color:#6A737D;">// 先来个空的promise，好开启then</span></span>
<span class="line"><span style="color:#D73A49;">  while</span><span style="color:#24292E;"> (chain.</span><span style="color:#005CC5;">length</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#6A737D;">    // 用promise.then进行链式调用</span></span>
<span class="line"><span style="color:#24292E;">    promise </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> promise.</span><span style="color:#6F42C1;">then</span><span style="color:#24292E;">(chain.</span><span style="color:#6F42C1;">shift</span><span style="color:#24292E;">(), chain.</span><span style="color:#6F42C1;">shift</span><span style="color:#24292E;">());</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">  return</span><span style="color:#24292E;"> promise;</span></span>
<span class="line"><span style="color:#24292E;">};</span></span></code></pre></div><h3 id="交押金预定手机" tabindex="-1">交押金预定手机 <a class="header-anchor" href="#交押金预定手机" aria-label="Permalink to &quot;交押金预定手机&quot;">​</a></h3><p>假设一个电视购物网站对于某部新上市的手机经过了 2 轮缴纳 500 元定金与 200 元定金的预定，现在已经到了正式购买的阶段。 支付了 500 元定金的用户在购买阶段可以使用 100 元优惠券，200 元定金可以使用 50 元优惠券，普通用户没有优惠且当库存不足不一定能买到。</p><p>约定： orderType: 表示订单类型(定金或者普通用户),code 的值为 1 时候是 500 元定金用户，为 2 是 200 元定金用户，为 3 则是普通用户。 pay : 表示用户是否支付定金，用户虽然下过 500 元定金的订单但是如果他一直没有支付定金，那么只能降级为普通用户。 stock : 仅用户普通用户的库存数量，定金用户不受限制。 首先定义三种预定的客户的订单并且让每种客户订单有满足当前预定条件和不满足当前预定条件（需后面继续处理）</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-light vp-code" tabindex="0"><code><span class="line"><span style="color:#6A737D;"> // 创建职责链对象</span></span>
<span class="line"><span style="color:#D73A49;">class</span><span style="color:#6F42C1;"> Chain</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#D73A49;">  constructor</span><span style="color:#24292E;">(</span><span style="color:#E36209;">fn</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#005CC5;">    this</span><span style="color:#24292E;">.fn </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> fn</span></span>
<span class="line"><span style="color:#005CC5;">    this</span><span style="color:#24292E;">.successor </span><span style="color:#D73A49;">=</span><span style="color:#005CC5;"> null</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"><span style="color:#6A737D;">  // 设置下一个职责</span></span>
<span class="line"><span style="color:#6F42C1;">  setNextSuccessor</span><span style="color:#24292E;">(</span><span style="color:#E36209;">successor</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#D73A49;">    return</span><span style="color:#24292E;"> (</span><span style="color:#005CC5;">this</span><span style="color:#24292E;">.successor </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> successor)</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"><span style="color:#6A737D;">  // 执行下一个职责</span></span>
<span class="line"><span style="color:#6F42C1;">  passRequest</span><span style="color:#24292E;">() {</span></span>
<span class="line"><span style="color:#D73A49;">    let</span><span style="color:#24292E;"> result </span><span style="color:#D73A49;">=</span><span style="color:#005CC5;"> this</span><span style="color:#24292E;">.fn.</span><span style="color:#6F42C1;">apply</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">this</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">arguments</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#D73A49;">    if</span><span style="color:#24292E;"> (result </span><span style="color:#D73A49;">===</span><span style="color:#032F62;"> &#39;nextSuccessor&#39;</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#D73A49;">      return</span><span style="color:#005CC5;"> this</span><span style="color:#24292E;">.successor </span><span style="color:#D73A49;">&amp;&amp;</span><span style="color:#005CC5;"> this</span><span style="color:#24292E;">.successor.passRequest.</span><span style="color:#6F42C1;">apply</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">this</span><span style="color:#24292E;">.successor, </span><span style="color:#005CC5;">arguments</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#D73A49;">    return</span><span style="color:#24292E;"> result</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"><span style="color:#6A737D;">  // 支持异步手动调用执行下一个职责</span></span>
<span class="line"><span style="color:#6F42C1;">  next</span><span style="color:#24292E;">() {</span></span>
<span class="line"><span style="color:#D73A49;">    return</span><span style="color:#005CC5;"> this</span><span style="color:#24292E;">.successor </span><span style="color:#D73A49;">&amp;&amp;</span><span style="color:#005CC5;"> this</span><span style="color:#24292E;">.successor.passRequest.</span><span style="color:#6F42C1;">apply</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">this</span><span style="color:#24292E;">.successor, </span><span style="color:#005CC5;">arguments</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 500 元客户订单</span></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#6F42C1;"> order500</span><span style="color:#D73A49;"> =</span><span style="color:#D73A49;"> function</span><span style="color:#24292E;"> (</span><span style="color:#E36209;">orderType</span><span style="color:#24292E;">, </span><span style="color:#E36209;">pay</span><span style="color:#24292E;">, </span><span style="color:#E36209;">stock</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#D73A49;">  if</span><span style="color:#24292E;"> (orderType </span><span style="color:#D73A49;">===</span><span style="color:#005CC5;"> 1</span><span style="color:#D73A49;"> &amp;&amp;</span><span style="color:#24292E;"> pay) {</span></span>
<span class="line"><span style="color:#24292E;">    console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;500 元定金预购, 得到100 优惠券&#39;</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#24292E;">  } </span><span style="color:#D73A49;">else</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#D73A49;">    return</span><span style="color:#032F62;"> &#39;nextSuccessor&#39;</span><span style="color:#6A737D;"> // unknow the next node but always pass to next.</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 200 元客户订单</span></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#6F42C1;"> order200</span><span style="color:#D73A49;"> =</span><span style="color:#D73A49;"> function</span><span style="color:#24292E;"> (</span><span style="color:#E36209;">orderType</span><span style="color:#24292E;">, </span><span style="color:#E36209;">pay</span><span style="color:#24292E;">, </span><span style="color:#E36209;">stock</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#D73A49;">  if</span><span style="color:#24292E;"> (orderType </span><span style="color:#D73A49;">===</span><span style="color:#005CC5;"> 2</span><span style="color:#D73A49;"> &amp;&amp;</span><span style="color:#24292E;"> pay) {</span></span>
<span class="line"><span style="color:#24292E;">    console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;200 元定金预购，得到100 优惠券&#39;</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#24292E;">  } </span><span style="color:#D73A49;">else</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#D73A49;">    return</span><span style="color:#032F62;"> &#39;nextSuccessor&#39;</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 无预约客户订单</span></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#6F42C1;"> orderNormal</span><span style="color:#D73A49;"> =</span><span style="color:#D73A49;"> function</span><span style="color:#24292E;"> (</span><span style="color:#E36209;">orderType</span><span style="color:#24292E;">, </span><span style="color:#E36209;">pay</span><span style="color:#24292E;">, </span><span style="color:#E36209;">stock</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#D73A49;">  if</span><span style="color:#24292E;"> (stock </span><span style="color:#D73A49;">&gt;</span><span style="color:#005CC5;"> 0</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">    console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;正常购买, 无优惠券&#39;</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#24292E;">  } </span><span style="color:#D73A49;">else</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">    console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;无库存&#39;</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 把3个订单函数分别包装成职责链的节点</span></span>
<span class="line"><span style="color:#D73A49;">let</span><span style="color:#24292E;"> chainOrder500 </span><span style="color:#D73A49;">=</span><span style="color:#D73A49;"> new</span><span style="color:#6F42C1;"> Chain</span><span style="color:#24292E;">(order500)</span></span>
<span class="line"><span style="color:#D73A49;">let</span><span style="color:#24292E;"> chainOrder200 </span><span style="color:#D73A49;">=</span><span style="color:#D73A49;"> new</span><span style="color:#6F42C1;"> Chain</span><span style="color:#24292E;">(order200)</span></span>
<span class="line"><span style="color:#D73A49;">let</span><span style="color:#24292E;"> chainOrderNormal </span><span style="color:#D73A49;">=</span><span style="color:#D73A49;"> new</span><span style="color:#6F42C1;"> Chain</span><span style="color:#24292E;">(orderNormal)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 把上面封装的节点连成一条线，依次判断执行</span></span>
<span class="line"><span style="color:#24292E;">chainOrder500.</span><span style="color:#6F42C1;">setNextSuccessor</span><span style="color:#24292E;">(chainOrder200)</span></span>
<span class="line"><span style="color:#24292E;">chainOrder200.</span><span style="color:#6F42C1;">setNextSuccessor</span><span style="color:#24292E;">(chainOrderNormal)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 用例</span></span>
<span class="line"><span style="color:#24292E;">chainOrder500.</span><span style="color:#6F42C1;">passRequest</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">1</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">true</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">10</span><span style="color:#24292E;">) </span><span style="color:#6A737D;">// 500 元定金预购, 得到100 优惠券</span></span>
<span class="line"><span style="color:#24292E;">chainOrder200.</span><span style="color:#6F42C1;">passRequest</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">2</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">false</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">8</span><span style="color:#24292E;">) </span><span style="color:#6A737D;">// 正常购买, 无优惠券</span></span></code></pre></div>`,13)]))}const h=n(o,[["render",e]]);export{C as __pageData,h as default};
