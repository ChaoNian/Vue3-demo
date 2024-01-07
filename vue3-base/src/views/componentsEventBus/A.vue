<template>
  <div class="box">
    <button @click="emitB">子A 组件派发一个事件</button>
    <button @click="emitMittB">子A 组件Mitt库来派发一个事件</button>
  </div>
</template>

<script setup lang='ts'>
import { getCurrentInstance } from 'vue';
import Bus from './Bus'
const emit = defineEmits(['on-click'])
let flag = false
const emitB = () => {
    flag = !flag,
    // emit('on-click', flag)
    Bus.emit('on-click', flag)
}


const instance = getCurrentInstance()
const emitMittB = () => {
    // @ts-ignore
    instance?.proxy?.$Bus.emit('mitt-click', 'mitt')
    // @ts-ignore
    instance?.proxy?.$Bus.emit('mitt-click1', 'mitt1')
}

// defineExpose 对外暴露组件内部的属性和方法，不需要引入，直接使用
// flag,instance emitB 暴露给父级    
defineExpose({
    flag,
    instance,
    emitB
})
</script>

<style scoped>
.box {
    padding: 20px;
    background-color: rgb(237, 233, 185);
    margin-bottom: 20px;
}
</style>