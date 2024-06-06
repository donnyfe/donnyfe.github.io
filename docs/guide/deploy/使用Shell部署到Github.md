# 使用Shell部署到Github

在项目根目录创建deploy.sh文件

```sh
#!/usr/bin/env sh
# 确保脚本抛出遇到的错误
set -e

# 生成静态文件
npm run build 

# 进入生成的文件夹
cd docs/.vitepress/dist

git init

git add .

# 读取终端输入的信息
read -p "input commit message: " msg

git commit -m "$msg"

# 推送到指定仓库
git remote add origin https://github.com/xxxxxx.git

# 强制推送覆盖到远程master仓库
git push -f origin master

echo 'push success!'
```
