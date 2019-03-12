const path = require('path')
const webpack = require('webpack')
const FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin')
const utils = require('./utils')
const config = require("./config")
const portfinder = require('portfinder')
const baseWebpackConfig = require('./webpack.base.conf')
const merge = require('webpack-merge')
const CopyWebpackPlugin = require('copy-webpack-plugin')

function resolve(dir) {
	return path.join(__dirname, '..', dir)
}

const devWebpackConfig = merge(baseWebpackConfig, {
	devtool: config.dev.devtool,
	devServer: {
		contentBase: false,
		publicPath: "/",
		clientLogLevel: 'warning',
		host: config.dev.host,
		port: config.dev.prot,
		open: config.dev.autoOpenBrowser,
		compress: true,
		overlay: config.dev.errorOverlay
		      ? { warnings: false, errors: true }
		      : false,
		quiet: true,
		proxy: config.dev.proxyTable
	},
	plugins: [
		new webpack.HotModuleReplacementPlugin(),
		new webpack.NamedModulesPlugin(),
		new CopyWebpackPlugin([{
			from: path.resolve(__dirname, '../static'),
			to: config.dev.assetsSubDirectory,
			ignore: ['.*']
		}])
	]
})
module.exports = new Promise((resolve, reject) => {
	portfinder.basePort = config.dev.port
	portfinder.getPort((err, port) => {
		if(err) {
			reject(err)
		} else {
			devWebpackConfig.devServer.port = port
			devWebpackConfig.plugins.push(new FriendlyErrorsPlugin({
				compilationSuccessInfo: {
					messages: [`Your application is running here: http://${devWebpackConfig.devServer.host}:${port}`],
				},
				onErrors: config.dev.notifyOnErrors ?
					utils.createNotifierCallback() : undefined
			}))
			resolve(devWebpackConfig)
		}
	})
})