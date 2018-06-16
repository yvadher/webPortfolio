const webpackMerge = require('webpack-merge');
const commonConfig = require('./webpack-configs/webpack.common');

module.exports = (env) => {
    const envConfig = require(`./webpack-configs/webpack.dev.js`);

    return webpackMerge(commonConfig, envConfig);
}