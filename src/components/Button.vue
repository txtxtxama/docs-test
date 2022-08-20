<script lang="ts">
import { ElButton } from 'element-plus'
import { defineComponent, h } from 'vue'

export default defineComponent({
    setup(props, { attrs, slots }) {
        return () => {
            return h(ElButton, props, slots)
        }
    }
})
</script>

<style lang="scss" scoped></style>
