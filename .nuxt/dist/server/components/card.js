exports.ids = [10];
exports.modules = {

/***/ 88:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/windicss-webpack-plugin/dist/loaders/windicss-template.cjs!./src/components/Card/Index.vue?vue&type=template&id=4ffb0162&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c,
    _setup = _vm._self._setupProxy;
  return _c(_vm.href ? 'SmartLink' : 'div', _vm._b({
    tag: "component",
    staticClass: "rounded-lg card-base",
    class: {
      [_vm.classes]: true,
      'p-2': _vm.tight === true,
      'p-4': _vm.tight === false,
      'cursor-pointer': _vm.cursor === true,
      'items-center flex space-x-4': _vm.$slots.icon || _vm.$slots['icon-left'],
      'justify-between': _vm.$slots.icon && !_vm.$slots['icon-left']
    },
    attrs: {
      "href": _vm.href
    }
  }, 'component', _vm.href ? _vm.$attrs : false, false), [_vm.$slots['icon-left'] ? _c('div', {
    staticClass: "flex-shrink-0"
  }, [_vm._t("icon-left")], 2) : _vm._e(), _vm._v(" "), _c('div', {
    staticClass: "overflow-x-hidden leading-relaxed space-y-2"
  }, [_vm.title ? _c('h2', {
    staticClass: "font-medium text-black dark:text-white truncate"
  }, [_vm._v("\n      " + _vm._s(_vm.title) + "\n    ")]) : _vm._e(), _vm._v(" "), _vm.$slots.default ? _c('p', {
    staticClass: "text-black/50 dark:text-white/30 text-sm",
    class: _vm.truncate === true && 'line-clamp-2'
  }, [_vm._t("default")], 2) : _vm._e()]), _vm._v(" "), _vm.$slots.icon ? _c('div', {
    staticClass: "flex-shrink-0"
  }, [_vm._t("icon")], 2) : _vm._e()]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./src/components/Card/Index.vue?vue&type=template&id=4ffb0162&

// EXTERNAL MODULE: external "vue"
var external_vue_ = __webpack_require__(0);
var external_vue_default = /*#__PURE__*/__webpack_require__.n(external_vue_);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--12-0!./node_modules/ts-loader??ref--12-1!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/windicss-webpack-plugin/dist/loaders/windicss-template.cjs!./src/components/Card/Index.vue?vue&type=script&lang=ts&

/* harmony default export */ var Indexvue_type_script_lang_ts_ = (external_vue_default.a.extend({
  props: {
    title: {
      type: String,
      required: false,
      default: null
    },
    description: {
      type: String,
      required: false,
      default: null
    },
    icon: {
      type: String,
      required: false,
      default: null
    },
    href: {
      type: [],
      required: false,
      default: null
    },
    tight: {
      type: Boolean,
      required: false,
      default: false
    },
    elevated: {
      type: Boolean,
      required: false,
      default: false
    },
    cursor: {
      type: Boolean,
      required: false,
      default: true
    },
    truncate: {
      type: Boolean,
      required: false,
      default: true
    }
  },
  data() {
    return {
      classes: "rounded-md overflow-x-hidden transition-colors"
    };
  }
}));
// CONCATENATED MODULE: ./src/components/Card/Index.vue?vue&type=script&lang=ts&
 /* harmony default export */ var Card_Indexvue_type_script_lang_ts_ = (Indexvue_type_script_lang_ts_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./src/components/Card/Index.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  Card_Indexvue_type_script_lang_ts_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "f443ff4c"
  
)

/* harmony default export */ var Index = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=card.js.map