exports.ids = [5,45];
exports.modules = {

/***/ 107:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(138);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(5).default
module.exports.__inject__ = function (context) {
  add("a1329064", content, true, context)
};

/***/ }),

/***/ 137:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_windicss_webpack_plugin_dist_loaders_windicss_style_pitcher_cjs_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_windicss_webpack_plugin_dist_loaders_windicss_template_cjs_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Product_vue_vue_type_style_index_0_id_8303cb44_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(107);
/* harmony import */ var _node_modules_windicss_webpack_plugin_dist_loaders_windicss_style_pitcher_cjs_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_windicss_webpack_plugin_dist_loaders_windicss_template_cjs_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Product_vue_vue_type_style_index_0_id_8303cb44_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_windicss_webpack_plugin_dist_loaders_windicss_style_pitcher_cjs_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_windicss_webpack_plugin_dist_loaders_windicss_template_cjs_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Product_vue_vue_type_style_index_0_id_8303cb44_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_windicss_webpack_plugin_dist_loaders_windicss_style_pitcher_cjs_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_windicss_webpack_plugin_dist_loaders_windicss_template_cjs_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Product_vue_vue_type_style_index_0_id_8303cb44_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_windicss_webpack_plugin_dist_loaders_windicss_style_pitcher_cjs_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_windicss_webpack_plugin_dist_loaders_windicss_template_cjs_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Product_vue_vue_type_style_index_0_id_8303cb44_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 138:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".notification[data-v-8303cb44],.nuxt-content .notification[data-v-8303cb44]{--tw-bg-opacity:1;--tw-bg-opacity:0.25;--tw-border-opacity:1;background-color:hsla(0,0%,83%,.25);background-color:rgba(212,212,212,var(--tw-bg-opacity));border-color:#e5e5e5;border-color:rgba(229,229,229,var(--tw-border-opacity));border-radius:.5rem;border-width:.1px;margin-bottom:1.25rem;margin-top:1.25rem;padding:1rem}.dark .notification[data-v-8303cb44],.dark .nuxt-content .notification[data-v-8303cb44]{--tw-bg-opacity:0.3;--tw-border-opacity:1;background-color:rgba(38,38,38,.3);background-color:rgba(38,38,38,var(--tw-bg-opacity));border-color:#262626;border-color:rgba(38,38,38,var(--tw-border-opacity))}.notification h1[data-v-8303cb44],.nuxt-content .notification h1[data-v-8303cb44]{font-size:1.125rem;font-weight:500;line-height:1.75rem;margin:0}.notification h1[data-v-8303cb44]:hover,.nuxt-content .notification h1[data-v-8303cb44]:hover{-webkit-text-decoration:none;text-decoration:none}.notification a[data-v-8303cb44],.notification p[data-v-8303cb44],.notification p strong[data-v-8303cb44],.nuxt-content .notification a[data-v-8303cb44],.nuxt-content .notification p[data-v-8303cb44],.nuxt-content .notification p strong[data-v-8303cb44]{margin:0}.dark .notification a[data-v-8303cb44],.dark .notification p[data-v-8303cb44],.dark .notification p strong[data-v-8303cb44],.dark .nuxt-content .notification a[data-v-8303cb44],.dark .nuxt-content .notification p[data-v-8303cb44],.dark .nuxt-content .notification p strong[data-v-8303cb44]{--tw-text-opacity:0.7;color:hsla(0,0%,100%,.7);color:rgba(255,255,255,var(--tw-text-opacity))}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 158:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/windicss-webpack-plugin/dist/loaders/windicss-template.cjs!./src/components/Blog/Product.vue?vue&type=template&id=8303cb44&scoped=true&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c,
    _setup = _vm._self._setupProxy;
  return _c('div', {
    staticClass: "notification flex flex-col md:items-left md:flex-row gap-x-4 gap-y-2 justify-between"
  }, [_vm._ssrNode("<div class=\"flex flex-row gap-x-6\" data-v-8303cb44>", "</div>", [_vm._ssrNode("<div class=\"hidden md:block\" data-v-8303cb44>", "</div>", [_c('smart-figure', {
    staticStyle: {
      "width": "100px",
      "margin": "0"
    },
    attrs: {
      "src": _vm.image,
      "imageClass": "w-16"
    }
  })], 1), _vm._ssrNode(" "), _vm._ssrNode("<div data-v-8303cb44>", "</div>", [_vm._ssrNode("<div class=\"flex flex-row items-center gap-x-2 justify-between\" data-v-8303cb44>", "</div>", [_c('SmartLink', {
    staticStyle: {
      "text-decoration": "none"
    },
    attrs: {
      "href": _vm.url,
      "blank": ""
    }
  }, [_c('div', {
    staticClass: "flex space-x-2 items-center decoration-wavy decoration-1 decoration-gray-500"
  }, [_c('h1', {
    staticClass: "hover:underline decoration-wavy decoration-1 decoration-gray-500"
  }, [_vm._v(_vm._s(_vm.product))]), _vm._v(" "), _c('IconLink', {
    staticClass: "h-4 w-4"
  })], 1)])], 1), _vm._ssrNode(" "), _vm._ssrNode("<p class=\"text-black/60 dark:text-white/60 w-full md:w-11/12\" data-v-8303cb44>", "</p>", [_vm._t("default")], 2), _vm._ssrNode(" <span class=\"text-black/50 dark:text-white/30 text-sm\" data-v-8303cb44>" + _vm._ssrEscape("\n          " + _vm._s(_vm.price) + "\n        ") + "</span>")], 2)], 2)]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./src/components/Blog/Product.vue?vue&type=template&id=8303cb44&scoped=true&

// EXTERNAL MODULE: external "vue"
var external_vue_ = __webpack_require__(0);
var external_vue_default = /*#__PURE__*/__webpack_require__.n(external_vue_);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--12-0!./node_modules/ts-loader??ref--12-1!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/windicss-webpack-plugin/dist/loaders/windicss-template.cjs!./src/components/Blog/Product.vue?vue&type=script&lang=ts&

/* harmony default export */ var Productvue_type_script_lang_ts_ = (external_vue_default.a.extend({
  props: {
    product: {
      type: String,
      required: true,
      default: ""
    },
    url: {
      type: String,
      required: true,
      default: ""
    },
    image: {
      type: String,
      required: true,
      default: ""
    },
    price: {
      type: String,
      required: true,
      default: ""
    }
  }
}));
// CONCATENATED MODULE: ./src/components/Blog/Product.vue?vue&type=script&lang=ts&
 /* harmony default export */ var Blog_Productvue_type_script_lang_ts_ = (Productvue_type_script_lang_ts_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./src/components/Blog/Product.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(137)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  Blog_Productvue_type_script_lang_ts_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "8303cb44",
  "62c4a311"
  
)

/* harmony default export */ var Product = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {SmartFigure: __webpack_require__(29).default,IconLink: __webpack_require__(84).default,SmartLink: __webpack_require__(16).default})


/***/ }),

/***/ 84:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/windicss-webpack-plugin/dist/loaders/windicss-template.cjs!./src/components/Icon/Link.vue?vue&type=template&id=2a2e5e5d&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('svg', {
    attrs: {
      "xmlns": "http://www.w3.org/2000/svg",
      "fill": "none",
      "viewBox": "0 0 24 24",
      "stroke": "currentColor"
    }
  }, [_vm._ssrNode("<path stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1\"></path>")]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./src/components/Icon/Link.vue?vue&type=template&id=2a2e5e5d&

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./src/components/Icon/Link.vue

var script = {}


/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  script,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "7dedf85e"
  
)

/* harmony default export */ var Link = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=blog-product.js.map