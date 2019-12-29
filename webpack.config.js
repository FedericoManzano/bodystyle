const path = require('path');

module.exports = {
  entry: './src/main.js',
  output: {
    filename: 'bodystyle.js',
    path: path.join(__dirname, 'js'),
  },

  module: {
    rules: [
      { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" }
    ]
  }
};