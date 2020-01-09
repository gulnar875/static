export default {
  baseUrl: (url) => {
    return `http://www.eimzastatistics.az/api/${url}`
  },
  loginUrl: (url) => {
    return `https://otp.e-imza.az/AuthSpecial/OneTimeSpecial/${url}`
  },
  dailyReportUrl: (url) => {
    return `https://otp.e-imza.az/OneTimeSpecial/${url}`
  },
  dailyCertCount: url => {
    return `https://otp.e-imza.az/OneTimeSpecial/${url}`
  }
}
