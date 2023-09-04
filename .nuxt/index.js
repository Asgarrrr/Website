import Vue from 'vue'

import Meta from 'vue-meta'
import ClientOnly from 'vue-client-only'
import NoSsr from 'vue-no-ssr'
import { createRouter } from './router.js'
import NuxtChild from './components/nuxt-child.js'
import NuxtError from '../src/layouts/error.vue'
import Nuxt from './components/nuxt.js'
import App from './App.js'
import { setContext, getLocation, getRouteData, normalizeError } from './utils'

/* Plugins */

import nuxt_plugin_plugin_990634da from 'nuxt_plugin_plugin_990634da' // Source: ./components/plugin.js (mode: 'all')
import nuxt_plugin_pluginclient_461baf8f from 'nuxt_plugin_pluginclient_461baf8f' // Source: ./content/plugin.client.js (mode: 'client')
import nuxt_plugin_pluginserver_a855bdd2 from 'nuxt_plugin_pluginserver_a855bdd2' // Source: ./content/plugin.server.js (mode: 'server')
import nuxt_plugin_workbox_5f9737f6 from 'nuxt_plugin_workbox_5f9737f6' // Source: ./workbox.js (mode: 'client')
import nuxt_plugin_metaplugin_838053d0 from 'nuxt_plugin_metaplugin_838053d0' // Source: ./pwa/meta.plugin.js (mode: 'all')
import nuxt_plugin_iconplugin_7a3108e8 from 'nuxt_plugin_iconplugin_7a3108e8' // Source: ./pwa/icon.plugin.js (mode: 'all')
import nuxt_plugin_axios_6d96d5ae from 'nuxt_plugin_axios_6d96d5ae' // Source: ./axios.js (mode: 'all')
import nuxt_plugin_webfontloader_6e06a229 from 'nuxt_plugin_webfontloader_6e06a229' // Source: ./webfontloader.js (mode: 'client')
import nuxt_plugin_googleanalytics_22c71f5d from 'nuxt_plugin_googleanalytics_22c71f5d' // Source: ./google-analytics.js (mode: 'client')
import nuxt_plugin_pluginserver_eb2d531a from 'nuxt_plugin_pluginserver_eb2d531a' // Source: ./color-mode/plugin.server.js (mode: 'server')
import nuxt_plugin_pluginclient_24afe4eb from 'nuxt_plugin_pluginclient_24afe4eb' // Source: ./color-mode/plugin.client.js (mode: 'client')
import nuxt_plugin_image_9788dbb8 from 'nuxt_plugin_image_9788dbb8' // Source: ./image.js (mode: 'all')
import nuxt_plugin_moment_6c09a18f from 'nuxt_plugin_moment_6c09a18f' // Source: ./moment.js (mode: 'all')
import nuxt_plugin_Util_927bffd4 from 'nuxt_plugin_Util_927bffd4' // Source: ../src/plugins/Util (mode: 'all')
import nuxt_plugin_Types_21724ae5 from 'nuxt_plugin_Types_21724ae5' // Source: ../src/plugins/Types (mode: 'all')
import nuxt_plugin_Disqus_1eaccad6 from 'nuxt_plugin_Disqus_1eaccad6' // Source: ../src/plugins/Disqus (mode: 'all')
import nuxt_plugin_CmdK_928c9336 from 'nuxt_plugin_CmdK_928c9336' // Source: ../src/plugins/CmdK (mode: 'client')
import nuxt_plugin_Lanyard_845ca082 from 'nuxt_plugin_Lanyard_845ca082' // Source: ../src/plugins/Lanyard (mode: 'client')
import nuxt_plugin_Tippy_216b0650 from 'nuxt_plugin_Tippy_216b0650' // Source: ../src/plugins/Tippy (mode: 'client')

// Component: <ClientOnly>
Vue.component(ClientOnly.name, ClientOnly)

// TODO: Remove in Nuxt 3: <NoSsr>
Vue.component(NoSsr.name, {
  ...NoSsr,
  render (h, ctx) {
    if (process.client && !NoSsr._warned) {
      NoSsr._warned = true

      console.warn('<no-ssr> has been deprecated and will be removed in Nuxt 3, please use <client-only> instead')
    }
    return NoSsr.render(h, ctx)
  }
})

// Component: <NuxtChild>
Vue.component(NuxtChild.name, NuxtChild)
Vue.component('NChild', NuxtChild)

// Component NuxtLink is imported in server.js or client.js

// Component: <Nuxt>
Vue.component(Nuxt.name, Nuxt)

Object.defineProperty(Vue.prototype, '$nuxt', {
  get() {
    const globalNuxt = this.$root ? this.$root.$options.$nuxt : null
    if (process.client && !globalNuxt && typeof window !== 'undefined') {
      return window.$nuxt
    }
    return globalNuxt
  },
  configurable: true
})

Vue.use(Meta, {"keyName":"head","attribute":"data-n-head","ssrAttribute":"data-n-head-ssr","tagIDKeyName":"hid"})

