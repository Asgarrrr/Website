exports.ids = [78,3,11,53];
exports.modules = {

/***/ 101:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(135);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(5).default
module.exports.__inject__ = function (context) {
  add("5066449e", content, true, context)
};

/***/ }),

/***/ 112:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/windicss-webpack-plugin/dist/loaders/windicss-template.cjs!./src/components/Card/Discord.vue?vue&type=template&id=41eddaf7&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c,
    _setup = _vm._self._setupProxy;
  return _vm.componentReady ? _c('div', {
    staticClass: "rounded-md bg-[#6c82cf] w-full py-4 px-6 overflow-x-hidden dark:bg-neutral-800/40"
  }, [_vm._ssrNode("<div class=\"pt-2\">", "</div>", [_vm._ssrNode("<h1 class=\"font-semibold text-xs text-white uppercase dark:text-gray-100\">\n      Playing a game\n    </h1> "), _vm._ssrNode("<div class=\"flex flex-col space-y-3 items-center justify-between overflow-x-hidden md:space-y-0 md:space-x-3 md:flex-row\">", "</div>", [_vm._ssrNode("<div" + _vm._ssrClass("flex space-x-3 w-full py-2 items-center overflow-x-hidden md:space-x-5", _vm.buttons.length > 0 && 'md:w-2/3') + ">", "</div>", [_vm._ssrNode("<div class=\"flex-shrink-0 h-32 w-32 relative\">", "</div>", [_c('SmartImage', {
    key: _vm.getImages.largeImage,
    staticClass: "rounded-xl",
    attrs: {
      "src": _vm.getImages.largeImage,
      "alt": "large image",
      "height": "256",
      "width": "256"
    }
  }), _vm._ssrNode(" "), _vm.getImages.smallImage ? _c('SmartImage', {
    directives: [{
      name: "tippy",
      rawName: "v-tippy",
      value: {
        content: _vm.getText.small,
        placement: 'top'
      },
      expression: "{\n              content: getText.small,\n              placement: 'top',\n            }"
    }],
    key: _vm.getImages.smallImage,
    staticClass: "rounded-full bg-[#6c82cf] h-9 -right-2 -bottom-2 ring-4 ring-[#6c82cf] w-9 overflow-y-hidden absolute box-border dark:bg-transparent dark:ring-transparent focus:outline-none",
    attrs: {
      "src": _vm.getImages.smallImage,
      "alt": "small image"
    }
  }) : _vm._e()], 2), _vm._ssrNode(" <div class=\"text-gray-100 overflow-x-hidden\"><h1 class=\"font-medium text-xl text-white block\">" + _vm._ssrEscape(_vm._s(_vm.title)) + "</h1> <div class=\"leading-tight\"><span class=\"block truncate\">" + _vm._ssrEscape(_vm._s(_vm.getText.details)) + "</span> <span class=\"block truncate\">" + _vm._ssrEscape(_vm._s(_vm.getText.state)) + "</span> " + (_vm.isTimerEnabled === true ? "<span class=\"text-sm block\">" + _vm._ssrEscape(_vm._s(_vm.getTime)) + "</span>" : "<!---->") + "</div></div>")], 2), _vm._ssrNode(" "), _vm.buttons.length > 0 ? _vm._ssrNode("<div class=\"flex flex-col space-y-2 flex-shrink-0 md:w-1/3\">", "</div>", _vm._l(_vm.buttons, function (button, index) {
    return _vm._ssrNode("<div class=\"flex justify-end\">", "</div>", [_c('SmartLink', {
      staticClass: "border rounded-sm cursor-pointer border-white/40 text-sm py-2 px-4 transition-colors text-gray-300 truncate select-none md:px-3 md:py-1 hover:text-white hover:border-white focus:bg-opacity-10 focus:bg-white",
      attrs: {
        "href": button.url,
        "title": button.url,
        "blank": ""
      }
    }, [_vm._v(_vm._s(button.label))])], 1);
  }), 0) : _vm._e()], 2)], 2)]) : _c('div', {
    staticClass: "rounded-md bg-[#6c82cf] h-[12.5rem] w-full animate-pulse"
  }, []);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./src/components/Card/Discord.vue?vue&type=template&id=41eddaf7&

// EXTERNAL MODULE: external "vue"
var external_vue_ = __webpack_require__(0);
var external_vue_default = /*#__PURE__*/__webpack_require__.n(external_vue_);

// EXTERNAL MODULE: ./src/assets/files/premid/largeImages.ts
var largeImages = __webpack_require__(84);

// EXTERNAL MODULE: ./src/assets/files/premid/smallImages.ts
var smallImages = __webpack_require__(85);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--12-0!./node_modules/ts-loader??ref--12-1!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/windicss-webpack-plugin/dist/loaders/windicss-template.cjs!./src/components/Card/Discord.vue?vue&type=script&lang=ts&
/* eslint-disable no-undef */

/* Import image files */


