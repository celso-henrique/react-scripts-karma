module.exports = () => {
  const config = {
    browsers: ['Chrome'],
    frameworks: ['mocha'],
    files: [{ pattern: 'src/setupTests.js' }, { pattern: 'src/**/*.spec.js' }],
    preprocessors: {
      'src/setupTests.js': ['webpack'],
      'src/**/*.spec.js': ['webpack']
    },
    reporters: ['nyan'],
    webpack: {
      mode: 'development',
      optimization: {
        splitChunks: false,
        runtimeChunk: false
      },
      resolve: {
        modules: ['src', 'node_modules']
      },
      module: {
        rules: [
          {
            test: /\.js$/,
            exclude: /node_modules/,
            loader: 'babel-loader'
          },
          {
            test: /\.(woff|woff2|eot|ttf|otf|svg)$/,
            use: [
              {
                loader: 'file-loader'
              }
            ]
          },
          {
            test: /\.css$/,
            use: ['style-loader', 'css-loader']
          }
        ]
      }
    },
    webpackServer: {
      noInfo: true
    },
    colors: true,
    autoWatch: true,
    singleRun: false
  }

  return config
}
