(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{430:function(t,e,r){"use strict";r.r(e);var n=r(25),c=r(5),o=(r(38),r(0).a.extend({props:{currentSlug:{type:String,required:!0,default:null}},data:function(){return{prev:{},next:{}}},fetch:function(){var t=this;return Object(c.a)(regeneratorRuntime.mark((function e(){var r,c,o,l;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$content("blog").only(["title","slug"]).sortBy("createdAt","asc").surround(t.currentSlug).fetch();case 2:r=e.sent,c=Object(n.a)(r,2),o=c[0],l=c[1],t.prev=o,t.next=l;case 8:case"end":return e.stop()}}),e)})))()}})),l=r(9),component=Object(l.a)(o,(function(){var t=this,e=t._self._c;t._self._setupProxy;return e("transition",{attrs:{name:"fade",mode:"out-in"}},[!1!==t.$fetchState.pending||t.$fetchState.error?t._e():e("div",{staticClass:"grid gap-x-4 gap-y-2 grid-cols-1 md:grid-cols-2"},[e(t.prev?"SmartLink":"div",{tag:"component",staticClass:"rounded-lg card-base flex items-center space-x-2",class:t.prev?"dark:hover:text-white hover:bg-opacity-40":"cursor-not-allowed",attrs:{href:t.prev&&"/blog/".concat(t.prev.slug)}},[e("IconChevron",{staticClass:"h-4 w-4 flex-shrink-0",attrs:{left:""}}),t._v(" "),t.prev?e("span",{staticClass:"truncate"},[t._v(t._s(t.prev.title))]):e("span",{staticClass:"truncate"},[t._v("No Older Posts")])],1),t._v(" "),e(t.next?"SmartLink":"div",{tag:"component",staticClass:"rounded-lg card-base flex items-center space-x-2 justify-end",class:t.next?"dark:hover:text-white hover:bg-opacity-40":"cursor-not-allowed",attrs:{href:t.next&&"/blog/".concat(t.next.slug)}},[t.next?e("span",{staticClass:"truncate"},[t._v(t._s(t.next.title))]):e("span",{staticClass:"truncate"},[t._v("No Newer Posts")]),t._v(" "),e("IconChevron",{staticClass:"h-4 w-4 flex-shrink-0",attrs:{right:""}})],1)],1)])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{IconChevron:r(268).default})}}]);