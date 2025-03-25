import{_ as a,c as n,o as l,ag as p}from"./chunks/framework.DPDPlp3K.js";const h=JSON.parse('{"title":"TravisCI部署","description":"","frontmatter":{},"headers":[],"relativePath":"cicd/TravisCI部署到GithubPages.md","filePath":"cicd/TravisCI部署到GithubPages.md"}'),e={name:"cicd/TravisCI部署到GithubPages.md"};function o(t,s,c,i,r,y){return l(),n("div",null,s[0]||(s[0]=[p(`<h1 id="travisci部署" tabindex="-1">TravisCI部署 <a class="header-anchor" href="#travisci部署" aria-label="Permalink to &quot;TravisCI部署&quot;">​</a></h1><h2 id="_1-创建并配置-travis-yml文件" tabindex="-1">1. 创建并配置.travis.yml文件 <a class="header-anchor" href="#_1-创建并配置-travis-yml文件" aria-label="Permalink to &quot;1. 创建并配置.travis.yml文件&quot;">​</a></h2><p>在项目根目录配置个文件叫 .travis.yml,打包项目以vuepress为例，内容如下：</p><div class="language-sh"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki github-light vp-code" tabindex="0"><code><span class="line"><span style="color:#6A737D;"># see: https://docs.travis-ci.com/user/languages/javascript-with-nodejs/</span></span>
<span class="line"><span style="color:#6F42C1;">language:</span><span style="color:#032F62;"> node_js</span></span>
<span class="line"><span style="color:#6F42C1;">os:</span></span>
<span class="line"><span style="color:#6F42C1;">  -</span><span style="color:#032F62;"> linux</span></span>
<span class="line"><span style="color:#6F42C1;">node_js:</span></span>
<span class="line"><span style="color:#6F42C1;">  -</span><span style="color:#032F62;"> lts/</span><span style="color:#005CC5;">*</span></span>
<span class="line"><span style="color:#6F42C1;">cache:</span></span>
<span class="line"><span style="color:#6F42C1;">  -</span><span style="color:#032F62;"> yarn</span></span>
<span class="line"><span style="color:#6F42C1;">script:</span></span>
<span class="line"><span style="color:#6F42C1;">  -</span><span style="color:#032F62;"> yarn</span><span style="color:#032F62;"> deploy</span></span>
<span class="line"><span style="color:#6F42C1;">deploy:</span></span>
<span class="line"><span style="color:#6F42C1;">  provider:</span><span style="color:#032F62;"> pages</span></span>
<span class="line"><span style="color:#6F42C1;">  strategy:</span><span style="color:#032F62;"> git</span></span>
<span class="line"><span style="color:#6F42C1;">  cleanup:</span><span style="color:#005CC5;"> true</span></span>
<span class="line"><span style="color:#6F42C1;">  local_dir:</span><span style="color:#032F62;"> docs/.vuepress/dist</span></span>
<span class="line"><span style="color:#6A737D;">  # 在 GitHub 中生成，用于允许 Travis 向你的仓库推送代码。在 Travis 的项目设置页面进行配置，设置为 secure variable</span></span>
<span class="line"><span style="color:#6F42C1;">  token:</span><span style="color:#24292E;"> $GITHUB_TOKEN</span></span>
<span class="line"><span style="color:#6F42C1;">  keep_history:</span><span style="color:#005CC5;"> true</span></span>
<span class="line"><span style="color:#6F42C1;">  on:</span></span>
<span class="line"><span style="color:#6F42C1;">    branch:</span><span style="color:#032F62;"> master</span></span></code></pre></div><h2 id="_2-创建部署脚本" tabindex="-1">2. 创建部署脚本 <a class="header-anchor" href="#_2-创建部署脚本" aria-label="Permalink to &quot;2. 创建部署脚本&quot;">​</a></h2><p>在跟目录下创建部署脚本deploy.sh</p><div class="language-sh"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki github-light vp-code" tabindex="0"><code><span class="line"><span style="color:#6A737D;"># !/usr/bin/env sh</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 确保脚本抛出遇到的错误</span></span>
<span class="line"><span style="color:#005CC5;">set</span><span style="color:#005CC5;"> -e</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 安装依赖</span></span>
<span class="line"><span style="color:#6F42C1;">pnpm</span><span style="color:#032F62;"> install</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 生成静态文件</span></span>
<span class="line"><span style="color:#6F42C1;">pnpm</span><span style="color:#032F62;"> build</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 进入生成的文件夹</span></span>
<span class="line"><span style="color:#005CC5;">cd</span><span style="color:#032F62;"> docs/.vitepress/dist</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 如果是发布到自定义域名</span></span>
<span class="line"><span style="color:#6A737D;"># echo &#39;www.example.com&#39; &gt; CNAME</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6F42C1;">git</span><span style="color:#032F62;"> init</span></span>
<span class="line"><span style="color:#6F42C1;">git</span><span style="color:#032F62;"> add</span><span style="color:#005CC5;"> -A</span></span>
<span class="line"><span style="color:#6F42C1;">git</span><span style="color:#032F62;"> commit</span><span style="color:#005CC5;"> -m</span><span style="color:#032F62;"> &#39;deploy&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 如果发布到 https://&lt;USERNAME&gt;.github.io</span></span>
<span class="line"><span style="color:#6A737D;"># git push -f git@github.com:&lt;USERNAME&gt;/&lt;USERNAME&gt;.github.io.git master</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 如果发布到 https://&lt;USERNAME&gt;.github.io/&lt;REPO&gt;</span></span>
<span class="line"><span style="color:#6A737D;"># git push -f git@github.com:&lt;USERNAME&gt;/&lt;REPO&gt;.git master:gh-pages</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 如果使用 travis 持续集成</span></span>
<span class="line"><span style="color:#6F42C1;">git</span><span style="color:#032F62;"> push</span><span style="color:#005CC5;"> -f</span><span style="color:#032F62;"> https://</span><span style="color:#24292E;">\${GITHUB_TOKEN}</span><span style="color:#032F62;">@github.com/bytehi/bytehi.github.io.git</span><span style="color:#032F62;"> master</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#005CC5;">cd</span><span style="color:#032F62;"> -</span></span></code></pre></div><h2 id="_3-添加脚本指令" tabindex="-1">3. 添加脚本指令 <a class="header-anchor" href="#_3-添加脚本指令" aria-label="Permalink to &quot;3. 添加脚本指令&quot;">​</a></h2><p>在根目录下的package.json文件中添加scripts脚本指令</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-light vp-code" tabindex="0"><code><span class="line"><span style="color:#24292E;">{</span></span>
<span class="line"><span style="color:#032F62;">  &quot;scripts&quot;</span><span style="color:#24292E;">: {</span></span>
<span class="line"><span style="color:#032F62;">    &quot;push&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;bash deploy.sh&quot;</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div>`,10)]))}const C=a(e,[["render",o]]);export{h as __pageData,C as default};
