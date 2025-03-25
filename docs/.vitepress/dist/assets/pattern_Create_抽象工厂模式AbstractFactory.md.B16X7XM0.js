import{_ as n,c as a,o as p,ag as l}from"./chunks/framework.DPDPlp3K.js";const C=JSON.parse('{"title":"抽象工厂模式 Abstract Factory","description":"","frontmatter":{},"headers":[],"relativePath":"pattern/Create/抽象工厂模式AbstractFactory.md","filePath":"pattern/Create/抽象工厂模式AbstractFactory.md"}'),o={name:"pattern/Create/抽象工厂模式AbstractFactory.md"};function e(c,s,t,r,y,i){return p(),a("div",null,s[0]||(s[0]=[l(`<h1 id="抽象工厂模式-abstract-factory" tabindex="-1">抽象工厂模式 Abstract Factory <a class="header-anchor" href="#抽象工厂模式-abstract-factory" aria-label="Permalink to &quot;抽象工厂模式 Abstract Factory&quot;">​</a></h1><p>抽象工厂模式是设计模式中最抽象的一种，也是创建模式中唯一一种抽象化创建模式。该模式创建出的结果不是一个真实的对象实例，而是一个类簇，它制定了类的结构，这也就区别于简单工厂模式创建单一对象，工厂方法模式创建多类对象。当然由于 JavaScript 中不支持抽象化创建与虚拟方法，所以导致这种模式不能像其他面向对象语言中应用得那么广泛。</p><h2 id="实例" tabindex="-1">实例 <a class="header-anchor" href="#实例" aria-label="Permalink to &quot;实例&quot;">​</a></h2><h3 id="汽车抽象工厂" tabindex="-1">汽车抽象工厂 <a class="header-anchor" href="#汽车抽象工厂" aria-label="Permalink to &quot;汽车抽象工厂&quot;">​</a></h3><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-light vp-code" tabindex="0"><code><span class="line"><span style="color:#6A737D;">// 抽象工厂方法</span></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#6F42C1;"> VehicleFactory</span><span style="color:#D73A49;"> =</span><span style="color:#D73A49;"> function</span><span style="color:#24292E;">(</span><span style="color:#E36209;">subType</span><span style="color:#24292E;">, </span><span style="color:#E36209;">superType</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#6A737D;">  // 判断抽象工厂中是否有该抽象类</span></span>
<span class="line"><span style="color:#D73A49;">  if</span><span style="color:#24292E;">(</span><span style="color:#D73A49;">typeof</span><span style="color:#24292E;"> VehicleFactory[superType] </span><span style="color:#D73A49;">===</span><span style="color:#032F62;"> &#39;function&#39;</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#6A737D;">    // 缓存类</span></span>
<span class="line"><span style="color:#D73A49;">    function</span><span style="color:#6F42C1;"> F</span><span style="color:#24292E;">() {};</span></span>
<span class="line"><span style="color:#6A737D;">    // 继承父类属性和方法</span></span>
<span class="line"><span style="color:#005CC5;">    F</span><span style="color:#24292E;">.</span><span style="color:#005CC5;">prototype</span><span style="color:#D73A49;"> =</span><span style="color:#D73A49;"> new</span><span style="color:#24292E;"> VehicleFactory[superType]();</span></span>
<span class="line"><span style="color:#6A737D;">    // 将子类constructor指向子类</span></span>
<span class="line"><span style="color:#24292E;">    subType.</span><span style="color:#005CC5;">constructor</span><span style="color:#D73A49;"> =</span><span style="color:#24292E;"> subType;</span></span>
<span class="line"><span style="color:#6A737D;">    // 子类原型继承“父类”</span></span>
<span class="line"><span style="color:#005CC5;">    subType</span><span style="color:#24292E;">.</span><span style="color:#005CC5;">prototype</span><span style="color:#D73A49;"> =</span><span style="color:#D73A49;"> new</span><span style="color:#6F42C1;"> F</span><span style="color:#24292E;">();</span></span>
<span class="line"><span style="color:#24292E;">  } </span><span style="color:#D73A49;">else</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#6A737D;">    // 不存在该抽象类抛出错误</span></span>
<span class="line"><span style="color:#D73A49;">    throw</span><span style="color:#D73A49;"> new</span><span style="color:#6F42C1;"> Error</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;未创建该抽象类&#39;</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 小汽车抽象类</span></span>
<span class="line"><span style="color:#24292E;">VehicleFactory.</span><span style="color:#6F42C1;">car</span><span style="color:#D73A49;"> =</span><span style="color:#D73A49;"> function</span><span style="color:#24292E;">() {</span></span>
<span class="line"><span style="color:#005CC5;">  this</span><span style="color:#24292E;">.type </span><span style="color:#D73A49;">=</span><span style="color:#032F62;"> &#39;car&#39;</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">};</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">VehicleFactory.car.</span><span style="color:#005CC5;">prototype</span><span style="color:#D73A49;"> =</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#6F42C1;">  getPrice</span><span style="color:#24292E;">: </span><span style="color:#D73A49;">function</span><span style="color:#24292E;">() {</span></span>
<span class="line"><span style="color:#D73A49;">    return</span><span style="color:#D73A49;"> new</span><span style="color:#6F42C1;"> Error</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;抽象方法不能调用&#39;</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">  },</span></span>
<span class="line"><span style="color:#6F42C1;">  getspeed</span><span style="color:#24292E;">: </span><span style="color:#D73A49;">function</span><span style="color:#24292E;">() {</span></span>
<span class="line"><span style="color:#D73A49;">    return</span><span style="color:#D73A49;"> new</span><span style="color:#6F42C1;"> Error</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;抽象方法不能调用&#39;</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"><span style="color:#24292E;">};</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 公交车抽象类</span></span>
<span class="line"><span style="color:#24292E;">VehicleFactory.</span><span style="color:#6F42C1;">Bus</span><span style="color:#D73A49;"> =</span><span style="color:#D73A49;"> function</span><span style="color:#24292E;">() {</span></span>
<span class="line"><span style="color:#005CC5;"> this</span><span style="color:#24292E;">.type </span><span style="color:#D73A49;">=</span><span style="color:#032F62;"> &#39;bus&#39;</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">};</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">VehicleFactory.Bus.</span><span style="color:#005CC5;">prototype</span><span style="color:#D73A49;"> =</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#6F42C1;">  getPrice</span><span style="color:#24292E;">: </span><span style="color:#D73A49;">function</span><span style="color:#24292E;">() {</span></span>
<span class="line"><span style="color:#D73A49;">    return</span><span style="color:#D73A49;"> new</span><span style="color:#6F42C1;"> Error</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;抽象方法不能调用&#39;</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">  },</span></span>
<span class="line"><span style="color:#6F42C1;">  getPassengerNum</span><span style="color:#24292E;">: </span><span style="color:#D73A49;">function</span><span style="color:#24292E;">() {</span></span>
<span class="line"><span style="color:#D73A49;">    return</span><span style="color:#D73A49;"> new</span><span style="color:#6F42C1;"> Error</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;抽象方法不能调用&#39;</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"><span style="color:#24292E;">};</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 货车抽象类</span></span>
<span class="line"><span style="color:#24292E;">VehicleFactory.</span><span style="color:#6F42C1;">Truck</span><span style="color:#D73A49;"> =</span><span style="color:#D73A49;"> function</span><span style="color:#24292E;">() {</span></span>
<span class="line"><span style="color:#005CC5;">  this</span><span style="color:#24292E;">.type </span><span style="color:#D73A49;">=</span><span style="color:#032F62;"> &#39;truck&#39;</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">};</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">VehicleFactory.Truck.</span><span style="color:#005CC5;">prototype</span><span style="color:#D73A49;"> =</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#6F42C1;">  getPrice</span><span style="color:#24292E;">: </span><span style="color:#D73A49;">function</span><span style="color:#24292E;">() {</span></span>
<span class="line"><span style="color:#D73A49;">    return</span><span style="color:#D73A49;"> new</span><span style="color:#6F42C1;"> Error</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;抽象方法不能调用&#39;</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">  },</span></span>
<span class="line"><span style="color:#6F42C1;">  getTrainload</span><span style="color:#24292E;">: </span><span style="color:#D73A49;">function</span><span style="color:#24292E;">() {</span></span>
<span class="line"><span style="color:#D73A49;">    return</span><span style="color:#D73A49;"> new</span><span style="color:#6F42C1;"> Error</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;抽象方法不能调用&#39;</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 宝马汽车子类</span></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#6F42C1;"> BMW</span><span style="color:#D73A49;"> =</span><span style="color:#D73A49;"> function</span><span style="color:#24292E;">(</span><span style="color:#E36209;">price</span><span style="color:#24292E;">, </span><span style="color:#E36209;">speed</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#005CC5;">  this</span><span style="color:#24292E;">.price </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> price;</span></span>
<span class="line"><span style="color:#005CC5;">  this</span><span style="color:#24292E;">.speed </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> speed;</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 抽象工厂实现对car抽象类的继承</span></span>
<span class="line"><span style="color:#6F42C1;">VehicleFactory</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">BMW</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&#39;car&#39;</span><span style="color:#24292E;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#005CC5;">BMW</span><span style="color:#24292E;">.</span><span style="color:#005CC5;">prototype</span><span style="color:#24292E;">.</span><span style="color:#6F42C1;">getPrice</span><span style="color:#D73A49;"> =</span><span style="color:#D73A49;"> function</span><span style="color:#24292E;">() {</span></span>
<span class="line"><span style="color:#D73A49;">  return</span><span style="color:#005CC5;"> this</span><span style="color:#24292E;">.price;</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#005CC5;">BMW</span><span style="color:#24292E;">.</span><span style="color:#005CC5;">prototype</span><span style="color:#24292E;">.</span><span style="color:#6F42C1;">getspeed</span><span style="color:#D73A49;"> =</span><span style="color:#D73A49;"> function</span><span style="color:#24292E;">() {</span></span>
<span class="line"><span style="color:#D73A49;">  return</span><span style="color:#005CC5;"> this</span><span style="color:#24292E;">.speed;</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 兰博基尼汽车子类</span></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#6F42C1;"> Lamborghini</span><span style="color:#D73A49;"> =</span><span style="color:#D73A49;"> function</span><span style="color:#24292E;">(</span><span style="color:#E36209;">price</span><span style="color:#24292E;">, </span><span style="color:#E36209;">speed</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#005CC5;">  this</span><span style="color:#24292E;">.price </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> price;</span></span>
<span class="line"><span style="color:#005CC5;">  this</span><span style="color:#24292E;">.speed </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> speed;</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 抽象工厂实现对car抽象类的继承</span></span>
<span class="line"><span style="color:#6F42C1;">VehicleFactory</span><span style="color:#24292E;">(Lamborghini, </span><span style="color:#032F62;">&#39;car&#39;</span><span style="color:#24292E;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#005CC5;">Lamborghini</span><span style="color:#24292E;">.</span><span style="color:#005CC5;">prototype</span><span style="color:#24292E;">.</span><span style="color:#6F42C1;">getPrice</span><span style="color:#D73A49;"> =</span><span style="color:#D73A49;"> function</span><span style="color:#24292E;">() {</span></span>
<span class="line"><span style="color:#D73A49;">  return</span><span style="color:#005CC5;"> this</span><span style="color:#24292E;">.price;</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#005CC5;">Lamborghini</span><span style="color:#24292E;">.</span><span style="color:#005CC5;">prototype</span><span style="color:#24292E;">.</span><span style="color:#6F42C1;">getspeed</span><span style="color:#D73A49;"> =</span><span style="color:#D73A49;"> function</span><span style="color:#24292E;">() {</span></span>
<span class="line"><span style="color:#D73A49;">  return</span><span style="color:#005CC5;"> this</span><span style="color:#24292E;">.speed;</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 宇通汽车子类</span></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#6F42C1;"> YUToNG</span><span style="color:#D73A49;"> =</span><span style="color:#D73A49;"> function</span><span style="color:#24292E;">(</span><span style="color:#E36209;">price</span><span style="color:#24292E;">, </span><span style="color:#E36209;">passenger</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#005CC5;">  this</span><span style="color:#24292E;">.price </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> price;</span></span>
<span class="line"><span style="color:#005CC5;">  this</span><span style="color:#24292E;">.passenger </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> passenger;</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 抽象工厂实现对Bus抽象类的继承</span></span>
<span class="line"><span style="color:#6F42C1;">VehicleFactory</span><span style="color:#24292E;">(YUToNG, </span><span style="color:#032F62;">&#39;Bus&#39;</span><span style="color:#24292E;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#005CC5;">YUToNG</span><span style="color:#24292E;">.</span><span style="color:#005CC5;">prototype</span><span style="color:#24292E;">.</span><span style="color:#6F42C1;">getPrice</span><span style="color:#D73A49;"> =</span><span style="color:#D73A49;"> function</span><span style="color:#24292E;">() {</span></span>
<span class="line"><span style="color:#D73A49;">  return</span><span style="color:#005CC5;"> this</span><span style="color:#24292E;">.price;</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#005CC5;">YUToNG</span><span style="color:#24292E;">.</span><span style="color:#005CC5;">prototype</span><span style="color:#24292E;">.</span><span style="color:#6F42C1;">getPassengerNum</span><span style="color:#D73A49;"> =</span><span style="color:#D73A49;"> function</span><span style="color:#24292E;">() {</span></span>
<span class="line"><span style="color:#D73A49;">  return</span><span style="color:#005CC5;"> this</span><span style="color:#24292E;">.passenger;</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 奔驰汽车子类</span></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#6F42C1;"> BenzTruck</span><span style="color:#D73A49;"> =</span><span style="color:#D73A49;"> function</span><span style="color:#24292E;">(</span><span style="color:#E36209;">price</span><span style="color:#24292E;">, </span><span style="color:#E36209;">trainLoad</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#005CC5;">  this</span><span style="color:#24292E;">.price </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> price;</span></span>
<span class="line"><span style="color:#005CC5;">  this</span><span style="color:#24292E;">.trainLoad </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> trainLoad;</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 抽象工厂实现对Truck抽象类的继承</span></span>
<span class="line"><span style="color:#6F42C1;">VehicleFactory</span><span style="color:#24292E;">(BenzTruck, </span><span style="color:#032F62;">&#39;Truck&#39;</span><span style="color:#24292E;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#005CC5;">BenzTruck</span><span style="color:#24292E;">.</span><span style="color:#005CC5;">prototype</span><span style="color:#24292E;">.</span><span style="color:#6F42C1;">getPrice</span><span style="color:#D73A49;"> =</span><span style="color:#D73A49;"> function</span><span style="color:#24292E;">() {</span></span>
<span class="line"><span style="color:#D73A49;">  return</span><span style="color:#005CC5;"> this</span><span style="color:#24292E;">.price;</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#005CC5;">BenzTruck</span><span style="color:#24292E;">.</span><span style="color:#005CC5;">prototype</span><span style="color:#24292E;">.</span><span style="color:#6F42C1;">getTrainload</span><span style="color:#D73A49;"> =</span><span style="color:#D73A49;"> function</span><span style="color:#24292E;">() {</span></span>
<span class="line"><span style="color:#D73A49;">  return</span><span style="color:#005CC5;"> this</span><span style="color:#24292E;">.price;</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#005CC5;"> truck</span><span style="color:#D73A49;"> =</span><span style="color:#D73A49;"> new</span><span style="color:#6F42C1;"> BenzTruck</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">1000000</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">1000</span><span style="color:#24292E;">)；</span></span>
<span class="line"><span style="color:#24292E;">console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(truck.</span><span style="color:#6F42C1;">getPrice</span><span style="color:#24292E;">())；  </span><span style="color:#6A737D;">// 1000000</span></span>
<span class="line"><span style="color:#24292E;">console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(truck.type)；         </span><span style="color:#6A737D;">// truck</span></span></code></pre></div>`,5)]))}const A=n(o,[["render",e]]);export{C as __pageData,A as default};
