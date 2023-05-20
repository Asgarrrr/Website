exports.ids = [77,12,45,61,66];
exports.modules = {

/***/ 142:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/windicss-webpack-plugin/dist/loaders/windicss-template.cjs!./src/pages/projects/rogue/index.vue?vue&type=template&id=6a4ec862&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c,
    _setup = _vm._self._setupProxy;
  return _c('PageLayout', {
    staticClass: "space-y-12",
    attrs: {
      "title": "Rogue",
      "description": "A Javascript dungeon crawler and roguelike-style game where you explore a procedurally generated dungeon"
    }
  }, [_c('SmartFigure', {
    attrs: {
      "src": _vm.images[0],
      "border": "",
      "caption": "Yep, currently the game is only a 2D dungeon crawler with a few enemies and items"
    }
  }), _vm._v(" "), _c('section', {
    staticClass: "space-y-4"
  }, [_c('Title', {
    attrs: {
      "size": "2"
    }
  }, [_vm._v(" Technologies used ")]), _vm._v(" "), _c('div', {
    staticClass: "flex flex-wrap gap-2"
  }, _vm._l(_vm.languages, function (l, i) {
    return _c('span', {
      key: `language-${i}`,
      staticClass: "px-2 py-1 text-sm font-medium text-white rounded bg-neutral-900"
    }, [_vm._v("\n          " + _vm._s(l) + "\n        ")]);
  }), 0), _vm._v(" "), _c('Title', {
    staticClass: "mt-24",
    attrs: {
      "size": "2"
    }
  }, [_vm._v(" Role ")]), _vm._v(" "), _c('p', {
    staticClass: "dark:text-white/70 ml-2"
  }, [_vm._v("\n        Developer "), _c('span', {
    staticClass: "mx-2"
  }, [_vm._v("—")]), _vm._v(" I created the game from scratch, using the technologies listed above. Assets were created by\n        "), _c('a', {
    staticClass: "underline underline-offset-6 hover:decoration-3",
    attrs: {
      "href": "https://twitter.com/pixel_poem",
      "target": "_blank"
    }
  }, [_vm._v("@pixel_poem")]), _vm._v(", Thanks to him for letting me use them!\n      ")]), _vm._v(" "), _c('Title', {
    staticClass: "mt-24",
    attrs: {
      "size": "2"
    }
  }, [_vm._v(" Context ")]), _vm._v(" "), _c('div', {
    staticClass: "dark:text-white/70 ml-2"
  }, [_c('p', [_vm._v("\n          I created this game as part of my final year project for my Bachelor's degree in Computer Science. I wanted to create a game that I would enjoy playing, and I think I succeeded in that regard.\n        ")]), _vm._v(" "), _c('p', {
    staticClass: "mt-4"
  }, [_c('u', [_vm._v("The game is still in development")]), _vm._v(", and I plan to add more features to it in the future. Beyond that, This project was a great learning experience for me, as I had never created a game before, and I learned a lot about game development and the challenges that come with it.\n        ")])])], 1), _vm._v(" "), _c('hr', {
    staticClass: "dark:border-white/10 border-2 rounded-full"
  }), _vm._v(" "), _c('section', {
    staticClass: "space-y-4"
  }, [_c('Title', {
    attrs: {
      "size": "1",
      "uppercase": ""
    }
  }, [_vm._v(" In detail explanation")]), _vm._v(" "), _c('Title', {
    staticClass: "!mt-12",
    attrs: {
      "size": "2"
    }
  }, [_vm._v(" What is Rogue? ")]), _vm._v(" "), _c('p', {
    staticClass: "dark:text-white/70 ml-2"
  }, [_vm._v("\n        Rogue is a roguelike-style game in which the player explores a dungeon infested with monsters that must be fought in order to gain experience and rewards. The dungeon is procedurally generated, meaning that each playthrough is different. Player death is permanent and inevitable. The goal of the game is to survive for as long as possible, using the treasures found and experience accumulated to improve the player's character.\n      ")]), _vm._v(" "), _c('p', {
    staticClass: "dark:text-white/70 ml-2"
  }, [_vm._v("\n        Everytime you play, the dungeon is different. The layout of the dungeon is randomly generated, and the monsters and items are also randomly generated. The game is a mix between a dungeon crawler and a roguelike. The game is inspired by Rogue and Dungeon Crawl Stone Soup.\n      ")]), _vm._v(" "), _c('p', {
    staticClass: "dark:text-white/70 ml-2"
  }, [_vm._v("\n        Unlike most roguelikes, Rogue is played in a browser, and is therefore accessible from any device. Using WebSockets, the game is synchronized across all devices, meaning that you can start a game on your computer, and continue it on your phone, or vice versa.\n      ")]), _vm._v(" "), _c('Title', {
    staticClass: "!mt-12",
    attrs: {
      "size": "2"
    }
  }, [_vm._v(" What is a roguelike / Dungeon Crawler? ")]), _vm._v(" "), _c('p', {
    staticClass: "dark:text-white/70 ml-2"
  }, [_vm._v("\n        A roguelike is a subgenre of role-playing video games characterized by a dungeon crawl through procedurally generated levels, turn-based gameplay, tile-based graphics, and permanent death of the player character. Most roguelikes are based on a high fantasy narrative, reflecting their influence from tabletop role playing games such as Dungeons & Dragons\n      ")]), _vm._v(" "), _c('p', {
    staticClass: "dark:text-white/70 ml-2"
  }, [_vm._v("\n        Dungeon crawler is also a subgenre of role-playing video games in which the player navigates a labyrinthine environment, battling various monsters, and looting any treasure they may find. The term usually implies that the dungeon is the main (or only) area of the game, and many dungeon crawlers lack a overworld. Dungeon crawlers are often associated with first-person perspective, real-time gameplay, grid-based movement, and permanent death.\n      ")]), _vm._v(" "), _c('Title', {
    staticClass: "!mt-12",
    attrs: {
      "size": "1"
    }
  }, [_vm._v(" Features ")]), _vm._v(" "), _c('Title', {
    staticClass: "!mt-12",
    attrs: {
      "size": "2"
    }
  }, [_vm._v(" Procedurally generated dungeon ")]), _vm._v(" "), _c('p', {
    staticClass: "dark:text-white/70 ml-2"
  }, [_vm._v("\n        The dungeon is randomly generated each time you play, meaning that each playthrough is different.\n      ")]), _vm._v(" "), _c('p', {
    staticClass: "dark:text-white/70 ml-2"
  }, [_vm._v("\n        Generation is based on the "), _c('a', {
    staticClass: "underline underline-offset-6 hover:decoration-3",
    attrs: {
      "href": "http://www.roguebasin.com/index.php/Dungeon-Building_Algorithm",
      "target": "_blank"
    }
  }, [_vm._v("Tyrant algorithm")]), _vm._v(". This algorithm works by dividing the dungeon space into a 2D array of cells, where each cell can be either a wall or a floor tile. The algorithm then iteratively applies a set of rules to determine the state of each cell in the next generation, based on the state of its neighboring cells.\n      ")]), _vm._v(" "), _c('p', {
    staticClass: "dark:text-white/70 ml-2"
  }, [_vm._v("\n        For example, one rule might be that if a floor cell is surrounded by at least three wall cells, it should become a wall cell in the next generation. Another rule might be that if a wall cell is surrounded by at least three floor cells, it should become a floor cell in the next generation. These rules, when applied iteratively, can create a randomized layout that resembles a dungeon.\n      ")]), _vm._v(" "), _c('p', {
    staticClass: "dark:text-white/70 ml-2"
  }, [_vm._v("\n        The algorithm is deterministic, meaning that the same seed will always generate the same dungeon.\n      ")]), _vm._v(" "), _c('p', {
    staticClass: "dark:text-white/70 ml-2"
  }, [_vm._v("\n        You can read more about the algorithm and its implementation in my article :\n      ")]), _vm._v(" "), _c('LastFm', {
    staticClass: "ml-2",
    attrs: {
      "image": "https://cdn.discordapp.com/attachments/1071595350437134456/1103355340407451698/68747470733a2f2f63646e2e646973636f72646170702e636f6d2f6174746163686d656e74732f3835333535343334363135303436313435302f313038373937383538393932313735393236322f726f6775654368616d702e676966.gif",
      "url": "",
      "name": "Procedural generation in nodejs",
      "artist": "Jérémy Caruelle"
    }
  }), _vm._v(" "), _c('Title', {
    staticClass: "!mt-12",
    attrs: {
      "size": "2"
    }
  }, [_vm._v(" 2D tile-based graphics ")]), _vm._v(" "), _c('p', {
    staticClass: "dark:text-white/70 ml-2"
  }, [_vm._v("\n        The game uses a 2D tile-based graphics system. Each tile is represented by a single character, and the entire dungeon is represented by a 2D array of characters. The player and monsters are also represented by characters, and their position in the dungeon is represented by their position in the 2D array.\n      ")]), _vm._v(" "), _c('p', {
    staticClass: "dark:text-white/70 ml-2"
  }, [_vm._v("\n        For example, the player might be represented by the character '@', and the monsters might be represented by the characters 'g' and 'o'. The player's position in the dungeon might be represented by the coordinates (x, y), where x is the column number and y is the row number.\n      ")]), _vm._v(" "), _c('div', {
    staticClass: "dark:text-white/70 ml-2 text-xs card-base rounded-lg overflow-x-auto"
  }, [_c('pre', {
    staticClass: "mx-auto",
    staticStyle: {
      "width": "fit-content"
    }
  }, [_vm._v("                                                                        ###############\n#####                                                                   #.............#\n#...#                                                                   #.............#\n#...#                                                                   #.............#\n#.?.#                                        ############################.............#\n#...#                                        #======.....+............../.............#\n#+###                                        #====...o...##########.#####.............#\n#.#                                          #===........#        #.#   ####/##########\n#.#                                          #############        #.#      #.#\n#.#                                                               #.#      #.#\n#.#                                                               #.#      #.#\n#.#        ########################################################.#      #.#######\n#.#        #$$$.........+...........................................#      #......^#\n#.#        #............#############################################      #########\n#.##########............#\n#........../............#\n#.#######################\n#.#\n#.#\n#.#\n#.#\n#.##                                                        #########         #########\n#..##                                                       #.......###########.......#\n##.O#                                                       #......./........./.......#\n##.#                                                #########.......###########.......#\n##..#                                               #.......+.......#         #.......#\n#..##                                               #.###############         #.......#\n#.##                                                #.#              ##########.......#\n#.#                                                 #.#              #......../.......#\n#.#            ######################################.################.########.......#\n#.#            #...........g..........................................@#      #.....k.#\n#.#            #.#######################################################      #.......#\n#.##############.#                                                            #..D>...#\n#!...............#                                                            #.......#\n##################                                                            #########")])]), _vm._v(" "), _c('p', {
    staticClass: "dark:text-white/70 ml-2"
  }, [_vm._v("\n        Now, we have an ASCII representation of the dungeon, but we need to convert it into a graphical representation. This is done by mapping each character to a tile image. For example, the character '@' might be mapped to a tile image of a player character, and the character 'g' might be mapped to a tile image of a goblin.\n      ")]), _vm._v(" "), _c('SmartFigure', {
    staticClass: "max-w-xl mx-auto p-4",
    attrs: {
      "src": _vm.images[1],
      "border": "",
      "caption": "Example of entity tileset created by @pixel_poem"
    }
  }), _vm._v(" "), _c('Title', {
    staticClass: "!mt-12",
    attrs: {
      "size": "2"
    }
  }, [_vm._v(" Turn-based gameplay ")]), _vm._v(" "), _c('p', {
    staticClass: "dark:text-white/70 ml-2"
  }, [_vm._v("\n        The game is turn-based, meaning that the player and monsters take turns moving and attacking; every time the player moves or attacks, the monsters get a chance to move or attack.\n      ")]), _vm._v(" "), _c('Title', {
    staticClass: "!mt-12",
    attrs: {
      "size": "2"
    }
  }, [_vm._v(" Character creation ")]), _vm._v(" "), _c('SmartFigure', {
    attrs: {
      "src": "https://cdn.discordapp.com/attachments/864261615402876948/1107985922164805702/image.png",
      "border": "",
      "caption": "The player can choose from a variety of character classes, each with their own unique abilities and playstyles"
    }
  }), _vm._v(" "), _c('Title', {
    staticClass: "!mt-12",
    attrs: {
      "size": "2"
    }
  }, [_vm._v(" Permadeath ")]), _vm._v(" "), _c('p', {
    staticClass: "dark:text-white/70 ml-2"
  }, [_vm._v("\n        The game has permadeath, meaning that if the player dies, they lose all progress and must start over from the beginning. BUT, the leaderboard is shared between all players, so you can compete with your friends to see who can get the highest score.\n      ")]), _vm._v(" "), _c('Title', {
    staticClass: "!mt-12",
    attrs: {
      "size": "2"
    }
  }, [_vm._v(" Saving and loading ")]), _vm._v(" "), _c('p', {
    staticClass: "dark:text-white/70 ml-2"
  }, [_vm._v("\n        In order to enable efficient saving and loading, the game uses a Websocket server to store the game state. This allows the game to be saved and loaded from any device, as long as it has an internet connection.\n      ")])], 1)], 1);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./src/pages/projects/rogue/index.vue?vue&type=template&id=6a4ec862&

// EXTERNAL MODULE: external "vue"
var external_vue_ = __webpack_require__(0);
var external_vue_default = /*#__PURE__*/__webpack_require__.n(external_vue_);

// EXTERNAL MODULE: ./src/components/Title.vue + 4 modules
var Title = __webpack_require__(27);

// EXTERNAL MODULE: ./src/components/Card/LastFm.vue + 4 modules
var LastFm = __webpack_require__(89);

// EXTERNAL MODULE: ./src/components/Smart/Image.vue + 4 modules
var Image = __webpack_require__(26);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--12-0!./node_modules/ts-loader??ref--12-1!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/windicss-webpack-plugin/dist/loaders/windicss-template.cjs!./src/pages/projects/rogue/index.vue?vue&type=script&lang=ts&




/* harmony default export */ var roguevue_type_script_lang_ts_ = (external_vue_default.a.extend({
  components: {
    Image: Image["default"],
    LastFm: LastFm["default"],
    Title: Title["default"]
  },
  data() {
    return {
      images: ["https://i.imgur.com/GVCH2f5.png", "https://cdn.discordapp.com/attachments/1071595350437134456/1104138416364470293/telechargement.png"],
      languages: ["HTML", "CSS", "JavaScript", "MongoDB", "Express", "Node.js", "Socket.io ( WebSockets )", "React.js", "Vite.js"],
      pages: [{
        title: "Custom Status",
        url: "/projects/premid/custom-status",
        description: "Tool that allows you do display whatever you want on your Discord profile with PreMiD! Easy and free!"
      }, {
        title: "Metadata Creator",
        url: "/projects/premid/mdcreator",
        description: "Easy and free to use tool to create PreMiD Presence metadata files easily, without even opening your code editor!"
      }]
    };
  },
  head() {
    const title = "Rogue";
    const image = "https://i.imgur.com/CuVtvKW.png";
    const description = "Custom tools created for your PreMiD experience! Featuring Custom Status and Metadata Creator for free and fresh UI!";
    return {
      title,
      meta: this.$prepareMeta({
        title,
        description,
        image,
        keywords: "premid, custom, status",
        url: "https://eggsy.xyz/projects/premid"
      }),
      link: [{
        rel: "canonical",
        href: "https://eggsy.xyz/projects/premid"
      }]
    };
  }
}));
// CONCATENATED MODULE: ./src/pages/projects/rogue/index.vue?vue&type=script&lang=ts&
 /* harmony default export */ var projects_roguevue_type_script_lang_ts_ = (roguevue_type_script_lang_ts_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./src/pages/projects/rogue/index.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  projects_roguevue_type_script_lang_ts_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "0a598c28"
  
)

/* harmony default export */ var rogue = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {SmartFigure: __webpack_require__(81).default,Title: __webpack_require__(27).default,PageLayout: __webpack_require__(77).default})


