/*
 * @Author: your name
 * @Date: 2020-11-27 10:46:17
 * @LastEditTime: 2020-11-27 11:26:35
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \mall\src\main.js
 */
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// eslint-disable-next-line no-unused-vars
import axios from 'axios'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
