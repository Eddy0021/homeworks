import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import LazyLoadDirective from './directives/LazyLoadDirective';

const app = createApp(App)

app.directive('lazyload', LazyLoadDirective);

app.use(router)

app.mount('#app')
