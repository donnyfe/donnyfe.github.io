# Nginx负载均衡

负载均衡（ Load Balance）： 将请求/数据均匀分摊到多个操作单元上执行，负载均衡的关键在于均匀

## 负载均衡策略

Nginx默认提供了三种负载均衡策略：

1. 轮询：nginx会将客户端发起的请求，平均的分配给每一台服务器
2. 权重：nginx会将客户端的请求，根据服务器的权重值不同，分配不同的数量
3. ip_hash：nginx基于发起请求和客户端的ip地址不同，始终会将请求发送到指定的服务器上。

## 负载均衡配置示例

### 轮询

> 注意：upstream后的名称定义避免出现下划线

```sh
upstream my-server {
  server http://localhost:3009;
  server http://localhost:3008;
}

server {
  listen 80;
  server_name localhost;

  localhost / {
    proxy_pass http://my-server/;
  }
}

```

### 权重

```sh
upstream my-server {
  server http://localhost:3009 weight=10;
  server http://localhost:3008 weight=2;
}

server {
  listen 80;
  server_name localhost;

  localhost / {
    proxy_pass http://my-server/;
  }
}
```

### ip_hash

确保来自同一个客户端的请求将始终定向到同一台服务器，除非此服务器不可用

```sh
upstream my-server {
  ip_hash;
  server http://localhost:3009 weight=10;
  server http://localhost:3008 weight=2;
}

server {
  listen 80;
  server_name localhost;

  localhost / {
    proxy_pass http://my-server/;
  }
}
```

### least_conn

在连接负载最少的情况下，nginx会尽力避免将过多的请求分发给繁忙的应用程序服务器，

```sh
upstream my-server {
  least_conn;
  server http://localhost:3009 weight=10;
  server http://localhost:3008 weight=2;
}
```
