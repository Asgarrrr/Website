(window.webpackJsonp=window.webpackJsonp||[]).push([[21,47],{383:function(t,e,n){"use strict";n.r(e);var r=n(10),component=Object(r.a)({},(function(){var t=this._self._c;return t("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"}},[t("path",{attrs:{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"}})])}),[],!1,null,null,null);e.default=component.exports},425:function(t,e,n){"use strict";n.r(e);n(17),n(36);var r=n(0).a.extend({props:{meta:{type:Object,required:!0,default:function(){}}},data:function(){return{hovered:!1}}}),l=n(10),component=Object(l.a)(r,(function(){var t=this,e=t._self._c;t._self._setupProxy;return t.meta?e("div",{staticClass:"overflow-hidden",on:{mouseover:function(e){t.hovered=!0},mouseleave:function(e){t.hovered=!1}}},[e("SmartLink",{staticClass:"rounded-lg cursor-pointer space-y-2 focus-ring",attrs:{title:t.meta.title,href:{name:"blog-slug",params:{slug:t.meta.slug}}}},[e("div",{staticClass:"relative"},[e("SmartImage",{staticClass:"rounded h-40 w-full filter dark:brightness-75",attrs:{src:t.meta.image}}),t._v(" "),e("transition",{attrs:{name:"fade",mode:"out-in"}},[e("div",{directives:[{name:"show",rawName:"v-show",value:t.hovered,expression:"hovered"}],staticClass:"flex bg-black/50 inset-0 absolute items-center justify-center"},[e("IconLink",{staticClass:"h-6 text-white w-6"})],1)])],1),t._v(" "),e("div",{staticClass:"flex flex-col space-y-1"},[e("h2",{staticClass:"font-medium text-lg leading-tight text-gray-700 truncate dark:text-gray-200 hover:underline"},[t._v("\n        "+t._s(t.meta.title)+"\n      ")]),t._v(" "),e("p",{staticClass:"text-neutral-500 line-clamp-2"},[t._v("\n        "+t._s(t.meta.description)+"\n      ")])])])],1):t._e()}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{SmartImage:n(259).default,IconLink:n(383).default,SmartLink:n(167).default})}}]);