const path = require('path')
const project = require('../project.config.js')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const webpack = require('webpack')
const CopyWebpackPlugin = require('copy-webpack-plugin')

// Load Highcharts
// var Highcharts = require('highcharts');
// Load a module
// require('highcharts/modules/funnel')(Highcharts);


const __DEV__ = project.env === 'development'
const __TEST__ = project.env === 'test'
const __PROD__ = project.env === 'production'

const inProject = path.resolve.bind(path, project.basePath)
const inSrc = (file) => inProject('src', file)

const extractStyle = new ExtractTextPlugin({
  filename: '[name].[contenthash].css',
  allChunks: true,
  disable: __DEV__
})
console.log('environment nedir', project.env)
const config = {
  entry: {
    app: [
      inSrc('index.js'),
      'react-hot-loader/patch'
    ],
    vendor: project.vendors
  },
  output: {
    filename: __DEV__ ? '[name].js' : '[name].[chunkhash].js',
    path: inProject('dist'),
    publicPath: project.publicPath
  },
  devtool: __DEV__ ? 'source-map' : 'nosources-source-map',
  devServer: {
    historyApiFallback: true,
    contentBase: inProject('dist'),
    compress: true,
    port: 4068,
    hot: true,
    open: true
  },
  plugins: [
    extractStyle,
    new HtmlWebpackPlugin({
      template: inSrc('index.html'),
      inject: true,
      minify: {
        collapseWhitespace: true
      }
    }),
    new webpack.DefinePlugin({
      'process': {
        env: {
          NODE_ENV: JSON.stringify(project.env)
        }
      },
      __DEV__,
      __PROD__,
      __TEST__
    }),
    new webpack.HashedModuleIdsPlugin(),
    new webpack.optimize.ModuleConcatenationPlugin(),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      filename: __DEV__ ? 'vendor.[hash].js' : 'vendor.[chunkhash].js',
      minChunks: __DEV__ ? 2 : Infinity
    }),
    new CopyWebpackPlugin([{
      from: './public/',
      to: 'public/'
    }])
  ],
  resolve: {
    extensions: ['.js', '.json', '.jsx', '.css', '.scss'],
    modules: [
      'node_modules',
      inProject('src')
    ],
    alias: {
      src: inProject('src')
    }
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: ['babel-loader', 'eslint-loader']
      },
      {
        test: /\.(s?)css$/,
        use: extractStyle.extract({
          fallback: 'style-loader',
          use: [
            {
              loader: 'css-loader',
              options: {
                sourceMap: true
              }
            },
            {
              loader: 'resolve-url-loader'
            },
            {
              loader: 'sass-loader',
              options: {
                sourceMap: true
              }
            }
          ],
          publicPath: inProject('dist')
        })
      }
    ]
  }
}
//Fonts
const fontsTypes = [
  ['woff', 'application/font-woff'],
  ['woff2', 'application/font-woff2'],
  ['otf', 'font/opentype'],
  ['ttf', 'application/octet-stream'],
  ['eot', 'application/vnd.ms-fontobject'],
  ['svg', 'image/svg+xml']
]
fontsTypes.forEach((font) => {
  const extension = font[0]
  const mimetype = font[1]

  config.module.rules.push({
    test: new RegExp(`\\.${extension}$`),
    loader: 'file-loader',
    options: {
      name: 'fonts/[name].[ext]',
      limit: 10000,
      mimetype
    }
  })
})

//Images
config.module.rules.push({
  test: /\.(png|jpg|gif)$/,
  loader: 'file-loader',
  options: {
    limit: 8192
  }
})

if (__DEV__) {
  config.plugins.push(
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin()
  )
}

if (__PROD__) {
  config.plugins.push(
    new webpack.LoaderOptionsPlugin({
      minimize: true,
      debug: false
    }),
    new webpack.NamedModulesPlugin(),
    new webpack.optimize.UglifyJsPlugin({
      sourceMap: !!config.devtool
    })
  )
}

module.exports = config
