import{_ as n,c as a,o as l,ag as p}from"./chunks/framework.DPDPlp3K.js";const h=JSON.parse('{"title":"使用GithubActions部署到服务器","description":"","frontmatter":{},"headers":[],"relativePath":"cicd/使用GithubActions部署到服务器.md","filePath":"cicd/使用GithubActions部署到服务器.md"}'),o={name:"cicd/使用GithubActions部署到服务器.md"};function e(c,s,t,i,r,y){return l(),a("div",null,s[0]||(s[0]=[p(`<h1 id="使用githubactions部署到服务器" tabindex="-1">使用GithubActions部署到服务器 <a class="header-anchor" href="#使用githubactions部署到服务器" aria-label="Permalink to &quot;使用GithubActions部署到服务器&quot;">​</a></h1><h2 id="目录" tabindex="-1">目录 <a class="header-anchor" href="#目录" aria-label="Permalink to &quot;目录&quot;">​</a></h2><ul><li>1 ssh秘钥配置 <ul><li>1.1 创建ssh秘钥</li><li>1.2 代码托管仓库配置私钥</li><li>1.3 远程服务器配置公钥</li><li>1.4 修改ssh秘钥配置文件</li></ul></li><li>2 配置GithubActions</li><li>3 配置Nginx</li></ul><h2 id="_1-ssh秘钥配置" tabindex="-1">1 ssh秘钥配置 <a class="header-anchor" href="#_1-ssh秘钥配置" aria-label="Permalink to &quot;1 ssh秘钥配置&quot;">​</a></h2><h3 id="_1-1-创建ssh秘钥" tabindex="-1">1.1 创建ssh秘钥 <a class="header-anchor" href="#_1-1-创建ssh秘钥" aria-label="Permalink to &quot;1.1 创建ssh秘钥&quot;">​</a></h3><div class="language-sh"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki github-light vp-code" tabindex="0"><code><span class="line"><span style="color:#6A737D;"># 进入本地ssh目录</span></span>
<span class="line"><span style="color:#005CC5;">cd</span><span style="color:#032F62;"> ~/.ssh</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 格式：ssh-keygen -t rsa -C [注释] -f [路径文件]</span></span>
<span class="line"><span style="color:#6F42C1;">ssh-keygen</span><span style="color:#005CC5;"> -t</span><span style="color:#032F62;"> rsa</span><span style="color:#005CC5;"> -C</span><span style="color:#032F62;"> deployment</span><span style="color:#005CC5;"> -f</span><span style="color:#032F62;"> deploy</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6F42C1;">ssh-keygen</span><span style="color:#005CC5;"> -t</span><span style="color:#032F62;"> rsa</span><span style="color:#005CC5;"> -C</span><span style="color:#032F62;"> deployment</span><span style="color:#005CC5;"> -f</span><span style="color:#032F62;"> ~/.ssh/deploy</span></span></code></pre></div><h3 id="_1-2-代码托管仓库配置私钥" tabindex="-1">1.2 代码托管仓库配置私钥 <a class="header-anchor" href="#_1-2-代码托管仓库配置私钥" aria-label="Permalink to &quot;1.2 代码托管仓库配置私钥&quot;">​</a></h3><ol><li>进入Github目标仓库，选择Tab【settings】栏目，选择侧边【secrets】栏目</li><li>将创建的私钥填入</li></ol><h3 id="_1-3-远端服务器配置公钥" tabindex="-1">1.3 远端服务器配置公钥 <a class="header-anchor" href="#_1-3-远端服务器配置公钥" aria-label="Permalink to &quot;1.3 远端服务器配置公钥&quot;">​</a></h3><p>把公钥写进服务器.ssh目录下的authorized_key文件</p><p><strong>方式1：</strong></p><div class="language-sh"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki github-light vp-code" tabindex="0"><code><span class="line"><span style="color:#6A737D;"># 使用ssh-copy-id命令,默认使用 22 端口</span></span>
<span class="line"><span style="color:#6F42C1;">ssh-copy-id</span><span style="color:#005CC5;"> -i</span><span style="color:#032F62;"> ~/.ssh/id_rsa.pub</span><span style="color:#032F62;"> 服务器用户名@服务器地址</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 指定端口号</span></span>
<span class="line"><span style="color:#6F42C1;">ssh-copy-id</span><span style="color:#005CC5;"> -i</span><span style="color:#032F62;"> ~/.ssh/id_rsa.pub</span><span style="color:#032F62;"> 服务器用户名@服务器地址</span><span style="color:#005CC5;"> -p</span><span style="color:#032F62;"> 服务器端口号</span></span></code></pre></div><p><strong>方式2：</strong></p><div class="language-sh"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki github-light vp-code" tabindex="0"><code><span class="line"><span style="color:#6A737D;"># 使用scp传输命令</span></span>
<span class="line"><span style="color:#6F42C1;">scp</span><span style="color:#032F62;"> deployment.pub</span><span style="color:#032F62;"> root@xxx.xxx.xxx.xxx:.</span></span></code></pre></div><p>登录远端服务器，将公钥内容写入授权文件，进入.ssh文件夹，查看是否有authorized_keys文件,若没有则创建一个;</p><div class="language-sh"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki github-light vp-code" tabindex="0"><code><span class="line"><span style="color:#6A737D;"># 连接远程服务器并输入密码</span></span>
<span class="line"><span style="color:#6F42C1;">ssh</span><span style="color:#032F62;"> root@xxx.xxx.xxx.xxx</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 访问.ssh文件夹</span></span>
<span class="line"><span style="color:#005CC5;">cd</span><span style="color:#032F62;"> .ssh</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 查看文件列表</span></span>
<span class="line"><span style="color:#6F42C1;">ls</span><span style="color:#005CC5;"> -la</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 将公钥内容写入authorized_keys文件</span></span>
<span class="line"><span style="color:#6F42C1;">cat</span><span style="color:#032F62;"> deployment.pub</span><span style="color:#D73A49;"> &gt;&gt;</span><span style="color:#032F62;"> ~/.ssh/authorized_keys</span></span></code></pre></div><p>参考文档：<a href="https://help.aliyun.com/document_detail/51935.html?spm=a2c4g.11186623.2.14.227f21e8MFcqoh" target="_blank" rel="noreferrer">ECS实例数据传输的实现方式</a></p><h3 id="_1-4-修改秘钥配置文件" tabindex="-1">1.4 修改秘钥配置文件 <a class="header-anchor" href="#_1-4-修改秘钥配置文件" aria-label="Permalink to &quot;1.4 修改秘钥配置文件&quot;">​</a></h3><p>修改/etc/.ssh目录下的sshd_config配置文件</p><div class="language-sh"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki github-light vp-code" tabindex="0"><code><span class="line"><span style="color:#6A737D;"># 开启远程登录权限</span></span>
<span class="line"><span style="color:#6F42C1;">PermitRootLogin</span><span style="color:#032F62;"> yes</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6F42C1;">AuthorizedKeysFile</span><span style="color:#032F62;"> .ssh/authorized_keys</span></span></code></pre></div><div class="warning custom-block"><p class="custom-block-title">WARNING</p><p><strong>注意：此步骤缺失，会令GithubActions访问远程服务器目录权限不足导致代码部署失败</strong></p><p>如Github Actions异常：</p><p>stderr: Warning: Permanently added &#39;***&#39; (ECDSA) to the list of known hosts.</p><p>Load key &quot;/home/runner/.ssh/deploy_key&quot;: invalid format</p></div><h2 id="_2-配置githubactions" tabindex="-1">2 配置GithubActions <a class="header-anchor" href="#_2-配置githubactions" aria-label="Permalink to &quot;2 配置GithubActions&quot;">​</a></h2><p>主要步骤：</p><ol><li>进入Github目标项目代码仓库</li><li>选择【actions】-【Continuous integration workflows】-【Node.js】</li><li>在右侧面板【marketspace】搜索ssh-deploy并复制配置信息补充yml配置文件</li></ol><p><strong>yml配置文件</strong></p><div class="language-sh"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki github-light vp-code" tabindex="0"><code><span class="line"><span style="color:#6A737D;"># This workflow will do a clean install of node dependencies, build the source code and run tests across different versions of node</span></span>
<span class="line"><span style="color:#6A737D;"># For more information see: https://help.github.com/actions/language-and-framework-guides/using-nodejs-with-github-actions</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6F42C1;">name:</span><span style="color:#032F62;"> VuePress</span><span style="color:#032F62;"> CI/CD</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6F42C1;">on:</span></span>
<span class="line"><span style="color:#6F42C1;">  push:</span></span>
<span class="line"><span style="color:#6F42C1;">    branches:</span><span style="color:#24292E;"> [ </span><span style="color:#032F62;">docs</span><span style="color:#032F62;"> ]</span></span>
<span class="line"><span style="color:#6A737D;">  # pull_request:</span></span>
<span class="line"><span style="color:#6A737D;">  #   branches: [ docs ]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#005CC5;">jobs</span><span style="color:#032F62;">:</span></span>
<span class="line"><span style="color:#6F42C1;">  build:</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6F42C1;">    runs-on:</span><span style="color:#032F62;"> ubuntu-latest</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6F42C1;">    strategy:</span></span>
<span class="line"><span style="color:#6F42C1;">      matrix:</span></span>
<span class="line"><span style="color:#6F42C1;">        node-version:</span><span style="color:#24292E;"> [14.x]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6F42C1;">    steps:</span></span>
<span class="line"><span style="color:#6F42C1;">    -</span><span style="color:#032F62;"> uses:</span><span style="color:#032F62;"> actions/checkout@v2</span></span>
<span class="line"><span style="color:#6F42C1;">    -</span><span style="color:#032F62;"> name:</span><span style="color:#032F62;"> Use</span><span style="color:#032F62;"> Node.js</span><span style="color:#24292E;"> \${{ matrix.node-version }</span><span style="color:#032F62;">}</span></span>
<span class="line"><span style="color:#6F42C1;">      uses:</span><span style="color:#032F62;"> actions/setup-node@v1</span></span>
<span class="line"><span style="color:#6F42C1;">      with:</span></span>
<span class="line"><span style="color:#6F42C1;">        node-version:</span><span style="color:#24292E;"> \${{ matrix.node-version }</span><span style="color:#032F62;">}</span></span>
<span class="line"><span style="color:#6F42C1;">    -</span><span style="color:#032F62;"> run:</span><span style="color:#032F62;"> npm</span><span style="color:#032F62;"> ci</span></span>
<span class="line"><span style="color:#6F42C1;">    -</span><span style="color:#032F62;"> run:</span><span style="color:#032F62;"> npm</span><span style="color:#032F62;"> run</span><span style="color:#032F62;"> buildcd</span><span style="color:#005CC5;"> --if-present</span></span>
<span class="line"><span style="color:#24292E;">    </span></span>
<span class="line"><span style="color:#6A737D;">    # 部署阿里云</span></span>
<span class="line"><span style="color:#6F42C1;">    -</span><span style="color:#032F62;"> name:</span><span style="color:#032F62;"> SSH</span><span style="color:#032F62;"> Deploy</span><span style="color:#032F62;"> Server</span></span>
<span class="line"><span style="color:#6F42C1;">      uses:</span><span style="color:#032F62;"> easingthemes/ssh-deploy@v2.1.5</span></span>
<span class="line"><span style="color:#6F42C1;">      with:</span></span>
<span class="line"><span style="color:#6F42C1;">        SSH_PRIVATE_KEY:</span><span style="color:#24292E;"> \${{ secrets.SSH_DEPLOY_KEY }</span><span style="color:#032F62;">}</span></span>
<span class="line"><span style="color:#6F42C1;">        REMOTE_HOST:</span><span style="color:#24292E;"> \${{ secrets.SSH_HOST }</span><span style="color:#032F62;">}</span></span>
<span class="line"><span style="color:#6F42C1;">        REMOTE_USER:</span><span style="color:#24292E;"> \${{ secrets.SSH_USER }</span><span style="color:#032F62;">}</span></span>
<span class="line"><span style="color:#6F42C1;">        REMOTE_PORT:</span><span style="color:#24292E;"> \${{ secrets.SSH_PORT }</span><span style="color:#032F62;">}</span></span>
<span class="line"><span style="color:#6F42C1;">        SOURCE:</span><span style="color:#032F62;"> docs/.vuepress/dist</span></span>
<span class="line"><span style="color:#6F42C1;">        TARGET:</span><span style="color:#24292E;"> \${{ secrets.TARGET }</span><span style="color:#032F62;">}</span></span>
<span class="line"><span style="color:#6A737D;">        # Arguments to pass to rsync</span></span>
<span class="line"><span style="color:#6F42C1;">        ARGS:</span><span style="color:#032F62;"> &quot;-avzr --delete&quot;</span></span></code></pre></div><h2 id="_3-配置nginx" tabindex="-1">3 配置Nginx <a class="header-anchor" href="#_3-配置nginx" aria-label="Permalink to &quot;3 配置Nginx&quot;">​</a></h2><h3 id="_3-1-主配置文件nginx-conf" tabindex="-1">3.1 主配置文件nginx.conf <a class="header-anchor" href="#_3-1-主配置文件nginx-conf" aria-label="Permalink to &quot;3.1 主配置文件nginx.conf&quot;">​</a></h3><div class="language-sh"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki github-light vp-code" tabindex="0"><code><span class="line"><span style="color:#6A737D;"># 访问nignx配置目录</span></span>
<span class="line"><span style="color:#005CC5;">cd</span><span style="color:#032F62;"> /etc/nginx</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 查看nginx配置</span></span>
<span class="line"><span style="color:#6F42C1;">cat</span><span style="color:#032F62;"> nginx.conf</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 编辑配置文件</span></span>
<span class="line"><span style="color:#6F42C1;">vi</span><span style="color:#032F62;"> /etc/nginx/nginx.conf</span></span></code></pre></div><p>nginx.conf配置文件</p><div class="language-nginx"><button title="Copy Code" class="copy"></button><span class="lang">nginx</span><pre class="shiki github-light vp-code" tabindex="0"><code><span class="line"><span style="color:#D73A49;">user </span><span style="color:#24292E;"> root;</span></span>
<span class="line"><span style="color:#D73A49;">worker_processes </span><span style="color:#005CC5;"> 1</span><span style="color:#24292E;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">error_log </span><span style="color:#24292E;"> /var/log/nginx/error.log </span><span style="color:#005CC5;">warn</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#D73A49;">pid </span><span style="color:#24292E;">       /var/run/nginx.pid;</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">events</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#D73A49;">    worker_connections </span><span style="color:#005CC5;"> 1024</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">http</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#D73A49;">    include </span><span style="color:#24292E;">      /etc/nginx/mime.types;</span></span>
<span class="line"><span style="color:#D73A49;">    default_type </span><span style="color:#24292E;"> application/octet-stream;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">    log_format </span><span style="color:#005CC5;"> main</span><span style="color:#032F62;">  &#39;$</span><span style="color:#24292E;">remote_addr</span><span style="color:#032F62;"> - $</span><span style="color:#24292E;">remote_user</span><span style="color:#032F62;"> [$</span><span style="color:#24292E;">time_local</span><span style="color:#032F62;">] &quot;$</span><span style="color:#24292E;">request</span><span style="color:#032F62;">&quot; &#39;</span></span>
<span class="line"><span style="color:#032F62;">                      &#39;$</span><span style="color:#24292E;">status</span><span style="color:#032F62;"> $</span><span style="color:#24292E;">body_bytes_sent</span><span style="color:#032F62;"> &quot;$</span><span style="color:#24292E;">http_referer</span><span style="color:#032F62;">&quot; &#39;</span></span>
<span class="line"><span style="color:#032F62;">                      &#39;&quot;$</span><span style="color:#24292E;">http_user_agent</span><span style="color:#032F62;">&quot; &quot;$</span><span style="color:#24292E;">http_x_forwarded_for</span><span style="color:#032F62;">&quot;&#39;</span><span style="color:#24292E;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">    access_log </span><span style="color:#24292E;"> /var/log/nginx/access.log  </span><span style="color:#005CC5;">main</span><span style="color:#24292E;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">    sendfile </span><span style="color:#005CC5;">       on</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#6A737D;">    #tcp_nopush     on;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">    keepalive_timeout </span><span style="color:#005CC5;"> 65</span><span style="color:#24292E;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">    gzip </span><span style="color:#005CC5;"> on</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#D73A49;">    gzip_min_length </span><span style="color:#005CC5;">1k</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#D73A49;">    gzip_buffers </span><span style="color:#005CC5;">4</span><span style="color:#005CC5;"> 16k</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#D73A49;">    gzip_http_version </span><span style="color:#005CC5;">1.0</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#D73A49;">    gzip_comp_level </span><span style="color:#005CC5;">2</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#D73A49;">    gzip_types </span><span style="color:#24292E;">text/plain application/x-javascript text/css application/xml;</span></span>
<span class="line"><span style="color:#D73A49;">    gzip_var</span><span style="color:#005CC5;"> on</span><span style="color:#24292E;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">    # 加载子配置文件</span></span>
<span class="line"><span style="color:#D73A49;">    include </span><span style="color:#24292E;">/etc/nginx/conf.d/*.conf;</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><h3 id="_3-2-子配置文件wefe-cc-conf" tabindex="-1">3.2 子配置文件wefe.cc.conf <a class="header-anchor" href="#_3-2-子配置文件wefe-cc-conf" aria-label="Permalink to &quot;3.2 子配置文件wefe.cc.conf&quot;">​</a></h3><p>修改配置文件</p><div class="language-sh"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki github-light vp-code" tabindex="0"><code><span class="line"><span style="color:#6F42C1;">vi</span><span style="color:#032F62;"> /etc/nginx/conf.d/wefe.cc.conf</span></span></code></pre></div><p>wefe.cc.conf配置</p><div class="language-nginx"><button title="Copy Code" class="copy"></button><span class="lang">nginx</span><pre class="shiki github-light vp-code" tabindex="0"><code><span class="line"><span style="color:#D73A49;">server</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#D73A49;">  listen </span><span style="color:#005CC5;">      80</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#D73A49;">  server_name </span><span style="color:#24292E;"> www.wefe.cc;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">  #charset koi8-r;</span></span>
<span class="line"><span style="color:#6A737D;">  #access_log  /var/log/nginx/host.access.log  main;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">  location</span><span style="color:#6F42C1;"> /docs/ </span><span style="color:#24292E;">{</span></span>
<span class="line"><span style="color:#D73A49;">      alias </span><span style="color:#24292E;">/root/docs/dist/;</span></span>
<span class="line"><span style="color:#D73A49;">      index </span><span style="color:#24292E;"> index.html index.htm;</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">  #error_page  404              /404.html;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">  # redirect server error pages to the static page /50x.html</span></span>
<span class="line"><span style="color:#6A737D;">  #</span></span>
<span class="line"><span style="color:#D73A49;">  error_page </span><span style="color:#005CC5;">  500</span><span style="color:#005CC5;"> 502</span><span style="color:#005CC5;"> 503</span><span style="color:#005CC5;"> 504</span><span style="color:#24292E;">  /50x.html;</span></span>
<span class="line"><span style="color:#D73A49;">  location</span><span style="color:#D73A49;"> =</span><span style="color:#032F62;"> /50x.html </span><span style="color:#24292E;">{</span></span>
<span class="line"><span style="color:#D73A49;">      root </span><span style="color:#24292E;">  /usr/share/nginx/html;</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><h3 id="_3-3-nginx相关操作" tabindex="-1">3.3 nginx相关操作 <a class="header-anchor" href="#_3-3-nginx相关操作" aria-label="Permalink to &quot;3.3 nginx相关操作&quot;">​</a></h3><div class="language-sh"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki github-light vp-code" tabindex="0"><code><span class="line"><span style="color:#6A737D;"># 查看nginx进程号</span></span>
<span class="line"><span style="color:#6F42C1;">ps</span><span style="color:#005CC5;"> -ef</span><span style="color:#D73A49;"> |</span><span style="color:#6F42C1;"> grep</span><span style="color:#032F62;"> nginx</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 查看端口号</span></span>
<span class="line"><span style="color:#6F42C1;">netstat</span><span style="color:#005CC5;"> -tlnp</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 查看80端口</span></span>
<span class="line"><span style="color:#6F42C1;">netstat</span><span style="color:#005CC5;"> -nlp</span><span style="color:#D73A49;"> |</span><span style="color:#6F42C1;"> grep</span><span style="color:#032F62;"> :80</span></span></code></pre></div><div class="language-sh"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki github-light vp-code" tabindex="0"><code><span class="line"><span style="color:#6A737D;"># 启动nginx</span></span>
<span class="line"><span style="color:#6F42C1;">nginx</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 重启nginx</span></span>
<span class="line"><span style="color:#6F42C1;">nginx</span><span style="color:#005CC5;"> -s</span><span style="color:#032F62;"> reload</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 停止nginx</span></span>
<span class="line"><span style="color:#6A737D;"># 从容停止</span></span>
<span class="line"><span style="color:#005CC5;">kill</span><span style="color:#005CC5;"> -QUIT</span><span style="color:#032F62;"> 主进程号</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 快速停止</span></span>
<span class="line"><span style="color:#005CC5;">kill</span><span style="color:#005CC5;"> -TERM</span><span style="color:#032F62;"> 主进程号</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 强制停止</span></span>
<span class="line"><span style="color:#005CC5;">kill</span><span style="color:#005CC5;"> -9</span><span style="color:#032F62;"> nginx</span></span></code></pre></div><div class="language-sh"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki github-light vp-code" tabindex="0"><code><span class="line"><span style="color:#6A737D;"># 检查nginx配置语法</span></span>
<span class="line"><span style="color:#6F42C1;">nginx</span><span style="color:#005CC5;"> -t</span><span style="color:#005CC5;"> -c</span><span style="color:#032F62;"> /etc/nginx/nginx.conf</span></span></code></pre></div><p>查看日志</p><div class="language-sh"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki github-light vp-code" tabindex="0"><code><span class="line"><span style="color:#6A737D;"># 访问nginx日志目录</span></span>
<span class="line"><span style="color:#005CC5;">cd</span><span style="color:#032F62;"> /var/log/nginx</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 查看日志</span></span>
<span class="line"><span style="color:#6F42C1;">cat</span><span style="color:#032F62;"> /var/log/nginx/access.log</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6F42C1;">cat</span><span style="color:#032F62;"> /var/log/nginx/error.log</span></span></code></pre></div><p>启动nginx</p><div class="language-sh"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki github-light vp-code" tabindex="0"><code><span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 启动nginx服务</span></span>
<span class="line"><span style="color:#6F42C1;">systemctl</span><span style="color:#032F62;"> start</span><span style="color:#032F62;"> nginx.service</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 设置开机自启动</span></span>
<span class="line"><span style="color:#6F42C1;">systemctl</span><span style="color:#032F62;"> enable</span><span style="color:#032F62;"> nginx.service</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 停止开机自启动</span></span>
<span class="line"><span style="color:#6F42C1;">systemctl</span><span style="color:#032F62;"> disable</span><span style="color:#032F62;"> nginx.service</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 查看服务当前状态</span></span>
<span class="line"><span style="color:#6F42C1;">systemctl</span><span style="color:#032F62;"> status</span><span style="color:#032F62;"> nginx.service</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 重新启动服务</span></span>
<span class="line"><span style="color:#6F42C1;">systemctl</span><span style="color:#032F62;"> restart</span><span style="color:#032F62;"> nginx.service</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 查看所有已启动的服务</span></span>
<span class="line"><span style="color:#6F42C1;">systemctl</span><span style="color:#032F62;"> list-units</span><span style="color:#005CC5;"> --type=service</span></span></code></pre></div><h3 id="_3-4-nginx常见问题" tabindex="-1">3.4 nginx常见问题 <a class="header-anchor" href="#_3-4-nginx常见问题" aria-label="Permalink to &quot;3.4 nginx常见问题&quot;">​</a></h3><p>403 Forbidden</p><ul><li><a href="https://www.cnblogs.com/lxwphp/p/11124633.html" target="_blank" rel="noreferrer">https://www.cnblogs.com/lxwphp/p/11124633.html</a></li><li><a href="https://www.linuxprobe.com/nginx-403-forbidden.html" target="_blank" rel="noreferrer">https://www.linuxprobe.com/nginx-403-forbidden.html</a></li></ul>`,47)]))}const g=n(o,[["render",e]]);export{h as __pageData,g as default};
