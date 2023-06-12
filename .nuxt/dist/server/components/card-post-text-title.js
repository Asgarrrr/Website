exports.ids = [16,30,38];
exports.modules = {

/***/ 122:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/windicss-webpack-plugin/dist/loaders/windicss-template.cjs!./src/components/Card/Post/TextTitle.vue?vue&type=template&id=12a9591f&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c,
    _setup = _vm._self._setupProxy;
  return _vm.meta ? _c('SmartLink', {
    staticClass: "rounded-lg cursor-pointer flex flex-col p-3 px-4 transition-colors focus-ring truncate hover:bg-gray-200/40 dark:hover:bg-neutral-800/40",
    attrs: {
      "title": _vm.meta.title,
      "href": {
        name: 'blog-slug',
        params: {
          slug: _vm.meta.slug
        }
      }
    }
  }, [_c('h2', {
    staticClass: "font-medium text-lg text-gray-800 truncate dark:text-gray-200"
  }, [_vm._v("\n    " + _vm._s(_vm.meta.title) + "\n  ")]), _vm._v(" "), _c('div', {
    staticClass: "flex space-x-1 items-center"
  }, [_vm.meta.special ? _c('IconFire', {
    directives: [{
      name: "tippy",
      rawName: "v-tippy",
      value: {
        content: 'Popüler gönderi',
        placement: 'bottom'
      },
      expression: "{\n        content: 'Popüler gönderi',\n        placement: 'bottom',\n      }"
    }],
    staticClass: "flex-shrink-0 h-5 text-red-600 w-5 dark:text-red-500"
  }) : _vm._e(), _vm._v(" "), _c('div', {
    staticClass: "flex space-x-2 text-gray-700 truncate items-center dark:text-gray-400"
  }, [_c('IconClock', {
    staticClass: "flex-shrink-0 h-5 w-5"
  }), _vm._v(" "), _c('span', {
    staticClass: "truncate"
  }, [_vm._v(_vm._s(_vm.getPostDate))])], 1)], 1)]) : _vm._e();
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./src/components/Card/Post/TextTitle.vue?vue&type=template&id=12a9591f&

// EXTERNAL MODULE: external "vue"
var external_vue_ = __webpack_require__(0);
var external_vue_default = /*#__PURE__*/__webpack_require__.n(external_vue_);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--12-0!./node_modules/ts-loader??ref--12-1!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/windicss-webpack-plugin/dist/loaders/windicss-template.cjs!./src/components/Card/Post/TextTitle.vue?vue&type=script&lang=ts&

/* harmony default export */ var TextTitlevue_type_script_lang_ts_ = (external_vue_default.a.extend({
  props: {
    meta: {
      type: Object,
      required: true,
      default: () => {}
    }
  },
  computed: {
    getPostDate() {
      if (!this.meta || !this.meta.date) return null;
      return this.$getReadableDate(this.meta.date);
    }
  }
}));
// CONCATENATED MODULE: ./src/components/Card/Post/TextTitle.vue?vue&type=script&lang=ts&
 /* harmony default export */ var Post_TextTitlevue_type_script_lang_ts_ = (TextTitlevue_type_script_lang_ts_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./src/components/Card/Post/TextTitle.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  Post_TextTitlevue_type_script_lang_ts_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "7936bbf7"
  
)

/* harmony default export */ var TextTitle = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {IconFire: __webpack_require__(98).default,IconClock: __webpack_require__(97).default,SmartLink: __webpack_require__(16).default})


/***/ }),

/***/ 97:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/windicss-webpack-plugin/dist/loaders/windicss-template.cjs!./src/components/Icon/Clock.vue?vue&type=template&id=746abf25&
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
  }, [_vm._ssrNode("<path stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z\"></path>")]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./src/components/Icon/Clock.vue?vue&type=template&id=746abf25&

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./src/components/Icon/Clock.vue

var script = {}


/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  script,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "605787bf"
  
)

/* harmony default export */ var Clock = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 98:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/windicss-webpack-plugin/dist/loaders/windicss-template.cjs!./src/components/Icon/Fire.vue?vue&type=template&id=39e81928&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('svg', {
    attrs: {
      "xmlns": "http://www.w3.org/2000/svg",
      "viewBox": "0 0 20 20",
      "fill": "currentColor"
    }
  }, [_vm._ssrNode("<path fill-rule=\"evenodd\" d=\"M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z\" clip-rule=\"evenodd\"></path>")]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./src/components/Icon/Fire.vue?vue&type=template&id=39e81928&

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./src/components/Icon/Fire.vue

var script = {}


/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  script,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "675e0695"
  
)

/* harmony default export */ var Fire = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=card-post-text-title.js.map