import React from 'react'
import PropTypes from 'prop-types'
import { Route, Redirect } from 'react-router-dom'

const ProtectedRoute = ({ render, ...rest }) => (
  <Route {...rest} render={(props) => (
    localStorage.getItem('token') //eslint-disable-line no-undef
      ? render(props)
      : <Redirect to='/login' />
  )} />
)

ProtectedRoute.propTypes = {
  render: PropTypes.func
}

export default ProtectedRoute
