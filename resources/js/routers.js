import { createRouter, createWebHistory } from "vue-router";
import Customers from './components/views/customers.vue'
import Home from './components/views/home.vue'

const routes = [
    { path: '/', component: Home },
    { path: '/customers', component: Customers },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router;
