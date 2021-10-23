/*
 * @Author: yukang
 * @Date: 2021-10-14 17:10:43
 * @FilePath: \realworld\middleware\authenticated.js
 * @Description:
 */
export default function({ store, redirect }) {
  if (!store.state.user) {
    return redirect("login")
  }
}
