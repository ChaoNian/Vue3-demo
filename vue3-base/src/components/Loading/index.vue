<template>
  <div v-if="isShow" class="loading">
    Loading...
  </div>
</template>

<script setup lang='ts'>
import {ref, reactive} from 'vue'
const isShow = ref<boolean>(false)
const show = () => isShow.value = true
const hide = () => isShow.value = false

// 抛出API 使得外部可以通过Vnode.component?.exposed 来获取
defineExpose(
    {
        isShow,
        show,
        hide
    }
)
</script>

<style scoped lang="scss">
.loading {
    // background: black; 
    opacity: 0.8;
    font-size: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    // height: 100vh;
    color: #d4d4d4;
}
</style>