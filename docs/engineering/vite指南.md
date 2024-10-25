# Vite指南

## 开发阶段

### 查找别名

- 数组形式

```js
{
  resolve: {
    alias: [{ find: '@', replacement: '/src' }],
  }
}
```

- 对象形式

```js
import { resolve } from 'path'
const resolvePath = (path) => resolve(__dirname, path)

{
  resolve: {
    alias: {
      '@': resolvePath('src)
    },
  }
}
```

### 导入省略扩展名

```js
{
  resolve: {
    // import导入时想要省略的扩展名列表
    extensions: ['.js', '.ts', '.vue', '.json', '.scss'],
  }
}
```

### 加载.env文件变量

- [官方文档](https://vitejs.cn/vite3-cn/config/#async-config)

```js
import { defineConfig, loadEnv } from 'vite'

export default defineConfig(({ command, mode }) => {
  // 根据当前工作目录中的 `mode` 加载 .env 文件
  // 设置第三个参数为 '' 来加载所有环境变量，而不管是否有 `VITE_` 前缀。
  const env = loadEnv(mode, process.cwd(), '')
  return {
    // vite 配置
    define: {
      __APP_ENV__: env.APP_ENV
    }
  }
})
```

### 服务代理

```js
{
  server: {
    host: "0.0.0.0",
    port: 8000,
    open: true,
    https: false,
    proxy: {
      "/api/": {
        target: VUE_APP_BASE_URL,
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ""),
      },
    }
  }
}
```


### 配置VueAPI自动导入

```js
// https://github.com/antfu/unplugin-auto-import
import AutoImport from 'unplugin-auto-import/vite'

{
  plugins: [
    // 配置自动导入API函数
    AutoImport({
      // 生成auto-import.d.ts声明文件
      dts: 'src/auto-imports.d.ts',
      // targets to transform
      include: [
        /\.[tj]sx?$/, // .ts, .tsx, .js, .jsx
        /\.vue$/,
        /\.vue\?vue/, // .vue
      ],
      imports: ['vue', 'vue-router', 'pinia'],
      // 解决eslint报错
      eslintrc: {
        enabled: true,
        filepath: './.eslintrc-auto-import.json',
        // Default `true`, (true | false | 'readonly' | 'readable' | 'writable' | 'writeable')
        globalsPropValue: true,
      },
    })
  ]
}
```

### 配置UI库组件自动导入

```js
import Components from 'unplugin-vue-components/vite'
import { VantResolver } from 'unplugin-vue-components/resolvers'

{
  plugins: [
    Components({
      resolvers: [
        VantResolver()
      ],
    })
  ]
}
```

### 拓展script标签支持name属性

- vite-plugin-vue-setup-extend

```js
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
/**
 * 扩展setup插件，支持在script标签中使用name属性
 * 说明: <script setup name="MyComp"></script>
 */
import vueSetupExtend from 'vite-plugin-vue-setup-extend'

export default defineConfig({
  plugins: [
    vue(),
    vueSetupExtend()
  ]
})
```

- unplugin-vue-define-options

```js
// vite.config.ts
import DefineOptions from 'unplugin-vue-define-options/vite'
import Vue from '@vitejs/plugin-vue'

{
  plugins: [Vue(), DefineOptions()],
}
```

```js
<script setup lang="ts">
import { useSlots } from 'vue'
defineOptions({
  name: 'Foo'
})
const slots = useSlots()
</script>
```

### 配置图片转base64阈值

```js
{
  build: {
    assetsInlineLimit: 4096 // 图片转 base64 编码的阈值
  }
}
```

### 配置viewport适配

```js
import { defineConfig } from 'vite'
import postcsspxtoviewport from 'postcss-px-to-viewport'

export default defineConfig({
  css: {
    postcss: {
      plugins: [
        postcsspxtoviewport({
          unitToConvert: 'px', // 要转化的单位
          viewportWidth: 750, // UI设计稿的宽度 375、 750
          unitPrecision: 6, // 转换后的精度，即小数点位数
          propList: ['*'], // 指定转换的css属性的单位，*代表全部css属性的单位都进行转换
          viewportUnit: 'vw', // 指定需要转换成的视窗单位，默认vw
          fontViewportUnit: 'vw', // 指定字体需要转换成的视窗单位，默认vw
          selectorBlackList: ['ignore-'], // 指定不转换为视窗单位的类名，
          minPixelValue: 1, // 默认值1，小于或等于1px则不进行转换
          mediaQuery: true, // 是否在媒体查询的css代码中也进行转换，默认false
          replace: true, // 是否转换后直接更换属性值
          // exclude: [/node_modules/], // 设置忽略文件，用正则做目录名匹配
          exclude: [],
          landscape: false, // 是否处理横屏情况
        }),
      ],
    },
  }
})
```

### 配置rem适配

- 安装`amfe-flexible`适配库

```sh
npm i amfe-flexible -S
```

- 安装`postcss-pxtorem`插件

```sh
npm i postcss-pxtorem -D
```

```js
import postcssImport from 'postcss-pxtorem'

{
  css: {
    postcss: {
      plugins: [
        postcssImport({
          rootValue({ file }) {
            return file.indexOf('node_modules/vant') !== -1 ? 37.5 : 75
          },
          propList: ['*'],
        }),
      ],
    },
  }
}
```

### 引入样式全局变量

```js
// vite.config.js
import { defineConfig } from 'vite'

{
  css: {
    preprocessorOptions: {
      scss: {
        // 引入样式全局变量文件
        additionalData: `@import '/src/assets/styles/variables.scss';` 
      }
    }
  }
}
```

### vconsole调试工具

```js
import { resolve } from 'path';
import { viteVConsole } from 'vite-plugin-vconsole';

export default ({ mode }) => {
  let plugins = []

  if (mode !== 'production') {
    plugins = [
      viteVConsole({
        entry: resolve(__dirname, 'src/app.js'),
        localEnabled: true,
        enabled: true,
      }),
    ]
  }

  return {
    plugins
  }
}
```

## 打包阶段

### 代码打包拆包

```js
{
  build: {
    rollupOptions: {
      output: {
        dir: "./dist",
        manualChunks(id) {
            // node_modules 下文件分包
          if (id.includes("node_modules")) {
            return id
              .toString()
              .split("node_modules/")[1]
              .split("/")[0]
              .toString();
          }
        },
        entryFileNames: 'static/js/[name]-[hash].js',
        chunkFileNames: 'static/js/[name]-[hash].js',
        assetFileNames: 'static/[ext]/[name]-[hash].[ext]',
      },
    },
  }
}
```

### 配置浏览器兼容

- 安装`@vitejs/plugin-legacy`插件

```js
// vite.config.js
import legacy from '@vitejs/plugin-legacy'
import { defineConfig } from 'vite'

export default defineConfig({
  plugins: [
    legacy({
      targets: ['defaults', 'not IE 11'],
    }),
  ],
})
```

### MPA多页入口

#### vite-plugin-mpa

- 安装`vite-plugin-mpa`插件

```js
import mpa from 'vite-plugin-mpa';

export default () => {
  let plugins = [
    mpa({
      open: '',
      scanDir: 'src/pages',
      scanFile: 'main.js',
      filename: 'index.html',
    }),
  ]

  return {
    plugins
  }
});
```

#### vite-plugin-html

- 安装`vite-plugin-html`插件

```js
import { defineConfig } from 'vite'
// https://github.com/vbenjs/vite-plugin-html/blob/main/README.zh_CN.md
import { createHtmlPlugin } from 'vite-plugin-html'

export default defineConfig({
  plugins: [
    createHtmlPlugin({
      minify: true,
      pages: [
        {
          entry: 'src/main.ts',
          filename: 'index.html',
          template: 'public/index.html',
          injectOptions: {
            data: {
              title: 'index',
              injectScript: `<script src="./inject.js"></script>`,
            },
            tags: [
              {
                injectTo: 'body-prepend',
                tag: 'div',
                attrs: {
                  id: 'tag1',
                },
              },
            ],
          },
        },
        // other page...
      ],
    })
  ]
})
```

#### glob

使用`glob`插件自动匹配入口文件生成多页面配置。

- 安装`glob`插件

```js
import { resolve } from 'path';
import { glob } from 'glob';

//多页面配置，自动匹配入口文件生成多页面
function getEntry() {
  const pages = {}
  glob.sync('./src/views/**/main.ts').forEach(path => {
    const pageName = path.split('./src/views/')[1].split('/main.ts').shift()
    pages[pageName] = resolve(__dirname, `src/views/${pageName}/index.html`)
  })
  return pages
}

export default ({ mode }) => {
  return {
    build: {
      rollupOptions: {
        input: getEntry()
      },
    }
  }
}
```


### 移除console和debugger

- 使用 `terser` 插件

```js
{
  build: {
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
      },
    },
  }
}
```

### 配置CDN

- 安装`vite-plugin-externals`插件

```js
import { viteExternalsPlugin } from 'vite-plugin-externals'

{
  plugins: [
    viteExternalsPlugin({
      vue: 'Vue'
    }),
  ]
}
```

### 配置gzip压缩

```js
import viteCompression from "vite-plugin-compression";

{
  plugins: [
    // gzip压缩 生产环境生成 .gz 文件
    viteCompression({
      verbose: true,
      disable: false,
      threshold: 10240,
      algorithm: "gzip",
      ext: ".gz",
    })
  ]
}
```
