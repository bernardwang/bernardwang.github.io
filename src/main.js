// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import smoothscroll from 'smoothscroll-polyfill'

import 'tachyons/css/tachyons.css'
import 'normalize.css/normalize.css'
import './sass/main.scss'

smoothscroll.polyfill()
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
