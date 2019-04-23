var webpack = require('webpack');
var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var webpackMerge = require('webpack-merge');
const SpeedMeasurePlugin = require("speed-measure-webpack-plugin");
var config = require('../config');

var baseConfig = require('./webpack.conf.base.js');
var smp = new SpeedMeasurePlugin();

baseConfig.plugins.push(new webpack.HotModuleReplacementPlugin());
baseConfig.plugins.push(new HtmlWebpackPlugin({
  template: path.resolve(__dirname, '../src/view/index.html'),
  filename: './index.html' // 生成的html存放路径，相对于 path
}));
var devConfig = {
  devtool: 'cheap-module-eval-source-map',
  mode: 'development',
  output: {
    filename: '[name].[hash].js',
    chunkFilename: '[name].[chunkhash:5].bundle.js',
    path: path.resolve(__dirname, '../dist/'),
    // publicPath: ''
  },
  devServer: {
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, PATCH, OPTIONS',
      'Access-Control-Allow-Headers': 'X-Requested-With, content-type',
      'Access-Control-Allow-Credentials': 'true'
    },
    publicPath: '',
    hot: true,
    hotOnly: true,
    compress: true,
    open: true,
    contentBase: path.resolve(__dirname, '../dist/'),
    stats: {
      colors: true
    },
    host: '0.0.0.0',
    // open: true,
    noInfo: true,
    port: config.dev.port,
    disableHostCheck: true,
    historyApiFallback: true,
    proxy: {
      "/api": {
        target: config.api.dev,
        changeOrigin: true,
        pathRewrite: {"^/api" : ""},
        secure: false
      }
    }
  }
};

module.exports = smp.wrap(webpackMerge(baseConfig, devConfig));