const path = require('path'),
	outputDir= path.join(__dirname, 'public');
module.exports = {
	entry: ['./src/index.js','./src/scss/style.scss'],
	output: {
		path: path.join(__dirname, 'assets'),
		filename: 'bundle.js'
	},
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
							outputPath: './'
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
			}
		]
	},
	// watch: true
};