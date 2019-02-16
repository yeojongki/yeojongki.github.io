const merge = require('webpack-merge')
const webpackConfig = require('./config')

module.exports = merge(webpackConfig, {
  devtool: 'eval',

  output: {
    pathinfo: true,
    publicPath: '/',
    filename: '[name].js'
  },

  devServer: {
    host: '0.0.0.0',
    open: true,
    port: 3000,
    public: 'http://127.0.0.1:3000'
  }
})
