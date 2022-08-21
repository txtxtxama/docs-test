/// <reference types="vite/client" />

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'
import dts from 'vite-plugin-dts'

export default defineConfig({
    build: {
        lib: {
            entry: resolve(__dirname, './src/index.ts'),
            name: 'element-plus-components-lib',
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
    },
    plugins: [vue(), dts({ insertTypesEntry: true, copyDtsFiles: false })]
})
