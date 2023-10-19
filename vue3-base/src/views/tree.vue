<template>
   <!-- 递归组件 -->
   <div class="tree">
     <div :key="index" v-for="(item,index) in data">
        <div  @click.stop='clickItem(item, $event)' >
        {{item.name}}
        </div>
        <Tree v-if='item?.children?.length' :data="item.children"></Tree>
        <!-- <ASTree @click.stop='clickItem' v-if='item?.children?.length' :data="item.children"></ASTree> -->
    </div>
  </div>
 <div></div>

</template>
<script setup lang='ts'>
interface Tree{
    name: string,
    icon?:string,
    children?:Tree[]
}
defineProps<{
    data?:Tree[]
}>()
const clickItem = (item:Tree, e:any) => {
    console.log(item, e);
}
// defineOptions({
//     name: 'ASTree'
// })


// type TreeList = {
//   name: string;
//   icon?: string;
//   children?: TreeList[] | [];
// };
// type Props<T> = {
//     data?:T[]|[]
// }
// defineProps<Props<TreeList>>()
// const clickItem = (item:TreeList) => {
//     console.log(item);
    
// }
// <script lang="ts">
//   1 新加script 标签 重新定义递归组件名， 注意script 是在setup 模式下的
// export default {
//   name:"TreeItem" // 在template 中就是 <TreeItem> 使用    该方式待定
// } 

// 2、安装插件 npm i unplugin-vue-define-options
// 在 vite.config.js 中引入
//  import DefineOptions from 'unplugin-vue-define-options/vite'
// import Vue from '@vitejs/plugin-vue'
 
//  export default defineConfig({
//    plugins: [Vue(), DefineOptions()],
//  })
// 同时在 tsconfig.json 配置：compilerOptions."types": ["unplugin-vue-define-options/macros-global"],
// 在 组件中 实用编译宏 defineOptions({
    // name: 'xxx'
// })

// 3、 template  TreeItem 其实就是当前组件 通过import 把自身又引入了一遍 如果他没有children 了就结束

</script>
<style scoped>
.tree {
    margin-left: 10px;
}
</style>