/***/ }),

/***/ 76:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(80);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(5).default
module.exports.__inject__ = function (context) {
  add("09a2553a", content, true, context)
};

/***/ }),

/***/ 77:
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

/***/ 79:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_windicss_webpack_plugin_dist_loaders_windicss_style_pitcher_cjs_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_windicss_webpack_plugin_dist_loaders_windicss_template_cjs_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Figure_vue_vue_type_style_index_0_id_6bdc1fc8_prod_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(76);
/* harmony import */ var _node_modules_windicss_webpack_plugin_dist_loaders_windicss_style_pitcher_cjs_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_windicss_webpack_plugin_dist_loaders_windicss_template_cjs_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Figure_vue_vue_type_style_index_0_id_6bdc1fc8_prod_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_windicss_webpack_plugin_dist_loaders_windicss_style_pitcher_cjs_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_windicss_webpack_plugin_dist_loaders_windicss_template_cjs_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Figure_vue_vue_type_style_index_0_id_6bdc1fc8_prod_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_windicss_webpack_plugin_dist_loaders_windicss_style_pitcher_cjs_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_windicss_webpack_plugin_dist_loaders_windicss_template_cjs_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Figure_vue_vue_type_style_index_0_id_6bdc1fc8_prod_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_windicss_webpack_plugin_dist_loaders_windicss_style_pitcher_cjs_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_windicss_webpack_plugin_dist_loaders_windicss_template_cjs_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Figure_vue_vue_type_style_index_0_id_6bdc1fc8_prod_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 80:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".medium-zoom-overlay{z-index:40}.medium-zoom-image.medium-zoom-image--opened{z-index:50}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 81:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/windicss-webpack-plugin/dist/loaders/windicss-template.cjs!./src/components/Smart/Figure.vue?vue&type=template&id=6bdc1fc8&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c,
    _setup = _vm._self._setupProxy;
  return _c('figure', {
    staticClass: "w-full h-full overflow-hidden"
  }, [_c(_vm.src.endsWith('.gif') ? 'img' : 'nuxt-img', {
    tag: "component",
    staticClass: "object-cover w-full rounded-md",
    class: [_vm.imageClass, _vm.border && 'border border-black/10 dark:border-white/10'],
    attrs: {
      "src": _vm.src,
      "alt": _vm.alt || _vm.caption || 'image',
      "loading": "lazy",
      "draggable": "false",
      "fit": "cover",
      "data-zoomable": _vm.zoomable
    }
  }), _vm._ssrNode(" " + (_vm.caption ? "<figcaption class=\"text-center mt-3\">" + _vm._ssrEscape("\n    " + _vm._s(_vm.caption) + "\n  ") + "</figcaption>" : "<!---->"))], 2);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./src/components/Smart/Figure.vue?vue&type=template&id=6bdc1fc8&

