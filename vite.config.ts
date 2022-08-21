import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'
import dts from 'vite-plugin-dts'

export default defineConfig({
    build: {
        lib: {
            entry: resolve(__dirname, './src/index.ts'),
            name: 'index',
            fileName: 'index'
        },
        rollupOptions: {
            // 排除 vue 和 element-plus
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
