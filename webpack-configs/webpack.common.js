const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: {
        app: './app.js',
    },
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, '../', 'dist')
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                    presets: ['@babel/preset-env']
                    }
                }
            },
            {
                test: /\.css?$/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            },
            {
                test: /\.scss$/,
                use: [
                    "style-loader", // creates style nodes from JS strings
                    "css-loader", // translates CSS into CommonJS
                    "sass-loader" // compiles Sass to CSS
                ]
            },
            {
                test: /\.(woff|woff2|eot|ttf|svg|png|jpg)$/,
                use: 'file-loader'
            },{
                test: /\.pug$/,
                 use: 'pug-loader'
            },
            // {
            //     loader: 'expose-loader',
            //     options: 'jQuery'
            // },{
            //     loader: 'expose-loader',
            //     options: '$'
            // }
        ]
    },
    resolve: {
        extensions: [".js"]
    },
    plugins: [
        new HtmlWebpackPlugin({ 
            template: './views/index.pug',
            filename: 'index.html',
        })
    ],
    mode: 'development'
};