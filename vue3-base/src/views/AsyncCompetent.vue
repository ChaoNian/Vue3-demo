<template>
    <h1>异步组件 defineAsyncComponent()</h1>
    <h2>---------写法1--------</h2>
    <AdimnPage />\<br>
    <h2>--------写法2---- </h2>
    <AdimnPage2></AdimnPage2>
    <br>
    <h2>--------写法3---- </h2>
    <AdimnPage3></AdimnPage3>

    <br>
    <div>
        <h1>递归组件</h1>
        <treeEl :data='treeData'></treeEl>
    </div>
</template>
<script setup lang="ts">
import { defineAsyncComponent, reactive } from 'vue'
import treeEl from './tree.vue'
// 写法3
const AdimnPage = defineAsyncComponent((): any => {
    // 一定要return出组件
    return import('./ref.vue')
})

// 写法2
const AdimnPage2 = defineAsyncComponent((): any => {
    // 一定要return出组件
    return new Promise((resolve, reject) => {
        //  服务器 远程加载回来
        resolve(/**获取到的组件 */import('./ref.vue'))
        reject()
    })
})


// 写法3
const AdimnPage3 = defineAsyncComponent({
    // 加载函数
    loader: () => import('./ref.vue'),
    //加载一步组件时使用的组件
    loadingComponent: AdimnPage,
    // loadingComponent: () =>  import('./ref.vue'),
    // 展示加载组件前的延迟时间 默认200ms
    delay: 5000,

    // 加载失败后展示的组件
    // errorComponent: () => import('./ref.vue'),
    errorComponent: () => AdimnPage,

    // 如果提供了一个timeout 时间限制，并超时了 也会显示这里配置的报错组件，默认值时Infinity
    timeout: 3000,
    suspensible: false,
    // onError: (
    //     error: Error,
    //     retry: () => void,
    //     fail: () => void,
    //     attempts: number
    // ) => any

})

// 递归组件写法
type TreeList = {
    name: string,
    icon?: string,
    children?: TreeList[] | []
}
const treeData = reactive<TreeList[]>([
    {
        name: 'n-1',
        children: [
            {
                name: 'n-2',
                children: [
                    {
                        name: 'n-3'
                    }
                ]
            }
        ]
    },
    {
        name: 'n2-1',
        children: [
            {
                name: 'n2-2',
                children: [
                    {
                        name: 'n2-3'
                    }
                ]
            }
        ]
    },
    {
        name: 'n3-1',
    }
])
</script>