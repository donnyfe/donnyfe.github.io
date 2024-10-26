# EditorConfig

使用 EditorConfig 配置可以帮助团队保持一致的代码风格，对所有人实施一致的编码样式。

EditConfig 文件设置遵循 [EditorConfig.org](https://editorconfig.org) 维护的文件格式规范。

## 配置

通常在项目根目录中添加 `.editorconfig` 文件, 如果使用VSCode 编辑器需要安装一款`EditorConfig for VS Code`插件才能使配置生效。

插件的作用是用`.editorconfig`文件中的设置覆盖用户/工作区设置。

其他编辑器如WebStorm等已经内置了EditorConfig支持，无需额外安装插件。

常见配置：

```sh
# http://editorconfig.org
root = true

[*]  
charset = utf-8
end_of_line = lf
indent_style = tab
insert_final_newline = true
trim_trailing_whitespace = false

[*.md]
max_line_length = off
```

## 配置模板参考

```sh
# 表示是最顶层的配置文件，发现设为true时，才会停止查找.editorconfig文件
root = true

# 表示所有文件适用
[*]
# 设置字符集
charset = utf-8
# 缩进风格，可选space、tab
indent_style = tab
# 缩进的空格数
indent_size = 2
# 结尾换行符，可选lf、cr、crlf
end_of_line = lf
# 在文件结尾插入新行
insert_final_newline = true
# 删除一行中的前后空格
trim_trailing_whitespace = true

# 表示仅 md 文件适用以下规则
[*.md]
trim_trailing_whitespace = false
# 关闭最大行长度限制
max_line_length = off

# 表示仅 ts、js、vue、css 文件适用以下规则
[*.{ts,js,vue,css}]
indent_style = space
indent_size = 2

# 表示仅 html 文件适用以下规则
[*.html]
indent_style = space
indent_size = 2

# 表示仅 json 文件适用以下规则
[*.json]
indent_style = space
indent_size = 2
```


## 参考资料

- [EditorConfig.org](https://editorconfig.org)
- [使用 EditorConfig 定义一致的编码样式](https://learn.microsoft.com/zh-cn/visualstudio/ide/create-portable-custom-editor-options)
