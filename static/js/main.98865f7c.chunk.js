(this["webpackJsonpmagic-pants"]=this["webpackJsonpmagic-pants"]||[]).push([[0],{21:function(e,t,c){},22:function(e,t,c){},31:function(e,t,c){},32:function(e,t,c){},33:function(e,t,c){},34:function(e,t,c){},35:function(e,t,c){"use strict";c.r(t);var n=c(1),a=c(8),s=(c(21),c(7)),i=(c(22),c(4)),r=c(9),l=function(e){return e.stage},o=(Object(r.a)(l,(function(e){return e.loading})),Object(r.a)(l,(function(e){return e.scene}))),j=Object(r.a)(l,(function(e){return e.message})),u=c(14),d=[{name:"black",img:c.p+"static/media/black.0ac050f4.png",color:"#B11C2A"},{name:"gray",img:c.p+"static/media/gray.ffb77e08.png",color:"#2D3853"},{name:"blue",img:c.p+"static/media/blue.dcc2a846.png",color:"#78777D"},{name:"RED",img:c.p+"static/media/RED.5d34867a.png",color:"#716D6E"},{name:"style",img:c.p+"static/media/style.61720423.png",color:"#2B2D32"}],b=["#B11C2A","#2D3853","#78777D","#716D6E","#2B2D32"],m=function(e){for(var t=[],c=0;c<e;c++){var n=Math.floor(5*Math.random()),a=Math.floor(5*Math.random());t.push(Object(u.a)(Object(u.a)({},d[n]),{},{color:b[a]}))}return t},O=c(3),E=c.n(O),x=c(6),h=c(2),p=Object(h.createAsyncAction)("FETCH_REQUEST","FETCH_LOADING_SUCCESS","FETCH_FAILURE")(),f=Object(h.createAsyncAction)("FETCH_REQUEST","FETCH_SCENE_SUCCESS","FETCH_FAILURE")(),v=Object(h.createAsyncAction)("FETCH_REQUEST","FETCH_MESSAGE_SUCCESS","FETCH_FAILURE")(),C=function(e){return function(){var t=Object(x.a)(E.a.mark((function t(c,n){return E.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:c(f.success(e));case 1:case"end":return t.stop()}}),t)})));return function(e,c){return t.apply(this,arguments)}}()},S=c.p+"static/media/correct.62de66c5.mp3",A=c.p+"static/media/fail.3561b1d6.mp3",g=c.p+"static/media/pants.409328cd.mp3",T=c(0);var F=function(e){var t,c,a=e.level,r=e.isBG,l=e.isMusic,u=e.speed,b=Object(n.useState)(a.length),m=Object(s.a)(b,2),O=m[0],h=m[1],p=Object(n.useState)(0),f=Object(s.a)(p,2),F=f[0],_=f[1],y=Object(n.useState)(0),N=Object(s.a)(y,2),R=N[0],H=N[1],U=Object(i.c)(o),k=Object(i.c)(j),w=Object(i.b)(),I=Object(n.useState)(new Audio(g)),B=Object(s.a)(I,2),D=B[0],L=B[1],M=Object(n.useState)(new Audio(S)),Q=Object(s.a)(M,2),G=Q[0],P=Q[1],J=function(e){e?(P(new Audio(S)),G.volume=.1,G.play()):(P(new Audio(A)),G.volume=.1,G.play())};Object(n.useEffect)((function(){var e=setInterval((function(){O>0&&(h(O-1),_((function(e){return e+1}))),0===O&&clearInterval(e)}),u||1e3);return function(){clearInterval(e)}}),[O]);var q=function(e){var t,c;e===(null===a||void 0===a||null===(t=a[R])||void 0===t?void 0:t.name)?(J(!0),w((c=k+1,function(){var e=Object(x.a)(E.a.mark((function e(t,n){return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t(v.success(c));case 1:case"end":return e.stop()}}),e)})));return function(t,c){return e.apply(this,arguments)}}()))):J(!1),R+1===a.length&&(l&&(L(new Audio(g)),D.volume=.5,D.play()),w(C(U+1))),H(R+1)};return Object(T.jsxs)("div",{className:"game-container",style:{backgroundColor:r?"".concat(null===a||void 0===a||null===(t=a[F])||void 0===t?void 0:t.color):"black"},children:[0!==O&&Object(T.jsxs)("div",{className:"role-container",children:[Object(T.jsx)("div",{className:"RB"}),Object(T.jsx)("div",{className:u?"PANTS speedAnime":"PANTS",style:{backgroundImage:"url(".concat(null===a||void 0===a||null===(c=a[F])||void 0===c?void 0:c.img,")")}})]}),0===O&&Object(T.jsxs)("div",{className:"answer-container",children:[Object(T.jsxs)("div",{className:"answer-title",children:[R+1,"\u679a\u76ee"]}),Object(T.jsx)("div",{className:"answer",children:d.map((function(e){return Object(T.jsx)("div",{className:"answer-item",style:{backgroundImage:"url(".concat(null===e||void 0===e?void 0:e.img,")")},onClick:function(){return q(e.name)}})}))})]})]})};c(31);var _=function(){var e=Object(i.b)();return Object(T.jsx)("div",{className:"container",children:Object(T.jsxs)("div",{className:"titleContainer",children:[Object(T.jsx)("div",{className:"title",children:"\u30d1\u30f3\u30c4\u9b54\u8853\u5e2b"}),Object(T.jsxs)("div",{className:"btnCon",children:[Object(T.jsx)("button",{className:"Btn cur",onClick:function(){e(C(1))},children:"\u30b9\u30bf\u30fc\u30c8"}),Object(T.jsx)("button",{className:"Btn cur",onClick:function(){e(C(-1))},children:"\u8aac\u660e"})]})]})})};c(32);var y=function(){var e=Object(i.c)(j);return Object(T.jsx)("div",{className:"end-container",children:Object(T.jsxs)("div",{className:"titleContainer",children:[Object(T.jsxs)("div",{className:"title",children:[Object(T.jsx)("span",{className:"text1",children:"\u679a\u6570\uff1a"}),Object(T.jsxs)("span",{className:"text2",children:[e," \u679a"]})]}),Object(T.jsxs)("div",{className:"title",children:[Object(T.jsx)("span",{className:"text3",children:"\u3042\u306a\u305f\u306f"}),Object(T.jsxs)("span",{style:{color:e<9?"white":e<18?"#32a852":e<27?"#2b7fd9":e<36?"#a42cd4":e<45?"#ed7818":45===e?"#ffd700":"white"},className:"pantTitle text4",children:["\u30d1\u30f3\u30c4",e<3?"\u4e8c\u7b49\u5175":e<6?"\u4e00\u7b49\u5175":e<9?"\u4e0a\u7b49\u5175":e<12?"\u5175\u66f9":e<15?"\u4f0d\u9577":e<18?"\u8ecd\u66f9":e<21?"\u5c11\u5c09":e<24?"\u4e2d\u5c09":e<27?"\u5927\u5c09":e<30?"\u5c11\u4f50":e<33?"\u4e2d\u4f50":e<36?"\u5927\u4f50":e<39?"\u5c11\u5c06":e<42?"\u4e2d\u5c06":e<45?"\u5927\u5c06":45===e?"\u5143\u5e25":"\u9b54\u8853\u5e2b"]}),Object(T.jsx)("span",{className:"lastSpan text5",children:"\u3067\u3059\u3002"})]})]})})};c(33);var N=function(){var e=Object(i.b)();return Object(T.jsx)("div",{className:"doc-container",children:Object(T.jsxs)("div",{className:"wrapper",children:[Object(T.jsx)("p",{children:"Twitch\u6700\u5f37\u306e\u30d1\u30f3\u30c4\u30de\u30b8\u30b7\u30e3\u30f3\uff1aR\u201dB"}),Object(T.jsx)("p",{children:"\u307e\u305f\u51fa\u6f14\u3059\u308b\u3053\u3068\u306b\u306a\u308a\u307e\u3057\u305f\uff01"}),Object(T.jsx)("p",{children:"\u4eca\u65e5\u306f\u516d\u3064\u306e\u30b7\u30e7\u30fc\u3092\u51fa\u6f14\u3059\u308b\u4e88\u5b9a\u3067\u3059\uff01"}),Object(T.jsx)("p",{children:"\u3042\u306a\u305f\u306f\u4e00\u4f53\u3069\u3053\u307e\u3067\u898b\u7834\u308c\u308b\u304b\uff1f"}),Object(T.jsx)("br",{}),Object(T.jsx)("br",{}),Object(T.jsx)("br",{}),Object(T.jsx)("p",{children:"\u30b2\u30fc\u30e0\u306b\u4f55\u304b\u30a2\u30a4\u30c7\u30a3\u30a2\u3042\u3063\u305f\u3089\uff1aTwitch:windchi"}),Object(T.jsx)("p",{children:"\u4ed6\u306e\u30b2\u30fc\u30e0\uff1a"}),Object(T.jsxs)("div",{children:[Object(T.jsx)("a",{href:"https://ga021396.github.io/Sam1268/",target:"_blank",children:"\u8d85\u5fd7\u7965"}),Object(T.jsx)("a",{href:"https://ga021396.github.io/steamer-test/",target:"_blank",children:"\u5144\u5f1f\u5e6b\u5fc3\u7406\u6e2c\u9a57"}),Object(T.jsx)("a",{href:"https://ga021396.github.io/mota-bro-ver/",target:"_blank",children:"\u5144\u5f1f\u5854"})]}),Object(T.jsx)("button",{className:"Btn",onClick:function(){e(C(0))},children:"\u623b\u308b"})]})})};c(34);var R=function(){var e=Object(i.c)(o),t=m(5),c=m(6),n=m(7),a=m(8),s=m(9),r=m(10);return Object(T.jsxs)("div",{className:"App",children:[0===e&&Object(T.jsx)(_,{}),1===e&&Object(T.jsx)(F,{level:t}),2===e&&Object(T.jsx)(F,{level:c}),3===e&&Object(T.jsx)(F,{level:n,isBG:!0}),4===e&&Object(T.jsx)(F,{level:a,isBG:!0,isMusic:!0}),5===e&&Object(T.jsx)(F,{level:s,isBG:!0,isMusic:!0}),6===e&&Object(T.jsx)(F,{level:r,isBG:!0,isMusic:!0,speed:500}),7===e&&Object(T.jsx)(y,{}),-1===e&&Object(T.jsx)(N,{})]})},H=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,36)).then((function(t){var c=t.getCLS,n=t.getFID,a=t.getFCP,s=t.getLCP,i=t.getTTFB;c(e),n(e),a(e),s(e),i(e)}))},U=c(5),k=c(16),w=Object(h.createReducer)(!1).handleAction([p.success],(function(e,t){return t.payload})),I=Object(h.createReducer)(0).handleAction([f.success],(function(e,t){return t.payload})),B=Object(h.createReducer)(0).handleAction([v.success],(function(e,t){return t.payload})),D=Object(U.c)({loading:w,message:B,scene:I}),L=Object(h.createAsyncAction)("FETCH_REQUEST","FETCH_HERO_SUCCESS","FETCH_FAILURE")(),M=Object(h.createReducer)({x:5,y:10,atk:10,def:10,hp:100,name:"",des:"",money:0}).handleAction([L.success],(function(e,t){return t.payload})),Q=Object(U.c)({item:M}),G=Object(h.createAsyncAction)("FETCH_REQUEST","FETCH_SCENE1_SUCCESS","FETCH_FAILURE")(),P=Object(h.createAsyncAction)("FETCH_REQUEST","FETCH_SCENE2_SUCCESS","FETCH_FAILURE")(),J=Object(h.createAsyncAction)("FETCH_REQUEST","FETCH_SCENE3_SUCCESS","FETCH_FAILURE")(),q=Object(h.createAsyncAction)("FETCH_REQUEST","FETCH_SCENE4_SUCCESS","FETCH_FAILURE")(),z=Object(h.createAsyncAction)("FETCH_REQUEST","FETCH_SCENE5_SUCCESS","FETCH_FAILURE")(),K={exists:1,name:"wall"},V={exists:1,name:"smorc"},W={exists:1,name:"sta"},X=[[{exists:1,name:"next"},V,0,0,0,0,0,0,0,0,0],[K,K,K,K,K,K,K,K,K,K,0],[0,0,0,K,0,K,{exists:3,name:"k7"},0,W,K,0],[W,0,V,0,0,K,0,0,0,K,0],[K,0,K,K,0,K,K,K,V,K,0],[0,0,0,K,0,V,0,0,0,K,0],[W,0,0,K,0,K,K,K,K,K,0],[K,0,K,K,0,0,0,0,0,0,0],[0,V,0,K,K,0,K,K,K,0,K],[0,0,0,K,0,0,0,K,0,V,0],[{exists:2,name:"afa"},0,0,K,0,0,0,K,W,0,{exists:4,name:"mmd"}]],Y=[[{exists:1,name:"backTo1"},0,0,0,0,0,0,0,0,0,0],[0,0,K,K,0,0,{exists:2,name:"yang"},0,0,K,K],[0,K,K,K,K,K,0,K,K,K,K],[0,K,{exists:3,name:"limi"},0,K,0,0,0,K,0,{exists:1,name:"tea"}],[0,K,0,0,0,0,0,0,{exists:1,name:"jail"},0,0],[0,K,K,K,K,0,0,0,K,K,K],[0,K,W,W,K,0,0,0,K,W,W],[0,K,W,W,0,0,0,0,0,W,W],[0,K,K,K,K,0,0,0,K,K,K],[0,K,0,0,K,0,0,0,K,0,0],[{exists:1,name:"nextTo3"},K,{exists:2,name:"oan"},0,0,0,0,0,0,0,{exists:2,name:"ticket"}]],Z={exists:1,name:"bird"},$=[[Z,Z,Z,Z,K,{exists:1,name:"nextTo5"},K,Z,Z,Z,Z],[Z,Z,Z,Z,K,0,K,Z,Z,Z,Z],[Z,Z,Z,Z,K,0,K,Z,Z,Z,Z],[Z,Z,Z,Z,K,{exists:3,name:"nl"},K,Z,Z,Z,Z],[0,0,0,0,K,0,K,0,0,0,0],[0,0,0,0,K,0,K,0,0,0,0],[0,0,0,0,K,0,K,0,0,0,0],[V,V,V,V,K,0,K,V,V,V,V],[V,V,V,V,K,0,K,V,V,V,V],[V,V,V,V,K,0,K,V,V,V,V],[V,V,V,V,K,{exists:1,name:"backTo3"},K,V,V,V,V]],ee=Object(h.createReducer)(X).handleAction([G.success],(function(e,t){return t.payload})),te=Object(h.createReducer)(Y).handleAction([P.success],(function(e,t){return t.payload})),ce=Object(h.createReducer)([]).handleAction([J.success],(function(e,t){return t.payload})),ne=Object(h.createReducer)($).handleAction([q.success],(function(e,t){return t.payload})),ae=Object(h.createReducer)([]).handleAction([z.success],(function(e,t){return t.payload})),se=Object(U.c)({item:ee,item2:te,item3:ce,item4:ne,item5:ae}),ie=Object(U.c)({stage:D,hero:Q,scene1:se}),re=Object(U.d)(ie,Object(U.a)(k.a));console.log(re.getState());var le=re;Object(a.hydrate)(Object(T.jsx)(i.a,{store:le,children:Object(T.jsx)(R,{})}),document.getElementById("root")),H()}},[[35,1,2]]]);
//# sourceMappingURL=main.98865f7c.chunk.js.map