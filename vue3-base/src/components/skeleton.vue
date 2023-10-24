<template>
<!-- 骨架屏组件 -->
 <div class="sk">
    <div class="sk-2">
        <div></div>
        <div></div>
    </div>
    <hr>
    <div class="sk-3"></div>
    <div class="sk-3"></div>
 </div>

</template>
<script setup lang='ts'>

</script>
<style scoped lang="scss">
.sk {
    padding: 10px;
    .sk-2 {
        display: flex;
        align-items: center;
        margin-bottom: 10px;
        :first-child{
            background-color: #4d4d4d;
            width: 50px;
            height: 50px;
            border-radius: 20px;
            margin-right: 10px;
        }
        :last-child {
            background-color: #4d4d4d;
            width: 100px;
            height: 12px;
            border-radius: 10px;
        }
    }
    .sk-3 {
        background-color: #4d4d4d;
        width: 100%;
        height: 20px;
        border-radius: 6px;
        margin: 10px 0;
    }
}
</style>