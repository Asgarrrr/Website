(window.webpackJsonp=window.webpackJsonp||[]).push([[3,2,31,67,68,69,70],{370:function(t,e,l){"use strict";l.r(e);var r=l(0).a.extend({props:{type:{type:String,required:!1,default:"block"},iframeUrl:{type:[String,Boolean],required:!1,default:null}},data:function(){return{itemLoaded:!1}}}),n=l(10),component=Object(n.a)(r,(function(){var t=this,e=t._self._c;t._self._setupProxy;return"repository"===t.type?e("SkeletonLoaderRepository"):"iframe"===t.type?e("SkeletonLoaderIframe",{attrs:{"iframe-url":t.iframeUrl}}):"song"===t.type?e("SkeletonLoaderSong"):"lastfm"===t.type?e("SkeletonLoaderLastfm"):"spinner"===t.type?e("SkeletonLoaderSpinner"):"block"===t.type?e("div",{staticClass:"bg-black/5 rounded animate-pulse dark:bg-white/5"}):"rounded"===t.type?e("div",{staticClass:"bg-black/5 rounded-full animate-pulse dark:bg-white/5"}):t._e()}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{SkeletonLoaderRepository:l(374).default,SkeletonLoaderIframe:l(372).default,SkeletonLoaderSong:l(375).default,SkeletonLoaderLastfm:l(377).default,SkeletonLoaderSpinner:l(376).default})},372:function(t,e,l){"use strict";l.r(e);var r={props:{iframeUrl:{type:[String,Boolean],required:!1,default:null}},data:function(){return{itemLoaded:!1}}},n=l(10),component=Object(n.a)(r,(function(){var t=this,e=t._self._c;return e("div",{class:{"bg-gray-100 dark:bg-neutral-800 rounded animate-pulse":!1===t.itemLoaded}},[t.iframeUrl?e("iframe",{class:{"w-full h-full rounded":!0,invisible:!1===t.itemLoaded},attrs:{src:t.iframeUrl},on:{load:function(e){t.itemLoaded=!0}}}):t._e()])}),[],!1,null,null,null);e.default=component.exports},374:function(t,e,l){"use strict";l.r(e);var r=l(10),component=Object(r.a)({},(function(){this._self._c;return this._m(0)}),[function(){var t=this,e=t._self._c;return e("div",{staticClass:"rounded-md space-y-4 card-base"},[e("div",{staticClass:"rounded-md bg-black/10 h-6 animate-pulse w-7/12 dark:bg-white/5"}),t._v(" "),e("div",{staticClass:"space-y-2"},[e("div",{staticClass:"rounded-md bg-black/10 h-4 w-full animate-pulse dark:bg-white/5"}),t._v(" "),e("div",{staticClass:"rounded-md bg-black/10 h-4 animate-pulse w-4/12 dark:bg-white/5"})]),t._v(" "),e("div",{staticClass:"space-y-2"},[e("div",{staticClass:"flex items-center justify-between"},[e("div",{staticClass:"rounded-md bg-black/10 h-4 animate-pulse w-1/6 dark:bg-white/5"}),t._v(" "),e("div",{staticClass:"rounded-md bg-black/10 h-4 animate-pulse w-1/6 dark:bg-white/5"})]),t._v(" "),e("div",{staticClass:"flex items-center justify-between"},[e("div",{staticClass:"rounded-md bg-black/10 h-4 animate-pulse w-2/6 dark:bg-white/5"}),t._v(" "),e("div",{staticClass:"rounded-md bg-black/10 h-4 animate-pulse w-1/6 dark:bg-white/5"})]),t._v(" "),e("div",{staticClass:"flex items-center justify-between"},[e("div",{staticClass:"rounded-md bg-black/10 h-4 animate-pulse w-1/6 dark:bg-white/5"}),t._v(" "),e("div",{staticClass:"rounded-md bg-black/10 h-4 animate-pulse w-1/6 dark:bg-white/5"})])])])}],!1,null,null,null);e.default=component.exports},375:function(t,e,l){"use strict";l.r(e);var r=l(10),component=Object(r.a)({},(function(){this._self._c;return this._m(0)}),[function(){var t=this,e=t._self._c;return e("div",{staticClass:"card-base space-y-2"},[e("div",{staticClass:"rounded-md bg-black/5 flex-shrink-0 h-16 animate-pulse w-16 dark:bg-white/5"}),t._v(" "),e("div",{staticClass:"flex-grow space-y-1"},[e("div",{staticClass:"rounded bg-black/5 h-4 animate-pulse w-2/3 dark:bg-white/5"}),t._v(" "),e("div",{staticClass:"rounded bg-black/5 h-4 animate-pulse w-1/3 dark:bg-white/5"})])])}],!1,null,null,null);e.default=component.exports},376:function(t,e,l){"use strict";l.r(e);var r=l(10),component=Object(r.a)({},(function(){var t=this._self._c;return t("div",{staticClass:"flex items-center justify-center"},[t("svg",{staticClass:"w-8 h-8",attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"}},[t("path",{staticClass:"fill-[#888888] dark:fill-white",attrs:{d:"M12 2A10 10 0 1 0 22 12A10 10 0 0 0 12 2Zm0 18a8 8 0 1 1 8-8A8 8 0 0 1 12 20Z",opacity:".5"}}),this._v(" "),t("path",{attrs:{fill:"currentColor",d:"M20 12h2A10 10 0 0 0 12 2V4A8 8 0 0 1 20 12Z"}},[t("animateTransform",{attrs:{attributeName:"transform",dur:"1s",from:"0 12 12",repeatCount:"indefinite",to:"360 12 12",type:"rotate"}})],1)])])}),[],!1,null,null,null);e.default=component.exports},377:function(t,e,l){"use strict";l.r(e);var r=l(0).a.extend({computed:{getRandomItem:function(){return["w-2/3","w-3/4","w-2/5"][Math.floor(3*Math.random())]}}}),n=l(10),component=Object(n.a)(r,(function(){var t=this,e=t._self._c;t._self._setupProxy;return e("div",{staticClass:"rounded-md card-base flex space-x-4 w-full items-center"},[e("SkeletonLoader",{staticClass:"rounded-md flex-shrink-0 h-16 w-16"}),t._v(" "),e("div",{staticClass:"flex flex-col space-y-2 w-full"},[e("SkeletonLoader",{staticClass:"h-5",class:t.getRandomItem}),t._v(" "),e("SkeletonLoader",{staticClass:"h-5 w-1/3"})],1)],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{SkeletonLoader:l(370).default})},384:function(t,e,l){"use strict";l.r(e);var r=l(0).a.extend({props:{brand:{type:String,required:!0,default:""}},methods:{isSame:function(t){var e;return(null===(e=this.brand)||void 0===e?void 0:e.toLowerCase())===(null==t?void 0:t.toLowerCase())}}}),n=l(10),component=Object(n.a)(r,(function(){var t=this,e=t._self._c;t._self._setupProxy;return t.isSame("Discord")?e("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",fill:"currentColor",viewBox:"0 0 24 24"}},[e("path",{attrs:{d:"M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.4189-2.1568 2.4189Z"}})]):t.isSame("YouTube")?e("svg",{attrs:{viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[e("path",{attrs:{d:"M18.576 5.91a2.117 2.117 0 00-.58-.954 2.276 2.276 0 00-1.002-.552c-1.388-.36-6.971-.36-6.971-.36s-5.584.01-6.97.37a2.276 2.276 0 00-1.003.553 2.117 2.117 0 00-.58.953c-.42 2.346-.582 5.92.012 8.171.102.36.302.69.58.953.277.264.623.455 1.002.552 1.387.36 6.97.36 6.97.36s5.584 0 6.971-.36a2.276 2.276 0 001.002-.552c.278-.264.478-.593.58-.953.443-2.349.58-5.92-.011-8.182z",fill:"red"}}),t._v(" "),e("path",{attrs:{d:"M8.246 12.553L12.878 10 8.246 7.447v5.106z",fill:"#fff"}})]):t.isSame("WhatsApp")?e("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",fill:"currentColor",viewBox:"0 0 512 512"}},[e("path",{attrs:{d:"M414.73 97.1A222.14 222.14 0 00256.94 32C134 32 33.92 131.58 33.87 254a220.61 220.61 0 0029.78 111L32 480l118.25-30.87a223.63 223.63 0 00106.6 27h.09c122.93 0 223-99.59 223.06-222A220.18 220.18 0 00414.73 97.1zM256.94 438.66h-.08a185.75 185.75 0 01-94.36-25.72l-6.77-4-70.17 18.32 18.73-68.09-4.41-7A183.46 183.46 0 0171.53 254c0-101.73 83.21-184.5 185.48-184.5a185 185 0 01185.33 184.64c-.04 101.74-83.21 184.52-185.4 184.52zm101.69-138.19c-5.57-2.78-33-16.2-38.08-18.05s-8.83-2.78-12.54 2.78-14.4 18-17.65 21.75-6.5 4.16-12.07 1.38-23.54-8.63-44.83-27.53c-16.57-14.71-27.75-32.87-31-38.42s-.35-8.56 2.44-11.32c2.51-2.49 5.57-6.48 8.36-9.72s3.72-5.56 5.57-9.26.93-6.94-.46-9.71-12.54-30.08-17.18-41.19c-4.53-10.82-9.12-9.35-12.54-9.52-3.25-.16-7-.2-10.69-.2a20.53 20.53 0 00-14.86 6.94c-5.11 5.56-19.51 19-19.51 46.28s20 53.68 22.76 57.38 39.3 59.73 95.21 83.76a323.11 323.11 0 0031.78 11.68c13.35 4.22 25.5 3.63 35.1 2.2 10.71-1.59 33-13.42 37.63-26.38s4.64-24.06 3.25-26.37-5.11-3.71-10.69-6.48z","fill-rule":"evenodd"}})]):t.isSame("Twitter")?e("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"}},[e("path",{attrs:{d:"M496 109.5a201.8 201.8 0 01-56.55 15.3 97.51 97.51 0 0043.33-53.6 197.74 197.74 0 01-62.56 23.5A99.14 99.14 0 00348.31 64c-54.42 0-98.46 43.4-98.46 96.9a93.21 93.21 0 002.54 22.1 280.7 280.7 0 01-203-101.3A95.69 95.69 0 0036 130.4c0 33.6 17.53 63.3 44 80.7A97.5 97.5 0 0135.22 199v1.2c0 47 34 86.1 79 95a100.76 100.76 0 01-25.94 3.4 94.38 94.38 0 01-18.51-1.8c12.51 38.5 48.92 66.5 92.05 67.3A199.59 199.59 0 0139.5 405.6a203 203 0 01-23.5-1.4A278.68 278.68 0 00166.74 448c181.36 0 280.44-147.7 280.44-275.8 0-4.2-.11-8.4-.31-12.5A198.48 198.48 0 00496 109.5z",fill:"currentColor"}})]):t.isSame("Instagram")?e("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"}},[e("path",{attrs:{d:"M349.33 69.33a93.62 93.62 0 0193.34 93.34v186.66a93.62 93.62 0 01-93.34 93.34H162.67a93.62 93.62 0 01-93.34-93.34V162.67a93.62 93.62 0 0193.34-93.34h186.66m0-37.33H162.67C90.8 32 32 90.8 32 162.67v186.66C32 421.2 90.8 480 162.67 480h186.66C421.2 480 480 421.2 480 349.33V162.67C480 90.8 421.2 32 349.33 32z",fill:"currentColor"}}),t._v(" "),e("path",{attrs:{d:"M377.33 162.67a28 28 0 1128-28 27.94 27.94 0 01-28 28zM256 181.33A74.67 74.67 0 11181.33 256 74.75 74.75 0 01256 181.33m0-37.33a112 112 0 10112 112 112 112 0 00-112-112z",fill:"currentColor"}})]):t.isSame("Telegram")?e("svg",{attrs:{viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[e("path",{attrs:{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M12 1C5.926 1 1 5.924 1 12c0 6.075 4.926 11 11 11 6.075 0 11-4.925 11-11 0-6.076-4.925-11-11-11zm2.955 16.382a.638.638 0 00.592.078.622.622 0 00.387-.45c.465-2.184 1.593-7.711 2.015-9.697a.42.42 0 00-.341-.501.43.43 0 00-.224.02c-2.242.83-9.147 3.42-11.97 4.465a.444.444 0 00-.289.428.443.443 0 00.317.408c1.266.379 2.927.906 2.927.906s.777 2.344 1.18 3.536a.47.47 0 00.323.308.462.462 0 00.435-.11l1.654-1.563s1.91 1.4 2.994 2.172zm-5.887-4.64l.898 2.961.2-1.875 5.446-4.912a.15.15 0 00-.077-.257.151.151 0 00-.107.022l-6.36 4.06z",fill:"currentColor"}})]):t.isSame("Trello")?e("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"}},[e("rect",{attrs:{x:"3",y:"3",width:"18",height:"18",rx:"2",ry:"2"}}),t._v(" "),e("rect",{attrs:{x:"7",y:"7",width:"3",height:"9"}}),t._v(" "),e("rect",{attrs:{x:"14",y:"7",width:"3",height:"5"}})]):t.isSame("GitHub")?e("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"}},[e("path",{staticClass:"fill-black/75 dark:fill-white/90",attrs:{d:"M256 32C132.3 32 32 134.9 32 261.7c0 101.5 64.2 187.5 153.2 217.9a17.56 17.56 0 003.8.4c8.3 0 11.5-6.1 11.5-11.4 0-5.5-.2-19.9-.3-39.1a102.4 102.4 0 01-22.6 2.7c-43.1 0-52.9-33.5-52.9-33.5-10.2-26.5-24.9-33.6-24.9-33.6-19.5-13.7-.1-14.1 1.4-14.1h.1c22.5 2 34.3 23.8 34.3 23.8 11.2 19.6 26.2 25.1 39.6 25.1a63 63 0 0025.6-6c2-14.8 7.8-24.9 14.2-30.7-49.7-5.8-102-25.5-102-113.5 0-25.1 8.7-45.6 23-61.6-2.3-5.8-10-29.2 2.2-60.8a18.64 18.64 0 015-.5c8.1 0 26.4 3.1 56.6 24.1a208.21 208.21 0 01112.2 0c30.2-21 48.5-24.1 56.6-24.1a18.64 18.64 0 015 .5c12.2 31.6 4.5 55 2.2 60.8 14.3 16.1 23 36.6 23 61.6 0 88.2-52.4 107.6-102.3 113.3 8 7.1 15.2 21.1 15.2 42.5 0 30.7-.3 55.5-.3 63 0 5.4 3.1 11.5 11.4 11.5a19.35 19.35 0 004-.4C415.9 449.2 480 363.1 480 261.7 480 134.9 379.7 32 256 32z"}})]):t.isSame("Spotify")?e("svg",{attrs:{viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[e("path",{attrs:{d:"M10 0a10 10 0 100 20 10 10 0 000-20zm4.586 14.422a.623.623 0 01-.857.208c-2.349-1.434-5.305-1.759-8.785-.964a.624.624 0 01-.277-1.216c3.809-.87 7.076-.496 9.712 1.116a.622.622 0 01.207.857zM15.81 11.7a.78.78 0 01-1.072.257c-2.69-1.653-6.786-2.13-9.965-1.166A.781.781 0 014.32 9.3c3.631-1.102 8.147-.569 11.233 1.329a.777.777 0 01.256 1.071h.001zm.104-2.836C12.692 6.95 7.374 6.774 4.298 7.71a.936.936 0 11-.544-1.791c3.534-1.072 9.405-.865 13.116 1.338a.936.936 0 11-.956 1.608z",fill:"#1DB954"}})]):t.isSame("Netlify")?e("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 40 40"}},[e("path",{staticClass:"fill-black/75 dark:fill-white/90",attrs:{d:"M28.589 14.135l-.014-.006c-.008-.003-.016-.006-.023-.013a.11.11 0 01-.028-.093l.773-4.726 3.625 3.626-3.77 1.604a.083.083 0 01-.033.006h-.015a.104.104 0 01-.02-.017 1.716 1.716 0 00-.495-.381zm5.258-.288l3.876 3.876c.805.806 1.208 1.208 1.355 1.674.022.069.04.138.054.209l-9.263-3.923a.728.728 0 00-.015-.006c-.037-.015-.08-.032-.08-.07 0-.038.044-.056.081-.071l.012-.005 3.98-1.684zm5.127 7.003c-.2.376-.59.766-1.25 1.427l-4.37 4.369-5.652-1.177-.03-.006c-.05-.008-.103-.017-.103-.062a1.706 1.706 0 00-.655-1.193c-.023-.023-.017-.059-.01-.092 0-.005 0-.01.002-.014l1.063-6.526.004-.022c.006-.05.015-.108.06-.108a1.73 1.73 0 001.16-.665c.009-.01.015-.021.027-.027.032-.015.07 0 .103.014l9.65 4.082zm-6.625 6.801l-7.186 7.186 1.23-7.56.002-.01a.136.136 0 01.006-.029c.01-.024.036-.034.061-.044l.012-.005a1.85 1.85 0 00.695-.517c.024-.028.053-.055.09-.06a.09.09 0 01.029 0l5.06 1.04zm-8.707 8.707l-.81.81-8.955-12.942a.424.424 0 00-.01-.014c-.014-.019-.029-.038-.026-.06.001-.016.011-.03.022-.042l.01-.013c.027-.04.05-.08.075-.123l.02-.035.003-.003c.014-.024.027-.047.051-.06.021-.01.05-.006.073-.001l9.921 2.046a.164.164 0 01.076.033c.013.013.016.027.019.043a1.757 1.757 0 001.028 1.175c.028.014.016.045.003.078a.238.238 0 00-.015.045c-.125.76-1.197 7.298-1.485 9.063zm-1.692 1.691c-.597.591-.949.904-1.347 1.03a2 2 0 01-1.206 0c-.466-.148-.869-.55-1.674-1.356L8.73 28.73l2.349-3.643a.15.15 0 01.04-.047c.025-.018.061-.01.091 0a2.434 2.434 0 001.638-.083c.027-.01.054-.017.075.002a.19.19 0 01.028.032L21.95 38.05zM7.863 27.863L5.8 25.8l4.074-1.738a.084.084 0 01.033-.007c.034 0 .054.034.072.065a2.91 2.91 0 00.13.184l.013.016c.012.017.004.034-.008.05l-2.25 3.493zm-2.976-2.976l-2.61-2.61c-.444-.444-.766-.766-.99-1.043l7.936 1.646a.84.84 0 00.03.005c.049.008.103.017.103.063 0 .05-.059.073-.109.092l-.023.01-4.337 1.837zM.831 19.892a2 2 0 01.09-.495c.148-.466.55-.868 1.356-1.674l3.34-3.34a2175.525 2175.525 0 004.626 6.687c.027.036.057.076.026.106a2.776 2.776 0 00-.395.528.16.16 0 01-.05.062c-.013.008-.027.005-.042.002H9.78L.831 19.891zm5.68-6.403l4.491-4.491c.422.185 1.958.834 3.332 1.414 1.04.44 1.988.84 2.286.97.03.012.057.024.07.054.008.018.004.041 0 .06a2.003 2.003 0 00.523 1.828c.03.03 0 .073-.026.11l-.014.021-4.56 7.063a.138.138 0 01-.043.05c-.024.015-.058.008-.086.001a2.274 2.274 0 00-.543-.074c-.164 0-.342.03-.522.063h-.001c-.02.003-.038.007-.054-.005a.21.21 0 01-.045-.051l-4.808-7.013zm5.398-5.398l5.814-5.814c.805-.805 1.208-1.208 1.674-1.355a2 2 0 011.206 0c.466.147.869.55 1.674 1.355l1.26 1.26-4.135 6.404a.155.155 0 01-.041.048c-.025.017-.06.01-.09 0a2.097 2.097 0 00-1.92.37c-.027.028-.067.012-.101-.003-.54-.235-4.74-2.01-5.341-2.265zm12.506-3.676l3.818 3.818-.92 5.698v.015a.135.135 0 01-.008.038c-.01.02-.03.024-.05.03a1.83 1.83 0 00-.548.273.154.154 0 00-.02.017c-.011.012-.022.023-.04.025a.114.114 0 01-.043-.007l-5.818-2.472-.011-.005c-.037-.015-.081-.033-.081-.071a2.198 2.198 0 00-.31-.915c-.028-.046-.059-.094-.035-.141l4.066-6.303zm-3.932 8.606l5.454 2.31c.03.014.063.027.076.058a.106.106 0 010 .057c-.016.08-.03.171-.03.263v.153c0 .038-.039.054-.075.069l-.011.004c-.864.369-12.13 5.173-12.147 5.173-.017 0-.035 0-.052-.017-.03-.03 0-.072.027-.11a.76.76 0 00.014-.02l4.482-6.94.008-.012c.026-.042.056-.089.104-.089l.045.007c.102.014.192.027.283.027.68 0 1.31-.331 1.69-.897a.16.16 0 01.034-.04c.027-.02.067-.01.098.004zm-6.246 9.185l12.28-5.237s.018 0 .035.017c.067.067.124.112.179.154l.027.017c.025.014.05.03.052.056 0 .01 0 .016-.002.025L25.756 23.7l-.004.026c-.007.05-.014.107-.061.107a1.729 1.729 0 00-1.373.847l-.005.008c-.014.023-.027.045-.05.057-.021.01-.048.006-.07.001l-9.793-2.02c-.01-.002-.152-.519-.163-.52z"}})]):t.isSame("VS Code")?e("svg",{attrs:{viewBox:"0 0 100 100",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[e("mask",{attrs:{id:"prefix__a",maskUnits:"userSpaceOnUse",x:"0",y:"0",width:"100",height:"100"}},[e("path",{attrs:{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M70.912 99.317a6.223 6.223 0 004.96-.19l20.589-9.907A6.25 6.25 0 00100 83.587V16.413a6.25 6.25 0 00-3.54-5.632L75.874.874a6.226 6.226 0 00-7.104 1.21L29.355 38.04 12.187 25.01a4.162 4.162 0 00-5.318.236l-5.506 5.009a4.168 4.168 0 00-.004 6.162L16.247 50 1.36 63.583a4.168 4.168 0 00.004 6.162l5.506 5.01a4.162 4.162 0 005.318.236l17.168-13.032L68.77 97.917a6.217 6.217 0 002.143 1.4zM75.015 27.3L45.11 50l29.906 22.701V27.3z",fill:"#fff"}})]),t._v(" "),e("g",{attrs:{mask:"url(#prefix__a)"}},[e("path",{attrs:{d:"M96.461 10.796L75.857.876a6.23 6.23 0 00-7.107 1.207l-67.451 61.5a4.167 4.167 0 00.004 6.162l5.51 5.009a4.167 4.167 0 005.32.236l81.228-61.62c2.725-2.067 6.639-.124 6.639 3.297v-.24a6.25 6.25 0 00-3.539-5.63z",fill:"#0065A9"}}),t._v(" "),e("g",{attrs:{filter:"url(#prefix__filter0_d)"}},[e("path",{attrs:{d:"M96.461 89.204l-20.604 9.92a6.229 6.229 0 01-7.107-1.207l-67.451-61.5a4.167 4.167 0 01.004-6.162l5.51-5.009a4.167 4.167 0 015.32-.236l81.228 61.62c2.725 2.067 6.639.124 6.639-3.297v.24a6.25 6.25 0 01-3.539 5.63z",fill:"#007ACC"}})]),t._v(" "),e("g",{attrs:{filter:"url(#prefix__filter1_d)"}},[e("path",{attrs:{d:"M75.858 99.126a6.232 6.232 0 01-7.108-1.21c2.306 2.307 6.25.674 6.25-2.588V4.672c0-3.262-3.944-4.895-6.25-2.589a6.232 6.232 0 017.108-1.21l20.6 9.908A6.25 6.25 0 01100 16.413v67.174a6.25 6.25 0 01-3.541 5.633l-20.601 9.906z",fill:"#1F9CF0"}})]),t._v(" "),e("path",{attrs:{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M70.851 99.317a6.224 6.224 0 004.96-.19L96.4 89.22a6.25 6.25 0 003.54-5.633V16.413a6.25 6.25 0 00-3.54-5.632L75.812.874a6.226 6.226 0 00-7.104 1.21L29.294 38.04 12.126 25.01a4.162 4.162 0 00-5.317.236l-5.507 5.009a4.168 4.168 0 00-.004 6.162L16.186 50 1.298 63.583a4.168 4.168 0 00.004 6.162l5.507 5.009a4.162 4.162 0 005.317.236L29.294 61.96l39.414 35.958a6.218 6.218 0 002.143 1.4zM74.954 27.3L45.048 50l29.906 22.701V27.3z",fill:"url(#prefix__paint0_linear)",opacity:".25"}})]),t._v(" "),e("defs",[e("filter",{attrs:{id:"prefix__filter0_d",x:"-8.394",y:"15.829",width:"116.727",height:"92.246",filterUnits:"userSpaceOnUse","color-interpolation-filters":"sRGB"}},[e("feFlood",{attrs:{"flood-opacity":"0",result:"BackgroundImageFix"}}),t._v(" "),e("feColorMatrix",{attrs:{in:"SourceAlpha",values:"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"}}),t._v(" "),e("feOffset"),t._v(" "),e("feGaussianBlur",{attrs:{stdDeviation:"4.167"}}),t._v(" "),e("feColorMatrix",{attrs:{values:"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"}}),t._v(" "),e("feBlend",{attrs:{mode:"overlay",in2:"BackgroundImageFix",result:"effect1_dropShadow"}}),t._v(" "),e("feBlend",{attrs:{in:"SourceGraphic",in2:"effect1_dropShadow",result:"shape"}})],1),t._v(" "),e("filter",{attrs:{id:"prefix__filter1_d",x:"60.417",y:"-8.076",width:"47.917",height:"116.151",filterUnits:"userSpaceOnUse","color-interpolation-filters":"sRGB"}},[e("feFlood",{attrs:{"flood-opacity":"0",result:"BackgroundImageFix"}}),t._v(" "),e("feColorMatrix",{attrs:{in:"SourceAlpha",values:"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"}}),t._v(" "),e("feOffset"),t._v(" "),e("feGaussianBlur",{attrs:{stdDeviation:"4.167"}}),t._v(" "),e("feColorMatrix",{attrs:{values:"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"}}),t._v(" "),e("feBlend",{attrs:{mode:"overlay",in2:"BackgroundImageFix",result:"effect1_dropShadow"}}),t._v(" "),e("feBlend",{attrs:{in:"SourceGraphic",in2:"effect1_dropShadow",result:"shape"}})],1),t._v(" "),e("linearGradient",{attrs:{id:"prefix__paint0_linear",x1:"49.939",y1:".258",x2:"49.939",y2:"99.742",gradientUnits:"userSpaceOnUse"}},[e("stop",{attrs:{"stop-color":"#fff"}}),t._v(" "),e("stop",{attrs:{offset:"1","stop-color":"#fff","stop-opacity":"0"}})],1)],1)]):t.isSame("LinkedIn")?e("svg",{attrs:{viewBox:"0 0 16 16"}},[e("path",{attrs:{fill:"currentColor",d:"M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248c-.015-.709-.52-1.248-1.342-1.248c-.822 0-1.359.54-1.359 1.248c0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586c.173-.431.568-.878 1.232-.878c.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252c-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"}})]):t.isSame("BuyMeACoffee")?e("svg",{attrs:{viewBox:"0 0 24 24"}},[e("path",{attrs:{fill:"currentColor",d:"m20.216 6.415-.132-.666c-.119-.598-.388-1.163-1.001-1.379-.197-.069-.42-.098-.57-.241-.152-.143-.196-.366-.231-.572-.065-.378-.125-.756-.192-1.133-.057-.325-.102-.69-.25-.987-.195-.4-.597-.634-.996-.788a5.723 5.723 0 0 0-.626-.194c-1-.263-2.05-.36-3.077-.416a25.834 25.834 0 0 0-3.7.062c-.915.083-1.88.184-2.75.5-.318.116-.646.256-.888.501-.297.302-.393.77-.177 1.146.154.267.415.456.692.58.36.162.737.284 1.123.366 1.075.238 2.189.331 3.287.37 1.218.05 2.437.01 3.65-.118.299-.033.598-.073.896-.119.352-.054.578-.513.474-.834-.124-.383-.457-.531-.834-.473-.466.074-.96.108-1.382.146-1.177.08-2.358.082-3.536.006a22.228 22.228 0 0 1-1.157-.107c-.086-.01-.18-.025-.258-.036-.243-.036-.484-.08-.724-.13-.111-.027-.111-.185 0-.212h.005c.277-.06.557-.108.838-.147h.002c.131-.009.263-.032.394-.048a25.076 25.076 0 0 1 3.426-.12c.674.019 1.347.067 2.017.144l.228.031c.267.04.533.088.798.145.392.085.895.113 1.07.542.055.137.08.288.111.431l.319 1.484a.237.237 0 0 1-.199.284h-.003c-.037.006-.075.01-.112.015a36.704 36.704 0 0 1-4.743.295 37.059 37.059 0 0 1-4.699-.304c-.14-.017-.293-.042-.417-.06-.326-.048-.649-.108-.973-.161-.393-.065-.768-.032-1.123.161-.29.16-.527.404-.675.701-.154.316-.199.66-.267 1-.069.34-.176.707-.135 1.056.087.753.613 1.365 1.37 1.502a39.69 39.69 0 0 0 11.343.376.483.483 0 0 1 .535.53l-.071.697-1.018 9.907c-.041.41-.047.832-.125 1.237-.122.637-.553 1.028-1.182 1.171-.577.131-1.165.2-1.756.205-.656.004-1.31-.025-1.966-.022-.699.004-1.556-.06-2.095-.58-.475-.458-.54-1.174-.605-1.793l-.731-7.013-.322-3.094c-.037-.351-.286-.695-.678-.678-.336.015-.718.3-.678.679l.228 2.185.949 9.112c.147 1.344 1.174 2.068 2.446 2.272.742.12 1.503.144 2.257.156.966.016 1.942.053 2.892-.122 1.408-.258 2.465-1.198 2.616-2.657.34-3.332.683-6.663 1.024-9.995l.215-2.087a.484.484 0 0 1 .39-.426c.402-.078.787-.212 1.074-.518.455-.488.546-1.124.385-1.766zm-1.478.772c-.145.137-.363.201-.578.233-2.416.359-4.866.54-7.308.46-1.748-.06-3.477-.254-5.207-.498-.17-.024-.353-.055-.47-.18-.22-.236-.111-.71-.054-.995.052-.26.152-.609.463-.646.484-.057 1.046.148 1.526.22.577.088 1.156.159 1.737.212 2.48.226 5.002.19 7.472-.14.45-.06.899-.13 1.345-.21.399-.072.84-.206 1.08.206.166.281.188.657.162.974a.544.544 0 0 1-.169.364zm-6.159 3.9c-.862.37-1.84.788-3.109.788a5.884 5.884 0 0 1-1.569-.217l.877 9.004c.065.78.717 1.38 1.5 1.38 0 0 1.243.065 1.658.065.447 0 1.786-.065 1.786-.065.783 0 1.434-.6 1.499-1.38l.94-9.95a3.996 3.996 0 0 0-1.322-.238c-.826 0-1.491.284-2.26.613z"}})]):t._e()}),[],!1,null,null,null);e.default=component.exports},470:function(t,e,l){l(471)},471:function(t,e,l){"use strict";var r=l(2),n=l(14),c=l(3),o=l(33),d=l(8),f=l(54),v=l(132),m=l(16),h=l(62),w=l(176),_=l(268),x=l(11),k=l(32),C=x("replace"),y=TypeError,S=c("".indexOf),L=c("".replace),z=c("".slice),M=Math.max,B=function(t,e,l){return l>t.length?-1:""===e?l:S(t,e,l)};r({target:"String",proto:!0},{replaceAll:function(t,e){var l,r,c,x,A,D,O,j,I,U=o(this),V=0,T=0,H="";if(!f(t)){if((l=v(t))&&(r=m(o(w(t))),!~S(r,"g")))throw y("`.replaceAll` does not allow non-global regexes");if(c=h(t,C))return n(c,t,U,e);if(k&&l)return L(m(U),t,e)}for(x=m(U),A=m(t),(D=d(e))||(e=m(e)),O=A.length,j=M(1,O),V=B(x,A,0);-1!==V;)I=D?m(e(A,V,x)):_(A,x,V,[],void 0,e),H+=z(x,T,V)+I,T=V+O,V=B(x,A,V+j);return T<x.length&&(H+=z(x,T)),H}})},495:function(t,e,l){"use strict";l.r(e);l(22),l(30),l(60),l(470);var r=l(5),n=(l(37),l(21),l(7),l(43),l(38),l(0).a.extend({data:function(){return{finished:!1,newData:!1,lanyard:{},socket:null}},computed:{getStatusDetails:function(){var t,e,l,r=this.lanyard;if(!r)return"Couldn't fetch data from Lanyard";if("offline"===r.discord_status)return"Offline";null===(e=null===(t=r.activities)||void 0===t?void 0:t.filter((function(t){return 4!==t.type})))||void 0===e||e.pop();if(r.spotify){var n=r.spotify||{},c=n.song,o=n.artist,d=null===(l=null==o?void 0:o.split("; "))||void 0===l?void 0:l[0];return"Listening to **".concat(c,"** by **").concat(d||"someone","**")}return"Online"},getSafeHtml:function(){return this.getStatusDetails.replace(/\*\*(.*?)\*\*/gm,"<strong class='font-medium text-neutral-700 dark:text-neutral-200'>$1</strong>")},getDiscordStatus:function(){switch(this.lanyard.discord_status){case"online":return"bg-green-500";case"idle":return"bg-yellow-500";case"dnd":return"bg-red-500";default:return"bg-gray-500 dark:bg-gray-200"}}},beforeDestroy:function(){var t;null===(t=this.socket)||void 0===t||t.close()},mounted:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){var l;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$lanyard({userId:"253951718423789571",socket:!0});case 2:t.socket=e.sent,null===(l=t.socket)||void 0===l||l.addEventListener("message",(function(e){var data=e.data,l=JSON.parse(data),r=l.t,n=l.d;["INIT_STATE","PRESENCE_UPDATE"].includes(r)&&(t.lanyard=n||{}),t.newData=!t.newData,t.finished=!0}));case 4:case"end":return e.stop()}}),e)})))()}})),c=l(10),component=Object(c.a)(n,(function(){var t=this,e=t._self._c;t._self._setupProxy;return t.finished&&t.getStatusDetails&&0!==Object.keys(t.lanyard).length?e("div",{staticClass:"flex items-center space-x-2 rounded-md text-neutral-500"},[t.lanyard.spotify?e("IconBrand",{staticClass:"w-5 h-5",attrs:{brand:"spotify"}}):e("div",{directives:[{name:"tippy",rawName:"v-tippy",value:{content:"Discord status",placement:"bottom"},expression:"{ content: 'Discord status', placement: 'bottom' }"}],class:"h-5 w-5 rounded-full flex-shrink-0 ".concat(t.getDiscordStatus)}),t._v(" "),e("transition",{attrs:{name:"fade",mode:"out-in"}},[!1===t.newData?e("div",{key:"notNewData",staticClass:"text-sm leading-tight truncate",attrs:{title:t.getStatusDetails.replaceAll("**","")},domProps:{innerHTML:t._s(t.getSafeHtml)}}):e("div",{key:"newData",staticClass:"text-sm leading-tight truncate",attrs:{title:t.getStatusDetails.replaceAll("**","")},domProps:{innerHTML:t._s(t.getSafeHtml)}})])],1):e("div",{staticClass:"flex items-center space-x-2"},[e("SkeletonLoader",{staticClass:"w-5 h-5",attrs:{type:"rounded"}}),t._v(" "),e("SkeletonLoader",{staticClass:"w-1/2 h-5"})],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{SkeletonLoader:l(370).default,IconBrand:l(384).default})}}]);