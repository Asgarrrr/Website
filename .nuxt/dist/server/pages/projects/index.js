exports.ids = [76,3,61,66];
exports.modules = {

/***/ 106:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/windicss-webpack-plugin/dist/loaders/windicss-template.cjs!./src/components/Blog/Notification.vue?vue&type=template&id=5077dfd0&scoped=true&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c,
    _setup = _vm._self._setupProxy;
  return _c('div', {
    staticClass: "notification flex flex-col md:items-center md:flex-row gap-x-4 gap-y-2",
    class: _vm.type
  }, [_vm._ssrNode("<span class=\"text-xl md:text-lg\" data-v-5077dfd0>" + _vm._ssrEscape(_vm._s(_vm.getIcon)) + "</span> "), _vm._ssrNode("<div data-v-5077dfd0>", "</div>", [_vm._ssrNode((_vm.title ? "<h1 data-v-5077dfd0>" + _vm._ssrEscape(_vm._s(_vm.title)) + "</h1>" : "<!---->") + " "), !!_vm.$slots.default ? _vm._ssrNode("<p data-v-5077dfd0>", "</p>", [_vm._t("default")], 2) : _vm._e()], 2)], 2);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./src/components/Blog/Notification.vue?vue&type=template&id=5077dfd0&scoped=true&

// EXTERNAL MODULE: external "vue"
var external_vue_ = __webpack_require__(0);
var external_vue_default = /*#__PURE__*/__webpack_require__.n(external_vue_);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--12-0!./node_modules/ts-loader??ref--12-1!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/windicss-webpack-plugin/dist/loaders/windicss-template.cjs!./src/components/Blog/Notification.vue?vue&type=script&lang=ts&

/* harmony default export */ var Notificationvue_type_script_lang_ts_ = (external_vue_default.a.extend({
  props: {
    type: {
      type: String,
      required: false,
      default: "information"
    },
    title: {
      type: String,
      required: false,
      default: ""
    }
  },
  computed: {
    getIcon() {
      if (this.type === "warning") return "❗️";else if (this.type === "danger") return "🚨";else if (this.type === "success") return "✅";else return "💡";
    }
  }
}));
// CONCATENATED MODULE: ./src/components/Blog/Notification.vue?vue&type=script&lang=ts&
 /* harmony default export */ var Blog_Notificationvue_type_script_lang_ts_ = (Notificationvue_type_script_lang_ts_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./src/components/Blog/Notification.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(95)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  Blog_Notificationvue_type_script_lang_ts_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "5077dfd0",
  "4ad523c1"
  
)

/* harmony default export */ var Notification = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 139:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/windicss-webpack-plugin/dist/loaders/windicss-template.cjs!./src/pages/projects/index.vue?vue&type=template&id=aa8a2bc0&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('PageLayout', {
    attrs: {
      "title": "My Projects",
      "description": "Check out the projects I worked on!"
    }
  }, [_c('blog-notification', {
    attrs: {
      "type": "danger"
    }
  }, [_c('p', [_c('strong', [_vm._v("Notice:")]), _vm._v(" This page is still under construction. Some projects may be missing, and projects pages may be incomplete.\n    ")])]), _vm._v(" "), _c('section', {
    staticClass: "flex items-center flex-wrap gap-2"
  }, [_c('span', {
    staticClass: "text-sm"
  }, [_vm._v("Jump to:")]), _vm._v(" "), _vm._l(_vm.projects, function (project, index) {
    return _c('Button', {
      key: `skipto-button-${index}`,
      attrs: {
        "href": `#${project.name.toLowerCase().split(' ').join('-')}`
      }
    }, [_vm._v("\n      " + _vm._s(project.name) + "\n    ")]);
  })], 2), _vm._v(" "), _vm._l(_vm.projects, function (project, index) {
    return _c('section', {
      key: `project-${index}`,
      staticClass: "grid md:grid-cols-2 gap-8 md:gap-12 items-center",
      class: index === 0 ? 'mt-24 mb-42' : 'my-42',
      attrs: {
        "id": project.name.toLowerCase().split(' ').join('-')
      }
    }, [_c('div', {
      staticClass: "space-y-4"
    }, [project.client ? _c('span', {
      staticClass: "bg-blue-600/10 block w-max text-sm rounded-lg px-4 text-blue-600 py-1.5 dark:bg-white/5 dark:text-white/30"
    }, [_vm._v("\n        " + _vm._s(project.client) + "\n      ")]) : _vm._e(), _vm._v(" "), _c('h2', {
      staticClass: "text-4xl text-black/90 font-bold dark:text-white/90"
    }, [_vm._v("\n        " + _vm._s(project.name) + "\n      ")]), _vm._v(" "), project.note ? _c('span', {
      staticClass: "bg-orange-600/10 block w-max text-sm rounded-lg px-4 text-orange-600 py-1.5 dark:bg-white/5 dark:text-white/30"
    }, [_vm._v("\n        " + _vm._s(project.note) + "\n      ")]) : _vm._e(), _vm._v(" "), _c('p', [_vm._v("\n        " + _vm._s(project.description) + "\n      ")]), _vm._v(" "), project.buttons ? _c('div', {
      staticClass: "flex flex-wrap gap-2"
    }, _vm._l(project.buttons, function (button, index) {
      return _c('Button', {
        key: `button-${index}`,
        attrs: {
          "href": button.link,
          "blank": !button.link.startsWith('/')
        },
        scopedSlots: _vm._u([{
          key: "icon",
          fn: function () {
            return [button.icon ? _c(button.icon.split(':')[0], _vm._b({
              tag: "component",
              staticClass: "h-4 w-4"
            }, 'component', {
              brand: button.icon.split(':')[1]
            }, false)) : _vm._e()];
          },
          proxy: true
        }], null, true)
      }, [_vm._v("\n\n          " + _vm._s(button.text) + "\n        ")]);
    }), 1) : _vm._e()]), _vm._v(" "), project.image ? _c('SmartFigure', {
      class: index % 2 === 0 && 'md:order-first',
      attrs: {
        "src": project.image,
        "border": ""
      }
    }) : _vm._e()], 1);
  })], 2);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./src/pages/projects/index.vue?vue&type=template&id=aa8a2bc0&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/windicss-webpack-plugin/dist/loaders/windicss-template.cjs!./src/pages/projects/index.vue?vue&type=script&lang=js&
/* harmony default export */ var projectsvue_type_script_lang_js_ = ({
  head() {
    const title = "Projects";
    const description = "Check out my projects and see what I can build for you!";
    return {
      title,
      meta: this.$prepareMeta({
        title,
        description
      })
    };
  },
  data: () => ({
    projects: [{
      client: "Personal",
      name: "Rogue",
      description: "A procedurally generated roguelike-style game where players explore a dungeon filled with monsters and treasures.",
      image: "https://i.imgur.com/GVCH2f5.png",
      buttons: [{
        text: "Read more",
        link: "/projects/rogue",
        icon: "IconLink"
      }, {
        text: "Play now",
        link: "https://rogue-ii-production.up.railway.app/login",
        icon: "IconPlay"
      }]
    }, {
      client: "Personal",
      name: "Riftmaker",
      description: "A real-time League of Legends AI companion, delivering game insights and assisting players with up-to-date information.",
      image: "https://cdn.discordapp.com/attachments/864261615402876948/1106130034277765181/Riftmaker.png",
      buttons: [{
        text: "Read more",
        link: "/projects/riftmaker",
        icon: "IconLink"
      }]
    }, {
      client: "Personal",
      name: "Luna",
      description: "A Discord bot that allows you to create and manage your own Discord server templates.",
      image: ""
    }]
  }),
  mounted() {
    this.$applyMediumZoom();
  }
});
// CONCATENATED MODULE: ./src/pages/projects/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_projectsvue_type_script_lang_js_ = (projectsvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./src/pages/projects/index.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_projectsvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "38455faa"
  
)

