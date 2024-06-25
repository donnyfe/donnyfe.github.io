# EditorConfig

[EditorConfig](https://learn.microsoft.com/zh-cn/visualstudio/ide/create-portable-custom-editor-options)可以强制对使用基本代码的所有人实施一致的编码样式。

EditConfig 文件设置遵循 [EditorConfig.org](https://editorconfig.org) 维护的文件格式规范。

## 配置

在项目中添加 `.editorconfig` 文件, 当使用VSCodeIDE时，还需要安装一款名为`EditorConfig for VS Code`的插件，插件的作用是用`.editorconfig`文件中的设置覆盖用户/工作区设置。

```sh
# http://editorconfig.org
root = true

[*]   # 表示所有文件适用
charset = utf-8   # 设置文件字符集为 utf-8
end_of_line = lf  # 控制换行类型(lf | cr | crlf)
indent_style = tab  # 缩进风格（tab | space）
insert_final_newline = true   # 始终在文件末尾插入一个新行

[*.md]  # 表示仅 md 文件适用以下规则
max_line_length = off   # 关闭最大行长度限制
trim_trailing_whitespace = false  # 关闭末尾空格修剪
```
