var path = require('path')
var config = require('../config')
var utils = require('./utils')
var webpack = require('webpack')
var merge = require('webpack-merge')
var baseWebpackConfig = require('./webpack.base.conf')
var HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
var env = process.env.NODE_ENV === 'testing'
  ? require('../config/test.env')
  : config.build.env

var webpackConfig = merge(baseWebpackConfig, {

  mode: 'production',

  // module: {
  //   loaders: utils.styleLoaders({ sourceMap: config.build.productionSourceMap, extract: true })
  // },

  devtool: config.build.productionSourceMap ? '#source-map' : false,

  output: {
    path: config.build.assetsRoot,
    filename: utils.assetsPath('js/[name]-[chunkhash].js'),
    chunkFilename: utils.assetsPath('js/[name]-[chunkhash].js')
  },

  // vue: {
  //   loaders: utils.cssLoaders({
  //     sourceMap: config.build.productionSourceMap,
  //     extract: true
  //   })
  // },

  optimization: {
    minimize: true
  },

  plugins: [

    // https://webpack.js.org/plugins/define-plugin/#src/components/Sidebar/Sidebar.jsx
    new webpack.DefinePlugin({
      'process.env': env
    }),

    // https://github.com/webpack-contrib/mini-css-extract-plugin
    new MiniCssExtractPlugin({
      filename: utils.assetsPath('css/style-[hash].css'),
      chunkFilename: utils.assetsPath('css/style-[hash].css')
    }),

    // https://webpack.js.org/plugins/html-webpack-plugin/#src/components/Sidebar/Sidebar.jsx
    new HtmlWebpackPlugin({
      filename: process.env.NODE_ENV === 'testing'
        ? 'index.html'
        : config.build.index,
      template: 'index.html',
      minify: {
        removeComments: true,
        collapseWhitespace: true,
        removeAttributeQuotes: true
      }
    }),
  ]
})

if (config.build.productionGzip) {
  var ZipPlugin = require('zip-webpack-plugin');

  webpackConfig.plugins.push(
    new ZipPlugin({
      filename: 'project.zip',
      include: /.*/,
    })
  )
}

module.exports = webpackConfig
