import {
  GET_USER_REQUEST,
  GET_USER_SUCCESS,
  GET_USER_ERROR,
  GET_COMPANY_LIST_REQUEST,
  GET_COMPANY_LIST_SUCCESS,
  GET_COMPANY_LIST_ERROR,
  POST_COMPANY_FILIAL_REQUEST,
  POST_COMPANY_FILIAL_SUCCESS,
  POST_COMPANY_FILIAL_ERROR
} from '../actions'

// import {
//   POST_OPERATORS_REQUEST,
//   POST_OPERATORS_SUCCESS,
//   POST_OPERATORS_ERROR
// } from '../../routes/Operators/redux/actions'

const initialState = {
  getUserPending: false,
  companyListLoading: false,
  flialListLoading: false
}

const ACTION_HANDLERS = {
  ['WELCOME']: state => {
    return {
      ...state
    }
  },
  [GET_USER_REQUEST]: state => {
    return {
      ...state,
      getUserPending: true
    }
  },
  [GET_USER_SUCCESS]: (state, action) => {
    return {
      ...state,
      getUserPending: false,
      user: action.payload
    }
  },
  [GET_USER_ERROR]: state => {
    return {
      ...state,
      getUserPending: false
    }
  },
  [GET_COMPANY_LIST_REQUEST]: (state) => {
    return {
      ...state,
      companyListLoading: true
    }
  },
  [GET_COMPANY_LIST_SUCCESS]: (state, action) => {
    return {
      ...state,
      companyList: action.payload.result,
      companyListLoading: false
    }
  },
  [GET_COMPANY_LIST_ERROR]: (state, action) => {
    return {
      ...state,
      error: action.error.error,
      companyListLoading: false
    }
  },
  [POST_COMPANY_FILIAL_REQUEST]: state => {
    return {
      ...state,
      flialListLoading: true
    }
  },
  [POST_COMPANY_FILIAL_SUCCESS]: (state, action) => {
    return {
      ...state,
      flialListLoading: false,
      flialList: action.payload.result
    }
  },
  [POST_COMPANY_FILIAL_ERROR]: state => {
    return {
      ...state,
      flialListLoading: false
    }
  },
  'NOTIFY': (state, action) => {
    return {
      ...state,
      notification: action.payload
    }
  },
  // 'REMOVE_NOTIFICATION': (state) => {
  //   return {
  //     ...state,
  //     notification: { notify: false }
  //   }
  // },
  ['LOGOUT']: state => {
    return {
      ...state,
      user: { isAuthenticated: false }
    }
  }
}

export default (state = initialState, action) => {
  const handler = ACTION_HANDLERS[action.type]
  return handler ? handler(state, action) : state
}
