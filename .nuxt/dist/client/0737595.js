(window.webpackJsonp=window.webpackJsonp||[]).push([[16,50],{397:function(t,e,n){"use strict";n.r(e);var l=n(10),component=Object(l.a)({},(function(){var t=this._self._c;return t("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor"}},[t("path",{attrs:{"stroke-linecap":"round","stroke-linejoin":"round",d:"M12 4.5v15m7.5-7.5h-15"}})])}),[],!1,null,null,null);e.default=component.exports},422:function(t,e,n){"use strict";n.r(e);var l=n(0).a.extend({props:{title:{type:String,required:!0,default:""},url:{type:String,required:!1,default:null},date:{type:String,required:!1,default:(new Date).getFullYear()},position:{type:String,required:!1,default:null},hiddenBadge:{type:Boolean,required:!1,default:!1}}}),r=n(10),component=Object(r.a)(l,(function(){var t=this,e=t._self._c;t._self._setupProxy;return e("SmartLink",{attrs:{href:t.url,blank:""}},[e("div",{staticClass:"card-base leading-relaxed rounded-lg"},[e("div",{staticClass:"flex space-x-2 items-center justify-between"},[e("h3",[t._v(t._s(t.title))]),t._v(" "),e("span",{staticClass:"text-black/50 dark:text-white/30 text-sm"},[t._v(t._s(t.date))])]),t._v(" "),t.position?e("div",{staticClass:"truncate text-sm text-black/50 dark:text-white/30",class:t.hiddenBadge&&"flex items-center justify-between"},[t._v("\n      "+t._s(t.position)+"\n      "),t.hiddenBadge?e("IconPlus",{staticClass:"h-4 w-4"}):t._e()],1):t._e()])])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{IconPlus:n(397).default,SmartLink:n(167).default})}}]);