/* harmony default export */ var Discordvue_type_script_lang_ts_ = (external_vue_default.a.extend({
  props: {
    title: {
      type: String,
      required: false,
      default: "Custom Status"
    },
    largeImage: {
      type: String,
      required: false,
      default: "PreMiD"
    },
    smallImage: {
      type: String,
      required: false,
      default: null
    },
    smallImageText: {
      type: String,
      required: false,
      default: null
    },
    details: {
      type: String,
      required: false,
      default: ""
    },
    buttons: {
      type: Array,
      required: false,
      default: () => []
    },
    state: {
      type: String,
      required: false,
      default: ""
    },
    customImageUrl: {
      type: Object,
      required: false,
      default: () => ({
        small: "",
        large: ""
      })
    },
    timestamp: {
      type: Object,
      required: false,
      default: () => ({})
    }
  },
  data() {
    return {
      componentReady: false,
      timers: {
        elapsed: {
          instance: null,
          string: ""
        },
        end: {
          instance: null,
          string: ""
        }
      }
    };
  },
  computed: {
    /**
     * Returns large and small image by replacing the spaces in their name.
     * @returns {{largeImage: string, smallImage: string}}
     */
    getImages() {
      var _a, _b;
      const {
        largeImage,
        smallImage
      } = this;
      /* Map arrays and combine items in all categories */
      const largeAll = [];
      const smallAll = [];
      /* Loop into all arrays inside items and combine them in a single array */
      largeImages["a" /* default */].map(item => item.items).forEach(category => largeAll.push(...category));
      smallImages["a" /* default */].map(item => item.items).forEach(category => smallAll.push(...category));
      return {
        largeImage: this.customImageUrl.large ? largeImage : ((_a = largeAll.find(item => item.name === largeImage)) === null || _a === void 0 ? void 0 : _a.url) || "https://i.imgur.com/CuVtvKW.png",
        smallImage: this.customImageUrl.small ? smallImage : ((_b = smallAll.find(item => item.name === smallImage)) === null || _b === void 0 ? void 0 : _b.url) || null
      };
    },
    /**
     * Returns text related parts for the UI.
     * @returns {{details: string, state: string, small: string | undefined}}
     */
    getText() {
      const {
        smallImage,
        smallImageText,
        details,
        state
      } = this;
      let small;
      if (smallImage && smallImageText) small = smallImageText;else if (smallImage && !smallImageText) small = "[EMPTY]";
      return {
        details,
        state,
        small
      };
    },
    /**
     * Checks if timers are enabled, starts or stops timers according to passed props.
     * @returns {boolean} Whether any timer is enabled or not.
     */
    isTimerEnabled() {
      var _a, _b;
      const start = (_a = this === null || this === void 0 ? void 0 : this.timestamp) === null || _a === void 0 ? void 0 : _a.start;
      const end = (_b = this === null || this === void 0 ? void 0 : this.timestamp) === null || _b === void 0 ? void 0 : _b.end;
      if ((start === null || start === void 0 ? void 0 : start.enabled) && (start === null || start === void 0 ? void 0 : start.value)) {
        this.startElapsedTimer();
        return true;
      } else if ((end === null || end === void 0 ? void 0 : end.enabled) && (end === null || end === void 0 ? void 0 : end.value)) {
        this.startLeftTimer();
        return true;
      } else {
        this.stopTimers();
        return false;
      }
    },
    /**
     * Returns the string for enabled timer.
     * @returns {boolean |null | string}
     */
    getTime() {
      var _a, _b;
      if (this.isTimerEnabled === false) return null;else if ((_a = this.timers.elapsed) === null || _a === void 0 ? void 0 : _a.instance) return this.timers.elapsed.string;else if ((_b = this.timers.end) === null || _b === void 0 ? void 0 : _b.instance) return this.timers.end.string;else return null;
    }
  },
  mounted() {
    this.componentReady = true;
  },
  beforeDestroy() {
    this.stopTimers();
  },
  methods: {
    /**
     * Stops both of the timers.
     */
    stopTimers() {
      const {
        elapsed,
        end
      } = this.timers;
      if (typeof elapsed === "boolean" && typeof end === "boolean") return;
      /* Clear elapsed timer */
      // @ts-ignore-next-line
      clearInterval(elapsed.instance);
      elapsed.instance = null;
      elapsed.string = "";
      /* Clear end timer */
      // @ts-ignore-next-line
      clearInterval(end.instance);
      end.instance = null;
      end.string = "";
    },
    /**
     * Calculates the time difference between now and selected time and starts the elapsed timer.
     */
    startElapsedTimer() {
      var _a, _b, _c;
      const target = (_b = (_a = this === null || this === void 0 ? void 0 : this.timestamp) === null || _a === void 0 ? void 0 : _a.start) === null || _b === void 0 ? void 0 : _b.value;
      const timer = (_c = this === null || this === void 0 ? void 0 : this.timers) === null || _c === void 0 ? void 0 : _c.elapsed;
      if (!target || !timer) return;
      this.stopTimers();
      timer.string = "00:00 elapsed";
      timer.instance = setInterval(() => {
        let timeArray = [String(this.$moment().diff(target, "hours")), String(this.$moment().diff(target, "minutes") % 60), String(this.$moment().diff(target, "seconds") % 60)];
        if (timeArray[0] === "0") timeArray = timeArray.slice(1);
        timeArray = timeArray.map(time => time.length === 1 ? `0${time}` : time);
        timer.string = `${timeArray.join(":")} elapsed`;
      }, 1000);
    },
    /**
     * Calculates the time difference between now and selected time and starts the elapsed timer.
     */
    startLeftTimer() {
      var _a, _b, _c;
      const target = (_b = (_a = this === null || this === void 0 ? void 0 : this.timestamp) === null || _a === void 0 ? void 0 : _a.end) === null || _b === void 0 ? void 0 : _b.value;
      const timer = (_c = this === null || this === void 0 ? void 0 : this.timers) === null || _c === void 0 ? void 0 : _c.end;
      if (!target || !timer) return;
      this.stopTimers();
      timer.string = "--:-- left";
      timer.instance = setInterval(() => {
        const toTime = this.$moment(target, "HH:mm").unix();
        const fromTime = this.$moment().unix();
        const duration = this.$moment.duration(toTime - fromTime, "seconds");
        if (duration.asSeconds() < 0) return timer.string = "00:00 left";
        let timeArray = [String(duration.hours()), String(duration.minutes()), String(duration.seconds())];
        if (timeArray[0] === "0") timeArray = timeArray.slice(1);
        timeArray = timeArray.map(time => time.length === 1 ? `0${time}` : time);
        timer.string = `${timeArray.join(":")} left`;
      }, 1000);
    }
  }
}));
// CONCATENATED MODULE: ./src/components/Card/Discord.vue?vue&type=script&lang=ts&
 /* harmony default export */ var Card_Discordvue_type_script_lang_ts_ = (Discordvue_type_script_lang_ts_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./src/components/Card/Discord.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  Card_Discordvue_type_script_lang_ts_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "4f8c9bb4"
  
)

/* harmony default export */ var Discord = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {SmartImage: __webpack_require__(27).default,SmartLink: __webpack_require__(16).default})


/***/ }),

/***/ 127:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/windicss-webpack-plugin/dist/loaders/windicss-template.cjs!./src/components/Icon/Sync.vue?vue&type=template&id=4cb3a511&
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
  }, [_vm._ssrNode("<path stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15\"></path>")]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./src/components/Icon/Sync.vue?vue&type=template&id=4cb3a511&

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./src/components/Icon/Sync.vue

var script = {}


/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  script,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "157d1f0c"
  
)

