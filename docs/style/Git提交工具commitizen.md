
# commitizen

commitizen 是一个用来生成提交信息的工具，它可以在提交时提供一个交互式的界面，让我们按照规范填写提交信息的各个部分，比如类型、范围、主题、正文、页脚等。commitizen 可以与 commitlint 配合使用，保证生成的提交信息符合规范。使用 commitizen 可以让我们的提交信息更加方便、快捷、一致。

## 安装

```sh
pnpm add -D commitizen cz-conventional-changelog
```

## 初始化

执行下面命令

```sh
pnpx commitizen init cz-conventional-changelog --pnpm --save-dev --save-exact
```

命令执行完后，在package.json中会多出一段配置

```js
{
  "config": {
    "commitizen": {
        "path": "./node_modules/cz-conventional-changelog"
    }
  }
}
```

在 package.json 的 scripts 里添加一条脚本命令

```json
{
  "scripts": {
    "commit": "git add . && git-cz"
  }
}
```
