import React, { Component } from 'react'
import '../../styles/materialize.css'

class HeaderBar extends Component {
  render() {
    return (
      <header id='header' className='page-topbar'>
        <div className='content-header white box-shadow-2'>
          <div className='navbar navbar-fixed'>
            <div className='navbar-main navbar-color nav-collapsible sideNav-lock navbar-dark gradient-45deg-indigo-purple no-shadow'>
              <div className='nav-wrapper'>
                <div className='header-search-wrapper hide-on-med-and-down'><i className='material-icons'>search</i>
                  <input className='header-search-input z-depth-2' type='text' name='Search' placeholder='Axtar' />
                </div>
                <ul className='navbar-list right'>
                  <li className='hide-on-med-and-down'><a className='waves-effect waves-block waves-light translation-button'
                    href='javascript:void(0);' data-target='translation-dropdown'><span className='flag-icon flag-icon-gb' /></a>
                  </li>
                  <li className='hide-on-med-and-down'><a className='waves-effect waves-block waves-light toggle-fullscreen'
                    href='javascript:void(0);'><i className='material-icons'>settings_overscan</i></a></li>
                  <li className='hide-on-large-only'><a className='waves-effect waves-block waves-light search-button'
                    href='javascript:void(0);'><i className='material-icons'>search</i></a></li>
                </ul>
              </div>
              <div className='display-none search-sm'>
                <div className='nav-wrapper'>
                  <div className='input-field'>
                    <input className='search-box-sm' type='search' />
                    <label className='label-icon' htmlFor='search'><i className='material-icons search-sm-icon'>search</i></label><i className='material-icons search-sm-close'>close</i>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    )
  }
}

export default HeaderBar
