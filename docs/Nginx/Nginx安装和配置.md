
# Nginx 安装和配置

## Nginx安装

### docker方式安装

```sh
docker run -idt \
 --restart no \
 --name nginx \
 -p 80:80 \
 -v /Users/username/docker/nginx/conf/nginx.conf:/etc/nginx/nginx.conf \
  -v /Users/username/docker/nginx/log:/var/log/nginx \
  -v /Users/username/docker/nginx/cache:/var/cache/nginx \
  -v /Users/username/docker/nginx/www:/usr/share/nginx/www \
  -v /Users/username/docker/nginx/html:/usr/share/nginx/html \
  --privileged=true nginx
 nginx
```

```sh
# 访问容器
docker exec -it nginx bash
```

### docker-compose.yml

```yaml
version: '3.7'
services:
  nginx:
    restart: always
    image: nginx:latest
    container_name: nginx
    ports:
      - 80:80
    volumes:
      - /Users/dong/docker/nginx/conf/nginx.conf:/etc/nginx/nginx.conf
      - /Users/dong/docker/nginx/log:/var/log/nginx
      - /Users/dong/docker/nginx/cache:/var/cache/nginx
      - /Users/dong/docker/nginx/www:/usr/share/nginx/www
      - /Users/dong/docker/nginx/html:/usr/share/nginx/html
```

##  Nginx配置

在Linux系统中，Nginx默认配置文件路径为`/etc/nginx/nginx.conf`。

Nginx配置文件主要由以下几部分组成：

- 全局块
- events块
- http块

### 全局块

全局块主要设置一些影响Nginx服务器整体运行的配置。配置位置通常在文件顶部。全局配置对整个Nginx服务器都有效。部分配置可以在http块、server块中覆盖。

#### 1. 基础配置

```sh
# 运行用户
# user root;
user nginx;

# worker进程数，一般设置为CPU核心数
worker_processes auto;

# 错误日志路径和级别
error_log /var/log/nginx/error.log warn;

# 进程PID存放路径
pid /var/run/nginx.pid;
```

#### 2. 性能优化配置

```sh
# 每个worker进程的最大连接数
worker_connections 1024;

# worker进程最大打开文件数
worker_rlimit_nofile 20480;

# CPU亲和性配置
worker_cpu_affinity auto;

# worker进程优先级设置
worker_priority 0;
```

#### 3. 调试配置

```sh
# 是否开启debug模式
daemon on;

# master进程运行模式
master_process on;

# core文件大小限制
worker_rlimit_core 0;

# 定时器精度
timer_resolution 100ms;
```

#### 4. SSL配置

```sh
# 启用SSL
ssl_enable on;

# SSL硬件加速
ssl_engine device;

# PCRE JIT开关
pcre_jit on;
```

#### 5. 文件加载配置

```sh
# 加载动态模块
include /usr/share/nginx/modules/*.conf;

# 加载MIME类型
include /etc/nginx/mime.types;

# 默认文件类型
default_type application/octet-stream;
```

#### 6. 资源限制配置

```sh
# 每个进程允许打开的最大文件描述符数
worker_rlimit_nofile 65535;

# 请求体大小限制
client_max_body_size 1m;

# 客户端请求缓冲区大小
client_body_buffer_size 1m;
```

#### 7. 安全配置

```sh
# 禁用版本显示
server_tokens off;

# SSL协议版本
ssl_protocols TLSv1.2 TLSv1.3;

# SSL密码套件
ssl_ciphers HIGH:!aNULL:!MD5;
```

#### 8. 日志配置

```sh
# 访问日志格式定义
log_format main '$remote_addr - $remote_user [$time_local] "$request" '
                '$status $body_bytes_sent "$http_referer" '
                '"$http_user_agent" "$http_x_forwarded_for"';

# 访问日志路径
access_log /var/log/nginx/access.log main;
```

### http块

http块是Nginx配置文件的核心部分，主要设置HTTP服务器的相关配置。http块配置会影响所有虚拟主机，部分配置可以在server块或location块中覆盖。修改配置后需要重新加载或重启Nginx。

#### 1. 基础配置

```sh
http {
  # MIME类型配置
  include /etc/nginx/mime.types;
  default_type application/octet-stream;

  # 日志格式定义
  log_format main '$remote_addr - $remote_user [$time_local] "$request" '
                  '$status $body_bytes_sent "$http_referer" '
                  '"$http_user_agent" "$http_x_forwarded_for"';

  # 访问日志配置
  access_log /var/log/nginx/access.log main;
}
```

#### 2. 性能优化配置

```sh
http {
  # 开启高效传输模式
  sendfile on;

  # TCP优化
  tcp_nopush on;
  tcp_nodelay on;

  # 连接超时时间
  keepalive_timeout 65;

  # 客户端请求主体大小限制
  client_max_body_size 1m;

  # 客户端请求缓冲区大小
  client_body_buffer_size 1m;
}
```

#### 3. Gzip压缩配置

```sh
http {
  # 开启gzip压缩
  gzip on;

  # 压缩级别(1-9)
  gzip_comp_level 2;

  # 最小压缩文件大小
  gzip_min_length 1k;

  # 压缩文件类型
  gzip_types text/plain application/javascript text/css application/xml;
}
```

