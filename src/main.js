import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import ElementPlus from 'element-plus'// 导入elementPlus
import 'element-plus/dist/index.css'// 导入elementPlus
import '@/styles/index.scss'// 引入字体
import * as ElementPlusIconsVue from '@element-plus/icons-vue'// 导入icon图标
// import axios from 'axios' // axios导入
// import moment from 'moment' // 导入js时间类库
// import * as echarts from 'echarts' // 导入echarts

const app = createApp(App)
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}

// 配置axios全局引用
// app.config.globalProperties.$axios = axios
// 配置js时间类库全局引用
// app.config.globalProperties.$moment = moment
// 配置echarts全局引用
// app.config.globalProperties.$echarts = echarts

app.use(store).use(router).use(ElementPlus).mount('#app')
// createApp(App).use(store).use(router).use(ElementPlus).mount('#app')
