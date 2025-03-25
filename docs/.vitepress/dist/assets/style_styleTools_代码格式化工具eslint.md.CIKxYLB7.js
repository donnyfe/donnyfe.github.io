import{_ as n,c as a,o as l,ag as p}from"./chunks/framework.DPDPlp3K.js";const E=JSON.parse('{"title":"eslint","description":"","frontmatter":{},"headers":[],"relativePath":"style/styleTools/代码格式化工具eslint.md","filePath":"style/styleTools/代码格式化工具eslint.md"}'),o={name:"style/styleTools/代码格式化工具eslint.md"};function e(t,s,c,r,y,i){return l(),a("div",null,s[0]||(s[0]=[p(`<h1 id="eslint" tabindex="-1">eslint <a class="header-anchor" href="#eslint" aria-label="Permalink to &quot;eslint&quot;">​</a></h1><h2 id="依赖" tabindex="-1">依赖 <a class="header-anchor" href="#依赖" aria-label="Permalink to &quot;依赖&quot;">​</a></h2><ul><li><p>eslint</p></li><li><p>eslint-config-prettier</p></li><li><p>eslint-define-config</p></li><li><p>eslint-plugin-prettier</p></li><li><p>eslint-plugin-vue</p></li><li><p>@typescript-eslint/parser</p></li><li><p>@typescript-eslint/eslint-plugin</p></li></ul><h2 id="安装" tabindex="-1">安装 <a class="header-anchor" href="#安装" aria-label="Permalink to &quot;安装&quot;">​</a></h2><h2 id="配置" tabindex="-1">配置 <a class="header-anchor" href="#配置" aria-label="Permalink to &quot;配置&quot;">​</a></h2><h3 id="package-json" tabindex="-1">package.json <a class="header-anchor" href="#package-json" aria-label="Permalink to &quot;package.json&quot;">​</a></h3><div class="language-json"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki github-light vp-code" tabindex="0"><code><span class="line"><span style="color:#24292E;">{</span></span>
<span class="line"><span style="color:#005CC5;">  &quot;scripts&quot;</span><span style="color:#24292E;">: {</span></span>
<span class="line"><span style="color:#005CC5;">    &quot;lint:eslint&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;eslint --cache --max-warnings 0  </span><span style="color:#005CC5;">\\&quot;</span><span style="color:#032F62;">{src,mock,build}/**/*.{vue,js,ts,tsx}</span><span style="color:#005CC5;">\\&quot;</span><span style="color:#032F62;"> --fix&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-light vp-code" tabindex="0"><code><span class="line"><span style="color:#6A737D;">// eslint v9+</span></span>
<span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> js </span><span style="color:#D73A49;">from</span><span style="color:#032F62;"> &quot;@eslint/js&quot;</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> pluginVue </span><span style="color:#D73A49;">from</span><span style="color:#032F62;"> &quot;eslint-plugin-vue&quot;</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#D73A49;">import</span><span style="color:#005CC5;"> *</span><span style="color:#D73A49;"> as</span><span style="color:#24292E;"> parserVue </span><span style="color:#D73A49;">from</span><span style="color:#032F62;"> &quot;vue-eslint-parser&quot;</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> configPrettier </span><span style="color:#D73A49;">from</span><span style="color:#032F62;"> &quot;eslint-config-prettier&quot;</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> pluginPrettier </span><span style="color:#D73A49;">from</span><span style="color:#032F62;"> &quot;eslint-plugin-prettier&quot;</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> { defineFlatConfig } </span><span style="color:#D73A49;">from</span><span style="color:#032F62;"> &quot;eslint-define-config&quot;</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#D73A49;">import</span><span style="color:#005CC5;"> *</span><span style="color:#D73A49;"> as</span><span style="color:#24292E;"> parserTypeScript </span><span style="color:#D73A49;">from</span><span style="color:#032F62;"> &quot;@typescript-eslint/parser&quot;</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> pluginTypeScript </span><span style="color:#D73A49;">from</span><span style="color:#032F62;"> &quot;@typescript-eslint/eslint-plugin&quot;</span><span style="color:#24292E;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">export</span><span style="color:#D73A49;"> default</span><span style="color:#6F42C1;"> defineFlatConfig</span><span style="color:#24292E;">([</span></span>
<span class="line"><span style="color:#24292E;">  {</span></span>
<span class="line"><span style="color:#D73A49;">    ...</span><span style="color:#24292E;">js.configs.recommended,</span></span>
<span class="line"><span style="color:#24292E;">    ignores: [</span></span>
<span class="line"><span style="color:#032F62;">      &quot;**/.*&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#032F62;">      &quot;dist/*&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#032F62;">      &quot;*.d.ts&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#032F62;">      &quot;public/*&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#032F62;">      &quot;src/assets/**&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#032F62;">      &quot;src/**/iconfont/**&quot;</span></span>
<span class="line"><span style="color:#24292E;">    ],</span></span>
<span class="line"><span style="color:#24292E;">    languageOptions: {</span></span>
<span class="line"><span style="color:#24292E;">      globals: {</span></span>
<span class="line"><span style="color:#6A737D;">        // index.d.ts</span></span>
<span class="line"><span style="color:#24292E;">        RefType: </span><span style="color:#032F62;">&quot;readonly&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        EmitType: </span><span style="color:#032F62;">&quot;readonly&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        TargetContext: </span><span style="color:#032F62;">&quot;readonly&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        ComponentRef: </span><span style="color:#032F62;">&quot;readonly&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        ElRef: </span><span style="color:#032F62;">&quot;readonly&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        ForDataType: </span><span style="color:#032F62;">&quot;readonly&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        AnyFunction: </span><span style="color:#032F62;">&quot;readonly&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        PropType: </span><span style="color:#032F62;">&quot;readonly&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        Writable: </span><span style="color:#032F62;">&quot;readonly&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        Nullable: </span><span style="color:#032F62;">&quot;readonly&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        NonNullable: </span><span style="color:#032F62;">&quot;readonly&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        Recordable: </span><span style="color:#032F62;">&quot;readonly&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        ReadonlyRecordable: </span><span style="color:#032F62;">&quot;readonly&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        Indexable: </span><span style="color:#032F62;">&quot;readonly&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        DeepPartial: </span><span style="color:#032F62;">&quot;readonly&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        Without: </span><span style="color:#032F62;">&quot;readonly&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        Exclusive: </span><span style="color:#032F62;">&quot;readonly&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        TimeoutHandle: </span><span style="color:#032F62;">&quot;readonly&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        IntervalHandle: </span><span style="color:#032F62;">&quot;readonly&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        Effect: </span><span style="color:#032F62;">&quot;readonly&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        ChangeEvent: </span><span style="color:#032F62;">&quot;readonly&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        WheelEvent: </span><span style="color:#032F62;">&quot;readonly&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        ImportMetaEnv: </span><span style="color:#032F62;">&quot;readonly&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        Fn: </span><span style="color:#032F62;">&quot;readonly&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        PromiseFn: </span><span style="color:#032F62;">&quot;readonly&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        ComponentElRef: </span><span style="color:#032F62;">&quot;readonly&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        parseInt: </span><span style="color:#032F62;">&quot;readonly&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        parseFloat: </span><span style="color:#032F62;">&quot;readonly&quot;</span></span>
<span class="line"><span style="color:#24292E;">      }</span></span>
<span class="line"><span style="color:#24292E;">    },</span></span>
<span class="line"><span style="color:#24292E;">    plugins: {</span></span>
<span class="line"><span style="color:#24292E;">      prettier: pluginPrettier</span></span>
<span class="line"><span style="color:#24292E;">    },</span></span>
<span class="line"><span style="color:#24292E;">    rules: {</span></span>
<span class="line"><span style="color:#D73A49;">      ...</span><span style="color:#24292E;">configPrettier.rules,</span></span>
<span class="line"><span style="color:#D73A49;">      ...</span><span style="color:#24292E;">pluginPrettier.configs.recommended.rules,</span></span>
<span class="line"><span style="color:#032F62;">      &quot;no-debugger&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;off&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#032F62;">      &quot;no-unused-vars&quot;</span><span style="color:#24292E;">: [</span></span>
<span class="line"><span style="color:#032F62;">        &quot;error&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        {</span></span>
<span class="line"><span style="color:#24292E;">          argsIgnorePattern: </span><span style="color:#032F62;">&quot;^_&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">          varsIgnorePattern: </span><span style="color:#032F62;">&quot;^_&quot;</span></span>
<span class="line"><span style="color:#24292E;">        }</span></span>
<span class="line"><span style="color:#24292E;">      ],</span></span>
<span class="line"><span style="color:#032F62;">      &quot;prettier/prettier&quot;</span><span style="color:#24292E;">: [</span></span>
<span class="line"><span style="color:#032F62;">        &quot;error&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        {</span></span>
<span class="line"><span style="color:#24292E;">          endOfLine: </span><span style="color:#032F62;">&quot;auto&quot;</span></span>
<span class="line"><span style="color:#24292E;">        }</span></span>
<span class="line"><span style="color:#24292E;">      ]</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">  },</span></span>
<span class="line"><span style="color:#24292E;">  {</span></span>
<span class="line"><span style="color:#24292E;">    files: [</span><span style="color:#032F62;">&quot;**/*.?([cm])ts&quot;</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&quot;**/*.?([cm])tsx&quot;</span><span style="color:#24292E;">],</span></span>
<span class="line"><span style="color:#24292E;">    languageOptions: {</span></span>
<span class="line"><span style="color:#24292E;">      parser: parserTypeScript,</span></span>
<span class="line"><span style="color:#24292E;">      parserOptions: {</span></span>
<span class="line"><span style="color:#24292E;">        sourceType: </span><span style="color:#032F62;">&quot;module&quot;</span></span>
<span class="line"><span style="color:#24292E;">      }</span></span>
<span class="line"><span style="color:#24292E;">    },</span></span>
<span class="line"><span style="color:#24292E;">    plugins: {</span></span>
<span class="line"><span style="color:#032F62;">      &quot;@typescript-eslint&quot;</span><span style="color:#24292E;">: pluginTypeScript</span></span>
<span class="line"><span style="color:#24292E;">    },</span></span>
<span class="line"><span style="color:#24292E;">    rules: {</span></span>
<span class="line"><span style="color:#D73A49;">      ...</span><span style="color:#24292E;">pluginTypeScript.configs.strict.rules,</span></span>
<span class="line"><span style="color:#032F62;">      &quot;@typescript-eslint/ban-types&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;off&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#032F62;">      &quot;@typescript-eslint/no-redeclare&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;error&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#032F62;">      &quot;@typescript-eslint/ban-ts-comment&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;off&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#032F62;">      &quot;@typescript-eslint/no-explicit-any&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;off&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#032F62;">      &quot;@typescript-eslint/prefer-as-const&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;warn&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#032F62;">      &quot;@typescript-eslint/no-empty-function&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;off&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#032F62;">      &quot;@typescript-eslint/no-non-null-assertion&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;off&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#032F62;">      &quot;@typescript-eslint/no-import-type-side-effects&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;error&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#032F62;">      &quot;@typescript-eslint/explicit-module-boundary-types&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;off&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#032F62;">      &quot;@typescript-eslint/consistent-type-imports&quot;</span><span style="color:#24292E;">: [</span></span>
<span class="line"><span style="color:#032F62;">        &quot;error&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        { disallowTypeAnnotations: </span><span style="color:#005CC5;">false</span><span style="color:#24292E;">, fixStyle: </span><span style="color:#032F62;">&quot;inline-type-imports&quot;</span><span style="color:#24292E;"> }</span></span>
<span class="line"><span style="color:#24292E;">      ],</span></span>
<span class="line"><span style="color:#032F62;">      &quot;@typescript-eslint/prefer-literal-enum-member&quot;</span><span style="color:#24292E;">: [</span></span>
<span class="line"><span style="color:#032F62;">        &quot;error&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        { allowBitwiseExpressions: </span><span style="color:#005CC5;">true</span><span style="color:#24292E;"> }</span></span>
<span class="line"><span style="color:#24292E;">      ],</span></span>
<span class="line"><span style="color:#032F62;">      &quot;@typescript-eslint/no-unused-vars&quot;</span><span style="color:#24292E;">: [</span></span>
<span class="line"><span style="color:#032F62;">        &quot;error&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        {</span></span>
<span class="line"><span style="color:#24292E;">          argsIgnorePattern: </span><span style="color:#032F62;">&quot;^_&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">          varsIgnorePattern: </span><span style="color:#032F62;">&quot;^_&quot;</span></span>
<span class="line"><span style="color:#24292E;">        }</span></span>
<span class="line"><span style="color:#24292E;">      ]</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">  },</span></span>
<span class="line"><span style="color:#24292E;">  {</span></span>
<span class="line"><span style="color:#24292E;">    files: [</span><span style="color:#032F62;">&quot;**/*.d.ts&quot;</span><span style="color:#24292E;">],</span></span>
<span class="line"><span style="color:#24292E;">    rules: {</span></span>
<span class="line"><span style="color:#032F62;">      &quot;eslint-comments/no-unlimited-disable&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;off&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#032F62;">      &quot;import/no-duplicates&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;off&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#032F62;">      &quot;unused-imports/no-unused-vars&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;off&quot;</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">  },</span></span>
<span class="line"><span style="color:#24292E;">  {</span></span>
<span class="line"><span style="color:#24292E;">    files: [</span><span style="color:#032F62;">&quot;**/*.?([cm])js&quot;</span><span style="color:#24292E;">],</span></span>
<span class="line"><span style="color:#24292E;">    rules: {</span></span>
<span class="line"><span style="color:#032F62;">      &quot;@typescript-eslint/no-require-imports&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;off&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#032F62;">      &quot;@typescript-eslint/no-var-requires&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;off&quot;</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">  },</span></span>
<span class="line"><span style="color:#24292E;">  {</span></span>
<span class="line"><span style="color:#24292E;">    files: [</span><span style="color:#032F62;">&quot;**/*.vue&quot;</span><span style="color:#24292E;">],</span></span>
<span class="line"><span style="color:#24292E;">    languageOptions: {</span></span>
<span class="line"><span style="color:#24292E;">      globals: {</span></span>
<span class="line"><span style="color:#24292E;">        $: </span><span style="color:#032F62;">&quot;readonly&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        $$: </span><span style="color:#032F62;">&quot;readonly&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        $computed: </span><span style="color:#032F62;">&quot;readonly&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        $customRef: </span><span style="color:#032F62;">&quot;readonly&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        $ref: </span><span style="color:#032F62;">&quot;readonly&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        $shallowRef: </span><span style="color:#032F62;">&quot;readonly&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        $toRef: </span><span style="color:#032F62;">&quot;readonly&quot;</span></span>
<span class="line"><span style="color:#24292E;">      },</span></span>
<span class="line"><span style="color:#24292E;">      parser: parserVue,</span></span>
<span class="line"><span style="color:#24292E;">      parserOptions: {</span></span>
<span class="line"><span style="color:#24292E;">        ecmaFeatures: {</span></span>
<span class="line"><span style="color:#24292E;">          jsx: </span><span style="color:#005CC5;">true</span></span>
<span class="line"><span style="color:#24292E;">        },</span></span>
<span class="line"><span style="color:#24292E;">        extraFileExtensions: [</span><span style="color:#032F62;">&quot;.vue&quot;</span><span style="color:#24292E;">],</span></span>
<span class="line"><span style="color:#24292E;">        parser: </span><span style="color:#032F62;">&quot;@typescript-eslint/parser&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        sourceType: </span><span style="color:#032F62;">&quot;module&quot;</span></span>
<span class="line"><span style="color:#24292E;">      }</span></span>
<span class="line"><span style="color:#24292E;">    },</span></span>
<span class="line"><span style="color:#24292E;">    plugins: {</span></span>
<span class="line"><span style="color:#24292E;">      vue: pluginVue</span></span>
<span class="line"><span style="color:#24292E;">    },</span></span>
<span class="line"><span style="color:#24292E;">    processor: pluginVue.processors[</span><span style="color:#032F62;">&quot;.vue&quot;</span><span style="color:#24292E;">],</span></span>
<span class="line"><span style="color:#24292E;">    rules: {</span></span>
<span class="line"><span style="color:#D73A49;">      ...</span><span style="color:#24292E;">pluginVue.configs.base.rules,</span></span>
<span class="line"><span style="color:#D73A49;">      ...</span><span style="color:#24292E;">pluginVue.configs[</span><span style="color:#032F62;">&quot;vue3-essential&quot;</span><span style="color:#24292E;">].rules,</span></span>
<span class="line"><span style="color:#D73A49;">      ...</span><span style="color:#24292E;">pluginVue.configs[</span><span style="color:#032F62;">&quot;vue3-recommended&quot;</span><span style="color:#24292E;">].rules,</span></span>
<span class="line"><span style="color:#032F62;">      &quot;no-undef&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;off&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#032F62;">      &quot;no-unused-vars&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;off&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#032F62;">      &quot;vue/no-v-html&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;off&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#032F62;">      &quot;vue/require-default-prop&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;off&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#032F62;">      &quot;vue/require-explicit-emits&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;off&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#032F62;">      &quot;vue/multi-word-component-names&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;off&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#032F62;">      &quot;vue/no-setup-props-reactivity-loss&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;off&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#032F62;">      &quot;vue/html-self-closing&quot;</span><span style="color:#24292E;">: [</span></span>
<span class="line"><span style="color:#032F62;">        &quot;error&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        {</span></span>
<span class="line"><span style="color:#24292E;">          html: {</span></span>
<span class="line"><span style="color:#24292E;">            void: </span><span style="color:#032F62;">&quot;always&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">            normal: </span><span style="color:#032F62;">&quot;always&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">            component: </span><span style="color:#032F62;">&quot;always&quot;</span></span>
<span class="line"><span style="color:#24292E;">          },</span></span>
<span class="line"><span style="color:#24292E;">          svg: </span><span style="color:#032F62;">&quot;always&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">          math: </span><span style="color:#032F62;">&quot;always&quot;</span></span>
<span class="line"><span style="color:#24292E;">        }</span></span>
<span class="line"><span style="color:#24292E;">      ]</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"><span style="color:#24292E;">]);</span></span></code></pre></div><h2 id="忽略配置" tabindex="-1">忽略配置 <a class="header-anchor" href="#忽略配置" aria-label="Permalink to &quot;忽略配置&quot;">​</a></h2><p>在项目根目录新建 .eslintignore 文件，添加忽略文件， 根据实际情况添加指定目录或文件，ESLint 校验会忽略这些文件。</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-light vp-code" tabindex="0"><code><span class="line"><span style="color:#6A737D;">// .eslintignore</span></span>
<span class="line"><span style="color:#24292E;">dist</span></span>
<span class="line"><span style="color:#24292E;">node_modules</span></span>
<span class="line"><span style="color:#24292E;">public</span></span>
<span class="line"><span style="color:#24292E;">.husky</span></span>
<span class="line"><span style="color:#24292E;">.vscode</span></span>
<span class="line"><span style="color:#24292E;">.idea</span></span>
<span class="line"><span style="color:#D73A49;">*</span><span style="color:#24292E;">.sh</span></span>
<span class="line"><span style="color:#D73A49;">*</span><span style="color:#24292E;">.md</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">src</span><span style="color:#D73A49;">/</span><span style="color:#24292E;">assets</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">.eslintrc.cjs</span></span>
<span class="line"><span style="color:#24292E;">.prettierrc.cjs</span></span>
<span class="line"><span style="color:#24292E;">.stylelintrc.cjs</span></span></code></pre></div><h2 id="规则" tabindex="-1">规则 <a class="header-anchor" href="#规则" aria-label="Permalink to &quot;规则&quot;">​</a></h2><h2 id="其他问题" tabindex="-1">其他问题 <a class="header-anchor" href="#其他问题" aria-label="Permalink to &quot;其他问题&quot;">​</a></h2><p>eslint 与 prettier 同时使用会产生冲突问题</p><ul><li>eslint-plugin-prettier</li><li>eslint-config-prettier</li></ul>`,15)]))}const q=n(o,[["render",e]]);export{E as __pageData,q as default};
