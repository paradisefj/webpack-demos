module.exports = {
	entry: './main.js',
	output: 'boundle.js',
	module: {
		loaders: [
			{
				test: /\.css$/,
				loader: 'style-loader!css-loader'
			}
		]
	}
};