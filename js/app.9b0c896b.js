(function(t){function e(e){for(var n,o,i=e[0],c=e[1],l=e[2],p=0,f=[];p<i.length;p++)o=i[p],Object.prototype.hasOwnProperty.call(s,o)&&s[o]&&f.push(s[o][0]),s[o]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(t[n]=c[n]);u&&u(e);while(f.length)f.shift()();return a.push.apply(a,l||[]),r()}function r(){for(var t,e=0;e<a.length;e++){for(var r=a[e],n=!0,i=1;i<r.length;i++){var c=r[i];0!==s[c]&&(n=!1)}n&&(a.splice(e--,1),t=o(o.s=r[0]))}return t}var n={},s={app:0},a=[];function o(e){if(n[e])return n[e].exports;var r=n[e]={i:e,l:!1,exports:{}};return t[e].call(r.exports,r,r.exports,o),r.l=!0,r.exports}o.m=t,o.c=n,o.d=function(t,e,r){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(o.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)o.d(r,n,function(e){return t[e]}.bind(null,n));return r},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],c=i.push.bind(i);i.push=e,i=i.slice();for(var l=0;l<i.length;l++)e(i[l]);var u=c;a.push([0,"chunk-vendors"]),r()})({0:function(t,e,r){t.exports=r("56d7")},"56d7":function(t,e,r){"use strict";r.r(e);r("e260"),r("e6cf"),r("cca6"),r("a79d");var n=r("2b0e"),s=r("ec02"),a=r.n(s),o=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"container mx-auto px-4 py-16 sm:p-12 lg:pt-20 text-gray-800",attrs:{id:"app"}},[r("vue-headful",{attrs:{title:"Alexandre - Portfólio"}}),r("h2",{staticClass:"text-4xl sm:text-6xl font-medium"},[t._v("Olá 👋")]),r("h2",{staticClass:"text-2xl sm:text-4xl font-medium mt-4"},[t._v(" Meu nome é Alexandre 🙂 ")]),r("div",{staticClass:"text"},[r("p",{staticClass:"text-xl sm:text-2xl"},[t._v(" Sou um desenvolvedor Front-End desde 2018, fluente em inglês, experiente com HTML, CSS, JavaScript, "),r("Link",{attrs:{text:"React",href:"https://reactjs.org"}}),t._v(", "),r("Link",{attrs:{text:"Vue",href:"https://vuejs.org"}}),t._v(", "),r("Link",{attrs:{text:"Git",href:"https://git-scm.com/"}}),t._v(", "),r("Link",{attrs:{text:"Node.js",href:"https://nodejs.org"}}),t._v(", e muito mais! 💻 ")],1),r("p",{staticClass:"text-xl sm:text-3xl"},[t._v(" Você pode me encontrar no "),r("Link",{attrs:{text:"Github",href:"https://github.com/xanderios"}}),t._v(" e no "),r("Link",{attrs:{text:"Linkedin",href:"https://www.linkedin.com/in/alexandre-rios-496bb7196/"}}),t._v(". Aqui estão alguns de meus projetos: "),r("ul",{staticClass:"mt-4"},[r("li",[r("Link",{attrs:{text:"Intelmais - Website",href:"https://www.intelmais.com.br"}}),t._v(" 📱")],1),r("li",[r("Link",{attrs:{text:"Moveit",href:"https://moveit-reactjs.vercel.app/"}}),t._v(" 🏋️ "),t._m(0)],1),r("li",[r("Link",{attrs:{text:"Offices",href:"https://github.com/xanderios/senior-frontend-test"}}),t._v(" 📌 "),r("span",{staticClass:"text-gray-500 text-lg"},[t._v("(senior test)")])],1),r("li",[r("Link",{attrs:{text:"Pharma Inc",href:"https://github.com/xanderios/coodesh-nuxt-test"}}),t._v(" 💊 "),r("span",{staticClass:"text-gray-500 text-lg"},[t._v("(frontend test)")])],1),r("li",[r("Link",{attrs:{text:"Boookmarker",href:"https://boookmarker.herokuapp.com"}}),t._v(" 🔖 "),t._m(1)],1),r("span",{staticClass:"text-gray-500 text-xl"},[t._v("Seu projeto aqui...")])])],1),r("p",{staticClass:"text-xl sm:text-3xl"},[t._v(" Eu gosto de me manter ocupado, seja estudando ou lendo um livro, ou até mesmo praticando esportes ouvindo música. 😁 ")])])],1)},i=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("span",{staticClass:"text-gray-500 text-lg"},[t._v("("),r("a",{staticClass:"underline",attrs:{href:"https://rocketseat.com.br/"}},[t._v("Rocketseat's")]),t._v(" NLW#4)")])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("span",{staticClass:"text-gray-500 text-lg"},[t._v("(deployed @ "),r("a",{staticClass:"underline",attrs:{href:"https://heroku.com"}},[t._v("Heroku")]),t._v(")")])}],c=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("a",{attrs:{href:t.href,target:"_blank"}},[t._v(t._s(t.text))])},l=[],u={name:"Link",props:{href:{type:String,required:!0},text:{type:String,required:!0}}},p=u,f=(r("6786"),r("2877")),d=Object(f["a"])(p,c,l,!1,null,"251a1b02",null),x=d.exports,h={name:"App",components:{Link:x}},m=h,v=(r("5c0b"),Object(f["a"])(m,o,i,!1,null,null,null)),_=v.exports;r("c898");n["a"].config.productionTip=!1,n["a"].component("vue-headful",a.a),new n["a"]({render:function(t){return t(_)}}).$mount("#app")},"5c0b":function(t,e,r){"use strict";r("9c0c")},6786:function(t,e,r){"use strict";r("b461")},"9c0c":function(t,e,r){},b461:function(t,e,r){},c898:function(t,e,r){}});
//# sourceMappingURL=app.9b0c896b.js.map