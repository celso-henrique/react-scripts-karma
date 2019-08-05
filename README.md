# react-scripts-karma
[![Build Status](https://travis-ci.org/celso-henrique/react-scripts-karma.svg?branch=master)](https://travis-ci.org/celso-henrique/react-scripts-karma)

React scripts forked from [Create React App](https://github.com/facebook/create-react-app), but using [Karma](https://karma-runner.github.io/latest/index.html) as the test runner and [Mocha](https://mochajs.org/) as the test framework by default.

## Why
There are situations when you need to run your tests inside a real browser, for cross-browser testing or maybe to get support for a specification that wasn't implemented into JSDOM yet. Using this project you don't need to eject your projects created using Create React App.

## Usage
Install this lib using:

``` sh
npm install --save react-scripts-karma
```

Override the test script of your project's `package.json` (and other scripts if you want to use our forked version):
``` json
{
  "scripts": {
    "test": "react-scripts-karma test"
  }
}
```

## Configuration
The default karma configuration is:

``` javascript
const karmaConfig = {
  browsers: ['Chrome'],
  frameworks: ['mocha'],
  files: [
    { pattern: 'src/setupTests.js' },
    { pattern: 'src/**/*.spec.js' }
  ],
  preprocessors: {
    'src/setupTests.js': ['webpack'],
    'src/**/*.spec.js': ['webpack']
  },
  reporters: ['nyan'],
  webpack: {
    mode: 'development',
    node: {
      fs: 'empty'
    },
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
  autoWatch: false,
  singleRun: true
}
```

But you can override or add other configs just adding the key "karma" into your `package.json` file:
``` json
{
  "karma": {
    "reporters": ["dots"]
  }
}
```

## Using Jest
If you want to use Jest to compare the results with karma or for any other reason, you can use the command `react-scripts-karma test-jest`, as bellow:

``` json
{
  "scripts": {
    "test": "react-scripts-karma test",
    "test:jest": "react-scripts-karma test-jest",
  }
}
```

## License
This project is [MIT licensed](./LICENSE).
