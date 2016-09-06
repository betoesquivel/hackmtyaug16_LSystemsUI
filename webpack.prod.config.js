var path = require('path');
var react = require('react');
var webpack = require('webpack');
var TransferWebpackPlugin = require('transfer-webpack-plugin');

module.exports = {
  devtool: 'eval',
  entry: [
    './src/index'
  ],
  output: {
    path: path.join(__dirname, 'build'),
    filename: 'app.min.js',
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin({
        compress: {
            warnings: true
        },
    }),
    new TransferWebpackPlugin([
      {from: 'www'},
    ], path.resolve(__dirname, 'src')),
    new webpack.DefinePlugin({
      'process.env': {
       'AWS_ACCOUNT_ID': JSON.stringify(process.env.AWS_ACCOUNT_ID),
       'COGNITO_IDENTITY_POOL_ID': JSON.stringify(process.env.COGNITO_IDENTITY_POOL_ID),
       'COGNITO_UNAUTH_ROLE_ARN': JSON.stringify(process.env.COGNITO_UNAUTH_ROLE_ARN)
      }
    })
  ],
  module: {
    loaders: [
      {
        test: /\.js$/,
        loaders: ['babel'],
        include: path.join(__dirname, 'src'),
        exclude: /node_modules/,
        extensions: ['.jsx', '.js']
      },
      {
        test: /\.less$/,
        loader: "style-loader!css-loader!less-loader"
      },
      {
        test: /\.css$/,
        loader: "style-loader!css-loader"
      },
      {
        test: /\.(eot|woff|woff2|ttf|svg|png|jpg)$/,
        loader: 'url-loader?limit=30000&name=[name]-[hash].[ext]'
      }
    ]
  }
};
