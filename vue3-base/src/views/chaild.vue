<template>

 <!-- <div>我是子组件</div>
 <div>{{ title }}</div>
 <div>{{ arr }}</div>
 <button @click="send">传父级数据</button> -->

 <!--  示列 封装瀑布流 -->
 <div class="wraps">
    <div 
    v-for="item in waterList"
    class="items"
    :style="{height:item.height + 'px', background: item.background, top:item.top + 'px', left: item.left+'px'}"></div>
 </div>

</template>
<script setup lang='ts'>
import { h, onMounted, reactive } from 'vue'
const waterList = reactive<any[]>([])

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
const prods = defineProps<{
    title:string,
    arr: number[],
    list: any[]
}>()
// 在js获取propd
// console.log(prods.title); // 打印 ‘父组件的数据’

// ts 特有定义默认值的方法 withDefaults
// const prods = withDefaults(defineProps<{
//     title:string,
//     arr: number[],
//     
// }>(), {
//     arr: () =>[11,2,3] // 设置复杂的数据类型 需要写为函数
// })
// // 在js获取propd
console.log(prods); // 打印 ‘父组件的数据’


const init = () => {
    // 高度数组
    const heightList: any[] = [] // 记录列高度
    const width = 130 // 设置每一列的宽度（item宽度+两侧间距）， 在css中item的width是120px， 
    const x = document.body.clientWidth // 获取视口的宽度

    const column = Math.floor(x/width) // 得到能排多少列，需要向下取整

    for (let i = 0; i < prods.list.length; i++) {
        if (i < column) {
            prods.list[i].top = 10
            prods.list[i].left = i * width
            heightList.push(prods.list[i].height + 10) // item 的高度➕下间距
            waterList.push(prods.list[i])
        } else {
            // 找到最小高度的item ,计算出下一个DOM 的top、left、的值，实现拼接在最小高度那一列
            let currentH = heightList[0]
            let index = 0
            heightList.forEach((h, inx) => {
                if(currentH > h) {
                    // 找到最小高度的那一列
                    currentH = h
                    index = inx
                }
            })
            
            prods.list[i].top = (currentH + 20)
            prods.list[i].left = index * width
            heightList[index] = (heightList[index] + prods.list[i].height + 20)
            waterList.push(prods.list[i])
        }
    }
}
onMounted(() => {
    // 窗口改变需要重新计算
    window.onresize = () => init()

    init()
})

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
<style scoped lang="scss">
.wraps {
    position: relative;
    height: 100%;
    .items{
        position: absolute;
        width: 120px;
    }

}
</style>