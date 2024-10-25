import { defineStore } from 'pinia'

export const useCountStore = defineStore('count', {

    // actions里面是一个一个的方法，用于响应组件中的“动作”, 方便复用
    actions: {
        increment(value:number) {       
            console.log("increment 被调用了", value)
            
            if( this.sum < 10) {
                // this是当前的store
                this.sum += value
            }
        }
    },
    // 真正存储数据的地方
    state() {
        return {
            sum: 6,
            school: 'atguigu',
            address: '宏福科技园'
        }
    }
})
