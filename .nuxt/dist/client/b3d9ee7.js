(window.webpackJsonp=window.webpackJsonp||[]).push([[72,8,10,12,30,35,39,56,61],{389:function(t,e,r){"use strict";r.r(e);var n=r(10),component=Object(n.a)({},(function(){var t=this._self._c;return t("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"}},[t("path",{attrs:{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"}})])}),[],!1,null,null,null);e.default=component.exports},411:function(t,e,r){var content=r(474);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(81).default)("2575d7e6",content,!0,{sourceMap:!1})},423:function(t,e,r){"use strict";r.r(e);var n=r(0).a.extend({props:{error:{type:Boolean,required:!1,default:!1}}}),o=r(10),component=Object(o.a)(n,(function(){var t=this,e=t._self._c;t._self._setupProxy;return!1===t.error?e("div",{staticClass:"w-full pt-14"},[t._m(0),t._v(" "),e("div",{staticClass:"space-y-10 mt-10 w-full"},[e("div",{staticClass:"space-y-1"},t._l(6,(function(t){return e("div",{key:t,staticClass:"bg-black/10 h-4 animate-pulse dark:bg-white/5",class:6!==t?"w-full":"w-8/12"})})),0),t._v(" "),e("div",{staticClass:"space-y-1"},t._l(4,(function(t){return e("div",{key:t,staticClass:"bg-black/10 h-4 animate-pulse dark:bg-white/5",class:4!==t?"w-full":"w-1/2"})})),0),t._v(" "),e("div",{staticClass:"space-y-1"},t._l(24,(function(t){return e("div",{key:t,staticClass:"bg-black/10 h-4 animate-pulse dark:bg-white/5",class:24!==t?"w-full":"w-1/2"})})),0)])]):e("div",{staticClass:"space-y-6 pt-14"},[e("h1",{staticClass:"font-semibold text-2xl text-black/90 dark:text-white/90"},[t._v("\n    Gönderi yüklenemedi.\n  ")]),t._v(" "),e("p",{staticClass:"text-black/50 dark:text-white/30"},[t._v("\n    Aradığınız gönderinin blogumda olduğuna, adreste bir yanlışlık olmadığına\n    emin olun. Arama özelliğini kullanarak gönderiyi aratabilir, anasayfaya\n    dönerek diğer gönderilerime ulaşabilirsiniz.\n  ")]),t._v(" "),e("Button",{attrs:{icon:"IconBack"},nativeOn:{click:function(e){return t.$router.back()}}},[t._v("Geri Dön")])],1)}),[function(){var t=this,e=t._self._c;t._self._setupProxy;return e("section",{staticClass:"space-y-8"},[e("div",{staticClass:"bg-black/10 h-30 rounded-lg animate-pulse w-full dark:bg-white/5"}),t._v(" "),e("div",{staticClass:"space-y-4"},[e("div",{staticClass:"flex space-x-2 justify-center"},[e("div",{staticClass:"bg-black/10 h-4 animate-pulse w-1/4 sm:w-1/6 dark:bg-white/5"}),t._v(" "),e("div",{staticClass:"bg-black/10 h-4 animate-pulse w-1/4 sm:w-1/6 dark:bg-white/5"}),t._v(" "),e("div",{staticClass:"bg-black/10 h-4 animate-pulse w-1/4 sm:w-1/6 dark:bg-white/5"})]),t._v(" "),e("div",{staticClass:"bg-black/10 h-10 mx-auto w-full animate-pulse sm:w-8/12 dark:bg-white/5"}),t._v(" "),e("div",{staticClass:"flex flex-col space-y-2 items-center justify-center"},[e("div",{staticClass:"bg-black/10 h-4 w-full animate-pulse sm:w-8/12 dark:bg-white/5"}),t._v(" "),e("div",{staticClass:"bg-black/10 h-4 animate-pulse w-1/2 sm:w-4/12 dark:bg-white/5"})])])])}],!1,null,null,null);e.default=component.exports;installComponents(component,{Button:r(99).default})},424:function(t,e,r){"use strict";r.r(e);var n=r(0).a.extend({props:{selector:{type:String,required:!0,default:null}},data:function(){return{el:null,scrollY:0,rect:{top:0,bottom:0},window:{height:0,width:0}}},computed:{getPercentLeftBottom:function(){var t=this.rect,e=t.top,r=t.bottom,n=Math.round((e-this.window.height)/(e-r)*100);return n>100?100:n},isElementVisible:function(){return this.scrollY>175}},mounted:function(){var element=document.querySelector(this.selector);if(element){this.el=element;var t=window,e=t.innerHeight,r=t.innerWidth;this.window={height:e,width:r},window.addEventListener("scroll",this.handleScroll)}},beforeDestroy:function(){window.removeEventListener("scroll",this.handleScroll)},methods:{handleScroll:function(){var t;this.scrollY=window.scrollY;var e=window,r=e.innerHeight,n=e.innerWidth;this.window={height:r,width:n};var o=(null===(t=this.el)||void 0===t?void 0:t.getBoundingClientRect())||{},l=o.top,c=o.bottom;l&&c&&(this.rect={top:l,bottom:c})}}}),o=r(10),component=Object(o.a)(n,(function(){var t=this,e=t._self._c;t._self._setupProxy;return e("transition",{attrs:{name:"fade"}},[e("div",{directives:[{name:"show",rawName:"v-show",value:t.isElementVisible,expression:"isElementVisible"},{name:"tippy",rawName:"v-tippy",value:{content:100===t.getPercentLeftBottom?"Tüm yazı okundu!":"Okuma oranı"},expression:"{\n      content:\n        getPercentLeftBottom === 100 ? 'Tüm yazı okundu!' : 'Okuma oranı',\n    }"}]},[e("div",{staticClass:"rounded-md bg-gray-200 h-40 w-4 hidden relative md:block dark:bg-neutral-800"},[e("div",{staticClass:"rounded-md inset-x-0 transition bottom-0 absolute",class:{"bg-green-500":100===t.getPercentLeftBottom,"bg-gray-300 dark:bg-neutral-600":t.getPercentLeftBottom<100},style:{height:"".concat(t.getPercentLeftBottom,"%")}})])])])}),[],!1,null,null,null);e.default=component.exports},425:function(t,e,r){"use strict";r.r(e);var n=r(0).a.extend({props:{toc:{type:Array,required:!0,default:function(){return[]}}},data:function(){return{tocToggled:!1}}}),o=r(10),component=Object(o.a)(n,(function(){var t=this,e=t._self._c;t._self._setupProxy;return t.toc&&t.toc.length>0?e("div",{staticClass:"rounded-md flex flex-col space-y-2 mb-6"},[e("div",{staticClass:"cursor-pointer flex font-medium space-x-1 text-sm transition-colors text-gray-500 items-center dark:text-dark-100 hover:text-gray-700 dark:hover:text-white/40 select-none",on:{click:function(e){t.tocToggled=!t.tocToggled}}},[e("h1",{staticClass:"uppercase"},[t._v("Başlıklar")]),t._v(" "),e("transition",{attrs:{name:"fade",mode:"out-in"}},[t.tocToggled?e("IconChevron",{key:"'tocToggledFalse'",staticClass:"h-4 w-4",attrs:{down:""}}):e("IconChevron",{key:"'tocToggled'",staticClass:"h-4 w-4",attrs:{right:""}})],1)],1),t._v(" "),e("ul",{directives:[{name:"show",rawName:"v-show",value:!0===t.tocToggled,expression:"tocToggled === true"}],staticClass:"flex flex-wrap gap-2 items-center"},t._l(t.toc||[],(function(link){return e("li",{key:link.id,staticClass:"border-b border-gray-300 text-sm transition-colors text-dark-400 dark:border-dark-200 dark:text-white/30 hover:text-dark-700 dark:hover:text-white/60"},[link.id?e("a",{attrs:{href:"#".concat(link.id)}},[t._v("\n        "+t._s(link.text)+"\n      ")]):t._e()])})),0)]):t._e()}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{IconChevron:r(267).default})},426:function(t,e,r){"use strict";r.r(e);var n=r(25),o=r(5),l=(r(37),r(0).a.extend({props:{currentSlug:{type:String,required:!0,default:null}},data:function(){return{prev:{},next:{}}},fetch:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){var r,o,l,c;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$content("blog").only(["title","slug"]).sortBy("createdAt","asc").surround(t.currentSlug).fetch();case 2:r=e.sent,o=Object(n.a)(r,2),l=o[0],c=o[1],t.prev=l,t.next=c;case 8:case"end":return e.stop()}}),e)})))()}})),c=r(10),component=Object(c.a)(l,(function(){var t=this,e=t._self._c;t._self._setupProxy;return e("transition",{attrs:{name:"fade",mode:"out-in"}},[!1!==t.$fetchState.pending||t.$fetchState.error?t._e():e("div",{staticClass:"grid gap-x-4 gap-y-2 grid-cols-1 md:grid-cols-2"},[e(t.prev?"SmartLink":"div",{tag:"component",staticClass:"rounded-lg card-base flex items-center space-x-2",class:t.prev?"dark:hover:text-white hover:bg-opacity-40":"cursor-not-allowed",attrs:{href:t.prev&&"/blog/".concat(t.prev.slug)}},[e("IconChevron",{staticClass:"h-4 w-4 flex-shrink-0",attrs:{left:""}}),t._v(" "),t.prev?e("span",{staticClass:"truncate"},[t._v(t._s(t.prev.title))]):e("span",{staticClass:"truncate"},[t._v("Eski Gönderi Yok")])],1),t._v(" "),e(t.next?"SmartLink":"div",{tag:"component",staticClass:"rounded-lg card-base flex items-center space-x-2 justify-end",class:t.next?"dark:hover:text-white hover:bg-opacity-40":"cursor-not-allowed",attrs:{href:t.next&&"/blog/".concat(t.next.slug)}},[t.next?e("span",{staticClass:"truncate"},[t._v(t._s(t.next.title))]):e("span",{staticClass:"truncate"},[t._v("Yeni Gönderi Yok")]),t._v(" "),e("IconChevron",{staticClass:"h-4 w-4 flex-shrink-0",attrs:{right:""}})],1)],1)])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{IconChevron:r(267).default})},438:function(t,e,r){"use strict";r.r(e);var n=r(10),component=Object(n.a)({},(function(){var t=this._self._c;return t("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor"}},[t("path",{attrs:{"stroke-linecap":"round","stroke-linejoin":"round",d:"M5.25 8.25h15m-16.5 7.5h15m-1.8-13.5l-3.9 19.5m-2.1-19.5l-3.9 19.5"}})])}),[],!1,null,null,null);e.default=component.exports},439:function(t,e,r){"use strict";r.r(e);var n=r(10),component=Object(n.a)({},(function(){var t=this._self._c;return t("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor"}},[t("path",{attrs:{"stroke-linecap":"round","stroke-linejoin":"round",d:"M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"}}),this._v(" "),t("path",{attrs:{"stroke-linecap":"round","stroke-linejoin":"round",d:"M15 12a3 3 0 11-6 0 3 3 0 016 0z"}})])}),[],!1,null,null,null);e.default=component.exports},441:function(t,e,r){"use strict";r.r(e);var n=r(10),component=Object(n.a)({},(function(){var t=this._self._c;return t("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","stroke-width":"2"}},[t("path",{attrs:{"stroke-linecap":"round","stroke-linejoin":"round",d:"M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"}})])}),[],!1,null,null,null);e.default=component.exports},473:function(t,e,r){"use strict";r(411)},474:function(t,e,r){var n=r(80)((function(i){return i[1]}));n.push([t.i,'.dark .prose .nuxt-content-highlight{box-shadow:0 0 0 100vmax #262626}.dark .prose .nuxt-content-highlight pre{--tw-bg-opacity:1;background-color:#262626;background-color:rgba(38,38,38,var(--tw-bg-opacity))}.light .nuxt-content-highlight{box-shadow:0 0 0 100vmax #282c34}.nuxt-content .nuxt-content-highlight{-webkit-clip-path:inset(0 -100vmax);clip-path:inset(0 -100vmax);margin-bottom:1.25rem;position:relative}.nuxt-content .nuxt-content-highlight .filename{--tw-text-opacity:0.5;color:hsla(0,0%,100%,.5);color:rgba(255,255,255,var(--tw-text-opacity));font-size:.75rem;font-weight:300;line-height:1rem;margin-right:.75rem;margin-top:.75rem;position:absolute;right:0;z-index:10}.nuxt-content .nuxt-content-highlight pre{border-radius:0;padding:1rem 0}.nuxt-content ol{padding-left:0}.nuxt-content video{border-radius:.5rem}.nuxt-content kbd{background-color:rgba(0,0,0,.1);background-color:rgba(0,0,0,var(--tw-bg-opacity));border-bottom-width:2px;border-color:rgba(0,0,0,.3);border-color:rgba(0,0,0,var(--tw-border-opacity));border-radius:.5rem;cursor:default;font-size:.875rem;line-height:1.25rem;padding:.25rem .5rem}.dark .nuxt-content kbd,.nuxt-content kbd{--tw-bg-opacity:0.1;--tw-border-opacity:0.3}.dark .nuxt-content kbd{background-color:hsla(0,0%,100%,.1);background-color:rgba(255,255,255,var(--tw-bg-opacity));border-color:hsla(0,0%,100%,.3);border-color:rgba(255,255,255,var(--tw-border-opacity))}.nuxt-content code{--tw-bg-opacity:1;--tw-text-opacity:1;background-color:#dbeafe;background-color:rgba(219,234,254,var(--tw-bg-opacity));color:#2563eb;color:rgba(37,99,235,var(--tw-text-opacity));padding:1px .25rem}.dark .nuxt-content code{--tw-bg-opacity:0.05;background-color:hsla(0,0%,100%,.05);background-color:rgba(255,255,255,var(--tw-bg-opacity))}.nuxt-content code:after,.nuxt-content code:before{content:"`"}',""]),n.locals={},t.exports=n},514:function(t,e,r){"use strict";r.r(e);r(65),r(17),r(36),r(45),r(6),r(23),r(46),r(24),r(30),r(47),r(26);var n=r(5);r(37);function o(t,e){var r="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!r){if(Array.isArray(t)||(r=function(t,e){if(!t)return;if("string"==typeof t)return l(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);"Object"===r&&t.constructor&&(r=t.constructor.name);if("Map"===r||"Set"===r)return Array.from(t);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return l(t,e)}(t))||e&&t&&"number"==typeof t.length){r&&(t=r);var i=0,n=function(){};return{s:n,n:function(){return i>=t.length?{done:!0}:{done:!1,value:t[i++]}},e:function(t){throw t},f:n}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,c=!0,d=!1;return{s:function(){r=r.call(t)},n:function(){var t=r.next();return c=t.done,t},e:function(t){d=!0,o=t},f:function(){try{c||null==r.return||r.return()}finally{if(d)throw o}}}}function l(t,e){(null==e||e>t.length)&&(e=t.length);for(var i=0,r=new Array(e);i<e;i++)r[i]=t[i];return r}var c=r(0).a.extend({data:function(){return{post:{},related:[]}},fetch:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){var r,n,l,c,d,h,v,title;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$content("blog",t.$route.params.slug).fetch();case 2:if(n=e.sent){e.next=6;break}return t.$router.push("/blog"),e.abrupt("return");case 6:if(t.post=n,!(null===(r=n.related)||void 0===r?void 0:r.length)){e.next=30;break}l=[],c=o(n.related),e.prev=10,c.s();case 12:if((d=c.n()).done){e.next=21;break}return h=d.value,e.next=16,t.$content("blog",h).only(["title"]).fetch();case 16:v=e.sent,title=v.title,l.push({title:title,slug:h});case 19:e.next=12;break;case 21:e.next=26;break;case 23:e.prev=23,e.t0=e.catch(10),c.e(e.t0);case 26:return e.prev=26,c.f(),e.finish(26);case 29:t.related=l;case 30:case"end":return e.stop()}}),e,null,[[10,23,26,29]])})))()},head:function(){var t,e=this.post,r=this.getTags,title=e.title,n=e.description||"You were invited to read this post on Asgarrr's blog.",o=(null==r?void 0:r.join(", "))||title,l="https://jeremycaruelle.fr".concat(null===(t=this.$route)||void 0===t?void 0:t.path),image="/og-images/".concat(e.slug,".png");return{bodyAttrs:{class:"overflow-x-hidden"},title:title,link:[{rel:"canonical",href:l}],meta:this.$prepareMeta({title:title,description:n,image:image,keywords:"".concat(o,", Asgarrrr blog"),url:l},[{name:"twitter:card",content:"summary_large_image"},{name:"article:published-time",content:(null==e?void 0:e.createdAt)||null},{name:"twitter:label1",content:"asgarrrr"},{name:"twitter:data1",content:null==e?void 0:e.createdAt},{name:"twitter:label2",content:"Jérémy Caruelle"},{name:"twitter:data2",content:"".concat(this.getReadingTime," min read")}])}},watch:{$fetchState:{handler:function(t){var e=this;return Object(n.a)(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if(!0!==t.pending&&null===t.error){r.next=2;break}return r.abrupt("return");case 2:return r.next=4,e.$nextTick();case 4:e.$applyMediumZoom();case 5:case"end":return r.stop()}}),r)})))()},deep:!0}},computed:{getTags:function(){var t;return(null===(t=this.post)||void 0===t?void 0:t.tags)||[]},getReadingTime:function(){return this.$getReadingTime(JSON.stringify(this.post.body))},getReadableDate:function(){var t;return this.$getReadableDate(new Date((null===(t=this.post)||void 0===t?void 0:t.createdAt)||Date.now()))},getRelatedPosts:function(){return this.related||[]}}}),d=(r(473),r(10)),component=Object(d.a)(c,(function(){var t=this,e=t._self._c;t._self._setupProxy;return e("Transition",{attrs:{name:"fade"}},[!0===t.$fetchState.pending||null!==t.$fetchState.error?e("LoadersContent",{attrs:{error:!1===t.$fetchState.pending&&null!==t.$fetchState.error}}):e("div",{staticClass:"pt-4 mt-10"},[e("article",[e("header",{staticClass:"space-y-8 leading-relaxed text-center mb-18"},[t.post.header?e("NuxtImg",{staticClass:"object-cover object-top w-full transition-all rounded-lg h-30 ring-1 dark:ring-white/10 ring-black/10 hover:object-bottom duration-2000",attrs:{src:t.post.header,alt:"Post header"}}):t._e(),t._v(" "),e("div",{staticClass:"space-y-4"},[e("div",{staticClass:"flex flex-wrap items-center justify-center gap-x-6 gap-y-2 dark:text-white/30 text-black/50 sm:text-sm"},[e("div",{staticClass:"flex items-center space-x-2"},[e("IconCalendar",{staticClass:"w-4 h-4"}),t._v(" "),e("span",[t._v(t._s(t.getReadableDate))])],1),t._v(" "),e("div",{staticClass:"flex items-center space-x-2"},[e("IconTag",{staticClass:"w-4 h-4"}),t._v(" "),e("span",[t._v(t._s(t.getTags.join(" － ")))])],1),t._v(" "),e("div",{staticClass:"flex items-center space-x-2"},[e("IconEye",{staticClass:"w-4 h-4"}),t._v(" "),e("span",[t._v(t._s(t.getReadingTime)+" minute reading")])],1)]),t._v(" "),e("div",{staticClass:"space-y-2"},[e("h1",{staticClass:"block mx-auto text-2xl font-bold text-black md:w-11/12 sm:text-4xl dark:text-white"},[t._v("\n              "+t._s(t.post.title)+"\n            ")]),t._v(" "),e("p",{staticClass:"mx-auto text-black/50 md:w-9/12 dark:text-white/50"},[t._v("\n              "+t._s(t.post.description)+"\n            ")])])])],1),t._v(" "),e("div",{staticClass:"mt-4"},[t.post.indicatorsHidden?t._e():[e("div",{staticClass:"sticky z-10 hidden float-left -ml-20 text-right top-4 md:block"},[e("BlogShare",{attrs:{type:"vertical",title:t.post.title,path:t.$route.path}})],1),t._v(" "),e("div",{staticClass:"sticky z-10 hidden float-right text-left -mr-14 top-4 md:block"},[e("BlogReadingIndicator",{attrs:{selector:".nuxt-content"}})],1)],t._v(" "),e("BlogTableOfContents",{attrs:{toc:t.post.toc}}),t._v(" "),e("NuxtContent",{staticClass:"max-w-full prose prose-black dark:prose-light",attrs:{document:t.post}})],2)]),t._v(" "),t.$config.isDev?t._e():e("Disqus",{staticClass:"mt-10",attrs:{title:t.post.title,url:"https://jeremycaruelle.fr/blog/".concat(t.post.slug),identifier:"/blog/".concat(t.post.slug),slug:t.post.slug,lang:"tr"}}),t._v(" "),e("div",{staticClass:"mt-16 space-y-10"},[t.getRelatedPosts.length>0?e("div",{staticClass:"space-y-2"},[e("h3",{staticClass:"text-sm dark:text-white/30 text-black/50"},[t._v("\n          Similar Posts\n        ")]),t._v(" "),t.getRelatedPosts.length?e("div",{staticClass:"grid gap-4 sm:grid-cols-2"},t._l(t.getRelatedPosts,(function(r,n){return e("NuxtLink",{key:"related-".concat(n),staticClass:"rounded-lg border-[0.1px] p-4 bg-opacity-25 bg-neutral-300 border-neutral-200 dark:bg-neutral-800/30 dark:border-neutral-800 flex items-center space-x-2 hover:bg-opacity-40 transition-colors dark:text-white/80 dark:hover:text-white transition-colors",attrs:{to:"/blog/".concat(r.slug)}},[e("IconDocument",{staticClass:"w-4 h-4"}),t._v(" "),e("span",{staticClass:"truncate"},[t._v(t._s(r.title))])],1)})),1):t._e()]):t._e(),t._v(" "),e("div",{staticClass:"space-y-2"},[e("h3",{staticClass:"text-sm dark:text-white/30 text-black/50"},[t._v("\n          Continue Reading\n        ")]),t._v(" "),e("BlogPrevNext",{attrs:{"current-slug":t.post.slug}})],1)])],1)],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{LoadersContent:r(423).default,IconCalendar:r(389).default,IconTag:r(438).default,IconEye:r(439).default,BlogShare:r(500).default,BlogReadingIndicator:r(424).default,BlogTableOfContents:r(425).default,IconDocument:r(441).default,BlogPrevNext:r(426).default})}}]);