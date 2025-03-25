import{_ as n,c as a,o as p,ag as l}from"./chunks/framework.DPDPlp3K.js";const A=JSON.parse('{"title":"解释器模式 Interpreter","description":"","frontmatter":{},"headers":[],"relativePath":"pattern/behavior/解释器模式Interpreter.md","filePath":"pattern/behavior/解释器模式Interpreter.md"}'),o={name:"pattern/behavior/解释器模式Interpreter.md"};function e(t,s,c,r,y,i){return p(),a("div",null,s[0]||(s[0]=[l(`<h1 id="解释器模式-interpreter" tabindex="-1">解释器模式 Interpreter <a class="header-anchor" href="#解释器模式-interpreter" aria-label="Permalink to &quot;解释器模式 Interpreter&quot;">​</a></h1><p>解释器模式(Interpreter): 对于一种语言，给出其文法表示形式，并定义一种解释器，通过使用这种解释器来解释语言中定义的句子。</p><h2 id="实例" tabindex="-1">实例 <a class="header-anchor" href="#实例" aria-label="Permalink to &quot;实例&quot;">​</a></h2><ul><li>统计元素路径</li></ul><h3 id="统计元素路径" tabindex="-1">统计元素路径 <a class="header-anchor" href="#统计元素路径" aria-label="Permalink to &quot;统计元素路径&quot;">​</a></h3><p>一个页面中的某些功能好坏有时是靠一定的数据依据支撑的。经理想看看用户对最近新增的功能使用情况，于是前后端要给出统计数据，然而前端交互统计项中要给出交互元素路径。</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-light vp-code" tabindex="0"><code><span class="line"><span style="color:#6A737D;">// 获取兄弟元素名称</span></span>
<span class="line"><span style="color:#D73A49;"> const</span><span style="color:#6F42C1;"> getSublingName</span><span style="color:#D73A49;"> =</span><span style="color:#D73A49;"> function</span><span style="color:#24292E;"> (</span><span style="color:#E36209;">node</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#6A737D;">  // 如果存在兄弟元素</span></span>
<span class="line"><span style="color:#D73A49;">  if</span><span style="color:#24292E;"> (node.previousSibling) {</span></span>
<span class="line"><span style="color:#D73A49;">   let</span><span style="color:#24292E;"> name </span><span style="color:#D73A49;">=</span><span style="color:#032F62;"> &#39;&#39;</span><span style="color:#24292E;">, </span><span style="color:#6A737D;">// 返回的兄弟元素名称字符串</span></span>
<span class="line"><span style="color:#24292E;">    count </span><span style="color:#D73A49;">=</span><span style="color:#005CC5;"> 1</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    nodeName </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> node.nodeName, </span><span style="color:#6A737D;">// 原始节点名称</span></span>
<span class="line"><span style="color:#24292E;">    sibling </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> node.previousSibling </span><span style="color:#6A737D;">// 前—个兄弟元素</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">   // 如果存在前—个兄弟元素</span></span>
<span class="line"><span style="color:#D73A49;">   while</span><span style="color:#24292E;"> (sibling) {</span></span>
<span class="line"><span style="color:#6A737D;">    // 节点为元素 &amp;&amp; 节点类型与前—个兄弟元素类型相同 &amp;&amp; 前—个兄弟元素名称</span></span>
<span class="line"><span style="color:#D73A49;">    if</span><span style="color:#24292E;"> (sibling.nodeType </span><span style="color:#D73A49;">==</span><span style="color:#005CC5;"> 1</span><span style="color:#D73A49;"> &amp;&amp;</span><span style="color:#24292E;"> sibling.nodeType </span><span style="color:#D73A49;">===</span><span style="color:#24292E;"> node.nodeType </span><span style="color:#D73A49;">&amp;&amp;</span><span style="color:#24292E;"> sibling.nodeName) {</span></span>
<span class="line"><span style="color:#6A737D;">     // 如果节点名称和前—个兄弟元素名称相同</span></span>
<span class="line"><span style="color:#D73A49;">     if</span><span style="color:#24292E;"> (nodeName </span><span style="color:#D73A49;">===</span><span style="color:#24292E;"> sibling.nodeName) {</span></span>
<span class="line"><span style="color:#24292E;">      name </span><span style="color:#D73A49;">+=</span><span style="color:#D73A49;"> ++</span><span style="color:#24292E;">count</span></span>
<span class="line"><span style="color:#24292E;">     } </span><span style="color:#D73A49;">else</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">      count </span><span style="color:#D73A49;">=</span><span style="color:#005CC5;"> 1</span></span>
<span class="line"><span style="color:#6A737D;">      // 追加新的节点名称</span></span>
<span class="line"><span style="color:#24292E;">      name </span><span style="color:#D73A49;">+=</span><span style="color:#032F62;"> &#39;|&#39;</span><span style="color:#D73A49;"> +</span><span style="color:#24292E;"> sibling.nodeName.</span><span style="color:#6F42C1;">toUpperCase</span><span style="color:#24292E;">()</span></span>
<span class="line"><span style="color:#24292E;">     }</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#6A737D;">    // 向前获取前—个兄弟元素</span></span>
<span class="line"><span style="color:#24292E;">    sibling </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> sibling.previousSibling</span></span>
<span class="line"><span style="color:#24292E;">   }</span></span>
<span class="line"><span style="color:#D73A49;">   return</span><span style="color:#24292E;"> name</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"><span style="color:#D73A49;">  return</span><span style="color:#032F62;"> &#39;&#39;</span></span>
<span class="line"><span style="color:#24292E;"> }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"> //XPath 解释器</span></span>
<span class="line"><span style="color:#D73A49;"> const</span><span style="color:#005CC5;"> XPathInterpreter</span><span style="color:#D73A49;"> =</span><span style="color:#24292E;"> (</span><span style="color:#D73A49;">function</span><span style="color:#24292E;"> () {</span></span>
<span class="line"><span style="color:#6A737D;">  /**</span></span>
<span class="line"><span style="color:#6A737D;">   * 获取标签节点路径</span></span>
<span class="line"><span style="color:#6A737D;">   * </span><span style="color:#D73A49;">@param</span><span style="color:#24292E;"> node</span><span style="color:#6A737D;"> 目标节点</span></span>
<span class="line"><span style="color:#6A737D;">   * </span><span style="color:#D73A49;">@param</span><span style="color:#24292E;"> wrapper</span><span style="color:#6A737D;"> 容器节点</span></span>
<span class="line"><span style="color:#6A737D;">   */</span></span>
<span class="line"><span style="color:#D73A49;">  const</span><span style="color:#6F42C1;"> getXPath</span><span style="color:#D73A49;"> =</span><span style="color:#D73A49;"> function</span><span style="color:#24292E;"> (</span><span style="color:#E36209;">node</span><span style="color:#24292E;">, </span><span style="color:#E36209;">wrapper</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#6A737D;">   // 路径数组</span></span>
<span class="line"><span style="color:#D73A49;">   let</span><span style="color:#24292E;"> path </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> [],</span></span>
<span class="line"><span style="color:#6A737D;">    // 如果不存在容器节点，默认为document</span></span>
<span class="line"><span style="color:#24292E;">    wrap </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> wrapper </span><span style="color:#D73A49;">||</span><span style="color:#24292E;"> document</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">   // 如果当前（目标）节点等于容器节点</span></span>
<span class="line"><span style="color:#D73A49;">   if</span><span style="color:#24292E;"> (node </span><span style="color:#D73A49;">===</span><span style="color:#24292E;"> wrap) {</span></span>
<span class="line"><span style="color:#6A737D;">    // 容器节点为元素</span></span>
<span class="line"><span style="color:#D73A49;">    if</span><span style="color:#24292E;"> (wrap.nodeType </span><span style="color:#D73A49;">==</span><span style="color:#005CC5;"> 1</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#6A737D;">     // 路径数组中输入容器节点名称</span></span>
<span class="line"><span style="color:#24292E;">     path.</span><span style="color:#6F42C1;">push</span><span style="color:#24292E;">(wrap.nodeName.</span><span style="color:#6F42C1;">toUpperCase</span><span style="color:#24292E;">())</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#6A737D;">    // 返回最终路径数组结果</span></span>
<span class="line"><span style="color:#D73A49;">    return</span><span style="color:#24292E;"> path</span></span>
<span class="line"><span style="color:#24292E;">   }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">   // 如果当前节点的父节点不等于容器节点</span></span>
<span class="line"><span style="color:#D73A49;">   if</span><span style="color:#24292E;"> (node.parentNode </span><span style="color:#D73A49;">!==</span><span style="color:#24292E;"> wrap) {</span></span>
<span class="line"><span style="color:#6A737D;">    // 对当前节点的父节点执行遍历操作</span></span>
<span class="line"><span style="color:#24292E;">    path </span><span style="color:#D73A49;">=</span><span style="color:#6F42C1;"> getXPath</span><span style="color:#24292E;">(node.parentNode, wrap)</span></span>
<span class="line"><span style="color:#24292E;">   } </span><span style="color:#D73A49;">else</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#D73A49;">    if</span><span style="color:#24292E;"> (wrap.nodeType </span><span style="color:#D73A49;">==</span><span style="color:#005CC5;"> 1</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">     path.</span><span style="color:#6F42C1;">push</span><span style="color:#24292E;">(wrap.nodeName.</span><span style="color:#6F42C1;">toUpperCase</span><span style="color:#24292E;">())</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">   }</span></span>
<span class="line"><span style="color:#6A737D;">   // 获取元素的兄弟元素名称</span></span>
<span class="line"><span style="color:#D73A49;">   let</span><span style="color:#24292E;"> sublingsNames </span><span style="color:#D73A49;">=</span><span style="color:#6F42C1;"> getSublingName</span><span style="color:#24292E;">(node)</span></span>
<span class="line"><span style="color:#6A737D;">   // 如果节点为元素</span></span>
<span class="line"><span style="color:#D73A49;">   if</span><span style="color:#24292E;"> (node.nodeType </span><span style="color:#D73A49;">==</span><span style="color:#005CC5;"> 1</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#6A737D;">    // 输入当前节点元素名称及其前面兄弟元素名称</span></span>
<span class="line"><span style="color:#24292E;">    path.</span><span style="color:#6F42C1;">push</span><span style="color:#24292E;">(node.nodeName.</span><span style="color:#6F42C1;">toUpperCase</span><span style="color:#24292E;">() </span><span style="color:#D73A49;">+</span><span style="color:#24292E;"> sublingsNames)</span></span>
<span class="line"><span style="color:#24292E;">   }</span></span>
<span class="line"><span style="color:#6A737D;">   // 返回最终路径数组结果</span></span>
<span class="line"><span style="color:#D73A49;">   return</span><span style="color:#24292E;"> path</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">  return</span><span style="color:#24292E;"> getXPath</span></span>
<span class="line"><span style="color:#24292E;"> })()</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;"> let</span><span style="color:#24292E;"> path </span><span style="color:#D73A49;">=</span><span style="color:#6F42C1;"> XPathInterpreter</span><span style="color:#24292E;">(document.</span><span style="color:#6F42C1;">getElementById</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;box3&#39;</span><span style="color:#24292E;">))</span></span>
<span class="line"><span style="color:#24292E;"> console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(path.</span><span style="color:#6F42C1;">join</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;&gt;&#39;</span><span style="color:#24292E;">))</span></span></code></pre></div>`,7)]))}const D=n(o,[["render",e]]);export{A as __pageData,D as default};
