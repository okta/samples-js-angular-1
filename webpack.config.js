const path = require('path');

module.exports = {
  entry: [
    'babel-polyfill',
    './app/js/main',
  ],
  output: {
    path: path.resolve(__dirname, 'app'),
    filename: 'bundle.js',
  },
  devtool: 'source-map',
  devServer: {
    contentBase: './app',
    inline: true,
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        include: path.join(__dirname, 'app'),
        loader: 'babel-loader',
        query: {
          presets: ['es2015'],
        },
      },
    ],
  },
  debug: true,
};
