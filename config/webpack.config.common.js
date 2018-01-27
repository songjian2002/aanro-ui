var webpack = require('webpack')
var merge = require('webpack-merge')
var base = require('./webpack.config.base')

var outputFile = 'aanro-ui'
var globalName = 'AanroUI'
const path = require('path');


module.exports = merge(base, {
    output: {
        path: path.resolve(__dirname, '../dist'),
        filename: outputFile + '.common.js',
        libraryTarget: 'commonjs2',
    },
    target: 'node',
    externals: {
        // Put external libraries like lodash here
        // With their package name
        // Example: 'lodash': 'lodash'
    },
    plugins: [
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: true,
            },
            mangle: false,
        }),
    ],
})
