exports.ids = [65];
exports.modules = {

/***/ 83:
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
  "39588bd6"
  
)

/* harmony default export */ var PageLayout = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=page-layout.js.map