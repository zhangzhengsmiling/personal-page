const path = require('path');

const webpackConfigBase = {
	mode:'development',
	resolve: {
		extensions: ['.jsx', '.js', '.less', '.scss', '.sass', '.css', '.json'],
		alias: {
			"@": path.resolve(__dirname),
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
					//  ["import", {
					// 	"libraryName": "antd",
					// 	"libraryDirectory": "es",
					// 	"style": 'css' // `style: true` 会加载 less 文件
					// }]
				],
		   }
	   }, {
			test:   /(.ts|.tsx)$/,
			loader:'ts-loader',
			exclude: /node_modules/,
		}]
	}
}

module.exports = webpackConfigBase;
