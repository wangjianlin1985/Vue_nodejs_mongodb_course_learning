

import Vue from 'vue';
import VueRouter from 'vue-router';
Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        component: () => import ( /* webpackChunkName: "index" */ '~/pages/index'),
        children: [
        	//配置子路由
        	{
        		//教学视频
        		path: '/teVideo',
        		component: () => import ( /* webpackChunkName: "teVideo" */ '~/pages/teVideo')
        	},
        	{
        		//教学课件
		        path: '/teCourseware',
		        component: () => import ( /* webpackChunkName: "teCourseware" */ '~/pages/teCourseware')
		    },
		    {
		    	//教学实例
		        path: '/teCode',
		        component: () => import ( /* webpackChunkName: "teCode" */ '~/pages/teCode')
		    },
		    {
		    	//课程通知
		        path: '/teInform',
		        component: () => import ( /* webpackChunkName: "teInform" */ '~/pages/teInform')
		    },
		    {
		    	//课程通知
		        path: '/teOutline',
		        component: () => import ( /* webpackChunkName: "teOutline" */ '~/pages/teOutline')
		    },
		    {
		    	//课程宣传
		        path: '/tePublictly',
		        component: () => import ( /* webpackChunkName: "tePublictly" */ '~/pages/tePublictly')
		    },
        ]
    },
    {
        path: '/login',
        component: () => import ( /* webpackChunkName: "login" */ '~/pages/login')
    },
];

const router = new VueRouter({
    routes, // （缩写）相当于 routes: routes
//  mode: 'history', //默认为'hash'
})

export default router;
