/*
 * @Author: yukang
 * @Date: 2021-10-14 13:54:19
 * @FilePath: \realworld\api\user.js
 * @Description:
 */
import { request } from "@/plugins/request"

// 用户登录
export const login = (data) => {
  return request({
    method: "POST",
    url: "/api/users/login",
    data,
  })
}

// 用户注册
export const register = (data) => {
  return request({
    method: "POST",
    url: "/api/users",
    data,
  })
}
