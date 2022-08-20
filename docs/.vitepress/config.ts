import vueJsx from '@vitejs/plugin-vue-jsx'
import postcssPrefixSelector from 'postcss-prefix-selector'
import { presetMini } from 'unocss'
import Unocss from 'unocss/vite'
import { fileURLToPath, URL } from 'url'
import { defineConfig } from 'vitepress'

export default defineConfig({
    title: '标题',
    lang: 'zh-CN',
    base:'/docs-test/',
    themeConfig: {
        siteTitle: '主标题',
        nav: [
            { text: '导航1', link: '/nav1' }
        ]
    },
    vite: {
        plugins: [
            vueJsx(),
            Unocss({
                presets: [presetMini()]
            })
        ],
        resolve: {
            alias: {
                '@': fileURLToPath(new URL('../../src', import.meta.url)),
                docs: fileURLToPath(new URL('../../docs', import.meta.url)),
                '@txtxtxama/aaa': fileURLToPath(new URL('../../src/index.ts', import.meta.url))
            }
        },
        css: {
            postcss: {
                plugins: [
                    {
                        postcssPlugin: 'internal:charset-removal',
                        AtRule: {
                            charset: atRule => {
                                if (atRule.name === 'charset') {
                                    atRule.remove()
                                }
                            }
                        }
                    },
                    // .vp-raw 类名下的内容 不受 默认 vp-doc.css 样式 影响
                    postcssPrefixSelector({
                        prefix: ':not(:where(.vp-raw *))',
                        includeFiles: [/vp-doc\.css/],
                        transform (prefix, _selector) {
                            const [selector, pseudo = ''] = _selector.split(/(:\S*)$/)
                            return selector + prefix + pseudo
                        }
                    })
                ]
            }
        }
    }
})
