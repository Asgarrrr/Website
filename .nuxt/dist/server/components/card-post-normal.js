exports.ids = [14,41];
exports.modules = {

/***/ 113:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/windicss-webpack-plugin/dist/loaders/windicss-template.cjs!./src/components/Card/Post/Normal.vue?vue&type=template&id=7334b338&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c,
    _setup = _vm._self._setupProxy;
  return _vm.meta ? _c('div', {
    staticClass: "overflow-hidden",
    on: {
      "mouseover": function ($event) {
        _vm.hovered = true;
      },
      "mouseleave": function ($event) {
        _vm.hovered = false;
      }
    }
  }, [_c('SmartLink', {
    staticClass: "rounded-lg cursor-pointer space-y-2 focus-ring",
    attrs: {
      "title": _vm.meta.title,
      "href": {
        name: 'blog-slug',
        params: {
          slug: _vm.meta.slug
        }
      }
    }
  }, [_c('div', {
    staticClass: "relative"
  }, [_c('SmartImage', {
    staticClass: "rounded h-40 w-full filter dark:brightness-75",
    attrs: {
      "src": _vm.meta.image
    }
  }), _vm._v(" "), _c('transition', {
    attrs: {
      "name": "fade",
      "mode": "out-in"
    }
  }, [_c('div', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: _vm.hovered,
      expression: "hovered"
    }],
    staticClass: "flex bg-black/50 inset-0 absolute items-center justify-center"
  }, [_c('IconLink', {
    staticClass: "h-6 text-white w-6"
  })], 1)])], 1), _vm._v(" "), _c('div', {
    staticClass: "flex flex-col space-y-1"
  }, [_c('h2', {
    staticClass: "font-medium text-lg leading-tight text-gray-700 truncate dark:text-gray-200 hover:underline"
  }, [_vm._v("\n        " + _vm._s(_vm.meta.title) + "\n      ")]), _vm._v(" "), _c('p', {
    staticClass: "text-neutral-500 line-clamp-2"
  }, [_vm._v("\n        " + _vm._s(_vm.meta.description) + "\n      ")])])])], 1) : _vm._e();
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./src/components/Card/Post/Normal.vue?vue&type=template&id=7334b338&

// EXTERNAL MODULE: external "vue"
var external_vue_ = __webpack_require__(0);
var external_vue_default = /*#__PURE__*/__webpack_require__.n(external_vue_);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--12-0!./node_modules/ts-loader??ref--12-1!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/windicss-webpack-plugin/dist/loaders/windicss-template.cjs!./src/components/Card/Post/Normal.vue?vue&type=script&lang=ts&

/* harmony default export */ var Normalvue_type_script_lang_ts_ = (external_vue_default.a.extend({
  props: {
    meta: {
      type: Object,
      required: true,
      default: () => {}
    }
  },
  data() {
    return {
      hovered: false
    };
  }
}));
// CONCATENATED MODULE: ./src/components/Card/Post/Normal.vue?vue&type=script&lang=ts&
 /* harmony default export */ var Post_Normalvue_type_script_lang_ts_ = (Normalvue_type_script_lang_ts_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./src/components/Card/Post/Normal.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  Post_Normalvue_type_script_lang_ts_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "5ca9aa6a"
  
)

/* harmony default export */ var Normal = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {SmartImage: __webpack_require__(26).default,IconLink: __webpack_require__(87).default,SmartLink: __webpack_require__(16).default})


/***/ }),

/***/ 87:
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
  "5fb3834e"
  
)

/* harmony default export */ var Link = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=card-post-normal.js.map