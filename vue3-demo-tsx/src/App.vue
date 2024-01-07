<script setup lang="ts">
// import { RouterLink, RouterView } from 'vue-router'
import yukiTsx from './App'
const getName = (item:any) =>{
  console.log(item, '组件传出来的事件');
  flag.value = !flag.value
}
let flag = ref<boolean>(false)
</script>

<template>
  <div class="yuki-test">测试全局样式配置DEM 样式架构</div>
  <div class="yuki-test__inner">wew </div>
  <div class="yuki-test--success">sdsd</div>

  <RouterView />
  <hr>
  <div>{{ flag }}</div>
  <yukiTsx name="yuki" @on-click="getName"></yukiTsx>
</template>

<style  lang="scss">
@include b(test) {
  color:red;
  @include e(inner){
    color: blue;
  }
  @include m(success) {
    color: green;
  }
}
</style>
github.com/antfu/unplugin-auto-import