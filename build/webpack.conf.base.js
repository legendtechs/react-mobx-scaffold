var webpack = require('webpack');
var path = require('path');
var MiniCssExtractPlugin = require('mini-css-extract-plugin');
var devMode = process.env.NODE_ENV !== 'production';
const config = require('../config')

module.exports = {
  entry: {
    app: ['@babel/polyfill', './index.js']
  },
  resolve: {
    extensions: ['.js', '.css', '.less'],
    alias: {
      Utils: path.resolve(__dirname, '../src/utils'),
      component: path.resolve(__dirname, '../src/component'),
      assets: path.resolve(__dirname, '../src/assets'),
      routes: path.resolve(__dirname, '../src/routes'),
      services: path.resolve(__dirname, '../src/services'),
      store: path.resolve(__dirname, '../src/store')
    }
  },
  context: path.resolve(__dirname, '../src/'),
  stats: 'normal',
  target: 'web',
  performance: {
    hints: "warning",
    maxAssetSize: 200000,
    maxEntrypointSize: 400000
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: [{
          loader: 'babel-loader',
          options: {
            cacheDirectory: true
          }
        }, 
        // {
        //   loader: 'eslint-loader',
        //   options: {
        //     fix: true,
        //     cache: true
        //   }
        // }
        ],
        exclude: path.resolve(__dirname, '../node_modules'),
      },
      {
        test: /\.css$/,
        use: [
          devMode ? 'style-loader' : MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              parser: 'sugarss',
              // modules: true,
              importLoaders: 1,
              localIdentName: '[path][name]__[local]--[hash:base64:5]'
            }
          },
          'postcss-loader'
        ],
         exclude: path.resolve(__dirname, '../node_modules')
      },
      {
        test: /\.scss$/,
        use: [
          devMode ? 'style-loader' : MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              modules: true,
              localIdentName: devMode ? '[name]__[local]--[hash:base64:5]' : '[hash:base64]',
            }
          },
          'postcss-loader',
          'sass-loader',
        ],
        exclude: path.resolve(__dirname, '../node_modules')
      },
      {
        test: /\.less$/,
        use: [
          devMode ? 'style-loader' : MiniCssExtractPlugin.loader,
          'css-loader',
          'postcss-loader',
          {
            loader: 'less-loader',
            options: {
              modules: false,
              localIdentName: '[path][name]__[local]--[hash:base64:5]',
              modifyVars: {
                'primary-color': '#3483DA',
                'link-color': '#3483DA',
                'border-radius-base': '4px'
              },
              javascriptEnabled: true
            }
          }
        ],
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: 'html-loader',
            options: {
              attrs: ['img:src', 'link:href']
            }
          }
        ],
        exclude: path.resolve(__dirname, '../node_modules')
      },
      {
        test: /favicon\.png$/,
        use: [
          {
          // 使用file-loader
            loader: 'file-loader',
            options: {
              name: './images/[name].[ext]?[hash]'
            }
          }
        ],
        exclude: [path.resolve(__dirname, '../node_modules'), path.resolve(__dirname, `../favicon.png$`)]
      },
      {
        // 处理静态资源
        test: /\.(png|jpg|jpeg|gif|eot|ttf|woff|woff2)(\?.+)?$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 10000
            }
          }
        ],
        exclude: path.resolve(__dirname, '../node_modules')
      },
      {
        test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
        use: [
          {
            loader: 'babel-loader',
          },
          {
            loader: '@svgr/webpack',
            options: {
              babel: false,
              icon: true,
            },
          },
        ],
      }
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': config.env[process.env.NODE_ENV]
    }),
    new webpack.ProgressPlugin(),
    new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/),
    new MiniCssExtractPlugin({
      filename: devMode ? '[contenthash].css' : '[name].[contenthash].css',
      chunkFilename: devMode ? '[contenthash].css' : '[id].[contenthash].css',
    })
  ]
}