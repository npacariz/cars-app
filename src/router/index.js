import Vue from 'vue';
import VueRouter from 'vue-router'
import AppCars from '../components/AppCars.vue'

Vue.use(VueRouter)


const routes = [
    {
        path: '/',
        redirect: '/cars'
    },
    {
        path: '/cars',
        component: AppCars
    }
]

const router = new VueRouter({routes});

export default router;