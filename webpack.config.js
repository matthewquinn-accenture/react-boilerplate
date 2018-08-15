module.exports = {
  entry: './src/index.js',
  mode: 'development',
  output: {
    path: __dirname + '/dist/assets',
    filename: 'bundle.js',
    publicPath: 'assets'
  },
  devServer: {
    contentBase: './dist',
    port: 3000
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['env', 'react']
          }
        }
      }
    ]
  }
}
