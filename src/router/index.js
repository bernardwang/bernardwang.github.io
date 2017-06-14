import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import NotFound from '@/components/NotFound'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/home',
      redirect: '/'
    }, {
      path: '/',
      name: 'Home',
      component: Home
    }, {
      path: '*',
      component: NotFound
    }
  ]
})

export default router
