import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _271547c6 = () => interopDefault(import('../src/pages/blog/index.vue' /* webpackChunkName: "pages/blog/index" */))
const _0455f532 = () => interopDefault(import('../src/pages/donate.vue' /* webpackChunkName: "pages/donate" */))
const _513e26f5 = () => interopDefault(import('../src/pages/projects/index.vue' /* webpackChunkName: "pages/projects/index" */))
const _bfdf16be = () => interopDefault(import('../src/pages/me/contact.vue' /* webpackChunkName: "pages/me/contact" */))
const _ac755cfc = () => interopDefault(import('../src/pages/me/repos.vue' /* webpackChunkName: "pages/me/repos" */))
const _7a6b323e = () => interopDefault(import('../src/pages/projects/abyss/index.vue' /* webpackChunkName: "pages/projects/abyss/index" */))
const _2b7bd36c = () => interopDefault(import('../src/pages/projects/luna/index.vue' /* webpackChunkName: "pages/projects/luna/index" */))
const _a9d51d76 = () => interopDefault(import('../src/pages/projects/riftmaker/index.vue' /* webpackChunkName: "pages/projects/riftmaker/index" */))
const _0feb8cc0 = () => interopDefault(import('../src/pages/projects/rogue/index.vue' /* webpackChunkName: "pages/projects/rogue/index" */))
const _103fce8a = () => interopDefault(import('../src/pages/index.vue' /* webpackChunkName: "pages/index" */))
const _2a828a56 = () => interopDefault(import('../src/pages/blog/_slug.vue' /* webpackChunkName: "pages/blog/_slug" */))

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
    component: _271547c6,
    name: "blog"
  }, {
    path: "/donate",
    component: _0455f532,
    name: "donate"
  }, {
    path: "/projects",
    component: _513e26f5,
    name: "projects"
  }, {
    path: "/me/contact",
    component: _bfdf16be,
    name: "me-contact"
  }, {
    path: "/me/repos",
    component: _ac755cfc,
    name: "me-repos"
  }, {
    path: "/projects/abyss",
    component: _7a6b323e,
    name: "projects-abyss"
  }, {
    path: "/projects/luna",
    component: _2b7bd36c,
    name: "projects-luna"
  }, {
    path: "/projects/riftmaker",
    component: _a9d51d76,
    name: "projects-riftmaker"
  }, {
    path: "/projects/rogue",
    component: _0feb8cc0,
    name: "projects-rogue"
  }, {
    path: "/",
    component: _103fce8a,
    name: "index"
  }, {
    path: "/blog/:slug",
    component: _2a828a56,
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