const defaultTransition = {"name":"page","mode":"out-in","appear":false,"appearClass":"appear","appearActiveClass":"appear-active","appearToClass":"appear-to"}

async function createApp(ssrContext, config = {}) {
  const store = null
  const router = await createRouter(ssrContext, config, { store })

  // Create Root instance

  // here we inject the router and store to all child components,
  // making them available everywhere as `this.$router` and `this.$store`.
  const app = {
    head: {"title":"Jérémy Caruelle","meta":[{"charset":"utf-8"},{"name":"viewport","content":"width=device-width, initial-scale=1","property":"viewport"},{"hid":"description","name":"description","content":"A French developer, passionate about gaming and programming, who is eager to enhance their JavaScript skills.","property":"description"},{"hid":"twitter:card","name":"twitter:card","content":"summary","property":"twitter:card"},{"hid":"twitter:site","name":"twitter:site","content":"@asgarrrr","property":"twitter:site"},{"hid":"twitter:creator","name":"twitter:creator","content":"@asgarrrr","property":"twitter:creator"},{"hid":"twitter:title","name":"twitter:title","content":"Jérémy Caruelle","property":"twitter:title"},{"hid":"twitter:description","name":"twitter:description","content":"A French developer, passionate about gaming and programming, who is eager to enhance their JavaScript skills.","property":"twitter:description"},{"hid":"twitter:image","name":"twitter:image","content":"\u002Ficon.png","property":"twitter:image"},{"hid":"og:type","name":"og:type","content":"website","property":"og:type"},{"hid":"og:site_name","name":"og:site_name","content":"Jérémy Caruelle","property":"og:site_name"},{"hid":"og:description","name":"og:description","content":"A French developer, passionate about gaming and programming, who is eager to enhance their JavaScript skills.","property":"og:description"},{"hid":"og:image","name":"og:image","content":"\u002Ficon.png","property":"og:image"},{"hid":"theme-color","name":"theme-color","content":"#171717","property":"theme-color"}],"link":[{"rel":"icon","type":"image\u002Fx-icon","href":"\u002Fassets\u002Ficons\u002Ficon.ico"},{"rel":"search","type":"application\u002Fopensearchdescription+xml","title":"Asgarrrr's Blog","href":"\u002Fopensearch.xml"}],"style":[],"script":[]},

    router,
    nuxt: {
      defaultTransition,
      transitions: [defaultTransition],
      setTransitions (transitions) {
        if (!Array.isArray(transitions)) {
          transitions = [transitions]
        }
        transitions = transitions.map((transition) => {
          if (!transition) {
            transition = defaultTransition
          } else if (typeof transition === 'string') {
            transition = Object.assign({}, defaultTransition, { name: transition })
          } else {
            transition = Object.assign({}, defaultTransition, transition)
          }
          return transition
        })
        this.$options.nuxt.transitions = transitions
        return transitions
      },

      err: null,
      dateErr: null,
      error (err) {
        err = err || null
        app.context._errored = Boolean(err)
        err = err ? normalizeError(err) : null
        let nuxt = app.nuxt // to work with @vue/composition-api, see https://github.com/nuxt/nuxt.js/issues/6517#issuecomment-573280207
        if (this) {
          nuxt = this.nuxt || this.$options.nuxt
        }
        nuxt.dateErr = Date.now()
        nuxt.err = err
        // Used in src/server.js
        if (ssrContext) {
          ssrContext.nuxt.error = err
        }
        return err
      }
    },
    ...App
  }

  const next = ssrContext ? ssrContext.next : location => app.router.push(location)
  // Resolve route
  let route
  if (ssrContext) {
    route = router.resolve(ssrContext.url).route
  } else {
    const path = getLocation(router.options.base, router.options.mode)
    route = router.resolve(path).route
  }

  // Set context to app.context
  await setContext(app, {
    route,
    next,
    error: app.nuxt.error.bind(app),
    payload: ssrContext ? ssrContext.payload : undefined,
    req: ssrContext ? ssrContext.req : undefined,
    res: ssrContext ? ssrContext.res : undefined,
    beforeRenderFns: ssrContext ? ssrContext.beforeRenderFns : undefined,
    beforeSerializeFns: ssrContext ? ssrContext.beforeSerializeFns : undefined,
    ssrContext
  })

  function inject(key, value) {
    if (!key) {
      throw new Error('inject(key, value) has no key provided')
    }
    if (value === undefined) {
      throw new Error(`inject('${key}', value) has no value provided`)
    }

    key = '$' + key
    // Add into app
    app[key] = value
    // Add into context
    if (!app.context[key]) {
      app.context[key] = value
    }

    // Check if plugin not already installed
    const installKey = '__nuxt_' + key + '_installed__'
    if (Vue[installKey]) {
      return
    }
    Vue[installKey] = true
    // Call Vue.use() to install the plugin into vm
    Vue.use(() => {
      if (!Object.prototype.hasOwnProperty.call(Vue.prototype, key)) {
        Object.defineProperty(Vue.prototype, key, {
          get () {
            return this.$root.$options[key]
          }
        })
      }
    })
  }

  // Inject runtime config as $config
  inject('config', config)

  // Add enablePreview(previewData = {}) in context for plugins
  if (process.static && process.client) {
    app.context.enablePreview = function (previewData = {}) {
      app.previewData = Object.assign({}, previewData)
      inject('preview', previewData)
    }
  }
  // Plugin execution

  if (typeof nuxt_plugin_plugin_990634da === 'function') {
    await nuxt_plugin_plugin_990634da(app.context, inject)
  }

  if (process.client && typeof nuxt_plugin_pluginclient_461baf8f === 'function') {
    await nuxt_plugin_pluginclient_461baf8f(app.context, inject)
  }

  if (process.server && typeof nuxt_plugin_pluginserver_a855bdd2 === 'function') {
    await nuxt_plugin_pluginserver_a855bdd2(app.context, inject)
  }

  if (process.client && typeof nuxt_plugin_workbox_5f9737f6 === 'function') {
    await nuxt_plugin_workbox_5f9737f6(app.context, inject)
  }

  if (typeof nuxt_plugin_metaplugin_838053d0 === 'function') {
    await nuxt_plugin_metaplugin_838053d0(app.context, inject)
  }

  if (typeof nuxt_plugin_iconplugin_7a3108e8 === 'function') {
    await nuxt_plugin_iconplugin_7a3108e8(app.context, inject)
  }

  if (typeof nuxt_plugin_axios_6d96d5ae === 'function') {
    await nuxt_plugin_axios_6d96d5ae(app.context, inject)
  }

  if (process.client && typeof nuxt_plugin_webfontloader_6e06a229 === 'function') {
    await nuxt_plugin_webfontloader_6e06a229(app.context, inject)
  }

  if (process.client && typeof nuxt_plugin_googleanalytics_22c71f5d === 'function') {
    await nuxt_plugin_googleanalytics_22c71f5d(app.context, inject)
  }

  if (process.server && typeof nuxt_plugin_pluginserver_eb2d531a === 'function') {
    await nuxt_plugin_pluginserver_eb2d531a(app.context, inject)
  }

  if (process.client && typeof nuxt_plugin_pluginclient_24afe4eb === 'function') {
    await nuxt_plugin_pluginclient_24afe4eb(app.context, inject)
  }

  if (typeof nuxt_plugin_image_9788dbb8 === 'function') {
    await nuxt_plugin_image_9788dbb8(app.context, inject)
  }

  if (typeof nuxt_plugin_moment_6c09a18f === 'function') {
    await nuxt_plugin_moment_6c09a18f(app.context, inject)
  }

  if (typeof nuxt_plugin_Util_927bffd4 === 'function') {
    await nuxt_plugin_Util_927bffd4(app.context, inject)
  }

  if (typeof nuxt_plugin_Types_21724ae5 === 'function') {
    await nuxt_plugin_Types_21724ae5(app.context, inject)
  }

  if (typeof nuxt_plugin_Disqus_1eaccad6 === 'function') {
    await nuxt_plugin_Disqus_1eaccad6(app.context, inject)
  }

  if (process.client && typeof nuxt_plugin_CmdK_928c9336 === 'function') {
    await nuxt_plugin_CmdK_928c9336(app.context, inject)
  }

  if (process.client && typeof nuxt_plugin_Lanyard_845ca082 === 'function') {
    await nuxt_plugin_Lanyard_845ca082(app.context, inject)
  }

  if (process.client && typeof nuxt_plugin_Tippy_216b0650 === 'function') {
    await nuxt_plugin_Tippy_216b0650(app.context, inject)
  }

  // Lock enablePreview in context
  if (process.static && process.client) {
    app.context.enablePreview = function () {
      console.warn('You cannot call enablePreview() outside a plugin.')
    }
  }

  // Wait for async component to be resolved first
  await new Promise((resolve, reject) => {
    // Ignore 404s rather than blindly replacing URL in browser
    if (process.client) {
      const { route } = router.resolve(app.context.route.fullPath)
      if (!route.matched.length) {
        return resolve()
      }
    }
    router.replace(app.context.route.fullPath, resolve, (err) => {
      // https://github.com/vuejs/vue-router/blob/v3.4.3/src/util/errors.js
      if (!err._isRouter) return reject(err)
      if (err.type !== 2 /* NavigationFailureType.redirected */) return resolve()

      // navigated to a different route in router guard
      const unregister = router.afterEach(async (to, from) => {
        if (process.server && ssrContext && ssrContext.url) {
          ssrContext.url = to.fullPath
        }
        app.context.route = await getRouteData(to)
        app.context.params = to.params || {}
        app.context.query = to.query || {}
        unregister()
        resolve()
      })
    })
  })

  return {
    app,
    router
  }
}

export { createApp, NuxtError }
