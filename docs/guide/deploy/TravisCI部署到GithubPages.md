
# TravisCI部署

## 1. 创建并配置.travis.yml文件

在项目根目录配置个文件叫 .travis.yml,打包项目以vuepress为例，内容如下：

```sh
# see: https://docs.travis-ci.com/user/languages/javascript-with-nodejs/
language: node_js
os:
  - linux
node_js:
  - lts/*
cache:
  - yarn
script:
  - yarn deploy
deploy:
  provider: pages
  strategy: git
  cleanup: true
  local_dir: docs/.vuepress/dist
  # 在 GitHub 中生成，用于允许 Travis 向你的仓库推送代码。在 Travis 的项目设置页面进行配置，设置为 secure variable
  token: $GITHUB_TOKEN
  keep_history: true
  on:
    branch: master
```

## 2. 创建部署脚本

在跟目录下创建部署脚本deploy.sh

```sh
# !/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

# 安装依赖
pnpm install

# 生成静态文件
pnpm build

# 进入生成的文件夹
cd docs/.vitepress/dist

# 如果是发布到自定义域名
# echo 'www.example.com' > CNAME

git init
git add -A
git commit -m 'deploy'

# 如果发布到 https://<USERNAME>.github.io
# git push -f git@github.com:<USERNAME>/<USERNAME>.github.io.git master

# 如果发布到 https://<USERNAME>.github.io/<REPO>
# git push -f git@github.com:<USERNAME>/<REPO>.git master:gh-pages

# 如果使用 travis 持续集成
git push -f https://${GITHUB_TOKEN}@github.com/bytehi/bytehi.github.io.git master


cd -
```

## 3. 添加脚本指令

在根目录下的package.json文件中添加scripts脚本指令

```js
{
  "scripts": {
    "push": "bash deploy.sh"
  }
}
```
