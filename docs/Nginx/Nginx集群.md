# Nginx集群

## 为什么要搭建Nginx集群

因为单台Nginx服务器容易发生单点故障，导致nginx宕机和整个程序的崩溃。

## 怎么搭建Nginx集群

1. 准备多台Nginx
2. 准备Keepalived，监听nginx的健康状况
3. 准备haproxy，提供一个虚拟的路径，统一的去接收用户的请求

[docker-deployment](https://docs.nginx.com/nginx-app-protect/admin-guide/#docker-deployment)

