exports.ids = [20];
exports.modules = {

/***/ 119:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/windicss-webpack-plugin/dist/loaders/windicss-template.cjs!./src/components/Card/Skill.vue?vue&type=template&id=58f6bad0&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c,
    _setup = _vm._self._setupProxy;
  return _c('div', {
    staticClass: "card-base rounded-lg flex items-center space-x-4"
  }, [_vm._ssrNode("<div class=\"rounded-lg flex\">", "</div>", [_vm.image ? _c('SmartImage', {
    staticClass: "h-6 w-6 flex-shrink-0",
    attrs: {
      "src": _vm.image
    }
  }) : _c(_vm.iconPack, {
    tag: "component",
    staticClass: "flex-shrink-0 h-6 w-6",
    attrs: {
      "brand": _vm.title
    }
  })], 1), _vm._ssrNode(" <span class=\"flex-1 truncate text-sm\">" + _vm._ssrEscape("\n    " + _vm._s(_vm.title) + "\n  ") + "</span>")], 2);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./src/components/Card/Skill.vue?vue&type=template&id=58f6bad0&

// EXTERNAL MODULE: external "vue"
var external_vue_ = __webpack_require__(0);
var external_vue_default = /*#__PURE__*/__webpack_require__.n(external_vue_);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--12-0!./node_modules/ts-loader??ref--12-1!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/windicss-webpack-plugin/dist/loaders/windicss-template.cjs!./src/components/Card/Skill.vue?vue&type=script&lang=ts&

/* harmony default export */ var Skillvue_type_script_lang_ts_ = (external_vue_default.a.extend({
  props: {
    title: {
      type: String,
      required: true,
      default: ""
    },
    image: {
      type: String,
      required: false,
      default: ""
    },
    iconPack: {
      type: String,
      required: false,
      default: "IconDev"
    }
  }
}));
// CONCATENATED MODULE: ./src/components/Card/Skill.vue?vue&type=script&lang=ts&
 /* harmony default export */ var Card_Skillvue_type_script_lang_ts_ = (Skillvue_type_script_lang_ts_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./src/components/Card/Skill.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  Card_Skillvue_type_script_lang_ts_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "2caeca59"
  
)

/* harmony default export */ var Skill = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {SmartImage: __webpack_require__(26).default})


/***/ })

};;
//# sourceMappingURL=card-skill.js.map