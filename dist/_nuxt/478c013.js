(window.webpackJsonp=window.webpackJsonp||[]).push([[81,66,71],{374:function(t,e,r){var content=r(383);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(81).default)("09a2553a",content,!0,{sourceMap:!1})},376:function(t,e,r){"use strict";r.r(e);r(17),r(36);var n=r(0).a.extend({props:{title:{type:String,required:!0},description:{type:String,required:!1,default:[]}},computed:{getDescriptions:function(){return"string"==typeof this.description?[this.description]:this.description}}}),l=r(10),component=Object(l.a)(n,(function(){var t=this,e=t._self._c;t._self._setupProxy;return e("div",{staticClass:"text-black/50 dark:text-white/30"},[e("header",{staticClass:"space-y-2 my-12"},[e("h1",{staticClass:"text-black/90 dark:text-white/90 text-4xl font-semibold"},[t._v("\n      "+t._s(t.title)+"\n    ")]),t._v(" "),t._l(t.getDescriptions,(function(r,n){return e("p",{key:"description-".concat(n)},[t._v("\n      "+t._s(r)+"\n    ")])}))],2),t._v(" "),t._t("default")],2)}),[],!1,null,null,null);e.default=component.exports},382:function(t,e,r){"use strict";r(374)},383:function(t,e,r){var n=r(80)((function(i){return i[1]}));n.push([t.i,".medium-zoom-overlay{z-index:40}.medium-zoom-image.medium-zoom-image--opened{z-index:50}",""]),n.locals={},t.exports=n},384:function(t,e,r){"use strict";r.r(e);r(170);var n=r(0).a.extend({props:{src:{type:String,required:!1,default:null},alt:{type:String,required:!1,default:null},caption:{type:String,required:!1,default:null},imageClass:{type:String,required:!1,default:null},border:{type:Boolean,required:!1,default:!1},zoomable:{type:Boolean,required:!1,default:!0}}}),l=(r(382),r(10)),component=Object(l.a)(n,(function(){var t=this,e=t._self._c;t._self._setupProxy;return e("figure",{staticClass:"w-full h-full overflow-hidden"},[e(t.src.endsWith(".gif")?"img":"nuxt-img",{tag:"component",staticClass:"object-cover w-full rounded-md",class:[t.imageClass,t.border&&"border border-black/10 dark:border-white/10"],attrs:{src:t.src,alt:t.alt||t.caption||"image",loading:"lazy",draggable:"false",fit:"cover","data-zoomable":t.zoomable}}),t._v(" "),t.caption?e("figcaption",{staticClass:"text-center mt-3"},[t._v("\n    "+t._s(t.caption)+"\n  ")]):t._e()],1)}),[],!1,null,null,null);e.default=component.exports},508:function(t,e,r){"use strict";r.r(e);var n=r(0),l=r(265),o=r(264),c=r(396),d=n.a.extend({components:{Fire:c.default,Image:o.default,Title:l.default},data:function(){return{languages:["Node.js"]}},head:function(){var title="Luna";return{title:title,meta:this.$prepareMeta({title:title,description:"A multi-purpose Discord bot helping you build your community by providing a wide range of features.",image:"https://cdn.discordapp.com/attachments/883057183128969216/1111626523171110963/luna.png",keywords:"Luna, Discord, Bot, Discord bot, Discord.js, Node.js, JavaScript",url:"https://jeremycaruelle.com/projects/luna"}),link:[{rel:"canonical",href:"https://jeremycaruelle.com/projects/luna"}]}}}),f=r(10),component=Object(f.a)(d,(function(){var t=this,e=t._self._c;t._self._setupProxy;return e("PageLayout",{staticClass:"space-y-12",attrs:{title:"Luna",description:"An intuitive and user-friendly Discord bot providing a wide range of features, like moderation, music, and more serving over 150k users across 2,000+ servers."}},[e("SmartFigure",{staticClass:"max-w-xl mx-auto p-4",attrs:{src:"https://cdn.discordapp.com/attachments/883057183128969216/1111626523171110963/luna.png"}}),t._v(" "),e("section",{staticClass:"space-y-4"},[e("Title",{attrs:{size:"2"}},[t._v(" Technologies used ")]),t._v(" "),e("div",{staticClass:"flex flex-wrap gap-2"},t._l(t.languages,(function(r,i){return e("span",{key:"language-".concat(i),staticClass:"px-2 py-1 text-sm font-medium text-white rounded bg-neutral-900"},[t._v("\n        "+t._s(r)+"\n      ")])})),0),t._v(" "),e("Title",{staticClass:"mt-24",attrs:{size:"2"}},[t._v(" Role ")]),t._v(" "),e("p",{staticClass:"dark:text-white/70 ml-2"},[t._v("\n      Developer\n    ")]),t._v(" "),e("Title",{staticClass:"mt-24",attrs:{size:"2"}},[t._v(" Context ")]),t._v(" "),e("div",{staticClass:"dark:text-white/70 ml-2"},[e("p",[t._v("\n        Luna is born from the idea of creating a multi-purpose Discord bot that would be easy to use and intuitive,\n      ")]),t._v(" "),e("p",{staticClass:"mt-2"})])],1),t._v(" "),e("hr",{staticClass:"dark:border-white/10 border-2 rounded-full"}),t._v(" "),e("section",{staticClass:"space-y-4"},[e("Title",{attrs:{size:"2"}},[t._v(" Features ")])],1)],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{SmartFigure:r(384).default,Title:r(265).default,PageLayout:r(376).default})}}]);