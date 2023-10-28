<template>
   <div class="content">
      <button @click="flag = !flag">switch</button>
      <!-- 用法1  name属性定义class-->
      <transition name="fade">
        <div v-if="flag" class="box"></div>
      </transition>
   </div>
 <div></div>

</template>
<script setup lang='ts'>
import{ref} from 'vue'
const flag = ref<boolean>(true)

</script>
<style scoped lang="scss">
.box{
    width: 200px;
    height: 200px;
    background-color: red;
}
// 用法1 
.fade-enter-from { // 进入 从XX 开始
    width: 0;
    height: 0;
}
.fade-enter-active {
    // 过程
    transition: all 1.5s ease;
}
.fade-enter-to { // 进入 到 XX 结束
    width: 200px;
    height: 200px;
    transform: scale(2); // 放大2倍
}

.fade-leave-from { // 离开 从XX 开始
    width: 200px;
    height: 200px;
}
.fade-leave-active {
    // 过程
    transition: all 1.5s ease;
}
.fade-leave-to { // 离开 到 XX 结束
    width: 0;
    height: 0;
}
</style>