var path = require('path');
var webpack = require('webpack');

module.exports = {
    entry:  {
        picture1 :  './frontend/pictures/picture1.jsx',
        picture2 :  './frontend/pictures/picture2.jsx',
    },
    output: {
        path: __dirname + "/public/pictures",
        filename: '[name].js'
    },
    module: {
        loaders: [
            {
                test: /.jsx?$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                query: {
                    presets: ['es2015', 'react']
                }
            }
        ]
    },
};