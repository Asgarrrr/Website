exports.ids = [77,0,20,35,53,65,66,67,68,69];
exports.modules = {

/***/ 114:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/windicss-webpack-plugin/dist/loaders/windicss-template.cjs!./src/components/Card/Repository.vue?vue&type=template&id=47d68ded&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c,
    _setup = _vm._self._setupProxy;
  return _c('div', {
    staticClass: "rounded-lg card-base"
  }, [_vm._ssrNode("<div class=\"space-y-2\">", "</div>", [_vm._ssrNode("<div" + _vm._ssrClass(null, _vm.top && 'flex justify-between space-x-2') + ">", "</div>", [_vm._ssrNode("<h3 class=\"text-black/90 dark:text-white/90 items-center truncate space-x-1\"><span class=\"text-black/50 dark:text-white/30\">Asgarrrr/</span><span>" + _vm._ssrEscape(_vm._s(_vm.name)) + "</span></h3> "), _vm.top === true ? _c('IconStar', {
    staticClass: "h-6 text-yellow-600 w-6",
    attrs: {
      "title": "Top repository",
      "filled": ""
    }
  }) : _vm._e()], 2), _vm._ssrNode(" <p class=\"text-black/50 dark:text-white/30 line-clamp-2\">" + _vm._ssrEscape("\n      " + _vm._s(_vm.description) + "\n    ") + "</p>")], 2), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"mt-4\">", "</div>", [_vm._ssrNode("<div class=\"flex items-center justify-between text-black/50 dark:text-white/30\"><span>Stars:</span> <span>" + _vm._ssrEscape(_vm._s(_vm.stars)) + "</span></div> "), _vm._ssrNode("<div class=\"flex items-center justify-between text-black/50 dark:text-white/30\">", "</div>", [_vm._ssrNode("<span>Language:</span> "), _c('IconDev', {
    staticClass: "h-5 w-5",
    attrs: {
      "brand": _vm.getLanguageIcon
    }
  })], 2), _vm._ssrNode(" " + (_vm.license ? "<div class=\"flex items-center justify-between text-black/50 dark:text-white/30\"><span>License:</span> <span>" + _vm._ssrEscape(_vm._s(_vm.license)) + "</span></div>" : "<!---->"))], 2)], 2);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./src/components/Card/Repository.vue?vue&type=template&id=47d68ded&

// EXTERNAL MODULE: external "vue"
var external_vue_ = __webpack_require__(0);
var external_vue_default = /*#__PURE__*/__webpack_require__.n(external_vue_);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--12-0!./node_modules/ts-loader??ref--12-1!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/windicss-webpack-plugin/dist/loaders/windicss-template.cjs!./src/components/Card/Repository.vue?vue&type=script&lang=ts&

/* harmony default export */ var Repositoryvue_type_script_lang_ts_ = (external_vue_default.a.extend({
  props: {
    name: {
      type: String,
      required: true
    },
    language: {
      type: String,
      required: false,
      default: null
    },
    stars: {
      type: [String, Number],
      required: true
    },
    top: {
      type: Boolean,
      required: false,
      default: false
    },
    license: {
      type: String,
      required: false,
      default: null
    },
    description: {
      type: String,
      required: true
    }
  },
  computed: {
    /**
     * Returns proper name for the language icon.
     * @returns {string}
     */
    getLanguageIcon() {
      const icons = {
        Vue: "Vue.js"
      };
      // @ts-ignore-next-line
      return icons[this.language] || this.language;
    }
  }
}));
// CONCATENATED MODULE: ./src/components/Card/Repository.vue?vue&type=script&lang=ts&
 /* harmony default export */ var Card_Repositoryvue_type_script_lang_ts_ = (Repositoryvue_type_script_lang_ts_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./src/components/Card/Repository.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  Card_Repositoryvue_type_script_lang_ts_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "76edfc6a"
  
)

/* harmony default export */ var Repository = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {IconStar: __webpack_require__(88).default,IconDev: __webpack_require__(89).default})


/***/ }),

/***/ 150:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/windicss-webpack-plugin/dist/loaders/windicss-template.cjs!./src/pages/me/repos.vue?vue&type=template&id=0b8b35ee&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c,
    _setup = _vm._self._setupProxy;
  return _c('PageLayout', {
    attrs: {
      "title": "Repositories",
      "description": "My public projects on GitHub."
    }
  }, [_vm.$fetchState.pending === true ? _c('div', {
    staticClass: "grid gap-4 md:grid-cols-2"
  }, _vm._l(9, function (i) {
    return _c('SkeletonLoader', {
      key: `skeleton-${i}`,
      attrs: {
        "type": "repository"
      }
    });
  }), 1) : _c('div', {
    staticClass: "grid gap-4 md:grid-cols-2"
  }, _vm._l(_vm.repos, function (repo, index) {
    return _c('SmartLink', {
      key: `repo-${index}`,
      attrs: {
        "href": repo.html_url,
        "blank": ""
      }
    }, [_c('CardRepository', {
      staticClass: "h-full",
      attrs: {
        "name": repo.name,
        "language": repo.language,
        "stars": repo.stargazers_count,
        "description": repo.description,
        "license": repo.license && repo.license.spdx_id,
        "top": index === 0
      }
    })], 1);
  }), 1)]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./src/pages/me/repos.vue?vue&type=template&id=0b8b35ee&

// EXTERNAL MODULE: external "vue"
var external_vue_ = __webpack_require__(0);
var external_vue_default = /*#__PURE__*/__webpack_require__.n(external_vue_);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--12-0!./node_modules/ts-loader??ref--12-1!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/windicss-webpack-plugin/dist/loaders/windicss-template.cjs!./src/pages/me/repos.vue?vue&type=script&lang=ts&

/* harmony default export */ var reposvue_type_script_lang_ts_ = (external_vue_default.a.extend({
  data() {
    return {
      repos: []
    };
  },
  fetchOnServer: false,
  async fetch() {
    var _a;
    // Avoid showing these repositories
    const filter = ["Asgarrrr"];
    const repos = (await this.$axios.get("https://api.github.com/users/asgarrrr/repos?per_page=100")).data;
    this.repos = (_a = repos === null || repos === void 0 ? void 0 : repos.filter(repo => repo.fork === false && !filter.includes(repo.name))) === null || _a === void 0 ? void 0 : _a.sort((a, b) => (b === null || b === void 0 ? void 0 : b.stargazers_count) - (a === null || a === void 0 ? void 0 : a.stargazers_count));
  },
  head() {
    const title = "GitHub Repositories";
    const description = "My public projects hosted on GitHub.";
    return {
      title,
      meta: this.$prepareMeta({
        title,
        description
      })
    };
  }
}));
// CONCATENATED MODULE: ./src/pages/me/repos.vue?vue&type=script&lang=ts&
 /* harmony default export */ var me_reposvue_type_script_lang_ts_ = (reposvue_type_script_lang_ts_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./src/pages/me/repos.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  me_reposvue_type_script_lang_ts_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "9e95b9a2"
  
)

/* harmony default export */ var repos = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {SkeletonLoader: __webpack_require__(75).default,CardRepository: __webpack_require__(114).default,SmartLink: __webpack_require__(16).default,PageLayout: __webpack_require__(81).default})


/***/ }),

/***/ 75:
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
  "0043e6dc"
  
)

/* harmony default export */ var Index = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {SkeletonLoaderRepository: __webpack_require__(77).default,SkeletonLoaderIframe: __webpack_require__(76).default,SkeletonLoaderSong: __webpack_require__(78).default,SkeletonLoaderLastfm: __webpack_require__(80).default,SkeletonLoaderSpinner: __webpack_require__(79).default})


/***/ }),

/***/ 76:
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
  "24989e14"
  
)

/* harmony default export */ var Iframe = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 77:
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
  "4083f08c"
  
)

/* harmony default export */ var Repository = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 78:
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
  "7e074605"
  
)

/* harmony default export */ var Song = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 79:
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
  "12d3b059"
  
)

/* harmony default export */ var Spinner = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 80:
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
  "659528cd"
  
)

/* harmony default export */ var Lastfm = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {SkeletonLoader: __webpack_require__(75).default})


/***/ }),

/***/ 81:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/windicss-webpack-plugin/dist/loaders/windicss-template.cjs!./src/components/PageLayout.vue?vue&type=template&id=238cef4c&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c,
    _setup = _vm._self._setupProxy;
  return _c('div', {
    staticClass: "text-black/50 dark:text-white/30"
  }, [_vm._ssrNode("<header class=\"space-y-2 my-12\"><h1 class=\"text-black/90 dark:text-white/90 text-4xl font-semibold\">" + _vm._ssrEscape("\n      " + _vm._s(_vm.title) + "\n    ") + "</h1> " + _vm._ssrList(_vm.getDescriptions, function (description, index) {
    return "<p>" + _vm._ssrEscape("\n      " + _vm._s(description) + "\n    ") + "</p>";
  }) + "</header> "), _vm._t("default")], 2);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./src/components/PageLayout.vue?vue&type=template&id=238cef4c&

// EXTERNAL MODULE: external "vue"
var external_vue_ = __webpack_require__(0);
var external_vue_default = /*#__PURE__*/__webpack_require__.n(external_vue_);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--12-0!./node_modules/ts-loader??ref--12-1!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/windicss-webpack-plugin/dist/loaders/windicss-template.cjs!./src/components/PageLayout.vue?vue&type=script&lang=ts&

/* harmony default export */ var PageLayoutvue_type_script_lang_ts_ = (external_vue_default.a.extend({
  props: {
    title: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: false,
      default: []
    }
  },
  computed: {
    getDescriptions() {
      return typeof this.description === "string" ? [this.description] : this.description;
    }
  }
}));
// CONCATENATED MODULE: ./src/components/PageLayout.vue?vue&type=script&lang=ts&
 /* harmony default export */ var components_PageLayoutvue_type_script_lang_ts_ = (PageLayoutvue_type_script_lang_ts_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./src/components/PageLayout.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_PageLayoutvue_type_script_lang_ts_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "39588bd6"
  
)

