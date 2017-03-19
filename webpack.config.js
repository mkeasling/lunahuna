'use strict';

var path = require('path');

module.exports = {
    entry: './src/public/js/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist/public')
    },
    module: {
        rules: [{
            test: /\.scss$/,
            use: [
                { loader: 'style-loader' },
                { loader: 'css-loader' },
                { loader: 'sass-loader' }
            ]
        }],
        loaders: [
            {
                test: /\.(jpe?g|png|gif|svg)$/i,
                loaders: [
                    'file?hash=sha512&digest=hex&name=[hash].[ext]',
                    'image-webpack?bypassOnDebug&optimizationLevel=7&interlaced=false'
                ]
            }
        ]
    }
};
