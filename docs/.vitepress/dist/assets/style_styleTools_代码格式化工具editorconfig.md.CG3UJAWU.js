import{_ as n,c as a,o as l,ag as p}from"./chunks/framework.DPDPlp3K.js";const C=JSON.parse('{"title":"EditorConfig","description":"","frontmatter":{},"headers":[],"relativePath":"style/styleTools/代码格式化工具editorconfig.md","filePath":"style/styleTools/代码格式化工具editorconfig.md"}'),o={name:"style/styleTools/代码格式化工具editorconfig.md"};function e(t,s,c,r,i,y){return l(),a("div",null,s[0]||(s[0]=[p(`<h1 id="editorconfig" tabindex="-1">EditorConfig <a class="header-anchor" href="#editorconfig" aria-label="Permalink to &quot;EditorConfig&quot;">​</a></h1><p>使用 EditorConfig 配置可以帮助团队保持一致的代码风格，对所有人实施一致的编码样式。</p><p>EditConfig 文件设置遵循 <a href="https://editorconfig.org" target="_blank" rel="noreferrer">EditorConfig.org</a> 维护的文件格式规范。</p><h2 id="配置" tabindex="-1">配置 <a class="header-anchor" href="#配置" aria-label="Permalink to &quot;配置&quot;">​</a></h2><p>通常在项目根目录中添加 <code>.editorconfig</code> 文件, 如果使用VSCode 编辑器需要安装一款<code>EditorConfig for VS Code</code>插件才能使配置生效。</p><p>插件的作用是用<code>.editorconfig</code>文件中的设置覆盖用户/工作区设置。</p><p>其他编辑器如WebStorm等已经内置了EditorConfig支持，无需额外安装插件。</p><p>常见配置：</p><div class="language-sh"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki github-light vp-code" tabindex="0"><code><span class="line"><span style="color:#6A737D;"># http://editorconfig.org</span></span>
<span class="line"><span style="color:#6F42C1;">root</span><span style="color:#032F62;"> =</span><span style="color:#005CC5;"> true</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">[</span><span style="color:#D73A49;">*</span><span style="color:#24292E;">]  </span></span>
<span class="line"><span style="color:#6F42C1;">charset</span><span style="color:#032F62;"> =</span><span style="color:#032F62;"> utf-8</span></span>
<span class="line"><span style="color:#6F42C1;">end_of_line</span><span style="color:#032F62;"> =</span><span style="color:#032F62;"> lf</span></span>
<span class="line"><span style="color:#6F42C1;">indent_style</span><span style="color:#032F62;"> =</span><span style="color:#032F62;"> tab</span></span>
<span class="line"><span style="color:#6F42C1;">insert_final_newline</span><span style="color:#032F62;"> =</span><span style="color:#005CC5;"> true</span></span>
<span class="line"><span style="color:#6F42C1;">trim_trailing_whitespace</span><span style="color:#032F62;"> =</span><span style="color:#005CC5;"> false</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">[</span><span style="color:#D73A49;">*</span><span style="color:#24292E;">.md]</span></span>
<span class="line"><span style="color:#6F42C1;">max_line_length</span><span style="color:#032F62;"> =</span><span style="color:#032F62;"> off</span></span></code></pre></div><h2 id="配置模板参考" tabindex="-1">配置模板参考 <a class="header-anchor" href="#配置模板参考" aria-label="Permalink to &quot;配置模板参考&quot;">​</a></h2><div class="language-sh"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki github-light vp-code" tabindex="0"><code><span class="line"><span style="color:#6A737D;"># 表示是最顶层的配置文件，发现设为true时，才会停止查找.editorconfig文件</span></span>
<span class="line"><span style="color:#6F42C1;">root</span><span style="color:#032F62;"> =</span><span style="color:#005CC5;"> true</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 表示所有文件适用</span></span>
<span class="line"><span style="color:#24292E;">[</span><span style="color:#D73A49;">*</span><span style="color:#24292E;">]</span></span>
<span class="line"><span style="color:#6A737D;"># 设置字符集</span></span>
<span class="line"><span style="color:#6F42C1;">charset</span><span style="color:#032F62;"> =</span><span style="color:#032F62;"> utf-8</span></span>
<span class="line"><span style="color:#6A737D;"># 缩进风格，可选space、tab</span></span>
<span class="line"><span style="color:#6F42C1;">indent_style</span><span style="color:#032F62;"> =</span><span style="color:#032F62;"> tab</span></span>
<span class="line"><span style="color:#6A737D;"># 缩进的空格数</span></span>
<span class="line"><span style="color:#6F42C1;">indent_size</span><span style="color:#032F62;"> =</span><span style="color:#005CC5;"> 2</span></span>
<span class="line"><span style="color:#6A737D;"># 结尾换行符，可选lf、cr、crlf</span></span>
<span class="line"><span style="color:#6F42C1;">end_of_line</span><span style="color:#032F62;"> =</span><span style="color:#032F62;"> lf</span></span>
<span class="line"><span style="color:#6A737D;"># 在文件结尾插入新行</span></span>
<span class="line"><span style="color:#6F42C1;">insert_final_newline</span><span style="color:#032F62;"> =</span><span style="color:#005CC5;"> true</span></span>
<span class="line"><span style="color:#6A737D;"># 删除一行中的前后空格</span></span>
<span class="line"><span style="color:#6F42C1;">trim_trailing_whitespace</span><span style="color:#032F62;"> =</span><span style="color:#005CC5;"> true</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 表示仅 md 文件适用以下规则</span></span>
<span class="line"><span style="color:#24292E;">[</span><span style="color:#D73A49;">*</span><span style="color:#24292E;">.md]</span></span>
<span class="line"><span style="color:#6F42C1;">trim_trailing_whitespace</span><span style="color:#032F62;"> =</span><span style="color:#005CC5;"> false</span></span>
<span class="line"><span style="color:#6A737D;"># 关闭最大行长度限制</span></span>
<span class="line"><span style="color:#6F42C1;">max_line_length</span><span style="color:#032F62;"> =</span><span style="color:#032F62;"> off</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 表示仅 ts、js、vue、css 文件适用以下规则</span></span>
<span class="line"><span style="color:#24292E;">[</span><span style="color:#D73A49;">*</span><span style="color:#24292E;">.{ts,js,vue,css}]</span></span>
<span class="line"><span style="color:#6F42C1;">indent_style</span><span style="color:#032F62;"> =</span><span style="color:#032F62;"> space</span></span>
<span class="line"><span style="color:#6F42C1;">indent_size</span><span style="color:#032F62;"> =</span><span style="color:#005CC5;"> 2</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 表示仅 html 文件适用以下规则</span></span>
<span class="line"><span style="color:#24292E;">[</span><span style="color:#D73A49;">*</span><span style="color:#24292E;">.html]</span></span>
<span class="line"><span style="color:#6F42C1;">indent_style</span><span style="color:#032F62;"> =</span><span style="color:#032F62;"> space</span></span>
<span class="line"><span style="color:#6F42C1;">indent_size</span><span style="color:#032F62;"> =</span><span style="color:#005CC5;"> 2</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 表示仅 json 文件适用以下规则</span></span>
<span class="line"><span style="color:#24292E;">[</span><span style="color:#D73A49;">*</span><span style="color:#24292E;">.json]</span></span>
<span class="line"><span style="color:#6F42C1;">indent_style</span><span style="color:#032F62;"> =</span><span style="color:#032F62;"> space</span></span>
<span class="line"><span style="color:#6F42C1;">indent_size</span><span style="color:#032F62;"> =</span><span style="color:#005CC5;"> 2</span></span></code></pre></div><h2 id="参考资料" tabindex="-1">参考资料 <a class="header-anchor" href="#参考资料" aria-label="Permalink to &quot;参考资料&quot;">​</a></h2><ul><li><a href="https://editorconfig.org" target="_blank" rel="noreferrer">EditorConfig.org</a></li><li><a href="https://learn.microsoft.com/zh-cn/visualstudio/ide/create-portable-custom-editor-options" target="_blank" rel="noreferrer">使用 EditorConfig 定义一致的编码样式</a></li></ul>`,13)]))}const f=n(o,[["render",e]]);export{C as __pageData,f as default};
