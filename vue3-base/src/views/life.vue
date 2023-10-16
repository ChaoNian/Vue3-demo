<template>
<!-- vue3 的生命周期 -->
 <div>生命周期</div>
  <div ref="div">{{ str }}</div>
  <button @click="change">修改数据</button>
  <button @click="initChange">初始化数据</button>
</template>
<script setup lang='ts'>
import { ref, onBeforeMount,onBeforeUnmount,onBeforeUpdate,onMounted, onUnmounted, onUpdated, getCurrentInstance, onErrorCaptured, onRenderTracked, onRenderTriggered, onActivated, onDeactivated } from "vue";
// 注意 beforeCreate created 在setup语法糖模式时没有这两个生命周期的   setup来代替

const str = ref<string>('星期天')
const div = ref<HTMLDivElement>()

// 获取当前组件实例，这个对象可以看到生命周期是否定义 bc、bm、 m等属性就是生命周期勾子的简写，如果当前组件没有定义生命周期勾子，值为null
const instace = getCurrentInstance()

console.log('setup',instace, div);
const initChange = () =>{
    str.value = '星期天'
}
// 创建
const change = () =>{
    str.value = str.value + '/星期一'
}
// 创建
onBeforeMount(() => {
  console.log('创建组件之前：onBeforeMount', div.value); // 获取不到DOM
  
})
onMounted(() => {
  console.log('创建组件之后：onMounted', div.value) // 获取到DOM
})


// 更新
onBeforeUpdate(() => {
    console.log('更新组件之前：onBeforeUpdate', div.value?.innerText)
})
onUpdated(() => {
  console.log('创建组件之后：onUpdated', div.value?.innerText);
})

// 销毁
onBeforeUnmount(() => {
  console.log('销毁组件之前：onBeforeUnmount', div.value);
})
onUnmounted(() => {
  console.log('销毁组件以后：onUnmounted', div.value);
})

// 在捕获了后代组件传递的错误时调用。
onErrorCaptured(callback => {
  console.log('onErrorCaptured', callback, div.value);
})

// 调试钩子 当组件渲染过程中追踪到响应式依赖时调用。
// 这个钩子仅在开发模式下可用，且在服务器端渲染期间不会被调用。
onRenderTracked(callback=> {
  console.log('onRenderTracked', callback, div.value);
})

// 调试钩子 当响应式依赖的变更触发了组件渲染时调用。
// 这个钩子仅在开发模式下可用，且在服务器端渲染期间不会被调用。
onRenderTriggered(callback => {
  console.log('onRenderTracked', callback, div.value);
})
// 注册一个回调函数，若组件实例是 <KeepAlive> 缓存树的一部分，当组件被插入到 DOM 中时调用。这个钩子在服务器端渲染期间不会被调用。
onActivated((callback: () => void): void => {
    callback()
  console.log('onActivated', div.value);
})

// 注册一个回调函数，若组件实例是 <KeepAlive> 缓存树的一部分，当组件从 DOM 中被移除时调用。 这个钩子在服务器端渲染期间不会被调用。
onDeactivated((callback: () => void): void => {
    callback()
  console.log('onDeactivated', callback, div.value);
})
</script>
<style scoped>

</style>