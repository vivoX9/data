const path = require('path')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const glob = require('glob')
const PurifyCssWebpack = require('purifycss-webpack');
const merge = require('webpack-merge')
const baseWebpackConfig = require('./webpack.base.conf')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const utils = require('./utils')
const config = require("./config")

function resolve(dir) {
	return path.join(__dirname, '..', dir)
}
const proWebpackConfig = merge(baseWebpackConfig, {
	devtool: config.build.productionSourceMap ? config.build.devtool : false,
	output: {
		path: config.build.assetsRoot,
		filename: utils.assetsPath('js/[name].[chunkhash].js'),
		chunkFilename: utils.assetsPath('js/[id].[chunkhash].js')
	},
	optimization: {
		minimize: true,
		splitChunks: {
			chunks: "all",
			minSize: 30000,
			minChunks: 1,
			maxAsyncRequests: 5,
			maxInitialRequests: 3,
			automaticNameDelimiter: '~',
			name: false,
			cacheGroups: {
				vendors: {
					chunks: "initial",
					name: 'vendor',
					test: /[\\/]node_modules[\\/]/,
					priority: -10,
					enforce: true, // 强制 
					reuseExistingChunk: false
				},
				default: {
					chunks: "all",
					name: 'commons',
					minChunks: 2,
					priority: -20,
					enforce: true, // 强制 
					reuseExistingChunk: true
				}
			}
		}
	},
	plugins: [
		new CleanWebpackPlugin(['dist']),
//		new PurifyCssWebpack({
//			paths: glob.sync(resolve('src/*.html'))
//		}),
		new CopyWebpackPlugin([{
			from: path.resolve(__dirname, '../static'),
			to: config.build.assetsSubDirectory,
			ignore: ['.*']
		}])
	]
})
module.exports = proWebpackConfig