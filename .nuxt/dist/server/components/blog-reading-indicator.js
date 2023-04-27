exports.ids = [6];
exports.modules = {

/***/ 115:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/windicss-webpack-plugin/dist/loaders/windicss-template.cjs!./src/components/Blog/ReadingIndicator.vue?vue&type=template&id=48e20e52&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c,
    _setup = _vm._self._setupProxy;
  return _c('transition', {
    attrs: {
      "name": "fade"
    }
  }, [_c('div', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: _vm.isElementVisible,
      expression: "isElementVisible"
    }, {
      name: "tippy",
      rawName: "v-tippy",
      value: {
        content: _vm.getPercentLeftBottom === 100 ? 'Tüm yazı okundu!' : 'Okuma oranı'
      },
      expression: "{\n      content:\n        getPercentLeftBottom === 100 ? 'Tüm yazı okundu!' : 'Okuma oranı',\n    }"
    }]
  }, [_c('div', {
    staticClass: "rounded-md bg-gray-200 h-40 w-4 hidden relative md:block dark:bg-neutral-800"
  }, [_c('div', {
    staticClass: "rounded-md inset-x-0 transition bottom-0 absolute",
    class: {
      'bg-green-500': _vm.getPercentLeftBottom === 100,
      'bg-gray-300 dark:bg-neutral-600': _vm.getPercentLeftBottom < 100
    },
    style: {
      height: `${_vm.getPercentLeftBottom}%`
    }
  })])])]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./src/components/Blog/ReadingIndicator.vue?vue&type=template&id=48e20e52&

// EXTERNAL MODULE: external "vue"
var external_vue_ = __webpack_require__(0);
var external_vue_default = /*#__PURE__*/__webpack_require__.n(external_vue_);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--12-0!./node_modules/ts-loader??ref--12-1!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/windicss-webpack-plugin/dist/loaders/windicss-template.cjs!./src/components/Blog/ReadingIndicator.vue?vue&type=script&lang=ts&

/* harmony default export */ var ReadingIndicatorvue_type_script_lang_ts_ = (external_vue_default.a.extend({
  props: {
    selector: {
      type: String,
      required: true,
      default: null
    }
  },
  data() {
    return {
      el: null,
      scrollY: 0,
      rect: {
        top: 0,
        bottom: 0
      },
      window: {
        height: 0,
        width: 0
      }
    };
  },
  computed: {
    /**
     * Calculates the position of the element and returns percentage value.
     */
    getPercentLeftBottom() {
      const {
        top,
        bottom
      } = this.rect;
      const percent = Math.round((top - this.window.height) / (top - bottom) * 100);
      return percent > 100 ? 100 : percent;
    },
    /**
     * Checks if the position is higher than a specific number and returns a boolean value.
     */
    isElementVisible() {
      return this.scrollY > 175;
    }
  },
  mounted() {
    // Find element in the document and set if exists
    const element = document.querySelector(this.selector);
    if (element) this.el = element;else return;
    // Set window dimensions
    const {
      innerHeight,
      innerWidth
    } = window;
    this.window = {
      height: innerHeight,
      width: innerWidth
    };
    // Add scroll event to update positions
    window.addEventListener("scroll", this.handleScroll);
  },
  beforeDestroy() {
    // Remove scroll event before changing the page
    window.removeEventListener("scroll", this.handleScroll);
  },
  methods: {
    handleScroll() {
      var _a;
      // Set currenc scroll position
      this.scrollY = window.scrollY;
      // Set window height and width
      const {
        innerHeight,
        innerWidth
      } = window;
      this.window = {
        height: innerHeight,
        width: innerWidth
      };
      // Get element's position
      const {
        top,
        bottom
      } = ((_a = this.el) === null || _a === void 0 ? void 0 : _a.getBoundingClientRect()) || {};
      // Save element's position to Vue data
      if (!top || !bottom) return;
      this.rect = {
        top,
        bottom
      };
    }
  }
}));
// CONCATENATED MODULE: ./src/components/Blog/ReadingIndicator.vue?vue&type=script&lang=ts&
 /* harmony default export */ var Blog_ReadingIndicatorvue_type_script_lang_ts_ = (ReadingIndicatorvue_type_script_lang_ts_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./src/components/Blog/ReadingIndicator.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  Blog_ReadingIndicatorvue_type_script_lang_ts_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "472f068e"
  
)

/* harmony default export */ var ReadingIndicator = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=blog-reading-indicator.js.map