(window.webpackJsonp=window.webpackJsonp||[]).push([[2,68,69,70,71],{377:function(e,t,l){"use strict";l.r(t);var r=l(0).a.extend({props:{type:{type:String,required:!1,default:"block"},iframeUrl:{type:[String,Boolean],required:!1,default:null}},data:function(){return{itemLoaded:!1}}}),n=l(9),component=Object(n.a)(r,(function(){var e=this,t=e._self._c;e._self._setupProxy;return"repository"===e.type?t("SkeletonLoaderRepository"):"iframe"===e.type?t("SkeletonLoaderIframe",{attrs:{"iframe-url":e.iframeUrl}}):"song"===e.type?t("SkeletonLoaderSong"):"lastfm"===e.type?t("SkeletonLoaderLastfm"):"spinner"===e.type?t("SkeletonLoaderSpinner"):"block"===e.type?t("div",{staticClass:"bg-black/5 rounded animate-pulse dark:bg-white/5"}):"rounded"===e.type?t("div",{staticClass:"bg-black/5 rounded-full animate-pulse dark:bg-white/5"}):e._e()}),[],!1,null,null,null);t.default=component.exports;installComponents(component,{SkeletonLoaderRepository:l(380).default,SkeletonLoaderIframe:l(378).default,SkeletonLoaderSong:l(381).default,SkeletonLoaderLastfm:l(383).default,SkeletonLoaderSpinner:l(382).default})},378:function(e,t,l){"use strict";l.r(t);var r={props:{iframeUrl:{type:[String,Boolean],required:!1,default:null}},data:function(){return{itemLoaded:!1}}},n=l(9),component=Object(n.a)(r,(function(){var e=this,t=e._self._c;return t("div",{class:{"bg-gray-100 dark:bg-neutral-800 rounded animate-pulse":!1===e.itemLoaded}},[e.iframeUrl?t("iframe",{class:{"w-full h-full rounded":!0,invisible:!1===e.itemLoaded},attrs:{src:e.iframeUrl},on:{load:function(t){e.itemLoaded=!0}}}):e._e()])}),[],!1,null,null,null);t.default=component.exports},380:function(e,t,l){"use strict";l.r(t);var r=l(9),component=Object(r.a)({},(function(){this._self._c;return this._m(0)}),[function(){var e=this,t=e._self._c;return t("div",{staticClass:"rounded-md space-y-4 card-base"},[t("div",{staticClass:"rounded-md bg-black/10 h-6 animate-pulse w-7/12 dark:bg-white/5"}),e._v(" "),t("div",{staticClass:"space-y-2"},[t("div",{staticClass:"rounded-md bg-black/10 h-4 w-full animate-pulse dark:bg-white/5"}),e._v(" "),t("div",{staticClass:"rounded-md bg-black/10 h-4 animate-pulse w-4/12 dark:bg-white/5"})]),e._v(" "),t("div",{staticClass:"space-y-2"},[t("div",{staticClass:"flex items-center justify-between"},[t("div",{staticClass:"rounded-md bg-black/10 h-4 animate-pulse w-1/6 dark:bg-white/5"}),e._v(" "),t("div",{staticClass:"rounded-md bg-black/10 h-4 animate-pulse w-1/6 dark:bg-white/5"})]),e._v(" "),t("div",{staticClass:"flex items-center justify-between"},[t("div",{staticClass:"rounded-md bg-black/10 h-4 animate-pulse w-2/6 dark:bg-white/5"}),e._v(" "),t("div",{staticClass:"rounded-md bg-black/10 h-4 animate-pulse w-1/6 dark:bg-white/5"})]),e._v(" "),t("div",{staticClass:"flex items-center justify-between"},[t("div",{staticClass:"rounded-md bg-black/10 h-4 animate-pulse w-1/6 dark:bg-white/5"}),e._v(" "),t("div",{staticClass:"rounded-md bg-black/10 h-4 animate-pulse w-1/6 dark:bg-white/5"})])])])}],!1,null,null,null);t.default=component.exports},381:function(e,t,l){"use strict";l.r(t);var r=l(9),component=Object(r.a)({},(function(){this._self._c;return this._m(0)}),[function(){var e=this,t=e._self._c;return t("div",{staticClass:"card-base space-y-2"},[t("div",{staticClass:"rounded-md bg-black/5 flex-shrink-0 h-16 animate-pulse w-16 dark:bg-white/5"}),e._v(" "),t("div",{staticClass:"flex-grow space-y-1"},[t("div",{staticClass:"rounded bg-black/5 h-4 animate-pulse w-2/3 dark:bg-white/5"}),e._v(" "),t("div",{staticClass:"rounded bg-black/5 h-4 animate-pulse w-1/3 dark:bg-white/5"})])])}],!1,null,null,null);t.default=component.exports},382:function(e,t,l){"use strict";l.r(t);var r=l(9),component=Object(r.a)({},(function(){var e=this._self._c;return e("div",{staticClass:"flex items-center justify-center"},[e("svg",{staticClass:"w-8 h-8",attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"}},[e("path",{staticClass:"fill-[#888888] dark:fill-white",attrs:{d:"M12 2A10 10 0 1 0 22 12A10 10 0 0 0 12 2Zm0 18a8 8 0 1 1 8-8A8 8 0 0 1 12 20Z",opacity:".5"}}),this._v(" "),e("path",{attrs:{fill:"currentColor",d:"M20 12h2A10 10 0 0 0 12 2V4A8 8 0 0 1 20 12Z"}},[e("animateTransform",{attrs:{attributeName:"transform",dur:"1s",from:"0 12 12",repeatCount:"indefinite",to:"360 12 12",type:"rotate"}})],1)])])}),[],!1,null,null,null);t.default=component.exports},383:function(e,t,l){"use strict";l.r(t);var r=l(0).a.extend({computed:{getRandomItem:function(){return["w-2/3","w-3/4","w-2/5"][Math.floor(3*Math.random())]}}}),n=l(9),component=Object(n.a)(r,(function(){var e=this,t=e._self._c;e._self._setupProxy;return t("div",{staticClass:"rounded-md card-base flex space-x-4 w-full items-center"},[t("SkeletonLoader",{staticClass:"rounded-md flex-shrink-0 h-16 w-16"}),e._v(" "),t("div",{staticClass:"flex flex-col space-y-2 w-full"},[t("SkeletonLoader",{staticClass:"h-5",class:e.getRandomItem}),e._v(" "),t("SkeletonLoader",{staticClass:"h-5 w-1/3"})],1)],1)}),[],!1,null,null,null);t.default=component.exports;installComponents(component,{SkeletonLoader:l(377).default})}}]);