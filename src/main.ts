import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router';
import svgIcon from '@/plugins/svg-icon';
import { createPinia } from 'pinia';

import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css';


const app = createApp(App);
app.use(router)
app.use(svgIcon)
app.use(ElementPlus)
app.use(createPinia())
app.mount('#app')
