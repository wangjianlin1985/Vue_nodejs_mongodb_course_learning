

import Vue from 'vue';
import VueRouter from 'vue-router';
Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        component: () => import ( /* webpackChunkName: "index" */ '~/pages/index')
    },
    {
        path: '/teVideo',
        component: () => import ( /* webpackChunkName: "teVideo" */ '~/pages/teVideo')
    },
    {
        path: '/teVideoItem',
        component: () => import ( /* webpackChunkName: "teVideoItem" */ '~/pages/teVideoItem')
    },
    {
        path: '/teCourseware',
        component: () => import ( /* webpackChunkName: "teCourseware" */ '~/pages/teCourseware')
    },
    {
        path: '/teCode',
        component: () => import ( /* webpackChunkName: "teCode" */ '~/pages/teCode')
    },
    {
        path: '/teCodeItem',
        component: () => import ( /* webpackChunkName: "teCodeItem" */ '~/pages/teCodeItem')
    },
    {
        path: '/couInform',
        component: () => import ( /* webpackChunkName: "couInform" */ '~/pages/couInform')
    },
    {
        path: '/couOutline',
        component: () => import ( /* webpackChunkName: "couOutline" */ '~/pages/couOutline')
    },
];

const router = new VueRouter({
    routes, // （缩写）相当于 routes: routes
//  mode: 'history', //默认为'hash'
})

export default router;
