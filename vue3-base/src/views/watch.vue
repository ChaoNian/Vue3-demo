<template>
 <div>
    <!-- 单个值 -->
    <label >单个值:</label>
    <input type="text" v-model="message">
    <input type="text" v-model="message1">
    <input type="text" v-model="message2">
    <br>
    <!-- 对象 -->
    <label >对象:</label>
    <input type="text" v-model="head.option.name">
    <input type="text" v-model="head1.option.name">
    <br>
    <!-- watchEffect -->
    <label >watchEffect:</label>
    <input type="text" id="ipt" v-model="message4">
    <input type="text" v-model="message5">
    <button @click="stopWatch">停止监听</button>
    <br> 
 </div>

</template>
<script setup lang='ts'>
import {reactive, ref, watch, watchEffect} from 'vue';
let message = ref<string>('兴趣')
let message1 = ref<string>('两个值')
let message2 = ref<string>('三个值')

// 1 watch常规用法 监听一个值
watch(message, (newVal, odlVal) => {
    console.log(newVal, odlVal);
})
// 2、同时监听两个多个值
watch([message,message1], (newVal, odlVal) => {
    console.log('多个值：',newVal, odlVal); // 打印：['兴趣e', '兴趣122'] (2) ['兴趣', '兴趣122']
    
})
watch([message,message1, message2], (newVal, odlVal) => {
    console.log('多个值：',newVal, odlVal); // 打印：['兴趣e', '兴趣122'] (2) ['兴趣', '兴趣122']
    
})

// 3、对象
let head = ref({
    option: {
        name: 'ref'
    }
})
watch(head, (newVal, odlVal) => {
    console.log('head ref:', newVal, odlVal); // 这样写 新值和旧值是一样的
}, {
    deep: true // 4、深度监听
})  

let head1 = reactive({
    option: {
        name: 'reactive'
    }
})
watch(head1, (newVal, odlVal) => {
    console.log('head1 reactive:', newVal, odlVal); // 5、这样写 新值和旧值是一样的
}) 
// 6、监听对象的单个属性正确写法， watch 第一个参数是函数
watch(() => head1.option.name, (newVal, odlVal) => {
    console.log('head1 reactive:', newVal, odlVal); // 这样写 新值和旧值是一样的， 因为源码上是引用赋值
}, {
    immediate: true, // 7、不配置该属性， 默认false， 如果配置为true， watch进入时，函数立即触发一次
    flush: 'pre', // pre 组件更新前使用， sync 同步执行， post 组件更新后执行， watch上使用不多， 在watchEffect 使用较多
}) 

// 总结：watch源码：支持传入ref对象、reactive对象、 数组、函数 四个模式，
// 传入后进行格式化==》赋值给一个get函数， 如果是ref， ref.velue赋值get函数，如果是reactive。整个对象赋值给get函数，并且处理deep = true
// 是数组， 进行[].some() 遍历，遍历过程中，数组里面有ref对象时，就return .value; 如果是reactive，就 递归，将每个属性进行监听； 如果是函数，就进行加工


// 7、watchEffect
let message4 = ref<string>('watchEffect')
let message5 = ref<string>('watchEffectwatchEffect')

const stop = watchEffect((onivalidate) => {
    console.log('watchEffect:', message4.value, message5.value);
    // 8、回调函数
    onivalidate(() => {
        // 值更值之前优先触发这个 ，使用场景时：接口调用前初始化数据
        console.log('before'); // 9、触发停止监听时，这个回调函数还是会触发一次
    })
    // 获取DOM
    let ipt:HTMLInputElement = document.querySelector('#ipt') as HTMLInputElement;
    console.log('获取DOM：', ipt); // 默认时获取不到DOM，null, 配置；flush: 'post'，就能获取DOM
    
}, {
    flush: 'post'
})
// 10、清除监听 stop（）
let stopWatch = () => stop()
</script>
<style scoped>

</style>