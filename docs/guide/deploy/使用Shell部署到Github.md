# 使用Shell部署到Github

## 1.创建shell脚本

在项目根目录创建deploy.sh文件


### shell脚本完整示例

```sh
#!/usr/bin/env sh
# 确保脚本抛出遇到的错误
set -e

# 生成静态文件
npm run build

# 进入生成的文件夹
cd docs/.vitepress/dist

# 初始化git仓库，如果已经初始化，则跳过
# git init

# 添加文件
git add .

# 读取终端输入的信息
read -p "input commit message: " msg

git commit -m "$msg"

# 推送到指定仓库
git remote add origin https://github.com/xxxxxx.git

# 推送到远程main分支
git push origin main

echo 'push success!'
```


## 2.添加部署命令

在package.json中添加部署命令

```json
"scripts": {
  "deploy": "sh deploy.sh"
}
```
