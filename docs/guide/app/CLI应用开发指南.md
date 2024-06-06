# CLI应用开发指南

## 2.1 初始化项目

```sh
# 创建项目目录
mkdir dove-cli && cd dove-cli

# 初始化package.json
yarn init -y
```

添加 bin/index.js

```sh
#!/usr/bin/env node
```

## 2.2 安装依赖

- inquirer：用询问式的语句，与用户进行交互，接收参数
- commander：接收命令行传入的参数
- download-git-repo：下载Git项目
- ora：等待交互
- chalk：色彩更丰富的输出信息
- shelljs：
  - 文件操作
  - 一些项目文件，不需要修改，只用直接copy。可以使用`shelljs.copySync`同步方式生成。
  - 一些文件夹，需要提前构建，可以使用`shelljs.mkdir`进行创建

```sh
yarn add commander download-git-repo inquirer ora
```

## 常用命令

> 注：创建完账号需要登录邮箱查看 npm 邮件，进行邮箱验证，否则会遇到 403 发布失败的问题

```sh
# 创建账号(首次发布)
npm adduser

# 登录
npm login

# 发布
npm publish

# 撤销发布, 删除某个版本
npm unpublish we-cli@1.0.0

# 删除整个 npm 市场的包
npm unpublish we-cli --force

# 提示警告
# 如：npm deprecate we-cli '这个包我已经不再维护了～'
npm deprecate <pkg>[@<version>] <message>
# 注：使用这个命令，并不会在社区里撤销你已有的包，但会在任何人尝试安装这个包的时候得到警告

```

## 参考资料

- [一步步教你完成一个自己的脚手架并且发布到 npm](https://www.yuque.com/no-bug/blog/xcglks)

- [NodeJs 交互式命令行工具 Inquirer.js - 开箱指南](https://juejin.im/entry/5937c73cac502e0068cf1171)

- [Vue-cli 原理分析](https://juejin.im/post/5b592db551882536e5178ce6)
