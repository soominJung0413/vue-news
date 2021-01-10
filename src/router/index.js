import VueRouter from 'vue-router'
import Vue from 'vue'

import NewsView from '../views/NewsView.vue'
import AskView from '../views/AskView.vue'
import JobsView from '../views/JobsView.vue'

Vue.use(VueRouter)

export const router = new VueRouter({
    mode:'history',
    routes: [
        {
            // path : url , component : Vue Component
            path: '/news',
            component: NewsView,
        },
        {
            path: '/ask',
            component: AskView,
        },
        {
            path: '/jobs',
            component: JobsView,
        },
    ]
})