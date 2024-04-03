const path = require('path');

module.exports = {
	mode: 'production',
	entry: path.resolve(__dirname, 'js/dashboard_main.js'),

	output: {
		path: path.resolve(__dirname, 'public'), 
		filename: 'bundle.js'
	},
	module: {
		rules: [
			{
				test: /\.(js)$/,
				exclude: /(node_modules)/
			},
			{
				test: ['style-loader', 'css-loader'],
			}.
			{
				test: /\.(png|jpg|gif|svg)$/i, // Match image files
				type: 'asset/resource', // Use file-loader for images
			}
		]
	}
};
