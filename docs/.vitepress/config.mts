import { defineConfig } from 'vitepress'
import nav from './config/nav'
import sidebar from './config/sidebar'

// https://vitepress.dev/reference/site-config
export default ({ mode }) => {
  return defineConfig({
    base: '/',
    title: "前端笔记",
    description: "A VitePress Site",
    // Use git commit to get the timestamp
    lastUpdated: true,
    // When set to true, VitePress will not fail builds due to dead links.
    ignoreDeadLinks: true,
    themeConfig: {
      // https://vitepress.dev/reference/default-theme-config
      // 搜索
      search: {
        provider: 'local'
      },
      // 导航
      nav,
      // 侧边栏
      sidebar,
      // 目录
      outline: {
        level: [2,3],
        label: '目录',
      },
      // 页脚
      footer: {
        message: 'Released under the MIT License.',
        copyright: 'Copyright © 2024-present'
      },
      docFooter: {
        prev: '上一页',
        next: '下一页'
      },
      socialLinks: [
        { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
      ],
    },
    // docs: https://vitepress.vuejs.org/config/app-configs.html#markdown
    markdown: {
      theme: 'github-light',
      lineNumbers: false
    }
  })
}

