(window.webpackJsonp=window.webpackJsonp||[]).push([[71,7,9,12,29,34,38,60,68],{380:function(t,e,r){var content=r(385);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(81).default)("09a2553a",content,!0,{sourceMap:!1})},384:function(t,e,r){"use strict";r(380)},385:function(t,e,r){var n=r(80)((function(i){return i[1]}));n.push([t.i,".medium-zoom-overlay{z-index:40}.medium-zoom-image.medium-zoom-image--opened{z-index:50}",""]),n.locals={},t.exports=n},386:function(t,e,r){"use strict";r.r(e);r(168);var n=r(0).a.extend({props:{src:{type:String,required:!1,default:null},alt:{type:String,required:!1,default:null},caption:{type:String,required:!1,default:null},imageClass:{type:String,required:!1,default:null},border:{type:Boolean,required:!1,default:!1},zoomable:{type:Boolean,required:!1,default:!0}}}),o=(r(384),r(10)),component=Object(o.a)(n,(function(){var t=this,e=t._self._c;t._self._setupProxy;return e("figure",{staticClass:"w-full h-full overflow-hidden"},[e(t.src.endsWith(".gif")?"img":"nuxt-img",{tag:"component",staticClass:"object-cover w-full rounded-md",class:[t.imageClass,t.border&&"border border-black/10 dark:border-white/10"],attrs:{src:t.src,alt:t.alt||t.caption||"image",loading:"lazy",draggable:"false",fit:"cover","data-zoomable":t.zoomable}}),t._v(" "),t.caption?e("figcaption",{staticClass:"text-center mt-3"},[t._v("\n    "+t._s(t.caption)+"\n  ")]):t._e()],1)}),[],!1,null,null,null);e.default=component.exports},389:function(t,e,r){"use strict";r.r(e);var n=r(10),component=Object(n.a)({},(function(){var t=this._self._c;return t("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"}},[t("path",{attrs:{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"}})])}),[],!1,null,null,null);e.default=component.exports},403:function(t,e,r){var content=r(462);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(81).default)("1faa7f53",content,!0,{sourceMap:!1})},413:function(t,e,r){"use strict";r.r(e);var n=r(0).a.extend({props:{error:{type:Boolean,required:!1,default:!1}}}),o=r(10),component=Object(o.a)(n,(function(){var t=this,e=t._self._c;t._self._setupProxy;return!1===t.error?e("div",{staticClass:"w-full pt-14"},[t._m(0),t._v(" "),e("div",{staticClass:"space-y-10 mt-10 w-full"},[e("div",{staticClass:"space-y-1"},t._l(6,(function(t){return e("div",{key:t,staticClass:"bg-black/10 h-4 animate-pulse dark:bg-white/5",class:6!==t?"w-full":"w-8/12"})})),0),t._v(" "),e("div",{staticClass:"space-y-1"},t._l(4,(function(t){return e("div",{key:t,staticClass:"bg-black/10 h-4 animate-pulse dark:bg-white/5",class:4!==t?"w-full":"w-1/2"})})),0),t._v(" "),e("div",{staticClass:"space-y-1"},t._l(24,(function(t){return e("div",{key:t,staticClass:"bg-black/10 h-4 animate-pulse dark:bg-white/5",class:24!==t?"w-full":"w-1/2"})})),0)])]):e("div",{staticClass:"space-y-6 pt-14"},[e("h1",{staticClass:"font-semibold text-2xl text-black/90 dark:text-white/90"},[t._v("\n    Failed to load post...\n  ")]),t._v(" "),e("p",{staticClass:"text-black/50 dark:text-white/30"},[t._v("\n    ;(\n  ")]),t._v(" "),e("Button",{attrs:{icon:"IconBack"},nativeOn:{click:function(e){return t.$router.back()}}},[t._v("Go Back")])],1)}),[function(){var t=this,e=t._self._c;t._self._setupProxy;return e("section",{staticClass:"space-y-8"},[e("div",{staticClass:"space-y-4"},[e("div",{staticClass:"flex space-x-2 justify-center"},[e("div",{staticClass:"bg-black/10 h-4 animate-pulse w-1/4 sm:w-1/6 dark:bg-white/5"})])]),t._v(" "),e("div",{staticClass:"bg-black/10 h-10 mx-auto w-full animate-pulse sm:w-8/12 dark:bg-white/5"}),t._v(" "),e("div",{staticClass:"bg-black/10 h-4 animate-pulse dark:bg-white/5"}),t._v(" "),e("div",{staticClass:"flex space-x-2 justify-center"},[e("div",{staticClass:"bg-black/10 h-4 animate-pulse w-1/4 sm:w-1/6 dark:bg-white/5"}),t._v(" "),e("div",{staticClass:"bg-black/10 h-4 animate-pulse w-1/4 sm:w-1/6 dark:bg-white/5"})]),t._v(" "),e("div",{staticClass:"bg-black/10 h-xl rounded-lg animate-pulse w-full dark:bg-white/5"})])}],!1,null,null,null);e.default=component.exports;installComponents(component,{Button:r(99).default})},414:function(t,e,r){"use strict";r.r(e);var n=r(0).a.extend({props:{selector:{type:String,required:!0,default:null}},data:function(){return{el:null,scrollY:0,rect:{top:0,bottom:0},window:{height:0,width:0}}},computed:{getPercentLeftBottom:function(){var t=this.rect,e=t.top,r=t.bottom,n=Math.round((e-this.window.height)/(e-r)*100);return n>100?100:n},isElementVisible:function(){return this.scrollY>175}},mounted:function(){var element=document.querySelector(this.selector);if(element){this.el=element;var t=window,e=t.innerHeight,r=t.innerWidth;this.window={height:e,width:r},window.addEventListener("scroll",this.handleScroll)}},beforeDestroy:function(){window.removeEventListener("scroll",this.handleScroll)},methods:{handleScroll:function(){var t;this.scrollY=window.scrollY;var e=window,r=e.innerHeight,n=e.innerWidth;this.window={height:r,width:n};var o=(null===(t=this.el)||void 0===t?void 0:t.getBoundingClientRect())||{},l=o.top,c=o.bottom;l&&c&&(this.rect={top:l,bottom:c})}}}),o=r(10),component=Object(o.a)(n,(function(){var t=this,e=t._self._c;t._self._setupProxy;return e("transition",{attrs:{name:"fade"}},[e("div",{directives:[{name:"show",rawName:"v-show",value:t.isElementVisible,expression:"isElementVisible"},{name:"tippy",rawName:"v-tippy",value:{content:100===t.getPercentLeftBottom?"100% <3":"".concat(t.getPercentLeftBottom,"% left ^^")},expression:"{ content: getPercentLeftBottom === 100 ? '100% <3' : `${getPercentLeftBottom}% left ^^` }"}]},[e("div",{staticClass:"rounded-md bg-gray-200 h-40 w-4 hidden relative md:block dark:bg-neutral-800"},[e("div",{staticClass:"rounded-md inset-x-0 transition bottom-0 absolute",class:{"bg-green-500":100===t.getPercentLeftBottom,"bg-gray-300 dark:bg-neutral-600":t.getPercentLeftBottom<100},style:{height:"".concat(t.getPercentLeftBottom,"%")}})])])])}),[],!1,null,null,null);e.default=component.exports},415:function(t,e,r){"use strict";r.r(e);var n=r(0).a.extend({props:{toc:{type:Array,required:!0,default:function(){return[]}}},data:function(){return{tocToggled:!1}}}),o=r(10),component=Object(o.a)(n,(function(){var t=this,e=t._self._c;t._self._setupProxy;return t.toc&&t.toc.length>0?e("div",{staticClass:"rounded-md flex flex-col space-y-2 mb-6 p-4 border-2 border-gray-200 dark:border-dark-200"},[e("div",{staticClass:"cursor-pointer flex font-medium space-x-1 text-sm transition-colors text-gray-500 items-center dark:text-dark-100 hover:text-gray-700 dark:hover:text-white/40 select-none",on:{click:function(e){t.tocToggled=!t.tocToggled}}},[e("h1",{staticClass:"uppercase"},[t._v("Table of Contents")]),t._v(" "),e("transition",{attrs:{name:"fade",mode:"out-in"}},[t.tocToggled?e("IconChevron",{key:"'tocToggledFalse'",staticClass:"h-4 w-4",attrs:{down:""}}):e("IconChevron",{key:"'tocToggled'",staticClass:"h-4 w-4",attrs:{right:""}})],1)],1),t._v(" "),t._l(t.toc||[],(function(link){return e("ul",{directives:[{name:"show",rawName:"v-show",value:!1===t.tocToggled,expression:"tocToggled === false"}],key:link.id,staticClass:"flex flex-wrap gap-2 items-center"},[e("li",{staticClass:"border-gray-300 text-sm transition-colors text-dark-400 dark:border-dark-200 dark:text-white/30 hover:text-dark-700 dark:hover:text-white/60",style:"padding-left: ".concat(1.5*(link.depth-2),"rem")},[link.id?e("a",{attrs:{href:"#".concat(link.id)}},[t._v("\n        "+t._s(link.text)+"\n      ")]):t._e()])])}))],2):t._e()}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{IconChevron:r(265).default})},416:function(t,e,r){"use strict";r.r(e);var n=r(25),o=r(5),l=(r(37),r(0).a.extend({props:{currentSlug:{type:String,required:!0,default:null}},data:function(){return{prev:{},next:{}}},fetch:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){var r,o,l,c;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$content("blog").only(["title","slug"]).sortBy("createdAt","asc").surround(t.currentSlug).fetch();case 2:r=e.sent,o=Object(n.a)(r,2),l=o[0],c=o[1],t.prev=l,t.next=c;case 8:case"end":return e.stop()}}),e)})))()}})),c=r(10),component=Object(c.a)(l,(function(){var t=this,e=t._self._c;t._self._setupProxy;return e("transition",{attrs:{name:"fade",mode:"out-in"}},[!1!==t.$fetchState.pending||t.$fetchState.error?t._e():e("div",{staticClass:"grid gap-x-4 gap-y-2 grid-cols-1 md:grid-cols-2"},[e(t.prev?"SmartLink":"div",{tag:"component",staticClass:"rounded-lg card-base flex items-center space-x-2",class:t.prev?"dark:hover:text-white hover:bg-opacity-40":"cursor-not-allowed",attrs:{href:t.prev&&"/blog/".concat(t.prev.slug)}},[e("IconChevron",{staticClass:"h-4 w-4 flex-shrink-0",attrs:{left:""}}),t._v(" "),t.prev?e("span",{staticClass:"truncate"},[t._v(t._s(t.prev.title))]):e("span",{staticClass:"truncate"},[t._v("No Older Posts")])],1),t._v(" "),e(t.next?"SmartLink":"div",{tag:"component",staticClass:"rounded-lg card-base flex items-center space-x-2 justify-end",class:t.next?"dark:hover:text-white hover:bg-opacity-40":"cursor-not-allowed",attrs:{href:t.next&&"/blog/".concat(t.next.slug)}},[t.next?e("span",{staticClass:"truncate"},[t._v(t._s(t.next.title))]):e("span",{staticClass:"truncate"},[t._v("No Newer Posts")]),t._v(" "),e("IconChevron",{staticClass:"h-4 w-4 flex-shrink-0",attrs:{right:""}})],1)],1)])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{IconChevron:r(265).default})},425:function(t,e,r){"use strict";r.r(e);var n=r(10),component=Object(n.a)({},(function(){var t=this._self._c;return t("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor"}},[t("path",{attrs:{"stroke-linecap":"round","stroke-linejoin":"round",d:"M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"}}),this._v(" "),t("path",{attrs:{"stroke-linecap":"round","stroke-linejoin":"round",d:"M15 12a3 3 0 11-6 0 3 3 0 016 0z"}})])}),[],!1,null,null,null);e.default=component.exports},426:function(t,e,r){"use strict";r.r(e);var n=r(10),component=Object(n.a)({},(function(){var t=this._self._c;return t("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","stroke-width":"2"}},[t("path",{attrs:{"stroke-linecap":"round","stroke-linejoin":"round",d:"M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"}})])}),[],!1,null,null,null);e.default=component.exports},461:function(t,e,r){"use strict";r(403)},462:function(t,e,r){var n=r(80)((function(i){return i[1]}));n.push([t.i,".nuxt-content .nuxt-content-highlight{position:relative}.nuxt-content .nuxt-content-highlight .filename{--tw-text-opacity:0.5;color:hsla(0,0%,100%,.5);color:rgba(255,255,255,var(--tw-text-opacity));font-size:.75rem;font-weight:300;line-height:1rem;margin-right:3.5rem;margin-top:.75rem;position:absolute;right:0;z-index:10}.nuxt-content .nuxt-content-highlight pre{--tw-bg-opacity:1;--tw-bg-opacity:0.25;--tw-border-opacity:1;background-color:hsla(0,0%,83%,.25);background-color:rgba(212,212,212,var(--tw-bg-opacity));border-color:#e5e5e5;border-color:rgba(229,229,229,var(--tw-border-opacity));border-radius:.5rem;border-width:.1px;margin-bottom:1.25rem;margin-top:1.25rem;max-height:35rem;overflow:auto;padding:1rem}.dark .nuxt-content .nuxt-content-highlight pre{--tw-bg-opacity:0.3;--tw-border-opacity:1;background-color:rgba(38,38,38,.3);background-color:rgba(38,38,38,var(--tw-bg-opacity));border-color:#262626;border-color:rgba(38,38,38,var(--tw-border-opacity))}.nuxt-content .nuxt-content-highlight ::-webkit-scrollbar{width:.5rem}.nuxt-content .nuxt-content-highlight ::-webkit-scrollbar-track{background:transparent}.nuxt-content .nuxt-content-highlight ::-webkit-scrollbar-thumb{background:#888;border-radius:.5rem}.nuxt-content .nuxt-content-highlight ::-webkit-scrollbar-thumb:hover{background:#555}.nuxt-content .nuxt-content-highlight ::-webkit-scrollbar-corner{background-color:transparent}.nuxt-content code{--tw-bg-opacity:1;--tw-text-opacity:1;background-color:#dbeafe;background-color:rgba(219,234,254,var(--tw-bg-opacity));border-radius:.125rem;color:#2563eb;color:rgba(37,99,235,var(--tw-text-opacity));padding:1px .25rem}.dark .nuxt-content code{--tw-bg-opacity:0.05;background-color:hsla(0,0%,100%,.05);background-color:rgba(255,255,255,var(--tw-bg-opacity))}.prose code:after,.prose code:before{content:none!important}code[class*=language-],pre[class*=language-]{text-shadow:none}.copy-button{--tw-text-opacity:0.5;color:hsla(0,0%,100%,.5);color:rgba(255,255,255,var(--tw-text-opacity));font-size:.75rem;font-weight:300;line-height:1rem;margin-right:.75rem;margin-top:.75rem;opacity:0;position:absolute;right:0;top:0;transition-duration:.15s;transition-duration:.2s;transition-property:opacity;transition-timing-function:cubic-bezier(.4,0,.2,1);z-index:10}.nuxt-content-highlight:hover .copy-button{opacity:1}.gsc-reactions-count>:not([hidden])~:not([hidden]){--tw-space-x-reverse:0;margin-left:.25rem;margin-left:calc(.25rem*(1 - var(--tw-space-x-reverse)));margin-right:0;margin-right:calc(.25rem*var(--tw-space-x-reverse))}.gsc-reactions-count{--tw-text-opacity:0.5;align-items:center;color:hsla(0,0%,100%,.5);color:rgba(255,255,255,var(--tw-text-opacity));display:none!important;display:flex;font-size:.75rem;font-weight:300;line-height:1rem;margin-left:.5rem;transition-duration:.15s;transition-duration:.2s;transition-property:background-color,border-color,color,fill,stroke;transition-timing-function:cubic-bezier(.4,0,.2,1)}.gsc-reactions-count:hover{--tw-text-opacity:1;color:#fff;color:rgba(255,255,255,var(--tw-text-opacity))}.dark .gsc-reactions-count:hover{--tw-text-opacity:0.8;color:hsla(0,0%,100%,.8);color:rgba(255,255,255,var(--tw-text-opacity))}.dark .gsc-reactions-count{--tw-text-opacity:0.3;color:hsla(0,0%,100%,.3);color:rgba(255,255,255,var(--tw-text-opacity))}pre[class*=language-].line-numbers{counter-reset:linenumber;padding-left:3.8em;position:relative}pre[class*=language-].line-numbers>code{position:relative;white-space:inherit}.line-numbers .line-numbers-rows{border-right:1px solid #999;font-size:100%;left:-3.8em;letter-spacing:-1px;pointer-events:none;position:absolute;top:0;-webkit-user-select:none;-moz-user-select:none;user-select:none;width:3em}.line-numbers-rows>span{counter-increment:linenumber;display:block}.line-numbers-rows>span:before{color:#999;content:counter(linenumber);display:block;padding-right:.8em;text-align:right}",""]),n.locals={},t.exports=n},501:function(t,e,r){"use strict";r.r(e);r(17),r(36),r(45),r(23),r(46),r(24),r(30),r(47),r(26);var n=r(5),o=(r(65),r(7),r(20),r(82),r(37),r(453)),l=r.n(o);r(454),r(455),r(456),r(457),r(458),r(459),r(460);function c(t,e){var r="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!r){if(Array.isArray(t)||(r=function(t,e){if(!t)return;if("string"==typeof t)return d(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);"Object"===r&&t.constructor&&(r=t.constructor.name);if("Map"===r||"Set"===r)return Array.from(t);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return d(t,e)}(t))||e&&t&&"number"==typeof t.length){r&&(t=r);var i=0,n=function(){};return{s:n,n:function(){return i>=t.length?{done:!0}:{done:!1,value:t[i++]}},e:function(t){throw t},f:n}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,l=!0,c=!1;return{s:function(){r=r.call(t)},n:function(){var t=r.next();return l=t.done,t},e:function(t){c=!0,o=t},f:function(){try{l||null==r.return||r.return()}finally{if(c)throw o}}}}function d(t,e){(null==e||e>t.length)&&(e=t.length);for(var i=0,r=new Array(e);i<e;i++)r[i]=t[i];return r}var h=r(0).a.extend({data:function(){return{post:{},related:[]}},fetch:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){var r,n,o,l,d,h,f,title;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$content("blog",t.$route.params.slug).fetch();case 2:if(n=e.sent){e.next=6;break}return t.$router.push("/blog"),e.abrupt("return");case 6:if(t.post=n,!(null===(r=n.related)||void 0===r?void 0:r.length)){e.next=30;break}o=[],l=c(n.related),e.prev=10,l.s();case 12:if((d=l.n()).done){e.next=21;break}return h=d.value,e.next=16,t.$content("blog",h).only(["title"]).fetch();case 16:f=e.sent,title=f.title,o.push({title:title,slug:h});case 19:e.next=12;break;case 21:e.next=26;break;case 23:e.prev=23,e.t0=e.catch(10),l.e(e.t0);case 26:return e.prev=26,l.f(),e.finish(26);case 29:t.related=o;case 30:case"end":return e.stop()}}),e,null,[[10,23,26,29]])})))()},head:function(){var t,e=this.post,r=this.getTags,title=e.title,n=e.description||"You were invited to read this post on Asgarrr's blog.",o=(null==r?void 0:r.join(", "))||title,l="https://jeremycaruelle.fr".concat(null===(t=this.$route)||void 0===t?void 0:t.path),image="/og-images/".concat(e.slug,".png");return{bodyAttrs:{class:"overflow-x-hidden"},title:title,link:[{rel:"canonical",href:l}],meta:this.$prepareMeta({title:title,description:n,image:"https://jeremycaruelle.fr".concat(image),keywords:"".concat(o,", Asgarrrr blog"),url:l},[{name:"twitter:card",content:"summary_large_image"},{name:"article:published-time",content:(null==e?void 0:e.createdAt)||null},{name:"twitter:label1",content:"asgarrrr"},{name:"twitter:data1",content:null==e?void 0:e.createdAt},{name:"twitter:label2",content:"Jérémy Caruelle"},{name:"twitter:data2",content:"".concat(this.getReadingTime," min read")}])}},watch:{$fetchState:{handler:function(t){var e=this;return Object(n.a)(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if(!0!==t.pending&&null===t.error){r.next=2;break}return r.abrupt("return");case 2:return r.next=4,e.$nextTick();case 4:e.$applyMediumZoom(),l.a.highlightAll(),document.querySelectorAll(".nuxt-content-highlight").forEach((function(t){var button=document.createElement("button");button.className="copy-button",button.textContent="copy",button.addEventListener("click",(function(){var pre=t.querySelector("pre");navigator.clipboard.writeText((null==pre?void 0:pre.textContent)||""),button.textContent=["✨","🍾","🔥","❤️","🎉","🎊"][~~(6*Math.random())],setTimeout((function(){button.textContent="copy",button.classList.remove("decoration-green-500")}),2e3)})),t.appendChild(button)}));case 7:case"end":return r.stop()}}),r)})))()},deep:!0}},computed:{getTags:function(){var t;return(null===(t=this.post)||void 0===t?void 0:t.tags)||[]},getReadingTime:function(){return this.$getReadingTime(JSON.stringify(this.post.body))},getReadableDate:function(){var t;return this.$getReadableDate(new Date((null===(t=this.post)||void 0===t?void 0:t.createdAt)||Date.now()))},getRelatedPosts:function(){return this.related||[]}}}),f=(r(461),r(10)),component=Object(f.a)(h,(function(){var t=this,e=t._self._c;t._self._setupProxy;return e("Transition",{attrs:{name:"fade"}},[!0===t.$fetchState.pending||null!==t.$fetchState.error?e("LoadersContent",{attrs:{error:!1===t.$fetchState.pending&&null!==t.$fetchState.error}}):e("div",{staticClass:"pt-4 mt-10"},[e("article",[e("header",{staticClass:"space-y-8 leading-relaxed text-center mb-18"},[e("div",{staticClass:"space-y-4"},[e("div",{staticClass:"flex flex-wrap items-center justify-center gap-x-6 gap-y-2 dark:text-white/30 text-black/50 sm:text-sm"},[t._l(t.getTags,(function(r){return e("div",{staticClass:"flex items-center space-x-2 mb-4"},[e("i",{},[t._v("\n                  # "+t._s(r)+"\n                ")])])})),t._v(" "),e("div",{staticClass:"space-y-8 mb-8"},[e("h1",{staticClass:"block mx-auto text-2xl font-bold text-black md:w-11/12 sm:text-4xl dark:text-white"},[t._v("\n                  "+t._s(t.post.title)+"\n                ")]),t._v(" "),e("p",{staticClass:"mx-auto text-black/50 md:w-9/12 dark:text-white/50"},[t._v("\n                  "+t._s(t.post.description)+"\n                ")])]),t._v(" "),e("div",{staticClass:"flex items-center space-x-2"},[e("IconCalendar",{staticClass:"w-4 h-4"}),t._v(" "),e("span",[t._v(t._s(t.getReadableDate))])],1),t._v(" "),e("div",{staticClass:"flex items-center space-x-2"},[e("IconEye",{staticClass:"w-4 h-4"}),t._v(" "),e("span",[t._v(t._s(t.getReadingTime)+" minute reading")])],1)],2)]),t._v(" "),t.post.header?e("SmartFigure",{staticClass:"object-cover object-top w-full transition-all rounded-lg max-h-xl ring-1 dark:ring-white/10 ring-black/10 hover:object-bottom duration-2000",attrs:{src:t.post.header,alt:"Post header"}}):t._e()],1),t._v(" "),e("div",{staticClass:"mt-4"},[t.post.indicatorsHidden?t._e():[e("div",{staticClass:"sticky z-10 hidden float-right text-left -mr-14 top-4 md:block"},[e("BlogReadingIndicator",{attrs:{selector:".nuxt-content"}})],1)],t._v(" "),e("BlogTableOfContents",{attrs:{toc:t.post.toc}}),t._v(" "),e("NuxtContent",{staticClass:"max-w-full prose prose-black dark:prose-light",attrs:{document:t.post}})],2)]),t._v(" "),e("hr",{staticClass:"my-10 border-black/10 dark:border-white/10"}),t._v(" "),e("div",{staticClass:"mt-16 space-y-10"},[t.getRelatedPosts.length>0?e("div",{staticClass:"space-y-2"},[e("h3",{staticClass:"text-sm dark:text-white/30 text-black/50"},[t._v("\n            Similar Posts\n          ")]),t._v(" "),t.getRelatedPosts.length?e("div",{staticClass:"grid gap-4 sm:grid-cols-2"},t._l(t.getRelatedPosts,(function(r,n){return e("NuxtLink",{key:"related-".concat(n),staticClass:"rounded-lg border-[0.1px] p-4 bg-opacity-25 bg-neutral-300 border-neutral-200 dark:bg-neutral-800/30 dark:border-neutral-800 flex items-center space-x-2 hover:bg-opacity-40 transition-colors dark:text-white/80 dark:hover:text-white transition-colors",attrs:{to:"/blog/".concat(r.slug)}},[e("IconDocument",{staticClass:"w-4 h-4"}),t._v(" "),e("span",{staticClass:"truncate"},[t._v(t._s(r.title))])],1)})),1):t._e()]):t._e(),t._v(" "),e("div",{staticClass:"space-y-2"},[e("h3",{staticClass:"text-sm dark:text-white/30 text-black/50"},[t._v("\n            Continue Reading\n          ")]),t._v(" "),e("BlogPrevNext",{attrs:{"current-slug":t.post.slug}})],1)])])],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{LoadersContent:r(413).default,IconCalendar:r(389).default,IconEye:r(425).default,SmartFigure:r(386).default,BlogReadingIndicator:r(414).default,BlogTableOfContents:r(415).default,IconDocument:r(426).default,BlogPrevNext:r(416).default})}}]);