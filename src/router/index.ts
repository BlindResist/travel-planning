import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import MainPage from '@/pages/Main/Main.vue'
import PlanningPage from '@/pages/Routes/Routes.vue'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
    {
        path: '/',
        name: 'Main page',
        component: MainPage
    },
    {
        path: '/routes',
        name: 'Routes page',
        component: PlanningPage
    }
]

const router = new VueRouter({
    routes
})

export default router
