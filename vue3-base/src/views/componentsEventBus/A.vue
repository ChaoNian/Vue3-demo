<template>
  <div class="box">
    <button @click="emitB">子A 组件派发一个事件</button>
  </div>
</template>

<script setup lang='ts'>
import Bus from './Bus'
// const emit = defineEmits(['on-click'])
let flag = false
const emitB = () => {
    flag = !flag,
    // emit('on-click', flag)
    Bus.emit('on-click', flag)
}
</script>

<style scoped>
.box {
    padding: 20px;
    background-color: rgb(237, 233, 185);
    margin-bottom: 20px;
}
</style>