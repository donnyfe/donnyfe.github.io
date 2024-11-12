# 1 MySQL 安装运行及配置

## 1.1 MySQL 安装

### 1.1.1 客户端安装

待补充……

### 1.1.2 命令行工具安装

#### homebrew

homebrew 是macOS上的包管理工具，类似于Linux上的apt、yum。

homebrew 安装方式：

```sh
# 安装
brew install mysql

# 启动
brew services start mysql

# 重启
brew services restart mysql

# 停止
brew services stop mysql

# 进入控制台
mysql -uroot root -p123
```

### 1.1.3 Docker-Compose

#### 1.1.3.1 创建配置文件

docker-compose.yml 配置文件：

```yaml
version: '3'
services:
  mysql:
    image: mysql:5.7                                # mysql镜像版本
    container_name: mysql                           # 容器名称
    command:                                        # 容器启动时执行的命令
      --character-set-server=utf8mb4
      --collation-server=utf8mb4_unicode_ci
      --lower-case-table-names=1                    # 忽略数据表名大小写
    restart: always                                 # 跟随docker的启动而启动
    environment:
      MYSQL_ROOT_PASSWORD: root                     # 设置root账号密码
    ports:
      - 3306:3306                                  # 端口映射
    volumes:
      - ./mysql/data:/var/lib/mysql                # 数据文件挂载
      - ./mysql/conf.d:/etc/mysql/conf.d           # 配置文件挂载  
      - ./mysql/log:/var/log/mysql                 # 日志文件挂载
```

#### 1.1.3.2 创建挂载目录

```sh
mkdir -p ./mysql/data \
        ./mysql/conf.d \
        ./mysql/log
```

#### 1.1.3.3 启动服务

```sh
# 启动
docker-compose up -d

# 查看状态
docker-compose ps

# 查看日志
docker-compose logs mysql
```

#### 1.1.3.4 连接测试

```sh
# 进入容器
docker exec -it mysql bash

# 登录MySQL
mysql -uroot -p
# 输入密码root

# 查看数据库
show databases;
```

### 1.1.4 docker

```sh
# 查找镜像
docker search mysql

# 拉取镜像
docker pull mysql
```

## 1.2 MySQL 启动运行

### 1.2.1 查看版本

```sh
mysql -V
mysql --version

# sql语句
select version();
```

### 1.2.2 查看字符集

```sh
# 查看字符集
show variables like "char%";
```

### 1.2.3 修改配置

1. 进入目录/etc/mysql/my.cnf
2. 在`client`和`mysqld`字段下面均添加 `character-set-server=utf8`、`collation-server=utf8_general_ci`
3. 重启服务


变量：

- character_set_server： 默认的内部操作字符集
- character_set_client： 客户端来源数据使用的字符集
- character_set_connection： 连接层字符集
- character_set_results： 查询结果字符集
- character_set_database： 当前选中数据库的默认字符集
- character_set_system： 系统元数据(字段名等)字符集

Docker-compose配置:

```yaml
mysql:
  restart: always
  image: mysql
  container_name: mysql
  ports:
  	- 3306:3306
  volumes:
    - /Users/dong/docker/mysql/config:/etc/mysql/conf.d
    - /Users/dong/docker/mysql/data:/var/lib/mysql
  environment:
    MYSQL_ROOT_PASSWORD: "MYSQL@123"
    MYSQL_DATABASE: "local"
    TZ: "Asia/Shanghai"
  command: [
    --character-set-server=utf8mb4
    --collation-server=utf8mb4_unicode
    --lower-case-table-names=1
  ]
```


## 1.3 MySQL 启动和关闭

### 1.3.1 启动 MySQL

```sh
# 方式1
systemtl start mysqld

# 方式2
mysql.server start

# 方式3
mysqld_safe

# 方式4
mysqld
```

> 备注：
> mysqld_safe 和 mysqld 可以在启动数据库时加入自己执行的参数，如：
> --skip-grant-tables
> --skip-networking
> --defaults-file=/opt/my.cnf

### 1.3.2 关闭 MySQL

关闭 Mysql

```sh

systemctl stop mysqld

service mysqld stop

/etc/init.d/mysqld stop

mysqladmin -uroot -p123 shutdown

mysql -uroot -p123 -e "shutdown"
```

初始化数据：

```sh
xxxx/mysqld \
--initialize-insecure \
--user=mysql \
--datadir=/data/3318/data \
--basedir=/app/database/mysql180
```

## 1.4 初始化配置

### 1.4.1 配置方式

1. 源码安装 ——> 编译过程中设置初始化参数
2. 配置文件 ——> 数据库启动之前，设定配置文件参数（/etc/my.cnf）。定制 mysql 配置功能
3. 启动脚本命令行 ——> mysqld_safe --skip-grant-tables --skip-networking

### 1.4.2 配置文件应用

#### （1）配置文件读取顺序

```sh
# 查看文件读取顺序
mysqld --help --verbose | grep my.cnf

# /etc/my.cnf ——> /etc/mysql/my.cnf ——> /usr/local/etc/my.cnf ——> ~/.my.cnf
```

自定义配置文件位置

```sh
mysqld --defaults-file=/opt/my.cnf
mysqld_safe --defaults-file=/opt/my.cnf
```

#### （2）配置文件书写格式

标签：用来区分不同程序的参数，有：

- 服务器端标签：负责数据库服务端运行参数设定
  - `mysqld`
  - `mysqld_safe`
  - `server` 代表所有服务端

- 客户端标签：只影响本地客户端连接，不影响远程客户端
  - `mysql`
  - `mysqldump`
  - `client` 代表所有客户端

配置参数=xxx

（3）配置文件模板说明

以下是一个生产环境下的MySQL配置文件(my.cnf)模板及说明:

```sh
[client]
# 客户端设置
port = 3306                         # 端口号
socket = /tmp/mysql.sock           # 套接字文件
default-character-set = utf8mb4    # 默认字符集

[mysqld]
# 基础设置
port = 3306
socket = /tmp/mysql.sock
basedir = /usr/local/mysql         # MySQL安装目录
datadir = /data/mysql             # 数据存放目录
pid-file = /data/mysql/mysql.pid
user = mysql                      # 运行用户
bind-address = 0.0.0.0           # 允许连接的IP

# 字符集设置
character-set-server = utf8mb4
collation-server = utf8mb4_general_ci
init_connect = 'SET NAMES utf8mb4'

# 连接设置
max_connections = 1000            # 最大连接数
max_connect_errors = 1000         # 最大错误连接数  
wait_timeout = 600               # 非交互连接超时时间
interactive_timeout = 600        # 交互连接超时时间

# 缓冲区设置
key_buffer_size = 256M          # 索引缓冲区大小
innodb_buffer_pool_size = 4G    # InnoDB缓冲池大小
innodb_log_buffer_size = 32M    # 日志缓冲区大小

# 日志设置
log_error = /data/mysql/error.log                    # 错误日志
slow_query_log = 1                                   # 开启慢查询日志
slow_query_log_file = /data/mysql/slow_query.log     # 慢查询日志位置
long_query_time = 2                                  # 慢查询阈值(秒)

# InnoDB设置
innodb_file_per_table = 1        # 独立表空间
innodb_flush_log_at_trx_commit = 1   # 事务提交时写入磁盘
innodb_flush_method = O_DIRECT   # 文件系统缓存

# 复制设置
server-id = 1                    # 服务器ID
log-bin = /data/mysql/mysql-bin  # 二进制日志
binlog_format = ROW             # 二进制日志格式
sync_binlog = 1                 # 二进制日志同步
```