/* harmony default export */ var PageLayout = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 88:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/windicss-webpack-plugin/dist/loaders/windicss-template.cjs!./src/components/Icon/Star.vue?vue&type=template&id=3a11b7dd&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c,
    _setup = _vm._self._setupProxy;
  return _vm.filled === false ? _c('svg', {
    attrs: {
      "xmlns": "http://www.w3.org/2000/svg",
      "fill": "none",
      "viewBox": "0 0 24 24",
      "stroke": "currentColor"
    }
  }, [_vm._ssrNode("<path stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z\"></path>")], 2) : _c('svg', {
    attrs: {
      "xmlns": "http://www.w3.org/2000/svg",
      "viewBox": "0 0 20 20",
      "fill": "currentColor"
    }
  }, [_vm._ssrNode("<path d=\"M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z\"></path>")]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./src/components/Icon/Star.vue?vue&type=template&id=3a11b7dd&

// EXTERNAL MODULE: external "vue"
var external_vue_ = __webpack_require__(0);
var external_vue_default = /*#__PURE__*/__webpack_require__.n(external_vue_);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--12-0!./node_modules/ts-loader??ref--12-1!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/windicss-webpack-plugin/dist/loaders/windicss-template.cjs!./src/components/Icon/Star.vue?vue&type=script&lang=ts&

/* harmony default export */ var Starvue_type_script_lang_ts_ = (external_vue_default.a.extend({
  props: {
    filled: {
      type: Boolean,
      required: false,
      default: false
    }
  }
}));
// CONCATENATED MODULE: ./src/components/Icon/Star.vue?vue&type=script&lang=ts&
 /* harmony default export */ var Icon_Starvue_type_script_lang_ts_ = (Starvue_type_script_lang_ts_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./src/components/Icon/Star.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  Icon_Starvue_type_script_lang_ts_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "6f6d23ae"
  
)

/* harmony default export */ var Star = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 89:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/windicss-webpack-plugin/dist/loaders/windicss-template.cjs!./src/components/Icon/Dev.vue?vue&type=template&id=09b2f521&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c,
    _setup = _vm._self._setupProxy;
  return _vm.isSame('JavaScript') ? _c('svg', {
    attrs: {
      "xmlns": "http://www.w3.org/2000/svg",
      "viewBox": "0 0 512 512",
      "fill": "#EFD81D"
    }
  }, [_vm._ssrNode("<path d=\"M0 0v512h512V0H0zm274.286 397.714c0 49.84-29.44 74.137-72.057 74.137-38.492 0-60.835-19.931-72.172-43.988l39.177-23.714c7.555 13.405 13.292 24.742 29.783 24.742 13.714 0 24.983-6.182 24.983-30.24V237.714h50.286v160zm113.543 72.995c-44.675 0-73.543-20.16-87.635-48L339.429 400c10.285 16.846 23.714 28.069 47.428 28.069 19.932 0 31.509-8.823 31.509-22.572 0-16.491-11.92-22.331-33.92-32l-12.023-5.166c-34.72-14.765-57.737-33.325-57.737-72.514 0-36.08 27.485-62.434 70.445-62.434 30.595 0 52.572 9.508 68.4 37.348L416 294.857c-8.251-14.777-17.143-20.571-30.926-20.571-14.091 0-23.028 8.937-23.028 20.571 0 14.434 8.937 20.274 29.554 29.212l12.023 5.154c40.903 17.531 63.931 35.428 63.931 75.611.012 43.315-34.011 65.875-79.725 65.875z\"></path>")], 2) : _vm.isSame('TypeScript') ? _c('svg', {
    attrs: {
      "viewBox": "0 0 24 24",
      "fill": "none",
      "xmlns": "http://www.w3.org/2000/svg"
    }
  }, [_vm._ssrNode("<path d=\"M0 0h24v24H0V0z\" fill=\"#fff\"></path> <path d=\"M0 12v12h24V0H0v12zm19.34-.956c.61.152 1.075.423 1.502.865.221.236.549.667.575.77.008.03-1.036.73-1.669 1.123-.022.015-.114-.083-.217-.236-.309-.45-.632-.644-1.128-.678-.727-.05-1.2.332-1.192.967a.88.88 0 00.103.45c.16.332.457.53 1.39.934 1.718.739 2.453 1.226 2.91 1.92.51.773.625 2.008.278 2.926-.38.998-1.325 1.676-2.655 1.9-.411.073-1.386.062-1.828-.018-.964-.171-1.878-.647-2.442-1.272-.221-.244-.651-.88-.625-.926.011-.015.11-.076.221-.141l.892-.514.69-.4.145.213c.201.31.643.732.91.873.766.404 1.817.346 2.335-.118.221-.202.312-.412.312-.72 0-.279-.033-.4-.178-.61-.187-.266-.568-.49-1.65-.96-1.239-.533-1.772-.864-2.26-1.39a3.167 3.167 0 01-.659-1.2c-.091-.34-.114-1.189-.042-1.531.255-1.2 1.158-2.031 2.462-2.279.422-.08 1.406-.05 1.82.054v-.002zm-5.633 1.001l.007.983H10.59v8.876H8.381v-8.876H5.257v-.964l.027-.99c.01-.015 1.912-.022 4.217-.019l4.194.012.012.978z\" fill=\"#007ACC\"></path>")]) : _vm.isSame('Vue.js') ? _c('svg', {
    attrs: {
      "xmlns": "http://www.w3.org/2000/svg",
      "viewBox": "0 0 512 512"
    }
  }, [_vm._ssrNode("<path d=\"M256 144.03l-55.49-96.11h-79.43L256 281.61 390.92 47.92h-79.43L256 144.03z\" fill=\"#35495E\"></path> <path d=\"M409.4 47.92L256 313.61 102.6 47.92H15.74L256 464.08 496.26 47.92H409.4z\" fill=\"#41B883\"></path>")]) : _vm.isSame('Nuxt.js') ? _c('svg', {
    attrs: {
      "viewBox": "0 0 124 124",
      "fill": "none",
      "xmlns": "http://www.w3.org/2000/svg"
    }
  }, [_vm._ssrNode("<path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M55.75 27.155c-3.222-5.54-11.278-5.54-14.5 0L6.134 87.535C2.912 93.075 6.94 100 13.384 100h27.413c-2.753-2.407-3.773-6.57-1.69-10.142L65.704 44.27 55.75 27.155z\" fill=\"#80EEC0\"></path> <path d=\"M78 40.4c2.667-4.533 9.333-4.533 12 0L119.06 89.8c2.667 4.533-.666 10.199-5.999 10.199H54.938c-5.333 0-8.666-5.666-6-10.199L78 40.4z\" fill=\"#00DC82\"></path>")]) : _vm.isSame('React.js') ? _c('svg', {
    attrs: {
      "viewBox": "0 0 25 25",
      "fill": "#61DAFB",
      "xmlns": "http://www.w3.org/2000/svg"
    }
  }, [_vm._ssrNode("<g width=\"25\" height=\"25\"><path d=\"M23.866 12.448c0-1.474-1.886-2.871-4.776-3.737.667-2.885.37-5.18-.936-5.915a2.065 2.065 0 00-1.038-.254v1.012c.213 0 .385.04.528.118.63.353.904 1.7.69 3.433-.05.426-.134.875-.236 1.334a22.89 22.89 0 00-2.941-.495 22.239 22.239 0 00-1.928-2.268c1.51-1.374 2.928-2.127 3.892-2.127V2.538c-1.274 0-2.942.889-4.628 2.43-1.686-1.532-3.354-2.412-4.628-2.412v1.011c.96 0 2.381.749 3.891 2.114a21.536 21.536 0 00-1.913 2.263 22.053 22.053 0 00-2.946.5 13.426 13.426 0 01-.24-1.316c-.219-1.733.05-3.08.676-3.438.138-.082.32-.118.532-.118V2.56a2.1 2.1 0 00-1.047.254c-1.301.734-1.593 3.025-.922 5.9-2.88.871-4.757 2.264-4.757 3.733 0 1.474 1.885 2.871 4.776 3.737-.667 2.885-.37 5.18.936 5.915.3.172.653.254 1.042.254 1.274 0 2.942-.89 4.628-2.431 1.686 1.533 3.354 2.412 4.627 2.412a2.1 2.1 0 001.047-.254c1.302-.734 1.594-3.025.922-5.9 2.872-.867 4.748-2.264 4.748-3.733zm-6.032-3.025a20.154 20.154 0 01-.625 1.791 24.54 24.54 0 00-1.274-2.15c.658.096 1.292.214 1.9.359zm-2.121 4.83a24.076 24.076 0 01-1.117 1.733 24.64 24.64 0 01-4.178.004 23.454 23.454 0 01-2.085-3.529 24.092 24.092 0 012.075-3.542 24.617 24.617 0 014.179-.004c.384.54.76 1.116 1.12 1.723.353.595.673 1.198.964 1.805a25.182 25.182 0 01-.958 1.81zm1.496-.59c.25.608.463 1.216.639 1.806a21.18 21.18 0 01-1.908.363 25.047 25.047 0 001.269-2.168zm-4.697 4.84c-.431-.436-.862-.92-1.288-1.451.417.018.843.031 1.274.031.435 0 .866-.009 1.287-.031-.417.53-.847 1.015-1.274 1.45zm-3.447-2.671a21.334 21.334 0 01-1.9-.359c.172-.585.385-1.188.626-1.791.19.362.39.725.607 1.088.218.363.44.717.667 1.062zm3.423-9.439c.431.435.862.92 1.288 1.451a29.29 29.29 0 00-1.274-.031c-.435 0-.866.009-1.288.031.417-.53.848-1.016 1.274-1.451zM9.06 9.064a24.949 24.949 0 00-1.269 2.164 19.156 19.156 0 01-.64-1.805c.608-.14 1.247-.263 1.91-.359zm-4.192 5.679c-1.64-.685-2.7-1.583-2.7-2.295s1.06-1.615 2.7-2.295a14.47 14.47 0 011.283-.458c.264.889.612 1.814 1.043 2.762a21.186 21.186 0 00-1.029 2.749c-.458-.141-.894-.295-1.297-.463zm2.492 6.481c-.63-.354-.903-1.7-.69-3.433.051-.427.134-.875.236-1.334.908.218 1.9.386 2.942.495a22.242 22.242 0 001.927 2.267c-1.51 1.375-2.928 2.128-3.891 2.128a1.125 1.125 0 01-.524-.123zm10.988-3.456c.218 1.733-.05 3.08-.676 3.438-.139.082-.32.118-.533.118-.959 0-2.38-.748-3.89-2.114a21.527 21.527 0 001.912-2.263 22.048 22.048 0 002.946-.499c.107.458.19.898.241 1.32zm1.784-3.025a14.44 14.44 0 01-1.283.458 21.491 21.491 0 00-1.043-2.762c.427-.944.77-1.864 1.029-2.749.458.141.894.295 1.301.463 1.64.685 2.701 1.583 2.701 2.295-.005.712-1.065 1.615-2.705 2.295z\"></path> <path d=\"M12.498 14.52c1.169 0 2.117-.927 2.117-2.072s-.948-2.073-2.117-2.073c-1.17 0-2.117.928-2.117 2.073s.947 2.073 2.117 2.073z\"></path></g>")]) : _vm.isSame('Node.js') ? _c('svg', {
    attrs: {
      "xmlns": "http://www.w3.org/2000/svg",
      "fill": "#6FA660",
      "viewBox": "0 0 512 512"
    }
  }, [_vm._ssrNode("<path d=\"M429.76 130.07L274.33 36.85a37 37 0 00-36.65 0L82.24 130.06A38.2 38.2 0 0064 162.83V349a38.26 38.26 0 0018.24 32.8L123 406.14l.23.13c20.58 10.53 28.46 10.53 37.59 10.53 32.14 0 52.11-20.8 52.11-54.29V182a8.51 8.51 0 00-8.42-8.58h-22.38a8.51 8.51 0 00-8.42 8.58v180.51a15 15 0 01-6.85 13.07c-5.9 3.6-14.47 2.84-24.14-2.15l-39.06-23.51a1.1 1.1 0 01-.48-.92V165.46a1.32 1.32 0 01.59-1.06l151.84-93a.82.82 0 01.73 0l151.93 93a1.34 1.34 0 01.55 1.1V349a1.28 1.28 0 01-.45 1l-152.06 90.65a1.22 1.22 0 01-.8 0l-38.83-23.06a7.8 7.8 0 00-7.83-.41l-.34.2c-10.72 6.35-13.6 8-23.54 11.62-1.62.59-5.43 2-5.76 5.77s3.29 6.45 6.51 8.32l51.9 31.87a35.67 35.67 0 0018.3 5.07h.58a35.87 35.87 0 0017.83-5.07l155.43-93.13A38.37 38.37 0 00448 349V162.83a38.21 38.21 0 00-18.24-32.76z\"></path> <path d=\"M307.88 318.05c-37.29 0-45.24-10.42-47.6-27.24a8.43 8.43 0 00-8.22-7.32h-19.8a8.44 8.44 0 00-8.26 8.58c0 14.58 5.12 62.17 83.92 62.17 24.38 0 44.66-5.7 58.63-16.49S388 311.26 388 292.55c0-37.55-24.5-47.83-72.75-54.55-49.05-6.82-49.05-10.29-49.05-17.89 0-5.47 0-18.28 35.46-18.28 25.23 0 38.74 3.19 43.06 20a8.35 8.35 0 008.06 6.67h19.87a8.24 8.24 0 006.16-2.86 8.91 8.91 0 002.12-6.44c-2.57-35.55-28.56-53.58-79.24-53.58-46.06 0-73.55 20.75-73.55 55.5 0 38.1 28.49 48.87 71.29 53.33 50 5.17 50 12.71 50 19.37.03 10.38-4.28 24.23-41.55 24.23z\"></path>")]) : _vm.isSame('PHP') ? _c('svg', {
    attrs: {
      "viewBox": "0 0 24 24",
      "fill": "none",
      "xmlns": "http://www.w3.org/2000/svg"
    }
  }, [_vm._ssrNode("<g clip-path=\"url(#prefix__clip0)\" fill=\"#8B5CF6\"><path d=\"M2.778 8.054h3.098c.91.01 1.569.354 1.977 1.03.409.677.544 1.6.405 2.772a6.6 6.6 0 01-.358 1.576c-.178.515-.424.98-.74 1.393-.386.526-.798.859-1.237 1-.44.142-.894.212-1.364.212H3.17l-.44 2.879H1.126L2.778 8.054zm1.353 1.727l-.694 4.545c.046.01.093.015.139.015h.162c.74.01 1.356-.086 1.85-.288.493-.212.824-.95.994-2.212.138-1.06 0-1.671-.417-1.833-.408-.161-.92-.237-1.537-.227-.093.01-.181.015-.266.015h-.243l.012-.015M10.088 5.16h1.596l-.451 2.894h1.433c.787.02 1.372.233 1.758.636.393.404.508 1.172.346 2.303l-.774 5.044h-1.619l.74-4.817c.077-.505.054-.863-.07-1.075-.122-.212-.388-.318-.797-.318l-1.283-.016-.948 6.226H8.424l1.664-10.876zM16.484 8.054h3.098c.91.01 1.568.354 1.977 1.03.408.677.543 1.6.404 2.772a6.6 6.6 0 01-.358 1.576c-.177.515-.424.98-.74 1.393-.385.526-.798.859-1.237 1-.44.142-.894.212-1.364.212h-1.387l-.44 2.879H14.83l1.654-10.862zm1.352 1.727l-.693 4.545c.046.01.092.015.138.015h.162c.74.01 1.357-.086 1.85-.288.493-.212.825-.95.994-2.212.139-1.06 0-1.671-.416-1.833-.409-.161-.921-.237-1.538-.227-.092.01-.18.015-.266.015h-.242l.011-.015\"></path></g> <defs><clipPath id=\"prefix__clip0\"><path fill=\"#fff\" transform=\"translate(1.125 4.875)\" d=\"M0 0h21.813v14.291H0z\"></path></clipPath></defs>")]) : _vm.isSame('Sass') ? _c('svg', {
    staticClass: "ionicon",
    attrs: {
      "xmlns": "http://www.w3.org/2000/svg",
      "viewBox": "0 0 512 512",
      "fill": "#cf649a"
    }
  }, [_vm._ssrNode("<path d=\"M511.78 328.07c-1.47-11.92-7.51-22.26-18-30.77a3.58 3.58 0 00-.43-.44l-.53-.38-.17-.12-5.57-4-.19-.14-.71-.5a3.5 3.5 0 00-.83-.35c-17.62-10.49-46.79-17.84-91.42-2.09-10.65-17.92-11.86-32.28-4.73-54.28 1.27-3.83.09-6.36-3.71-8-7.64-3.25-18.1-1.59-25.52.37-3.46.9-5.54 2.86-6.2 5.83-4.7 22-18.36 42.1-31.57 61.5l-.78 1.14c-8.14-17.26-6.45-30.63-.78-47.38 1.13-3.34.24-5.56-2.89-7.22-8.74-4.51-21.85-1.41-27.07.13-6.62 1.93-13.72 19.82-21.65 41.24-2 5.39-3.72 10-4.75 12.15-2.45 5-4.79 10.7-7.27 16.75-5.6 13.69-11.91 29.1-20.93 38.78-3.28-7.25 1.88-18.68 6.89-29.77 5.93-13.11 11.53-25.5 5.08-33.41a11.82 11.82 0 00-8.33-4.32 13.26 13.26 0 00-6.15 1c.67-5.65.7-10.11-.95-15.5-2.36-7.69-8.49-12-16.93-11.77-19.22.56-35.48 14.88-45.75 26.8-6.84 8-22 14.1-35.31 19.45-5.26 2.23-10.26 4.23-14.43 6.23-6.65-5.62-15.1-11.29-24-17.28-25-16.78-53.33-35.81-54.31-61.61-1.4-38.11 42-65.14 79.88-84.43 28.71-14.6 53.67-24.28 76.31-29.57 31.8-7.43 58.66-5.93 79.82 4.44 11.58 5.67 17 18 13.56 30.68-9 32.95-46.29 55.53-78.18 65.69-19.21 6.12-35.56 8.68-50 7.84-18.1-1.05-32.88-10.13-39.2-14a21.18 21.18 0 00-3.2-1.8l-.29-.07a3.21 3.21 0 00-3.19 1c-1.3 1.55-.84 4-.37 5.24 6.15 16.07 18.85 26.22 37.74 30.17a92.09 92.09 0 0018.78 1.79c44.21 0 100.62-25.49 121.34-46.48 14.13-14.3 24.42-29 28.68-54.35 4.45-26.55-13.55-45-31.89-53.5-44.57-20.57-95.19-12.44-129.81-2-40.5 12.21-82.4 34.41-114.94 60.93-40.12 32.67-54.62 63-43.12 90.25 11.81 27.93 40.61 45.4 68.46 62.3 9 5.45 17.56 10.64 25.27 16-2.32 1.13-4.69 2.28-7.1 3.43-23.38 11.33-49.9 24.08-64.61 45.15-10.68 15.35-12.68 30.63-5.94 45.42 3.6 7.87 10 13.21 18.89 15.87A50 50 0 0053 432c17.31 0 36.36-7 46.73-13.47 18.32-11.5 30.19-26.94 35.29-45.89 4.54-16.86 3.45-33.61-3.15-48.56l22.45-11.32c-10.83 36-2.53 57.5 6.59 69.36 3.36 4.37 9.42 7 16.19 7.12s13-2.43 16.52-6.77c6.66-8.25 11.58-17.9 16.11-27.55-.24 6.3.06 12.68 2.21 18.09 1.93 4.87 5.11 8.1 9.21 9.34 4.36 1.33 9.47.21 14.39-3.15 22.17-15.17 37.33-51.58 49.51-80.85 1.73-4.16 3.39-8.16 5-11.9a152.5 152.5 0 0012.5 31.07c1.18 2.14 1.08 3.08-.52 4.84-2.41 2.64-5.77 5.83-9.33 9.21-10.78 10.23-24.2 23-26 34.23-.7 4.5 2.4 8.6 7.21 9.53 14.47 2.88 31.9-1.33 46.64-11.25 13.4-9 18.44-21.55 15-37.19-3.33-15.06 4.27-33.76 22.59-55.62 3 12.53 7 22.66 12.52 31.53l-.15.12c-13.34 11.65-31.62 27.6-28.78 46.95a13.35 13.35 0 005.58 9.22 14.22 14.22 0 0011.2 2.06c17.47-3.67 30.62-11.06 40.18-22.57s6.07-24.27 2.85-34.17c25-6.78 47.26-6.61 68.1.5 11.7 4 20.09 10.57 24.93 19.64 6.09 11.41 2.8 21.94-9.29 29.65-3.71 2.37-5.5 3.82-5.61 5.65a2.65 2.65 0 001 2.23c1.4 1.15 5.72 3.15 15.49-3 9-5.65 14.28-13.34 15.63-23a39 39 0 00-.01-8.01zm-399.73 25.06l-.1 1.28c-1.56 14.64-9 27.4-22.15 38-8.26 6.66-17.23 10.75-25.25 11.53-5.6.54-9.67-.22-12.09-2.27-1.81-1.53-2.78-3.82-3-7-1.64-25.48 38.32-50.8 60.81-59.13a51.39 51.39 0 011.78 17.59zm102.35-71.86c-3.7 21.09-14.49 60.9-31.45 76.35-.81.74-1.49 1-1.8.93s-.55-.44-.8-1c-5.66-13.12-3.57-35.28 5-52.69 6.59-13.42 16-22.31 26.52-25a5.29 5.29 0 011.34-.19 1.58 1.58 0 011 .27 1.64 1.64 0 01.19 1.33zm83.49 76.88c-3.19 3.33-7.56 2.88-6.53 1.66l16.24-17.24c-1.31 5.93-5.18 10.84-9.71 15.58zm67.37-14.91a14.07 14.07 0 01-4.93 1.39c-.46-9.07 8.33-19.28 17-26.09 2.33 9.46-2.44 19.46-12.07 24.7z\"></path>")]) : _vm.isSame('HTML') ? _c('svg', {
    attrs: {
      "xmlns": "http://www.w3.org/2000/svg",
      "viewBox": "0 0 512 512",
      "fill": "#dd4b25"
    }
  }, [_vm._ssrNode("<path d=\"M64 32l34.94 403.21L255.77 480 413 435.15 448 32zm308 132H188l4 51h176l-13.51 151.39L256 394.48l-98.68-28-6.78-77.48h48.26l3.42 39.29L256 343.07l53.42-14.92L315 264H148l-12.59-149.59H376.2z\"></path>")]) : _vm.isSame('WordPress') ? _c('svg', {
    staticClass: "prefix__ionicon",
    attrs: {
      "xmlns": "http://www.w3.org/2000/svg",
      "viewBox": "0 0 512 512",
      "fill": "#3B82F6"
    }
  }, [_vm._ssrNode("<path d=\"M259 271.3L226.2 367h-.1l-25.4 73.1c1.8.5 3.5.9 5.3 1.4h.3a192.51 192.51 0 0049.5 6.5 157 157 0 0024.9-1.8 184.3 184.3 0 0032.5-7.1c2.6-.8 5.2-1.7 7.8-2.6-2.8-6-8.8-19.3-9.1-19.9zM80.8 180.5C70.8 203.1 64 230.9 64 256c0 6.3.3 12.6.9 18.8 6.9 71.2 52.9 131 116.1 157.9 2.6 1.1 5.3 2.2 8 3.2L96 180.6c-8-.3-9.5.2-15.2-.1z\"></path> <path d=\"M430.2 175.4a188 188 0 00-15.1-26.6c-1.6-2.4-3.4-4.8-5.1-7.2A193 193 0 00325.1 77a189.2 189.2 0 00-69.2-13 191.51 191.51 0 00-149.4 71.7A196 196 0 0089 161.3c14.2.1 31.8.1 33.8.1 18.1 0 46-2.2 46-2.2 9.4-.6 10.4 13.1 1.1 14.2 0 0-9.4 1.1-19.8 1.6L213 362l37.8-113.3-26.8-73.6c-9.4-.5-18.1-1.6-18.1-1.6-9.4-.5-8.2-14.8 1-14.2 0 0 28.5 2.2 45.5 2.2 18.1 0 46-2.2 46-2.2 9.3-.6 10.5 13.1 1.1 14.2 0 0-9.3 1.1-19.7 1.6l62.3 185.6 17.3-57.6c8.7-22.4 13.1-40.9 13.1-55.7 0-21.3-7.7-36.1-14.3-47.6-8.7-14.3-16.9-26.3-16.9-40.4 0-15.9 12-30.7 29-30.7h2.2c26.2-.7 34.8 25.3 35.9 43v.6c.4 7.2.1 12.5.1 18.8 0 17.4-3.3 37.1-13.1 61.8l-39 112.8-22.3 65.7c1.8-.8 3.5-1.6 5.3-2.5 56.7-27.4 98-82 106.7-146.7a172.07 172.07 0 001.9-26 191.11 191.11 0 00-17.8-80.8z\"></path> <path d=\"M256 48a208.06 208.06 0 0181 399.66A208.06 208.06 0 01175 64.34 206.7 206.7 0 01256 48m0-16C132.29 32 32 132.29 32 256s100.29 224 224 224 224-100.29 224-224S379.71 32 256 32z\"></path>")]) : _vm.isSame('Tailwind CSS') ? _c('svg', {
    attrs: {
      "viewBox": "0 0 24 24",
      "fill": "none",
      "xmlns": "http://www.w3.org/2000/svg"
    }
  }, [_vm._ssrNode("<path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M6.333 9.933C7.088 6.911 8.978 5.4 12 5.4c4.533 0 5.1 3.4 7.367 3.967 1.511.377 2.833-.189 3.966-1.7-.755 3.022-2.644 4.533-5.666 4.533-4.534 0-5.1-3.4-7.367-3.967-1.511-.378-2.833.189-3.967 1.7zm-5.666 6.8C1.422 13.711 3.31 12.2 6.333 12.2c4.534 0 5.1 3.4 7.367 3.967 1.51.377 2.833-.19 3.967-1.7C16.91 17.489 15.022 19 12 19c-4.533 0-5.1-3.4-7.367-3.967-1.511-.378-2.833.189-3.966 1.7z\" fill=\"url(#prefix__paint0_linear)\"></path> "), _vm._ssrNode("<defs>", "</defs>", [_c('linearGradient', {
    attrs: {
      "id": "prefix__paint0_linear",
      "x1": ".667",
      "y1": "-6.689",
      "x2": "23.333",
      "y2": "31.089",
      "gradientUnits": "userSpaceOnUse"
    }
  }, [_c('stop', {
    attrs: {
      "stop-color": "#2383AE"
    }
  }), _vm._v(" "), _c('stop', {
    attrs: {
      "offset": "1",
      "stop-color": "#6DD7B9"
    }
  })], 1)], 1)], 2) : _vm.isSame('CSS') ? _c('svg', {
    attrs: {
      "xmlns": "http://www.w3.org/2000/svg",
      "height": "210",
      "width": "210",
      "viewBox": "0 0 20 20"
    }
  }, [_vm._ssrNode("<path fill=\"#1769aa\" fill-rule=\"evenodd\" d=\"m1.5 0l1.594 18.056L10 20l6.906-1.944L18.5 0h-17Zm13.577 5.852L9.994 8.125l-.013.005h4.917l-.563 6.762l-4.334 1.323l-.007-.003v.003l-4.358-1.348l-.28-3.405h2.162l.14 1.764l2.316.611l.02-.006v.003l2.397-.706l.164-2.842l-2.561-.008l-4.78-.016l-.163-2.132l4.943-2.153l.288-.125H4.864l-.259-2.18h10.683l-.211 2.18Z\"></path>")]) : _vm.isSame('Windi CSS') ? _c('svg', {
    attrs: {
      "viewBox": "0 0 24 24",
      "fill": "none",
      "xmlns": "http://www.w3.org/2000/svg"
    }
  }, [_vm._ssrNode("<g clip-path=\"url(#prefix__prefix__clip0)\"><path d=\"M12.694 4.687A3.97 3.97 0 008.729.72c-2.304 0-3.682 1.728-3.682 3.4h2.266c0-.471.44-1.134 1.416-1.134.938 0 1.7.763 1.7 1.7 0 .937-.684 1.7-2.409 1.7H1.85v2.266h6.17c2.912 0 4.675-1.78 4.675-3.966zm0 0A3.97 3.97 0 008.729.72c-2.304 0-3.682 1.728-3.682 3.4h2.266c0-.471.44-1.134 1.416-1.134.938 0 1.7.763 1.7 1.7 0 .937-.684 1.7-2.409 1.7H1.85v2.266h6.17c2.912 0 4.675-1.78 4.675-3.966z\" fill=\"url(#prefix__prefix__paint0_linear)\"></path> <path d=\"M17.722 19.313a3.97 3.97 0 01-3.966 3.966c-2.305 0-3.683-1.728-3.683-3.4h2.267c0 .471.44 1.134 1.416 1.134.937 0 1.7-.763 1.7-1.7 0-.937-.862-1.7-2.409-1.7H6.2v-2.266h6.847c2.911 0 4.675 1.78 4.675 3.966zm0 0a3.97 3.97 0 01-3.966 3.966c-2.305 0-3.683-1.728-3.683-3.4h2.267c0 .471.44 1.134 1.416 1.134.937 0 1.7-.763 1.7-1.7 0-.937-.862-1.7-2.409-1.7H6.2v-2.266h6.847c2.911 0 4.675 1.78 4.675 3.966z\" fill=\"url(#prefix__prefix__paint1_linear)\"></path> <path d=\"M18.316 4.217c-2.5 0-4.263 1.901-4.263 4.401h2.008c0-1.243.902-2.145 2.255-2.145 1.354 0 2.03.902 2.03 2.145 0 1.243-.878 2.266-3.27 2.266H1.849v2.267h15.565c3.542 0 5.188-2.277 5.188-4.533 0-2.5-1.691-4.4-4.286-4.4z\" fill=\"url(#prefix__prefix__paint2_linear)\"></path> <path d=\"M4.82 15.347H1.849v2.286h2.97v-2.286z\" fill=\"url(#prefix__prefix__paint3_linear)\"></path></g> "), _vm._ssrNode("<defs>", "</defs>", [_c('linearGradient', {
    attrs: {
      "id": "prefix__prefix__paint0_linear",
      "x1": "3.653",
      "y1": "2.638",
      "x2": "16.737",
      "y2": "23.279",
      "gradientUnits": "userSpaceOnUse"
    }
  }, [_c('stop', {
    attrs: {
      "offset": ".078",
      "stop-color": "#54C8F1"
    }
  }), _vm._v(" "), _c('stop', {
    attrs: {
      "offset": ".573",
      "stop-color": "#41A2EF"
    }
  }), _vm._v(" "), _c('stop', {
    attrs: {
      "offset": "1",
      "stop-color": "#3386EE"
    }
  })], 1), _vm._ssrNode(" "), _c('linearGradient', {
    attrs: {
      "id": "prefix__prefix__paint1_linear",
      "x1": "3.653",
      "y1": "2.638",
      "x2": "16.737",
      "y2": "23.279",
      "gradientUnits": "userSpaceOnUse"
    }
  }, [_c('stop', {
    attrs: {
      "offset": ".078",
      "stop-color": "#54C8F1"
    }
  }), _vm._v(" "), _c('stop', {
    attrs: {
      "offset": ".573",
      "stop-color": "#41A2EF"
    }
  }), _vm._v(" "), _c('stop', {
    attrs: {
      "offset": "1",
      "stop-color": "#3386EE"
    }
  })], 1), _vm._ssrNode(" "), _c('linearGradient', {
    attrs: {
      "id": "prefix__prefix__paint2_linear",
      "x1": "3.653",
      "y1": "2.638",
      "x2": "16.737",
      "y2": "23.279",
      "gradientUnits": "userSpaceOnUse"
    }
  }, [_c('stop', {
    attrs: {
      "offset": ".078",
      "stop-color": "#54C8F1"
    }
  }), _vm._v(" "), _c('stop', {
    attrs: {
      "offset": ".573",
      "stop-color": "#41A2EF"
    }
  }), _vm._v(" "), _c('stop', {
    attrs: {
      "offset": "1",
      "stop-color": "#3386EE"
    }
  })], 1), _vm._ssrNode(" "), _c('linearGradient', {
    attrs: {
      "id": "prefix__prefix__paint3_linear",
      "x1": "3.653",
      "y1": "2.638",
      "x2": "16.737",
      "y2": "23.279",
      "gradientUnits": "userSpaceOnUse"
    }
  }, [_c('stop', {
    attrs: {
      "offset": ".078",
      "stop-color": "#54C8F1"
    }
  }), _vm._v(" "), _c('stop', {
    attrs: {
      "offset": ".573",
      "stop-color": "#41A2EF"
    }
  }), _vm._v(" "), _c('stop', {
    attrs: {
      "offset": "1",
      "stop-color": "#3386EE"
    }
  })], 1), _vm._ssrNode(" <clipPath id=\"prefix__prefix__clip0\"><path fill=\"#fff\" d=\"M0 0h24v24H0z\"></path></clipPath>")], 2)], 2) : _vm.isSame('Figma') ? _c('svg', {
    attrs: {
      "viewBox": "0 0 20 20",
      "fill": "none",
      "xmlns": "http://www.w3.org/2000/svg"
    }
  }, [_vm._ssrNode("<path d=\"M7.25 19c1.794 0 3.25-1.344 3.25-3v-3H7.25c-1.793 0-3.249 1.344-3.249 3s1.456 3 3.25 3z\" fill=\"#0ACF83\"></path> <path d=\"M4.001 10c0-1.656 1.456-3 3.25-3H10.5v6H7.25c-1.793 0-3.249-1.344-3.249-3z\" fill=\"#A259FF\"></path> <path d=\"M4.002 4c0-1.656 1.455-3 3.249-3h3.25v6H7.25C5.457 7 4 5.656 4 4z\" fill=\"#F24E1E\"></path> <path d=\"M10.5 1h3.25c1.793 0 3.249 1.344 3.249 3s-1.456 3-3.25 3H10.5V1z\" fill=\"#FF7262\"></path> <path d=\"M16.999 10c0 1.656-1.456 3-3.25 3-1.793 0-3.249-1.344-3.249-3s1.456-3 3.25-3c1.793 0 3.249 1.344 3.249 3z\" fill=\"#1ABCFE\"></path>")]) : _vm.isSame('Firebase') ? _c('svg', {
    attrs: {
      "viewBox": "0 0 32 32",
      "xmlns": "http://www.w3.org/2000/svg"
    }
  }, [_vm._ssrNode("<path fill=\"#ffc24a\" d=\"M5.8 24.6l.17-.237 8.02-15.214.017-.161-3.535-6.64a.656.656 0 00-1.227.207z\"></path> <path fill=\"#ffa712\" d=\"M5.9 24.42l.128-.25 7.937-15.056-3.526-6.666a.6.6 0 00-1.133.206z\"></path> <path fill=\"#f4bd62\" d=\"M16.584 14.01l2.632-2.7-2.633-5.021a.678.678 0 00-1.195 0l-1.407 2.682V9.2z\"></path> <path fill=\"#ffa50e\" d=\"M16.537 13.9l2.559-2.62-2.559-4.88a.589.589 0 00-1.074-.047l-1.414 2.729-.042.139z\"></path> <path fill=\"#f6820c\" d=\"M5.802 24.601l.077-.078.279-.113 10.26-10.222.13-.354-2.559-4.878-8.187 15.645z\"></path> <path fill=\"#fde068\" d=\"M16.912 29.756l9.288-5.179-2.654-16.331a.635.635 0 00-1.075-.346L5.8 24.6l9.233 5.155a1.927 1.927 0 001.878 0\"></path> <path fill=\"#fcca3f\" d=\"M26.115 24.534L23.483 8.326a.557.557 0 00-.967-.353L5.9 24.569l9.131 5.1a1.912 1.912 0 001.863 0z\"></path> <path fill=\"#eeab37\" d=\"M16.912 29.6a1.927 1.927 0 01-1.878 0l-9.158-5.078-.076.078 9.233 5.155a1.927 1.927 0 001.878 0l9.289-5.178-.023-.14z\"></path>")]) : _vm.isSame('Linux') ? _c('svg', {
    attrs: {
      "xmlns": "http://www.w3.org/2000/svg",
      "fill": "currentColor",
      "viewBox": "0 0 24 24"
    }
  }, [_vm._ssrNode("<path d=\"M20.581 19.049c-.55-.446-.336-1.431-.907-1.917.553-3.365-.997-6.331-2.845-8.232-1.551-1.595-1.051-3.147-1.051-4.49 0-2.146-.881-4.41-3.55-4.41-2.853 0-3.635 2.38-3.663 3.738-.068 3.262.659 4.11-1.25 6.484-2.246 2.793-2.577 5.579-2.07 7.057a2.924 2.924 0 01-1.155.835c-1.652.72-.441 1.925-.898 2.78a1.57 1.57 0 00-.192.74c0 .75.596 1.399 1.679 1.302 1.461-.13 2.809.905 3.681.905.77 0 1.402-.438 1.696-1.041 1.377-.339 3.077-.296 4.453.059.247.691.917 1.141 1.662 1.141 1.631 0 1.945-1.849 3.816-2.475.674-.225 1.013-.879 1.013-1.488 0-.39-.139-.761-.419-.988zM11.434 8.584c-.319 0-.583-.258-1-.568-.528-.392-1.065-.618-1.059-1.03 0-.283.379-.37.869-.681.526-.333.731-.671 1.249-.671.53 0 .69.268 1.41.579.708.307 1.201.427 1.201.773 0 .355-.741.609-1.158.868-.613.378-.928.73-1.512.73zm1.665-5.215c.882.141.981 1.691.559 2.454l-.355-.145c.184-.543.181-1.437-.435-1.494-.391-.036-.643.48-.697.922a1.686 1.686 0 00-.523-.127c.062-.923.658-1.737 1.451-1.61zM9.696 3.7c.676-.168 1.075.618 1.078 1.435l-.31.19c-.042-.343-.195-.897-.579-.779-.411.128-.344 1.083-.115 1.279l-.306.17c-.42-.707-.419-2.133.232-2.295zM7.581 22.943c-1.963-.893-2.63-.69-3.005-.69-.777 0-1.031-.579-.739-1.127.248-.465.171-.952.11-1.343-.094-.599-.111-.794.478-1.052.815-.346 1.177-.791 1.447-1.124.758-.937 1.523.537 2.15 1.85.407.851 1.208 1.282 1.455 2.225.227.871-.71 1.801-1.896 1.261zm6.987-1.874c-1.384.673-3.147.982-4.466.299-.195-.563-.507-.927-.843-1.293.539-.142.939-.814.46-1.489-.511-.721-1.555-1.224-2.61-2.04-.987-.763-1.299-2.644.045-4.746-.655 1.862-.272 3.578.057 4.069.068-.988.146-2.638 1.496-4.615.681-.998.691-2.316.706-3.14l.62.424c.456.337.838.708 1.386.708.81 0 1.258-.466 1.882-.853.244-.15.613-.302.923-.513.52 2.476 2.674 5.454 2.795 7.15.501-1.032-.142-3.514-.142-3.514.842 1.285.909 2.356.946 3.67.589.241 1.221.869 1.279 1.696l-.245-.028c-.126-.919-2.607-2.269-2.83-.539-1.19.181-.757 2.066-.997 3.288-.11.559-.314 1.001-.462 1.466zm4.846-.041c-.985.38-1.65 1.187-2.107 1.688-.88.966-2.044.503-2.168-.401-.131-.966.36-1.493.572-2.574.193-.987-.023-2.506.431-2.668.295 1.753 2.066 1.016 2.47.538.657 0 .712.222.859.837.092.385.219.709.578 1.09.418.447.29 1.133-.635 1.49zm-8-13.006c-.651 0-1.138-.433-1.534-.769-.203-.171.05-.487.253-.315.387.328.777.675 1.281.675.607 0 1.142-.519 1.867-.805.247-.097.388.285.143.382-.704.277-1.269.832-2.01.832z\"></path>")]) : _vm.isSame('PreMiD') ? _c('svg', {
    attrs: {
      "xmlns": "http://www.w3.org/2000/svg",
      "viewBox": "0 0 512 512",
      "fill": "currentColor"
    }
  }, [_vm._ssrNode("<path fill=\"currentColor\" d=\"M459.17 105H52.83a30.35 30.35 0 00-30.34 30.34v241.32A30.35 30.35 0 0052.83 407h406.34a30.35 30.35 0 0030.34-30.34V135.34A30.35 30.35 0 00459.17 105zm-185 94.4a13.93 13.93 0 019.9-4.11h90.29a14 14 0 010 28H284a14 14 0 01-9.9-23.91zm-63.64 63.11L92.14 330.83a7.51 7.51 0 01-11.27-6.51V187.68a7.51 7.51 0 0111.27-6.51l118.34 68.32a7.52 7.52 0 010 13.02zm231.28 50.09a13.93 13.93 0 01-9.9 4.11H284a14 14 0 010-28h147.91a14 14 0 019.9 23.91zm0-46.7a13.93 13.93 0 01-9.9 4.11H284a14 14 0 010-28h147.91a14 14 0 019.9 23.91z\"></path>")]) : _vm.isSame('PlayStore') ? _c('svg', {
    attrs: {
      "viewBox": "0 0 24 24",
      "fill": "none",
      "xmlns": "http://www.w3.org/2000/svg"
    }
  }, [_vm._ssrNode("<g clip-path=\"url(#prefix__prefix__clip0)\"><path d=\"M16.751 15.057c2.536-1.301 4.458-2.293 4.624-2.37.53-.263 1.078-.96 0-1.502-.348-.17-2.22-1.13-4.624-2.369l-3.331 3.143 3.331 3.098z\" fill=\"#FFD900\"></path> <path d=\"M13.42 11.96L2.812 21.947c.249.03.53-.03.862-.201.695-.356 8.071-4.12 13.077-6.69L13.42 11.96z\" fill=\"#F43249\"></path> <path d=\"M13.42 11.96l3.33-3.13S4.42 2.544 3.674 2.173a1.37 1.37 0 00-.878-.156L13.42 11.96z\" fill=\"#00EE76\"></path> <path d=\"M13.42 11.96L2.796 2.016C2.364 2.11 2 2.467 2 3.194v17.577c0 .666.282 1.146.812 1.192L13.42 11.96z\" fill=\"#00D3FF\"></path></g> <defs><clipPath id=\"prefix__prefix__clip0\"><path fill=\"#fff\" transform=\"translate(2 2)\" d=\"M0 0h20v20H0z\"></path></clipPath></defs>")]) : _vm.isSame('AppStore') ? _c('svg', {
    attrs: {
      "viewBox": "0 0 24 24",
      "fill": "none",
      "xmlns": "http://www.w3.org/2000/svg"
    }
  }, [_vm._ssrNode("<path d=\"M5.818 1h12.364A4.818 4.818 0 0123 5.818v12.364A4.818 4.818 0 0118.182 23H5.818A4.818 4.818 0 011 18.182V5.818A4.818 4.818 0 015.818 1z\" fill=\"url(#prefix__paint0_linear)\"></path> <path d=\"M8.05 16.968h.003L7.3 18.273a.994.994 0 11-1.722-.995l.554-.96.054-.092c.094-.136.329-.372.798-.327 0 0 1.103.12 1.183.693 0 0 .01.188-.116.377zm10.67-3.327h-2.346c-.16-.011-.23-.068-.257-.101l-.002-.003-2.511-4.35-.003.003-.15-.216c-.248-.378-.64.588-.64.588-.467 1.075.067 2.298.253 2.668l3.488 6.04a.994.994 0 101.722-.994l-.872-1.51c-.017-.037-.047-.136.132-.137h1.185a.994.994 0 000-1.989zm-4.557 1.351s.125.637-.359.637H5.133a.994.994 0 010-1.989h2.23c.36-.02.444-.228.444-.228h.002l2.91-5.04a.222.222 0 000-.203l-.96-1.665a.994.994 0 111.722-.994l.445.772.445-.77a.994.994 0 011.723.994l-4.05 7.013c-.017.043-.023.11.109.121h2.42v.024s1.4.022 1.59 1.328z\" fill=\"#fff\"></path> "), _vm._ssrNode("<defs>", "</defs>", [_c('linearGradient', {
    attrs: {
      "id": "prefix__paint0_linear",
      "x1": "12",
      "y1": "1",
      "x2": "12",
      "y2": "23",
      "gradientUnits": "userSpaceOnUse"
    }
  }, [_c('stop', {
    attrs: {
      "stop-color": "#17C9FB"
    }
  }), _vm._v(" "), _c('stop', {
    attrs: {
      "offset": "1",
      "stop-color": "#1A74E8"
    }
  })], 1)], 1)], 2) : _vm.isSame('website') ? _c('svg', {
    attrs: {
      "viewBox": "0 0 24 24",
      "fill": "none",
      "xmlns": "http://www.w3.org/2000/svg"
    }
  }, [_vm._ssrNode("<path d=\"M8.018 4.856c.482 0 .992.018 1.53.052.541.035 1.104.102 1.69.202v1.192a10.146 10.146 0 00-1.61-.3c-.27-.028-.539-.049-.808-.061-.269-.013-.536-.02-.802-.024-.129 0-.271.003-.427.01a12.56 12.56 0 00-1.62.131v1.708h4.102v1.155H5.971v1.887c.304.044.62.076.948.098.329.022.695.033 1.099.033.544 0 1.085-.026 1.624-.08a9.031 9.031 0 001.595-.305v1.193c-.585.1-1.146.167-1.685.201A23.84 23.84 0 018.036 12c-.481 0-.993-.017-1.534-.052a16.464 16.464 0 01-1.695-.201V5.11c.592-.1 1.156-.167 1.695-.202a23.826 23.826 0 011.516-.052zm7.734-.009c.473 0 .919.042 1.338.127.42.084.786.202 1.099.352.316.15.566.33.75.54.185.21.277.44.277.69v.76h-1.22v-.404a.589.589 0 00-.155-.385 1.337 1.337 0 00-.446-.323 2.79 2.79 0 00-.704-.221 4.71 4.71 0 00-.938-.085c-.338 0-.645.027-.92.08a3.114 3.114 0 00-.71.216 1.3 1.3 0 00-.454.324.59.59 0 00-.16.394v3.042c0 .137.053.269.16.394.106.122.258.23.455.324.197.09.433.162.709.216.275.053.582.08.92.08.35 0 .663-.027.938-.08.279-.057.513-.132.704-.226.194-.094.343-.202.446-.324a.589.589 0 00.155-.384v-.676c-.291 0-.552.008-.784.023-.228.016-.424.032-.587.047-.19.022-.36.046-.506.07l.122-1.135c.478-.038.929-.057 1.351-.057.567 0 1.108.029 1.624.085v2c0 .25-.092.48-.277.69a2.334 2.334 0 01-.75.534 4.67 4.67 0 01-1.099.352c-.42.082-.865.122-1.338.122-.472 0-.918-.04-1.337-.122a4.76 4.76 0 01-1.103-.352 2.345 2.345 0 01-.746-.535 1.022 1.022 0 01-.277-.69V6.556c0-.25.092-.48.277-.69.184-.21.433-.39.746-.54.316-.15.684-.268 1.103-.352.42-.085.865-.127 1.338-.127zm-7.847 8c.426 0 .837.027 1.234.08.4.05.76.138 1.075.263.32.122.58.288.784.497.207.21.327.471.361.784l-1.22.338a.599.599 0 00-.192-.46 1.278 1.278 0 00-.503-.286 3.18 3.18 0 00-.713-.15 7.862 7.862 0 00-.826-.043c-.278 0-.552.013-.821.038-.27.025-.512.072-.728.14a1.364 1.364 0 00-.516.287.618.618 0 00-.197.474v1.117h5.716v2.431c0 .21-.046.398-.14.564-.091.162-.218.305-.38.427-.16.119-.351.22-.573.305a4.56 4.56 0 01-.714.197c-.253.05-.52.086-.802.108a10.892 10.892 0 01-1.695 0 6.732 6.732 0 01-.793-.108 4.474 4.474 0 01-.7-.197A2.536 2.536 0 015 19.348a1.544 1.544 0 01-.395-.427c-.1-.163-.16-.351-.183-.564l1.22-.338c0 .194.066.352.198.474.131.122.303.218.516.287.216.069.459.115.728.14a8.876 8.876 0 001.647 0 3.38 3.38 0 00.713-.145c.21-.072.378-.169.503-.291a.613.613 0 00.192-.465v-1.145H4.422v-2.403c0-.21.046-.394.137-.554.093-.162.22-.303.38-.422a2.24 2.24 0 01.577-.305c.222-.085.462-.152.718-.202.26-.05.53-.086.812-.108.285-.022.571-.033.859-.033zm6.486.075c-.015.141-.03.291-.042.45-.01.16-.014.32-.014.48 0 .269.034.506.103.713.072.203.17.386.291.55.122.159.263.303.423.43.163.126.335.243.516.353a5.56 5.56 0 00.516-.352c.163-.128.305-.272.427-.432.126-.163.224-.346.296-.55.075-.206.113-.443.113-.713 0-.16-.006-.319-.019-.478a8.325 8.325 0 00-.047-.45c.257.009.5.026.732.05a13.671 13.671 0 011.202.165v1.192a8.382 8.382 0 00-.4-.103 7.647 7.647 0 00-.407-.085 2.807 2.807 0 01-.118.817 2.44 2.44 0 01-.76 1.136 4.61 4.61 0 01-.55.394l-.422.244v2.225c.41-.012.778-.04 1.103-.08.326-.04.604-.083.836-.127a9.2 9.2 0 00.718-.168v1.192c-.585.1-1.147.167-1.685.202a23.77 23.77 0 01-1.516.051c-.482 0-.994-.017-1.535-.051a16.464 16.464 0 01-1.694-.202v-1.192c.21.059.449.115.718.169.231.043.51.086.835.126.326.04.693.067 1.103.08v-2.225l-.413-.244a4.425 4.425 0 01-.554-.394 2.41 2.41 0 01-.756-1.136 2.807 2.807 0 01-.117-.817 2.657 2.657 0 00-.183.033 17.743 17.743 0 00-.46.108l-.173.047v-1.192a13.94 13.94 0 011.197-.164c.234-.025.48-.042.736-.052z\" fill=\"currentColor\"></path>")]) : _vm.isSame('UnblockPlease') ? _c('svg', {
    attrs: {
      "viewBox": "0 0 24 24",
      "fill": "none",
      "xmlns": "http://www.w3.org/2000/svg"
    }
  }, [_vm._ssrNode("<path d=\"M17.005 11.63V8.925A4.93 4.93 0 0012.081 4a4.93 4.93 0 00-4.925 4.925v.208h1.942v-.208a2.985 2.985 0 012.983-2.983 2.985 2.985 0 012.982 2.983v2.705H6V20h12.161v-8.37h-1.156zm-3.664 6.45H10.82l.678-2.035a1.316 1.316 0 01-.735-1.177 1.318 1.318 0 112.636 0c0 .517-.3.96-.735 1.177l.678 2.034z\" fill=\"currentColor\"></path>")]) : _vm.isSame('isinsideme') ? _c('svg', {
    attrs: {
      "viewBox": "0 0 24 24",
      "fill": "none",
      "xmlns": "http://www.w3.org/2000/svg"
    }
  }, [_vm._ssrNode("<path d=\"M3.997 13.077c0 .465.08.956.238 1.473.165.512.367.935.609 1.27H4.11c-.211-.3-.4-.708-.564-1.226a5.218 5.218 0 01-.238-1.517c0-.488.08-.994.238-1.517.165-.523.353-.935.564-1.235h.733c-.236.33-.436.753-.6 1.27-.165.5-.247.994-.247 1.482zm2.712-5.324c.833 0 1.534.137 2.105.41.576.269.984.668 1.223 1.199h-.599c-.2-.308-.522-.55-.966-.728-.44-.176-1.024-.265-1.754-.265-.405 0-.782.034-1.13.103a3.043 3.043 0 00-.915.325c-.263.142-.474.33-.633.565h-.6A2.58 2.58 0 014.742 8.13c.57-.251 1.227-.377 1.968-.377zm1.322 2.837c.259 0 .48.094.662.282a.887.887 0 01.282.662.897.897 0 01-.282.67.901.901 0 01-.662.273.941.941 0 01-.68-.273.912.912 0 01-.273-.67c0-.265.092-.489.274-.67a.922.922 0 01.68-.274zm0 1.579c.17 0 .315-.062.432-.186a.632.632 0 00.186-.45.574.574 0 00-.186-.432.574.574 0 00-.432-.185.612.612 0 00-.45.185.574.574 0 00-.185.432.632.632 0 00.635.636zm3.008 4.799c-.553 0-1.05-.06-1.489-.18-.445-.12-.821-.3-1.13-.539a2.292 2.292 0 01-.71-.89h.6c.136.206.325.383.564.53.24.15.54.263.898.343.354.08.773.12 1.258.12.405 0 .782-.034 1.13-.103.348-.068.653-.177.915-.325.268-.148.48-.336.633-.565h.6a2.58 2.58 0 01-1.301 1.232c-.57.251-1.227.377-1.968.377zm1.6-1.882c-.297 0-.576-.043-.839-.129a2.723 2.723 0 01-.693-.35l.283-.565c.114.085.24.16.376.222.143.063.285.111.428.146.142.034.28.051.41.051.24 0 .437-.04.59-.12a.748.748 0 00.352-.35c.074-.155.11-.343.11-.565 0-.2-.036-.391-.11-.574a1.507 1.507 0 00-.308-.496 2.146 2.146 0 00-.505-.41 2.993 2.993 0 00-.668-.3V8.497h.753v2.755c.297.137.548.294.753.471.206.171.371.354.497.548a2.143 2.143 0 01.36 1.18c-.001.337-.07.628-.206.873a1.31 1.31 0 01-.6.565c-.262.131-.59.197-.983.197zm3.67-7.333c.833 0 1.535.137 2.105.41.576.269.984.668 1.224 1.199h-.6c-.199-.308-.521-.55-.966-.728-.44-.176-1.024-.265-1.754-.265-.405 0-.781.034-1.13.103a3.043 3.043 0 00-.915.325c-.262.142-.473.33-.633.565h-.599a2.58 2.58 0 011.3-1.232c.571-.251 1.227-.377 1.969-.377zm1.322 2.837c.26 0 .48.094.662.282a.888.888 0 01.282.662.898.898 0 01-.282.67.901.901 0 01-.662.273.941.941 0 01-.679-.273.912.912 0 01-.273-.67c0-.265.091-.489.273-.67a.922.922 0 01.68-.274zm0 1.579c.171 0 .315-.062.433-.186a.632.632 0 00.185-.45.574.574 0 00-.185-.432.574.574 0 00-.433-.185.612.612 0 00-.45.185.574.574 0 00-.185.432.632.632 0 00.636.636zm2.336.908c0-.464-.082-.953-.247-1.464-.158-.518-.361-.947-.608-1.288h.732c.217.3.406.712.564 1.235.16.517.238 1.023.238 1.517 0 .488-.079.994-.238 1.517-.158.518-.347.926-.564 1.226h-.732c.24-.335.444-.758.608-1.27.165-.5.247-.99.247-1.473z\" fill=\"currentColor\"></path>")]) : _vm.isSame('WebStorm') ? _c('svg', {
    attrs: {
      "xmlns": "http://www.w3.org/2000/svg",
      "xmlns:xlink": "http://www.w3.org/1999/xlink",
      "height": "105",
      "viewBox": "0 0 105 105",
      "width": "105"
    }
  }, [_c('linearGradient', {
    attrs: {
      "id": "WebStorma",
      "gradientUnits": "userSpaceOnUse",
      "x1": "38.88",
      "x2": "63.72",
      "y1": "6.5",
      "y2": "95.94"
    }
  }, [_c('stop', {
    attrs: {
      "offset": ".28",
      "stop-color": "#07c3f2"
    }
  }), _vm._v(" "), _c('stop', {
    attrs: {
      "offset": ".94",
      "stop-color": "#087cfa"
    }
  })], 1), _vm._ssrNode(" "), _c('linearGradient', {
    attrs: {
      "id": "WebStormb",
      "gradientUnits": "userSpaceOnUse",
      "x1": "46.63",
      "x2": "88.66",
      "y1": "17.85",
      "y2": "79.48"
    }
  }, [_c('stop', {
    attrs: {
      "offset": ".14",
      "stop-color": "#fcf84a"
    }
  }), _vm._v(" "), _c('stop', {
    attrs: {
      "offset": ".37",
      "stop-color": "#07c3f2"
    }
  })], 1), _vm._ssrNode(" "), _c('linearGradient', {
    attrs: {
      "id": "c",
      "x1": "88.27",
      "x2": "93.79",
      "xlink:href": "#WebStorma",
      "y1": "25.47",
      "y2": "45.02"
    }
  }), _vm._ssrNode(" <path d=\"m17.44 91.26-12.94-76.7 23.93-9.93 15.28 9.08 14-7.55 29.17 11.2-16.36 83.14z\" fill=\"url(#WebStorma)\"></path> <path d=\"m100.5 37.01-12.39-30.6-22.48-1.91-34.7 33.34 9.34 42.97 17.44 12.23 42.79-25.39-10.5-19.69z\" fill=\"url(#WebStormb)\"></path> <path d=\"m81.27 32.45 8.73 15.51 10.5-10.95-7.71-19.06z\" fill=\"url(#WebStormc)\"></path> <path d=\"m22.5 22.5h60v60h-60z\"></path> <g fill=\"#fff\"><path d=\"m29.98 71.16h22.5v3.75h-22.5z\"></path> <path d=\"m51.28 29.97-3.35 13.13-3.83-13.13h-3.81l-3.84 13.13-3.34-13.13h-5.25l6.43 22.51h4.22l3.68-13.03 3.64 13.03h4.27l6.42-22.51z\"></path> <path d=\"m57.46 49.27 2.93-3.51a10.34 10.34 0 0 0 6.74 2.74c2 0 3.26-.8 3.26-2.13v-.06c0-1.26-.78-1.9-4.55-2.87-4.55-1.16-7.48-2.42-7.48-6.9v-.07c0-4.09 3.29-6.8 7.9-6.8a13 13 0 0 1 8.38 2.87l-2.58 3.74a10.54 10.54 0 0 0 -5.87-2.22c-1.9 0-2.9.87-2.9 2v.07c0 1.48 1 2 4.87 3 4.58 1.2 7.16 2.84 7.16 6.78v.06c0 4.48-3.42 7-8.29 7a14.34 14.34 0 0 1 -9.57-3.61\"></path></g>")], 2) : _vm.isSame('DataGrip') ? _c('svg', {
    attrs: {
      "xmlns": "http://www.w3.org/2000/svg",
      "xmlns:xlink": "http://www.w3.org/1999/xlink",
      "height": "105",
      "viewBox": "0 0 105 105",
      "width": "105"
    }
  }, [_c('linearGradient', {
    attrs: {
      "id": "DataGripa",
      "gradientUnits": "userSpaceOnUse",
      "x1": "92.39",
      "x2": "95.19",
      "y1": "40.62",
      "y2": "65.06"
    }
  }, [_c('stop', {
    attrs: {
      "offset": ".16",
      "stop-color": "#21d789"
    }
  }), _vm._v(" "), _c('stop', {
    attrs: {
      "offset": ".54",
      "stop-color": "#419fbc"
    }
  }), _vm._v(" "), _c('stop', {
    attrs: {
      "offset": "1",
      "stop-color": "#6b57ff"
    }
  })], 1), _vm._ssrNode(" "), _c('linearGradient', {
    attrs: {
      "id": "DataGripb",
      "gradientUnits": "userSpaceOnUse",
      "x1": "66.85",
      "x2": "73.95",
      "y1": "30.12",
      "y2": "11.96"
    }
  }, [_c('stop', {
    attrs: {
      "offset": "0",
      "stop-color": "#6b57ff"
    }
  }), _vm._v(" "), _c('stop', {
    attrs: {
      "offset": ".95",
      "stop-color": "#21d789"
    }
  })], 1), _vm._ssrNode(" "), _c('linearGradient', {
    attrs: {
      "id": "DataGripc",
      "gradientUnits": "userSpaceOnUse",
      "x1": "27.62",
      "x2": "34.52",
      "y1": "52.97",
      "y2": "83.01"
    }
  }, [_c('stop', {
    attrs: {
      "offset": "0",
      "stop-color": "#6b57ff"
    }
  }), _vm._v(" "), _c('stop', {
    attrs: {
      "offset": ".02",
      "stop-color": "#685cfb"
    }
  }), _vm._v(" "), _c('stop', {
    attrs: {
      "offset": ".28",
      "stop-color": "#4a91ca"
    }
  }), _vm._v(" "), _c('stop', {
    attrs: {
      "offset": ".51",
      "stop-color": "#34b7a7"
    }
  }), _vm._v(" "), _c('stop', {
    attrs: {
      "offset": ".69",
      "stop-color": "#26ce91"
    }
  }), _vm._v(" "), _c('stop', {
    attrs: {
      "offset": ".8",
      "stop-color": "#21d789"
    }
  })], 1), _vm._ssrNode(" "), _c('linearGradient', {
    attrs: {
      "id": "DataGripd",
      "gradientUnits": "userSpaceOnUse",
      "x1": "10.48",
      "x2": "94.6",
      "y1": "52.51",
      "y2": "98.96"
    }
  }, [_c('stop', {
    attrs: {
      "offset": ".08",
      "stop-color": "#21d789"
    }
  }), _vm._v(" "), _c('stop', {
    attrs: {
      "offset": ".89",
      "stop-color": "#6b57ff"
    }
  })], 1), _vm._ssrNode(" "), _c('linearGradient', {
    attrs: {
      "id": "DataGripe",
      "gradientUnits": "userSpaceOnUse",
      "x1": "10.99",
      "x2": "95.54",
      "y1": "41.31",
      "y2": "41.31"
    }
  }, [_c('stop', {
    attrs: {
      "offset": ".31",
      "stop-color": "#21d789"
    }
  }), _vm._v(" "), _c('stop', {
    attrs: {
      "offset": ".49",
      "stop-color": "#59a3b2"
    }
  }), _vm._v(" "), _c('stop', {
    attrs: {
      "offset": ".77",
      "stop-color": "#b74af7"
    }
  }), _vm._v(" "), _c('stop', {
    attrs: {
      "offset": "1",
      "stop-color": "#ff45ed"
    }
  })], 1), _vm._ssrNode(" <path d=\"m94.38 19.42 6.12 39.3-11.31 6.58z\" fill=\"url(#DataGripa)\"></path> <path d=\"m94.38 19.42-34.37-14.92-9.59 7.96z\" fill=\"url(#DataGripb)\"></path> <path d=\"m69.37 100.5-53.33-42.49-10.71 32.21z\" fill=\"url(#DataGripc)\"></path> <path d=\"m76.8 73.65-72.3-24.84 64.87 51.69z\" fill=\"url(#DataGripd)\"></path> <path d=\"m4.5 5.18v43.63l83.31 28.63 6.57-58.02z\" fill=\"url(#DataGripe)\"></path> <path d=\"m22.5 22.38h60v60h-60z\"></path> <g fill=\"#fff\"><path d=\"m28.59 30.18h9.69c7.8 0 13.2 5.36 13.2 12.35v.07c0 7-5.4 12.42-13.2 12.42h-9.69zm5.46 4.93v15h4.23a7.08 7.08 0 0 0 7.48-7.42v-.09a7.13 7.13 0 0 0 -7.48-7.49z\"></path> <path d=\"m52.45 42.67v-.07a12.75 12.75 0 0 1 13-12.85 13.63 13.63 0 0 1 9.76 3.41l-3.44 4.15a9.18 9.18 0 0 0 -6.49-2.52c-4 0-7.14 3.52-7.14 7.74v.07c0 4.54 3.13 7.88 7.53 7.88a8.73 8.73 0 0 0 5.16-1.48v-3.56h-5.5v-4.72h10.79v10.79a16.09 16.09 0 0 1 -10.61 3.94c-7.74 0-13.06-5.45-13.06-12.78z\"></path> <path d=\"m28.02 71.12h22.5v3.75h-22.5z\"></path></g>")], 2) : _vm.isSame('PhpStorm') ? _c('svg', {
    attrs: {
      "xmlns": "http://www.w3.org/2000/svg",
      "xmlns:xlink": "http://www.w3.org/1999/xlink",
      "height": "105",
      "viewBox": "0 0 105 105",
      "width": "105"
    }
  }, [_c('linearGradient', {
    attrs: {
      "id": "PhpStorma",
      "gradientUnits": "userSpaceOnUse",
      "x1": "25.8",
      "x2": "33.95",
      "y1": "33.6",
      "y2": "17.31"
    }
  }, [_c('stop', {
    attrs: {
      "offset": "0",
      "stop-color": "#af1df5"
    }
  }), _vm._v(" "), _c('stop', {
    attrs: {
      "offset": ".21",
      "stop-color": "#bc20e4"
    }
  }), _vm._v(" "), _c('stop', {
    attrs: {
      "offset": ".63",
      "stop-color": "#dd29b8"
    }
  }), _vm._v(" "), _c('stop', {
    attrs: {
      "offset": "1",
      "stop-color": "#ff318c"
    }
  })], 1), _vm._ssrNode(" "), _c('linearGradient', {
    attrs: {
      "id": "PhpStormb",
      "gradientUnits": "userSpaceOnUse",
      "x1": "1.56",
      "x2": "35.95",
      "y1": "67.23",
      "y2": "21.8"
    }
  }, [_c('stop', {
    attrs: {
      "offset": ".02",
      "stop-color": "#6b57ff"
    }
  }), _vm._v(" "), _c('stop', {
    attrs: {
      "offset": ".42",
      "stop-color": "#b74af7"
    }
  }), _vm._v(" "), _c('stop', {
    attrs: {
      "offset": ".75",
      "stop-color": "#ff318c"
    }
  })], 1), _vm._ssrNode(" "), _c('linearGradient', {
    attrs: {
      "id": "PhpStormc",
      "gradientUnits": "userSpaceOnUse",
      "x1": "89.3",
      "x2": "65.46",
      "y1": "65.79",
      "y2": "9.23"
    }
  }, [_c('stop', {
    attrs: {
      "offset": "0",
      "stop-color": "#293896"
    }
  }), _vm._v(" "), _c('stop', {
    attrs: {
      "offset": ".08",
      "stop-color": "#3b3aa2"
    }
  }), _vm._v(" "), _c('stop', {
    attrs: {
      "offset": ".29",
      "stop-color": "#6740c0"
    }
  }), _vm._v(" "), _c('stop', {
    attrs: {
      "offset": ".49",
      "stop-color": "#8a44d8"
    }
  }), _vm._v(" "), _c('stop', {
    attrs: {
      "offset": ".68",
      "stop-color": "#a347e9"
    }
  }), _vm._v(" "), _c('stop', {
    attrs: {
      "offset": ".86",
      "stop-color": "#b249f3"
    }
  }), _vm._v(" "), _c('stop', {
    attrs: {
      "offset": "1",
      "stop-color": "#b74af7"
    }
  })], 1), _vm._ssrNode(" "), _c('linearGradient', {
    attrs: {
      "id": "PhpStormd",
      "gradientUnits": "userSpaceOnUse",
      "x1": "74.68",
      "x2": "58.6",
      "y1": "93.59",
      "y2": "70.03"
    }
  }, [_c('stop', {
    attrs: {
      "offset": ".02",
      "stop-color": "#6b57ff"
    }
  }), _vm._v(" "), _c('stop', {
    attrs: {
      "offset": ".78",
      "stop-color": "#b74af7"
    }
  })], 1), _vm._ssrNode(" <path d=\"m57.49 22.38-3.2-9.68-33.41-7.2-16.38 18.53 18 9.21v-10.86z\" fill=\"url(#PhpStorma)\"></path> <path d=\"m22.5 28.68-18-4.65 9.15 54.96 8.82-.07z\" fill=\"url(#PhpStormb)\"></path> <path d=\"m82.5 22.38h-31.31l12.58-11.18 24.24 4.5 12.49 31.04-17.99 17.87z\" fill=\"url(#PhpStormc)\"></path> <path d=\"m82.52 46.33-.02 36.05h-51.54l1.33 7.84 32.36 11.28 35.85-21.46z\" fill=\"url(#PhpStormd)\"></path> <path d=\"m22.5 22.5h60v60h-60z\"></path> <g fill=\"#fff\"><path d=\"m29.98 71.16h22.5v3.75h-22.5z\"></path> <path d=\"m49.6 49.27 2.93-3.51a10.34 10.34 0 0 0 6.74 2.74c2 0 3.26-.81 3.26-2.13v-.06c0-1.26-.78-1.91-4.55-2.87-4.55-1.16-7.48-2.42-7.48-6.9v-.07c0-4.09 3.29-6.8 7.9-6.8a13 13 0 0 1 8.38 2.87l-2.58 3.74a10.54 10.54 0 0 0 -5.87-2.22c-1.9 0-2.9.87-2.9 2v.07c0 1.48 1 2 4.87 3 4.58 1.2 7.16 2.84 7.16 6.77v.07c0 4.48-3.42 7-8.29 7a14.35 14.35 0 0 1 -9.57-3.61\"></path> <path d=\"m30 30h9.2c5.36 0 8.61 3.18 8.61 7.77v.06c0 5.2-4.05 7.9-9.09 7.9h-3.72v6.74h-5zm8.86 11.33c2.47 0 3.92-1.47 3.92-3.4v-.06c0-2.22-1.54-3.41-4-3.41h-3.78v6.87z\"></path></g>")], 2) : _vm.isSame('PyCharm') ? _c('svg', {
    attrs: {
      "xmlns": "http://www.w3.org/2000/svg",
      "xmlns:xlink": "http://www.w3.org/1999/xlink",
      "height": "105",
      "viewBox": "0 0 105 105",
      "width": "105"
    }
  }, [_c('linearGradient', {
    attrs: {
      "id": "PyCharma",
      "gradientUnits": "userSpaceOnUse",
      "x1": "38.78",
      "x2": "95.91",
      "y1": "41.59",
      "y2": "41.59"
    }
  }, [_c('stop', {
    attrs: {
      "offset": "0",
      "stop-color": "#21d789"
    }
  }), _vm._v(" "), _c('stop', {
    attrs: {
      "offset": "1",
      "stop-color": "#07c3f2"
    }
  })], 1), _vm._ssrNode(" "), _c('linearGradient', {
    attrs: {
      "id": "PyCharmb",
      "gradientUnits": "userSpaceOnUse",
      "x1": "-29.18",
      "x2": "88.46",
      "y1": "85.52",
      "y2": "-1.32"
    }
  }, [_c('stop', {
    attrs: {
      "offset": ".01",
      "stop-color": "#fcf84a"
    }
  }), _vm._v(" "), _c('stop', {
    attrs: {
      "offset": ".11",
      "stop-color": "#a7eb62"
    }
  }), _vm._v(" "), _c('stop', {
    attrs: {
      "offset": ".21",
      "stop-color": "#5fe077"
    }
  }), _vm._v(" "), _c('stop', {
    attrs: {
      "offset": ".27",
      "stop-color": "#32da84"
    }
  }), _vm._v(" "), _c('stop', {
    attrs: {
      "offset": ".31",
      "stop-color": "#21d789"
    }
  }), _vm._v(" "), _c('stop', {
    attrs: {
      "offset": ".58",
      "stop-color": "#21d789"
    }
  }), _vm._v(" "), _c('stop', {
    attrs: {
      "offset": ".6",
      "stop-color": "#21d789"
    }
  }), _vm._v(" "), _c('stop', {
    attrs: {
      "offset": ".69",
      "stop-color": "#20d68c"
    }
  }), _vm._v(" "), _c('stop', {
    attrs: {
      "offset": ".76",
      "stop-color": "#1ed497"
    }
  }), _vm._v(" "), _c('stop', {
    attrs: {
      "offset": ".83",
      "stop-color": "#19d1a9"
    }
  }), _vm._v(" "), _c('stop', {
    attrs: {
      "offset": ".9",
      "stop-color": "#13ccc2"
    }
  }), _vm._v(" "), _c('stop', {
    attrs: {
      "offset": ".97",
      "stop-color": "#0bc6e1"
    }
  }), _vm._v(" "), _c('stop', {
    attrs: {
      "offset": "1",
      "stop-color": "#07c3f2"
    }
  })], 1), _vm._ssrNode(" "), _c('linearGradient', {
    attrs: {
      "id": "PyCharmc",
      "gradientUnits": "userSpaceOnUse",
      "x1": "17.3",
      "x2": "36.92",
      "y1": "110.99",
      "y2": "49.42"
    }
  }, [_c('stop', {
    attrs: {
      "offset": "0",
      "stop-color": "#21d789"
    }
  }), _vm._v(" "), _c('stop', {
    attrs: {
      "offset": ".16",
      "stop-color": "#24d888"
    }
  }), _vm._v(" "), _c('stop', {
    attrs: {
      "offset": ".3",
      "stop-color": "#2fd985"
    }
  }), _vm._v(" "), _c('stop', {
    attrs: {
      "offset": ".43",
      "stop-color": "#41dc80"
    }
  }), _vm._v(" "), _c('stop', {
    attrs: {
      "offset": ".55",
      "stop-color": "#5ae079"
    }
  }), _vm._v(" "), _c('stop', {
    attrs: {
      "offset": ".67",
      "stop-color": "#7ae46f"
    }
  }), _vm._v(" "), _c('stop', {
    attrs: {
      "offset": ".79",
      "stop-color": "#a1ea64"
    }
  }), _vm._v(" "), _c('stop', {
    attrs: {
      "offset": ".9",
      "stop-color": "#cff157"
    }
  }), _vm._v(" "), _c('stop', {
    attrs: {
      "offset": "1",
      "stop-color": "#fcf84a"
    }
  })], 1), _vm._ssrNode(" "), _c('linearGradient', {
    attrs: {
      "id": "PyCharmd",
      "gradientUnits": "userSpaceOnUse",
      "x1": "43.28",
      "x2": "85.97",
      "y1": "57.46",
      "y2": ".06"
    }
  }, [_c('stop', {
    attrs: {
      "offset": "0",
      "stop-color": "#21d789"
    }
  }), _vm._v(" "), _c('stop', {
    attrs: {
      "offset": ".09",
      "stop-color": "#23d986"
    }
  }), _vm._v(" "), _c('stop', {
    attrs: {
      "offset": ".17",
      "stop-color": "#2ade7b"
    }
  }), _vm._v(" "), _c('stop', {
    attrs: {
      "offset": ".25",
      "stop-color": "#36e669"
    }
  }), _vm._v(" "), _c('stop', {
    attrs: {
      "offset": ".27",
      "stop-color": "#3bea62"
    }
  }), _vm._v(" "), _c('stop', {
    attrs: {
      "offset": ".35",
      "stop-color": "#47eb61"
    }
  }), _vm._v(" "), _c('stop', {
    attrs: {
      "offset": ".49",
      "stop-color": "#67ed5d"
    }
  }), _vm._v(" "), _c('stop', {
    attrs: {
      "offset": ".69",
      "stop-color": "#9af156"
    }
  }), _vm._v(" "), _c('stop', {
    attrs: {
      "offset": ".92",
      "stop-color": "#e0f64d"
    }
  }), _vm._v(" "), _c('stop', {
    attrs: {
      "offset": "1",
      "stop-color": "#fcf84a"
    }
  })], 1), _vm._ssrNode(" "), _c('linearGradient', {
    attrs: {
      "id": "PyCharme",
      "gradientUnits": "userSpaceOnUse",
      "x1": "108.58",
      "x2": "22.55",
      "y1": "64.77",
      "y2": "63.97"
    }
  }, [_c('stop', {
    attrs: {
      "offset": ".39",
      "stop-color": "#fcf84a"
    }
  }), _vm._v(" "), _c('stop', {
    attrs: {
      "offset": ".46",
      "stop-color": "#ecf74c"
    }
  }), _vm._v(" "), _c('stop', {
    attrs: {
      "offset": ".61",
      "stop-color": "#c1f451"
    }
  }), _vm._v(" "), _c('stop', {
    attrs: {
      "offset": ".82",
      "stop-color": "#7eef5a"
    }
  }), _vm._v(" "), _c('stop', {
    attrs: {
      "offset": "1",
      "stop-color": "#3bea62"
    }
  })], 1), _vm._ssrNode(" <path d=\"m71.81 19.65 28.05 23.33-10.1 20.55-16.91-4.69h-14.63z\" fill=\"url(#PyCharma)\"></path> <path d=\"m43.55 34.8-5.43 28.73-.52 9.76-13.69 5.93-19.41 2.09 5.89-62.07 35.17-14.74 21.67 14.21z\" fill=\"url(#PyCharmb)\"></path> <path d=\"m43.55 34.8 2.64 55.36-8.77 10.34-32.92-19.19 27.03-40.28z\" fill=\"url(#PyCharmc)\"></path> <path d=\"m79.77 30.76h-33.26l29.39-26.26z\" fill=\"url(#PyCharmd)\"></path> <path d=\"m100.5 90.38-29.28 9.94-38.99-10.98 11.32-54.54 4.52-4.04 23.74-2.23-2.15 23.84 18.88-7.32z\" fill=\"url(#PyCharme)\"></path> <path d=\"m22.5 22.5h60v60h-60z\"></path> <g fill=\"#fff\"><path d=\"m29.98 71.16h22.5v3.75h-22.5z\"></path> <path d=\"m30 30h9.2c5.36 0 8.61 3.18 8.61 7.77v.06c0 5.2-4.05 7.9-9.09 7.9h-3.72v6.74h-5zm8.86 11.33c2.47 0 3.92-1.47 3.92-3.4v-.06c0-2.22-1.54-3.41-4-3.41h-3.78v6.87z\"></path> <path d=\"m50.49 41.31v-.06a11.41 11.41 0 0 1 11.71-11.62 11.59 11.59 0 0 1 8.86 3.46l-3.14 3.63a8.33 8.33 0 0 0 -5.75-2.54c-3.79 0-6.52 3.15-6.52 7v.07c0 3.85 2.67 7.06 6.52 7.06 2.57 0 4.14-1 5.91-2.63l3.14 3.17a11.46 11.46 0 0 1 -9.21 4 11.35 11.35 0 0 1 -11.52-11.54\"></path></g>")], 2) : _vm.isSame('Sketch') ? _c('svg', {
    attrs: {
      "xmlns": "http://www.w3.org/2000/svg",
      "xmlns:xlink": "http://www.w3.org/1999/xlink",
      "width": "394px",
      "height": "356px",
      "viewBox": "0 0 394 356",
      "version": "1.1"
    }
  }, [_vm._ssrNode("<g id=\"Page-1\" stroke=\"none\" stroke-width=\"1\" fill=\"none\" fill-rule=\"evenodd\"><g id=\"sketch-symbol\" fill-rule=\"nonzero\"><polygon id=\"Path\" fill=\"#FDB300\" points=\"85.790323 11.7151549 196.602823 0 307.415323 11.7151549 393.205645 126.881084 196.602823 355.823009 0 126.881084\"></polygon> <g id=\"Group\" transform=\"translate(0.000000, 126.881084)\"><polygon id=\"Path\" fill=\"#EA6C00\" points=\"79.634 0 196.603 228.942 0 0\"></polygon> <polygon id=\"Path\" fill=\"#EA6C00\" transform=\"translate(294.903968, 114.471000) scale(-1, 1) translate(-294.903968, -114.471000) \" points=\"276.236468 0 393.205468 228.942 196.602468 0\"></polygon> <polygon id=\"Path\" fill=\"#FDAD00\" points=\"79.634 0 313.572 0 196.603 228.942\"></polygon></g> <g id=\"Group\"><polygon id=\"Path\" fill=\"#FDD231\" points=\"196.603 0 85.79 11.715 79.634 126.881\"></polygon> <polygon id=\"Path\" fill=\"#FDD231\" transform=\"translate(255.086896, 63.440500) scale(-1, 1) translate(-255.086896, -63.440500) \" points=\"313.571396 0 202.758396 11.715 196.602396 126.881\"></polygon> <polygon id=\"Path\" fill=\"#FDAD00\" transform=\"translate(350.310468, 69.298000) scale(-1, 1) translate(-350.310468, -69.298000) \" points=\"307.414968 126.881 393.205968 11.715 387.048968 126.881\"></polygon> <polygon id=\"Path\" fill=\"#FDAD00\" points=\"0 126.881 85.79 11.715 79.634 126.881\"></polygon> <polygon id=\"Path\" fill=\"#FEEEB7\" points=\"196.603 0 79.634 126.881 313.572 126.881\"></polygon></g></g></g>")]) : _vm.isSame('Visual Studio 2022') ? _c('svg', {
    attrs: {
      "xmlns": "http://www.w3.org/2000/svg",
      "width": "193",
      "height": "193",
      "viewBox": "0 0 193 193",
      "fill": "none"
    }
  }, [_vm._ssrNode("<g clip-path=\"url(#clip0)\"><g clip-path=\"url(#clip1)\"><mask id=\"mask0\" maskUnits=\"userSpaceOnUse\" x=\"8\" y=\"8\" width=\"177\" height=\"177\" style=\"mask-type:alpha\"><path d=\"M40.6211 157.524L11.2134 135.467C10.2965 134.786 9.55244 133.899 9.04142 132.877C8.5304 131.855 8.26668 130.728 8.27155 129.586V63.4144C8.26668 62.2721 8.5304 61.1447 9.04142 60.1232C9.55244 59.1016 10.2965 58.2145 11.2134 57.5334L40.6211 35.4762C39.8311 36.218 39.2341 37.1414 38.8819 38.1663C38.5297 39.1912 38.433 40.2865 38.6001 41.3572V151.643C38.433 152.714 38.5297 153.809 38.8819 154.834C39.2341 155.859 39.8311 156.782 40.6211 157.524Z\" fill=\"white\"></path> <path d=\"M181.456 38.8951C180.244 38.0992 178.825 37.6773 177.375 37.682C176.436 37.6744 175.504 37.8522 174.634 38.2052C173.763 38.5581 172.971 39.0793 172.302 39.7388L171.789 40.2544L113.117 96.5001L80.6548 127.637L50.6212 156.421L50.1057 156.937C49.4375 157.597 48.6453 158.119 47.7747 158.473C46.904 158.826 45.9721 159.004 45.0325 158.996C43.4419 158.993 41.8948 158.477 40.6211 157.524L11.2134 135.467C12.7075 136.589 14.5731 137.1 16.4305 136.895C18.2879 136.69 19.9973 135.785 21.2108 134.364L53.8554 96.4642L80.6548 65.3637L127.601 10.8439C128.282 10.0365 129.132 9.38792 130.091 8.94356C131.05 8.4992 132.094 8.26983 133.151 8.27152C134.601 8.26684 136.02 8.68874 137.231 9.48467L181.456 38.8951Z\" fill=\"white\"></path> <path d=\"M181.456 154.105L137.342 183.515C135.841 184.495 134.037 184.901 132.261 184.658C130.486 184.415 128.857 183.539 127.675 182.192L80.6548 127.637L53.8554 96.4642L21.2108 58.5975C19.9865 57.1909 18.2755 56.2994 16.4211 56.102C14.5668 55.9046 12.7064 56.416 11.2134 57.5334L40.6211 35.4762C41.8948 34.5234 43.4419 34.007 45.0325 34.0038C45.9721 33.9959 46.904 34.1738 47.7747 34.5272C48.6453 34.8807 49.4375 35.4028 50.1057 36.0634L50.6212 36.579L80.6548 65.3637L113.117 96.5001L171.789 152.746L172.302 153.261C172.971 153.921 173.763 154.442 174.634 154.795C175.504 155.148 176.436 155.326 177.375 155.318C178.825 155.323 180.244 154.901 181.456 154.105Z\" fill=\"white\"></path> <path d=\"M184.729 45.0325V147.968C184.73 149.181 184.432 150.376 183.861 151.446C183.29 152.517 182.464 153.43 181.456 154.105L137.342 183.515C138.35 182.84 139.176 181.926 139.747 180.855C140.317 179.784 140.615 178.589 140.614 177.375V15.6248C140.598 14.4022 140.281 13.2025 139.691 12.1316C139.101 11.0607 138.256 10.1516 137.231 9.48467L181.456 38.8951C182.461 39.5728 183.286 40.4866 183.856 41.5565C184.427 42.6265 184.726 43.8199 184.729 45.0325Z\" fill=\"white\"></path></mask> <g mask=\"url(#mask0)\"><path d=\"M40.6211 157.524L11.2134 135.467C10.2965 134.786 9.55244 133.898 9.04142 132.877C8.5304 131.855 8.26668 130.728 8.27155 129.586V63.4143C8.26668 62.272 8.5304 61.1446 9.04142 60.1231C9.55244 59.1015 10.2965 58.2144 11.2134 57.5333L40.6211 35.4761C39.8311 36.2179 39.2341 37.1413 38.8819 38.1662C38.5297 39.1911 38.433 40.2864 38.6001 41.3571V151.643C38.433 152.714 38.5297 153.809 38.8819 154.834C39.2341 155.859 39.8311 156.782 40.6211 157.524Z\" fill=\"#5E438F\"></path> <g filter=\"url(#filter0_dd)\"><path d=\"M181.455 38.8951C180.244 38.0992 178.825 37.6773 177.375 37.682C176.436 37.6744 175.504 37.8522 174.633 38.2052C173.763 38.5581 172.971 39.0793 172.302 39.7388L171.789 40.2544L140.539 70.2163L113.117 96.5001L80.6543 127.637L50.6207 156.421L50.1052 156.937C49.437 157.597 48.6448 158.119 47.7742 158.473C46.9035 158.826 45.9716 159.004 45.032 158.996C43.4414 158.993 41.8943 158.477 40.6206 157.524L11.2129 135.467C12.7069 136.589 14.5726 137.1 16.43 136.895C18.2874 136.69 19.9968 135.785 21.2103 134.364L37.6815 115.249L53.8549 96.4643L80.6543 65.3637L127.6 10.8439C128.282 10.0365 129.132 9.38792 130.091 8.94356C131.049 8.4992 132.094 8.26983 133.15 8.27152C134.6 8.26684 136.019 8.68874 137.231 9.48467L181.455 38.8951Z\" fill=\"url(#paint0_linear)\"></path></g> <g filter=\"url(#filter1_dd)\"><path d=\"M181.455 154.105L137.341 183.516C135.841 184.496 134.037 184.901 132.261 184.658C130.485 184.415 128.857 183.54 127.675 182.192L80.6543 127.637L53.8549 96.4644L37.6815 77.7158L21.2103 58.5978C19.986 57.1911 18.2749 56.2997 16.4206 56.1022C14.5663 55.9048 12.7059 56.4162 11.2129 57.5335L40.6206 35.4764C41.8943 34.5236 43.4414 34.0072 45.032 34.0041C45.9716 33.9961 46.9035 34.174 47.7742 34.5275C48.6448 34.8809 49.437 35.403 50.1052 36.0637L50.6207 36.5792L80.6543 65.3638L113.117 96.5002L140.578 122.823L171.789 152.746L172.302 153.262C172.971 153.921 173.763 154.442 174.633 154.795C175.504 155.148 176.436 155.326 177.375 155.318C178.825 155.323 180.244 154.901 181.455 154.105Z\" fill=\"url(#paint1_linear)\"></path></g> <g filter=\"url(#filter2_dd)\"><path d=\"M184.729 45.0321V147.967C184.73 149.181 184.432 150.375 183.861 151.446C183.29 152.516 182.464 153.43 181.456 154.105L137.341 183.515C138.35 182.84 139.176 181.926 139.746 180.855C140.317 179.784 140.615 178.589 140.614 177.375V15.6244C140.598 14.4019 140.281 13.2021 139.691 12.1312C139.101 11.0603 138.256 10.1512 137.231 9.48428L181.456 38.8947C182.461 39.5724 183.285 40.4862 183.856 41.5562C184.426 42.6261 184.726 43.8196 184.729 45.0321Z\" fill=\"url(#paint2_linear)\"></path></g></g></g></g> "), _vm._ssrNode("<defs>", "</defs>", [_vm._ssrNode("<filter id=\"filter0_dd\" x=\"6.03194\" y=\"4.38577\" width=\"180.604\" height=\"161.087\" filterUnits=\"userSpaceOnUse\" color-interpolation-filters=\"sRGB\">", "</filter>", [_c('feFlood', {
    attrs: {
      "flood-opacity": "0",
      "result": "BackgroundImageFix"
    }
  }), _vm._ssrNode(" "), _c('feColorMatrix', {
    attrs: {
      "in": "SourceAlpha",
      "type": "matrix",
      "values": "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0",
      "result": "hardAlpha"
    }
  }), _vm._ssrNode(" "), _c('feOffset', {
    attrs: {
      "dy": "0.246095"
    }
  }), _vm._ssrNode(" "), _c('feGaussianBlur', {
    attrs: {
      "stdDeviation": "0.246095"
    }
  }), _vm._ssrNode(" "), _c('feColorMatrix', {
    attrs: {
      "type": "matrix",
      "values": "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.24 0"
    }
  }), _vm._ssrNode(" "), _c('feBlend', {
    attrs: {
      "mode": "normal",
      "in2": "BackgroundImageFix",
      "result": "effect1_dropShadow"
    }
  }), _vm._ssrNode(" "), _c('feColorMatrix', {
    attrs: {
      "in": "SourceAlpha",
      "type": "matrix",
      "values": "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0",
      "result": "hardAlpha"
    }
  }), _vm._ssrNode(" "), _c('feOffset', {
    attrs: {
      "dy": "1.29524"
    }
  }), _vm._ssrNode(" "), _c('feGaussianBlur', {
    attrs: {
      "stdDeviation": "2.59048"
    }
  }), _vm._ssrNode(" "), _c('feColorMatrix', {
    attrs: {
      "type": "matrix",
      "values": "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.22 0"
    }
  }), _vm._ssrNode(" "), _c('feBlend', {
    attrs: {
      "mode": "normal",
      "in2": "effect1_dropShadow",
      "result": "effect2_dropShadow"
    }
  }), _vm._ssrNode(" "), _c('feBlend', {
    attrs: {
      "mode": "normal",
      "in": "SourceGraphic",
      "in2": "effect2_dropShadow",
      "result": "shape"
    }
  })], 2), _vm._ssrNode(" "), _vm._ssrNode("<filter id=\"filter1_dd\" x=\"6.03194\" y=\"30.1181\" width=\"180.604\" height=\"161.085\" filterUnits=\"userSpaceOnUse\" color-interpolation-filters=\"sRGB\">", "</filter>", [_c('feFlood', {
    attrs: {
      "flood-opacity": "0",
      "result": "BackgroundImageFix"
    }
  }), _vm._ssrNode(" "), _c('feColorMatrix', {
    attrs: {
      "in": "SourceAlpha",
      "type": "matrix",
      "values": "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0",
      "result": "hardAlpha"
    }
  }), _vm._ssrNode(" "), _c('feOffset', {
    attrs: {
      "dy": "0.246095"
    }
  }), _vm._ssrNode(" "), _c('feGaussianBlur', {
    attrs: {
      "stdDeviation": "0.246095"
    }
  }), _vm._ssrNode(" "), _c('feColorMatrix', {
    attrs: {
      "type": "matrix",
      "values": "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.24 0"
    }
  }), _vm._ssrNode(" "), _c('feBlend', {
    attrs: {
      "mode": "normal",
      "in2": "BackgroundImageFix",
      "result": "effect1_dropShadow"
    }
  }), _vm._ssrNode(" "), _c('feColorMatrix', {
    attrs: {
      "in": "SourceAlpha",
      "type": "matrix",
      "values": "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0",
      "result": "hardAlpha"
    }
  }), _vm._ssrNode(" "), _c('feOffset', {
    attrs: {
      "dy": "1.29524"
    }
  }), _vm._ssrNode(" "), _c('feGaussianBlur', {
    attrs: {
      "stdDeviation": "2.59048"
    }
  }), _vm._ssrNode(" "), _c('feColorMatrix', {
    attrs: {
      "type": "matrix",
      "values": "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.22 0"
    }
  }), _vm._ssrNode(" "), _c('feBlend', {
    attrs: {
      "mode": "normal",
      "in2": "effect1_dropShadow",
      "result": "effect2_dropShadow"
    }
  }), _vm._ssrNode(" "), _c('feBlend', {
    attrs: {
      "mode": "normal",
      "in": "SourceGraphic",
      "in2": "effect2_dropShadow",
      "result": "shape"
    }
  })], 2), _vm._ssrNode(" "), _vm._ssrNode("<filter id=\"filter2_dd\" x=\"121.688\" y=\"-6.05857\" width=\"78.583\" height=\"205.117\" filterUnits=\"userSpaceOnUse\" color-interpolation-filters=\"sRGB\">", "</filter>", [_c('feFlood', {
    attrs: {
      "flood-opacity": "0",
      "result": "BackgroundImageFix"
    }
  }), _vm._ssrNode(" "), _c('feColorMatrix', {
    attrs: {
      "in": "SourceAlpha",
      "type": "matrix",
      "values": "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0",
      "result": "hardAlpha"
    }
  }), _vm._ssrNode(" "), _c('feOffset'), _vm._ssrNode(" "), _c('feGaussianBlur', {
    attrs: {
      "stdDeviation": "0.129524"
    }
  }), _vm._ssrNode(" "), _c('feColorMatrix', {
    attrs: {
      "type": "matrix",
      "values": "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.24 0"
    }
  }), _vm._ssrNode(" "), _c('feBlend', {
    attrs: {
      "mode": "normal",
      "in2": "BackgroundImageFix",
      "result": "effect1_dropShadow"
    }
  }), _vm._ssrNode(" "), _c('feColorMatrix', {
    attrs: {
      "in": "SourceAlpha",
      "type": "matrix",
      "values": "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0",
      "result": "hardAlpha"
    }
  }), _vm._ssrNode(" "), _c('feOffset'), _vm._ssrNode(" "), _c('feGaussianBlur', {
    attrs: {
      "stdDeviation": "7.77143"
    }
  }), _vm._ssrNode(" "), _c('feColorMatrix', {
    attrs: {
      "type": "matrix",
      "values": "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.3 0"
    }
  }), _vm._ssrNode(" "), _c('feBlend', {
    attrs: {
      "mode": "normal",
      "in2": "effect1_dropShadow",
      "result": "effect2_dropShadow"
    }
  }), _vm._ssrNode(" "), _c('feBlend', {
    attrs: {
      "mode": "normal",
      "in": "SourceGraphic",
      "in2": "effect2_dropShadow",
      "result": "shape"
    }
  })], 2), _vm._ssrNode(" "), _c('linearGradient', {
    attrs: {
      "id": "paint0_linear",
      "x1": "151.642",
      "y1": "8.27149",
      "x2": "20.6141",
      "y2": "140.148",
      "gradientUnits": "userSpaceOnUse"
    }
  }, [_c('stop', {
    attrs: {
      "stop-color": "#7252AA"
    }
  }), _vm._v(" "), _c('stop', {
    attrs: {
      "offset": "1",
      "stop-color": "#7252AA"
    }
  })], 1), _vm._ssrNode(" "), _c('linearGradient', {
    attrs: {
      "id": "paint1_linear",
      "x1": "24.8145",
      "y1": "40.4371",
      "x2": "147.966",
      "y2": "178.293",
      "gradientUnits": "userSpaceOnUse"
    }
  }, [_c('stop', {
    attrs: {
      "stop-color": "#AE7FE2"
    }
  }), _vm._v(" "), _c('stop', {
    attrs: {
      "offset": "1",
      "stop-color": "#9A70D4"
    }
  })], 1), _vm._ssrNode(" "), _c('linearGradient', {
    attrs: {
      "id": "paint2_linear",
      "x1": "160.457",
      "y1": "5.93579",
      "x2": "160.457",
      "y2": "183.367",
      "gradientUnits": "userSpaceOnUse"
    }
  }, [_c('stop', {
    attrs: {
      "stop-color": "#D59DFF"
    }
  }), _vm._v(" "), _c('stop', {
    attrs: {
      "offset": "1",
      "stop-color": "#C18EF1"
    }
  })], 1), _vm._ssrNode(" <clipPath id=\"clip0\"><rect width=\"176.457\" height=\"176.457\" fill=\"white\" transform=\"translate(8.27148 8.27148)\"></rect></clipPath> <clipPath id=\"clip1\"><rect width=\"176.457\" height=\"176.457\" fill=\"white\" transform=\"translate(8.27148 8.27148)\"></rect></clipPath>")], 2)], 2) : _vm.isSame('VS Code') ? _c('svg', {
    attrs: {
      "xmlns": "http://www.w3.org/2000/svg",
      "width": "72",
      "height": "73",
      "viewBox": "0 0 72 73",
      "fill": "none"
    }
  }, [_vm._ssrNode("<mask id=\"mask0_1152_115027\" maskUnits=\"userSpaceOnUse\" x=\"3\" y=\"3\" width=\"66\" height=\"67\" style=\"mask-type:alpha\"><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M49.7662 69.1663C50.803 69.5702 51.9853 69.5443 53.0317 69.0408L66.5847 62.5194C68.0089 61.8341 68.9145 60.3928 68.9145 58.8115V14.5919C68.9145 13.0107 68.0089 11.5694 66.5847 10.8841L53.0317 4.36246C51.6584 3.70161 50.0511 3.86348 48.8457 4.73978C48.6735 4.86496 48.5095 5.00473 48.3556 5.15876L22.41 28.8294L11.1086 20.2508C10.0565 19.4522 8.58501 19.5176 7.60792 20.4064L3.9832 23.7036C2.78803 24.7908 2.78666 26.6711 3.98024 27.76L13.7812 36.7016L3.98024 45.6432C2.78666 46.7322 2.78803 48.6124 3.9832 49.6996L7.60792 52.9968C8.58501 53.8856 10.0565 53.9511 11.1086 53.1525L22.41 44.5738L48.3556 68.2445C48.766 68.6552 49.2479 68.9644 49.7662 69.1663ZM52.4674 21.7578L32.7806 36.7016L52.4674 51.6455V21.7578Z\" fill=\"white\"></path></mask><g mask=\"url(#mask0_1152_115027)\"><g filter=\"url(#filter0_d_1152_115027)\"><path d=\"M66.5821 10.8957L53.0185 4.36504C51.4485 3.60913 49.5723 3.92799 48.3401 5.16011L3.93782 45.6446C2.74351 46.7335 2.74488 48.6138 3.94078 49.701L7.5677 52.9982C8.54539 53.887 10.0178 53.9524 11.0705 53.1538L64.5411 12.5899C66.335 11.229 68.9116 12.5085 68.9116 14.7601V14.6027C68.9116 13.0221 68.0062 11.5813 66.5821 10.8957Z\" fill=\"#0065A9\"></path></g><g filter=\"url(#filter1_d_1152_115027)\"><path d=\"M66.5821 62.5092L53.0185 69.0398C51.4485 69.7957 49.5723 69.4769 48.3401 68.2447L3.93782 27.7603C2.74351 26.6714 2.74488 24.7911 3.94078 23.7039L7.5677 20.4067C8.54539 19.5179 10.0178 19.4524 11.0705 20.251L64.5411 60.815C66.335 62.1758 68.9116 60.8964 68.9116 58.6448V58.8022C68.9116 60.3827 68.0062 61.8235 66.5821 62.5092Z\" fill=\"#007ACC\"></path></g><g filter=\"url(#filter2_d_1152_115027)\"><path d=\"M53.0227 69.0408C51.4522 69.796 49.576 69.4767 48.3438 68.2445C49.862 69.7627 52.458 68.6874 52.458 66.5403V6.86296C52.458 4.71579 49.862 3.64049 48.3438 5.15876C49.576 3.92652 51.4522 3.60721 53.0227 4.36246L66.584 10.8841C68.009 11.5694 68.9152 13.0107 68.9152 14.5919V58.8115C68.9152 60.3928 68.009 61.8341 66.584 62.5194L53.0227 69.0408Z\" fill=\"#1F9CF0\"></path></g><g opacity=\"0.25\" style=\"mix-blend-mode:overlay\"><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M49.7232 69.1663C50.76 69.5702 51.9423 69.5443 52.9888 69.0408L66.5417 62.5194C67.9659 61.8341 68.8715 60.3928 68.8715 58.8115V14.5919C68.8715 13.0107 67.9659 11.5694 66.5418 10.8841L52.9887 4.36246C51.6154 3.70161 50.0081 3.86348 48.8027 4.73978C48.6305 4.86496 48.4665 5.00473 48.3126 5.15876L22.367 28.8294L11.0656 20.2508C10.0136 19.4522 8.54205 19.5176 7.56495 20.4064L3.94023 23.7036C2.74506 24.7908 2.74369 26.6711 3.93727 27.76L13.7382 36.7016L3.93727 45.6432C2.74369 46.7322 2.74506 48.6124 3.94023 49.6996L7.56495 52.9968C8.54205 53.8856 10.0136 53.9511 11.0656 53.1525L22.367 44.5738L48.3126 68.2445C48.723 68.6552 49.205 68.9644 49.7232 69.1663ZM52.4244 21.7578L32.7377 36.7016L52.4244 51.6455V21.7578Z\" fill=\"url(#paint0_linear_1152_115027)\"></path></g></g>"), _vm._ssrNode("<defs>", "</defs>", [_vm._ssrNode("<filter id=\"filter0_d_1152_115027\" x=\"0.300112\" y=\"3.95898\" width=\"71.3529\" height=\"55.2377\" filterUnits=\"userSpaceOnUse\" color-interpolation-filters=\"sRGB\">", "</filter>", [_c('feFlood', {
    attrs: {
      "flood-opacity": "0",
      "result": "BackgroundImageFix"
    }
  }), _c('feColorMatrix', {
    attrs: {
      "in": "SourceAlpha",
      "type": "matrix",
      "values": "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0",
      "result": "hardAlpha"
    }
  }), _c('feOffset', {
    attrs: {
      "dy": "2.74286"
    }
  }), _c('feGaussianBlur', {
    attrs: {
      "stdDeviation": "1.37143"
    }
  }), _c('feColorMatrix', {
    attrs: {
      "type": "matrix",
      "values": "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
    }
  }), _c('feBlend', {
    attrs: {
      "mode": "normal",
      "in2": "BackgroundImageFix",
      "result": "effect1_dropShadow_1152_115027"
    }
  }), _c('feBlend', {
    attrs: {
      "mode": "normal",
      "in": "SourceGraphic",
      "in2": "effect1_dropShadow_1152_115027",
      "result": "shape"
    }
  })], 1), _vm._ssrNode("<filter id=\"filter1_d_1152_115027\" x=\"-2.44275\" y=\"14.2076\" width=\"76.8386\" height=\"60.7234\" filterUnits=\"userSpaceOnUse\" color-interpolation-filters=\"sRGB\">", "</filter>", [_c('feFlood', {
    attrs: {
      "flood-opacity": "0",
      "result": "BackgroundImageFix"
    }
  }), _c('feColorMatrix', {
    attrs: {
      "in": "SourceAlpha",
      "type": "matrix",
      "values": "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0",
      "result": "hardAlpha"
    }
  }), _c('feOffset'), _c('feGaussianBlur', {
    attrs: {
      "stdDeviation": "2.74286"
    }
  }), _c('feColorMatrix', {
    attrs: {
      "type": "matrix",
      "values": "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
    }
  }), _c('feBlend', {
    attrs: {
      "mode": "overlay",
      "in2": "BackgroundImageFix",
      "result": "effect1_dropShadow_1152_115027"
    }
  }), _c('feBlend', {
    attrs: {
      "mode": "normal",
      "in": "SourceGraphic",
      "in2": "effect1_dropShadow_1152_115027",
      "result": "shape"
    }
  })], 1), _vm._ssrNode("<filter id=\"filter2_d_1152_115027\" x=\"42.858\" y=\"-1.52868\" width=\"31.5417\" height=\"76.4597\" filterUnits=\"userSpaceOnUse\" color-interpolation-filters=\"sRGB\">", "</filter>", [_c('feFlood', {
    attrs: {
      "flood-opacity": "0",
      "result": "BackgroundImageFix"
    }
  }), _c('feColorMatrix', {
    attrs: {
      "in": "SourceAlpha",
      "type": "matrix",
      "values": "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0",
      "result": "hardAlpha"
    }
  }), _c('feOffset'), _c('feGaussianBlur', {
    attrs: {
      "stdDeviation": "2.74286"
    }
  }), _c('feColorMatrix', {
    attrs: {
      "type": "matrix",
      "values": "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
    }
  }), _c('feBlend', {
    attrs: {
      "mode": "overlay",
      "in2": "BackgroundImageFix",
      "result": "effect1_dropShadow_1152_115027"
    }
  }), _c('feBlend', {
    attrs: {
      "mode": "normal",
      "in": "SourceGraphic",
      "in2": "effect1_dropShadow_1152_115027",
      "result": "shape"
    }
  })], 1), _c('linearGradient', {
    attrs: {
      "id": "paint0_linear_1152_115027",
      "x1": "35.9573",
      "y1": "3.95703",
      "x2": "35.9573",
      "y2": "69.4462",
      "gradientUnits": "userSpaceOnUse"
    }
  }, [_c('stop', {
    attrs: {
      "stop-color": "white"
    }
  }), _c('stop', {
    attrs: {
      "offset": "1",
      "stop-color": "white",
      "stop-opacity": "0"
    }
  })], 1)], 1)], 2) : _vm.isSame('Redis') ? _c('svg', {
    attrs: {
      "xmlns": "http://www.w3.org/2000/svg",
      "width": "2500",
      "height": "2148",
      "viewBox": "0 0 256 220",
      "preserveAspectRatio": "xMinYMin meet"
    }
  }, [_vm._ssrNode("<path d=\"M245.97 168.943c-13.662 7.121-84.434 36.22-99.501 44.075-15.067 7.856-23.437 7.78-35.34 2.09-11.902-5.69-87.216-36.112-100.783-42.597C3.566 169.271 0 166.535 0 163.951v-25.876s98.05-21.345 113.879-27.024c15.828-5.679 21.32-5.884 34.79-.95 13.472 4.936 94.018 19.468 107.331 24.344l-.006 25.51c.002 2.558-3.07 5.364-10.024 8.988\" fill=\"#912626\"></path><path d=\"M245.965 143.22c-13.661 7.118-84.431 36.218-99.498 44.072-15.066 7.857-23.436 7.78-35.338 2.09-11.903-5.686-87.214-36.113-100.78-42.594-13.566-6.485-13.85-10.948-.524-16.166 13.326-5.22 88.224-34.605 104.055-40.284 15.828-5.677 21.319-5.884 34.789-.948 13.471 4.934 83.819 32.935 97.13 37.81 13.316 4.881 13.827 8.9.166 16.02\" fill=\"#C6302B\"></path><path d=\"M245.97 127.074c-13.662 7.122-84.434 36.22-99.501 44.078-15.067 7.853-23.437 7.777-35.34 2.087-11.903-5.687-87.216-36.112-100.783-42.597C3.566 127.402 0 124.67 0 122.085V96.206s98.05-21.344 113.879-27.023c15.828-5.679 21.32-5.885 34.79-.95C162.142 73.168 242.688 87.697 256 92.574l-.006 25.513c.002 2.557-3.07 5.363-10.024 8.987\" fill=\"#912626\"></path><path d=\"M245.965 101.351c-13.661 7.12-84.431 36.218-99.498 44.075-15.066 7.854-23.436 7.777-35.338 2.087-11.903-5.686-87.214-36.112-100.78-42.594-13.566-6.483-13.85-10.947-.524-16.167C23.151 83.535 98.05 54.148 113.88 48.47c15.828-5.678 21.319-5.884 34.789-.949 13.471 4.934 83.819 32.933 97.13 37.81 13.316 4.88 13.827 8.9.166 16.02\" fill=\"#C6302B\"></path><path d=\"M245.97 83.653c-13.662 7.12-84.434 36.22-99.501 44.078-15.067 7.854-23.437 7.777-35.34 2.087-11.903-5.687-87.216-36.113-100.783-42.595C3.566 83.98 0 81.247 0 78.665v-25.88s98.05-21.343 113.879-27.021c15.828-5.68 21.32-5.884 34.79-.95C162.142 29.749 242.688 44.278 256 49.155l-.006 25.512c.002 2.555-3.07 5.361-10.024 8.986\" fill=\"#912626\"></path><path d=\"M245.965 57.93c-13.661 7.12-84.431 36.22-99.498 44.074-15.066 7.854-23.436 7.777-35.338 2.09C99.227 98.404 23.915 67.98 10.35 61.497-3.217 55.015-3.5 50.55 9.825 45.331 23.151 40.113 98.05 10.73 113.88 5.05c15.828-5.679 21.319-5.883 34.789-.948 13.471 4.935 83.819 32.934 97.13 37.811 13.316 4.876 13.827 8.897.166 16.017\" fill=\"#C6302B\"></path><path d=\"M159.283 32.757l-22.01 2.285-4.927 11.856-7.958-13.23-25.415-2.284 18.964-6.839-5.69-10.498 17.755 6.944 16.738-5.48-4.524 10.855 17.067 6.391M131.032 90.275L89.955 73.238l58.86-9.035-17.783 26.072M74.082 39.347c17.375 0 31.46 5.46 31.46 12.194 0 6.736-14.085 12.195-31.46 12.195s-31.46-5.46-31.46-12.195c0-6.734 14.085-12.194 31.46-12.194\" fill=\"#FFF\"></path><path d=\"M185.295 35.998l34.836 13.766-34.806 13.753-.03-27.52\" fill=\"#621B1C\"></path><path d=\"M146.755 51.243l38.54-15.245.03 27.519-3.779 1.478-34.791-13.752\" fill=\"#9A2928\"></path>")]) : _vm.isSame('MySQL') ? _c('svg', {
    attrs: {
      "xmlns": "http://www.w3.org/2000/svg",
      "viewBox": "0 0 128 128"
    }
  }, [_vm._ssrNode("<path fill=\"#00618A\" d=\"M116.948 97.807c-6.863-.187-12.104.452-16.585 2.341-1.273.537-3.305.552-3.513 2.147.7.733.809 1.829 1.365 2.731 1.07 1.73 2.876 4.052 4.488 5.268 1.762 1.33 3.577 2.751 5.465 3.902 3.358 2.047 7.107 3.217 10.34 5.268 1.906 1.21 3.799 2.733 5.658 4.097.92.675 1.537 1.724 2.732 2.147v-.194c-.628-.8-.79-1.898-1.366-2.733l-2.537-2.537c-2.48-3.292-5.629-6.184-8.976-8.585-2.669-1.916-8.642-4.504-9.755-7.609l-.195-.195c1.892-.214 4.107-.898 5.854-1.367 2.934-.786 5.556-.583 8.585-1.365l4.097-1.171v-.78c-1.531-1.571-2.623-3.651-4.292-5.073-4.37-3.72-9.138-7.437-14.048-10.537-2.724-1.718-6.089-2.835-8.976-4.292-.971-.491-2.677-.746-3.318-1.562-1.517-1.932-2.342-4.382-3.511-6.633-2.449-4.717-4.854-9.868-7.024-14.831-1.48-3.384-2.447-6.72-4.293-9.756-8.86-14.567-18.396-23.358-33.169-32-3.144-1.838-6.929-2.563-10.929-3.513-2.145-.129-4.292-.26-6.438-.391-1.311-.546-2.673-2.149-3.902-2.927-4.894-3.092-17.448-9.817-21.072-.975-2.289 5.581 3.421 11.025 5.462 13.854 1.434 1.982 3.269 4.207 4.293 6.438.674 1.467.79 2.938 1.367 4.489 1.417 3.822 2.652 7.98 4.487 11.511.927 1.788 1.949 3.67 3.122 5.268.718.981 1.951 1.413 2.145 2.927-1.204 1.686-1.273 4.304-1.95 6.44-3.05 9.615-1.899 21.567 2.537 28.683 1.36 2.186 4.567 6.871 8.975 5.073 3.856-1.57 2.995-6.438 4.098-10.732.249-.973.096-1.689.585-2.341v.195l3.513 7.024c2.6 4.187 7.212 8.562 11.122 11.514 2.027 1.531 3.623 4.177 6.244 5.073v-.196h-.195c-.508-.791-1.303-1.119-1.951-1.755-1.527-1.497-3.225-3.358-4.487-5.073-3.556-4.827-6.698-10.11-9.561-15.609-1.368-2.627-2.557-5.523-3.709-8.196-.444-1.03-.438-2.589-1.364-3.122-1.263 1.958-3.122 3.542-4.098 5.854-1.561 3.696-1.762 8.204-2.341 12.878-.342.122-.19.038-.391.194-2.718-.655-3.672-3.452-4.683-5.853-2.554-6.07-3.029-15.842-.781-22.829.582-1.809 3.21-7.501 2.146-9.172-.508-1.666-2.184-2.63-3.121-3.903-1.161-1.574-2.319-3.646-3.124-5.464-2.09-4.731-3.066-10.044-5.267-14.828-1.053-2.287-2.832-4.602-4.293-6.634-1.617-2.253-3.429-3.912-4.683-6.635-.446-.968-1.051-2.518-.391-3.513.21-.671.508-.951 1.171-1.17 1.132-.873 4.284.29 5.462.779 3.129 1.3 5.741 2.538 8.392 4.294 1.271.844 2.559 2.475 4.097 2.927h1.756c2.747.631 5.824.195 8.391.975 4.536 1.378 8.601 3.523 12.292 5.854 11.246 7.102 20.442 17.21 26.732 29.269 1.012 1.942 1.45 3.794 2.341 5.854 1.798 4.153 4.063 8.426 5.852 12.488 1.786 4.052 3.526 8.141 6.05 11.513 1.327 1.772 6.451 2.723 8.781 3.708 1.632.689 4.307 1.409 5.854 2.34 2.953 1.782 5.815 3.903 8.586 5.855 1.383.975 5.64 3.116 5.852 4.879zM29.729 23.466c-1.431-.027-2.443.156-3.513.389v.195h.195c.683 1.402 1.888 2.306 2.731 3.513.65 1.367 1.301 2.732 1.952 4.097l.194-.193c1.209-.853 1.762-2.214 1.755-4.294-.484-.509-.555-1.147-.975-1.755-.556-.811-1.635-1.272-2.339-1.952z\"></path>")]) : _vm.isSame('SQLite') ? _c('svg', {
    attrs: {
      "xmlns": "http://www.w3.org/2000/svg",
      "xmlns:xlink": "http://www.w3.org/1999/xlink",
      "viewBox": "0 0 32 32"
    }
  }, [_vm._ssrNode("<defs>", "</defs>", [_c('linearGradient', {
    attrs: {
      "id": "a",
      "x1": "-118.318",
      "y1": "45.638",
      "x2": "-116.751",
      "y2": "45.638",
      "gradientTransform": "matrix(0, 11.486, 11.486, 0, -510.889, 1363.307)",
      "gradientUnits": "userSpaceOnUse"
    }
  }, [_c('stop', {
    attrs: {
      "offset": "0",
      "stop-color": "#97d9f6"
    }
  }), _c('stop', {
    attrs: {
      "offset": "0.92",
      "stop-color": "#0f80cc"
    }
  }), _c('stop', {
    attrs: {
      "offset": "1",
      "stop-color": "#0f80cc"
    }
  })], 1)], 1), _vm._ssrNode("<title>file_type_sqlite</title><path d=\"M23.192,3.242H5.623A2.147,2.147,0,0,0,3.482,5.383V24.759A2.147,2.147,0,0,0,5.623,26.9H17.195C17.063,21.142,19.03,9.968,23.192,3.242Z\" style=\"fill:#0f80cc\"></path><path d=\"M22.554,3.867H5.623A1.518,1.518,0,0,0,4.107,5.383V23.345a42.01,42.01,0,0,1,13.569-2.684A123.555,123.555,0,0,1,22.554,3.867Z\" style=\"fill:url(#a)\"></path><path d=\"M27.29,2.608c-1.2-1.073-2.66-.642-4.1.634-.213.19-.426.4-.638.625A25.4,25.4,0,0,0,17.1,15a10.178,10.178,0,0,1,.634,1.822c.036.14.069.272.1.384.062.265.1.437.1.437s-.022-.083-.113-.346l-.059-.17c-.01-.027-.023-.059-.038-.094-.16-.373-.6-1.16-.8-1.5-.167.493-.315.954-.438,1.371a12.131,12.131,0,0,1,.908,2.8s-.03-.115-.171-.515a19.037,19.037,0,0,0-.9-1.708,4.037,4.037,0,0,0-.264,1.724,6.009,6.009,0,0,1,.493,1.383c.334,1.283.566,2.846.566,2.846s.008.1.02.263a26.145,26.145,0,0,0,.065,3.205,11.362,11.362,0,0,0,.584,3.1l.18-.1a13.859,13.859,0,0,1-.478-4.628,35.269,35.269,0,0,1,1.938-9.688c2.01-5.308,4.8-9.568,7.35-11.6-2.326,2.1-5.474,8.9-6.417,11.418a45.656,45.656,0,0,0-2.254,8A6.211,6.211,0,0,1,21.39,20s1.233-1.521,2.674-3.693a26.206,26.206,0,0,0-2.755.733c-.7.294-.889.394-.889.394a23.939,23.939,0,0,1,4.215-2.007c2.676-4.215,5.592-10.2,2.656-12.824\" style=\"fill:#003b57\"></path>")], 2) : _vm.isSame('MongoDB') ? _c('svg', {
    attrs: {
      "xmlns": "http://www.w3.org/2000/svg",
      "viewBox": "0 0 128 128"
    }
  }, [_vm._ssrNode("<path fill-rule=\"evenodd\" clip-rule=\"evenodd\" fill=\"#4FAA41\" d=\"M90.491 57.282c-.37-4.79-1.496-9.409-3.062-13.934-3.244-10.104-8.45-19.046-15.783-26.74-1.854-1.946-3.916-3.729-5.209-6.151-.818-1.532-1.597-3.085-2.394-4.629l-.505-1.273c-.085.292-.139.396-.142.501-.065 2.517-1.491 4.224-3.267 5.817-1.997 1.793-3.856 3.739-5.775 5.618-1.968 2.588-3.935 5.176-5.901 7.763-1.592 2.925-3.182 5.85-4.772 8.775l-3.19 8.617-.096.134c-1.756 5.768-2.622 11.698-3.048 17.688-.16 2.251.022 4.535.149 6.798.181 3.235.743 6.415 1.586 9.545 3.062 11.372 9.276 20.805 17.771 28.819 1.579 1.489 3.199 2.843 4.847 4.26.282-.965.507-1.93.763-2.895.256-.961.515-1.917.688-2.881-.174.964-.369 1.92-.562 2.881l-.826 2.895.738 2.501.684 3.884.326 4.053c-.003.823-.036 1.648.014 2.47.012.21.288.404.442.606l1.376.483 1.434.558-.246-3.603-.011-3.548.495-5.405.359-1.177 1.027-1.82c1.268-1.02 2.629-1.946 3.784-3.081 2.09-2.054 4.175-4.134 6.045-6.383 2.427-2.917 4.515-6.101 6.191-9.516 1.122-2.284 2.178-4.614 3.052-7.001.77-2.104 1.247-4.315 1.854-6.479.054-.156.126-.309.16-.468 1.254-5.841 1.465-11.741 1.004-17.682zm-23.599 49.375l-.805-1.763.805 1.763 1.183 1.01-1.183-1.01z\"></path>")]) : _vm.isSame('Vercel') ? _c('svg', {
    attrs: {
      "xmlns": "http://www.w3.org/2000/svg",
      "width": "512",
      "height": "512",
      "viewBox": "0 0 512 512"
    }
  }, [_vm._ssrNode("<path fill-rule=\"evenodd\" d=\"m256 48l240 416H16Z\" class=\"fill-black/75 dark:fill-white/90\"></path>")]) : _vm.isSame('Railway') ? _c('svg', {
    attrs: {
      "xmlns": "http://www.w3.org/2000/svg",
      "width": "1024",
      "height": "1024",
      "viewBox": "0 0 1024 1024",
      "fill": "none"
    }
  }, [_vm._ssrNode("<path d=\"M4.756 438.175A520.713 520.713 0 0 0 0 489.735h777.799c-2.716-5.306-6.365-10.09-10.045-14.772-132.97-171.791-204.498-156.896-306.819-161.26-34.114-1.403-57.249-1.967-193.037-1.967-72.677 0-151.688.185-228.628.39-9.96 26.884-19.566 52.942-24.243 74.14h398.571v51.909H4.756ZM783.93 541.696H.399c.82 13.851 2.112 27.517 3.978 40.999h723.39c32.248 0 50.299-18.297 56.162-40.999ZM45.017 724.306S164.941 1018.77 511.46 1024c207.112 0 385.071-123.006 465.907-299.694H45.017Z\" fill=\"#fff\" class=\"fill-black/75 dark:fill-white/90\"></path> <path d=\"M511.454 0C319.953 0 153.311 105.16 65.31 260.612c68.771-.144 202.704-.226 202.704-.226h.031v-.051c158.309 0 164.193.707 195.118 1.998l19.149.706c66.7 2.224 148.683 9.384 213.19 58.19 35.015 26.471 85.571 84.896 115.708 126.52 27.861 38.499 35.876 82.756 16.933 125.158-17.436 38.97-54.952 62.215-100.383 62.215H16.69s4.233 17.944 10.58 37.751h970.632A510.385 510.385 0 0 0 1024 512.218C1024.01 229.355 794.532 0 511.454 0Z\" fill=\"#fff\" class=\"fill-black/75 dark:fill-white/90\"></path>")]) : _vm.isSame('C') ? _c('svg', {
    attrs: {
      "xmlns:dc": "http://purl.org/dc/elements/1.1/",
      "xmlns:cc": "http://creativecommons.org/ns#",
      "xmlns:rdf": "http://www.w3.org/1999/02/22-rdf-syntax-ns#",
      "xmlns:svg": "http://www.w3.org/2000/svg",
      "xmlns": "http://www.w3.org/2000/svg",
      "xmlns:sodipodi": "http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd",
      "xmlns:inkscape": "http://www.inkscape.org/namespaces/inkscape",
      "viewBox": "0 0 38.000089 42.000031",
      "width": "380.00089",
      "height": "420.00031",
      "version": "1.1",
      "id": "svg10",
      "sodipodi:docname": "icons8-c-programming.svg",
      "inkscape:version": "1.0.1 (3bc2e813f5, 2020-09-07)"
    }
  }, [_c('metadata', {
    attrs: {
      "id": "metadata16"
    }
  }, [_c('rdf:RDF', [_c('cc:Work', {
    attrs: {
      "rdf:about": ""
    }
  }, [_c('dc:format', [_vm._v("image/svg+xml")]), _vm._v(" "), _c('dc:type', {
    attrs: {
      "rdf:resource": "http://purl.org/dc/dcmitype/StillImage"
    }
  }), _vm._v(" "), _c('dc:title')], 1)], 1)], 1), _vm._ssrNode(" <defs id=\"defs14\"></defs> "), _c('sodipodi:namedview', {
    attrs: {
      "pagecolor": "#ffffff",
      "bordercolor": "#666666",
      "borderopacity": "1",
      "objecttolerance": "10",
      "gridtolerance": "10",
      "guidetolerance": "10",
      "inkscape:pageopacity": "0",
      "inkscape:pageshadow": "2",
      "inkscape:window-width": "1920",
      "inkscape:window-height": "1056",
      "id": "namedview12",
      "showgrid": "false",
      "fit-margin-top": "0",
      "fit-margin-left": "0",
      "fit-margin-right": "0",
      "fit-margin-bottom": "0",
      "inkscape:zoom": "1.4895833",
      "inkscape:cx": "190",
      "inkscape:cy": "210.00282",
      "inkscape:window-x": "0",
      "inkscape:window-y": "0",
      "inkscape:window-maximized": "1",
      "inkscape:current-layer": "svg10"
    }
  }), _vm._ssrNode(" <path fill=\"#283593\" fill-rule=\"evenodd\" d=\"m 17.903,0.28628166 c 0.679,-0.381 1.515,-0.381 2.193,0 C 23.451,2.1692817 33.547,7.8372817 36.903,9.7202817 37.582,10.100282 38,10.804282 38,11.566282 c 0,3.766 0,15.101 0,18.867 0,0.762 -0.418,1.466 -1.097,1.847 -3.355,1.883 -13.451,7.551 -16.807,9.434 -0.679,0.381 -1.515,0.381 -2.193,0 -3.355,-1.883 -13.451,-7.551 -16.807,-9.434 -0.678,-0.381 -1.096,-1.084 -1.096,-1.846 0,-3.766 0,-15.101 0,-18.867 0,-0.762 0.418,-1.466 1.097,-1.8470003 3.354,-1.883 13.452,-7.551 16.806,-9.43400004 z\" clip-rule=\"evenodd\" id=\"path2\" style=\"fill:#004482;fill-opacity:1\"></path> <path fill=\"#5c6bc0\" fill-rule=\"evenodd\" d=\"m 0.304,31.404282 c -0.266,-0.356 -0.304,-0.694 -0.304,-1.149 0,-3.744 0,-15.014 0,-18.759 0,-0.758 0.417,-1.458 1.094,-1.8360003 3.343,-1.872 13.405,-7.507 16.748,-9.38000004 0.677,-0.379 1.594,-0.371 2.271,0.008 3.343,1.87200004 13.371,7.45900004 16.714,9.33100004 0.27,0.152 0.476,0.335 0.66,0.5760003 z\" clip-rule=\"evenodd\" id=\"path4\" style=\"fill:#659ad2;fill-opacity:1\"></path> <path fill=\"#ffffff\" fill-rule=\"evenodd\" d=\"m 19,7.0002817 c 7.727,0 14,6.2730003 14,14.0000003 0,7.727 -6.273,14 -14,14 -7.727,0 -14,-6.273 -14,-14 0,-7.727 6.273,-14.0000003 14,-14.0000003 z m 0,7.0000003 c 3.863,0 7,3.136 7,7 0,3.863 -3.137,7 -7,7 -3.863,0 -7,-3.137 -7,-7 0,-3.864 3.136,-7 7,-7 z\" clip-rule=\"evenodd\" id=\"path6\"></path> <path fill=\"#3949ab\" fill-rule=\"evenodd\" d=\"m 37.485,10.205282 c 0.516,0.483 0.506,1.211 0.506,1.784 0,3.795 -0.032,14.589 0.009,18.384 0.004,0.396 -0.127,0.813 -0.323,1.127 l -19.084,-10.5 z\" clip-rule=\"evenodd\" id=\"path8\" style=\"fill:#00599c;fill-opacity:1\"></path>")], 2) : _vm.isSame('C++') ? _c('svg', {
    attrs: {
      "xmlns": "http://www.w3.org/2000/svg",
      "xmlns:xlink": "http://www.w3.org/1999/xlink",
      "version": "1.1",
      "id": "Layer_1",
      "x": "0px",
      "y": "0px",
      "width": "306px",
      "height": "344.35px",
      "viewBox": "0 0 306 344.35",
      "enable-background": "new 0 0 306 344.35",
      "xml:space": "preserve"
    }
  }, [_vm._ssrNode("<path fill=\"#00599C\" d=\"M302.107,258.262c2.401-4.159,3.893-8.845,3.893-13.053V99.14c0-4.208-1.49-8.893-3.892-13.052L153,172.175  L302.107,258.262z\"></path> <path fill=\"#004482\" d=\"M166.25,341.193l126.5-73.034c3.644-2.104,6.956-5.737,9.357-9.897L153,172.175L3.893,258.263  c2.401,4.159,5.714,7.793,9.357,9.896l126.5,73.034C147.037,345.401,158.963,345.401,166.25,341.193z\"></path> <path fill=\"#659AD2\" d=\"M302.108,86.087c-2.402-4.16-5.715-7.793-9.358-9.897L166.25,3.156c-7.287-4.208-19.213-4.208-26.5,0  L13.25,76.19C5.962,80.397,0,90.725,0,99.14v146.069c0,4.208,1.491,8.894,3.893,13.053L153,172.175L302.108,86.087z\"></path> <g><path fill=\"#FFFFFF\" d=\"M153,274.175c-56.243,0-102-45.757-102-102s45.757-102,102-102c36.292,0,70.139,19.53,88.331,50.968   l-44.143,25.544c-9.105-15.736-26.038-25.512-44.188-25.512c-28.122,0-51,22.878-51,51c0,28.121,22.878,51,51,51   c18.152,0,35.085-9.776,44.191-25.515l44.143,25.543C223.142,254.644,189.294,274.175,153,274.175z\"></path></g> <g><polygon fill=\"#FFFFFF\" points=\"255,166.508 243.666,166.508 243.666,155.175 232.334,155.175 232.334,166.508 221,166.508    221,177.841 232.334,177.841 232.334,189.175 243.666,189.175 243.666,177.841 255,177.841  \"></polygon></g> <g><polygon fill=\"#FFFFFF\" points=\"297.5,166.508 286.166,166.508 286.166,155.175 274.834,155.175 274.834,166.508 263.5,166.508    263.5,177.841 274.834,177.841 274.834,189.175 286.166,189.175 286.166,177.841 297.5,177.841  \"></polygon></g>")]) : _vm.isSame('Python') ? _c('svg', {
    attrs: {
      "xmlns": "http://www.w3.org/2000/svg",
      "xmlns:xlink": "http://www.w3.org/1999/xlink",
      "viewBox": "0 0 32 32"
    }
  }, [_vm._ssrNode("<defs>", "</defs>", [_c('linearGradient', {
    attrs: {
      "id": "a",
      "x1": "-133.268",
      "y1": "-202.91",
      "x2": "-133.198",
      "y2": "-202.84",
      "gradientTransform": "translate(25243.061 38519.17) scale(189.38 189.81)",
      "gradientUnits": "userSpaceOnUse"
    }
  }, [_c('stop', {
    attrs: {
      "offset": "0",
      "stop-color": "#387eb8"
    }
  }), _c('stop', {
    attrs: {
      "offset": "1",
      "stop-color": "#366994"
    }
  })], 1), _c('linearGradient', {
    attrs: {
      "id": "b",
      "x1": "-133.575",
      "y1": "-203.203",
      "x2": "-133.495",
      "y2": "-203.133",
      "gradientTransform": "translate(25309.061 38583.42) scale(189.38 189.81)",
      "gradientUnits": "userSpaceOnUse"
    }
  }, [_c('stop', {
    attrs: {
      "offset": "0",
      "stop-color": "#ffe052"
    }
  }), _c('stop', {
    attrs: {
      "offset": "1",
      "stop-color": "#ffc331"
    }
  })], 1)], 1), _vm._ssrNode("<title>file_type_python</title><path d=\"M15.885,2.1c-7.1,0-6.651,3.07-6.651,3.07V8.36h6.752v1H6.545S2,8.8,2,16.005s4.013,6.912,4.013,6.912H8.33V19.556s-.13-4.013,3.9-4.013h6.762s3.772.06,3.772-3.652V5.8s.572-3.712-6.842-3.712h0ZM12.153,4.237a1.214,1.214,0,1,1-1.183,1.244v-.02a1.214,1.214,0,0,1,1.214-1.214h0Z\" style=\"fill:url(#a)\"></path><path d=\"M16.085,29.91c7.1,0,6.651-3.08,6.651-3.08V23.65H15.985v-1h9.47S30,23.158,30,15.995s-4.013-6.912-4.013-6.912H23.64V12.4s.13,4.013-3.9,4.013H12.975S9.2,16.356,9.2,20.068V26.2s-.572,3.712,6.842,3.712h.04Zm3.732-2.147A1.214,1.214,0,1,1,21,26.519v.03a1.214,1.214,0,0,1-1.214,1.214h.03Z\" style=\"fill:url(#b)\"></path>")], 2) : _vm.isSame('Symfony') ? _c('svg', {
    attrs: {
      "xmlns": "http://www.w3.org/2000/svg",
      "role": "img",
      "viewBox": "0 0 24 24"
    }
  }, [_vm._ssrNode("<path d=\"M24 12c0 6.628-5.372 12-12 12S0 18.628 0 12 5.372 0 12 0s12 5.372 12 12zm-6.753-7.561c-1.22.042-2.283.715-3.075 1.644-.878 1.02-1.461 2.229-1.881 3.461-.753-.614-1.332-1.414-2.539-1.761-.966-.297-2.015-.105-2.813.514-.41.319-.71.757-.861 1.254-.36 1.176.381 2.225.719 2.6l.737.79c.15.154.519.56.339 1.138-.193.631-.951 1.037-1.732.799-.348-.106-.848-.366-.734-.73.045-.15.152-.263.21-.391.052-.11.077-.194.095-.242.141-.465-.053-1.07-.551-1.223-.465-.143-.939-.03-1.125.566-.209.68.117 1.913 1.86 2.449 2.04.628 3.765-.484 4.009-1.932.153-.907-.255-1.582-1.006-2.447l-.612-.677c-.371-.37-.497-1.002-.114-1.485.324-.409.785-.584 1.539-.379 1.103.3 1.594 1.063 2.412 1.68-.338 1.11-.56 2.223-.759 3.222l-.123.746c-.585 3.07-1.033 4.757-2.194 5.726-.234.166-.57.416-1.073.434-.266.005-.352-.176-.355-.257-.006-.184.15-.271.255-.353.154-.083.39-.224.372-.674-.016-.532-.456-.994-1.094-.973-.477.017-1.203.465-1.176 1.286.028.85.819 1.485 2.012 1.444.638-.021 2.062-.281 3.464-1.949 1.633-1.911 2.09-4.101 2.434-5.706l.383-2.116c.213.024.441.042.69.048 2.032.044 3.049-1.01 3.064-1.776.01-.464-.304-.921-.744-.91-.386.009-.718.278-.806.654-.094.428.646.813.068 1.189-.41.266-1.146.452-2.184.3l.188-1.042c.386-1.976.859-4.407 2.661-4.467.132-.007.612.006.623.323.003.105-.022.134-.147.375-.115.155-.174.345-.168.537.017.504.4.836.957.816.743-.023.955-.748.945-1.119-.032-.874-.952-1.424-2.17-1.386z\" class=\"fill-black/75 dark:fill-white/90\"></path>")]) : _vm.isSame('Vite.js') ? _c('svg', {
    attrs: {
      "xmlns": "http://www.w3.org/2000/svg",
      "width": "410",
      "height": "404",
      "viewBox": "0 0 410 404",
      "fill": "none"
    }
  }, [_vm._ssrNode("<path d=\"M399.641 59.5246L215.643 388.545C211.844 395.338 202.084 395.378 198.228 388.618L10.5817 59.5563C6.38087 52.1896 12.6802 43.2665 21.0281 44.7586L205.223 77.6824C206.398 77.8924 207.601 77.8904 208.776 77.6763L389.119 44.8058C397.439 43.2894 403.768 52.1434 399.641 59.5246Z\" fill=\"url(#Vitepaint0_linear)\"></path> <path d=\"M292.965 1.5744L156.801 28.2552C154.563 28.6937 152.906 30.5903 152.771 32.8664L144.395 174.33C144.198 177.662 147.258 180.248 150.51 179.498L188.42 170.749C191.967 169.931 195.172 173.055 194.443 176.622L183.18 231.775C182.422 235.487 185.907 238.661 189.532 237.56L212.947 230.446C216.577 229.344 220.065 232.527 219.297 236.242L201.398 322.875C200.278 328.294 207.486 331.249 210.492 326.603L212.5 323.5L323.454 102.072C325.312 98.3645 322.108 94.137 318.036 94.9228L279.014 102.454C275.347 103.161 272.227 99.746 273.262 96.1583L298.731 7.86689C299.767 4.27314 296.636 0.855181 292.965 1.5744Z\" fill=\"url(#Vitepaint1_linear)\"></path> "), _vm._ssrNode("<defs>", "</defs>", [_c('linearGradient', {
    attrs: {
      "id": "Vitepaint0_linear",
      "x1": "6.00017",
      "y1": "32.9999",
      "x2": "235",
      "y2": "344",
      "gradientUnits": "userSpaceOnUse"
    }
  }, [_c('stop', {
    attrs: {
      "stop-color": "#41D1FF"
    }
  }), _vm._v(" "), _c('stop', {
    attrs: {
      "offset": "1",
      "stop-color": "#BD34FE"
    }
  })], 1), _vm._ssrNode(" "), _c('linearGradient', {
    attrs: {
      "id": "Vitepaint1_linear",
      "x1": "194.651",
      "y1": "8.81818",
      "x2": "236.076",
      "y2": "292.989",
      "gradientUnits": "userSpaceOnUse"
    }
  }, [_c('stop', {
    attrs: {
      "stop-color": "#FFEA83"
    }
  }), _vm._v(" "), _c('stop', {
    attrs: {
      "offset": "0.0833333",
      "stop-color": "#FFDD35"
    }
  }), _vm._v(" "), _c('stop', {
    attrs: {
      "offset": "1",
      "stop-color": "#FFA800"
    }
  })], 1)], 2)], 2) : _vm._e();
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./src/components/Icon/Dev.vue?vue&type=template&id=09b2f521&

// EXTERNAL MODULE: external "vue"
var external_vue_ = __webpack_require__(0);
var external_vue_default = /*#__PURE__*/__webpack_require__.n(external_vue_);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--12-0!./node_modules/ts-loader??ref--12-1!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/windicss-webpack-plugin/dist/loaders/windicss-template.cjs!./src/components/Icon/Dev.vue?vue&type=script&lang=ts&

/* harmony default export */ var Devvue_type_script_lang_ts_ = (external_vue_default.a.extend({
  props: {
    brand: {
      type: String,
      required: true,
      default: ""
    }
  },
  methods: {
    /**
     * Checks if passed value matches with the prop value.
     * @prop {string} value
     * @returns {boolean}
     */
    isSame(value) {
      var _a;
      return ((_a = this.brand) === null || _a === void 0 ? void 0 : _a.toLowerCase()) === (value === null || value === void 0 ? void 0 : value.toLowerCase());
    }
  }
}));
// CONCATENATED MODULE: ./src/components/Icon/Dev.vue?vue&type=script&lang=ts&
 /* harmony default export */ var Icon_Devvue_type_script_lang_ts_ = (Devvue_type_script_lang_ts_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./src/components/Icon/Dev.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  Icon_Devvue_type_script_lang_ts_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "88b89be4"
  
)

/* harmony default export */ var Dev = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {Title: __webpack_require__(28).default})


/***/ })

};;
//# sourceMappingURL=repos.js.map