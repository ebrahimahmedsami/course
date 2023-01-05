import './bootstrap';
import '../sass/app.scss'
import router from './routers.js'
import {Bootstrap5Pagination} from 'laravel-vue-pagination'


import { createApp,h } from 'vue'
import App from './components/app.vue'

const app = createApp({
    render: ()=>h(App)
});
app.component('app', App)
app.use(router)
app.component('pagination', Bootstrap5Pagination);

app.mount('#app')

