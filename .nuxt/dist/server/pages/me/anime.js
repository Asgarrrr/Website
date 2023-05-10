exports.ids = [73,0,12,26,37,45,60,61,62,63,64,65];
exports.modules = {

/***/ 116:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/windicss-webpack-plugin/dist/loaders/windicss-template.cjs!./src/components/Loaders/Songs.vue?vue&type=template&id=2eb295d6&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('main', {
    staticClass: "space-y-20"
  }, [_vm._ssrNode("<div>", "</div>", [_c('Title', {
    staticClass: "mb-4"
  }, [_vm._v("Details")]), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"grid gap-x-0 gap-y-4 md:gap-x-12 md:grid-cols-2\">", "</div>", [_vm._ssrNode("<div class=\"flex space-x-4 items-center\">", "</div>", [_vm._ssrNode("<span>Profile</span> "), _vm._ssrNode("<div class=\"flex space-x-2 w-full justify-end items-center\">", "</div>", [_c('SkeletonLoader', {
    staticClass: "h-5 w-1/2"
  }), _vm._ssrNode(" "), _c('SkeletonLoader', {
    staticClass: "h-6 w-6 !rounded-full"
  })], 2)], 2), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"flex space-x-4 items-center justify-between\">", "</div>", [_vm._ssrNode("<span class=\"flex-shrink-0\">Total Plays</span> "), _vm._ssrNode("<div class=\"flex space-x-2 w-full justify-end items-center\">", "</div>", [_c('SkeletonLoader', {
    staticClass: "h-5 w-1/3"
  }), _vm._ssrNode(" "), _c('SkeletonLoader', {
    staticClass: "h-6 w-6 !rounded-full"
  })], 2)], 2), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"flex space-x-4 items-center justify-between\">", "</div>", [_vm._ssrNode("<span class=\"flex-shrink-0\">Account Age</span> "), _vm._ssrNode("<div class=\"flex space-x-2 w-full justify-end items-center\">", "</div>", [_c('SkeletonLoader', {
    staticClass: "h-5 w-1/4"
  }), _vm._ssrNode(" "), _c('SkeletonLoader', {
    staticClass: "h-6 w-6 !rounded-full"
  })], 2)], 2)], 2)], 2), _vm._ssrNode(" "), _vm._ssrNode("<div>", "</div>", [_c('Title', {
    staticClass: "mb-4"
  }, [_vm._v("Top Songs (last 7 days)")]), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"grid gap-2 md:grid-cols-2\">", "</div>", _vm._l(6, function (top) {
    return _c('SkeletonLoader', {
      key: top,
      attrs: {
        "type": "lastfm"
      }
    });
  }), 1)], 2), _vm._ssrNode(" "), _vm._ssrNode("<div>", "</div>", [_c('Title', {
    staticClass: "mb-4"
  }, [_vm._v("Top Artists (last 7 days)")]), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"grid gap-2 md:grid-cols-2\">", "</div>", _vm._l(4, function (top) {
    return _c('SkeletonLoader', {
      key: top,
      attrs: {
        "type": "lastfm"
      }
    });
  }), 1)], 2), _vm._ssrNode(" "), _vm._ssrNode("<div>", "</div>", [_c('Title', {
    staticClass: "mb-4"
  }, [_vm._v("Recent Songs")]), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"grid gap-2 md:grid-cols-2\">", "</div>", _vm._l(15, function (recent) {
    return _c('SkeletonLoader', {
      key: recent,
      attrs: {
        "type": "lastfm"
      }
    });
  }), 1)], 2)], 2);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./src/components/Loaders/Songs.vue?vue&type=template&id=2eb295d6&

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./src/components/Loaders/Songs.vue

var script = {}


/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  script,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "6a2ecdfe"
  
)

/* harmony default export */ var Songs = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {Title: __webpack_require__(27).default,SkeletonLoader: __webpack_require__(70).default})


/***/ }),

