import{_ as a,c as n,o as l,ag as e}from"./chunks/framework.DPDPlp3K.js";const u=JSON.parse('{"title":"prettier","description":"","frontmatter":{},"headers":[],"relativePath":"style/styleTools/代码格式化工具prettier.md","filePath":"style/styleTools/代码格式化工具prettier.md"}'),p={name:"style/styleTools/代码格式化工具prettier.md"};function o(t,s,r,c,i,y){return l(),n("div",null,s[0]||(s[0]=[e(`<h1 id="prettier" tabindex="-1">prettier <a class="header-anchor" href="#prettier" aria-label="Permalink to &quot;prettier&quot;">​</a></h1><ul><li><a href="https://stylelint.io/user-guide/get-started" target="_blank" rel="noreferrer">官方文档</a></li><li><a href="https://prettier.io/playground/" target="_blank" rel="noreferrer">playground</a></li></ul><h2 id="配置解析" tabindex="-1">配置解析 <a class="header-anchor" href="#配置解析" aria-label="Permalink to &quot;配置解析&quot;">​</a></h2><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-light vp-code" tabindex="0"><code><span class="line"><span style="color:#005CC5;">module</span><span style="color:#24292E;">.</span><span style="color:#005CC5;">exports</span><span style="color:#D73A49;"> =</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#6A737D;">  // (x)=&gt;{},单个参数箭头函数是否显示小括号。(always:始终显示;avoid:省略括号。默认:always)</span></span>
<span class="line"><span style="color:#24292E;">  arrowParens: </span><span style="color:#032F62;">&quot;always&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#6A737D;">  // 开始标签的右尖括号是否跟随在最后一行属性末尾，默认false</span></span>
<span class="line"><span style="color:#24292E;">  bracketSameLine: </span><span style="color:#005CC5;">false</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#6A737D;">  // 对象字面量的括号之间打印空格 (true - Example: { foo: bar } ; false - Example: {foo:bar})</span></span>
<span class="line"><span style="color:#24292E;">  bracketSpacing: </span><span style="color:#005CC5;">true</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#6A737D;">  // 是否格式化一些文件中被嵌入的代码片段的风格(auto|off;默认auto)</span></span>
<span class="line"><span style="color:#24292E;">  embeddedLanguageFormatting: </span><span style="color:#032F62;">&quot;auto&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#6A737D;">  // 指定 HTML 文件的空格敏感度 (css|strict|ignore;默认css)</span></span>
<span class="line"><span style="color:#24292E;">  htmlWhitespaceSensitivity: </span><span style="color:#032F62;">&quot;css&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#6A737D;">  // 当文件已经被 Prettier 格式化之后，是否会在文件顶部插入一个特殊的 @format 标记，默认false</span></span>
<span class="line"><span style="color:#24292E;">  insertPragma: </span><span style="color:#005CC5;">false</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#6A737D;">  // 在 JSX 中使用单引号替代双引号，默认false</span></span>
<span class="line"><span style="color:#24292E;">  jsxSingleQuote: </span><span style="color:#005CC5;">false</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#6A737D;">  // 每行最多字符数量，超出换行(默认80)</span></span>
<span class="line"><span style="color:#24292E;">  printWidth: </span><span style="color:#005CC5;">120</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#6A737D;">  // 超出打印宽度 (always | never | preserve )</span></span>
<span class="line"><span style="color:#24292E;">  proseWrap: </span><span style="color:#032F62;">&quot;preserve&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#6A737D;">  // 对象属性是否使用引号(as-needed | consistent | preserve;默认as-needed:对象的属性需要加引号才添加;)</span></span>
<span class="line"><span style="color:#24292E;">  quoteProps: </span><span style="color:#032F62;">&quot;as-needed&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#6A737D;">  // 是否只格式化在文件顶部包含特定注释(@prettier| @format)的文件，默认false</span></span>
<span class="line"><span style="color:#24292E;">  requirePragma: </span><span style="color:#005CC5;">false</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#6A737D;">  // 结尾添加分号</span></span>
<span class="line"><span style="color:#24292E;">  semi: </span><span style="color:#005CC5;">false</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#6A737D;">  // 使用单引号 (true:单引号;false:双引号)</span></span>
<span class="line"><span style="color:#24292E;">  singleQuote: </span><span style="color:#005CC5;">true</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#6A737D;">  // 缩进空格数，默认2个空格</span></span>
<span class="line"><span style="color:#24292E;">  tabWidth: </span><span style="color:#005CC5;">2</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#6A737D;">  // 元素末尾是否加逗号，默认es5: ES5中的 objects, arrays 等会添加逗号，TypeScript 中的 type 后不加逗号</span></span>
<span class="line"><span style="color:#24292E;">  trailingComma: </span><span style="color:#032F62;">&quot;es5&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#6A737D;">  // 指定缩进方式，空格或tab，默认false，即使用空格</span></span>
<span class="line"><span style="color:#24292E;">  useTabs: </span><span style="color:#005CC5;">false</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#6A737D;">  // vue 文件中是否缩进 &lt;style&gt; 和 &lt;script&gt; 标签，默认 false</span></span>
<span class="line"><span style="color:#24292E;">  vueIndentScriptAndStyle: </span><span style="color:#005CC5;">false</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">};</span></span></code></pre></div><h2 id="忽略配置" tabindex="-1">忽略配置 <a class="header-anchor" href="#忽略配置" aria-label="Permalink to &quot;忽略配置&quot;">​</a></h2><p>根目录新建 <code>.prettierignore</code> 文件，根据实际开发需要添加忽略内容，常见默认忽略内容如下：</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-light vp-code" tabindex="0"><code><span class="line"><span style="color:#24292E;">dist</span></span>
<span class="line"><span style="color:#24292E;">node_modules</span></span>
<span class="line"><span style="color:#24292E;">public</span></span>
<span class="line"><span style="color:#24292E;">.husky</span></span>
<span class="line"><span style="color:#24292E;">.vscode</span></span>
<span class="line"><span style="color:#24292E;">.idea</span></span>
<span class="line"><span style="color:#D73A49;">*</span><span style="color:#24292E;">.sh</span></span>
<span class="line"><span style="color:#D73A49;">*</span><span style="color:#24292E;">.md</span></span></code></pre></div>`,7)]))}const E=a(p,[["render",o]]);export{u as __pageData,E as default};
