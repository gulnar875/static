import {
  POST_STATISTICS_REQUEST,
  POST_STATISTICS_SUCCESS,
  POST_STATISTICS_ERROR,
  POST_STATISTICSBYREG_REQUEST,
  POST_STATISTICSBYREG_SUCCESS,
  POST_STATISTICSBYREG_ERROR,
  POST_DAILYSTATISTICSS_ERROR,
  POST_DAILYSTATISTICSS_SUCCESS,
  POST_DAILYSTATISTICSS_REQUEST,
  GET_DAILYCERTIFICATECOUNT_REQUEST,
  GET_DAILYCERTIFICATECOUNT_SUCCESS,
  GET_DAILYCERTIFICATECOUNT_ERROR,
  CLEAR_DATA
} from './actions'
const initialState = {
  loginPending: false
}

const ACTION_HANDLERS = {
  [POST_STATISTICS_REQUEST]: state => {
    return {
      ...state,
      loginPending: true
    }
  },
  [POST_STATISTICS_SUCCESS]: (state, action) => {
    return {
      ...state,
      loginPending: false,
      user: { isAuthenticated: true },
      statisticsData: action.payload.result
    }
  },
  [POST_STATISTICS_ERROR]: state => {
    return {
      ...state,
      loginPending: false
    }
  },
  [POST_STATISTICSBYREG_REQUEST]: state => {
    return {
      ...state,
      loginPending: true
    }
  },
  [POST_STATISTICSBYREG_SUCCESS]: (state, action) => {
    return {
      ...state,
      loginPending: false,
      statisticsByRegData: action.payload.result,
      certificateCount: action.payload.result
    }
  },
  [POST_STATISTICSBYREG_ERROR]: state => {
    return {
      ...state,
      loginPending: false,
      statisticsByRegData: null
    }
  },

  [POST_DAILYSTATISTICSS_REQUEST]: state => {
    return {
      ...state,
      loginPending: true
    }
  },
  [POST_DAILYSTATISTICSS_SUCCESS]: (state, action) => {
    return {
      ...state,
      dailyStatisticsData: action.payload.result.reportByDayAllPrice
    }
  },
  [POST_DAILYSTATISTICSS_ERROR]: state => {
    return {
      ...state,
      dailyStatisticsData: null
    }
  },
  [GET_DAILYCERTIFICATECOUNT_REQUEST]: state => {
    return {
      ...state
    }
  },
  [GET_DAILYCERTIFICATECOUNT_SUCCESS]: (state, action) => {
    return {
      ...state,
      dailyCertificateData: action.payload.result
    }
  },
  [GET_DAILYCERTIFICATECOUNT_ERROR]: state => {
    return {
      ...state,
      dailyCertificateCount: null
    }
  },
  [CLEAR_DATA]: (state) => {
    return {
      ...state,
      statisticsByRegData: null,
      certificateCount: null,
      statisticsData: null
    }
  }
}

export default (state = initialState, action) => {
  const handler = ACTION_HANDLERS[action.type]
  return handler ? handler(state, action) : state
}
