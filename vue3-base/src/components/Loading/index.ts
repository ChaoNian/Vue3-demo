// 导出一个对象（必须包含install函数）或者函数（默认按install调用）

import type {App, VNode} from 'vue'
import Loading from './index.vue'
import { createVNode, render } from 'vue';

export default {
    install (app:App) {
        console.log(app, '212--==--=-=31', Loading);
        // 直接导出的组件不是vNode， 需要转换为vNode
        const Vnode:VNode = createVNode(Loading)
        console.log(Vnode);
        // 将vnode 挂载在DOM 上, 使用render函数， 参数1:组件，参数2 挂载在DOM的位置
        render(Vnode, document.body)

        // 怎么回去组件内部的属性呢？
        // 类型“ComponentInternalInstance”上不存在属性“setupState”。因为vue声明文件没有对 ‘setupState’ 属性进行定义， 可以改为 Vnode.component?.exposed
        // Vnode.component?.setupState 

        // console.log(Vnode.component?.exposed ); // 如果组件内通过definedExpose 抛出了APi就会放在这个exposed 属性里，此处如果为空，检查Loading 组件内是否定义抛出
        
        // 将组件内变量、函数 暴露在这里，然后挂载到全局，使得全局可以调用
        app.config.globalProperties.yuki_loading = {
            show: Vnode.component?.exposed?.show,
            hide: Vnode.component?.exposed?.hide
        }
        // 测试：app.config.globalProperties.yuki_loading.show()
    }
}