// EXTERNAL MODULE: external "vue"
var external_vue_ = __webpack_require__(0);
var external_vue_default = /*#__PURE__*/__webpack_require__.n(external_vue_);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--12-0!./node_modules/ts-loader??ref--12-1!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/windicss-webpack-plugin/dist/loaders/windicss-template.cjs!./src/components/Smart/Figure.vue?vue&type=script&lang=ts&

/* harmony default export */ var Figurevue_type_script_lang_ts_ = (external_vue_default.a.extend({
  props: {
    src: {
      type: String,
      required: false,
      default: null
    },
    alt: {
      type: String,
      required: false,
      default: null
    },
    caption: {
      type: String,
      required: false,
      default: null
    },
    imageClass: {
      type: String,
      required: false,
      default: null
    },
    border: {
      type: Boolean,
      required: false,
      default: false
    },
    zoomable: {
      type: Boolean,
      required: false,
      default: true
    }
  }
}));
// CONCATENATED MODULE: ./src/components/Smart/Figure.vue?vue&type=script&lang=ts&
 /* harmony default export */ var Smart_Figurevue_type_script_lang_ts_ = (Figurevue_type_script_lang_ts_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./src/components/Smart/Figure.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(79)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  Smart_Figurevue_type_script_lang_ts_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "04bd106b"
  
)

/* harmony default export */ var Figure = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 84:
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
installComponents(component, {SmartImage: __webpack_require__(26).default,IconPlay: __webpack_require__(84).default,SmartLink: __webpack_require__(16).default})


/***/ })

};;
//# sourceMappingURL=index.js.map