const path = require('path')

module.exports = {
  dev: {
    assetsSubDirectory: 'static',
    assetsPublicPath: '/',
    proxyTable: {
    	'/m': {
        target: 'https://dd.zldcgroup.com/',
        changeOrigin: true,
        pathRewrite: {
          '^/m': '/m'
        }
     },
     '/upload': {
		target: 'https://dd.zldcgroup.com/',
        changeOrigin: true,
        pathRewrite: {
          '^/upload': '/upload'
        }
      }
    },
    host: '0.0.0.0',
    port: 8081,
    autoOpenBrowser: true,
    errorOverlay: true,
    notifyOnErrors: true,
    poll: false,
    devtool: 'cheap-module-eval-source-map',
    cacheBusting: true,
    cssSourceMap: true
  },

  build: {
    index: path.resolve(__dirname, '../dist/index.html'),
    assetsRoot: path.resolve(__dirname, '../dist'),
    assetsSubDirectory: 'static',
    assetsPublicPath: '/',
    productionSourceMap: false,
    devtool: '#source-map',
    productionGzip: true,
    productionGzipExtensions: ['js', 'css']
  }
}
