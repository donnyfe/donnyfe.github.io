import{_ as a,c as n,o as l,ag as p}from"./chunks/framework.DPDPlp3K.js";const h=JSON.parse('{"title":"Nginx反向代理","description":"","frontmatter":{},"headers":[],"relativePath":"nginx/Nginx反向代理.md","filePath":"nginx/Nginx反向代理.md"}'),o={name:"nginx/Nginx反向代理.md"};function e(t,s,c,i,r,y){return l(),n("div",null,s[0]||(s[0]=[p(`<h1 id="nginx反向代理" tabindex="-1">Nginx反向代理 <a class="header-anchor" href="#nginx反向代理" aria-label="Permalink to &quot;Nginx反向代理&quot;">​</a></h1><h2 id="正向代理" tabindex="-1">正向代理 <a class="header-anchor" href="#正向代理" aria-label="Permalink to &quot;正向代理&quot;">​</a></h2><ol><li>正向代理服务器由客户端设立</li><li>客户端了解代理服务器和目标服务器都是谁</li><li>实现突破访问权限，提高访问速度，对目标服务器隐藏客户端的地址</li></ol><h2 id="反向代理" tabindex="-1">反向代理 <a class="header-anchor" href="#反向代理" aria-label="Permalink to &quot;反向代理&quot;">​</a></h2><ol><li>反向代理服务器是配置在服务端</li><li>客户端是不知道访问的到底是哪一台服务器</li><li>达到负载均衡，并且可以隐藏服务器真正的ip地址</li></ol><h2 id="基于nginx实现反向代理" tabindex="-1">基于Nginx实现反向代理 <a class="header-anchor" href="#基于nginx实现反向代理" aria-label="Permalink to &quot;基于Nginx实现反向代理&quot;">​</a></h2><ol><li>准备一个目标服务器</li><li>编写nginx配置文件，通过nginx访问到目标服务器</li></ol><div class="language-sh"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki github-light vp-code" tabindex="0"><code><span class="line"><span style="color:#6F42C1;">server</span><span style="color:#032F62;"> {</span></span>
<span class="line"><span style="color:#6F42C1;">  listen</span><span style="color:#005CC5;"> 80</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#6F42C1;">  server_name</span><span style="color:#032F62;"> localhost</span><span style="color:#24292E;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">  # 反向代理</span></span>
<span class="line"><span style="color:#6A737D;">  # 前端访问api下的接口时，会代理到proxy_pass指向的地址</span></span>
<span class="line"><span style="color:#6F42C1;">  location</span><span style="color:#032F62;"> /api/</span><span style="color:#032F62;"> {</span></span>
<span class="line"><span style="color:#6F42C1;">      proxy_set_header</span><span style="color:#032F62;"> X-Real-IP</span><span style="color:#24292E;"> $remote_addr;</span></span>
<span class="line"><span style="color:#6F42C1;">      proxy_set_header</span><span style="color:#032F62;"> Host</span><span style="color:#24292E;"> $http_host;</span></span>
<span class="line"><span style="color:#6A737D;">      # 基于反向代理访问到目标服务器，用户访问api接口时，指向本地服务3000端口</span></span>
<span class="line"><span style="color:#6F42C1;">      proxy_pass</span><span style="color:#032F62;"> http://127.0.0.1:3000</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><h2 id="nginx的location路径映射" tabindex="-1">Nginx的location路径映射 <a class="header-anchor" href="#nginx的location路径映射" aria-label="Permalink to &quot;Nginx的location路径映射&quot;">​</a></h2><h3 id="匹配规则-按优先级排列" tabindex="-1">匹配规则(按优先级排列) <a class="header-anchor" href="#匹配规则-按优先级排列" aria-label="Permalink to &quot;匹配规则(按优先级排列)&quot;">​</a></h3><div class="language-sh"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki github-light vp-code" tabindex="0"><code><span class="line"><span style="color:#6A737D;"># 1、=匹配，精准匹配，主机名后面不能带任何的字符串</span></span>
<span class="line"><span style="color:#6F42C1;">location</span><span style="color:#032F62;"> =</span><span style="color:#032F62;"> /</span><span style="color:#032F62;"> {}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 2、通用匹配，匹配所有以/xxx开头的路径</span></span>
<span class="line"><span style="color:#6F42C1;">location</span><span style="color:#032F62;"> /xxx</span><span style="color:#032F62;"> {}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 3、匹配开头路径，匹配所有以/images/开头的路径</span></span>
<span class="line"><span style="color:#6F42C1;">location</span><span style="color:#032F62;"> ^~</span><span style="color:#032F62;"> /images/</span><span style="color:#032F62;"> {}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 4、正则匹配，匹配所有以/xxx开头的路径</span></span>
<span class="line"><span style="color:#6F42C1;">location</span><span style="color:#032F62;"> ~</span><span style="color:#032F62;"> /xxx</span><span style="color:#032F62;"> {}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 5、后缀匹配，匹配以gif或xxx为结尾的路径</span></span>
<span class="line"><span style="color:#6F42C1;">location</span><span style="color:#032F62;"> ~</span><span style="color:#005CC5;">*</span><span style="color:#005CC5;"> \\.</span><span style="color:#24292E;">(</span><span style="color:#6F42C1;">gif</span><span style="color:#D73A49;">|</span><span style="color:#6F42C1;">jpg</span><span style="color:#D73A49;">|</span><span style="color:#6F42C1;">png</span><span style="color:#24292E;">)$ </span><span style="color:#032F62;">{}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 6. 匹配所有路径</span></span>
<span class="line"><span style="color:#6F42C1;">location</span><span style="color:#032F62;"> /</span><span style="color:#032F62;"> {}</span></span></code></pre></div>`,11)]))}const d=a(o,[["render",e]]);export{h as __pageData,d as default};
