<template>
   <!-- 列表的移动过度示例 
   技术点： <transition-group> 组件还有一个特殊之处除了进入和离开，transition-group还可以为定位的改变添加动画
         第三方库： lodash  npm install lodash --S  注意在ts 下 还需要安装类型声明文件库 npm i --save-dev @types/lodash
-->
 <div>
    <button @click="random">random</button>
    <transition-group move-class="move" class="wrap" tag="div">
      <div class="item" v-for="item in list" :key="item.id">{{ item.number }}</div>
    </transition-group>
 </div>

</template>
<script setup lang='ts'>
import {ref} from 'vue'
import _ from 'lodash' // 需要安装声明文件 npm i -D @types/lodash

let list = ref(Array.apply(null, {length:81} as number[]).map((_, index) => {
    return {
        id: index,
        number: (index % 9) + 1
    }
}))
/*
补充：Array.apply(null, {length:81} 和 new Array（81） 区别？
new Array（81）: 创建一个空属性数组， 数组长度就是设置的81
Array.apply(null, {length:81} ： 创建初始化有81个元素的数组，每一个元素：undefined
*/

console.log(list, 'list');
const random = () => {
    list.value = _.shuffle(list.value)
}
</script>
<style scoped lang="scss">
.wrap {
    display: flex;
    flex-wrap: wrap;
    width: calc(25px * 9 + 9px);
    .item {
        width: 25px;
        height: 25px;
        border: 1px solid #ccc;
        display: flex;
        justify-self: center;
        align-items: center;
    }
}
.move {
    transition: all 1s;
}
</style>