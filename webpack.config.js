module.exports = {
  entry: {
    home: './js/main.js',
  },
  output: {
    filename: 'js/main.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        options: {
          presets: ["@babel/preset-env"],
        }
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      }
    ]
  },
  mode: 'development',
  devtool: 'inline-source-map',
  watchOptions: {
    ignored: /node_modules/
  },
  devServer: {
    contentBase : './',
    compress: true
  },
}