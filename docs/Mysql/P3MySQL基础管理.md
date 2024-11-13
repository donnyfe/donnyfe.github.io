# MySQL基础管理

MySQL 基础管理主要分四个部分：

- 用户管理
- 权限管理
- 重置密码
- 连接管理

## 用户管理

### 用户的作用

- 登录 MySQL 数据库
- 管理 MySQL 对象

### 用户的定义

白名单：地址列表，运行白名单的 IP 登录 MySQL，管理 MySQL

- `donny@'localhost'`：donny用户能够本地登录 MySQL（socket）
- `donny@'10.0.0.10'`：donny用户能够通过 10.0.0.10 远程登录 MySQL 服务器
- `donny@'10.0.0.%`：donny用户能够通过 10.0.0.xx 远程登录 MySQL 服务器

### 用户管理

```sh
# 创建用户
create user donny@'localhost';

# 创建用户并且设置密码
create user donny@'192.168.1.59' identified by 'MYSQL@123';

# 查寻用户信息
select user,host,authentication_string from mysql.user;
```

常见问题，如：

异常提示：Your password does not satisfy the current policy requirements

解决：

```sh
# 1、查看密码策略
SHOW VARIABLES LIKE 'validate_password%';

 3、修改密码验证等级
set global validate_password_policy=LOW;

# 3、设置密码长度
set global validate_password_length=6;

# 修改用户密码
alter user donny@'localhost' identified by '456';

# 删除用户
drop user donny@'localhost';
```

### 用户登录

```sh
# 格式：mysql -u[用户名] -p[密码]
mysql -uroot -p123
```

## 权限管理

### 权限的作用

用户对数据库对象有哪些管理能力

### 表现方式

```sh
# 查看权限列表
show privileges;
```

### 授权、回收权限操作

8.0 以前授权语法：

```sh
# 8.0 以前语法
grant 权限,权限2,权限3 on 对象 to 用户 identified by '密码'
```

8.0+授权语法（先创建用户后授权）：

```sh
# 先创建用户
grent user 用户 identified by '密码'

# 再对用户授权
garnt 权限,权限2,权限3 on 对象 to 用户
```

权限：

- All： 管理员
- 具体权限：普通用户（业务用户、开发用户）
- `grant option`：给别的用户授权

对象：库，表

```sh
# 等同于 chmod -R 755 /  管理员
*.*

# 等同于 chmod -R 755 /donny 普通用户
donny.*

# 等同于 chmod -R 755 /donny/ti
donny.ti
```

##### 创建用户并授权

**超级管理员级别授权：**

```sh
grant all on *.* to donny@'10.0.0.0' identified by 'Mysql@123' with grant option
```

含义：
- `grant all`: 授予所有权限
- `on *.*`: 作用于所有数据库的所有对象(表、视图等)
- `to donny@'10.0.0.0'`: 授权给用户donny,且该用户只能从IP 10.0.0.0访问。
- `identified by 'Mysql@123'`: 设置该用户密码为 Mysql@123
- `with grant option`: 允许该用户将自己拥有的权限授权给其他用户


**普通用户级别授权：**

```sh
grant create,update,select,insert,delete on donny.* to donny@'10.0.0.0' identified by 'Mysql@123'
```

含义：
- `grant create,update,select,insert,delete`: 授予创建、更新、查询、插入、删除权限
- `on donny.*`: 作用于donny数据库的所有对象(表、视图等)
- `to donny@'10.0.0.0'`: 授权给用户donny,且该用户只能从IP 10.0.0.0访问。
- `identified by 'Mysql@123'`: 设置该用户密码为 Mysql@123


##### 查询用户权限

```sh
# 查询指定用户权限
show grants for donny@'localhost'

# 查询用户表并使用\G 格式化信息
select * from mysql.user\G
```

扩展：

MySQL 授权表：

- user: `*.*`
- db: `donny.*`
- Tables_prov: `donny.ti`
- Columns_prov：列

##### 回收权限

MySQl 不能通过重复授权修改权限，只能通过回收权限后，重新授权。

```sh
revoke create on donny.* from donny@'10.0.0.0'
```



