//封装axios
import axios from 'axios'
export function request(config){
    const instance = axios.create({
        baseURL:"https://elm.cangdu.org"
    });
    //创建请求  响应拦截器
    instance.interceptors.request.use(config => {
      return config
    });
    instance.interceptors.response.use(res => {
        return res.data;
    })
    return instance(config)
}