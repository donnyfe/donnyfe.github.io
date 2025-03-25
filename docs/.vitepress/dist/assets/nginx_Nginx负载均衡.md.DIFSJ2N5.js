import{_ as a,c as n,o as l,ag as p}from"./chunks/framework.DPDPlp3K.js";const F=JSON.parse('{"title":"Nginx负载均衡","description":"","frontmatter":{},"headers":[],"relativePath":"nginx/Nginx负载均衡.md","filePath":"nginx/Nginx负载均衡.md"}'),o={name:"nginx/Nginx负载均衡.md"};function e(t,s,c,r,i,y){return l(),n("div",null,s[0]||(s[0]=[p(`<h1 id="nginx负载均衡" tabindex="-1">Nginx负载均衡 <a class="header-anchor" href="#nginx负载均衡" aria-label="Permalink to &quot;Nginx负载均衡&quot;">​</a></h1><p>负载均衡（ Load Balance）： 将请求/数据均匀分摊到多个操作单元上执行，负载均衡的关键在于均匀</p><h2 id="负载均衡策略" tabindex="-1">负载均衡策略 <a class="header-anchor" href="#负载均衡策略" aria-label="Permalink to &quot;负载均衡策略&quot;">​</a></h2><p>Nginx默认提供了三种负载均衡策略：</p><ol><li>轮询：nginx会将客户端发起的请求，平均的分配给每一台服务器</li><li>权重：nginx会将客户端的请求，根据服务器的权重值不同，分配不同的数量</li><li>ip_hash：nginx基于发起请求和客户端的ip地址不同，始终会将请求发送到指定的服务器上。</li></ol><h2 id="负载均衡配置示例" tabindex="-1">负载均衡配置示例 <a class="header-anchor" href="#负载均衡配置示例" aria-label="Permalink to &quot;负载均衡配置示例&quot;">​</a></h2><h3 id="轮询" tabindex="-1">轮询 <a class="header-anchor" href="#轮询" aria-label="Permalink to &quot;轮询&quot;">​</a></h3><blockquote><p>注意：upstream后的名称定义避免出现下划线</p></blockquote><div class="language-sh"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki github-light vp-code" tabindex="0"><code><span class="line"><span style="color:#6F42C1;">upstream</span><span style="color:#032F62;"> my-server</span><span style="color:#032F62;"> {</span></span>
<span class="line"><span style="color:#6F42C1;">  server</span><span style="color:#032F62;"> http://localhost:3009</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#6F42C1;">  server</span><span style="color:#032F62;"> http://localhost:3008</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6F42C1;">server</span><span style="color:#032F62;"> {</span></span>
<span class="line"><span style="color:#6F42C1;">  listen</span><span style="color:#005CC5;"> 80</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#6F42C1;">  server_name</span><span style="color:#032F62;"> localhost</span><span style="color:#24292E;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6F42C1;">  localhost</span><span style="color:#032F62;"> /</span><span style="color:#032F62;"> {</span></span>
<span class="line"><span style="color:#6F42C1;">    proxy_pass</span><span style="color:#032F62;"> http://my-server/</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><h3 id="权重" tabindex="-1">权重 <a class="header-anchor" href="#权重" aria-label="Permalink to &quot;权重&quot;">​</a></h3><div class="language-sh"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki github-light vp-code" tabindex="0"><code><span class="line"><span style="color:#6F42C1;">upstream</span><span style="color:#032F62;"> my-server</span><span style="color:#032F62;"> {</span></span>
<span class="line"><span style="color:#6F42C1;">  server</span><span style="color:#032F62;"> http://localhost:3009</span><span style="color:#032F62;"> weight=</span><span style="color:#005CC5;">10</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#6F42C1;">  server</span><span style="color:#032F62;"> http://localhost:3008</span><span style="color:#032F62;"> weight=</span><span style="color:#005CC5;">2</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6F42C1;">server</span><span style="color:#032F62;"> {</span></span>
<span class="line"><span style="color:#6F42C1;">  listen</span><span style="color:#005CC5;"> 80</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#6F42C1;">  server_name</span><span style="color:#032F62;"> localhost</span><span style="color:#24292E;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6F42C1;">  localhost</span><span style="color:#032F62;"> /</span><span style="color:#032F62;"> {</span></span>
<span class="line"><span style="color:#6F42C1;">    proxy_pass</span><span style="color:#032F62;"> http://my-server/</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><h3 id="ip-hash" tabindex="-1">ip_hash <a class="header-anchor" href="#ip-hash" aria-label="Permalink to &quot;ip_hash&quot;">​</a></h3><p>确保来自同一个客户端的请求将始终定向到同一台服务器，除非此服务器不可用</p><div class="language-sh"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki github-light vp-code" tabindex="0"><code><span class="line"><span style="color:#6F42C1;">upstream</span><span style="color:#032F62;"> my-server</span><span style="color:#032F62;"> {</span></span>
<span class="line"><span style="color:#6F42C1;">  ip_hash</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#6F42C1;">  server</span><span style="color:#032F62;"> http://localhost:3009</span><span style="color:#032F62;"> weight=</span><span style="color:#005CC5;">10</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#6F42C1;">  server</span><span style="color:#032F62;"> http://localhost:3008</span><span style="color:#032F62;"> weight=</span><span style="color:#005CC5;">2</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6F42C1;">server</span><span style="color:#032F62;"> {</span></span>
<span class="line"><span style="color:#6F42C1;">  listen</span><span style="color:#005CC5;"> 80</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#6F42C1;">  server_name</span><span style="color:#032F62;"> localhost</span><span style="color:#24292E;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6F42C1;">  localhost</span><span style="color:#032F62;"> /</span><span style="color:#032F62;"> {</span></span>
<span class="line"><span style="color:#6F42C1;">    proxy_pass</span><span style="color:#032F62;"> http://my-server/</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><h3 id="least-conn" tabindex="-1">least_conn <a class="header-anchor" href="#least-conn" aria-label="Permalink to &quot;least_conn&quot;">​</a></h3><p>在连接负载最少的情况下，nginx会尽力避免将过多的请求分发给繁忙的应用程序服务器，</p><div class="language-sh"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki github-light vp-code" tabindex="0"><code><span class="line"><span style="color:#6F42C1;">upstream</span><span style="color:#032F62;"> my-server</span><span style="color:#032F62;"> {</span></span>
<span class="line"><span style="color:#6F42C1;">  least_conn</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#6F42C1;">  server</span><span style="color:#032F62;"> http://localhost:3009</span><span style="color:#032F62;"> weight=</span><span style="color:#005CC5;">10</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#6F42C1;">  server</span><span style="color:#032F62;"> http://localhost:3008</span><span style="color:#032F62;"> weight=</span><span style="color:#005CC5;">2</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div>`,17)]))}const d=a(o,[["render",e]]);export{F as __pageData,d as default};
