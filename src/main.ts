import { createApp } from 'vue';
import './global.style.scss';

import App from './App.vue';

import router from './router';
import pinia from './store';

const app = createApp(App);

app.use(pinia); // ✅ 注册 pinia

app.use(router); // ✅ 注册路由

app.mount('#app');
