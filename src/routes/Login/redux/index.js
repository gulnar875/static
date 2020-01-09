import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_ERROR
} from './actions'

const initialState = {
  loginPending: false
}

const ACTION_HANDLERS = {
  ['WELCOME']: state => {
    return {
      ...state
    }
  },
  [LOGIN_REQUEST]: state => {
    return {
      ...state,
      loginPending: true
    }
  },
  [LOGIN_SUCCESS]: (state) => {
    return {
      ...state,
      loginPending: false,
      user: { isAuthenticated: true }
    }
  },
  [LOGIN_ERROR]: state => {
    return {
      ...state,
      loginPending: false
    }
  }
}

export default (state = initialState, action) => {
  const handler = ACTION_HANDLERS[action.type]
  return handler ? handler(state, action) : state
}
