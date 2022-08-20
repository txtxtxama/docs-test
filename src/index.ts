import type { App } from 'vue'
import Button from './components/Button.vue'

export { Button }

const components = [Button]

export function install(app: App) {
    components.forEach((component) => {
        app.component(component.name, component)
    })
}

export default {
    install
}

export type BTN = {
    a: string
    b: number
}
