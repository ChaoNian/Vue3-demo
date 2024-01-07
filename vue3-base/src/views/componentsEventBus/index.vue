<template>
 <div class="box" @click="getFlag">
    父组件
    <!-- 这个父组件 作为桥梁的作用，实现子组件A、B之间可以数据通信
        缺点：子组件之间通信时需要在父级组件处理逻辑，
     -->
    <!-- <A @on-click="getFlag"></A>
    <B :flag="Flag"></B> -->
    <A  ref="childRef"></A>
    <B ></B>
 </div>

</template>

<script setup lang='ts'>
import A from './A.vue'
import B from './B.vue'
import {ref} from 'vue'


// 获取子组件DOM实例
const childRef = ref()
// let Flag = ref(false)
const getFlag = (params:boolean) => {
    // Flag.value = params
    console.log(childRef.value.flag, 'childRef');
    
}
</script>

<style scoped>
.box {
    padding:20px;
    border: 1px solid #d1d1d1
}
</style>