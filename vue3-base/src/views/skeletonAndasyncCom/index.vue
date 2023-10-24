<template>
    <!-- 异步组件使用这个 Suspense 标签-->
  <Suspense>
    <template #default>
        <SyncV></SyncV>
    </template>
    <template #fallback>
        <Skeleton></Skeleton>
    </template>
  
</Suspense>

</template>
<script setup lang='ts'>
import { defineAsyncComponent } from 'vue';
import Skeleton from '../../components/skeleton.vue'
const SyncV = defineAsyncComponent(() => import('./async.vue'))


</script>
<style scoped>

</style>