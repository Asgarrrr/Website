(window.webpackJsonp=window.webpackJsonp||[]).push([[74,13,15,22,37,49],{387:function(t,e,r){"use strict";r.r(e);var n=r(7),o=r(0).a.extend({props:{title:{type:String,required:!1,default:null},description:{type:String,required:!1,default:null},icon:{type:String,required:!1,default:null},href:{type:[],required:!1,default:null},tight:{type:Boolean,required:!1,default:!1},elevated:{type:Boolean,required:!1,default:!1},cursor:{type:Boolean,required:!1,default:!0},truncate:{type:Boolean,required:!1,default:!0}},data:function(){return{classes:"rounded-md overflow-x-hidden transition-colors"}}}),l=r(10),component=Object(l.a)(o,(function(){var t,e=this,r=e._self._c;e._self._setupProxy;return r(e.href?"SmartLink":"div",e._b({tag:"component",staticClass:"rounded-lg card-base",class:(t={},Object(n.a)(t,e.classes,!0),Object(n.a)(t,"p-2",!0===e.tight),Object(n.a)(t,"p-4",!1===e.tight),Object(n.a)(t,"cursor-pointer",!0===e.cursor),Object(n.a)(t,"items-center flex space-x-4",e.$slots.icon||e.$slots["icon-left"]),Object(n.a)(t,"justify-between",e.$slots.icon&&!e.$slots["icon-left"]),t),attrs:{href:e.href}},"component",!!e.href&&e.$attrs,!1),[e.$slots["icon-left"]?r("div",{staticClass:"flex-shrink-0"},[e._t("icon-left")],2):e._e(),e._v(" "),r("div",{staticClass:"overflow-x-hidden leading-relaxed space-y-2"},[e.title?r("h2",{staticClass:"font-medium text-black dark:text-white truncate"},[e._v("\n      "+e._s(e.title)+"\n    ")]):e._e(),e._v(" "),e.$slots.default?r("p",{staticClass:"text-black/50 dark:text-white/30 text-sm",class:!0===e.truncate&&"line-clamp-2"},[e._t("default")],2):e._e()]),e._v(" "),e.$slots.icon?r("div",{staticClass:"flex-shrink-0"},[e._t("icon")],2):e._e()])}),[],!1,null,null,null);e.default=component.exports},404:function(t,e,r){"use strict";r.r(e);var n=r(10),component=Object(n.a)({},(function(){var t=this._self._c;return t("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor"}},[t("path",{attrs:{"stroke-linecap":"round","stroke-linejoin":"round",d:"M12 4.5v15m7.5-7.5h-15"}})])}),[],!1,null,null,null);e.default=component.exports},415:function(t,e,r){var content=r(480);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(81).default)("7aa4f2cd",content,!0,{sourceMap:!1})},429:function(t,e,r){"use strict";r.r(e);var n=r(0).a.extend({props:{title:{type:String,required:!0,default:""},url:{type:String,required:!1,default:null},date:{type:String,required:!1,default:(new Date).getFullYear()},position:{type:String,required:!1,default:null},hiddenBadge:{type:Boolean,required:!1,default:!1}}}),o=r(10),component=Object(o.a)(n,(function(){var t=this,e=t._self._c;t._self._setupProxy;return e("SmartLink",{attrs:{href:t.url,blank:""}},[e("div",{staticClass:"card-base leading-relaxed rounded-lg"},[e("div",{staticClass:"flex space-x-2 items-center justify-between"},[e("h3",[t._v(t._s(t.title))]),t._v(" "),e("span",{staticClass:"text-black/50 dark:text-white/30 text-sm"},[t._v(t._s(t.date))])]),t._v(" "),t.position?e("div",{staticClass:"truncate text-sm text-black/50 dark:text-white/30",class:t.hiddenBadge&&"flex items-center justify-between"},[t._v("\n      "+t._s(t.position)+"\n      "),t.hiddenBadge?e("IconPlus",{staticClass:"h-4 w-4"}):t._e()],1):t._e()])])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{IconPlus:r(404).default,SmartLink:r(169).default})},430:function(t,e,r){"use strict";r.r(e);var n=r(0).a.extend({props:{title:{type:String,required:!0,default:""},image:{type:String,required:!1,default:""},iconPack:{type:String,required:!1,default:"IconDev"}}}),o=r(10),component=Object(o.a)(n,(function(){var t=this,e=t._self._c;t._self._setupProxy;return e("div",{staticClass:"card-base rounded-lg flex items-center space-x-4"},[e("div",{staticClass:"rounded-lg flex"},[t.image?e("SmartImage",{staticClass:"h-5 w-5 flex-shrink-0",attrs:{src:t.image}}):e(t.iconPack,{tag:"component",staticClass:"flex-shrink-0 h-5 w-5",attrs:{brand:t.title}})],1),t._v(" "),e("span",{staticClass:"flex-1 truncate text-sm"},[t._v("\n    "+t._s(t.title)+"\n  ")])])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{SmartImage:r(265).default})},444:function(t,e,r){"use strict";r.r(e);var n=r(10),component=Object(n.a)({},(function(){var t=this._self._c;return t("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor"}},[t("path",{attrs:{"stroke-linecap":"round","stroke-linejoin":"round",d:"M6.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM12.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM18.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"}})])}),[],!1,null,null,null);e.default=component.exports},479:function(t,e,r){"use strict";r(415)},480:function(t,e,r){var n=r(80)((function(i){return i[1]}));n.push([t.i,".description-link[data-v-7789ed6e]{--tw-border-opacity:1;--tw-border-opacity:0.5;border-bottom-width:2px;border-color:hsla(0,0%,45%,.5);border-color:rgba(115,115,115,var(--tw-border-opacity))}.description-link[data-v-7789ed6e]:hover{--tw-border-opacity:0.75}",""]),n.locals={},t.exports=n},517:function(t,e,r){"use strict";r.r(e);var n=r(13),o=(r(17),r(36),r(5)),l=(r(37),r(30),r(60),r(0).a.extend({data:function(){return{showModal:!1,showExtra:{jobs:!1,education:!1},repos:[],experiences:{jobs:[{title:"Google Developer Student Clubs",url:"https://gdsc.community.dev/mus-alparslan-universitesi",position:"Core Team Member",date:"2022-"},{title:"EskiYeni Academy Theater",url:"https://eskiyenitiyatro.com",position:"Web Developer & Social Media Manager",date:"2022-"},{title:"Discord Templates",url:"https://discords.com/templates",position:"Web Developer & Co-Founder",date:"2020-2021"},{title:"IZM Game Studios",url:"https://izmgamestudios.com",position:"Solution Partner",date:"2020-2021",isHidden:!0},{title:"TruckersMP",url:"https://truckersmp.com/user/1648033",position:"Community Moderator & Translator",date:"2020-2021",isHidden:!0},{title:"WA Web+ Extension",url:"https://wawplus.com",position:"Translator",date:"2020-2021",isHidden:!0},{title:"Batakköylü Düğün Salonu",url:"https://batakkoylu.netlify.app",position:"Web Developer",date:"2020-2020",isHidden:!0},{title:"EGGSY's Discord Bot",url:"https://top.gg/bot/eggsy",position:"Creator, Developer and Maintainer",date:"2017-2019"},{title:"Discord Bot List",url:"https://top.gg/user/162969778699501569",position:"Website Moderator",date:"2017-2018"}],education:[{title:"Self-taught",position:"A blend of passion, curiosity and fascination.",date:"For life"},{title:"Technological degree in Baccalaureate in STI2D",url:"https://edouard-branly.ac-amiens.fr/",position:"Edouard Branly / France, Amiens",date:"2016-2018"},{title:"Two-year technical degree in Computer Science",url:"https://www.la-providence.net/fr/",position:"La Providence / France, Amiens",date:"2020-2022"},{title:"Professional Bachelor's degree in Web and Mobile Application Design and Development",url:"http://www.insset.u-picardie.fr/",position:"INSSET / France, Saint-Quentin",date:"2022-2023"}]},cards:{me:[{title:"Repositories",description:"Want to see and/or contribute to my code and public repositories?",href:"/me/repos"},{title:"Songs",description:"Trust your taste? Compare your favourite songs and artists with mine!",href:"/me/songs"},{title:"Contact",description:"Need help with anything? Want to get in touch? Send me a message!",href:"/me/contact"}],pages:[{title:"Blog",description:"My personal blog where I write about development, technology and non-sense stuff.",href:"/blog"},{title:"Projects",description:"My projects and contributions to the open-source community.",href:"/projects"},{title:"Donate",description:"Want to support me and my projects so that I can create better stuff in the future?",href:"/donate"}]},skills:[{title:"Development",items:["TypeScript","Vue.js","React.js","HTML5","Tailwind CSS","Node.js","Sass"]},{title:"Apps",items:[{title:"VS Code",iconPack:"IconBrand"},{title:"Raycast",image:"https://i.imgur.com/NBc0C4j.png"},{title:"Figma"}]},{title:"Services",items:[{title:"GitHub",iconPack:"IconBrand"},{title:"Firebase"},{title:"Netlify",iconPack:"IconBrand"}]}]}},head:{title:"Home"},methods:{scrollToSection:function(t){var e=this;return Object(o.a)(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if(e.$route.hash!==t){r.next=3;break}return r.next=3,e.$router.replace({hash:""});case 3:return r.next=5,e.$router.replace({hash:t});case 5:case"end":return r.stop()}}),r)})))()}}})),c=(r(479),r(10)),component=Object(c.a)(l,(function(){var t,e,r,o,l=this,c=l._self._c;l._self._setupProxy;return c("div",{staticClass:"space-y-24 mb-10"},[c("header",{staticClass:"rounded-md flex flex-col-reverse my-16 py-10 md:flex-row md:items-center md:justify-between justify-center"},[c("div",{staticClass:"md:w-8/12"},[c("div",{staticClass:"space-y-6"},[c("Status",{staticClass:"mt-4 flex justify-center md:justify-start"}),l._v(" "),c("h1",{staticClass:"font-semibold text-center text-1xl md:text-1xl md:text-left text-black/90 leading-normal dark:text-white/90"},[l._v("\n          Hi, my name is\n        ")]),l._v(" "),c("h1",{staticClass:"font-semibold text-center text-4xl md:text-6xl md:text-left text-black/90 leading-normal dark:text-white/90"},[l._v("\n          Jérémy Caruelle\n        ")]),l._v(" "),c("h2",{staticClass:"font-normal text-center text-2xl md:text-2xl md:text-left text-black/60 leading-normal dark:text-white/60"},[l._v("\n          I'm a "+l._s((t=new Date,e=new Date(2e3,11,14),r=t.getMonth()-e.getMonth(),o=t.getFullYear()-e.getFullYear(),(r<0||0===r&&t.getDate()<e.getDate())&&o--,o))+" years old French fullstack developer\n        ")]),l._v(" "),c("div",{staticClass:"flex items-center justify-center md:justify-start gap-x-3 gap-y-2 flex-wrap"},[l._l(["TypeScript","Vue.js","React.js"],(function(t){return c("Button",{key:t,staticClass:"inline-block"},[c("IconDev",{staticClass:"h-5 w-5",attrs:{brand:t}})],1)})),l._v(" "),c("Button",{directives:[{name:"tippy",rawName:"v-tippy",value:{content:"More",placement:"bottom"},expression:"{ content: 'More', placement: 'bottom' }"}],nativeOn:{click:function(t){return l.scrollToSection("#technologies")}}},[c("IconEllipsis",{staticClass:"h-5 w-5"})],1)],2)],1)]),l._v(" "),c("div",{staticClass:"rounded-full mx-auto mb-4 md:mb-0"},[c("SmartImage",{staticClass:"rounded-full h-64 w-64",attrs:{src:"/assets/images/memoji.png"}})],1)]),l._v(" "),c("section",{attrs:{id:"pages"}},[c("Title",[l._v("Pages")]),l._v(" "),c("div",{staticClass:"mt-4 grid gap-4 md:grid-cols-2"},l._l(l.cards.pages,(function(t,e){return c("Card",{key:"card-p-".concat(e),attrs:{title:t.title,href:t.href}},[l._v("\n        "+l._s(t.description)+"\n      ")])})),1)],1),l._v(" "),c("section",{attrs:{id:"me"}},[c("Title",[l._v("Me")]),l._v(" "),c("div",{staticClass:"mt-4 grid gap-4 md:grid-cols-2"},l._l(l.cards.me,(function(t,e){return c("Card",{key:"card-m-".concat(e),attrs:{title:t.title,href:t.href}},[l._v("\n        "+l._s(t.description)+"\n      ")])})),1)],1),l._v(" "),c("section",{staticClass:"grid gap-x-8 gap-y-24 md:grid-cols-2",attrs:{id:"experiences"}},[c("div",[c("div",{staticClass:"flex items-center gap-4 justify-between"},[c("Title",[l._v("Experience")]),l._v(" "),c("button",{staticClass:"text-black/50 text-sm hover:underline dark:text-white/30",attrs:{type:"button"},on:{click:function(t){l.showExtra.jobs=!l.showExtra.jobs}}},[l._v("\n          "+l._s(l.showExtra.jobs?"show less":"show more")+"\n        ")])],1),l._v(" "),c("div",{staticClass:"mt-4 grid gap-2"},l._l(l.experiences.jobs,(function(t,e){return c("CardExperience",{directives:[{name:"show",rawName:"v-show",value:!t.isHidden||l.showExtra.jobs,expression:"experience.isHidden ? showExtra.jobs : true"}],key:"experience-job-".concat(e),attrs:{title:t.title,url:t.url,"hidden-badge":t.isHidden,date:t.date,position:t.position}})})),1)]),l._v(" "),c("div",[c("div",{staticClass:"flex items-center gap-4 justify-between"},[c("Title",[l._v("Education")]),l._v(" "),c("button",{staticClass:"text-black/50 text-sm hover:underline dark:text-white/30",attrs:{type:"button"},on:{click:function(t){l.showExtra.education=!l.showExtra.education}}},[l._v("\n          "+l._s(l.showExtra.education?"show less":"show more")+"\n        ")])],1),l._v(" "),c("div",{staticClass:"mt-4 grid gap-2"},l._l(l.experiences.education,(function(t,e){return c("CardExperience",{directives:[{name:"show",rawName:"v-show",value:!t.isHidden||l.showExtra.education,expression:"experience.isHidden ? showExtra.education : true"}],key:"experience-education-".concat(e),attrs:{title:t.title,url:t.url,"hidden-badge":t.isHidden,date:t.date,position:t.position}})})),1)])]),l._v(" "),c("section",{attrs:{id:"technologies"}},[c("Title",[l._v("Technologies I use")]),l._v(" "),c("div",{staticClass:"flex flex-col space-y-6 mt-8"},l._l(l.skills,(function(t){return c("section",{key:t.title},[c("h5",{staticClass:"text-sm uppercase text-black/50 pb-2 mb-4 border-b border-black/5 dark:text-white/30 dark:border-white/5"},[l._v("\n          "+l._s(t.title)+"\n        ")]),l._v(" "),c("div",{staticClass:"grid md:grid-cols-3 grid-cols-1 lg:grid-cols-4 gap-x-2 gap-y-2"},l._l(t.items,(function(t,e){return c("CardSkill",l._b({key:"skill-".concat(e)},"CardSkill","object"===Object(n.a)(t)?t:{title:t},!1))})),1)])})),0)],1)])}),[],!1,null,"7789ed6e",null);e.default=component.exports;installComponents(component,{Status:r(503).default,IconDev:r(399).default,Button:r(99).default,IconEllipsis:r(444).default,SmartImage:r(265).default,Title:r(266).default,Card:r(387).default,Button:r(99).default,CardExperience:r(429).default,CardSkill:r(430).default})}}]);