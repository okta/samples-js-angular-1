/* eslint import/no-unresolved:0 import/no-extraneous-dependencies:0 */
const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: [
    'babel-polyfill',
    './app/js/main',
  ],
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    library: 'app',
  },
  devtool: 'source-map',
  devServer: {
    contentBase: './dist',
    inline: true,
  },
  plugins: [
    new CopyWebpackPlugin([{ from: 'app' }]),
  ],
  module: {
    loaders: [
      {
        loader: 'babel-loader',
        test: /\.js$/,
        include: path.join(__dirname, 'app'),
        query: {
          presets: ['es2015'],
        },
      },
    ],
  },
  debug: true,
};
