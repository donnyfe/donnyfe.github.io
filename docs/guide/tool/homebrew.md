# Homebrew

## 基本命令

```sh
# 简洁命令帮助
​brew --help

# 完整命令帮助
man brew

# 搜索软件包
brew search package

# 安装软件包
brew install package

# 卸载软件
brew uninstall package

# 升级软件
brew upgrade package

# 升级brew
sudo brew update

# 查看安装信息(经常用到, 比如查看安装目录等)
sudo brew info package

# 查看已经安装的软件
brew ls
brew list

# 访问软件包官方站
brew home package

# 清理所有已安装软件包的历史老版本
brew cleanup

# 清理单个已安装软件包的历史版本
brew cleanup package
```

## 镜像源

- 官方源：
  - brew.git：<https://github.com/Homebrew/brew.git>
  - homebrew-core.git：<https://github.com/Homebrew/homebrew-core.git>
- 中科大镜像源：
  - brew.git：<https://mirrors.ustc.edu.cn/brew.git>
  - homebrew-core.git：<https://mirrors.ustc.edu.cn/homebrew-core.git>
- 清华大学镜像源：
  - brew.git：<https://mirrors.tuna.tsinghua.edu.cn/git/homebrew/brew.git>
  - homebrew-core.git：<https://mirrors.tuna.tsinghua.edu.cn/git/homebrew/homebrew-core.git>
- 阿里云镜像源：<https://developer.aliyun.com/mirror/homebrew>

### 更换镜像源

```sh
# 替换brew.git:
git -C "$(brew --repo)" remote set-url origin https://mirrors.tuna.tsinghua.edu.cn/git/homebrew/brew.git

# 替换homebrew-core.git:
git -C "$(brew --repo homebrew/core)" remote set-url origin https://mirrors.tuna.tsinghua.edu.cn/git/homebrew/homebrew-core.git

# 应用生效
brew update


# 替换homebrew-bottles:
# bash用户
echo 'export HOMEBREW_BOTTLE_DOMAIN=https://mirrors.tuna.tsinghua.edu.cn/homebrew-bottles' >> ~/.bash_profile
source ~/.bash_profile
# zsh用户
echo 'export HOMEBREW_BOTTLE_DOMAIN=https://mirrors.tuna.tsinghua.edu.cn/homebrew-bottles' >> ~/.zshrc

# 更新zsh配置文件
source ~/.zshrc
```

## 常见问题

### homebrew-bottles

tar: Error opening archive: Failed to open

```sh
unset HOMEBREW_BOTTLE_DOMAIN
```