/* harmony default export */ var Sync = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 134:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_windicss_webpack_plugin_dist_loaders_windicss_style_pitcher_cjs_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_windicss_webpack_plugin_dist_loaders_windicss_template_cjs_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_custom_status_vue_vue_type_style_index_0_id_2d295e5a_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(101);
/* harmony import */ var _node_modules_windicss_webpack_plugin_dist_loaders_windicss_style_pitcher_cjs_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_windicss_webpack_plugin_dist_loaders_windicss_template_cjs_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_custom_status_vue_vue_type_style_index_0_id_2d295e5a_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_windicss_webpack_plugin_dist_loaders_windicss_style_pitcher_cjs_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_windicss_webpack_plugin_dist_loaders_windicss_template_cjs_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_custom_status_vue_vue_type_style_index_0_id_2d295e5a_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_windicss_webpack_plugin_dist_loaders_windicss_style_pitcher_cjs_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_windicss_webpack_plugin_dist_loaders_windicss_template_cjs_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_custom_status_vue_vue_type_style_index_0_id_2d295e5a_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_windicss_webpack_plugin_dist_loaders_windicss_style_pitcher_cjs_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_windicss_webpack_plugin_dist_loaders_windicss_template_cjs_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_custom_status_vue_vue_type_style_index_0_id_2d295e5a_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 135:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, "input[data-v-2d295e5a],select[data-v-2d295e5a]{--tw-bg-opacity:0.05;--tw-text-opacity:0.7;background-color:rgba(0,0,0,.05);background-color:rgba(0,0,0,var(--tw-bg-opacity));border-color:transparent;border-radius:.5rem;border-width:1px;color:rgba(0,0,0,.7);color:rgba(0,0,0,var(--tw-text-opacity));font-size:.875rem;line-height:1.25rem;outline:2px solid transparent;outline-offset:2px;padding:.5rem 1rem;transition-duration:.15s;transition-property:background-color,border-color,color,fill,stroke;transition-timing-function:cubic-bezier(.4,0,.2,1)}.dark input[data-v-2d295e5a],.dark select[data-v-2d295e5a]{--tw-bg-opacity:0.1;--tw-text-opacity:0.7;background-color:hsla(0,0%,100%,.1);background-color:rgba(255,255,255,var(--tw-bg-opacity));color:hsla(0,0%,100%,.7);color:rgba(255,255,255,var(--tw-text-opacity))}.dark input[data-v-2d295e5a]:focus,.dark select[data-v-2d295e5a]:focus{--tw-border-opacity:0.1;border-color:hsla(0,0%,100%,.1);border-color:rgba(255,255,255,var(--tw-border-opacity))}input[data-v-2d295e5a]:focus,select[data-v-2d295e5a]:focus{--tw-border-opacity:0.1;border-color:rgba(0,0,0,.1);border-color:rgba(0,0,0,var(--tw-border-opacity))}.dark input[data-v-2d295e5a]::-moz-placeholder,.dark select[data-v-2d295e5a]::-moz-placeholder{--tw-placeholder-opacity:0.3;color:hsla(0,0%,100%,.3);color:rgba(255,255,255,var(--tw-placeholder-opacity))}.dark input[data-v-2d295e5a]::placeholder,.dark select[data-v-2d295e5a]::placeholder{--tw-placeholder-opacity:0.3;color:hsla(0,0%,100%,.3);color:rgba(255,255,255,var(--tw-placeholder-opacity))}input[data-v-2d295e5a]::-moz-placeholder,select[data-v-2d295e5a]::-moz-placeholder{--tw-placeholder-opacity:0.5;color:rgba(0,0,0,.5);color:rgba(0,0,0,var(--tw-placeholder-opacity))}input[data-v-2d295e5a]::placeholder,select[data-v-2d295e5a]::placeholder{--tw-placeholder-opacity:0.5;color:rgba(0,0,0,.5);color:rgba(0,0,0,var(--tw-placeholder-opacity))}input[type=time][data-v-2d295e5a],select[type=time][data-v-2d295e5a]{padding:1px .5rem}.timestamp[data-v-2d295e5a]>:not([hidden])~:not([hidden]){--tw-space-x-reverse:0;margin-left:.5rem;margin-left:calc(.5rem*(1 - var(--tw-space-x-reverse)));margin-right:0;margin-right:calc(.5rem*var(--tw-space-x-reverse))}.timestamp[data-v-2d295e5a]{--tw-bg-opacity:0.05;--tw-text-opacity:0.7;align-items:center;background-color:rgba(0,0,0,.05);background-color:rgba(0,0,0,var(--tw-bg-opacity));border-color:transparent;border-radius:.5rem;border-width:1px;color:rgba(0,0,0,.7);color:rgba(0,0,0,var(--tw-text-opacity));display:flex;font-size:.875rem;justify-content:center;line-height:1.25rem;outline:2px solid transparent;outline-offset:2px;padding:.5rem 1rem;transition-duration:.15s;transition-property:background-color,border-color,color,fill,stroke;transition-timing-function:cubic-bezier(.4,0,.2,1)}.dark .timestamp[data-v-2d295e5a]{--tw-bg-opacity:0.1;--tw-text-opacity:0.7;background-color:hsla(0,0%,100%,.1);background-color:rgba(255,255,255,var(--tw-bg-opacity));color:hsla(0,0%,100%,.7);color:rgba(255,255,255,var(--tw-text-opacity))}.dark .timestamp[data-v-2d295e5a]:focus{--tw-border-opacity:0.1;border-color:hsla(0,0%,100%,.1);border-color:rgba(255,255,255,var(--tw-border-opacity))}.timestamp[data-v-2d295e5a]:focus{--tw-border-opacity:0.1;border-color:rgba(0,0,0,.1);border-color:rgba(0,0,0,var(--tw-border-opacity))}.dark .timestamp[data-v-2d295e5a]::-moz-placeholder{--tw-placeholder-opacity:0.3;color:hsla(0,0%,100%,.3);color:rgba(255,255,255,var(--tw-placeholder-opacity))}.dark .timestamp[data-v-2d295e5a]::placeholder{--tw-placeholder-opacity:0.3;color:hsla(0,0%,100%,.3);color:rgba(255,255,255,var(--tw-placeholder-opacity))}.timestamp[data-v-2d295e5a]::-moz-placeholder{--tw-placeholder-opacity:0.5;color:rgba(0,0,0,.5);color:rgba(0,0,0,var(--tw-placeholder-opacity))}.timestamp[data-v-2d295e5a]::placeholder{--tw-placeholder-opacity:0.5;color:rgba(0,0,0,.5);color:rgba(0,0,0,var(--tw-placeholder-opacity))}.timestamp[data-v-2d295e5a]:not(.cursor-default){cursor:pointer}.timestamp[data-v-2d295e5a]:not(.active){--tw-text-opacity:0.5;color:rgba(0,0,0,.5);color:rgba(0,0,0,var(--tw-text-opacity))}.dark .timestamp[data-v-2d295e5a]:not(.active){--tw-text-opacity:0.7;color:hsla(0,0%,100%,.7);color:rgba(255,255,255,var(--tw-text-opacity))}.timestamp.active[data-v-2d295e5a]{--tw-bg-opacity:1;--tw-text-opacity:0.9;--tw-drop-shadow:drop-shadow(0 4px 3px rgba(0,0,0,.07)) drop-shadow(0 2px 2px rgba(0,0,0,.06));background-color:#10b981;background-color:rgba(16,185,129,var(--tw-bg-opacity));color:hsla(0,0%,100%,.9);color:rgba(255,255,255,var(--tw-text-opacity))}.dark .timestamp.active[data-v-2d295e5a]{--tw-bg-opacity:1;background-color:#047857;background-color:rgba(4,120,87,var(--tw-bg-opacity))}a[data-v-2d295e5a]{color:#3b82f6;color:rgba(59,130,246,var(--tw-text-opacity))}a[data-v-2d295e5a],a[data-v-2d295e5a]:hover{--tw-text-opacity:1}a[data-v-2d295e5a]:hover{color:#2563eb;color:rgba(37,99,235,var(--tw-text-opacity));text-decoration-line:underline}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 162:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/windicss-webpack-plugin/dist/loaders/windicss-template.cjs!./src/pages/projects/premid/custom-status.vue?vue&type=template&id=2d295e5a&scoped=true&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c,
    _setup = _vm._self._setupProxy;
  return _c('div', {
    staticClass: "space-y-2 mt-4"
  }, [_vm._ssrNode("<div id=\"object\" class=\"text-gray-900 hidden dark:text-gray-100\" data-v-2d295e5a>" + _vm._ssrEscape("\n    " + _vm._s(_vm.getPresenceData) + "\n  ") + "</div> "), _vm._ssrNode("<div class=\"space-y-12\" data-v-2d295e5a>", "</div>", [_vm._ssrNode("<div class=\"space-y-4\" data-v-2d295e5a>", "</div>", [_vm.presence.installed === false ? _c('BlogNotification', {
    attrs: {
      "type": "danger"
    }
  }, [_vm._v("\n        You need to install the Custom Status presence from the PreMiD Store\n        to be able to use this page.\n        "), _c('SmartLink', {
    staticClass: "text-blue-200",
    attrs: {
      "href": "https://premid.app/store/presences/Custom%20Status",
      "blank": ""
    }
  }, [_vm._v("Click here")]), _vm._v("\n        " + _vm._s("") + " to visit the store.\n      ")], 1) : _vm._e(), _vm._ssrNode(" "), _c('BlogNotification', {
    staticClass: "md:hidden",
    attrs: {
      "type": "warning"
    }
  }, [_vm._v("\n        Are you on mobile? If you are you should know that PreMiD doesn't work\n        on mobile, so you can't use this page in any way.\n      ")]), _vm._ssrNode(" "), _c('CardDiscord', {
    staticClass: "shadow-lg",
    attrs: {
      "small-image-text": _vm.presence.smallImageText,
      "large-image": _vm.presence.largeImageKey,
      "small-image": _vm.presence.smallImageKey,
      "custom-image-url": {
        large: _vm.customLargeImage,
        small: _vm.customSmallImage
      },
      "timestamp": _vm.presence.timestamp,
      "details": _vm.presence.details,
      "state": _vm.presence.state,
      "buttons": _vm.getButtons
    }
  })], 2), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"space-y-4 mt-4 gap-x-4 gap-y-8 md:grid md:space-y-0 md:grid-cols-2\" data-v-2d295e5a>", "</div>", [_vm._ssrNode("<div class=\"space-y-2\" data-v-2d295e5a>", "</div>", [_c('Title', {
    attrs: {
      "padding": false
    }
  }, [_vm._v(" Details (upper text) ")]), _vm._ssrNode(" <input type=\"text\" placeholder=\"Something nice\"" + _vm._ssrAttr("value", _vm.presence.details) + " class=\"w-full\" data-v-2d295e5a>")], 2), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"space-y-2\" data-v-2d295e5a>", "</div>", [_c('Title', {
    attrs: {
      "padding": false
    }
  }, [_vm._v(" State (lower text) ")]), _vm._ssrNode(" <input type=\"text\" placeholder=\"This is neat!\"" + _vm._ssrAttr("value", _vm.presence.state) + " class=\"w-full\" data-v-2d295e5a>")], 2), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"space-y-2\" data-v-2d295e5a>", "</div>", [_vm._ssrNode("<div class=\"flex space-x-2 items-center justify-between\" data-v-2d295e5a>", "</div>", [_c('Title', {
    attrs: {
      "padding": false
    }
  }, [_vm._v(" Large Image ")]), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"cursor-pointer flex space-x-1 transition-colors text-neutral-700/40 items-center dark:text-gray-100/40 hover:text-opacity-100 focus:outline-none\" data-v-2d295e5a>", "</div>", [_vm._ssrNode("<span class=\"text-sm\" data-v-2d295e5a>custom</span> "), _c('IconSync', {
    staticClass: "h-5 w-5 focus:outline-none"
  })], 2)], 2), _vm._ssrNode(" "), _vm.customLargeImage ? _vm._ssrNode("<input type=\"text\" placeholder=\"Type an image url\"" + _vm._ssrAttr("value", _vm.presence.largeImageKey) + " class=\"w-full\" data-v-2d295e5a>", "</input>") : _c('select', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.presence.largeImageKey,
      expression: "presence.largeImageKey"
    }],
    staticClass: "bg-white w-full dark:bg-neutral-700",
    on: {
      "change": function ($event) {
        var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
          return o.selected;
        }).map(function (o) {
          var val = "_value" in o ? o._value : o.value;
          return val;
        });
        _vm.$set(_vm.presence, "largeImageKey", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
      }
    }
  }, [_c('option', {
    attrs: {
      "selected": ""
    }
  }, [_vm._v("PreMiD")]), _vm._v(" "), _vm._l(_vm.getImages.large, function (category, index) {
    return _c('optgroup', {
      key: `large-group-${index}`,
      attrs: {
        "label": category.name
      }
    }, _vm._l(category.items.sort((a, b) => a.name.localeCompare(b.name)), function (item, i) {
      return _c('option', {
        key: `large-option-${i}`
      }, [_vm._v("\n              " + _vm._s(item.name) + "\n            ")]);
    }), 0);
  })], 2)], 2), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"space-y-2\" data-v-2d295e5a>", "</div>", [_vm._ssrNode("<div class=\"flex space-x-2 items-center justify-between\" data-v-2d295e5a>", "</div>", [_c('Title', {
    attrs: {
      "padding": false
    }
  }, [_vm._v(" Small Image ")]), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"cursor-pointer flex space-x-1 transition-colors text-neutral-700/40 items-center dark:text-gray-100/40 hover:text-opacity-100 focus:outline-none\" data-v-2d295e5a>", "</div>", [_vm._ssrNode("<span class=\"text-sm\" data-v-2d295e5a>custom</span> "), _c('IconSync', {
    staticClass: "h-5 w-5 focus:outline-none"
  })], 2)], 2), _vm._ssrNode(" "), _vm.customSmallImage ? _vm._ssrNode("<input type=\"text\" placeholder=\"Type an image url\"" + _vm._ssrAttr("value", _vm.presence.smallImageKey) + " class=\"w-full\" data-v-2d295e5a>", "</input>") : _c('select', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.presence.smallImageKey,
      expression: "presence.smallImageKey"
    }],
    staticClass: "bg-white w-full dark:bg-neutral-700",
    on: {
      "change": function ($event) {
        var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
          return o.selected;
        }).map(function (o) {
          var val = "_value" in o ? o._value : o.value;
          return val;
        });
        _vm.$set(_vm.presence, "smallImageKey", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
      }
    }
  }, [_c('option', {
    attrs: {
      "selected": ""
    }
  }, [_vm._v("None")]), _vm._v(" "), _vm._l(_vm.getImages.small, function (category, index) {
    return _c('optgroup', {
      key: `small-group-${index}`,
      attrs: {
        "label": category.name
      }
    }, _vm._l(category.items.sort((a, b) => a.name.localeCompare(b.name)), function (item, i) {
      return _c('option', {
        key: `small-image-${i}`
      }, [_vm._v("\n              " + _vm._s(item.name) + "\n            ")]);
    }), 0);
  })], 2)], 2), _vm._ssrNode(" " + (_vm.presence.smallImageKey !== 'None' ? "<div class=\"space-y-2 w-full col-span-2\" data-v-2d295e5a><h3 class=\"font-medium w-full text-gray-700 dark:text-gray-100\" data-v-2d295e5a>\n          Small Image Text\n        </h3> <input type=\"text\" placeholder=\"[EMPTY]\"" + _vm._ssrAttr("value", _vm.presence.smallImageText) + " class=\"w-full\" data-v-2d295e5a></div>" : "<!---->") + " "), _vm._ssrNode("<div class=\"space-y-4 col-span-2\" data-v-2d295e5a>", "</div>", [_vm._ssrNode("<div data-v-2d295e5a>", "</div>", [_c('Title', {
    attrs: {
      "padding": false
    }
  }, [_vm._v(" Buttons ")]), _vm._ssrNode(" <p class=\"text-sm text-black/50 dark:text-white/30 mt-4\" data-v-2d295e5a>\n            You can't click your own buttons from your Discord profile. If\n            they appear here, they should also be working for others, blame\n            Discord.\n          </p>")], 2), _vm._ssrNode(" <div class=\"grid gap-4 md:grid-cols-2\" data-v-2d295e5a><div class=\"space-y-2\" data-v-2d295e5a><input type=\"text\" placeholder=\"Visit This Cool Website\"" + _vm._ssrAttr("value", _vm.presence.buttons[0].label) + " class=\"w-full\" data-v-2d295e5a> <input type=\"text\" placeholder=\"https://eggsy.xyz\"" + _vm._ssrAttr("value", _vm.presence.buttons[0].url) + " class=\"w-full\" data-v-2d295e5a></div> <div class=\"space-y-2\" data-v-2d295e5a><input type=\"text\" placeholder=\"Visit PreMiD\"" + _vm._ssrAttr("value", _vm.presence.buttons[1].label) + " class=\"w-full\" data-v-2d295e5a> <input type=\"text\" placeholder=\"https://premid.app\"" + _vm._ssrAttr("value", _vm.presence.buttons[1].url) + " class=\"w-full\" data-v-2d295e5a></div></div>")], 2), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"space-y-2 col-span-2\" data-v-2d295e5a>", "</div>", [_c('Title', {
    attrs: {
      "padding": false
    }
  }, [_vm._v(" Timestamps ")]), _vm._ssrNode(" <div class=\"grid gap-4 md:grid-cols-2\" data-v-2d295e5a><div" + _vm._ssrClass("timestamp dark:text-gray-200", {
    'active text-white dark:text-gray-100': _vm.presence.timestamp.start.enabled === true
  }) + " data-v-2d295e5a>\n            Show Time Elapsed\n          </div> <div" + _vm._ssrClass("cursor-default timestamp", {
    active: _vm.presence.timestamp.end.enabled === true
  }) + " data-v-2d295e5a><span" + _vm._ssrClass("dark:text-gray-200", {
    'text-white dark:text-gray-100': _vm.presence.timestamp.end.enabled === true
  }) + " data-v-2d295e5a>Time To:</span> <input type=\"time\"" + _vm._ssrAttr("value", _vm.presence.timestamp.end.value) + " data-v-2d295e5a></div></div>")], 2)], 2), _vm._ssrNode(" "), _vm._ssrNode("<section class=\"space-y-12\" data-v-2d295e5a>", "</section>", [_vm._ssrNode("<div data-v-2d295e5a>", "</div>", [_c('Title', {
    attrs: {
      "padding": false
    }
  }, [_vm._v(" Consider Donating! ")]), _vm._ssrNode(" "), _vm._ssrNode("<p class=\"text-black/50 text-sm dark:text-white/30 mt-4\" data-v-2d295e5a>", "</p>", [_vm._ssrNode("\n          If you want to support my work and make me create better systems in\n          the future, you can donate me through GitHub Sponsors, please visit\n          "), _c('SmartLink', {
    staticClass: "font-medium hover:underline",
    attrs: {
      "href": {
        name: 'donate'
      }
    }
  }, [_vm._v("my donate page")]), _vm._ssrNode(_vm._ssrEscape("\n          " + _vm._s("") + " for more information.\n        "))], 2)], 2), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"grid gap-6 md:grid-cols-2\" data-v-2d295e5a>", "</div>", [_vm._ssrNode("<div data-v-2d295e5a>", "</div>", [_c('Title', {
    attrs: {
      "padding": false
    }
  }, [_vm._v(" How does it work? ")]), _vm._ssrNode(" "), _vm._ssrNode("<p class=\"text-black/50 text-sm dark:text-white/30 mt-4\" data-v-2d295e5a>", "</p>", [_vm._ssrNode("\n            When you add our Presence from Presence Store which is on\n            "), _c('SmartLink', {
    attrs: {
      "href": "https://premid.app/store/presences/Custom%20Status",
      "title": "PreMiD Store",
      "blank": ""
    }
  }, [_vm._v("this page")]), _vm._ssrNode(", you will be able to use this page. You just have to set your\n            settings and PreMiD will show those settings on your profile just\n            like in the preview you see up here.\n          ")], 2)], 2), _vm._ssrNode(" "), _vm._ssrNode("<div data-v-2d295e5a>", "</div>", [_c('Title', {
    attrs: {
      "padding": false
    }
  }, [_vm._v(" It's not showing anything!? ")]), _vm._ssrNode(" "), _vm._ssrNode("<p class=\"text-black/50 text-sm dark:text-white/30 mt-4\" data-v-2d295e5a>", "</p>", [_vm._ssrNode("\n            If the system isn't working or it isn't displaying anything on\n            your profile, it's most likely about you. Please check\n            "), _c('SmartLink', {
    attrs: {
      "href": "https://docs.premid.app/troubleshooting",
      "title": "PreMiD Docs",
      "blank": ""
    }
  }, [_vm._v("Troubleshooting Documentation")]), _vm._ssrNode(_vm._ssrEscape("\n            " + _vm._s("") + " and see if those steps fixes your issue. If nothing works\n            out, you can always find me on PreMiD's Discord server.\n          "))], 2)], 2)], 2)], 2)], 2)], 2);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./src/pages/projects/premid/custom-status.vue?vue&type=template&id=2d295e5a&scoped=true&

