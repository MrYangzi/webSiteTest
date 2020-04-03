import Vue from 'vue'
import Router from 'vue-router'
const _import = require('./_import_' + process.env.NODE_ENV);

Vue.use(Router)

import Layout from '../views/layout/layout.vue'


export default new Router({
    routes: [{
        path: '/',
        name: 'Home',
        component: Layout,
        redirect: '/home/index',
        children: [{
            path: '/home/index',
            name: 'home',
            component: _import('home/index'),
            meta: {
                title: '首页',
                icon: '',
                cache: false
            }
        }, {
            path: '/shops/list',
            name: 'shop-list',
            component: _import('shops/list'),
            meta: {
                title: '商品列表',
                icon: '',
                cache: false
            }
        }, {
            path: '/shops/detail',
            name: 'shop-detail',
            component: _import('shops/detail'),
            meta: {
                title: '商品详情',
                icon: '',
                cache: false
            }
        }]
    }]
})