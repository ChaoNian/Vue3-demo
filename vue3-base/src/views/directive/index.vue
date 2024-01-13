<template>
  <div>
   自定义指令
   <hr>
   <!-- <button @click="flag = !flag">切换</button> -->
   <!-- v-move:参数.修饰符 -->
   <!-- <A v-if="flag" v-move:aa.yuki="{background: 'red'}"></A> v-if="flag" 触发beforeUpdate update-->
   
   <!-- flag:flag 值更新时   钩子 updated 会触发-->
   <!-- <A v-move:aa.yuki="{background: 'red', flag:flag}"></A> -->
    <!-- -----end------ -->

   <!-- 自定义指令 按钮权限 -->
   <!-- <btn></btn> -->


   <!-- 案例 浮窗拖拽 -->
   <!-- <drag></drag> -->

   <!-- 图片懒加载 -->
   <!-- <imgLazy></imgLazy> -->


   <div class="resize">
    宽高可拖拽

   </div>
  </div>
</template>

<script setup lang='ts'>
import {ref, Directive} from 'vue'
import A from './A.vue'
import btn from './btnAuth.vue'
import drag from './drag.vue'
import imgLazy from './imgLazy.vue'
let flag = ref<boolean>(false)
/**
 *  created 元素初始化的时候
    beforeMount 指令绑定到元素后调用 只调用一次
    mounted 元素插入父级dom调用
    beforeUpdate 元素被更新之前调用
    update 这个周期方法被移除 改用updated
    beforeUnmount 在元素被移除前调用
    unmounted 指令被移除后调用 只调用一次
  Vue2 指令 bind inserted update componentUpdated unbind

 */
const vMove: Directive = {
   created () {
    console.log('====created');
   },
   beforeMount() {
    console.log('====beforeMount');
   },
   mounted(...arg:Array<sny>) {
    console.log('====mounted', arg);
   },
   beforeUpdate() {
    console.log('====beforeUpdate');
   },
   updated() {
    console.log('====update');
   },
   beforeUnmount() {
    console.log('====beforeUnmount');
   },
   unmounted() {
    console.log('====unmounted');
   },
}
</script>

<style scoped>
.resize {
  border: 1px solid #d2d2d2;
  width: 200px;
  height: 200px;
  resize: both; 
  /* css 实现拖拽 */
  overflow: hidden;
}
</style>