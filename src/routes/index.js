import VueRouter from 'vue-router'
import Vue from 'vue'

import NewsView from '../views/NewsView.vue'
import AskView from '../views/AskView.vue'
import JobsView from '../views/JobsView.vue'
import UserView from '../views/UserView.vue'
import ItemView from '../views/ItemView.vue'


Vue.use(VueRouter)

export const router = new VueRouter({
    mode:'history',
    routes: [
         {
           path: '/',
           redirect: '/news'  
         },
        {
            // path : url , component : Vue Component
            path: '/news',
            name: 'news',
            component: NewsView,
        },
        {
            path: '/ask',
            name: 'asks',
            component: AskView,
        },
        {
            path: '/jobs',
            name: 'jobs',
            component: JobsView,
        },
        {
            path: '/user/:id',
            component: UserView,
        },
        {
            path:'/item/:id',
            component: ItemView
        }
    ]
})