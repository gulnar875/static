import React, { Component } from 'react'
// import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { getUserInfo as getUser } from '../../common/actions'
// import { logOut as out } from '../../routes/Login/redux/actions'
import { withRouter } from 'react-router-dom'
import logo from '../../../public/img/logo_msxmo.png'
import '../../styles/dashboard.css'
// import '../../styles/_base.scss'

class NavBar extends Component {
  static propTypes = {
    getUserInfo: PropTypes.func.isRequired,
    // logOut: PropTypes.func,
    history: PropTypes.object
  }
  // componentWillMount() {
  //   const { getUserInfo } = this.props
  //   getUserInfo()
  // }
  render() {
    // const { logOut } = this.props
    return (
      <aside className='sidenav-main nav-expanded nav-lock nav-collapsible sidenav-light sidenav-active-square'>
        <div className='brand-sidebar'>
          <h1 className='logo-wrapper'>
            <img className='logo-img' src={logo} alt='logo' />
          </h1>
        </div>
        <ul className='sidenav sidenav-collapsible leftside-navigation collapsible sidenav-fixed menu-shadow ps' style={{ transform: 'translateX(0%)' }}>
          <li><a className='collapsible-body' href={'user-login.html'}>
            <i className='material-icons'>person_outline</i><span>Login</span></a>
          </li>
          <div className='ps__rail-x' style={{ left: '0px', bottom: '0px' }}>
            <div className='ps__thumb-x' tabIndex='0' style={{ left: '0px', width: '0px' }} />
          </div>
          <div className='ps__rail-y' style={{ top: '0px', right: '0px' }}>
            <div className='ps__thumb-y' tabIndex='0' style={{ top: '0px', height: '0px' }} />
          </div>
        </ul>
      </aside>
    )
  }
}

const mapDispatchToProps = {
  getUserInfo: getUser
  // logOut: out
}

const mapStateToProps = (state) => ({
  getUserPending: state.common.getUserPending
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(NavBar))
