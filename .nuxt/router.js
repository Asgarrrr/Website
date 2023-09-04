import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _1b055006 = () => interopDefault(import('../src/pages/blog/index.vue' /* webpackChunkName: "pages/blog/index" */))
const _17f5f147 = () => interopDefault(import('../src/pages/donate.vue' /* webpackChunkName: "pages/donate" */))
const _4db59a56 = () => interopDefault(import('../src/pages/projects/index.vue' /* webpackChunkName: "pages/projects/index" */))
const _b3cf1efe = () => interopDefault(import('../src/pages/me/contact.vue' /* webpackChunkName: "pages/me/contact" */))
const _814a753c = () => interopDefault(import('../src/pages/me/repos.vue' /* webpackChunkName: "pages/me/repos" */))
const _6711d61e = () => interopDefault(import('../src/pages/projects/abyss/index.vue' /* webpackChunkName: "pages/projects/abyss/index" */))
const _80fd98e8 = () => interopDefault(import('../src/pages/projects/luna/index.vue' /* webpackChunkName: "pages/projects/luna/index" */))
const _4bf1b5b6 = () => interopDefault(import('../src/pages/projects/riftmaker/index.vue' /* webpackChunkName: "pages/projects/riftmaker/index" */))
const _06db9ec0 = () => interopDefault(import('../src/pages/projects/rogue/index.vue' /* webpackChunkName: "pages/projects/rogue/index" */))
const _1e729296 = () => interopDefault(import('../src/pages/blog/_slug.vue' /* webpackChunkName: "pages/blog/_slug" */))
const _3a61e6aa = () => interopDefault(import('../src/pages/index.vue' /* webpackChunkName: "pages/index" */))

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
    component: _1b055006,
    name: "blog"
  }, {
    path: "/donate",
    component: _17f5f147,
    name: "donate"
  }, {
    path: "/projects",
    component: _4db59a56,
    name: "projects"
  }, {
    path: "/me/contact",
    component: _b3cf1efe,
    name: "me-contact"
  }, {
    path: "/me/repos",
    component: _814a753c,
    name: "me-repos"
  }, {
    path: "/projects/abyss",
    component: _6711d61e,
    name: "projects-abyss"
  }, {
    path: "/projects/luna",
    component: _80fd98e8,
    name: "projects-luna"
  }, {
    path: "/projects/riftmaker",
    component: _4bf1b5b6,
    name: "projects-riftmaker"
  }, {
    path: "/projects/rogue",
    component: _06db9ec0,
    name: "projects-rogue"
  }, {
    path: "/blog/:slug",
    component: _1e729296,
    name: "blog-slug"
  }, {
    path: "/",
    component: _3a61e6aa,
    name: "index"
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
