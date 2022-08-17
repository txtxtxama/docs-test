import { defineConfig } from 'vitepress'

export default defineConfig({
    title: '标题',
    lang: 'zh-CN',
    themeConfig: {
        siteTitle: '主标题',
        nav: [
            { text: '导航1', link: '/nav1' }
        ]
    }
})
