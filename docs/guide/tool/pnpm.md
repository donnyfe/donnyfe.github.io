# Pnpm 依赖包管理工具

[官方文档](https://pnpm.io/motivation)

## 常用命令

```sh
#安装软件包及其依赖的任何软件包 如果workspace有配置会优先从workspace安装
pnpm add <pkg>
#安装项目所有依赖
pnpm install
#更新软件包的最新版本
pnpm update
#移除项目依赖
pnpm remove
#运行脚本
pnpm run
#创建一个 package.json 文件
pnpm init
#以一个树形结构输出所有的已安装package的版本及其依赖
pnpm list

```

## 场景应用

在 workspace 模式下，pnpm 主要通过 --filter 选项过滤子模块，实现对各个工作空间进行精细化操作的目的。

### 指定模块安装外部依赖

示例：为 pkg-a 包安装 lodash 外部依赖

```sh
pnpm i -S lodash --filter pkg-a // 生产依赖
pnpm i -D lodash --filter pkg-a // 开发依赖
```

### 内部模块之间的互相依赖安装

示例：为 pkg-a 包安装内部依赖 pkg-b。

```sh
// 为 pkg-a 模块安装 pkg-b 模块
pnpm i -S pkg-b --filter pkg-a

```

## 根目录下构建子包

在项目根目录下执行 pnpm run build 来对 packages 目录下的每个子包进行构建

```sh
pnpm -r --filter=./packages/* run build
```

单独构建子包

```sh
pnpm -r --filter=./packages/pkgc run build
```
