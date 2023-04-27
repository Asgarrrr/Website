import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _181dacc1 = () => interopDefault(import('..\\src\\pages\\blog\\index.vue' /* webpackChunkName: "pages/blog/index" */))
const _0e04e1a4 = () => interopDefault(import('..\\src\\pages\\donate.vue' /* webpackChunkName: "pages/donate" */))
const _90e56f2e = () => interopDefault(import('..\\src\\pages\\projects\\index.vue' /* webpackChunkName: "pages/projects/index" */))
const _b5c8394e = () => interopDefault(import('..\\src\\pages\\me\\contact.vue' /* webpackChunkName: "pages/me/contact" */))
const _dc65e38c = () => interopDefault(import('..\\src\\pages\\me\\repos.vue' /* webpackChunkName: "pages/me/repos" */))
const _852bfb12 = () => interopDefault(import('..\\src\\pages\\me\\songs.vue' /* webpackChunkName: "pages/me/songs" */))
const _09bfb404 = () => interopDefault(import('..\\src\\pages\\projects\\premid\\index.vue' /* webpackChunkName: "pages/projects/premid/index" */))
const _07c59100 = () => interopDefault(import('..\\src\\pages\\projects\\premid\\custom-status.vue' /* webpackChunkName: "pages/projects/premid/custom-status" */))
const _787bcf67 = () => interopDefault(import('..\\src\\pages\\projects\\premid\\mdcreator.vue' /* webpackChunkName: "pages/projects/premid/mdcreator" */))
const _16670b79 = () => interopDefault(import('..\\src\\pages\\blog\\_slug.vue' /* webpackChunkName: "pages/blog/_slug" */))
const _42e9203a = () => interopDefault(import('..\\src\\pages\\index.vue' /* webpackChunkName: "pages/index" */))

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
    component: _181dacc1,
    name: "blog"
  }, {
    path: "/donate",
    component: _0e04e1a4,
    name: "donate"
  }, {
    path: "/projects",
    component: _90e56f2e,
    name: "projects"
  }, {
    path: "/me/contact",
    component: _b5c8394e,
    name: "me-contact"
  }, {
    path: "/me/repos",
    component: _dc65e38c,
    name: "me-repos"
  }, {
    path: "/me/songs",
    component: _852bfb12,
    name: "me-songs"
  }, {
    path: "/projects/premid",
    component: _09bfb404,
    name: "projects-premid"
  }, {
    path: "/projects/premid/custom-status",
    component: _07c59100,
    name: "projects-premid-custom-status"
  }, {
    path: "/projects/premid/mdcreator",
    component: _787bcf67,
    name: "projects-premid-mdcreator"
  }, {
    path: "/blog/:slug",
    component: _16670b79,
    name: "blog-slug"
  }, {
    path: "/",
    component: _42e9203a,
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
