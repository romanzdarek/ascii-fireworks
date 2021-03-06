const path = require('path');

module.exports = {
	//production:
	mode: 'production',

	//development:
	//mode: 'development',

	entry: './src/main.ts',
	//production:

	devtool: 'source-map',

	//development:
	//devtool: 'inline-source-map',
	devServer: {
		contentBase: './dist'
	},
	module: {
		rules: [
			{
				test: /\.tsx?$/,
				use: 'ts-loader',
				exclude: /node_modules/
			}
		]
	},
	resolve: {
		extensions: [ '.tsx', '.ts', '.js' ]
	},
	output: {
		filename: 'app.js',
		path: path.resolve(__dirname, 'dist')
	}
};
