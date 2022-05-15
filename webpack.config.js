const path = require('path');

module.exports = {
  mode: 'development',
  entry: [path.resolve(__dirname, 'src/index.ts')],
  output: {
    filename: 'app.js',
    path: path.resolve(__dirname, 'assets'),
    publicPath: path.resolve(__dirname, '/assets/'),
  },
  module: {
    rules: [
      {
        test: /\.(js|ts)?$/,
        use: 'ts-loader',
        exclude: /node_modules/
      },
      {
        test: /\.(jpg|png|jpeg|gif)$/,
        loader: 'url-loader'
      }]
  },
  resolve: {
    extensions: ['.ts', '.js', '.json'],
  },
  devtool: 'source-map',
  devServer: {
    open: true,
    hot: true,
    static: path.resolve(__dirname, 'dist'),
    host: '0.0.0.0',
  },
}