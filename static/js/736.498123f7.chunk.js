"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[736],{736:function(e,n,t){t.r(n),t.d(n,{default:function(){return g}});var r,a=t(861),c=t(885),u=t(757),s=t.n(u),o=t(791),i=t(739),p=t(745),l=t(168),f=t(444).ZP.ul(r||(r=(0,l.Z)(["\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n  gap: ","px;\n  padding: ","px;\n\n  & li {\n    width: 150px;\n  }\n"])),(function(e){return e.theme.space[3]}),(function(e){return e.theme.space[4]})),h=t(324),v=t(200),d=t(184),g=function(){var e=(0,i.UO)().id,n=(0,o.useState)([]),t=(0,c.Z)(n,2),r=t[0],u=t[1],l=(0,o.useState)(null),g=(0,c.Z)(l,2),x=g[0],w=g[1],m=(0,o.useState)(!1),k=(0,c.Z)(m,2),Z=k[0],y=k[1];return(0,o.useEffect)((function(){var n=function(){var n=(0,a.Z)(s().mark((function n(){var t;return s().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return y(!0),n.prev=1,n.next=4,(0,p.M1)(e);case 4:t=n.sent,u(t),n.next=11;break;case 8:n.prev=8,n.t0=n.catch(1),w("No data in fetch MovieCast ".concat(n.t0));case 11:return n.prev=11,y(!1),n.finish(11);case 14:case"end":return n.stop()}}),n,null,[[1,8,11,14]])})));return function(){return n.apply(this,arguments)}}();n()}),[]),(0,d.jsxs)(d.Fragment,{children:[Z&&(0,d.jsx)(h.g,{}),r.length>0?(0,d.jsx)(f,{children:r.map((function(e){var n=e.id,t=e.profile_path,r=e.name,a=e.character;return(0,d.jsxs)("li",{children:[(0,d.jsx)("img",{src:t?"https://image.tmdb.org/t/p/w500/".concat(t):"https://dw.ksdr1.net/wp-content/uploads/sites/2/2018/08/photo-coming-soon.jpg",alt:r,width:"150",height:"225"}),(0,d.jsxs)("p",{children:[r," as ",a]})]},n)}))}):(0,d.jsx)("div",{children:"There is nothing here"}),x&&(0,d.jsx)(v.j,{})]})}},745:function(e,n,t){t.d(n,{M1:function(){return l},Ph:function(){return p},Qt:function(){return i},aV:function(){return o},tx:function(){return f}});var r=t(861),a=t(757),c=t.n(a),u=t(44),s="5f2a66e63fa9a8139a0b7e8b9aba27ca";u.ZP.defaults.baseURL="https://api.themoviedb.org/";var o=function(){var e=(0,r.Z)(c().mark((function e(){var n,t,r,a,o=arguments;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=o.length>0&&void 0!==o[0]?o[0]:1,t=o.length>1&&void 0!==o[1]?o[1]:"en",e.prev=2,e.next=5,u.ZP.get("3/trending/movie/day?api_key=".concat(s,"&page=").concat(n,"&language=").concat(t));case 5:return r=e.sent,e.next=8,r.data;case 8:return a=e.sent,e.abrupt("return",a);case 12:e.prev=12,e.t0=e.catch(2),console.error(e.t0);case 15:case"end":return e.stop()}}),e,null,[[2,12]])})));return function(){return e.apply(this,arguments)}}(),i=function(){var e=(0,r.Z)(c().mark((function e(n){var t,r,a,o=arguments;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=o.length>1&&void 0!==o[1]?o[1]:"en",e.prev=1,e.next=4,u.ZP.get("3/movie/".concat(n,"?api_key=").concat(s,"&language=").concat(t));case 4:return r=e.sent,e.next=7,r.data;case 7:return a=e.sent,e.abrupt("return",a);case 11:e.prev=11,e.t0=e.catch(1),console.error(e.t0);case 14:case"end":return e.stop()}}),e,null,[[1,11]])})));return function(n){return e.apply(this,arguments)}}(),p=function(){var e=(0,r.Z)(c().mark((function e(n){var t,r,a,o,i=arguments;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=i.length>1&&void 0!==i[1]?i[1]:1,r=i.length>2&&void 0!==i[2]?i[2]:"en",e.prev=2,e.next=5,u.ZP.get("3/search/movie?api_key=".concat(s,"&language=").concat(r,"&query=").concat(n,"&page=").concat(t,"&include_adult=false"));case 5:return a=e.sent,e.next=8,a.data;case 8:return o=e.sent,e.abrupt("return",o);case 12:e.prev=12,e.t0=e.catch(2),console.error(e.t0);case 15:case"end":return e.stop()}}),e,null,[[2,12]])})));return function(n){return e.apply(this,arguments)}}(),l=function(){var e=(0,r.Z)(c().mark((function e(n){var t,r,a,o=arguments;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=o.length>1&&void 0!==o[1]?o[1]:"en",e.prev=1,e.next=4,u.ZP.get("3/movie/".concat(n,"/credits?api_key=").concat(s,"&language=").concat(t));case 4:return r=e.sent,e.next=7,r.data;case 7:return a=e.sent,e.abrupt("return",a.cast);case 11:e.prev=11,e.t0=e.catch(1),console.error(e.t0);case 14:case"end":return e.stop()}}),e,null,[[1,11]])})));return function(n){return e.apply(this,arguments)}}(),f=function(){var e=(0,r.Z)(c().mark((function e(n){var t,r,a,o=arguments;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=o.length>1&&void 0!==o[1]?o[1]:"en",e.prev=1,e.next=4,u.ZP.get("3/movie/".concat(n,"/reviews?api_key=").concat(s,"&language=").concat(t));case 4:return r=e.sent,e.next=7,r.data;case 7:return a=e.sent,e.abrupt("return",a.results);case 11:e.prev=11,e.t0=e.catch(1),console.error(e.t0);case 14:case"end":return e.stop()}}),e,null,[[1,11]])})));return function(n){return e.apply(this,arguments)}}()},200:function(e,n,t){t.d(n,{j:function(){return a}});var r=t(184),a=function(){return(0,r.jsx)("div",{children:"Try again later"})}}}]);
//# sourceMappingURL=736.498123f7.chunk.js.map