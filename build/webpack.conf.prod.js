var webpack = require('webpack');
var path = require('path');
var webpackMerge = require('webpack-merge');
var TerserWebpackPlugin = require('terser-webpack-plugin');
var OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');// var CompressionPlugin = require("compression-webpack-plugin")
var BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
var baseConfig = require('./webpack.conf.base.js');
var prdConfig = {
  mode: 'production',
  output: {
    filename: '[name].[hash].js',
    path: path.resolve(__dirname, '../public/static'),
    chunkFilename: '[name].[chunkhash].bundle.js',
    publicPath: './static/'
  },
  stats: {
    colors: false,
    hash: true,
    timings: true,
    assets: true,
    chunks: true,
    chunkModules: true,
    modules: true,
    children: true,
  },
  optimization: {
    minimizer: [
      new TerserWebpackPlugin({
        sourceMap: true,
        parallel: true,
        terserOptions: {
          compress: false,
          mangle: true
        }
      }),
      new OptimizeCSSAssetsPlugin({})
    ],
    runtimeChunk: false,
    splitChunks: {
      cacheGroups: {
        // default: false,
        commons: {
          chunks: "async",
          minChunks: 2,
          reuseExistingChunk: true,
					maxInitialRequests: 5, // The default limit is too small to showcase the effect
          minSize: 30000, // This is example is too small to create commons chunks
				},
				vendor: {
					test: /node_modules/,
					chunks: "initial",
					name: "vendor",
					priority: -10,
				},
        styles: {
          test: /\.css$/,
          chunks: 'all',
          enforce: true,
        }
      }
    }
  }
}
baseConfig.plugins.push(new BundleAnalyzerPlugin());
baseConfig.plugins.push(new HtmlWebpackPlugin({
  template: path.resolve(__dirname, '../src/view/index.html'),
  filename: '../index.html' // 生成的html存放路径，相对于 path
}));
module.exports = webpackMerge(baseConfig, prdConfig);