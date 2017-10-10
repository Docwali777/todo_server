const webpack = require('webpack');
var fs = require('fs')
var path = require('path')

module.exports = {

  entry: ['babel-polyfill', './server/index.js'],
  output: {
    filename: 'server.bundle.js',
    path: path.join(__dirname, 'build')
  },

  target: 'node',

  // keep node_module paths out of the bundle
  externals: fs.readdirSync(path.resolve(__dirname, 'node_modules')).concat([
    'react-dom/server', 'react/addons',
  ]).reduce(function (ext, mod) {
    ext[mod] = 'commonjs ' + mod
    return ext
  }, {}),

  node: {
    __filename: true,
    __dirname: true
  },

  module: {
    rules: [
      { test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['env']
        }
      }
    ]
}
}
