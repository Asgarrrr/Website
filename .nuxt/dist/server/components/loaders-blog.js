exports.ids = [61,0,66,67,68,69];
exports.modules = {

/***/ 113:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/windicss-webpack-plugin/dist/loaders/windicss-template.cjs!./src/components/Loaders/Blog.vue?vue&type=template&id=361af13d&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "mt-12 space-y-12"
  }, _vm._l(3, function (i) {
    return _vm._ssrNode("<section class=\"space-y-4\">", "</section>", [_c('SkeletonLoader', {
      staticClass: "w-2/7 md:w-1/12 h-10"
    }), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"flex flex-col space-y-3\">", "</div>", _vm._l(_vm.getRandomNumber(), function (j) {
      return _c('SkeletonLoader', {
        key: j,
        staticClass: "w-full h-14"
      });
    }), 1)], 2);
  }), 0);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./src/components/Loaders/Blog.vue?vue&type=template&id=361af13d&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/windicss-webpack-plugin/dist/loaders/windicss-template.cjs!./src/components/Loaders/Blog.vue?vue&type=script&lang=js&
/* harmony default export */ var Blogvue_type_script_lang_js_ = ({
  methods: {
    getRandomNumber() {
      return Math.floor(Math.random() * 5) + 1;
    }
  }
});
// CONCATENATED MODULE: ./src/components/Loaders/Blog.vue?vue&type=script&lang=js&
 /* harmony default export */ var Loaders_Blogvue_type_script_lang_js_ = (Blogvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./src/components/Loaders/Blog.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  Loaders_Blogvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "60cce700"
  
)

/* harmony default export */ var Blog = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {SkeletonLoader: __webpack_require__(71).default})


/***/ }),

/***/ 71:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/windicss-webpack-plugin/dist/loaders/windicss-template.cjs!./src/components/SkeletonLoader/Index.vue?vue&type=template&id=5d71bdf0&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c,
    _setup = _vm._self._setupProxy;
  return _vm.type === 'repository' ? _c('SkeletonLoaderRepository') : _vm.type === 'iframe' ? _c('SkeletonLoaderIframe', {
    attrs: {
      "iframe-url": _vm.iframeUrl
    }
  }) : _vm.type === 'song' ? _c('SkeletonLoaderSong') : _vm.type === 'lastfm' ? _c('SkeletonLoaderLastfm') : _vm.type === 'spinner' ? _c('SkeletonLoaderSpinner') : _vm.type === 'block' ? _c('div', {
    staticClass: "bg-black/5 rounded animate-pulse dark:bg-white/5"
  }) : _vm.type === 'rounded' ? _c('div', {
    staticClass: "bg-black/5 rounded-full animate-pulse dark:bg-white/5"
  }) : _vm._e();
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./src/components/SkeletonLoader/Index.vue?vue&type=template&id=5d71bdf0&

// EXTERNAL MODULE: external "vue"
var external_vue_ = __webpack_require__(0);
var external_vue_default = /*#__PURE__*/__webpack_require__.n(external_vue_);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--12-0!./node_modules/ts-loader??ref--12-1!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/windicss-webpack-plugin/dist/loaders/windicss-template.cjs!./src/components/SkeletonLoader/Index.vue?vue&type=script&lang=ts&

/* harmony default export */ var Indexvue_type_script_lang_ts_ = (external_vue_default.a.extend({
  props: {
    type: {
      type: String,
      required: false,
      default: "block"
    },
    iframeUrl: {
      type: [String, Boolean],
      required: false,
      default: null
    }
  },
  data() {
    return {
      itemLoaded: false
    };
  }
}));
// CONCATENATED MODULE: ./src/components/SkeletonLoader/Index.vue?vue&type=script&lang=ts&
 /* harmony default export */ var SkeletonLoader_Indexvue_type_script_lang_ts_ = (Indexvue_type_script_lang_ts_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./src/components/SkeletonLoader/Index.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  SkeletonLoader_Indexvue_type_script_lang_ts_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "3950f1f2"
  
)

