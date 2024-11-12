
# Nginx性能优化

## 基础配置优化

### worker进程优化

```sh
# 根据CPU核心数设置worker进程数
worker_processes auto;

# 设置worker进程文件描述符数量
worker_rlimit_nofile 100000;

# 只记录critical级别错误日志
error_log /var/log/nginx/error.log crit;
```

### events模块优化

```sh
events {
    # 设置单个worker进程的最大连接数
    worker_connections 4000;

    # 使用epoll事件模型
    use epoll;

    # 开启一次接受多个连接
    multi_accept on;
}
```

### http模块优化

```sh
http {
  # 开启文件缓存，文件描述符缓存
  open_file_cache max=200000 inactive=20s;
  open_file_cache_valid 30s;
  open_file_cache_min_uses 2;
  open_file_cache_errors on;

  # 开启高效传输模式
  sendfile on;
  tcp_nopush on;

  # 开启gzip压缩
  gzip on;
  gzip_min_length 10240;
  gzip_comp_level 1;
  gzip_vary on;

  # 超时优化
  keepalive_timeout 30;
  keepalive_requests 100000;
  client_body_timeout 10;
  send_timeout 2;
}
```

## 安全性优化

### DDoS防护

```sh
# 限制单个IP的连接数
limit_conn_zone $binary_remote_addr zone=conn_limit_per_ip:10m;

# 限制请求频率
limit_req_zone $binary_remote_addr zone=req_limit_per_ip:10m rate=5r/s;

server {
    limit_conn conn_limit_per_ip 10;
    limit_req zone=req_limit_per_ip burst=10 nodelay;
}
```

### 其他安全配置

```sh
# 隐藏Nginx版本信息
server_tokens off;


# 缓冲区优化，缓冲区大小限制
client_body_buffer_size 128k;
client_header_buffer_size 3m;
large_client_header_buffers 4 256k;
```

## 系统层面优化

### 文件描述符限制

通过systemd配置:

```sh
mkdir -p /etc/systemd/system/nginx.service.d
nano /etc/systemd/system/nginx.service.d/nginx.conf
[Service]
LimitNOFILE=30000
```

### BBR优化(Linux 4.9+)

```sh
modprobe tcp_bbr
echo 'tcp_bbr' >> /etc/modules-load.d/bbr.conf
echo 'net.ipv4.tcp_congestion_control=bbr' >> /etc/sysctl.d/99-bbr.conf
echo 'net.core.default_qdisc=fq' >> /etc/sysctl.d/99-bbr.conf
sysctl --system
```


**经过以上优化配置,Nginx服务器可以实现:**
- 单机非集群环境下处理 50K-80K QPS
- 集群环境下可达到 400K-500K QPS
- CPU负载维持在30%左右
