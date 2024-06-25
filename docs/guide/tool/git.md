# Git使用指南

## 查看配置

```sh
# 
git config

# 查看全局配置
git config --global --list

# 查看项目本地配置
git config --loocal --list
# fatal: --local 只能在一个仓库内使用

# 查看系统级别配置
git config --system --list

```

## 创建用户

> 注：非全局配置，不使用--global

```sh
# 新建用户名
git config --global user.name "user"

# 新建用户邮箱
git config --global user.email "123@qq.com"
```

## 链接远程仓库

```sh
# 创建SSH Key
ssh-keygen -t rsa -C "123@qq.com"

# 使用cat查看公钥
cat .ssh/id_rsa.pub

# 验证本地计算机添加公钥与github账户连接是否成功
ssh -T git@github.com
```

## 常用命令

### 添加文件到Git

```sh
git add file
```

### 提交更改并添加描述

```sh
git commit - m "description"
```

### 查看Git当前状态

```sh
git status
```

### 查看不同点即修改的内容

```sh
git diff
```

### 查看提交历史

命令显示从最近到最远的提交日志

```sh
git log --pretty = oneline # 可选参数
```

```sh
git log
```

```sh
git log --online
```

-n4取最近4个提交历史：

```sh
git log -n4 --online
```

所有分支的提交历史：

```sh
git log --all
```

图形化演变历史:

```sh
git log --all --graph
```

### 版本回退

版本回退HEAD表示当前版本, HEAD ^ 上一个版本, HEAD ^ ^ 表示上上个版本, N个版本表示HEAD~N

```sh
git reset --hard HEAD ^
```

版本回退后查看文件

```sh
​cat file
```

查看命令历史， 用来记录每一次的命令

```sh
git reflog
```

把文件在工作区的修改全部撤销回到最近一次git commit或git add时的状态

```sh
git checkout--file
```

把暂存区的修改撤销掉（ unstage）， 重新放回工作区

```sh
git reset HEAD file
```

rm 'test.txt'

```sh
git rm file
```

从版本库里删除文件需提交， git checkout其实是用版本库里的版本替换工作区的版本

```sh
git commit - m "remove test.txt"

```

本地仓库关联远程仓库

```sh
git remote add origin <https://github.com/bytehi/Repository.git>

git remote add origin [git@github.com](mailto:git@github.com): bytehi/Repository.git
```

常见问题 fata: remote origin alerady exists

```sh
git push - u origin master
```

解决办法:

```sh
git remote rm origin 然后重新关联
```

把本地库的所有内容推送到远程库上， 第一次推送加参数 - u进行分支关联

把远程库克隆到本地库

```sh
git clone git @github.com: bytehi/Repository.git
```

命令可以看到分支合并图

```sh
git log --graph
```

合并dev分支， 请注意--no - ff参数， 表示禁用Fast forward

```sh
git merge--no - ff - m "merge with no-ff" dev
```

合并分支时， 加上--no - ff参数就可以用普通模式合并， 合并后的历史有分支， 能看出来曾经做过合并， 而fast forward合并就看不出来曾经做过合并。

git log看看分支历史

```sh
git log --graph--pretty = oneline--abbrev - commit
```

一次性推送全部尚未推送到远程的本地标签

```sh
git push origin --tags
```

删除远程标签:

先从本地删除

```sh
​git tag -d v0.9
```

再从从远程删除

```sh
git push origin: refs/tags/v0.9
```

### 自定义Git

让Git显示颜色

```sh
git config --global color.ui true
```

## 分支操作

### 创建新分支dev

```sh
git checkout -b dev
```

git checkout命令加上 -b 参数表示创建并切换， 相当于以下两条命令：

```sh
​git checkout dev
git branch dev
```

### 查看当前分支

```sh
​ git branch
```

​

### 在分支上提交

```sh
git commit - m "branch test"
```

### 切换回分支

```sh
git checkout master
```

### 合并指定分支dev到当前分支master

```sh
git merge dev
```

### 删除分支

```sh
git branch -d dev
```

### 强行删除

```sh
git branch - D dev
```

## 标签操作

### 添加标签

语法: git tag < name >

```sh
git tag v1.0
```

### 查看所有标签

```sh
git tag
```

### 查找历史提交的commit id

```sh
git log --pretsty = oneline--abbrev - commit
```

### 过后补打标签

```sh
git tag v0.9 id
```

标签不是按时间顺序列出， 而是按字母排序的。 可以用git show < tagname > 查看标签信息

```sh
git show v0.9
```

创建带说明的标签, -a指定标签名， - m指定说明文字

```sh
git tag -a v0.1 -m "description" id
```

通过 -s用私钥签名一个标签

```sh
git tag -s v0.2 -m "description"
```

### 删除标签

```sh
git tag -d v0.1
```

### 推送标签到远程

```sh
git push origin v1.0
```

## 工作区操作

stash功能， 可以把当前工作现场“ 储藏” 起来， 等以后恢复现场后继续工作

```sh
git stash
```

### 查看工作现场保存所在地

```sh
git stash list
```

### 恢复工作现场

```sh
git stash apply
```

### 删除stash内容

```sh
git stash drop
```

### 恢复工作现场同时删除stash内容

```sh
git stash pop
```

### 恢复指定的stash

```sh
git stash apply stash @ {0}
```

## Git应用

### Git文件名大小写敏感

查看 git 的设置：

```sh
git config --get core.ignorecase
```

git 默认是不区分大小的，因此当你修改了文件名/文件夹的大小写后，git 并不会认为你有修改（git status 不会提示你有修改）

更改设置解决：

```sh
git config core.ignorecase false
```

### GitHub仓库重命名

```sh
# 查看远程仓库地址
git remote -v

# 修改远程仓库地址
git remote set-url origin git@github.com:<username>/<repository>.git
```
