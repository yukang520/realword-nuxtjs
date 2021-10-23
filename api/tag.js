/*
 * @Author: yukang
 * @Date: 2021-10-14 16:31:43
 * @FilePath: \realworld\api\tag.js
 * @Description:
 */

import { request } from "@/plugins/request"

// 获取文章标签列表
export const getTags = () => {
  return request({
    method: "GET",
    url: "/api/tags",
  })
}
