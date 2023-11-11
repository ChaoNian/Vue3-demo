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
      <!-- <transition 
       :duration="1000"
        enter-active-class="animate__animated animate__flipInX"
        leave-active-class="animate__animated animate__fadeOutDown">
        <div v-if="flag" class="box"></div> 
      </transition> -->

      <!-- transition 8个 生命周期 -->
      <transition 
        @before-enter="EnterFrom"
        @enter="EnterActive"
        @after-enter="EnterTo"
        @enter-cancelled="EnterCancel"
        @before-leave="LeaveFrom"
        @leave="LeaveActive"
        @after-leave="LeaveTo"
        @leave-cancelled="LeaveCancel" >
        <div v-if="flag" class="box"></div> 
      </transition>

   </div>
 <div></div>

</template>
<script setup lang='ts'>
import{ref} from 'vue'
// import 'animate.css'
// import gsap from 'gsap'

const flag = ref<boolean>(true)

// el DOM 节点
const EnterFrom = (el:Element) => {
    // console.log(el, '动画进入之前EnterFrom');
    
}
// done 动画过度执行，默认执行
const EnterActive = (el:Element, done:Function) => {
    // console.log(el,'过度曲线 EnterActive');
    setTimeout(() => {
        done() // 3s后执行过度完成 EnterTo函数
    }, 3000)
    
}

const EnterTo = (el:Element) => {
    // console.log(el,'动画进入之后 EnterTo');
    
}
const EnterCancel = (el:Element) => {
    console.log(el,'动画进过度效果 被打断时 EnterCancel');
}

// 离开

// el DOM 节点
const LeaveFrom = (el:Element) => {
    // console.log(el, '动画离开之前LeaveFrom');
    
}
// done 动画过度执行，默认执行
const LeaveActive = (el:Element, done:Function) => {
    // console.log(el,'过度曲线 LeaveActive');
    // setTimeout(() => {
    //     done() // 3s后执行过度完成 EnterTo函数
    // }, 3000)
    done()
    
}

const LeaveTo = (el:Element) => {
    // console.log(el,'动画离开之后 LeaveTo');
    
}
const LeaveCancel = (el:Element) => {
    console.log(el,'动画离开过度效果 被打断时------');
}

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