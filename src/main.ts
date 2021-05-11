import { createPinia } from 'pinia'
import { createApp } from 'vue'
import ElementPlus from "element-plus"
import locale from 'element-plus/lib/locale/lang/zh-cn'
import App from './App'

const app = createApp(App)

app.use(createPinia())
app.use(ElementPlus, {size: 'mini', zIndex: 3000, locale})

app.mount('#app')
