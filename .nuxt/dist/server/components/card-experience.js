exports.ids = [13,49];
exports.modules = {

/***/ 117:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/windicss-webpack-plugin/dist/loaders/windicss-template.cjs!./src/components/Card/Experience.vue?vue&type=template&id=9da5c956&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c,
    _setup = _vm._self._setupProxy;
  return _c('SmartLink', {
    attrs: {
      "href": _vm.url,
      "blank": ""
    }
  }, [_c('div', {
    staticClass: "card-base leading-relaxed rounded-lg"
  }, [_c('div', {
    staticClass: "flex space-x-2 items-center justify-between"
  }, [_c('h3', [_vm._v(_vm._s(_vm.title))]), _vm._v(" "), _c('span', {
    staticClass: "text-black/50 dark:text-white/30 text-sm"
  }, [_vm._v(_vm._s(_vm.date))])]), _vm._v(" "), _vm.position ? _c('div', {
    staticClass: "truncate text-sm text-black/50 dark:text-white/30",
    class: _vm.hiddenBadge && 'flex items-center justify-between'
  }, [_vm._v("\n      " + _vm._s(_vm.position) + "\n      "), _vm.hiddenBadge ? _c('IconPlus', {
    staticClass: "h-4 w-4"
  }) : _vm._e()], 1) : _vm._e()])]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./src/components/Card/Experience.vue?vue&type=template&id=9da5c956&

// EXTERNAL MODULE: external "vue"
var external_vue_ = __webpack_require__(0);
var external_vue_default = /*#__PURE__*/__webpack_require__.n(external_vue_);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--12-0!./node_modules/ts-loader??ref--12-1!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/windicss-webpack-plugin/dist/loaders/windicss-template.cjs!./src/components/Card/Experience.vue?vue&type=script&lang=ts&

/* harmony default export */ var Experiencevue_type_script_lang_ts_ = (external_vue_default.a.extend({
  props: {
    title: {
      type: String,
      required: true,
      default: ""
    },
    url: {
      type: String,
      required: false,
      default: null
    },
    date: {
      type: String,
      required: false,
      default: new Date().getFullYear()
    },
    position: {
      type: String,
      required: false,
      default: null
    },
    hiddenBadge: {
      type: Boolean,
      required: false,
      default: false
    }
  }
}));
// CONCATENATED MODULE: ./src/components/Card/Experience.vue?vue&type=script&lang=ts&
 /* harmony default export */ var Card_Experiencevue_type_script_lang_ts_ = (Experiencevue_type_script_lang_ts_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./src/components/Card/Experience.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  Card_Experiencevue_type_script_lang_ts_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "507a9f12"
  
)

/* harmony default export */ var Experience = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {IconPlus: __webpack_require__(96).default,SmartLink: __webpack_require__(16).default})


/***/ }),

/***/ 96:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/windicss-webpack-plugin/dist/loaders/windicss-template.cjs!./src/components/Icon/Plus.vue?vue&type=template&id=ac7d1696&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('svg', {
    attrs: {
      "xmlns": "http://www.w3.org/2000/svg",
      "fill": "none",
      "viewBox": "0 0 24 24",
      "stroke-width": "1.5",
      "stroke": "currentColor"
    }
  }, [_vm._ssrNode("<path stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M12 4.5v15m7.5-7.5h-15\"></path>")]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./src/components/Icon/Plus.vue?vue&type=template&id=ac7d1696&

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./src/components/Icon/Plus.vue

var script = {}


/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  script,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "1ac04bf9"
  
)

/* harmony default export */ var Plus = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=card-experience.js.map