import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  routes: [{
    path: '/',
    name: 'Home',
    component: Home
  }],
  scrollBehavior: (to, from, savedPosition) => {
    if (savedPosition) {
      return savedPosition
    }
    if (to.hash) {
      const link = to.hash
      const linkElem = document.querySelector(link)
      if (linkElem) {
        linkElem.scrollIntoView({ behavior: 'smooth' })
      }
      return
    }
    return {
      x: 0,
      y: 0
    }
  }
})

export default router
