# tree

[教程文档](https://www.runoob.com/linux/linux-comm-tree.html)

## 安装

macOS: 使用Homebrew安装

```sh
brew install tree
```

## 基本命令

```sh
# 查看帮助文档
tree --help

# 只显示目录
tree -d

# 显示2级目录
tree -L 2

# 过滤指定目录
tree -I "node_modules|dist"
```

## 示例

- 输出当前文件夹不包含`node_modules`和`dist`路径下的其他文件
- 输出三层
- 将输出文件保存到文件`file_structure`

```sh
tree -L 3 -I "node_modules|dist" >> file_structure 
```
