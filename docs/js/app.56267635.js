(function(A){function e(e){for(var n,o,a=e[0],s=e[1],c=e[2],l=0,u=[];l<a.length;l++)o=a[l],Object.prototype.hasOwnProperty.call(r,o)&&r[o]&&u.push(r[o][0]),r[o]=0;for(n in s)Object.prototype.hasOwnProperty.call(s,n)&&(A[n]=s[n]);p&&p(e);while(u.length)u.shift()();return i.push.apply(i,c||[]),t()}function t(){for(var A,e=0;e<i.length;e++){for(var t=i[e],n=!0,o=1;o<t.length;o++){var s=t[o];0!==r[s]&&(n=!1)}n&&(i.splice(e--,1),A=a(a.s=t[0]))}return A}var n={},r={app:0},i=[];function o(A){return a.p+"js/"+({about:"about"}[A]||A)+"."+{about:"767b2f9c"}[A]+".js"}function a(e){if(n[e])return n[e].exports;var t=n[e]={i:e,l:!1,exports:{}};return A[e].call(t.exports,t,t.exports,a),t.l=!0,t.exports}a.e=function(A){var e=[],t=r[A];if(0!==t)if(t)e.push(t[2]);else{var n=new Promise((function(e,n){t=r[A]=[e,n]}));e.push(t[2]=n);var i,s=document.createElement("script");s.charset="utf-8",s.timeout=120,a.nc&&s.setAttribute("nonce",a.nc),s.src=o(A);var c=new Error;i=function(e){s.onerror=s.onload=null,clearTimeout(l);var t=r[A];if(0!==t){if(t){var n=e&&("load"===e.type?"missing":e.type),i=e&&e.target&&e.target.src;c.message="Loading chunk "+A+" failed.\n("+n+": "+i+")",c.name="ChunkLoadError",c.type=n,c.request=i,t[1](c)}r[A]=void 0}};var l=setTimeout((function(){i({type:"timeout",target:s})}),12e4);s.onerror=s.onload=i,document.head.appendChild(s)}return Promise.all(e)},a.m=A,a.c=n,a.d=function(A,e,t){a.o(A,e)||Object.defineProperty(A,e,{enumerable:!0,get:t})},a.r=function(A){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(A,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(A,"__esModule",{value:!0})},a.t=function(A,e){if(1&e&&(A=a(A)),8&e)return A;if(4&e&&"object"===typeof A&&A&&A.__esModule)return A;var t=Object.create(null);if(a.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:A}),2&e&&"string"!=typeof A)for(var n in A)a.d(t,n,function(e){return A[e]}.bind(null,n));return t},a.n=function(A){var e=A&&A.__esModule?function(){return A["default"]}:function(){return A};return a.d(e,"a",e),e},a.o=function(A,e){return Object.prototype.hasOwnProperty.call(A,e)},a.p="/",a.oe=function(A){throw console.error(A),A};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],c=s.push.bind(s);s.push=e,s=s.slice();for(var l=0;l<s.length;l++)e(s[l]);var p=c;i.push([0,"chunk-vendors"]),t()})({0:function(A,e,t){A.exports=t("56d7")},1771:function(A,e,t){var n={"./HERE_logo.png":"f3a0","./UF_gate.jpg":"d2bd","./UF_logo.jpg":"389c","./ben_hill_stadium.jpg":"d3a8","./century_tower.jpg":"9602","./keyboard-down-arrow.png":"92e2","./keyboard-up-arrow.svg":"ee77","./left-arrow.svg":"c012","./logo.png":"cf05","./me.jpg":"b0df","./right-arrow.svg":"f590"};function r(A){var e=i(A);return t(e)}function i(A){if(!t.o(n,A)){var e=new Error("Cannot find module '"+A+"'");throw e.code="MODULE_NOT_FOUND",e}return n[A]}r.keys=function(){return Object.keys(n)},r.resolve=i,A.exports=r,r.id="1771"},"389c":function(A,e,t){A.exports=t.p+"img/UF_logo.dbc91aa7.jpg"},5033:function(A){A.exports=JSON.parse('{"experience":[{"img":"UF_logo.jpg","position":"Research assistant","institute":"University of Florida","description":"Advisors: <a href=\\"https://www.cise.ufl.edu/ranka-sanjay/\\">Dr. Ranka</a> and <a href=\\"https://www.cise.ufl.edu/rangarajan-anand/\\">Dr. Rangarajan</a>","time":"Oct 2019 - Present","timeCalc":"10 mos","place":"Gainesville, Fl","projects":["vae"]},{"img":"UF_logo.jpg","position":"Graduate assistant","institute":"University of Florida","description":"Advisor: <a href=\\"https://www.bme.ufl.edu/labs/rashidi/\\"> Dr. Rashidi</a>","time":"Jan 2020 - May 2020","timeCalc":"4 mos","place":"Gainesville, Fl","projects":[]},{"img":"HERE_logo.png","position":"Senior software engineer","institute":"Here Technologies","time":"Mar 2019 - Jul 2019","timeCalc":"4 mos","place":"Mumbai, India","projects":[]},{"img":"HERE_logo.png","position":"Software engineer 2","institute":"Here Technologies","time":"Jul 2017 - Feb 2019","timeCalc":"1 yr 8 mos","place":"Mumbai, India","projects":[]}],"projects":{"vae":{"title":"","img":{"small":"","large":""},"desc":""}}}')},"56d7":function(A,e,t){"use strict";t.r(e);t("e260"),t("e6cf"),t("cca6"),t("a79d");var n=t("2b0e"),r=function(){var A=this,e=A.$createElement,t=A._self._c||e;return t("div",{attrs:{id:"app"}},[t("router-view")],1)},i=[],o=(t("5c0b"),t("2877")),a={},s=Object(o["a"])(a,r,i,!1,null,null,null),c=s.exports,l=(t("d3b7"),t("8c4f")),p=function(){var A=this,e=A.$createElement,t=A._self._c||e;return t("div",{staticClass:"home"},[A._m(0),t("div",{staticClass:"bg-wh"},[t("h2",{attrs:{"data-aos":"zoom-in"}},[A._v("Experience")]),t("div",{attrs:{"data-aos":"zoom-in"}},A._l(A.experience,(function(A){return t("ExperienceCard",{attrs:{cardData:A}})})),1)])])},u=[function(){var A=this,e=A.$createElement,n=A._self._c||e;return n("div",{staticClass:"cont-bleed"},[n("img",{staticClass:"image-bleed",attrs:{alt:"University of Florida",src:t("d3a8")}}),n("div",{staticClass:"image-overlay"}),n("img",{staticClass:"photo",attrs:{src:t("b0df")}}),n("h1",[A._v("PARTH SHAH")]),n("h4",[A._v("Machine learning | Full stack")]),n("img",{staticClass:"down blinking",attrs:{src:t("92e2")}})])}],d=(t("4160"),t("159b"),function(){var A=this,e=A.$createElement,n=A._self._c||e;return n("div",{class:A.properties.collapsed?"card-collapsed":"card"},[n("div",{staticClass:"primary"},[n("img",{staticClass:"icon",attrs:{src:t("1771")("./"+A.properties.img)}}),n("div",{staticClass:"info"},[n("div",{staticClass:"institute"},[n("b",[A._v(A._s(A.properties.institute))])]),A.bigScreen?n("div",{staticClass:"time-calc"},[n("i",[A._v(A._s(A.properties.timeCalc))])]):A._e(),n("div",{class:A.bigScreen?"time-top":A.time},[n("i",[A._v(A._s(A.properties.time))])]),n("div",{staticClass:"position"},[A._v(A._s(A.properties.position))]),A.bigScreen?n("div",{staticClass:"description",domProps:{innerHTML:A._s(A.properties.description)}}):A._e(),A.bigScreen?n("div",{staticClass:"description"},[A._v(A._s(A.properties.place))]):A._e()])]),A.properties.collapsed?n("div",{staticClass:"down-div",on:{click:function(e){return A.toggleProjects()}}},[n("span",{staticClass:"down-desc"},[A._v("projects")]),n("img",{staticClass:"down",attrs:{src:t("92e2")}})]):A._e(),A.properties.collapsed?A._e():n("div",{staticClass:"projects"},[A._m(0),n("div",{staticClass:"up-div",on:{click:function(e){return A.toggleProjects()}}},[n("img",{staticClass:"up",attrs:{src:t("ee77")}})])])])}),f=[function(){var A=this,e=A.$createElement,t=A._self._c||e;return t("div",{staticClass:"project-card",attrs:{"data-aos":"fade-down"}},[t("div",[A._v("Lorem ipsum dolor sit amet")])])}],g={data:function(){return{properties:this.cardData,card:"card","card-collapsed":"card-collapsed",time:"time","time-top":"time-top"}},props:["cardData"],methods:{toggleProjects:function(){this.properties.collapsed=!this.properties.collapsed}},computed:{bigScreen:function(){return this.$parent.windowWidth>600}}},v=g,m=(t("af89"),Object(o["a"])(v,d,f,!1,null,"1cfa8d6c",null)),w=m.exports,h=t("5033"),b={name:"Home",components:{ExperienceCard:w},data:function(){return h.experience.forEach((function(A){A["collapsed"]="true"})),h},computed:{windowWidth:function(){return this.$parent.$parent.windowWidth}}},C=b,Q=(t("b57e"),Object(o["a"])(C,p,u,!1,null,"394654e0",null)),E=Q.exports;n["a"].use(l["a"]);var B=[{path:"/",name:"Home",component:E},{path:"/about",name:"About",component:function(){return t.e("about").then(t.bind(null,"f820"))}}],D=new l["a"]({mode:"history",base:"/",routes:B}),P=D,x=t("2f62");n["a"].use(x["a"]);var j=new x["a"].Store({state:{},mutations:{},actions:{},modules:{}}),y=t("f5af"),k=t.n(y);t("e829");n["a"].config.productionTip=!1,new n["a"]({router:P,store:j,created:function(){k.a.init(),window.addEventListener("resize",this.handleResize),this.handleResize()},destroyed:function(){window.removeEventListener("resize",this.handleResize)},data:function(){return{windowWidth:0}},methods:{handleResize:function(){this.windowWidth=window.innerWidth}},render:function(A){return A(c)}}).$mount("#app")},"5c0b":function(A,e,t){"use strict";var n=t("9c0c"),r=t.n(n);r.a},6870:function(A,e,t){},8899:function(A,e,t){},"92e2":function(A,e){A.exports="data:image/png;base64,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"},9602:function(A,e,t){A.exports=t.p+"img/century_tower.feb2f261.jpg"},"9c0c":function(A,e,t){},af89:function(A,e,t){"use strict";var n=t("6870"),r=t.n(n);r.a},b0df:function(A,e,t){A.exports=t.p+"img/me.2bbeac73.jpg"},b57e:function(A,e,t){"use strict";var n=t("8899"),r=t.n(n);r.a},c012:function(A,e,t){A.exports=t.p+"img/left-arrow.c7378884.svg"},cf05:function(A,e,t){A.exports=t.p+"img/logo.82b9c7a5.png"},d2bd:function(A,e,t){A.exports=t.p+"img/UF_gate.3497057b.jpg"},d3a8:function(A,e,t){A.exports=t.p+"img/ben_hill_stadium.96f80f60.jpg"},ee77:function(A,e,t){A.exports=t.p+"img/keyboard-up-arrow.f0b18641.svg"},f3a0:function(A,e,t){A.exports=t.p+"img/HERE_logo.47fbb7d1.png"},f590:function(A,e,t){A.exports=t.p+"img/right-arrow.ce0942a5.svg"}});
//# sourceMappingURL=app.56267635.js.map