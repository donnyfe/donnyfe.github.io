
# lint-staged

- [lint-staged官方文档](https://www.npmjs.com/package/lint-staged)

## 作用

在git工作暂存区筛选出仅发生变更的文件

## 基本配置

### 安装

```sh
pnpm add -D lint-staged
```

### 配置

在package.json 中添加下面内容

```json
{
  "lint-staged": {
    "*.{js,jsx,ts,tsx}": [
      "eslint --fix",
      "prettier --write"
    ],
    "{!(package)*.json,*.code-snippets,.!(browserslist)*rc}": [
      "prettier --write--parser json"
    ],
    "package.json": [
      "prettier --write"
    ],
    "*.vue": [
      "eslint --fix",
      "prettier --write",
      "stylelint --fix"
    ],
    "*.{scss,less,styl,html}": [
      "stylelint --fix",
      "prettier --write"
    ],
    "*.md": [
      "prettier --write"
    ]
  }
}
```
