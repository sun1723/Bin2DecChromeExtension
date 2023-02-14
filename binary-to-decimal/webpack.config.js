const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
	entry: "./src/index.tsx",
	mode: "development",
	devServer: {
		hot: true,
	},
	module: {
		rules: [
			{
				test: /\.tsx?$/,
				use: [
					{
						loader: "ts-loader",
						options: {
							compilerOptions: { noEmit: false },
						},
					},
				],
				exclude: /node_modules/,
			},
			{
				test: /\.css$/i,
				use: ["style-loader", "css-loader"],
			},
			{
				test: /\.s[ac]ss$/i,
				use: [
					// Creates `style` nodes from JS strings
					"style-loader",
					// Translates CSS into CommonJS
					"css-loader",
					// Compiles Sass to CSS
					"sass-loader",
				],
			}
		],
	},
	resolve: {
		extensions: [".tsx", ".ts",".js"],
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: './public/index.html' //relative to root of the application
		})
	],
	output: {
		filename: "content.js",
		path: path.resolve(__dirname, "..", "extension"),
		publicPath: "/public"
	},
	devtool: 'cheap-module-source-map'
};