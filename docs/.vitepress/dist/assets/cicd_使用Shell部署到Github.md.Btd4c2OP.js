import{_ as a,c as n,o as l,ag as p}from"./chunks/framework.DPDPlp3K.js";const d=JSON.parse('{"title":"使用Shell部署到Github","description":"","frontmatter":{},"headers":[],"relativePath":"cicd/使用Shell部署到Github.md","filePath":"cicd/使用Shell部署到Github.md"}'),e={name:"cicd/使用Shell部署到Github.md"};function o(t,s,c,i,r,h){return l(),n("div",null,s[0]||(s[0]=[p(`<h1 id="使用shell部署到github" tabindex="-1">使用Shell部署到Github <a class="header-anchor" href="#使用shell部署到github" aria-label="Permalink to &quot;使用Shell部署到Github&quot;">​</a></h1><h2 id="_1-创建shell脚本" tabindex="-1">1.创建shell脚本 <a class="header-anchor" href="#_1-创建shell脚本" aria-label="Permalink to &quot;1.创建shell脚本&quot;">​</a></h2><p>在项目根目录创建deploy.sh文件</p><h3 id="shell脚本完整示例" tabindex="-1">shell脚本完整示例 <a class="header-anchor" href="#shell脚本完整示例" aria-label="Permalink to &quot;shell脚本完整示例&quot;">​</a></h3><div class="language-sh"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki github-light vp-code" tabindex="0"><code><span class="line"><span style="color:#6A737D;">#!/usr/bin/env sh</span></span>
<span class="line"><span style="color:#6A737D;"># 确保脚本抛出遇到的错误</span></span>
<span class="line"><span style="color:#005CC5;">set</span><span style="color:#005CC5;"> -e</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 生成静态文件</span></span>
<span class="line"><span style="color:#6F42C1;">npm</span><span style="color:#032F62;"> run</span><span style="color:#032F62;"> build</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 进入生成的文件夹</span></span>
<span class="line"><span style="color:#005CC5;">cd</span><span style="color:#032F62;"> docs/.vitepress/dist</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 初始化git仓库，如果已经初始化，则跳过</span></span>
<span class="line"><span style="color:#6A737D;"># git init</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 添加文件</span></span>
<span class="line"><span style="color:#6F42C1;">git</span><span style="color:#032F62;"> add</span><span style="color:#032F62;"> .</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 读取终端输入的信息</span></span>
<span class="line"><span style="color:#005CC5;">read</span><span style="color:#005CC5;"> -p</span><span style="color:#032F62;"> &quot;input commit message: &quot;</span><span style="color:#032F62;"> msg</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6F42C1;">git</span><span style="color:#032F62;"> commit</span><span style="color:#005CC5;"> -m</span><span style="color:#032F62;"> &quot;</span><span style="color:#24292E;">$msg</span><span style="color:#032F62;">&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 推送到指定仓库</span></span>
<span class="line"><span style="color:#6F42C1;">git</span><span style="color:#032F62;"> remote</span><span style="color:#032F62;"> add</span><span style="color:#032F62;"> origin</span><span style="color:#032F62;"> https://github.com/xxxxxx.git</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 推送到远程main分支</span></span>
<span class="line"><span style="color:#6F42C1;">git</span><span style="color:#032F62;"> push</span><span style="color:#032F62;"> origin</span><span style="color:#032F62;"> main</span></span>
<span class="line"></span>
<span class="line"><span style="color:#005CC5;">echo</span><span style="color:#032F62;"> &#39;push success!&#39;</span></span></code></pre></div><h2 id="_2-添加部署命令" tabindex="-1">2.添加部署命令 <a class="header-anchor" href="#_2-添加部署命令" aria-label="Permalink to &quot;2.添加部署命令&quot;">​</a></h2><p>在package.json中添加部署命令</p><div class="language-json"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki github-light vp-code" tabindex="0"><code><span class="line"><span style="color:#032F62;">&quot;scripts&quot;</span><span style="color:#24292E;">: {</span></span>
<span class="line"><span style="color:#005CC5;">  &quot;deploy&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;sh deploy.sh&quot;</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div>`,8)]))}const u=a(e,[["render",o]]);export{d as __pageData,u as default};
