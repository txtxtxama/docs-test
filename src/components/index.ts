import Button from './Button.vue'
import CustomButton from './CustomButton.vue'

export { Button, CustomButton }

import type { App } from 'vue'




const components = [Button, CustomButton]

export function install(app: App) {
    components.forEach((component) => {
        app.component(component.name, component)
    })
}