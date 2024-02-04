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


// 使用全局插件
const instance = getCurrentInstance() // 获取当前实例
instance?.proxy?.yuki_loading.show() // yuki_loading提示的话 原因是没有类型声明导致，需要定义类型什么，1、创建xxx.d.ts  声明文件，里面定义declare 声明，2:在main.ts 文件写declare
  
setTimeout(() => {
    // 倒计时2s 后关闭全局插件
    instance?.proxy?.yuki_loading.hide()
}, 2000);
</script>

<style scoped>

</style>