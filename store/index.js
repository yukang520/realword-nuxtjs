/*
 * @Author: yukang
 * @Date: 2021-10-14 14:07:31
 * @FilePath: \realworld\store\index.js
 * @Description:
 */

const cookieparser = process.server ? require("cookieparser") : undefined

export const state = () => {
  return {
    user: null,
  }
}

export const mutations = {
  setUser(state, data) {
    state.user = data
  },
}

export const actions = {
  // 用于传递服务端数据给客户端
  // 每次服务端渲染时 都会自动调用
  nuxtServerInit({ commit }, { req }) {
    let user = null

    if (req.headers.cookie) {
      const cookie = cookieparser.parse(req.headers.cookie)
      try {
        user = JSON.parse(cookie.user)
      } catch (err) {
        console.log(err)
      }
    }

    commit("setUser", user)
  },
}
