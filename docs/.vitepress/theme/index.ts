import '@/styles/index.scss'
import 'uno.css'

import { provideGlobalConfig } from 'element-plus'
import zhCn from 'element-plus/lib/locale/lang/zh-cn'
import DefaultTheme from 'vitepress/theme'
import { Theme } from 'vitepress'

export default {
    ...DefaultTheme,
    enhanceApp ({ app, router, siteData }) {
        // install(app)
        app.config.globalProperties.console = console
        provideGlobalConfig({
            locale: zhCn
        }, app, true)
    }
} as Theme