/* harmony default export */ var projects = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {BlogNotification: __webpack_require__(106).default,Button: __webpack_require__(8).default,SmartFigure: __webpack_require__(81).default,PageLayout: __webpack_require__(77).default})


/***/ }),

/***/ 76:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(80);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(5).default
module.exports.__inject__ = function (context) {
  add("09a2553a", content, true, context)
};

/***/ }),

/***/ 77:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/windicss-webpack-plugin/dist/loaders/windicss-template.cjs!./src/components/PageLayout.vue?vue&type=template&id=238cef4c&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c,
    _setup = _vm._self._setupProxy;
  return _c('div', {
    staticClass: "text-black/50 dark:text-white/30"
  }, [_vm._ssrNode("<header class=\"space-y-2 my-12\"><h1 class=\"text-black/90 dark:text-white/90 text-4xl font-semibold\">" + _vm._ssrEscape("\n      " + _vm._s(_vm.title) + "\n    ") + "</h1> " + _vm._ssrList(_vm.getDescriptions, function (description, index) {
    return "<p>" + _vm._ssrEscape("\n      " + _vm._s(description) + "\n    ") + "</p>";
  }) + "</header> "), _vm._t("default")], 2);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./src/components/PageLayout.vue?vue&type=template&id=238cef4c&

