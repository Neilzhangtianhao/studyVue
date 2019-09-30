// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import 'babel-polyfill'
import Vue from 'vue'
import App from './App'
import router from './router'
import fastclick from 'fastclick'

import 'assets/scss/index.scss'
Vue.config.productionTip = false

// body的点击事件都会被fastclick监听到，由它来消除300ms的延迟
fastclick.attach(document.body)

/* eslint-disable no-new */
new Vue({
  el: '#app ',
  router,
  components: { App },
  template: '<App/>'
})
