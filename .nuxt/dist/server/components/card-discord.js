exports.ids = [11];
exports.modules = {

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

/***/ })

};;
//# sourceMappingURL=card-discord.js.map