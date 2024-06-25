
# husky

- [husky官方文档](https://typicode.github.io/husky/)

Husky是一个用于设置Githooks（钩子）的工具，是一个帮助开发者更方便配置 git hooks 的第三方库。它允许开发者在Git操作前或后执行自定义的脚本。这些脚本可以用来执行各种任务，比如代码格式化、代码质量检查、单元测试等，从而帮助团队保持一致的代码质量和开发流程。

## 作用

它的主要用途是：

1、执行预提交（pre-commit）钩子：当执行git commit命令时，Husky可以在提交前执行指定的脚本。这样可以在提交代码之前执行一些任务，比如代码格式化、代码风格检查、单元测试等，确保提交的代码质量。

2、执行其他Git钩子：除了预提交钩子外，Husky还可以执行其他的Git钩子，比如pre-push（推送前）、post-merge（合并后）等，以便在相应的Git操作前或后执行指定的任务。

## 基本配置

### 安装

```sh
pnpm add -D husky 
```

### 初始化

husky在进行初始化时，husky 主要将在项目跟目录下创建.husky目录文件夹，并将 git hooks 的配置位置从项目根目录`.git/hooks/`转移到了项目根目录下的`.husky`目录中。

v9

执行初始化命令

```sh
pnpx husky init
```

or

```sh
pnpm exec husky init
```

执行命令后会自动创建 .husky/_/pre-commit 文件

pre-commit内容如下：

```sh
pnpm test
```

### 配置commit-msg钩子

```sh
npx --no-install commitlint --edit "$1"
```

当在git中提交修改文件后将触发git hook(pre-commit)钩子函数，然后执行pnpm lint脚本任务， lint为package.json中scripts属性配置的脚本指令

参考示例：

```js
{
  scripts: {
    "lint:eslint": "eslint --cache --max-warnings 0  \"{src,mock,build}/**/*.{vue,js,ts,tsx}\" --fix",
    "lint:prettier": "prettier --write  \"src/**/*.{js,ts,json,tsx,css,scss,vue,html,md}\"",
    "lint": "pnpm lint:eslint && pnpm lint:prettier
  }
}
```
