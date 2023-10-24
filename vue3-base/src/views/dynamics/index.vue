<template>
 <!-- 什么是动态组件 就是：让多个组件使用同一个挂载点，并动态切换，这就是动态组件 
     在挂载点使用component标签，然后使用v-bind:is=”组件”
-->
 <div style="display: flex;">
    <div @click="submit(item, index)" :class="[active === index ? 'active' : '']" v-for="(item,index) in data" class="tabs">
        <div style="cursor: pointer;" >{{ item.name }}</div>
    </div>
 </div>
 <!-- tabs 实现显示不同业务组件，也可以使用v-if、路由来实现 -->
 <component :is="comID"></component>

</template>
<script setup lang='ts'>
import {ref, reactive, markRaw, shallowRef} from 'vue'
import ACom from './components/A.vue'
import BCom from './components/B.vue'
import CCom from './components/C.vue'

const comID = shallowRef(ACom) // 这样写 会把整个组件实例进行代码，性能考虑，不需要整个组件实例进行代理
const active = ref(0)
const data = reactive([
    {
        name: 'A组件',
        com: markRaw(ACom) // 这样写 会把整个组件实例进行代码，性能考虑，不需要整个组件实例进行代理 ,使用markRow 就会有这个__v_skip ,__skip__属性， reative 看到这个属性，就会跳过proxy代理
    },
    {
        name: 'B组件',
        com: markRaw(BCom)
    },
    {
        name: 'C组件',
        com: markRaw(CCom)
    },

])

const submit = (item:any, index:any) => {
    active.value = index
    console.log(comID);
    
    comID.value = item.com
}
</script>
<style scoped lang="scss">
 .tabs {
    width: 100px;
    border: 1px solid #ccc;
    padding: 5px 10px;
    margin: 5px;
    cursor: pointer;
 }
 .active {
    color: #fff;
    background-color: rgba($color: #2d2d2d, $alpha: .5);
 }
</style>