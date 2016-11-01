export default {
  output: {
    filename: 'client-bundle.js',
  },
  devtool: 'soure-map',
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        exclude: [/node_modules/]
      },
    ],
  },
  resolve: {
    extensions: ['', '.js', '.jsx'],
  },
}