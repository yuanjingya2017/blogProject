const webpack = require('webpack')
const merge = require('webpack-merge')
const base = require('./webpack.base.config')
const VueSSRServerPlugin = require('vue-server-renderer/server-plugin')
const path = require('path');

module.exports = merge(base, {
    target: 'node',
    devtool: '#source-map',
    // entry: './src/entry-server.js',
    output: {
        filename: `[name].[hash:8].js`,
        libraryTarget: 'commonjs2'
    },
    resolve: {
        alias: {
            'page2Data': path.resolve(__dirname, '../src/lib/page2Data/nodejsData.js')
        }
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development'),
            'process.env.VUE_ENV': '"server"'
        }),
        new VueSSRServerPlugin()
    ]
})
