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
                    component: Detail,

                    // 第一种写法: 将路由收到的所有params参数作为props传给路由组件 (query参数不行)
                    // props: true,

                    // 第二种写法: 函数写法，可以自己决定将什么作为props传给路由组件
                    props(route) {
                        return route.query
                    }

                    // 第三种写法: 对象写法，也可以自己决定将什么作为props传给路由组件 (不常用，因为是死的)
                    // props: {
                    //     a: '100',
                    //     b: '200'
                    // }

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