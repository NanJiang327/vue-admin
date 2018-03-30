import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/Home'
import Login from '@/views/Login'
import Table from '@/views/Table'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home,
            children: [
                {
                    path: 'table',
                    name: 'table',
                    component: Table
                }
            ]
        },
        {
            path: '/login',
            name: 'login',
            component: Login
        }
    ]
})
