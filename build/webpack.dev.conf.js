var config = require('../config')
var webpack = require('webpack')
var merge = require('webpack-merge')
var utils = require('./utils')
var baseWebpackConfig = require('./webpack.base.conf')
var HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
var projectConfig = require('../src/config.js');

// add hot-reload related code to entry chunks
Object.keys(baseWebpackConfig.entry).forEach(function (name) {
  baseWebpackConfig.entry[name] = ['./build/dev-client'].concat(baseWebpackConfig.entry[name])
})

module.exports = merge(baseWebpackConfig, {

  mode: 'development',

  devtool: '#eval-source-map',

  plugins: [

    // https://webpack.js.org/plugins/define-plugin/#src/components/Sidebar/Sidebar.jsx
    new webpack.DefinePlugin({
      'process.env': config.dev.env
    }),

    // https://webpack.js.org/plugins/hot-module-replacement-plugin/#src/components/Sidebar/Sidebar.jsx
    new webpack.HotModuleReplacementPlugin(),
  
    // https://github.com/webpack-contrib/mini-css-extract-plugin
    new MiniCssExtractPlugin({
      filename: "style.css",
      chunkFilename: "style.css"
    }),

    // https://webpack.js.org/plugins/html-webpack-plugin/#src/components/Sidebar/Sidebar.jsx
    new HtmlWebpackPlugin({
      template: 'index.html',
      backendHost: projectConfig.backendHost
    })
  ]
})
