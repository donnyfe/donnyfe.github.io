
# Nginx反向代理

## 正向代理

1. 正向代理服务器由客户端设立
2. 客户端了解代理服务器和目标服务器都是谁
3. 实现突破访问权限，提高访问速度，对目标服务器隐藏客户端的地址

## 反向代理

1. 反向代理服务器是配置在服务端
2. 客户端是不知道访问的到底是哪一台服务器
3. 达到负载均衡，并且可以隐藏服务器真正的ip地址

## 基于Nginx实现反向代理

1. 准备一个目标服务器
2. 编写nginx配置文件，通过nginx访问到目标服务器

```sh
server {
  listen 80;
  server_name localhost;

  # 反向代理
  # 前端访问api下的接口时，会代理到proxy_pass指向的地址
  location /api/ {
      proxy_set_header X-Real-IP $remote_addr;
      proxy_set_header Host $http_host;
      # 基于反向代理访问到目标服务器，用户访问api接口时，指向本地服务3000端口
      proxy_pass http://127.0.0.1:3000;
  }
}
```

## Nginx的location路径映射

### 匹配规则(按优先级排列)

```sh
# 1、=匹配，精准匹配，主机名后面不能带任何的字符串
location = / {}

# 2、通用匹配，匹配所有以/xxx开头的路径
location /xxx {}

# 3、匹配开头路径，匹配所有以/images/开头的路径
location ^~ /images/ {}

# 4、正则匹配，匹配所有以/xxx开头的路径
location ~ /xxx {}

# 5、后缀匹配，匹配以gif或xxx为结尾的路径
location ~* \.(gif|jpg|png)$ {}

# 6. 匹配所有路径
location / {}
```
