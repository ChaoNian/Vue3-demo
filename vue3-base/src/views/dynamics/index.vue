<template>
 <!-- 什么是动态组件 就是：让多个组件使用同一个挂载点，并动态切换，这就是动态组件 
     在挂载点使用component标签，然后使用v-bind:is=”组件”
-->
 <div></div>
 <components :is="A"></components>

</template>
<script setup lang='ts'>
import A from './components/a.vue'
import B from './components/B.vue'
</script>
<style scoped>

</style>