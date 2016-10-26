const webpack = require('webpack')

const ExtractTextPlugin = require("extract-text-webpack-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');

const extractLESS = new ExtractTextPlugin('/css/[name].css');

module.exports = {
  entry: {
    //"bootstrap-webpack!./bootstrap.config.js",
    app: './src/app.js',
  },
  output: {
     path: './dist',
     filename: '/js/[name].bundle.js'
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/html/index.jade'
    }),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify(process.env.NODE_ENV || 'development')
      }
    }),
    extractLESS
  ],
  module: {
    loaders: [
      {test: /\.(woff|woff2)(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=application/font-woff&name=/css/fonts/[name].[ext]'},
      {test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=application/octet-stream&name=/css/fonts/[name].[ext]'},
      {test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: 'file?name=/css/fonts/[name].[ext]'},
      {test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=image/svg+xml&name=/css/fonts/[name].[ext]'},
      {
        test: /\.less$/,
        loader: extractLESS.extract(['css','less'])//"style!css!less"
      },
      {
        test: /\.jade$/,
        loader: 'pug-loader'
      },
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel', // 'babel-loader' is also a valid name to reference
        query: {
          cacheDirectory: true,
          plugins: ['angular2-annotations', 'transform-decorators-legacy' ],
          presets: ['es2015', 'stage-0', 'angular2']
        }
      }
    ]
  }
};

