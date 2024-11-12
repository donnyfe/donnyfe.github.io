# Nginx介绍

推荐阅读：[中文文档阅读](http://tengine.taobao.org/nginx_docs/cn/)

nginx是一个HTTP和反向代理服务器，由俄罗斯[Igor Sysoev](http://sysoev.ru/en/)在2004年发10月布第一个版本0.1.0。

## Nginx的特性

- 稳定性强，7*24小时不间断运行
- Nginx提供了非常丰富的配置实例
- 占用内存小，并发能力强

## Nginx的优点

### 1.高并发，高性能

- 采用多进程和I/O多路复用(epoll)的底层实现
- 在正常情况下单次请求响应更快
- 在高峰期(数以万计的并发请求)时仍能保持快速响应
- 相比其他Web服务器具有更快的响应速度


### 2. 可扩展性好

- 模块化设计架构
- 支持官方和第三方模块的扩展
- 可以通过配置文件灵活添加模块
- 支持开发定制化模块来满足特定业务需求


### 3. 高可靠性

- 采用多进程模式运行:一个master主进程，多个worker工作进程
- worker进程间相互独立
- master进程可以在worker进程出错时快速启动新的worker进程
- 保证服务的持续性和稳定性

### 4. 热部署

- 支持724小时不间断运行
- 可以在不停止Nginx的情况下进行:文件升级、配置更新、日志文件更换
- 保证服务的持续性和稳定性,确保服务不中断的情况下完成维护工作


### 5. BSD许可证

- 开源
- 免费使用
- 可以免费用于商业用途

## Nginx的应用场景

- 静态文件服务器
- 反向代理服务器
- 负载均衡器
- API网关
- 安全防护
- 静态化服务
- 图片实时处理
- 消息推送

## Nginx的架构

- 多进程（单线程）和多路IO复用模型

- 工作流程：
  - IO多路复用
  - CPU亲和
  - sendfile：sendfile零拷贝模式

## Nginx进程结构

**Master进程(主进程)**
- 监控worker进程状态
- 管理worker进程的生命周期
- 接收并处理信号
- 向worker进程分发指令

**Worker进程(工作进程)**
- 处理实际的客户端请求
- 执行主进程分配的任务
- 处理网络事件

**Cache相关进程**
- Cache Loader进程：负责载入缓存索引文件
- Cache Manager进程：管理磁盘缓存大小


## Nginx进程管理

- 重载配置：nginx -s reload 或 kill -HUP `master_pid`
- 优雅关闭：nginx -s quit 或 kill -QUIT `master_pid`
- 停止Nginx：nginx -s stop 或 kill -TERM `master_pid`
- 重新打开日志文件：nginx -s reopen 或 kill -USR1 `master_pid`

## Nginx的事件驱动模型

### 1. 事件驱动架构

- 异步非阻塞：Nginx使用异步非阻塞I/O操作，这意味着它可以在等待I/O操作完成时继续处理其他请求，而不需要为每个连接分配一个线程或进程。
- 事件循环：Nginx使用事件循环来监听和处理事件（如网络请求、文件I/O等），通过事件通知机制来触发相应的处理程序。

### 2. 事件模型

Nginx支持多种事件模型，具体选择取决于操作系统：
- epoll：适用于Linux，是Nginx在Linux上的默认事件模型，支持大规模并发连接。
- kqueue：适用于FreeBSD、OpenBSD和macOS，提供高效的事件通知机制。
- select/poll：适用于几乎所有操作系统，但性能不如epoll和kqueue。
- /dev/poll：适用于Solaris。
- eventport：适用于Solaris 10。

### 3. 事件处理流程

1. 事件监听：Nginx的主进程启动后，工作进程会监听指定的端口和地址，等待客户端连接。
2. 事件触发：当有新的连接或I/O事件发生时，事件模型会通知Nginx。
事件分发：Nginx将事件分发给相应的工作进程进行处理。
4. 事件处理：工作进程处理事件，包括读取请求、发送响应、关闭连接等。
5. 事件循环：处理完当前事件后，工作进程返回事件循环，继续监听新的事件。


## 热部署

热部署(nginx -s reload)

热部署的原理:

Nginx通过发送HUP信号给主进程（master process）来实现热部署。具体步骤如下：

1. 发送HUP信号：使用命令nginx -s reload或kill -HUP `master_pid`发送HUP信号给Nginx的主进程。
2. 检查配置文件：主进程接收到信号后，首先检查新的配置文件的语法是否正确。
3. 应用新配置：如果语法正确，主进程会应用新的配置，打开新的日志文件和监听端口。
4. 启动新进程：主进程启动新的工作进程（worker processes）。
5. 关闭旧进程：主进程向旧的工作进程发送QUIT信号，要求它们优雅地关闭。
6. 处理现有连接：旧的工作进程会继续处理现有的连接，直到所有请求处理完毕后再退出。
7. 完成重载：当所有旧的工作进程完成其任务后，它们会自动退出，整个重载过程完成。

## 日志文件切割

在Nginx中，日志文件的切割（也称为日志轮转）是为了防止日志文件过大而影响系统性能。Nginx本身不提供日志切割的功能，但可以通过外部工具和脚本来实现。

### 使用logrotate

`logrotate`是一个常用的日志管理工具，可以自动切割、压缩和删除旧的日志文件。以下是配置`logrotate`来管理Nginx日志的步骤：

1. **安装logrotate**：大多数Linux发行版默认安装了`logrotate`，如果没有，可以通过包管理器安装。

2. **配置logrotate**：
   - 创建或编辑`/etc/logrotate.d/nginx`文件，添加以下内容：

     ```plaintext
     /var/log/nginx/*.log {
         daily
         rotate 7
         compress
         delaycompress
         missingok
         notifempty
         create 640 nginx adm
         sharedscripts
         postrotate
             [ ! -f /var/run/nginx.pid ] || kill -USR1 `cat /var/run/nginx.pid`
         endscript
     }
     ```

   - 该配置会每天切割日志，保留7天的日志，并压缩旧日志。

3. **执行logrotate**：`logrotate`通常由系统的cron任务自动执行，也可以手动运行`logrotate /etc/logrotate.conf`来测试配置。

### 手动脚本切割

可以编写一个简单的bash脚本来手动切割日志：

```bash
#!/bin/bash
DATE=$(date +%Y-%m-%d-%H%M)
mv /var/log/nginx/access.log /var/log/nginx/access.log.$DATE
mv /var/log/nginx/error.log.$DATE
kill -USR1 cat /var/run/nginx.pid
sleep 1
gzip /var/log/nginx/access.log.$DATE
gzip /var/log/nginx/error.log.$DATE
```


- 将该脚本保存为`nginx_log_rotate.sh`，并通过cron定期执行。

### 使用命名管道和外部工具

可以使用命名管道和工具如`cronolog`或`rotatelogs`来实现日志切割：

1. **创建命名管道**：
   ```bash
   mkfifo /var/log/nginx/access.log.pipe
   ```

2. **配置Nginx使用管道**：
   ```nginx
   access_log /var/log/nginx/access.log.pipe;
   ```

3. **使用工具切割日志**：
   - 使用`cronolog`：
     ```bash
     cat /var/log/nginx/access.log.pipe | cronolog /var/log/nginx/%Y/%m/%d/access.log &
     ```

   - 使用`rotatelogs`：
     ```bash
     cat /var/log/nginx/access.log.pipe | rotatelogs /var/log/nginx/access.log.%Y-%m-%d 86400 &
     ```

### 注意事项

- 确保在切割日志后，Nginx能够正确写入新的日志文件。
- 使用`kill -USR1`信号通知Nginx重新打开日志文件。
- 定期检查日志文件的大小和切割策略，以确保系统性能。



## 拓展阅读

- [tengine](http://tengine.taobao.org/)
- [tengine中文文档](http://tengine.taobao.org/documentation_cn.html)
