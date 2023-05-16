exports.ids = [4];
exports.modules = {

/***/ 111:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/windicss-webpack-plugin/dist/loaders/windicss-template.cjs!./src/components/Blog/PrevNext.vue?vue&type=template&id=32958a67&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c,
    _setup = _vm._self._setupProxy;
  return _c('transition', {
    attrs: {
      "name": "fade",
      "mode": "out-in"
    }
  }, [_vm.$fetchState.pending === false && !_vm.$fetchState.error ? _c('div', {
    staticClass: "grid gap-x-4 gap-y-2 grid-cols-1 md:grid-cols-2"
  }, [_c(_vm.prev ? 'SmartLink' : 'div', {
    tag: "component",
    staticClass: "rounded-lg card-base flex items-center space-x-2",
    class: !_vm.prev ? 'cursor-not-allowed' : 'dark:hover:text-white hover:bg-opacity-40',
    attrs: {
      "href": _vm.prev && `/blog/${_vm.prev.slug}`
    }
  }, [_c('IconChevron', {
    staticClass: "h-4 w-4 flex-shrink-0",
    attrs: {
      "left": ""
    }
  }), _vm._v(" "), _vm.prev ? _c('span', {
    staticClass: "truncate"
  }, [_vm._v(_vm._s(_vm.prev.title))]) : _c('span', {
    staticClass: "truncate"
  }, [_vm._v("No Older Posts")])], 1), _vm._v(" "), _c(_vm.next ? 'SmartLink' : 'div', {
    tag: "component",
    staticClass: "rounded-lg card-base flex items-center space-x-2 justify-end",
    class: !_vm.next ? 'cursor-not-allowed' : 'dark:hover:text-white hover:bg-opacity-40',
    attrs: {
      "href": _vm.next && `/blog/${_vm.next.slug}`
    }
  }, [_vm.next ? _c('span', {
    staticClass: "truncate"
  }, [_vm._v(_vm._s(_vm.next.title))]) : _c('span', {
    staticClass: "truncate"
  }, [_vm._v("No Newer Posts")]), _vm._v(" "), _c('IconChevron', {
    staticClass: "h-4 w-4 flex-shrink-0",
    attrs: {
      "right": ""
    }
  })], 1)], 1) : _vm._e()]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./src/components/Blog/PrevNext.vue?vue&type=template&id=32958a67&

// EXTERNAL MODULE: external "vue"
var external_vue_ = __webpack_require__(0);
var external_vue_default = /*#__PURE__*/__webpack_require__.n(external_vue_);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--12-0!./node_modules/ts-loader??ref--12-1!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/windicss-webpack-plugin/dist/loaders/windicss-template.cjs!./src/components/Blog/PrevNext.vue?vue&type=script&lang=ts&

/* harmony default export */ var PrevNextvue_type_script_lang_ts_ = (external_vue_default.a.extend({
  props: {
    currentSlug: {
      type: String,
      required: true,
      default: null
    }
  },
  data() {
    return {
      prev: {},
      next: {}
    };
  },
  async fetch() {
    const [prev, next] = await this.$content("blog").only(["title", "slug"]).sortBy("createdAt", "asc").surround(this.currentSlug).fetch();
    this.prev = prev;
    this.next = next;
  }
}));
// CONCATENATED MODULE: ./src/components/Blog/PrevNext.vue?vue&type=script&lang=ts&
 /* harmony default export */ var Blog_PrevNextvue_type_script_lang_ts_ = (PrevNextvue_type_script_lang_ts_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./src/components/Blog/PrevNext.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  Blog_PrevNextvue_type_script_lang_ts_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "2b8cd7c8"
  
)

/* harmony default export */ var PrevNext = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {IconChevron: __webpack_require__(28).default})


/***/ })

};;
//# sourceMappingURL=blog-prev-next.js.map