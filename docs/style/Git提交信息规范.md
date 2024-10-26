# 提交信息规范

Git提交信息遵循一致的格式有助于提高可读性，规范目前使用较多的是 [Angular 团队的规范](https://github.com/angular/angular.js/blob/master/DEVELOPERS.md#-git-commit-guidelines) 

它的 message 格式如下:

```js
<type>(<scope>): <subject>
<BLANK LINE>
<body>
<BLANK LINE>
<footer>
```

## message构成说明

- `<type>`（必选）：用于说明 commit 的类型（build|ci|docs|feat|fix|perf|refactor|test）。
- `<scope>`（可选）：用于说明 commit 影响的范围，比如模块名、文件名等。
- `<subject>`（必选）：简短描述 commit 的内容，不超过 50 个字符。
- `<body>`(可选)：详细描述 commit 的内容和变更原因，每行不超过 72 个字符。
- `<footer>`（可选）：通常包含BreakingChange信息和关联的issue编号

## type类型

- feat：新功能（feature）
- fix：修补bug
- docs：文档修改
- style： 代码格式修改
- refactor：代码重构
- test：测试用例修改
- chore：构建过程或辅助工具的变动
- perf: 提升性能

