import axios from 'axios'
// import { message } from 'antd';
// create an axios instance
const service = axios.create({
  baseURL: 'dev', // api 的 base_url
  headers: { 'content-type': 'text/plain;charset=UTF-8' },
  timeout: 5000, // request timeout
  withCredentials: true,
})

// request interceptor
service.interceptors.request.use(
  (config: any) => {
    // Do something before request is sent
    // config.headers['content-type'] = 'application/json; charset=utf-8'
    return config
  },
  (error: any) => {
    // Do something with request error
    console.log(error) // for debug
    Promise.reject(error)
  }
)

// response interceptor
service.interceptors.response.use(
  // (  response: any) => response,
  /**
   * 下面的注释为通过在response里，自定义code来标示请求状态
   * 当code返回如下情况则说明权限有问题，登出并返回到登录页
   * 如想通过 xmlhttprequest 来状态码标识 逻辑可写在下面error中
   * 以下代码均为样例，请结合自生需求加以修改，若不需要，则可删除
   */
  (response: any) => {
    const res = response.data
    console.log(res);
    // if(res.status.code === 10){
    //   message.info('请登录');
    //   // throw new Error('请登录')
    // }
    // if (res.status.code !== 0) {
    //   Message({
    //     message: res.message,
    //     type: 'error',
    //     duration: 1 * 1000
    //   })
    //   // 50008:非法的token; 50012:其他客户端登录了;  50014:Token 过期了;
    //   if (res.code === 50008 || res.code === 50012 || res.code === 50014) {
    //     // 请自行在引入 MessageBox
    //     // import { Message, MessageBox } from 'element-ui'
    //     MessageBox.confirm('你已被登出，可以取消继续留在该页面，或者重新登录', '确定登出', {
    //       confirmButtonText: '重新登录',
    //       cancelButtonText: '取消',
    //       type: 'warning'
    //     }).then(() => {
    //       store.dispatch('FedLogOut').then(() => {
    //         location.reload() // 为了重新实例化vue-router对象 避免bug
    //       })
    //     })
    //   }
    //   return Promise.reject('error')
    // } else {
    // }
    return response.data
  },
  (error: any) => {
    console.log('err' + error) // for debug
    return Promise.reject(error)
  }
)

export default service
