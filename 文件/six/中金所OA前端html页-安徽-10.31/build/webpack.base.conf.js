const fs = require("fs")
const path = require('path')
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const HTMLWebpackPlugin = require("html-webpack-plugin")
const config = require("./config")
const utils = require("./utils")
function resolve(dir) {
	return path.join(__dirname, '..', dir)
}

const obtainHtmlNames = path => {
	let fileList = []
	let dirList = fs.readdirSync(path)
	dirList.forEach(item => {
		if(item.indexOf('html') > -1) {
			fileList.push(item.split('.')[0])
		}
	})
	return fileList
}

const obtainEntries = htmldirs => {
	const Entries = {}
	htmldirs.forEach((page) => {
		Entries[page] = `./src/js/${page}.js`
	})
	return Entries
}
const obtainHtmlPlugins = htmldirs => {
	const HTMLPlugins = []
	htmldirs.forEach((page) => {
		let htmlPlugin = new HTMLWebpackPlugin({
			inject: true,
			filename: `${page}.html`,
			template: `./src/${page}.html`,
			chunks: ['commons', 'vendor', page],
			hash: true,
			minify: {
				collapseWhitespace: true
			}
		})

		HTMLPlugins.push(htmlPlugin)
	})
	return HTMLPlugins
}
const HtmlNames = obtainHtmlNames(resolve('src'))
const Entries = obtainEntries(HtmlNames)
const HTMLPlugins = obtainHtmlPlugins(HtmlNames)

module.exports = {
	context: path.resolve(__dirname, '../'),
	entry: Entries,
	output: {
		path: config.build.assetsRoot,
		filename: utils.assetsPath('js/[name].bundle.js'),
		publicPath: utils.obtainEnv() === 'production' ?
			config.build.assetsPublicPath : config.dev.assetsPublicPath
	},
	resolve: {
		extensions: ['.js', '.json'],
		alias: {
			'@': resolve('src')
		}
	},
	externals: {
		swiper: 'Swiper'
	},
	module: {
		rules: [{
				test: /\.js$/,
				exclude: /node_modules/,
				loader: "babel-loader"
			},
			{
				test: /\.html$/,
				exclude: /node_modules/,
				loader: "html-loader"
			},
			{
				test: /\.css$/,
				use: [MiniCssExtractPlugin.loader, {
					loader: 'css-loader',
					options: {
						minimize: true,
						importLoaders: 1
					}
				}, {
					loader: 'postcss-loader',
					options: {
						config: {
							path: 'build/postcss.config.js'
						}
					}
				}]
			},
			{
				test: /.*\.(gif|png|jpe?g|svg)$/i,
				use: [{
					loader: 'url-loader',
					options: {
						limit: 10000,
						name: utils.assetsPath('img/[name].[hash:7].[ext]')
					}
				}, {
					loader: 'image-webpack-loader',
					options: {
						mozjpeg: {
							progressive: true,
							quality: 55
						},
						optipng: {
							enabled: false,
						},
						pngquant: {
							quality: '55-80',
							speed: 1
						},
						gifsicle: {
							interlaced: false,
						}
					}
				}]
			},
			{
				test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
				loader: 'url-loader',
				options: {
					limit: 10000,
					name: utils.assetsPath('media/[name].[hash:7].[ext]')
				}
			},
			{
				test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
				loader: 'url-loader',
				options: {
					limit: 10000,
					name: utils.assetsPath('fonts/[name].[hash:7].[ext]')
				}
			}
		]
	},
	plugins: [
		...HTMLPlugins,
		new MiniCssExtractPlugin({
			filename: utils.assetsPath('css/[name].css'),
			chunkFilename: utils.assetsPath('css/app.[contenthash:8].css')
		})
	]
}