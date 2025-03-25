import{_ as n,c as a,o as l,ag as p}from"./chunks/framework.DPDPlp3K.js";const h=JSON.parse('{"title":"Nginx性能优化","description":"","frontmatter":{},"headers":[],"relativePath":"nginx/Nginx性能优化.md","filePath":"nginx/Nginx性能优化.md"}'),e={name:"nginx/Nginx性能优化.md"};function o(t,s,c,r,i,y){return l(),a("div",null,s[0]||(s[0]=[p(`<h1 id="nginx性能优化" tabindex="-1">Nginx性能优化 <a class="header-anchor" href="#nginx性能优化" aria-label="Permalink to &quot;Nginx性能优化&quot;">​</a></h1><h2 id="基础配置优化" tabindex="-1">基础配置优化 <a class="header-anchor" href="#基础配置优化" aria-label="Permalink to &quot;基础配置优化&quot;">​</a></h2><h3 id="worker进程优化" tabindex="-1">worker进程优化 <a class="header-anchor" href="#worker进程优化" aria-label="Permalink to &quot;worker进程优化&quot;">​</a></h3><div class="language-sh"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki github-light vp-code" tabindex="0"><code><span class="line"><span style="color:#6A737D;"># 根据CPU核心数设置worker进程数</span></span>
<span class="line"><span style="color:#6F42C1;">worker_processes</span><span style="color:#032F62;"> auto</span><span style="color:#24292E;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 设置worker进程文件描述符数量</span></span>
<span class="line"><span style="color:#6F42C1;">worker_rlimit_nofile</span><span style="color:#005CC5;"> 100000</span><span style="color:#24292E;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 只记录critical级别错误日志</span></span>
<span class="line"><span style="color:#6F42C1;">error_log</span><span style="color:#032F62;"> /var/log/nginx/error.log</span><span style="color:#032F62;"> crit</span><span style="color:#24292E;">;</span></span></code></pre></div><h3 id="events模块优化" tabindex="-1">events模块优化 <a class="header-anchor" href="#events模块优化" aria-label="Permalink to &quot;events模块优化&quot;">​</a></h3><div class="language-sh"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki github-light vp-code" tabindex="0"><code><span class="line"><span style="color:#6F42C1;">events</span><span style="color:#032F62;"> {</span></span>
<span class="line"><span style="color:#6A737D;">    # 设置单个worker进程的最大连接数</span></span>
<span class="line"><span style="color:#6F42C1;">    worker_connections</span><span style="color:#005CC5;"> 4000</span><span style="color:#24292E;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">    # 使用epoll事件模型</span></span>
<span class="line"><span style="color:#6F42C1;">    use</span><span style="color:#032F62;"> epoll</span><span style="color:#24292E;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">    # 开启一次接受多个连接</span></span>
<span class="line"><span style="color:#6F42C1;">    multi_accept</span><span style="color:#032F62;"> on</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><h3 id="http模块优化" tabindex="-1">http模块优化 <a class="header-anchor" href="#http模块优化" aria-label="Permalink to &quot;http模块优化&quot;">​</a></h3><div class="language-sh"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki github-light vp-code" tabindex="0"><code><span class="line"><span style="color:#6F42C1;">http</span><span style="color:#032F62;"> {</span></span>
<span class="line"><span style="color:#6A737D;">  # 开启文件缓存，文件描述符缓存</span></span>
<span class="line"><span style="color:#6F42C1;">  open_file_cache</span><span style="color:#032F62;"> max=</span><span style="color:#005CC5;">200000</span><span style="color:#032F62;"> inactive=20s</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#6F42C1;">  open_file_cache_valid</span><span style="color:#032F62;"> 30s</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#6F42C1;">  open_file_cache_min_uses</span><span style="color:#005CC5;"> 2</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#6F42C1;">  open_file_cache_errors</span><span style="color:#032F62;"> on</span><span style="color:#24292E;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">  # 开启高效传输模式</span></span>
<span class="line"><span style="color:#6F42C1;">  sendfile</span><span style="color:#032F62;"> on</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#6F42C1;">  tcp_nopush</span><span style="color:#032F62;"> on</span><span style="color:#24292E;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">  # 开启gzip压缩</span></span>
<span class="line"><span style="color:#6F42C1;">  gzip</span><span style="color:#032F62;"> on</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#6F42C1;">  gzip_min_length</span><span style="color:#005CC5;"> 10240</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#6F42C1;">  gzip_comp_level</span><span style="color:#005CC5;"> 1</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#6F42C1;">  gzip_vary</span><span style="color:#032F62;"> on</span><span style="color:#24292E;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">  # 超时优化</span></span>
<span class="line"><span style="color:#6F42C1;">  keepalive_timeout</span><span style="color:#005CC5;"> 30</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#6F42C1;">  keepalive_requests</span><span style="color:#005CC5;"> 100000</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#6F42C1;">  client_body_timeout</span><span style="color:#005CC5;"> 10</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#6F42C1;">  send_timeout</span><span style="color:#005CC5;"> 2</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><h2 id="安全性优化" tabindex="-1">安全性优化 <a class="header-anchor" href="#安全性优化" aria-label="Permalink to &quot;安全性优化&quot;">​</a></h2><h3 id="ddos防护" tabindex="-1">DDoS防护 <a class="header-anchor" href="#ddos防护" aria-label="Permalink to &quot;DDoS防护&quot;">​</a></h3><div class="language-sh"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki github-light vp-code" tabindex="0"><code><span class="line"><span style="color:#6A737D;"># 限制单个IP的连接数</span></span>
<span class="line"><span style="color:#6F42C1;">limit_conn_zone</span><span style="color:#24292E;"> $binary_remote_addr </span><span style="color:#032F62;">zone=conn_limit_per_ip:10m</span><span style="color:#24292E;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 限制请求频率</span></span>
<span class="line"><span style="color:#6F42C1;">limit_req_zone</span><span style="color:#24292E;"> $binary_remote_addr </span><span style="color:#032F62;">zone=req_limit_per_ip:10m</span><span style="color:#032F62;"> rate=5r/s</span><span style="color:#24292E;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6F42C1;">server</span><span style="color:#032F62;"> {</span></span>
<span class="line"><span style="color:#6F42C1;">    limit_conn</span><span style="color:#032F62;"> conn_limit_per_ip</span><span style="color:#005CC5;"> 10</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#6F42C1;">    limit_req</span><span style="color:#032F62;"> zone=req_limit_per_ip</span><span style="color:#032F62;"> burst=</span><span style="color:#005CC5;">10</span><span style="color:#032F62;"> nodelay</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><h3 id="其他安全配置" tabindex="-1">其他安全配置 <a class="header-anchor" href="#其他安全配置" aria-label="Permalink to &quot;其他安全配置&quot;">​</a></h3><div class="language-sh"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki github-light vp-code" tabindex="0"><code><span class="line"><span style="color:#6A737D;"># 隐藏Nginx版本信息</span></span>
<span class="line"><span style="color:#6F42C1;">server_tokens</span><span style="color:#032F62;"> off</span><span style="color:#24292E;">;</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 缓冲区优化，缓冲区大小限制</span></span>
<span class="line"><span style="color:#6F42C1;">client_body_buffer_size</span><span style="color:#032F62;"> 128k</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#6F42C1;">client_header_buffer_size</span><span style="color:#032F62;"> 3m</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#6F42C1;">large_client_header_buffers</span><span style="color:#005CC5;"> 4</span><span style="color:#032F62;"> 256k</span><span style="color:#24292E;">;</span></span></code></pre></div><h2 id="系统层面优化" tabindex="-1">系统层面优化 <a class="header-anchor" href="#系统层面优化" aria-label="Permalink to &quot;系统层面优化&quot;">​</a></h2><h3 id="文件描述符限制" tabindex="-1">文件描述符限制 <a class="header-anchor" href="#文件描述符限制" aria-label="Permalink to &quot;文件描述符限制&quot;">​</a></h3><p>通过systemd配置:</p><div class="language-sh"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki github-light vp-code" tabindex="0"><code><span class="line"><span style="color:#6F42C1;">mkdir</span><span style="color:#005CC5;"> -p</span><span style="color:#032F62;"> /etc/systemd/system/nginx.service.d</span></span>
<span class="line"><span style="color:#6F42C1;">nano</span><span style="color:#032F62;"> /etc/systemd/system/nginx.service.d/nginx.conf</span></span>
<span class="line"><span style="color:#24292E;">[Service]</span></span>
<span class="line"><span style="color:#24292E;">LimitNOFILE</span><span style="color:#D73A49;">=</span><span style="color:#032F62;">30000</span></span></code></pre></div><h3 id="bbr优化-linux-4-9" tabindex="-1">BBR优化(Linux 4.9+) <a class="header-anchor" href="#bbr优化-linux-4-9" aria-label="Permalink to &quot;BBR优化(Linux 4.9+)&quot;">​</a></h3><div class="language-sh"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki github-light vp-code" tabindex="0"><code><span class="line"><span style="color:#6F42C1;">modprobe</span><span style="color:#032F62;"> tcp_bbr</span></span>
<span class="line"><span style="color:#005CC5;">echo</span><span style="color:#032F62;"> &#39;tcp_bbr&#39;</span><span style="color:#D73A49;"> &gt;&gt;</span><span style="color:#032F62;"> /etc/modules-load.d/bbr.conf</span></span>
<span class="line"><span style="color:#005CC5;">echo</span><span style="color:#032F62;"> &#39;net.ipv4.tcp_congestion_control=bbr&#39;</span><span style="color:#D73A49;"> &gt;&gt;</span><span style="color:#032F62;"> /etc/sysctl.d/99-bbr.conf</span></span>
<span class="line"><span style="color:#005CC5;">echo</span><span style="color:#032F62;"> &#39;net.core.default_qdisc=fq&#39;</span><span style="color:#D73A49;"> &gt;&gt;</span><span style="color:#032F62;"> /etc/sysctl.d/99-bbr.conf</span></span>
<span class="line"><span style="color:#6F42C1;">sysctl</span><span style="color:#005CC5;"> --system</span></span></code></pre></div><p><strong>经过以上优化配置,Nginx服务器可以实现:</strong></p><ul><li>单机非集群环境下处理 50K-80K QPS</li><li>集群环境下可达到 400K-500K QPS</li><li>CPU负载维持在30%左右</li></ul>`,21)]))}const _=n(e,[["render",o]]);export{h as __pageData,_ as default};
