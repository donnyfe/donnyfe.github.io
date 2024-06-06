# 使用SSH2部署到服务器

## 实现步骤

### 1.添加指令

修改package.json文件，在scripts字段里添加build指令

```js
{
  "scripts": {
    "build": "vitepress build docs && node ./deploy.js"
  }
}
```

### 2.添加部署脚本

在项目根目录创建deploy.js文件

```js
const Client = require('ssh2').Client;

class Deploy {
  constructor(options) {
    this.options = options;
    this.client = new Client();
    this.tar();
  }

  /**
   * 1、打包压缩应用
   */
  tar() {
    const childProcess = require("child_process");
    const { localShell } = this.options;
    const pro = childProcess.exec(localShell, () => {});

    pro.stdout.pipe(process.stdout);

    pro.on("exit", () => {
      console.log("压缩中... dist目录压缩成功!");
      this.connect();
    });
  }

  /**
   * 2、连接服务器
   */
  connect() {
    const { ssh } = this.options;
    // 连接ssh上传
    this.client
      .connect(ssh)
      .on("ready", () => {
        console.log("连接中... ssh2客户端连接成功!");
        this.upload();
      })
  }

  /**
   * 3、上传文件
   */
  upload() {
    const  { localPath, remotePath } = this.options;

    // 建立ftp上传目标文件
    this.client.sftp((err, sftp) => {
      if (err) throw err;

      sftp.fastPut(localPath, remotePath, {}, (err, result) => {
        if (err) throw err;

        console.log('传送中... 代码包传送到服务器成功!')
        this.shell();
      });
    });
  }

  /**
   * 4、执行shell脚本
   */
  shell() {
    const { remoteShell } = this.options;

    this.client.shell((error, stream) => {
      if (error) throw error;

      stream
        .end(remoteShell)
        .on('data', (data) => {
          // 输出部署时的信息
          // console.log('data: ', data.toString());
        })
        .on('close', () => {
          console.log("解压中... 服务器端代码包解压完成!");
          this.client.end();
        });
    });
  }
}


const options = {
  // ssh2客户端配置 
  ssh: {
    host: "xxx.xxx.xxx.xxx", // 服务器公网IP地址
    port: 22,
    username: "", // 登录用户名，默认root
    password: "", // 登录密码
  },
  // 部署文件的本地路径
  localPath: "./docs/.vitepress/dist.tar.gz",
  // 部署文件的服务器路径
  remotePath: "/root/docs/dist.tar.gz",
  
  // 本地执行脚本
  localShell: [
    'cd ./docs/.vitepress',
    'tar zcvf dist.tar.gz dist'
  ].join(' '),
  // 远程待执行的Shell命令
  remoteShell: [
    'cd /root/docs',
    // 将上传压缩包复制一份到bak目录下并更名带上时间戳
    'cp dist.tar.gz bak/dist.bak.$(date "+%Y%m%d%H%M%S").tar.gz',
    // 移除远端dist目录
    'rm -rf dist',
    // 解压上传的压缩包
    'tar zxvf dist.tar.gz',
    // 移除压缩包
    'rm -rf dist.tar.gz',
    'exit'
  ].join(' '),
};

new Deploy(options);
```
