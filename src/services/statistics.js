import axios from 'axios'
// import { urlConfig } from '../config'

class StatisticsService {
  constructor(http) {
    this.http = http
  }

  postStatisticsData(args) {
    return new Promise((resolve, reject) => {
      axios.post('http://www.eimzastatistics.az/api/v1/statistic/eventsCount', args, {
        headers: {
          api_key: '434P101A-472B-4B2F-957E-2298BA53R52F' //the token is a variable which holds the token
        }
      })
        .then(response => {
          if (response) {
            resolve(response)
            console.log('response oldu')
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
  postStatisticsByRegData(args) {
    return new Promise((resolve, reject) => {
      axios.post('http://www.eimzastatistics.az/api/v1/statistic/eventsCount', args, {
        headers: {
          api_key: '434P101A-472B-4B2F-957E-2298BA53R52F' //the token is a variable which holds the token
        }
      })
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

  postDailyStatistics(args) {
    return new Promise((resolve, reject) => {
      axios.post('http://www.eimzastatistics.az/api/v1/statistic/eventsCount', args, {
        headers: {
          api_key: '434P101A-472B-4B2F-957E-2298BA53R52F' //the token is a variable which holds the token
        }
      })
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

  getDailyCertificateCount(args) {
    return new Promise((resolve, reject) => {
      axios.post('http://www.eimzastatistics.az/api/v1/statistic/eventsCount', args, {
        headers: {
          api_key: '434P101A-472B-4B2F-957E-2298BA53R52F' //the token is a variable which holds the token
        }
      })
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
export default StatisticsService
