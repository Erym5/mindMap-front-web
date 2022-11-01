import axios from 'axios'
import {getToken,removeToken,removeNickName, setToken} from '../utils/auth'
import { Message } from 'element-ui'



axios.defaults.baseURL = "http://localhost:4000"
axios.defaults.timeout = 10000
axios.defaults.withCredentials = false
axios.defaults.headers['X-Requested-With'] = 'XMLHttpRequest'
axios.defaults.headers.post['Content-Type'] = 'application/json'
axios.defaults.headers['Access-Control-Allow-Origin'] = '*'

// 响应拦截

axios.interceptors.request.use(config => {
  config.headers['Authorization'] = getToken()
  return config
}, error => {
  console.log(error)
  Promise.reject(error)
})

axios.interceptors.response.use(res => {
  if (typeof res.data !== 'object') {
    Message.error('服务端异常！')
    return Promise.reject(res)
  }
  if (res.data.code != "00000") {
    if (res.data.message) {
      Message.error(res.data.message)
    }

    return Promise.reject(res.data)
  }

  return Promise.resolve(res.data);
}, error => {
  Message.error('网络异常！')
  console.log(error)
  Promise.reject(error)
})

export default axios
