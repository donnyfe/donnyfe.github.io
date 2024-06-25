# Standard Version

Standard Version 是一个用来管理版本号和发布流程的工具，它可以根据提交信息自动更新版本号、生成更新日志（changelog）、创建标签（tag）、推送代码等。Standard Version 遵循语义化版本（Semantic Versioning）的原则，即使用三位数字表示版本号（major.minor.patch），并根据提交信息的类型来决定版本号的增加方式。使用 Standard Version 可以让我们的版本号更加有意义、可追踪、可预测，并且可以简化我们的发布流程。

## 基本配置与使用

### 安装

```sh
pnpm add --D standard-version
```

### 配置

在package.json中添加script脚本

```json
{
  "scripts": {
    "release": "standard-version"
  }
}
```

默认情况下，standard-version 只会在 CHANGELOG.md 中记录 feat 和 fix 类型的提交。如果想记录其他类型的提交，需要如下步骤：

在项目的根目录下创建一个名为 .versionrc 的文件，并粘贴复制以下内容：

```js
{
  "header": "# 更新记录 \n\n",
  "types": [
    { "type": "feat", "section": "✨ Features | 新功能" },
    { "type": "fix", "section": "🐛 Bug Fixes | Bug 修复" },
    { "type": "init", "section": "🎉 Init | 初始化" },
    { "type": "docs", "section": "📝 Documentation | 文档" },
    { "type": "style", "section": "💄 Styles | 风格", "hidden": true },
    { "type": "refactor", "section": "♻️ Code Refactoring | 代码重构" },
    { "type": "perf", "section": "⚡ Performance Improvements | 性能优化" },
    { "type": "test", "section": "✅ Tests | 测试" },
    { "type": "revert", "section": "⏪ Revert | 回退", "hidden": true },
    { "type": "build", "section": "📦‍ Build System | 打包构建" },
    { "type": "chore", "section": "🚀 Chore | 部署相关" },
    { "type": "ci", "section": "👷 Continuous Integration | CI/CD 配置" }
  ]
}
```

## 使用
dd
