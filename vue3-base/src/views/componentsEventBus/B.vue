<template>
    <div class="box">子B 组件:{{ Flag }}</div>
</template>
<script setup lang='ts'>
import Bus from './Bus'
import { getCurrentInstance, ref } from 'vue';

let Flag = ref(false)
Bus.on('on-click', (flag:boolean) => {
    Flag.value = flag
})
    // type Props = {
    //     flag: boolean
    // }
    // defineProps<Props>()


const instance = getCurrentInstance()
const event = (eventtype, str)=> {
 console.log(eventtype, str, 'str*');
}
// on 监听函数
instance?.proxy?.$Bus.on('mitt-click', (str)=> {
 console.log(str, 'str');
})
instance?.proxy?.$Bus.on('*', event)
// 取消监听 off(取消指定的mitt事件， 取消的函数)
instance?.proxy?.$Bus.off('mitt-click', event)


// 删除全部mitt事件
instance?.proxy?.$Bus.all.clear()
</script>
<style scoped>
.box {
    padding: 20px;
    background-color: antiquewhite;
}
</style>