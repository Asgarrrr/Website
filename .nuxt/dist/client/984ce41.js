(window.webpackJsonp=window.webpackJsonp||[]).push([[81,7,66,71],{370:function(t,e,n){var content=n(379);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(81).default)("09a2553a",content,!0,{sourceMap:!1})},372:function(t,e,n){"use strict";n.r(e);n(17),n(36);var o=n(0).a.extend({props:{title:{type:String,required:!0},description:{type:String,required:!1,default:[]}},computed:{getDescriptions:function(){return"string"==typeof this.description?[this.description]:this.description}}}),r=n(10),component=Object(r.a)(o,(function(){var t=this,e=t._self._c;t._self._setupProxy;return e("div",{staticClass:"text-black/50 dark:text-white/30"},[e("header",{staticClass:"space-y-2 my-12"},[e("h1",{staticClass:"text-black/90 dark:text-white/90 text-4xl font-semibold"},[t._v("\n      "+t._s(t.title)+"\n    ")]),t._v(" "),t._l(t.getDescriptions,(function(n,o){return e("p",{key:"description-".concat(o)},[t._v("\n      "+t._s(n)+"\n    ")])}))],2),t._v(" "),t._t("default")],2)}),[],!1,null,null,null);e.default=component.exports},378:function(t,e,n){"use strict";n(370)},379:function(t,e,n){var o=n(80)((function(i){return i[1]}));o.push([t.i,".medium-zoom-overlay{z-index:40}.medium-zoom-image.medium-zoom-image--opened{z-index:50}",""]),o.locals={},t.exports=o},380:function(t,e,n){"use strict";n.r(e);n(167);var o=n(0).a.extend({props:{src:{type:String,required:!1,default:null},alt:{type:String,required:!1,default:null},caption:{type:String,required:!1,default:null},imageClass:{type:String,required:!1,default:null},border:{type:Boolean,required:!1,default:!1},zoomable:{type:Boolean,required:!1,default:!0}}}),r=(n(378),n(10)),component=Object(r.a)(o,(function(){var t=this,e=t._self._c;t._self._setupProxy;return e("figure",{staticClass:"w-full h-full overflow-hidden"},[e(t.src.endsWith(".gif")?"img":"nuxt-img",{tag:"component",staticClass:"object-cover w-full rounded-md",class:[t.imageClass,t.border&&"border border-black/10 dark:border-white/10"],attrs:{src:t.src,alt:t.alt||t.caption||"image",loading:"lazy",draggable:"false",fit:"cover","data-zoomable":t.zoomable}}),t._v(" "),t.caption?e("figcaption",{staticClass:"text-center mt-3"},[t._v("\n    "+t._s(t.caption)+"\n  ")]):t._e()],1)}),[],!1,null,null,null);e.default=component.exports},387:function(t,e,n){var content=n(398);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(81).default)("3a048b53",content,!0,{sourceMap:!1})},397:function(t,e,n){"use strict";n(387)},398:function(t,e,n){var o=n(80)((function(i){return i[1]}));o.push([t.i,".notification[data-v-fee9c2ec],.nuxt-content .notification[data-v-fee9c2ec]{--tw-bg-opacity:1;--tw-bg-opacity:0.25;--tw-border-opacity:1;background-color:hsla(0,0%,83%,.25);background-color:rgba(212,212,212,var(--tw-bg-opacity));border-color:#e5e5e5;border-color:rgba(229,229,229,var(--tw-border-opacity));border-radius:.5rem;border-width:.1px;margin-bottom:1.25rem;margin-top:1.25rem;padding:1rem}.dark .notification[data-v-fee9c2ec],.dark .nuxt-content .notification[data-v-fee9c2ec]{--tw-bg-opacity:0.3;--tw-border-opacity:1;background-color:rgba(38,38,38,.3);background-color:rgba(38,38,38,var(--tw-bg-opacity));border-color:#262626;border-color:rgba(38,38,38,var(--tw-border-opacity))}.notification h1[data-v-fee9c2ec],.nuxt-content .notification h1[data-v-fee9c2ec]{font-size:1.125rem;font-weight:500;line-height:1.75rem;margin:0}.notification h1[data-v-fee9c2ec]:hover,.nuxt-content .notification h1[data-v-fee9c2ec]:hover{-webkit-text-decoration:none;text-decoration:none}.notification a[data-v-fee9c2ec],.notification p[data-v-fee9c2ec],.notification p strong[data-v-fee9c2ec],.nuxt-content .notification a[data-v-fee9c2ec],.nuxt-content .notification p[data-v-fee9c2ec],.nuxt-content .notification p strong[data-v-fee9c2ec]{margin:0}.dark .notification a[data-v-fee9c2ec],.dark .notification p[data-v-fee9c2ec],.dark .notification p strong[data-v-fee9c2ec],.dark .nuxt-content .notification a[data-v-fee9c2ec],.dark .nuxt-content .notification p[data-v-fee9c2ec],.dark .nuxt-content .notification p strong[data-v-fee9c2ec]{--tw-text-opacity:0.7;color:hsla(0,0%,100%,.7);color:rgba(255,255,255,var(--tw-text-opacity))}.notification a[data-v-fee9c2ec],.nuxt-content .notification a[data-v-fee9c2ec]{color:currentColor;font-weight:500;text-decoration-line:underline}.notification a[data-v-fee9c2ec]:hover,.nuxt-content .notification a[data-v-fee9c2ec]:hover{text-decoration-line:underline}",""]),o.locals={},t.exports=o},414:function(t,e,n){"use strict";n.r(e);var o=n(0).a.extend({props:{type:{type:String,required:!1,default:"information"},title:{type:String,required:!1,default:""},icon:{type:String,required:!1,default:""}}}),r=(n(397),n(10)),component=Object(r.a)(o,(function(){var t=this,e=t._self._c;t._self._setupProxy;return e("div",{staticClass:"notification flex flex-col md:items-center md:flex-row gap-x-4 gap-y-2",class:t.type},[e("span",{staticClass:"text-xl md:text-lg"},[t._v(t._s(t.icon))]),t._v(" "),e("div",[t.title?e("h1",[t._v(t._s(t.title))]):t._e(),t._v(" "),t.$slots.default?e("p",[t._t("default")],2):t._e()])])}),[],!1,null,"fee9c2ec",null);e.default=component.exports},453:function(t,e,n){"use strict";var o=n(2),r=n(263);o({target:"String",proto:!0,forced:n(264)("link")},{link:function(t){return r(this,"a","href",t)}})},500:function(t,e,n){"use strict";n.r(e);n(65),n(23),n(17),n(36),n(453),n(66);var o={head:function(){var title="Projects";return{title:title,meta:this.$prepareMeta({title:title,description:"Check out my projects and see what I can build for you!"})}},data:function(){return{projects:[{client:"Personal",name:"Rogue",description:"A procedurally generated roguelike-style game where players explore a dungeon filled with monsters and treasures.",image:"https://i.imgur.com/GVCH2f5.png",buttons:[{text:"Read more",link:"/projects/rogue",icon:"IconLink"},{text:"Play now",link:"https://rogue-ii-production.up.railway.app/login",icon:"IconPlay"}]},{client:"Personal",name:"Riftmaker",description:"A real-time League of Legends AI companion, delivering game insights and assisting players with up-to-date information.",image:"https://cdn.discordapp.com/attachments/864261615402876948/1106130034277765181/Riftmaker.png",buttons:[{text:"Read more",link:"/projects/riftmaker",icon:"IconLink"}]},{client:"Personal",name:"Luna",note:"This project is currently on hold",description:"An intuitive and user-friendly Discord bot providing a wide range of features, like moderation, music, and more serving over 150k users across 2,000+ servers.",image:"https://cdn.discordapp.com/attachments/883739697665417247/1113640056016609300/MacBook_Pro_16__-_3.png"}]}},mounted:function(){this.$applyMediumZoom()}},r=n(10),component=Object(r.a)(o,(function(){var t=this,e=t._self._c;return e("PageLayout",{attrs:{title:"My Projects",description:"Check out the projects I worked on!"}},[e("blog-notification",{attrs:{type:"danger"}},[e("p",[e("strong",[t._v("Notice:")]),t._v(" This page is still under construction. Some projects may be missing, and projects pages may be incomplete.\n    ")])]),t._v(" "),e("section",{staticClass:"flex items-center flex-wrap gap-2"},[e("span",{staticClass:"text-sm"},[t._v("Jump to:")]),t._v(" "),t._l(t.projects,(function(n,o){return e("Button",{key:"skipto-button-".concat(o),attrs:{href:"#".concat(n.name.toLowerCase().split(" ").join("-"))}},[t._v("\n      "+t._s(n.name)+"\n    ")])}))],2),t._v(" "),t._l(t.projects,(function(n,o){return e("section",{key:"project-".concat(o),staticClass:"grid md:grid-cols-2 gap-8 md:gap-12 items-center",class:0===o?"mt-24 mb-42":"my-42",attrs:{id:n.name.toLowerCase().split(" ").join("-")}},[e("div",{staticClass:"space-y-4"},[e("div",{staticClass:"flex"},[n.client?e("span",{staticClass:"bg-blue-600/10 block w-max text-sm rounded-lg px-4 text-blue-600 py-1.5 dark:bg-white/5 dark:text-white/30"},[t._v("\n          "+t._s(n.client)+"\n\n        ")]):t._e(),t._v(" "),n.note?e("span",{staticClass:"ml-3 bg-orange-600/10 block w-max text-sm rounded-lg px-4 text-orange-600 py-1.5 dark:bg-white/5 dark:text-white/30"},[t._v("\n          "+t._s(n.note)+"\n        ")]):t._e()]),t._v(" "),e("h2",{staticClass:"text-4xl text-black/90 font-bold dark:text-white/90"},[t._v("\n        "+t._s(n.name)+"\n      ")]),t._v(" "),e("p",[t._v("\n        "+t._s(n.description)+"\n      ")]),t._v(" "),n.buttons?e("div",{staticClass:"flex flex-wrap gap-2"},t._l(n.buttons,(function(button,n){return e("Button",{key:"button-".concat(n),attrs:{href:button.link,blank:!button.link.startsWith("/")},scopedSlots:t._u([{key:"icon",fn:function(){return[button.icon?e(button.icon.split(":")[0],t._b({tag:"component",staticClass:"h-4 w-4"},"component",{brand:button.icon.split(":")[1]},!1)):t._e()]},proxy:!0}],null,!0)},[t._v("\n\n          "+t._s(button.text)+"\n        ")])})),1):t._e()]),t._v(" "),n.image?e("SmartFigure",{class:o%2==0&&"md:order-first",attrs:{src:n.image,border:""}}):t._e()],1)}))],2)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{BlogNotification:n(414).default,Button:n(99).default,SmartFigure:n(380).default,PageLayout:n(372).default})}}]);