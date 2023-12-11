<template>
<!-- 单节点动画可以使用transition
多节点可以使用 transition-group： 同时渲染多个节点
 特点：
 1、默认情况下 它不会渲染一个包裹元素，但是可以通过tag attribute 指定渲染一个元素， <transition-group tag="div">或  <transition tag="section"> 实际生成DOM标签div 或 section 包一层；
 2、 过度模式下不可用， 因为我们不再相互切换特有的元素
 3、内部元素 总是需要提供一个唯一的 key attribute值
 4、CSS过度的类型将会应用在内部的元素中，而不是这个组/容器本身-->
 <div class="contet">
     <button @click="add">ADD</button>
     <button @click="pop">POP</button>
    <div  class="wraps">
        <transition-group enter-active-class="animate__animated animate__rubberBand" leave-active-class="animate__animated animate__hinge">
            <div class="item" :key="item" v-for="item in list">{{ item }}</div>
        </transition-group>
    </div>
 </div>



 <!-- 列表过度 -->
 <hr>
   <h2>列表的移动过度示例</h2>
 <TranGroupList></TranGroupList>

</template>
<script setup lang='ts'>
import {reactive, ref} from 'vue'
import TranGroupList from './transition-group-list.vue';
import 'animate.css'
const list = reactive<number[]>([1,2,3,4,5])
const add = () => {
    list.push(list.length+1)
}
const pop = () => {
    list.pop()
}
</script>
<style scoped lang="scss">
.wraps {
    display: flex;
    .item {
        font-size: 20px;
        margin: 10px;
        color: #fff;
    }
}
</style>