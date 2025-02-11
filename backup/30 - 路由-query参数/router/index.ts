// 创建一个路由器，并暴露出去

// 01 - 引入createRouter
import { createRouter, createWebHistory, createWebHashHistory } from "vue-router"

// 引入可能要呈现的组件
import Home from '@/pages/Home.vue'
import News from '@/pages/News.vue'
import About from '@/pages/About.vue'
import Detail from '@/pages/Detail.vue'

// 02 - 创建路由器
const router = createRouter({
    // 路由器的工作模式
    history: createWebHistory(),
    //history: createWebHashHistory(),
    // 一个一个的路由规则
    routes:[
        {
            name:'zhuye',
            path: '/home', 
            component: Home
        },
        {
            name:'xinwen',
            path: '/news', 
            component: News,
            children: [
                {
                    name: 'xiang',
                    path: 'detail',
                    component: Detail
                }
            ]
        },
        {
            name:'guanyu',
            path: '/about', 
            component: About
        }
    ]
})

// 暴露出去router
export default router