// EXTERNAL MODULE: ./node_modules/babel-loader/lib??ref--12-0!./node_modules/ts-loader??ref--12-1!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/windicss-webpack-plugin/dist/loaders/windicss-template.cjs!./src/pages/projects/premid/custom-status.vue?vue&type=script&lang=ts&
var custom_statusvue_type_script_lang_ts_ = __webpack_require__(95);

// CONCATENATED MODULE: ./src/pages/projects/premid/custom-status.vue?vue&type=script&lang=ts&
 /* harmony default export */ var premid_custom_statusvue_type_script_lang_ts_ = (custom_statusvue_type_script_lang_ts_["a" /* default */]); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./src/pages/projects/premid/custom-status.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(134)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  premid_custom_statusvue_type_script_lang_ts_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "2d295e5a",
  "61ab1ccf"
  
)

/* harmony default export */ var custom_status = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {SmartLink: __webpack_require__(16).default,BlogNotification: __webpack_require__(86).default,CardDiscord: __webpack_require__(112).default,Title: __webpack_require__(28).default,IconSync: __webpack_require__(127).default})


/***/ }),

/***/ 72:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(81);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(5).default
module.exports.__inject__ = function (context) {
  add("4955d2ac", content, true, context)
};

/***/ }),

/***/ 80:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_windicss_webpack_plugin_dist_loaders_windicss_style_pitcher_cjs_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_windicss_webpack_plugin_dist_loaders_windicss_template_cjs_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Notification_vue_vue_type_style_index_0_id_5077dfd0_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(72);
/* harmony import */ var _node_modules_windicss_webpack_plugin_dist_loaders_windicss_style_pitcher_cjs_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_windicss_webpack_plugin_dist_loaders_windicss_template_cjs_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Notification_vue_vue_type_style_index_0_id_5077dfd0_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_windicss_webpack_plugin_dist_loaders_windicss_style_pitcher_cjs_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_windicss_webpack_plugin_dist_loaders_windicss_template_cjs_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Notification_vue_vue_type_style_index_0_id_5077dfd0_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_windicss_webpack_plugin_dist_loaders_windicss_style_pitcher_cjs_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_windicss_webpack_plugin_dist_loaders_windicss_template_cjs_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Notification_vue_vue_type_style_index_0_id_5077dfd0_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_windicss_webpack_plugin_dist_loaders_windicss_style_pitcher_cjs_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_windicss_webpack_plugin_dist_loaders_windicss_template_cjs_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Notification_vue_vue_type_style_index_0_id_5077dfd0_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 81:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".notification[data-v-5077dfd0],.nuxt-content .notification[data-v-5077dfd0]{--tw-bg-opacity:1;--tw-bg-opacity:0.25;--tw-border-opacity:1;background-color:hsla(0,0%,83%,.25);background-color:rgba(212,212,212,var(--tw-bg-opacity));border-color:#e5e5e5;border-color:rgba(229,229,229,var(--tw-border-opacity));border-radius:.5rem;border-width:.1px;margin-bottom:1.25rem;margin-top:1.25rem;padding:1rem}.dark .notification[data-v-5077dfd0],.dark .nuxt-content .notification[data-v-5077dfd0]{--tw-bg-opacity:0.3;--tw-border-opacity:1;background-color:rgba(38,38,38,.3);background-color:rgba(38,38,38,var(--tw-bg-opacity));border-color:#262626;border-color:rgba(38,38,38,var(--tw-border-opacity))}.notification h1[data-v-5077dfd0],.nuxt-content .notification h1[data-v-5077dfd0]{font-size:1.125rem;font-weight:500;line-height:1.75rem;margin:0}.notification h1[data-v-5077dfd0]:hover,.nuxt-content .notification h1[data-v-5077dfd0]:hover{-webkit-text-decoration:none;text-decoration:none}.notification a[data-v-5077dfd0],.notification p[data-v-5077dfd0],.notification p strong[data-v-5077dfd0],.nuxt-content .notification a[data-v-5077dfd0],.nuxt-content .notification p[data-v-5077dfd0],.nuxt-content .notification p strong[data-v-5077dfd0]{margin:0}.dark .notification a[data-v-5077dfd0],.dark .notification p[data-v-5077dfd0],.dark .notification p strong[data-v-5077dfd0],.dark .nuxt-content .notification a[data-v-5077dfd0],.dark .nuxt-content .notification p[data-v-5077dfd0],.dark .nuxt-content .notification p strong[data-v-5077dfd0]{--tw-text-opacity:0.7;color:hsla(0,0%,100%,.7);color:rgba(255,255,255,var(--tw-text-opacity))}.notification a[data-v-5077dfd0],.nuxt-content .notification a[data-v-5077dfd0]{color:currentColor;font-weight:500;text-decoration-line:underline}.notification a[data-v-5077dfd0]:hover,.nuxt-content .notification a[data-v-5077dfd0]:hover{text-decoration-line:underline}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 84:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
const general = [{
  name: "Extreme Thinking",
  url: "https://i.imgur.com/IJbthB1.png"
}, {
  name: "Angry Stickman",
  url: "https://i.imgur.com/90lDk9T.png"
}, {
  name: "Read The Docs",
  url: "https://i.imgur.com/PvrqhRJ.png"
}, {
  name: "Please Stop",
  url: "https://i.imgur.com/qgCcDu7.png"
}, {
  name: "Brilliance",
  url: "https://i.imgur.com/skclu5h.png"
}, {
  name: "Pepe Sweat",
  url: "https://i.imgur.com/j4ip0Dx.png"
}, {
  name: "Panda Cry",
  url: "https://i.imgur.com/NFCmYsM.png"
}, {
  name: "Thinking",
  url: "https://i.imgur.com/mzlKBw3.png"
}, {
  name: "Spongery",
  url: "https://i.imgur.com/VfhmSfN.png"
}, {
  name: "Balance",
  url: "https://i.imgur.com/v0jG4vt.png"
}, {
  name: "Bravery",
  url: "https://i.imgur.com/etvIz6E.png"
}, {
  name: "Playing",
  url: "https://i.imgur.com/UHgwoyQ.png"
}, {
  name: "Reading",
  url: "https://i.imgur.com/tbSYfJV.png"
}, {
  name: "Popcorn",
  url: "https://i.imgur.com/dQ4EOWV.png"
}, {
  name: "Windows",
  url: "https://i.imgur.com/YkOU4HD.png"
}, {
  name: "Mobile",
  url: "https://i.imgur.com/BhBThRQ.png"
}, {
  name: "Paused",
  url: "https://i.imgur.com/TYvgF3M.png"
}, {
  name: "Search",
  url: "https://i.imgur.com/hnDIQO1.png"
}, {
  name: "Please",
  url: "https://i.imgur.com/Zp835mC.png"
}, {
  name: "Sadcat",
  url: "https://i.imgur.com/IaSeSJk.png"
}, {
  name: "Coffee",
  url: "https://i.imgur.com/W5NIvJF.png"
}, {
  name: "Doubt",
  url: "https://i.imgur.com/kYKE2rI.png"
}, {
  name: "Relax",
  url: "https://i.imgur.com/BaOQ4I8.png"
}, {
  name: "Smart",
  url: "https://i.imgur.com/vKhMs2R.png"
}, {
  name: "Heart",
  url: "https://i.imgur.com/jtt9fjf.png"
}, {
  name: "Shrug",
  url: "https://i.imgur.com/UnzU96q.png"
}, {
  name: "Mmlol",
  url: "https://i.imgur.com/5t2q2eu.png"
}, {
  name: "Linux",
  url: "https://i.imgur.com/bN5rmiU.png"
}, {
  name: "Live",
  url: "https://i.imgur.com/qphbAuR.png"
}, {
  name: "Cool",
  url: "https://i.imgur.com/AdUBBHa.png"
}, {
  name: "Eyes",
  url: "https://i.imgur.com/lIa90i4.png"
}, {
  name: "Ohno",
  url: "https://i.imgur.com/7EkHsMr.png"
}, {
  name: "Tada",
  url: "https://i.imgur.com/nO8fd9v.png"
}, {
  name: "ESL",
  url: "https://i.imgur.com/F51eSEx.png"
}];
const brand = [{
  name: "Facebook",
  url: "https://i.imgur.com/5Aab3v6.png"
}, {
  name: "Instagram",
  url: "https://i.imgur.com/1c5yuiD.png"
}, {
  name: "YouTube",
  url: "https://i.imgur.com/0Bvl6BU.png"
}, {
  name: "YouTube Dark",
  url: "https://i.imgur.com/mQQO1nv.jpg"
}, {
  name: "Netflix",
  url: "https://i.imgur.com/DkZQvkC.png"
}, {
  name: "Twitter",
  url: "https://i.imgur.com/AtV70mE.png"
}, {
  name: "Twitch",
  url: "https://i.imgur.com/bmIsItf.png"
}, {
  name: "Discord",
  url: "https://i.imgur.com/P6fs8jR.png"
}, {
  name: "Discord Templates",
  url: "https://i.imgur.com/zqdRKw4.png"
}];
/* Exports */
/* harmony default export */ __webpack_exports__["a"] = ([{
  name: "General",
  items: general
}, {
  name: "Brand",
  items: brand
}]);