/***/ 139:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/windicss-webpack-plugin/dist/loaders/windicss-template.cjs!./src/pages/me/anime.vue?vue&type=template&id=2a74b9ae&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c,
    _setup = _vm._self._setupProxy;
  return _c('PageLayout', {
    staticClass: "space-y-12",
    attrs: {
      "title": "Anime",
      "description": "Anime that I recently watched and my personal notes about them."
    }
  }, [_c('section', [_c('Title', {
    staticClass: "mb-1"
  }, [_vm._v("Note")]), _vm._v(" "), _c('p', {
    staticClass: "text-lg text-justify"
  }, [_vm._v("\n      Animes are often wrongly perceived as exclusively meant for children.\n      However, this notion is far from the truth. Animes tackle a multitude\n      of complex subjects such as politics, psychology, interpersonal relationships,\n      and moral dilemmas. Moreover, they often explore mature themes including violence,\n      sexuality, and existential questions. Animes offer a wide variety of genres and\n      artistic styles, catering to a broad audience and catering to individual preferences.\n      They can be profound, emotionally moving, intellectually stimulating, and captivating,\n      providing a rich and intricate narrative experience. Therefore, animes are a medium\n      that can be appreciated and enjoyed by viewers of all ages, transcending the boundaries\n      of childhood to offer a genuine form of artistic expression.\n    ")])], 1), _vm._v(" "), _vm.$fetchState.pending === true || _vm.$fetchState.error !== null ? _c('LoadersSongs') : [_c('section', [_c('Title', {
    staticClass: "mb-4"
  }, [_vm._v("Details")]), _vm._v(" "), _c('div', {
    staticClass: "grid gap-x-0 gap-y-4 md:gap-x-12 md:grid-cols-2"
  }, [_c('div', {
    staticClass: "flex space-x-4 items-center justify-between"
  }, [_c('span', [_vm._v("Profile")]), _vm._v(" "), _c('div', {
    staticClass: "flex space-x-2 items-center"
  }, [_c('SmartLink', {
    staticClass: "flex-shrink-0",
    attrs: {
      "href": "https://last.fm/user/eggsywashere",
      "blank": ""
    }
  }, [_vm._v("@" + _vm._s(_vm.lastFm.user.name))]), _vm._v(" "), _c('SmartImage', {
    staticClass: "rounded-full h-6 w-6",
    attrs: {
      "src": _vm.lastFm.user.image
    }
  })], 1)]), _vm._v(" "), _c('div', {
    staticClass: "flex space-x-4 items-center justify-between"
  }, [_c('span', {
    staticClass: "flex-shrink-0"
  }, [_vm._v("Total Plays")]), _vm._v(" "), _c('div', {
    staticClass: "flex space-x-2 items-center"
  }, [_c('div', {
    staticClass: "truncate"
  }, [_vm._v(_vm._s(_vm.lastFm.user.totalPlays))]), _vm._v(" "), _c('IconFire', {
    staticClass: "h-6 text-red-700 w-6 dark:text-current",
    attrs: {
      "filled": ""
    }
  })], 1)]), _vm._v(" "), _c('div', {
    staticClass: "flex space-x-4 items-center justify-between"
  }, [_c('span', {
    staticClass: "flex-shrink-0"
  }, [_vm._v("Account Age")]), _vm._v(" "), _c('div', {
    staticClass: "flex space-x-2 items-center"
  }, [_c('div', {
    staticClass: "truncate"
  }, [_vm._v("\n              " + _vm._s(new Date().getFullYear() - new Date(_vm.lastFm.user.registered * 1000).getFullYear()) + "\n\n              year(s)\n            ")]), _vm._v(" "), _c('IconCalendar', {
    staticClass: "h-6 w-6"
  })], 1)])])], 1), _vm._v(" "), _c('section', {
    attrs: {
      "id": "top-songs"
    }
  }, [_c('Title', {
    staticClass: "mb-4"
  }, [_vm._v("Top Songs (last 7 days)")]), _vm._v(" "), _c('div', {
    staticClass: "grid gap-x-4 gap-y-2 md:grid-cols-2"
  }, _vm._l(_vm.lastFm.topTracks, function (song) {
    return _c('CardLastFm', {
      key: song.name,
      attrs: {
        "name": song.name,
        "artist": song.artist,
        "image": song.image,
        "now-playing": song.nowPlaying,
        "plays": song.plays,
        "url": song.url
      }
    });
  }), 1)], 1), _vm._v(" "), _c('section', {
    attrs: {
      "id": "top-artists"
    }
  }, [_c('Title', {
    staticClass: "mb-4"
  }, [_vm._v("Top Artists (last 7 days)")]), _vm._v(" "), _c('div', {
    staticClass: "grid gap-x-4 gap-y-2 md:grid-cols-2"
  }, _vm._l(_vm.lastFm.topArtists, function (artist) {
    return _c('CardLastFm', {
      key: artist.name,
      attrs: {
        "name": artist.name,
        "plays": artist.plays,
        "image": artist.image,
        "url": artist.url
      }
    });
  }), 1)], 1), _vm._v(" "), _c('section', {
    attrs: {
      "id": "recent"
    }
  }, [_c('Title', {
    staticClass: "mb-4"
  }, [_vm._v("Recent Songs")]), _vm._v(" "), _c('div', {
    staticClass: "grid gap-x-4 gap-y-2 md:grid-cols-2"
  }, _vm._l(_vm.lastFm.recentTracks, function (song) {
    return _c('CardLastFm', {
      key: song.name,
      attrs: {
        "name": song.name,
        "artist": song.artist,
        "image": song.image,
        "now-playing": song.nowPlaying,
        "url": song.url
      }
    });
  }), 1)], 1)]], 2);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./src/pages/me/anime.vue?vue&type=template&id=2a74b9ae&

// EXTERNAL MODULE: external "vue"
var external_vue_ = __webpack_require__(0);
var external_vue_default = /*#__PURE__*/__webpack_require__.n(external_vue_);