/* harmony default export */ var Index = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {SkeletonLoaderRepository: __webpack_require__(74).default,SkeletonLoaderIframe: __webpack_require__(73).default,SkeletonLoaderSong: __webpack_require__(75).default,SkeletonLoaderLastfm: __webpack_require__(77).default,SkeletonLoaderSpinner: __webpack_require__(76).default})


/***/ }),

/***/ 73:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/windicss-webpack-plugin/dist/loaders/windicss-template.cjs!./src/components/SkeletonLoader/Iframe.vue?vue&type=template&id=ee5d0030&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    class: {
      'bg-gray-100 dark:bg-neutral-800 rounded animate-pulse': _vm.itemLoaded === false
    }
  }, [_vm._ssrNode(_vm.iframeUrl ? "<iframe" + _vm._ssrAttr("src", _vm.iframeUrl) + _vm._ssrClass(null, {
    'w-full h-full rounded': true,
    invisible: _vm.itemLoaded === false
  }) + "></iframe>" : "<!---->")]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./src/components/SkeletonLoader/Iframe.vue?vue&type=template&id=ee5d0030&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/windicss-webpack-plugin/dist/loaders/windicss-template.cjs!./src/components/SkeletonLoader/Iframe.vue?vue&type=script&lang=js&
/* harmony default export */ var Iframevue_type_script_lang_js_ = ({
  props: {
    iframeUrl: {
      type: [String, Boolean],
      required: false,
      default: null
    }
  },
  data() {
    return {
      itemLoaded: false
    };
  }
});
// CONCATENATED MODULE: ./src/components/SkeletonLoader/Iframe.vue?vue&type=script&lang=js&
 /* harmony default export */ var SkeletonLoader_Iframevue_type_script_lang_js_ = (Iframevue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./src/components/SkeletonLoader/Iframe.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  SkeletonLoader_Iframevue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "198264b4"
  
)

/* harmony default export */ var Iframe = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 74:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/windicss-webpack-plugin/dist/loaders/windicss-template.cjs!./src/components/SkeletonLoader/Repository.vue?vue&type=template&id=2b103af9&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "rounded-md space-y-4 card-base"
  }, [_vm._ssrNode("<div class=\"rounded-md bg-black/10 h-6 animate-pulse w-7/12 dark:bg-white/5\"></div> <div class=\"space-y-2\"><div class=\"rounded-md bg-black/10 h-4 w-full animate-pulse dark:bg-white/5\"></div> <div class=\"rounded-md bg-black/10 h-4 animate-pulse w-4/12 dark:bg-white/5\"></div></div> <div class=\"space-y-2\"><div class=\"flex items-center justify-between\"><div class=\"rounded-md bg-black/10 h-4 animate-pulse w-1/6 dark:bg-white/5\"></div> <div class=\"rounded-md bg-black/10 h-4 animate-pulse w-1/6 dark:bg-white/5\"></div></div> <div class=\"flex items-center justify-between\"><div class=\"rounded-md bg-black/10 h-4 animate-pulse w-2/6 dark:bg-white/5\"></div> <div class=\"rounded-md bg-black/10 h-4 animate-pulse w-1/6 dark:bg-white/5\"></div></div> <div class=\"flex items-center justify-between\"><div class=\"rounded-md bg-black/10 h-4 animate-pulse w-1/6 dark:bg-white/5\"></div> <div class=\"rounded-md bg-black/10 h-4 animate-pulse w-1/6 dark:bg-white/5\"></div></div></div>")]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./src/components/SkeletonLoader/Repository.vue?vue&type=template&id=2b103af9&

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./src/components/SkeletonLoader/Repository.vue

var script = {}


/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  script,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "27237e5a"
  
)

