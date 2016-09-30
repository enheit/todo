var path = require('path');

module.exports = {
	context: path.join(__dirname, '/app'),
	entry: './src/index.jsx',
	devtool: 'source-map',
	watch: true,
	module: {
		loaders: [
			{
				test: /\.jsx$/,
				exclude: /node_modules/,
				loader: 'babel-loader',
				query: {
					presets: ['react', 'es2015'],
				}
			},
			{
				test: /\.js$/, 
				exclude: /node_modules/, 
				loader: 'babel-loader'
			},
			{
				test: /\.scss$/,
				loaders: ["style", "css", "sass"]
			}
		]
	},
	output: {
		path: path.join(__dirname, '/app/bin/js'),
		filename: 'bundle.min.js'
	},
	resolve: {
		extensions: ['', '.js', '.jsx', '.scss']
	}
};