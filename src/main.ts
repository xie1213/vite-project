import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router';
import svgIcon from '@/plugins/svg-icon';
import { createPinia } from 'pinia';

import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css';
import '@/assets/scss/theme.scss'

const app = createApp(App);
app.use(createPinia())
app.use(router)
app.use(svgIcon)
app.use(ElementPlus)
app.mount('#app')
