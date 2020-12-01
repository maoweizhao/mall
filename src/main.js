import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import router from '@/router'
import store from '@/store'
import App from '@/App.vue'
import env from '@/env.js'
// axios是一个库，并不是vue的第三方插件，使用vue-axios就不用在prototype上绑定
Vue.use(VueAxios, axios)

// 跨域的方式不同
// 代理方式处理的跨域
axios.defaults.baseURL = '/api'
// cors方式处理跨域或JSONP方式
// axios.defaults.baseURL = 'http://.......'
// 不同环境(开发/生产/测试),设置不同的请求地址
axios.defaults.baseURL = env.baseURL
axios.defaults.timeout = 80000
// 响应拦截
axios.interceptors.response.use(function (response) {
  const res = response.data
  // 成功 0、未登录 10、
  if (res.status === 0) {
    return res.data
  } else if (res.status === 10) {
    // 在main.js中而不是在页面（组件中），所以路由是跳转不了的
    window.location.href = '/#/login'
  } else {
    alert(res.msg)
  }
})

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
