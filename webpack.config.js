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
        }
      ]
    }
  }