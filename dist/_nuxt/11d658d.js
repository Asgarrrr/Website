(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{430:function(t,e,r){"use strict";r.r(e);var n=r(25),o=r(5),c=(r(38),r(0).a.extend({props:{currentSlug:{type:String,required:!0,default:null}},data:function(){return{prev:{},next:{}}},fetch:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){var r,o,c,l;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$content("blog").only(["title","slug"]).sortBy("createdAt","asc").surround(t.currentSlug).fetch();case 2:r=e.sent,o=Object(n.a)(r,2),c=o[0],l=o[1],t.prev=c,t.next=l;case 8:case"end":return e.stop()}}),e)})))()}})),l=r(9),component=Object(l.a)(c,(function(){var t=this,e=t._self._c;t._self._setupProxy;return e("transition",{attrs:{name:"fade",mode:"out-in"}},[t.$fetchState.pending||t.$fetchState.error?t._e():e("div",{staticClass:"grid gap-x-4 gap-y-2 grid-cols-1 md:grid-cols-2"},[e(t.prev?"SmartLink":"div",{tag:"component",staticClass:"rounded-lg card-base flex items-center space-x-2",class:t.prev?"dark:hover:text-white hover:bg-opacity-40":"cursor-not-allowed",attrs:{href:t.prev&&"/blog/".concat(t.prev.slug)}},[e("IconChevron",{staticClass:"h-4 w-4 flex-shrink-0",attrs:{left:""}}),t._v(" "),e("span",{staticClass:"truncate"},[t._v(t._s(t.prev&&t.prev.title||"No Older Posts"))])],1),t._v(" "),e(t.next?"SmartLink":"div",{tag:"component",staticClass:"rounded-lg card-base flex items-center space-x-2 justify-end",class:t.next?"dark:hover:text-white hover:bg-opacity-40":"cursor-not-allowed",attrs:{href:t.next&&"/blog/".concat(t.next.slug)}},[e("span",{staticClass:"truncate"},[t._v(t._s(t.next&&t.next.title||"No Newer Posts"))]),t._v(" "),e("IconChevron",{staticClass:"h-4 w-4 flex-shrink-0",attrs:{right:""}})],1)],1)])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{IconChevron:r(268).default})}}]);