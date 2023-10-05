exports.ids = [23];
exports.modules = {

/***/ 118:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/windicss-webpack-plugin/dist/loaders/windicss-template.cjs!./src/components/Card/Sponsor.vue?vue&type=template&id=caa639be&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c,
    _setup = _vm._self._setupProxy;
  return _c('SmartLink', {
    staticClass: "card-base rounded-lg flex flex-col gap-2",
    attrs: {
      "href": `https://github.com/${_vm.sponsor.login}`,
      "blank": ""
    }
  }, [_c('SmartImage', {
    staticClass: "h-10 w-10 flex-shrink-0 rounded-full",
    attrs: {
      "src": _vm.sponsor.avatarUrl
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "flex overflow-x-hidden flex-col leading-tight"
  }, [_c('span', {
    staticClass: "truncate"
  }, [_vm._v(_vm._s(_vm.sponsor.login))]), _vm._v(" "), _c('span', {
    staticClass: "text-sm text-black/30 dark:text-white/30 truncate"
  }, [_vm._v("\n      " + _vm._s(_vm.monthly ? "Monthly" : "One time") + "\n    ")])])], 1);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./src/components/Card/Sponsor.vue?vue&type=template&id=caa639be&

// EXTERNAL MODULE: external "vue"
var external_vue_ = __webpack_require__(0);
var external_vue_default = /*#__PURE__*/__webpack_require__.n(external_vue_);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--12-0!./node_modules/ts-loader??ref--12-1!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/windicss-webpack-plugin/dist/loaders/windicss-template.cjs!./src/components/Card/Sponsor.vue?vue&type=script&lang=ts&

/* harmony default export */ var Sponsorvue_type_script_lang_ts_ = (external_vue_default.a.extend({
  props: {
    sponsor: {
      type: Object,
      required: true
    },
    monthly: {
      type: Boolean,
      required: false,
      default: false
    }
  }
}));
// CONCATENATED MODULE: ./src/components/Card/Sponsor.vue?vue&type=script&lang=ts&
 /* harmony default export */ var Card_Sponsorvue_type_script_lang_ts_ = (Sponsorvue_type_script_lang_ts_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./src/components/Card/Sponsor.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  Card_Sponsorvue_type_script_lang_ts_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "5d1c9bac"
  
)

/* harmony default export */ var Sponsor = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {SmartImage: __webpack_require__(26).default,SmartLink: __webpack_require__(27).default})


/***/ })

};;
//# sourceMappingURL=card-sponsor.js.map