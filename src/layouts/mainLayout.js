import React, { Component } from 'react'
import PropTypes from 'prop-types'

import NavBar from '../components/NavBar'
import HeaderBar from '../components/HeaderBar'
import FooterBar from '../components/FooterBar'
import NotificationBar from '../components/NotificationBar'

class MainLayout extends Component {
  static propTypes = {
    children: PropTypes.node.isRequired
  }
  render() {
    return (
      <div className='app'>
        <NavBar />
        <div id='content' className='app-content box-shadow-2 box-radius-2'>
          <HeaderBar />
          <div className='content-main'>
            <div className='padding'>
              {this.props.children}
            </div>
          </div>
          <NotificationBar />
          <FooterBar />
        </div>
      </div>
    )
  }
}

export default MainLayout
