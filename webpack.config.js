const path = require("path"),
	HtmlWebpackPlugin = require("html-webpack-plugin"),
	CopyWebpackPlugin = require("copy-webpack-plugin"),
	outputDir = path.join(__dirname, "public"),
	inputDir = path.join(__dirname, "src");
module.exports = {
	entry: [
		inputDir + "/js/index.js",
		inputDir + "/scss/style.scss"
	],
	output: {
		path: outputDir + "/js/",
		publicPath: "/public/js/",
		filename: "bundle.js"
	},
	plugins: [
		new CopyWebpackPlugin([
			{
				from: 'src/static/**/*',
				to: '../files/',
				flatten: true,
				// ignore: [ '*.doc' ]
			}
		]),
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
							publicPath: 'public/img',
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
				test: /\.vue$/,
				exclude: /node_modules/,
				loader: 'vue-loader',
				options: {
					loaders: {
						scss: 'vue-style-loader!css-loader!sass-loader', // <style lang="scss">
						sass: 'vue-style-loader!css-loader!sass-loader?indentedSyntax', // <style lang="sass">
					},

					// `preLoaders` are attached before the default loaders.
					// You can use this to pre-process language blocks - a common use
					// case would be build-time i18n.
//					preLoaders: {
//						js: '/path/to/custom/loader'
//					},

					// `postLoaders` are attached after the default loaders.
					//
					// - For `html`, the result returned by the default loader
					//   will be compiled JavaScript render function code.
					//
					// - For `css`, the result will be returned by `vue-style-loader`
					//   which isn't particularly useful in most cases. Using a PostCSS
					//   plugin will be a better option.
					postLoaders: {
						html: 'babel-loader'
					},

					// `excludedPreLoaders` should be regex
					excludedPreLoaders: /(eslint-loader)/
				}
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
		extensions: ['.js', '.vue', '.json', 'scss'],
		alias: {
			vue$: "vue/dist/vue.esm.js"
		}
	}
};
