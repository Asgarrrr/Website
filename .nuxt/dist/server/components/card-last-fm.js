exports.ids = [13,47];
exports.modules = {

/***/ 88:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/windicss-webpack-plugin/dist/loaders/windicss-template.cjs!./src/components/Icon/Play.vue?vue&type=template&id=2840787e&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('svg', {
    attrs: {
      "viewBox": "0 0 24 24",
      "fill": "none",
      "xmlns": "http://www.w3.org/2000/svg"
    }
  }, [_vm._ssrNode("<path d=\"M17.886 9.874L9.89 4.429a2.46 2.46 0 00-2.57-.126c-.4.219-.734.544-.966.942A2.594 2.594 0 006 6.559v10.887c0 .462.123.916.356 1.313.232.396.566.72.965.939a2.46 2.46 0 002.569-.127l7.996-5.445c.343-.233.624-.55.818-.92a2.597 2.597 0 000-2.41 2.536 2.536 0 00-.818-.92v-.002 0z\" fill=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"></path>")]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./src/components/Icon/Play.vue?vue&type=template&id=2840787e&

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./src/components/Icon/Play.vue

var script = {}


/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  script,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "0e1826da"
  
)

/* harmony default export */ var Play = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 93:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/windicss-webpack-plugin/dist/loaders/windicss-template.cjs!./src/components/Card/LastFm.vue?vue&type=template&id=738f5bcb&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c,
    _setup = _vm._self._setupProxy;
  return _c('SmartLink', {
    staticClass: "rounded-lg flex items-center gap-4 card-base",
    class: {
      'justify-between': _vm.plays !== null
    },
    attrs: {
      "href": _vm.url,
      "title": _vm.name,
      "blank": ""
    }
  }, [_c('div', {
    staticClass: "flex space-x-4 truncate items-center"
  }, [_c('div', {
    staticClass: "flex-shrink-0 h-14 w-14 relative"
  }, [_c('SmartImage', {
    staticClass: "rounded-md",
    attrs: {
      "src": _vm.image
    }
  }), _vm._v(" "), _vm.nowPlaying ? _c('div', {
    staticClass: "rounded-md flex bg-black/75 inset-0 items-center justify-center absolute",
    attrs: {
      "title": "Playing now..."
    }
  }, [_c('IconPlay', {
    staticClass: "h-6 text-neutral-300 w-6"
  })], 1) : _vm._e()], 1), _vm._v(" "), _c('div', {
    staticClass: "flex flex-col truncate"
  }, [_c('span', {
    staticClass: "truncate"
  }, [_vm._v("\n        " + _vm._s(_vm.name) + "\n      ")]), _vm._v(" "), _vm.artist ? _c('span', {
    staticClass: "text-sm text-black/50 dark:text-white/30 truncate"
  }, [_vm._v("by " + _vm._s(_vm.artist))]) : _vm._e()])]), _vm._v(" "), _vm.plays ? _c('div', {
    staticClass: "rounded-md text-blue-600 bg-blue-600/10 ring-[0.5px] ring-blue-600/40 px-4 py-1 flex-shrink-0 text-xs"
  }, [_vm._v("\n    " + _vm._s(_vm.plays) + " plays\n  ")]) : _vm._e()]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./src/components/Card/LastFm.vue?vue&type=template&id=738f5bcb&

// EXTERNAL MODULE: external "vue"
var external_vue_ = __webpack_require__(0);
var external_vue_default = /*#__PURE__*/__webpack_require__.n(external_vue_);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--12-0!./node_modules/ts-loader??ref--12-1!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/windicss-webpack-plugin/dist/loaders/windicss-template.cjs!./src/components/Card/LastFm.vue?vue&type=script&lang=ts&

/* harmony default export */ var LastFmvue_type_script_lang_ts_ = (external_vue_default.a.extend({
  props: {
    name: {
      type: String,
      required: true
    },
    artist: {
      type: String,
      required: false,
      default: null
    },
    url: {
      type: String,
      required: true
    },
    image: {
      type: String,
      required: true
    },
    nowPlaying: {
      type: Boolean,
      required: false,
      default: false
    },
    plays: {
      type: Number,
      required: false,
      default: null
    }
  }
}));
// CONCATENATED MODULE: ./src/components/Card/LastFm.vue?vue&type=script&lang=ts&
 /* harmony default export */ var Card_LastFmvue_type_script_lang_ts_ = (LastFmvue_type_script_lang_ts_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./src/components/Card/LastFm.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  Card_LastFmvue_type_script_lang_ts_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "68f89a25"
  
)

/* harmony default export */ var LastFm = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {SmartImage: __webpack_require__(26).default,IconPlay: __webpack_require__(88).default,SmartLink: __webpack_require__(16).default})


/***/ })

};;
//# sourceMappingURL=card-last-fm.js.map