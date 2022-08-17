import { defineConfig } from 'vitepress'

export default defineConfig({
    title: '标题',
    themeConfig: {
        siteTitle: '主标题',
        nav: [
            { text: '导航1', link: '/nav1' }
        ]
    }
})
