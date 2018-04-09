import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/Home'
import Login from '@/views/Login'
import Table from '@/views/Table'
import Card from '@/views/Card'
import Page3 from '@/views/Page3'
import Page4 from '@/views/Page4'

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
                },
                {
                    path: 'Page3',
                    name: 'Page3',
                    component: Page3
                },
                {
                    path: 'Page4',
                    name: 'Page4',
                    component: Page4
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
