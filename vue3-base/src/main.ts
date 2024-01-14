import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
// import TodoDeleteButton from './components/icons'

// 事件Bus 库  mitt  npm i mitt -S
 import mitt from 'mitt'
const Mit = mitt()

import useResize from 'v-resize-yuki'
/**
 * 大多数真实的应用都是由一棵嵌套的、可重用的组件树组成的
 */


/**
 * 下面代码顺序是否有要求？ 执行逻辑是什么？
 */

// 我们传入 createApp 的对象实际上是一个组件（App 是单文件组件），每个应用都需要一个“根组件”，其他组件将作为其子组件。
const app = createApp(App)


// TypeScript注册
// 由于必须要扩展ComponentCustomProperties类型才能获得类型提示
declare module 'vue' {
   export interface ComponentCustomProperties {
      // 扩展 $Bus ，则获取所有Mitt类型 使得在组件使用中有提示
      $Bus: typeof Mit
   }
}
app.config.globalProperties.$Bus = Mit



// 全局组件批量注册 那element Ui 的icon为例
// import * as ElementPlusIconsVue from '@element-plus/icons-vue'
// const ElementPlusIconsVue = {}
// for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
//    app.component(key, component)
// }
/**
 * 补充：Object.entrie（object）
 * Object.entries() 返回一个数组，其元素是直接在 object 上找到相应的可枚举字符串键属性的键值对数组；
 * 这与使用 for...in 循环迭代相同，只是使用 for...in 循环也枚举原型链中的属性。Object.entries() 返回的数组顺序和 for...in 循环提供的顺序相同。
 * 如果只需要属性的键，请使用 Object.keys()。如果只需要属性的值，请使用 Object.values()。

 */

app.use(createPinia())
app.use(router)
app.use(useResize)
/**
 *  应用实例必须在调用了 .mount() 方法后才会渲染出来。该方法接收一个“容器”参数，
    可以是一个实际的 DOM 元素或是一个 CSS 选择器字符串；

    应用根组件（App）的内容将会被渲染在容器元素里面。容器元素自己将不会被视为应用的一部分。

    .mount() 方法应该始终在整个应用配置和资源注册完成后被调用。同时请注意，
    不同于其他资源注册方法，它的返回值是根组件实例而非应用实例。
 */
app.mount('#app')


// ------ 应用配置----
/**
 * 
 * @param err 
 * 应用实例会暴露一个 .config 对象允许我们配置一些应用级的选项，例如定义一个应用级的错误处理器，用来捕获所有子组件上的错误
 */
app.config.errorHandler = (err) => {
    /* 处理错误 */
    console.log(err, 'err');
    
  }

  /**
   * 应用实例还提供了一些方法来注册应用范围内可用的资源，例如注册一个组件: TodoDeleteButton
   * 这使得 TodoDeleteButton 在应用的任何地方都是可用的
   */
//   app.component('TodoDeleteButton', TodoDeleteButton)
  // ---- end ----



  // ---- 多个应用实例 -----
  /**
   * 应用实例并不只限于一个。createApp API 允许你在同一个页面中创建多个共存的 Vue 应用，而且每个应用都拥有自己的用于配置和全局资源的作用域
   */
//   const app1 = createApp({
//     /* ... */
//   })
//   app1.mount('#container-1')
  
//   const app2 = createApp({
//     /* ... */
//   })
//   app2.mount('#container-2')
  /**
   * 如果你正在使用 Vue 来增强服务端渲染 HTML，并且只想要 Vue 去控制一个大型页面中特殊的一小部分，应避免将一个单独的 Vue 应用实例挂载到整个页面上，而是应该创建多个小的应用实例，将它们分别挂载到所需的元素上去。
   */