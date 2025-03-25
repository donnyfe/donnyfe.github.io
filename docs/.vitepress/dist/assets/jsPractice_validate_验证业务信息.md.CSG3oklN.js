import{_ as n,c as a,o as l,ag as p}from"./chunks/framework.DPDPlp3K.js";const C=JSON.parse('{"title":"验证业务信息","description":"","frontmatter":{},"headers":[],"relativePath":"jsPractice/validate/验证业务信息.md","filePath":"jsPractice/validate/验证业务信息.md"}'),o={name:"jsPractice/validate/验证业务信息.md"};function e(c,s,t,r,y,i){return l(),a("div",null,s[0]||(s[0]=[p(`<h1 id="验证业务信息" tabindex="-1">验证业务信息 <a class="header-anchor" href="#验证业务信息" aria-label="Permalink to &quot;验证业务信息&quot;">​</a></h1><h2 id="手机号码验证" tabindex="-1">手机号码验证 <a class="header-anchor" href="#手机号码验证" aria-label="Permalink to &quot;手机号码验证&quot;">​</a></h2><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-light vp-code" tabindex="0"><code><span class="line"><span style="color:#6A737D;">/**</span></span>
<span class="line"><span style="color:#6A737D;"> * 验证手机格式</span></span>
<span class="line"><span style="color:#6A737D;"> */</span></span>
<span class="line"><span style="color:#D73A49;">function</span><span style="color:#6F42C1;"> isMobile</span><span style="color:#24292E;">(</span><span style="color:#E36209;">value</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#D73A49;">    return</span><span style="color:#032F62;"> /</span><span style="color:#D73A49;">^</span><span style="color:#032F62;">1</span><span style="color:#005CC5;">[23456789]\\d</span><span style="color:#D73A49;">{9}$</span><span style="color:#032F62;">/</span><span style="color:#24292E;">.</span><span style="color:#6F42C1;">test</span><span style="color:#24292E;">(value)</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><h2 id="邮箱验证" tabindex="-1">邮箱验证 <a class="header-anchor" href="#邮箱验证" aria-label="Permalink to &quot;邮箱验证&quot;">​</a></h2><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-light vp-code" tabindex="0"><code><span class="line"><span style="color:#D73A49;">export</span><span style="color:#D73A49;"> function</span><span style="color:#6F42C1;"> isEmail</span><span style="color:#24292E;">(</span><span style="color:#E36209;">value</span><span style="color:#D73A49;">:</span><span style="color:#005CC5;"> string</span><span style="color:#24292E;">)</span><span style="color:#D73A49;">:</span><span style="color:#005CC5;"> boolean</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#D73A49;">  const</span><span style="color:#005CC5;"> EMAIL_REGEX</span><span style="color:#D73A49;"> =</span><span style="color:#032F62;"> /</span><span style="color:#D73A49;">^</span><span style="color:#032F62;">((</span><span style="color:#005CC5;">[</span><span style="color:#D73A49;">^</span><span style="color:#005CC5;">&lt;&gt;()[</span><span style="color:#22863A;font-weight:bold;">\\]\\\\</span><span style="color:#005CC5;">.,;:\\s@</span><span style="color:#22863A;font-weight:bold;">\\&quot;</span><span style="color:#005CC5;">]</span><span style="color:#D73A49;">+</span><span style="color:#032F62;">(</span><span style="color:#22863A;font-weight:bold;">\\.</span><span style="color:#005CC5;">[</span><span style="color:#D73A49;">^</span><span style="color:#005CC5;">&lt;&gt;()[</span><span style="color:#22863A;font-weight:bold;">\\]\\\\</span><span style="color:#005CC5;">.,;:\\s@</span><span style="color:#22863A;font-weight:bold;">\\&quot;</span><span style="color:#005CC5;">]</span><span style="color:#D73A49;">+</span><span style="color:#032F62;">)</span><span style="color:#D73A49;">*</span><span style="color:#032F62;">)</span><span style="color:#D73A49;">|</span><span style="color:#032F62;">(</span><span style="color:#22863A;font-weight:bold;">\\&quot;</span><span style="color:#005CC5;">.</span><span style="color:#D73A49;">+</span><span style="color:#22863A;font-weight:bold;">\\&quot;</span><span style="color:#032F62;">))@((</span><span style="color:#22863A;font-weight:bold;">\\[</span><span style="color:#005CC5;">[0-9]</span><span style="color:#D73A49;">{1,3}</span><span style="color:#22863A;font-weight:bold;">\\.</span><span style="color:#005CC5;">[0-9]</span><span style="color:#D73A49;">{1,3}</span><span style="color:#22863A;font-weight:bold;">\\.</span><span style="color:#005CC5;">[0-9]</span><span style="color:#D73A49;">{1,3}</span><span style="color:#22863A;font-weight:bold;">\\.</span><span style="color:#005CC5;">[0-9]</span><span style="color:#D73A49;">{1,3}</span><span style="color:#22863A;font-weight:bold;">\\]</span><span style="color:#032F62;">)</span><span style="color:#D73A49;">|</span><span style="color:#032F62;">((</span><span style="color:#005CC5;">[a-zA-Z\\-0-9]</span><span style="color:#D73A49;">+</span><span style="color:#22863A;font-weight:bold;">\\.</span><span style="color:#032F62;">)</span><span style="color:#D73A49;">+</span><span style="color:#005CC5;">[a-zA-Z]</span><span style="color:#D73A49;">{2,}</span><span style="color:#032F62;">))</span><span style="color:#D73A49;">$</span><span style="color:#032F62;">/</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#D73A49;">  return</span><span style="color:#005CC5;"> EMAIL_REGEX</span><span style="color:#24292E;">.</span><span style="color:#6F42C1;">test</span><span style="color:#24292E;">(value);</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><h2 id="国际手机号验证" tabindex="-1">国际手机号验证 <a class="header-anchor" href="#国际手机号验证" aria-label="Permalink to &quot;国际手机号验证&quot;">​</a></h2><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-light vp-code" tabindex="0"><code><span class="line"><span style="color:#6A737D;">/*</span></span>
<span class="line"><span style="color:#6A737D;">  https://github.com/wilesen/wTools/blob/master/index.js</span></span>
<span class="line"><span style="color:#6A737D;">*/</span></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#005CC5;"> phoneRegExpList</span><span style="color:#D73A49;"> =</span><span style="color:#24292E;"> [</span></span>
<span class="line"><span style="color:#24292E;">  {</span></span>
<span class="line"><span style="color:#24292E;">    displayName: </span><span style="color:#032F62;">&#39;+86&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    regexp:</span></span>
<span class="line"><span style="color:#032F62;">      &#39;^(0086-){0,1}((13[0-9])|(14[579])|(15[0-9])|(16[567])|(18[0-9])|(17[0-8])|(19[189]))</span><span style="color:#005CC5;">\\\\</span><span style="color:#032F62;">d{8}$&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    zone: </span><span style="color:#032F62;">&#39;0086&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    zoneName: </span><span style="color:#032F62;">&#39;中国大陆&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  },</span></span>
<span class="line"><span style="color:#24292E;">  {</span></span>
<span class="line"><span style="color:#24292E;">    displayName: </span><span style="color:#032F62;">&#39;+852&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    regexp: </span><span style="color:#032F62;">&#39;^(00852-)(5|6|8|9)</span><span style="color:#005CC5;">\\\\</span><span style="color:#032F62;">d{7}$&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    zone: </span><span style="color:#032F62;">&#39;00852&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    zoneName: </span><span style="color:#032F62;">&#39;中国香港&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  },</span></span>
<span class="line"><span style="color:#24292E;">  {</span></span>
<span class="line"><span style="color:#24292E;">    displayName: </span><span style="color:#032F62;">&#39;+853&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    regexp: </span><span style="color:#032F62;">&#39;^(00853-6)</span><span style="color:#005CC5;">\\\\</span><span style="color:#032F62;">d{7}$&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    zone: </span><span style="color:#032F62;">&#39;00853&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    zoneName: </span><span style="color:#032F62;">&#39;中国澳门&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  },</span></span>
<span class="line"><span style="color:#24292E;">  {</span></span>
<span class="line"><span style="color:#24292E;">    displayName: </span><span style="color:#032F62;">&#39;+886&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    regexp: </span><span style="color:#032F62;">&#39;^(00886-09)</span><span style="color:#005CC5;">\\\\</span><span style="color:#032F62;">d{8}$&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    zone: </span><span style="color:#032F62;">&#39;00886&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    zoneName: </span><span style="color:#032F62;">&#39;中国台湾&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  },</span></span>
<span class="line"><span style="color:#24292E;">  {</span></span>
<span class="line"><span style="color:#24292E;">    displayName: </span><span style="color:#032F62;">&#39;+971&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    regexp: </span><span style="color:#032F62;">&#39;^00971-0?5(0|2|5|6)</span><span style="color:#005CC5;">\\\\</span><span style="color:#032F62;">d{7}$&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    zone: </span><span style="color:#032F62;">&#39;00971&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    zoneName: </span><span style="color:#032F62;">&#39;阿联酋&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  },</span></span>
<span class="line"><span style="color:#24292E;">  {</span></span>
<span class="line"><span style="color:#24292E;">    displayName: </span><span style="color:#032F62;">&#39;+61&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    regexp: </span><span style="color:#032F62;">&#39;^0061-0?[45]</span><span style="color:#005CC5;">\\\\</span><span style="color:#032F62;">d{8}$&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    zone: </span><span style="color:#032F62;">&#39;0061&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    zoneName: </span><span style="color:#032F62;">&#39;澳大利亚&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  },</span></span>
<span class="line"><span style="color:#24292E;">  {</span></span>
<span class="line"><span style="color:#24292E;">    displayName: </span><span style="color:#032F62;">&#39;+670&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    regexp: </span><span style="color:#032F62;">&#39;^00670-7</span><span style="color:#005CC5;">\\\\</span><span style="color:#032F62;">d{7}$&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    zone: </span><span style="color:#032F62;">&#39;00670&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    zoneName: </span><span style="color:#032F62;">&#39;东帝汶&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  },</span></span>
<span class="line"><span style="color:#24292E;">  {</span></span>
<span class="line"><span style="color:#24292E;">    displayName: </span><span style="color:#032F62;">&#39;+63&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    regexp: </span><span style="color:#032F62;">&#39;^0063-0?9</span><span style="color:#005CC5;">\\\\</span><span style="color:#032F62;">d{9}$&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    zone: </span><span style="color:#032F62;">&#39;0063&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    zoneName: </span><span style="color:#032F62;">&#39;菲律宾&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  },</span></span>
<span class="line"><span style="color:#24292E;">  {</span></span>
<span class="line"><span style="color:#24292E;">    displayName: </span><span style="color:#032F62;">&#39;+82&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    regexp: </span><span style="color:#032F62;">&#39;^0082-0?1</span><span style="color:#005CC5;">\\\\</span><span style="color:#032F62;">d{9}$&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    zone: </span><span style="color:#032F62;">&#39;0082&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    zoneName: </span><span style="color:#032F62;">&#39;韩国&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  },</span></span>
<span class="line"><span style="color:#24292E;">  {</span></span>
<span class="line"><span style="color:#24292E;">    displayName: </span><span style="color:#032F62;">&#39;+1&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    regexp: </span><span style="color:#032F62;">&#39;^001-[1-9]</span><span style="color:#005CC5;">\\\\</span><span style="color:#032F62;">d{9}$&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    zone: </span><span style="color:#032F62;">&#39;001&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    zoneName: </span><span style="color:#032F62;">&#39;加拿大&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  },</span></span>
<span class="line"><span style="color:#24292E;">  {</span></span>
<span class="line"><span style="color:#24292E;">    displayName: </span><span style="color:#032F62;">&#39;+855&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    regexp: </span><span style="color:#032F62;">&#39;^00855-0?85</span><span style="color:#005CC5;">\\\\</span><span style="color:#032F62;">d{6}$&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    zone: </span><span style="color:#032F62;">&#39;00855&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    zoneName: </span><span style="color:#032F62;">&#39;柬埔寨&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  },</span></span>
<span class="line"><span style="color:#24292E;">  {</span></span>
<span class="line"><span style="color:#24292E;">    displayName: </span><span style="color:#032F62;">&#39;+856&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    regexp: </span><span style="color:#032F62;">&#39;^00856-0?20</span><span style="color:#005CC5;">\\\\</span><span style="color:#032F62;">d{7,8}$&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    zone: </span><span style="color:#032F62;">&#39;00856&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    zoneName: </span><span style="color:#032F62;">&#39;老挝&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  },</span></span>
<span class="line"><span style="color:#24292E;">  {</span></span>
<span class="line"><span style="color:#24292E;">    displayName: </span><span style="color:#032F62;">&#39;+60&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    regexp: </span><span style="color:#032F62;">&#39;^0060-0?1(([02346789]</span><span style="color:#005CC5;">\\\\</span><span style="color:#032F62;">d{7})|(1</span><span style="color:#005CC5;">\\\\</span><span style="color:#032F62;">d{8}))$&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    zone: </span><span style="color:#032F62;">&#39;0060&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    zoneName: </span><span style="color:#032F62;">&#39;马来西亚&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  },</span></span>
<span class="line"><span style="color:#24292E;">  {</span></span>
<span class="line"><span style="color:#24292E;">    displayName: </span><span style="color:#032F62;">&#39;+1&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    regexp: </span><span style="color:#032F62;">&#39;^001-[1-9]</span><span style="color:#005CC5;">\\\\</span><span style="color:#032F62;">d{9}$&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    zone: </span><span style="color:#032F62;">&#39;001&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    zoneName: </span><span style="color:#032F62;">&#39;美国&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  },</span></span>
<span class="line"><span style="color:#24292E;">  {</span></span>
<span class="line"><span style="color:#24292E;">    displayName: </span><span style="color:#032F62;">&#39;+95&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    regexp: </span><span style="color:#032F62;">&#39;^0095-0?[1-9]</span><span style="color:#005CC5;">\\\\</span><span style="color:#032F62;">d{9}$&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    zone: </span><span style="color:#032F62;">&#39;0095&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    zoneName: </span><span style="color:#032F62;">&#39;缅甸&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  },</span></span>
<span class="line"><span style="color:#24292E;">  {</span></span>
<span class="line"><span style="color:#24292E;">    displayName: </span><span style="color:#032F62;">&#39;+81&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    regexp: </span><span style="color:#032F62;">&#39;^0081-0?[1-9]</span><span style="color:#005CC5;">\\\\</span><span style="color:#032F62;">d{9}$&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    zone: </span><span style="color:#032F62;">&#39;0081&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    zoneName: </span><span style="color:#032F62;">&#39;日本&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  },</span></span>
<span class="line"><span style="color:#24292E;">  {</span></span>
<span class="line"><span style="color:#24292E;">    displayName: </span><span style="color:#032F62;">&#39;+66&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    regexp: </span><span style="color:#032F62;">&#39;^0066-0?[1-9]</span><span style="color:#005CC5;">\\\\</span><span style="color:#032F62;">d{8}$&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    zone: </span><span style="color:#032F62;">&#39;0066&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    zoneName: </span><span style="color:#032F62;">&#39;泰国&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  },</span></span>
<span class="line"><span style="color:#24292E;">  {</span></span>
<span class="line"><span style="color:#24292E;">    displayName: </span><span style="color:#032F62;">&#39;+673&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    regexp: </span><span style="color:#032F62;">&#39;^00673-((22[89])|(71</span><span style="color:#005CC5;">\\\\</span><span style="color:#032F62;">d)|(72[0-3])|(8[1236789]</span><span style="color:#005CC5;">\\\\</span><span style="color:#032F62;">d))</span><span style="color:#005CC5;">\\\\</span><span style="color:#032F62;">d{4}$&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    zone: </span><span style="color:#032F62;">&#39;00673&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    zoneName: </span><span style="color:#032F62;">&#39;文莱&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  },</span></span>
<span class="line"><span style="color:#24292E;">  {</span></span>
<span class="line"><span style="color:#24292E;">    displayName: </span><span style="color:#032F62;">&#39;+34&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    regexp: </span><span style="color:#032F62;">&#39;^0034-[6-7]</span><span style="color:#005CC5;">\\\\</span><span style="color:#032F62;">d{8}$&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    zone: </span><span style="color:#032F62;">&#39;0034&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    zoneName: </span><span style="color:#032F62;">&#39;西班牙&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  },</span></span>
<span class="line"><span style="color:#24292E;">  {</span></span>
<span class="line"><span style="color:#24292E;">    displayName: </span><span style="color:#032F62;">&#39;+65&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    regexp: </span><span style="color:#032F62;">&#39;^0065-[89]</span><span style="color:#005CC5;">\\\\</span><span style="color:#032F62;">d{7}$&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    zone: </span><span style="color:#032F62;">&#39;0065&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    zoneName: </span><span style="color:#032F62;">&#39;新加坡&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  },</span></span>
<span class="line"><span style="color:#24292E;">  {</span></span>
<span class="line"><span style="color:#24292E;">    displayName: </span><span style="color:#032F62;">&#39;+64&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    regexp: </span><span style="color:#032F62;">&#39;^0064-0?2[012579]</span><span style="color:#005CC5;">\\\\</span><span style="color:#032F62;">d{7,8}$&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    zone: </span><span style="color:#032F62;">&#39;0064&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    zoneName: </span><span style="color:#032F62;">&#39;新西兰&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  },</span></span>
<span class="line"><span style="color:#24292E;">  {</span></span>
<span class="line"><span style="color:#24292E;">    displayName: </span><span style="color:#032F62;">&#39;+62&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    regexp: </span><span style="color:#032F62;">&#39;^0062-0?8</span><span style="color:#005CC5;">\\\\</span><span style="color:#032F62;">d{8,10}$&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    zone: </span><span style="color:#032F62;">&#39;0062&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    zoneName: </span><span style="color:#032F62;">&#39;印度尼西亚&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  },</span></span>
<span class="line"><span style="color:#24292E;">  {</span></span>
<span class="line"><span style="color:#24292E;">    displayName: </span><span style="color:#032F62;">&#39;+44&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    regexp: </span><span style="color:#032F62;">&#39;^0044-0?7</span><span style="color:#005CC5;">\\\\</span><span style="color:#032F62;">d{9}$&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    zone: </span><span style="color:#032F62;">&#39;0044&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    zoneName: </span><span style="color:#032F62;">&#39;英国&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  },</span></span>
<span class="line"><span style="color:#24292E;">  {</span></span>
<span class="line"><span style="color:#24292E;">    displayName: </span><span style="color:#032F62;">&#39;+84&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    regexp: </span><span style="color:#032F62;">&#39;^0084-0?[1-9]</span><span style="color:#005CC5;">\\\\</span><span style="color:#032F62;">d{9}$&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    zone: </span><span style="color:#032F62;">&#39;0084&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    zoneName: </span><span style="color:#032F62;">&#39;越南&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  },</span></span>
<span class="line"><span style="color:#24292E;">];</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">function</span><span style="color:#6F42C1;"> checkMobileRegExp</span><span style="color:#24292E;">(</span><span style="color:#E36209;">zone</span><span style="color:#D73A49;"> =</span><span style="color:#032F62;"> &#39;0086&#39;</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#D73A49;">  const</span><span style="color:#005CC5;"> chooseItem</span><span style="color:#D73A49;"> =</span><span style="color:#24292E;"> phoneRegExpList.</span><span style="color:#6F42C1;">filter</span><span style="color:#24292E;">(</span><span style="color:#E36209;">i</span><span style="color:#D73A49;"> =&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">    i.zone </span><span style="color:#D73A49;">==</span><span style="color:#24292E;"> zone;</span></span>
<span class="line"><span style="color:#24292E;">  });</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">  return</span><span style="color:#24292E;"> chooseItem[</span><span style="color:#005CC5;">0</span><span style="color:#24292E;">].regexp;</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">export</span><span style="color:#D73A49;"> default</span><span style="color:#24292E;"> checkMobileRegExp;</span></span></code></pre></div><h2 id="密码强度验证" tabindex="-1">密码强度验证 <a class="header-anchor" href="#密码强度验证" aria-label="Permalink to &quot;密码强度验证&quot;">​</a></h2><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-light vp-code" tabindex="0"><code><span class="line"><span style="color:#D73A49;">const</span><span style="color:#005CC5;"> complexity</span><span style="color:#D73A49;"> =</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  total: </span><span style="color:#005CC5;">12</span><span style="color:#24292E;">, </span><span style="color:#6A737D;">// 密码位数</span></span>
<span class="line"><span style="color:#24292E;">  upper: </span><span style="color:#005CC5;">3</span><span style="color:#24292E;">, </span><span style="color:#6A737D;">// 大写字母位数</span></span>
<span class="line"><span style="color:#24292E;">  lower: </span><span style="color:#005CC5;">3</span><span style="color:#24292E;">, </span><span style="color:#6A737D;">// 小写字母位数</span></span>
<span class="line"><span style="color:#24292E;">  digit: </span><span style="color:#005CC5;">3</span><span style="color:#24292E;">, </span><span style="color:#6A737D;">// 数字位数</span></span>
<span class="line"><span style="color:#24292E;">  special: </span><span style="color:#005CC5;">3</span><span style="color:#24292E;">, </span><span style="color:#6A737D;">// 特殊符号位数</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"><span style="color:#D73A49;">export</span><span style="color:#D73A49;"> function</span><span style="color:#6F42C1;"> generatePassword</span><span style="color:#24292E;">(</span><span style="color:#E36209;">complexity</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">  complexity </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> complexity </span><span style="color:#D73A49;">||</span><span style="color:#24292E;"> {};</span></span>
<span class="line"><span style="color:#6A737D;">  // generated password must be at least \`complexity.total\`, but can be longer</span></span>
<span class="line"><span style="color:#6A737D;">  // so hard code a minimum of 14</span></span>
<span class="line"><span style="color:#D73A49;">  const</span><span style="color:#005CC5;"> len</span><span style="color:#D73A49;"> =</span><span style="color:#24292E;"> Math.</span><span style="color:#6F42C1;">max</span><span style="color:#24292E;">(complexity.total </span><span style="color:#D73A49;">||</span><span style="color:#005CC5;"> 0</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">14</span><span style="color:#24292E;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">  let</span><span style="color:#24292E;"> password </span><span style="color:#D73A49;">=</span><span style="color:#032F62;"> &quot;&quot;</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#D73A49;">  let</span><span style="color:#24292E;"> tries </span><span style="color:#D73A49;">=</span><span style="color:#005CC5;"> 0</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#D73A49;">  while</span><span style="color:#24292E;"> (</span><span style="color:#D73A49;">!</span><span style="color:#6F42C1;">isStrongEnough</span><span style="color:#24292E;">(password) </span><span style="color:#D73A49;">&amp;&amp;</span><span style="color:#24292E;"> tries </span><span style="color:#D73A49;">&lt;</span><span style="color:#005CC5;"> 100</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">    password </span><span style="color:#D73A49;">=</span><span style="color:#6F42C1;"> generatePassword</span><span style="color:#24292E;">(len, </span><span style="color:#005CC5;">false</span><span style="color:#24292E;">,</span><span style="color:#032F62;"> /</span><span style="color:#005CC5;">[\\w\\d</span><span style="color:#22863A;font-weight:bold;">\\?\\-</span><span style="color:#005CC5;">]</span><span style="color:#032F62;">/</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">    tries</span><span style="color:#D73A49;">++</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"><span style="color:#D73A49;">  return</span><span style="color:#24292E;"> password;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">  function</span><span style="color:#6F42C1;"> isStrongEnough</span><span style="color:#24292E;">(</span><span style="color:#E36209;">password</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#D73A49;">    const</span><span style="color:#005CC5;"> uc</span><span style="color:#D73A49;"> =</span><span style="color:#24292E;"> password.</span><span style="color:#6F42C1;">match</span><span style="color:#24292E;">(</span><span style="color:#032F62;">/(</span><span style="color:#005CC5;">[A-Z]</span><span style="color:#032F62;">)/</span><span style="color:#D73A49;">g</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#D73A49;">    const</span><span style="color:#005CC5;"> lc</span><span style="color:#D73A49;"> =</span><span style="color:#24292E;"> password.</span><span style="color:#6F42C1;">match</span><span style="color:#24292E;">(</span><span style="color:#032F62;">/(</span><span style="color:#005CC5;">[a-z]</span><span style="color:#032F62;">)/</span><span style="color:#D73A49;">g</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#D73A49;">    const</span><span style="color:#005CC5;"> di</span><span style="color:#D73A49;"> =</span><span style="color:#24292E;"> password.</span><span style="color:#6F42C1;">match</span><span style="color:#24292E;">(</span><span style="color:#032F62;">/(</span><span style="color:#005CC5;">[\\d]</span><span style="color:#032F62;">)/</span><span style="color:#D73A49;">g</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#D73A49;">    const</span><span style="color:#005CC5;"> sc</span><span style="color:#D73A49;"> =</span><span style="color:#24292E;"> password.</span><span style="color:#6F42C1;">match</span><span style="color:#24292E;">(</span><span style="color:#032F62;">/(</span><span style="color:#005CC5;">[!@#</span><span style="color:#22863A;font-weight:bold;">\\$</span><span style="color:#005CC5;">%</span><span style="color:#22863A;font-weight:bold;">\\^\\&amp;</span><span style="color:#005CC5;">*</span><span style="color:#22863A;font-weight:bold;">\\)\\(</span><span style="color:#005CC5;">+=._-{}]</span><span style="color:#032F62;">)/</span><span style="color:#D73A49;">g</span><span style="color:#24292E;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">    return</span><span style="color:#24292E;"> (</span></span>
<span class="line"><span style="color:#24292E;">      uc </span><span style="color:#D73A49;">&amp;&amp;</span></span>
<span class="line"><span style="color:#24292E;">      uc.</span><span style="color:#005CC5;">length</span><span style="color:#D73A49;"> &gt;=</span><span style="color:#24292E;"> (complexity.upper </span><span style="color:#D73A49;">||</span><span style="color:#005CC5;"> 0</span><span style="color:#24292E;">) </span><span style="color:#D73A49;">&amp;&amp;</span></span>
<span class="line"><span style="color:#24292E;">      lc </span><span style="color:#D73A49;">&amp;&amp;</span></span>
<span class="line"><span style="color:#24292E;">      lc.</span><span style="color:#005CC5;">length</span><span style="color:#D73A49;"> &gt;=</span><span style="color:#24292E;"> (complexity.lower </span><span style="color:#D73A49;">||</span><span style="color:#005CC5;"> 0</span><span style="color:#24292E;">) </span><span style="color:#D73A49;">&amp;&amp;</span></span>
<span class="line"><span style="color:#24292E;">      di </span><span style="color:#D73A49;">&amp;&amp;</span></span>
<span class="line"><span style="color:#24292E;">      di.</span><span style="color:#005CC5;">length</span><span style="color:#D73A49;"> &gt;=</span><span style="color:#24292E;"> (complexity.digit </span><span style="color:#D73A49;">||</span><span style="color:#005CC5;"> 0</span><span style="color:#24292E;">) </span><span style="color:#D73A49;">&amp;&amp;</span></span>
<span class="line"><span style="color:#24292E;">      sc </span><span style="color:#D73A49;">&amp;&amp;</span></span>
<span class="line"><span style="color:#24292E;">      sc.</span><span style="color:#005CC5;">length</span><span style="color:#D73A49;"> &gt;=</span><span style="color:#24292E;"> (complexity.special </span><span style="color:#D73A49;">||</span><span style="color:#005CC5;"> 0</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#24292E;">    );</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><h2 id="身份证号码验证" tabindex="-1">身份证号码验证 <a class="header-anchor" href="#身份证号码验证" aria-label="Permalink to &quot;身份证号码验证&quot;">​</a></h2><h2 id="车牌号码" tabindex="-1">车牌号码 <a class="header-anchor" href="#车牌号码" aria-label="Permalink to &quot;车牌号码&quot;">​</a></h2>`,11)]))}const F=n(o,[["render",e]]);export{C as __pageData,F as default};
