import{_ as n,c as a,o as l,ag as p}from"./chunks/framework.DPDPlp3K.js";const h=JSON.parse('{"title":"Nginx 安装和配置","description":"","frontmatter":{},"headers":[],"relativePath":"nginx/Nginx安装和配置.md","filePath":"nginx/Nginx安装和配置.md"}'),o={name:"nginx/Nginx安装和配置.md"};function e(c,s,t,r,i,y){return l(),a("div",null,s[0]||(s[0]=[p(`<h1 id="nginx-安装和配置" tabindex="-1">Nginx 安装和配置 <a class="header-anchor" href="#nginx-安装和配置" aria-label="Permalink to &quot;Nginx 安装和配置&quot;">​</a></h1><h2 id="nginx安装" tabindex="-1">Nginx安装 <a class="header-anchor" href="#nginx安装" aria-label="Permalink to &quot;Nginx安装&quot;">​</a></h2><h3 id="docker方式安装" tabindex="-1">docker方式安装 <a class="header-anchor" href="#docker方式安装" aria-label="Permalink to &quot;docker方式安装&quot;">​</a></h3><div class="language-sh"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki github-light vp-code" tabindex="0"><code><span class="line"><span style="color:#6F42C1;">docker</span><span style="color:#032F62;"> run</span><span style="color:#005CC5;"> -idt</span><span style="color:#005CC5;"> \\</span></span>
<span class="line"><span style="color:#005CC5;"> --restart</span><span style="color:#032F62;"> no</span><span style="color:#005CC5;"> \\</span></span>
<span class="line"><span style="color:#005CC5;"> --name</span><span style="color:#032F62;"> nginx</span><span style="color:#005CC5;"> \\</span></span>
<span class="line"><span style="color:#005CC5;"> -p</span><span style="color:#032F62;"> 80:80</span><span style="color:#005CC5;"> \\</span></span>
<span class="line"><span style="color:#005CC5;"> -v</span><span style="color:#032F62;"> /Users/username/docker/nginx/conf/nginx.conf:/etc/nginx/nginx.conf</span><span style="color:#005CC5;"> \\</span></span>
<span class="line"><span style="color:#005CC5;">  -v</span><span style="color:#032F62;"> /Users/username/docker/nginx/log:/var/log/nginx</span><span style="color:#005CC5;"> \\</span></span>
<span class="line"><span style="color:#005CC5;">  -v</span><span style="color:#032F62;"> /Users/username/docker/nginx/cache:/var/cache/nginx</span><span style="color:#005CC5;"> \\</span></span>
<span class="line"><span style="color:#005CC5;">  -v</span><span style="color:#032F62;"> /Users/username/docker/nginx/www:/usr/share/nginx/www</span><span style="color:#005CC5;"> \\</span></span>
<span class="line"><span style="color:#005CC5;">  -v</span><span style="color:#032F62;"> /Users/username/docker/nginx/html:/usr/share/nginx/html</span><span style="color:#005CC5;"> \\</span></span>
<span class="line"><span style="color:#005CC5;">  --privileged=true</span><span style="color:#032F62;"> nginx</span></span>
<span class="line"><span style="color:#6F42C1;"> nginx</span></span></code></pre></div><div class="language-sh"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki github-light vp-code" tabindex="0"><code><span class="line"><span style="color:#6A737D;"># 访问容器</span></span>
<span class="line"><span style="color:#6F42C1;">docker</span><span style="color:#032F62;"> exec</span><span style="color:#005CC5;"> -it</span><span style="color:#032F62;"> nginx</span><span style="color:#032F62;"> bash</span></span></code></pre></div><h3 id="docker-compose-yml" tabindex="-1">docker-compose.yml <a class="header-anchor" href="#docker-compose-yml" aria-label="Permalink to &quot;docker-compose.yml&quot;">​</a></h3><div class="language-yaml"><button title="Copy Code" class="copy"></button><span class="lang">yaml</span><pre class="shiki github-light vp-code" tabindex="0"><code><span class="line"><span style="color:#22863A;">version</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&#39;3.7&#39;</span></span>
<span class="line"><span style="color:#22863A;">services</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#22863A;">  nginx</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#22863A;">    restart</span><span style="color:#24292E;">: </span><span style="color:#032F62;">always</span></span>
<span class="line"><span style="color:#22863A;">    image</span><span style="color:#24292E;">: </span><span style="color:#032F62;">nginx:latest</span></span>
<span class="line"><span style="color:#22863A;">    container_name</span><span style="color:#24292E;">: </span><span style="color:#032F62;">nginx</span></span>
<span class="line"><span style="color:#22863A;">    ports</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">      - </span><span style="color:#032F62;">80:80</span></span>
<span class="line"><span style="color:#22863A;">    volumes</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">      - </span><span style="color:#032F62;">/Users/dong/docker/nginx/conf/nginx.conf:/etc/nginx/nginx.conf</span></span>
<span class="line"><span style="color:#24292E;">      - </span><span style="color:#032F62;">/Users/dong/docker/nginx/log:/var/log/nginx</span></span>
<span class="line"><span style="color:#24292E;">      - </span><span style="color:#032F62;">/Users/dong/docker/nginx/cache:/var/cache/nginx</span></span>
<span class="line"><span style="color:#24292E;">      - </span><span style="color:#032F62;">/Users/dong/docker/nginx/www:/usr/share/nginx/www</span></span>
<span class="line"><span style="color:#24292E;">      - </span><span style="color:#032F62;">/Users/dong/docker/nginx/html:/usr/share/nginx/html</span></span></code></pre></div><h2 id="nginx配置" tabindex="-1">Nginx配置 <a class="header-anchor" href="#nginx配置" aria-label="Permalink to &quot;Nginx配置&quot;">​</a></h2><p>在Linux系统中，Nginx默认配置文件路径为<code>/etc/nginx/nginx.conf</code>。</p><p>Nginx配置文件主要由以下几部分组成：</p><ul><li>全局块</li><li>events块</li><li>http块</li></ul><h3 id="全局块" tabindex="-1">全局块 <a class="header-anchor" href="#全局块" aria-label="Permalink to &quot;全局块&quot;">​</a></h3><p>全局块主要设置一些影响Nginx服务器整体运行的配置。配置位置通常在文件顶部。全局配置对整个Nginx服务器都有效。部分配置可以在http块、server块中覆盖。</p><h4 id="_1-基础配置" tabindex="-1">1. 基础配置 <a class="header-anchor" href="#_1-基础配置" aria-label="Permalink to &quot;1. 基础配置&quot;">​</a></h4><div class="language-sh"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki github-light vp-code" tabindex="0"><code><span class="line"><span style="color:#6A737D;"># 运行用户</span></span>
<span class="line"><span style="color:#6A737D;"># user root;</span></span>
<span class="line"><span style="color:#6F42C1;">user</span><span style="color:#032F62;"> nginx</span><span style="color:#24292E;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># worker进程数，一般设置为CPU核心数</span></span>
<span class="line"><span style="color:#6F42C1;">worker_processes</span><span style="color:#032F62;"> auto</span><span style="color:#24292E;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 错误日志路径和级别</span></span>
<span class="line"><span style="color:#6F42C1;">error_log</span><span style="color:#032F62;"> /var/log/nginx/error.log</span><span style="color:#032F62;"> warn</span><span style="color:#24292E;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 进程PID存放路径</span></span>
<span class="line"><span style="color:#6F42C1;">pid</span><span style="color:#032F62;"> /var/run/nginx.pid</span><span style="color:#24292E;">;</span></span></code></pre></div><h4 id="_2-性能优化配置" tabindex="-1">2. 性能优化配置 <a class="header-anchor" href="#_2-性能优化配置" aria-label="Permalink to &quot;2. 性能优化配置&quot;">​</a></h4><div class="language-sh"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki github-light vp-code" tabindex="0"><code><span class="line"><span style="color:#6A737D;"># 每个worker进程的最大连接数</span></span>
<span class="line"><span style="color:#6F42C1;">worker_connections</span><span style="color:#005CC5;"> 1024</span><span style="color:#24292E;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># worker进程最大打开文件数</span></span>
<span class="line"><span style="color:#6F42C1;">worker_rlimit_nofile</span><span style="color:#005CC5;"> 20480</span><span style="color:#24292E;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># CPU亲和性配置</span></span>
<span class="line"><span style="color:#6F42C1;">worker_cpu_affinity</span><span style="color:#032F62;"> auto</span><span style="color:#24292E;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># worker进程优先级设置</span></span>
<span class="line"><span style="color:#6F42C1;">worker_priority</span><span style="color:#005CC5;"> 0</span><span style="color:#24292E;">;</span></span></code></pre></div><h4 id="_3-调试配置" tabindex="-1">3. 调试配置 <a class="header-anchor" href="#_3-调试配置" aria-label="Permalink to &quot;3. 调试配置&quot;">​</a></h4><div class="language-sh"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki github-light vp-code" tabindex="0"><code><span class="line"><span style="color:#6A737D;"># 是否开启debug模式</span></span>
<span class="line"><span style="color:#6F42C1;">daemon</span><span style="color:#032F62;"> on</span><span style="color:#24292E;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># master进程运行模式</span></span>
<span class="line"><span style="color:#6F42C1;">master_process</span><span style="color:#032F62;"> on</span><span style="color:#24292E;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># core文件大小限制</span></span>
<span class="line"><span style="color:#6F42C1;">worker_rlimit_core</span><span style="color:#005CC5;"> 0</span><span style="color:#24292E;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 定时器精度</span></span>
<span class="line"><span style="color:#6F42C1;">timer_resolution</span><span style="color:#032F62;"> 100ms</span><span style="color:#24292E;">;</span></span></code></pre></div><h4 id="_4-ssl配置" tabindex="-1">4. SSL配置 <a class="header-anchor" href="#_4-ssl配置" aria-label="Permalink to &quot;4. SSL配置&quot;">​</a></h4><div class="language-sh"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki github-light vp-code" tabindex="0"><code><span class="line"><span style="color:#6A737D;"># 启用SSL</span></span>
<span class="line"><span style="color:#6F42C1;">ssl_enable</span><span style="color:#032F62;"> on</span><span style="color:#24292E;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># SSL硬件加速</span></span>
<span class="line"><span style="color:#6F42C1;">ssl_engine</span><span style="color:#032F62;"> device</span><span style="color:#24292E;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># PCRE JIT开关</span></span>
<span class="line"><span style="color:#6F42C1;">pcre_jit</span><span style="color:#032F62;"> on</span><span style="color:#24292E;">;</span></span></code></pre></div><h4 id="_5-文件加载配置" tabindex="-1">5. 文件加载配置 <a class="header-anchor" href="#_5-文件加载配置" aria-label="Permalink to &quot;5. 文件加载配置&quot;">​</a></h4><div class="language-sh"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki github-light vp-code" tabindex="0"><code><span class="line"><span style="color:#6A737D;"># 加载动态模块</span></span>
<span class="line"><span style="color:#6F42C1;">include</span><span style="color:#032F62;"> /usr/share/nginx/modules/</span><span style="color:#005CC5;">*</span><span style="color:#032F62;">.conf</span><span style="color:#24292E;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 加载MIME类型</span></span>
<span class="line"><span style="color:#6F42C1;">include</span><span style="color:#032F62;"> /etc/nginx/mime.types</span><span style="color:#24292E;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 默认文件类型</span></span>
<span class="line"><span style="color:#6F42C1;">default_type</span><span style="color:#032F62;"> application/octet-stream</span><span style="color:#24292E;">;</span></span></code></pre></div><h4 id="_6-资源限制配置" tabindex="-1">6. 资源限制配置 <a class="header-anchor" href="#_6-资源限制配置" aria-label="Permalink to &quot;6. 资源限制配置&quot;">​</a></h4><div class="language-sh"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki github-light vp-code" tabindex="0"><code><span class="line"><span style="color:#6A737D;"># 每个进程允许打开的最大文件描述符数</span></span>
<span class="line"><span style="color:#6F42C1;">worker_rlimit_nofile</span><span style="color:#005CC5;"> 65535</span><span style="color:#24292E;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 请求体大小限制</span></span>
<span class="line"><span style="color:#6F42C1;">client_max_body_size</span><span style="color:#032F62;"> 1m</span><span style="color:#24292E;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 客户端请求缓冲区大小</span></span>
<span class="line"><span style="color:#6F42C1;">client_body_buffer_size</span><span style="color:#032F62;"> 1m</span><span style="color:#24292E;">;</span></span></code></pre></div><h4 id="_7-安全配置" tabindex="-1">7. 安全配置 <a class="header-anchor" href="#_7-安全配置" aria-label="Permalink to &quot;7. 安全配置&quot;">​</a></h4><div class="language-sh"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki github-light vp-code" tabindex="0"><code><span class="line"><span style="color:#6A737D;"># 禁用版本显示</span></span>
<span class="line"><span style="color:#6F42C1;">server_tokens</span><span style="color:#032F62;"> off</span><span style="color:#24292E;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># SSL协议版本</span></span>
<span class="line"><span style="color:#6F42C1;">ssl_protocols</span><span style="color:#032F62;"> TLSv1.2</span><span style="color:#032F62;"> TLSv1.3</span><span style="color:#24292E;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># SSL密码套件</span></span>
<span class="line"><span style="color:#6F42C1;">ssl_ciphers</span><span style="color:#032F62;"> HIGH:!aNULL:!MD5</span><span style="color:#24292E;">;</span></span></code></pre></div><h4 id="_8-日志配置" tabindex="-1">8. 日志配置 <a class="header-anchor" href="#_8-日志配置" aria-label="Permalink to &quot;8. 日志配置&quot;">​</a></h4><div class="language-sh"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki github-light vp-code" tabindex="0"><code><span class="line"><span style="color:#6A737D;"># 访问日志格式定义</span></span>
<span class="line"><span style="color:#6F42C1;">log_format</span><span style="color:#032F62;"> main</span><span style="color:#032F62;"> &#39;$remote_addr - $remote_user [$time_local] &quot;$request&quot; &#39;</span></span>
<span class="line"><span style="color:#6F42C1;">                &#39;$status $body_bytes_sent &quot;$http_referer&quot; &#39;</span></span>
<span class="line"><span style="color:#6F42C1;">                &#39;&quot;$http_user_agent&quot; &quot;$http_x_forwarded_for&quot;&#39;</span><span style="color:#24292E;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 访问日志路径</span></span>
<span class="line"><span style="color:#6F42C1;">access_log</span><span style="color:#032F62;"> /var/log/nginx/access.log</span><span style="color:#032F62;"> main</span><span style="color:#24292E;">;</span></span></code></pre></div><h3 id="http块" tabindex="-1">http块 <a class="header-anchor" href="#http块" aria-label="Permalink to &quot;http块&quot;">​</a></h3><p>http块是Nginx配置文件的核心部分，主要设置HTTP服务器的相关配置。http块配置会影响所有虚拟主机，部分配置可以在server块或location块中覆盖。修改配置后需要重新加载或重启Nginx。</p><h4 id="_1-基础配置-1" tabindex="-1">1. 基础配置 <a class="header-anchor" href="#_1-基础配置-1" aria-label="Permalink to &quot;1. 基础配置&quot;">​</a></h4><div class="language-sh"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki github-light vp-code" tabindex="0"><code><span class="line"><span style="color:#6F42C1;">http</span><span style="color:#032F62;"> {</span></span>
<span class="line"><span style="color:#6A737D;">  # MIME类型配置</span></span>
<span class="line"><span style="color:#6F42C1;">  include</span><span style="color:#032F62;"> /etc/nginx/mime.types</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#6F42C1;">  default_type</span><span style="color:#032F62;"> application/octet-stream</span><span style="color:#24292E;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">  # 日志格式定义</span></span>
<span class="line"><span style="color:#6F42C1;">  log_format</span><span style="color:#032F62;"> main</span><span style="color:#032F62;"> &#39;$remote_addr - $remote_user [$time_local] &quot;$request&quot; &#39;</span></span>
<span class="line"><span style="color:#6F42C1;">                  &#39;$status $body_bytes_sent &quot;$http_referer&quot; &#39;</span></span>
<span class="line"><span style="color:#6F42C1;">                  &#39;&quot;$http_user_agent&quot; &quot;$http_x_forwarded_for&quot;&#39;</span><span style="color:#24292E;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">  # 访问日志配置</span></span>
<span class="line"><span style="color:#6F42C1;">  access_log</span><span style="color:#032F62;"> /var/log/nginx/access.log</span><span style="color:#032F62;"> main</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><h4 id="_2-性能优化配置-1" tabindex="-1">2. 性能优化配置 <a class="header-anchor" href="#_2-性能优化配置-1" aria-label="Permalink to &quot;2. 性能优化配置&quot;">​</a></h4><div class="language-sh"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki github-light vp-code" tabindex="0"><code><span class="line"><span style="color:#6F42C1;">http</span><span style="color:#032F62;"> {</span></span>
<span class="line"><span style="color:#6A737D;">  # 开启高效传输模式</span></span>
<span class="line"><span style="color:#6F42C1;">  sendfile</span><span style="color:#032F62;"> on</span><span style="color:#24292E;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">  # TCP优化</span></span>
<span class="line"><span style="color:#6F42C1;">  tcp_nopush</span><span style="color:#032F62;"> on</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#6F42C1;">  tcp_nodelay</span><span style="color:#032F62;"> on</span><span style="color:#24292E;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">  # 连接超时时间</span></span>
<span class="line"><span style="color:#6F42C1;">  keepalive_timeout</span><span style="color:#005CC5;"> 65</span><span style="color:#24292E;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">  # 客户端请求主体大小限制</span></span>
<span class="line"><span style="color:#6F42C1;">  client_max_body_size</span><span style="color:#032F62;"> 1m</span><span style="color:#24292E;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">  # 客户端请求缓冲区大小</span></span>
<span class="line"><span style="color:#6F42C1;">  client_body_buffer_size</span><span style="color:#032F62;"> 1m</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><h4 id="_3-gzip压缩配置" tabindex="-1">3. Gzip压缩配置 <a class="header-anchor" href="#_3-gzip压缩配置" aria-label="Permalink to &quot;3. Gzip压缩配置&quot;">​</a></h4><div class="language-sh"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki github-light vp-code" tabindex="0"><code><span class="line"><span style="color:#6F42C1;">http</span><span style="color:#032F62;"> {</span></span>
<span class="line"><span style="color:#6A737D;">  # 开启gzip压缩</span></span>
<span class="line"><span style="color:#6F42C1;">  gzip</span><span style="color:#032F62;"> on</span><span style="color:#24292E;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">  # 压缩级别(1-9)</span></span>
<span class="line"><span style="color:#6F42C1;">  gzip_comp_level</span><span style="color:#005CC5;"> 2</span><span style="color:#24292E;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">  # 最小压缩文件大小</span></span>
<span class="line"><span style="color:#6F42C1;">  gzip_min_length</span><span style="color:#032F62;"> 1k</span><span style="color:#24292E;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">  # 压缩文件类型</span></span>
<span class="line"><span style="color:#6F42C1;">  gzip_types</span><span style="color:#032F62;"> text/plain</span><span style="color:#032F62;"> application/javascript</span><span style="color:#032F62;"> text/css</span><span style="color:#032F62;"> application/xml</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><h4 id="_4-缓存配置" tabindex="-1">4. 缓存配置 <a class="header-anchor" href="#_4-缓存配置" aria-label="Permalink to &quot;4. 缓存配置&quot;">​</a></h4><div class="language-sh"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki github-light vp-code" tabindex="0"><code><span class="line"><span style="color:#6F42C1;">http</span><span style="color:#032F62;"> {</span></span>
<span class="line"><span style="color:#6A737D;">  # 缓存配置</span></span>
<span class="line"><span style="color:#6F42C1;">  proxy_cache_path</span><span style="color:#032F62;"> /path/to/cache</span><span style="color:#032F62;"> levels=1:2</span><span style="color:#032F62;"> keys_zone=my_cache:10m</span><span style="color:#032F62;"> max_size=10g</span><span style="color:#032F62;"> inactive=60m</span><span style="color:#24292E;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">  # 临时文件配置</span></span>
<span class="line"><span style="color:#6F42C1;">  proxy_temp_path</span><span style="color:#032F62;"> /path/to/temp</span><span style="color:#24292E;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">  # 缓存有效期</span></span>
<span class="line"><span style="color:#6F42C1;">  proxy_cache_valid</span><span style="color:#005CC5;"> 200</span><span style="color:#005CC5;"> 302</span><span style="color:#032F62;"> 10m</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#6F42C1;">  proxy_cache_valid</span><span style="color:#005CC5;"> 404</span><span style="color:#032F62;"> 1m</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><h4 id="_5-ssl配置" tabindex="-1">5. SSL配置 <a class="header-anchor" href="#_5-ssl配置" aria-label="Permalink to &quot;5. SSL配置&quot;">​</a></h4><div class="language-sh"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki github-light vp-code" tabindex="0"><code><span class="line"><span style="color:#6F42C1;">http</span><span style="color:#032F62;"> {</span></span>
<span class="line"><span style="color:#6A737D;">  # SSL协议版本</span></span>
<span class="line"><span style="color:#6F42C1;">  ssl_protocols</span><span style="color:#032F62;"> TLSv1.2</span><span style="color:#032F62;"> TLSv1.3</span><span style="color:#24292E;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">  # SSL密码套件</span></span>
<span class="line"><span style="color:#6F42C1;">  ssl_ciphers</span><span style="color:#032F62;"> HIGH:!aNULL:!MD5</span><span style="color:#24292E;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">  # SSL会话缓存</span></span>
<span class="line"><span style="color:#6F42C1;">  ssl_session_cache</span><span style="color:#032F62;"> shared:SSL:10m</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#6F42C1;">  ssl_session_timeout</span><span style="color:#032F62;"> 10m</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><h4 id="_6-负载均衡配置" tabindex="-1">6. 负载均衡配置 <a class="header-anchor" href="#_6-负载均衡配置" aria-label="Permalink to &quot;6. 负载均衡配置&quot;">​</a></h4><div class="language-sh"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki github-light vp-code" tabindex="0"><code><span class="line"><span style="color:#6F42C1;">http</span><span style="color:#032F62;"> {</span></span>
<span class="line"><span style="color:#6A737D;">  # 定义上游服务器组</span></span>
<span class="line"><span style="color:#6F42C1;">  upstream</span><span style="color:#032F62;"> backend</span><span style="color:#032F62;"> {</span></span>
<span class="line"><span style="color:#6F42C1;">      server</span><span style="color:#032F62;"> backend1.example.com</span><span style="color:#032F62;"> weight=</span><span style="color:#005CC5;">5</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#6F42C1;">      server</span><span style="color:#032F62;"> backend2.example.com:8080</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#6F42C1;">      server</span><span style="color:#032F62;"> unix:/tmp/backend3</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">  # 负载均衡算法配置</span></span>
<span class="line"><span style="color:#6F42C1;">  least_conn</span><span style="color:#24292E;">;  </span><span style="color:#6A737D;"># 最少连接</span></span>
<span class="line"><span style="color:#6F42C1;">  ip_hash</span><span style="color:#24292E;">;     </span><span style="color:#6A737D;"># IP哈希</span></span>
<span class="line"><span style="color:#005CC5;">  hash</span><span style="color:#24292E;"> $request_uri;  </span><span style="color:#6A737D;"># URL哈希</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><h4 id="_7-安全配置-1" tabindex="-1">7. 安全配置 <a class="header-anchor" href="#_7-安全配置-1" aria-label="Permalink to &quot;7. 安全配置&quot;">​</a></h4><div class="language-sh"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki github-light vp-code" tabindex="0"><code><span class="line"><span style="color:#6F42C1;">http</span><span style="color:#032F62;"> {</span></span>
<span class="line"><span style="color:#6A737D;">  # 隐藏版本号</span></span>
<span class="line"><span style="color:#6F42C1;">  server_tokens</span><span style="color:#032F62;"> off</span><span style="color:#24292E;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">  # 请求限制</span></span>
<span class="line"><span style="color:#6F42C1;">  limit_req_zone</span><span style="color:#24292E;"> $binary_remote_addr </span><span style="color:#032F62;">zone=one:10m</span><span style="color:#032F62;"> rate=1r/s</span><span style="color:#24292E;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">  # 连接限制</span></span>
<span class="line"><span style="color:#6F42C1;">  limit_conn_zone</span><span style="color:#24292E;"> $binary_remote_addr </span><span style="color:#032F62;">zone=addr:10m</span><span style="color:#24292E;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">  # XSS防护</span></span>
<span class="line"><span style="color:#6F42C1;">  add_header</span><span style="color:#032F62;"> X-XSS-Protection</span><span style="color:#032F62;"> &quot;1; mode=block&quot;</span><span style="color:#24292E;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">  # 点击劫持防护</span></span>
<span class="line"><span style="color:#6F42C1;">  add_header</span><span style="color:#032F62;"> X-Frame-Options</span><span style="color:#032F62;"> &quot;SAMEORIGIN&quot;</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><h4 id="_8-代理配置" tabindex="-1">8. 代理配置 <a class="header-anchor" href="#_8-代理配置" aria-label="Permalink to &quot;8. 代理配置&quot;">​</a></h4><div class="language-sh"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki github-light vp-code" tabindex="0"><code><span class="line"><span style="color:#6F42C1;">http</span><span style="color:#032F62;"> {</span></span>
<span class="line"><span style="color:#6A737D;">  # 代理缓冲区</span></span>
<span class="line"><span style="color:#6F42C1;">  proxy_buffer_size</span><span style="color:#032F62;"> 4k</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#6F42C1;">  proxy_buffers</span><span style="color:#005CC5;"> 4</span><span style="color:#032F62;"> 32k</span><span style="color:#24292E;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">  # 代理超时设置</span></span>
<span class="line"><span style="color:#6F42C1;">  proxy_connect_timeout</span><span style="color:#032F62;"> 60s</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#6F42C1;">  proxy_send_timeout</span><span style="color:#032F62;"> 60s</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#6F42C1;">  proxy_read_timeout</span><span style="color:#032F62;"> 60s</span><span style="color:#24292E;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">  # 代理头部设置</span></span>
<span class="line"><span style="color:#6F42C1;">  proxy_set_header</span><span style="color:#032F62;"> Host</span><span style="color:#24292E;"> $host;</span></span>
<span class="line"><span style="color:#6F42C1;">  proxy_set_header</span><span style="color:#032F62;"> X-Real-IP</span><span style="color:#24292E;"> $remote_addr;</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><h3 id="events块" tabindex="-1">events块 <a class="header-anchor" href="#events块" aria-label="Permalink to &quot;events块&quot;">​</a></h3><p>events块主要用于配置Nginx服务器与用户的网络连接，是Nginx配置的核心部分之一。</p><h4 id="_1-基础配置-2" tabindex="-1">1. 基础配置 <a class="header-anchor" href="#_1-基础配置-2" aria-label="Permalink to &quot;1. 基础配置&quot;">​</a></h4><div class="language-sh"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki github-light vp-code" tabindex="0"><code><span class="line"><span style="color:#6F42C1;">events</span><span style="color:#032F62;"> {</span></span>
<span class="line"><span style="color:#6A737D;">  # 每个worker进程的最大连接数， 默认值512，通常设置为1024或更高</span></span>
<span class="line"><span style="color:#6F42C1;">  worker_connections</span><span style="color:#005CC5;"> 1024</span><span style="color:#24292E;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">  # 是否打开accept锁， 用于让多个worker进程轮流接受新连接，防止惊群现象(thundering herd)</span></span>
<span class="line"><span style="color:#6F42C1;">  accept_mutex</span><span style="color:#032F62;"> on</span><span style="color:#24292E;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">  # accept锁的延迟时间， 在没有新连接时，worker进程的暂停时间</span></span>
<span class="line"><span style="color:#6F42C1;">  accept_mutex_delay</span><span style="color:#032F62;"> 500ms</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><h4 id="_2-事件模型配置" tabindex="-1">2. 事件模型配置 <a class="header-anchor" href="#_2-事件模型配置" aria-label="Permalink to &quot;2. 事件模型配置&quot;">​</a></h4><div class="language-sh"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki github-light vp-code" tabindex="0"><code><span class="line"><span style="color:#6F42C1;">events</span><span style="color:#032F62;"> {</span></span>
<span class="line"><span style="color:#6A737D;">  # 事件模型选择</span></span>
<span class="line"><span style="color:#6A737D;">  # 可选值: select, poll, kqueue, epoll, rtsig, /dev/poll, eventport</span></span>
<span class="line"><span style="color:#6F42C1;">  use</span><span style="color:#032F62;"> epoll</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#6A737D;">  # Linux系统推荐使用epoll，</span></span>
<span class="line"><span style="color:#6A737D;">  # FreeBSD推荐使用kqueue，</span></span>
<span class="line"><span style="color:#6A737D;">  # 不指定时会自动选择最适合的模型</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">  # 是否启用多个worker进程接受连接， 建议在高并发场景下开启</span></span>
<span class="line"><span style="color:#6F42C1;">  multi_accept</span><span style="color:#032F62;"> on</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><h4 id="_3-性能优化配置" tabindex="-1">3. 性能优化配置 <a class="header-anchor" href="#_3-性能优化配置" aria-label="Permalink to &quot;3. 性能优化配置&quot;">​</a></h4><div class="language-sh"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki github-light vp-code" tabindex="0"><code><span class="line"><span style="color:#6F42C1;">events</span><span style="color:#032F62;"> {</span></span>
<span class="line"><span style="color:#6A737D;">  # 使用epoll事件模型</span></span>
<span class="line"><span style="color:#6F42C1;">  use</span><span style="color:#032F62;"> epoll</span><span style="color:#24292E;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">  # 增加最大连接数</span></span>
<span class="line"><span style="color:#6F42C1;">  worker_connections</span><span style="color:#005CC5;"> 10240</span><span style="color:#24292E;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">  # 开启同时接受多个连接</span></span>
<span class="line"><span style="color:#6F42C1;">  multi_accept</span><span style="color:#032F62;"> on</span><span style="color:#24292E;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">  # 关闭accept锁(在高并发场景下可以考虑关闭)</span></span>
<span class="line"><span style="color:#6F42C1;">  accept_mutex</span><span style="color:#032F62;"> off</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><h3 id="配置示例" tabindex="-1">配置示例 <a class="header-anchor" href="#配置示例" aria-label="Permalink to &quot;配置示例&quot;">​</a></h3><div class="language-sh"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki github-light vp-code" tabindex="0"><code><span class="line"><span style="color:#6A737D;"># 全局块</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># worker_processes数值越大，并发能力越强</span></span>
<span class="line"><span style="color:#6F42C1;">worker_processes</span><span style="color:#005CC5;">   1</span><span style="color:#24292E;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># Nginx错误日志存放位置</span></span>
<span class="line"><span style="color:#6F42C1;">error_log</span><span style="color:#032F62;"> /var/log/nginx/error.log</span><span style="color:#032F62;"> warn</span><span style="color:#24292E;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 存放Nginx进程号</span></span>
<span class="line"><span style="color:#6F42C1;">pid</span><span style="color:#032F62;">       /var/run/nginx.pid</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># events配置模块</span></span>
<span class="line"><span style="color:#6F42C1;">events</span><span style="color:#032F62;"> {</span></span>
<span class="line"><span style="color:#6A737D;">  # 指定每个工作进程最大连接数，数值越大，并发能力越强，默认1024</span></span>
<span class="line"><span style="color:#6F42C1;">  worker_connections</span><span style="color:#005CC5;"> 1024</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># http块</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># include代表引入一个外部的文件,mime.types中放着大量的媒体类型</span></span>
<span class="line"><span style="color:#6F42C1;">http</span><span style="color:#032F62;"> {</span></span>
<span class="line"><span style="color:#6F42C1;">  include</span><span style="color:#032F62;"> /etc/nginx/mime.types</span><span style="color:#24292E;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6F42C1;">  default_type</span><span style="color:#032F62;"> application/octet-stream</span><span style="color:#24292E;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">  # 定义一个main格式的日志 main的内容：</span></span>
<span class="line"><span style="color:#6F42C1;">  log_format</span><span style="color:#032F62;"> main</span><span style="color:#032F62;"> &#39;$remore_addr - $remote_user [$time_local] &quot;$request&quot;&#39;</span></span>
<span class="line"><span style="color:#6F42C1;">          &#39;$status $body_bytes_sent &quot;$http_referer&quot;&#39;</span></span>
<span class="line"><span style="color:#6F42C1;">          &#39;&quot;$http_user_agent&quot; &quot;$http_x_forwarded-for&quot;&#39;</span><span style="color:#24292E;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">  # log_format main2 &#39;&quot;$arg_name&quot; &quot;$http_host&quot; &quot;$sent_http_date&quot;&#39;;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">  # 指定访问日志和写入格式为main</span></span>
<span class="line"><span style="color:#6F42C1;">  access_log</span><span style="color:#032F62;"> /var/log/nginx/access.log</span><span style="color:#032F62;"> main</span><span style="color:#24292E;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">  # 启用或者禁用sendfile(),零拷贝模式</span></span>
<span class="line"><span style="color:#6F42C1;">  sendfile</span><span style="color:#032F62;"> on</span><span style="color:#24292E;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">  # 启用或禁用使用套接字选项(仅在sendfile使用时使用)</span></span>
<span class="line"><span style="color:#6F42C1;">  tcp_nopush</span><span style="color:#032F62;"> on</span><span style="color:#24292E;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">  # 0值禁用保持活动的客户端连接，65s超时</span></span>
<span class="line"><span style="color:#6F42C1;">  keepalive_timeout</span><span style="color:#005CC5;"> 65</span><span style="color:#24292E;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">  # 启用/禁用gzip</span></span>
<span class="line"><span style="color:#6F42C1;">  gzip</span><span style="color:#032F62;"> on</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#6F42C1;">  gzip</span><span style="color:#032F62;"> off</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#6F42C1;">  gzip_min_length</span><span style="color:#005CC5;"> 1</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#6F42C1;">  gzip_comp_level</span><span style="color:#005CC5;"> 2</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#6F42C1;">  gzip_types</span><span style="color:#032F62;"> text/plain</span><span style="color:#032F62;"> application/x-javascript</span><span style="color:#032F62;"> application/xml</span><span style="color:#032F62;"> text/javascript</span><span style="color:#032F62;"> text/css</span><span style="color:#032F62;"> image/jpeg</span><span style="color:#032F62;"> image/jpg</span><span style="color:#032F62;"> image/gif</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">  # include /etc/nginx/conf.d/*.conf</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">  # server块，每个server块对应一个网站</span></span>
<span class="line"><span style="color:#6F42C1;">  server</span><span style="color:#032F62;"> {</span></span>
<span class="line"><span style="color:#6A737D;">     # Nginx监听的端口号</span></span>
<span class="line"><span style="color:#6F42C1;">     listen</span><span style="color:#005CC5;"> 80</span><span style="color:#24292E;">;</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">     # Nginx接收的请求</span></span>
<span class="line"><span style="color:#6F42C1;">     server_name</span><span style="color:#032F62;"> localhost</span><span style="color:#24292E;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6F42C1;">    location</span><span style="color:#032F62;"> /</span><span style="color:#032F62;"> {</span></span>
<span class="line"><span style="color:#6A737D;">      # 将收到的请求根据指定路径去查找静态资源</span></span>
<span class="line"><span style="color:#6F42C1;">      root</span><span style="color:#032F62;">   /usr/share/nginx/html</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#6A737D;">      # 默认去上述的路径中找到index.html或者index.htm</span></span>
<span class="line"><span style="color:#6F42C1;">      index</span><span style="color:#032F62;">  index.html</span><span style="color:#032F62;"> index.htm</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div>`,57)]))}const F=n(o,[["render",e]]);export{h as __pageData,F as default};
