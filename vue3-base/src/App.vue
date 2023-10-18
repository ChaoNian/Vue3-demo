<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
import { provide, readonly, ref, getCurrentInstance } from 'vue';
import {myInjectionKey} from './views/key'
let count = ref(0)
let count1 = ref(10)

// 获取当前组件实例, 这个对象可以看到生命周期是否定义 bc、bm、 m等属性就是生命周期勾子的简写
const instace = getCurrentInstance()

// console.log('setup',instace);
provide(/*全局注入名 */ 'message1', 'from App.vue hello1')


// 提供一盒修改count的函数，原则：提供的数据如果要变更，最好在提供数据的组件里进行操作，统一管理， 一个地方修改接收的组件都会变化
function injFun() {
  count.value = 0
}
provide(/*注入名 */ 'message', {count, injFun})

// 通过数据只读, 如果在子组件修改这个数据，控制台就会有提示这个属性只读 key "value" failed: target is readonly. 
provide(/*注入名 */ 'onlyData', readonly(count1))

provide(/*注入名 */ myInjectionKey, count)
</script>

<template>
  <header>
    <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" />
    <div @click="count++">provide 注入 点击 count :{{ count }}</div>
    <div class="wrapper">
      <HelloWorld msg="You did it!" class="123" style="font-color: red"/>

      <nav>
        <RouterLink to="/" >Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
        <RouterLink to="/slot">
          默认的插槽出口
        </RouterLink>
        <RouterLink to="/AsyncCompetent">异步组件 </RouterLink>
      </nav>
    </div>
  </header>
  <div class="yuki-test">测试全局样式配置DEM 样式架构
    <div class="yuki-test__inner">wew </div>
    <div class="yuki-test--success">sdsd</div>
  </div>
  <RouterView />
</template>

<style scoped lang="scss">
header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}

// bem架构
@include b(test) {
  color:red;
  @include e(inner){
    color: blue;
  }
  @include m(success) {
    color: green;
  }
}
</style>
