<template>
  <div>
   图片懒加载
   <div>
    <img
      v-lazy="item"
      width="360" 
      height="500" 
      v-for="item in arr"
      alt="" 
      srcset="">
   </div>
  </div>
</template>

<script setup lang='ts'>
import {ref, reactive, Directive} from 'vue'
// 这里引入出现报红， JPG文件 引入会报错，问题待解决
/*
import.meta.globEager（相对路径）  静态加载
import.meta.glob（） 懒加载 模式
*/ 
let imageList: Record<string, { default: string }> = import.meta.glob('./images/*.*', {eager: true})
// console.log(imageList);
let arr = Object.values(imageList).map(v => v.default)
// console.log(arr);
let vLazy:Directive<HTMLImageElement, string> = async (el, bingding) => {
  // console.log(el);
  const def = await import('./images/logo.svg')
  el.src = def.default // 默认显示的图片

  // 判断一个元素是否在可视区内出现  IntersectionObserver 这个特性 可以实现 虚拟滚动
  const observer = new IntersectionObserver((enr) => {
    console.log(enr);
    if (enr[0].intersectionRatio > 0) {
      setTimeout(() => {
        el.src = bingding.value
        observer.unobserve(el)
      }, 2000);
      
    }
    
  })
  observer.observe(el)
  
}


</script>

<style scoped>

</style>