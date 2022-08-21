<script lang="ts">
import { ElButton } from 'element-plus'
import { defineComponent, h, mergeProps } from 'vue'

export default defineComponent({
    setup (props, { attrs, slots }) {
        return () => {
            return h(
                ElButton,
                mergeProps(props, {
                    class: 'border-test'
                }),
                slots
            )
        }
    }
})
</script>

<style lang="scss" scoped>
.border-test {
    border: 1px solid red;
}
</style>
