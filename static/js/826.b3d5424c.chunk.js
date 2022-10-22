"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[826],{745:function(n,e,t){t.d(e,{M1:function(){return p},Ph:function(){return l},Qt:function(){return u},aV:function(){return s},tx:function(){return d}});var r=t(861),a=t(757),c=t.n(a),i=t(44),o="5f2a66e63fa9a8139a0b7e8b9aba27ca";i.ZP.defaults.baseURL="https://api.themoviedb.org/";var s=function(){var n=(0,r.Z)(c().mark((function n(){var e,t,r,a,s=arguments;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e=s.length>0&&void 0!==s[0]?s[0]:1,t=s.length>1&&void 0!==s[1]?s[1]:"en",n.prev=2,n.next=5,i.ZP.get("3/trending/movie/day?api_key=".concat(o,"&page=").concat(e,"&language=").concat(t));case 5:return r=n.sent,n.next=8,r.data;case 8:return a=n.sent,n.abrupt("return",a);case 12:n.prev=12,n.t0=n.catch(2),console.error(n.t0);case 15:case"end":return n.stop()}}),n,null,[[2,12]])})));return function(){return n.apply(this,arguments)}}(),u=function(){var n=(0,r.Z)(c().mark((function n(e){var t,r,a,s=arguments;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t=s.length>1&&void 0!==s[1]?s[1]:"en",n.prev=1,n.next=4,i.ZP.get("3/movie/".concat(e,"?api_key=").concat(o,"&language=").concat(t));case 4:return r=n.sent,n.next=7,r.data;case 7:return a=n.sent,n.abrupt("return",a);case 11:n.prev=11,n.t0=n.catch(1),console.error(n.t0);case 14:case"end":return n.stop()}}),n,null,[[1,11]])})));return function(e){return n.apply(this,arguments)}}(),l=function(){var n=(0,r.Z)(c().mark((function n(e){var t,r,a,s,u=arguments;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t=u.length>1&&void 0!==u[1]?u[1]:1,r=u.length>2&&void 0!==u[2]?u[2]:"en",n.prev=2,n.next=5,i.ZP.get("3/search/movie?api_key=".concat(o,"&language=").concat(r,"&query=").concat(e,"&page=").concat(t,"&include_adult=false"));case 5:return a=n.sent,n.next=8,a.data;case 8:return s=n.sent,n.abrupt("return",s);case 12:n.prev=12,n.t0=n.catch(2),console.error(n.t0);case 15:case"end":return n.stop()}}),n,null,[[2,12]])})));return function(e){return n.apply(this,arguments)}}(),p=function(){var n=(0,r.Z)(c().mark((function n(e){var t,r,a,s=arguments;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t=s.length>1&&void 0!==s[1]?s[1]:"en",n.prev=1,n.next=4,i.ZP.get("3/movie/".concat(e,"/credits?api_key=").concat(o,"&language=").concat(t));case 4:return r=n.sent,n.next=7,r.data;case 7:return a=n.sent,n.abrupt("return",a.cast);case 11:n.prev=11,n.t0=n.catch(1),console.error(n.t0);case 14:case"end":return n.stop()}}),n,null,[[1,11]])})));return function(e){return n.apply(this,arguments)}}(),d=function(){var n=(0,r.Z)(c().mark((function n(e){var t,r,a,s=arguments;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t=s.length>1&&void 0!==s[1]?s[1]:"en",n.prev=1,n.next=4,i.ZP.get("3/movie/".concat(e,"/reviews?api_key=").concat(o,"&language=").concat(t));case 4:return r=n.sent,n.next=7,r.data;case 7:return a=n.sent,n.abrupt("return",a.results);case 11:n.prev=11,n.t0=n.catch(1),console.error(n.t0);case 14:case"end":return n.stop()}}),n,null,[[1,11]])})));return function(e){return n.apply(this,arguments)}}()},200:function(n,e,t){t.d(e,{j:function(){return a}});var r=t(184),a=function(){return(0,r.jsx)("div",{children:"Try again later"})}},512:function(n,e,t){t.d(e,{i:function(){return s}});var r,a=t(168),c=t(444),i=t(184),o=c.ZP.div(r||(r=(0,a.Z)(["\n  padding: ","px;\n"])),(function(n){return n.theme.space[5]})),s=function(n){var e=n.children;return(0,i.jsx)(o,{children:e})}},826:function(n,e,t){t.r(e),t.d(e,{default:function(){return Q}});var r,a,c,i,o,s,u,l,p=t(861),d=t(885),f=t(757),h=t.n(f),v=t(791),x=t(739),g=t(745),m=t(512),j=t(168),Z=t(128),b=t(731),w=t(444),k=t(184),_=(0,w.ZP)(b.rU)(r||(r=(0,j.Z)(["\n  display: inline-flex;\n  align-items: center;\n  gap: 4px;\n  padding: 8px 0;\n  color: black;\n  text-decoration: none;\n  font-weight: 500;\n  text-transform: uppercase;\n\n  :hover {\n    color: orangered;\n  }\n"]))),y=function(n){var e=n.to,t=n.children;return(0,k.jsxs)(_,{to:e,children:[(0,k.jsx)(Z.jTe,{size:"24"}),t]})},P=w.ZP.div(a||(a=(0,j.Z)(["\n  display: flex;\n  padding: ","px;\n  gap: 24px;\n  border-bottom: 1px solid black;\n"])),(function(n){return n.theme.space[4]})),S=w.ZP.div(c||(c=(0,j.Z)(["\n  display: flex;\n  flex-direction: column;\n  gap: 24px;\n"]))),U=w.ZP.h1(i||(i=(0,j.Z)([""]))),z=function(n){var e=n.movie,t=e.poster_path,r=e.title,a=e.vote_average,c=e.vote_count,i=e.overview,o=e.genres,s=a?Math.round(a/c*100):0,u=o&&o.map((function(n){return n.name})).join(", "),l=t?"https://image.tmdb.org/t/p/w500/".concat(t):"https://upload.wikimedia.org/wikipedia/commons/6/64/Poster_not_available.jpg";return(0,k.jsxs)(P,{children:[(0,k.jsx)("img",{src:l,alt:"{title}",width:"300",height:"450"}),(0,k.jsxs)(S,{children:[(0,k.jsx)(U,{children:r}),(0,k.jsxs)("p",{children:["User score: ",s,"%"]}),(0,k.jsx)("h3",{children:"Owerview"}),(0,k.jsx)("p",{children:i}),u&&(0,k.jsxs)(k.Fragment,{children:[(0,k.jsx)("h3",{children:"Genres"}),(0,k.jsx)("p",{children:u})]})]})]})},C=t(324),M=w.ZP.div(o||(o=(0,j.Z)(["\n  padding: ","px;\n  border-bottom: "," ",";\n"])),(function(n){return n.theme.space[3]}),(function(n){return n.theme.borders.normal}),(function(n){return n.theme.colors.black})),O=w.ZP.p(s||(s=(0,j.Z)(["\n  margin-bottom: ","px;\n"])),(function(n){return n.theme.space[2]})),T=w.ZP.ul(u||(u=(0,j.Z)(["\n  display: flex;\n  gap: ","px;\n"])),(function(n){return n.theme.space[2]})),F=(0,w.ZP)(b.OL)(l||(l=(0,j.Z)(["\n  padding: ","px ","px;\n  border-radius: ","px;\n  text-decoration: none;\n  color: black;\n  font-weight: ",";\n  font-size: ",";\n\n  &.active {\n    color: ",";\n    font-weight: ",";\n  }\n\n  :hover:not(.active),\n  :focus-visible:not(.active) {\n    text-decoration: underline;\n  }\n"])),(function(n){return n.theme.space[3]}),(function(n){return n.theme.space[4]}),(function(n){return n.theme.radii.normal}),(function(n){return n.theme.fontWeights.semiBold}),(function(n){return n.theme.fontSizes.m}),(function(n){return n.theme.colors.accent}),(function(n){return n.theme.fontWeights.bold})),G=function(){return(0,k.jsxs)(M,{children:[(0,k.jsx)(O,{children:"Additional info:"}),(0,k.jsxs)(T,{children:[(0,k.jsx)("li",{children:(0,k.jsx)(F,{to:"cast",children:"Cast"})}),(0,k.jsx)("li",{children:(0,k.jsx)(F,{to:"reviews",children:"Review"})})]})]})},L=t(200),Q=function(){var n=(0,x.UO)().id,e=(0,v.useState)([]),t=(0,d.Z)(e,2),r=t[0],a=t[1],c=(0,v.useState)(null),i=(0,d.Z)(c,2),o=i[0],s=i[1],u=(0,v.useState)(!1),l=(0,d.Z)(u,2),f=l[0],j=l[1],Z=(0,v.useState)(""),b=(0,d.Z)(Z,2),w=b[0],_=b[1],P=(0,x.TH)();return(0,v.useEffect)((function(){var e,t;_(null!==(e=null===(t=P.state)||void 0===t?void 0:t.from)&&void 0!==e?e:"/movies");var r=function(){var e=(0,p.Z)(h().mark((function e(){var t;return h().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return j(!0),e.prev=1,e.next=4,(0,g.Qt)(n);case 4:t=e.sent,a(t),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),s("No data in fetch MovieDetails ".concat(e.t0));case 11:return e.prev=11,j(!1),e.finish(11);case 14:case"end":return e.stop()}}),e,null,[[1,8,11,14]])})));return function(){return e.apply(this,arguments)}}();r()}),[]),(0,k.jsxs)(m.i,{children:[f&&(0,k.jsx)(C.g,{}),r&&(0,k.jsxs)(k.Fragment,{children:[(0,k.jsx)(y,{to:w,children:"Go back"}),(0,k.jsx)(z,{movie:r}),(0,k.jsx)(G,{}),(0,k.jsx)(v.Suspense,{fallback:(0,k.jsx)(C.g,{}),children:(0,k.jsx)(x.j3,{})})]}),o&&(0,k.jsx)(L.j,{})]})}}}]);
//# sourceMappingURL=826.b3d5424c.chunk.js.map