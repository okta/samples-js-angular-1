/* eslint import/no-unresolved:0 import/no-extraneous-dependencies:0 */
const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: [
    'babel-polyfill',
    './app/app.js',
  ],
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    library: 'bundle',
  },
  devtool: 'source-map',
  plugins: [
    new CopyWebpackPlugin([
      { from: 'app' },
      { from: 'node_modules/@okta/okta-signin-widget/dist/css', to: 'css' },
      { from: 'node_modules/@okta/okta-signin-widget/dist/font', to: 'font' },
      { from: 'node_modules/@okta/okta-signin-widget/dist/img', to: 'img' },
    ]),
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
      {
        test: /\.hbs$/,
        loader: 'handlebars-loader',
        include: path.join(__dirname, 'app'),
      },
    ],
  },
  debug: true,
};
