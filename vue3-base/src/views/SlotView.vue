<template>
    <!-- 插槽: 接收模版HTML的地方， 父组件传递模版片段，在子组件渲染-->
    <div>
        provide提供， inject注入:{{ count }}--- {{ messag1e }}
        <div @click="injFun">在子组件触发重置（祖先组件提供的函数）</div>
        <div @click="count1++">只读：{{ count1 }}</div>
        <div> symbol作为key，大型应用推荐的写法：{{ aa }}</div>
        <br>
        <slot :text="text">
            <!-- 插槽出口 -->
        </slot>
        <slot name="head"  :text="text">
            sd
            <!-- 具名插槽， 可以分配不同的片段 -->
        </slot>
        <br>
        <slot name="head1" :text="text">
            sd说的是
            <!-- 具名插槽， 可以分配不同的片段 -->
        </slot>
        <slot name="foot">
            foot
            <!-- 具名插槽， 可以分配不同的片段 -->
        </slot>
    </div>
</template>

<script setup lang="ts">
 import { inject, ref } from "vue";
 import {myInjectionKey} from './key'
const text = ref('子组件的text')
console.log(myInjectionKey, 'myInjectionKey');


const {count, injFun} = inject('message') as any
// console.log(count, 'message');
const messag1e = inject('message', () => '', true)
const count1 = inject('onlyData') as any
const aa = inject(myInjectionKey)
// console.log(aa);

</script>