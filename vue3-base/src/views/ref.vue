<template>
    <form>
        <input type="text">
        <button @click.prevent="add">保存</button>
    </form>
</template>
<script setup lang='ts'>
import { reactive } from 'vue';

/**
 * ref reactive
 * ref 支持所有的类型 reactive 引用类型 Array Object Map Set
 * ref 取值 赋值 都需要加 .value, reactive是不需要 .value
 * reactive proxy 不能直接赋值 否则破坏响应式对象, 常用在对象上reactive（{}）
 * 解决方案：1、数组可以使用push+解构（原理是保持对象响应性）2 添加一个对象 把数组作为一个属性去解决
 * */
let list = reactive<string[]>([])
const add = () => {
    setTimeout(() => {
        let res = ['red','2df','fd']
        list.push(...res)
    }, 2000)
}

// 方案2

// let list = reactive<{
//     arr: string[]
// }>({
//     arr: []
// })
// const add = () => {
//     setTimeout(() => {
//         let res = ['red', '2df', 'fd']
//         list.arr = res
//     }, 2000)
// }

</script>
<style scoped></style>