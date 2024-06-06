
# yarn 依赖包管理工具

- [Yarn2官方文档](https://www.yarnpkg.cn/cli/install)
- [Yarn1官方文档](https://yarn.bootcss.com/docs/cli/)

## 升级yarn

```sh
npm install --global yarn

yarn self-update

# In order to update your version of Yarn, run
​curl --compressed -o- -L <https://yarnpkg.com/install.sh> | bash
```

## 基本命令

```sh
# 查看版本
​yarn version

​yarn versions

# 查看帮助
​yarn help

# 初始化一个新项目
​yarn init

# 安装项目的全部依赖
​yarn

​yarn install

# 添加依赖包
​yarn add package

​yarn add package@version

​yarn add package@tag

# 将依赖添加到 devDependencies 类别
​yarn add package --dev

# 将依赖添加到 peerDependencies 类别
​yarn add package --peer

# 将依赖添加到 optionalDependencies 类别
​yarn add package --optional

# 升级依赖包
yarn upgrade package

yarn upgrade package@version

yarn upgrade package@tag

# 移除依赖包
​yarn remove package

# 清楚缓存
​yarn cache clean package

# 执行scripts脚本
yarn run script

# 查看安装包信息
yarn info react

yarn info react@1.0.0

# 查看安装包所有版本
yarn info react versions
```