/***/ }),

/***/ 85:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
const general = [{
  name: "DoNotDisturb",
  url: "https://i.imgur.com/MvrnrMW.png"
}, {
  name: "Brilliance",
  url: "https://i.imgur.com/skclu5h.png"
}, {
  name: "VideoCall",
  url: "https://i.imgur.com/GwMdYmz.png"
}, {
  name: "Checkmark",
  url: "https://i.imgur.com/FH7OH6y.png"
}, {
  name: "Thinking",
  url: "https://i.imgur.com/mzlKBw3.png"
}, {
  name: "Windows",
  url: "https://i.imgur.com/YkOU4HD.png"
}, {
  name: "NoEntry",
  url: "https://i.imgur.com/jVidfcx.png"
}, {
  name: "Balance",
  url: "https://i.imgur.com/v0jG4vt.png"
}, {
  name: "Bravery",
  url: "https://i.imgur.com/etvIz6E.png"
}, {
  name: "Playing",
  url: "https://i.imgur.com/UHgwoyQ.png"
}, {
  name: "Writing",
  url: "https://i.imgur.com/4VcqgYA.png"
}, {
  name: "Reading",
  url: "https://i.imgur.com/tbSYfJV.png"
}, {
  name: "Coffee",
  url: "https://i.imgur.com/W5NIvJF.png"
}, {
  name: "Online",
  url: "https://i.imgur.com/8cel80u.png"
}, {
  name: "Please",
  url: "https://i.imgur.com/d10KCzD.png"
}, {
  name: "Paused",
  url: "https://i.imgur.com/TYvgF3M.png"
}, {
  name: "Search",
  url: "https://i.imgur.com/hnDIQO1.png"
}, {
  name: "Mmlol",
  url: "https://i.imgur.com/5t2q2eu.png"
}, {
  name: "Heart",
  url: "https://i.imgur.com/jtt9fjf.png"
}, {
  name: "Linux",
  url: "https://i.imgur.com/bN5rmiU.png"
}, {
  name: "Live",
  url: "https://i.imgur.com/qphbAuR.png"
}, {
  name: "Call",
  url: "https://i.imgur.com/0akjqyz.png"
}, {
  name: "Idle",
  url: "https://i.imgur.com/mKIQ8Zo.png"
}, {
  name: "Cool",
  url: "https://i.imgur.com/AdUBBHa.png"
}, {
  name: "Tada",
  url: "https://i.imgur.com/nO8fd9v.png"
}];
const brand = [{
  name: "YouTube",
  url: "https://i.imgur.com/0Bvl6BU.png"
}, {
  name: "YouTube Dark",
  url: "https://i.imgur.com/mQQO1nv.jpg"
}, {
  name: "Netflix",
  url: "https://i.imgur.com/DkZQvkC.png"
}, {
  name: "Twitter",
  url: "https://i.imgur.com/AtV70mE.png"
}, {
  name: "Twitch",
  url: "https://i.imgur.com/bmIsItf.png"
}, {
  name: "Discord",
  url: "https://i.imgur.com/P6fs8jR.png"
}];
/* Exports */
/* harmony default export */ __webpack_exports__["a"] = ([{
  name: "General",
  items: general
}, {
  name: "Brand",
  items: brand
}]);

