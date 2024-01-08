<template>
  <div class="btns">
    <!-- 使用自定义指令 实现按钮权限控制 -->
     <button v-has-show="'shop:create'">创建</button>
     <button v-has-show="'shop:edit'">编辑</button>
     <button v-has-show="'shop:delete'">删除</button>
  </div>
</template>

<script setup lang='ts'>
import { ref } from 'vue';
import type {Directive} from 'vue'


localStorage.setItem('userId', 'yuki')

// 模拟返回的权限数据
const permission = [
    // '用户id:页面字段:按钮权限字段'
    'yuki:shop:edit',
    'yuki:shop:create',
    'yuki:shop:delete',
]

const userId = localStorage.getItem('userId') as string
const vHasShow:Directive<HTMLElement, string> = (el, bingding) => {
    console.log(el, bingding);
    if (!permission.includes(userId + ':' + bingding.value)) {
        el.style.display = 'none'
    }
}
</script>

<style scoped lang="scss">
.btns {
    button{
       margin: 20px;
    }
}
</style>