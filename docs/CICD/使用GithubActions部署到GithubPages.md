# 使用GithubActions部署到GithubPages

示例应用: viteperss

## 新加token

操作路径：

1. 在Github个人信息中选择settings
2. 选择Developer Settings
3. Personal access tokens下选择Fine-grained tokens
4. 点击Generate new token

## 使用token

1. 项目设置settings
2. 选择Secrets and variables中的actions
3. 点击New repository secret

## 创建*.yml配置文件

在github上搜索github-pages-deploy-action并根据文档进行配置

然后在项目根目录下创建 `.github/workflows/deploy.yml` 文件

```yml
name: VitePress CI/CD
on:
  push:
    branches:
      - main
permissions:
  contents: write
jobs:
  build-and-deploy:
    concurrency: ci-${{ github.ref }} # Recommended if you intend to make multiple deployments in quick succession.
    runs-on: ubuntu-latest
    strategy:
      matrix:
        node-version: [20]
    steps:
      # 检出源码
      - name: Checkout
        uses: actions/checkout@v4
      
      # 安装pnpm
      - name: Install pnpm
      uses: pnpm/action-setup@v3
      with:
        version: 9
      
      # 使用指定node版本
      - name: Use Node.js ${{ matrix.node-version }}
      uses: actions/setup-node@v4
      with:
        node-version: ${{ matrix.node-version }}
        cache: 'pnpm'

      # 安装依赖
      - name: Install and Build
      - run: pnpm install
      - run: pnpm run build

      # 部署到gh-pages
      - name: Deploy
        uses: JamesIves/github-pages-deploy-action@v4
        with:
          ACCESS_TOKEN: ${{ secrets.ACCESS_TOKEN }}
          BRANCH: gh-pages
          FOLDER: docs/.vitepress/dist
```

## 提交代码

将应用代码提交到github远程仓库，Github发现项目中存在`.github/workflows/*.yml`配置文件时，将触发GithubActions并根据配置文件执行相应的操作实现部署
