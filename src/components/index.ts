import Button from './Button'
import CustomButton from './CustomButton'
import Select from './Select'
import Select2 from './Select2'

export { Button, CustomButton, Select , Select2}

import type { App } from 'vue'

const components = [Button, CustomButton, Select]

export function install(app: App) {
    components.forEach((component) => {
        app.component(component.name, component)
    })
}