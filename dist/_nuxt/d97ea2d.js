(window.webpackJsonp=window.webpackJsonp||[]).push([[9,47,72],{377:function(t,e,r){var content=r(385);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(67).default)("4729cb5b",content,!0,{sourceMap:!1})},384:function(t,e,r){"use strict";r(377)},385:function(t,e,r){var o=r(66)((function(i){return i[1]}));o.push([t.i,".medium-zoom-overlay{z-index:40}.medium-zoom-image.medium-zoom-image--opened{z-index:50}",""]),o.locals={},t.exports=o},387:function(t,e,r){"use strict";r.r(e);r(169);var o=r(0).a.extend({props:{src:{type:String,required:!1,default:null},alt:{type:String,required:!1,default:null},caption:{type:String,required:!1,default:null},imageClass:{type:Array,required:!1,default:function(){return[]}},border:{type:Boolean,required:!1,default:!1},zoomable:{type:Boolean,required:!1,default:!0}}}),n=(r(384),r(9)),component=Object(n.a)(o,(function(){var t=this,e=t._self._c;t._self._setupProxy;return e("figure",{staticClass:"w-full h-full overflow-hidden"},[e(t.src.endsWith(".gif")?"img":"nuxt-img",{tag:"component",staticClass:"object-cover w-full rounded-md",class:[t.imageClass,t.border&&"border border-black/10 dark:border-white/10"],attrs:{src:t.src,alt:t.alt||t.caption||"image",loading:"lazy",draggable:"false",fit:"cover","data-zoomable":t.zoomable}}),t._v(" "),t.caption?e("figcaption",{staticClass:"text-center mt-3"},[t._v("\n    "+t._s(t.caption)+"\n  ")]):t._e()],1)}),[],!1,null,null,null);e.default=component.exports},392:function(t,e,r){"use strict";r.r(e);var o=r(9),component=Object(o.a)({},(function(){var t=this._self._c;return t("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"}},[t("path",{attrs:{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"}})])}),[],!1,null,null,null);e.default=component.exports},417:function(t,e,r){var content=r(484);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(67).default)("8338284c",content,!0,{sourceMap:!1})},483:function(t,e,r){"use strict";r(417)},484:function(t,e,r){var o=r(66)((function(i){return i[1]}));o.push([t.i,".notification[data-v-7a43e88e],.nuxt-content .notification[data-v-7a43e88e]{--tw-bg-opacity:1;--tw-bg-opacity:0.25;--tw-border-opacity:1;background-color:hsla(0,0%,83%,.25);background-color:rgba(212,212,212,var(--tw-bg-opacity));border-color:#e5e5e5;border-color:rgba(229,229,229,var(--tw-border-opacity));border-radius:.5rem;border-width:.1px;margin-bottom:.75rem;margin-top:.75rem;padding:1rem}.dark .notification[data-v-7a43e88e],.dark .nuxt-content .notification[data-v-7a43e88e]{--tw-bg-opacity:0.3;--tw-border-opacity:1;background-color:rgba(38,38,38,.3);background-color:rgba(38,38,38,var(--tw-bg-opacity));border-color:#262626;border-color:rgba(38,38,38,var(--tw-border-opacity))}.notification h1[data-v-7a43e88e],.nuxt-content .notification h1[data-v-7a43e88e]{font-size:1.125rem;font-weight:500;line-height:1.75rem;margin:0}.notification h1[data-v-7a43e88e]:hover,.nuxt-content .notification h1[data-v-7a43e88e]:hover{-webkit-text-decoration:none;text-decoration:none}.notification figure[data-v-7a43e88e],.nuxt-content .notification figure[data-v-7a43e88e]{margin:0;padding:0}",""]),o.locals={},t.exports=o},521:function(t,e,r){"use strict";r.r(e);var o=r(0).a.extend({props:{vertical:{type:Boolean,default:!1},product:{type:String,required:!0,default:""},url:{type:String,required:!0,default:""},image:{type:String,required:!0,default:""},price:{type:String,required:!0,default:""},figclass:{type:String,required:!1,default:""}}}),n=(r(483),r(9)),component=Object(n.a)(o,(function(){var t=this,e=t._self._c;t._self._setupProxy;return e("div",{staticClass:"notification flex flex-col md:items-left md:flex-row gap-x-4 gap-y-2 justify-between min-w-[190px] relative"},[e("div",{staticClass:"flex flex-row gap-x-6",class:t.vertical?"flex-col":""},[e("div",{staticClass:"hidden md:block"},[e("smart-figure",{class:t.vertical?"":"max-w-[230px] m-0 p-0",attrs:{src:t.image,imageClass:[t.figclass,t.vertical?"h-[200px] object-scale-down":""],alt:t.product,title:t.product}})],1),t._v(" "),e("div",[e("div",{staticClass:"flex flex-row items-center gap-x-2 justify-between"},[t.url?e("SmartLink",{staticStyle:{"text-decoration":"none"},attrs:{href:t.url,blank:""}},[e("div",{staticClass:"flex space-x-2 items-center decoration-wavy decoration-1 decoration-gray-500"},[e("h1",{staticClass:"hover:underline decoration-wavy decoration-1 decoration-gray-500"},[t._v(t._s(t.product))]),t._v(" "),e("IconLink",{staticClass:"h-4 w-4"})],1)]):e("div",[e("h1",{staticClass:"hover:underline decoration-wavy decoration-1 decoration-gray-500"},[t._v(t._s(t.product))])])],1),t._v(" "),e("div",{staticClass:"flex flex-col gap-y-2"},[e("p",{staticClass:"text-black/60 dark:text-white/40 w-full !mt-1",class:t.vertical?"":"md:w-11/12"},[t._t("default")],2),t._v(" "),e("span",{staticClass:"text-black/50 dark:text-white/30 text-sm absolute bottom-5 right-5"},[t._v("\n          "+t._s(t.price)+"\n        ")])])])])])}),[],!1,null,"7a43e88e",null);e.default=component.exports;installComponents(component,{SmartFigure:r(387).default,IconLink:r(392).default,SmartLink:r(264).default})}}]);