module.exports = {
    entry: {
      home: './js/main.js',
    },
    output: {
      filename: 'dist/js/main.js'
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          loader: 'babel-loader',
          options: {
            presets: ["@babel/preset-env"],
          }
        }
      ]
    }
  }