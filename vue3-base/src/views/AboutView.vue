<template>
  <div class="about">
    <h1>This is an about page</h1>
   
    <input ref="input" />

    <!-- 数组中使用ref -->
    <ul>
      <li v-for="item in list" ref="itemRefs">{{ item }}</li>
    </ul>

    <!-- 插槽 -->
    <br>
    <button @click="changename">动态插槽{{ dynamicSlotName }}</button>
    <SlotView>
      <template  v-slot="slotProps">哈哈哈，我是默认插槽，{{ slotProps.text }},</template> 
      <template #head="slotProps">具名插槽:head{{ slotProps.text }}，</template>
      <!-- 动态插槽 -->
      <template #[dynamicSlotName]>动态插槽:{{ dynamicSlotText }}</template>
 
    </SlotView>
  </div>
  <br>
  <toXXVue></toXXVue>
  <br>
  <Computed></Computed>
  <br>
  <watchCom></watchCom>
  <br>
 
</template>
<script setup lang="ts">
import {onMounted, ref, watchEffect, computed} from 'vue'
import SlotView from './SlotView.vue';
import toXXVue from './to系列.vue';
import Computed from './computed.vue'
import watchCom from './watch.vue';
 const input = ref(null)
 const list = ref([
  1,2,3,4
 ])
 const itemRefs = ref(null)
 let dynamicSlotName = ref('head1')
 const dynamicSlotText = computed(() => {
  const {value} = dynamicSlotName
  // console.log(value, 'valuevaluev/alue');
  return value === 'head1' ? '-----这是head部分' : '=====这是foot部分'
  
  
 })
 function changename() {
  let name = dynamicSlotName.value
  // console.log(name, '11');
  
  dynamicSlotName.value = name === 'head1' ? 'foot' : 'head1'
  // console.log(dynamicSlotName, 'dynamicSlotName');
 }
 onMounted(() => {
  // console.log(input, list, 'ref-input');
  
 })
 watchEffect(() => {
  if (input.value) {
  //  console.log(input, 'input.value');
   
  }
 })
</script>
<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
