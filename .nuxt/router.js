import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _cce8b9fa = () => interopDefault(import('..\\src\\pages\\blog\\index.vue' /* webpackChunkName: "pages/blog/index" */))
const _1edb37ac = () => interopDefault(import('..\\src\\pages\\donate.vue' /* webpackChunkName: "pages/donate" */))
const _48b24dab = () => interopDefault(import('..\\src\\pages\\projects\\index.vue' /* webpackChunkName: "pages/projects/index" */))
const _2689d99b = () => interopDefault(import('..\\src\\pages\\me\\contact.vue' /* webpackChunkName: "pages/me/contact" */))
const _0f67acfc = () => interopDefault(import('..\\src\\pages\\me\\repos.vue' /* webpackChunkName: "pages/me/repos" */))
const _345420b1 = () => interopDefault(import('..\\src\\pages\\projects\\abyss\\index.vue' /* webpackChunkName: "pages/projects/abyss/index" */))
const _397a6aef = () => interopDefault(import('..\\src\\pages\\projects\\luna\\index.vue' /* webpackChunkName: "pages/projects/luna/index" */))
const _79eb24ec = () => interopDefault(import('..\\src\\pages\\projects\\riftmaker\\index.vue' /* webpackChunkName: "pages/projects/riftmaker/index" */))
const _4edf166f = () => interopDefault(import('..\\src\\pages\\projects\\rogue\\index.vue' /* webpackChunkName: "pages/projects/rogue/index" */))
const _a39080b6 = () => interopDefault(import('..\\src\\pages\\index.vue' /* webpackChunkName: "pages/index" */))
const _d055fc8a = () => interopDefault(import('..\\src\\pages\\blog\\_slug.vue' /* webpackChunkName: "pages/blog/_slug" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/blog",
    component: _cce8b9fa,
    name: "blog"
  }, {
    path: "/donate",
    component: _1edb37ac,
    name: "donate"
  }, {
    path: "/projects",
    component: _48b24dab,
    name: "projects"
  }, {
    path: "/me/contact",
    component: _2689d99b,
    name: "me-contact"
  }, {
    path: "/me/repos",
    component: _0f67acfc,
    name: "me-repos"
  }, {
    path: "/projects/abyss",
    component: _345420b1,
    name: "projects-abyss"
  }, {
    path: "/projects/luna",
    component: _397a6aef,
    name: "projects-luna"
  }, {
    path: "/projects/riftmaker",
    component: _79eb24ec,
    name: "projects-riftmaker"
  }, {
    path: "/projects/rogue",
    component: _4edf166f,
    name: "projects-rogue"
  }, {
    path: "/",
    component: _a39080b6,
    name: "index"
  }, {
    path: "/blog/:slug",
    component: _d055fc8a,
    name: "blog-slug"
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
