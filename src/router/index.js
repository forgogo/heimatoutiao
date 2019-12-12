//1.引入vue
import Vue from 'vue'
//2.引入vue.router
import VueRouter from 'vue-router'
//把登录页面 引进来
import Login from '@/views/Login.vue'
//个人中心引入
import Personal from '@/views/personal.vue'
//3.user
Vue.use(VueRouter)
//4.创建路由对象，进行路由配置
var router = new VueRouter({
    routes: [{
        name: 'login',
        path: '/login',
        component: Login

    },{
        name: 'personal',
        path: '/personal/:id',
        component: Personal
    }]
})

export default router