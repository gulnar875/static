import React from 'react'
import PropTypes from 'prop-types'
import DynamicImport from '../../dynamic/dynamicImport'

const Home = ({ store, ...restOfProps }) => (
  <DynamicImport reducerKey='home' store={store} load={() =>
    Promise.all([
      import('./components/home'),
      import('./redux')])
  }>
    {(Component) => Component === null
      ? <p>Loading</p>
      : <Component {...restOfProps} />}
  </DynamicImport>
)
Home.propTypes = {
  store: PropTypes.object.isRequired
}
export default Home
