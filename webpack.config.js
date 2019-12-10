// for resolving the absolute path to our project
// necessary for webpack
// const webpack = require("webpack")
const path = require('path');
// const fs = require('fs')



module.exports = {
  mode: 'development',
  target: 'node',
  node: {
    global: true,
  },
  // where our app "starts"
  entry: './src/index.js',
  // where to put the transpiled javascript
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'main.js'
  },

  // babel config
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ['@babel/preset-env']
          }
        }
      }
    ]
  },
  externals: nodeModules,
  
  
  // allows us to see how the transpiled js relates to the untranspiled js
  devtool: 'source-map'
};
