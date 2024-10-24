import { defineStore } from 'pinia'

export const useTalkStore = defineStore('talk', {
    // 真正存储数据的地方
    state() {
        return {
            talkList: [
                { id: 'awdawda01', title: '情话1' },
                { id: 'awdawda02', title: '情话2' },
                { id: 'awdawda03', title: '情话3' }
            ]
        }
    }

})