#### 4. 缓存配置

```sh
http {
  # 缓存配置
  proxy_cache_path /path/to/cache levels=1:2 keys_zone=my_cache:10m max_size=10g inactive=60m;

  # 临时文件配置
  proxy_temp_path /path/to/temp;

  # 缓存有效期
  proxy_cache_valid 200 302 10m;
  proxy_cache_valid 404 1m;
}
```

#### 5. SSL配置


```sh
http {
  # SSL协议版本
  ssl_protocols TLSv1.2 TLSv1.3;

  # SSL密码套件
  ssl_ciphers HIGH:!aNULL:!MD5;

  # SSL会话缓存
  ssl_session_cache shared:SSL:10m;
  ssl_session_timeout 10m;
}
```

#### 6. 负载均衡配置

```sh
http {
  # 定义上游服务器组
  upstream backend {
      server backend1.example.com weight=5;
      server backend2.example.com:8080;
      server unix:/tmp/backend3;
  }

  # 负载均衡算法配置
  least_conn;  # 最少连接
  ip_hash;     # IP哈希
  hash $request_uri;  # URL哈希
}
```

#### 7. 安全配置

```sh
http {
  # 隐藏版本号
  server_tokens off;

  # 请求限制
  limit_req_zone $binary_remote_addr zone=one:10m rate=1r/s;

  # 连接限制
  limit_conn_zone $binary_remote_addr zone=addr:10m;

  # XSS防护
  add_header X-XSS-Protection "1; mode=block";

  # 点击劫持防护
  add_header X-Frame-Options "SAMEORIGIN";
}
```

#### 8. 代理配置

```sh
http {
  # 代理缓冲区
  proxy_buffer_size 4k;
  proxy_buffers 4 32k;

  # 代理超时设置
  proxy_connect_timeout 60s;
  proxy_send_timeout 60s;
  proxy_read_timeout 60s;

  # 代理头部设置
  proxy_set_header Host $host;
  proxy_set_header X-Real-IP $remote_addr;
}
```

### events块

events块主要用于配置Nginx服务器与用户的网络连接，是Nginx配置的核心部分之一。

#### 1. 基础配置

```sh
events {
  # 每个worker进程的最大连接数， 默认值512，通常设置为1024或更高
  worker_connections 1024;

  # 是否打开accept锁， 用于让多个worker进程轮流接受新连接，防止惊群现象(thundering herd)
  accept_mutex on;

  # accept锁的延迟时间， 在没有新连接时，worker进程的暂停时间
  accept_mutex_delay 500ms;
}
```

#### 2. 事件模型配置

```sh
events {
  # 事件模型选择
  # 可选值: select, poll, kqueue, epoll, rtsig, /dev/poll, eventport
  use epoll;
  # Linux系统推荐使用epoll，
  # FreeBSD推荐使用kqueue，
  # 不指定时会自动选择最适合的模型

  # 是否启用多个worker进程接受连接， 建议在高并发场景下开启
  multi_accept on;
}
```

#### 3. 性能优化配置

```sh
events {
  # 使用epoll事件模型
  use epoll;

  # 增加最大连接数
  worker_connections 10240;

  # 开启同时接受多个连接
  multi_accept on;

  # 关闭accept锁(在高并发场景下可以考虑关闭)
  accept_mutex off;
}
```


### 配置示例

```sh
# 全局块

# worker_processes数值越大，并发能力越强
worker_processes   1;

# Nginx错误日志存放位置
error_log /var/log/nginx/error.log warn;

# 存放Nginx进程号
pid       /var/run/nginx.pid

# events配置模块
events {
  # 指定每个工作进程最大连接数，数值越大，并发能力越强，默认1024
  worker_connections 1024;
}

# http块

# include代表引入一个外部的文件,mime.types中放着大量的媒体类型
http {
  include /etc/nginx/mime.types;

  default_type application/octet-stream;

  # 定义一个main格式的日志 main的内容：
  log_format main '$remore_addr - $remote_user [$time_local] "$request"'
          '$status $body_bytes_sent "$http_referer"'
          '"$http_user_agent" "$http_x_forwarded-for"';

  # log_format main2 '"$arg_name" "$http_host" "$sent_http_date"';

  # 指定访问日志和写入格式为main
  access_log /var/log/nginx/access.log main;

  # 启用或者禁用sendfile(),零拷贝模式
  sendfile on;

  # 启用或禁用使用套接字选项(仅在sendfile使用时使用)
  tcp_nopush on;

  # 0值禁用保持活动的客户端连接，65s超时
  keepalive_timeout 65;

  # 启用/禁用gzip
  gzip on;
  gzip off;
  gzip_min_length 1;
  gzip_comp_level 2;
  gzip_types text/plain application/x-javascript application/xml text/javascript text/css image/jpeg image/jpg image/gif

  # include /etc/nginx/conf.d/*.conf

  # server块，每个server块对应一个网站
  server {
     # Nginx监听的端口号
     listen 80;


     # Nginx接收的请求
     server_name localhost;

    location / {
      # 将收到的请求根据指定路径去查找静态资源
      root   /usr/share/nginx/html;
      # 默认去上述的路径中找到index.html或者index.htm
      index  index.html index.htm;
    }
  }
}
```
