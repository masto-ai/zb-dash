(function(t){function e(e){for(var r,i,s=e[0],c=e[1],u=e[2],d=0,f=[];d<s.length;d++)i=s[d],Object.prototype.hasOwnProperty.call(o,i)&&o[i]&&f.push(o[i][0]),o[i]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(t[r]=c[r]);l&&l(e);while(f.length)f.shift()();return a.push.apply(a,u||[]),n()}function n(){for(var t,e=0;e<a.length;e++){for(var n=a[e],r=!0,s=1;s<n.length;s++){var c=n[s];0!==o[c]&&(r=!1)}r&&(a.splice(e--,1),t=i(i.s=n[0]))}return t}var r={},o={app:0},a=[];function i(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=t,i.c=r,i.d=function(t,e,n){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)i.d(n,r,function(e){return t[e]}.bind(null,r));return n},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],c=s.push.bind(s);s.push=e,s=s.slice();for(var u=0;u<s.length;u++)e(s[u]);var l=c;a.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"3ae7":function(t,e,n){"use strict";var r=n("9999"),o=n.n(r);o.a},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),o=(n("a15b"),n("5a0c")),a=n.n(o),i=n("23ad"),s=n.n(i),c=n("63e9"),u=n("7049"),l=n("a7e2"),d=n("3d31"),f=n("1073"),m=n("b1fc"),b=n("cbd0"),h=n("498a"),p=n("dbbe"),g=n("f9bc"),v=n("b519"),w=n("0c37");n("68d3");r["a"].use(c["a"]),r["a"].use(u["a"]),r["a"].use(l["a"]),r["a"].use(d["a"]),r["a"].use(f["a"]),r["a"].use(m["a"]),r["a"].use(b["a"]),r["a"].use(h["a"]),r["a"].use(p["a"]),r["a"].use(g["a"]),r["a"].use(v["a"]),r["a"].use(w["a"]);n("99af"),n("d3b7"),n("ac1f"),n("841c");var y=n("d4ec"),_=n("bee2"),B=5e3,x="https://apis.google.com/js/api.js";function C(t){if(!t.getBasicProfile)return null;var e=t.getBasicProfile();return{id:e.getId(),name:e.getName(),firstname:e.getGivenName(),lastname:e.getFamilyName(),image:e.getImageUrl(),email:e.getEmail()}}function j(t){return t.getAuthResponse?t.getAuthResponse():null}var O=function(){function t(e){Object(y["a"])(this,t),this.config=e}return Object(_["a"])(t,[{key:"_load",value:function(){return window.gapi?Promise.resolve(window.gapi):new Promise((function(t,e){var n=document.createElement("script");n.src=x;var r=setTimeout((function(){n.remove(),e(new Error("gapi load timeout."))}),B);n.onload=function(){clearTimeout(r),window.gapi||e(new Error("gapi load error.")),t(window.gapi)},document.head.appendChild(n)}))}},{key:"_libraryLoad",value:function(t){return this._load().then((function(e){return e[t]?Promise.resolve(e[t]):new Promise((function(n,r){e.load(t,{timeout:B,callback:function(){n(e[t])},onerror:function(e){r(new Error("Error on gapi ".concat(t," load: ").concat(e.message)))},ontimeout:function(){r(new Error("Error on gapi ".concat(t," load: timeout")))}})}))}))}},{key:"_libraryInit",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return e.apiKey=e.apiKey||this.config.apiKey,e.clientId=e.clientId||this.config.clientId,e.scope=e.scope||this.config.scope,e.discoveryDocs=e.discoveryDocs||this.config.discoveryDocs,this._libraryLoad(t).then((function(n){return n.init(e).then((function(e){return Promise.resolve("auth2"===t?e:n)}),(function(){return Promise.reject(new Error("Error on gapi ".concat(t," init.")))}))}))}},{key:"isSignedIn",value:function(){return this._libraryInit("auth2").then((function(t){return Promise.resolve(t.isSignedIn.get())}))}},{key:"getAuthObject",value:function(){return this._libraryInit("auth2").then((function(t){return t.isSignedIn.get()?Promise.resolve(j(t.currentUser.get())):Promise.resolve(null)}))}},{key:"currentUser",value:function(){return Promise.resolve({name:"AK",email:"ak",image:"test"})}},{key:"signIn",value:function(t){return this._libraryInit("auth2").then((function(e){return e.isSignedIn.get()?Promise.resolve(C(e.currentUser.get())):e.signIn(t).then((function(t){return Promise.resolve(C(t))}))}))}},{key:"signOut",value:function(){return this._libraryInit("auth2").then((function(t){return t.isSignedIn.get()?t.disconnect().then((function(){return Promise.resolve()})):Promise.resolve()}))}},{key:"request",value:function(t){return this._libraryInit("client").then((function(e){return e.request(t)}))}},{key:"getAgents",value:function(){var t=this;return this._libraryInit("client").then((function(e){return t.getAuthObject().then((function(t){var n=t.access_token;return e.setToken({access_token:n}),e.dialogflow.projects.agent.search({parent:"projects/-"}).then((function(t){return t.result.agents}))}))}))}}]),t}();function I(){a.a.extend(s.a);var t={clientId:"776881837099-mro8g67vfh7fjl5v4m3fvoi9a673anla.apps.googleusercontent.com",scope:["profile","email","openid","https://www.googleapis.com/auth/dialogflow","https://www.googleapis.com/auth/cloud-platform"].join(" "),discoveryDocs:["https://dialogflow.googleapis.com/$discovery/rest?version=v2"]};Object.defineProperty(r["a"].prototype,"$gapi",{value:new O(t)})}var E=I,k=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"d-flex flex-column vh-100",attrs:{id:"app"}},[n("Header"),n("b-container",{staticClass:"flex-grow-1 py-3",attrs:{fluid:""}},[n("router-view")],1)],1)},P=[],A=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("b-navbar",{attrs:{type:"dark",variant:"dark"}},[n("b-navbar-brand",{attrs:{to:"/"}},[t._v("Botworx")]),t.isAuthenticated?n("b-navbar-nav",{staticClass:"ml-auto"},[n("b-nav-item-dropdown",{attrs:{right:"","no-caret":""},scopedSlots:t._u([{key:"button-content",fn:function(){return[t.user.image?n("b-avatar",{attrs:{src:t.user.image,size:"sm"}}):n("span",[t._v(t._s(t.user.name))])]},proxy:!0}],null,!1,459506085)},[n("b-dd-text",{attrs:{tag:"em"}},[n("small",{staticClass:"text-muted"},[t._v(t._s(t.user.email))])]),n("b-dd-divider"),n("b-dd-item",{attrs:{href:"#",disabled:""}},[t._v("Profile")]),n("b-dd-item",{attrs:{href:"#",disabled:""}},[t._v("Billing")]),n("b-dd-divider"),n("b-dd-item",{attrs:{href:"#",disabled:""}},[t._v("Docs")]),n("b-dd-item",{attrs:{href:"#",disabled:""}},[t._v("Support")]),n("b-dd-divider"),n("b-dd-item",{on:{click:t.onLogout}},[t._v("Logout")])],1)],1):t._e()],1)},S=[],D=n("5530"),$=n("2f62"),N={computed:Object(D["a"])(Object(D["a"])({},Object($["c"])(["isAuthenticated"])),Object($["d"])({user:function(t){return t.auth.user}})),methods:{onLogout:function(){var t=this;this.$store.dispatch("logout",{vm:this}).then((function(){t.$router.push({name:"r-login"})}))}}},L=N,T=n("2877"),q=Object(T["a"])(L,A,S,!1,null,null,null),G=q.exports,R={components:{Header:G}},U=R,M=Object(T["a"])(U,k,P,!1,null,null,null),F=M.exports,z=n("8c4f"),H={state:{user:null},getters:{isAuthenticated:function(t){return!!t.user}},mutations:{setCurrentUser:function(t,e){t.user=e}},actions:{login:function(t,e){var n=t.commit,r=e.vm;return r.$gapi.signIn().then((function(t){n("setCurrentUser",t)}))},logout:function(t,e){var n=t.commit,r=e.vm;return r.$gapi.signOut().then((function(){n("setCurrentUser",null)}))}}},K=(n("4de4"),n("7db0"),{state:{bots:null,currentBot:null},mutations:{setBots:function(t,e){t.bots=e},setCurrentBot:function(t,e){t.currentBot=e},updateBot:function(t,e){var n=t.bots.find((function(t){return t.id===e.id}));Object.assign(n,e)},removeBot:function(t,e){t.bots=t.bots.filter((function(t){return t.id!==e}))}},actions:{fetchBots:function(t){var e=t.commit,n=t.state,r=[{id:"9457836",createdAt:"2020-05-16T15:07:25.507Z",name:"ZDownBot",agent:null,isEnabled:!0},{id:"78904123",createdAt:"2020-05-16T23:07:25.507Z",name:"AUpBot",agent:null,isEnabled:!1}];return n.bots?Promise.resolve(n.bots):new Promise((function(t,n){setTimeout((function(){e("setBots",r),t(r)}),200)}))},getOrFetchBot:function(t,e){var n=t.dispatch,r=t.state;return new Promise((function(t,n){var o=r.bots.find((function(t){return t.id===e}));o?t(o):n()})).catch((function(){return n("fetchBots").then((function(t){return t.find((function(t){return t.id===e}))}))}))},updateCurrentBot:function(t,e){var n=t.commit,r=t.state,o=r.bots.find((function(t){return t.id===r.currentBot.id}));return n("updateBot",Object(D["a"])(Object(D["a"])({},o),e)),Promise.resolve(o)},deleteBot:function(t,e){var n=t.commit;return new Promise((function(t,r){setTimeout((function(){n("removeBot",e),t()}),1500)}))}}});r["a"].use($["a"]);var W=new $["a"].Store({modules:{auth:H,bots:K},strict:!1}),Z=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("b-row",{staticClass:"h-100",attrs:{"align-h":"center","align-v":"center"}},[n("b-col",{attrs:{sm:"auto"}},[n("b-card",{staticClass:"m-4 shadow-sm",attrs:{"no-body":""}},[n("b-card-body",{staticClass:"text-center"},[n("b-card-title",{staticClass:"m-5",attrs:{"title-tag":"h3"}},[t._v("Login")]),n("GoogleLoginBtn",{staticClass:"my-5 mx-sm-5 mx-auto",nativeOn:{click:function(e){return t.onLogin(e)}}})],1)],1)],1)],1)},J=[],Q=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"abcRioButton"},[n("div",{staticClass:"abcRioButtonContentWrapper"},[n("div",{staticClass:"abcRioButtonIcon"},[n("div",{staticClass:"abcRioButtonIconImage"},[n("svg",{staticClass:"abcRioButtonSvg",attrs:{xmlns:"http://www.w3.org/2000/svg",width:"18",height:"18",viewBox:"0 0 48 48"}},[n("path",{attrs:{fill:"#EA4335",d:"M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85A23.09 23.09 0 0024 0 23.99 23.99 0 002.56 13.22l7.98 6.19A14.33 14.33 0 0124 9.5z"}}),n("path",{attrs:{fill:"#4285F4",d:"M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94a11.16 11.16 0 01-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"}}),n("path",{attrs:{fill:"#FBBC05",d:"M10.53 28.59a14.3 14.3 0 010-9.18l-7.98-6.19a23.91 23.91 0 00.01 21.56l7.97-6.19z"}}),n("path",{attrs:{fill:"#34A853",d:"M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6a14.44 14.44 0 01-8.16 2.3c-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19A24 24 0 0024 48z"}}),n("path",{attrs:{fill:"none",d:"M0 0h48v48H0z"}})])])]),n("span",{staticClass:"abcRioButtonContents"},[t._v("Sign in with Google")])])])},V=[],X=(n("7bf6"),{}),Y=Object(T["a"])(X,Q,V,!1,null,"6b718f11",null),tt=Y.exports,et={components:{GoogleLoginBtn:tt},methods:{onLogin:function(){this.$store.dispatch("login",{vm:this}).then(this.onLoginSuccess).catch(this.onLoginFailure)},onLoginSuccess:function(){this.$router.push({name:"r-home"})},onLoginFailure:function(t){console.error("Not signed in: %s",t.error)}}},nt=et,rt=Object(T["a"])(nt,Z,J,!1,null,null,null),ot=rt.exports,at=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("b-row",[t.bots?t._l(t.bots,(function(t,e){return n("BotCard",{key:e,attrs:{bot:t,variant:e}})})):n("GridCol",[n("div",{staticClass:"h-100 d-flex align-items-center justify-content-center"},[n("b-spinner",{attrs:{label:"Loading bots...",variant:"info"}})],1)]),n("NewBotCard")],2)},it=[],st=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("GridCard",[t.bot.isEnabled?n("span",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.bottomright",modifiers:{bottomright:!0}}],staticClass:"status rounded-circle bg-success",attrs:{title:"Enabled"}}):n("span",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.bottomright",modifiers:{bottomright:!0}}],staticClass:"status rounded-circle bg-danger",attrs:{title:"Disabled"}}),n("b-avatar",{attrs:{variant:t.variants[t.variant%t.variants.length]}}),n("h4",{staticClass:"my-4 font-weight-light"},[t._v(t._s(t.bot.name))]),n("div",{staticClass:"actions d-flex w-100 justify-content-between align-items-center"},[n("span",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.bottomright",modifiers:{bottomright:!0}}],staticClass:"h6 mb-0",attrs:{title:"Delete",role:"button"},on:{click:function(e){t.isDeleting=!0}}},[n("BIconTrash",{staticClass:"text-danger"})],1),n("span",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.bottom",modifiers:{bottom:!0}}],staticClass:"h5 mb-0",attrs:{title:"Edit",role:"button"},on:{click:t.onEdit}},[n("BIconPencil",{staticClass:"text-secondary"})],1),n("span",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.bottomleft.html",modifiers:{bottomleft:!0,html:!0}}],staticClass:"h3 mb-0",attrs:{title:t.infoText}},[n("BIconInfo",{staticClass:"text-primary"})],1)]),n("b-modal",{attrs:{centered:"","hide-header":"","ok-title":"Delete","ok-variant":"danger",busy:t.isDeletePending},on:{ok:t.onDelete},model:{value:t.isDeleting,callback:function(e){t.isDeleting=e},expression:"isDeleting"}},[n("div",{staticClass:"text-center"},[n("BIconExclamationTriangle",{staticClass:"my-4 text-warning",attrs:{"font-scale":"5"}}),n("h3",{staticClass:"text-muted"},[t._v(" Are you sure you want to delete "),n("em",[t._v(t._s(t.bot.name))]),t._v("? ")])],1)])],1)},ct=[],ut=(n("a9e3"),n("96cf"),n("1da1")),lt=n("74a0"),dt=n.n(lt),ft=n("7386"),mt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("GridCol",[n("b-card",{staticClass:"h-100 text-center bg-gradient-light shadow-sm",attrs:{"body-class":"d-flex flex-column justify-content-between align-items-center"}},[t._t("default")],2)],1)},bt=[],ht=function(t,e){var n=e._c;return n("b-col",{staticClass:"mb-4",attrs:{cols:"12",sm:"6",md:"4",lg:"3"}},[e._t("default")],2)},pt=[],gt={},vt=Object(T["a"])(gt,ht,pt,!0,null,null,null),wt=vt.exports,yt={components:{GridCol:wt}},_t=yt,Bt=Object(T["a"])(_t,mt,bt,!1,null,null,null),xt=Bt.exports,Ct={components:{BIconExclamationTriangle:ft["b"],BIconInfo:ft["c"],BIconPencil:ft["d"],BIconTrash:ft["g"],GridCard:xt},props:{bot:{type:Object,required:!0},variant:{type:Number,required:!0}},data:function(){return{isDeleting:!1,isDeletePending:!1,variants:["primary","dark","success","danger","warning","info","secondary","light"]}},computed:{infoText:function(){var t=this.bot.agent?dt()(this.bot.agent.displayName):"<em>Unassigned</em>",e=a()(this.bot.createdAt).format("ll");return"\n        Agent: ".concat(t,"<br>\n        Created: ").concat(e,"\n      ")}},methods:Object(D["a"])({onEdit:function(){this.$router.push({name:"r-editor",params:{botId:this.bot.id}})},onDelete:function(t){var e=this;return Object(ut["a"])(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return t.preventDefault(),e.isDeletePending=!0,n.prev=2,n.next=5,e.deleteBot(e.bot.id);case 5:n.next=10;break;case 7:n.prev=7,n.t0=n["catch"](2),console.error(n.t0);case 10:e.isDeletePending=!1;case 11:case"end":return n.stop()}}),n,null,[[2,7]])})))()}},Object($["b"])(["deleteBot"]))},jt=Ct,Ot=(n("3ae7"),Object(T["a"])(jt,st,ct,!1,null,"05a049eb",null)),It=Ot.exports,Et=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("GridCard",[n("b-button",{attrs:{variant:"link"}},[n("BIconPlusSquare",{attrs:{"font-scale":"4",variant:"secondary"}})],1),n("h4",{staticClass:"text-muted mt-4"},[t._v("New Bot")])],1)},kt=[],Pt={components:{BIconPlusSquare:ft["f"],GridCard:xt}},At=Pt,St=Object(T["a"])(At,Et,kt,!1,null,null,null),Dt=St.exports,$t={components:{BotCard:It,GridCol:wt,NewBotCard:Dt},data:function(){return{agents:null}},computed:Object(D["a"])({},Object($["d"])({bots:function(t){return t.bots.bots}})),mounted:function(){this.fetchBots()},methods:Object(D["a"])({},Object($["b"])(["fetchBots"]))},Nt=$t,Lt=Object(T["a"])(Nt,at,it,!1,null,null,null),Tt=Lt.exports,qt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("b-row",[n("b-col",{attrs:{cols:"12",md:"6",lg:"4"}},[n("b-card",{scopedSlots:t._u([{key:"header",fn:function(){return[n("BIconWrench"),t._v(" Configure ")]},proxy:!0}])},[n("b-form",{on:{submit:function(e){return e.preventDefault(),t.onSubmit(e)}}},[n("b-form-group",[n("b-form-checkbox",{attrs:{switch:""},model:{value:t.isEnabled,callback:function(e){t.isEnabled=e},expression:"isEnabled"}},[t._v(" Enabled ")])],1),n("b-form-group",{attrs:{label:"Bot name:"}},[n("b-form-input",{attrs:{maxlength:"20",required:""},model:{value:t.botName,callback:function(e){t.botName=e},expression:"botName"}})],1),n("b-button",{attrs:{type:"submit",variant:"primary"}},[t._v("Save")])],1)],1)],1)],1)},Gt=[],Rt=(n("b0c0"),{components:{BIconWrench:ft["h"]},props:{botId:{type:String,required:!0}},data:function(){return{botName:void 0,isEnabled:void 0}},computed:Object(D["a"])({},Object($["d"])({currentBot:function(t){return t.bots.currentBot}})),created:function(){var t=this;return Object(ut["a"])(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t.getOrFetchBot(t.botId);case 3:n=e.sent,t.$store.commit("setCurrentBot",n),t.botName=n.name,t.isEnabled=n.isEnabled,e.next=12;break;case 9:e.prev=9,e.t0=e["catch"](0),t.$router.push({name:"r-home"});case 12:case"end":return e.stop()}}),e,null,[[0,9]])})))()},methods:Object(D["a"])(Object(D["a"])({},Object($["b"])(["getOrFetchBot","updateCurrentBot"])),{},{onSubmit:function(){this.updateCurrentBot({name:this.botName,isEnabled:this.isEnabled})}})}),Ut=Rt,Mt=Object(T["a"])(Ut,qt,Gt,!1,null,null,null),Ft=Mt.exports;r["a"].use(z["a"]);var zt=[{path:"/",name:"r-home",component:Tt,meta:{title:"Home",requireAuth:!1}},{path:"/login",name:"r-login",component:ot,meta:{title:"Login",requireAuth:!1}},{path:"/:botId",name:"r-editor",component:Ft,props:!0,meta:{title:"Editor",requireAuth:!1}}],Ht=new z["a"]({mode:"history",base:"/",routes:zt});Ht.beforeEach((function(t,e,n){var r=t.meta.requireAuth;void 0===r||r?W.getters.isAuthenticated?n():n({name:"r-login"}):(W.getters.isAuthenticated,n())})),Ht.beforeEach((function(t,e,n){document.title=t.meta.title?t.meta.title+" - Botworx":"Botworx",n()}));var Kt=Ht;n("c860");r["a"].config.productionTip=!1,E(),r["a"].prototype.$gapi.currentUser().then((function(t){W.commit("setCurrentUser",t),new r["a"]({router:Kt,store:W,render:function(t){return t(F)}}).$mount("#app")}))},"66f0":function(t,e,n){},"68d3":function(t,e,n){},"7bf6":function(t,e,n){"use strict";var r=n("66f0"),o=n.n(r);o.a},9999:function(t,e,n){},c860:function(t,e,n){}});
//# sourceMappingURL=app.9c8e8e05.js.map