import { urlConfig } from '../config'

class Common {
  constructor(http) {
    this.http = http
  }

  getCompanyList() {
    return new Promise((resolve, reject) => {
      this.http()
        .post(`${urlConfig.baseUrl('/api/v1/statistic/eventsCount')}`)
        .then(response => {
          if (response && response.data) {
            resolve(response.data)
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
  postCompanyFilialData(args) {
    return new Promise((resolve, reject) => {
      this.http()
        .post(`${urlConfig.baseUrl('api/v1/register/getremotebranchesforadmin')}`, args)
        .then(response => {
          if (response && response.data) {
            resolve(response.data)
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
export default Common
