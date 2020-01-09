import React, { Component } from 'react'
import PropTypes from 'prop-types'

class NotFoundLayout extends Component {
  static propTypes = {
    children: PropTypes.node.isRequired
  }
  render() {
    return (
      <div className='d-flex flex align-items-center h-v info-404 not-found-theme'>
        {this.props.children}
      </div>
    )
  }
}

export default NotFoundLayout
