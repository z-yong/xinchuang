

module.exports = {
    // publicPath: '/', //根目录
    publicPath:  process.env.NODE_ENV === 'production' ? '/XCuccn/' : '/',
    outputDir: 'XCuccn', //构建输出目录   npm run build
    assetsDir: './assets',  //静态资源目录(js,css,img,fonts)
    lintOnSave: true,  //是否开启eslint保存检测  有效值: true || false || 'error'
    devServer: {
      open: true,  //是否一启动项目就自动打开浏览器
      host: '0.0.0.0',  //主机  可以是127.0.0.0(真机测试可以是0.0.0.0)
      port: 8080,  //端口号
      https: false,  //协议是否是https 一般为false
      hotOnly: false, //热模块更新(webpack有提供热更新)
      proxy: {
        // 配置跨域
        '/jiekou': {
          target: 'http://xc1.90plus.cn/', //target host域名
          ws: true, //是否跨域
          changeOrigin: true
          // pathRewrite: {
          //   '^/jiekou': ''
          // }
        }
      }
    }
  }