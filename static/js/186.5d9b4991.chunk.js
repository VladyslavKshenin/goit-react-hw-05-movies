"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[186],{713:function(t,e,n){n.d(e,{FE:function(){return o},Hx:function(){return h},Mc:function(){return p},uV:function(){return f},zo:function(){return i}});var r=n(861),a=n(757),c=n.n(a),u=n(340);u.Z.defaults.baseURL="https://api.themoviedb.org/3";var s="71a15f826d01e9200aa65bcc894c2455",i=function(){var t=(0,r.Z)(c().mark((function t(){var e,n;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.Z.get("/trending/all/day?api_key=".concat(s));case 2:return e=t.sent,n=e.data.results,t.abrupt("return",n);case 5:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),o=function(){var t=(0,r.Z)(c().mark((function t(e){var n,r;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.Z.get("/search/movie?query=".concat(e,"&api_key=").concat(s));case 2:return n=t.sent,r=n.data.results,t.abrupt("return",r);case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),p=function(){var t=(0,r.Z)(c().mark((function t(e){var n;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.Z.get("/movie/".concat(e,"?api_key=").concat(s));case 2:return n=t.sent,t.abrupt("return",n.data);case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),f=function(){var t=(0,r.Z)(c().mark((function t(e){var n,r;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.Z.get("/movie/".concat(e,"/credits?api_key=").concat(s));case 2:return n=t.sent,r=n.data.cast,t.abrupt("return",r);case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),h=function(){var t=(0,r.Z)(c().mark((function t(e){var n,r;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.Z.get("/movie/".concat(e,"/reviews?api_key=").concat(s));case 2:return n=t.sent,r=n.data.results,t.abrupt("return",r);case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},186:function(t,e,n){n.r(e);var r=n(861),a=n(439),c=n(757),u=n.n(c),s=n(791),i=n(713),o=n(689),p=n(639),f=n(184);e.default=function(){var t=(0,o.UO)().movieId,e=(0,s.useState)([]),n=(0,a.Z)(e,2),c=n[0],h=n[1],v=(0,s.useState)(!1),d=(0,a.Z)(v,2),l=d[0],x=d[1],w=(0,s.useState)(!1),m=(0,a.Z)(w,2),k=m[0],y=m[1];return(0,s.useEffect)((function(){function e(){return(e=(0,r.Z)(u().mark((function e(){var n;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,x(!0),e.next=4,(0,i.Hx)(t);case 4:n=e.sent,h(n),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),y(e.t0);case 11:return e.prev=11,x(!1),e.finish(11);case 14:case"end":return e.stop()}}),e,null,[[0,8,11,14]])})))).apply(this,arguments)}t&&function(){e.apply(this,arguments)}()}),[t]),(0,f.jsxs)("div",{children:[l&&(0,f.jsx)(p.a,{}),k&&(0,f.jsx)("h2",{children:"'Oops! Something went wrong! Please try reloading this page!'"}),c.length>0?c.map((function(t){var e=t.author,n=t.content,r=t.id;return(0,f.jsx)("ul",{children:(0,f.jsxs)("li",{children:[(0,f.jsxs)("h2",{children:["Author: ",e]}),(0,f.jsx)("p",{children:n})]},r)})})):(0,f.jsx)("p",{children:"We don't have any reviews for this movie."})]})}}}]);
//# sourceMappingURL=186.5d9b4991.chunk.js.map