/*
 * @Author: yukang
 * @Date: 2021-10-13 18:35:54
 * @FilePath: \realworld\nuxt.config.js
 * @Description:
 */
module.exports = {
  router: {
    linkActiveClass: "active",

    extendRoutes(routes, resolve) {
      routes.splice(0)

      routes.push(
        ...[
          {
            path: "/",
            component: resolve(__dirname, "pages/layout"),
            children: [
              {
                path: "",
                name: "home",
                component: resolve(__dirname, "pages/home"),
              },
              {
                path: "/login",
                name: "login",
                component: resolve(__dirname, "pages/login"),
              },
              {
                path: "/register",
                name: "register",
                component: resolve(__dirname, "pages/login"),
              },
              {
                path: "/editor",
                name: "editor",
                component: resolve(__dirname, "pages/editor"),
              },
              {
                path: "/settings",
                name: "settings",
                component: resolve(__dirname, "pages/settings"),
              },
              {
                path: "/profile/:username",
                name: "profile",
                component: resolve(__dirname, "pages/profile"),
              },
              {
                path: "/article/:slug",
                name: "article",
                component: resolve(__dirname, "pages/article"),
              },
            ],
          },
        ]
      )
    },
  },

  server: {
    host: "0.0.0.0",
    port: 3000,
  },
  //   // 注册插件
  plugins: ["~/plugins/request.js"],
}
