/*
 * @Author: maoweizho
 * @Description: 配置信息
 */
module.exports = {
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
    }
  }
}
