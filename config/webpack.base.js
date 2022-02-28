const path = require('path');
const rootDir = path.resolve(__dirname, '../');
const TerserWebpackPlugin  = require('terser-webpack-plugin');

const webpackConfigBase = {
	mode:'production',
	resolve: {
		extensions: ['.jsx', '.js', '.less', '.scss', '.sass', '.css', '.json'],
		alias: {
			"@": rootDir,
		}
	},
	module: {
		rules: [{
		   test:   /(.js|.jsx)$/,
		   loader:'babel-loader',
			 exclude: /node_modules/,
		   options: {
				 presets: ['@babel/preset-react',['@babel/preset-env']],
				 plugins: [
					 '@babel/plugin-proposal-class-properties',
				],
				cacheDirectory: true
		   }
	   }, {
			test:   /(.ts|.tsx)$/,
			loader:'ts-loader',
			exclude: /node_modules/,
		}]
	},
	optimization: {
		minimizer: [new TerserWebpackPlugin()],
	},
}

module.exports = webpackConfigBase;
