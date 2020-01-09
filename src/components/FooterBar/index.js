import React, { Component } from 'react'

class FooterBar extends Component {
  render() {
    return (
      <div className='content-footer white'>
        <div className='d-flex p-3'>
          <span className='text-sm text-muted flex'>© Copyright. OTP</span>
          <div className='text-sm text-muted'>Version 1.0</div>
        </div>
      </div>
    )
  }
}

export default FooterBar
