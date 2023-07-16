exports.ids = [74,0,11,12,19,22,27,33,36,48,64,65,66,67,70];
exports.modules = {

/***/ 104:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(132);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(5).default
module.exports.__inject__ = function (context) {
  add("1635cb14", content, true, context)
};

/***/ }),

/***/ 116:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/windicss-webpack-plugin/dist/loaders/windicss-template.cjs!./src/components/Status.vue?vue&type=template&id=6d994c6b&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c,
    _setup = _vm._self._setupProxy;
  return !_vm.finished || !_vm.getStatusDetails || Object.keys(_vm.lanyard).length === 0 ? _c('div', {
    staticClass: "flex items-center space-x-2"
  }, [_c('SkeletonLoader', {
    staticClass: "w-5 h-5",
    attrs: {
      "type": "rounded"
    }
  }), _vm._ssrNode(" "), _c('SkeletonLoader', {
    staticClass: "w-1/2 h-5"
  })], 2) : _c('div', {
    staticClass: "flex items-center space-x-2 rounded-md text-neutral-500"
  }, [_vm.lanyard.spotify ? _c('IconBrand', {
    staticClass: "w-5 h-5",
    attrs: {
      "brand": "spotify"
    }
  }) : _c('div', {
    directives: [{
      name: "tippy",
      rawName: "v-tippy",
      value: {
        content: 'Discord status',
        placement: 'bottom'
      },
      expression: "{ content: 'Discord status', placement: 'bottom' }"
    }],
    class: `h-5 w-5 rounded-full flex-shrink-0 ${_vm.getDiscordStatus}`
  }), _vm._ssrNode(" "), _c('transition', {
    attrs: {
      "name": "fade",
      "mode": "out-in"
    }
  }, [_vm.newData === false ? _c('div', {
    key: "notNewData",
    staticClass: "text-sm leading-tight truncate",
    attrs: {
      "title": _vm.getStatusDetails.replaceAll('**', '')
    },
    domProps: {
      "innerHTML": _vm._s(_vm.getSafeHtml)
    }
  }) : _c('div', {
    key: "newData",
    staticClass: "text-sm leading-tight truncate",
    attrs: {
      "title": _vm.getStatusDetails.replaceAll('**', '')
    },
    domProps: {
      "innerHTML": _vm._s(_vm.getSafeHtml)
    }
  })])], 2);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./src/components/Status.vue?vue&type=template&id=6d994c6b&

// EXTERNAL MODULE: external "vue"
var external_vue_ = __webpack_require__(0);
var external_vue_default = /*#__PURE__*/__webpack_require__.n(external_vue_);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--12-0!./node_modules/ts-loader??ref--12-1!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/windicss-webpack-plugin/dist/loaders/windicss-template.cjs!./src/components/Status.vue?vue&type=script&lang=ts&

/* harmony default export */ var Statusvue_type_script_lang_ts_ = (external_vue_default.a.extend({
  data() {
    return {
      finished: false,
      newData: false,
      lanyard: {},
      socket: null
    };
  },
  computed: {
    /**
     * Returns status detail as string.
     * @returns {string}
     */
    getStatusDetails() {
      var _a, _b, _c;
      const lanyard = this.lanyard;
      if (!lanyard) return "Couldn't fetch data from Lanyard";
      if (lanyard.discord_status === "offline") return "Offline";
      const filtered = ((_b = (_a = lanyard.activities) === null || _a === void 0 ? void 0 : _a.filter(activity => activity.type !== 4)) === null || _b === void 0 ? void 0 : _b.pop()) || null;
      if (lanyard.spotify) {
        const {
          song,
          artist
        } = lanyard.spotify || {};
        const firstArtist = (_c = artist === null || artist === void 0 ? void 0 : artist.split("; ")) === null || _c === void 0 ? void 0 : _c[0];
        return `Listening to **${song}** by **${firstArtist || "someone"}**`;
      } else {
        return "Online";
      }
    },
    /**
     * Replaces only markdown-like "**" and wraps content into HTML strong element.
     */
    getSafeHtml() {
      return this.getStatusDetails.replace(/\*\*(.*?)\*\*/gm, "<strong class='font-medium text-neutral-700 dark:text-neutral-200'>$1</strong>");
    },
    /**
     * Returns Discord status colors.
     * @returns {string} Tailwind color classes
     */
    getDiscordStatus() {
      switch (this.lanyard.discord_status) {
        case "online":
          return "bg-green-500";
        case "idle":
          return "bg-yellow-500";
        case "dnd":
          return "bg-red-500";
        default:
          return "bg-gray-500 dark:bg-gray-200";
      }
    }
  },
  beforeDestroy() {
    var _a;
    (_a = this.socket) === null || _a === void 0 ? void 0 : _a.close();
  },
  async mounted() {
    var _a;
    this.socket = await this.$lanyard({
      userId: "253951718423789571",
      socket: true
    });
    (_a = this.socket) === null || _a === void 0 ? void 0 : _a.addEventListener("message", ({
      data
    }) => {
      const {
        t: type,
        d: status
      } = JSON.parse(data);
      if (["INIT_STATE", "PRESENCE_UPDATE"].includes(type)) this.lanyard = status || {};
      this.newData = !this.newData;
      this.finished = true;
    });
  }
}));
// CONCATENATED MODULE: ./src/components/Status.vue?vue&type=script&lang=ts&
 /* harmony default export */ var components_Statusvue_type_script_lang_ts_ = (Statusvue_type_script_lang_ts_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./src/components/Status.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_Statusvue_type_script_lang_ts_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "6a7fb766"
  
)

/* harmony default export */ var Status = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {SkeletonLoader: __webpack_require__(70).default,IconBrand: __webpack_require__(82).default})


/***/ }),

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

/***/ 118:
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


/***/ }),

/***/ 126:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/windicss-webpack-plugin/dist/loaders/windicss-template.cjs!./src/components/Icon/Ellipsis.vue?vue&type=template&id=00ed1c33&
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
  }, [_vm._ssrNode("<path stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M6.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM12.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM18.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0z\"></path>")]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./src/components/Icon/Ellipsis.vue?vue&type=template&id=00ed1c33&

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./src/components/Icon/Ellipsis.vue

var script = {}


/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  script,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "4930f030"
  
)

/* harmony default export */ var Ellipsis = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 131:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_windicss_webpack_plugin_dist_loaders_windicss_style_pitcher_cjs_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_windicss_webpack_plugin_dist_loaders_windicss_template_cjs_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_77680e98_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(104);
/* harmony import */ var _node_modules_windicss_webpack_plugin_dist_loaders_windicss_style_pitcher_cjs_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_windicss_webpack_plugin_dist_loaders_windicss_template_cjs_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_77680e98_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_windicss_webpack_plugin_dist_loaders_windicss_style_pitcher_cjs_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_windicss_webpack_plugin_dist_loaders_windicss_template_cjs_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_77680e98_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_windicss_webpack_plugin_dist_loaders_windicss_style_pitcher_cjs_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_windicss_webpack_plugin_dist_loaders_windicss_template_cjs_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_77680e98_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_windicss_webpack_plugin_dist_loaders_windicss_style_pitcher_cjs_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_windicss_webpack_plugin_dist_loaders_windicss_template_cjs_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_77680e98_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 132:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".description-link[data-v-77680e98]{--tw-border-opacity:1;--tw-border-opacity:0.5;border-bottom-width:2px;border-color:hsla(0,0%,45%,.5);border-color:rgba(115,115,115,var(--tw-border-opacity))}.description-link[data-v-77680e98]:hover{--tw-border-opacity:0.75}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 152:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/windicss-webpack-plugin/dist/loaders/windicss-template.cjs!./src/pages/index.vue?vue&type=template&id=77680e98&scoped=true&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c,
    _setup = _vm._self._setupProxy;
  return _c('div', {
    staticClass: "space-y-24 mb-10",
    attrs: {
      "id": "loading"
    }
  }, [_vm._ssrNode("<header class=\"rounded-md flex flex-col-reverse my-16 py-10 md:flex-row md:items-center md:justify-between justify-center\" data-v-77680e98>", "</header>", [_vm._ssrNode("<div class=\"md:w-8/12\" data-v-77680e98>", "</div>", [_vm._ssrNode("<div class=\"space-y-6\" data-v-77680e98>", "</div>", [_c('Status', {
    staticClass: "mt-4 flex justify-center md:justify-start"
  }), _vm._ssrNode(" <h1 class=\"font-semibold text-center text-1xl md:text-1xl md:text-left text-black/90 leading-normal dark:text-white/90\" data-v-77680e98>\n            Hi, my name is\n          </h1> <h1 class=\"font-semibold text-center text-4xl md:text-6xl md:text-left text-black/90 leading-normal dark:text-white/90\" data-v-77680e98>\n            Jérémy Caruelle\n          </h1> <h2 class=\"font-normal text-center text-2xl md:text-2xl md:text-left text-black/60 leading-normal dark:text-white/60\" data-v-77680e98>" + _vm._ssrEscape("\n            I'm a " + _vm._s((() => {
    const today = new Date(),
      bday = new Date(2000, 11, 14),
      m = today.getMonth() - bday.getMonth();
    let age = today.getFullYear() - bday.getFullYear();
    if (m < 0 || m === 0 && today.getDate() < bday.getDate()) age--;
    return age;
  })()) + " years old French fullstack developer\n          ") + "</h2> "), _vm._ssrNode("<div class=\"flex items-center justify-center md:justify-start gap-x-3 gap-y-2 flex-wrap\" data-v-77680e98>", "</div>", [_vm._l(['JavaScript', 'React.js', 'Node.js'], function (item) {
    return _vm._ssrNode("<div class=\"cursor-pointer justify-center px-5 py-2 rounded-lg card-base flex items-center space-x-2\" data-v-77680e98>", "</div>", [_c('IconDev', {
      staticClass: "h-5 w-5 !fill-red-500 grayscale filter",
      attrs: {
        "brand": item
      }
    })], 1);
  }), _vm._ssrNode(" "), _c('a', {
    directives: [{
      name: "tippy",
      rawName: "v-tippy",
      value: {
        content: 'More',
        placement: 'bottom'
      },
      expression: "{ content: 'More', placement: 'bottom' }"
    }],
    staticClass: "cursor-pointer justify-center px-5 py-2 rounded-lg card-base flex items-center space-x-2",
    attrs: {
      "href": "#technologies"
    }
  }, [_c('IconEllipsis', {
    staticClass: "h-5 w-5"
  })], 1)], 2)], 2)]), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"rounded-full mx-auto mb-4 md:mb-0\" data-v-77680e98>", "</div>", [_c('SmartImage', {
    staticClass: "rounded-full h-64 w-64",
    attrs: {
      "src": "/assets/images/memoji.png",
      "width": "600px",
      "height": "600px"
    }
  })], 1)], 2), _vm._ssrNode(" "), _vm._ssrNode("<section id=\"pages\" data-v-77680e98>", "</section>", [_c('Title', [_vm._v("Pages")]), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"mt-4 grid gap-4 md:grid-cols-2\" data-v-77680e98>", "</div>", _vm._l(_vm.cards.pages, function (card, index) {
    return _c('Card', {
      key: `card-p-${index}`,
      attrs: {
        "title": card.title,
        "href": card.href
      }
    }, [_vm._v("\n          " + _vm._s(card.description) + "\n        ")]);
  }), 1)], 2), _vm._ssrNode(" "), _vm._ssrNode("<section id=\"me\" data-v-77680e98>", "</section>", [_c('Title', [_vm._v("Me")]), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"mt-4 grid gap-4 md:grid-cols-2\" data-v-77680e98>", "</div>", _vm._l(_vm.cards.me, function (card, index) {
    return _c('Card', {
      key: `card-m-${index}`,
      attrs: {
        "title": card.title,
        "href": card.href
      }
    }, [_vm._v("\n          " + _vm._s(card.description) + "\n        ")]);
  }), 1)], 2), _vm._ssrNode(" "), _vm._ssrNode("<section id=\"experiences\" class=\"grid gap-x-4 gap-y-24 md:grid-cols-2\" data-v-77680e98>", "</section>", [_vm._ssrNode("<div data-v-77680e98>", "</div>", [_vm._ssrNode("<div class=\"flex items-center gap-4 justify-between\" data-v-77680e98>", "</div>", [_c('Title', [_vm._v("Experience")]), _vm._ssrNode(" <button type=\"button\" class=\"text-black/50 text-sm hover:underline dark:text-white/30\" data-v-77680e98></button>")], 2), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"mt-4 grid gap-2\" data-v-77680e98>", "</div>", _vm._l(_vm.experiences.jobs, function (experience, index) {
    return _c('CardExperience', {
      directives: [{
        name: "show",
        rawName: "v-show",
        value: experience.isHidden ? _vm.showExtra.jobs : true,
        expression: "experience.isHidden ? showExtra.jobs : true"
      }],
      key: `experience-job-${index}`,
      attrs: {
        "title": experience.title,
        "url": experience.url,
        "hidden-badge": experience.isHidden,
        "date": experience.date,
        "position": experience.position
      }
    });
  }), 1)], 2), _vm._ssrNode(" "), _vm._ssrNode("<div data-v-77680e98>", "</div>", [_vm._ssrNode("<div class=\"flex items-center gap-4 justify-between\" data-v-77680e98>", "</div>", [_c('Title', [_vm._v("Education")]), _vm._ssrNode(" <button type=\"button\" class=\"text-black/50 text-sm hover:underline dark:text-white/30\" data-v-77680e98></button>")], 2), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"mt-4 grid gap-2\" data-v-77680e98>", "</div>", _vm._l(_vm.experiences.education, function (experience, index) {
    return _c('CardExperience', {
      directives: [{
        name: "show",
        rawName: "v-show",
        value: experience.isHidden ? _vm.showExtra.education : true,
        expression: "experience.isHidden ? showExtra.education : true"
      }],
      key: `experience-education-${index}`,
      attrs: {
        "title": experience.title,
        "url": experience.url,
        "hidden-badge": experience.isHidden,
        "date": experience.date,
        "position": experience.position
      }
    });
  }), 1)], 2)], 2), _vm._ssrNode(" "), _vm._ssrNode("<section id=\"technologies\" data-v-77680e98>", "</section>", [_c('Title', [_vm._v("Technologies I use")]), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"flex flex-col space-y-6 mt-8\" data-v-77680e98>", "</div>", _vm._l(_vm.skills, function (category) {
    return _vm._ssrNode("<section data-v-77680e98>", "</section>", [_vm._ssrNode("<h5 class=\"text-sm uppercase text-black/50 pb-2 mb-4 border-b border-black/5 dark:text-white/30 dark:border-white/5\" data-v-77680e98>" + _vm._ssrEscape("\n            " + _vm._s(category.title) + "\n          ") + "</h5> "), _vm._ssrNode("<div class=\"grid md:grid-cols-3 grid-cols-1 lg:grid-cols-4 gap-x-2 gap-y-2\" data-v-77680e98>", "</div>", _vm._l(category.items, function (skill, index) {
      return _c('CardSkill', _vm._b({
        key: `skill-${index}`
      }, 'CardSkill', typeof skill === 'object' ? skill : {
        title: skill
      }, false));
    }), 1)], 2);
  }), 0)], 2)], 2);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./src/pages/index.vue?vue&type=template&id=77680e98&scoped=true&

// EXTERNAL MODULE: external "vue"
var external_vue_ = __webpack_require__(0);
var external_vue_default = /*#__PURE__*/__webpack_require__.n(external_vue_);

// EXTERNAL MODULE: ./src/components/Fire.vue + 2 modules
var Fire = __webpack_require__(85);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--12-0!./node_modules/ts-loader??ref--12-1!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/windicss-webpack-plugin/dist/loaders/windicss-template.cjs!./src/pages/index.vue?vue&type=script&lang=ts&


let firstLoad = true;
/* harmony default export */ var pagesvue_type_script_lang_ts_ = (external_vue_default.a.extend({
  components: {
    Fire: Fire["default"]
  },
  data() {
    return {
      loading: true,
      showModal: false,
      showExtra: {
        jobs: false,
        education: false
      },
      repos: [],
      experiences: {
        jobs: [{
          title: "Coriolis Service",
          url: "https://www.coriolis-service.fr/",
          position: "Stage as a Full-Stack Developer",
          date: "June to July 2021"
        }],
        education: [{
          title: "Self-taught",
          url: "/",
          position: "A blend of passion, curiosity and fascination.",
          date: "For life"
        }, {
          title: "Technological degree in Baccalaureate in STI2D",
          url: "https://edouard-branly.ac-amiens.fr/",
          position: "Edouard Branly / France, Amiens",
          date: "2016-2018"
        }, {
          title: "Two-year technical degree in Computer Science",
          url: "https://www.la-providence.net/fr/",
          position: "La Providence / France, Amiens",
          date: "2020-2022"
        }, {
          title: "Bachelor's in Web and Mobile Development",
          url: "http://www.insset.u-picardie.fr/",
          position: "INSSET / France, Saint-Quentin",
          date: "2022-2023"
        }]
      },
      cards: {
        me: [{
          title: "Repositories",
          description: "Want to see and/or contribute to my code and public repositories?",
          href: "/me/repos"
        },
        // {
        //   title: "Anime",
        //   description:
        //     "Trust your taste? Compare your favourite anime with mine!",
        //   href: "/me/anime",
        // },
        {
          title: "Contact",
          description: "Need help with anything? Want to get in touch? Send me a message!",
          href: "/me/contact"
        }],
        pages: [{
          title: "Blog",
          description: "My personal blog where I write about development, technology and non-sense stuff.",
          href: "/blog"
        }, {
          title: "Projects",
          description: "My projects and contributions to the open-source community.",
          href: "/projects"
        }, {
          title: "Donate",
          description: "Want to support me and my projects so that I can create better stuff in the future?",
          href: "/donate"
        }]
      },
      skills: [{
        title: "Development",
        items: ["HTML", "CSS", "JavaScript", "Node.js", "Vite.js", "React.js", "PHP", "Symfony", "Python", "Tailwind CSS", "C", "C++"]
      }, {
        title: "Apps",
        items: ["WebStorm", "DataGrip", "PhpStorm", "PyCharm", "Visual Studio 2022", "VS Code", "Sketch", "Figma"]
      }, {
        title: "Services",
        items: [{
          title: "GitHub",
          iconPack: "IconBrand"
        }, {
          title: "Railway"
        }, {
          title: "Netlify",
          iconPack: "IconBrand"
        }, {
          title: "Vercel"
        }]
      }, {
        title: "Database",
        items: ["MySQL", "SQLite", "Redis", "MongoDB"]
      }]
    };
  },
  head: {
    title: "Home"
  },
  methods: {
    async scrollToSection(id) {
      if (this.$route.hash === id) await this.$router.replace({
        hash: ""
      });
      await this.$router.replace({
        hash: id
      });
    }
  }
}));
// CONCATENATED MODULE: ./src/pages/index.vue?vue&type=script&lang=ts&
 /* harmony default export */ var src_pagesvue_type_script_lang_ts_ = (pagesvue_type_script_lang_ts_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./src/pages/index.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(131)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  src_pagesvue_type_script_lang_ts_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "77680e98",
  "61350608"
  
)

/* harmony default export */ var pages = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {Status: __webpack_require__(116).default,IconDev: __webpack_require__(87).default,IconEllipsis: __webpack_require__(126).default,SmartImage: __webpack_require__(26).default,Title: __webpack_require__(27).default,Card: __webpack_require__(92).default,Button: __webpack_require__(8).default,CardExperience: __webpack_require__(117).default,CardSkill: __webpack_require__(118).default})


/***/ }),

/***/ 70:
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
  "bb0f25ec"
  
)

/* harmony default export */ var Index = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {SkeletonLoaderRepository: __webpack_require__(73).default,SkeletonLoaderIframe: __webpack_require__(72).default,SkeletonLoaderSong: __webpack_require__(74).default,SkeletonLoaderLastfm: __webpack_require__(76).default,SkeletonLoaderSpinner: __webpack_require__(75).default})


/***/ }),

/***/ 72:
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
  "556b66c8"
  
)

/* harmony default export */ var Iframe = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 73:
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
  "6b653242"
  
)

/* harmony default export */ var Repository = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 74:
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
  "123a12e6"
  
)

/* harmony default export */ var Song = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 75:
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
  "7857d2d1"
  
)

/* harmony default export */ var Spinner = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 76:
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
  "1646d755"
  
)

/* harmony default export */ var Lastfm = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {SkeletonLoader: __webpack_require__(70).default})


/***/ }),

/***/ 81:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(84);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(5).default
module.exports.__inject__ = function (context) {
  add("09922e54", content, true, context)
};

/***/ }),

