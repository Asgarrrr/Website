(window.webpackJsonp=window.webpackJsonp||[]).push([[24,55],{393:function(t,e,l){"use strict";l.r(e);var n=l(0).a.extend({props:{filled:{type:Boolean,required:!1,default:!1}}}),r=l(9),component=Object(r.a)(n,(function(){var t=this,e=t._self._c;t._self._setupProxy;return!1===t.filled?e("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"}},[e("path",{attrs:{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"}})]):e("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor"}},[e("path",{attrs:{d:"M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"}})])}),[],!1,null,null,null);e.default=component.exports},424:function(t,e,l){"use strict";l.r(e);l(21),l(17),l(37),l(127);var n=l(0).a.extend({props:{name:{type:String,required:!0},language:{type:String,required:!1,default:null},stars:{type:[String,Number],required:!0},top:{type:Boolean,required:!1,default:!1},license:{type:String,required:!1,default:null},description:{type:String,required:!0}},computed:{getLanguageIcon:function(){return{Vue:"Vue.js"}[this.language]||this.language}}}),r=l(9),component=Object(r.a)(n,(function(){var t=this,e=t._self._c;t._self._setupProxy;return e("div",{staticClass:"rounded-lg card-base"},[e("div",{staticClass:"space-y-2"},[e("div",{class:t.top&&"flex justify-between space-x-2"},[e("h3",{staticClass:"text-black/90 dark:text-white/90 items-center truncate space-x-1"},[e("span",{staticClass:"text-black/50 dark:text-white/30"},[t._v("Asgarrrr/")]),e("span",[t._v(t._s(t.name))])]),t._v(" "),!0===t.top?e("IconStar",{staticClass:"h-6 text-yellow-600 w-6",attrs:{title:"Top repository",filled:""}}):t._e()],1),t._v(" "),e("p",{staticClass:"text-black/50 dark:text-white/30 line-clamp-2"},[t._v("\n      "+t._s(t.description)+"\n    ")])]),t._v(" "),e("div",{staticClass:"mt-4"},[e("div",{staticClass:"flex items-center justify-between text-black/50 dark:text-white/30"},[e("span",[t._v("Stars:")]),t._v(" "),e("span",[t._v(t._s(t.stars))])]),t._v(" "),e("div",{staticClass:"flex items-center justify-between text-black/50 dark:text-white/30"},[e("span",[t._v("Language:")]),t._v(" "),e("IconDev",{staticClass:"h-5 w-5",attrs:{brand:t.getLanguageIcon}})],1),t._v(" "),t.license?e("div",{staticClass:"flex items-center justify-between text-black/50 dark:text-white/30"},[e("span",[t._v("License:")]),t._v(" "),e("span",[t._v(t._s(t.license))])]):t._e()])])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{IconStar:l(393).default,IconDev:l(411).default})}}]);