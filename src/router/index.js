import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/Home'
import Login from '@/views/Login'
import Table from '@/views/Table'
import Card from '@/views/Card'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home,
            redirect: '/table',
            children: [
                {
                    path: 'table',
                    name: 'table',
                    component: Table
                },
                {
                    path: 'card',
                    name: 'card',
                    component: Card
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
