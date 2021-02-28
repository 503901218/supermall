import axios from 'axios'
// 可能不止导出一个，所以不用default
export function request(config){
    // 创建axios实例
    const instance=axios.create({
        // baseURL:'http://123.207.32.32:8000',
        timeout:5000
    })
    // 拦截器：
    // 请求拦截的作用
    // instance.interceptors.request.use(config=>{
    //     return config
    // },err=>{
    // })

    // //2.2 响应拦截
    // instance.interceptors.response.use(res=>{
    //     return res.data
    // },err=>{
    //     console.log(err)
    // })
    //3、 发送真正的网络请求
    return instance(config)
}