# MySQL 的 SQL 基础

## SQL 介绍

- 结构化查询语言
- 5.7 以后符合 SQL92 严格模式
- 通过 sql_mode 参数来控制

## SQL 类型

### mysql 客户端功能

MySQL 客户端功能自带的功能，通过 help 命令查看

```sh
help;
```

### 服务端功能

MySQL 服务端功能，通过 help contents 命令查看

```sh
help contents;

# 查看具体分类
help Data Types
```

**常用分类：**

- DDL：数据定义语言 Data Definition
- DCL：数据控制语言 Data Control
- DML：数据操作语言 Data Manipulation
- DQL：数据查询语言 Data Query

**全部分类：**

- Account Management
- Administration
- Components
- Compound Statements
- Contents
- Data Definition
- Data Manipulation
- Data Types
- Functions
- Geographic Features
- Help Metadata
- Language Structure
- Plugins
- Storage Engines
- Table Maintenance
- Transactions
- User-Defined Functions
- Utility

## SQL 概念

### sql_mode SQL 模式

作用：规范 SQL 语句书写方式

查看 sql_mode 模式

```sh
select @@sql_mode;
```

**Sql_mode 类型：**

- ONLY_FULL_GROUP_BY,
- STRICT_TRANS_TABLES,
- NO_ZERO_IN_DATE,
- NO_ZERO_DATE,
- ERROR_FOR_DIVISION_BY_ZERO,
- NO_ENGINE_SUBSTITUTION

### 字符集(charset)及校对规则(collation)

#### 字符集

查看字符集

```sh
show charset;
```

字符集：

- utf8：单个字符最多 3 个字节
- utf8mb4：
  - 单个字符最多 4 个字节
  - 支持的编码比 utf8 更多（比如 emoji 字符，1 个字符占 4 个字节）

示例

```sh
# 创建数据库
create database learn;

# 创建数据库指定字符集
create database learn charset utf8mb4;

# 显示数据库
show create database learn;
```

#### 校对规则

也叫排序规则，作用：影响到排序的操作

a
b

A

ab

Ba

查看校对规则

```sh
show collation;
```

查看字符 ASCII 码

```sh
select ASCII('a');
```

### 数据类型

#### 数字类型：整数、小数

**tinyint：**

1B = 8bit = 二进制范围 00000000~11111111 十进制范围 0~255，-128~127

**int：**

4B = 32bit =二进制 32 位 1， 十进制 0~2^32-1, -2^31~2^31-1

**bigint：**

8B = 十进制 0~2^64-1, -2^63~2^63-1

示例：

```sh
use database_name;

# 创建数据表
create table t1(id int, name varchar(64), age tinyint);

# 查看指定数据表
desc t1;
```

#### 字符串类型

1、char：

- 定长字符串类型，最大 255 字符
- 不会判断，立即分配空间

例子：

char： abcde

- 申请空间
- 存字符
- 申请 1 个字节存储长度数字

2、Varchar：

- 变长字符串类型，最大 65535 字符
- 在存储数据时，会先判读字符长度，然后（申请空间）合理分配存储空间
- 除了存储字符串之外，还会额外使用 1-2 字节存储字符长度

例子：

Varchar： abcde

- 判断字符长度
- 申请空间
- 存字符
- 申请 1 个字节存储长度数字

例如：

Char(10)：最多存 10 个字符串，如果不够会自动用空格填充剩余空间，对于磁盘空间都会占用 10 个字符长度

Varchar(10)：最多存 10 个字符，按需分配存储空间

注意：以上数据类型选择需考虑周全，会影响到索引应用

3、应用场景

- 字符串长度固定，使用 char
- 字符串长度不固定，使用 varchar


4、括号中的数字

- 设置的是字符的个数，无关字符类型
- 英文、数字，每个字符占 1 个字节长度
- 对于中文，需要考虑字符集
- Utf8、utf8mb4，每个中文占 3 个字节长度
- 总长度不能超过数据类型的最大长度。

