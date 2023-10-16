<script setup lang="ts">
// import TheWelcome from '../components/TheWelcome.vue'
import life from './life.vue';
import {computed, reactive, ref, useAttrs, watch} from 'vue'
const count = ref(0)
console.log(count);

// -----计算属性
const auth = reactive({
  name: 10,
  books: [
    '21', '343', '4545'
  ]
})
// 一个计算属性ref
const publicsheBooksMessage = computed(() => {
  // auth.name, count.value 自动推导出类型number
  return auth.name + count.value
})
// 一个计算属性ref 使用泛型参数， 显式的指定类型
const publicsheBooksMessage1 = computed<number>(() => {
  // auth.name, count.value 自动推导出类型number
  return auth.name + count.value // 只能返回数字
})

// ----可写的计算属性
const firstName = ref(90)
const fullname = computed<number | string>({
  get() {
    return firstName.value + '-' + count.value
  },
  set(newName) {
      [firstName.value, count.value] = newName.split(',')
  }
})

// ---侦听器watch
// 数据源： ref、 计算属性、相应式对象、getter函数、多个数据源数组
const x = ref(0)
const y = ref(2)

// 单个ref
watch(count, (newCount) => {
  // console.log(newCount, 'newCount---');
  
})

// watch getter函数
watch(
  () => x.value + count.value,
  (sum) => {
    // console.log(`sum${sum}`);
  }
)
// 多个数据来源
watch([x, () => count.value], ([newX, mewC]) => {
  // console.log(`----wewe${newX}${mewC}`)
  
})

// ------为事件函数处理标注类型
function changeInput (event:Event) {
  // console.log((event.target as HTMLInputElement).value);
  
}

// 获取透传过来attributes
const userAttr = useAttrs()
// console.log(userAttr, 'userAttr');


</script>

<template>
  <main>
    <div @click="count++">点击：{{ count }}</div>
    <div>计算属性：{{ publicsheBooksMessage }}</div>
    <div>计算属性(泛型)：{{ publicsheBooksMessage1 }}</div>
    <!-- 可写的计算属性 -->
    <div>可写的计算属性：{{ fullname }}</div>

    <div>
      <input type="text" @change="changeInput" />
    </div>
    <!-- <TheWelcome /> -->
    <br>
    <life></life>
  </main>
</template>
