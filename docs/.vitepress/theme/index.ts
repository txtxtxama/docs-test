import '@/styles/index.scss'
import 'uno.css'

import { provideGlobalConfig } from 'element-plus'
import zhCn from 'element-plus/es/locale/lang/zh-cn'
import DefaultTheme from 'vitepress/theme'

export default {
    ...DefaultTheme,
    enhanceApp ({ app, router, siteData }) {
        // install(app)
        app.config.globalProperties.console = console
        provideGlobalConfig({
            locale: zhCn
        }, app, true)
    }
}