const path = require('path'),
	HtmlWebpackPlugin = require('html-webpack-plugin'),
	webpack = require('webpack'),
	outputDir = path.join(__dirname, 'assets'),
	inputDir = path.join(__dirname, 'src');
module.exports = {
	entry: [inputDir + '/js/index.js', inputDir + '/scss/style.scss',inputDir + '/index.pug'],
	output: {
		path: outputDir + '/js',
		filename: 'bundle.js'
	},
	plugins: [
		new HtmlWebpackPlugin({
			template : 'src/index.pug',
			filename: '../../index.html',
			inject   : true
		})
	].filter(p => !!p),
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: {
					loader: "babel-loader"
				}
			},
			{
				test: /\.scss$/,
				use: [
					{
						loader: 'file-loader',
						options: {
							name: '[name].css',
							outputPath: '../css/'
						}
					},
					{
						loader: 'extract-loader'
					},
					{
						loader: 'css-loader'
					},
					{
						loader: 'postcss-loader'
					},
					{
						loader: 'sass-loader'
					}
				]
			},
			{
				test: /\.pug$/,
				include: inputDir,
				loaders: [ 'pug-loader' ]
			},
			{
				test: /\.(gif|png|jpe?g|svg)$/i,
				use: [
					'file-loader',
					{
						loader: 'image-webpack-loader',
						options: {
							mozjpeg: {
								progressive: true,
								quality: 65
							},
							// optipng.enabled: false will disable optipng
							optipng: {
								enabled: false,
							},
							pngquant: {
								quality: '65-90',
								speed: 4
							},
							gifsicle: {
								interlaced: false,
							},
							// webp: {
							// 	quality: 75
							// }
							name: '[name].[extension]',
							outputPath: '../img/'
						}
					},
				],
			}
		]
	},
	// watch: true,
	resolve: {
		alias: {
			'vue$': 'vue/dist/vue.esm.js'
		}
	}
};