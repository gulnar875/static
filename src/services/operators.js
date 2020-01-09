//import axios from 'axios'
import { urlConfig } from '../config'

class OperatorsService {
  constructor(http) {
    this.http = http
  }

  postOperatorsData(args) {
    return new Promise((resolve, reject) => {
      this.http()
        .post(`${urlConfig.baseUrl('api/v1/register/add')}`, args)
        .then(response => {
          if (response) {
            resolve(response)
          }
          else {
            reject(response)
          }
        })
        .catch(error => {
          reject(error)
        })
    })
  }

  getOperatorsData(args) {
    return new Promise((resolve, reject) => {
      this.http()
        .get(`${urlConfig.baseUrl('api/v1/register/getremoteoperator')}`, args)
        .then(response => {
          if (response) {
            resolve(response)
          }
          else {
            reject(response)
          }
        })
        .catch(error => {
          reject(error)
        })
    })
  }
  getOperatorsTableData(args) {
    return new Promise((resolve, reject) => {
      this.http()
        .post(`${urlConfig.baseUrl('api/v1/register/get')}`, args)
        .then(response => {
          if (response) {
            resolve(response)
          }
          else {
            reject(response)
          }
        })
        .catch(error => {
          reject(error)
        })
    })
  }
}
export default OperatorsService
