let path = require('path');

module.exports = {
	// 'context' is absolute path to a work directory
	context: path.join(__dirname, 'src'),
	// 'entry' file which is entry point of all dependencies
	entry: './index.jsx',
	// 'output' represent a folder that contains a file which is bundle of source files
	module: {
		loaders: [
			{
				// Tracking all files with following file resolution
				test: /\.jsx?$/,
				// Exclude all files in following folder
				exclude: /node_modules/,
				// Which kind of loaders to use
				loader: 'babel-loader',
				// TODO: What is 'query' & 'presents'
				query: { 
					presets: ['es2015', 'react'] 
				}
			},
			{
				test: /\.scss$/,
				exclude: /node_modules/,
				loaders: ['style', 'css', 'sass']
			}
		]
	},
	// Added sufix to the file name automatically. ('index' -> 'index.jsx')
	resolve: {
		extensions: ['', '.css', '.scss', '.js', '.jsx'] 
	},
	output: {
		path: __dirname + "/dist/",
		filename: 'bundle.js'
	}
}