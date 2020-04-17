import Vue from 'Vue'
import axios from 'axios'
import { getToken } from './common'

const service = axios.create({
    baseURL: '/api',
    timeout: 5000,
    headers: {
        'Content-Type': 'application/json',
        'X-Requested-With': 'XMLHttpRequest',
    }
})

service.interceptors.request.use(config => {
    //config.headers['X-Token'] = getToken() // 让每个请求携带token-- ['X-Token']为自定义key 请根据实际情况自行修改
    return config;
}, error => {
    console.log(error);
    Promise.reject(error);
})

service.interceptors.response.use(
    response => {
        return response;
    },
    error => {
        console.log('err' + error);
        Promise.reject(error);
    }
)
export default service