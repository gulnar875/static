import React, { Component } from 'react'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

class NotificationBar extends Component {
  static propTypes = {
    removeNotification: PropTypes.func.isRequired,
    notification: PropTypes.object
  }
  constructor(props) {
    super(props)
    this.state = {
      autoHideTimeOut: 3000
    }
  }

  componentWillMount() {
    const { removeNotification } = this.props
    setTimeout(() => {
      removeNotification()
    }, this.state.autoHideTimeOut)
  }

  componentWillReceiveProps(nextProps) {
    const { removeNotification } = this.props
    if (nextProps.notification && nextProps.notification.notify) {
      toast(nextProps.notification.message, { autoClose: this.state.autoHideTimeOut, type: nextProps.notification.type })
      setTimeout(() => {
        removeNotification()
      }, this.state.autoHideTimeOut)
    }
  }
  render() {
    const { notification } = this.props
    if (notification && notification.notify) {
      return (
        <ToastContainer />
      )
    } else {
      return <div style={{ diplay: 'block' }} />
    }
  }
}

const removeNotification = () => {
  return dispatch => {
    return new Promise(() => {
      dispatch({
        type: 'REMOVE_NOTIFICATION'
      })
    })
  }
}

const mapDispatchToProps = {
  removeNotification
}

const mapStateToProps = (state) => ({
  notification: state.common.notification
})

export default connect(mapStateToProps, mapDispatchToProps)(NotificationBar)
