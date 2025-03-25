import{_ as n,c as a,o as l,ag as p}from"./chunks/framework.DPDPlp3K.js";const C=JSON.parse('{"title":"建造者模式 Builder","description":"","frontmatter":{},"headers":[],"relativePath":"pattern/Create/建造者模式Builder.md","filePath":"pattern/Create/建造者模式Builder.md"}'),o={name:"pattern/Create/建造者模式Builder.md"};function e(t,s,c,r,y,i){return l(),a("div",null,s[0]||(s[0]=[p(`<h1 id="建造者模式-builder" tabindex="-1">建造者模式 Builder <a class="header-anchor" href="#建造者模式-builder" aria-label="Permalink to &quot;建造者模式 Builder&quot;">​</a></h1><p>建造者模式（Builder）： 将一个复杂对象的构建层与其表示层相互分离，同样的构建过程可采用不同的表示。</p><p>它更多关心的是创建这个对象的整个过程，甚至于创建对象的每一个细节，比如创建一个人，我们创建的结果不仅仅要得到人的实例，还要关注创建人的时候，这个人应该穿什么衣服，男的还是女的，兴趣爱好都是什么。</p><p>在建造者模式中我们关心的是对象创建过程，因此我们通常将创建对象的类模块化，这样使被创建的类的每一个模块都可以得到灵活的运用与高质量的复用。当然我们最终的需求是要得到一个完整的个体，因此在拆分创建的整个过程，我们将得到一个统一的结果。</p><p>当然这种方式对于整体对象类的拆分无形中增加了结构的复杂性，因此如果对象粒度很小，或者模块间的复用率很低并且变动不大，我们最好还是要创建整体对象。</p><h2 id="实例" tabindex="-1">实例 <a class="header-anchor" href="#实例" aria-label="Permalink to &quot;实例&quot;">​</a></h2><ul><li>应聘者</li><li>编辑器</li></ul><h3 id="应聘者" tabindex="-1">应聘者 <a class="header-anchor" href="#应聘者" aria-label="Permalink to &quot;应聘者&quot;">​</a></h3><p>分析:</p><ul><li>需要一个人类</li><li>需要一个姓名类</li><li>需要一个职位类</li></ul><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-light vp-code" tabindex="0"><code><span class="line"><span style="color:#6A737D;">// 创建一个人类</span></span>
<span class="line"><span style="color:#D73A49;">var</span><span style="color:#6F42C1;"> Human</span><span style="color:#D73A49;"> =</span><span style="color:#D73A49;"> function</span><span style="color:#24292E;">(</span><span style="color:#E36209;">param</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#6A737D;">  // 技能</span></span>
<span class="line"><span style="color:#005CC5;">  this</span><span style="color:#24292E;">.skill </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> param </span><span style="color:#D73A49;">&amp;&amp;</span><span style="color:#24292E;"> param.skill </span><span style="color:#D73A49;">||</span><span style="color:#032F62;"> &#39;保密&#39;</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#6A737D;">  // 兴趣爱好</span></span>
<span class="line"><span style="color:#005CC5;">  this</span><span style="color:#24292E;">.hobby </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> param </span><span style="color:#D73A49;">&amp;&amp;</span><span style="color:#24292E;"> param.hobby </span><span style="color:#D73A49;">||</span><span style="color:#032F62;"> &#39;保密&#39;</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 人类原型方法</span></span>
<span class="line"><span style="color:#005CC5;">Human</span><span style="color:#24292E;">.</span><span style="color:#005CC5;">prototype</span><span style="color:#D73A49;"> =</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#6F42C1;">  getskill</span><span style="color:#24292E;">: </span><span style="color:#D73A49;">function</span><span style="color:#24292E;">() {</span></span>
<span class="line"><span style="color:#D73A49;">    return</span><span style="color:#005CC5;"> this</span><span style="color:#24292E;">.skill;</span></span>
<span class="line"><span style="color:#24292E;">  },</span></span>
<span class="line"><span style="color:#6F42C1;">  getHobby</span><span style="color:#24292E;">: </span><span style="color:#D73A49;">function</span><span style="color:#24292E;">() {</span></span>
<span class="line"><span style="color:#D73A49;">    return</span><span style="color:#005CC5;"> this</span><span style="color:#24292E;">.hobby;</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 实例化姓名类</span></span>
<span class="line"><span style="color:#D73A49;">var</span><span style="color:#6F42C1;"> Named</span><span style="color:#D73A49;"> =</span><span style="color:#D73A49;"> function</span><span style="color:#24292E;">(</span><span style="color:#E36209;">name</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#D73A49;">  var</span><span style="color:#24292E;"> that </span><span style="color:#D73A49;">=</span><span style="color:#005CC5;"> this</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#6A737D;">  // 构造器</span></span>
<span class="line"><span style="color:#6A737D;">  // 构造函数解析姓名的姓与名</span></span>
<span class="line"><span style="color:#24292E;">  (</span><span style="color:#D73A49;">function</span><span style="color:#24292E;">(</span><span style="color:#E36209;">name</span><span style="color:#24292E;">, </span><span style="color:#E36209;">that</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">    that.wholeName </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> name;</span></span>
<span class="line"><span style="color:#D73A49;">    if</span><span style="color:#24292E;">(name.</span><span style="color:#6F42C1;">indexof</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39; &#39;</span><span style="color:#24292E;">) ＞ </span><span style="color:#D73A49;">-</span><span style="color:#005CC5;">1</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">      that.FirstName </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> name.</span><span style="color:#6F42C1;">slice</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">0</span><span style="color:#24292E;">, name.</span><span style="color:#6F42C1;">indexof</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39; &#39;</span><span style="color:#24292E;">));</span></span>
<span class="line"><span style="color:#24292E;">      that.secondName </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> name.</span><span style="color:#6F42C1;">slice</span><span style="color:#24292E;">(name.</span><span style="color:#6F42C1;">indexof</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39; &#39;</span><span style="color:#24292E;">));</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">  })(name, that);</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 实例化职位类</span></span>
<span class="line"><span style="color:#D73A49;">var</span><span style="color:#6F42C1;"> Work</span><span style="color:#D73A49;"> =</span><span style="color:#D73A49;"> function</span><span style="color:#24292E;">(</span><span style="color:#E36209;">work</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#D73A49;">  var</span><span style="color:#24292E;"> that </span><span style="color:#D73A49;">=</span><span style="color:#005CC5;"> this</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#6A737D;">  // 构造器</span></span>
<span class="line"><span style="color:#6A737D;">  // 构造函数中通过传入的职位特征来设置相应职位以及描述</span></span>
<span class="line"><span style="color:#24292E;">  (</span><span style="color:#D73A49;">function</span><span style="color:#24292E;">(</span><span style="color:#E36209;">work</span><span style="color:#24292E;">, </span><span style="color:#E36209;">that</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#D73A49;">    switch</span><span style="color:#24292E;">(work) {</span></span>
<span class="line"><span style="color:#D73A49;">      case</span><span style="color:#032F62;"> &#39;code&#39;</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">        that.work </span><span style="color:#D73A49;">=</span><span style="color:#032F62;"> &#39;工程师&#39;</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">        that.workDescript </span><span style="color:#D73A49;">=</span><span style="color:#032F62;"> &#39;每天沉醉于编程&#39;</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#D73A49;">        break</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#D73A49;">      case</span><span style="color:#032F62;"> &#39;UI&#39;</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#D73A49;">      case</span><span style="color:#032F62;"> &#39;UE&#39;</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">        that.work </span><span style="color:#D73A49;">=</span><span style="color:#032F62;"> &#39;设计师&#39;</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">        that.workDescript </span><span style="color:#D73A49;">=</span><span style="color:#032F62;"> &#39;设计更似—种艺术&#39;</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#D73A49;">        break</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#D73A49;">      case</span><span style="color:#032F62;"> &#39;teach&#39;</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">        that.work </span><span style="color:#D73A49;">=</span><span style="color:#032F62;"> &#39;教师&#39;</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">        that.workDescript </span><span style="color:#D73A49;">=</span><span style="color:#032F62;"> &#39;分享也是—种快乐&#39;</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#D73A49;">        break</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#D73A49;">      default</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">        that.work </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> work;</span></span>
<span class="line"><span style="color:#24292E;">        that.workDescript </span><span style="color:#D73A49;">=</span><span style="color:#032F62;"> &#39;对不起，我们还不清楚您所选择职位的相关描述&#39;</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">  })(work, that);</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 更换期望的职位</span></span>
<span class="line"><span style="color:#005CC5;">Work</span><span style="color:#24292E;">.</span><span style="color:#005CC5;">prototype</span><span style="color:#24292E;">.</span><span style="color:#6F42C1;">changeWork</span><span style="color:#D73A49;"> =</span><span style="color:#D73A49;"> function</span><span style="color:#24292E;">(</span><span style="color:#E36209;">work</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#005CC5;">  this</span><span style="color:#24292E;">.work </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> work;</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 添加对职位的描述</span></span>
<span class="line"><span style="color:#005CC5;">Work</span><span style="color:#24292E;">.</span><span style="color:#005CC5;">prototype</span><span style="color:#24292E;">.</span><span style="color:#6F42C1;">changeDescript</span><span style="color:#D73A49;"> =</span><span style="color:#D73A49;"> function</span><span style="color:#24292E;">(</span><span style="color:#E36209;">setence</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#005CC5;">  this</span><span style="color:#24292E;">.workDescript </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> setence;</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">/*</span></span>
<span class="line"><span style="color:#6A737D;">* 应聘者建造者</span></span>
<span class="line"><span style="color:#6A737D;">* 参数 name: 姓名（全名）</span></span>
<span class="line"><span style="color:#6A737D;">* 参数 work: 期望职位</span></span>
<span class="line"><span style="color:#6A737D;">*/</span></span>
<span class="line"><span style="color:#D73A49;">var</span><span style="color:#6F42C1;"> Person</span><span style="color:#D73A49;"> =</span><span style="color:#D73A49;"> function</span><span style="color:#24292E;">(</span><span style="color:#E36209;">name</span><span style="color:#24292E;">, </span><span style="color:#E36209;">work</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#6A737D;">  // 创建应聘者缓存对象</span></span>
<span class="line"><span style="color:#D73A49;">  var</span><span style="color:#24292E;"> person </span><span style="color:#D73A49;">=</span><span style="color:#D73A49;"> new</span><span style="color:#6F42C1;"> Human</span><span style="color:#24292E;">();</span></span>
<span class="line"><span style="color:#6A737D;">  // 创建应聘者姓名解析对象</span></span>
<span class="line"><span style="color:#24292E;">  person.name </span><span style="color:#D73A49;">=</span><span style="color:#D73A49;"> new</span><span style="color:#6F42C1;"> Named</span><span style="color:#24292E;">(name);</span></span>
<span class="line"><span style="color:#6A737D;">  // 创建应聘者期望职位</span></span>
<span class="line"><span style="color:#24292E;">  person.work </span><span style="color:#D73A49;">=</span><span style="color:#D73A49;"> new</span><span style="color:#6F42C1;"> Work</span><span style="color:#24292E;">(work);</span></span>
<span class="line"><span style="color:#6A737D;">  // 将创建的应聘者对象返回</span></span>
<span class="line"><span style="color:#D73A49;">  return</span><span style="color:#24292E;"> person;</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><h3 id="编辑器" tabindex="-1">编辑器 <a class="header-anchor" href="#编辑器" aria-label="Permalink to &quot;编辑器&quot;">​</a></h3><p>分析:</p><ul><li>编辑器本身肯定需要一个类，是给外部调用的接口</li><li>需要一个控制参数初始化和页面渲染的类</li><li>需要一个控制字体的类</li><li>需要一个状态管理的类</li></ul><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-light vp-code" tabindex="0"><code><span class="line"><span style="color:#6A737D;">// 编辑器本身，对外暴露</span></span>
<span class="line"><span style="color:#D73A49;">function</span><span style="color:#6F42C1;"> Editor</span><span style="color:#24292E;">() {</span></span>
<span class="line"><span style="color:#6A737D;">  // 编辑器里面就是将各个模块组合起来实现功能</span></span>
<span class="line"><span style="color:#005CC5;">  this</span><span style="color:#24292E;">.initer </span><span style="color:#D73A49;">=</span><span style="color:#D73A49;"> new</span><span style="color:#6F42C1;"> HtmlInit</span><span style="color:#24292E;">();</span></span>
<span class="line"><span style="color:#005CC5;">  this</span><span style="color:#24292E;">.fontController </span><span style="color:#D73A49;">=</span><span style="color:#D73A49;"> new</span><span style="color:#6F42C1;"> FontController</span><span style="color:#24292E;">();</span></span>
<span class="line"><span style="color:#005CC5;">  this</span><span style="color:#24292E;">.stateController </span><span style="color:#D73A49;">=</span><span style="color:#D73A49;"> new</span><span style="color:#6F42C1;"> StateController</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">this</span><span style="color:#24292E;">.fontController);</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 初始化参数，渲染页面</span></span>
<span class="line"><span style="color:#D73A49;">function</span><span style="color:#6F42C1;"> HtmlInit</span><span style="color:#24292E;">() {}</span></span>
<span class="line"><span style="color:#6A737D;">// 初始化样式</span></span>
<span class="line"><span style="color:#005CC5;">HtmlInit</span><span style="color:#24292E;">.</span><span style="color:#005CC5;">prototype</span><span style="color:#24292E;">.</span><span style="color:#6F42C1;">initStyle</span><span style="color:#D73A49;"> =</span><span style="color:#D73A49;"> function</span><span style="color:#24292E;"> () {};</span></span>
<span class="line"><span style="color:#6A737D;">// 渲染DOM</span></span>
<span class="line"><span style="color:#005CC5;">HtmlInit</span><span style="color:#24292E;">.</span><span style="color:#005CC5;">prototype</span><span style="color:#24292E;">.</span><span style="color:#6F42C1;">renderDom</span><span style="color:#D73A49;"> =</span><span style="color:#D73A49;"> function</span><span style="color:#24292E;"> () {};</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 字体控制器</span></span>
<span class="line"><span style="color:#D73A49;">function</span><span style="color:#6F42C1;"> FontController</span><span style="color:#24292E;">() {}</span></span>
<span class="line"><span style="color:#6A737D;">// 改变字体颜色</span></span>
<span class="line"><span style="color:#005CC5;">FontController</span><span style="color:#24292E;">.</span><span style="color:#005CC5;">prototype</span><span style="color:#24292E;">.</span><span style="color:#6F42C1;">changeFontColor</span><span style="color:#D73A49;"> =</span><span style="color:#D73A49;"> function</span><span style="color:#24292E;"> () {};</span></span>
<span class="line"><span style="color:#6A737D;">// 改变字体大小</span></span>
<span class="line"><span style="color:#005CC5;">FontController</span><span style="color:#24292E;">.</span><span style="color:#005CC5;">prototype</span><span style="color:#24292E;">.</span><span style="color:#6F42C1;">changeFontSize</span><span style="color:#D73A49;"> =</span><span style="color:#D73A49;"> function</span><span style="color:#24292E;"> () {};</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 状态控制器</span></span>
<span class="line"><span style="color:#D73A49;">function</span><span style="color:#6F42C1;"> StateController</span><span style="color:#24292E;">(</span><span style="color:#E36209;">fontController</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#005CC5;">  this</span><span style="color:#24292E;">.states </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> []; </span><span style="color:#6A737D;">// 一个数组，存储所有状态</span></span>
<span class="line"><span style="color:#005CC5;">  this</span><span style="color:#24292E;">.currentState </span><span style="color:#D73A49;">=</span><span style="color:#005CC5;"> 0</span><span style="color:#24292E;">; </span><span style="color:#6A737D;">// 一个指针，指向当前状态</span></span>
<span class="line"><span style="color:#005CC5;">  this</span><span style="color:#24292E;">.fontController </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> fontController; </span><span style="color:#6A737D;">// 将字体管理器注入，便于改变状态的时候改变字体</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"><span style="color:#6A737D;">// 保存状态</span></span>
<span class="line"><span style="color:#005CC5;">StateController</span><span style="color:#24292E;">.</span><span style="color:#005CC5;">prototype</span><span style="color:#24292E;">.</span><span style="color:#6F42C1;">saveState</span><span style="color:#D73A49;"> =</span><span style="color:#D73A49;"> function</span><span style="color:#24292E;"> () {};</span></span>
<span class="line"><span style="color:#6A737D;">// 后退状态</span></span>
<span class="line"><span style="color:#005CC5;">StateController</span><span style="color:#24292E;">.</span><span style="color:#005CC5;">prototype</span><span style="color:#24292E;">.</span><span style="color:#6F42C1;">backState</span><span style="color:#D73A49;"> =</span><span style="color:#D73A49;"> function</span><span style="color:#24292E;"> () {</span></span>
<span class="line"><span style="color:#6A737D;">  // 取出上一个状态</span></span>
<span class="line"><span style="color:#D73A49;">  var</span><span style="color:#24292E;"> state </span><span style="color:#D73A49;">=</span><span style="color:#005CC5;"> this</span><span style="color:#24292E;">.states[</span><span style="color:#005CC5;">this</span><span style="color:#24292E;">.currentState </span><span style="color:#D73A49;">-</span><span style="color:#005CC5;"> 1</span><span style="color:#24292E;">];</span></span>
<span class="line"><span style="color:#6A737D;">  // 改回上次颜色</span></span>
<span class="line"><span style="color:#005CC5;">  this</span><span style="color:#24292E;">.fontController.</span><span style="color:#6F42C1;">changeFontColor</span><span style="color:#24292E;">(state.color);</span></span>
<span class="line"><span style="color:#6A737D;">  // 改回上次大小</span></span>
<span class="line"><span style="color:#005CC5;">  this</span><span style="color:#24292E;">.fontController.</span><span style="color:#6F42C1;">changeFontSize</span><span style="color:#24292E;">(state.size);</span></span>
<span class="line"><span style="color:#24292E;">};</span></span>
<span class="line"><span style="color:#6A737D;">// 前进状态</span></span>
<span class="line"><span style="color:#005CC5;">StateController</span><span style="color:#24292E;">.</span><span style="color:#005CC5;">prototype</span><span style="color:#24292E;">.</span><span style="color:#6F42C1;">forwardState</span><span style="color:#D73A49;"> =</span><span style="color:#D73A49;"> function</span><span style="color:#24292E;"> () {};</span></span></code></pre></div>`,15)]))}const D=n(o,[["render",e]]);export{C as __pageData,D as default};
