<template>
    <div class="box">子B 组件:{{ Flag }}</div>
</template>
<script setup lang='ts'>
import Bus from './Bus'
import { ref } from 'vue';

let Flag = ref(false)
Bus.on('on-click', (flag:boolean) => {
    Flag.value = flag
})
    // type Props = {
    //     flag: boolean
    // }
    // defineProps<Props>()

</script>
<style scoped>
.box {
    padding: 20px;
    background-color: antiquewhite;
}
</style>