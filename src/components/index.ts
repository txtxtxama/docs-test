import Button from './Button'
import CustomButton from './CustomButton'

export { Button, CustomButton }

import type { App } from 'vue'

const components = [Button, CustomButton]

export function install(app: App) {
    components.forEach((component) => {
        app.component(component.name, component)
    })
}