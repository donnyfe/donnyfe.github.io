import{_ as a,c as n,o as l,ag as t}from"./chunks/framework.DPDPlp3K.js";const y=JSON.parse('{"title":"lint-staged","description":"","frontmatter":{},"headers":[],"relativePath":"style/styleTools/Git提交工具lint-staged.md","filePath":"style/styleTools/Git提交工具lint-staged.md"}'),e={name:"style/styleTools/Git提交工具lint-staged.md"};function o(p,s,r,i,c,u){return l(),n("div",null,s[0]||(s[0]=[t(`<h1 id="lint-staged" tabindex="-1">lint-staged <a class="header-anchor" href="#lint-staged" aria-label="Permalink to &quot;lint-staged&quot;">​</a></h1><ul><li><a href="https://www.npmjs.com/package/lint-staged" target="_blank" rel="noreferrer">lint-staged官方文档</a></li></ul><h2 id="作用" tabindex="-1">作用 <a class="header-anchor" href="#作用" aria-label="Permalink to &quot;作用&quot;">​</a></h2><p>在git工作暂存区筛选出仅发生变更的文件</p><h2 id="基本配置" tabindex="-1">基本配置 <a class="header-anchor" href="#基本配置" aria-label="Permalink to &quot;基本配置&quot;">​</a></h2><h3 id="安装" tabindex="-1">安装 <a class="header-anchor" href="#安装" aria-label="Permalink to &quot;安装&quot;">​</a></h3><div class="language-sh"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki github-light vp-code" tabindex="0"><code><span class="line"><span style="color:#6F42C1;">pnpm</span><span style="color:#032F62;"> add</span><span style="color:#005CC5;"> -D</span><span style="color:#032F62;"> lint-staged</span></span></code></pre></div><h3 id="配置" tabindex="-1">配置 <a class="header-anchor" href="#配置" aria-label="Permalink to &quot;配置&quot;">​</a></h3><p>在package.json 中添加下面内容</p><div class="language-json"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki github-light vp-code" tabindex="0"><code><span class="line"><span style="color:#24292E;">{</span></span>
<span class="line"><span style="color:#005CC5;">  &quot;lint-staged&quot;</span><span style="color:#24292E;">: {</span></span>
<span class="line"><span style="color:#005CC5;">    &quot;*.{js,jsx,ts,tsx}&quot;</span><span style="color:#24292E;">: [</span></span>
<span class="line"><span style="color:#032F62;">      &quot;eslint --fix&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#032F62;">      &quot;prettier --write&quot;</span></span>
<span class="line"><span style="color:#24292E;">    ],</span></span>
<span class="line"><span style="color:#005CC5;">    &quot;{!(package)*.json,*.code-snippets,.!(browserslist)*rc}&quot;</span><span style="color:#24292E;">: [</span></span>
<span class="line"><span style="color:#032F62;">      &quot;prettier --write--parser json&quot;</span></span>
<span class="line"><span style="color:#24292E;">    ],</span></span>
<span class="line"><span style="color:#005CC5;">    &quot;package.json&quot;</span><span style="color:#24292E;">: [</span></span>
<span class="line"><span style="color:#032F62;">      &quot;prettier --write&quot;</span></span>
<span class="line"><span style="color:#24292E;">    ],</span></span>
<span class="line"><span style="color:#005CC5;">    &quot;*.vue&quot;</span><span style="color:#24292E;">: [</span></span>
<span class="line"><span style="color:#032F62;">      &quot;eslint --fix&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#032F62;">      &quot;prettier --write&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#032F62;">      &quot;stylelint --fix&quot;</span></span>
<span class="line"><span style="color:#24292E;">    ],</span></span>
<span class="line"><span style="color:#005CC5;">    &quot;*.{scss,less,styl,html}&quot;</span><span style="color:#24292E;">: [</span></span>
<span class="line"><span style="color:#032F62;">      &quot;stylelint --fix&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#032F62;">      &quot;prettier --write&quot;</span></span>
<span class="line"><span style="color:#24292E;">    ],</span></span>
<span class="line"><span style="color:#005CC5;">    &quot;*.md&quot;</span><span style="color:#24292E;">: [</span></span>
<span class="line"><span style="color:#032F62;">      &quot;prettier --write&quot;</span></span>
<span class="line"><span style="color:#24292E;">    ]</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div>`,10)]))}const q=a(e,[["render",o]]);export{y as __pageData,q as default};