/***/ }),

/***/ 86:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/windicss-webpack-plugin/dist/loaders/windicss-template.cjs!./src/components/Blog/Notification.vue?vue&type=template&id=5077dfd0&scoped=true&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c,
    _setup = _vm._self._setupProxy;
  return _c('div', {
    staticClass: "notification flex flex-col md:items-center md:flex-row gap-x-4 gap-y-2",
    class: _vm.type
  }, [_vm._ssrNode("<span class=\"text-xl md:text-lg\" data-v-5077dfd0>" + _vm._ssrEscape(_vm._s(_vm.getIcon)) + "</span> "), _vm._ssrNode("<div data-v-5077dfd0>", "</div>", [_vm._ssrNode((_vm.title ? "<h1 data-v-5077dfd0>" + _vm._ssrEscape(_vm._s(_vm.title)) + "</h1>" : "<!---->") + " "), !!_vm.$slots.default ? _vm._ssrNode("<p data-v-5077dfd0>", "</p>", [_vm._t("default")], 2) : _vm._e()], 2)], 2);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./src/components/Blog/Notification.vue?vue&type=template&id=5077dfd0&scoped=true&

// EXTERNAL MODULE: external "vue"
var external_vue_ = __webpack_require__(0);
var external_vue_default = /*#__PURE__*/__webpack_require__.n(external_vue_);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--12-0!./node_modules/ts-loader??ref--12-1!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/windicss-webpack-plugin/dist/loaders/windicss-template.cjs!./src/components/Blog/Notification.vue?vue&type=script&lang=ts&

