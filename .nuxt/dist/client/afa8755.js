(window.webpackJsonp=window.webpackJsonp||[]).push([[19,20,21,22,35,42,46],{389:function(t,e,r){"use strict";r.r(e);var l=r(10),component=Object(l.a)({},(function(){var t=this._self._c;return t("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"}},[t("path",{attrs:{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"}})])}),[],!1,null,null,null);e.default=component.exports},398:function(t,e,r){"use strict";r.r(e);var l=r(10),component=Object(l.a)({},(function(){var t=this._self._c;return t("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"}},[t("path",{attrs:{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"}})])}),[],!1,null,null,null);e.default=component.exports},399:function(t,e,r){"use strict";r.r(e);var l=r(10),component=Object(l.a)({},(function(){var t=this._self._c;return t("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor"}},[t("path",{attrs:{"fill-rule":"evenodd",d:"M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z","clip-rule":"evenodd"}})])}),[],!1,null,null,null);e.default=component.exports},425:function(t,e,r){"use strict";r.r(e);r(17),r(36);var l=r(0).a.extend({props:{meta:{type:Object,required:!0,default:function(){}}},data:function(){return{hovered:!1}}}),n=r(10),component=Object(n.a)(l,(function(){var t=this,e=t._self._c;t._self._setupProxy;return t.meta?e("div",{staticClass:"overflow-hidden",on:{mouseover:function(e){t.hovered=!0},mouseleave:function(e){t.hovered=!1}}},[e("SmartLink",{staticClass:"rounded-lg cursor-pointer space-y-2 focus-ring",attrs:{title:t.meta.title,href:{name:"blog-slug",params:{slug:t.meta.slug}}}},[e("div",{staticClass:"relative"},[e("SmartImage",{staticClass:"rounded h-40 w-full filter dark:brightness-75",attrs:{src:t.meta.image}}),t._v(" "),e("transition",{attrs:{name:"fade",mode:"out-in"}},[e("div",{directives:[{name:"show",rawName:"v-show",value:t.hovered,expression:"hovered"}],staticClass:"flex bg-black/50 inset-0 absolute items-center justify-center"},[e("IconLink",{staticClass:"h-6 text-white w-6"})],1)])],1),t._v(" "),e("div",{staticClass:"flex flex-col space-y-1"},[e("h2",{staticClass:"font-medium text-lg leading-tight text-gray-700 truncate dark:text-gray-200 hover:underline"},[t._v("\n        "+t._s(t.meta.title)+"\n      ")]),t._v(" "),e("p",{staticClass:"text-neutral-500 line-clamp-2"},[t._v("\n        "+t._s(t.meta.description)+"\n      ")])])])],1):t._e()}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{SmartImage:r(262).default,IconLink:r(389).default,SmartLink:r(167).default})},426:function(t,e,r){"use strict";r.r(e);r(17),r(36);var l=r(0).a.extend({props:{meta:{type:Object,required:!0,default:function(){}}}}),n=r(10),component=Object(n.a)(l,(function(){var t=this,e=t._self._c;t._self._setupProxy;return t.meta?e("SmartLink",{staticClass:"rounded-lg cursor-pointer flex space-x-4 p-3 transition-colors focus-ring items-center md:px-4 hover:bg-gray-200/40 dark:hover:bg-neutral-800/40",attrs:{title:t.meta.title,href:{name:"blog-slug",params:{slug:t.meta.slug}}}},[e("SmartImage",{staticClass:"rounded flex-shrink-0 h-20 w-24 filter dark:brightness-75",attrs:{src:t.meta.image}}),t._v(" "),e("div",{staticClass:"flex flex-col overflow-x-hidden"},[e("h2",{staticClass:"font-medium text-lg text-gray-800 truncate dark:text-gray-200"},[t._v("\n      "+t._s(t.meta.title)+"\n    ")]),t._v(" "),e("p",{staticClass:"text-neutral-500 line-clamp-2"},[t._v("\n      "+t._s(t.meta.description)+"\n    ")])])],1):t._e()}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{SmartImage:r(262).default,SmartLink:r(167).default})},427:function(t,e,r){"use strict";r.r(e);var l=r(0).a.extend({props:{meta:{type:Object,required:!0,default:function(){}}},computed:{getPostDate:function(){return this.meta&&this.meta.date?this.$getReadableDate(this.meta.date):null}}}),n=r(10),component=Object(n.a)(l,(function(){var t=this,e=t._self._c;t._self._setupProxy;return t.meta?e("SmartLink",{staticClass:"rounded-lg cursor-pointer flex flex-col p-3 px-4 transition-colors focus-ring truncate hover:bg-gray-200/40 dark:hover:bg-neutral-800/40",attrs:{title:t.meta.title,href:{name:"blog-slug",params:{slug:t.meta.slug}}}},[e("h2",{staticClass:"font-medium text-lg text-gray-800 truncate dark:text-gray-200"},[t._v("\n    "+t._s(t.meta.title)+"\n  ")]),t._v(" "),e("div",{staticClass:"flex space-x-1 items-center"},[t.meta.special?e("IconFire",{directives:[{name:"tippy",rawName:"v-tippy",value:{content:"Popüler gönderi",placement:"bottom"},expression:"{\n        content: 'Popüler gönderi',\n        placement: 'bottom',\n      }"}],staticClass:"flex-shrink-0 h-5 text-red-600 w-5 dark:text-red-500"}):t._e(),t._v(" "),e("div",{staticClass:"flex space-x-2 text-gray-700 truncate items-center dark:text-gray-400"},[e("IconClock",{staticClass:"flex-shrink-0 h-5 w-5"}),t._v(" "),e("span",{staticClass:"truncate"},[t._v(t._s(t.getPostDate))])],1)],1)]):t._e()}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{IconFire:r(399).default,IconClock:r(398).default,SmartLink:r(167).default})},519:function(t,e,r){"use strict";r.r(e);r(17),r(36);var l=r(0).a.extend({props:{post:{type:Object,required:!0,default:function(){}},type:{type:String,required:!1,default:"normal"}},data:function(){return{hovered:!1}},computed:{getPostMeta:function(){var t,e,r,l,n;if(!this.post)return{};var image=(null===(t=this.post)||void 0===t?void 0:t.image)||"/assets/images/posts/".concat(null===(e=this.post)||void 0===e?void 0:e.slug,".jpg")||"";return{title:this.post.title||"",description:this.post.description||"",slug:this.post.slug||"",special:this.post.special||!1,tag:(null===(l=null===(r=this.post)||void 0===r?void 0:r.tags)||void 0===l?void 0:l[0])||"",date:null===(n=this.post)||void 0===n?void 0:n.createdAt,image:image}}}}),n=r(10),component=Object(n.a)(l,(function(){var t=this,e=t._self._c;t._self._setupProxy;return"normal"===t.type?e("CardPostNormal",{attrs:{meta:t.getPostMeta}}):"text"===t.type?e("CardPostText",{attrs:{meta:t.getPostMeta}}):"text-only-title"===t.type?e("CardPostTextTitle",{attrs:{meta:t.getPostMeta}}):t._e()}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{CardPostNormal:r(425).default,CardPostText:r(426).default,CardPostTextTitle:r(427).default})}}]);