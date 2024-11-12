# 2 MySQL 体系结构

## 2.1 MySQL 客户端/服务器工作模型（C/S）

### 本地 socket 连接方式

特点：只能在本地使用，不依赖与 IP 和端口，性能较好

- Socket 文件位置: `/tmp/mysql.sock`
- 连接命令:

```sh
mysql -S /tmp/mysql.sock
```


### TCP/IP 连接

特点:可跨主机访问,依赖网络环境

- 支持远程连接
- 连接命令:

```sh
# 格式
mysql -h <host> -P <port> -u <user> -p<password>

# 示例
mysql -h 127.0.0.1 -P 3306 -u root -pMysql123
```

## 2.2 实例

服务器端：
- 实例组成：mysqld 进程 + 工作线程 + 预分配的内存结构
- 数据管理、权限验证、SQL 执行等
- 一个实例可以管理多个数据库

## 2.3 MySQL 的程序结构/工作原理


MySQL 采用三层架构:

### Server 层
1. 连接层功能:
   - 提供连接协议(socket、TCP/IP)
   - 用户认证与授权
   - 提供专用连接线程,转发 SQL 到 SQL 层
   - 连接状态管理(show processlist)

2. SQL 层功能:
   - 语法检查:检查 SQL 语句格式
   - 语义检查:支持 DDL、DCL、DML、DTL 等类型
   - 权限检查:验证用户对数据库对象的操作权限
   - 查询解析:生成执行计划(全表扫描/索引扫描)
   - 查询优化:选择最优执行方案
   - 查询执行:按优化后的计划执行 SQL
   - 查询缓存:query_cache默认关闭,建议使用 Redis 替代
   - 日志记录:binlog(主从复制)、慢查询日志等

### 存储引擎层

与磁盘进行交互，负责数据存储和提取,支持多种存储引擎(InnoDB、MyISAM等),存储结构为:
- 段(表):由多个区组成
- 区(簇):默认 1MB,连续 64 个页
- 页:默认 16KB，连续的 4 个 OS block，最小 I/O 单元

### 文件系统层
操作系统提供的文件存储


**连接状态管理示例**

客户端

```sh
# 进入Server层—>连接层
mysql -uroot -p123 -h 0.0.0.0 -P3306

# 显示mysql连接层的连接状态
> show processlist;

# 查看用户信息
select user,host from mysql.user;
```


## 2.4 MySQL 的逻辑结构

自上而下的层次结构:
- 数据库(Database):
  - 库名
  - 库属性(字符集、排序规则等)
- 数据表(Table):
  - 表名
  - 表属性(存储引擎、字符集等)
  - 列定义
  - 数据内容
- 数据页(Page)
- 区(Extent)
- 段(Segment)

```sh
# 查看数据库名
show databases;

# 使用库
use db_name

# 查看所有数据表
show tables;

# 查看表结构
desc table_name;
```

## 2.5 MySQL 的物理存储结构

存储引擎层采用分层存储:
- 段(Segment):表空间的组成单位，一个表（段），可以由 1 个或多个区构成
- 区(Extent):默认 1MB,连续 64 个页
- 页(Page):默认 16KB, 连续的 4 个 OS block, 基本 I/O 单位
- 行(Row):实际存储的数据记录


## 2.6 MySQL 性能优化重点

核心优化方向:
1. 索引优化:
   - 合理设计索引
   - 避免索引失效
   - 控制索引数量

2. I/O 优化:
   - 合理配置缓冲池
   - 优化查询减少 I/O
   - 使用合适的存储引擎

3. 配置优化:
   - 内存参数调优
   - 并发参数调优
   - 日志参数调优

## 2.7 相关技术

- NoSQL 数据库:
  - MongoDB:文档数据库
  - Redis:键值存储
  - Elasticsearch:搜索引擎

- RDS(关系型数据库服务):
  - AWS RDS
  - 阿里云 RDS
  - 腾讯云 RDS
