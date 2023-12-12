<template>
   <div class="content">
    <br>
      <button @click="flag = !flag">{{flag ? '隐藏':'显示' }}</button>
      <!-- 用法1  name属性定义class-->
      <!-- <transition name="fade">
        <div v-if="flag" class="box font-12"></div>
      </transition>
      <br> -->
      <!-- 用法2  自定义类名 -->
      <!-- <transition 
        enter-from-class="aa-enter-from"
        enter-active-class="aa-enter-active"
        enter-to-class="aa-enter-to"
        leave-from-class="aa-leave-from"
        leave-active-class="aa-leave-active"
        leave-to-class="aa-leave-to">
        <div v-if="flag" class="box">自定义类名</div>
    </transition> -->

    <!-- 用法3 结合第三方类库 animate.css 来使用https://animate.style/ -->
     <!--duration: 动画时长,值有一个值或对象：number｜{enter:number, leave:number} -->
      <transition 
        :duration="1000"
        enter-active-class="animate__animated animate__flipInX"
        leave-active-class="animate__animated animate__fadeOutDown">
        <div v-if="flag" class="box font-12">结合第三方类库 animate.css</div> 
      </transition>
      <br>
      <!-- 用法4 transition 8个 生命周期 -->
      <!-- <transition 
        @before-enter="EnterFrom"
        @enter="EnterActive"
        @after-enter="EnterTo"
        @enter-cancelled="EnterCancel"
        @before-leave="LeaveFrom"
        @leave="LeaveActive"
        @after-leave="LeaveTo"
        @leave-cancelled="LeaveCancel" >
        <div v-if="flag" class="box">8个 生命周期</div> 
      </transition> -->

      <!-- 用法5 结合 gsap动画库 实现动画-->
     <!-- <transition 
        @before-enter="EnterFrom"
        @enter="EnterActive"
      
        @leave="Leave" >
        <div v-if="flag" class="box font-12">gsap动画库</div> 
      </transition> -->



      <!-- 用法6 transition 属性appear ,设置初始节点过度-就是页面加载完成就开始动画对象的三个状态 -->
      <!-- <br>
      <transition
      appear-active-class="ap-active"
      appear-from-class="ap-from"
      appear-to-class="ap-to">
      <div v-if="flag" class="box">appear</div> 
      </transition> -->
      <br>
      <!-- 结合animate.css使用 -->
      <!-- <transition
      appear-active-class="animate__animated animate__backInDown"
      appear-to-class="animate__animated animate__backInRight"
      appear-from-class="animate__animated animate__backInRight"
      appear>
      <div v-if="flag" class="box font-12">appear  animate.css</div> 
      </transition> -->

   </div>

</template>
<script setup lang='ts'>
import{ref} from 'vue'
import 'animate.css'
import gsap from 'gsap'

const flag = ref<boolean>(true)

// el DOM 节点
const EnterFrom = (el:Element) => {
    // console.log(el, '动画进入之前EnterFrom');
    gsap.set(el, {
        width:0,
        height:0
    })
    
}
// done 动画过度执行，默认执行
const EnterActive = (el:Element, done: gsap.Callback) => {
    // console.log(el,'过度曲线 EnterActive');
    // setTimeout(() => {
    //     done() // 3s后执行过度完成 EnterTo函数
    // }, 3000)
    gsap.to(el, {
        width: 200,
        height: 200,
        onComplete: done
    })
}

// const EnterTo = (el:Element) => {
//     // console.log(el,'动画进入之后 EnterTo');
    
// }
// const EnterCancel = (el:Element) => {
//     console.log(el,'动画进过度效果 被打断时 EnterCancel');
// }

// 离开

// el DOM 节点
// const LeaveFrom = (el:Element) => {
//     // console.log(el, '动画离开之前LeaveFrom');
    
// }
// done 动画过度执行，默认执行
// const LeaveActive = (el:Element, done:Function) => {
//     // console.log(el,'过度曲线 LeaveActive');
//     // setTimeout(() => {
//     //     done() // 3s后执行过度完成 EnterTo函数
//     // }, 3000)
//     done()
    
// }

const Leave  = (el:Element, done:gsap.Callback) => {
    gsap.to(el, {
        width: 0,
        height: 0,
        onComplete: done
    })
}

// const LeaveTo = (el:Element) => {
//     // console.log(el,'动画离开之后 LeaveTo');
    
// }
// const LeaveCancel = (el:Element) => {
//     console.log(el,'动画离开过度效果 被打断时------');
// }

</script>
<style scoped lang="scss">
.box{
    width: 200px;
    height: 200px;
    background-color: red;
}
.font-12 {
    font-size: 12px;
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
    transform: scale(1.2); // 放大1.2倍
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


// appear

.ap-from {
    width: 0;
    height: 0;
}
.ap-active {
    transition: all 1.5s ease;
}
.ap-to {
    width: 200px;
    height: 200px;
}
</style>