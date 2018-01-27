var webpack = require('webpack')
var ExtractTextPlugin = require('extract-text-webpack-plugin')

var outputFile = 'aanro-ui'
var globalName = 'AanroUI'

var config = require('../package.json')

module.exports = {
    entry: './src/index.js',
    module: {
        rules: [
            {
                test: /.js$/,
                loader: 'babel-loader',
                query: {
                    presets: ['es2015']
                }
            },
            {
                test: /\.vue$/,
                loader: 'vue-loader',
                options: {
                    loaders: {
                        css: ExtractTextPlugin.extract('css-loader'),
                        less: ExtractTextPlugin.extract('css-loader!less-loader'),
                    },
                },
            },
        ],
    },
    plugins: [
        new webpack.DefinePlugin({
            'VERSION': JSON.stringify(config.version),
        }),
        new ExtractTextPlugin(outputFile + '.css'),
    ],
}
