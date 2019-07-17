const CompressionPlugin = require('compression-webpack-plugin');

let webPath = '/';

module.exports = {
    lintOnSave: false,
    devServer: {
        disableHostCheck: true
    },
    publicPath: process.env.NODE_ENV === 'production' ? webPath : '/',
    productionSourceMap: false,
    configureWebpack: config => { // eslint-disable-line
        let output = {
            libraryExport: 'default',
            jsonpFunction: 'jsonpFunction'
        };
        if (process.env.NODE_ENV === 'production') {
            return {
                plugins: [
                    new CompressionPlugin({
                        test: /\.js$|\.css/,
                        threshold: 0,
                        deleteOriginalAssets: true
                })],
                output
            }
        } else {
            return {
                output
            }
        }
    }
};
