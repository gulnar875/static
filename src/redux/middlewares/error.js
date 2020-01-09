const errorHandler = store => next => action => {
  if (action.type) {
    if (action.type.includes('SUCCESS') && (action.payload && action.payload.notify)) {
      store.dispatch({
        type: 'NOTIFY',
        payload: {
          notify: action.payload.notify,
          type: action.payload.type,
          message: action.payload.message
        }
      })
    } else if (action.type.includes('ERROR') && (action.error && action.error.notify)) {
      store.dispatch({
        type: 'NOTIFY',
        payload: {
          notify: action.error.notify,
          type: action.error.type,
          message: action.error.message
        }
      })
    }
  }
  return next(action)
}

export default errorHandler

