import React, { Component } from 'react'
import LoginForm from './loginForm'
import { login as loginAction } from '../redux/actions'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { withRouter } from 'react-router-dom'

class Login extends Component {
  static propTypes = {
    login: PropTypes.func.isRequired,
    history: PropTypes.object
  }
  render() {
    const { login } = this.props
    return (
      <LoginForm onSubmit={(e) => login(this.props.history, e)} />
    )
  }
}

const mapDispatchToProp = {
  login: loginAction
}

export default withRouter(connect(null, mapDispatchToProp)(Login))
