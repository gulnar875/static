import axios from 'axios'
import querystring from 'querystring'

export const LOGIN_REQUEST = 'LOGIN_REQUEST'
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS'
export const LOGIN_ERROR = 'LOGIN_ERROR'
export const LOGOUT = 'LOGOUT'
import { urlConfig } from '../../../config'

export const login = (history, { username, password }) => {
  return dispatch => {
    axios.post(urlConfig.loginUrl('token'), querystring.stringify({
      username,
      password,
      grant_type: 'password'
    }))
      .then(response => {
        localStorage.setItem('token', response.data.access_token) //eslint-disable-line no-undef
        dispatch({
          type: LOGIN_SUCCESS
        })
        history.push('/')
      })
      .catch((error) => {
        console.error(error)
        dispatch({
          type: LOGIN_ERROR,
          error: {
            error,
            notify: true,
            type: 'error',
            message: 'Operator adı və ya şifrə səhvdir'
          }
        })
      })
  }
}

export const logOut = (history) => {
  return dispatch => {
    localStorage.clear() //eslint-disable-line no-undef
    dispatch({
      type: LOGOUT
    })
    history.push('/login')
  }
}
