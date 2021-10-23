/*
 * @Author: yukang
 * @Date: 2021-10-14 13:59:15
 * @FilePath: \realworld\plugins\request.js
 * @Description:
 */

/**
 * 封装axios 请求模块
 */

import axios from "axios"

export const request = axios.create({
  baseURL: "https://conduit.productionready.io",
})

export default ({ store }) => {
  request.interceptors.request.use(
    (config) => {
      const { user } = store.state

      if (user && user.token) {
        config.headers.Authorization = `Token ${user.token}`
      }

      return config
    },
    (error) => {
      return Promise.reject(error) // 如果请求失败 直接走这里
    }
  )
}
