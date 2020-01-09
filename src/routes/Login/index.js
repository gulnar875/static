import React from 'react'
import PropTypes from 'prop-types'
import DynamicImport from '../../dynamic/dynamicImport'

const Login = ({ store, ...restOfProps }) => (
  <DynamicImport reducerKey='login' store={store} load={() =>
    Promise.all([
      import('./components/login'),
      import('./redux')])
  }>
    {(Component) => Component === null
      ? <p>Loading</p>
      : <Component {...restOfProps} />}
  </DynamicImport>
)
Login.propTypes = {
  store: PropTypes.object.isRequired
}
export default Login
