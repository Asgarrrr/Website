(window.webpackJsonp=window.webpackJsonp||[]).push([[82,7,67,72],{376:function(t,o,r){var content=r(384);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(67).default)("4729cb5b",content,!0,{sourceMap:!1})},379:function(t,o,r){"use strict";r.r(o);r(17),r(37);var e=r(0).a.extend({props:{title:{type:String,required:!0},description:{type:String,required:!1,default:[]}},computed:{getDescriptions:function(){return[this.description]}}}),n=r(9),component=Object(n.a)(e,(function(){var t=this,o=t._self._c;t._self._setupProxy;return o("div",{staticClass:"text-black/50 dark:text-white/30"},[o("header",{staticClass:"space-y-2 my-12"},[o("h1",{staticClass:"text-black/90 dark:text-white/90 text-4xl font-semibold"},[t._v("\n      "+t._s(t.title)+"\n    ")]),t._v(" "),t._l(t.getDescriptions,(function(r,e){return o("p",{key:"description-".concat(e)},[t._v("\n      "+t._s(r)+"\n    ")])}))],2),t._v(" "),t._t("default")],2)}),[],!1,null,null,null);o.default=component.exports},383:function(t,o,r){"use strict";r(376)},384:function(t,o,r){var e=r(66)((function(i){return i[1]}));e.push([t.i,".medium-zoom-overlay{z-index:40}.medium-zoom-image.medium-zoom-image--opened{z-index:50}",""]),e.locals={},t.exports=e},386:function(t,o,r){"use strict";r.r(o);r(167);var e=r(0).a.extend({props:{src:{type:String,required:!1,default:null},alt:{type:String,required:!1,default:null},caption:{type:String,required:!1,default:null},imageClass:{type:Array,required:!1,default:function(){return[]}},border:{type:Boolean,required:!1,default:!1},zoomable:{type:Boolean,required:!1,default:!0}}}),n=(r(383),r(9)),component=Object(n.a)(e,(function(){var t=this,o=t._self._c;t._self._setupProxy;return o("figure",{staticClass:"w-full h-full overflow-hidden"},[o(t.src.endsWith(".gif")?"img":"nuxt-img",{tag:"component",staticClass:"object-cover w-full rounded-md",class:[t.imageClass,t.border&&"border border-black/10 dark:border-white/10"],attrs:{src:t.src,alt:t.alt||t.caption||"image",loading:"lazy",draggable:"false",fit:"cover","data-zoomable":t.zoomable}}),t._v(" "),t.caption?o("figcaption",{staticClass:"text-center mt-3"},[t._v("\n    "+t._s(t.caption)+"\n  ")]):t._e()],1)}),[],!1,null,null,null);o.default=component.exports},394:function(t,o,r){var content=r(405);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(67).default)("2850a750",content,!0,{sourceMap:!1})},404:function(t,o,r){"use strict";r(394)},405:function(t,o,r){var e=r(66)((function(i){return i[1]}));e.push([t.i,".notification[data-v-0090a470],.nuxt-content .notification[data-v-0090a470]{--tw-bg-opacity:1;--tw-bg-opacity:0.25;--tw-border-opacity:1;background-color:hsla(0,0%,83%,.25);background-color:rgba(212,212,212,var(--tw-bg-opacity));border-color:#e5e5e5;border-color:rgba(229,229,229,var(--tw-border-opacity));border-radius:.5rem;border-width:.1px;margin-bottom:1.25rem;margin-top:1.25rem;padding:1rem}.dark .notification[data-v-0090a470],.dark .nuxt-content .notification[data-v-0090a470]{--tw-bg-opacity:0.3;--tw-border-opacity:1;background-color:rgba(38,38,38,.3);background-color:rgba(38,38,38,var(--tw-bg-opacity));border-color:#262626;border-color:rgba(38,38,38,var(--tw-border-opacity))}.notification h1[data-v-0090a470],.nuxt-content .notification h1[data-v-0090a470]{font-size:1.125rem;font-weight:500;line-height:1.75rem;margin:0}.notification h1[data-v-0090a470]:hover,.nuxt-content .notification h1[data-v-0090a470]:hover{-webkit-text-decoration:none;text-decoration:none}.notification a[data-v-0090a470],.notification p[data-v-0090a470],.notification p strong[data-v-0090a470],.nuxt-content .notification a[data-v-0090a470],.nuxt-content .notification p[data-v-0090a470],.nuxt-content .notification p strong[data-v-0090a470]{margin:0}.dark .notification a[data-v-0090a470],.dark .notification p[data-v-0090a470],.dark .notification p strong[data-v-0090a470],.dark .nuxt-content .notification a[data-v-0090a470],.dark .nuxt-content .notification p[data-v-0090a470],.dark .nuxt-content .notification p strong[data-v-0090a470]{--tw-text-opacity:0.7;color:hsla(0,0%,100%,.7);color:rgba(255,255,255,var(--tw-text-opacity))}.notification a[data-v-0090a470],.nuxt-content .notification a[data-v-0090a470]{color:currentColor;font-weight:500;text-decoration-line:underline}.notification a[data-v-0090a470]:hover,.nuxt-content .notification a[data-v-0090a470]:hover{text-decoration-line:underline}.notification.information[data-v-0090a470],.nuxt-content .notification.information[data-v-0090a470]{--tw-bg-opacity:1;--tw-border-opacity:1;background-color:#dbeafe;background-color:rgba(219,234,254,var(--tw-bg-opacity));border-color:#bfdbfe;border-color:rgba(191,219,254,var(--tw-border-opacity))}.dark .notification.information[data-v-0090a470],.dark .nuxt-content .notification.information[data-v-0090a470]{--tw-bg-opacity:0.3;--tw-border-opacity:1;background-color:rgba(30,64,175,.3);background-color:rgba(30,64,175,var(--tw-bg-opacity));border-color:#1e40af;border-color:rgba(30,64,175,var(--tw-border-opacity))}.notification.warning[data-v-0090a470],.nuxt-content .notification.warning[data-v-0090a470]{--tw-bg-opacity:1;--tw-border-opacity:1;background-color:#fef3c7;background-color:rgba(254,243,199,var(--tw-bg-opacity));border-color:#fde68a;border-color:rgba(253,230,138,var(--tw-border-opacity))}.dark .notification.warning[data-v-0090a470],.dark .nuxt-content .notification.warning[data-v-0090a470]{--tw-bg-opacity:0.3;--tw-border-opacity:1;background-color:rgba(146,64,14,.3);background-color:rgba(146,64,14,var(--tw-bg-opacity));border-color:#92400e;border-color:rgba(146,64,14,var(--tw-border-opacity))}.notification.error[data-v-0090a470],.nuxt-content .notification.error[data-v-0090a470]{--tw-bg-opacity:1;--tw-border-opacity:1;background-color:#fee2e2;background-color:rgba(254,226,226,var(--tw-bg-opacity));border-color:#fecaca;border-color:rgba(254,202,202,var(--tw-border-opacity))}.dark .notification.error[data-v-0090a470],.dark .nuxt-content .notification.error[data-v-0090a470]{--tw-bg-opacity:0.3;--tw-border-opacity:1;background-color:rgba(153,27,27,.3);background-color:rgba(153,27,27,var(--tw-bg-opacity));border-color:#991b1b;border-color:rgba(153,27,27,var(--tw-border-opacity))}.notification.success[data-v-0090a470],.nuxt-content .notification.success[data-v-0090a470]{--tw-bg-opacity:1;--tw-border-opacity:1;background-color:#d1fae5;background-color:rgba(209,250,229,var(--tw-bg-opacity));border-color:#a7f3d0;border-color:rgba(167,243,208,var(--tw-border-opacity))}.dark .notification.success[data-v-0090a470],.dark .nuxt-content .notification.success[data-v-0090a470]{--tw-bg-opacity:0.3;--tw-border-opacity:1;background-color:rgba(6,95,70,.3);background-color:rgba(6,95,70,var(--tw-bg-opacity));border-color:#065f46;border-color:rgba(6,95,70,var(--tw-border-opacity))}",""]),e.locals={},t.exports=e},422:function(t,o,r){"use strict";r.r(o);var e=r(0).a.extend({props:{type:{type:String,required:!1,default:""},title:{type:String,required:!1,default:""},icon:{type:String,required:!1,default:""}}}),n=(r(404),r(9)),component=Object(n.a)(e,(function(){var t=this,o=t._self._c;t._self._setupProxy;return o("div",{staticClass:"notification flex flex-col md:items-center md:flex-row gap-x-4 gap-y-2",class:t.type},[o("span",{staticClass:"text-xl md:text-lg"},[t._v(t._s(t.icon))]),t._v(" "),o("div",[t.title?o("h1",[t._v(t._s(t.title))]):t._e(),t._v(" "),t.$slots.default?o("p",[t._t("default")],2):t._e()])])}),[],!1,null,"0090a470",null);o.default=component.exports},462:function(t,o,r){"use strict";var e=r(2),n=r(267);e({target:"String",proto:!0,forced:r(268)("link")},{link:function(t){return n(this,"a","href",t)}})},510:function(t,o,r){"use strict";r.r(o);r(68),r(21),r(17),r(37),r(462),r(69);var e={head:function(){var title="Projects";return{title:title,meta:this.$prepareMeta({title:title,description:"Check out my projects and see what I can build for you!"})}},data:function(){return{projects:[{client:"Personal",name:"Rogue",description:"A procedurally generated roguelike-style game where players explore a dungeon filled with monsters and treasures.",image:"https://i.imgur.com/GVCH2f5.png",buttons:[{text:"Read more",link:"/projects/rogue",icon:"IconLink"},{text:"Play now",link:"https://rogue-ii-production.up.railway.app/login",icon:"IconPlay"}]},{client:"Personal",name:"Riftmaker",description:"A real-time League of Legends AI companion, delivering game insights and assisting players with up-to-date information.",image:"https://cdn.discordapp.com/attachments/864261615402876948/1106130034277765181/Riftmaker.png",buttons:[{text:"Read more",link:"/projects/riftmaker",icon:"IconLink"}]},{client:"Personal",name:"Luna",note:"This project is currently on hold",description:"An intuitive and user-friendly Discord bot providing a wide range of features, like moderation, music, and more serving over 150k users across 2,000+ servers.",image:"https://cdn.discordapp.com/attachments/883739697665417247/1113640056016609300/MacBook_Pro_16__-_3.png"}]}},mounted:function(){this.$applyMediumZoom()}},n=r(9),component=Object(n.a)(e,(function(){var t=this,o=t._self._c;return o("PageLayout",{attrs:{title:"My Projects",description:"Check out the projects I worked on!"}},[o("blog-notification",{attrs:{type:"danger"}},[o("p",[o("strong",[t._v("Notice:")]),t._v(" This page is still under construction. Some projects may be missing, and projects pages may be incomplete.\n    ")])]),t._v(" "),o("section",{staticClass:"flex items-center flex-wrap gap-2"},[o("span",{staticClass:"text-sm"},[t._v("Jump to:")]),t._v(" "),t._l(t.projects,(function(r,e){return o("Button",{key:"skipto-button-".concat(e),attrs:{href:"#".concat(r.name.toLowerCase().split(" ").join("-"))}},[t._v("\n      "+t._s(r.name)+"\n    ")])}))],2),t._v(" "),t._l(t.projects,(function(r,e){return o("section",{key:"project-".concat(e),staticClass:"grid md:grid-cols-2 gap-8 md:gap-12 items-center",class:0===e?"mt-24 mb-42":"my-42",attrs:{id:r.name.toLowerCase().split(" ").join("-")}},[o("div",{staticClass:"space-y-4"},[o("div",{staticClass:"flex"},[r.client?o("span",{staticClass:"bg-blue-600/10 block w-max text-sm rounded-lg px-4 text-blue-600 py-1.5 dark:bg-white/5 dark:text-white/30"},[t._v("\n          "+t._s(r.client)+"\n\n        ")]):t._e(),t._v(" "),r.note?o("span",{staticClass:"ml-3 bg-orange-600/10 block w-max text-sm rounded-lg px-4 text-orange-600 py-1.5 dark:bg-white/5 dark:text-white/30"},[t._v("\n          "+t._s(r.note)+"\n        ")]):t._e()]),t._v(" "),o("h2",{staticClass:"text-4xl text-black/90 font-bold dark:text-white/90"},[t._v("\n        "+t._s(r.name)+"\n      ")]),t._v(" "),o("p",[t._v("\n        "+t._s(r.description)+"\n      ")]),t._v(" "),r.buttons?o("div",{staticClass:"flex flex-wrap gap-2"},t._l(r.buttons,(function(button,r){return o("Button",{key:"button-".concat(r),attrs:{href:button.link,blank:!button.link.startsWith("/")},scopedSlots:t._u([{key:"icon",fn:function(){return[button.icon?o(button.icon.split(":")[0],t._b({tag:"component",staticClass:"h-4 w-4"},"component",{brand:button.icon.split(":")[1]},!1)):t._e()]},proxy:!0}],null,!0)},[t._v("\n\n          "+t._s(button.text)+"\n        ")])})),1):t._e()]),t._v(" "),r.image?o("SmartFigure",{class:e%2==0&&"md:order-first",attrs:{src:r.image,border:""}}):t._e()],1)}))],2)}),[],!1,null,null,null);o.default=component.exports;installComponents(component,{BlogNotification:r(422).default,Button:r(99).default,SmartFigure:r(386).default,PageLayout:r(379).default})}}]);