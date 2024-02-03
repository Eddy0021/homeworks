import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { createPinia } from 'pinia';

const pinia = createPinia();

import LazyLoadDirective from './directives/LazyLoadDirective';

const app = createApp(App)
app.use(pinia)
app.directive('lazyload', LazyLoadDirective);
app.use(router)
app.mount('#app')
