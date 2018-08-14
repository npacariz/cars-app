import Vue from 'vue';
import VueRouter from 'vue-router'
import AppCars from '../components/AppCars.vue'
import AddCar from '../components/AddCar.vue'

Vue.use(VueRouter)


const routes = [
    {
        path: '/',
        redirect: '/cars'
    },
    {
        path: '/cars',
        component: AppCars,
        name: 'cars'
    },
    {
        path: '/add',
        component: AddCar
    }
]

const router = new VueRouter({routes});

export default router;