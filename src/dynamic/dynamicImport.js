import PropTypes from 'prop-types'
import { Component } from 'react'
import { injectReducer } from '../redux/reducers'

class DynamicImport extends Component {
  static propTypes = {
    load: PropTypes.func.isRequired,
    children: PropTypes.func.isRequired,
    reducerKey: PropTypes.string.isRequired,
    store: PropTypes.object
  }
  state = {
    component: null
  }
  componentWillMount() {
    const { reducerKey, store } = this.props
    this.props.load()
      .then(([component, reducer]) => {
        injectReducer(store, { key: reducerKey, reducer })
        this.setState(() => ({
          component: component.default || component
        }))
      })
  }

  render() {
    return this.props.children(this.state.component)
  }
}

export default DynamicImport