/* harmony default export */ var Repository = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 75:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/windicss-webpack-plugin/dist/loaders/windicss-template.cjs!./src/components/SkeletonLoader/Song.vue?vue&type=template&id=1c0aaac8&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "card-base space-y-2"
  }, [_vm._ssrNode("<div class=\"rounded-md bg-black/5 flex-shrink-0 h-16 animate-pulse w-16 dark:bg-white/5\"></div> <div class=\"flex-grow space-y-1\"><div class=\"rounded bg-black/5 h-4 animate-pulse w-2/3 dark:bg-white/5\"></div> <div class=\"rounded bg-black/5 h-4 animate-pulse w-1/3 dark:bg-white/5\"></div></div>")]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./src/components/SkeletonLoader/Song.vue?vue&type=template&id=1c0aaac8&

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./src/components/SkeletonLoader/Song.vue

var script = {}


/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  script,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "7c1b96b6"
  
)

/* harmony default export */ var Song = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 76:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/windicss-webpack-plugin/dist/loaders/windicss-template.cjs!./src/components/SkeletonLoader/Spinner.vue?vue&type=template&id=536f5f98&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "flex items-center justify-center"
  }, [_vm._ssrNode("<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" class=\"w-8 h-8\">", "</svg>", [_vm._ssrNode("<path d=\"M12 2A10 10 0 1 0 22 12A10 10 0 0 0 12 2Zm0 18a8 8 0 1 1 8-8A8 8 0 0 1 12 20Z\" opacity=\".5\" class=\"fill-[#888888] dark:fill-white\"></path> "), _vm._ssrNode("<path fill=\"currentColor\" d=\"M20 12h2A10 10 0 0 0 12 2V4A8 8 0 0 1 20 12Z\">", "</path>", [_c('animateTransform', {
    attrs: {
      "attributeName": "transform",
      "dur": "1s",
      "from": "0 12 12",
      "repeatCount": "indefinite",
      "to": "360 12 12",
      "type": "rotate"
    }
  })], 1)], 2)]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./src/components/SkeletonLoader/Spinner.vue?vue&type=template&id=536f5f98&

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./src/components/SkeletonLoader/Spinner.vue

var script = {}


/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  script,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "89ba848e"
  
)

/* harmony default export */ var Spinner = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 77:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/windicss-webpack-plugin/dist/loaders/windicss-template.cjs!./src/components/SkeletonLoader/Lastfm.vue?vue&type=template&id=0130ce56&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c,
    _setup = _vm._self._setupProxy;
  return _c('div', {
    staticClass: "rounded-md card-base flex space-x-4 w-full items-center"
  }, [_c('SkeletonLoader', {
    staticClass: "rounded-md flex-shrink-0 h-16 w-16"
  }), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"flex flex-col space-y-2 w-full\">", "</div>", [_c('SkeletonLoader', {
    staticClass: "h-5",
    class: _vm.getRandomItem
  }), _vm._ssrNode(" "), _c('SkeletonLoader', {
    staticClass: "h-5 w-1/3"
  })], 2)], 2);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./src/components/SkeletonLoader/Lastfm.vue?vue&type=template&id=0130ce56&

// EXTERNAL MODULE: external "vue"
var external_vue_ = __webpack_require__(0);
var external_vue_default = /*#__PURE__*/__webpack_require__.n(external_vue_);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--12-0!./node_modules/ts-loader??ref--12-1!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/windicss-webpack-plugin/dist/loaders/windicss-template.cjs!./src/components/SkeletonLoader/Lastfm.vue?vue&type=script&lang=ts&

/* harmony default export */ var Lastfmvue_type_script_lang_ts_ = (external_vue_default.a.extend({
  computed: {
    getRandomItem() {
      return ["w-2/3", "w-3/4", "w-2/5"][Math.floor(Math.random() * 3)];
    }
  }
}));
// CONCATENATED MODULE: ./src/components/SkeletonLoader/Lastfm.vue?vue&type=script&lang=ts&
 /* harmony default export */ var SkeletonLoader_Lastfmvue_type_script_lang_ts_ = (Lastfmvue_type_script_lang_ts_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./src/components/SkeletonLoader/Lastfm.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  SkeletonLoader_Lastfmvue_type_script_lang_ts_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "5a7eef6d"
  
)

/* harmony default export */ var Lastfm = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {SkeletonLoader: __webpack_require__(71).default})


/***/ })

};;
//# sourceMappingURL=loaders-blog.js.map