// EXTERNAL MODULE: external "vue"
var external_vue_ = __webpack_require__(0);
var external_vue_default = /*#__PURE__*/__webpack_require__.n(external_vue_);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--12-0!./node_modules/ts-loader??ref--12-1!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/windicss-webpack-plugin/dist/loaders/windicss-template.cjs!./src/components/PageLayout.vue?vue&type=script&lang=ts&

/* harmony default export */ var PageLayoutvue_type_script_lang_ts_ = (external_vue_default.a.extend({
  props: {
    title: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: false,
      default: []
    }
  },
  computed: {
    getDescriptions() {
      return typeof this.description === "string" ? [this.description] : this.description;
    }
  }
}));
// CONCATENATED MODULE: ./src/components/PageLayout.vue?vue&type=script&lang=ts&
 /* harmony default export */ var components_PageLayoutvue_type_script_lang_ts_ = (PageLayoutvue_type_script_lang_ts_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./src/components/PageLayout.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_PageLayoutvue_type_script_lang_ts_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "90445ee6"
  
)

/* harmony default export */ var PageLayout = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 79:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_windicss_webpack_plugin_dist_loaders_windicss_style_pitcher_cjs_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_windicss_webpack_plugin_dist_loaders_windicss_template_cjs_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Figure_vue_vue_type_style_index_0_id_6bdc1fc8_prod_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(76);
/* harmony import */ var _node_modules_windicss_webpack_plugin_dist_loaders_windicss_style_pitcher_cjs_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_windicss_webpack_plugin_dist_loaders_windicss_template_cjs_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Figure_vue_vue_type_style_index_0_id_6bdc1fc8_prod_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_windicss_webpack_plugin_dist_loaders_windicss_style_pitcher_cjs_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_windicss_webpack_plugin_dist_loaders_windicss_template_cjs_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Figure_vue_vue_type_style_index_0_id_6bdc1fc8_prod_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_windicss_webpack_plugin_dist_loaders_windicss_style_pitcher_cjs_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_windicss_webpack_plugin_dist_loaders_windicss_template_cjs_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Figure_vue_vue_type_style_index_0_id_6bdc1fc8_prod_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_windicss_webpack_plugin_dist_loaders_windicss_style_pitcher_cjs_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_windicss_webpack_plugin_dist_loaders_windicss_template_cjs_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Figure_vue_vue_type_style_index_0_id_6bdc1fc8_prod_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 80:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".medium-zoom-overlay{z-index:40}.medium-zoom-image.medium-zoom-image--opened{z-index:50}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 81:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/windicss-webpack-plugin/dist/loaders/windicss-template.cjs!./src/components/Smart/Figure.vue?vue&type=template&id=6bdc1fc8&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c,
    _setup = _vm._self._setupProxy;
  return _c('figure', {
    staticClass: "w-full h-full overflow-hidden"
  }, [_c(_vm.src.endsWith('.gif') ? 'img' : 'nuxt-img', {
    tag: "component",
    staticClass: "object-cover w-full rounded-md",
    class: [_vm.imageClass, _vm.border && 'border border-black/10 dark:border-white/10'],
    attrs: {
      "src": _vm.src,
      "alt": _vm.alt || _vm.caption || 'image',
      "loading": "lazy",
      "draggable": "false",
      "fit": "cover",
      "data-zoomable": _vm.zoomable
    }
  }), _vm._ssrNode(" " + (_vm.caption ? "<figcaption class=\"text-center mt-3\">" + _vm._ssrEscape("\n    " + _vm._s(_vm.caption) + "\n  ") + "</figcaption>" : "<!---->"))], 2);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./src/components/Smart/Figure.vue?vue&type=template&id=6bdc1fc8&

// EXTERNAL MODULE: external "vue"
var external_vue_ = __webpack_require__(0);
var external_vue_default = /*#__PURE__*/__webpack_require__.n(external_vue_);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--12-0!./node_modules/ts-loader??ref--12-1!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/windicss-webpack-plugin/dist/loaders/windicss-template.cjs!./src/components/Smart/Figure.vue?vue&type=script&lang=ts&

