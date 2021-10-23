import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _c0bc407c = () => interopDefault(import('..\\pages\\layout' /* webpackChunkName: "" */))
const _01cfc112 = () => interopDefault(import('..\\pages\\home' /* webpackChunkName: "" */))
const _37b7d05e = () => interopDefault(import('..\\pages\\login' /* webpackChunkName: "" */))
const _d859f3f6 = () => interopDefault(import('..\\pages\\editor' /* webpackChunkName: "" */))
const _3dba4a8a = () => interopDefault(import('..\\pages\\settings' /* webpackChunkName: "" */))
const _44a43811 = () => interopDefault(import('..\\pages\\profile' /* webpackChunkName: "" */))
const _2b6e7b5e = () => interopDefault(import('..\\pages\\article' /* webpackChunkName: "" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/",
    component: _c0bc407c,
    children: [{
      path: "",
      component: _01cfc112,
      name: "home"
    }, {
      path: "/login",
      component: _37b7d05e,
      name: "login"
    }, {
      path: "/register",
      component: _37b7d05e,
      name: "register"
    }, {
      path: "/editor",
      component: _d859f3f6,
      name: "editor"
    }, {
      path: "/settings",
      component: _3dba4a8a,
      name: "settings"
    }, {
      path: "/profile/:username",
      component: _44a43811,
      name: "profile"
    }, {
      path: "/article/:slug",
      component: _2b6e7b5e,
      name: "article"
    }]
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