/***/ 82:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/windicss-webpack-plugin/dist/loaders/windicss-template.cjs!./src/components/Icon/Brand.vue?vue&type=template&id=628a93dd&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c,
    _setup = _vm._self._setupProxy;
  return _vm.isSame('Discord') ? _c('svg', {
    attrs: {
      "xmlns": "http://www.w3.org/2000/svg",
      "fill": "currentColor",
      "viewBox": "0 0 24 24"
    }
  }, [_vm._ssrNode("<path d=\"M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.4189-2.1568 2.4189Z\"></path>")], 2) : _vm.isSame('YouTube') ? _c('svg', {
    attrs: {
      "viewBox": "0 0 20 20",
      "fill": "none",
      "xmlns": "http://www.w3.org/2000/svg"
    }
  }, [_vm._ssrNode("<path d=\"M18.576 5.91a2.117 2.117 0 00-.58-.954 2.276 2.276 0 00-1.002-.552c-1.388-.36-6.971-.36-6.971-.36s-5.584.01-6.97.37a2.276 2.276 0 00-1.003.553 2.117 2.117 0 00-.58.953c-.42 2.346-.582 5.92.012 8.171.102.36.302.69.58.953.277.264.623.455 1.002.552 1.387.36 6.97.36 6.97.36s5.584 0 6.971-.36a2.276 2.276 0 001.002-.552c.278-.264.478-.593.58-.953.443-2.349.58-5.92-.011-8.182z\" fill=\"red\"></path> <path d=\"M8.246 12.553L12.878 10 8.246 7.447v5.106z\" fill=\"#fff\"></path>")]) : _vm.isSame('WhatsApp') ? _c('svg', {
    attrs: {
      "xmlns": "http://www.w3.org/2000/svg",
      "fill": "currentColor",
      "viewBox": "0 0 512 512"
    }
  }, [_vm._ssrNode("<path d=\"M414.73 97.1A222.14 222.14 0 00256.94 32C134 32 33.92 131.58 33.87 254a220.61 220.61 0 0029.78 111L32 480l118.25-30.87a223.63 223.63 0 00106.6 27h.09c122.93 0 223-99.59 223.06-222A220.18 220.18 0 00414.73 97.1zM256.94 438.66h-.08a185.75 185.75 0 01-94.36-25.72l-6.77-4-70.17 18.32 18.73-68.09-4.41-7A183.46 183.46 0 0171.53 254c0-101.73 83.21-184.5 185.48-184.5a185 185 0 01185.33 184.64c-.04 101.74-83.21 184.52-185.4 184.52zm101.69-138.19c-5.57-2.78-33-16.2-38.08-18.05s-8.83-2.78-12.54 2.78-14.4 18-17.65 21.75-6.5 4.16-12.07 1.38-23.54-8.63-44.83-27.53c-16.57-14.71-27.75-32.87-31-38.42s-.35-8.56 2.44-11.32c2.51-2.49 5.57-6.48 8.36-9.72s3.72-5.56 5.57-9.26.93-6.94-.46-9.71-12.54-30.08-17.18-41.19c-4.53-10.82-9.12-9.35-12.54-9.52-3.25-.16-7-.2-10.69-.2a20.53 20.53 0 00-14.86 6.94c-5.11 5.56-19.51 19-19.51 46.28s20 53.68 22.76 57.38 39.3 59.73 95.21 83.76a323.11 323.11 0 0031.78 11.68c13.35 4.22 25.5 3.63 35.1 2.2 10.71-1.59 33-13.42 37.63-26.38s4.64-24.06 3.25-26.37-5.11-3.71-10.69-6.48z\" fill-rule=\"evenodd\"></path>")]) : _vm.isSame('Twitter') ? _c('svg', {
    attrs: {
      "xmlns": "http://www.w3.org/2000/svg",
      "viewBox": "0 0 512 512"
    }
  }, [_vm._ssrNode("<path d=\"M496 109.5a201.8 201.8 0 01-56.55 15.3 97.51 97.51 0 0043.33-53.6 197.74 197.74 0 01-62.56 23.5A99.14 99.14 0 00348.31 64c-54.42 0-98.46 43.4-98.46 96.9a93.21 93.21 0 002.54 22.1 280.7 280.7 0 01-203-101.3A95.69 95.69 0 0036 130.4c0 33.6 17.53 63.3 44 80.7A97.5 97.5 0 0135.22 199v1.2c0 47 34 86.1 79 95a100.76 100.76 0 01-25.94 3.4 94.38 94.38 0 01-18.51-1.8c12.51 38.5 48.92 66.5 92.05 67.3A199.59 199.59 0 0139.5 405.6a203 203 0 01-23.5-1.4A278.68 278.68 0 00166.74 448c181.36 0 280.44-147.7 280.44-275.8 0-4.2-.11-8.4-.31-12.5A198.48 198.48 0 00496 109.5z\" fill=\"currentColor\"></path>")]) : _vm.isSame('Instagram') ? _c('svg', {
    attrs: {
      "xmlns": "http://www.w3.org/2000/svg",
      "viewBox": "0 0 512 512"
    }
  }, [_vm._ssrNode("<path d=\"M349.33 69.33a93.62 93.62 0 0193.34 93.34v186.66a93.62 93.62 0 01-93.34 93.34H162.67a93.62 93.62 0 01-93.34-93.34V162.67a93.62 93.62 0 0193.34-93.34h186.66m0-37.33H162.67C90.8 32 32 90.8 32 162.67v186.66C32 421.2 90.8 480 162.67 480h186.66C421.2 480 480 421.2 480 349.33V162.67C480 90.8 421.2 32 349.33 32z\" fill=\"currentColor\"></path> <path d=\"M377.33 162.67a28 28 0 1128-28 27.94 27.94 0 01-28 28zM256 181.33A74.67 74.67 0 11181.33 256 74.75 74.75 0 01256 181.33m0-37.33a112 112 0 10112 112 112 112 0 00-112-112z\" fill=\"currentColor\"></path>")]) : _vm.isSame('Telegram') ? _c('svg', {
    attrs: {
      "viewBox": "0 0 24 24",
      "fill": "none",
      "xmlns": "http://www.w3.org/2000/svg"
    }
  }, [_vm._ssrNode("<path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M12 1C5.926 1 1 5.924 1 12c0 6.075 4.926 11 11 11 6.075 0 11-4.925 11-11 0-6.076-4.925-11-11-11zm2.955 16.382a.638.638 0 00.592.078.622.622 0 00.387-.45c.465-2.184 1.593-7.711 2.015-9.697a.42.42 0 00-.341-.501.43.43 0 00-.224.02c-2.242.83-9.147 3.42-11.97 4.465a.444.444 0 00-.289.428.443.443 0 00.317.408c1.266.379 2.927.906 2.927.906s.777 2.344 1.18 3.536a.47.47 0 00.323.308.462.462 0 00.435-.11l1.654-1.563s1.91 1.4 2.994 2.172zm-5.887-4.64l.898 2.961.2-1.875 5.446-4.912a.15.15 0 00-.077-.257.151.151 0 00-.107.022l-6.36 4.06z\" fill=\"currentColor\"></path>")]) : _vm.isSame('Trello') ? _c('svg', {
    attrs: {
      "xmlns": "http://www.w3.org/2000/svg",
      "viewBox": "0 0 24 24",
      "fill": "none",
      "stroke": "currentColor",
      "stroke-width": "2",
      "stroke-linecap": "round",
      "stroke-linejoin": "round"
    }
  }, [_vm._ssrNode("<rect x=\"3\" y=\"3\" width=\"18\" height=\"18\" rx=\"2\" ry=\"2\"></rect> <rect x=\"7\" y=\"7\" width=\"3\" height=\"9\"></rect> <rect x=\"14\" y=\"7\" width=\"3\" height=\"5\"></rect>")]) : _vm.isSame('GitHub') ? _c('svg', {
    attrs: {
      "xmlns": "http://www.w3.org/2000/svg",
      "viewBox": "0 0 512 512"
    }
  }, [_vm._ssrNode("<path d=\"M256 32C132.3 32 32 134.9 32 261.7c0 101.5 64.2 187.5 153.2 217.9a17.56 17.56 0 003.8.4c8.3 0 11.5-6.1 11.5-11.4 0-5.5-.2-19.9-.3-39.1a102.4 102.4 0 01-22.6 2.7c-43.1 0-52.9-33.5-52.9-33.5-10.2-26.5-24.9-33.6-24.9-33.6-19.5-13.7-.1-14.1 1.4-14.1h.1c22.5 2 34.3 23.8 34.3 23.8 11.2 19.6 26.2 25.1 39.6 25.1a63 63 0 0025.6-6c2-14.8 7.8-24.9 14.2-30.7-49.7-5.8-102-25.5-102-113.5 0-25.1 8.7-45.6 23-61.6-2.3-5.8-10-29.2 2.2-60.8a18.64 18.64 0 015-.5c8.1 0 26.4 3.1 56.6 24.1a208.21 208.21 0 01112.2 0c30.2-21 48.5-24.1 56.6-24.1a18.64 18.64 0 015 .5c12.2 31.6 4.5 55 2.2 60.8 14.3 16.1 23 36.6 23 61.6 0 88.2-52.4 107.6-102.3 113.3 8 7.1 15.2 21.1 15.2 42.5 0 30.7-.3 55.5-.3 63 0 5.4 3.1 11.5 11.4 11.5a19.35 19.35 0 004-.4C415.9 449.2 480 363.1 480 261.7 480 134.9 379.7 32 256 32z\" class=\"fill-black/75 dark:fill-white/90\"></path>")]) : _vm.isSame('Spotify') ? _c('svg', {
    attrs: {
      "viewBox": "0 0 20 20",
      "fill": "none",
      "xmlns": "http://www.w3.org/2000/svg"
    }
  }, [_vm._ssrNode("<path d=\"M10 0a10 10 0 100 20 10 10 0 000-20zm4.586 14.422a.623.623 0 01-.857.208c-2.349-1.434-5.305-1.759-8.785-.964a.624.624 0 01-.277-1.216c3.809-.87 7.076-.496 9.712 1.116a.622.622 0 01.207.857zM15.81 11.7a.78.78 0 01-1.072.257c-2.69-1.653-6.786-2.13-9.965-1.166A.781.781 0 014.32 9.3c3.631-1.102 8.147-.569 11.233 1.329a.777.777 0 01.256 1.071h.001zm.104-2.836C12.692 6.95 7.374 6.774 4.298 7.71a.936.936 0 11-.544-1.791c3.534-1.072 9.405-.865 13.116 1.338a.936.936 0 11-.956 1.608z\" fill=\"#1DB954\"></path>")]) : _vm.isSame('Netlify') ? _c('svg', {
    attrs: {
      "xmlns": "http://www.w3.org/2000/svg",
      "viewBox": "0 0 40 40"
    }
  }, [_vm._ssrNode("<path d=\"M28.589 14.135l-.014-.006c-.008-.003-.016-.006-.023-.013a.11.11 0 01-.028-.093l.773-4.726 3.625 3.626-3.77 1.604a.083.083 0 01-.033.006h-.015a.104.104 0 01-.02-.017 1.716 1.716 0 00-.495-.381zm5.258-.288l3.876 3.876c.805.806 1.208 1.208 1.355 1.674.022.069.04.138.054.209l-9.263-3.923a.728.728 0 00-.015-.006c-.037-.015-.08-.032-.08-.07 0-.038.044-.056.081-.071l.012-.005 3.98-1.684zm5.127 7.003c-.2.376-.59.766-1.25 1.427l-4.37 4.369-5.652-1.177-.03-.006c-.05-.008-.103-.017-.103-.062a1.706 1.706 0 00-.655-1.193c-.023-.023-.017-.059-.01-.092 0-.005 0-.01.002-.014l1.063-6.526.004-.022c.006-.05.015-.108.06-.108a1.73 1.73 0 001.16-.665c.009-.01.015-.021.027-.027.032-.015.07 0 .103.014l9.65 4.082zm-6.625 6.801l-7.186 7.186 1.23-7.56.002-.01a.136.136 0 01.006-.029c.01-.024.036-.034.061-.044l.012-.005a1.85 1.85 0 00.695-.517c.024-.028.053-.055.09-.06a.09.09 0 01.029 0l5.06 1.04zm-8.707 8.707l-.81.81-8.955-12.942a.424.424 0 00-.01-.014c-.014-.019-.029-.038-.026-.06.001-.016.011-.03.022-.042l.01-.013c.027-.04.05-.08.075-.123l.02-.035.003-.003c.014-.024.027-.047.051-.06.021-.01.05-.006.073-.001l9.921 2.046a.164.164 0 01.076.033c.013.013.016.027.019.043a1.757 1.757 0 001.028 1.175c.028.014.016.045.003.078a.238.238 0 00-.015.045c-.125.76-1.197 7.298-1.485 9.063zm-1.692 1.691c-.597.591-.949.904-1.347 1.03a2 2 0 01-1.206 0c-.466-.148-.869-.55-1.674-1.356L8.73 28.73l2.349-3.643a.15.15 0 01.04-.047c.025-.018.061-.01.091 0a2.434 2.434 0 001.638-.083c.027-.01.054-.017.075.002a.19.19 0 01.028.032L21.95 38.05zM7.863 27.863L5.8 25.8l4.074-1.738a.084.084 0 01.033-.007c.034 0 .054.034.072.065a2.91 2.91 0 00.13.184l.013.016c.012.017.004.034-.008.05l-2.25 3.493zm-2.976-2.976l-2.61-2.61c-.444-.444-.766-.766-.99-1.043l7.936 1.646a.84.84 0 00.03.005c.049.008.103.017.103.063 0 .05-.059.073-.109.092l-.023.01-4.337 1.837zM.831 19.892a2 2 0 01.09-.495c.148-.466.55-.868 1.356-1.674l3.34-3.34a2175.525 2175.525 0 004.626 6.687c.027.036.057.076.026.106a2.776 2.776 0 00-.395.528.16.16 0 01-.05.062c-.013.008-.027.005-.042.002H9.78L.831 19.891zm5.68-6.403l4.491-4.491c.422.185 1.958.834 3.332 1.414 1.04.44 1.988.84 2.286.97.03.012.057.024.07.054.008.018.004.041 0 .06a2.003 2.003 0 00.523 1.828c.03.03 0 .073-.026.11l-.014.021-4.56 7.063a.138.138 0 01-.043.05c-.024.015-.058.008-.086.001a2.274 2.274 0 00-.543-.074c-.164 0-.342.03-.522.063h-.001c-.02.003-.038.007-.054-.005a.21.21 0 01-.045-.051l-4.808-7.013zm5.398-5.398l5.814-5.814c.805-.805 1.208-1.208 1.674-1.355a2 2 0 011.206 0c.466.147.869.55 1.674 1.355l1.26 1.26-4.135 6.404a.155.155 0 01-.041.048c-.025.017-.06.01-.09 0a2.097 2.097 0 00-1.92.37c-.027.028-.067.012-.101-.003-.54-.235-4.74-2.01-5.341-2.265zm12.506-3.676l3.818 3.818-.92 5.698v.015a.135.135 0 01-.008.038c-.01.02-.03.024-.05.03a1.83 1.83 0 00-.548.273.154.154 0 00-.02.017c-.011.012-.022.023-.04.025a.114.114 0 01-.043-.007l-5.818-2.472-.011-.005c-.037-.015-.081-.033-.081-.071a2.198 2.198 0 00-.31-.915c-.028-.046-.059-.094-.035-.141l4.066-6.303zm-3.932 8.606l5.454 2.31c.03.014.063.027.076.058a.106.106 0 010 .057c-.016.08-.03.171-.03.263v.153c0 .038-.039.054-.075.069l-.011.004c-.864.369-12.13 5.173-12.147 5.173-.017 0-.035 0-.052-.017-.03-.03 0-.072.027-.11a.76.76 0 00.014-.02l4.482-6.94.008-.012c.026-.042.056-.089.104-.089l.045.007c.102.014.192.027.283.027.68 0 1.31-.331 1.69-.897a.16.16 0 01.034-.04c.027-.02.067-.01.098.004zm-6.246 9.185l12.28-5.237s.018 0 .035.017c.067.067.124.112.179.154l.027.017c.025.014.05.03.052.056 0 .01 0 .016-.002.025L25.756 23.7l-.004.026c-.007.05-.014.107-.061.107a1.729 1.729 0 00-1.373.847l-.005.008c-.014.023-.027.045-.05.057-.021.01-.048.006-.07.001l-9.793-2.02c-.01-.002-.152-.519-.163-.52z\" class=\"fill-black/75 dark:fill-white/90\"></path>")]) : _vm.isSame('VS Code') ? _c('svg', {
    attrs: {
      "viewBox": "0 0 100 100",
      "fill": "none",
      "xmlns": "http://www.w3.org/2000/svg"
    }
  }, [_vm._ssrNode("<mask id=\"prefix__a\" maskUnits=\"userSpaceOnUse\" x=\"0\" y=\"0\" width=\"100\" height=\"100\"><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M70.912 99.317a6.223 6.223 0 004.96-.19l20.589-9.907A6.25 6.25 0 00100 83.587V16.413a6.25 6.25 0 00-3.54-5.632L75.874.874a6.226 6.226 0 00-7.104 1.21L29.355 38.04 12.187 25.01a4.162 4.162 0 00-5.318.236l-5.506 5.009a4.168 4.168 0 00-.004 6.162L16.247 50 1.36 63.583a4.168 4.168 0 00.004 6.162l5.506 5.01a4.162 4.162 0 005.318.236l17.168-13.032L68.77 97.917a6.217 6.217 0 002.143 1.4zM75.015 27.3L45.11 50l29.906 22.701V27.3z\" fill=\"#fff\"></path></mask> <g mask=\"url(#prefix__a)\"><path d=\"M96.461 10.796L75.857.876a6.23 6.23 0 00-7.107 1.207l-67.451 61.5a4.167 4.167 0 00.004 6.162l5.51 5.009a4.167 4.167 0 005.32.236l81.228-61.62c2.725-2.067 6.639-.124 6.639 3.297v-.24a6.25 6.25 0 00-3.539-5.63z\" fill=\"#0065A9\"></path> <g filter=\"url(#prefix__filter0_d)\"><path d=\"M96.461 89.204l-20.604 9.92a6.229 6.229 0 01-7.107-1.207l-67.451-61.5a4.167 4.167 0 01.004-6.162l5.51-5.009a4.167 4.167 0 015.32-.236l81.228 61.62c2.725 2.067 6.639.124 6.639-3.297v.24a6.25 6.25 0 01-3.539 5.63z\" fill=\"#007ACC\"></path></g> <g filter=\"url(#prefix__filter1_d)\"><path d=\"M75.858 99.126a6.232 6.232 0 01-7.108-1.21c2.306 2.307 6.25.674 6.25-2.588V4.672c0-3.262-3.944-4.895-6.25-2.589a6.232 6.232 0 017.108-1.21l20.6 9.908A6.25 6.25 0 01100 16.413v67.174a6.25 6.25 0 01-3.541 5.633l-20.601 9.906z\" fill=\"#1F9CF0\"></path></g> <path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M70.851 99.317a6.224 6.224 0 004.96-.19L96.4 89.22a6.25 6.25 0 003.54-5.633V16.413a6.25 6.25 0 00-3.54-5.632L75.812.874a6.226 6.226 0 00-7.104 1.21L29.294 38.04 12.126 25.01a4.162 4.162 0 00-5.317.236l-5.507 5.009a4.168 4.168 0 00-.004 6.162L16.186 50 1.298 63.583a4.168 4.168 0 00.004 6.162l5.507 5.009a4.162 4.162 0 005.317.236L29.294 61.96l39.414 35.958a6.218 6.218 0 002.143 1.4zM74.954 27.3L45.048 50l29.906 22.701V27.3z\" fill=\"url(#prefix__paint0_linear)\" opacity=\".25\"></path></g> "), _vm._ssrNode("<defs>", "</defs>", [_vm._ssrNode("<filter id=\"prefix__filter0_d\" x=\"-8.394\" y=\"15.829\" width=\"116.727\" height=\"92.246\" filterUnits=\"userSpaceOnUse\" color-interpolation-filters=\"sRGB\">", "</filter>", [_c('feFlood', {
    attrs: {
      "flood-opacity": "0",
      "result": "BackgroundImageFix"
    }
  }), _vm._ssrNode(" "), _c('feColorMatrix', {
    attrs: {
      "in": "SourceAlpha",
      "values": "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
    }
  }), _vm._ssrNode(" "), _c('feOffset'), _vm._ssrNode(" "), _c('feGaussianBlur', {
    attrs: {
      "stdDeviation": "4.167"
    }
  }), _vm._ssrNode(" "), _c('feColorMatrix', {
    attrs: {
      "values": "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
    }
  }), _vm._ssrNode(" "), _c('feBlend', {
    attrs: {
      "mode": "overlay",
      "in2": "BackgroundImageFix",
      "result": "effect1_dropShadow"
    }
  }), _vm._ssrNode(" "), _c('feBlend', {
    attrs: {
      "in": "SourceGraphic",
      "in2": "effect1_dropShadow",
      "result": "shape"
    }
  })], 2), _vm._ssrNode(" "), _vm._ssrNode("<filter id=\"prefix__filter1_d\" x=\"60.417\" y=\"-8.076\" width=\"47.917\" height=\"116.151\" filterUnits=\"userSpaceOnUse\" color-interpolation-filters=\"sRGB\">", "</filter>", [_c('feFlood', {
    attrs: {
      "flood-opacity": "0",
      "result": "BackgroundImageFix"
    }
  }), _vm._ssrNode(" "), _c('feColorMatrix', {
    attrs: {
      "in": "SourceAlpha",
      "values": "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
    }
  }), _vm._ssrNode(" "), _c('feOffset'), _vm._ssrNode(" "), _c('feGaussianBlur', {
    attrs: {
      "stdDeviation": "4.167"
    }
  }), _vm._ssrNode(" "), _c('feColorMatrix', {
    attrs: {
      "values": "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
    }
  }), _vm._ssrNode(" "), _c('feBlend', {
    attrs: {
      "mode": "overlay",
      "in2": "BackgroundImageFix",
      "result": "effect1_dropShadow"
    }
  }), _vm._ssrNode(" "), _c('feBlend', {
    attrs: {
      "in": "SourceGraphic",
      "in2": "effect1_dropShadow",
      "result": "shape"
    }
  })], 2), _vm._ssrNode(" "), _c('linearGradient', {
    attrs: {
      "id": "prefix__paint0_linear",
      "x1": "49.939",
      "y1": ".258",
      "x2": "49.939",
      "y2": "99.742",
      "gradientUnits": "userSpaceOnUse"
    }
  }, [_c('stop', {
    attrs: {
      "stop-color": "#fff"
    }
  }), _vm._v(" "), _c('stop', {
    attrs: {
      "offset": "1",
      "stop-color": "#fff",
      "stop-opacity": "0"
    }
  })], 1)], 2)], 2) : _vm.isSame('LinkedIn') ? _c('svg', {
    attrs: {
      "viewBox": "0 0 16 16"
    }
  }, [_vm._ssrNode("<path fill=\"currentColor\" d=\"M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248c-.015-.709-.52-1.248-1.342-1.248c-.822 0-1.359.54-1.359 1.248c0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586c.173-.431.568-.878 1.232-.878c.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252c-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z\"></path>")]) : _vm.isSame('BuyMeACoffee') ? _c('svg', {
    attrs: {
      "viewBox": "0 0 24 24"
    }
  }, [_vm._ssrNode("<path fill=\"currentColor\" d=\"m20.216 6.415-.132-.666c-.119-.598-.388-1.163-1.001-1.379-.197-.069-.42-.098-.57-.241-.152-.143-.196-.366-.231-.572-.065-.378-.125-.756-.192-1.133-.057-.325-.102-.69-.25-.987-.195-.4-.597-.634-.996-.788a5.723 5.723 0 0 0-.626-.194c-1-.263-2.05-.36-3.077-.416a25.834 25.834 0 0 0-3.7.062c-.915.083-1.88.184-2.75.5-.318.116-.646.256-.888.501-.297.302-.393.77-.177 1.146.154.267.415.456.692.58.36.162.737.284 1.123.366 1.075.238 2.189.331 3.287.37 1.218.05 2.437.01 3.65-.118.299-.033.598-.073.896-.119.352-.054.578-.513.474-.834-.124-.383-.457-.531-.834-.473-.466.074-.96.108-1.382.146-1.177.08-2.358.082-3.536.006a22.228 22.228 0 0 1-1.157-.107c-.086-.01-.18-.025-.258-.036-.243-.036-.484-.08-.724-.13-.111-.027-.111-.185 0-.212h.005c.277-.06.557-.108.838-.147h.002c.131-.009.263-.032.394-.048a25.076 25.076 0 0 1 3.426-.12c.674.019 1.347.067 2.017.144l.228.031c.267.04.533.088.798.145.392.085.895.113 1.07.542.055.137.08.288.111.431l.319 1.484a.237.237 0 0 1-.199.284h-.003c-.037.006-.075.01-.112.015a36.704 36.704 0 0 1-4.743.295 37.059 37.059 0 0 1-4.699-.304c-.14-.017-.293-.042-.417-.06-.326-.048-.649-.108-.973-.161-.393-.065-.768-.032-1.123.161-.29.16-.527.404-.675.701-.154.316-.199.66-.267 1-.069.34-.176.707-.135 1.056.087.753.613 1.365 1.37 1.502a39.69 39.69 0 0 0 11.343.376.483.483 0 0 1 .535.53l-.071.697-1.018 9.907c-.041.41-.047.832-.125 1.237-.122.637-.553 1.028-1.182 1.171-.577.131-1.165.2-1.756.205-.656.004-1.31-.025-1.966-.022-.699.004-1.556-.06-2.095-.58-.475-.458-.54-1.174-.605-1.793l-.731-7.013-.322-3.094c-.037-.351-.286-.695-.678-.678-.336.015-.718.3-.678.679l.228 2.185.949 9.112c.147 1.344 1.174 2.068 2.446 2.272.742.12 1.503.144 2.257.156.966.016 1.942.053 2.892-.122 1.408-.258 2.465-1.198 2.616-2.657.34-3.332.683-6.663 1.024-9.995l.215-2.087a.484.484 0 0 1 .39-.426c.402-.078.787-.212 1.074-.518.455-.488.546-1.124.385-1.766zm-1.478.772c-.145.137-.363.201-.578.233-2.416.359-4.866.54-7.308.46-1.748-.06-3.477-.254-5.207-.498-.17-.024-.353-.055-.47-.18-.22-.236-.111-.71-.054-.995.052-.26.152-.609.463-.646.484-.057 1.046.148 1.526.22.577.088 1.156.159 1.737.212 2.48.226 5.002.19 7.472-.14.45-.06.899-.13 1.345-.21.399-.072.84-.206 1.08.206.166.281.188.657.162.974a.544.544 0 0 1-.169.364zm-6.159 3.9c-.862.37-1.84.788-3.109.788a5.884 5.884 0 0 1-1.569-.217l.877 9.004c.065.78.717 1.38 1.5 1.38 0 0 1.243.065 1.658.065.447 0 1.786-.065 1.786-.065.783 0 1.434-.6 1.499-1.38l.94-9.95a3.996 3.996 0 0 0-1.322-.238c-.826 0-1.491.284-2.26.613z\"></path>")]) : _vm._e();
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./src/components/Icon/Brand.vue?vue&type=template&id=628a93dd&

// EXTERNAL MODULE: external "vue"
var external_vue_ = __webpack_require__(0);
var external_vue_default = /*#__PURE__*/__webpack_require__.n(external_vue_);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--12-0!./node_modules/ts-loader??ref--12-1!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/windicss-webpack-plugin/dist/loaders/windicss-template.cjs!./src/components/Icon/Brand.vue?vue&type=script&lang=ts&

