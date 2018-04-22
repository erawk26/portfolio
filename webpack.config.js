const path = require("path"),
	HtmlWebpackPlugin = require("html-webpack-plugin"),
	outputDir = path.join(__dirname, "assets"),
	inputDir = path.join(__dirname, "src");
module.exports = {
	entry: [
		inputDir + "/js/index.js",
		inputDir + "/scss/style.scss"
	],
	output: {
		path: outputDir + "/js",
		filename: "bundle.js"
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: "src/index.pug",
			filename: "../../index.html",
			inject: true
		})
	].filter(p => !!p),
	module: {
		rules: [
			{
				test: /\.(gif|png|jpe?g|svg)$/i,
				use: [
					{
						loader: 'file-loader',
						options: {
							name: '[sha512:hash:base64:7].[ext]',
							outputPath: '../img',
							publicPath: 'assets/img',
							useRelativePath: process.env.NODE_ENV === "production"
						}
					},
					{
						loader: 'image-webpack-loader',
						options: {
							bypassOnDebug: true,
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
							// the webp option will enable WEBP
							webp: {
								quality: 75
							}
						}
					},
				],
			},
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: {
					loader: "babel-loader"
				}
			},
			{
				test: /\.scss$/,
				exclude: /node_modules/,
				use: [
					{
						loader: "file-loader",
						options: {
							name: "[name].css",
							outputPath: "../css/"
						}
					},
					{
						loader: "extract-loader"
					},
					{
						loader: "css-loader"
					},
					{
						loader: "postcss-loader"
					},
					{
						loader: "sass-loader"
					}
				]
			},
			{
				test: /\.pug$/,
				include: inputDir,
				use:
					{
						loader: "pug-loader",
						options: {
							doctype: 'pug',
							pretty: true
						}
					}
			}
		]
	},
	// watch: true,
	resolve: {
		alias: {
			vue$: "vue/dist/vue.esm.js"
		}
	}
};
