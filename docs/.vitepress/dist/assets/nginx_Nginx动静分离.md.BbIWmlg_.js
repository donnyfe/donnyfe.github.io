import{_ as n,c as a,o as l,ag as p}from"./chunks/framework.DPDPlp3K.js";const h=JSON.parse('{"title":"Nginx动静分离","description":"","frontmatter":{},"headers":[],"relativePath":"nginx/Nginx动静分离.md","filePath":"nginx/Nginx动静分离.md"}'),o={name:"nginx/Nginx动静分离.md"};function e(c,s,t,r,i,y){return l(),a("div",null,s[0]||(s[0]=[p(`<h1 id="nginx动静分离" tabindex="-1">Nginx动静分离 <a class="header-anchor" href="#nginx动静分离" aria-label="Permalink to &quot;Nginx动静分离&quot;">​</a></h1><p>nginx的并发能力公式：</p><p>Worker_processes * worker_connections / (4 | 2) = 最终的并发能力</p><p>4：动态资源需要最少4个连接数 2：静态资源需要2个连接数</p><h2 id="动态资源代理" tabindex="-1">动态资源代理 <a class="header-anchor" href="#动态资源代理" aria-label="Permalink to &quot;动态资源代理&quot;">​</a></h2><p>配置：</p><div class="language-sh"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki github-light vp-code" tabindex="0"><code><span class="line"><span style="color:#6F42C1;">location</span><span style="color:#032F62;"> /</span><span style="color:#032F62;"> {</span></span>
<span class="line"><span style="color:#6F42C1;">  proxy_pass</span><span style="color:#032F62;"> 路径</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><h2 id="静态资源代理" tabindex="-1">静态资源代理 <a class="header-anchor" href="#静态资源代理" aria-label="Permalink to &quot;静态资源代理&quot;">​</a></h2><p>图床：由外部服务器统一管理静态资源</p><p>配置：</p><div class="language-sh"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki github-light vp-code" tabindex="0"><code><span class="line"><span style="color:#6F42C1;">location</span><span style="color:#032F62;"> /</span><span style="color:#032F62;"> {</span></span>
<span class="line"><span style="color:#6F42C1;">  root</span><span style="color:#032F62;"> 静态资源路径</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#6F42C1;">  index</span><span style="color:#032F62;"> 默认访问路径下的XX资源</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#6F42C1;">  autoindex</span><span style="color:#032F62;"> on</span><span style="color:#24292E;">; </span><span style="color:#6F42C1;">代表展示静态资源的全部内容，以列表的形式展开</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><div class="language-sh"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki github-light vp-code" tabindex="0"><code><span class="line"><span style="color:#6F42C1;">location</span><span style="color:#032F62;"> ^~</span><span style="color:#032F62;"> /static/</span><span style="color:#032F62;"> {</span></span>
<span class="line"><span style="color:#6F42C1;">  root</span><span style="color:#032F62;"> html</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><h2 id="路由匹配规则" tabindex="-1">路由匹配规则 <a class="header-anchor" href="#路由匹配规则" aria-label="Permalink to &quot;路由匹配规则&quot;">​</a></h2><div class="language-sh"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki github-light vp-code" tabindex="0"><code><span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 访问根目录/, 比如http://localhost/</span></span>
<span class="line"><span style="color:#6F42C1;">location</span><span style="color:#032F62;"> =</span><span style="color:#032F62;"> /</span><span style="color:#032F62;"> {</span></span>
<span class="line"><span style="color:#6A737D;">  # 规则A</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 比如http://localhost/login</span></span>
<span class="line"><span style="color:#6F42C1;">location</span><span style="color:#032F62;"> =</span><span style="color:#032F62;"> /login</span><span style="color:#032F62;"> {</span></span>
<span class="line"><span style="color:#6A737D;">  # 规则B</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 比如http://localhost/static/a.png</span></span>
<span class="line"><span style="color:#6F42C1;">location</span><span style="color:#032F62;"> ^~</span><span style="color:#032F62;"> /static/</span><span style="color:#032F62;"> {</span></span>
<span class="line"><span style="color:#6A737D;">  # 规则C</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 比如http://localhost/a.png,规则D优先规则E</span></span>
<span class="line"><span style="color:#6F42C1;">location</span><span style="color:#032F62;"> ~</span><span style="color:#005CC5;"> \\.</span><span style="color:#24292E;">(</span><span style="color:#6F42C1;">gif</span><span style="color:#D73A49;">|</span><span style="color:#6F42C1;">jpg</span><span style="color:#D73A49;">|</span><span style="color:#6F42C1;">png</span><span style="color:#D73A49;">|</span><span style="color:#6F42C1;">js</span><span style="color:#D73A49;">|</span><span style="color:#6F42C1;">css</span><span style="color:#24292E;">)$ </span><span style="color:#032F62;">{</span></span>
<span class="line"><span style="color:#6A737D;">  # 规则D</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 比如http://localhost/a.PNG,只会匹配规则E，不会匹配规则D，因为规则D严格区分大小写</span></span>
<span class="line"><span style="color:#6F42C1;">location</span><span style="color:#032F62;"> ~</span><span style="color:#005CC5;">*</span><span style="color:#005CC5;"> \\.</span><span style="color:#032F62;">png</span><span style="color:#24292E;">$ </span><span style="color:#032F62;">{</span></span>
<span class="line"><span style="color:#6A737D;">  # 规则E</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">#</span></span>
<span class="line"><span style="color:#6F42C1;">location</span><span style="color:#032F62;"> !~</span><span style="color:#005CC5;"> \\.</span><span style="color:#032F62;">xhtml</span><span style="color:#24292E;">$ </span><span style="color:#032F62;">{</span></span>
<span class="line"><span style="color:#6A737D;">  # 规则F</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">#</span></span>
<span class="line"><span style="color:#6F42C1;">location</span><span style="color:#032F62;"> !~</span><span style="color:#005CC5;">*</span><span style="color:#005CC5;"> \\.</span><span style="color:#032F62;">xhtml</span><span style="color:#24292E;">$ </span><span style="color:#032F62;">{</span></span>
<span class="line"><span style="color:#6A737D;">  # 规则G</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">#</span></span>
<span class="line"><span style="color:#6F42C1;">location</span><span style="color:#032F62;"> /</span><span style="color:#032F62;"> {</span></span>
<span class="line"><span style="color:#6A737D;">  # 规则H</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div>`,14)]))}const d=n(o,[["render",e]]);export{h as __pageData,d as default};
