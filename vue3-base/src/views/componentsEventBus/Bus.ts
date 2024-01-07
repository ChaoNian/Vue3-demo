// 发布订阅模式

// 约束Bus类
type BusClass = {
    // name 自定义事件名称
    emit: (name:string)=> void
    // callback 事件函数
    on: (name:string, callback:Function) => void
}

type ParamsKey = string | number | symbol

type List = {
    [key: ParamsKey]: Array<Function> // 值时数组，每一项时函数
}

// 定义Bus类
class Bus implements BusClass {
    list: List // 调度中心（是一个对象）
    constructor () { // 初始化list
        this.list = {}
    }

    // ...args： 获取剩余参数
    emit (name: string, ...args: Array<any>) {
        // eventName 获取到集合
        let eventName: Array<Function> = this.list[name]
        // 调用集合里面的函数
        eventName.forEach(fn => {
            fn.apply(this, args)
        })
    }
    on (name: string, callback:Function) {
        // on 是多次注册，如果已经注册就直接返回this.list[name]， 否则就定义空数组，进行注册
        let fn:Array<Function> = this.list[name] || []
        fn.push(callback) // 回调函数集合
        this.list[name] = fn // 收集指定事件
    }
    // off() {}
}

// 导出 
export default new Bus()