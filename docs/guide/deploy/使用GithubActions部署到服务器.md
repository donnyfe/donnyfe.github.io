# 使用GithubActions部署到服务器

## 目录

- 1 ssh秘钥配置
  - 1.1 创建ssh秘钥
  - 1.2 代码托管仓库配置私钥
  - 1.3 远程服务器配置公钥
  - 1.4 修改ssh秘钥配置文件
- 2 配置GithubActions
- 3 配置Nginx

## 1 ssh秘钥配置

### 1.1 创建ssh秘钥

```sh
# 进入本地ssh目录
cd ~/.ssh

# 格式：ssh-keygen -t rsa -C [注释] -f [路径文件]
ssh-keygen -t rsa -C deployment -f deploy

ssh-keygen -t rsa -C deployment -f ~/.ssh/deploy
```

### 1.2 代码托管仓库配置私钥

1. 进入Github目标仓库，选择Tab【settings】栏目，选择侧边【secrets】栏目
2. 将创建的私钥填入

### 1.3 远端服务器配置公钥

把公钥写进服务器.ssh目录下的authorized_key文件

**方式1：**

```sh
# 使用ssh-copy-id命令,默认使用 22 端口
ssh-copy-id -i ~/.ssh/id_rsa.pub 服务器用户名@服务器地址

# 指定端口号
ssh-copy-id -i ~/.ssh/id_rsa.pub 服务器用户名@服务器地址 -p 服务器端口号
```

**方式2：**

```sh
# 使用scp传输命令
scp deployment.pub root@xxx.xxx.xxx.xxx:.
```

登录远端服务器，将公钥内容写入授权文件，进入.ssh文件夹，查看是否有authorized_keys文件,若没有则创建一个;

```sh
# 连接远程服务器并输入密码
ssh root@xxx.xxx.xxx.xxx

# 访问.ssh文件夹
cd .ssh

# 查看文件列表
ls -la

# 将公钥内容写入authorized_keys文件
cat deployment.pub >> ~/.ssh/authorized_keys
```

参考文档：[ECS实例数据传输的实现方式](https://help.aliyun.com/document_detail/51935.html?spm=a2c4g.11186623.2.14.227f21e8MFcqoh)

### 1.4 修改秘钥配置文件

修改/etc/.ssh目录下的sshd_config配置文件

```sh
# 开启远程登录权限
PermitRootLogin yes

AuthorizedKeysFile .ssh/authorized_keys
```

::: warning

**注意：此步骤缺失，会令GithubActions访问远程服务器目录权限不足导致代码部署失败**

如Github Actions异常：

stderr:  Warning: Permanently added '***' (ECDSA) to the list of known hosts.

Load key "/home/runner/.ssh/deploy_key": invalid format
:::

## 2 配置GithubActions

主要步骤：

1. 进入Github目标项目代码仓库
2. 选择【actions】-【Continuous integration workflows】-【Node.js】
3. 在右侧面板【marketspace】搜索ssh-deploy并复制配置信息补充yml配置文件

**yml配置文件**

```sh
# This workflow will do a clean install of node dependencies, build the source code and run tests across different versions of node
# For more information see: https://help.github.com/actions/language-and-framework-guides/using-nodejs-with-github-actions

name: VuePress CI/CD

on:
  push:
    branches: [ docs ]
  # pull_request:
  #   branches: [ docs ]

jobs:
  build:

    runs-on: ubuntu-latest

    strategy:
      matrix:
        node-version: [14.x]

    steps:
    - uses: actions/checkout@v2
    - name: Use Node.js ${{ matrix.node-version }}
      uses: actions/setup-node@v1
      with:
        node-version: ${{ matrix.node-version }}
    - run: npm ci
    - run: npm run buildcd --if-present
    
    # 部署阿里云
    - name: SSH Deploy Server
      uses: easingthemes/ssh-deploy@v2.1.5
      with:
        SSH_PRIVATE_KEY: ${{ secrets.SSH_DEPLOY_KEY }}
        REMOTE_HOST: ${{ secrets.SSH_HOST }}
        REMOTE_USER: ${{ secrets.SSH_USER }}
        REMOTE_PORT: ${{ secrets.SSH_PORT }}
        SOURCE: docs/.vuepress/dist
        TARGET: ${{ secrets.TARGET }}
        # Arguments to pass to rsync
        ARGS: "-avzr --delete"
```

## 3 配置Nginx

### 3.1 主配置文件nginx.conf

```sh
# 访问nignx配置目录
cd /etc/nginx

# 查看nginx配置
cat nginx.conf

# 编辑配置文件
vi /etc/nginx/nginx.conf
```

nginx.conf配置文件

```nginx
user  root;
worker_processes  1;

error_log  /var/log/nginx/error.log warn;
pid        /var/run/nginx.pid;


events {
    worker_connections  1024;
}


http {
    include       /etc/nginx/mime.types;
    default_type  application/octet-stream;

    log_format  main  '$remote_addr - $remote_user [$time_local] "$request" '
                      '$status $body_bytes_sent "$http_referer" '
                      '"$http_user_agent" "$http_x_forwarded_for"';

    access_log  /var/log/nginx/access.log  main;

    sendfile        on;
    #tcp_nopush     on;

    keepalive_timeout  65;

    gzip  on;
    gzip_min_length 1k;
    gzip_buffers 4 16k;
    gzip_http_version 1.0;
    gzip_comp_level 2;
    gzip_types text/plain application/x-javascript text/css application/xml;
    gzip_var on;

    # 加载子配置文件
    include /etc/nginx/conf.d/*.conf;
}
```

### 3.2 子配置文件wefe.cc.conf

修改配置文件

```sh
vi /etc/nginx/conf.d/wefe.cc.conf
```

wefe.cc.conf配置

```nginx
server {
  listen       80;
  server_name  www.wefe.cc;

  #charset koi8-r;
  #access_log  /var/log/nginx/host.access.log  main;

  location /docs/ {
      alias /root/docs/dist/;
      index  index.html index.htm;
  }

  #error_page  404              /404.html;

  # redirect server error pages to the static page /50x.html
  #
  error_page   500 502 503 504  /50x.html;
  location = /50x.html {
      root   /usr/share/nginx/html;
  }
}
```

### 3.3 nginx相关操作

```sh
# 查看nginx进程号
ps -ef | grep nginx

# 查看端口号
netstat -tlnp

# 查看80端口
netstat -nlp | grep :80
```

```sh
# 启动nginx
nginx

# 重启nginx
nginx -s reload

# 停止nginx
# 从容停止
kill -QUIT 主进程号

# 快速停止
kill -TERM 主进程号

# 强制停止
kill -9 nginx
```

```sh
# 检查nginx配置语法
nginx -t -c /etc/nginx/nginx.conf
```

查看日志

```sh
# 访问nginx日志目录
cd /var/log/nginx

# 查看日志
cat /var/log/nginx/access.log

cat /var/log/nginx/error.log
```

启动nginx

```sh

# 启动nginx服务
systemctl start nginx.service

# 设置开机自启动
systemctl enable nginx.service

# 停止开机自启动
systemctl disable nginx.service

# 查看服务当前状态
systemctl status nginx.service

# 重新启动服务
systemctl restart nginx.service

# 查看所有已启动的服务
systemctl list-units --type=service
```

### 3.4 nginx常见问题

403 Forbidden

- <https://www.cnblogs.com/lxwphp/p/11124633.html>
- <https://www.linuxprobe.com/nginx-403-forbidden.html>