/* harmony default export */ var Brandvue_type_script_lang_ts_ = (external_vue_default.a.extend({
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
// CONCATENATED MODULE: ./src/components/Icon/Brand.vue?vue&type=script&lang=ts&
 /* harmony default export */ var Icon_Brandvue_type_script_lang_ts_ = (Brandvue_type_script_lang_ts_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./src/components/Icon/Brand.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  Icon_Brandvue_type_script_lang_ts_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "692592b8"
  
)

/* harmony default export */ var Brand = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 83:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_windicss_webpack_plugin_dist_loaders_windicss_style_pitcher_cjs_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_windicss_webpack_plugin_dist_loaders_windicss_template_cjs_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Fire_vue_vue_type_style_index_0_id_4f6b8358_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(81);
/* harmony import */ var _node_modules_windicss_webpack_plugin_dist_loaders_windicss_style_pitcher_cjs_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_windicss_webpack_plugin_dist_loaders_windicss_template_cjs_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Fire_vue_vue_type_style_index_0_id_4f6b8358_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_windicss_webpack_plugin_dist_loaders_windicss_style_pitcher_cjs_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_windicss_webpack_plugin_dist_loaders_windicss_template_cjs_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Fire_vue_vue_type_style_index_0_id_4f6b8358_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_windicss_webpack_plugin_dist_loaders_windicss_style_pitcher_cjs_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_windicss_webpack_plugin_dist_loaders_windicss_template_cjs_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Fire_vue_vue_type_style_index_0_id_4f6b8358_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_windicss_webpack_plugin_dist_loaders_windicss_style_pitcher_cjs_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_windicss_webpack_plugin_dist_loaders_windicss_template_cjs_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Fire_vue_vue_type_style_index_0_id_4f6b8358_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 84:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".fire[data-v-4f6b8358]:after,.fire[data-v-4f6b8358]:before{content:\"\";display:block;height:4px;left:-491px;margin:auto;position:absolute;right:0;top:calc(50% - 140px);transform:translateY(-50%);width:4px}.fire[data-v-4f6b8358]:after{animation:animate-4f6b8358 .7s step-end infinite}.fire[data-v-4f6b8358]:before{box-shadow:0 168px #2f1a22,0 172px #2f1a22,0 176px #2f1a22,4px 168px #2f1a22,4px 172px #2f1a22,4px 176px #2f1a22,8px 168px #2f1a22,8px 172px #2f1a22,8px 176px #2f1a22,12px 168px #2f1a22,12px 172px #2f1a22,12px 176px #2f1a22,16px 168px #2f1a22,16px 172px #2f1a22,16px 176px #2f1a22,20px 168px #2f1a22,20px 172px #2f1a22,20px 176px #2f1a22,24px 168px #2f1a22,24px 172px #2f1a22,24px 176px #2f1a22,28px 168px #2f1a22,28px 172px #2f1a22,28px 176px #2f1a22,28px 180px #2f1a22,32px 168px #2f1a22,32px 172px #2f1a22,32px 176px #2f1a22,32px 180px #2f1a22,36px 168px #2f1a22,36px 172px #2f1a22,36px 176px #2f1a22,36px 180px #2f1a22,36px 184px #2f1a22,40px 168px #2f1a22,40px 172px #2f1a22,40px 176px #2f1a22,40px 180px #2f1a22,40px 184px #2f1a22,44px 168px #2f1a22,44px 172px #2f1a22,44px 176px #2f1a22,44px 180px #2f1a22,44px 184px #2f1a22,48px 164px #2f1a22,48px 168px #2f1a22,48px 172px #2f1a22,48px 176px #2f1a22,48px 180px #2f1a22,48px 184px #2f1a22,52px 164px #2f1a22,52px 168px #2f1a22,52px 172px #2f1a22,52px 176px #2f1a22,52px 180px #2f1a22,52px 184px #2f1a22,56px 164px #2f1a22,56px 168px #2f1a22,56px 172px #2f1a22,56px 176px #2f1a22,56px 180px #2f1a22,56px 184px #2f1a22,60px 164px #2f1a22,60px 168px #2f1a22,60px 172px #2f1a22,60px 176px #2f1a22,60px 180px #2f1a22,60px 184px #2f1a22,60px 196px #2f1a22,64px 160px #2f1a22,64px 164px #2f1a22,64px 168px #2f1a22,64px 172px #2f1a22,64px 176px #2f1a22,64px 180px #2f1a22,64px 184px #2f1a22,64px 196px #2f1a22,68px 160px #2f1a22,68px 164px #2f1a22,68px 168px #2f1a22,68px 172px #2f1a22,68px 176px #2f1a22,68px 180px #2f1a22,68px 184px #2f1a22,68px 192px #2f1a22,68px 196px #2f1a22,72px 160px #2f1a22,72px 164px #2f1a22,72px 168px #2f1a22,72px 172px #2f1a22,72px 176px #2f1a22,72px 180px #2f1a22,72px 184px #2f1a22,72px 188px #2f1a22,72px 192px #2f1a22,72px 196px #2f1a22,72px 200px #2f1a22,76px 160px #2f1a22,76px 164px #2f1a22,76px 168px #2f1a22,76px 172px #2f1a22,76px 176px #2f1a22,76px 180px #2f1a22,76px 184px #2f1a22,76px 188px #2f1a22,76px 192px #2f1a22,76px 196px #2f1a22,76px 200px #2f1a22,76px 244px #2f1a22,80px 160px #2f1a22,80px 164px #2f1a22,80px 168px #2f1a22,80px 172px #2f1a22,80px 176px #2f1a22,80px 180px #2f1a22,80px 184px #2f1a22,80px 188px #2f1a22,80px 192px #2f1a22,80px 196px #2f1a22,80px 200px #2f1a22,80px 240px #2f1a22,80px 244px #2f1a22,80px 248px #2f1a22,84px 160px #2f1a22,84px 164px #2f1a22,84px 168px #2f1a22,84px 172px #2f1a22,84px 176px #2f1a22,84px 180px #2f1a22,84px 184px #2f1a22,84px 188px #2f1a22,84px 192px #2f1a22,84px 196px #2f1a22,84px 200px #2f1a22,84px 240px #2f1a22,84px 244px #2f1a22,84px 248px #2f1a22,88px 160px #2f1a22,88px 164px #2f1a22,88px 168px #2f1a22,88px 172px #2f1a22,88px 176px #2f1a22,88px 180px #2f1a22,88px 184px #2f1a22,88px 188px #2f1a22,88px 192px #2f1a22,88px 196px #2f1a22,88px 200px #2f1a22,88px 240px #2f1a22,88px 244px #2f1a22,88px 248px #2f1a22,88px 252px #2f1a22,92px 160px #2f1a22,92px 164px #2f1a22,92px 168px #2f1a22,92px 172px #2f1a22,92px 176px #2f1a22,92px 180px #2f1a22,92px 184px #2f1a22,92px 188px #2f1a22,92px 192px #2f1a22,92px 196px #2f1a22,92px 200px #2f1a22,92px 236px #2f1a22,92px 240px #2f1a22,92px 244px #2f1a22,92px 248px #2f1a22,92px 252px #2f1a22,96px 160px #2f1a22,96px 164px #2f1a22,96px 168px #2f1a22,96px 172px #2f1a22,96px 176px #2f1a22,96px 180px #261d23,96px 184px #261d23,96px 188px #261d23,96px 192px #261d23,96px 196px #2f1a22,96px 200px #2f1a22,96px 236px #2f1a22,96px 240px #2f1a22,96px 244px #2f1a22,96px 248px #2f1a22,96px 252px #2f1a22,100px 160px #2f1a22,100px 164px #2f1a22,100px 168px #2f1a22,100px 172px #2f1a22,100px 176px #261d23,100px 180px #261d23,100px 184px #261d23,100px 188px #34222d,100px 192px #261d23,100px 196px #261d23,100px 200px #2f1a22,100px 236px #2f1a22,100px 240px #2f1a22,100px 244px #2f1a22,100px 248px #2f1a22,104px 160px #2f1a22,104px 164px #2f1a22,104px 168px #2f1a22,104px 172px #261d23,104px 176px #261d23,104px 180px #261d23,104px 184px #34222d,104px 188px #34222d,104px 192px #34222d,104px 196px #261d23,104px 200px #261d23,104px 232px #2f1a22,104px 236px #2f1a22,104px 240px #2f1a22,104px 244px #2f1a22,104px 248px #2f1a22,108px 160px #2f1a22,108px 164px #2f1a22,108px 168px #2f1a22,108px 172px #261d23,108px 176px #261d23,108px 180px #261d23,108px 184px #34222d,108px 188px #34222d,108px 192px #34222d,108px 196px #261d23,108px 200px #261d23,108px 232px #2f1a22,108px 236px #2f1a22,108px 240px #2f1a22,108px 244px #2f1a22,108px 248px #2f1a22,112px 160px #2f1a22,112px 164px #2f1a22,112px 168px #34222d,112px 172px #34222d,112px 176px #261d23,112px 180px #261d23,112px 184px #261d23,112px 188px #34222d,112px 192px #261d23,112px 196px #261d23,112px 200px #261d23,112px 232px #2f1a22,112px 236px #2f1a22,112px 240px #2f1a22,112px 244px #2f1a22,116px 160px #2f1a22,116px 164px #2f1a22,116px 168px #34222d,116px 172px #34222d,116px 176px #261d23,116px 180px #261d23,116px 184px #261d23,116px 188px #261d23,116px 192px #261d23,116px 196px #261d23,116px 200px #76505f,116px 204px #4c3544,116px 208px #4c3544,116px 212px #4c3544,116px 216px #4c3544,116px 220px #4c3544,116px 224px #4c3544,116px 228px #4c3544,116px 232px #34222d,116px 236px #2f1a22,116px 240px #2f1a22,116px 244px #2f1a22,120px 156px #261d23,120px 160px #261d23,120px 164px #261d23,120px 168px #34222d,120px 172px #34222d,120px 176px #34222d,120px 180px #34222d,120px 184px #261d23,120px 188px #261d23,120px 192px #261d23,120px 196px #76505f,120px 200px #76505f,120px 204px #76505f,120px 208px #4c3544,120px 212px #4c3544,120px 216px #4c3544,120px 220px #4c3544,120px 224px #4c3544,120px 228px #4c3544,120px 232px #4c3544,120px 236px #34222d,120px 240px #2f1a22,120px 244px #2f1a22,124px 140px #261d23,124px 144px #261d23,124px 148px #261d23,124px 152px #261d23,124px 156px #34222d,124px 160px #34222d,124px 164px #34222d,124px 168px #261d23,124px 172px #34222d,124px 176px #34222d,124px 180px #34222d,124px 184px #34222d,124px 188px #34222d,124px 192px #34222d,124px 196px #76505f,124px 200px #76505f,124px 204px #76505f,124px 208px #4c3544,124px 212px #4c3544,124px 216px #4c3544,124px 220px #4c3544,124px 224px #4c3544,124px 228px #4c3544,124px 232px #4c3544,124px 236px #34222d,124px 240px #2f1a22,128px 128px #34222d,128px 132px #34222d,128px 136px #34222d,128px 140px #34222d,128px 144px #34222d,128px 148px #34222d,128px 152px #34222d,128px 156px #34222d,128px 160px #34222d,128px 164px #34222d,128px 168px #34222d,128px 172px #261d23,128px 176px #4e3344,128px 180px #34222d,128px 184px #4e3344,128px 188px #34222d,128px 192px #34222d,128px 196px #76505f,128px 200px #76505f,128px 208px #4c3544,128px 212px #4c3544,128px 216px #34222d,128px 220px #4c3544,128px 224px #4c3544,128px 228px #4c3544,128px 232px #4c3544,128px 236px #34222d,128px 240px #2f1a22,132px 124px #34222d,132px 128px #4c3544,132px 132px #4c3544,132px 136px #4c3544,132px 140px #4c3544,132px 144px #34222d,132px 148px #34222d,132px 152px #34222d,132px 156px #4c3544,132px 160px #4c3544,132px 164px #34222d,132px 168px #34222d,132px 172px #34222d,132px 176px #261d23,132px 180px #34222d,132px 184px #4e3344,132px 188px #34222d,132px 192px #34222d,132px 200px #76505f,132px 208px #76505f,132px 212px #76505f,132px 216px #34222d,132px 220px #76505f,132px 224px #76505f,132px 228px #76505f,132px 232px #76505f,132px 236px #34222d,132px 240px #2f1a22,136px 120px #34222d,136px 124px #4c3544,136px 128px #4c3544,136px 132px #76505f,136px 136px #76505f,136px 140px #76505f,136px 144px #4c3544,136px 148px #34222d,136px 152px #34222d,136px 156px #34222d,136px 160px #34222d,136px 164px #4c3544,136px 168px #34222d,136px 172px #34222d,136px 176px #261d23,136px 180px #4e3344,136px 184px #7c4848,136px 188px #34222d,136px 192px #2f1a22,136px 200px #76505f,136px 208px #76505f,136px 212px #76505f,136px 216px #34222d,136px 220px #34222d,136px 224px #34222d,136px 228px #34222d,136px 232px #34222d,136px 236px #2f1a22,140px 120px #34222d,140px 124px #4c3544,140px 128px #76505f,140px 132px #76505f,140px 136px #76505f,140px 140px #76505f,140px 144px #4c3544,140px 148px #34222d,140px 152px #4c3544,140px 156px #4c3544,140px 160px #4c3544,140px 164px #34222d,140px 168px #34222d,140px 172px #34222d,140px 176px #261d23,140px 180px #7c4848,140px 184px #34222d,140px 188px #34222d,140px 192px #2f1a22,140px 208px #a5788a,140px 212px #76505f,140px 216px #34222d,140px 236px #34222d,144px 108px #34222d,144px 112px #34222d,144px 116px #34222d,144px 120px #34222d,144px 124px #4c3544,144px 128px #76505f,144px 132px #76505f,144px 144px #76505f,144px 148px #34222d,144px 152px #4c3544,144px 156px #4c3544,144px 160px #4c3544,144px 164px #4c3544,144px 168px #34222d,144px 172px #34222d,144px 176px #261d23,144px 180px #34222d,144px 184px #34222d,144px 188px #34222d,144px 192px #2f1a22,144px 196px #2f1a22,144px 208px #a5788a,144px 212px #4c3544,144px 232px #34222d,144px 236px #2f1a22,148px 104px #34222d,148px 108px #34222d,148px 112px #4c3544,148px 116px #4c3544,148px 120px #34222d,148px 124px #4c3544,148px 128px #76505f,148px 148px #34222d,148px 152px #4c3544,148px 156px #76505f,148px 160px #4c3544,148px 164px #4c3544,148px 168px #34222d,148px 172px #4c3544,148px 176px #4c3544,148px 180px #4c3544,148px 184px #4c3544,148px 188px #4c3544,148px 192px #34222d,148px 196px #34222d,148px 200px #2f1a22,148px 204px #2c1e23,148px 208px #2c1e23,148px 212px #2c1e23,148px 216px #2c1e23,152px 100px #34222d,152px 104px #4c3544,152px 108px #76505f,152px 112px #4c3544,152px 116px #4c3544,152px 120px #4c3544,152px 124px #34222d,152px 128px #76505f,152px 148px #34222d,152px 152px #4c3544,152px 156px #76505f,152px 160px #76505f,152px 164px #4c3544,152px 168px #4c3544,152px 172px #34222d,152px 180px #4c3544,152px 184px #4c3544,152px 188px #4c3544,152px 192px #34222d,152px 196px #34222d,152px 200px #2f1a22,152px 204px #2c1e23,152px 208px #2c1e23,152px 212px #2c1e23,156px 100px #34222d,156px 104px #76505f,156px 108px #34222d,156px 112px #4c3544,156px 116px #34222d,156px 120px #34222d,156px 124px #34222d,156px 128px #34222d,156px 132px #76505f,156px 144px #76505f,156px 148px #34222d,156px 152px #34222d,156px 156px #4c3544,156px 160px #76505f,156px 164px #34222d,156px 168px #4c3544,156px 172px #34222d,156px 184px #4c3544,156px 188px #4c3544,156px 192px #34222d,156px 204px #2f1a22,156px 208px #2c1e23,156px 212px #37242b,156px 216px #37242b,156px 220px #2c1e23,160px 100px #34222d,160px 104px #34222d,160px 108px #4c3544,160px 112px #34222d,160px 116px #4c3544,160px 120px #4c3544,160px 124px #34222d,160px 128px #34222d,160px 132px #34222d,160px 136px #34222d,160px 140px #34222d,160px 144px #34222d,160px 148px #34222d,160px 152px #34222d,160px 156px #34222d,160px 160px #34222d,160px 164px #4c3544,160px 168px #4c3544,160px 172px #34222d,160px 184px #2f1a22,160px 192px rgba(77,55,63,.922),160px 204px #2f1a22,160px 208px #2c1e23,160px 212px #37242b,160px 220px #37242b,160px 224px #2c1e23,164px 100px #34222d,164px 104px #4c3544,164px 108px #4c3544,164px 112px #4c3544,164px 116px #4c3544,164px 120px #34222d,164px 124px #76505f,164px 128px #34222d,164px 132px #4c3544,164px 136px #4c3544,164px 140px #34222d,164px 144px #34222d,164px 148px #34222d,164px 152px #4c3544,164px 156px #4c3544,164px 160px #34222d,164px 164px #4c3544,164px 168px #4c3544,164px 172px #34222d,164px 176px #34222d,164px 180px #2f1a22,164px 184px #2f1a22,164px 188px #37242b,164px 192px #2c1e23,164px 196px #37242b,164px 204px #2f1a22,164px 208px #37242b,164px 212px #2c1e23,164px 216px #37242b,168px 96px #34222d,168px 100px #4c3544,168px 104px #4c3544,168px 108px #76505f,168px 112px #4c3544,168px 116px #34222d,168px 120px #4c3544,168px 124px #4c3544,168px 128px #4c3544,168px 132px #76505f,168px 136px #76505f,168px 140px #4c3544,168px 144px #4c3544,168px 148px #34222d,168px 152px #34222d,168px 156px #4c3544,168px 160px #34222d,168px 164px #4c3544,168px 168px #76505f,168px 172px #34222d,168px 176px #34222d,168px 180px #34222d,168px 184px #34222d,168px 188px #2f1a22,168px 192px #37242b,168px 196px #37242b,168px 200px #37242b,168px 204px #37242b,168px 208px #37242b,168px 212px #2c1e23,168px 216px #37242b,168px 220px #37242b,172px 96px #34222d,172px 100px #4c3544,172px 104px #4c3544,172px 108px #4c3544,172px 112px #4c3544,172px 116px #34222d,172px 120px #4c3544,172px 124px #76505f,172px 128px #4c3544,172px 132px #76505f,172px 136px #76505f,172px 140px #76505f,172px 144px #76505f,172px 148px #34222d,172px 152px #34222d,172px 156px #34222d,172px 160px #34222d,172px 164px #76505f,172px 168px #76505f,172px 172px #34222d,172px 176px #34222d,172px 180px #34222d,172px 184px #34222d,172px 188px #2f1a22,172px 192px #37242b,172px 196px #37242b,172px 200px #37242b,172px 204px #37242b,172px 208px #37242b,172px 212px #37242b,172px 216px #37242b,172px 220px #37242b,172px 224px #37242b,172px 228px #2c1e23,176px 96px #4c3544,176px 100px #76505f,176px 104px #4c3544,176px 108px #4c3544,176px 112px #76505f,176px 116px #4c3544,176px 120px #76505f,176px 124px #4c3544,176px 132px #4c3544,176px 148px #34222d,176px 152px #34222d,176px 156px #34222d,176px 160px #2c1e23,176px 164px #76505f,176px 168px #76505f,176px 172px #34222d,176px 176px #2c1e23,176px 180px #34222d,176px 184px #34222d,176px 188px #2f1a22,176px 192px #37242b,176px 196px #37242b,176px 200px #37242b,176px 204px #37242b,176px 208px #37242b,176px 212px #37242b,176px 216px #37242b,176px 220px #37242b,176px 224px #37242b,176px 232px #37242b,180px 96px #4c3544,180px 100px #76505f,180px 104px #76505f,180px 108px #76505f,180px 112px #76505f,180px 116px #4c3544,180px 120px #76505f,180px 128px #4c3544,180px 140px #4c3544,180px 148px #34222d,180px 152px #34222d,180px 156px #34222d,180px 160px #2c1e23,180px 164px #76505f,180px 168px #76505f,180px 172px #34222d,180px 176px rgba(77,55,63,.922),180px 180px #34222d,180px 184px #34222d,180px 188px #37242b,180px 192px rgba(77,55,63,.922),180px 196px rgba(77,55,63,.922),180px 200px #37242b,180px 204px #37242b,180px 208px #37242b,180px 212px #37242b,180px 216px #37242b,180px 220px #37242b,180px 224px #37242b,180px 228px #2c1e23,184px 96px #4c3544,184px 100px #4c3544,184px 104px #76505f,184px 108px #76505f,184px 112px #4c3544,184px 116px #76505f,184px 140px #4c3544,184px 148px #34222d,184px 152px #34222d,184px 156px #34222d,184px 160px #2c1e23,184px 164px #2c1e23,184px 168px #4c3544,184px 176px rgba(77,55,63,.922),184px 184px #34222d,184px 188px #37242b,184px 192px rgba(77,55,63,.922),184px 196px #37242b,184px 200px #37242b,184px 204px rgba(77,55,63,.922),184px 208px rgba(77,55,63,.922),184px 212px #37242b,184px 216px #37242b,184px 220px #37242b,184px 224px #37242b,184px 228px #37242b,184px 232px #37242b,184px 236px #37242b,188px 96px #4c3544,188px 100px #4c3544,188px 104px #4c3544,188px 108px #4c3544,188px 112px #4c3544,188px 116px #4c3544,188px 148px #34222d,188px 152px #76505f,188px 156px #4c3544,188px 160px #2c1e23,188px 164px #2c1e23,188px 184px rgba(77,55,63,.922),188px 188px rgba(77,55,63,.922),188px 192px rgba(77,55,63,.922),188px 196px rgba(77,55,63,.922),188px 200px rgba(77,55,63,.922),188px 204px #37242b,188px 208px #37242b,188px 212px #37242b,188px 216px #37242b,188px 220px #37242b,188px 224px #37242b,188px 228px #37242b,188px 232px #37242b,192px 100px #4c3544,192px 104px #76505f,192px 108px #76505f,192px 112px #76505f,192px 116px #4c3544,192px 120px #4c3544,192px 124px #4c3544,192px 132px #4c3544,192px 148px #4c3544,192px 152px #76505f,192px 156px #4c3544,192px 160px #2c1e23,192px 164px #2c1e23,192px 168px #37242b,192px 184px rgba(77,55,63,.922),192px 188px rgba(77,55,63,.922),192px 192px rgba(77,55,63,.922),192px 196px #37242b,192px 200px #37242b,192px 204px #30291b,192px 208px rgba(77,55,63,.922),192px 212px #37242b,192px 216px #37242b,192px 220px #37242b,192px 224px #37242b,192px 228px #37242b,196px 104px #4c3544,196px 108px #4c3544,196px 112px #4c3544,196px 116px #4c3544,196px 120px #76505f,196px 124px #76505f,196px 128px #4c3544,196px 144px #2c1e23,196px 148px #4c3544,196px 152px #76505f,196px 156px #4c3544,196px 160px #2c1e23,196px 164px rgba(77,55,63,.922),196px 168px rgba(77,55,63,.922),196px 172px rgba(77,55,63,.922),196px 176px rgba(77,55,63,.922),196px 180px rgba(77,55,63,.922),196px 184px rgba(77,55,63,.922),196px 188px rgba(77,55,63,.922),196px 192px rgba(77,55,63,.922),196px 196px #37242b,196px 200px rgba(77,55,63,.922),196px 204px #37242b,196px 208px #37242b,196px 212px #37242b,196px 216px #37242b,196px 220px #37242b,196px 224px #37242b,196px 232px #37242b,196px 236px #37242b,200px 112px #4c3544,200px 116px #4c3544,200px 120px #4c3544,200px 124px #4c3544,200px 140px #2c1e23,200px 148px #4c3544,200px 152px #34222d,200px 156px #34222d,200px 160px #2c1e23,200px 164px #37242b,200px 168px rgba(77,55,63,.922),200px 172px rgba(77,55,63,.922),200px 176px rgba(77,55,63,.922),200px 180px rgba(77,55,63,.922),200px 184px rgba(77,55,63,.922),200px 188px rgba(77,55,63,.922),200px 192px rgba(77,55,63,.922),200px 196px rgba(77,55,63,.922),200px 200px rgba(77,55,63,.922),200px 204px rgba(77,55,63,.922),200px 208px rgba(77,55,63,.922),200px 212px rgba(77,55,63,.922),200px 216px rgba(77,55,63,.922),200px 220px #37242b,200px 224px #37242b,200px 228px #37242b,200px 232px #37242b,200px 236px #37242b,200px 240px #37242b,204px 144px #2c1e23,204px 148px #34222d,204px 156px #2c1e23,204px 160px rgba(77,55,63,.922),204px 164px rgba(77,55,63,.922),204px 168px rgba(77,55,63,.922),204px 172px rgba(77,55,63,.922),204px 176px rgba(77,55,63,.922),204px 180px rgba(77,55,63,.922),204px 184px rgba(77,55,63,.922),204px 188px rgba(77,55,63,.922),204px 192px rgba(77,55,63,.922),204px 196px rgba(77,55,63,.922),204px 200px rgba(77,55,63,.922),204px 204px rgba(77,55,63,.922),204px 208px rgba(77,55,63,.922),204px 212px #37242b,204px 216px #37242b,204px 220px #37242b,204px 224px #37242b,204px 228px #37242b,204px 232px #37242b,208px 156px #2c1e23,208px 160px #2c1e23,208px 164px rgba(77,55,63,.922),208px 168px rgba(77,55,63,.922),208px 172px rgba(77,55,63,.922),208px 176px rgba(77,55,63,.922),208px 180px rgba(77,55,63,.922),208px 184px rgba(77,55,63,.922),208px 188px rgba(77,55,63,.922),208px 192px rgba(77,55,63,.922),208px 196px rgba(77,55,63,.922),208px 200px rgba(77,55,63,.922),208px 204px rgba(77,55,63,.922),208px 208px #37242b,208px 212px #37242b,208px 216px #37242b,208px 220px #37242b,208px 224px #37242b,208px 228px #37242b,208px 232px #37242b,208px 236px #37242b,212px 136px #2c1e23,212px 140px #2c1e23,212px 152px #2c1e23,212px 156px #2c1e23,212px 160px rgba(77,55,63,.922),212px 164px rgba(77,55,63,.922),212px 168px rgba(77,55,63,.922),212px 172px rgba(77,55,63,.922),212px 176px rgba(77,55,63,.922),212px 180px rgba(77,55,63,.922),212px 184px rgba(77,55,63,.922),212px 188px rgba(77,55,63,.922),212px 192px rgba(77,55,63,.922),212px 196px rgba(77,55,63,.922),212px 200px rgba(77,55,63,.922),212px 204px #37242b,212px 208px rgba(77,55,63,.922),212px 212px rgba(77,55,63,.922),212px 216px rgba(77,55,63,.922),212px 220px #37242b,212px 224px #37242b,212px 228px #37242b,212px 232px #37242b,212px 240px #37242b,212px 244px #2f1a22,212px 248px #2f1a22,212px 252px #2f1a22,216px 148px #2c1e23,216px 152px #37242b,216px 156px rgba(77,55,63,.922),216px 160px rgba(77,55,63,.922),216px 164px rgba(77,55,63,.922),216px 168px rgba(77,55,63,.922),216px 172px rgba(77,55,63,.922),216px 176px rgba(77,55,63,.922),216px 180px rgba(77,55,63,.922),216px 184px rgba(77,55,63,.922),216px 188px rgba(77,55,63,.922),216px 192px rgba(77,55,63,.922),216px 196px rgba(77,55,63,.922),216px 200px rgba(77,55,63,.922),216px 204px rgba(77,55,63,.922),216px 208px rgba(77,55,63,.922),216px 212px #37242b,216px 216px #37242b,216px 220px #37242b,216px 224px #37242b,216px 228px #37242b,216px 232px #37242b,216px 236px #2f1a22,216px 240px #2f1a22,216px 244px #2f1a22,216px 248px #2f1a22,216px 252px #2f1a22,220px 140px #2c1e23,220px 148px #2c1e23,220px 152px rgba(77,55,63,.922),220px 156px #2c1e23,220px 160px #2c1e23,220px 164px rgba(77,55,63,.922),220px 168px rgba(77,55,63,.922),220px 172px rgba(77,55,63,.922),220px 176px rgba(77,55,63,.922),220px 180px rgba(77,55,63,.922),220px 184px #a5788a,220px 188px rgba(77,55,63,.922),220px 192px rgba(77,55,63,.922),220px 196px rgba(77,55,63,.922),220px 200px rgba(77,55,63,.922),220px 204px rgba(77,55,63,.922),220px 208px rgba(77,55,63,.922),220px 212px rgba(77,55,63,.922),220px 216px rgba(77,55,63,.922),220px 220px rgba(77,55,63,.922),220px 224px #37242b,220px 228px #37242b,220px 232px #2f1a22,220px 236px #2f1a22,220px 240px #2f1a22,220px 244px #2f1a22,220px 248px #2f1a22,220px 252px #2f1a22,224px 132px #2c1e23,224px 144px #2c1e23,224px 148px #2c1e23,224px 152px #37242b,224px 156px rgba(77,55,63,.922),224px 160px rgba(77,55,63,.922),224px 164px rgba(77,55,63,.922),224px 168px rgba(77,55,63,.922),224px 172px rgba(77,55,63,.922),224px 176px #a5788a,224px 180px #a5788a,224px 184px #a5788a,224px 188px #a5788a,224px 192px rgba(77,55,63,.922),224px 196px rgba(77,55,63,.922),224px 200px rgba(77,55,63,.922),224px 204px rgba(77,55,63,.922),224px 208px rgba(77,55,63,.922),224px 212px rgba(77,55,63,.922),224px 216px #37242b,224px 220px #37242b,224px 224px #4c3544,224px 228px #4c3544,224px 232px #2f1a22,224px 236px #2f1a22,224px 240px #2f1a22,224px 244px #2f1a22,224px 248px #2f1a22,224px 252px #2f1a22,228px 140px #37242b,228px 144px #2c1e23,228px 148px rgba(77,55,63,.922),228px 152px rgba(77,55,63,.922),228px 156px rgba(77,55,63,.922),228px 160px rgba(77,55,63,.922),228px 164px rgba(77,55,63,.922),228px 168px rgba(77,55,63,.922),228px 172px rgba(77,55,63,.922),228px 176px rgba(77,55,63,.922),228px 180px #a5788a,228px 184px #a5788a,228px 188px #a5788a,228px 192px #a5788a,228px 196px rgba(77,55,63,.922),228px 200px rgba(77,55,63,.922),228px 204px rgba(77,55,63,.922),228px 208px rgba(77,55,63,.922),228px 212px #37242b,228px 216px rgba(77,55,63,.922),228px 220px #4c3544,228px 224px #4c3544,228px 228px #261d23,228px 232px #2f1a22,228px 236px #2f1a22,228px 240px #2f1a22,228px 244px #2f1a22,228px 248px #2f1a22,232px 132px #2c1e23,232px 136px #2c1e23,232px 140px #2c1e23,232px 144px #2c1e23,232px 148px #2c1e23,232px 152px #37242b,232px 156px rgba(77,55,63,.922),232px 160px rgba(77,55,63,.922),232px 164px rgba(77,55,63,.922),232px 168px rgba(77,55,63,.922),232px 172px #a5788a,232px 176px #a5788a,232px 180px #a5788a,232px 184px #a5788a,232px 188px #a5788a,232px 192px rgba(77,55,63,.922),232px 196px rgba(77,55,63,.922),232px 200px rgba(77,55,63,.922),232px 204px rgba(77,55,63,.922),232px 208px rgba(77,55,63,.922),232px 212px rgba(77,55,63,.922),232px 216px #4c3544,232px 220px #4c3544,232px 224px #261d23,232px 228px #261d23,232px 232px #2f1a22,232px 236px #2f1a22,232px 240px #2f1a22,232px 244px #2f1a22,236px 140px #37242b,236px 144px #2c1e23,236px 148px #37242b,236px 152px rgba(77,55,63,.922),236px 156px rgba(77,55,63,.922),236px 160px rgba(77,55,63,.922),236px 164px rgba(77,55,63,.922),236px 168px rgba(77,55,63,.922),236px 172px #a5788a,236px 176px #a5788a,236px 180px #a5788a,236px 184px #a5788a,236px 188px #a5788a,236px 192px #a5788a,236px 196px rgba(77,55,63,.922),236px 200px rgba(77,55,63,.922),236px 204px rgba(77,55,63,.922),236px 208px rgba(77,55,63,.922),236px 212px rgba(77,55,63,.922),236px 216px #76505f,236px 220px #4c3544,236px 224px #261d23,236px 228px #261d23,236px 232px #2f1a22,236px 236px #2f1a22,236px 240px #2f1a22,240px 136px #2c1e23,240px 140px #2c1e23,240px 144px #2c1e23,240px 148px rgba(77,55,63,.922),240px 152px rgba(77,55,63,.922),240px 156px #37242b,240px 160px rgba(77,55,63,.922),240px 164px rgba(77,55,63,.922),240px 168px rgba(77,55,63,.922),240px 172px #a5788a,240px 176px #a5788a,240px 180px #a5788a,240px 184px #a5788a,240px 188px #a5788a,240px 192px #a5788a,240px 196px #a5788a,240px 200px #a5788a,240px 204px rgba(77,55,63,.922),240px 208px rgba(77,55,63,.922),240px 212px rgba(77,55,63,.922),240px 216px #76505f,240px 220px #4c3544,240px 224px #261d23,240px 228px #261d23,240px 232px #2f1a22,240px 236px #2f1a22,240px 240px #37242b,244px 132px #2c1e23,244px 136px #2c1e23,244px 140px #37242b,244px 144px #37242b,244px 148px #37242b,244px 152px #37242b,244px 156px rgba(77,55,63,.922),244px 160px rgba(77,55,63,.922),244px 164px rgba(77,55,63,.922),244px 168px #a5788a,244px 172px #a5788a,244px 176px #a5788a,244px 180px #a5788a,244px 184px #a5788a,244px 188px #a5788a,244px 192px #a5788a,244px 196px #a5788a,244px 200px rgba(77,55,63,.922),244px 204px rgba(77,55,63,.922),244px 208px rgba(77,55,63,.922),244px 212px rgba(77,55,63,.922),244px 216px #37242b,244px 220px #34222d,244px 224px #34222d,244px 228px #261d23,244px 232px #37242b,244px 236px #37242b,244px 240px #37242b,248px 128px #37242b,248px 136px #2c1e23,248px 140px #37242b,248px 148px #37242b,248px 152px #37242b,248px 156px rgba(77,55,63,.922),248px 160px rgba(77,55,63,.922),248px 164px rgba(77,55,63,.922),248px 168px #a5788a,248px 172px #a5788a,248px 176px #a5788a,248px 180px #a5788a,248px 184px #a5788a,248px 188px #a5788a,248px 192px #a5788a,248px 196px #a5788a,248px 200px #a5788a,248px 204px rgba(77,55,63,.922),248px 208px rgba(77,55,63,.922),248px 212px rgba(77,55,63,.922),248px 216px rgba(77,55,63,.922),248px 220px rgba(77,55,63,.922),248px 224px rgba(77,55,63,.922),248px 228px rgba(77,55,63,.922),248px 232px #37242b,248px 236px #37242b,252px 132px #37242b,252px 136px #37242b,252px 140px #37242b,252px 144px #37242b,252px 148px #37242b,252px 152px rgba(77,55,63,.922),252px 156px rgba(77,55,63,.922),252px 160px rgba(77,55,63,.922),252px 164px rgba(77,55,63,.922),252px 168px #a5788a,252px 172px #a5788a,252px 176px #a5788a,252px 180px #a5788a,252px 184px #a5788a,252px 188px #a5788a,252px 192px #a5788a,252px 196px #a5788a,252px 200px #a5788a,252px 204px rgba(77,55,63,.922),252px 208px rgba(77,55,63,.922),252px 212px rgba(77,55,63,.922),252px 216px rgba(77,55,63,.922),252px 220px #37242b,252px 224px rgba(77,55,63,.922),252px 228px rgba(77,55,63,.922),252px 232px #37242b,252px 236px #37242b,252px 240px #37242b,252px 244px #37242b,256px 124px #37242b,256px 132px #37242b,256px 136px #37242b,256px 140px #37242b,256px 144px #37242b,256px 148px #37242b,256px 152px rgba(77,55,63,.922),256px 156px rgba(77,55,63,.922),256px 160px rgba(77,55,63,.922),256px 164px rgba(77,55,63,.922),256px 168px #a5788a,256px 172px #a5788a,256px 176px #a5788a,256px 180px #a5788a,256px 184px #a5788a,256px 188px #4e3344,256px 192px #34222d,256px 196px #a5788a,256px 200px #a5788a,256px 204px #a5788a,256px 208px rgba(77,55,63,.922),256px 212px rgba(77,55,63,.922),256px 216px rgba(77,55,63,.922),256px 220px rgba(77,55,63,.922),256px 224px #37242b,256px 228px #37242b,256px 232px #37242b,256px 236px #37242b,256px 240px #37242b,256px 248px #37242b,260px 128px #37242b,260px 132px #37242b,260px 136px #37242b,260px 140px #37242b,260px 144px #37242b,260px 148px rgba(77,55,63,.922),260px 152px rgba(77,55,63,.922),260px 156px rgba(77,55,63,.922),260px 160px rgba(77,55,63,.922),260px 164px #a5788a,260px 168px #a5788a,260px 172px #4e3344,260px 176px #fa8d7c,260px 180px #34222d,260px 184px #34222d,260px 188px #623b3f,260px 192px #4e3344,260px 196px #34222d,260px 200px #a5788a,260px 204px #a5788a,260px 208px rgba(77,55,63,.922),260px 212px rgba(77,55,63,.922),260px 216px rgba(77,55,63,.922),260px 220px rgba(77,55,63,.922),260px 224px rgba(77,55,63,.922),260px 228px rgba(77,55,63,.922),260px 232px rgba(77,55,63,.922),260px 236px #37242b,260px 240px #37242b,260px 244px #37242b,260px 248px #37242b,264px 128px #37242b,264px 132px #37242b,264px 136px #37242b,264px 140px #37242b,264px 144px #37242b,264px 148px rgba(77,55,63,.922),264px 152px rgba(77,55,63,.922),264px 156px rgba(77,55,63,.922),264px 160px rgba(77,55,63,.922),264px 164px #a5788a,264px 168px #623b3f,264px 172px #34222d,264px 176px #34222d,264px 180px #623b3f,264px 184px #623b3f,264px 188px #623b3f,264px 192px #34222d,264px 196px #34222d,264px 200px #a5788a,264px 204px rgba(77,55,63,.922),264px 208px rgba(77,55,63,.922),264px 212px rgba(77,55,63,.922),264px 216px rgba(77,55,63,.922),264px 220px rgba(77,55,63,.922),264px 224px rgba(77,55,63,.922),264px 228px #37242b,264px 232px #37242b,264px 236px #37242b,264px 240px #2f1a22,264px 244px #2f1a22,264px 248px #2f1a22,264px 252px #2f1a22,268px 124px #37242b,268px 128px #37242b,268px 132px #37242b,268px 136px #37242b,268px 140px #37242b,268px 144px #37242b,268px 148px rgba(77,55,63,.922),268px 152px rgba(77,55,63,.922),268px 156px rgba(77,55,63,.922),268px 160px rgba(77,55,63,.922),268px 164px #a5788a,268px 168px #34222d,268px 172px #34222d,268px 176px #623b3f,268px 180px #34222d,268px 184px #7c4848,268px 188px #34222d,268px 192px #34222d,268px 196px #a5788a,268px 200px #a5788a,268px 204px rgba(77,55,63,.922),268px 208px #a5788a,268px 212px rgba(77,55,63,.922),268px 216px rgba(77,55,63,.922),268px 220px rgba(77,55,63,.922),268px 224px #4c3544,268px 228px #34222d,268px 232px #2f1a22,268px 236px #2f1a22,268px 240px #2f1a22,268px 244px #2f1a22,268px 248px #2f1a22,268px 252px #2f1a22,272px 124px #37242b,272px 128px #37242b,272px 132px #37242b,272px 136px #37242b,272px 140px #37242b,272px 144px #37242b,272px 148px #37242b,272px 152px rgba(77,55,63,.922),272px 156px rgba(77,55,63,.922),272px 160px rgba(77,55,63,.922),272px 164px #a5788a,272px 168px #a5788a,272px 172px #4e3344,272px 176px #34222d,272px 180px #fa8d7c,272px 184px #623b3f,272px 188px #34222d,272px 192px #34222d,272px 196px #a5788a,272px 200px #a5788a,272px 204px #a5788a,272px 208px rgba(77,55,63,.922),272px 212px rgba(77,55,63,.922),272px 216px rgba(77,55,63,.922),272px 220px #76505f,272px 224px #261d23,272px 228px #261d23,272px 232px #2f1a22,272px 236px #2f1a22,272px 240px #2f1a22,272px 244px #2f1a22,272px 248px #37242b,276px 132px #37242b,276px 136px #37242b,276px 140px #37242b,276px 144px rgba(77,55,63,.922),276px 148px #37242b,276px 152px rgba(77,55,63,.922),276px 156px rgba(77,55,63,.922),276px 160px rgba(77,55,63,.922),276px 164px #a5788a,276px 168px #a5788a,276px 172px #34222d,276px 176px #fa8d7c,276px 180px #623b3f,276px 184px #34222d,276px 188px #34222d,276px 192px #a5788a,276px 196px #a5788a,276px 200px #a5788a,276px 204px #a5788a,276px 208px #a5788a,276px 212px rgba(77,55,63,.922),276px 216px rgba(77,55,63,.922),276px 220px #76505f,276px 224px #261d23,276px 228px #261d23,276px 232px rgba(77,55,63,.922),276px 236px #37242b,276px 240px #37242b,276px 248px #37242b,280px 124px #37242b,280px 132px #37242b,280px 136px #37242b,280px 140px #37242b,280px 144px rgba(77,55,63,.922),280px 148px rgba(77,55,63,.922),280px 152px rgba(77,55,63,.922),280px 156px rgba(77,55,63,.922),280px 160px #623b3f,280px 164px #623b3f,280px 168px #a5788a,280px 172px #34222d,280px 176px #4e3344,280px 180px #4e3344,280px 184px #34222d,280px 188px #34222d,280px 192px #a5788a,280px 196px #a5788a,280px 200px #a5788a,280px 204px #a5788a,280px 208px #a5788a,280px 212px rgba(77,55,63,.922),280px 216px rgba(77,55,63,.922),280px 220px rgba(77,55,63,.922),280px 224px rgba(77,55,63,.922),280px 228px rgba(77,55,63,.922),280px 232px #34222d,280px 236px #34222d,280px 244px #37242b,280px 248px #37242b,284px 124px #37242b,284px 128px #37242b,284px 132px #37242b,284px 136px #37242b,284px 140px #37242b,284px 144px rgba(77,55,63,.922),284px 148px rgba(77,55,63,.922),284px 152px rgba(77,55,63,.922),284px 156px #34222d,284px 160px #623b3f,284px 164px #623b3f,284px 168px #623b3f,284px 172px #623b3f,284px 176px #623b3f,284px 180px #34222d,284px 184px #34222d,284px 188px #a5788a,284px 192px #a5788a,284px 196px #a5788a,284px 200px #a5788a,284px 204px #a5788a,284px 208px #a5788a,284px 212px rgba(77,55,63,.922),284px 216px rgba(77,55,63,.922),284px 220px rgba(77,55,63,.922),284px 224px #37242b,284px 228px #76505f,284px 232px #34222d,284px 236px #261d23,284px 240px #2f1a22,284px 244px #2f1a22,284px 248px #2f1a22,284px 252px #2f1a22,288px 128px #37242b,288px 132px #37242b,288px 136px #37242b,288px 140px #37242b,288px 144px rgba(77,55,63,.922),288px 148px rgba(77,55,63,.922),288px 152px rgba(77,55,63,.922),288px 156px #623b3f,288px 160px #34222d,288px 164px #34222d,288px 168px #34222d,288px 172px #623b3f,288px 176px #fa8d7c,288px 180px #623b3f,288px 184px #34222d,288px 188px #a5788a,288px 192px #a5788a,288px 196px #a5788a,288px 200px #a5788a,288px 204px #a5788a,288px 208px #a5788a,288px 212px rgba(77,55,63,.922),288px 216px rgba(77,55,63,.922),288px 220px rgba(77,55,63,.922),288px 224px rgba(77,55,63,.922),288px 228px #76505f,288px 232px #261d23,288px 236px #261d23,288px 240px #2f1a22,288px 244px #2f1a22,288px 248px #2f1a22,288px 252px #2f1a22,292px 132px #37242b,292px 136px #37242b,292px 140px #37242b,292px 144px rgba(77,55,63,.922),292px 148px rgba(77,55,63,.922),292px 152px rgba(77,55,63,.922),292px 156px rgba(77,55,63,.922),292px 160px #34222d,292px 164px #34222d,292px 168px #34222d,292px 172px #34222d,292px 176px #34222d,292px 180px #fa8d7c,292px 184px #fa8d7c,292px 188px #623b3f,292px 192px #34222d,292px 196px #a5788a,292px 200px #a5788a,292px 204px #a5788a,292px 208px rgba(77,55,63,.922),292px 212px rgba(77,55,63,.922),292px 216px rgba(77,55,63,.922),292px 220px rgba(77,55,63,.922),292px 224px rgba(77,55,63,.922),292px 228px #76505f,292px 232px #261d23,292px 236px #261d23,292px 240px #2f1a22,292px 244px #2f1a22,292px 248px #2f1a22,292px 252px #2f1a22,296px 124px #37242b,296px 132px #37242b,296px 136px #37242b,296px 140px #37242b,296px 144px rgba(77,55,63,.922),296px 148px rgba(77,55,63,.922),296px 152px rgba(77,55,63,.922),296px 156px rgba(77,55,63,.922),296px 160px rgba(77,55,63,.922),296px 164px #a5788a,296px 168px #34222d,296px 172px #4e3344,296px 176px #34222d,296px 180px #34222d,296px 184px #34222d,296px 188px #623b3f,296px 192px #4e3344,296px 196px #34222d,296px 200px #a5788a,296px 204px #a5788a,296px 208px #a5788a,296px 212px rgba(77,55,63,.922),296px 216px rgba(77,55,63,.922),296px 220px rgba(77,55,63,.922),296px 224px rgba(77,55,63,.922),296px 228px #4c3544,296px 232px #261d23,296px 236px #261d23,296px 240px #2f1a22,296px 244px #2f1a22,296px 248px #2f1a22,296px 252px #2f1a22,300px 132px #37242b,300px 136px #37242b,300px 140px #37242b,300px 144px #37242b,300px 148px rgba(77,55,63,.922),300px 152px rgba(77,55,63,.922),300px 156px rgba(77,55,63,.922),300px 160px rgba(77,55,63,.922),300px 164px #a5788a,300px 168px #4e3344,300px 172px #34222d,300px 176px #34222d,300px 180px #a5788a,300px 184px #34222d,300px 188px #34222d,300px 192px #4e3344,300px 196px #34222d,300px 200px #a5788a,300px 204px #a5788a,300px 208px #a5788a,300px 212px rgba(77,55,63,.922),300px 216px rgba(77,55,63,.922),300px 220px rgba(77,55,63,.922),300px 224px rgba(77,55,63,.922),300px 228px rgba(77,55,63,.922),300px 232px #4c3544,300px 236px #261d23,300px 240px #2f1a22,300px 244px #2f1a22,300px 248px #2f1a22,300px 252px #2f1a22,304px 136px #37242b,304px 140px #37242b,304px 144px rgba(77,55,63,.922),304px 148px rgba(77,55,63,.922),304px 152px rgba(77,55,63,.922),304px 156px rgba(77,55,63,.922),304px 160px rgba(77,55,63,.922),304px 164px #a5788a,304px 168px #a5788a,304px 172px #4e3344,304px 176px #34222d,304px 180px #34222d,304px 184px #a5788a,304px 188px #34222d,304px 192px #34222d,304px 196px #34222d,304px 200px #a5788a,304px 204px rgba(77,55,63,.922),304px 208px rgba(77,55,63,.922),304px 212px rgba(77,55,63,.922),304px 216px rgba(77,55,63,.922),304px 220px #37242b,304px 224px rgba(77,55,63,.922),304px 228px #37242b,304px 232px #37242b,304px 236px #37242b,304px 240px #37242b,304px 244px #37242b,304px 248px #37242b,308px 124px #37242b,308px 128px #37242b,308px 136px #37242b,308px 140px #37242b,308px 144px #37242b,308px 148px rgba(77,55,63,.922),308px 152px rgba(77,55,63,.922),308px 156px rgba(77,55,63,.922),308px 160px rgba(77,55,63,.922),308px 164px #a5788a,308px 168px #a5788a,308px 172px #fa8d7c,308px 176px #4e3344,308px 180px #34222d,308px 184px #34222d,308px 188px #a5788a,308px 192px #34222d,308px 196px #a5788a,308px 200px #a5788a,308px 204px #a5788a,308px 208px rgba(77,55,63,.922),308px 212px rgba(77,55,63,.922),308px 216px rgba(77,55,63,.922),308px 220px rgba(77,55,63,.922),308px 224px rgba(77,55,63,.922),308px 228px rgba(77,55,63,.922),308px 232px rgba(77,55,63,.922),308px 236px rgba(77,55,63,.922),308px 240px #37242b,308px 244px #37242b,312px 132px #37242b,312px 136px #37242b,312px 140px #37242b,312px 144px #37242b,312px 148px rgba(77,55,63,.922),312px 152px rgba(77,55,63,.922),312px 156px rgba(77,55,63,.922),312px 160px rgba(77,55,63,.922),312px 164px rgba(77,55,63,.922),312px 168px #a5788a,312px 172px #a5788a,312px 176px #623b3f,312px 180px #4e3344,312px 184px #34222d,312px 188px #34222d,312px 192px #a5788a,312px 196px #a5788a,312px 200px #a5788a,312px 204px #a5788a,312px 208px rgba(77,55,63,.922),312px 212px rgba(77,55,63,.922),312px 216px rgba(77,55,63,.922),312px 220px rgba(77,55,63,.922),312px 224px rgba(77,55,63,.922),312px 228px rgba(77,55,63,.922),312px 232px #37242b,312px 236px #37242b,312px 240px #37242b,316px 132px #37242b,316px 136px #37242b,316px 140px #37242b,316px 144px #37242b,316px 148px rgba(77,55,63,.922),316px 152px rgba(77,55,63,.922),316px 156px rgba(77,55,63,.922),316px 160px rgba(77,55,63,.922),316px 164px rgba(77,55,63,.922),316px 168px #a5788a,316px 172px #a5788a,316px 176px #a5788a,316px 180px #34222d,316px 184px #34222d,316px 188px #a5788a,316px 192px #a5788a,316px 196px #a5788a,316px 200px #a5788a,316px 204px #a5788a,316px 208px rgba(77,55,63,.922),316px 212px rgba(77,55,63,.922),316px 216px rgba(77,55,63,.922),316px 220px rgba(77,55,63,.922),316px 224px #37242b,316px 228px #37242b,316px 232px #37242b,316px 236px #37242b,316px 240px #37242b,316px 244px #37242b,320px 128px #37242b,320px 132px #37242b,320px 144px #37242b,320px 152px rgba(77,55,63,.922),320px 156px rgba(77,55,63,.922),320px 160px rgba(77,55,63,.922),320px 164px rgba(77,55,63,.922),320px 168px #a5788a,320px 172px #a5788a,320px 176px #a5788a,320px 180px #a5788a,320px 184px #34222d,320px 188px #a5788a,320px 192px #a5788a,320px 196px #a5788a,320px 200px #a5788a,320px 204px rgba(77,55,63,.922),320px 208px rgba(77,55,63,.922),320px 212px rgba(77,55,63,.922),320px 216px rgba(77,55,63,.922),320px 220px rgba(77,55,63,.922),320px 224px #76505f,320px 228px #34222d,320px 232px #34222d,320px 236px #37242b,320px 244px #37242b,324px 128px #37242b,324px 136px #37242b,324px 140px #37242b,324px 144px #37242b,324px 148px rgba(77,55,63,.922),324px 152px #37242b,324px 156px rgba(77,55,63,.922),324px 160px rgba(77,55,63,.922),324px 164px rgba(77,55,63,.922),324px 168px #a5788a,324px 172px #a5788a,324px 176px #a5788a,324px 180px #a5788a,324px 184px #a5788a,324px 188px #a5788a,324px 192px #a5788a,324px 196px #a5788a,324px 200px #a5788a,324px 204px rgba(77,55,63,.922),324px 208px rgba(77,55,63,.922),324px 212px rgba(77,55,63,.922),324px 216px rgba(77,55,63,.922),324px 220px #76505f,324px 224px #4c3544,324px 228px #34222d,324px 232px #34222d,324px 236px #2f1a22,324px 240px #37242b,324px 244px #37242b,328px 116px #37242b,328px 136px #37242b,328px 140px #2c1e23,328px 144px #37242b,328px 148px rgba(77,55,63,.922),328px 152px rgba(77,55,63,.922),328px 156px rgba(77,55,63,.922),328px 160px rgba(77,55,63,.922),328px 164px rgba(77,55,63,.922),328px 168px rgba(77,55,63,.922),328px 172px rgba(77,55,63,.922),328px 176px #a5788a,328px 180px #a5788a,328px 184px #a5788a,328px 188px #a5788a,328px 192px #a5788a,328px 196px #a5788a,328px 200px #a5788a,328px 204px rgba(77,55,63,.922),328px 208px rgba(77,55,63,.922),328px 212px rgba(77,55,63,.922),328px 216px rgba(77,55,63,.922),328px 220px #76505f,328px 224px #4c3544,328px 228px #261d23,328px 232px #261d23,328px 236px #2f1a22,328px 240px #2f1a22,328px 244px #37242b,332px 132px #37242b,332px 136px #2c1e23,332px 140px #2c1e23,332px 144px rgba(77,55,63,.922),332px 148px #37242b,332px 152px #37242b,332px 156px rgba(77,55,63,.922),332px 160px rgba(77,55,63,.922),332px 164px rgba(77,55,63,.922),332px 168px rgba(77,55,63,.922),332px 172px #a5788a,332px 176px #a5788a,332px 180px #a5788a,332px 184px #a5788a,332px 188px #a5788a,332px 192px #a5788a,332px 196px rgba(77,55,63,.922),332px 200px rgba(77,55,63,.922),332px 204px rgba(77,55,63,.922),332px 208px rgba(77,55,63,.922),332px 212px rgba(77,55,63,.922),332px 216px rgba(77,55,63,.922),332px 220px #4c3544,332px 224px #4c3544,332px 228px #261d23,332px 232px #261d23,332px 236px #2f1a22,332px 240px #2f1a22,332px 244px #2f1a22,332px 248px #2f1a22,336px 132px #37242b,336px 140px #2c1e23,336px 144px #37242b,336px 148px #37242b,336px 152px rgba(77,55,63,.922),336px 156px rgba(77,55,63,.922),336px 160px rgba(77,55,63,.922),336px 164px rgba(77,55,63,.922),336px 168px rgba(77,55,63,.922),336px 172px rgba(77,55,63,.922),336px 176px #a5788a,336px 180px #a5788a,336px 184px #a5788a,336px 188px #a5788a,336px 192px #a5788a,336px 196px #a5788a,336px 200px rgba(77,55,63,.922),336px 204px rgba(77,55,63,.922),336px 208px rgba(77,55,63,.922),336px 212px rgba(77,55,63,.922),336px 216px rgba(77,55,63,.922),336px 220px #4c3544,336px 224px #4c3544,336px 228px #261d23,336px 232px #261d23,336px 236px #2f1a22,336px 240px #2f1a22,336px 244px #2f1a22,336px 248px #2f1a22,336px 252px #2f1a22,340px 120px #37242b,340px 136px #2c1e23,340px 140px #2c1e23,340px 144px #37242b,340px 148px rgba(77,55,63,.922),340px 152px #37242b,340px 156px rgba(77,55,63,.922),340px 160px rgba(77,55,63,.922),340px 164px rgba(77,55,63,.922),340px 168px rgba(77,55,63,.922),340px 172px rgba(77,55,63,.922),340px 176px #a5788a,340px 180px #a5788a,340px 184px rgba(77,55,63,.922),340px 188px rgba(77,55,63,.922),340px 192px rgba(77,55,63,.922),340px 196px rgba(77,55,63,.922),340px 200px rgba(77,55,63,.922),340px 204px rgba(77,55,63,.922),340px 208px rgba(77,55,63,.922),340px 212px rgba(77,55,63,.922),340px 216px rgba(77,55,63,.922),340px 220px rgba(77,55,63,.922),340px 224px #4c3544,340px 228px #34222d,340px 232px #34222d,340px 236px #2f1a22,340px 240px #2f1a22,340px 244px #2f1a22,340px 248px #2f1a22,340px 252px #2f1a22,344px 116px #2c1e23,344px 132px #37242b,344px 144px #37242b,344px 148px rgba(77,55,63,.922),344px 152px #37242b,344px 156px rgba(77,55,63,.922),344px 160px rgba(77,55,63,.922),344px 164px rgba(77,55,63,.922),344px 168px rgba(77,55,63,.922),344px 172px rgba(77,55,63,.922),344px 176px rgba(77,55,63,.922),344px 180px #a5788a,344px 184px rgba(77,55,63,.922),344px 188px #a5788a,344px 192px rgba(77,55,63,.922),344px 196px rgba(77,55,63,.922),344px 200px rgba(77,55,63,.922),344px 204px rgba(77,55,63,.922),344px 208px rgba(77,55,63,.922),344px 212px rgba(77,55,63,.922),344px 216px rgba(77,55,63,.922),344px 220px rgba(77,55,63,.922),344px 224px rgba(77,55,63,.922),344px 228px rgba(77,55,63,.922),344px 232px #37242b,344px 236px #37242b,344px 240px #2f1a22,344px 244px #2f1a22,344px 248px #2f1a22,344px 252px #2f1a22,348px 140px #37242b,348px 144px #37242b,348px 148px #37242b,348px 152px rgba(77,55,63,.922),348px 156px rgba(77,55,63,.922),348px 160px #37242b,348px 164px rgba(77,55,63,.922),348px 168px rgba(77,55,63,.922),348px 172px rgba(77,55,63,.922),348px 176px rgba(77,55,63,.922),348px 180px rgba(77,55,63,.922),348px 184px rgba(77,55,63,.922),348px 188px rgba(77,55,63,.922),348px 192px rgba(77,55,63,.922),348px 196px rgba(77,55,63,.922),348px 200px rgba(77,55,63,.922),348px 204px rgba(77,55,63,.922),348px 208px rgba(77,55,63,.922),348px 212px rgba(77,55,63,.922),348px 216px rgba(77,55,63,.922),348px 220px rgba(77,55,63,.922),348px 224px rgba(77,55,63,.922),348px 228px #37242b,348px 232px rgba(77,55,63,.922),348px 244px #2f1a22,348px 248px #2f1a22,348px 252px #2f1a22,352px 136px #37242b,352px 140px #37242b,352px 144px #37242b,352px 148px #37242b,352px 152px #37242b,352px 156px #37242b,352px 160px rgba(77,55,63,.922),352px 164px rgba(77,55,63,.922),352px 168px rgba(77,55,63,.922),352px 172px rgba(77,55,63,.922),352px 176px rgba(77,55,63,.922),352px 180px rgba(77,55,63,.922),352px 184px rgba(77,55,63,.922),352px 188px rgba(77,55,63,.922),352px 192px rgba(77,55,63,.922),352px 196px rgba(77,55,63,.922),352px 200px rgba(77,55,63,.922),352px 204px rgba(77,55,63,.922),352px 208px rgba(77,55,63,.922),352px 212px rgba(77,55,63,.922),352px 216px rgba(77,55,63,.922),352px 220px #37242b,352px 224px #37242b,352px 228px #37242b,352px 232px #37242b,352px 236px #37242b,352px 240px #37242b,352px 248px #2f1a22,352px 252px #2f1a22,356px 136px #37242b,356px 148px #37242b,356px 152px #37242b,356px 156px rgba(77,55,63,.922),356px 160px rgba(77,55,63,.922),356px 164px #37242b,356px 168px rgba(77,55,63,.922),356px 172px rgba(77,55,63,.922),356px 176px rgba(77,55,63,.922),356px 180px rgba(77,55,63,.922),356px 184px rgba(77,55,63,.922),356px 188px rgba(77,55,63,.922),356px 192px rgba(77,55,63,.922),356px 196px rgba(77,55,63,.922),356px 200px rgba(77,55,63,.922),356px 204px rgba(77,55,63,.922),356px 208px rgba(77,55,63,.922),356px 212px rgba(77,55,63,.922),356px 216px rgba(77,55,63,.922),356px 220px rgba(77,55,63,.922),356px 224px rgba(77,55,63,.922),356px 228px rgba(77,55,63,.922),356px 232px #37242b,360px 140px #2c1e23,360px 148px #37242b,360px 152px #37242b,360px 156px #37242b,360px 160px #37242b,360px 164px rgba(77,55,63,.922),360px 168px rgba(77,55,63,.922),360px 172px rgba(77,55,63,.922),360px 176px rgba(77,55,63,.922),360px 180px rgba(77,55,63,.922),360px 184px rgba(77,55,63,.922),360px 188px rgba(77,55,63,.922),360px 192px rgba(77,55,63,.922),360px 204px rgba(77,55,63,.922),360px 208px rgba(77,55,63,.922),360px 212px rgba(77,55,63,.922),360px 216px rgba(77,55,63,.922),360px 220px #37242b,360px 224px rgba(77,55,63,.922),360px 228px rgba(77,55,63,.922),360px 240px #37242b,364px 144px #37242b,364px 148px #37242b,364px 152px #34222d,364px 156px #34222d,364px 160px #34222d,364px 164px #37242b,364px 168px #37242b,364px 172px rgba(77,55,63,.922),364px 176px rgba(77,55,63,.922),364px 180px rgba(77,55,63,.922),364px 184px rgba(77,55,63,.922),364px 188px rgba(77,55,63,.922),364px 192px rgba(77,55,63,.922),364px 204px rgba(77,55,63,.922),364px 208px rgba(77,55,63,.922),364px 212px #37242b,364px 216px rgba(77,55,63,.922),364px 220px rgba(77,55,63,.922),364px 224px #37242b,364px 232px #37242b,364px 236px #37242b,368px 140px #37242b,368px 144px #2c1e23,368px 148px #34222d,368px 152px #4e3344,368px 156px #7c4848,368px 160px #34222d,368px 164px #34222d,368px 168px rgba(77,55,63,.922),368px 172px rgba(77,55,63,.922),368px 176px #37242b,368px 180px rgba(77,55,63,.922),368px 184px rgba(77,55,63,.922),368px 188px rgba(77,55,63,.922),368px 192px #fa8d7c,368px 200px #fa8d7c,368px 204px rgba(77,55,63,.922),368px 208px rgba(77,55,63,.922),368px 212px rgba(77,55,63,.922),368px 216px #37242b,368px 220px #37242b,368px 224px rgba(77,55,63,.922),368px 228px #37242b,368px 232px #37242b,368px 236px #37242b,372px 148px #34222d,372px 152px #4e3344,372px 156px #4e3344,372px 160px #4e3344,372px 164px #34222d,372px 168px #34222d,372px 172px rgba(77,55,63,.922),372px 176px rgba(77,55,63,.922),372px 180px rgba(77,55,63,.922),372px 184px rgba(77,55,63,.922),372px 188px rgba(77,55,63,.922),372px 200px #37242b,372px 204px rgba(77,55,63,.922),372px 208px rgba(77,55,63,.922),372px 212px rgba(77,55,63,.922),372px 216px #37242b,372px 220px #37242b,372px 224px #37242b,372px 228px #37242b,372px 232px #37242b,376px 132px #37242b,376px 148px #34222d,376px 152px #34222d,376px 156px #7c4848,376px 160px #7c4848,376px 164px #4e3344,376px 168px #34222d,376px 172px #37242b,376px 176px rgba(77,55,63,.922),376px 180px rgba(77,55,63,.922),376px 184px rgba(77,55,63,.922),376px 188px #fa8d7c,376px 200px #2f1a22,376px 204px rgba(77,55,63,.922),376px 208px rgba(77,55,63,.922),376px 212px rgba(77,55,63,.922),376px 216px rgba(77,55,63,.922),376px 220px rgba(77,55,63,.922),376px 224px #37242b,376px 228px #37242b,376px 244px #37242b,380px 128px #37242b,380px 144px #2c1e23,380px 148px #2c1e23,380px 152px #34222d,380px 156px #4e3344,380px 160px #7c4848,380px 164px #7c4848,380px 168px #4e3344,380px 172px #34222d,380px 176px rgba(77,55,63,.922),380px 180px rgba(77,55,63,.922),380px 184px rgba(77,55,63,.922),380px 196px #2f1a22,380px 200px #2f1a22,380px 204px rgba(77,55,63,.922),380px 208px rgba(77,55,63,.922),380px 212px #37242b,380px 216px #37242b,380px 220px #37242b,380px 224px rgba(77,55,63,.922),384px 148px #2c1e23,384px 152px #34222d,384px 156px #34222d,384px 160px #7c4848,384px 164px #4e3344,384px 168px #4e3344,384px 172px #34222d,384px 176px #34222d,384px 180px rgba(77,55,63,.922),384px 184px #fa8d7c,384px 196px #2f1a22,384px 200px #2f1a22,384px 204px rgba(77,55,63,.922),384px 208px #37242b,384px 212px rgba(77,55,63,.922),384px 216px #37242b,384px 228px #37242b,384px 240px #37242b,384px 244px #37242b,388px 136px #37242b,388px 152px #34222d,388px 156px #34222d,388px 160px #4e3344,388px 164px #4e3344,388px 168px #7c4848,388px 172px #4e3344,388px 176px #34222d,388px 180px #37242b,388px 192px rgba(77,55,63,.922),388px 196px #2f1a22,388px 200px #2f1a22,388px 204px rgba(77,55,63,.922),388px 208px #37242b,388px 212px #37242b,388px 216px rgba(77,55,63,.922),388px 220px #37242b,388px 224px #37242b,388px 228px #37242b,388px 236px #37242b,392px 132px #37242b,392px 148px #37242b,392px 156px #34222d,392px 160px #34222d,392px 164px #4e3344,392px 168px #7c4848,392px 172px #4e3344,392px 176px #34222d,392px 192px rgba(77,55,63,.922),392px 196px #2f1a22,392px 200px #2f1a22,392px 204px #37242b,392px 208px #37242b,392px 212px #37242b,392px 216px #37242b,392px 224px #37242b,396px 132px #37242b,396px 144px #37242b,396px 148px #37242b,396px 156px #34222d,396px 160px #34222d,396px 164px #4e3344,396px 168px #7c4848,396px 172px #7c4848,396px 176px #4e3344,396px 188px #37242b,396px 192px #37242b,396px 196px #2f1a22,396px 200px #2f1a22,396px 204px #37242b,396px 208px rgba(77,55,63,.922),396px 212px #37242b,400px 152px #2c1e23,400px 156px #34222d,400px 160px #34222d,400px 164px #4e3344,400px 168px #4e3344,400px 172px #7c4848,400px 188px #37242b,400px 192px rgba(77,55,63,.922),400px 196px #2f1a22,400px 200px #2f1a22,400px 204px #37242b,400px 208px #37242b,400px 212px #37242b,400px 216px #37242b,400px 220px #37242b,400px 224px #37242b,404px 152px #37242b,404px 156px #37242b,404px 160px #34222d,404px 164px #34222d,404px 168px #4e3344,404px 172px #7c4848,404px 184px #34222d,404px 188px #37242b,404px 192px #37242b,404px 196px #2f1a22,404px 200px #2f1a22,404px 204px #37242b,404px 208px #37242b,404px 212px #37242b,408px 148px #37242b,408px 156px #2c1e23,408px 160px #34222d,408px 164px #34222d,408px 168px #34222d,408px 176px #76505f,408px 184px #34222d,408px 188px #34222d,408px 192px #37242b,408px 196px #2f1a22,408px 200px #2f1a22,408px 204px #37242b,412px 148px #37242b,412px 156px #623b3f,412px 160px #2c1e23,412px 164px #34222d,412px 168px #34222d,412px 176px #76505f,412px 180px #a5788a,412px 184px #34222d,412px 188px #34222d,412px 192px #37242b,412px 196px #2f1a22,412px 200px #2f1a22,412px 208px #37242b,412px 212px #37242b,412px 240px #37242b,416px 148px #37242b,416px 156px #623b3f,416px 160px #623b3f,416px 164px #34222d,416px 172px #76505f,416px 180px #34222d,416px 184px #4e3344,416px 188px #34222d,416px 192px #34222d,416px 196px #2f1a22,416px 200px #2f1a22,416px 204px #37242b,416px 228px #37242b,420px 156px #34222d,420px 160px #623b3f,420px 164px #34222d,420px 168px #76505f,420px 172px #76505f,420px 180px #34222d,420px 184px #4e3344,420px 188px #4e3344,420px 192px #34222d,420px 196px #34222d,420px 200px #2f1a22,420px 228px #37242b,424px 156px #34222d,424px 160px #34222d,424px 168px #4e3344,424px 176px #34222d,424px 180px #34222d,424px 184px #34222d,424px 188px #34222d,424px 192px #34222d,424px 196px #34222d,424px 200px #2f1a22,424px 232px #37242b,428px 156px #37242b,428px 160px #34222d,428px 172px #76505f,428px 176px #34222d,428px 180px #34222d,428px 184px #261d23,428px 188px #261d23,428px 192px #261d23,428px 196px #34222d,428px 200px #2f1a22,428px 220px #37242b,428px 224px #37242b,432px 160px #34222d,432px 164px #4c3544,432px 168px #4c3544,432px 172px #34222d,432px 176px #623b3f,432px 180px #261d23,432px 184px #261d23,432px 188px #261d23,432px 192px #261d23,432px 196px #261d23,432px 200px #34222d,432px 216px #37242b,436px 156px #4e3344,436px 160px #4e3344,436px 164px #34222d,436px 168px #34222d,436px 172px #34222d,436px 176px #34222d,436px 180px #623b3f,436px 184px #261d23,436px 188px #34222d,436px 192px #261d23,436px 196px #34222d,436px 200px #261d23,440px 156px #4e3344,440px 160px #34222d,440px 164px #34222d,440px 168px #261d23,440px 172px #261d23,440px 176px #34222d,440px 180px #34222d,440px 184px #261d23,440px 188px #261d23,440px 192px #261d23,440px 196px #34222d,440px 200px #261d23,444px 152px #4e3344,444px 156px #4e3344,444px 160px #34222d,444px 164px #261d23,444px 172px #261d23,444px 176px #261d23,444px 180px #34222d,444px 184px #34222d,444px 188px #34222d,444px 192px #34222d,444px 196px #34222d,444px 200px #261d23,448px 152px #34222d,448px 156px #34222d,448px 160px #34222d,448px 164px #261d23,448px 172px #2f1a22,448px 176px #261d23,448px 180px #261d23,448px 184px #34222d,448px 188px #34222d,448px 192px #34222d,448px 196px #261d23,448px 200px #2f1a22,448px 220px #37242b,448px 224px #37242b,452px 152px #261d23,452px 156px #34222d,452px 160px #261d23,452px 176px #2f1a22,452px 180px #261d23,452px 184px #261d23,452px 188px #261d23,452px 192px #261d23,452px 196px #2f1a22,452px 200px #2f1a22,456px 156px #261d23,456px 160px #261d23,456px 176px #2f1a22,456px 180px #2f1a22,456px 184px #2f1a22,456px 188px #2f1a22,456px 192px #2f1a22,456px 196px #2f1a22,456px 200px #2f1a22,456px 212px #37242b,456px 216px #37242b,456px 224px #37242b,460px 180px #2f1a22,460px 184px #2f1a22,460px 188px #2f1a22,460px 192px #2f1a22,460px 196px #2f1a22,460px 200px #2f1a22,460px 212px #37242b,464px 180px #2f1a22,464px 184px #2f1a22,464px 188px #2f1a22,464px 192px #2f1a22,464px 196px #2f1a22,464px 200px #2f1a22,464px 208px #37242b,468px 184px #2f1a22,468px 188px #2f1a22,468px 192px #2f1a22,468px 196px #2f1a22,468px 200px #2f1a22,472px 184px #2f1a22,472px 188px #2f1a22,472px 192px #2f1a22,472px 196px #2f1a22,472px 200px #2f1a22,476px 184px #2f1a22,476px 188px #2f1a22,476px 192px #2f1a22,476px 196px #2f1a22,476px 200px #2f1a22,480px 188px #2f1a22,480px 192px #2f1a22,480px 196px #2f1a22,480px 200px #2f1a22,484px 188px #2f1a22,484px 192px #2f1a22,484px 196px #2f1a22,484px 200px #2f1a22,488px 192px #2f1a22,488px 196px #2f1a22,488px 200px #2f1a22,492px 192px #2f1a22,492px 196px #2f1a22,496px 196px #2f1a22}@keyframes animate-4f6b8358{0%{box-shadow:128px 204px #76505f,132px 196px #76505f,132px 204px #a5788a,136px 196px #a5788a,136px 204px #fa8d7c,140px 196px #fa8d7c,140px 200px #a5788a,140px 204px #fa8d7c,140px 208px #76505f,140px 220px #76505f,140px 224px #76505f,140px 228px #76505f,140px 232px #76505f,144px 136px #a5788a,144px 140px #a5788a,144px 200px #fa8d7c,144px 204px #a5788a,144px 208px #a5788a,144px 216px #76505f,144px 220px #a5788a,144px 224px #a5788a,144px 228px #a5788a,148px 132px #a5788a,148px 136px #a5788a,148px 140px #a5788a,148px 144px #a5788a,152px 132px #a5788a,152px 136px #fa8d7c,152px 140px #fa8d7c,152px 144px #a5788a,152px 176px #a5788a,156px 136px #a5788a,156px 140px #a5788a,156px 176px #a5788a,156px 180px #a5788a,156px 196px #a5788a,156px 200px #a5788a,160px 176px #a5788a,160px 180px #a5788a,160px 196px #a5788a,160px 200px #a5788a,164px 200px #fa8d7c,176px 128px #fa8d7c,176px 136px #76505f,176px 140px #a5788a,176px 144px #a5788a,180px 124px #76505f,180px 132px #a5788a,180px 136px #a5788a,180px 144px #fa8d7c,184px 120px #76505f,184px 124px #fa8d7c,184px 128px #a5788a,184px 132px #fa8d7c,184px 136px #fa8d7c,184px 172px #a5788a,184px 180px #a5788a,188px 120px #a5788a,188px 124px #fa8d7c,188px 168px #a5788a,188px 172px #a5788a,188px 176px #a5788a,188px 180px #fa8d7c,192px 136px #76505f,192px 172px #fa8d7c,192px 176px #fa8d7c,192px 180px #a5788a,204px 152px #a5788a,208px 148px #fa8d7c,208px 152px #a5788a,212px 144px #a5788a,212px 148px #a5788a,216px 144px #fa8d7c,220px 144px #fa8d7c,220px 184px rgba(77,55,63,.922),224px 176px rgba(77,55,63,.922),224px 180px rgba(77,55,63,.922),224px 184px #a5788a,224px 188px rgba(77,55,63,.922),228px 180px #a5788a,228px 184px #a5788a,228px 188px #a5788a,228px 192px #a5788a,232px 172px rgba(77,55,63,.922),232px 176px #a5788a,232px 180px #a5788a,232px 184px #a5788a,232px 188px #a5788a,236px 172px rgba(77,55,63,.922),236px 176px #a5788a,236px 180px #a5788a,236px 192px #a5788a,236px 196px #a5788a,240px 172px #a5788a,240px 176px #a5788a,240px 192px #a5788a,240px 196px rgba(77,55,63,.922),240px 200px rgba(77,55,63,.922),244px 168px rgba(77,55,63,.922),244px 172px #a5788a,244px 192px #a5788a,244px 196px #a5788a,248px 168px rgba(77,55,63,.922),248px 172px #a5788a,248px 196px #a5788a,248px 200px #a5788a,252px 168px #a5788a,252px 196px #a5788a,252px 200px #a5788a,256px 104px #bd4169,256px 108px #bd4169,256px 168px #a5788a,256px 200px #a5788a,256px 204px rgba(77,55,63,.922),260px 100px #bd4169,260px 164px rgba(77,55,63,.922),260px 168px #a5788a,260px 200px #a5788a,260px 204px #a5788a,264px 112px #bd4169,264px 116px #bd4169,264px 120px #bd4169,264px 164px rgba(77,55,63,.922),264px 200px #a5788a,268px 108px #bd4169,268px 112px #bd4169,268px 116px #bd4169,268px 120px #bd4169,268px 124px #bd4169,268px 128px #bd4169,268px 140px #bd4169,268px 144px #bd4169,268px 148px #bd4169,268px 152px #bd4169,268px 156px #bd4169,268px 200px #a5788a,268px 204px #a5788a,268px 208px rgba(77,55,63,.922),272px 104px #bd4169,272px 108px #bd4169,272px 112px #bd4169,272px 116px #bd4169,272px 128px #bd4169,272px 132px #bd4169,272px 136px #bd4169,272px 140px #bd4169,272px 144px #bd4169,272px 148px #fa8d7c,272px 152px #fa8d7c,272px 156px #bd4169,272px 160px #bd4169,272px 164px rgba(77,55,63,.922),272px 168px #a5788a,272px 200px #a5788a,272px 204px #a5788a,276px 52px #bd4169,276px 56px #bd4169,276px 60px #bd4169,276px 64px #bd4169,276px 68px #bd4169,276px 72px #bd4169,276px 100px #bd4169,276px 104px #bd4169,276px 108px #bd4169,276px 124px #bd4169,276px 128px #bd4169,276px 132px #bd4169,276px 136px #fa8d7c,276px 140px #bd4169,276px 144px #bd4169,276px 148px #fa8d7c,276px 152px #fa8d7c,276px 156px #fa8d7c,276px 160px #bd4169,276px 164px #bd4169,276px 168px #623b3f,276px 200px #a5788a,276px 204px #a5788a,276px 208px rgba(77,55,63,.922),280px 48px #bd4169,280px 52px #fa8d7c,280px 56px #fa8d7c,280px 60px #fa8d7c,280px 64px #bd4169,280px 120px #bd4169,280px 124px #bd4169,280px 128px #fa8d7c,280px 132px #fa8d7c,280px 136px #bd4169,280px 140px #bd4169,280px 144px #fa8d7c,280px 148px #fa8d7c,280px 152px #fa8d7c,280px 156px #fa8d7c,280px 160px #bd4169,280px 164px #bd4169,280px 200px #a5788a,280px 204px #a5788a,280px 208px rgba(77,55,63,.922),284px 44px #bd4169,284px 48px #fa8d7c,284px 52px #fa8d7c,284px 56px #fa8d7c,284px 60px #bd4169,284px 64px #bd4169,284px 68px #bd4169,284px 112px #bd4169,284px 116px #bd4169,284px 120px #bd4169,284px 124px #bd4169,284px 128px #fa8d7c,284px 132px #fa8d7c,284px 136px #fa8d7c,284px 140px #fa8d7c,284px 144px #fa8d7c,284px 148px #fa8d7c,284px 152px #fa8d7c,284px 160px #bd4169,284px 164px #bd4169,284px 200px #a5788a,284px 204px #a5788a,284px 208px rgba(77,55,63,.922),288px 44px #bd4169,288px 48px #bd4169,288px 52px #fa8d7c,288px 56px #fa8d7c,288px 60px #fa8d7c,288px 64px #bd4169,288px 68px #bd4169,288px 72px #bd4169,288px 100px #bd4169,288px 104px #bd4169,288px 108px #bd4169,288px 112px #bd4169,288px 116px #bd4169,288px 120px #bd4169,288px 124px #fa8d7c,288px 128px #fa8d7c,288px 132px #fa8d7c,288px 136px #fa8d7c,288px 140px #fa8d7c,288px 144px #fa8d7c,288px 148px #fa8d7c,288px 152px #bd4169,288px 204px #a5788a,288px 208px rgba(77,55,63,.922),292px 52px #bd4169,292px 56px #bd4169,292px 60px #bd4169,292px 64px #bd4169,292px 68px #bd4169,292px 72px #bd4169,292px 76px #bd4169,292px 80px #bd4169,292px 84px #bd4169,292px 88px #bd4169,292px 92px #bd4169,292px 96px #bd4169,292px 100px #bd4169,292px 104px #bd4169,292px 108px #bd4169,292px 112px #bd4169,292px 116px #bd4169,292px 120px #fa8d7c,292px 124px #fa8d7c,292px 128px #bd4169,292px 132px #bd4169,292px 136px #fa8d7c,292px 140px #fa8d7c,292px 144px #fa8d7c,292px 148px #fa8d7c,292px 152px #fa8d7c,292px 156px #bd4169,292px 204px #a5788a,296px 64px #bd4169,296px 68px #bd4169,296px 72px #bd4169,296px 76px #bd4169,296px 80px #bd4169,296px 84px #bd4169,296px 88px #bd4169,296px 92px #bd4169,296px 96px #bd4169,296px 100px #bd4169,296px 104px #bd4169,296px 108px #bd4169,296px 112px #fa8d7c,296px 116px #fa8d7c,296px 120px #bd4169,296px 124px #bd4169,296px 128px #bd4169,296px 132px #bd4169,296px 136px #bd4169,296px 140px #fa8d7c,296px 144px #fa8d7c,296px 148px #bd4169,296px 152px #bd4169,296px 156px #bd4169,296px 160px #bd4169,296px 164px #bd4169,296px 204px #a5788a,296px 208px rgba(77,55,63,.922),300px 72px #bd4169,300px 76px #bd4169,300px 80px #bd4169,300px 84px #bd4169,300px 88px #fa8d7c,300px 92px #fa8d7c,300px 96px #fa8d7c,300px 100px #fa8d7c,300px 104px #fa8d7c,300px 108px #fa8d7c,300px 112px #fa8d7c,300px 116px #bd4169,300px 120px #bd4169,300px 132px #bd4169,300px 136px #bd4169,300px 140px #bd4169,300px 144px #bd4169,300px 148px #bd4169,300px 152px #bd4169,300px 156px #bd4169,300px 160px #bd4169,300px 164px #bd4169,300px 204px #a5788a,300px 208px rgba(77,55,63,.922),304px 80px #bd4169,304px 84px #bd4169,304px 88px #bd4169,304px 92px #bd4169,304px 96px #fa8d7c,304px 100px #fa8d7c,304px 104px #fa8d7c,304px 108px #fa8d7c,304px 112px #bd4169,304px 116px #bd4169,304px 128px #bd4169,304px 132px #bd4169,304px 136px #bd4169,304px 140px #bd4169,304px 144px #bd4169,304px 148px #bd4169,304px 152px #bd4169,304px 156px #bd4169,304px 164px rgba(77,55,63,.922),304px 200px #a5788a,304px 204px #a5788a,308px 104px #bd4169,308px 108px #bd4169,308px 112px #bd4169,308px 124px #bd4169,308px 128px #bd4169,308px 132px #bd4169,308px 136px #bd4169,308px 140px #bd4169,308px 144px #bd4169,308px 148px #bd4169,308px 152px #bd4169,308px 164px rgba(77,55,63,.922),308px 200px #a5788a,308px 204px rgba(77,55,63,.922),312px 132px #bd4169,312px 136px #bd4169,312px 140px #bd4169,312px 144px #bd4169,312px 200px #a5788a,312px 204px rgba(77,55,63,.922),316px 168px rgba(77,55,63,.922),316px 196px #a5788a,316px 200px #a5788a,316px 204px rgba(77,55,63,.922),320px 168px rgba(77,55,63,.922),320px 196px #a5788a,320px 200px #a5788a,324px 168px rgba(77,55,63,.922),324px 192px #a5788a,324px 196px #a5788a,324px 200px rgba(77,55,63,.922),328px 176px #a5788a,328px 188px #a5788a,328px 192px rgba(77,55,63,.922),328px 196px rgba(77,55,63,.922),328px 200px rgba(77,55,63,.922),332px 92px #bd4169,332px 96px #bd4169,332px 172px rgba(77,55,63,.922),332px 176px #a5788a,332px 180px #a5788a,332px 184px #a5788a,332px 188px #a5788a,332px 192px #a5788a,336px 176px rgba(77,55,63,.922),336px 180px #a5788a,336px 184px rgba(77,55,63,.922),336px 188px rgba(77,55,63,.922),336px 192px rgba(77,55,63,.922),336px 196px #a5788a,340px 176px rgba(77,55,63,.922),340px 180px rgba(77,55,63,.922),340px 184px #a5788a,340px 192px #a5788a,344px 180px rgba(77,55,63,.922),344px 188px rgba(77,55,63,.922),360px 196px #fa8d7c,360px 200px #fa8d7c,364px 196px #fa8d7c,364px 200px #fa8d7c,368px 192px #fa8d7c,368px 196px #a5788a,368px 200px #fa8d7c,372px 192px #fa8d7c,372px 196px #a5788a,376px 188px #fa8d7c,376px 192px #a5788a,376px 196px #fa8d7c,380px 188px #fa8d7c,380px 192px #a5788a,384px 184px #fa8d7c,384px 188px #a5788a,384px 192px #a5788a,388px 184px #fa8d7c,388px 188px #a5788a,392px 180px #fa8d7c,392px 184px #a5788a,392px 188px #a5788a,396px 180px #fa8d7c,396px 184px #a5788a,400px 176px #a5788a,400px 180px #a5788a,400px 184px #a5788a,404px 176px #a5788a,404px 180px #a5788a,408px 172px #a5788a,408px 180px #a5788a,412px 172px #a5788a,412px 180px #a5788a,416px 168px #a5788a,416px 176px #a5788a,420px 176px #a5788a,424px 164px #bd4169,424px 172px #a5788a,428px 164px #fa8d7c,428px 168px #bd4169}16.666666666666668%{box-shadow:128px 204px #a5788a,132px 196px #a5788a,132px 204px #a5788a,136px 196px #fa8d7c,136px 204px #fa8d7c,140px 196px #fa8d7c,140px 200px #a5788a,140px 204px #fa8d7c,140px 208px #a5788a,140px 220px #a5788a,140px 224px #a5788a,140px 228px #a5788a,140px 232px #a5788a,144px 136px #a5788a,144px 140px #a5788a,144px 200px #fa8d7c,144px 204px #a5788a,144px 208px #a5788a,144px 216px #a5788a,144px 220px #a5788a,144px 224px #a5788a,144px 228px #a5788a,148px 132px #a5788a,148px 136px #fa8d7c,148px 140px #a5788a,148px 144px #a5788a,152px 132px #a5788a,152px 136px #fa8d7c,152px 140px #fa8d7c,152px 144px #a5788a,152px 176px #a5788a,156px 136px #a5788a,156px 140px #a5788a,156px 176px #a5788a,156px 180px #a5788a,156px 196px #a5788a,156px 200px #a5788a,160px 176px #a5788a,160px 180px #a5788a,160px 196px #a5788a,160px 200px #a5788a,164px 200px #fa8d7c,176px 128px #fa8d7c,176px 136px #a5788a,176px 140px #a5788a,176px 144px #fa8d7c,180px 124px #a5788a,180px 132px #a5788a,180px 136px #fa8d7c,180px 144px #fa8d7c,184px 120px #a5788a,184px 124px #fa8d7c,184px 128px #a5788a,184px 132px #fa8d7c,184px 136px #fa8d7c,184px 172px #a5788a,184px 180px #a5788a,188px 120px #a5788a,188px 124px #fa8d7c,188px 168px #a5788a,188px 172px #fa8d7c,188px 176px #a5788a,188px 180px #fa8d7c,192px 136px #a5788a,192px 172px #fa8d7c,192px 176px #fa8d7c,192px 180px #a5788a,204px 152px #a5788a,208px 148px #fa8d7c,208px 152px #a5788a,212px 144px #fa8d7c,212px 148px #a5788a,216px 144px #fa8d7c,220px 144px #fa8d7c,264px 80px #bd4169,264px 104px #bd4169,264px 108px #bd4169,264px 112px #bd4169,264px 128px #bd4169,264px 132px #bd4169,264px 136px #bd4169,264px 164px rgba(77,55,63,.922),268px 84px #bd4169,268px 88px #bd4169,268px 92px #bd4169,268px 96px #bd4169,268px 100px #bd4169,268px 104px #bd4169,268px 120px #bd4169,268px 124px #bd4169,268px 128px #bd4169,268px 132px #bd4169,268px 136px #bd4169,268px 140px #bd4169,268px 144px #bd4169,268px 164px #bd4169,268px 208px #a5788a,272px 72px #bd4169,272px 88px #bd4169,272px 92px #bd4169,272px 96px #bd4169,272px 112px #bd4169,272px 116px #bd4169,272px 120px #bd4169,272px 124px #bd4169,272px 128px #bd4169,272px 132px #bd4169,272px 136px #bd4169,272px 140px #bd4169,272px 144px #bd4169,272px 148px #bd4169,272px 152px #bd4169,272px 164px #bd4169,272px 168px #a5788a,276px 104px #bd4169,276px 108px #bd4169,276px 112px #bd4169,276px 116px #bd4169,276px 120px #bd4169,276px 124px #bd4169,276px 128px #bd4169,276px 132px #bd4169,276px 136px #fa8d7c,276px 140px #fa8d7c,276px 144px #fa8d7c,276px 148px #bd4169,276px 152px #bd4169,276px 156px #bd4169,276px 160px #bd4169,276px 164px #bd4169,276px 168px #623b3f,280px 48px #bd4169,280px 52px #bd4169,280px 68px #bd4169,280px 72px #bd4169,280px 76px #bd4169,280px 80px #bd4169,280px 84px #bd4169,280px 88px #bd4169,280px 92px #bd4169,280px 96px #bd4169,280px 100px #bd4169,280px 104px #bd4169,280px 108px #bd4169,280px 112px #bd4169,280px 116px #bd4169,280px 120px #fa8d7c,280px 124px #fa8d7c,280px 128px #fa8d7c,280px 132px #fa8d7c,280px 136px #fa8d7c,280px 140px #bd4169,280px 144px #bd4169,280px 148px #fa8d7c,280px 152px #bd4169,280px 156px #bd4169,280px 160px #bd4169,284px 64px #bd4169,284px 68px #bd4169,284px 72px #bd4169,284px 76px #bd4169,284px 80px #bd4169,284px 84px #bd4169,284px 88px #bd4169,284px 92px #bd4169,284px 96px #bd4169,284px 100px #bd4169,284px 104px #bd4169,284px 108px #bd4169,284px 112px #fa8d7c,284px 116px #fa8d7c,284px 120px #fa8d7c,284px 124px #fa8d7c,284px 128px #fa8d7c,284px 132px #fa8d7c,284px 136px #bd4169,284px 140px #bd4169,284px 144px #bd4169,284px 148px #bd4169,284px 152px #bd4169,284px 160px #bd4169,288px 44px #bd4169,288px 60px #bd4169,288px 64px #fa8d7c,288px 68px #fa8d7c,288px 72px #fa8d7c,288px 76px #bd4169,288px 80px #fa8d7c,288px 84px #bd4169,288px 88px #bd4169,288px 92px #bd4169,288px 96px #fa8d7c,288px 100px #bd4169,288px 104px #bd4169,288px 108px #fa8d7c,288px 112px #fa8d7c,288px 116px #fa8d7c,288px 120px #fa8d7c,288px 124px #fa8d7c,288px 128px #fa8d7c,288px 132px #fa8d7c,288px 136px #fa8d7c,288px 140px #bd4169,288px 144px #bd4169,288px 148px #fa8d7c,288px 152px #fa8d7c,288px 156px #bd4169,292px 40px #bd4169,292px 44px #fa8d7c,292px 48px #fa8d7c,292px 56px #fa8d7c,292px 60px #fa8d7c,292px 64px #bd4169,292px 68px #bd4169,292px 72px #bd4169,292px 76px #bd4169,292px 80px #bd4169,292px 84px #bd4169,292px 88px #bd4169,292px 92px #bd4169,292px 96px #bd4169,292px 100px #fa8d7c,292px 104px #fa8d7c,292px 108px #fa8d7c,292px 112px #fa8d7c,292px 116px #fa8d7c,292px 120px #fa8d7c,292px 124px #fa8d7c,292px 128px #fa8d7c,292px 132px #fa8d7c,292px 136px #fa8d7c,292px 140px #fa8d7c,292px 144px #fa8d7c,292px 148px #bd4169,292px 152px #bd4169,292px 156px #bd4169,296px 44px #fa8d7c,296px 48px #fa8d7c,296px 52px #fa8d7c,296px 56px #fa8d7c,296px 60px #bd4169,296px 64px #bd4169,296px 68px #bd4169,296px 72px #bd4169,296px 92px #bd4169,296px 96px #bd4169,296px 100px #bd4169,296px 104px #bd4169,296px 108px #bd4169,296px 112px #bd4169,296px 116px #fa8d7c,296px 120px #fa8d7c,296px 124px #fa8d7c,296px 128px #fa8d7c,296px 132px #fa8d7c,296px 136px #fa8d7c,296px 140px #fa8d7c,296px 144px #bd4169,296px 148px #bd4169,296px 152px #bd4169,296px 156px #bd4169,296px 160px #bd4169,296px 164px #bd4169,300px 44px #bd4169,300px 48px #bd4169,300px 52px #bd4169,300px 56px #bd4169,300px 60px #bd4169,300px 64px #bd4169,300px 100px #bd4169,300px 104px #bd4169,300px 108px #bd4169,300px 112px #bd4169,300px 116px #bd4169,300px 120px #bd4169,300px 124px #fa8d7c,300px 128px #fa8d7c,300px 132px #fa8d7c,300px 136px #bd4169,300px 140px #bd4169,300px 144px #bd4169,300px 148px #bd4169,300px 152px #bd4169,300px 156px #bd4169,300px 160px #bd4169,300px 164px #bd4169,304px 92px #bd4169,304px 96px #bd4169,304px 108px #bd4169,304px 112px #bd4169,304px 116px #bd4169,304px 120px #bd4169,304px 124px #bd4169,304px 128px #bd4169,304px 132px #bd4169,304px 136px #bd4169,304px 140px #bd4169,304px 144px #bd4169,304px 148px #bd4169,304px 164px #bd4169,308px 88px #bd4169,308px 92px #bd4169,308px 96px #bd4169,308px 100px #bd4169,308px 104px #bd4169,308px 108px #bd4169,308px 112px #bd4169,308px 116px #bd4169,308px 120px #bd4169,308px 124px #bd4169,308px 128px #bd4169,308px 132px #bd4169,308px 136px #bd4169,308px 140px #bd4169,312px 84px #bd4169,312px 88px #bd4169,312px 108px #bd4169,312px 112px #bd4169,312px 116px #bd4169,312px 120px #bd4169,312px 124px #bd4169,316px 84px #bd4169,336px 76px #bd4169,336px 80px #bd4169,344px 188px #a5788a,360px 196px #fa8d7c,360px 200px #fa8d7c,364px 196px #fa8d7c,364px 200px #fa8d7c,368px 192px #fa8d7c,368px 196px #fa8d7c,368px 200px #fa8d7c,372px 192px #fa8d7c,372px 196px #fa8d7c,376px 188px #fa8d7c,376px 192px #a5788a,376px 196px #fa8d7c,380px 188px #fa8d7c,380px 192px #fa8d7c,384px 184px #fa8d7c,384px 188px #a5788a,384px 192px #a5788a,388px 184px #fa8d7c,388px 188px #a5788a,392px 180px #fa8d7c,392px 184px #a5788a,392px 188px #a5788a,396px 180px #fa8d7c,396px 184px #a5788a,400px 176px #fa8d7c,400px 180px #a5788a,400px 184px #a5788a,404px 176px #a5788a,404px 180px #a5788a,408px 172px #a5788a,408px 180px #a5788a,412px 172px #a5788a,412px 180px #a5788a,416px 168px #a5788a,416px 176px #a5788a,420px 176px #a5788a,424px 164px #fa8d7c,424px 172px #a5788a,428px 164px #fa8d7c,428px 168px #bd4169}33.333333333333336%{box-shadow:128px 204px #76505f,132px 196px #76505f,132px 204px #a5788a,136px 196px #a5788a,136px 204px #fa8d7c,140px 196px #fa8d7c,140px 200px #a5788a,140px 204px #fa8d7c,140px 208px #76505f,140px 220px #76505f,140px 224px #76505f,140px 228px #76505f,140px 232px #76505f,144px 136px #a5788a,144px 140px #a5788a,144px 200px #fa8d7c,144px 204px #a5788a,144px 208px #a5788a,144px 216px #76505f,144px 220px #a5788a,144px 224px #a5788a,144px 228px #a5788a,148px 132px #a5788a,148px 136px #a5788a,148px 140px #a5788a,148px 144px #a5788a,152px 132px #a5788a,152px 136px #fa8d7c,152px 140px #fa8d7c,152px 144px #a5788a,152px 176px #a5788a,156px 136px #a5788a,156px 140px #a5788a,156px 176px #a5788a,156px 180px #a5788a,156px 196px #a5788a,156px 200px #a5788a,160px 176px #a5788a,160px 180px #a5788a,160px 196px #a5788a,160px 200px #a5788a,164px 200px #fa8d7c,176px 128px #fa8d7c,176px 136px #76505f,176px 140px #a5788a,176px 144px #a5788a,180px 124px #76505f,180px 132px #a5788a,180px 136px #a5788a,180px 144px #fa8d7c,184px 120px #76505f,184px 124px #fa8d7c,184px 128px #a5788a,184px 132px #fa8d7c,184px 136px #fa8d7c,184px 172px #a5788a,184px 180px #a5788a,188px 120px #a5788a,188px 124px #fa8d7c,188px 168px #a5788a,188px 172px #a5788a,188px 176px #a5788a,188px 180px #fa8d7c,192px 136px #76505f,192px 172px #fa8d7c,192px 176px #fa8d7c,192px 180px #a5788a,204px 152px #a5788a,208px 148px #fa8d7c,208px 152px #a5788a,212px 144px #a5788a,212px 148px #a5788a,216px 144px #fa8d7c,220px 144px #fa8d7c,220px 184px rgba(77,55,63,.922),224px 176px rgba(77,55,63,.922),224px 180px rgba(77,55,63,.922),224px 184px #a5788a,224px 188px rgba(77,55,63,.922),228px 180px #a5788a,228px 184px #a5788a,228px 188px #a5788a,228px 192px #a5788a,232px 172px rgba(77,55,63,.922),232px 176px #a5788a,232px 180px #a5788a,232px 184px #a5788a,232px 188px #a5788a,236px 172px rgba(77,55,63,.922),236px 176px #a5788a,236px 180px #a5788a,236px 184px #a5788a,236px 188px #a5788a,236px 192px #a5788a,236px 196px #a5788a,240px 172px #a5788a,240px 176px #a5788a,240px 180px #a5788a,240px 184px #a5788a,240px 188px #a5788a,240px 192px #a5788a,240px 196px rgba(77,55,63,.922),240px 200px rgba(77,55,63,.922),244px 168px rgba(77,55,63,.922),244px 172px #a5788a,244px 176px #a5788a,244px 192px #a5788a,244px 196px #a5788a,248px 68px #bd4169,248px 168px rgba(77,55,63,.922),248px 172px #a5788a,248px 176px #a5788a,248px 192px #a5788a,248px 196px #a5788a,248px 200px #a5788a,252px 168px #a5788a,252px 172px #a5788a,252px 200px #a5788a,256px 72px #bd4169,256px 76px #bd4169,256px 168px #a5788a,256px 172px #a5788a,256px 200px #a5788a,256px 204px rgba(77,55,63,.922),260px 76px #bd4169,260px 164px rgba(77,55,63,.922),260px 168px #a5788a,260px 200px #a5788a,260px 204px #a5788a,264px 76px #bd4169,264px 84px #bd4169,264px 108px #bd4169,264px 112px #bd4169,264px 116px #bd4169,264px 120px #bd4169,264px 164px rgba(77,55,63,.922),264px 200px #a5788a,268px 40px #bd4169,268px 44px #bd4169,268px 48px #bd4169,268px 52px #bd4169,268px 56px #bd4169,268px 60px #bd4169,268px 84px #bd4169,268px 100px #bd4169,268px 104px #bd4169,268px 108px #bd4169,268px 112px #bd4169,268px 116px #bd4169,268px 120px #bd4169,268px 124px #bd4169,268px 128px #bd4169,268px 132px #bd4169,268px 160px #bd4169,268px 164px #bd4169,268px 200px #a5788a,268px 204px #a5788a,268px 208px rgba(77,55,63,.922),272px 36px #bd4169,272px 40px #fa8d7c,272px 44px #fa8d7c,272px 48px #fa8d7c,272px 52px #fa8d7c,272px 56px #fa8d7c,272px 60px #bd4169,272px 64px #bd4169,272px 68px #bd4169,272px 96px #bd4169,272px 100px #bd4169,272px 104px #bd4169,272px 108px #bd4169,272px 112px #fa8d7c,272px 116px #fa8d7c,272px 120px #fa8d7c,272px 124px #fa8d7c,272px 128px #bd4169,272px 132px #bd4169,272px 136px #bd4169,272px 156px #bd4169,272px 160px #bd4169,272px 164px #bd4169,272px 168px #a5788a,272px 200px #a5788a,272px 204px #a5788a,276px 32px #bd4169,276px 36px #fa8d7c,276px 40px #fa8d7c,276px 44px #fa8d7c,276px 48px #bd4169,276px 52px #bd4169,276px 56px #bd4169,276px 60px #fa8d7c,276px 64px #fa8d7c,276px 68px #bd4169,276px 72px #bd4169,276px 92px #bd4169,276px 96px #bd4169,276px 100px #bd4169,276px 104px #fa8d7c,276px 108px #fa8d7c,276px 112px #fa8d7c,276px 116px #fa8d7c,276px 120px #fa8d7c,276px 124px #bd4169,276px 128px #fa8d7c,276px 132px #fa8d7c,276px 136px #bd4169,276px 140px #bd4169,276px 144px #bd4169,276px 148px #bd4169,276px 152px #bd4169,276px 156px #bd4169,276px 160px #bd4169,276px 164px rgba(77,55,63,.922),276px 168px #623b3f,276px 200px #a5788a,276px 204px #a5788a,276px 208px rgba(77,55,63,.922),280px 32px #bd4169,280px 36px #fa8d7c,280px 40px #fa8d7c,280px 60px #bd4169,280px 64px #bd4169,280px 68px #bd4169,280px 72px #bd4169,280px 76px #bd4169,280px 80px #bd4169,280px 84px #bd4169,280px 88px #bd4169,280px 92px #bd4169,280px 96px #bd4169,280px 100px #fa8d7c,280px 104px #fa8d7c,280px 108px #fa8d7c,280px 112px #fa8d7c,280px 116px #fa8d7c,280px 120px #fa8d7c,280px 124px #fa8d7c,280px 128px #bd4169,280px 132px #bd4169,280px 136px #fa8d7c,280px 140px #bd4169,280px 144px #bd4169,280px 148px #bd4169,280px 152px #bd4169,280px 156px #bd4169,280px 200px #a5788a,280px 204px #a5788a,280px 208px rgba(77,55,63,.922),284px 32px #bd4169,284px 36px #bd4169,284px 40px #bd4169,284px 68px #bd4169,284px 72px #bd4169,284px 76px #bd4169,284px 80px #bd4169,284px 84px #bd4169,284px 88px #bd4169,284px 92px #bd4169,284px 96px #fa8d7c,284px 100px #fa8d7c,284px 104px #fa8d7c,284px 108px #fa8d7c,284px 112px #fa8d7c,284px 116px #fa8d7c,284px 120px #fa8d7c,284px 124px #fa8d7c,284px 128px #fa8d7c,284px 132px #bd4169,284px 136px #bd4169,284px 140px #bd4169,284px 144px #bd4169,284px 148px #bd4169,284px 152px #bd4169,284px 200px #a5788a,284px 204px #a5788a,284px 208px rgba(77,55,63,.922),288px 32px #bd4169,288px 36px #bd4169,288px 48px #bd4169,288px 52px #bd4169,288px 76px #bd4169,288px 80px #bd4169,288px 84px #bd4169,288px 88px #bd4169,288px 92px #bd4169,288px 96px #fa8d7c,288px 100px #fa8d7c,288px 104px #fa8d7c,288px 108px #fa8d7c,288px 112px #bd4169,288px 116px #bd4169,288px 120px #bd4169,288px 124px #bd4169,288px 128px #bd4169,288px 132px #fa8d7c,288px 136px #fa8d7c,288px 140px #bd4169,288px 144px #bd4169,288px 148px #bd4169,288px 152px #bd4169,288px 200px #a5788a,288px 204px #a5788a,288px 208px rgba(77,55,63,.922),292px 48px #bd4169,292px 52px #bd4169,292px 56px #bd4169,292px 60px #bd4169,292px 80px #bd4169,292px 84px #bd4169,292px 88px #fa8d7c,292px 92px #fa8d7c,292px 96px #fa8d7c,292px 100px #fa8d7c,292px 104px #fa8d7c,292px 108px #bd4169,292px 112px #bd4169,292px 116px #bd4169,292px 120px #bd4169,292px 124px #bd4169,292px 128px #bd4169,292px 132px #bd4169,292px 136px #bd4169,292px 140px #bd4169,292px 144px #fa8d7c,292px 148px #bd4169,292px 152px #bd4169,292px 156px #bd4169,292px 200px #a5788a,292px 204px #a5788a,296px 92px #bd4169,296px 96px #bd4169,296px 100px #fa8d7c,296px 104px #bd4169,296px 108px #bd4169,296px 112px #bd4169,296px 116px #bd4169,296px 120px #bd4169,296px 124px #bd4169,296px 128px #bd4169,296px 132px #bd4169,296px 136px #bd4169,296px 140px #bd4169,296px 144px #bd4169,296px 148px #bd4169,296px 152px #bd4169,296px 156px #bd4169,296px 160px #bd4169,296px 200px #a5788a,296px 204px #a5788a,296px 208px rgba(77,55,63,.922),300px 80px #bd4169,300px 84px #bd4169,300px 88px #bd4169,300px 92px #bd4169,300px 96px #bd4169,300px 100px #bd4169,300px 104px #bd4169,300px 108px #bd4169,300px 112px #bd4169,300px 116px #bd4169,300px 120px #bd4169,300px 124px #bd4169,300px 128px #bd4169,300px 136px #bd4169,300px 140px #bd4169,300px 144px #bd4169,300px 148px #bd4169,300px 152px #bd4169,300px 156px #bd4169,300px 160px #bd4169,300px 164px #bd4169,300px 200px #a5788a,300px 204px #a5788a,300px 208px rgba(77,55,63,.922),304px 56px #bd4169,304px 76px #bd4169,304px 80px #fa8d7c,304px 84px #fa8d7c,304px 88px #fa8d7c,304px 92px #bd4169,304px 96px #bd4169,304px 100px #bd4169,304px 104px #bd4169,304px 108px #bd4169,304px 112px #bd4169,304px 116px #bd4169,304px 120px #bd4169,304px 144px #bd4169,304px 148px #bd4169,304px 152px #bd4169,304px 164px #bd4169,304px 200px #a5788a,304px 204px #a5788a,308px 60px #bd4169,308px 64px #bd4169,308px 68px #bd4169,308px 72px #bd4169,308px 76px #bd4169,308px 80px #fa8d7c,308px 84px #bd4169,308px 88px #bd4169,308px 92px #bd4169,308px 96px #bd4169,308px 104px #bd4169,308px 108px #bd4169,308px 112px #bd4169,308px 164px rgba(77,55,63,.922),308px 200px #a5788a,308px 204px rgba(77,55,63,.922),312px 68px #bd4169,312px 72px #bd4169,312px 76px #bd4169,312px 80px #bd4169,312px 168px #a5788a,312px 172px #a5788a,312px 200px #a5788a,312px 204px rgba(77,55,63,.922),316px 168px rgba(77,55,63,.922),316px 172px #a5788a,316px 196px #a5788a,316px 200px #a5788a,316px 204px rgba(77,55,63,.922),320px 88px #bd4169,320px 168px rgba(77,55,63,.922),320px 172px #a5788a,320px 196px #a5788a,320px 200px #a5788a,324px 84px #bd4169,324px 88px #bd4169,324px 168px rgba(77,55,63,.922),324px 172px #a5788a,324px 176px #a5788a,324px 180px #a5788a,324px 184px #a5788a,324px 188px #a5788a,324px 192px #a5788a,324px 196px #a5788a,324px 200px rgba(77,55,63,.922),328px 80px #bd4169,328px 84px #bd4169,328px 88px #bd4169,328px 176px #a5788a,328px 180px #a5788a,328px 184px #a5788a,328px 188px #a5788a,328px 192px rgba(77,55,63,.922),328px 196px rgba(77,55,63,.922),328px 200px rgba(77,55,63,.922),332px 80px #bd4169,332px 84px #bd4169,332px 88px #bd4169,332px 172px rgba(77,55,63,.922),332px 176px #a5788a,332px 180px #a5788a,332px 184px #a5788a,332px 188px #a5788a,332px 192px #a5788a,336px 80px #bd4169,336px 84px #bd4169,336px 176px rgba(77,55,63,.922),336px 180px #a5788a,336px 184px rgba(77,55,63,.922),336px 188px rgba(77,55,63,.922),336px 192px rgba(77,55,63,.922),336px 196px #a5788a,340px 176px rgba(77,55,63,.922),340px 180px rgba(77,55,63,.922),340px 184px #a5788a,340px 192px #a5788a,344px 180px rgba(77,55,63,.922),344px 188px rgba(77,55,63,.922),360px 196px #fa8d7c,360px 200px #fa8d7c,364px 196px #fa8d7c,364px 200px #fa8d7c,368px 192px #fa8d7c,368px 196px #a5788a,368px 200px #fa8d7c,372px 192px #fa8d7c,372px 196px #a5788a,376px 188px #fa8d7c,376px 192px #a5788a,376px 196px #fa8d7c,380px 188px #fa8d7c,380px 192px #a5788a,384px 184px #fa8d7c,384px 188px #a5788a,384px 192px #a5788a,388px 184px #fa8d7c,388px 188px #a5788a,392px 180px #fa8d7c,392px 184px #a5788a,392px 188px #a5788a,396px 180px #fa8d7c,396px 184px #a5788a,400px 176px #a5788a,400px 180px #a5788a,400px 184px #a5788a,404px 176px #a5788a,404px 180px #a5788a,408px 172px #a5788a,408px 180px #a5788a,412px 172px #a5788a,412px 180px #a5788a,416px 168px #a5788a,416px 176px #a5788a,420px 176px #a5788a,424px 164px #bd4169,424px 172px #a5788a,428px 164px #fa8d7c,428px 168px #bd4169}50%{box-shadow:128px 204px #76505f,132px 196px #76505f,132px 204px #a5788a,136px 196px #a5788a,136px 204px #fa8d7c,140px 196px #fa8d7c,140px 200px #a5788a,140px 204px #fa8d7c,140px 208px #76505f,140px 220px #76505f,140px 224px #76505f,140px 228px #76505f,140px 232px #76505f,144px 136px #a5788a,144px 140px #a5788a,144px 200px #fa8d7c,144px 204px #a5788a,144px 208px #a5788a,144px 216px #76505f,144px 220px #a5788a,144px 224px #a5788a,144px 228px #a5788a,148px 132px #a5788a,148px 136px #a5788a,148px 140px #a5788a,148px 144px #a5788a,152px 132px #a5788a,152px 136px #fa8d7c,152px 140px #fa8d7c,152px 144px #a5788a,152px 176px #a5788a,156px 136px #a5788a,156px 140px #a5788a,156px 176px #a5788a,156px 180px #a5788a,156px 196px #a5788a,156px 200px #a5788a,160px 176px #a5788a,160px 180px #a5788a,160px 196px #a5788a,160px 200px #a5788a,164px 200px #fa8d7c,176px 128px #fa8d7c,176px 136px #76505f,176px 140px #a5788a,176px 144px #a5788a,180px 124px #76505f,180px 132px #a5788a,180px 136px #a5788a,180px 144px #fa8d7c,184px 120px #76505f,184px 124px #fa8d7c,184px 128px #a5788a,184px 132px #fa8d7c,184px 136px #fa8d7c,184px 172px #a5788a,184px 180px #a5788a,188px 120px #a5788a,188px 124px #fa8d7c,188px 168px #a5788a,188px 172px #a5788a,188px 176px #a5788a,188px 180px #fa8d7c,192px 136px #76505f,192px 172px #fa8d7c,192px 176px #fa8d7c,192px 180px #a5788a,204px 152px #a5788a,208px 148px #fa8d7c,208px 152px #a5788a,212px 144px #a5788a,212px 148px #a5788a,216px 144px #fa8d7c,220px 144px #fa8d7c,220px 184px rgba(77,55,63,.922),224px 176px rgba(77,55,63,.922),224px 180px rgba(77,55,63,.922),224px 184px #a5788a,224px 188px rgba(77,55,63,.922),228px 180px #a5788a,228px 184px #a5788a,228px 188px #a5788a,228px 192px #a5788a,232px 172px rgba(77,55,63,.922),232px 176px #a5788a,232px 180px #a5788a,232px 184px #a5788a,232px 188px #a5788a,236px 172px rgba(77,55,63,.922),236px 176px #a5788a,236px 180px #a5788a,236px 184px #a5788a,236px 188px #a5788a,236px 192px #a5788a,236px 196px #a5788a,240px 36px #bd4169,240px 40px #bd4169,240px 172px #a5788a,240px 176px #a5788a,240px 192px #a5788a,240px 196px rgba(77,55,63,.922),240px 200px rgba(77,55,63,.922),244px 40px #bd4169,244px 44px #bd4169,244px 168px rgba(77,55,63,.922),244px 172px #a5788a,244px 176px #a5788a,244px 192px #a5788a,244px 196px #a5788a,248px 132px #bd4169,248px 136px #bd4169,248px 140px #bd4169,248px 168px rgba(77,55,63,.922),248px 172px #a5788a,248px 196px #a5788a,248px 200px #a5788a,252px 136px #bd4169,252px 140px #bd4169,252px 144px #bd4169,252px 168px #a5788a,252px 196px #a5788a,252px 200px #a5788a,256px 168px #a5788a,256px 172px #a5788a,256px 196px #a5788a,256px 200px #a5788a,256px 204px rgba(77,55,63,.922),260px 128px #bd4169,260px 132px #bd4169,260px 136px #bd4169,260px 140px #bd4169,260px 144px #bd4169,260px 148px #bd4169,260px 152px #bd4169,260px 156px #bd4169,260px 164px rgba(77,55,63,.922),260px 168px #a5788a,260px 200px #a5788a,260px 204px #a5788a,264px 116px #bd4169,264px 120px #bd4169,264px 124px #bd4169,264px 128px #bd4169,264px 132px #bd4169,264px 136px #bd4169,264px 140px #bd4169,264px 144px #bd4169,264px 148px #bd4169,264px 152px #bd4169,264px 156px #bd4169,264px 160px #bd4169,264px 164px rgba(77,55,63,.922),264px 200px #a5788a,268px 84px #bd4169,268px 88px #bd4169,268px 92px #bd4169,268px 96px #bd4169,268px 100px #bd4169,268px 108px #bd4169,268px 112px #bd4169,268px 116px #bd4169,268px 120px #bd4169,268px 124px #bd4169,268px 128px #bd4169,268px 132px #bd4169,268px 136px #bd4169,268px 140px #fa8d7c,268px 144px #fa8d7c,268px 148px #fa8d7c,268px 152px #fa8d7c,268px 156px #bd4169,268px 160px #bd4169,268px 164px #bd4169,268px 200px #a5788a,268px 204px #a5788a,268px 208px rgba(77,55,63,.922),272px 76px #bd4169,272px 80px #bd4169,272px 84px #bd4169,272px 88px #bd4169,272px 92px #bd4169,272px 96px #bd4169,272px 100px #bd4169,272px 104px #bd4169,272px 108px #bd4169,272px 112px #bd4169,272px 116px #bd4169,272px 120px #bd4169,272px 124px #bd4169,272px 128px #bd4169,272px 132px #bd4169,272px 136px #fa8d7c,272px 140px #fa8d7c,272px 144px #fa8d7c,272px 148px #fa8d7c,272px 152px #fa8d7c,272px 156px #fa8d7c,272px 160px #bd4169,272px 164px #bd4169,272px 168px #a5788a,272px 200px #a5788a,272px 204px #a5788a,276px 4px #bd4169,276px 8px #bd4169,276px 12px #bd4169,276px 72px #bd4169,276px 76px #bd4169,276px 80px #bd4169,276px 84px #bd4169,276px 88px #bd4169,276px 92px #bd4169,276px 96px #bd4169,276px 100px #bd4169,276px 104px #bd4169,276px 108px #bd4169,276px 112px #bd4169,276px 116px #bd4169,276px 120px #bd4169,276px 124px #bd4169,276px 128px #fa8d7c,276px 132px #fa8d7c,276px 136px #fa8d7c,276px 140px #fa8d7c,276px 144px #fa8d7c,276px 148px #fa8d7c,276px 152px #fa8d7c,276px 156px #fa8d7c,276px 160px #bd4169,276px 164px #bd4169,276px 204px #a5788a,276px 208px rgba(77,55,63,.922),280px 8px #bd4169,280px 12px #bd4169,280px 68px #bd4169,280px 72px #bd4169,280px 76px #bd4169,280px 80px #bd4169,280px 84px #fa8d7c,280px 88px #fa8d7c,280px 92px #fa8d7c,280px 96px #bd4169,280px 100px #bd4169,280px 104px #bd4169,280px 108px #bd4169,280px 112px #bd4169,280px 116px #fa8d7c,280px 120px #fa8d7c,280px 124px #fa8d7c,280px 128px #fa8d7c,280px 132px #fa8d7c,280px 136px #fa8d7c,280px 140px #fa8d7c,280px 144px #fa8d7c,280px 148px #fa8d7c,280px 152px #bd4169,280px 156px #bd4169,280px 160px #bd4169,280px 204px #a5788a,280px 208px rgba(77,55,63,.922),284px 12px #bd4169,284px 16px #fa8d7c,284px 64px #bd4169,284px 68px #bd4169,284px 72px #bd4169,284px 76px #bd4169,284px 80px #fa8d7c,284px 84px #bd4169,284px 88px #fa8d7c,284px 92px #fa8d7c,284px 96px #fa8d7c,284px 100px #fa8d7c,284px 104px #fa8d7c,284px 108px #fa8d7c,284px 112px #fa8d7c,284px 116px #fa8d7c,284px 120px #fa8d7c,284px 124px #fa8d7c,284px 128px #fa8d7c,284px 132px #fa8d7c,284px 136px #fa8d7c,284px 140px #fa8d7c,284px 144px #fa8d7c,284px 148px #bd4169,284px 152px #bd4169,284px 204px #a5788a,284px 208px rgba(77,55,63,.922),288px 12px #bd4169,288px 16px #bd4169,288px 20px #fa8d7c,288px 24px #fa8d7c,288px 60px #bd4169,288px 64px #bd4169,288px 68px #bd4169,288px 72px #bd4169,288px 76px #bd4169,288px 80px #bd4169,288px 84px #bd4169,288px 88px #bd4169,288px 92px #bd4169,288px 96px #bd4169,288px 100px #fa8d7c,288px 104px #fa8d7c,288px 108px #fa8d7c,288px 112px #fa8d7c,288px 116px #fa8d7c,288px 120px #fa8d7c,288px 124px #fa8d7c,288px 128px #fa8d7c,288px 132px #fa8d7c,288px 136px #fa8d7c,288px 140px #fa8d7c,288px 144px #bd4169,288px 148px #bd4169,288px 152px #bd4169,288px 156px #bd4169,288px 204px #a5788a,288px 208px rgba(77,55,63,.922),292px 16px #bd4169,292px 20px #bd4169,292px 24px #bd4169,292px 28px #fa8d7c,292px 32px #fa8d7c,292px 36px #bd4169,292px 40px #bd4169,292px 92px #bd4169,292px 96px #bd4169,292px 100px #bd4169,292px 104px #bd4169,292px 108px #bd4169,292px 112px #bd4169,292px 116px #bd4169,292px 120px #fa8d7c,292px 124px #fa8d7c,292px 128px #fa8d7c,292px 132px #fa8d7c,292px 136px #fa8d7c,292px 140px #fa8d7c,292px 144px #bd4169,292px 148px #bd4169,292px 152px #bd4169,292px 156px #bd4169,292px 204px #a5788a,296px 84px #bd4169,296px 88px #bd4169,296px 92px #bd4169,296px 96px #bd4169,296px 100px #bd4169,296px 104px #bd4169,296px 108px #bd4169,296px 112px #bd4169,296px 116px #bd4169,296px 120px #bd4169,296px 124px #bd4169,296px 128px #fa8d7c,296px 132px #fa8d7c,296px 136px #fa8d7c,296px 140px #fa8d7c,296px 144px #fa8d7c,296px 148px #fa8d7c,296px 152px #fa8d7c,296px 156px #fa8d7c,296px 160px #bd4169,296px 164px #bd4169,296px 204px #a5788a,296px 208px rgba(77,55,63,.922),300px 116px #bd4169,300px 120px #bd4169,300px 124px #bd4169,300px 128px #fa8d7c,300px 132px #fa8d7c,300px 136px #fa8d7c,300px 140px #fa8d7c,300px 144px #fa8d7c,300px 148px #fa8d7c,300px 152px #fa8d7c,300px 156px #fa8d7c,300px 160px #fa8d7c,300px 164px #bd4169,300px 204px #a5788a,300px 208px rgba(77,55,63,.922),304px 120px #bd4169,304px 124px #bd4169,304px 128px #bd4169,304px 132px #bd4169,304px 136px #bd4169,304px 140px #bd4169,304px 144px #bd4169,304px 148px #bd4169,304px 152px #bd4169,304px 156px #bd4169,304px 160px #bd4169,304px 164px #bd4169,304px 168px #fa8d7c,304px 200px #a5788a,304px 204px #a5788a,308px 128px #bd4169,308px 132px #bd4169,308px 136px #bd4169,308px 140px #bd4169,308px 144px #bd4169,308px 148px #bd4169,308px 152px #bd4169,308px 156px #bd4169,308px 160px #bd4169,308px 164px #bd4169,308px 168px #a5788a,308px 172px #fa8d7c,308px 200px #a5788a,308px 204px rgba(77,55,63,.922),312px 136px #bd4169,312px 140px #bd4169,312px 144px #bd4169,312px 148px #bd4169,312px 152px #bd4169,312px 156px #bd4169,312px 168px #a5788a,312px 172px #a5788a,312px 200px #a5788a,312px 204px rgba(77,55,63,.922),316px 168px rgba(77,55,63,.922),316px 172px #a5788a,316px 196px #a5788a,316px 200px #a5788a,316px 204px rgba(77,55,63,.922),320px 168px rgba(77,55,63,.922),320px 172px #a5788a,320px 192px #a5788a,320px 196px #a5788a,320px 200px #a5788a,324px 40px #bd4169,324px 168px rgba(77,55,63,.922),324px 172px #a5788a,324px 176px #a5788a,324px 192px #a5788a,324px 196px #a5788a,324px 200px rgba(77,55,63,.922),328px 44px #bd4169,328px 48px #bd4169,328px 52px #bd4169,328px 176px #a5788a,328px 188px #a5788a,328px 192px rgba(77,55,63,.922),328px 196px rgba(77,55,63,.922),328px 200px rgba(77,55,63,.922),332px 48px #bd4169,332px 52px #bd4169,332px 56px #bd4169,332px 64px #bd4169,332px 172px rgba(77,55,63,.922),332px 176px #a5788a,332px 180px #a5788a,332px 184px #a5788a,332px 188px #a5788a,332px 192px #a5788a,336px 176px rgba(77,55,63,.922),336px 180px #a5788a,336px 184px rgba(77,55,63,.922),336px 188px rgba(77,55,63,.922),336px 192px rgba(77,55,63,.922),336px 196px #a5788a,340px 176px rgba(77,55,63,.922),340px 180px rgba(77,55,63,.922),340px 184px #a5788a,340px 192px #a5788a,344px 180px rgba(77,55,63,.922),344px 188px rgba(77,55,63,.922),360px 196px #fa8d7c,360px 200px #fa8d7c,364px 196px #fa8d7c,364px 200px #fa8d7c,368px 192px #fa8d7c,368px 196px #a5788a,368px 200px #fa8d7c,372px 192px #fa8d7c,372px 196px #a5788a,376px 188px #fa8d7c,376px 192px #a5788a,376px 196px #fa8d7c,380px 188px #fa8d7c,380px 192px #a5788a,384px 184px #fa8d7c,384px 188px #a5788a,384px 192px #a5788a,388px 184px #fa8d7c,388px 188px #a5788a,392px 180px #fa8d7c,392px 184px #a5788a,392px 188px #a5788a,396px 180px #fa8d7c,396px 184px #a5788a,400px 176px #a5788a,400px 180px #a5788a,400px 184px #a5788a,404px 176px #a5788a,404px 180px #a5788a,408px 172px #a5788a,408px 180px #a5788a,412px 172px #a5788a,412px 180px #a5788a,416px 168px #a5788a,416px 176px #a5788a,420px 176px #a5788a,424px 164px #bd4169,424px 172px #a5788a,428px 164px #fa8d7c,428px 168px #bd4169}66.66666666666667%{box-shadow:128px 204px #a5788a,132px 196px #a5788a,132px 204px #a5788a,136px 196px #fa8d7c,136px 204px #fa8d7c,140px 196px #fa8d7c,140px 200px #a5788a,140px 204px #fa8d7c,140px 208px #a5788a,140px 220px #a5788a,140px 224px #a5788a,140px 228px #a5788a,140px 232px #a5788a,144px 136px #a5788a,144px 140px #a5788a,144px 200px #fa8d7c,144px 204px #a5788a,144px 208px #a5788a,144px 216px #a5788a,144px 220px #a5788a,144px 224px #a5788a,144px 228px #a5788a,148px 132px #a5788a,148px 136px #fa8d7c,148px 140px #a5788a,148px 144px #a5788a,152px 132px #a5788a,152px 136px #fa8d7c,152px 140px #fa8d7c,152px 144px #a5788a,152px 176px #a5788a,156px 136px #a5788a,156px 140px #a5788a,156px 176px #a5788a,156px 180px #a5788a,156px 196px #a5788a,156px 200px #a5788a,160px 176px #a5788a,160px 180px #a5788a,160px 196px #a5788a,160px 200px #a5788a,164px 200px #fa8d7c,176px 128px #fa8d7c,176px 136px #a5788a,176px 140px #a5788a,176px 144px #fa8d7c,180px 124px #a5788a,180px 132px #a5788a,180px 136px #fa8d7c,180px 144px #fa8d7c,184px 120px #a5788a,184px 124px #fa8d7c,184px 128px #a5788a,184px 132px #fa8d7c,184px 136px #fa8d7c,184px 172px #a5788a,184px 180px #a5788a,188px 120px #a5788a,188px 124px #fa8d7c,188px 168px #a5788a,188px 172px #fa8d7c,188px 176px #a5788a,188px 180px #fa8d7c,192px 136px #a5788a,192px 172px #fa8d7c,192px 176px #fa8d7c,192px 180px #a5788a,204px 152px #a5788a,208px 148px #fa8d7c,208px 152px #a5788a,212px 144px #fa8d7c,212px 148px #a5788a,216px 144px #fa8d7c,220px 144px #fa8d7c,244px 48px #bd4169,244px 52px #bd4169,248px 56px #bd4169,264px 164px rgba(77,55,63,.922),268px 80px #bd4169,268px 84px #bd4169,268px 88px #bd4169,268px 92px #bd4169,268px 96px #bd4169,268px 100px #bd4169,268px 156px #bd4169,268px 160px #bd4169,268px 164px #bd4169,268px 208px #a5788a,272px 72px #bd4169,272px 76px #bd4169,272px 80px #bd4169,272px 84px #bd4169,272px 88px #bd4169,272px 92px #bd4169,272px 96px #bd4169,272px 100px #bd4169,272px 104px #bd4169,272px 108px #bd4169,272px 112px #bd4169,272px 116px #bd4169,272px 136px #bd4169,272px 140px #bd4169,272px 144px #bd4169,272px 148px #bd4169,272px 152px #bd4169,272px 156px #bd4169,272px 160px #bd4169,272px 164px #bd4169,272px 168px #bd4169,276px 32px #bd4169,276px 36px #bd4169,276px 40px #bd4169,276px 44px #bd4169,276px 68px #bd4169,276px 72px #bd4169,276px 76px #bd4169,276px 80px #bd4169,276px 84px #fa8d7c,276px 88px #fa8d7c,276px 92px #fa8d7c,276px 96px #fa8d7c,276px 100px #fa8d7c,276px 104px #bd4169,276px 108px #bd4169,276px 112px #bd4169,276px 116px #bd4169,276px 120px #bd4169,276px 124px #bd4169,276px 128px #bd4169,276px 132px #bd4169,276px 136px #bd4169,276px 140px #bd4169,276px 144px #bd4169,276px 148px #bd4169,276px 152px #bd4169,276px 156px #bd4169,276px 160px #bd4169,276px 164px #bd4169,276px 168px #623b3f,280px 24px #bd4169,280px 28px #bd4169,280px 32px #bd4169,280px 36px #fa8d7c,280px 40px #fa8d7c,280px 44px #bd4169,280px 48px #bd4169,280px 60px #bd4169,280px 64px #bd4169,280px 68px #bd4169,280px 72px #bd4169,280px 76px #bd4169,280px 80px #fa8d7c,280px 84px #fa8d7c,280px 88px #fa8d7c,280px 92px #fa8d7c,280px 96px #fa8d7c,280px 100px #fa8d7c,280px 104px #fa8d7c,280px 108px #bd4169,280px 112px #bd4169,280px 116px #bd4169,280px 120px #bd4169,280px 124px #bd4169,280px 128px #bd4169,280px 132px #bd4169,280px 136px #bd4169,280px 140px #bd4169,280px 144px #bd4169,280px 148px #fa8d7c,280px 152px #bd4169,280px 156px #bd4169,280px 160px #bd4169,280px 168px #bd4169,284px 4px #bd4169,284px 8px #bd4169,284px 12px #bd4169,284px 16px #bd4169,284px 20px #bd4169,284px 24px #bd4169,284px 28px #fa8d7c,284px 32px #fa8d7c,284px 36px #fa8d7c,284px 40px #fa8d7c,284px 44px #fa8d7c,284px 48px #bd4169,284px 52px #bd4169,284px 56px #bd4169,284px 60px #bd4169,284px 64px #bd4169,284px 68px #bd4169,284px 72px #bd4169,284px 76px #fa8d7c,284px 80px #fa8d7c,284px 84px #fa8d7c,284px 88px #fa8d7c,284px 92px #fa8d7c,284px 96px #fa8d7c,284px 100px #fa8d7c,284px 104px #fa8d7c,284px 108px #fa8d7c,284px 112px #fa8d7c,284px 116px #bd4169,284px 120px #bd4169,284px 124px #bd4169,284px 128px #bd4169,284px 132px #bd4169,284px 136px #bd4169,284px 140px #fa8d7c,284px 144px #fa8d7c,284px 148px #bd4169,284px 152px #bd4169,288px 16px #bd4169,288px 20px #bd4169,288px 24px #bd4169,288px 28px #bd4169,288px 32px #bd4169,288px 36px #bd4169,288px 40px #fa8d7c,288px 44px #fa8d7c,288px 48px #fa8d7c,288px 52px #bd4169,288px 56px #bd4169,288px 60px #bd4169,288px 64px #bd4169,288px 68px #bd4169,288px 72px #bd4169,288px 76px #fa8d7c,288px 80px #bd4169,288px 84px #bd4169,288px 88px #bd4169,288px 92px #bd4169,288px 96px #bd4169,288px 100px #fa8d7c,288px 104px #fa8d7c,288px 108px #fa8d7c,288px 112px #fa8d7c,288px 116px #fa8d7c,288px 120px #fa8d7c,288px 124px #fa8d7c,288px 128px #fa8d7c,288px 132px #fa8d7c,288px 136px #fa8d7c,288px 140px #fa8d7c,288px 144px #bd4169,288px 148px #bd4169,288px 152px #bd4169,288px 156px #bd4169,292px 20px #bd4169,292px 24px #bd4169,292px 28px #bd4169,292px 32px #bd4169,292px 36px #bd4169,292px 40px #bd4169,292px 44px #bd4169,292px 48px #bd4169,292px 52px #bd4169,292px 56px #bd4169,292px 60px #bd4169,292px 64px #bd4169,292px 68px #bd4169,292px 72px #bd4169,292px 76px #bd4169,292px 80px #bd4169,292px 84px #bd4169,292px 88px #bd4169,292px 92px #bd4169,292px 96px #bd4169,292px 100px #bd4169,292px 104px #bd4169,292px 108px #fa8d7c,292px 112px #fa8d7c,292px 116px #fa8d7c,292px 120px #fa8d7c,292px 124px #fa8d7c,292px 128px #fa8d7c,292px 132px #fa8d7c,292px 136px #bd4169,292px 140px #bd4169,292px 144px #bd4169,292px 148px #bd4169,292px 152px #bd4169,292px 156px #bd4169,296px 36px #bd4169,296px 40px #bd4169,296px 44px #bd4169,296px 48px #bd4169,296px 52px #bd4169,296px 56px #bd4169,296px 60px #bd4169,296px 64px #bd4169,296px 68px #bd4169,296px 72px #bd4169,296px 76px #bd4169,296px 80px #bd4169,296px 84px #bd4169,296px 88px #bd4169,296px 92px #bd4169,296px 96px #bd4169,296px 100px #bd4169,296px 104px #bd4169,296px 108px #bd4169,296px 112px #bd4169,296px 116px #bd4169,296px 120px #bd4169,296px 124px #bd4169,296px 128px #bd4169,296px 132px #bd4169,296px 136px #bd4169,296px 140px #fa8d7c,296px 144px #fa8d7c,296px 148px #bd4169,296px 152px #bd4169,296px 156px #bd4169,296px 160px #bd4169,296px 164px #bd4169,300px 36px #bd4169,300px 40px #bd4169,300px 44px #bd4169,300px 48px #bd4169,300px 52px #bd4169,300px 56px #bd4169,300px 60px #bd4169,300px 64px #bd4169,300px 68px #bd4169,300px 72px #bd4169,300px 76px #bd4169,300px 104px #bd4169,300px 108px #bd4169,300px 112px #bd4169,300px 116px #bd4169,300px 120px #bd4169,300px 124px #bd4169,300px 128px #bd4169,300px 132px #bd4169,300px 136px #bd4169,300px 140px #bd4169,300px 144px #bd4169,300px 148px #bd4169,300px 152px #bd4169,300px 156px #bd4169,300px 160px #bd4169,300px 164px #bd4169,304px 44px #bd4169,304px 48px #bd4169,304px 52px #bd4169,304px 56px #bd4169,304px 60px #bd4169,304px 64px #bd4169,304px 116px #bd4169,304px 120px #bd4169,304px 124px #bd4169,304px 128px #bd4169,304px 132px #bd4169,304px 136px #bd4169,304px 140px #bd4169,304px 144px #bd4169,304px 148px #bd4169,304px 152px #bd4169,304px 164px #bd4169,304px 168px #bd4169,308px 120px #bd4169,308px 124px #bd4169,308px 128px #bd4169,308px 132px #bd4169,308px 136px #bd4169,308px 140px #bd4169,308px 144px #bd4169,308px 148px #bd4169,312px 128px #bd4169,312px 132px #bd4169,312px 136px #bd4169,312px 140px #bd4169,328px 72px #bd4169,328px 76px #bd4169,332px 56px #bd4169,332px 60px #bd4169,332px 64px #bd4169,332px 68px #bd4169,332px 72px #bd4169,332px 76px #bd4169,336px 64px #bd4169,336px 68px #bd4169,336px 72px #bd4169,340px 40px #bd4169,344px 188px #a5788a,360px 196px #fa8d7c,360px 200px #fa8d7c,364px 196px #fa8d7c,364px 200px #fa8d7c,368px 192px #fa8d7c,368px 196px #fa8d7c,368px 200px #fa8d7c,372px 192px #fa8d7c,372px 196px #fa8d7c,376px 188px #fa8d7c,376px 192px #a5788a,376px 196px #fa8d7c,380px 188px #fa8d7c,380px 192px #fa8d7c,384px 184px #fa8d7c,384px 188px #a5788a,384px 192px #a5788a,388px 184px #fa8d7c,388px 188px #a5788a,392px 180px #fa8d7c,392px 184px #a5788a,392px 188px #a5788a,396px 180px #fa8d7c,396px 184px #a5788a,400px 176px #fa8d7c,400px 180px #a5788a,400px 184px #a5788a,404px 176px #a5788a,404px 180px #a5788a,408px 172px #a5788a,408px 180px #a5788a,412px 172px #a5788a,412px 180px #a5788a,416px 168px #a5788a,416px 176px #a5788a,420px 176px #a5788a,424px 164px #fa8d7c,424px 172px #a5788a,428px 164px #fa8d7c,428px 168px #bd4169}83.33333333333334%{box-shadow:128px 204px #a5788a,132px 196px #a5788a,132px 204px #a5788a,136px 196px #fa8d7c,136px 204px #fa8d7c,140px 196px #fa8d7c,140px 200px #a5788a,140px 204px #fa8d7c,140px 208px #a5788a,140px 220px #a5788a,140px 224px #a5788a,140px 228px #a5788a,140px 232px #a5788a,144px 136px #a5788a,144px 140px #a5788a,144px 200px #fa8d7c,144px 204px #a5788a,144px 208px #a5788a,144px 216px #a5788a,144px 220px #a5788a,144px 224px #a5788a,144px 228px #a5788a,148px 132px #a5788a,148px 136px #fa8d7c,148px 140px #a5788a,148px 144px #a5788a,152px 132px #a5788a,152px 136px #fa8d7c,152px 140px #fa8d7c,152px 144px #a5788a,152px 176px #a5788a,156px 136px #a5788a,156px 140px #a5788a,156px 176px #a5788a,156px 180px #a5788a,156px 196px #a5788a,156px 200px #a5788a,160px 176px #a5788a,160px 180px #a5788a,160px 196px #a5788a,160px 200px #a5788a,164px 200px #fa8d7c,176px 128px #fa8d7c,176px 136px #a5788a,176px 140px #a5788a,176px 144px #fa8d7c,180px 124px #a5788a,180px 132px #a5788a,180px 136px #fa8d7c,180px 144px #fa8d7c,184px 120px #a5788a,184px 124px #fa8d7c,184px 128px #a5788a,184px 132px #fa8d7c,184px 136px #fa8d7c,184px 172px #a5788a,184px 180px #a5788a,188px 120px #a5788a,188px 124px #fa8d7c,188px 168px #a5788a,188px 172px #fa8d7c,188px 176px #a5788a,188px 180px #fa8d7c,192px 136px #a5788a,192px 172px #fa8d7c,192px 176px #fa8d7c,192px 180px #a5788a,204px 152px #a5788a,208px 148px #fa8d7c,208px 152px #a5788a,212px 144px #fa8d7c,212px 148px #a5788a,216px 144px #fa8d7c,220px 144px #fa8d7c,244px 16px #bd4169,244px 20px #bd4169,244px 116px #bd4169,244px 120px #bd4169,244px 124px #bd4169,248px 112px #bd4169,248px 116px #bd4169,248px 148px #bd4169,248px 152px #bd4169,248px 156px #bd4169,252px 132px #bd4169,252px 136px #bd4169,252px 140px #bd4169,252px 144px #bd4169,252px 148px #bd4169,252px 152px #bd4169,252px 156px #bd4169,252px 160px #bd4169,256px 120px #bd4169,256px 124px #bd4169,256px 128px #bd4169,256px 132px #bd4169,256px 136px #bd4169,256px 140px #bd4169,256px 144px #bd4169,256px 148px #bd4169,256px 152px #bd4169,256px 156px #bd4169,256px 160px #bd4169,256px 164px #bd4169,260px 116px #bd4169,260px 120px #bd4169,260px 124px #bd4169,260px 128px #bd4169,260px 132px #bd4169,260px 136px #bd4169,260px 140px #bd4169,260px 144px #bd4169,260px 148px #fa8d7c,260px 152px #fa8d7c,260px 156px #bd4169,260px 160px #bd4169,260px 164px #bd4169,264px 112px #bd4169,264px 116px #bd4169,264px 128px #bd4169,264px 132px #bd4169,264px 136px #bd4169,264px 140px #bd4169,264px 144px #fa8d7c,264px 148px #fa8d7c,264px 152px #fa8d7c,264px 156px #fa8d7c,264px 160px #bd4169,264px 164px #bd4169,268px 124px #bd4169,268px 128px #bd4169,268px 132px #bd4169,268px 136px #bd4169,268px 140px #bd4169,268px 144px #fa8d7c,268px 148px #fa8d7c,268px 152px #fa8d7c,268px 156px #fa8d7c,268px 160px #bd4169,268px 164px #bd4169,272px 108px #bd4169,272px 112px #bd4169,272px 116px #bd4169,272px 120px #bd4169,272px 124px #bd4169,272px 128px #bd4169,272px 132px #bd4169,272px 136px #bd4169,272px 140px #fa8d7c,272px 144px #fa8d7c,272px 148px #fa8d7c,272px 152px #fa8d7c,272px 156px #fa8d7c,272px 160px #bd4169,272px 164px #bd4169,272px 168px #bd4169,276px 0 #bd4169,276px 80px #bd4169,276px 84px #bd4169,276px 88px #bd4169,276px 92px #bd4169,276px 96px #bd4169,276px 100px #bd4169,276px 104px #bd4169,276px 108px #bd4169,276px 112px #bd4169,276px 116px #bd4169,276px 120px #bd4169,276px 124px #bd4169,276px 128px #bd4169,276px 132px #bd4169,276px 136px #bd4169,276px 140px #fa8d7c,276px 144px #fa8d7c,276px 148px #fa8d7c,276px 152px #bd4169,276px 156px #bd4169,276px 160px #bd4169,276px 164px #bd4169,276px 168px #bd4169,280px 0 #bd4169,280px 4px #bd4169,280px 48px #bd4169,280px 52px #bd4169,280px 56px #bd4169,280px 60px #bd4169,280px 76px #bd4169,280px 80px #bd4169,280px 84px #bd4169,280px 88px #bd4169,280px 92px #bd4169,280px 96px #bd4169,280px 100px #fa8d7c,280px 104px #bd4169,280px 108px #bd4169,280px 112px #bd4169,280px 116px #bd4169,280px 120px #bd4169,280px 124px #bd4169,280px 128px #bd4169,280px 132px #fa8d7c,280px 136px #fa8d7c,280px 140px #fa8d7c,280px 144px #fa8d7c,280px 148px #bd4169,280px 152px #bd4169,280px 156px #bd4169,280px 168px #bd4169,284px 16px #bd4169,284px 44px #bd4169,284px 48px #bd4169,284px 52px #bd4169,284px 56px #bd4169,284px 72px #bd4169,284px 76px #bd4169,284px 80px #bd4169,284px 84px #bd4169,284px 88px #bd4169,284px 92px #bd4169,284px 96px #bd4169,284px 100px #bd4169,284px 104px #bd4169,284px 108px #fa8d7c,284px 112px #bd4169,284px 116px #bd4169,284px 120px #bd4169,284px 124px #bd4169,284px 128px #fa8d7c,284px 132px #fa8d7c,284px 136px #fa8d7c,284px 140px #fa8d7c,284px 144px #fa8d7c,284px 148px #bd4169,284px 152px #bd4169,288px 84px #bd4169,288px 88px #bd4169,288px 92px #bd4169,288px 96px #bd4169,288px 100px #bd4169,288px 104px #bd4169,288px 108px #bd4169,288px 112px #fa8d7c,288px 116px #fa8d7c,288px 120px #fa8d7c,288px 124px #fa8d7c,288px 128px #fa8d7c,288px 132px #fa8d7c,288px 136px #fa8d7c,288px 140px #fa8d7c,288px 144px #bd4169,288px 148px #bd4169,288px 152px #bd4169,292px 80px #bd4169,292px 96px #bd4169,292px 100px #bd4169,292px 104px #bd4169,292px 108px #bd4169,292px 112px #bd4169,292px 116px #bd4169,292px 120px #bd4169,292px 124px #bd4169,292px 128px #bd4169,292px 132px #bd4169,292px 136px #fa8d7c,292px 140px #fa8d7c,292px 144px #bd4169,292px 148px #bd4169,292px 152px #bd4169,292px 156px #fa8d7c,296px 108px #bd4169,296px 112px #bd4169,296px 116px #bd4169,296px 120px #bd4169,296px 124px #bd4169,296px 128px #bd4169,296px 132px #bd4169,296px 136px #bd4169,296px 140px #fa8d7c,296px 144px #fa8d7c,296px 148px #fa8d7c,296px 152px #fa8d7c,296px 156px #fa8d7c,296px 160px #bd4169,296px 164px #bd4169,300px 120px #bd4169,300px 124px #bd4169,300px 128px #bd4169,300px 132px #bd4169,300px 136px #bd4169,300px 140px #fa8d7c,300px 144px #fa8d7c,300px 148px #fa8d7c,300px 152px #fa8d7c,300px 156px #bd4169,300px 160px #bd4169,300px 164px #bd4169,304px 128px #bd4169,304px 132px #bd4169,304px 136px #bd4169,304px 140px #bd4169,304px 144px #fa8d7c,304px 148px #fa8d7c,304px 152px #bd4169,304px 156px #bd4169,304px 160px #bd4169,304px 164px #bd4169,304px 168px #bd4169,308px 132px #bd4169,308px 136px #bd4169,308px 140px #bd4169,308px 144px #bd4169,308px 148px #bd4169,308px 152px #bd4169,308px 156px #bd4169,308px 160px #bd4169,308px 164px #bd4169,312px 136px #bd4169,312px 140px #bd4169,312px 144px #bd4169,312px 148px #bd4169,312px 152px #bd4169,312px 156px #bd4169,312px 160px #bd4169,312px 164px #bd4169,316px 140px #bd4169,316px 144px #bd4169,316px 148px #bd4169,316px 152px #bd4169,316px 156px #bd4169,316px 160px #bd4169,320px 144px #bd4169,320px 148px #bd4169,320px 152px #bd4169,320px 156px #bd4169,324px 120px #bd4169,328px 108px #bd4169,328px 112px #bd4169,332px 24px #bd4169,332px 28px #bd4169,332px 32px #bd4169,348px 8px #bd4169,360px 196px #fa8d7c,360px 200px #fa8d7c,364px 196px #fa8d7c,364px 200px #fa8d7c,368px 192px #fa8d7c,368px 196px #fa8d7c,368px 200px #fa8d7c,372px 192px #fa8d7c,372px 196px #fa8d7c,376px 188px #fa8d7c,376px 192px #a5788a,376px 196px #fa8d7c,380px 188px #fa8d7c,380px 192px #fa8d7c,384px 184px #fa8d7c,384px 188px #a5788a,384px 192px #a5788a,388px 184px #fa8d7c,388px 188px #a5788a,392px 180px #fa8d7c,392px 184px #a5788a,392px 188px #a5788a,396px 180px #fa8d7c,396px 184px #a5788a,400px 176px #fa8d7c,400px 180px #a5788a,400px 184px #a5788a,404px 176px #a5788a,404px 180px #a5788a,408px 172px #a5788a,408px 180px #a5788a,412px 172px #a5788a,412px 180px #a5788a,416px 168px #a5788a,416px 176px #a5788a,420px 176px #a5788a,424px 164px #fa8d7c,424px 172px #a5788a,428px 164px #fa8d7c,428px 168px #bd4169}to{box-shadow:128px 204px #a5788a,132px 196px #a5788a,132px 204px #a5788a,136px 196px #fa8d7c,136px 204px #fa8d7c,140px 196px #fa8d7c,140px 200px #a5788a,140px 204px #fa8d7c,140px 208px #a5788a,140px 220px #a5788a,140px 224px #a5788a,140px 228px #a5788a,140px 232px #a5788a,144px 136px #a5788a,144px 140px #a5788a,144px 200px #fa8d7c,144px 204px #a5788a,144px 208px #a5788a,144px 216px #a5788a,144px 220px #a5788a,144px 224px #a5788a,144px 228px #a5788a,148px 132px #a5788a,148px 136px #fa8d7c,148px 140px #a5788a,148px 144px #a5788a,152px 132px #a5788a,152px 136px #fa8d7c,152px 140px #fa8d7c,152px 144px #a5788a,152px 176px #a5788a,156px 136px #a5788a,156px 140px #a5788a,156px 176px #a5788a,156px 180px #a5788a,156px 196px #a5788a,156px 200px #a5788a,160px 176px #a5788a,160px 180px #a5788a,160px 196px #a5788a,160px 200px #a5788a,164px 200px #fa8d7c,176px 128px #fa8d7c,176px 136px #a5788a,176px 140px #a5788a,176px 144px #fa8d7c,180px 124px #a5788a,180px 132px #a5788a,180px 136px #fa8d7c,180px 144px #fa8d7c,184px 120px #a5788a,184px 124px #fa8d7c,184px 128px #a5788a,184px 132px #fa8d7c,184px 136px #fa8d7c,184px 172px #a5788a,184px 180px #a5788a,188px 120px #a5788a,188px 124px #fa8d7c,188px 168px #a5788a,188px 172px #fa8d7c,188px 176px #a5788a,188px 180px #fa8d7c,192px 136px #a5788a,192px 172px #fa8d7c,192px 176px #fa8d7c,192px 180px #a5788a,204px 152px #a5788a,208px 148px #fa8d7c,208px 152px #a5788a,212px 144px #fa8d7c,212px 148px #a5788a,216px 144px #fa8d7c,220px 144px #fa8d7c,244px 16px #bd4169,244px 20px #bd4169,244px 116px #bd4169,244px 120px #bd4169,244px 124px #bd4169,248px 112px #bd4169,248px 116px #bd4169,248px 148px #bd4169,248px 152px #bd4169,248px 156px #bd4169,252px 132px #bd4169,252px 136px #bd4169,252px 140px #bd4169,252px 144px #bd4169,252px 148px #bd4169,252px 152px #bd4169,252px 156px #bd4169,252px 160px #bd4169,256px 120px #bd4169,256px 124px #bd4169,256px 128px #bd4169,256px 132px #bd4169,256px 136px #bd4169,256px 140px #bd4169,256px 144px #bd4169,256px 148px #bd4169,256px 152px #bd4169,256px 156px #bd4169,256px 160px #bd4169,256px 164px #bd4169,260px 116px #bd4169,260px 120px #bd4169,260px 124px #bd4169,260px 128px #bd4169,260px 132px #bd4169,260px 136px #bd4169,260px 140px #bd4169,260px 144px #bd4169,260px 148px #fa8d7c,260px 152px #fa8d7c,260px 156px #bd4169,260px 160px #bd4169,260px 164px #bd4169,264px 112px #bd4169,264px 116px #bd4169,264px 128px #bd4169,264px 132px #bd4169,264px 136px #bd4169,264px 140px #bd4169,264px 144px #fa8d7c,264px 148px #fa8d7c,264px 152px #fa8d7c,264px 156px #fa8d7c,264px 160px #bd4169,264px 164px #bd4169,268px 124px #bd4169,268px 128px #bd4169,268px 132px #bd4169,268px 136px #bd4169,268px 140px #bd4169,268px 144px #fa8d7c,268px 148px #fa8d7c,268px 152px #fa8d7c,268px 156px #fa8d7c,268px 160px #bd4169,268px 164px #bd4169,272px 108px #bd4169,272px 112px #bd4169,272px 116px #bd4169,272px 120px #bd4169,272px 124px #bd4169,272px 128px #bd4169,272px 132px #bd4169,272px 136px #bd4169,272px 140px #fa8d7c,272px 144px #fa8d7c,272px 148px #fa8d7c,272px 152px #fa8d7c,272px 156px #fa8d7c,272px 160px #bd4169,272px 164px #bd4169,272px 168px #bd4169,276px 0 #bd4169,276px 80px #bd4169,276px 84px #bd4169,276px 88px #bd4169,276px 92px #bd4169,276px 96px #bd4169,276px 100px #bd4169,276px 104px #bd4169,276px 108px #bd4169,276px 112px #bd4169,276px 116px #bd4169,276px 120px #bd4169,276px 124px #bd4169,276px 128px #bd4169,276px 132px #bd4169,276px 136px #bd4169,276px 140px #fa8d7c,276px 144px #fa8d7c,276px 148px #fa8d7c,276px 152px #bd4169,276px 156px #bd4169,276px 160px #bd4169,276px 164px #bd4169,276px 168px #bd4169,280px 0 #bd4169,280px 4px #bd4169,280px 48px #bd4169,280px 52px #bd4169,280px 56px #bd4169,280px 60px #bd4169,280px 76px #bd4169,280px 80px #bd4169,280px 84px #bd4169,280px 88px #bd4169,280px 92px #bd4169,280px 96px #bd4169,280px 100px #fa8d7c,280px 104px #bd4169,280px 108px #bd4169,280px 112px #bd4169,280px 116px #bd4169,280px 120px #bd4169,280px 124px #bd4169,280px 128px #bd4169,280px 132px #fa8d7c,280px 136px #fa8d7c,280px 140px #fa8d7c,280px 144px #fa8d7c,280px 148px #bd4169,280px 152px #bd4169,280px 156px #bd4169,280px 168px #bd4169,284px 16px #bd4169,284px 44px #bd4169,284px 48px #bd4169,284px 52px #bd4169,284px 56px #bd4169,284px 72px #bd4169,284px 76px #bd4169,284px 80px #bd4169,284px 84px #bd4169,284px 88px #bd4169,284px 92px #bd4169,284px 96px #bd4169,284px 100px #bd4169,284px 104px #bd4169,284px 108px #fa8d7c,284px 112px #bd4169,284px 116px #bd4169,284px 120px #bd4169,284px 124px #bd4169,284px 128px #fa8d7c,284px 132px #fa8d7c,284px 136px #fa8d7c,284px 140px #fa8d7c,284px 144px #fa8d7c,284px 148px #bd4169,284px 152px #bd4169,288px 84px #bd4169,288px 88px #bd4169,288px 92px #bd4169,288px 96px #bd4169,288px 100px #bd4169,288px 104px #bd4169,288px 108px #bd4169,288px 112px #fa8d7c,288px 116px #fa8d7c,288px 120px #fa8d7c,288px 124px #fa8d7c,288px 128px #fa8d7c,288px 132px #fa8d7c,288px 136px #fa8d7c,288px 140px #fa8d7c,288px 144px #bd4169,288px 148px #bd4169,288px 152px #bd4169,292px 80px #bd4169,292px 96px #bd4169,292px 100px #bd4169,292px 104px #bd4169,292px 108px #bd4169,292px 112px #bd4169,292px 116px #bd4169,292px 120px #bd4169,292px 124px #bd4169,292px 128px #bd4169,292px 132px #bd4169,292px 136px #fa8d7c,292px 140px #fa8d7c,292px 144px #bd4169,292px 148px #bd4169,292px 152px #bd4169,292px 156px #fa8d7c,296px 108px #bd4169,296px 112px #bd4169,296px 116px #bd4169,296px 120px #bd4169,296px 124px #bd4169,296px 128px #bd4169,296px 132px #bd4169,296px 136px #bd4169,296px 140px #fa8d7c,296px 144px #fa8d7c,296px 148px #fa8d7c,296px 152px #fa8d7c,296px 156px #fa8d7c,296px 160px #bd4169,296px 164px #bd4169,300px 120px #bd4169,300px 124px #bd4169,300px 128px #bd4169,300px 132px #bd4169,300px 136px #bd4169,300px 140px #fa8d7c,300px 144px #fa8d7c,300px 148px #fa8d7c,300px 152px #fa8d7c,300px 156px #bd4169,300px 160px #bd4169,300px 164px #bd4169,304px 128px #bd4169,304px 132px #bd4169,304px 136px #bd4169,304px 140px #bd4169,304px 144px #fa8d7c,304px 148px #fa8d7c,304px 152px #bd4169,304px 156px #bd4169,304px 160px #bd4169,304px 164px #bd4169,304px 168px #bd4169,308px 132px #bd4169,308px 136px #bd4169,308px 140px #bd4169,308px 144px #bd4169,308px 148px #bd4169,308px 152px #bd4169,308px 156px #bd4169,308px 160px #bd4169,308px 164px #bd4169,312px 136px #bd4169,312px 140px #bd4169,312px 144px #bd4169,312px 148px #bd4169,312px 152px #bd4169,312px 156px #bd4169,312px 160px #bd4169,312px 164px #bd4169,316px 140px #bd4169,316px 144px #bd4169,316px 148px #bd4169,316px 152px #bd4169,316px 156px #bd4169,316px 160px #bd4169,320px 144px #bd4169,320px 148px #bd4169,320px 152px #bd4169,320px 156px #bd4169,324px 120px #bd4169,328px 108px #bd4169,328px 112px #bd4169,332px 24px #bd4169,332px 28px #bd4169,332px 32px #bd4169,348px 8px #bd4169,360px 196px #fa8d7c,360px 200px #fa8d7c,364px 196px #fa8d7c,364px 200px #fa8d7c,368px 192px #fa8d7c,368px 196px #fa8d7c,368px 200px #fa8d7c,372px 192px #fa8d7c,372px 196px #fa8d7c,376px 188px #fa8d7c,376px 192px #a5788a,376px 196px #fa8d7c,380px 188px #fa8d7c,380px 192px #fa8d7c,384px 184px #fa8d7c,384px 188px #a5788a,384px 192px #a5788a,388px 184px #fa8d7c,388px 188px #a5788a,392px 180px #fa8d7c,392px 184px #a5788a,392px 188px #a5788a,396px 180px #fa8d7c,396px 184px #a5788a,400px 176px #fa8d7c,400px 180px #a5788a,400px 184px #a5788a,404px 176px #a5788a,404px 180px #a5788a,408px 172px #a5788a,408px 180px #a5788a,412px 172px #a5788a,412px 180px #a5788a,416px 168px #a5788a,416px 176px #a5788a,420px 176px #a5788a,424px 164px #fa8d7c,424px 172px #a5788a,428px 164px #fa8d7c,428px 168px #bd4169}}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 85:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/windicss-webpack-plugin/dist/loaders/windicss-template.cjs!./src/components/Fire.vue?vue&type=template&id=4f6b8358&scoped=true&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "relative h-470px"
  }, [_vm._ssrNode("<div class=\"fire\" data-v-4f6b8358></div>")]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./src/components/Fire.vue?vue&type=template&id=4f6b8358&scoped=true&

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./src/components/Fire.vue

var script = {}
function injectStyles (context) {
  
  var style0 = __webpack_require__(83)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  script,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "4f6b8358",
  "329ae2aa"
  
)

/* harmony default export */ var Fire = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 87:
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
  "039df2f4"
  
)

/* harmony default export */ var Dev = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {Title: __webpack_require__(27).default})


/***/ }),

/***/ 92:
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
//# sourceMappingURL=index.js.map