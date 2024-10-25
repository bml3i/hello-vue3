import { defineStore } from 'pinia'
import axios from 'axios'
import { nanoid } from 'nanoid';

export const useTalkStore = defineStore('talk', {

    actions: {
        async getOneTalk() {
            // 连续解构赋值 + 重命名
            let { data: { content: title } } = await axios.get('https://api.uomg.com/api/rand.qinghua?format=json')
            let obj = { id: nanoid(), title }
            this.talkList.unshift(obj)
        }
    },

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
