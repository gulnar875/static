import React from 'react'
import PropTypes from 'prop-types'
import DynamicImport from '../../dynamic/dynamicImport'

const Statistics = ({ store, ...restOfProps }) => (
  <DynamicImport reducerKey='statistics' store={store} load={() =>
    Promise.all([
      import('./components/statistics'),
      import('./redux')])
  }>
    {(Component) => Component === null
      ? <p>Loading</p>
      : <Component {...restOfProps} />}
  </DynamicImport>
)
Statistics.propTypes = {
  store: PropTypes.object.isRequired
}
export default Statistics
