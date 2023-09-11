exports.ids = [12];
exports.modules = {

/***/ 162:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/windicss-webpack-plugin/dist/loaders/windicss-template.cjs!./src/components/Blog/TableOfContents.vue?vue&type=template&id=6120b552&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c,
    _setup = _vm._self._setupProxy;
  return _vm.toc && _vm.toc.length > 0 ? _c('div', {
    staticClass: "flex flex-col space-y-2 mb-6 p-4 border-2 border-gray-200 dark:border-dark-200"
  }, [_vm._ssrNode("<div class=\"cursor-pointer flex font-medium space-x-1 text-sm transition-colors text-gray-500 items-center dark:text-gray-200 hover:text-gray-700 dark:hover:text-white/40 select-none\">", "</div>", [_vm._ssrNode("<h1 class=\"uppercase\">Table of Contents</h1> "), _c('transition', {
    attrs: {
      "name": "fade",
      "mode": "out-in"
    }
  }, [!_vm.tocToggled ? _c('IconChevron', {
    key: "'tocToggled'",
    staticClass: "h-4 w-4",
    attrs: {
      "right": ""
    }
  }) : _c('IconChevron', {
    key: "'tocToggledFalse'",
    staticClass: "h-4 w-4",
    attrs: {
      "down": ""
    }
  })], 1)], 2), _vm._ssrNode(" <ul class=\"flex flex-wrap gap-2 items-center grid\"" + _vm._ssrStyle(null, null, {
    display: _vm.tocToggled === true ? '' : 'none'
  }) + ">" + _vm._ssrList(_vm.toc || [], function (link) {
    return "<li class=\"text-sm transition-colors text-dark-400 dark:text-white/30 hover:text-dark-700 dark:hover:text-white/60\"" + _vm._ssrStyle(null, `padding-left: ${(link.depth - 1) * 1.5}rem`, null) + ">" + (link.id ? "<a" + _vm._ssrAttr("href", `#${link.id}`) + ">" + _vm._ssrEscape("\n        " + _vm._s(link.text) + "\n      ") + "</a>" : "<!---->") + "</li>";
  }) + "</ul>")], 2) : _vm._e();
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./src/components/Blog/TableOfContents.vue?vue&type=template&id=6120b552&

// EXTERNAL MODULE: external "vue"
var external_vue_ = __webpack_require__(0);
var external_vue_default = /*#__PURE__*/__webpack_require__.n(external_vue_);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--12-0!./node_modules/ts-loader??ref--12-1!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/windicss-webpack-plugin/dist/loaders/windicss-template.cjs!./src/components/Blog/TableOfContents.vue?vue&type=script&lang=ts&

/* harmony default export */ var TableOfContentsvue_type_script_lang_ts_ = (external_vue_default.a.extend({
  props: {
    toc: {
      type: Array,
      required: true,
      default: () => []
    }
  },
  data() {
    return {
      tocToggled: false
    };
  }
}));
// CONCATENATED MODULE: ./src/components/Blog/TableOfContents.vue?vue&type=script&lang=ts&
 /* harmony default export */ var Blog_TableOfContentsvue_type_script_lang_ts_ = (TableOfContentsvue_type_script_lang_ts_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./src/components/Blog/TableOfContents.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  Blog_TableOfContentsvue_type_script_lang_ts_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "a5b7cebe"
  
)

/* harmony default export */ var TableOfContents = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {IconChevron: __webpack_require__(30).default})


/***/ })

};;
//# sourceMappingURL=blog-table-of-contents.js.map