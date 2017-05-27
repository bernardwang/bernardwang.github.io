import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'

Vue.use(Router)

export default new Router({
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
      const toElem = document.querySelector(to.hash)
      return toElem.scrollIntoView({ behavior: 'smooth' })
    }
    return {
      x: 0,
      y: 0
    }
  }
})
