import '../styles/_base'
import '../styles/fonts'
import PropTypes from 'prop-types'
import { Provider } from 'react-redux'
import React, { Component } from 'react'
import Routes from '../routes'

export default class App extends Component {
  static propTypes = {
    store: PropTypes.object.isRequired
  }

  shouldComponentUpdate() {
    return false
  }

  render() {
    const { store } = this.props
    return (
      <Provider store={store}>
        <Routes store={store} />
      </Provider>
    )
  }
}
