 var webpack=require('webpack');
const path = require('path')
module.exports = {
	// entry:'./src/js/index.js',
	entry:{
		home:'./src/components/home.vue',
		Order:'./src/components/Order.vue',
	},
	output:{
		path:path.resolve(__dirname,'/dist'),
		// // filename:'dzd.js'
		filename:'[name]-[chunkhash]'
	},
	mode:'development',
	module:{
		rules:[
			{
				test:/\.css$/,
				use:['style-loader','css-loader']
			},
			{
				test:/\.less$/,
				use:['style-loader','css-loader','less-loader']
			}
		]
	}
	  plugins: [
	new webpack.optimize.CommonsChunkPlugin('common.js'),
	new webpack.ProvidePlugin({
	    jQuery: "jquery",
	    $: "jquery"
	})
	]
}
