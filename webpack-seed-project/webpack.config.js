module.exports = {
  entry: [
    './src/index.jsx'
  ],
  externals: {
    'Config': JSON.stringify(require('./config.dev.json'))
  },
  output: {
    path: __dirname,
    publicPath: '/',
    filename: 'js/bundle.js'
  },
  module: {
    loaders: [{
      exclude: /node_modules/,
      loader: 'babel'
    }]
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  devServer: {
    historyApiFallback: true,
    contentBase: './output/'
  }
};
