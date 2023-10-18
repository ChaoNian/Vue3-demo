<script setup lang="ts">
// import TheWelcome from '../components/TheWelcome.vue'
import life from './life.vue';
import Chaild from './chaild.vue'
import {computed, onBeforeMount, onMounted, reactive, ref, useAttrs, watch} from 'vue'
// ts 通过 InstanceType 获取子组件的属性和方法，定义的类型必须是组件名同名Chaild, 👎在mounted 生命周期才能读取到实列
const child = ref<InstanceType<typeof Chaild>>()

onBeforeMount(() => {
  console.log(child.value?.name, 'child.value?.name') // undefined
})
onMounted(() => {
  console.log(child.value?.name, 'child.value?.name') // defineExpose方法定义的数据 子传父 
})

const count = ref('0')
// console.log(count);

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
const publicsheBooksMessage1 = computed<number | string>(() => {
  // auth.name, count.value 自动推导出类型number
  return auth.name + count.value // 只能返回数字
})

// ----可写的计算属性
const firstName = ref('90')
const fullname = computed<number | string>({
  get() {
    return firstName.value + '-' + count.value
  },
  set(newName) {
    if (typeof newName === 'string') {
      [firstName.value, count.value] = newName.split(',')
    }
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

const title = ref('父组件的数据')
const getName = (name: string) => {
  console.log(name, '子传父 的数据');
  
}


</script>

<template>
  <main>
    <h1>计算属性</h1>
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
    <hr>
    <br>
    <div>
      <h1>父子组件传参</h1>
    </div>
    <hr>
    <Chaild :title="title" :arr="[23, 989]" @on-click="getName" ref="child"></Chaild>

  </main>
</template>
