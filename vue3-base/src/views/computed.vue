<template>
  <div>姓：<input type="text" v-model="firstName" /></div>
  <div>名：<input type="text" v-model="lastName" /></div>
  <div>全名：{{ name }}</div>
 <div @click="changename">改变名字</div>
  <br>
  <!-- 数组 Ts 循环 用法 -->
  <div v-for="item in data">
    <div>{{ item.name }}- {{ item.price }}- {{ item.num }}</div>
  </div>
</template>
<script setup lang='ts'>
import {computed, reactive, ref} from 'vue'
let firstName = ref('张')
 let lastName = ref('三')
//  1、选项式写法 支持一个对象传入get函数 set函数 自定义操作
let name = computed({
    get() {
        return firstName.value + '-' +lastName.value
    },
    set (newVal) {
        console.log(newVal);
        [firstName.value, lastName.value] = newVal.split('-')
    }
})
function changename () {
    name.value = '你好-js'
}

// 2、函数式写法  只能支持一个getter函数 不允许修改值的
// let name = computed(() => firstName.value + '-' + lastName.value)
// function changename () {
//     name.value = '你好-js' // 提示：computed.vue:29 Write operation failed: computed value is readonly
// }

// 实战中写法：多处地方都调用某个函数，达到一个数据的更新，例如购物车的 增、减、删商品，时汇总数据也需要跟着变化，搜索功能，就可以使用计算属性

// 数组ts写法
interface Data {
    name: string;
    price:number;
    num: number
}
let data = reactive<Data[]>([
    { name: "", price:0, num:0}
])

/**
 * 源码解读
 * 1、格式化 判断是函数还是对象
 * 2、缓存， 脏值检测
 */

</script>
<style scoped>

</style>