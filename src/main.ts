import { createPinia } from 'pinia'
import { createApp } from 'vue'
import { locale } from "element-plus"
import lang from 'element-plus/lib/locale/lang/zh-cn'
import App from './App'
import router from './router'
import 'element-plus/lib/theme-chalk/index.css';
import "@/style/index.scss";


locale(lang)
const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
