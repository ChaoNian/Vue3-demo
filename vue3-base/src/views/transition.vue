<template>
   <div class="content">
      <button @click="flag = !flag">switch</button>
      <!-- 用法1  name属性定义class-->
      <!-- <transition name="fade">
        <div v-if="flag" class="box"></div>
      </transition> -->
      <!-- 用法2  自定义类名 -->
      <!-- <transition 
        enter-from-class="aa-enter-from"
        enter-active-class="aa-enter-active"
        enter-to-class="aa-enter-to"
        leave-from-class="aa-leave-from"
        leave-active-class="aa-leave-active"
        leave-to-class="aa-leave-to">
        <div v-if="flag" class="box"></div>
    </transition> -->
    <!-- 结合第三方类库 animate.css 来使用 -->
    <!-- duration: 动画时长,值有一个值或对象：number｜{enter:number, leave:number} -->
      <transition 
       :duration="1000"
        enter-active-class="animate__animated animate__flipInX"
        leave-active-class="animate__animated animate__fadeOutDown">
        <div v-if="flag" class="box"></div>
      </transition>

   </div>
 <div></div>

</template>
<script setup lang='ts'>
import{ref} from 'vue'
import 'animate.css'
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


// 用法2 自定义类名
.aa-enter-from {
    width: 0;
    height: 0;
}
.aa-enter-active {
    // 过程
    transition: all 1.5s ease;
}
.aa-enter-to { // 进入 到 XX 结束
    width: 200px;
    height: 200px;
    transform: scale(2); // 放大2倍
}
.aa-leave-from {
    width: 200px;
    height: 200px;
}
.aa-leave-active {
    // 过程
    transition: all 1.5s ease;
}
.aa-leave-to { // 离开 到 XX 结束
    width: 0;
    height: 0;
}
</style>