// EXTERNAL MODULE: ./src/components/Title.vue + 4 modules
var Title = __webpack_require__(27);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--12-0!./node_modules/ts-loader??ref--12-1!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/windicss-webpack-plugin/dist/loaders/windicss-template.cjs!./src/pages/me/anime.vue?vue&type=script&lang=ts&


/* harmony default export */ var animevue_type_script_lang_ts_ = (external_vue_default.a.extend({
  components: {
    Title: Title["default"]
  },
  data() {
    return {
      lastFm: {}
    };
  },
  fetchOnServer: false,
  async fetch() {
    const repos = (await this.$axios.get("https://myanimelist.net/animelist/Asgarrrr/load.json", {
      headers: {
        "accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7",
        "accept-language": "fr-FR,fr;q=0.9,en-US;q=0.8,en;q=0.7",
        "cache-control": "no-cache",
        "pragma": "no-cache",
        "sec-ch-ua": "\"Chromium\";v=\"112\", \"Google Chrome\";v=\"112\", \"Not:A-Brand\";v=\"99\"",
        "sec-ch-ua-mobile": "?0",
        "sec-ch-ua-platform": "\"Windows\"",
        "sec-fetch-dest": "document",
        "sec-fetch-mode": "navigate",
        "sec-fetch-site": "none",
        "sec-fetch-user": "?1",
        "upgrade-insecure-requests": "1",
        "Access-Control-Allow-Origin": "*"
      }
    })).data;
    console.log(repos);
    const url =  true ? "https://eggsy.xyz/.netlify/functions/getLastFmSongs" : undefined;
    const {
      data: songs
    } = await this.$axios(url);
    this.lastFm = anime;
  },
  head() {
    const title = "Anime";
    const description = "Anime that I recently watched and the anime that I watched most as well as some more information from MyAnimeList, all of that information is on this page!";
    // "Songs that I recently listened and the songs that I listened most as well as some more information from Last.fm, all of that information is on this page!"
    return {
      title,
      meta: this.$prepareMeta({
        title,
        description
      })
    };
  }
}));
// CONCATENATED MODULE: ./src/pages/me/anime.vue?vue&type=script&lang=ts&
 /* harmony default export */ var me_animevue_type_script_lang_ts_ = (animevue_type_script_lang_ts_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./src/pages/me/anime.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  me_animevue_type_script_lang_ts_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "1ab77f6a"
  
)

/* harmony default export */ var me_anime = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {Title: __webpack_require__(27).default,LoadersSongs: __webpack_require__(116).default,SmartLink: __webpack_require__(16).default,SmartImage: __webpack_require__(26).default,IconFire: __webpack_require__(84).default,IconCalendar: __webpack_require__(85).default,CardLastFm: __webpack_require__(89).default,PageLayout: __webpack_require__(76).default})


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
installComponents(component, {SkeletonLoaderRepository: __webpack_require__(72).default,SkeletonLoaderIframe: __webpack_require__(71).default,SkeletonLoaderSong: __webpack_require__(73).default,SkeletonLoaderLastfm: __webpack_require__(75).default,SkeletonLoaderSpinner: __webpack_require__(74).default})


/***/ }),

/***/ 71:
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

/***/ 72:
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

/***/ 73:
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

/***/ 74:
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

/***/ 75:
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

/***/ 76:
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
  "90445ee6"
  
)

/* harmony default export */ var PageLayout = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 84:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/windicss-webpack-plugin/dist/loaders/windicss-template.cjs!./src/components/Icon/Fire.vue?vue&type=template&id=39e81928&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('svg', {
    attrs: {
      "xmlns": "http://www.w3.org/2000/svg",
      "viewBox": "0 0 20 20",
      "fill": "currentColor"
    }
  }, [_vm._ssrNode("<path fill-rule=\"evenodd\" d=\"M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z\" clip-rule=\"evenodd\"></path>")]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./src/components/Icon/Fire.vue?vue&type=template&id=39e81928&

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./src/components/Icon/Fire.vue

var script = {}


/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  script,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "675e0695"
  
)

/* harmony default export */ var Fire = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 85:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/windicss-webpack-plugin/dist/loaders/windicss-template.cjs!./src/components/Icon/Calendar.vue?vue&type=template&id=18e1b972&
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
  }, [_vm._ssrNode("<path stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z\"></path>")]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./src/components/Icon/Calendar.vue?vue&type=template&id=18e1b972&

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./src/components/Icon/Calendar.vue

var script = {}


/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  script,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "e818e7c6"
  
)

/* harmony default export */ var Calendar = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 86:
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

/***/ 89:
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
installComponents(component, {SmartImage: __webpack_require__(26).default,IconPlay: __webpack_require__(86).default,SmartLink: __webpack_require__(16).default})


/***/ })

};;
//# sourceMappingURL=anime.js.map