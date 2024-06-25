
# commitlint

- [commitlint官方文档](https://commitlint.js.org)

commitlint 是一个用来检查提交信息是否符合规范的工具，它可以在提交前或者提交后对提交信息进行校验，如果不符合规范，就会给出提示或者拒绝提交。commitlint 支持多种规范，比如 Angular 规范、Conventional Commits 规范等，也可以自定义规范。使用 commitlint 可以让我们的提交信息更加规范、清晰、有意义。

## 安装

```sh
pnpm add -D @commitlint/{cli,config-conventional}
```

## 配置

执行echo指令，在项目根目录下创建配置文件：

```sh
echo "export default { extends: ['@commitlint/config-conventional'] };" > commitlint.config.js
```
