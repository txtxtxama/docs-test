<template>
    <div class="main-container">
        <div :class="styles[`select-class`]">
            <el-select
                v-model="val"
                :popper-class="styles[`select-popper-class`]"
                clearable
            >
                <el-option
                    v-for="item in list"
                    :key="item.id"
                    :label="item.id"
                    :value="item.id"
                >
                </el-option>
            </el-select>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import styles from './select2.module.scss'
import { ElSelect, ElOption} from 'element-plus';

const val = ref('')
const list = Array.from({ length: 10 }).map((_, i) => {
    return {
        id: i + 1
    }
})
</script>

<style lang="scss" scoped>
.main-container {
    width: 100%;
    height: 100%;
    padding: 20px;
}

</style>