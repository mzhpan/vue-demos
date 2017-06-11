/**
 * Created by xulingming on 2017/6/11.
 */
const path = require('path');
const fs = require('fs');
const webpack = require('webpack');

module.exports = {
    devtool: 'inline-source-map',

    entry: fs.readdirSync(__dirname).reduce((entries, dir) => {
        const fulDir = path.join(__dirname, dir);
        const entry = path.join(fulDir, 'app.js');
        if (fs.statSync(fulDir).isDirectory() && fs.existsSync(entry)) {
            entries[dir] = ['webpack-hot-middleware/client', entry]
        }
        return entries;
    }, {}),

    output: {
        path: path.join(__dirname, '__build__'),
        filename: '[name].js',
        chunkFilename: '[id].chunk.js',
        publicPath: '/__build__/'
    },

    module: {
        rules: [
            {test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader'},
            {test: /\.vue$/, loader: 'vue-loader'}
        ]
    },

    resolve: {
        alias: {
            // No needed here
            // vuex: path.resolve(__dirname, '../src/index.esm.js')
        }
    },

    plugins: [
        new webpack.optimize.CommonsChunkPlugin({
            name: 'shared',
            filename: 'shared.js'
        }),
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development')
        }),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoEmitOnErrorsPlugin()
    ]
}