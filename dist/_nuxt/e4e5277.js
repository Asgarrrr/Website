(window.webpackJsonp=window.webpackJsonp||[]).push([[66,2,68,69,70,71],{378:function(t,e,l){"use strict";l.r(e);var n=l(0).a.extend({props:{type:{type:String,required:!1,default:"block"},iframeUrl:{type:[String,Boolean],required:!1,default:null}},data:function(){return{itemLoaded:!1}}}),r=l(9),component=Object(r.a)(n,(function(){var t=this,e=t._self._c;t._self._setupProxy;return"repository"===t.type?e("SkeletonLoaderRepository"):"iframe"===t.type?e("SkeletonLoaderIframe",{attrs:{"iframe-url":t.iframeUrl}}):"song"===t.type?e("SkeletonLoaderSong"):"lastfm"===t.type?e("SkeletonLoaderLastfm"):"spinner"===t.type?e("SkeletonLoaderSpinner"):"block"===t.type?e("div",{staticClass:"bg-black/5 rounded animate-pulse dark:bg-white/5"}):"rounded"===t.type?e("div",{staticClass:"bg-black/5 rounded-full animate-pulse dark:bg-white/5"}):t._e()}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{SkeletonLoaderRepository:l(381).default,SkeletonLoaderIframe:l(379).default,SkeletonLoaderSong:l(382).default,SkeletonLoaderLastfm:l(386).default,SkeletonLoaderSpinner:l(383).default})},379:function(t,e,l){"use strict";l.r(e);var n={props:{iframeUrl:{type:[String,Boolean],required:!1,default:null}},data:function(){return{itemLoaded:!1}}},r=l(9),component=Object(r.a)(n,(function(){var t=this,e=t._self._c;return e("div",{class:{"bg-gray-100 dark:bg-neutral-800 rounded animate-pulse":!1===t.itemLoaded}},[t.iframeUrl?e("iframe",{class:{"w-full h-full rounded":!0,invisible:!1===t.itemLoaded},attrs:{src:t.iframeUrl},on:{load:function(e){t.itemLoaded=!0}}}):t._e()])}),[],!1,null,null,null);e.default=component.exports},381:function(t,e,l){"use strict";l.r(e);var n=l(9),component=Object(n.a)({},(function(){this._self._c;return this._m(0)}),[function(){var t=this,e=t._self._c;return e("div",{staticClass:"rounded-md space-y-4 card-base"},[e("div",{staticClass:"rounded-md bg-black/10 h-6 animate-pulse w-7/12 dark:bg-white/5"}),t._v(" "),e("div",{staticClass:"space-y-2"},[e("div",{staticClass:"rounded-md bg-black/10 h-4 w-full animate-pulse dark:bg-white/5"}),t._v(" "),e("div",{staticClass:"rounded-md bg-black/10 h-4 animate-pulse w-4/12 dark:bg-white/5"})]),t._v(" "),e("div",{staticClass:"space-y-2"},[e("div",{staticClass:"flex items-center justify-between"},[e("div",{staticClass:"rounded-md bg-black/10 h-4 animate-pulse w-1/6 dark:bg-white/5"}),t._v(" "),e("div",{staticClass:"rounded-md bg-black/10 h-4 animate-pulse w-1/6 dark:bg-white/5"})]),t._v(" "),e("div",{staticClass:"flex items-center justify-between"},[e("div",{staticClass:"rounded-md bg-black/10 h-4 animate-pulse w-2/6 dark:bg-white/5"}),t._v(" "),e("div",{staticClass:"rounded-md bg-black/10 h-4 animate-pulse w-1/6 dark:bg-white/5"})]),t._v(" "),e("div",{staticClass:"flex items-center justify-between"},[e("div",{staticClass:"rounded-md bg-black/10 h-4 animate-pulse w-1/6 dark:bg-white/5"}),t._v(" "),e("div",{staticClass:"rounded-md bg-black/10 h-4 animate-pulse w-1/6 dark:bg-white/5"})])])])}],!1,null,null,null);e.default=component.exports},382:function(t,e,l){"use strict";l.r(e);var n=l(9),component=Object(n.a)({},(function(){this._self._c;return this._m(0)}),[function(){var t=this,e=t._self._c;return e("div",{staticClass:"card-base space-y-2"},[e("div",{staticClass:"rounded-md bg-black/5 flex-shrink-0 h-16 animate-pulse w-16 dark:bg-white/5"}),t._v(" "),e("div",{staticClass:"flex-grow space-y-1"},[e("div",{staticClass:"rounded bg-black/5 h-4 animate-pulse w-2/3 dark:bg-white/5"}),t._v(" "),e("div",{staticClass:"rounded bg-black/5 h-4 animate-pulse w-1/3 dark:bg-white/5"})])])}],!1,null,null,null);e.default=component.exports},383:function(t,e,l){"use strict";l.r(e);var n=l(9),component=Object(n.a)({},(function(){var t=this._self._c;return t("div",{staticClass:"flex items-center justify-center"},[t("svg",{staticClass:"w-8 h-8",attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"}},[t("path",{staticClass:"fill-[#888888] dark:fill-white",attrs:{d:"M12 2A10 10 0 1 0 22 12A10 10 0 0 0 12 2Zm0 18a8 8 0 1 1 8-8A8 8 0 0 1 12 20Z",opacity:".5"}}),this._v(" "),t("path",{attrs:{fill:"currentColor",d:"M20 12h2A10 10 0 0 0 12 2V4A8 8 0 0 1 20 12Z"}},[t("animateTransform",{attrs:{attributeName:"transform",dur:"1s",from:"0 12 12",repeatCount:"indefinite",to:"360 12 12",type:"rotate"}})],1)])])}),[],!1,null,null,null);e.default=component.exports},386:function(t,e,l){"use strict";l.r(e);var n=l(0).a.extend({computed:{getRandomItem:function(){return["w-2/3","w-3/4","w-2/5"][Math.floor(3*Math.random())]}}}),r=l(9),component=Object(r.a)(n,(function(){var t=this,e=t._self._c;t._self._setupProxy;return e("div",{staticClass:"rounded-md card-base flex space-x-4 w-full items-center"},[e("SkeletonLoader",{staticClass:"rounded-md flex-shrink-0 h-16 w-16"}),t._v(" "),e("div",{staticClass:"flex flex-col space-y-2 w-full"},[e("SkeletonLoader",{staticClass:"h-5",class:t.getRandomItem}),t._v(" "),e("SkeletonLoader",{staticClass:"h-5 w-1/3"})],1)],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{SkeletonLoader:l(378).default})},530:function(t,e,l){"use strict";l.r(e);var n=l(9),component=Object(n.a)({},(function(){var t=this,e=t._self._c;return e("main",{staticClass:"space-y-20"},[e("div",[e("Title",{staticClass:"mb-4"},[t._v("Details")]),t._v(" "),e("div",{staticClass:"grid gap-x-0 gap-y-4 md:gap-x-12 md:grid-cols-2"},[e("div",{staticClass:"flex space-x-4 items-center"},[e("span",[t._v("Profile")]),t._v(" "),e("div",{staticClass:"flex space-x-2 w-full justify-end items-center"},[e("SkeletonLoader",{staticClass:"h-5 w-1/2"}),t._v(" "),e("SkeletonLoader",{staticClass:"h-6 w-6 !rounded-full"})],1)]),t._v(" "),e("div",{staticClass:"flex space-x-4 items-center justify-between"},[e("span",{staticClass:"flex-shrink-0"},[t._v("Total Plays")]),t._v(" "),e("div",{staticClass:"flex space-x-2 w-full justify-end items-center"},[e("SkeletonLoader",{staticClass:"h-5 w-1/3"}),t._v(" "),e("SkeletonLoader",{staticClass:"h-6 w-6 !rounded-full"})],1)]),t._v(" "),e("div",{staticClass:"flex space-x-4 items-center justify-between"},[e("span",{staticClass:"flex-shrink-0"},[t._v("Account Age")]),t._v(" "),e("div",{staticClass:"flex space-x-2 w-full justify-end items-center"},[e("SkeletonLoader",{staticClass:"h-5 w-1/4"}),t._v(" "),e("SkeletonLoader",{staticClass:"h-6 w-6 !rounded-full"})],1)])])],1),t._v(" "),e("div",[e("Title",{staticClass:"mb-4"},[t._v("Top Songs (last 7 days)")]),t._v(" "),e("div",{staticClass:"grid gap-2 md:grid-cols-2"},t._l(6,(function(t){return e("SkeletonLoader",{key:t,attrs:{type:"lastfm"}})})),1)],1),t._v(" "),e("div",[e("Title",{staticClass:"mb-4"},[t._v("Top Artists (last 7 days)")]),t._v(" "),e("div",{staticClass:"grid gap-2 md:grid-cols-2"},t._l(4,(function(t){return e("SkeletonLoader",{key:t,attrs:{type:"lastfm"}})})),1)],1),t._v(" "),e("div",[e("Title",{staticClass:"mb-4"},[t._v("Recent Songs")]),t._v(" "),e("div",{staticClass:"grid gap-2 md:grid-cols-2"},t._l(15,(function(t){return e("SkeletonLoader",{key:t,attrs:{type:"lastfm"}})})),1)],1)])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{Title:l(265).default,SkeletonLoader:l(378).default})}}]);