import{_ as n,c as a,o as l,ag as p}from"./chunks/framework.DPDPlp3K.js";const h=JSON.parse('{"title":"使用GithubActions部署到GithubPages","description":"","frontmatter":{},"headers":[],"relativePath":"cicd/使用GithubActions部署到GithubPages.md","filePath":"cicd/使用GithubActions部署到GithubPages.md"}'),o={name:"cicd/使用GithubActions部署到GithubPages.md"};function e(t,s,c,r,i,y){return l(),a("div",null,s[0]||(s[0]=[p(`<h1 id="使用githubactions部署到githubpages" tabindex="-1">使用GithubActions部署到GithubPages <a class="header-anchor" href="#使用githubactions部署到githubpages" aria-label="Permalink to &quot;使用GithubActions部署到GithubPages&quot;">​</a></h1><p>示例应用: viteperss</p><h2 id="新加token" tabindex="-1">新加token <a class="header-anchor" href="#新加token" aria-label="Permalink to &quot;新加token&quot;">​</a></h2><p>操作路径：</p><ol><li>在Github个人信息中选择settings</li><li>选择Developer Settings</li><li>Personal access tokens下选择Fine-grained tokens</li><li>点击Generate new token</li></ol><h2 id="使用token" tabindex="-1">使用token <a class="header-anchor" href="#使用token" aria-label="Permalink to &quot;使用token&quot;">​</a></h2><ol><li>项目设置settings</li><li>选择Secrets and variables中的actions</li><li>点击New repository secret</li></ol><h2 id="创建-yml配置文件" tabindex="-1">创建*.yml配置文件 <a class="header-anchor" href="#创建-yml配置文件" aria-label="Permalink to &quot;创建*.yml配置文件&quot;">​</a></h2><p>在github上搜索github-pages-deploy-action并根据文档进行配置</p><p>然后在项目根目录下创建 <code>.github/workflows/deploy.yml</code> 文件</p><div class="language-yml"><button title="Copy Code" class="copy"></button><span class="lang">yml</span><pre class="shiki github-light vp-code" tabindex="0"><code><span class="line"><span style="color:#22863A;">name</span><span style="color:#24292E;">: </span><span style="color:#032F62;">VitePress CI/CD</span></span>
<span class="line"><span style="color:#005CC5;">on</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#22863A;">  push</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#22863A;">    branches</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">      - </span><span style="color:#032F62;">main</span></span>
<span class="line"><span style="color:#22863A;">permissions</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#22863A;">  contents</span><span style="color:#24292E;">: </span><span style="color:#032F62;">write</span></span>
<span class="line"><span style="color:#22863A;">jobs</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#22863A;">  build-and-deploy</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#22863A;">    concurrency</span><span style="color:#24292E;">: </span><span style="color:#032F62;">ci-\${{ github.ref }}</span><span style="color:#6A737D;"> # Recommended if you intend to make multiple deployments in quick succession.</span></span>
<span class="line"><span style="color:#22863A;">    runs-on</span><span style="color:#24292E;">: </span><span style="color:#032F62;">ubuntu-latest</span></span>
<span class="line"><span style="color:#22863A;">    strategy</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#22863A;">      matrix</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#22863A;">        node-version</span><span style="color:#24292E;">: [</span><span style="color:#005CC5;">20</span><span style="color:#24292E;">]</span></span>
<span class="line"><span style="color:#22863A;">    steps</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#6A737D;">      # 检出源码</span></span>
<span class="line"><span style="color:#24292E;">      - </span><span style="color:#22863A;">name</span><span style="color:#24292E;">: </span><span style="color:#032F62;">Checkout</span></span>
<span class="line"><span style="color:#22863A;">        uses</span><span style="color:#24292E;">: </span><span style="color:#032F62;">actions/checkout@v4</span></span>
<span class="line"><span style="color:#24292E;">      </span></span>
<span class="line"><span style="color:#6A737D;">      # 安装pnpm</span></span>
<span class="line"><span style="color:#24292E;">      - </span><span style="color:#22863A;">name</span><span style="color:#24292E;">: </span><span style="color:#032F62;">Install pnpm</span></span>
<span class="line"><span style="color:#22863A;">      uses</span><span style="color:#24292E;">: </span><span style="color:#032F62;">pnpm/action-setup@v3</span></span>
<span class="line"><span style="color:#22863A;">      with</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#22863A;">        version</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">9</span></span>
<span class="line"><span style="color:#24292E;">      </span></span>
<span class="line"><span style="color:#6A737D;">      # 使用指定node版本</span></span>
<span class="line"><span style="color:#24292E;">      - </span><span style="color:#22863A;">name</span><span style="color:#24292E;">: </span><span style="color:#032F62;">Use Node.js \${{ matrix.node-version }}</span></span>
<span class="line"><span style="color:#22863A;">      uses</span><span style="color:#24292E;">: </span><span style="color:#032F62;">actions/setup-node@v4</span></span>
<span class="line"><span style="color:#22863A;">      with</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#22863A;">        node-version</span><span style="color:#24292E;">: </span><span style="color:#032F62;">\${{ matrix.node-version }}</span></span>
<span class="line"><span style="color:#22863A;">        cache</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&#39;pnpm&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">      # 安装依赖</span></span>
<span class="line"><span style="color:#24292E;">      - </span><span style="color:#22863A;">name</span><span style="color:#24292E;">: </span><span style="color:#032F62;">Install and Build</span></span>
<span class="line"><span style="color:#24292E;">      - </span><span style="color:#22863A;">run</span><span style="color:#24292E;">: </span><span style="color:#032F62;">pnpm install</span></span>
<span class="line"><span style="color:#24292E;">      - </span><span style="color:#22863A;">run</span><span style="color:#24292E;">: </span><span style="color:#032F62;">pnpm run build</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">      # 部署到gh-pages</span></span>
<span class="line"><span style="color:#24292E;">      - </span><span style="color:#22863A;">name</span><span style="color:#24292E;">: </span><span style="color:#032F62;">Deploy</span></span>
<span class="line"><span style="color:#22863A;">        uses</span><span style="color:#24292E;">: </span><span style="color:#032F62;">JamesIves/github-pages-deploy-action@v4</span></span>
<span class="line"><span style="color:#22863A;">        with</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#22863A;">          ACCESS_TOKEN</span><span style="color:#24292E;">: </span><span style="color:#032F62;">\${{ secrets.ACCESS_TOKEN }}</span></span>
<span class="line"><span style="color:#22863A;">          BRANCH</span><span style="color:#24292E;">: </span><span style="color:#032F62;">gh-pages</span></span>
<span class="line"><span style="color:#22863A;">          FOLDER</span><span style="color:#24292E;">: </span><span style="color:#032F62;">docs/.vitepress/dist</span></span></code></pre></div><h2 id="提交代码" tabindex="-1">提交代码 <a class="header-anchor" href="#提交代码" aria-label="Permalink to &quot;提交代码&quot;">​</a></h2><p>将应用代码提交到github远程仓库，Github发现项目中存在<code>.github/workflows/*.yml</code>配置文件时，将触发GithubActions并根据配置文件执行相应的操作实现部署</p>`,13)]))}const d=n(o,[["render",e]]);export{h as __pageData,d as default};
