exports.ids = [18];
exports.modules = {

/***/ 130:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/windicss-webpack-plugin/dist/loaders/windicss-template.cjs!./src/components/Card/Post/Text.vue?vue&type=template&id=df618794&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c,
    _setup = _vm._self._setupProxy;
  return _vm.meta ? _c('SmartLink', {
    staticClass: "rounded-lg cursor-pointer flex space-x-4 p-3 transition-colors focus-ring items-center md:px-4 hover:bg-gray-200/40 dark:hover:bg-neutral-800/40",
    attrs: {
      "title": _vm.meta.title,
      "href": {
        name: 'blog-slug',
        params: {
          slug: _vm.meta.slug
        }
      }
    }
  }, [_c('SmartImage', {
    staticClass: "rounded flex-shrink-0 h-20 w-24 filter dark:brightness-75",
    attrs: {
      "src": _vm.meta.image
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "flex flex-col overflow-x-hidden"
  }, [_c('h2', {
    staticClass: "font-medium text-lg text-gray-800 truncate dark:text-gray-200"
  }, [_vm._v("\n      " + _vm._s(_vm.meta.title) + "\n    ")]), _vm._v(" "), _c('p', {
    staticClass: "text-neutral-500 line-clamp-2"
  }, [_vm._v("\n      " + _vm._s(_vm.meta.description) + "\n    ")])])], 1) : _vm._e();
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./src/components/Card/Post/Text.vue?vue&type=template&id=df618794&

// EXTERNAL MODULE: external "vue"
var external_vue_ = __webpack_require__(0);
var external_vue_default = /*#__PURE__*/__webpack_require__.n(external_vue_);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--12-0!./node_modules/ts-loader??ref--12-1!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/windicss-webpack-plugin/dist/loaders/windicss-template.cjs!./src/components/Card/Post/Text.vue?vue&type=script&lang=ts&

/* harmony default export */ var Textvue_type_script_lang_ts_ = (external_vue_default.a.extend({
  props: {
    meta: {
      type: Object,
      required: true,
      default: () => {}
    }
  }
}));
// CONCATENATED MODULE: ./src/components/Card/Post/Text.vue?vue&type=script&lang=ts&
 /* harmony default export */ var Post_Textvue_type_script_lang_ts_ = (Textvue_type_script_lang_ts_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./src/components/Card/Post/Text.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  Post_Textvue_type_script_lang_ts_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "055b6ece"
  
)

/* harmony default export */ var Text = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {SmartImage: __webpack_require__(26).default,SmartLink: __webpack_require__(27).default})


/***/ })

};;
//# sourceMappingURL=card-post-text.js.map