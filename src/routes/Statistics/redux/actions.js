import api from '../../../services'
// import { errorMessages } from '../../../data'
export const POST_STATISTICS_REQUEST = 'POST_STATISTICS_REQUEST'
export const POST_STATISTICS_SUCCESS = 'POST_STATISTICS_SUCCESS'
export const POST_STATISTICS_ERROR = 'POST_STATISTICS_ERROR'
export const POST_STATISTICSBYREG_REQUEST = 'POST_STATISTICSBYREG_REQUEST'
export const POST_STATISTICSBYREG_SUCCESS = 'POST_STATISTICSBYREG_SUCCESS'
export const POST_STATISTICSBYREG_ERROR = 'POST_STATISTICSBYREG_ERROR'
export const POST_DAILYSTATISTICSS_REQUEST = 'POST_DAILYSTATISTICSS_REQUEST'
export const POST_DAILYSTATISTICSS_SUCCESS = 'POST_DAILYSTATISTICSS_SUCCESS'
export const POST_DAILYSTATISTICSS_ERROR = 'POST_DAILYSTATISTICSS_ERROR'
export const GET_DAILYCERTIFICATECOUNT_REQUEST = 'GET_DAILYCERTIFICATECOUNT_REQUEST'
export const GET_DAILYCERTIFICATECOUNT_SUCCESS = 'GET_DAILYCERTIFICATECOUNT_SUCCESS'
export const GET_DAILYCERTIFICATECOUNT_ERROR = 'GET_DAILYCERTIFICATECOUNT_ERROR'

export const CLEAR_DATA = 'CLEAR_DATA'

export const postStatisticsData = (args) => {
  console.log('args action', args)
  return dispatch => {
    return new Promise(() => {
      dispatch({
        type: POST_STATISTICS_REQUEST
      })
      api.StatisticsService().postStatisticsData(args).then(response => {
        dispatch({
          type: POST_STATISTICS_SUCCESS,
          payload: {
            result: response.data.output,
            notify: true,
            type: 'success',
            message: 'Sorğu uğurla başa çatdı'
          }
        })
      })
        .catch(error => {
          console.log('erroooooooooooooooooooo', error)
          dispatch({
            type: POST_STATISTICS_ERROR,
            error: {
              notify: true,
              error,
              result: error,
              type: 'error',
              message: 'Xəta baş verdi' + error
            }
          })
        })
    })
  }
}

export const postStatisticsByRegData = (args) => {
  return dispatch => {
    return new Promise(() => {
      dispatch({
        type: POST_STATISTICSBYREG_REQUEST
      })
      api.StatisticsService().postStatisticsByRegData(args).then(response => {
        dispatch({
          type: POST_STATISTICSBYREG_SUCCESS,
          payload: {
            result: response.data.output,
            notify: false,
            type: 'success',
            message: 'Sorğu uğurla başa çatdı'
          }
        })
      })
        .catch(error => {
          dispatch({
            type: POST_STATISTICSBYREG_ERROR,
            error: {
              notify: true,
              error,
              result: error,
              type: 'error',
              message: 'you have error'
            }
          })
        })
    })
  }
}

export const postDailyStatistics = (args) => {
  return dispatch => {
    return new Promise(() => {
      dispatch({
        type: POST_DAILYSTATISTICSS_REQUEST
      })
      api.StatisticsService().postDailyStatistics(args).then(response => {
        dispatch({
          type: POST_DAILYSTATISTICSS_SUCCESS,
          payload: {
            result: response.data.output,
            notify: false,
            type: 'success',
            message: 'Sorğu uğurla başa çatdı'
          }
        })
      })
        .catch(error => {
          dispatch({
            type: POST_DAILYSTATISTICSS_ERROR,
            error: {
              notify: true,
              error,
              result: error,
              type: 'error',
              message: 'error'
            }
          })
        })
    })
  }
}

export const getDailyCertificateCount = (args) => {
  return dispatch => {
    return new Promise(() => {
      dispatch({
        type: GET_DAILYCERTIFICATECOUNT_REQUEST
      })
      api.StatisticsService().getDailyCertificateCount(args).then(response => {
        console.log('i am in action', response)
        dispatch({
          type: GET_DAILYCERTIFICATECOUNT_SUCCESS,
          payload: {
            result: response.data.output,
            notify: false,
            type: 'success',
            message: 'Sorğu uğurla başa çatdı'
          }
        })
      })
        .catch(error => {
          dispatch({
            type: GET_DAILYCERTIFICATECOUNT_ERROR,
            error: {
              notify: true,
              error,
              result: error,
              type: 'error',
              message: 'error'
            }
          })
        })
    })
  }
}

export const clearData = () => {
  return dispatch => {
    return new Promise(() => {
      dispatch({
        type: CLEAR_DATA
      })
    })
  }
}

