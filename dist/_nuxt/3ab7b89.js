(window.webpackJsonp=window.webpackJsonp||[]).push([[77,64,69],{374:function(e,t,n){var content=n(383);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(81).default)("09a2553a",content,!0,{sourceMap:!1})},376:function(e,t,n){"use strict";n.r(t);n(17),n(36);var r=n(0).a.extend({props:{title:{type:String,required:!0},description:{type:String,required:!1,default:[]}},computed:{getDescriptions:function(){return"string"==typeof this.description?[this.description]:this.description}}}),o=n(10),component=Object(o.a)(r,(function(){var e=this,t=e._self._c;e._self._setupProxy;return t("div",{staticClass:"text-black/50 dark:text-white/30"},[t("header",{staticClass:"space-y-2 my-12"},[t("h1",{staticClass:"text-black/90 dark:text-white/90 text-4xl font-semibold"},[e._v("\n      "+e._s(e.title)+"\n    ")]),e._v(" "),e._l(e.getDescriptions,(function(n,r){return t("p",{key:"description-".concat(r)},[e._v("\n      "+e._s(n)+"\n    ")])}))],2),e._v(" "),e._t("default")],2)}),[],!1,null,null,null);t.default=component.exports},382:function(e,t,n){"use strict";n(374)},383:function(e,t,n){var r=n(80)((function(i){return i[1]}));r.push([e.i,".medium-zoom-overlay{z-index:40}.medium-zoom-image.medium-zoom-image--opened{z-index:50}",""]),r.locals={},e.exports=r},384:function(e,t,n){"use strict";n.r(t);n(170);var r=n(0).a.extend({props:{src:{type:String,required:!1,default:null},alt:{type:String,required:!1,default:null},caption:{type:String,required:!1,default:null},imageClass:{type:String,required:!1,default:null},border:{type:Boolean,required:!1,default:!1},zoomable:{type:Boolean,required:!1,default:!0}}}),o=(n(382),n(10)),component=Object(o.a)(r,(function(){var e=this,t=e._self._c;e._self._setupProxy;return t("figure",{staticClass:"w-full h-full overflow-hidden"},[t(e.src.endsWith(".gif")?"img":"nuxt-img",{tag:"component",staticClass:"object-cover w-full rounded-md",class:[e.imageClass,e.border&&"border border-black/10 dark:border-white/10"],attrs:{src:e.src,alt:e.alt||e.caption||"image",loading:"lazy",draggable:"false",fit:"cover","data-zoomable":e.zoomable}}),e._v(" "),e.caption?t("figcaption",{staticClass:"text-center mt-3"},[e._v("\n    "+e._s(e.caption)+"\n  ")]):e._e()],1)}),[],!1,null,null,null);t.default=component.exports},504:function(e,t,n){"use strict";n.r(t);var r=n(0),o=n(265),l=n(264),d=r.a.extend({components:{Image:l.default,Title:o.default},data:function(){return{languages:["Node.js"]}},head:function(){var title="Abyss";return{title:title,meta:this.$prepareMeta({title:title,description:"A real-time League of Legends AI companion, delivering game insights and assisting players with up-to-date information",image:"https://i.imgur.com/CuVtvKW.png",keywords:"League of Legends, AI, Riftmaker, Rift, Maker",url:"https://jeremycaruelle.com/projects/riftmaker"}),link:[{rel:"canonical",href:"https://jeremycaruelle.com/projects/riftmaker"}]}}}),c=n(10),component=Object(c.a)(d,(function(){var e=this,t=e._self._c;e._self._setupProxy;return t("PageLayout",{staticClass:"space-y-12",attrs:{title:"Riftmaker",description:"A real-time League of Legends AI companion, delivering game insights and assisting players with up-to-date information"}},[t("SmartFigure",{attrs:{src:"https://cdn.discordapp.com/attachments/864261615402876948/1106130034277765181/Riftmaker.png",border:""}}),e._v(" "),t("section",{staticClass:"space-y-4"},[t("Title",{attrs:{size:"2"}},[e._v(" Technologies used ")]),e._v(" "),t("div",{staticClass:"flex flex-wrap gap-2"},e._l(e.languages,(function(n,i){return t("span",{key:"language-".concat(i),staticClass:"px-2 py-1 text-sm font-medium text-white rounded bg-neutral-900"},[e._v("\n        "+e._s(n)+"\n      ")])})),0),e._v(" "),t("Title",{staticClass:"mt-24",attrs:{size:"2"}},[e._v(" Role ")]),e._v(" "),t("p",{staticClass:"dark:text-white/70 ml-2"},[e._v("\n      Developer, Researcher and Designer "),t("span",{staticClass:"mx-2"},[e._v("—")]),e._v(" All the code, design and research was done by me.\n    ")]),e._v(" "),t("Title",{staticClass:"mt-24",attrs:{size:"2"}},[e._v(" Context ")]),e._v(" "),t("div",{staticClass:"dark:text-white/70 ml-2"},[t("p",[e._v("\n        As an avid League of Legends player, I have always been frustrated with the lack of reliable and up-to-date information available during matches.\n        This led me to create Riftmaker as a solution to my own needs and the needs of the League of Legends community.\n      ")]),e._v(" "),t("p",{staticClass:"mt-4"},[e._v("\n        I believe that having access to real-time insights and personalized recommendations will not only improve my own\n        gameplay but also enhance the overall gaming experience for players worldwide.\n      ")]),e._v(" "),t("p",{staticClass:"mt-4"},[e._v("\n        Artificial intelligence and machine learning allow us to analyze millions of data points in real-time, providing\n        players with personalized recommendations and insights that are tailored to their unique playstyle.\n      ")]),e._v(" "),t("p",{staticClass:"mt-4"},[e._v("\n        — "),t("i",[e._v("By creating Riftmaker, I aim to revolutionize how players approach the game, empowering them with knowledge\n        and strategic advantages to dominate the Rift.")])])])],1),e._v(" "),t("hr",{staticClass:"dark:border-white/10 border-2 rounded-full"}),e._v(" "),t("section",{staticClass:"space-y-4"},[t("Title",{attrs:{size:"1",uppercase:""}},[e._v(" In detail explanation")]),e._v(" "),t("Title",{staticClass:"!mt-12",attrs:{size:"2"}},[e._v(" What is League of Legends? ")]),e._v(" "),t("p",{staticClass:"dark:text-white/70 ml-2"},[e._v("\n      League of Legends is a highly popular competitive online game set in a fantasy universe. In this game, two teams face off against each other to destroy the enemy's base while defending their own. Each player controls a unique champion with special abilities and must work together as a team to conquer objectives such as killing neutral monsters, destroying towers, and eliminating enemy champions. League of Legends combines strategy, individual skills, and team coordination to provide an engaging and competitive gaming experience. The game features a wide variety of champions with different playstyles, allowing players to find one that best suits their preferred style of play.\n    ")]),e._v(" "),t("p",{staticClass:"dark:text-white/70 ml-2"},[e._v("\n      League of Legends is a highly competitive game with a large player base. The game has "),t("b",{staticClass:"underline underline-offset-6 hover:decoration-3"},[e._v("over 100 million monthly active players")]),e._v(" and is "),t("span",{staticClass:"underline underline-offset-6 hover:decoration-3"},[e._v("one of the most popular esports titles in the world")]),e._v(". The game is free-to-play and generates revenue through the sale of in-game cosmetics such as skins and emotes.\n    ")]),e._v(" "),t("Title",{staticClass:"!mt-12",attrs:{size:"2"}},[e._v(" Existing solutions ")]),e._v(" "),t("p",{staticClass:"dark:text-white/70 ml-2"},[e._v("\n      There are many websites and apps that provide information about League of Legends, like\n      "),t("a",{staticClass:"underline underline-offset-6 hover:decoration-3",attrs:{href:"https://porofessor.gg/",target:"_blank"}},[e._v("Porofessor")]),e._v(",\n      "),t("a",{staticClass:"underline underline-offset-6 hover:decoration-3",attrs:{href:"https://blitz.gg/",target:"_blank"}},[e._v("Blitz")]),e._v(",\n      "),t("a",{staticClass:"underline underline-offset-6 hover:decoration-3",attrs:{href:"https://app.mobalytics.gg/",target:"_blank"}},[e._v("Mobalytics")]),e._v(",\n      and more. However, these solutions are limited in their scope and do not provide real-time insights or personalized recommendations based on a player's unique playstyle and opponent's champion / item builds.\n    ")]),e._v(" "),t("Title",{staticClass:"!mt-12",attrs:{size:"2"}},[e._v(" Why is Riftmaker different? ")]),e._v(" "),t("p",{staticClass:"dark:text-white/70 ml-2"},[e._v("\n      Riftmaker stands out as a unique and superior choice compared to other League of Legends companion tools due to the following reasons:\n      "),t("ol",{staticClass:"list-decimal list-inside mt-4"},[t("li",[t("b",[e._v("Real-time Insights and Assistance")]),e._v(" "),t("p",{staticClass:"ml-4 border-l-3 border-transparent mb-4"},[e._v("\n            Riftmaker offers real-time game insights and assistance to players. It continuously analyzes the current\n            game state, providing up-to-date information and strategic advice to help players make informed decisions.\n            This dynamic and immediate feedback sets Riftmaker apart, ensuring players stay ahead of the competition.\n          ")])]),e._v(" "),t("li",[t("b",[e._v("Personalized recommendations")]),e._v(" "),t("p",{staticClass:"ml-4 border-l-3 border-transparent mb-4"},[e._v("\n            Riftmaker goes beyond generic recommendations by offering personalized suggestions tailored to each player's unique playstyle and preferences.\n            By analyzing individual gameplay patterns and historical performance data, Riftmaker provides targeted recommendations that\n            enhance the player's strengths and improve their weaknesses.\n          ")]),e._v(" "),t("p",{staticClass:"ml-4 border-l-3 border-transparent mb-4"},[e._v("\n            Customized objectives and challenges are also generated to improve the player's weaknesses in a more playful way\n          ")])]),e._v(" "),t("li",[t("b",[e._v("Extensive Champion and Item Database")]),e._v(" "),t("p",{staticClass:"ml-4 border-l-3 border-transparent mb-4"},[e._v("\n            Riftmaker features an extensive champion and item database, regularly updated with the latest League of Legends patches.\n            Players can access comprehensive information about champions, including abilities, scaling ratios, and recommended playstyles.\n            In-depth item descriptions, statistics, and situational recommendations empower players to make the best choices for each game scenario\n          ")])]),e._v(" "),t("li",[t("b",[e._v("Patch Notes and Meta Analysis")]),e._v(" "),t("p",{staticClass:"ml-4 border-l-3 border-transparent mb-4"},[e._v("\n            Riftmaker keeps players informed about the latest patch notes and provides insightful analysis on the current meta,\n            popular strategies, and emerging trends. This comprehensive understanding of the game's evolving landscape\n            allows players to adapt their gameplay accordingly and stay competitive.\n          ")])]),e._v(" "),t("li",[t("b",[e._v("In-Game Overlay")]),e._v(" "),t("p",{staticClass:"ml-4 border-l-3 border-transparent mb-4"},[e._v("\n            Riftmaker features an in-game overlay that provides real-time information and recommendations without interrupting gameplay.\n            This seamless integration ensures players can focus on the game while still benefiting from Riftmaker's insights and assistance.\n        ")])]),e._v(" "),t("li",[t("b",[e._v("Ongoing Development and Future Features")]),e._v(" "),t("p",{staticClass:"ml-4 border-l-3 border-transparent mb-4"},[e._v("\n            Riftmaker is an ongoing project with many exciting features planned for the future. I am committed to continuously improving Riftmaker\n            and providing players with the best possible experience. I welcome feedback from the community and encourage players to share their ideas\n            on how Riftmaker can be improved.\n          ")])])])]),e._v(" "),t("Title",{staticClass:"!mt-12",attrs:{size:"2"}},[e._v(" Electron VS Tauri ")]),e._v(" "),t("p",{staticClass:"dark:text-white/70 ml-2"},[e._v("\n      Initially, I was inclined to choose Electron as the framework for our client application. Electron has gained\n      ignificant popularity and has a well-established ecosystem, making it a seemingly obvious choice.\n      However, after seeking feedback from the developer community and considering our performance goals,\n      I made the decision to switch to Tauri.\n    ")]),e._v(" "),t("p",{staticClass:"dark:text-white/70 ml-2"},[e._v("\n      Tauri is a new framework that offers many advantages over Electron. It is lightweight, fast, and easy to use.\n      It also has a smaller footprint than Electron, making it ideal for our performance-sensitive application.\n      Tauri is still in its early stages of development, but it has already proven itself as a viable alternative to Electron.\n    ")]),e._v(" "),t("p",{staticClass:"dark:text-white/70 ml-2"},[e._v("\n      I am confident that Tauri will continue to improve and become the de facto standard for building cross-platform desktop applications.\n      Switching to Tauri was a difficult decision, especially since I had no prior experience with the framework and Rust programming language.\n      However, I am glad I made the switch because it has allowed me to build a better product faster than I could have with Electron.\n    ")]),e._v(" "),t("Title",{staticClass:"!mt-12",attrs:{size:"2"}},[e._v(" Challenges & Conclusion ")]),e._v(" "),t("p",{staticClass:"dark:text-white/70 ml-2"},[e._v("\n      The biggest challenge I faced while developing Riftmaker was finding a way to analyze the game state in real-time.\n      League of Legends is a complex game with many variables that change constantly throughout the match. It was difficult to\n      find a solution that could handle this complexity and provide accurate insights in real-time.\n    ")]),e._v(" "),t("p",{staticClass:"dark:text-white/70 ml-2"},[e._v("\n      Without any knowledge in AI, I had to learn the basics of AI and machine learning to be able to create a model capable of predicting the actions of the opposing players.\n      I also had to learn how to use the Riot Games API / LCU to retrieve data about the current game state.\n\n    ")])],1)],1)}),[],!1,null,null,null);t.default=component.exports;installComponents(component,{SmartFigure:n(384).default,Title:n(265).default,PageLayout:n(376).default})}}]);