(window.webpackJsonp=window.webpackJsonp||[]).push([[75,8,12,14,38,64,72],{376:function(t,e,r){var content=r(384);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(67).default)("1ea6dc66",content,!0,{sourceMap:!1})},383:function(t,e,r){"use strict";r(376)},384:function(t,e,r){var o=r(66)((function(i){return i[1]}));o.push([t.i,".medium-zoom-overlay{z-index:40}.medium-zoom-image.medium-zoom-image--opened{z-index:50}",""]),o.locals={},t.exports=o},386:function(t,e,r){"use strict";r.r(e);r(168);var o=r(0).a.extend({props:{src:{type:String,required:!1,default:null},alt:{type:String,required:!1,default:null},caption:{type:String,required:!1,default:null},imageClass:{type:String,required:!1,default:null},border:{type:Boolean,required:!1,default:!1},zoomable:{type:Boolean,required:!1,default:!0}}}),n=(r(383),r(9)),component=Object(n.a)(o,(function(){var t=this,e=t._self._c;t._self._setupProxy;return e("figure",{staticClass:"w-full h-full overflow-hidden"},[e(t.src.endsWith(".gif")?"img":"nuxt-img",{tag:"component",staticClass:"object-cover w-full rounded-md",class:[t.imageClass,t.border&&"border border-black/10 dark:border-white/10"],attrs:{src:t.src,alt:t.alt||t.caption||"image",loading:"lazy",draggable:"false",fit:"cover","data-zoomable":t.zoomable}}),t._v(" "),t.caption?e("figcaption",{staticClass:"text-center mt-3"},[t._v("\n    "+t._s(t.caption)+"\n  ")]):t._e()],1)}),[],!1,null,null,null);e.default=component.exports},395:function(t,e,r){var content=r(407);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(67).default)("49b01c72",content,!0,{sourceMap:!1})},406:function(t,e,r){"use strict";r(395)},407:function(t,e,r){var o=r(66)((function(i){return i[1]}));o.push([t.i,".separator[data-v-3c15f7b3]{background-image:url(https://cdn.discordapp.com/attachments/1071595350437134456/1129896454996111390/svgviewer-png-output_1.png);background-position:50%;background-repeat:repeat-x;border:0;height:14.36px;margin:50px auto;position:relative;width:100%}",""]),o.locals={},t.exports=o},414:function(t,e,r){var content=r(479);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(67).default)("3acc3191",content,!0,{sourceMap:!1})},426:function(t,e,r){"use strict";r.r(e);var o=r(0).a.extend({props:{error:{type:Boolean,required:!1,default:!1}}}),n=r(9),component=Object(n.a)(o,(function(){var t=this,e=t._self._c;t._self._setupProxy;return t.error?e("div",{staticClass:"space-y-6 pt-14"},[e("h1",{staticClass:"font-semibold text-2xl text-black/90 dark:text-white/90"},[t._v("\n    Failed to load post...\n  ")]),t._v(" "),e("p",{staticClass:"text-black/50 dark:text-white/30"},[t._v("\n    ;(\n  ")]),t._v(" "),e("Button",{attrs:{icon:"IconBack"},nativeOn:{click:function(e){return t.$router.back()}}},[t._v("Go Back")])],1):e("div",{staticClass:"w-full mx-auto !max-w-screen-md pt-14"},[t._m(0),t._v(" "),e("div",{staticClass:"space-y-10 mt-10 w-full"},[e("div",{staticClass:"space-y-1"},t._l(6,(function(t){return e("div",{key:t,staticClass:"bg-black/10 h-4 animate-pulse dark:bg-white/5",class:6!==t?"w-full":"w-8/12"})})),0),t._v(" "),e("div",{staticClass:"space-y-1"},t._l(4,(function(t){return e("div",{key:t,staticClass:"bg-black/10 h-4 animate-pulse dark:bg-white/5",class:4!==t?"w-full":"w-1/2"})})),0),t._v(" "),e("div",{staticClass:"space-y-1"},t._l(24,(function(t){return e("div",{key:t,staticClass:"bg-black/10 h-4 animate-pulse dark:bg-white/5",class:24!==t?"w-full":"w-1/2"})})),0)])])}),[function(){var t=this,e=t._self._c;t._self._setupProxy;return e("section",{staticClass:"space-y-8"},[e("div",{staticClass:"space-y-4"},[e("div",{staticClass:"flex space-x-2 justify-center"},[e("div",{staticClass:"bg-black/10 h-4 animate-pulse w-1/4 sm:w-1/6 dark:bg-white/5"})])]),t._v(" "),e("div",{staticClass:"flex space-x-2 justify-center"},[e("div",{staticClass:"bg-black/10 h-4 animate-pulse w-1/4 sm:w-1/6 dark:bg-white/5"}),t._v(" "),e("div",{staticClass:"bg-black/10 h-4 animate-pulse w-1/4 sm:w-1/6 dark:bg-white/5"})]),t._v(" "),e("div",{staticClass:"bg-black/10 h-10 mx-auto w-full animate-pulse sm:w-8/12 dark:bg-white/5"}),t._v(" "),e("div",{staticClass:"bg-black/10 h-4 animate-pulse dark:bg-white/5"}),t._v(" "),e("div",{staticClass:"bg-black/10 h-xl rounded-lg animate-pulse w-full dark:bg-white/5"})])}],!1,null,null,null);e.default=component.exports;installComponents(component,{Button:r(99).default})},427:function(t,e,r){"use strict";r.r(e);var o=r(0).a.extend({props:{selector:{type:String,required:!0,default:null}},data:function(){return{el:null,scrollY:0,rect:{top:0,bottom:0},window:{height:0,width:0}}},computed:{getPercentLeftBottom:function(){var t=this.rect,e=t.top,r=t.bottom,o=~~((e-this.window.height)/(e-r)*100);return o>100?100:o},isElementVisible:function(){return this.scrollY>175}},mounted:function(){var element=document.querySelector(this.selector);if(element){this.el=element;var t=window,e=t.innerHeight,r=t.innerWidth;this.window={height:e,width:r},window.addEventListener("scroll",this.handleScroll)}},beforeDestroy:function(){window.removeEventListener("scroll",this.handleScroll)},methods:{handleScroll:function(){var t;this.scrollY=window.scrollY;var e=window,r=e.innerHeight,o=e.innerWidth;this.window={height:r,width:o};var n=(null===(t=this.el)||void 0===t?void 0:t.getBoundingClientRect())||{},l=n.top,c=n.bottom;l&&c&&(this.rect={top:l,bottom:c})}}}),n=r(9),component=Object(n.a)(o,(function(){var t=this,e=t._self._c;t._self._setupProxy;return e("transition",{attrs:{name:"fade"}},[e("div",{directives:[{name:"show",rawName:"v-show",value:t.isElementVisible,expression:"isElementVisible"},{name:"tippy",rawName:"v-tippy",value:{content:100===t.getPercentLeftBottom?"100% <3":"".concat(t.getPercentLeftBottom,"% left ^^")},expression:"{ content: getPercentLeftBottom === 100 ? '100% <3' : `${getPercentLeftBottom}% left ^^` }"}]},[e("div",{staticClass:"rounded-md bg-gray-200 h-40 w-1 hidden relative md:block dark:bg-neutral-800"},[e("div",{staticClass:"rounded-md inset-x-0 transition bottom-0 absolute left-0 right-0",class:{"bg-green-500":100===t.getPercentLeftBottom,"bg-gray-300 dark:bg-neutral-600":t.getPercentLeftBottom<100},style:{height:"".concat(t.getPercentLeftBottom,"%")}})])])])}),[],!1,null,null,null);e.default=component.exports},428:function(t,e,r){"use strict";r.r(e);var o=r(0).a.extend({props:{type:{type:String,required:!1,default:"information"},title:{type:String,required:!1,default:""},icon:{type:String,required:!1,default:""}}}),n=(r(406),r(9)),component=Object(n.a)(o,(function(){var t=this._self._c;this._self._setupProxy;return t("hr",{staticClass:"separator"})}),[],!1,null,"3c15f7b3",null);e.default=component.exports},429:function(t,e,r){"use strict";r.r(e);var o=r(25),n=r(5),l=(r(38),r(0).a.extend({props:{currentSlug:{type:String,required:!0,default:null}},data:function(){return{prev:{},next:{}}},fetch:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){var r,n,l,c;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$content("blog").only(["title","slug"]).sortBy("createdAt","asc").surround(t.currentSlug).fetch();case 2:r=e.sent,n=Object(o.a)(r,2),l=n[0],c=n[1],t.prev=l,t.next=c;case 8:case"end":return e.stop()}}),e)})))()}})),c=r(9),component=Object(c.a)(l,(function(){var t=this,e=t._self._c;t._self._setupProxy;return e("transition",{attrs:{name:"fade",mode:"out-in"}},[t.$fetchState.pending||t.$fetchState.error?t._e():e("div",{staticClass:"grid gap-x-4 gap-y-2 grid-cols-1 md:grid-cols-2"},[e(t.prev?"SmartLink":"div",{tag:"component",staticClass:"rounded-lg card-base flex items-center space-x-2",class:t.prev?"dark:hover:text-white hover:bg-opacity-40":"cursor-not-allowed",attrs:{href:t.prev&&"/blog/".concat(t.prev.slug)}},[e("IconChevron",{staticClass:"h-4 w-4 flex-shrink-0",attrs:{left:""}}),t._v(" "),e("span",{staticClass:"truncate"},[t._v(t._s(t.prev&&t.prev.title||"No Older Posts"))])],1),t._v(" "),e(t.next?"SmartLink":"div",{tag:"component",staticClass:"rounded-lg card-base flex items-center space-x-2 justify-end",class:t.next?"dark:hover:text-white hover:bg-opacity-40":"cursor-not-allowed",attrs:{href:t.next&&"/blog/".concat(t.next.slug)}},[e("span",{staticClass:"truncate"},[t._v(t._s(t.next&&t.next.title||"No Newer Posts"))]),t._v(" "),e("IconChevron",{staticClass:"h-4 w-4 flex-shrink-0",attrs:{right:""}})],1)],1)])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{IconChevron:r(266).default})},436:function(t,e,r){"use strict";r.r(e);var o=r(9),component=Object(o.a)({},(function(){var t=this._self._c;return t("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","stroke-width":"2"}},[t("path",{attrs:{"stroke-linecap":"round","stroke-linejoin":"round",d:"M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"}})])}),[],!1,null,null,null);e.default=component.exports},478:function(t,e,r){"use strict";r(414)},479:function(t,e,r){var o=r(66)((function(i){return i[1]}));o.push([t.i,".dark ::selection{--tw-bg-opacity:0.1;--tw-text-opacity:0.9;background-color:hsla(0,0%,100%,.1);background-color:rgba(255,255,255,var(--tw-bg-opacity));color:hsla(0,0%,100%,.9);color:rgba(255,255,255,var(--tw-text-opacity))}::selection{--tw-bg-opacity:0.1;--tw-text-opacity:0.9;background-color:rgba(0,0,0,.1);background-color:rgba(0,0,0,var(--tw-bg-opacity));color:rgba(0,0,0,.9);color:rgba(0,0,0,var(--tw-text-opacity))}.dark ::-moz-selection{background-color:hsla(0,0%,100%,.1);background-color:rgba(255,255,255,var(--tw-bg-opacity));color:hsla(0,0%,100%,.9);color:rgba(255,255,255,var(--tw-text-opacity))}.dark ::-moz-selection,::-moz-selection{--tw-bg-opacity:0.1;--tw-text-opacity:0.9}::-moz-selection{background-color:rgba(0,0,0,.1);background-color:rgba(0,0,0,var(--tw-bg-opacity));color:rgba(0,0,0,.9);color:rgba(0,0,0,var(--tw-text-opacity))}.prose>p{--tw-text-opacity:0.7;color:rgba(0,0,0,.7);color:rgba(0,0,0,var(--tw-text-opacity));font-size:16px;font-weight:400;letter-spacing:.3px;line-height:1.9!important;line-height:1}.dark .prose>p{--tw-text-opacity:0.5;color:hsla(0,0%,100%,.5);color:rgba(255,255,255,var(--tw-text-opacity))}@media (min-width:768px){.prose>p{font-size:18px;line-height:1}}.prose>ol,.prose>ul{--tw-text-opacity:0.7;color:rgba(0,0,0,.7);color:rgba(0,0,0,var(--tw-text-opacity));font-size:16px;font-weight:400;letter-spacing:.3px;line-height:1.9!important;line-height:1}.dark .prose>ol,.dark .prose>ul{--tw-text-opacity:0.5;color:hsla(0,0%,100%,.5);color:rgba(255,255,255,var(--tw-text-opacity))}@media (min-width:768px){.prose>ol,.prose>ul{font-size:18px;line-height:1}}.prose>ol>li:before,.prose>ul>li:before{--tw-text-opacity:0.5;color:rgba(0,0,0,.5);color:rgba(0,0,0,var(--tw-text-opacity))}.dark .prose>ol>li:before,.dark .prose>ul>li:before{--tw-text-opacity:0.5;color:hsla(0,0%,100%,.5);color:rgba(255,255,255,var(--tw-text-opacity))}.nuxt-content a{color:#5686f5!important;text-decoration-color:transparent;text-decoration-thickness:2px;text-underline-offset:4px;transition-duration:.15s;transition-duration:.4s;transition-property:all;transition-timing-function:cubic-bezier(.4,0,.2,1)}.nuxt-content a:hover{text-decoration-color:#5686f5}.nuxt-content .nuxt-content-highlight{position:relative}.nuxt-content .nuxt-content-highlight .filename{--tw-text-opacity:0.5;color:hsla(0,0%,100%,.5);color:rgba(255,255,255,var(--tw-text-opacity));font-size:.75rem;font-weight:300;line-height:1rem;margin-right:3.5rem;margin-top:.75rem;position:absolute;right:0;z-index:10}.nuxt-content .nuxt-content-highlight pre{--tw-bg-opacity:1;--tw-bg-opacity:0.25;--tw-border-opacity:1;background-color:hsla(0,0%,83%,.25);background-color:rgba(212,212,212,var(--tw-bg-opacity));border-color:#e5e5e5;border-color:rgba(229,229,229,var(--tw-border-opacity));border-radius:.5rem;border-width:.1px;margin-bottom:1.25rem;margin-top:1.25rem;max-height:35rem;overflow:auto;padding:1rem;transition-duration:.5s;transition-timing-function:cubic-bezier(.4,0,.2,1)}.dark .nuxt-content .nuxt-content-highlight pre{--tw-bg-opacity:0.3;--tw-border-opacity:1;background-color:rgba(38,38,38,.3);background-color:rgba(38,38,38,var(--tw-bg-opacity));border-color:#262626;border-color:rgba(38,38,38,var(--tw-border-opacity))}.nuxt-content .nuxt-content-highlight ::-webkit-scrollbar{width:.5rem}.nuxt-content .nuxt-content-highlight ::-webkit-scrollbar-track{background:transparent}.nuxt-content .nuxt-content-highlight ::-webkit-scrollbar-thumb{background:#888;border-radius:.5rem}.nuxt-content .nuxt-content-highlight ::-webkit-scrollbar-thumb:hover{background:#555}.nuxt-content .nuxt-content-highlight ::-webkit-scrollbar-corner{background-color:transparent}.nuxt-content code{--tw-bg-opacity:1;--tw-text-opacity:1;background-color:#dbeafe;background-color:rgba(219,234,254,var(--tw-bg-opacity));border-radius:.125rem;color:#2563eb;color:rgba(37,99,235,var(--tw-text-opacity));padding:1px .25rem}.dark .nuxt-content code{--tw-bg-opacity:0.05;background-color:hsla(0,0%,100%,.05);background-color:rgba(255,255,255,var(--tw-bg-opacity))}.prose code:after,.prose code:before{content:none!important}code[class*=language-],pre[class*=language-]{text-shadow:none}.copy-button{--tw-text-opacity:1;bottom:1rem;color:#737373;color:rgba(115,115,115,var(--tw-text-opacity));cursor:pointer;font-size:.75rem;font-weight:300;line-height:1rem;margin-right:.75rem;margin-top:.75rem;opacity:0;position:absolute;right:0;transition-duration:.15s;transition-duration:.2s;transition-property:opacity;transition-timing-function:cubic-bezier(.4,0,.2,1);z-index:10}.copy-button:hover{--tw-text-opacity:1;color:#525252;color:rgba(82,82,82,var(--tw-text-opacity));opacity:1}.dark .copy-button{--tw-text-opacity:0.5;color:hsla(0,0%,100%,.5);color:rgba(255,255,255,var(--tw-text-opacity))}.dark .copy-button:hover{--tw-text-opacity:0.8;color:hsla(0,0%,100%,.8);color:rgba(255,255,255,var(--tw-text-opacity))}.nuxt-content-highlight:hover .copy-button{opacity:1}pre[class*=language-].line-numbers{counter-reset:linenumber;padding-left:3.8em;position:relative}pre[class*=language-].line-numbers>code{position:relative;white-space:inherit}.line-numbers .line-numbers-rows{border-right:1px solid #999;font-size:100%;left:-3.8em;letter-spacing:-1px;pointer-events:none;position:absolute;top:0;-webkit-user-select:none;-moz-user-select:none;user-select:none;width:3em}.line-numbers-rows>span{counter-increment:linenumber;display:block}.line-numbers-rows>span:before{color:#999;content:counter(linenumber);display:block;padding-right:.8em;text-align:right}",""]),o.locals={},t.exports=o},518:function(t,e,r){"use strict";r.r(e);r(46),r(39),r(21),r(47),r(24),r(26),r(48),r(27);var o=r(5),n=(r(17),r(37),r(68),r(6),r(20),r(83),r(38),r(469)),l=r.n(n),c=(r(470),r(471),r(472),r(473),r(474),r(475),r(476),r(477),r(503),r(0)),d=r(269);function h(t,e){var r="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!r){if(Array.isArray(t)||(r=function(t,e){if(!t)return;if("string"==typeof t)return m(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);"Object"===r&&t.constructor&&(r=t.constructor.name);if("Map"===r||"Set"===r)return Array.from(t);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return m(t,e)}(t))||e&&t&&"number"==typeof t.length){r&&(t=r);var i=0,o=function(){};return{s:o,n:function(){return i>=t.length?{done:!0}:{done:!1,value:t[i++]}},e:function(t){throw t},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var n,l=!0,c=!1;return{s:function(){r=r.call(t)},n:function(){var t=r.next();return l=t.done,t},e:function(t){c=!0,n=t},f:function(){try{l||null==r.return||r.return()}finally{if(c)throw n}}}}function m(t,e){(null==e||e>t.length)&&(e=t.length);for(var i=0,r=new Array(e);i<e;i++)r[i]=t[i];return r}var f=c.a.extend({components:{Back:d.default},data:function(){return{post:{},related:[]}},fetch:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){var r,o,n,l,c,d,m,title;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$content("blog",t.$route.params.slug).fetch();case 2:if(o=e.sent){e.next=7;break}return e.next=6,t.$router.push("/blog");case 6:return e.abrupt("return");case 7:if(t.post=o,!(null===(r=o.related)||void 0===r?void 0:r.length)){e.next=31;break}n=[],l=h(o.related),e.prev=11,l.s();case 13:if((c=l.n()).done){e.next=22;break}return d=c.value,e.next=17,t.$content("blog",d).only(["title"]).fetch();case 17:m=e.sent,title=m.title,n.push({title:title,slug:d});case 20:e.next=13;break;case 22:e.next=27;break;case 24:e.prev=24,e.t0=e.catch(11),l.e(e.t0);case 27:return e.prev=27,l.f(),e.finish(27);case 30:t.related=n;case 31:case"end":return e.stop()}}),e,null,[[11,24,27,30]])})))()},head:function(){var t,e=this.post,r=this.getTags,title=e.title,o=e.description||"You were invited to read this post on Asgarrr's blog.",n=(null==r?void 0:r.join(", "))||title,l="https://jeremycaruelle.com".concat(null===(t=this.$route)||void 0===t?void 0:t.path),image="/og-images/".concat(e.slug,".png");return{bodyAttrs:{class:"overflow-x-hidden"},title:title,link:[{rel:"canonical",href:l}],meta:this.$prepareMeta({title:title,description:o,image:"https://jeremycaruelle.com".concat(image),keywords:"".concat(n,", Asgarrrr blog"),url:l},[{name:"twitter:card",content:"summary_large_image"},{name:"article:published-time",content:(null==e?void 0:e.createdAt)||null},{name:"twitter:label1",content:"asgarrrr"},{name:"twitter:data1",content:null==e?void 0:e.createdAt},{name:"twitter:label2",content:"Jérémy Caruelle"},{name:"twitter:data2",content:"".concat(this.getReadingTime," min read")}])}},watch:{$fetchState:{handler:function(t){var e=this;return Object(o.a)(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if(!0!==t.pending&&null===t.error){r.next=2;break}return r.abrupt("return");case 2:return r.next=4,e.$nextTick();case 4:e.$applyMediumZoom(),l.a.highlightAll(),window.isSecureContext&&document.querySelectorAll(".nuxt-content-highlight").forEach((function(t){var button=document.createElement("button");button.className="copy-button",button.textContent="ctrl+c ?",t.appendChild(button),button.addEventListener("click",(function(){var e,r;(null===(e=t.querySelector("pre"))||void 0===e?void 0:e.textContent)&&navigator.clipboard.writeText((null===(r=t.querySelector("pre"))||void 0===r?void 0:r.textContent)||"").then((function(){var e;button.textContent="copied 🔥",button.classList.add("!text-green-500"),null===(e=t.querySelector("pre"))||void 0===e||e.classList.add("!border-green-500"),setTimeout((function(){var e;button.textContent="ctrl+c ?",button.classList.remove("!text-green-500"),null===(e=t.querySelector("pre"))||void 0===e||e.classList.remove("!border-green-500")}),2e3)})).catch((function(){var e;button.textContent="error",button.classList.add("!text-red-500"),null===(e=t.querySelector("pre"))||void 0===e||e.classList.add("!border-red-500"),setTimeout((function(){var e;button.textContent="ctrl+c ?",button.classList.remove("!text-red-500"),null===(e=t.querySelector("pre"))||void 0===e||e.classList.remove("!border-red-500")}),2e3)}))}))}));case 7:case"end":return r.stop()}}),r)})))()},deep:!0}},computed:{getTags:function(){var t;return(null===(t=this.post)||void 0===t?void 0:t.tags)||[]},getReadingTime:function(){return this.$getReadingTime(JSON.stringify(this.post.body))},getReadableDate:function(){var t;return this.$getReadableDate(new Date((null===(t=this.post)||void 0===t?void 0:t.createdAt)||Date.now()))},getRelatedPosts:function(){return this.related||[]}}}),v=(r(478),r(9)),component=Object(v.a)(f,(function(){var t=this,e=t._self._c;t._self._setupProxy;return e("Transition",{attrs:{name:"fade"}},[t.$fetchState.pending||null!==t.$fetchState.error?e("LoadersContent",{attrs:{error:!t.$fetchState.pending&&null!==t.$fetchState.error}}):e("div",{staticClass:"pt-4 mt-10"},[e("article",{staticClass:"!max-w-screen-md mx-auto"},[e("header",{staticClass:"space-y-8 leading-relaxed mb-10"},[e("div",{staticClass:"space-y-4"},[e("div",{staticClass:"flex flex-wrap flex-col justify-center gap-x-6 gap-y-2 dark:text-white/30 text-black/50 sm:text-sm"},[e("div",{staticClass:"flex space-x-2 mb-4 mx-auto"},t._l(t.getTags,(function(r){return e("i",{},[t._v("\n                # "+t._s(r)+"\n              ")])})),0),t._v(" "),e("div",{staticClass:"space-y-5 mb-8 min-w-full"},[e("Back",[t._v("Home")]),t._v(" "),e("h1",{staticClass:"block text-2xl font-bold text-black sm:text-4xl dark:text-white min-w-min min-w-full !leading-normal"},[t._v("\n                "+t._s(t.post.title)+"\n              ")]),t._v(" "),e("div",{staticClass:"flex space-x-2 text-black/50 dark:text-white/50"},[e("span",[t._v(t._s(t.getReadableDate))]),t._v(" "),e("span",[t._v("/")]),t._v(" "),e("span",[t._v(t._s(t.getReadingTime)+" min read ")])])],1)])]),t._v(" "),t.post.header?e("SmartFigure",{staticClass:"object-cover object-top w-full transition-all rounded-lg",attrs:{src:t.post.header,alt:"Post header"}}):t._e()],1),t._v(" "),e("div",{staticClass:"mt-4"},[t.post.indicatorsHidden?t._e():[e("div",{staticClass:"sticky z-10 hidden float-right text-left -mr-14 top-4 md:block"},[e("BlogReadingIndicator",{attrs:{selector:".nuxt-content"}})],1)],t._v(" "),e("NuxtContent",{staticClass:"max-w-full prose prose-black dark:prose-light",attrs:{document:t.post}})],2)]),t._v(" "),e("blog-separator",{staticClass:"max-w-screen-md mx-auto"}),t._v(" "),e("div",{staticClass:"max-w-screen-md mx-auto"},[e("giscus-widget",{attrs:{id:"comments",repo:"Asgarrrr/blog_comments",repoid:"R_kgDOJd9fSg",category:"Announcements",categoryid:"DIC_kwDOJd9fSs4CWNQy",mapping:"pathname",term:"Welcome to giscus!",reactionsenabled:"1",emitmetadata:"0",inputposition:"top",theme:"dark"===t.$colorMode.value?"https://foregoing-chocolate-newt.glitch.me/dark.css":"https://foregoing-chocolate-newt.glitch.me/light.css",lang:"en",loading:"lazy"}})],1),t._v(" "),e("div",{staticClass:"mt-16 space-y-10 max-w-screen-md mx-auto"},[t.getRelatedPosts.length>0?e("div",{staticClass:"space-y-2"},[e("h3",{staticClass:"text-sm dark:text-white/30 text-black/50"},[t._v("\n          Similar Posts\n        ")]),t._v(" "),t.getRelatedPosts.length?e("div",{staticClass:"grid gap-4 sm:grid-cols-2"},t._l(t.getRelatedPosts,(function(r,o){return e("NuxtLink",{key:"related-".concat(o),staticClass:"rounded-lg border-[0.1px] p-4 bg-opacity-25 bg-neutral-300 border-neutral-200 dark:bg-neutral-800/30 dark:border-neutral-800 flex items-center space-x-2 hover:bg-opacity-40 transition-colors dark:text-white/80 dark:hover:text-white transition-colors",attrs:{to:"/blog/".concat(r.slug)}},[e("IconDocument",{staticClass:"w-4 h-4"}),t._v(" "),e("span",{staticClass:"truncate"},[t._v(t._s(r.title))])],1)})),1):t._e()]):t._e(),t._v(" "),e("div",{staticClass:"space-y-2"},[e("h3",{staticClass:"text-sm dark:text-white/30 text-black/50"},[t._v("\n          Continue Reading\n        ")]),t._v(" "),e("BlogPrevNext",{attrs:{"current-slug":t.post.slug}})],1)])],1)],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{LoadersContent:r(426).default,Back:r(269).default,SmartFigure:r(386).default,BlogReadingIndicator:r(427).default,BlogSeparator:r(428).default,IconDocument:r(436).default,BlogPrevNext:r(429).default})}}]);