/*
 tsx写法：
 npm install @vitejs/plugin-vue-jsx -D
 在vite.config.ts 引入  import vueJsx from ‘@vitejs/plugin-vue-jsx’

*/ 
// 写法1 直接返回渲染函数   常用
// export default function() {
//     return (<div>tsx写法：</div>)
// }


// 写法2  optionsApi   不常用
// import {defineComponent} from 'vue'
// export default defineComponent({
//     data() {
//         return {
//             age: 1212
//         }
//     },

//     render () {
//         // DOM 定义变量使用单花括号
//         return ( (<div>{this.age}</div>))
//     }
//  })


// 写法 3 setup 函数模式  常用
/**
 * v-show 支持
 * ref template 自动解.value tsx并不会， 需要ref.value
 * v-if  不支持, 可换为三元表达式代替
 * map 可以循环
 * v-bind {}代替
 * props  emit
 *  插槽 
 * v-module
 */ 

// 插槽
 // @ts-ignore
const A = (_, {slots}) => (
    <>
    <div>{slots.default ? slots.default() : '默认值'}</div>
    <div>{slots.foo ? slots.foo() : 'foo插槽'}</div>
    </>
)

interface Props {
    name: string
}
import { log } from 'console'
import {defineComponent, ref} from 'vue'
export default defineComponent({
    props: {
        name: String
    },
    emits: ['on-click'],
    // @ts-ignore
    setup (props:Props, {emit}) {
        const flag = ref(false)
        // return () => (<>
        // {/* <div v-show={flag.value}>setup</div> */}
        // <div>{flag.value ? <div>true</div> : <div>false</div>}</div>
        // </>)

        const data = [
            {
                name: 12
            },
            {
                name: 13
            },
            {
                name: 14
            }
        ]

        const fn =(item:any) => {
            console.log(item, '函数')
            // emit 来派发事件
            emit('on-click', item)
        }

        const slot = {
            default: () =>(<div>default 插槽</div>), // 返回渲染函数
            foo: () =>(<div>foo 插槽</div>),
            
        }

        const v = ref<string>('s')
        const blur = () => {
            console.log(v.value, 'vv');
            
        }
       return () => (<>
       <input type="text" v-model={v.value} onBlur={()=> blur()}></input>
       <div>{v.value}</div>
       <hr />
       {/*  通过 v-slots 将*/}
       <A v-slots={slot}></A>
       <hr />
       <div>props:{props?.name}</div>
       <hr />
         {
            data.map(v => {
                // return <div onClick={fn()}>{v.name}</div> 这样写诗会函数直接调用的，可以用下面函数柯里化解决
                return <div onClick={()=>fn(v)}>{v.name}</div>
            })
         }
        </>)
    }
})