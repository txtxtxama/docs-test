<template>
    <div class="custom-button">
        自定义按钮
        <div class="inner">123</div>
    </div>
</template>

<script lang="ts" setup>

</script>

<style lang="scss" scoped>
.custom-button {
    border: 1px solid blue;
    display: inline-flex;
    .inner {
        background-color: red
    }
}
</style>