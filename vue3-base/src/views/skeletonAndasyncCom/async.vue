<template>

<div class="sk">
    <div class="sk-2">
        <div>{{ name }}</div>
        <div>23</div>
    </div>
    <hr>
    <div >232</div>
    <div class="sk-3">34</div>
 </div>

</template>
<script setup lang='ts'>
import {ref} from 'vue'
import { axios } from '../../server/axios';
// 定义接口类型， 作为泛型
interface Data {
    data: {
        name:string,
        age: number,
        url:string,
        desc: string
    }
}
const name = ref('')
// await 会有提示， 待解决
// const data = await axios.get<Data>('./data.json')
axios.get<Data>('./data.json').then(res => {
    console.log(res, 'resres');
    name.value = res.data.name

})
</script>
<style scoped lang="scss">
</style>