/* harmony default export */ var Notificationvue_type_script_lang_ts_ = (external_vue_default.a.extend({
  props: {
    type: {
      type: String,
      required: false,
      default: "information"
    },
    title: {
      type: String,
      required: false,
      default: ""
    }
  },
  computed: {
    getIcon() {
      if (this.type === "warning") return "❗️";else if (this.type === "danger") return "🚨";else if (this.type === "success") return "✅";else return "💡";
    }
  }
}));
// CONCATENATED MODULE: ./src/components/Blog/Notification.vue?vue&type=script&lang=ts&
 /* harmony default export */ var Blog_Notificationvue_type_script_lang_ts_ = (Notificationvue_type_script_lang_ts_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./src/components/Blog/Notification.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(80)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  Blog_Notificationvue_type_script_lang_ts_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "5077dfd0",
  "4ad523c1"
  
)

/* harmony default export */ var Notification = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 95:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(URL) {/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _assets_files_premid_largeImages__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(84);
/* harmony import */ var _assets_files_premid_smallImages__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(85);

/* Import image lists */


/* harmony default export */ __webpack_exports__["a"] = (vue__WEBPACK_IMPORTED_MODULE_0___default.a.extend({
  data() {
    return {
      customLargeImage: false,
      customSmallImage: false,
      observer: null,
      presenceChecked: false,
      presence: {
        installed: true,
        largeImageKey: "PreMiD",
        smallImageKey: "None",
        smallImageText: "",
        details: "",
        state: "",
        buttons: [{
          label: "",
          url: ""
        }, {
          label: "",
          url: ""
        }],
        timestamp: {
          start: {
            enabled: false,
            value: null
          },
          end: {
            enabled: false,
            value: null
          }
        }
      }
    };
  },
  head() {
    const title = "PreMiD Custom Status";
    const image = "https://i.imgur.com/CuVtvKW.png";
    const description = "Tool that allows you do display whatever you want on your Discord profile with PreMiD! Easy and free!";
    return {
      title: "Custom Status",
      meta: this.$prepareMeta({
        title,
        description,
        image,
        keywords: "premid, custom, status",
        url: "https://eggsy.xyz/projects/premid/custom-status"
      }),
      link: [{
        rel: "canonical",
        href: "https://eggsy.xyz/projects/premid/custom-status"
      }, {
        rel: "prefetch",
        href: image
      }]
    };
  },
  computed: {
    /**
     * Formats image names, adds spaces and returns all in a single object.
     * @returns {{ large: ImageCategory[], small: ImageCategory[]}} An object with large and small image array.
     */
    getImages() {
      return {
        large: _assets_files_premid_largeImages__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"],
        small: _assets_files_premid_smallImages__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"]
      };
    },
    /**
     * Checks if any of the buttons have label and returns each that has.
     * @returns {object[]} Buttons array.
     */
    getButtons() {
      const firstButton = this.presence.buttons[0];
      const secondButton = this.presence.buttons[1];
      const isFirstButton = (firstButton === null || firstButton === void 0 ? void 0 : firstButton.label) && (firstButton === null || firstButton === void 0 ? void 0 : firstButton.url);
      const isSecondButton = (secondButton === null || secondButton === void 0 ? void 0 : secondButton.label) && (secondButton === null || secondButton === void 0 ? void 0 : secondButton.url);
      if (!isFirstButton && !isSecondButton) return [];
      const isUrl = {
        first: false,
        second: false
      };
      try {
        if (isFirstButton) isUrl.first = !!new URL(firstButton === null || firstButton === void 0 ? void 0 : firstButton.url);
      } catch (_) {}
      try {
        if (isSecondButton) isUrl.second = !!new URL(secondButton === null || secondButton === void 0 ? void 0 : secondButton.url);
      } catch (_) {}
      const buttonsArray = [];
      if (isFirstButton && isUrl.first) buttonsArray.push({
        label: firstButton.label.slice(0, 30),
        url: firstButton.url
      });
      if (isSecondButton && isUrl.second) buttonsArray.push({
        label: secondButton.label.slice(0, 30),
        url: secondButton.url
      });
      return buttonsArray;
    },
    /**
     * Checks for everything and appends data to Vue, then renders it in template.
     * @returns {Object|String} An empty object or stringified Discord readable object.
     */
    getPresenceData() {
      var _a, _b, _c, _d, _e, _f, _g, _h;
      const data = this.presence;
      const timestamps = data.timestamp;
      const object = {};
      /* Large and small image */
      if (data.largeImageKey) object.largeImageKey = data.largeImageKey;else object.largeImageKey = "premid";
      if (data.smallImageKey) object.smallImageKey = data.smallImageKey;
      if (data.smallImageKey && data.smallImageText) object.smallImageText = data.smallImageText;
      /*  Replace spaces and force lowercase */
      object.largeImageKey = (_a = object.largeImageKey) === null || _a === void 0 ? void 0 : _a.replace(/\s/g, "");
      object.smallImageKey = (_b = object.smallImageKey) === null || _b === void 0 ? void 0 : _b.replace(/\s/g, "");
      /* Force lowercase unless it's set to a custom url */
      if (!this.customLargeImage) object.largeImageKey = (_c = object.largeImageKey) === null || _c === void 0 ? void 0 : _c.toLowerCase();
      if (!this.customSmallImage) object.smallImageKey = (_d = object.smallImageKey) === null || _d === void 0 ? void 0 : _d.toLowerCase();
      /* Details and state */
      if (data.details) object.details = data.details;
      if (data.state) object.state = data.state;
      /* Timestamps */
      if (timestamps.start.enabled && timestamps.start.value) {
        object.startTimestamp = timestamps.start.value;
      } else if (timestamps.end.enabled && timestamps.end.value) {
        object.endTimestamp = this.$moment(timestamps.end.value, "HH:mm").valueOf();
      }
      /* Buttons */
      if (this.getButtons.length > 0) {
        object.buttons = [];
        if (((_e = this.getButtons[0]) === null || _e === void 0 ? void 0 : _e.label) && ((_f = this.getButtons[0]) === null || _f === void 0 ? void 0 : _f.url)) object.buttons.push({
          label: this.getButtons[0].label,
          url: this.getButtons[0].url
        });
        if (((_g = this.getButtons[1]) === null || _g === void 0 ? void 0 : _g.label) && ((_h = this.getButtons[1]) === null || _h === void 0 ? void 0 : _h.url)) object.buttons.push({
          label: this.getButtons[1].label,
          url: this.getButtons[1].url
        });
      }
      // Have to change at least one value because Discord doesn't re-render the data on timestamp changes
      object.smallImageText = data.smallImageText || "NULL";
      if (object.smallImageText === "NULL") delete object.smallImageText;
      if (Object.keys(object).length < 1) return {};else return JSON.stringify(object);
    }
  },
  watch: {
    presence: {
      deep: true,
      immediate: false,
      handler() {
        if (this.presenceChecked === true) {
          localStorage.setItem("presenceData", JSON.stringify({
            customLargeImage: this.customLargeImage,
            customSmallImage: this.customSmallImage,
            presence: this.presence
          }));
        }
      }
    }
  },
  beforeDestroy() {
    var _a;
    (_a = this.observer) === null || _a === void 0 ? void 0 : _a.disconnect();
  },
  mounted() {
    this.setupMutationObserver();
    this.setSavedData();
  },
  methods: {
    /**
     * Checks if there's a saved data in localStorage and sets it to the Vue data.
     */
    setSavedData() {
      const data = localStorage.getItem("presenceData");
      if (!data) {
        this.presenceChecked = true;
      } else {
        const jsonData = JSON.parse(data);
        // Delete saved data if it's from the previous version
        if (!(jsonData === null || jsonData === void 0 ? void 0 : jsonData.presence)) return localStorage.removeItem("presenceData");
        const timestamps = jsonData.presence.timestamp;
        this.customLargeImage = jsonData.customLargeImage;
        this.customSmallImage = jsonData.customSmallImage;
        this.presence = {
          ...jsonData.presence,
          timestamp: {
            start: {
              enabled: timestamps.start.enabled,
              value: timestamps.start.enabled ? Date.now() : null
            },
            end: {
              enabled: false,
              value: null
            }
          }
        };
        this.presenceChecked = true;
      }
    },
    toggleCustomImage(type) {
      if (type === "large") {
        this.presence.largeImageKey = this.customLargeImage ? "PreMiD" : "";
        this.customLargeImage = !this.customLargeImage;
      } else {
        this.presence.smallImageKey = this.customSmallImage ? "None" : "";
        this.customSmallImage = !this.customSmallImage;
      }
    },
    /**
     * Turns on and off a timestamp value.
     * @param {elapsed|left} option
     */
    toggleTimestamp(option) {
      const start = this.presence.timestamp.start;
      const end = this.presence.timestamp.end;
      if (option === "elapsed") {
        if (start.enabled === false) {
          end.enabled = false;
          start.value = new Date().getTime();
          start.enabled = true;
          this.presence.smallImageText = this.presence.smallImageText || null;
        } else {
          start.value = null;
          start.enabled = false;
        }
      } else if (option === "left" && end.enabled === true) {
        end.enabled = false;
        end.value = null;
        end.enabled = !end.enabled;
      }
    },
    /**
     * Gets called when end timestamp value is changed.
     */
    endTimestampChange() {
      this.presence.timestamp.start.enabled = false;
      this.presence.timestamp.start.value = null;
      this.presence.timestamp.end.enabled = true;
    },
    /**
     * Creates a mutation observer that looks for the changes in #__nuxt, which gets mutated by PreMiD Presence to detect if presence is added.
     */
    setupMutationObserver() {
      var _a;
      const target = document.getElementById("__nuxt");
      let currentState = (_a = target === null || target === void 0 ? void 0 : target.classList) === null || _a === void 0 ? void 0 : _a.contains("presence");
      // Return if it was already set, no need an observer
      if (currentState) return;else this.presence.installed = false;
      this.observer = new MutationObserver(mutations => {
        mutations.forEach(mutation => {
          var _a;
          if (mutation.attributeName !== "class") return;
          const mutTarget = mutation.target;
          const newClassState = mutTarget === null || mutTarget === void 0 ? void 0 : mutTarget.classList.contains("presence");
          if (currentState !== newClassState) {
            currentState = newClassState;
            this.presence.installed = newClassState || false;
            if (this.presence.installed === true) (_a = this.observer) === null || _a === void 0 ? void 0 : _a.disconnect();
          }
        });
      });
      this.observer.observe(target, {
        attributes: true
      });
    }
  }
}));
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(17)["URL"]))

/***/ })

};;
//# sourceMappingURL=custom-status.js.map