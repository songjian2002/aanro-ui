var merge = require('webpack-merge')
var base = require('./webpack.config.base')

var outputFile = 'aanro-ui'
var globalName = 'AanroUI'
const path = require('path');


module.exports = merge(base, {
    output: {
        path: path.resolve(__dirname, '../dist'),
        filename: outputFile + '.common.js',
        library: globalName,
        libraryTarget: 'umd',
    },
    devtool: 'eval-source-map',
})
