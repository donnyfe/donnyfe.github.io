import{_ as n,c as a,o as l,ag as p}from"./chunks/framework.DPDPlp3K.js";const A=JSON.parse('{"title":"模板方法模式 Template Method","description":"","frontmatter":{},"headers":[],"relativePath":"pattern/behavior/模板方法模式TemplateMethod.md","filePath":"pattern/behavior/模板方法模式TemplateMethod.md"}'),o={name:"pattern/behavior/模板方法模式TemplateMethod.md"};function e(t,s,c,r,y,i){return l(),a("div",null,s[0]||(s[0]=[p(`<h1 id="模板方法模式-template-method" tabindex="-1">模板方法模式 Template Method <a class="header-anchor" href="#模板方法模式-template-method" aria-label="Permalink to &quot;模板方法模式 Template Method&quot;">​</a></h1><p>模板方法模式（Template Method）： 父类中定义一组操作算法骨架，而将一些实现步骤延迟到子类中，使得子类可以不改变父类的算法结构的同时可重新定义算法中某些实现步骤。</p><p>模板方法的核心在于对方法的重用，它将核心方法封装在基类中，让子类继承基类的方法，实现基类方法的共享，达到方法共用。当然这种设计模式也将导致基类控制子类必须遵守某些法则。这是一种行为的约束。当然为了让行为的约束更可靠，基类中封装的方法通常是不变的算法，或者具有稳定的调用方式。</p><p>子类继承的方法亦是可以扩展的，这就要求对基类继承的方法进行重写。当然为了更好地实践，我们通常要控制这种拓展，这样才能让基类对子类有更稳健的束缚力。然而子类对自身私有行为的拓展还是很有必要的。</p><p>模板方法模式是一个基于继承的设计模式，它是里氏代换原则的体现。它的核心思路很简单，将一些抽象化的操作抽离到基类中，将一些可能变化的操作操作交给子类根据对应的业务实现，利用了多态的特性，从而实现代码复用。</p><h2 id="实例" tabindex="-1">实例 <a class="header-anchor" href="#实例" aria-label="Permalink to &quot;实例&quot;">​</a></h2><ul><li>提示框设计</li><li>多类导航设计</li></ul><h3 id="提示框设计" tabindex="-1">提示框设计 <a class="header-anchor" href="#提示框设计" aria-label="Permalink to &quot;提示框设计&quot;">​</a></h3><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-light vp-code" tabindex="0"><code><span class="line"><span style="color:#6A737D;">// 基本提示框</span></span>
<span class="line"><span style="color:#D73A49;">class</span><span style="color:#6F42C1;"> Alert</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#D73A49;"> constructor</span><span style="color:#24292E;">(</span><span style="color:#E36209;">data</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#6A737D;">  // 设有数据则返回，防止后面程序执行</span></span>
<span class="line"><span style="color:#D73A49;">  if</span><span style="color:#24292E;"> (</span><span style="color:#D73A49;">!</span><span style="color:#24292E;">data) </span><span style="color:#D73A49;">return</span></span>
<span class="line"><span style="color:#6A737D;">  // 设置内容</span></span>
<span class="line"><span style="color:#005CC5;">  this</span><span style="color:#24292E;">.content </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> data.content</span></span>
<span class="line"><span style="color:#6A737D;">  // 创建提示框面板</span></span>
<span class="line"><span style="color:#005CC5;">  this</span><span style="color:#24292E;">.panel </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> document.</span><span style="color:#6F42C1;">createElement</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;div&#39;</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#6A737D;">  // 创建提示内容组件</span></span>
<span class="line"><span style="color:#005CC5;">  this</span><span style="color:#24292E;">.contentNode </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> document.</span><span style="color:#6F42C1;">createElement</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;p&#39;</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#6A737D;">  // 创建确定按钮组件</span></span>
<span class="line"><span style="color:#005CC5;">  this</span><span style="color:#24292E;">.confirmBtn </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> document.</span><span style="color:#6F42C1;">createElement</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;div&#39;</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#6A737D;">  // 创建关闭按钮组件</span></span>
<span class="line"><span style="color:#005CC5;">  this</span><span style="color:#24292E;">.closeBtn </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> document.</span><span style="color:#6F42C1;">createElement</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;div&#39;</span><span style="color:#24292E;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">  // 为提示框面板添加类</span></span>
<span class="line"><span style="color:#005CC5;">  this</span><span style="color:#24292E;">.panel.className </span><span style="color:#D73A49;">=</span><span style="color:#032F62;"> &#39;alert&#39;</span></span>
<span class="line"><span style="color:#6A737D;">  // 为关闭按钮添加类</span></span>
<span class="line"><span style="color:#005CC5;">  this</span><span style="color:#24292E;">.closeBtn.className </span><span style="color:#D73A49;">=</span><span style="color:#032F62;"> &#39;alert-close&#39;</span></span>
<span class="line"><span style="color:#6A737D;">  // 为确定按钮添加类</span></span>
<span class="line"><span style="color:#005CC5;">  this</span><span style="color:#24292E;">.confirmBtn.className </span><span style="color:#D73A49;">=</span><span style="color:#032F62;"> &#39;alert-confirm&#39;</span></span>
<span class="line"><span style="color:#6A737D;">  // 为确定按钮添加文案</span></span>
<span class="line"><span style="color:#005CC5;">  this</span><span style="color:#24292E;">.confirmBtn.innerHTML </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> data.confirm </span><span style="color:#D73A49;">||</span><span style="color:#032F62;"> &#39;确认&#39;</span></span>
<span class="line"><span style="color:#6A737D;">  // 为提示内容添加文本</span></span>
<span class="line"><span style="color:#005CC5;">  this</span><span style="color:#24292E;">.contentNode.innerHTML </span><span style="color:#D73A49;">=</span><span style="color:#005CC5;"> this</span><span style="color:#24292E;">.content</span></span>
<span class="line"><span style="color:#6A737D;">  // 点击确定按钮执行方法 如果data中有success方法则为success方法，否则为空函数</span></span>
<span class="line"><span style="color:#005CC5;">  this</span><span style="color:#24292E;">.success </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> data.success </span><span style="color:#D73A49;">||</span><span style="color:#24292E;"> (() </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {})</span></span>
<span class="line"><span style="color:#6A737D;">  // 点击关闭按钮执行方法</span></span>
<span class="line"><span style="color:#005CC5;">  this</span><span style="color:#24292E;">.fail </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> data.fail </span><span style="color:#D73A49;">||</span><span style="color:#24292E;"> (() </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {})</span></span>
<span class="line"><span style="color:#24292E;"> }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6F42C1;"> init</span><span style="color:#24292E;">() {</span></span>
<span class="line"><span style="color:#6A737D;">  // 生成提示框</span></span>
<span class="line"><span style="color:#005CC5;">  this</span><span style="color:#24292E;">.panel.</span><span style="color:#6F42C1;">appendChild</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">this</span><span style="color:#24292E;">.closeBtn)</span></span>
<span class="line"><span style="color:#005CC5;">  this</span><span style="color:#24292E;">.panel.</span><span style="color:#6F42C1;">appendChild</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">this</span><span style="color:#24292E;">.contentNode)</span></span>
<span class="line"><span style="color:#005CC5;">  this</span><span style="color:#24292E;">.panel.</span><span style="color:#6F42C1;">appendChild</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">this</span><span style="color:#24292E;">.confirmBtn)</span></span>
<span class="line"><span style="color:#24292E;">  document.body.</span><span style="color:#6F42C1;">appendChild</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">this</span><span style="color:#24292E;">.panel)</span></span>
<span class="line"><span style="color:#6A737D;">  // 绑定事件</span></span>
<span class="line"><span style="color:#005CC5;">  this</span><span style="color:#24292E;">.</span><span style="color:#6F42C1;">bindEvent</span><span style="color:#24292E;">()</span></span>
<span class="line"><span style="color:#6A737D;">  // 显示提示框</span></span>
<span class="line"><span style="color:#005CC5;">  this</span><span style="color:#24292E;">.</span><span style="color:#6F42C1;">show</span><span style="color:#24292E;">()</span></span>
<span class="line"><span style="color:#24292E;"> }</span></span>
<span class="line"><span style="color:#6F42C1;"> bindEvent</span><span style="color:#24292E;">() {</span></span>
<span class="line"><span style="color:#6A737D;">  // 关闭按钮点击事件</span></span>
<span class="line"><span style="color:#005CC5;">  this</span><span style="color:#24292E;">.closeBtn.</span><span style="color:#6F42C1;">onclick</span><span style="color:#D73A49;"> =</span><span style="color:#24292E;"> () </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#6A737D;">   // 执行关闭取消方法</span></span>
<span class="line"><span style="color:#005CC5;">   this</span><span style="color:#24292E;">.</span><span style="color:#6F42C1;">fail</span><span style="color:#24292E;">()</span></span>
<span class="line"><span style="color:#6A737D;">   // 隐藏弹层</span></span>
<span class="line"><span style="color:#005CC5;">   this</span><span style="color:#24292E;">.</span><span style="color:#6F42C1;">hide</span><span style="color:#24292E;">()</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">  // 确定按钮点击事件</span></span>
<span class="line"><span style="color:#005CC5;">  this</span><span style="color:#24292E;">.confirmBtn.</span><span style="color:#6F42C1;">onclick</span><span style="color:#D73A49;"> =</span><span style="color:#24292E;"> () </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#6A737D;">   // 执行关闭确认方法</span></span>
<span class="line"><span style="color:#005CC5;">   this</span><span style="color:#24292E;">.</span><span style="color:#6F42C1;">success</span><span style="color:#24292E;">()</span></span>
<span class="line"><span style="color:#6A737D;">   // 隐藏弹层</span></span>
<span class="line"><span style="color:#005CC5;">   this</span><span style="color:#24292E;">.</span><span style="color:#6F42C1;">hide</span><span style="color:#24292E;">()</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"><span style="color:#24292E;"> }</span></span>
<span class="line"><span style="color:#6A737D;"> // 隐藏弹层方法</span></span>
<span class="line"><span style="color:#6F42C1;"> hide</span><span style="color:#24292E;">() {</span></span>
<span class="line"><span style="color:#005CC5;">  this</span><span style="color:#24292E;">.panel.style.display </span><span style="color:#D73A49;">=</span><span style="color:#032F62;"> &#39;none&#39;</span></span>
<span class="line"><span style="color:#24292E;"> }</span></span>
<span class="line"><span style="color:#6A737D;"> // 显示弹层方法</span></span>
<span class="line"><span style="color:#6F42C1;"> show</span><span style="color:#24292E;">() {</span></span>
<span class="line"><span style="color:#005CC5;">  this</span><span style="color:#24292E;">.panel.style.display </span><span style="color:#D73A49;">=</span><span style="color:#032F62;"> &#39;block&#39;</span></span>
<span class="line"><span style="color:#24292E;"> }</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 确认按钮右侧的提示框</span></span>
<span class="line"><span style="color:#D73A49;">class</span><span style="color:#6F42C1;"> RightAlert</span><span style="color:#D73A49;"> extends</span><span style="color:#6F42C1;"> Alert</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#D73A49;"> constructor</span><span style="color:#24292E;">(</span><span style="color:#E36209;">data</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#005CC5;">  super</span><span style="color:#24292E;">(data)</span></span>
<span class="line"><span style="color:#6A737D;">  // 为确认按钮添加right类设置位置居右</span></span>
<span class="line"><span style="color:#005CC5;">  this</span><span style="color:#24292E;">.confirmBtn.className </span><span style="color:#D73A49;">=</span><span style="color:#005CC5;"> this</span><span style="color:#24292E;">.confirmBtn.className </span><span style="color:#D73A49;">+</span><span style="color:#032F62;"> &#39; right&#39;</span></span>
<span class="line"><span style="color:#24292E;"> }</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 带有标题的弹出框</span></span>
<span class="line"><span style="color:#D73A49;">class</span><span style="color:#6F42C1;"> TitleAlert</span><span style="color:#D73A49;"> extends</span><span style="color:#6F42C1;"> Alert</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#D73A49;"> constructor</span><span style="color:#24292E;">(</span><span style="color:#E36209;">data</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#005CC5;">  super</span><span style="color:#24292E;">(data)</span></span>
<span class="line"><span style="color:#6A737D;">  // 设置标题内容</span></span>
<span class="line"><span style="color:#005CC5;">  this</span><span style="color:#24292E;">.title </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> data.title</span></span>
<span class="line"><span style="color:#6A737D;">  // 创建标题组件</span></span>
<span class="line"><span style="color:#005CC5;">  this</span><span style="color:#24292E;">.titleNode </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> document.</span><span style="color:#6F42C1;">createElement</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;h3&#39;</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#6A737D;">  // 标题组件中写入标题内容</span></span>
<span class="line"><span style="color:#005CC5;">  this</span><span style="color:#24292E;">.titleNode.innerHTML </span><span style="color:#D73A49;">=</span><span style="color:#005CC5;"> this</span><span style="color:#24292E;">.title</span></span>
<span class="line"><span style="color:#24292E;"> }</span></span>
<span class="line"><span style="color:#6F42C1;"> init</span><span style="color:#24292E;">() {</span></span>
<span class="line"><span style="color:#6A737D;">  // 插入标题</span></span>
<span class="line"><span style="color:#005CC5;">  this</span><span style="color:#24292E;">.panel.</span><span style="color:#6F42C1;">insertBefore</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">this</span><span style="color:#24292E;">.titleNode, </span><span style="color:#005CC5;">this</span><span style="color:#24292E;">.panel.firstchild)</span></span>
<span class="line"><span style="color:#6A737D;">  // 继承基本提示框init方法</span></span>
<span class="line"><span style="color:#005CC5;">  Alert</span><span style="color:#24292E;">.</span><span style="color:#005CC5;">prototype</span><span style="color:#24292E;">.init.</span><span style="color:#6F42C1;">call</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">this</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#24292E;"> }</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 带有取消按钮的弹出框</span></span>
<span class="line"><span style="color:#D73A49;">class</span><span style="color:#6F42C1;"> CancelAlert</span><span style="color:#D73A49;"> extends</span><span style="color:#6F42C1;"> TitleAlert</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#D73A49;"> constructor</span><span style="color:#24292E;">(</span><span style="color:#E36209;">data</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#005CC5;">  super</span><span style="color:#24292E;">(data)</span></span>
<span class="line"><span style="color:#6A737D;">  // 取消按钮文案</span></span>
<span class="line"><span style="color:#005CC5;">  this</span><span style="color:#24292E;">.cancel </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> data.cancel</span></span>
<span class="line"><span style="color:#6A737D;">  // 创建取消按钮</span></span>
<span class="line"><span style="color:#005CC5;">  this</span><span style="color:#24292E;">.cancelBtn </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> document.</span><span style="color:#6F42C1;">createElement</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;span&#39;</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#6A737D;">  // 为取消按钮添加类</span></span>
<span class="line"><span style="color:#005CC5;">  this</span><span style="color:#24292E;">.cancelBtn.className </span><span style="color:#D73A49;">=</span><span style="color:#032F62;"> &#39;cancel&#39;</span></span>
<span class="line"><span style="color:#6A737D;">  // 设置取消按钮内容</span></span>
<span class="line"><span style="color:#005CC5;">  this</span><span style="color:#24292E;">.cancelBtn.innerHTML </span><span style="color:#D73A49;">=</span><span style="color:#005CC5;"> this</span><span style="color:#24292E;">.cancel </span><span style="color:#D73A49;">||</span><span style="color:#032F62;"> &#39;取消&#39;</span></span>
<span class="line"><span style="color:#24292E;"> }</span></span>
<span class="line"><span style="color:#6F42C1;"> init</span><span style="color:#24292E;">() {</span></span>
<span class="line"><span style="color:#6A737D;">  // 继承标题提示框创建方法</span></span>
<span class="line"><span style="color:#005CC5;">  TitleAlert</span><span style="color:#24292E;">.</span><span style="color:#005CC5;">prototype</span><span style="color:#24292E;">.init.</span><span style="color:#6F42C1;">call</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">this</span><span style="color:#24292E;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">  // 由于取消按钮要添加在末尾，所以在创建完其他组件后添加</span></span>
<span class="line"><span style="color:#005CC5;">  this</span><span style="color:#24292E;">.panel.</span><span style="color:#6F42C1;">appendChild</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">this</span><span style="color:#24292E;">.cancelBtn)</span></span>
<span class="line"><span style="color:#24292E;"> }</span></span>
<span class="line"><span style="color:#6F42C1;"> bindEvent</span><span style="color:#24292E;">() {</span></span>
<span class="line"><span style="color:#6A737D;">  // 标题提示框绑定事件方法继承</span></span>
<span class="line"><span style="color:#005CC5;">  TitleAlert</span><span style="color:#24292E;">.</span><span style="color:#005CC5;">prototype</span><span style="color:#24292E;">.bindEvent.</span><span style="color:#6F42C1;">call</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">this</span><span style="color:#24292E;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">  // 取消按钮绑定事件</span></span>
<span class="line"><span style="color:#005CC5;">  this</span><span style="color:#24292E;">.cancelBtn.</span><span style="color:#6F42C1;">onclick</span><span style="color:#D73A49;"> =</span><span style="color:#24292E;"> () </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#6A737D;">   // 执行取消回调函数</span></span>
<span class="line"><span style="color:#005CC5;">   this</span><span style="color:#24292E;">.</span><span style="color:#6F42C1;">fail</span><span style="color:#24292E;">()</span></span>
<span class="line"><span style="color:#6A737D;">   // 隐藏弹层</span></span>
<span class="line"><span style="color:#005CC5;">   this</span><span style="color:#24292E;">.</span><span style="color:#6F42C1;">hide</span><span style="color:#24292E;">()</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"><span style="color:#24292E;"> }</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">//</span><span style="color:#6A737D;"> // 基础提示框</span></span>
<span class="line"><span style="color:#6A737D;">// const alert = new Alert({</span></span>
<span class="line"><span style="color:#6A737D;">//  content: &#39;内容: 基础提示框&#39;,</span></span>
<span class="line"><span style="color:#6A737D;">//  confirm: &#39;确定&#39;,</span></span>
<span class="line"><span style="color:#6A737D;">//  success: () =&gt; {},</span></span>
<span class="line"><span style="color:#6A737D;">//  fail: () =&gt; {},</span></span>
<span class="line"><span style="color:#6A737D;">// })</span></span>
<span class="line"><span style="color:#6A737D;">// alert.init()</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">//</span><span style="color:#6A737D;"> // 右侧确认提示框</span></span>
<span class="line"><span style="color:#6A737D;">// const rightAlert = new RightAlert({</span></span>
<span class="line"><span style="color:#6A737D;">//  content: &#39;内容: 右侧确认提示框&#39;,</span></span>
<span class="line"><span style="color:#6A737D;">//  confirm: &#39;确定&#39;,</span></span>
<span class="line"><span style="color:#6A737D;">//  success: () =&gt; {</span></span>
<span class="line"><span style="color:#6A737D;">//   console.log(&#39;suc&#39;)</span></span>
<span class="line"><span style="color:#6A737D;">//  },</span></span>
<span class="line"><span style="color:#6A737D;">//  fail: () =&gt; {</span></span>
<span class="line"><span style="color:#6A737D;">//   console.log(&#39;fail&#39;)</span></span>
<span class="line"><span style="color:#6A737D;">//  },</span></span>
<span class="line"><span style="color:#6A737D;">// })</span></span>
<span class="line"><span style="color:#6A737D;">// rightAlert.init()</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">//</span><span style="color:#6A737D;"> // 含标题提示框</span></span>
<span class="line"><span style="color:#6A737D;">// const titleAlert = new TitleAlert({</span></span>
<span class="line"><span style="color:#6A737D;">//  title: &#39;标题: 我是标题&#39;,</span></span>
<span class="line"><span style="color:#6A737D;">//  content: &#39;内容: 含标题弹窗&#39;,</span></span>
<span class="line"><span style="color:#6A737D;">//  confirm: &#39;确定&#39;,</span></span>
<span class="line"><span style="color:#6A737D;">//  success: () =&gt; {</span></span>
<span class="line"><span style="color:#6A737D;">//   console.log(&#39;suc&#39;)</span></span>
<span class="line"><span style="color:#6A737D;">//  },</span></span>
<span class="line"><span style="color:#6A737D;">//  fail: () =&gt; {</span></span>
<span class="line"><span style="color:#6A737D;">//   console.log(&#39;fail&#39;)</span></span>
<span class="line"><span style="color:#6A737D;">//  },</span></span>
<span class="line"><span style="color:#6A737D;">// })</span></span>
<span class="line"><span style="color:#6A737D;">// titleAlert.init()</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 可关闭弹窗</span></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#005CC5;"> cancelAlert</span><span style="color:#D73A49;"> =</span><span style="color:#D73A49;"> new</span><span style="color:#6F42C1;"> CancelAlert</span><span style="color:#24292E;">({</span></span>
<span class="line"><span style="color:#24292E;"> title: </span><span style="color:#032F62;">&#39;标题: 关闭&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;"> content: </span><span style="color:#032F62;">&#39;内容: 可关闭提示框&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;"> confirm: </span><span style="color:#032F62;">&#39;确定&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;"> cancel: </span><span style="color:#032F62;">&#39;关闭&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#6F42C1;"> success</span><span style="color:#24292E;">: () </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;suc&#39;</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#24292E;"> },</span></span>
<span class="line"><span style="color:#6F42C1;"> fail</span><span style="color:#24292E;">: () </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;fail&#39;</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#24292E;"> },</span></span>
<span class="line"><span style="color:#24292E;">})</span></span>
<span class="line"><span style="color:#24292E;">cancelAlert.</span><span style="color:#6F42C1;">init</span><span style="color:#24292E;">()</span></span></code></pre></div><h3 id="多类导航设计" tabindex="-1">多类导航设计 <a class="header-anchor" href="#多类导航设计" aria-label="Permalink to &quot;多类导航设计&quot;">​</a></h3><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-light vp-code" tabindex="0"><code><span class="line"><span style="color:#D73A49;">const</span><span style="color:#6F42C1;"> formatString</span><span style="color:#D73A49;"> =</span><span style="color:#D73A49;"> function</span><span style="color:#24292E;"> (</span><span style="color:#E36209;">str</span><span style="color:#24292E;">, </span><span style="color:#E36209;">data</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#D73A49;"> return</span><span style="color:#24292E;"> str.</span><span style="color:#6F42C1;">replace</span><span style="color:#24292E;">(</span><span style="color:#032F62;">/</span><span style="color:#22863A;font-weight:bold;">\\{\\{</span><span style="color:#032F62;">(</span><span style="color:#005CC5;">\\w</span><span style="color:#D73A49;">+</span><span style="color:#032F62;">)</span><span style="color:#22863A;font-weight:bold;">\\}\\}</span><span style="color:#032F62;">/</span><span style="color:#D73A49;">g</span><span style="color:#24292E;">, </span><span style="color:#D73A49;">function</span><span style="color:#24292E;"> (</span><span style="color:#E36209;">match</span><span style="color:#24292E;">, </span><span style="color:#E36209;">key</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#D73A49;">  return</span><span style="color:#D73A49;"> typeof</span><span style="color:#24292E;"> data[key] </span><span style="color:#D73A49;">===</span><span style="color:#005CC5;"> undefined</span><span style="color:#D73A49;"> ?</span><span style="color:#032F62;"> &#39;&#39;</span><span style="color:#D73A49;"> :</span><span style="color:#24292E;"> data[key]</span></span>
<span class="line"><span style="color:#24292E;"> })</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"><span style="color:#6A737D;">// 基础导航</span></span>
<span class="line"><span style="color:#D73A49;">class</span><span style="color:#6F42C1;"> Nav</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#D73A49;"> constructor</span><span style="color:#24292E;">(</span><span style="color:#E36209;">data</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#6A737D;">  // 基础导航样式模板</span></span>
<span class="line"><span style="color:#D73A49;">  let</span><span style="color:#24292E;"> tpl </span><span style="color:#D73A49;">=</span><span style="color:#032F62;"> &#39;&lt;a href=&quot;{{href}}&quot; title=&quot;{{title}}&quot;&gt;{{name}}&lt;/a&gt;&#39;</span></span>
<span class="line"><span style="color:#6A737D;">  // 创建字符串</span></span>
<span class="line"><span style="color:#005CC5;">  this</span><span style="color:#24292E;">.html </span><span style="color:#D73A49;">=</span><span style="color:#032F62;"> &#39;&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">  for</span><span style="color:#24292E;"> (</span><span style="color:#D73A49;">let</span><span style="color:#24292E;"> i </span><span style="color:#D73A49;">=</span><span style="color:#005CC5;"> 0</span><span style="color:#24292E;">, len </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> data.</span><span style="color:#005CC5;">length</span><span style="color:#24292E;">; i </span><span style="color:#D73A49;">&lt;</span><span style="color:#24292E;"> len; i</span><span style="color:#D73A49;">++</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#005CC5;">   this</span><span style="color:#24292E;">.html </span><span style="color:#D73A49;">+=</span><span style="color:#6F42C1;"> formatString</span><span style="color:#24292E;">(tpl, data[i])</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"><span style="color:#6A737D;">  // 返回字符串数据</span></span>
<span class="line"><span style="color:#D73A49;">  return</span><span style="color:#005CC5;"> this</span><span style="color:#24292E;">.html</span></span>
<span class="line"><span style="color:#24292E;"> }</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"><span style="color:#6A737D;">// 带有消息提醒信息导航</span></span>
<span class="line"><span style="color:#D73A49;">class</span><span style="color:#6F42C1;"> NumNav</span><span style="color:#D73A49;"> extends</span><span style="color:#6F42C1;"> Nav</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#D73A49;"> constructor</span><span style="color:#24292E;">(</span><span style="color:#E36209;">data</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#005CC5;">  super</span><span style="color:#24292E;">(data)</span></span>
<span class="line"><span style="color:#6A737D;">  // 消息提醒信息组件模板</span></span>
<span class="line"><span style="color:#D73A49;">  let</span><span style="color:#24292E;"> tpl </span><span style="color:#D73A49;">=</span><span style="color:#032F62;"> &#39;&lt;b&gt;{{num}}&lt;/b&gt;&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">  // 装饰数据</span></span>
<span class="line"><span style="color:#D73A49;">  for</span><span style="color:#24292E;"> (</span><span style="color:#D73A49;">let</span><span style="color:#24292E;"> i </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> data.</span><span style="color:#005CC5;">length</span><span style="color:#D73A49;"> -</span><span style="color:#005CC5;"> 1</span><span style="color:#24292E;">; i </span><span style="color:#D73A49;">&gt;=</span><span style="color:#005CC5;"> 0</span><span style="color:#24292E;">; i</span><span style="color:#D73A49;">--</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">   data[i].name </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> data[i].name </span><span style="color:#D73A49;">+</span><span style="color:#6F42C1;"> formatString</span><span style="color:#24292E;">(tpl, data[i])</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">  return</span><span style="color:#D73A49;"> new</span><span style="color:#6F42C1;"> Nav</span><span style="color:#24292E;">(data)</span></span>
<span class="line"><span style="color:#24292E;"> }</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"><span style="color:#6A737D;">// 带有链接地址的导航</span></span>
<span class="line"><span style="color:#D73A49;">class</span><span style="color:#6F42C1;"> LinkNav</span><span style="color:#D73A49;"> extends</span><span style="color:#6F42C1;"> Nav</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#D73A49;"> constructor</span><span style="color:#24292E;">(</span><span style="color:#E36209;">data</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#005CC5;">  super</span><span style="color:#24292E;">(data)</span></span>
<span class="line"><span style="color:#6A737D;">  // 链接地址模板</span></span>
<span class="line"><span style="color:#D73A49;">  let</span><span style="color:#24292E;"> tpl </span><span style="color:#D73A49;">=</span><span style="color:#032F62;"> &#39;&lt;span&gt;{{href}}&lt;/span&gt;&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">  // 装饰数据</span></span>
<span class="line"><span style="color:#D73A49;">  for</span><span style="color:#24292E;"> (</span><span style="color:#D73A49;">let</span><span style="color:#24292E;"> i </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> data.</span><span style="color:#005CC5;">length</span><span style="color:#D73A49;"> -</span><span style="color:#005CC5;"> 1</span><span style="color:#24292E;">; i </span><span style="color:#D73A49;">&gt;=</span><span style="color:#005CC5;"> 0</span><span style="color:#24292E;">; i</span><span style="color:#D73A49;">--</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">   data[i].name </span><span style="color:#D73A49;">+=</span><span style="color:#6F42C1;"> formatString</span><span style="color:#24292E;">(tpl, data[i])</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"><span style="color:#D73A49;">  return</span><span style="color:#D73A49;"> new</span><span style="color:#6F42C1;"> Nav</span><span style="color:#24292E;">(data)</span></span>
<span class="line"><span style="color:#24292E;"> }</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 获取导航容器</span></span>
<span class="line"><span style="color:#D73A49;">let</span><span style="color:#24292E;"> navWrapper </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> document.</span><span style="color:#6F42C1;">getElementById</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;contentId&#39;</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#D73A49;">let</span><span style="color:#24292E;"> navData </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> [</span></span>
<span class="line"><span style="color:#24292E;"> { href: </span><span style="color:#032F62;">&#39;http://www.baidu.com/&#39;</span><span style="color:#24292E;">, title: </span><span style="color:#032F62;">&#39;百度—下，你就知道&#39;</span><span style="color:#24292E;">, name: </span><span style="color:#032F62;">&#39;百度&#39;</span><span style="color:#24292E;">, num: </span><span style="color:#032F62;">&#39;10&#39;</span><span style="color:#24292E;"> },</span></span>
<span class="line"><span style="color:#24292E;"> { href: </span><span style="color:#032F62;">&#39;http://www.taobao.com/&#39;</span><span style="color:#24292E;">, title: </span><span style="color:#032F62;">&#39;淘宝商城&#39;</span><span style="color:#24292E;">, name: </span><span style="color:#032F62;">&#39;淘宝&#39;</span><span style="color:#24292E;">, num: </span><span style="color:#032F62;">&#39;2&#39;</span><span style="color:#24292E;"> },</span></span>
<span class="line"><span style="color:#24292E;"> { href: </span><span style="color:#032F62;">&#39;http://www.qq.com/&#39;</span><span style="color:#24292E;">, title: </span><span style="color:#032F62;">&#39;腾讯首页&#39;</span><span style="color:#24292E;">, name: </span><span style="color:#032F62;">&#39;腾讯&#39;</span><span style="color:#24292E;">, num: </span><span style="color:#032F62;">&#39;3&#39;</span><span style="color:#24292E;"> },</span></span>
<span class="line"><span style="color:#24292E;">]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 用例</span></span>
<span class="line"><span style="color:#6A737D;">// const numNav = new NumNav(navData)</span></span>
<span class="line"><span style="color:#6A737D;">// navWrapper.innerHTML = numNav.html</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#005CC5;"> linkNav</span><span style="color:#D73A49;"> =</span><span style="color:#D73A49;"> new</span><span style="color:#6F42C1;"> LinkNav</span><span style="color:#24292E;">(navData)</span></span>
<span class="line"><span style="color:#24292E;">navWrapper.innerHTML </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> linkNav.html</span></span></code></pre></div>`,11)]))}const C=n(o,[["render",e]]);export{A as __pageData,C as default};
