import{_ as a,c as n,o as l,ag as p}from"./chunks/framework.DPDPlp3K.js";const h=JSON.parse('{"title":"MySQL 安装配置","description":"","frontmatter":{},"headers":[],"relativePath":"mysql/MySQL安装运行及配置.md","filePath":"mysql/MySQL安装运行及配置.md"}'),o={name:"mysql/MySQL安装运行及配置.md"};function e(c,s,t,r,i,y){return l(),n("div",null,s[0]||(s[0]=[p(`<h1 id="mysql-安装配置" tabindex="-1">MySQL 安装配置 <a class="header-anchor" href="#mysql-安装配置" aria-label="Permalink to &quot;MySQL 安装配置&quot;">​</a></h1><h2 id="mysql-安装" tabindex="-1">MySQL 安装 <a class="header-anchor" href="#mysql-安装" aria-label="Permalink to &quot;MySQL 安装&quot;">​</a></h2><h3 id="_1-客户端安装" tabindex="-1">1. 客户端安装 <a class="header-anchor" href="#_1-客户端安装" aria-label="Permalink to &quot;1. 客户端安装&quot;">​</a></h3><p>待补充……</p><h3 id="_2-命令行工具安装" tabindex="-1">2. 命令行工具安装 <a class="header-anchor" href="#_2-命令行工具安装" aria-label="Permalink to &quot;2. 命令行工具安装&quot;">​</a></h3><h4 id="homebrew" tabindex="-1">homebrew <a class="header-anchor" href="#homebrew" aria-label="Permalink to &quot;homebrew&quot;">​</a></h4><p>homebrew 是 macOS 上的包管理工具，类似于 Linux 上的 apt、yum。</p><p>安装方式：</p><div class="language-sh"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki github-light vp-code" tabindex="0"><code><span class="line"><span style="color:#6A737D;"># 安装</span></span>
<span class="line"><span style="color:#6F42C1;">brew</span><span style="color:#032F62;"> install</span><span style="color:#032F62;"> mysql</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 启动</span></span>
<span class="line"><span style="color:#6F42C1;">brew</span><span style="color:#032F62;"> services</span><span style="color:#032F62;"> start</span><span style="color:#032F62;"> mysql</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 重启</span></span>
<span class="line"><span style="color:#6F42C1;">brew</span><span style="color:#032F62;"> services</span><span style="color:#032F62;"> restart</span><span style="color:#032F62;"> mysql</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 停止</span></span>
<span class="line"><span style="color:#6F42C1;">brew</span><span style="color:#032F62;"> services</span><span style="color:#032F62;"> stop</span><span style="color:#032F62;"> mysql</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 进入控制台</span></span>
<span class="line"><span style="color:#6F42C1;">mysql</span><span style="color:#005CC5;"> -uroot</span><span style="color:#032F62;"> root</span><span style="color:#005CC5;"> -p123</span></span></code></pre></div><h3 id="_3-docker-compose" tabindex="-1">3. Docker-Compose <a class="header-anchor" href="#_3-docker-compose" aria-label="Permalink to &quot;3. Docker-Compose&quot;">​</a></h3><h4 id="创建配置文件" tabindex="-1">创建配置文件 <a class="header-anchor" href="#创建配置文件" aria-label="Permalink to &quot;创建配置文件&quot;">​</a></h4><p>docker-compose.yml 配置文件：</p><div class="language-yaml"><button title="Copy Code" class="copy"></button><span class="lang">yaml</span><pre class="shiki github-light vp-code" tabindex="0"><code><span class="line"><span style="color:#22863A;">version</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&#39;3&#39;</span></span>
<span class="line"><span style="color:#22863A;">services</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#22863A;">  mysql</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#22863A;">    image</span><span style="color:#24292E;">: </span><span style="color:#032F62;">mysql:5.7</span><span style="color:#6A737D;"> # mysql镜像版本</span></span>
<span class="line"><span style="color:#22863A;">    container_name</span><span style="color:#24292E;">: </span><span style="color:#032F62;">mysql</span><span style="color:#6A737D;"> # 容器名称</span></span>
<span class="line"><span style="color:#22863A;">    command</span><span style="color:#24292E;">: </span><span style="color:#6A737D;"># 容器启动时执行的命令</span></span>
<span class="line"><span style="color:#032F62;">      --character-set-server=utf8mb4</span></span>
<span class="line"><span style="color:#032F62;">      --collation-server=utf8mb4_unicode_ci</span></span>
<span class="line"><span style="color:#032F62;">      --lower-case-table-names=1</span><span style="color:#6A737D;"> # 忽略数据表名大小写</span></span>
<span class="line"><span style="color:#22863A;">    restart</span><span style="color:#24292E;">: </span><span style="color:#032F62;">always</span><span style="color:#6A737D;"> # 跟随docker的启动而启动</span></span>
<span class="line"><span style="color:#22863A;">    environment</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#22863A;">      MYSQL_ROOT_PASSWORD</span><span style="color:#24292E;">: </span><span style="color:#032F62;">root</span><span style="color:#6A737D;"> # 设置root账号密码</span></span>
<span class="line"><span style="color:#22863A;">    ports</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">      - </span><span style="color:#032F62;">3306:3306</span><span style="color:#6A737D;"> # 端口映射</span></span>
<span class="line"><span style="color:#22863A;">    volumes</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">      - </span><span style="color:#032F62;">./mysql/data:/var/lib/mysql</span><span style="color:#6A737D;"> # 数据文件挂载</span></span>
<span class="line"><span style="color:#24292E;">      - </span><span style="color:#032F62;">./mysql/conf.d:/etc/mysql/conf.d</span><span style="color:#6A737D;"> # 配置文件挂载</span></span>
<span class="line"><span style="color:#24292E;">      - </span><span style="color:#032F62;">./mysql/log:/var/log/mysql</span><span style="color:#6A737D;"> # 日志文件挂载</span></span></code></pre></div><h4 id="创建挂载目录" tabindex="-1">创建挂载目录 <a class="header-anchor" href="#创建挂载目录" aria-label="Permalink to &quot;创建挂载目录&quot;">​</a></h4><div class="language-sh"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki github-light vp-code" tabindex="0"><code><span class="line"><span style="color:#6F42C1;">mkdir</span><span style="color:#005CC5;"> -p</span><span style="color:#032F62;"> ./mysql/data</span><span style="color:#005CC5;"> \\</span></span>
<span class="line"><span style="color:#032F62;">        ./mysql/conf.d</span><span style="color:#005CC5;"> \\</span></span>
<span class="line"><span style="color:#032F62;">        ./mysql/log</span></span></code></pre></div><h4 id="启动服务" tabindex="-1">启动服务 <a class="header-anchor" href="#启动服务" aria-label="Permalink to &quot;启动服务&quot;">​</a></h4><div class="language-sh"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki github-light vp-code" tabindex="0"><code><span class="line"><span style="color:#6A737D;"># 启动</span></span>
<span class="line"><span style="color:#6F42C1;">docker-compose</span><span style="color:#032F62;"> up</span><span style="color:#005CC5;"> -d</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 查看状态</span></span>
<span class="line"><span style="color:#6F42C1;">docker-compose</span><span style="color:#032F62;"> ps</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 查看日志</span></span>
<span class="line"><span style="color:#6F42C1;">docker-compose</span><span style="color:#032F62;"> logs</span><span style="color:#032F62;"> mysql</span></span></code></pre></div><h4 id="连接测试" tabindex="-1">连接测试 <a class="header-anchor" href="#连接测试" aria-label="Permalink to &quot;连接测试&quot;">​</a></h4><div class="language-sh"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki github-light vp-code" tabindex="0"><code><span class="line"><span style="color:#6A737D;"># 进入容器</span></span>
<span class="line"><span style="color:#6F42C1;">docker</span><span style="color:#032F62;"> exec</span><span style="color:#005CC5;"> -it</span><span style="color:#032F62;"> mysql</span><span style="color:#032F62;"> bash</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 登录MySQL</span></span>
<span class="line"><span style="color:#6F42C1;">mysql</span><span style="color:#005CC5;"> -uroot</span><span style="color:#005CC5;"> -p</span></span>
<span class="line"><span style="color:#6A737D;"># 输入密码root</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 查看数据库</span></span>
<span class="line"><span style="color:#6F42C1;">show</span><span style="color:#032F62;"> databases</span><span style="color:#24292E;">;</span></span></code></pre></div><h3 id="_4-docker" tabindex="-1">4. docker <a class="header-anchor" href="#_4-docker" aria-label="Permalink to &quot;4. docker&quot;">​</a></h3><div class="language-sh"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki github-light vp-code" tabindex="0"><code><span class="line"><span style="color:#6A737D;"># 查找镜像</span></span>
<span class="line"><span style="color:#6F42C1;">docker</span><span style="color:#032F62;"> search</span><span style="color:#032F62;"> mysql</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 拉取镜像</span></span>
<span class="line"><span style="color:#6F42C1;">docker</span><span style="color:#032F62;"> pull</span><span style="color:#032F62;"> mysql</span></span></code></pre></div><h2 id="mysql-启动运行" tabindex="-1">MySQL 启动运行 <a class="header-anchor" href="#mysql-启动运行" aria-label="Permalink to &quot;MySQL 启动运行&quot;">​</a></h2><h3 id="查看版本" tabindex="-1">查看版本 <a class="header-anchor" href="#查看版本" aria-label="Permalink to &quot;查看版本&quot;">​</a></h3><div class="language-sh"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki github-light vp-code" tabindex="0"><code><span class="line"><span style="color:#6F42C1;">mysql</span><span style="color:#005CC5;"> -V</span></span>
<span class="line"><span style="color:#6F42C1;">mysql</span><span style="color:#005CC5;"> --version</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># sql语句</span></span>
<span class="line"><span style="color:#D73A49;">select</span><span style="color:#24292E;"> version();</span></span></code></pre></div><h3 id="查看字符集" tabindex="-1">查看字符集 <a class="header-anchor" href="#查看字符集" aria-label="Permalink to &quot;查看字符集&quot;">​</a></h3><div class="language-sh"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki github-light vp-code" tabindex="0"><code><span class="line"><span style="color:#6A737D;"># 查看字符集</span></span>
<span class="line"><span style="color:#6F42C1;">show</span><span style="color:#032F62;"> variables</span><span style="color:#032F62;"> like</span><span style="color:#032F62;"> &quot;char%&quot;</span><span style="color:#24292E;">;</span></span></code></pre></div><h3 id="修改配置" tabindex="-1">修改配置 <a class="header-anchor" href="#修改配置" aria-label="Permalink to &quot;修改配置&quot;">​</a></h3><ol><li>进入目录/etc/mysql/my.cnf</li><li>在<code>client</code>和<code>mysqld</code>字段下面均添加 <code>character-set-server=utf8</code>、<code>collation-server=utf8_general_ci</code></li><li>重启服务</li></ol><p>变量：</p><ul><li>character_set_server： 默认的内部操作字符集</li><li>character_set_client： 客户端来源数据使用的字符集</li><li>character_set_connection： 连接层字符集</li><li>character_set_results： 查询结果字符集</li><li>character_set_database： 当前选中数据库的默认字符集</li><li>character_set_system： 系统元数据(字段名等)字符集</li></ul><p>Docker-compose 配置:</p><div class="language-yaml"><button title="Copy Code" class="copy"></button><span class="lang">yaml</span><pre class="shiki github-light vp-code" tabindex="0"><code><span class="line"><span style="color:#22863A;">mysql</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#22863A;">  restart</span><span style="color:#24292E;">: </span><span style="color:#032F62;">always</span></span>
<span class="line"><span style="color:#22863A;">  image</span><span style="color:#24292E;">: </span><span style="color:#032F62;">mysql</span></span>
<span class="line"><span style="color:#22863A;">  container_name</span><span style="color:#24292E;">: </span><span style="color:#032F62;">mysql</span></span>
<span class="line"><span style="color:#22863A;">  ports</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">  	- </span><span style="color:#032F62;">3306:3306</span></span>
<span class="line"><span style="color:#22863A;">  volumes</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">    - </span><span style="color:#032F62;">/Users/dong/docker/mysql/config:/etc/mysql/conf.d</span></span>
<span class="line"><span style="color:#24292E;">    - </span><span style="color:#032F62;">/Users/dong/docker/mysql/data:/var/lib/mysql</span></span>
<span class="line"><span style="color:#22863A;">  environment</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#22863A;">    MYSQL_ROOT_PASSWORD</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;MYSQL@123&quot;</span></span>
<span class="line"><span style="color:#22863A;">    MYSQL_DATABASE</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;local&quot;</span></span>
<span class="line"><span style="color:#22863A;">    TZ</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;Asia/Shanghai&quot;</span></span>
<span class="line"><span style="color:#22863A;">  command</span><span style="color:#24292E;">: [</span></span>
<span class="line"><span style="color:#032F62;">    --character-set-server=utf8mb4</span></span>
<span class="line"><span style="color:#032F62;">    --collation-server=utf8mb4_unicode</span></span>
<span class="line"><span style="color:#032F62;">    --lower-case-table-names=1</span></span>
<span class="line"><span style="color:#24292E;">  ]</span></span></code></pre></div><h2 id="mysql-启动和关闭" tabindex="-1">MySQL 启动和关闭 <a class="header-anchor" href="#mysql-启动和关闭" aria-label="Permalink to &quot;MySQL 启动和关闭&quot;">​</a></h2><h3 id="启动-mysql" tabindex="-1">启动 MySQL <a class="header-anchor" href="#启动-mysql" aria-label="Permalink to &quot;启动 MySQL&quot;">​</a></h3><div class="language-sh"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki github-light vp-code" tabindex="0"><code><span class="line"><span style="color:#6A737D;"># 方式1</span></span>
<span class="line"><span style="color:#6F42C1;">systemtl</span><span style="color:#032F62;"> start</span><span style="color:#032F62;"> mysqld</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 方式2</span></span>
<span class="line"><span style="color:#6F42C1;">mysql.server</span><span style="color:#032F62;"> start</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 方式3</span></span>
<span class="line"><span style="color:#6F42C1;">mysqld_safe</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 方式4</span></span>
<span class="line"><span style="color:#6F42C1;">mysqld</span></span></code></pre></div><blockquote><p>备注： mysqld_safe 和 mysqld 可以在启动数据库时加入自己执行的参数，如： --skip-grant-tables --skip-networking --defaults-file=/opt/my.cnf</p></blockquote><h3 id="关闭-mysql" tabindex="-1">关闭 MySQL <a class="header-anchor" href="#关闭-mysql" aria-label="Permalink to &quot;关闭 MySQL&quot;">​</a></h3><p>关闭 Mysql</p><div class="language-sh"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki github-light vp-code" tabindex="0"><code><span class="line"></span>
<span class="line"><span style="color:#6F42C1;">systemctl</span><span style="color:#032F62;"> stop</span><span style="color:#032F62;"> mysqld</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6F42C1;">service</span><span style="color:#032F62;"> mysqld</span><span style="color:#032F62;"> stop</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6F42C1;">/etc/init.d/mysqld</span><span style="color:#032F62;"> stop</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6F42C1;">mysqladmin</span><span style="color:#005CC5;"> -uroot</span><span style="color:#005CC5;"> -p123</span><span style="color:#032F62;"> shutdown</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6F42C1;">mysql</span><span style="color:#005CC5;"> -uroot</span><span style="color:#005CC5;"> -p123</span><span style="color:#005CC5;"> -e</span><span style="color:#032F62;"> &quot;shutdown&quot;</span></span></code></pre></div><p>初始化数据：</p><div class="language-sh"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki github-light vp-code" tabindex="0"><code><span class="line"><span style="color:#6F42C1;">xxxx/mysqld</span><span style="color:#005CC5;"> \\</span></span>
<span class="line"><span style="color:#24292E;">--initialize-insecure </span><span style="color:#005CC5;">\\</span></span>
<span class="line"><span style="color:#24292E;">--user=mysql </span><span style="color:#005CC5;">\\</span></span>
<span class="line"><span style="color:#24292E;">--datadir=/data/3318/data </span><span style="color:#005CC5;">\\</span></span>
<span class="line"><span style="color:#24292E;">--basedir=/app/database/mysql180</span></span></code></pre></div><h2 id="mysql-配置" tabindex="-1">MySQL 配置 <a class="header-anchor" href="#mysql-配置" aria-label="Permalink to &quot;MySQL 配置&quot;">​</a></h2><h3 id="配置方式" tabindex="-1">配置方式 <a class="header-anchor" href="#配置方式" aria-label="Permalink to &quot;配置方式&quot;">​</a></h3><ol><li>源码安装 ——&gt; 编译过程中设置初始化参数</li><li>配置文件 ——&gt; 数据库启动之前，设定配置文件参数（/etc/my.cnf）。定制 mysql 配置功能</li><li>启动脚本命令行 ——&gt; mysqld_safe --skip-grant-tables --skip-networking</li></ol><h3 id="配置文件应用" tabindex="-1">配置文件应用 <a class="header-anchor" href="#配置文件应用" aria-label="Permalink to &quot;配置文件应用&quot;">​</a></h3><h4 id="_1-配置文件读取顺序" tabindex="-1">（1）配置文件读取顺序 <a class="header-anchor" href="#_1-配置文件读取顺序" aria-label="Permalink to &quot;（1）配置文件读取顺序&quot;">​</a></h4><div class="language-sh"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki github-light vp-code" tabindex="0"><code><span class="line"><span style="color:#6A737D;"># 查看文件读取顺序</span></span>
<span class="line"><span style="color:#6F42C1;">mysqld</span><span style="color:#005CC5;"> --help</span><span style="color:#005CC5;"> --verbose</span><span style="color:#D73A49;"> |</span><span style="color:#6F42C1;"> grep</span><span style="color:#032F62;"> my.cnf</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># /etc/my.cnf ——&gt; /etc/mysql/my.cnf ——&gt; /usr/local/etc/my.cnf ——&gt; ~/.my.cnf</span></span></code></pre></div><p>自定义配置文件位置</p><div class="language-sh"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki github-light vp-code" tabindex="0"><code><span class="line"><span style="color:#6F42C1;">mysqld</span><span style="color:#005CC5;"> --defaults-file=/opt/my.cnf</span></span>
<span class="line"><span style="color:#6F42C1;">mysqld_safe</span><span style="color:#005CC5;"> --defaults-file=/opt/my.cnf</span></span></code></pre></div><h4 id="_2-配置文件书写格式" tabindex="-1">（2）配置文件书写格式 <a class="header-anchor" href="#_2-配置文件书写格式" aria-label="Permalink to &quot;（2）配置文件书写格式&quot;">​</a></h4><p>标签：用来区分不同程序的参数，有：</p><ul><li><p>服务器端标签：负责数据库服务端运行参数设定</p><ul><li><code>mysqld</code></li><li><code>mysqld_safe</code></li><li><code>server</code> 代表所有服务端</li></ul></li><li><p>客户端标签：只影响本地客户端连接，不影响远程客户端</p><ul><li><code>mysql</code></li><li><code>mysqldump</code></li><li><code>client</code> 代表所有客户端</li></ul></li></ul><p>配置参数=xxx</p><p>（3）配置文件模板说明</p><p>以下是一个生产环境下的 MySQL 配置文件(my.cnf)模板及说明:</p><div class="language-sh"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki github-light vp-code" tabindex="0"><code><span class="line"><span style="color:#24292E;">[client]</span></span>
<span class="line"><span style="color:#6A737D;"># 客户端设置</span></span>
<span class="line"><span style="color:#6F42C1;">port</span><span style="color:#032F62;"> =</span><span style="color:#005CC5;"> 3306</span><span style="color:#6A737D;">                         # 端口号</span></span>
<span class="line"><span style="color:#6F42C1;">socket</span><span style="color:#032F62;"> =</span><span style="color:#032F62;"> /tmp/mysql.sock</span><span style="color:#6A737D;">           # 套接字文件</span></span>
<span class="line"><span style="color:#6F42C1;">default-character-set</span><span style="color:#032F62;"> =</span><span style="color:#032F62;"> utf8mb4</span><span style="color:#6A737D;">    # 默认字符集</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">[mysqld]</span></span>
<span class="line"><span style="color:#6A737D;"># 基础设置</span></span>
<span class="line"><span style="color:#6F42C1;">port</span><span style="color:#032F62;"> =</span><span style="color:#005CC5;"> 3306</span></span>
<span class="line"><span style="color:#6F42C1;">socket</span><span style="color:#032F62;"> =</span><span style="color:#032F62;"> /tmp/mysql.sock</span></span>
<span class="line"><span style="color:#6F42C1;">basedir</span><span style="color:#032F62;"> =</span><span style="color:#032F62;"> /usr/local/mysql</span><span style="color:#6A737D;">         # MySQL安装目录</span></span>
<span class="line"><span style="color:#6F42C1;">datadir</span><span style="color:#032F62;"> =</span><span style="color:#032F62;"> /data/mysql</span><span style="color:#6A737D;">             # 数据存放目录</span></span>
<span class="line"><span style="color:#6F42C1;">pid-file</span><span style="color:#032F62;"> =</span><span style="color:#032F62;"> /data/mysql/mysql.pid</span></span>
<span class="line"><span style="color:#6F42C1;">user</span><span style="color:#032F62;"> =</span><span style="color:#032F62;"> mysql</span><span style="color:#6A737D;">                      # 运行用户</span></span>
<span class="line"><span style="color:#6F42C1;">bind-address</span><span style="color:#032F62;"> =</span><span style="color:#005CC5;"> 0.0.0.0</span><span style="color:#6A737D;">           # 允许连接的IP</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 字符集设置</span></span>
<span class="line"><span style="color:#6F42C1;">character-set-server</span><span style="color:#032F62;"> =</span><span style="color:#032F62;"> utf8mb4</span></span>
<span class="line"><span style="color:#6F42C1;">collation-server</span><span style="color:#032F62;"> =</span><span style="color:#032F62;"> utf8mb4_general_ci</span></span>
<span class="line"><span style="color:#6F42C1;">init_connect</span><span style="color:#032F62;"> =</span><span style="color:#032F62;"> &#39;SET NAMES utf8mb4&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 连接设置</span></span>
<span class="line"><span style="color:#6F42C1;">max_connections</span><span style="color:#032F62;"> =</span><span style="color:#005CC5;"> 1000</span><span style="color:#6A737D;">            # 最大连接数</span></span>
<span class="line"><span style="color:#6F42C1;">max_connect_errors</span><span style="color:#032F62;"> =</span><span style="color:#005CC5;"> 1000</span><span style="color:#6A737D;">         # 最大错误连接数</span></span>
<span class="line"><span style="color:#6F42C1;">wait_timeout</span><span style="color:#032F62;"> =</span><span style="color:#005CC5;"> 600</span><span style="color:#6A737D;">               # 非交互连接超时时间</span></span>
<span class="line"><span style="color:#6F42C1;">interactive_timeout</span><span style="color:#032F62;"> =</span><span style="color:#005CC5;"> 600</span><span style="color:#6A737D;">        # 交互连接超时时间</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 缓冲区设置</span></span>
<span class="line"><span style="color:#6F42C1;">key_buffer_size</span><span style="color:#032F62;"> =</span><span style="color:#032F62;"> 256M</span><span style="color:#6A737D;">          # 索引缓冲区大小</span></span>
<span class="line"><span style="color:#6F42C1;">innodb_buffer_pool_size</span><span style="color:#032F62;"> =</span><span style="color:#032F62;"> 4G</span><span style="color:#6A737D;">    # InnoDB缓冲池大小</span></span>
<span class="line"><span style="color:#6F42C1;">innodb_log_buffer_size</span><span style="color:#032F62;"> =</span><span style="color:#032F62;"> 32M</span><span style="color:#6A737D;">    # 日志缓冲区大小</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 日志设置</span></span>
<span class="line"><span style="color:#6F42C1;">log_error</span><span style="color:#032F62;"> =</span><span style="color:#032F62;"> /data/mysql/error.log</span><span style="color:#6A737D;">                    # 错误日志</span></span>
<span class="line"><span style="color:#6F42C1;">slow_query_log</span><span style="color:#032F62;"> =</span><span style="color:#005CC5;"> 1</span><span style="color:#6A737D;">                                   # 开启慢查询日志</span></span>
<span class="line"><span style="color:#6F42C1;">slow_query_log_file</span><span style="color:#032F62;"> =</span><span style="color:#032F62;"> /data/mysql/slow_query.log</span><span style="color:#6A737D;">     # 慢查询日志位置</span></span>
<span class="line"><span style="color:#6F42C1;">long_query_time</span><span style="color:#032F62;"> =</span><span style="color:#005CC5;"> 2</span><span style="color:#6A737D;">                                  # 慢查询阈值(秒)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># InnoDB设置</span></span>
<span class="line"><span style="color:#6F42C1;">innodb_file_per_table</span><span style="color:#032F62;"> =</span><span style="color:#005CC5;"> 1</span><span style="color:#6A737D;">        # 独立表空间</span></span>
<span class="line"><span style="color:#6F42C1;">innodb_flush_log_at_trx_commit</span><span style="color:#032F62;"> =</span><span style="color:#005CC5;"> 1</span><span style="color:#6A737D;">   # 事务提交时写入磁盘</span></span>
<span class="line"><span style="color:#6F42C1;">innodb_flush_method</span><span style="color:#032F62;"> =</span><span style="color:#032F62;"> O_DIRECT</span><span style="color:#6A737D;">   # 文件系统缓存</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 复制设置</span></span>
<span class="line"><span style="color:#6F42C1;">server-id</span><span style="color:#032F62;"> =</span><span style="color:#005CC5;"> 1</span><span style="color:#6A737D;">                    # 服务器ID</span></span>
<span class="line"><span style="color:#6F42C1;">log-bin</span><span style="color:#032F62;"> =</span><span style="color:#032F62;"> /data/mysql/mysql-bin</span><span style="color:#6A737D;">  # 二进制日志</span></span>
<span class="line"><span style="color:#6F42C1;">binlog_format</span><span style="color:#032F62;"> =</span><span style="color:#032F62;"> ROW</span><span style="color:#6A737D;">             # 二进制日志格式</span></span>
<span class="line"><span style="color:#6F42C1;">sync_binlog</span><span style="color:#032F62;"> =</span><span style="color:#005CC5;"> 1</span><span style="color:#6A737D;">                 # 二进制日志同步</span></span></code></pre></div>`,56)]))}const m=a(o,[["render",e]]);export{h as __pageData,m as default};
