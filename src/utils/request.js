import axios from 'axios'

// 设置自定义请求方式
const service = axios.create({
    baseURL: 'v2',
    timeout: 10000
})

// 设置请求拦截器
service.interceptors.request.use(config => {
    return config
}, error => {
    Promise.reject(error)
})

// 设置响应拦截器
service.interceptors.response.use(response => {
    if (response.status === 200) {
        return response
    }
}, error => {
    return Promise.reject(error)
})

export default service