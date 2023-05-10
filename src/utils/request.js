import axios from 'axios'
import store from '@/store'
// import router from '@/router'

export const baseURL = 'http://pcapi-xiaotuxian-front-devtest.itheima.net/'
const instance = axios.create({
  baseURL,
  timeout: 5000
})

// 请求拦截
instance.interceptors.request.use(config => {
  const { profile } = store.state.user
  console.log(profile.token)
  if (profile.token) {
    config.headers.Authorization = `Bearer ${profile.token}`
  }
  return config
}, err => {
  return Promise.reject(err)
})

// // 响应拦截
// instance.interceptors.response.use(res => res.data, err => {
//   if (err.response && err.response.status === 401) {
//     store.commit('user/setUser', {})
//     // 当前路由地址
//     // 组件里头：`/user?a=10` $route.path === /user  $route.fullPath === /user?a=10
//     // js模块中：router.currentRoute.value.fullPath 就是当前路由地址，router.currentRoute 是ref响应式数据
//     const fullPath = encodeURIComponent(router.currentRoute.value.fullPath)
//     router.push('/login?redirectUrl=' + fullPath)
//   }
//   return Promise.reject(err)
// })

export default instance
