(window.webpackJsonp=window.webpackJsonp||[]).push([[68],{381:function(e,t,l){var content=l(386);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,l(81).default)("09a2553a",content,!0,{sourceMap:!1})},385:function(e,t,l){"use strict";l(381)},386:function(e,t,l){var o=l(80)((function(i){return i[1]}));o.push([e.i,".medium-zoom-overlay{z-index:40}.medium-zoom-image.medium-zoom-image--opened{z-index:50}",""]),o.locals={},e.exports=o},387:function(e,t,l){"use strict";l.r(t);l(170);var o=l(0).a.extend({props:{src:{type:String,required:!1,default:null},alt:{type:String,required:!1,default:null},caption:{type:String,required:!1,default:null},imageClass:{type:String,required:!1,default:null},border:{type:Boolean,required:!1,default:!1},zoomable:{type:Boolean,required:!1,default:!0}}}),r=(l(385),l(10)),component=Object(r.a)(o,(function(){var e=this,t=e._self._c;e._self._setupProxy;return t("figure",{staticClass:"w-full h-full overflow-hidden"},[t(e.src.endsWith(".gif")?"img":"nuxt-img",{tag:"component",staticClass:"object-cover w-full rounded-md",class:[e.imageClass,e.border&&"border border-black/10 dark:border-white/10"],attrs:{src:e.src,alt:e.alt||e.caption||"image",loading:"lazy",draggable:"false",fit:"cover","data-zoomable":e.zoomable}}),e._v(" "),e.caption?t("figcaption",{staticClass:"text-center mt-3"},[e._v("\n    "+e._s(e.caption)+"\n  ")]):e._e()],1)}),[],!1,null,null,null);t.default=component.exports}}]);