const webpack = require('webpack');
const path = require('path');
// var ExtractTextPlugin = require('extract-text-webpack-plugin')
// var ExtractTextPluginInstance = new ExtractTextPlugin("bundle.css")

const commonsPlugin = new webpack.optimize.CommonsChunkPlugin('common.js');

const PATHS = {
  src: path.join(__dirname, 'src'),
  main: path.join(__dirname, 'src', 'main.js'),
  build: path.join(__dirname, 'build'),
  node_modules: path.join(__dirname, 'node_modules')
};

module.exports = {
  entry: {
    main: PATHS.main
  },
  resolve: {
    moduleDirectories: [PATHS.node_modules],
    extensions: ['', '.js', '.json', '.jsx']
  },
  output: {
    path: PATHS.build,
    publicPath: "/build/",
    filename: '[name].js'
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loader: 'react-hot',
        exclude: /node_modules/
      },
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['es2015', 'react']
        }
      },
      {
        test: /\.scss$/,
        loader: 'style!css!sass'
      },
      {
        test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: 'url-loader?limit=10000&mimetype=application/font-woff'
      },
      { test: /\.png$/, loader: "url-loader?mimetype=image/png" },
      {
        test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: 'file-loader'
      },
    ]
  },
  devServer: {
    contentBase: "./",
    historyApiFallback: true,
  },
  plugins: [commonsPlugin]
};
