var path = require('path');

module.exports = {
	context: __dirname + "/app",
	entry: {
		javascript: path.join(__dirname, 'app/app.js'),
		html: path.join(__dirname, 'app/index.html')
	},

	output: {
		filename: "bundle.js",
		path: __dirname + "/dist",
	},

	module: {
		loaders: [
		{
			test: /\.(html)$/,
			loader: "file?name=[name].[ext]",
		},
		{
			test: /\.(eot|svg|ttf|woff)$/,
			path: "./fonts",
			loader: "url-loader?limit=100000"
		},
		{
			test: /\.jsx?$/,
			exclude: /node_modules/,
			loaders: ['react-hot', 'babel'],
		},
		{
			test: /\.css/,
			loaders: [ 'style', 'css'],
		},
		],
	},
	devtool: 'source-map',
	devServer: {
		historyApiFallback: true,
		hot: true,
		inline: true,
		progress: true,
	},  
}