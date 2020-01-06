import Vue from 'vue'
import Router from 'vue-router'
import Head from 'vue-head'

Vue.use(Router)

/* If you don't know about VueHead, please refer to https://github.com/ktquez/vue-head */

Vue.use(Head, {
  complement: process.env.VUE_APP_TITLE
})

/* If you don't know about VueRouter, please refer to https://router.vuejs.org/ */

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/jobs',
      name: 'jobs',
      component: () =>
        import(/* webpackChunkName: "client-chunk-jobs" */ '@/views/Jobs.vue')
    },
    {
      path: '/favorites',
      name: 'favorites',
      component: () =>
        import(/* webpackChunkName: "client-chunk-favorites" */ '@/views/Favorites.vue')
    },
    { path: '*', redirect: '/jobs' }
  ]
})

export default router