查询某个字符占用字节长度

```sh
select length(n1) from t1;
```

#### 枚举类型

- Enum：枚举类型

#### 时间类型

- DATE：日期
- TIME：时间
- DATETIME：日期时间（8 字节占用空间）
- TIMESTAMP：时间戳（4 字节占用空间）
- YEAR：年

#### 二进制类型

音视频，一般不存 MYSQL 数据库

#### JSON 类型

- JSON：JSON 类型
### 约束

- Primary Key：主键约束，作用：唯一，非空，每张表只能有一个主键，作为聚簇索引。
- Not Null：非空约束，作用：必填，建议每个列都设置非空。
- Unique Key：唯一约束，作用：必须不重复的值
- Unsigned：非负数字

### 其它属性

- Default：默认值
- comment：注释

## SQL 应用

### client

- `\?`：查看帮助
- `\c`：结束上一条命令运行
- `\G`：格式化输出（纵行显示）
- `\q`：退出会话
- `source`： 导入 SQL 脚本，类似于<，数据备份常用
- `system`：调用 linux 命令

### server

#### DDL 数据库定义语言

**（1）库定义：库名、库属性**

[规范](http://sqlstyle.guide/zh/)：

1. 库名：小写，业务相关，非数字开头，库名简短、禁止使用保留字符串
2. 必须制定字符集

创建库

```sh
CREATE DATABASE donny CHARSET utf8mb4;
```


查库

```sh
show database;
```

查看建库的具体信息

```sh
show create database donny;
```

修改库

```sh
alter database donny charset utf8;
```

原则：从小往大的改

删除库

```sh
drop database donny;
```

注意：除了管理员，任何人没有删库权限

**（2）表定义：**

1. 表名，规范同库
2. 必须设置存储引擎和字符集
3. 数据类型：合适、简短，足够

创建表

```sh
# 创建表(user表)
create table user;

# 查询表
show tables;

# 查看表结构
desc user;
```

修改表

```sh
# 添加手机列
alter table donny add column tel bigint not null unique key comment '手机号';

# 修改手机列定义类型
alter table donny modify tel char(11) not null unique key comment '手机号';

# 删除手机列
alter table donny drop tel;
```

删除表

```sh
drop table donny;
```

注意事项：

- 在 MySQL 中，DDL 语句在对标进行操作时，会锁“元数据表”.此时所有修改的命令无法正常运行。
- 尽量避开业务繁忙期间，进行 DDL。
- 建议使用 pt-online-schema-change（pt-osc），gh-ost 工具进行 DDL 操作，降低锁表的影响
- 8.0 版本可以不用 pt 工具

#### DCL 数据控制语言

- grant
- Revoke

#### DML 数据操作语言

作用：对表中数据进行行操作

- inset 应用

```sh
insert into student(id, name, age) values(1, 'donny', 18)
```

简写语法：

```sh
insert into student values(1, 'donny', 18)
```

- update

前提：必须明确要改哪一行，一般 update 语句都有 where 条件，指定某一行，否则修改整列

```sh
update student set name="sl" where id=6;
```

查看

```sh
select * from student;
```

- delete

前提：必须明确要删除哪些行，一般都有 where 条件语句

```sh
delete from student where id=1;
```

**实现伪删除：**

修改表结构，添加 state 状态列

```sh
alter table student add column state tinyint not null default 1;
```

删除数据改为 update

```sh
update student set state=0 where id=1
```

查询语句改为

```sh
 select * from student where state=1;
```

删除全表的方式：

- delete from student;

  - 逻辑上，逐行删除，数据量大，速度慢。
  - 并没有从磁盘上删除，只是在存储层面打标记，磁盘空间不会立即释放。
  - HWM 高水平位线不会降低

- drop table student;

  - 将表结构（元数据）和数据行，从物理层次删除。
  - 只能从备份恢复。

- truncate table student;

  - 清空表段中的所有数据页。
  - 从物理层次删除。
  - 磁盘空间立即释放，HWM 高水平线立即降低。

恢复数据：

- 备份+日志
- 翻转日志 binlog
- 通过延时从库恢复

#### DQL 数据查询语言

- **select**

功能：

1、获取表中的数据行

```sh
select now();

select database();

select version();

select user();

# 信息拼接
select concat(user, '@'， host) from mysql.user;


```

2、计算

```sh
select 10 * 100
```

3、查询数据库的参数


显示 MySQL 中所有参数信息

```sh
show variables;
```

查看 MySQL 中的参数信息

```sh
select @@port;

select @@datadir;

select @@socket;
```

4、标准用法

前提：了解其他字句配合使用

子句（默认执行顺序）：

- select
- from
- where
  - 配合比较判断符合：=，<，>……
- group by
- having
- order by
- limit

单表查询

查询指定列

```sh
# world.city ==> 库名.表名
select name from world.city;

select * from world.city where countrycode="CHN";

select * from world.city where population<1000;
```

- **where**

- **like**

配合 like 语句实现模糊查询

```sh
# 用%代替实现模糊查询
select * from world.city where countrycode like 'CH%'
```

注意：like 语句在使用时，不要出现前面带%的模糊查询，原因是不走索引。

- **and 、or**

```sh
select * from world.city where countrycode='CHN' AND population>5000000;

select * from world.city where countrycod in ('USA', 'CHN') AND population>5000000;
```

- **between and**

```sh
select * from world.city where popullation >= 1000000 and population <= 2000000;

select * from world.city where popullation between 1000000 and 2000000;
```

- **group by**

通常配合聚合函数使用：

- Max()
- min()
- Avg()： 平均值
- Count()：统计个数
- sum()：求和
- Group_concat()：列转行

```sh
# 统计city中每个国家的城市的个数
select countrycode,count(id) from world.city group by countrycode;

# 统计中国，每个省的城市个数
select district,count(id) from world.city where countrycode='CHN' group by district
```

- **having**

having 属于后过滤，需要在 group by + 聚合函数后，再做判断过滤时使用。

```sh
select district,sum(populatino) from world.city
group by district
having sum(population) > 5000000;


select district,sum(populatino) from world.city
group by district
having sum(population) > 5000000
order by sum(population) desc
limit 5 offset 5;
```

#### select 多表联查

多表连接查询类型：

- 笛卡尔乘积

```sh
select * from teacher,course;

select * from teacher join course;
```

- 内连接

```sh
# 内连接示例
select
  city.name as city_name,
  country.name as country_name,
  country.continent
from city
join country
on city.countrycode = country.code
where city.population > 1000000;
```

- 外连接
  - left join： 左表所有数据，右表有满足条件的数据
  - right join：右表所有数据，左表满足条件的数据

示例：

```sh
# left join
select
city.name,
country.name,
country.name
from city
left join country
on city.countrycode = country.code
where city.population < 100
order by city.population desc;
```

备注：多表连接实际是将多张表中，有关联的部分数据，合并成一张新表，在新表中做查询操作。

例子：

**1、找关联表**

City 表:

- 城市名 city.name
- 城市人口 city.population

Country 表:

- 国家名 country.name
- 国土面积 country.surfacearea

**2、找关联条件**

```sh
from city join country
on cirty.countryCode=country.code
```

**3、罗列其它查询条件**

```sh
select city.name,city.population, country.name, country.sufacearea
from city join country
on cirty.countryCode=country.code
where city.name='武汉'
```

##### Select 外连接

作用： 强制驱动表

驱动表是什么？

在多表连接当中，承当 for 循环中外层循环的角色。

##### Select 内连接

##### Select 别名应用

- 列别名:使用 AS 关键字(可省略)给列起别名

```sh
select name AS city_name from city;
select name city_name from city; # AS 可省略
```

- 表别名:给表起别名简化 SQL 语句

```sh
select c.name, co.name
from city c
join country co
on c.countrycode = co.code;
```
