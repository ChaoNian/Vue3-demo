<template>
  <div>
    {{ $dev }}
  </div>
  <!-- $filter $dev 爆红提示 是需要写声明文件， 代码写在main里 -->
  <div>{{ $filters.format('1212') }}</div>
</template>

<script setup lang='ts'>
import {getCurrentInstance} from 'vue'
const app = getCurrentInstance() // 获取当前实例
console.log(app);
console.log(app?.proxy?.$filters.format(34));
</script>

<style scoped>

</style>