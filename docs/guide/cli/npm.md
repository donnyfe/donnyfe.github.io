# npm 依赖包管理工具

[官方文档](https://docs.npmjs.com)

## 常用命令

```sh
# 搜索包
npm search

# 初始化npm包
npm init

# 初始化为组织，包名结构如@vue/cli-service
npm init --scope=@vue

# 安装包
npm install [npm i]

# 卸载包
npm uninstall [npm rm]

# 查看包的版本信息
npm outdated

# 更新包
npm update

# 查看包信息
npm view

# 查看包的依赖
npm ls <pkg>

# 唤起浏览器打开包的官方文档
npm docs vite

# 查看是否登录
npm whoami

# 登录npm
npm login
```

## 版本管理

### 版本类型

```sh
npm version [<newversion> | major | minor | patch | premajor | preminor | 
prepatch | prerelease | from-git]
```

- major：主版本号（大版本）
- minor：次版本号（小更新）
- patch：补丁号（补丁）
- premajor：预备主版本
- preminor: 预备次版本
- prepatch：预备补丁版本
- prerelease：预发布版本

### 更改版本

如初始版本为 1.0.0，执行相关类型命令后，对应的语意为：

```sh
# 如果上一次发布版本为1.0.0
npm version patch # 升级小版本，为1.0.1,表示小的bug修复
npm version minor # 升级中版本，为1.1.0, 表示新增一些小功能
npm version major # 升级大版本，为2.0.0, 表示大的版本或大升级
npm version preminor # 1.1.0-0 后面多了个0，表示预发布
```

## 发布

```sh
npm publish

# 根据 npm 规则，@后的 org/repo 名称默认是私库（收费），所以 publish 时需要说明本次发布是到公共域。
npm publish --access public
```

## 撤销

加 --force参数强制撤销发布

```sh
npm unpublish package --force
```

注意事项：

由于撤销发布会让把要撤销的包作为依赖的包不能正常工作，所以npm官方对包的撤销是有限制的：

1. 不允许撤销发布已经超过24小时的包（`unpublish is only allowed with versions published in the last 24 hours`）
2. 如果在24小时内确实要撤销，需要加--force参数
3. 即使撤销了发布的包，再次发布的时候也不能与之前被撤销的包的名称/版本其中之一相同，因为这两者构成的唯一性已经被占用，官方并没有随着撤销而删除

### 废弃包

这个命令，并不会在npm上里撤销已有的包，但会在任何人尝试安装这个包的时候得到deprecated的警告

```sh
npm deprecate <pkg>[@<version>] <message>
```

## Package.json配置

[package.json](https://docs.npmjs.com/cli/v10/configuring-npm/package-json)
