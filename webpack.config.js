module.exports = {
  entry: './index.js',

  output: {
    path: './build/',
    filename: 'bundle.js',
    publicPath: '/build/'
  },

  module: {
    loaders: [
      { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader?presets[]=es2015&presets[]=react' }
    ]
  }
}