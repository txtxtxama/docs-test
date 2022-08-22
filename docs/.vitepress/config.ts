import { fileURLToPath, URL } from 'url'
import { defineConfig } from 'vitepress'

export default defineConfig({
    // 所有文档的浏览器标签 title, 左上角默认标题
    title: '主标题',
    // 设置为 ' ' 则隐藏
    // title: ' ',
    // 用于SEO, 会渲染成 <meta> 标签
    description: '描述',
    vite: {
        resolve: {
            alias: {
                '@txtxtxama-aaa-c': fileURLToPath(new URL('../../packages', import.meta.url)),
                'txtxtxama-aaa-c': fileURLToPath(new URL('../../packages/txtxtxama-aaa-c/index.ts', import.meta.url))
            }
        }
    }
})
