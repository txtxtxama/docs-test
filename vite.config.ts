import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import dts from 'vite-plugin-dts'

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [vue(), vueJsx(), dts()],
    resolve: {
        alias: {
            '@txtxtxama-aaa-c': fileURLToPath(new URL('./packages', import.meta.url))
        }
    },
    build: {
        lib: {
            entry: fileURLToPath(new URL('./packages/txtxtxama-aaa-c/index.ts', import.meta.url)),
            name: 'txtxtxama-aaa-c',
            fileName: 'index'
        },
        rollupOptions: {
            // 不 打包进库 的 依赖
            external: ['vue', 'element-plus'],
            output: {
                globals: {
                    vue: 'Vue',
                    'element-plus': 'ElementPlus'
                }
            }
        }
    }
})
