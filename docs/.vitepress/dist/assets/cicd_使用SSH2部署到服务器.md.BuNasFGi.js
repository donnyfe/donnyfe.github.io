import{_ as n,c as a,o as l,ag as p}from"./chunks/framework.DPDPlp3K.js";const C=JSON.parse('{"title":"使用SSH2部署到服务器","description":"","frontmatter":{},"headers":[],"relativePath":"cicd/使用SSH2部署到服务器.md","filePath":"cicd/使用SSH2部署到服务器.md"}'),o={name:"cicd/使用SSH2部署到服务器.md"};function t(e,s,c,r,y,i){return l(),a("div",null,s[0]||(s[0]=[p(`<h1 id="使用ssh2部署到服务器" tabindex="-1">使用SSH2部署到服务器 <a class="header-anchor" href="#使用ssh2部署到服务器" aria-label="Permalink to &quot;使用SSH2部署到服务器&quot;">​</a></h1><p>假设自己有一台服务器，并且已经在服务器的根目录上创建了目标文件夹，这里以docs目录为例，远程待上传的目录路径为 <code>/root/docs</code>。</p><h2 id="实现步骤流程" tabindex="-1">实现步骤流程 <a class="header-anchor" href="#实现步骤流程" aria-label="Permalink to &quot;实现步骤流程&quot;">​</a></h2><h3 id="_1-添加部署脚本" tabindex="-1">1.添加部署脚本 <a class="header-anchor" href="#_1-添加部署脚本" aria-label="Permalink to &quot;1.添加部署脚本&quot;">​</a></h3><p>在项目根目录创建deploy.js文件</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-light vp-code" tabindex="0"><code><span class="line"><span style="color:#D73A49;">const</span><span style="color:#005CC5;"> Client</span><span style="color:#D73A49;"> =</span><span style="color:#6F42C1;"> require</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;ssh2&#39;</span><span style="color:#24292E;">).Client</span></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#005CC5;"> path</span><span style="color:#D73A49;"> =</span><span style="color:#6F42C1;"> require</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;path&#39;</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#005CC5;"> fs</span><span style="color:#D73A49;"> =</span><span style="color:#6F42C1;"> require</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;fs&#39;</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#005CC5;"> childProcess</span><span style="color:#D73A49;"> =</span><span style="color:#6F42C1;"> require</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;child_process&#39;</span><span style="color:#24292E;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">class</span><span style="color:#6F42C1;"> Deploy</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#D73A49;">	constructor</span><span style="color:#24292E;">(</span><span style="color:#E36209;">options</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#6A737D;">		// 验证必要参数</span></span>
<span class="line"><span style="color:#D73A49;">		const</span><span style="color:#005CC5;"> required</span><span style="color:#D73A49;"> =</span><span style="color:#24292E;"> [</span><span style="color:#032F62;">&#39;ssh&#39;</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&#39;localPath&#39;</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&#39;remotePath&#39;</span><span style="color:#24292E;">]</span></span>
<span class="line"><span style="color:#24292E;">		required.</span><span style="color:#6F42C1;">forEach</span><span style="color:#24292E;">((</span><span style="color:#E36209;">field</span><span style="color:#24292E;">) </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#D73A49;">			if</span><span style="color:#24292E;"> (</span><span style="color:#D73A49;">!</span><span style="color:#24292E;">options[field]) {</span></span>
<span class="line"><span style="color:#D73A49;">				throw</span><span style="color:#D73A49;"> new</span><span style="color:#6F42C1;"> Error</span><span style="color:#24292E;">(</span><span style="color:#032F62;">\`Missing required option: \${</span><span style="color:#24292E;">field</span><span style="color:#032F62;">}\`</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#24292E;">			}</span></span>
<span class="line"><span style="color:#24292E;">		})</span></span>
<span class="line"></span>
<span class="line"><span style="color:#005CC5;">		this</span><span style="color:#24292E;">.log </span><span style="color:#D73A49;">=</span><span style="color:#005CC5;"> this</span><span style="color:#24292E;">.</span><span style="color:#6F42C1;">initLogger</span><span style="color:#24292E;">()</span></span>
<span class="line"></span>
<span class="line"><span style="color:#005CC5;">		this</span><span style="color:#24292E;">.options </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> options</span></span>
<span class="line"><span style="color:#005CC5;">		this</span><span style="color:#24292E;">.client </span><span style="color:#D73A49;">=</span><span style="color:#D73A49;"> new</span><span style="color:#6F42C1;"> Client</span><span style="color:#24292E;">()</span></span>
<span class="line"><span style="color:#24292E;">	}</span></span>
<span class="line"><span style="color:#6A737D;">	// 初始化日志记录器</span></span>
<span class="line"><span style="color:#6F42C1;">	initLogger</span><span style="color:#24292E;">() {</span></span>
<span class="line"><span style="color:#D73A49;">		return</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#6F42C1;">			info</span><span style="color:#24292E;">: (</span><span style="color:#E36209;">msg</span><span style="color:#24292E;">) </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(</span><span style="color:#032F62;">\`[INFO] \${</span><span style="color:#24292E;">msg</span><span style="color:#032F62;">}\`</span><span style="color:#24292E;">),</span></span>
<span class="line"><span style="color:#6F42C1;">			error</span><span style="color:#24292E;">: (</span><span style="color:#E36209;">msg</span><span style="color:#24292E;">) </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> console.</span><span style="color:#6F42C1;">error</span><span style="color:#24292E;">(</span><span style="color:#032F62;">\`[ERROR] \${</span><span style="color:#24292E;">msg</span><span style="color:#032F62;">}\`</span><span style="color:#24292E;">),</span></span>
<span class="line"><span style="color:#6F42C1;">			success</span><span style="color:#24292E;">: (</span><span style="color:#E36209;">msg</span><span style="color:#24292E;">) </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(</span><span style="color:#032F62;">\`[SUCCESS] \${</span><span style="color:#24292E;">msg</span><span style="color:#032F62;">}\`</span><span style="color:#24292E;">),</span></span>
<span class="line"><span style="color:#24292E;">		}</span></span>
<span class="line"><span style="color:#24292E;">	}</span></span>
<span class="line"><span style="color:#D73A49;">	async</span><span style="color:#6F42C1;"> start</span><span style="color:#24292E;">() {</span></span>
<span class="line"><span style="color:#D73A49;">		try</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#005CC5;">			this</span><span style="color:#24292E;">.log.</span><span style="color:#6F42C1;">info</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;开始部署流程...&#39;</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#D73A49;">			await</span><span style="color:#005CC5;"> this</span><span style="color:#24292E;">.</span><span style="color:#6F42C1;">compression</span><span style="color:#24292E;">()</span></span>
<span class="line"><span style="color:#D73A49;">			await</span><span style="color:#005CC5;"> this</span><span style="color:#24292E;">.</span><span style="color:#6F42C1;">connect</span><span style="color:#24292E;">(</span><span style="color:#D73A49;">async</span><span style="color:#24292E;"> (</span><span style="color:#E36209;">conn</span><span style="color:#24292E;">) </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#D73A49;">				await</span><span style="color:#005CC5;"> this</span><span style="color:#24292E;">.</span><span style="color:#6F42C1;">upload</span><span style="color:#24292E;">()</span></span>
<span class="line"><span style="color:#D73A49;">				await</span><span style="color:#005CC5;"> this</span><span style="color:#24292E;">.</span><span style="color:#6F42C1;">runShell</span><span style="color:#24292E;">()</span></span>
<span class="line"><span style="color:#24292E;">			})</span></span>
<span class="line"><span style="color:#005CC5;">			this</span><span style="color:#24292E;">.log.</span><span style="color:#6F42C1;">success</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;部署完成!&#39;</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#005CC5;">			this</span><span style="color:#24292E;">.client?.</span><span style="color:#6F42C1;">end</span><span style="color:#24292E;">()</span></span>
<span class="line"><span style="color:#24292E;">		} </span><span style="color:#D73A49;">catch</span><span style="color:#24292E;"> (error) {</span></span>
<span class="line"><span style="color:#005CC5;">			this</span><span style="color:#24292E;">.log.</span><span style="color:#6F42C1;">error</span><span style="color:#24292E;">(</span><span style="color:#032F62;">\`部署失败: \${</span><span style="color:#24292E;">error</span><span style="color:#032F62;">.</span><span style="color:#24292E;">message</span><span style="color:#032F62;">}\`</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#6A737D;">			// 确保出错时关闭连接</span></span>
<span class="line"><span style="color:#005CC5;">			this</span><span style="color:#24292E;">.client?.</span><span style="color:#6F42C1;">end</span><span style="color:#24292E;">()</span></span>
<span class="line"><span style="color:#D73A49;">			throw</span><span style="color:#24292E;"> error</span></span>
<span class="line"><span style="color:#24292E;">		}</span></span>
<span class="line"><span style="color:#24292E;">	}</span></span>
<span class="line"><span style="color:#6A737D;">	/**</span></span>
<span class="line"><span style="color:#6A737D;">	 * Step 1:打包压缩应用</span></span>
<span class="line"><span style="color:#6A737D;">	 */</span></span>
<span class="line"><span style="color:#D73A49;">	async</span><span style="color:#6F42C1;"> compression</span><span style="color:#24292E;">() {</span></span>
<span class="line"><span style="color:#D73A49;">		return</span><span style="color:#D73A49;"> new</span><span style="color:#005CC5;"> Promise</span><span style="color:#24292E;">((</span><span style="color:#E36209;">resolve</span><span style="color:#24292E;">, </span><span style="color:#E36209;">reject</span><span style="color:#24292E;">) </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#005CC5;">			this</span><span style="color:#24292E;">.log.</span><span style="color:#6F42C1;">info</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;正在压缩代码包...&#39;</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#D73A49;">			const</span><span style="color:#005CC5;"> pro</span><span style="color:#D73A49;"> =</span><span style="color:#24292E;"> childProcess.</span><span style="color:#6F42C1;">exec</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">this</span><span style="color:#24292E;">.options.shellMap.compression, (</span><span style="color:#E36209;">err</span><span style="color:#24292E;">) </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#D73A49;">				if</span><span style="color:#24292E;"> (err) </span><span style="color:#6F42C1;">reject</span><span style="color:#24292E;">(err)</span></span>
<span class="line"><span style="color:#24292E;">			})</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">			pro.stdout.</span><span style="color:#6F42C1;">pipe</span><span style="color:#24292E;">(process.stdout)</span></span>
<span class="line"><span style="color:#24292E;">			pro.stderr.</span><span style="color:#6F42C1;">pipe</span><span style="color:#24292E;">(process.stderr)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">			pro.</span><span style="color:#6F42C1;">on</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;exit&#39;</span><span style="color:#24292E;">, (</span><span style="color:#E36209;">code</span><span style="color:#24292E;">) </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#D73A49;">				if</span><span style="color:#24292E;"> (code </span><span style="color:#D73A49;">===</span><span style="color:#005CC5;"> 0</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#005CC5;">					this</span><span style="color:#24292E;">.log.</span><span style="color:#6F42C1;">success</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;代码包压缩成功!&#39;</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#6F42C1;">					resolve</span><span style="color:#24292E;">()</span></span>
<span class="line"><span style="color:#24292E;">				} </span><span style="color:#D73A49;">else</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#6F42C1;">					reject</span><span style="color:#24292E;">(</span><span style="color:#D73A49;">new</span><span style="color:#6F42C1;"> Error</span><span style="color:#24292E;">(</span><span style="color:#032F62;">\`打包失败,退出码: \${</span><span style="color:#24292E;">code</span><span style="color:#032F62;">}\`</span><span style="color:#24292E;">))</span></span>
<span class="line"><span style="color:#24292E;">				}</span></span>
<span class="line"><span style="color:#24292E;">			})</span></span>
<span class="line"><span style="color:#24292E;">		})</span></span>
<span class="line"><span style="color:#24292E;">	}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">	/**</span></span>
<span class="line"><span style="color:#6A737D;">	 * Step 2: 连接服务器</span></span>
<span class="line"><span style="color:#6A737D;">	 */</span></span>
<span class="line"><span style="color:#D73A49;">	async</span><span style="color:#6F42C1;"> connect</span><span style="color:#24292E;">(</span><span style="color:#E36209;">excutor</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#005CC5;">		this</span><span style="color:#24292E;">.log.</span><span style="color:#6F42C1;">info</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;正在连接远程服务器……&#39;</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#D73A49;">		return</span><span style="color:#D73A49;"> new</span><span style="color:#005CC5;"> Promise</span><span style="color:#24292E;">((</span><span style="color:#E36209;">resolve</span><span style="color:#24292E;">, </span><span style="color:#E36209;">reject</span><span style="color:#24292E;">) </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#6A737D;">			// 连接ssh上传</span></span>
<span class="line"><span style="color:#005CC5;">			this</span><span style="color:#24292E;">.client.</span><span style="color:#6F42C1;">connect</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">this</span><span style="color:#24292E;">.options.ssh).</span><span style="color:#6F42C1;">on</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;ready&#39;</span><span style="color:#24292E;">, </span><span style="color:#D73A49;">async</span><span style="color:#24292E;"> () </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#005CC5;">				this</span><span style="color:#24292E;">.log.</span><span style="color:#6F42C1;">info</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;SSH2连接成功!&#39;</span><span style="color:#24292E;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">				await</span><span style="color:#6F42C1;"> excutor</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">this</span><span style="color:#24292E;">.client)</span></span>
<span class="line"><span style="color:#6F42C1;">				resolve</span><span style="color:#24292E;">()</span></span>
<span class="line"><span style="color:#24292E;">			})</span></span>
<span class="line"><span style="color:#24292E;">		})</span></span>
<span class="line"><span style="color:#24292E;">	}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">	/**</span></span>
<span class="line"><span style="color:#6A737D;">	 * Step 3: 上传资源文件</span></span>
<span class="line"><span style="color:#6A737D;">	 */</span></span>
<span class="line"><span style="color:#D73A49;">	async</span><span style="color:#6F42C1;"> upload</span><span style="color:#24292E;">() {</span></span>
<span class="line"><span style="color:#D73A49;">		return</span><span style="color:#D73A49;"> new</span><span style="color:#005CC5;"> Promise</span><span style="color:#24292E;">((</span><span style="color:#E36209;">resolve</span><span style="color:#24292E;">, </span><span style="color:#E36209;">reject</span><span style="color:#24292E;">) </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#6A737D;">			// 建立sftp连接</span></span>
<span class="line"><span style="color:#005CC5;">			this</span><span style="color:#24292E;">.client.</span><span style="color:#6F42C1;">sftp</span><span style="color:#24292E;">((</span><span style="color:#E36209;">err</span><span style="color:#24292E;">, </span><span style="color:#E36209;">sftp</span><span style="color:#24292E;">) </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#D73A49;">				if</span><span style="color:#24292E;"> (err) {</span></span>
<span class="line"><span style="color:#005CC5;">					this</span><span style="color:#24292E;">.log.</span><span style="color:#6F42C1;">error</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;SFTP连接失败&#39;</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#D73A49;">					return</span><span style="color:#6F42C1;"> reject</span><span style="color:#24292E;">(err)</span></span>
<span class="line"><span style="color:#24292E;">				}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">				const</span><span style="color:#24292E;"> { </span><span style="color:#005CC5;">localPath</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">remotePath</span><span style="color:#24292E;"> } </span><span style="color:#D73A49;">=</span><span style="color:#005CC5;"> this</span><span style="color:#24292E;">.options</span></span>
<span class="line"><span style="color:#D73A49;">				const</span><span style="color:#005CC5;"> fullPath</span><span style="color:#D73A49;"> =</span><span style="color:#24292E;"> path.</span><span style="color:#6F42C1;">join</span><span style="color:#24292E;">(__dirname, localPath)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">				// 先检查文件是否存在</span></span>
<span class="line"><span style="color:#D73A49;">				if</span><span style="color:#24292E;"> (</span><span style="color:#D73A49;">!</span><span style="color:#24292E;">fs.</span><span style="color:#6F42C1;">existsSync</span><span style="color:#24292E;">(fullPath)) {</span></span>
<span class="line"><span style="color:#D73A49;">					return</span><span style="color:#6F42C1;"> reject</span><span style="color:#24292E;">(</span><span style="color:#D73A49;">new</span><span style="color:#6F42C1;"> Error</span><span style="color:#24292E;">(</span><span style="color:#032F62;">\`本地文件不存在: \${</span><span style="color:#24292E;">fullPath</span><span style="color:#032F62;">}\`</span><span style="color:#24292E;">))</span></span>
<span class="line"><span style="color:#24292E;">				}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#005CC5;">				this</span><span style="color:#24292E;">.log.</span><span style="color:#6F42C1;">info</span><span style="color:#24292E;">(</span><span style="color:#032F62;">\`本地路径: \${</span><span style="color:#24292E;">fullPath</span><span style="color:#032F62;">}\`</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#005CC5;">				this</span><span style="color:#24292E;">.log.</span><span style="color:#6F42C1;">info</span><span style="color:#24292E;">(</span><span style="color:#032F62;">\`远程路径: \${</span><span style="color:#24292E;">remotePath</span><span style="color:#032F62;">}\`</span><span style="color:#24292E;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">				// 增加上传进度显示</span></span>
<span class="line"><span style="color:#D73A49;">				const</span><span style="color:#005CC5;"> startTime</span><span style="color:#D73A49;"> =</span><span style="color:#24292E;"> Date.</span><span style="color:#6F42C1;">now</span><span style="color:#24292E;">()</span></span>
<span class="line"><span style="color:#24292E;">				sftp.</span><span style="color:#6F42C1;">fastPut</span><span style="color:#24292E;">(</span></span>
<span class="line"><span style="color:#24292E;">					fullPath,</span></span>
<span class="line"><span style="color:#24292E;">					remotePath,</span></span>
<span class="line"><span style="color:#24292E;">					{</span></span>
<span class="line"><span style="color:#6F42C1;">						step</span><span style="color:#24292E;">: (</span><span style="color:#E36209;">transferred</span><span style="color:#24292E;">, </span><span style="color:#E36209;">chunk</span><span style="color:#24292E;">, </span><span style="color:#E36209;">total</span><span style="color:#24292E;">) </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#D73A49;">							const</span><span style="color:#005CC5;"> percent</span><span style="color:#D73A49;"> =</span><span style="color:#24292E;"> Math.</span><span style="color:#6F42C1;">round</span><span style="color:#24292E;">((transferred </span><span style="color:#D73A49;">/</span><span style="color:#24292E;"> total) </span><span style="color:#D73A49;">*</span><span style="color:#005CC5;"> 100</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#005CC5;">							this</span><span style="color:#24292E;">.log.</span><span style="color:#6F42C1;">info</span><span style="color:#24292E;">(</span><span style="color:#032F62;">\`上传进度: \${</span><span style="color:#24292E;">percent</span><span style="color:#032F62;">}%\`</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#24292E;">						},</span></span>
<span class="line"><span style="color:#24292E;">					},</span></span>
<span class="line"><span style="color:#24292E;">					(</span><span style="color:#E36209;">err</span><span style="color:#24292E;">) </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#D73A49;">						if</span><span style="color:#24292E;"> (err) {</span></span>
<span class="line"><span style="color:#005CC5;">							this</span><span style="color:#24292E;">.log.</span><span style="color:#6F42C1;">error</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;文件上传失败&#39;</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#D73A49;">							return</span><span style="color:#6F42C1;"> reject</span><span style="color:#24292E;">(err)</span></span>
<span class="line"><span style="color:#24292E;">						}</span></span>
<span class="line"><span style="color:#D73A49;">						const</span><span style="color:#005CC5;"> duration</span><span style="color:#D73A49;"> =</span><span style="color:#24292E;"> ((Date.</span><span style="color:#6F42C1;">now</span><span style="color:#24292E;">() </span><span style="color:#D73A49;">-</span><span style="color:#24292E;"> startTime) </span><span style="color:#D73A49;">/</span><span style="color:#005CC5;"> 1000</span><span style="color:#24292E;">).</span><span style="color:#6F42C1;">toFixed</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">2</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#005CC5;">						this</span><span style="color:#24292E;">.log.</span><span style="color:#6F42C1;">success</span><span style="color:#24292E;">(</span><span style="color:#032F62;">\`代码包上传成功! 耗时\${</span><span style="color:#24292E;">duration</span><span style="color:#032F62;">}秒\`</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#6F42C1;">						resolve</span><span style="color:#24292E;">()</span></span>
<span class="line"><span style="color:#24292E;">					}</span></span>
<span class="line"><span style="color:#24292E;">				)</span></span>
<span class="line"><span style="color:#24292E;">			})</span></span>
<span class="line"><span style="color:#24292E;">		})</span></span>
<span class="line"><span style="color:#24292E;">	}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">	/**</span></span>
<span class="line"><span style="color:#6A737D;">	 * Step 4: 执行shell脚本</span></span>
<span class="line"><span style="color:#6A737D;">	 */</span></span>
<span class="line"><span style="color:#D73A49;">	async</span><span style="color:#6F42C1;"> runShell</span><span style="color:#24292E;">() {</span></span>
<span class="line"><span style="color:#D73A49;">		return</span><span style="color:#D73A49;"> new</span><span style="color:#005CC5;"> Promise</span><span style="color:#24292E;">((</span><span style="color:#E36209;">resolve</span><span style="color:#24292E;">, </span><span style="color:#E36209;">reject</span><span style="color:#24292E;">) </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#D73A49;">			try</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#005CC5;">				this</span><span style="color:#24292E;">.client.</span><span style="color:#6F42C1;">shell</span><span style="color:#24292E;">((</span><span style="color:#E36209;">err</span><span style="color:#24292E;">, </span><span style="color:#E36209;">stream</span><span style="color:#24292E;">) </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#D73A49;">					if</span><span style="color:#24292E;"> (err) {</span></span>
<span class="line"><span style="color:#005CC5;">						this</span><span style="color:#24292E;">.log.</span><span style="color:#6F42C1;">error</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;执行shell脚本失败&#39;</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#D73A49;">						return</span><span style="color:#6F42C1;"> reject</span><span style="color:#24292E;">(err)</span></span>
<span class="line"><span style="color:#24292E;">					}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">					stream</span></span>
<span class="line"><span style="color:#24292E;">						.</span><span style="color:#6F42C1;">on</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;data&#39;</span><span style="color:#24292E;">, (</span><span style="color:#E36209;">data</span><span style="color:#24292E;">) </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#005CC5;">							this</span><span style="color:#24292E;">.log.</span><span style="color:#6F42C1;">info</span><span style="color:#24292E;">(</span><span style="color:#032F62;">\`Shell输出: \${</span><span style="color:#24292E;">data</span><span style="color:#032F62;">.</span><span style="color:#6F42C1;">toString</span><span style="color:#032F62;">()</span><span style="color:#032F62;">}\`</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#24292E;">						})</span></span>
<span class="line"><span style="color:#24292E;">						.</span><span style="color:#6F42C1;">on</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;close&#39;</span><span style="color:#24292E;">, () </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#005CC5;">							this</span><span style="color:#24292E;">.log.</span><span style="color:#6F42C1;">success</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;服务器端代码包解压完成!&#39;</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#6F42C1;">							resolve</span><span style="color:#24292E;">()</span></span>
<span class="line"><span style="color:#005CC5;">							this</span><span style="color:#24292E;">.client.</span><span style="color:#6F42C1;">end</span><span style="color:#24292E;">()</span></span>
<span class="line"><span style="color:#24292E;">						})</span></span>
<span class="line"><span style="color:#24292E;">						.</span><span style="color:#6F42C1;">on</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;error&#39;</span><span style="color:#24292E;">, (</span><span style="color:#E36209;">err</span><span style="color:#24292E;">) </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#005CC5;">							this</span><span style="color:#24292E;">.log.</span><span style="color:#6F42C1;">error</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;Shell执行错误&#39;</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#6F42C1;">							reject</span><span style="color:#24292E;">(err)</span></span>
<span class="line"><span style="color:#24292E;">						})</span></span>
<span class="line"><span style="color:#24292E;">						.</span><span style="color:#6F42C1;">end</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">this</span><span style="color:#24292E;">.options.shellMap.remoteShell)</span></span>
<span class="line"><span style="color:#24292E;">				})</span></span>
<span class="line"><span style="color:#24292E;">			} </span><span style="color:#D73A49;">catch</span><span style="color:#24292E;"> (err) {</span></span>
<span class="line"><span style="color:#005CC5;">				this</span><span style="color:#24292E;">.log.</span><span style="color:#6F42C1;">error</span><span style="color:#24292E;">(</span><span style="color:#032F62;">\`执行shell脚本失败: \${</span><span style="color:#24292E;">err</span><span style="color:#032F62;">.</span><span style="color:#24292E;">message</span><span style="color:#032F62;">}\`</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#24292E;">			}</span></span>
<span class="line"><span style="color:#24292E;">		})</span></span>
<span class="line"><span style="color:#24292E;">	}</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#005CC5;"> options</span><span style="color:#D73A49;"> =</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#6A737D;">	// ssh2客户端配置</span></span>
<span class="line"><span style="color:#24292E;">	ssh: {</span></span>
<span class="line"><span style="color:#24292E;">		host: </span><span style="color:#032F62;">&#39;x.x.x.x&#39;</span><span style="color:#24292E;">, </span><span style="color:#6A737D;">// 服务器公网IP地址</span></span>
<span class="line"><span style="color:#24292E;">		port: </span><span style="color:#005CC5;">22</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">		username: </span><span style="color:#032F62;">&#39;root&#39;</span><span style="color:#24292E;">, </span><span style="color:#6A737D;">// 登录用户名，默认root</span></span>
<span class="line"><span style="color:#24292E;">		password: </span><span style="color:#032F62;">&#39;&#39;</span><span style="color:#24292E;">, </span><span style="color:#6A737D;">// 登录密码, 如果使用密钥登录则不需要密码</span></span>
<span class="line"><span style="color:#24292E;">	},</span></span>
<span class="line"><span style="color:#6A737D;">	// 部署文件的本地路径</span></span>
<span class="line"><span style="color:#24292E;">	localPath: </span><span style="color:#032F62;">&#39;docs/.vitepress/dist.tar.gz&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#6A737D;">	// 部署文件的服务器路径</span></span>
<span class="line"><span style="color:#24292E;">	remotePath: </span><span style="color:#032F62;">&#39;/root/docs/dist.tar.gz&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">	shellMap: {</span></span>
<span class="line"><span style="color:#24292E;">		compression: [</span></span>
<span class="line"><span style="color:#032F62;">			&#39;cd ./docs/.vitepress&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#6A737D;">			// 打包压缩dist目录</span></span>
<span class="line"><span style="color:#032F62;">			&#39;tar zcvf dist.tar.gz dist&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">		].</span><span style="color:#6F42C1;">join</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;</span><span style="color:#005CC5;">\\n</span><span style="color:#032F62;">&#39;</span><span style="color:#24292E;">),</span></span>
<span class="line"><span style="color:#6A737D;">		// 远程执行Shell命令</span></span>
<span class="line"><span style="color:#24292E;">		remoteShell: [</span></span>
<span class="line"><span style="color:#6A737D;">			// 进入远端docs目录</span></span>
<span class="line"><span style="color:#032F62;">			&#39;cd ./docs&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#6A737D;">			// 将上传压缩包复制一份到bak目录下并更名带上时间戳，通常用于代码回退， 根据实际情况选择</span></span>
<span class="line"><span style="color:#032F62;">			&#39;cp dist.tar.gz bak/dist.bak.$(date &quot;+%Y%m%d%H%M%S&quot;).tar.gz&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#6A737D;">			// 移除远端dist目录</span></span>
<span class="line"><span style="color:#032F62;">			&#39;rm -rf dist&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#6A737D;">			// 解压上传的压缩包</span></span>
<span class="line"><span style="color:#032F62;">			&#39;tar zxvf dist.tar.gz&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#6A737D;">			// 移除压缩包</span></span>
<span class="line"><span style="color:#032F62;">			&#39;rm -rf dist.tar.gz&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#6A737D;">			// 退出ssh2</span></span>
<span class="line"><span style="color:#032F62;">			&#39;exit&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">		].</span><span style="color:#6F42C1;">join</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;</span><span style="color:#005CC5;">\\n</span><span style="color:#032F62;">&#39;</span><span style="color:#24292E;">),</span></span>
<span class="line"><span style="color:#24292E;">	},</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">new</span><span style="color:#6F42C1;"> Deploy</span><span style="color:#24292E;">(options).</span><span style="color:#6F42C1;">start</span><span style="color:#24292E;">()</span></span></code></pre></div><h3 id="_2-添加部署指令" tabindex="-1">2. 添加部署指令 <a class="header-anchor" href="#_2-添加部署指令" aria-label="Permalink to &quot;2. 添加部署指令&quot;">​</a></h3><p>修改package.json文件，在scripts字段的build指令中添加<code>&amp;&amp; node ./deploy.js</code>，这样在执行<code>npm run build</code>时，会先执行<code>vitepress build docs</code>打包文档应用，然后再执行<code>node ./deploy.js</code>命令实现自动部署。</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-light vp-code" tabindex="0"><code><span class="line"><span style="color:#24292E;">{</span></span>
<span class="line"><span style="color:#032F62;">  &quot;scripts&quot;</span><span style="color:#24292E;">: {</span></span>
<span class="line"><span style="color:#032F62;">    &quot;build&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;vitepress build docs &amp;&amp; node ./deploy.js&quot;</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><h3 id="_3-运行部署" tabindex="-1">3. 运行部署 <a class="header-anchor" href="#_3-运行部署" aria-label="Permalink to &quot;3. 运行部署&quot;">​</a></h3><p>应用开发完毕，在本地执行<code>npm run build</code>命令，即可实现自动打包并部署到服务器。</p><h3 id="其它事项" tabindex="-1">其它事项 <a class="header-anchor" href="#其它事项" aria-label="Permalink to &quot;其它事项&quot;">​</a></h3><ol><li><p>如果使用密钥登录，则需要将密钥文件上传到服务器，并设置好密钥文件的权限。</p></li><li><p>如果需要使用密钥登录，则需要在ssh配置中将password字段设置为空。</p></li></ol><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-light vp-code" tabindex="0"><code><span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> { </span><span style="color:#005CC5;">readFileSync</span><span style="color:#24292E;"> } </span><span style="color:#D73A49;">=</span><span style="color:#6F42C1;"> require</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;fs&#39;</span><span style="color:#24292E;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">{</span></span>
<span class="line"><span style="color:#6F42C1;">  ssh</span><span style="color:#24292E;">: {</span></span>
<span class="line"><span style="color:#6F42C1;">    host</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&#39;192.168.100.100&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#6F42C1;">    port</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">22</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#6F42C1;">    username</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&#39;frylock&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#6F42C1;">    privateKey</span><span style="color:#24292E;">: </span><span style="color:#6F42C1;">readFileSync</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;/path/to/my/key&#39;</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><ol start="3"><li>由于脚本中涉及隐私信息，故使用Git提交文件时需要在<code>.gitignore</code>文件中忽略deploy.js文件。</li></ol><h2 id="参考资料" tabindex="-1">参考资料 <a class="header-anchor" href="#参考资料" aria-label="Permalink to &quot;参考资料&quot;">​</a></h2><ul><li><a href="https://www.npmjs.com/package/ssh2" target="_blank" rel="noreferrer">ssh2</a></li></ul>`,17)]))}const F=n(o,[["render",t]]);export{C as __pageData,F as default};
