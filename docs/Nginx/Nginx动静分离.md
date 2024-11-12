# Nginx动静分离

nginx的并发能力公式：

Worker_processes * worker_connections / (4 | 2) = 最终的并发能力

4：动态资源需要最少4个连接数
2：静态资源需要2个连接数

## 动态资源代理

配置：

```sh
location / {
  proxy_pass 路径;
}
```

## 静态资源代理

图床：由外部服务器统一管理静态资源

配置：

```sh
location / {
  root 静态资源路径;
  index 默认访问路径下的XX资源;
  autoindex on; 代表展示静态资源的全部内容，以列表的形式展开
}
```

```sh
location ^~ /static/ {
  root html
}
```

## 路由匹配规则

```sh

# 访问根目录/, 比如http://localhost/
location = / {
  # 规则A
}

# 比如http://localhost/login
location = /login {
  # 规则B
}

# 比如http://localhost/static/a.png
location ^~ /static/ {
  # 规则C
}

# 比如http://localhost/a.png,规则D优先规则E
location ~ \.(gif|jpg|png|js|css)$ {
  # 规则D
}

# 比如http://localhost/a.PNG,只会匹配规则E，不会匹配规则D，因为规则D严格区分大小写
location ~* \.png$ {
  # 规则E
}

#
location !~ \.xhtml$ {
  # 规则F
}

#
location !~* \.xhtml$ {
  # 规则G
}

#
location / {
  # 规则H
}
```

