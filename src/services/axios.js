import axios from 'axios'
// estt
export default () => {
  return axios.create({
    headers: {
      'Authorization': 'Bearer ' + localStorage.getItem('token') //eslint-disable-line no-undef
    }
  })
}
