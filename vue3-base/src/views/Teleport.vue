<template>
<!-- Teleport 是一种能够将我们的模板渲染至指定DOM节点，不受父级style、v-show等属性影响，但data、prop数据依旧能够共用的技术；类似于 React 的 Portal。

主要解决的问题 因为Teleport节点挂载在其他指定的DOM节点下，完全不受父级style样式影响

使用方法
通过to 属性 插入指定元素位置 to="body" 便可以将Teleport 内容传送到指定位置
 -->
 <div>
    <div>我的父级</div>
    <Teleport to="body">
    <div>我是Teleport</div>
 </Teleport>
 </div>

</template>
<script setup lang='ts'>

</script>
<style scoped>

</style>