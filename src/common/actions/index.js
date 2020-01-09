import { http } from '../../config'
import api from '../../services'
import { errorMessages } from '../../data'
export const WELCOME = 'WELCOME'
export const OPERATOR = 'OPERATOR'
export const GET_USER_REQUEST = 'GET_USER_REQUEST'
export const GET_USER_SUCCESS = 'GET_USER_SUCCESS'
export const GET_USER_ERROR = 'GET_USER_ERROR'
export const GET_COMPANY_LIST_REQUEST = 'GET_COMPANY_LIST_REQUEST'
export const GET_COMPANY_LIST_SUCCESS = 'GET_COMPANY_LIST_SUCCESS'
export const GET_COMPANY_LIST_ERROR = 'GET_COMPANY_LIST_ERROR'
export const POST_COMPANY_FILIAL_REQUEST = 'POST_COMPANY_FILIAL_REQUEST'
export const POST_COMPANY_FILIAL_SUCCESS = 'POST_COMPANY_FILIAL_SUCCESS'
export const POST_COMPANY_FILIAL_ERROR = 'POST_COMPANY_FILIAL_ERROR'

const getErrorMessage = errorType => {
  const result = errorMessages.find(item => {
    return item.ErrorCode === errorType
  })
  return result ? result.ErrorMessage : ' '
}

export const welcome = () => {
  return dispatch => {
    dispatch({
      type: WELCOME
    })
  }
}

export const getUserInfo = () => {
  return dispatch => {
    dispatch({
      type: GET_USER_REQUEST
    })
    http().post('https://otptest.e-imza.az/OneTimeServices/api/v1/register/getremoteoperator')
      .then(operator => {
        dispatch({
          type: GET_USER_SUCCESS,
          payload: operator.data.output.remoteOperator
        })
      })
      .catch(error => {
        console.error(error)
        dispatch({
          type: GET_USER_ERROR
        })
      })
  }
}

export const getCompanyList = () => {
  return dispatch => {
    return new Promise(() => {
      dispatch({
        type: GET_COMPANY_LIST_REQUEST
      })
      api.CommonService().getCompanyList()
        .then(response => {
          dispatch({
            type: GET_COMPANY_LIST_SUCCESS,
            payload: {
              notify: false,
              type: 'success',
              message: 'fliallar getirildi',
              result: response.output.organizations
            }
          })
        })
        .catch(error => {
          dispatch({
            type: GET_COMPANY_LIST_ERROR,
            error: {
              error,
              notify: true,
              type: 'error',
              message:
              'Xəta baş verdi'
            }
          })
        })
    })
  }
}

export const postCompanyFilialData = (args) => {
  return dispatch => {
    return new Promise(() => {
      dispatch({
        type: POST_COMPANY_FILIAL_REQUEST
      })
      api.CommonService().postCompanyFilialData({ bankId: `${args}` }).then(response => {
        dispatch({
          type: POST_COMPANY_FILIAL_SUCCESS,
          payload: {
            result: response.output.remoteBranches,
            notify: false,
            type: 'success'
          }
        })
      })
        .catch(error => {
          dispatch({
            type: POST_COMPANY_FILIAL_ERROR,
            error: {
              error,
              notify: (error.result.response.data.errorList[0].errorCode === 10 ? true : false),
              result: error,
              type1: (error.result.response.data.errorList[0].errorCode !== 10 ? 'adduser_error' : null),
              type: (error.result.response.data.errorList[0].errorCode === 10 ? 'error' : null),
              message: getErrorMessage(error.result.response.data.errorList[0].errorCode)
            }
          })
        })
    })
  }
}
