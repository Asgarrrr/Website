exports.ids = [77,62,67];
exports.modules = {

/***/ 109:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/windicss-webpack-plugin/dist/loaders/windicss-template.cjs!./src/components/Smart/Figure.vue?vue&type=template&id=46d94b21&
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
  }), _vm._ssrNode(" " + (_vm.caption ? "<figcaption class=\"text-center\">" + _vm._ssrEscape("\n    " + _vm._s(_vm.caption) + "\n  ") + "</figcaption>" : "<!---->"))], 2);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./src/components/Smart/Figure.vue?vue&type=template&id=46d94b21&

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
  
  var style0 = __webpack_require__(93)
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

/***/ 151:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/windicss-webpack-plugin/dist/loaders/windicss-template.cjs!./src/pages/projects/index.vue?vue&type=template&id=22dd41e2&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('PageLayout', {
    attrs: {
      "title": "My Projects",
      "description": "Check out the projects I worked on!"
    }
  }, [_c('section', {
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
    }, [_vm._v("\n        " + _vm._s(project.client) + "\n      ")]) : _vm._e(), _vm._v(" "), project.note ? _c('span', {
      staticClass: "bg-orange-600/10 block w-max text-sm rounded-lg px-4 text-orange-600 py-1.5 dark:bg-white/5 dark:text-white/30"
    }, [_vm._v("\n        " + _vm._s(project.note) + "\n      ")]) : _vm._e(), _vm._v(" "), _c('h2', {
      staticClass: "text-4xl text-black/90 font-bold dark:text-white/90"
    }, [_vm._v("\n        " + _vm._s(project.name) + "\n      ")]), _vm._v(" "), _c('p', [_vm._v("\n        " + _vm._s(project.description) + "\n      ")]), _vm._v(" "), project.buttons ? _c('div', {
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

// CONCATENATED MODULE: ./src/pages/projects/index.vue?vue&type=template&id=22dd41e2&

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
    // SECTION : 001
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
installComponents(component, {Button: __webpack_require__(7).default,SmartFigure: __webpack_require__(109).default,PageLayout: __webpack_require__(71).default})


/***/ }),

/***/ 71:
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
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(94);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(5).default
module.exports.__inject__ = function (context) {
  add("2ab4dcb4", content, true, context)
};

/***/ }),

/***/ 93:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_windicss_webpack_plugin_dist_loaders_windicss_style_pitcher_cjs_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_windicss_webpack_plugin_dist_loaders_windicss_template_cjs_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Figure_vue_vue_type_style_index_0_id_46d94b21_prod_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(79);
/* harmony import */ var _node_modules_windicss_webpack_plugin_dist_loaders_windicss_style_pitcher_cjs_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_windicss_webpack_plugin_dist_loaders_windicss_template_cjs_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Figure_vue_vue_type_style_index_0_id_46d94b21_prod_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_windicss_webpack_plugin_dist_loaders_windicss_style_pitcher_cjs_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_windicss_webpack_plugin_dist_loaders_windicss_template_cjs_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Figure_vue_vue_type_style_index_0_id_46d94b21_prod_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_windicss_webpack_plugin_dist_loaders_windicss_style_pitcher_cjs_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_windicss_webpack_plugin_dist_loaders_windicss_template_cjs_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Figure_vue_vue_type_style_index_0_id_46d94b21_prod_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_windicss_webpack_plugin_dist_loaders_windicss_style_pitcher_cjs_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_windicss_webpack_plugin_dist_loaders_windicss_template_cjs_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Figure_vue_vue_type_style_index_0_id_46d94b21_prod_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 94:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".medium-zoom-overlay{z-index:40}.medium-zoom-image.medium-zoom-image--opened{z-index:50}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ })

};;
//# sourceMappingURL=index.js.map