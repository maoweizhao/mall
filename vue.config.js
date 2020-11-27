
const path = require('path')
module.exports = {

  //   配置路径别名
  chainWebpack: config => {
    config.resolve.alias
      .set('@', path.resolve(__dirname, 'src'))
      .set('@cp', path.resolve('src/components'))
  },
  //   配置server
  devServer: {
    host: 'localhost',
    port: 8080,
    // 代理配置
    proxy: {
      '/api': {
        // 代理
        target: 'https://',
        changeOrigin: true,
        PathRewrite: {
          '/api': ''
        }
      }
    },
    // 配置自动启动浏览器
    open: true
  }
}