## MySQL 重置密码

- 跳过授权表
- 跳过 TCP/IP 连接

1. 关闭数据库
2. 使用安全模式启动
3. 登录数据库并修改密码
4. 重启数据库到正常模式

```sh
/etc/init.d/mysqld stop

systemctl start mysqld --skip-grant-tables

systemctl restart mysqld --skip-grant-tables
```

```sh
# 查看 mysqld_safe 路径
which mysqld_safe

# 启动数据库
mysqld_safe --skip-grant-tables
```


#### 重置密码实例

##### 1、修改配置文件

在配置文件末尾， 新添一行添加 `skip-grant-tables`。

```sh
# 查看配置文件
cat /usr/local/etc/my.cnf

# 修改配置文件
vim /usr/local/etc/my.cnf
```

> ​ Default Homebrew MySQL server config
>
> `[mysqld]`
>
> ​ Only allow connections from localhost
>
> bind-address = 127.0.0.1

#### 3、重置密码

```sh
# 重启服务
brew services restart mysql

# 登录mysql, 空格跳过验证
mysql -uroot -p

# 进入命令模式
use mysql;

# 清空密码
update user set authentication_string=''  where user='root';

# 刷新
flush privileges;

# 重置密码
alter user 'root'@'localhost' identified by 'Mysql@123';

# 再次刷新
flush privileges;

# 退出mysql命令模式
quit;

# 退出命令窗
exit;
```

##### 3、恢复配置文件

删除配置文件末尾的` skip-grant-tables`， 恢复`my.cnf`配置文件。



# MySQL 连接管理

###.1 自带客户端

##### mysql

连接参数列表：

- `-u`：代表用户名
- `-p`：代表密码
- `-S`：代表本地 socket 文件位置
- `-h`：代表数据库 IP 地址
- `-P`：代表数据库端口号
- `-e`：代表免交互执行数据库命令
- `<`：代表导入 sql 脚本

##### Socket

​前提：数据库中必须实现授权 donny@'localhost'用户

```sh
# 登录方式：
mysql -udonny -p123 -S /tmp/mysql.sock

mysql -udonny -p -S /tmp/mysql.sock

mysql -p123 -S /tmp/mysql.sock

mysql

mysql -uroot -p123
```

##### tcpIP

前提： 必须创建好可以远程连接的用户

```sh
# 不加-P参数，默认3306端口
mysql -udonny -p123 -h 10.0.0.1 -P 3306
```

例子：

```sh
# 创建本地用户donny
# 注意：8.0+必须先creat user 再grant权限
grant all on *.* to donny@'localhost' identified by 'donny@123';

# 登录测试
mysql -udonny -p123 -S /tmp/mysql.sock

```

Mysqldump 备份工具

Mysqladmin 管理工具

### 远程客户端程序

数据库客户端：
- Navicat

### 程序连接

- node：npm install mysql2
- python：pip3 install pymysql

# 初始化配置

### 配置方式

1、源码安装——>编译过程中设置初始化参数

2、配置文件——>数据库启动之前，设定配置文件参数（/etc/my.cnf）。定制 mysql 配置功能

3、启动脚本命令行——> mysqld_safe --skip-grant-tables --skip-networking

###.2 配置文件应用

（1）配置文件读取顺序

```sh
# 查看文件读取顺序
mysqld --help --verbose |grep my.cnf

# /etc/my.cnf ——> /etc/mysql/my.cnf ——> /usr/local/etc/my.cnf ——> ~/.my.cnf
```

自定义配置文件位置

```sh
mysqld --defaults-file=/opt/my.cnf
mysqld_safe --defaults-file=/opt/my.cnf
```

（2）配置文件书写格式

标签：用来区分不同程序的参数，有：

- 服务器端标签：负责数据库服务端运行参数设定
  - `mysqld`
  - `mysqld_safe`
  - `server` 代表所有服务端

- 客户端标签：只影响本地客户端连接，不影响远程客户端
  - `mysql`
  - `mysqldump`
  - `client` 代表所有客户端

# MySQL 启动和关闭

### 启动 MySQL

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

### 关闭 MySQL

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
