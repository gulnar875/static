const NODE_ENV = process.env.NODE_ENV || 'production'

module.exports = {
  basePath: __dirname,
  env: NODE_ENV,
  publicPath: '/',
  vendors: [
    'react',
    'react-dom',
    'redux',
    'react-redux',
    'redux-thunk',
    'react-router-dom'
  ],
  globals: {
    test: false
  }
}
