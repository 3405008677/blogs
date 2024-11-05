import { notification } from 'antd'
import axios from 'axios'

const request = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
  timeout: 50000,
  headers: {},
})

// 请求拦截器
request.interceptors.request.use(
  (config: any) => {
    // 设置请求头
    config!.headers['ContentType'] = `application/json;charset=UTF-8`
    // request before judge
    // const userToken: string = getToken()
    // if (userToken) config!.headers['Authorization'] = `Bearer ${userToken}`
    return config
  },
  (err) => {
    return Promise.reject(err)
  },
)

// 响应拦截器
request.interceptors.response.use(
  (response) => {
    const { data } = response
    if (data.code === 200 || data.code === 0) return data
    notification.error({
      message: '错误!',
      description: data.msg,
    })
  },
  (err) => {
    notification.error({
      message: '错误!',
      description: '服务器发生错误',
    })
    return Promise.reject(err)
  },
)

export default request
