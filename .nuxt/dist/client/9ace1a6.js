(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{425:function(t,e,o){"use strict";o.r(e);var r=o(0).a.extend({props:{toc:{type:Array,required:!0,default:function(){return[]}}},data:function(){return{tocToggled:!1}}}),n=o(10),component=Object(n.a)(r,(function(){var t=this,e=t._self._c;t._self._setupProxy;return t.toc&&t.toc.length>0?e("div",{staticClass:"rounded-md flex flex-col space-y-2 mb-6"},[e("div",{staticClass:"cursor-pointer flex font-medium space-x-1 text-sm transition-colors text-gray-500 items-center dark:text-dark-100 hover:text-gray-700 dark:hover:text-white/40 select-none",on:{click:function(e){t.tocToggled=!t.tocToggled}}},[e("h1",{staticClass:"uppercase"},[t._v("Başlıklar")]),t._v(" "),e("transition",{attrs:{name:"fade",mode:"out-in"}},[t.tocToggled?e("IconChevron",{key:"'tocToggledFalse'",staticClass:"h-4 w-4",attrs:{down:""}}):e("IconChevron",{key:"'tocToggled'",staticClass:"h-4 w-4",attrs:{right:""}})],1)],1),t._v(" "),e("ul",{directives:[{name:"show",rawName:"v-show",value:!0===t.tocToggled,expression:"tocToggled === true"}],staticClass:"flex flex-wrap gap-2 items-center"},t._l(t.toc||[],(function(link){return e("li",{key:link.id,staticClass:"border-b border-gray-300 text-sm transition-colors text-dark-400 dark:border-dark-200 dark:text-white/30 hover:text-dark-700 dark:hover:text-white/60"},[link.id?e("a",{attrs:{href:"#".concat(link.id)}},[t._v("\n        "+t._s(link.text)+"\n      ")]):t._e()])})),0)]):t._e()}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{IconChevron:o(267).default})}}]);