import  { createApp } from 'vue'
import router from './router'
import App from './App.vue'
// @ts-ignore
import htmlToPdf from '@/utils/htmlToPdf'
const app = createApp(App)

app.use(htmlToPdf)
app.use(router)
app.mount('#app')

