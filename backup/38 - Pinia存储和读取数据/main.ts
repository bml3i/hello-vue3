import {createApp} from 'vue'

import App from './App.vue'

import { createPinia } from 'pinia'

// 创建应用
const app = createApp(App)

// 创建pinia
const pinia = createPinia()

// 安装pinia
app.use(pinia)

app.mount('#app')