/* harmony default export */ var Figurevue_type_script_lang_ts_ = (external_vue_default.a.extend({
  props: {
    src: {
      type: String,
      required: false,
      default: null
    },
    alt: {
      type: String,
      required: false,
      default: null
    },
    caption: {
      type: String,
      required: false,
      default: null
    },
    imageClass: {
      type: String,
      required: false,
      default: null
    },
    border: {
      type: Boolean,
      required: false,
      default: false
    },
    zoomable: {
      type: Boolean,
      required: false,
      default: true
    }
  }
}));
// CONCATENATED MODULE: ./src/components/Smart/Figure.vue?vue&type=script&lang=ts&
 /* harmony default export */ var Smart_Figurevue_type_script_lang_ts_ = (Figurevue_type_script_lang_ts_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./src/components/Smart/Figure.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(79)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  Smart_Figurevue_type_script_lang_ts_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "04bd106b"
  
)

/* harmony default export */ var Figure = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 86:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(96);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(5).default
module.exports.__inject__ = function (context) {
  add("4955d2ac", content, true, context)
};

/***/ }),

/***/ 95:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_windicss_webpack_plugin_dist_loaders_windicss_style_pitcher_cjs_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_windicss_webpack_plugin_dist_loaders_windicss_template_cjs_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Notification_vue_vue_type_style_index_0_id_5077dfd0_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(86);
/* harmony import */ var _node_modules_windicss_webpack_plugin_dist_loaders_windicss_style_pitcher_cjs_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_windicss_webpack_plugin_dist_loaders_windicss_template_cjs_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Notification_vue_vue_type_style_index_0_id_5077dfd0_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_windicss_webpack_plugin_dist_loaders_windicss_style_pitcher_cjs_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_windicss_webpack_plugin_dist_loaders_windicss_template_cjs_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Notification_vue_vue_type_style_index_0_id_5077dfd0_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_windicss_webpack_plugin_dist_loaders_windicss_style_pitcher_cjs_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_windicss_webpack_plugin_dist_loaders_windicss_template_cjs_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Notification_vue_vue_type_style_index_0_id_5077dfd0_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_windicss_webpack_plugin_dist_loaders_windicss_style_pitcher_cjs_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_windicss_webpack_plugin_dist_loaders_windicss_template_cjs_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Notification_vue_vue_type_style_index_0_id_5077dfd0_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 96:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".notification[data-v-5077dfd0],.nuxt-content .notification[data-v-5077dfd0]{--tw-bg-opacity:1;--tw-bg-opacity:0.25;--tw-border-opacity:1;background-color:hsla(0,0%,83%,.25);background-color:rgba(212,212,212,var(--tw-bg-opacity));border-color:#e5e5e5;border-color:rgba(229,229,229,var(--tw-border-opacity));border-radius:.5rem;border-width:.1px;margin-bottom:1.25rem;margin-top:1.25rem;padding:1rem}.dark .notification[data-v-5077dfd0],.dark .nuxt-content .notification[data-v-5077dfd0]{--tw-bg-opacity:0.3;--tw-border-opacity:1;background-color:rgba(38,38,38,.3);background-color:rgba(38,38,38,var(--tw-bg-opacity));border-color:#262626;border-color:rgba(38,38,38,var(--tw-border-opacity))}.notification h1[data-v-5077dfd0],.nuxt-content .notification h1[data-v-5077dfd0]{font-size:1.125rem;font-weight:500;line-height:1.75rem;margin:0}.notification h1[data-v-5077dfd0]:hover,.nuxt-content .notification h1[data-v-5077dfd0]:hover{-webkit-text-decoration:none;text-decoration:none}.notification a[data-v-5077dfd0],.notification p[data-v-5077dfd0],.notification p strong[data-v-5077dfd0],.nuxt-content .notification a[data-v-5077dfd0],.nuxt-content .notification p[data-v-5077dfd0],.nuxt-content .notification p strong[data-v-5077dfd0]{margin:0}.dark .notification a[data-v-5077dfd0],.dark .notification p[data-v-5077dfd0],.dark .notification p strong[data-v-5077dfd0],.dark .nuxt-content .notification a[data-v-5077dfd0],.dark .nuxt-content .notification p[data-v-5077dfd0],.dark .nuxt-content .notification p strong[data-v-5077dfd0]{--tw-text-opacity:0.7;color:hsla(0,0%,100%,.7);color:rgba(255,255,255,var(--tw-text-opacity))}.notification a[data-v-5077dfd0],.nuxt-content .notification a[data-v-5077dfd0]{color:currentColor;font-weight:500;text-decoration-line:underline}.notification a[data-v-5077dfd0]:hover,.nuxt-content .notification a[data-v-5077dfd0]:hover{text-decoration-line:underline}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ })

};;
//# sourceMappingURL=index.js.map