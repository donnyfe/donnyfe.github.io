#!/usr/bin/env sh
# 确保脚本抛出遇到的错误
set -e

# 生成静态文件，如果不需要打包构建文件，则注释掉
# npm run build

# 进入生成的文件夹，如果不需要生成文件，则注释掉
# cd docs/.vitepress/dist

# 初始化git，如果不需要初始化，则注释掉
# git init

# 添加文件
git add .

# 读取终端输入的信息
read -p "input commit message: " msg

git commit -m "$msg"

# 推送到指定仓库
# git remote add origin https://github.com/donnyfe/donnyfe.github.io.git

# 推送覆盖到远程main分支
git push -u origin main

echo 'push success!'
