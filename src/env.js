// 基于cors跨域或着JSONP跨域，代理方式处理跨域需要在vue.config.js中修改targets

let baseURL
switch (process.env.NODE_ENV) {
  case 'develpoment':
    baseURL = 'http://dev-mall-pre.springboot.cn/api'
    break
  case 'test':
    baseURL = 'http://test-mall-pre.springboot.cn/api'
    break
  case 'production':
    baseURL = 'http://mall-pre.springboot.cn/api'
    break
  default:
    baseURL = 'http://mall-pre.springboot.cn/api'
    break
}
export default {
  baseURL
}
