import { App } from 'vue'
import Button from './components/Button.vue'

export { Button }

export default {
    install(app: App) {
        app.component('Button', Button)
    }
}

export type BTN = {
    a: string,
    b: number
}