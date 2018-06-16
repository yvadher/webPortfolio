module.exports = {
    devtool: 'source-map',
    devServer: {
        contentBase: "./",
        port: 9000,
        proxy: {
            '/api': 'http://localhost:9001'
        }
    }
};