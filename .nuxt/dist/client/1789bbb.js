(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{420:function(t,e,n){"use strict";n.r(e);var o=n(0).a.extend({props:{selector:{type:String,required:!0,default:null}},data:function(){return{el:null,scrollY:0,rect:{top:0,bottom:0},window:{height:0,width:0}}},computed:{getPercentLeftBottom:function(){var t=this.rect,e=t.top,n=t.bottom,o=Math.round((e-this.window.height)/(e-n)*100);return o>100?100:o},isElementVisible:function(){return this.scrollY>175}},mounted:function(){var element=document.querySelector(this.selector);if(element){this.el=element;var t=window,e=t.innerHeight,n=t.innerWidth;this.window={height:e,width:n},window.addEventListener("scroll",this.handleScroll)}},beforeDestroy:function(){window.removeEventListener("scroll",this.handleScroll)},methods:{handleScroll:function(){var t;this.scrollY=window.scrollY;var e=window,n=e.innerHeight,o=e.innerWidth;this.window={height:n,width:o};var r=(null===(t=this.el)||void 0===t?void 0:t.getBoundingClientRect())||{},l=r.top,c=r.bottom;l&&c&&(this.rect={top:l,bottom:c})}}}),r=n(10),component=Object(r.a)(o,(function(){var t=this,e=t._self._c;t._self._setupProxy;return e("transition",{attrs:{name:"fade"}},[e("div",{directives:[{name:"show",rawName:"v-show",value:t.isElementVisible,expression:"isElementVisible"},{name:"tippy",rawName:"v-tippy",value:{content:100===t.getPercentLeftBottom?"100% <3":"".concat(t.getPercentLeftBottom,"% left ^^")},expression:"{ content: getPercentLeftBottom === 100 ? '100% <3' : `${getPercentLeftBottom}% left ^^` }"}]},[e("div",{staticClass:"rounded-md bg-gray-200 h-40 w-4 hidden relative md:block dark:bg-neutral-800"},[e("div",{staticClass:"rounded-md inset-x-0 transition bottom-0 absolute",class:{"bg-green-500":100===t.getPercentLeftBottom,"bg-gray-300 dark:bg-neutral-600":t.getPercentLeftBottom<100},style:{height:"".concat(t.getPercentLeftBottom,"%")}})])])])}),[],!1,null,null,null);e.default=component.exports}}]);