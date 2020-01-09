import history from 'history'
export default store => next => action => { //eslint-disable-line no-unused-vars
  if (action.type && action.type.includes('ERROR') && action.error) {
    if (action.error.response && action.error.response.status === 401) {
      store.dispatch({
        type: 'LOG_OUT'
      })
      history.push('/login')
    }
  }
  return next(action)
}

