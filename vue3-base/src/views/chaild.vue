<template>

 <div>我是子组件</div>
 <div>{{ title }}</div>
 <div>{{ arr }}</div>
 <button @click="send">传父级数据</button>

</template>
<script setup lang='ts'>
// 接收父组件传过来的属性
// 1、没有使用 ts 的写法 宏函数传一个对象
// const prods = defineProps({
//     title: {
//         type:String,
//         default: 'prors默认值'
//     }
// })
// // 在js获取propd
// console.log(prods.title); // 打印 ‘父组件的数据’


// ts 的写法<泛型> 泛型是对象
// const prods = defineProps<{
//     title:string,
//     arr: number[]
// }>()
// 在js获取propd
// console.log(prods.title); // 打印 ‘父组件的数据’

// ts 特有定义默认值的方法 withDefaults
const prods = withDefaults(defineProps<{
    title:string,
    arr: number[]
}>(), {
    arr: () =>[11,2,3] // 设置复杂的数据类型 需要写为函数
})
// // 在js获取propd
console.log(prods); // 打印 ‘父组件的数据’


// js 写法 暴露事件到父级组件
// const emit = defineEmits(['on-click']) // 多个事件名 defineEmits(['on-click', ...])


// ts 方式写
const emit = defineEmits<{
    (e:'on-click', name:string):void // 格式（事件名， 参数）：返回类型
    /**
     * (e:'on-click', name:string):void 多个事件的写法
     * .
     * .
     * .
     */
}>()
const send = () => {
    emit('on-click', '我从子组件过来')
}

// ------给父组件暴露属性或者方法 使用 defineExpose方法 然后在父级组件 通过ref=“child”+ InstanceType方法 获取到属性
defineExpose({
    name: '子传父',
    open: () => console.log(12)
    
})

</script>
<style scoped>

</style>