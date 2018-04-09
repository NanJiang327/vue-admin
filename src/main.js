import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css';
import App from './App'
import router from './router'
import store from './store'
import http from './apis'
import Mock from './mock'
import './assets/css/app.scss'
window.log = console.log.bind(console); // 绑定log至window下 可以直接调用log()等同于console.log()

Mock.bootstrap();
Vue.use(ElementUI)
Vue.use(http)

Vue.config.productionTip = false;

router.beforeEach((to, from, next) => {
    if (to.path === '/login') {
        sessionStorage.removeItem('login')
    }
    const LOGIN = JSON.parse(sessionStorage.getItem('login'));
    if (!LOGIN && to.path !== '/login') {
        next({ path: '/login' })
    } else {
        next()
    }
})

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    store,
    components: { App },
    template: '<App/>'
})
