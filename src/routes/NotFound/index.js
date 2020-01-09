import React from 'react'
import PropTypes from 'prop-types'
import DynamicImport from '../../dynamic/dynamicImport'

const NotFound = ({ store, ...restOfProps }) => (
  <DynamicImport reducerKey='notfound' store={store} load={() =>
    Promise.all([
      import('./components/notFound')])
  }>
    {(Component) => Component === null
      ? <p>Loading</p>
      : <Component {...restOfProps} />}
  </DynamicImport>
)
NotFound.propTypes = {
  store: PropTypes.object.isRequired
}
export default NotFound
