(function(t){function e(e){for(var r,a,s=e[0],u=e[1],c=e[2],f=0,d=[];f<s.length;f++)a=s[f],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&d.push(o[a][0]),o[a]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(t[r]=u[r]);l&&l(e);while(d.length)d.shift()();return i.push.apply(i,c||[]),n()}function n(){for(var t,e=0;e<i.length;e++){for(var n=i[e],r=!0,s=1;s<n.length;s++){var u=n[s];0!==o[u]&&(r=!1)}r&&(i.splice(e--,1),t=a(a.s=n[0]))}return t}var r={},o={app:0},i=[];function a(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.m=t,a.c=r,a.d=function(t,e,n){a.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},a.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},a.t=function(t,e){if(1&e&&(t=a(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)a.d(n,r,function(e){return t[e]}.bind(null,r));return n},a.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return a.d(e,"a",e),e},a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},a.p="/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],u=s.push.bind(s);s.push=e,s=s.slice();for(var c=0;c<s.length;c++)e(s[c]);var l=u;i.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),o=(n("a15b"),n("5f5b"));n("68d3");r["default"].use(o["a"]);n("99af"),n("d3b7");var i=n("d4ec"),a=n("bee2"),s=5e3,u="https://apis.google.com/js/api.js";function c(t){if(!t.getBasicProfile)return null;var e=t.getBasicProfile();return{id:e.getId(),name:e.getName(),firstname:e.getGivenName(),lastname:e.getFamilyName(),image:e.getImageUrl(),email:e.getEmail()}}function l(t){return t.getAuthResponse?t.getAuthResponse():null}var f=function(){function t(e){Object(i["a"])(this,t),this.config=e,this._libraryInit("auth2")}return Object(a["a"])(t,[{key:"_load",value:function(){return window.gapi?Promise.resolve(window.gapi):new Promise((function(t,e){var n=document.createElement("script");n.src=u;var r=setTimeout((function(){n.remove(),e(new Error("gapi load timeout."))}),s);n.onload=function(){clearTimeout(r),window.gapi||e(new Error("gapi load error.")),t(window.gapi)},document.head.appendChild(n)}))}},{key:"_libraryLoad",value:function(t){return this._load().then((function(e){return e[t]?Promise.resolve(e[t]):new Promise((function(n,r){e.load(t,{timeout:s,callback:function(){n(e[t])},onerror:function(e){r(new Error("Error on gapi ".concat(t," load: ").concat(e.message)))},ontimeout:function(){r(new Error("Error on gapi ".concat(t," load: timeout")))}})}))}))}},{key:"_libraryInit",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return e.apiKey=e.apiKey||this.config.apiKey,e.clientId=e.clientId||this.config.clientId,e.scope=e.scope||this.config.scope,e.discoveryDocs=e.discoveryDocs||this.config.discoveryDocs,this._libraryLoad(t).then((function(n){return n.init(e).then((function(e){return Promise.resolve("auth2"===t?e:n)}),(function(){return Promise.resolve(n)}))}))}},{key:"isSignedIn",value:function(){return this._libraryInit("auth2").then((function(t){return Promise.resolve(t.isSignedIn.get())}))}},{key:"getAuthObject",value:function(){return this._libraryInit("auth2").then((function(t){return t.isSignedIn.get()?Promise.resolve(l(t.currentUser.get())):Promise.resolve(null)}))}},{key:"currentUser",value:function(){return this._libraryInit("auth2").then((function(t){return t.isSignedIn.get()?Promise.resolve(c(t.currentUser.get())):Promise.resolve(null)}))}},{key:"signIn",value:function(t){return this._libraryInit("auth2").then((function(e){return"function"===typeof e.getAuthInstance&&(e=e.getAuthInstance()),e.isSignedIn.get()?Promise.resolve(c(e.currentUser.get())):e.signIn(t).then((function(t){return Promise.resolve(c(t))}))}))}},{key:"signOut",value:function(){return this._libraryInit("auth2").then((function(t){return t.isSignedIn.get()?t.disconnect().then((function(){return Promise.resolve()})):Promise.resolve()}))}},{key:"request",value:function(t){return this._libraryInit("client").then((function(e){return e.request(t)}))}}]),t}();function d(){var t={clientId:"776881837099-mro8g67vfh7fjl5v4m3fvoi9a673anla.apps.googleusercontent.com",scope:["profile","email","openid","https://www.googleapis.com/auth/dialogflow"].join(" ")};Object.defineProperty(r["default"].prototype,"$gapi",{value:new f(t)})}var p=d,g=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("Header"),n("b-container",{staticClass:"vh-100 pt-5",attrs:{fluid:""}},[n("router-view")],1)],1)},h=[],v=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("b-navbar",{attrs:{type:"dark",variant:"dark",fixed:"top"}},[n("b-navbar-brand",{attrs:{href:"#"}},[t._v("Botworx")])],1)},m=[],b=n("2877"),y={},w=Object(b["a"])(y,v,m,!1,null,null,null),I=w.exports,_={components:{Header:I}},P=_,j=Object(b["a"])(P,g,h,!1,null,null,null),O=j.exports,S=n("8c4f"),k=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("b-row",{staticClass:"h-100",attrs:{"align-h":"center","align-v":"center"}},[n("b-col",{attrs:{sm:"auto"}},[n("b-card",{staticClass:"m-4 shadow-sm",attrs:{"no-body":""}},[n("b-card-body",[n("b-card-title",{staticClass:"m-5",attrs:{"title-tag":"h3"}},[t._v("Login")]),n("div",{staticClass:"text-center my-5 mx-sm-5"},[n("GoogleLoginBtn",{nativeOn:{click:function(e){return t.signIn(e)}}})],1)],1)],1)],1)],1)},x=[],B=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"abcRioButton"},[n("div",{staticClass:"abcRioButtonContentWrapper"},[n("div",{staticClass:"abcRioButtonIcon"},[n("div",{staticClass:"abcRioButtonIconImage"},[n("svg",{staticClass:"abcRioButtonSvg",attrs:{xmlns:"http://www.w3.org/2000/svg",width:"18",height:"18",viewBox:"0 0 48 48"}},[n("path",{attrs:{fill:"#EA4335",d:"M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85A23.09 23.09 0 0024 0 23.99 23.99 0 002.56 13.22l7.98 6.19A14.33 14.33 0 0124 9.5z"}}),n("path",{attrs:{fill:"#4285F4",d:"M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94a11.16 11.16 0 01-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"}}),n("path",{attrs:{fill:"#FBBC05",d:"M10.53 28.59a14.3 14.3 0 010-9.18l-7.98-6.19a23.91 23.91 0 00.01 21.56l7.97-6.19z"}}),n("path",{attrs:{fill:"#34A853",d:"M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6a14.44 14.44 0 01-8.16 2.3c-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19A24 24 0 0024 48z"}}),n("path",{attrs:{fill:"none",d:"M0 0h48v48H0z"}})])])]),n("span",{staticClass:"abcRioButtonContents"},[t._v("Sign in with Google")])])])},C=[],E=(n("7bf6"),{}),A=Object(b["a"])(E,B,C,!1,null,"6b718f11",null),M=A.exports,R={components:{GoogleLoginBtn:M},methods:{signIn:function(){this.$gapi.signIn().then((function(t){console.dir(t)})).catch((function(t){console.error("Not signed in: %s",t.error)}))},onSignInSuccess:function(t){var e=t.getBasicProfile();console.log(e)},onSignInFailure:function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];console.error(e)}}},$=R,z=Object(b["a"])($,k,x,!1,null,null,null),L=z.exports;r["default"].use(S["a"]);var T=[{path:"/",redirect:{name:"r-login"}},{path:"/login",name:"r-login",component:L}],U=new S["a"]({mode:"history",base:"/",routes:T}),F=U,G=n("2f62");r["default"].use(G["a"]);var H=new G["a"].Store({state:{},mutations:{},actions:{},modules:{}});n("c860");r["default"].config.productionTip=!1,p(),new r["default"]({router:F,store:H,render:function(t){return t(O)}}).$mount("#app")},"66f0":function(t,e,n){},"68d3":function(t,e,n){},"7bf6":function(t,e,n){"use strict";var r=n("66f0"),o=n.n(r);o.a},c860:function(t,e,n){}});
//# sourceMappingURL=app.01aad40d.js.map