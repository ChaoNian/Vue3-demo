<template>
  <div class="box" v-move>
   <div class="header">头部</div>
   <div >内容</div>
  </div>
</template>

<script setup lang='ts'>
import { Directive, DirectiveBinding } from 'vue';

const vMove:Directive<any, void> = (el:HTMLElement, bingding:DirectiveBinding) => {
    let moveElement:HTMLDivElement = el.firstElementChild as HTMLDivElement
    console.log(moveElement, 'moveElement');
    const mouseDown = (e:MouseEvent) => {
        
        const X = e.clientX - el.offsetLeft
        const Y = e.clientY - el.offsetTop
        const move = (e:MouseEvent) => {
            let left = e.clientX - X;
            let top = e.clientY - Y;

            // 边界判断 逻辑？？
            // if (left < 0) {
            //     left = 0
            // } else if (left > window.innerWidth - el.offsetWidth) {
            //     left = window.innerWidth - el.offsetWidth;
            // }
            // if (top < 0) {
            //     top = 0
            // } else if (top > window.innerHeight - el.offsetHeight) {
            //     top = window.innerHeight - el.offsetHeight
            // }

            el.style.left = left + 'px'
            el.style.top = top + 'px'
        }

        document.addEventListener('mousemove', move)
        document.addEventListener('mouseup', () => {
            document.removeEventListener('mousemove', move)
        })
    }
    moveElement.addEventListener('mousedown', mouseDown)
    
}
</script>

<style scoped lang="scss">
.box {
    position: fixed;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    width: 200px;
    height: 200px;
    border: 1px solid #ccc;
    .header {
        height: 20px;
        background: black;
        cursor: pointer;
    }
}
</style>