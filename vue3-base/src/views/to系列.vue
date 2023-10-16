<template>

 <div>{{ man }}</div>
 <div>toRef:{{ like }}</div>
 <button @click="change">修改</button>
</template>
<script setup lang='ts'>
import {reactive, toRaw, toRef, toRefs} from 'vue'
 // toRef 只能修改响应式对象的值 非响应式视图不会变化
 // toRefs 传对象， 源码逻辑：对对象属性循环逐个执行toRef（）、
 // toRaw 可以吧响应式对象 改变成非响应式的（不会有proxy包裹）
 const man = reactive({name: '测试', age: 23, like: '12'})
 let like = toRef(man, 'like') // 两个值， 第一值是对象， 第二值是属性

 const change = () => {
    like.value = 's131'
   //  console.log(like);
    
 }
let {name, age} = toRefs(man)

const man1 = toRaw(man) // 修改man1属性不会在试图更新 
</script>
<style scoped>

</style>