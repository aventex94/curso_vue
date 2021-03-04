import Vue from 'vue'

import VueRouter from 'vue-router'

import Home from '../views/Home'
import Prueba from '../components/Prueba'

Vue.use(VueRouter);

const routes = [
    {path: '/', name: 'Home', component: Home },

    {path: '/prueba', name: 'Prueba', component: Prueba},
    
    
    

]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes,
})

export default router