"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[362],{713:function(e,t,n){n.d(t,{FE:function(){return o},Hx:function(){return d},Mc:function(){return p},uV:function(){return l},zo:function(){return u}});var r=n(861),a=n(757),c=n.n(a),s=n(340);s.Z.defaults.baseURL="https://api.themoviedb.org/3";var i="71a15f826d01e9200aa65bcc894c2455",u=function(){var e=(0,r.Z)(c().mark((function e(){var t,n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.Z.get("/trending/all/day?api_key=".concat(i));case 2:return t=e.sent,n=t.data.results,e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),o=function(){var e=(0,r.Z)(c().mark((function e(t){var n,r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.Z.get("/search/movie?query=".concat(t,"&api_key=").concat(i));case 2:return n=e.sent,r=n.data.results,e.abrupt("return",r);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),p=function(){var e=(0,r.Z)(c().mark((function e(t){var n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.Z.get("/movie/".concat(t,"?api_key=").concat(i));case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),l=function(){var e=(0,r.Z)(c().mark((function e(t){var n,r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.Z.get("/movie/".concat(t,"/credits?api_key=").concat(i));case 2:return n=e.sent,r=n.data.cast,e.abrupt("return",r);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),d=function(){var e=(0,r.Z)(c().mark((function e(t){var n,r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.Z.get("/movie/".concat(t,"/reviews?api_key=").concat(i));case 2:return n=e.sent,r=n.data.results,e.abrupt("return",r);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},362:function(e,t,n){n.r(t),n.d(t,{default:function(){return x}});var r=n(861),a=n(439),c=n(757),s=n.n(c),i=n(713),u=n(639),o="SelectedMovieDetails_selected_container__kdLFI",p="SelectedMovieDetails_container_info__hvyi3",l=n(184),d=function(e){var t=e.movie,n=t.poster_path,r=t.title,a=t.release_date,c=t.vote_average,s=t.overview,i=t.genres;return(0,l.jsxs)("div",{className:o,children:[(0,l.jsx)("img",{src:n?"https://image.tmdb.org/t/p/w500/".concat(n):"https://via.placeholder.com/250x375.png?text=Image+Not+Found",alt:r,width:400}),(0,l.jsxs)("div",{className:p,children:[(0,l.jsx)("h1",{children:"".concat(r," (").concat(a.split("-")[0],")")}),(0,l.jsx)("h4",{children:"User Store: ".concat(Math.round(10*c),"%")}),(0,l.jsx)("h2",{children:"Owerview"}),(0,l.jsx)("p",{children:s}),i&&i.length>0&&(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)("h3",{children:"Genres"}),(0,l.jsx)("p",{children:i.map((function(e,t){return(0,l.jsx)("span",{children:e.name},t)}))})]})]})]})},h=n(791),f=n(689),v=n(87),x=function(){var e,t,n=(0,f.UO)().movieId,c=(0,h.useState)(null),o=(0,a.Z)(c,2),p=o[0],x=o[1],m=(0,h.useState)(!1),w=(0,a.Z)(m,2),_=w[0],g=w[1],j=(0,f.TH)(),k=(0,h.useRef)(null!==(e=null===(t=j.state)||void 0===t?void 0:t.from)&&void 0!==e?e:"/");return(0,h.useEffect)((function(){function e(){return(e=(0,r.Z)(s().mark((function e(){var t;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,g(!0),e.next=4,(0,i.Mc)(n);case 4:t=e.sent,x(t),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),window.alert("Oops! Something went wrong! Please try reloading this page!");case 11:return e.prev=11,g(!1),e.finish(11);case 14:case"end":return e.stop()}}),e,null,[[0,8,11,14]])})))).apply(this,arguments)}n&&function(){e.apply(this,arguments)}()}),[n]),(0,l.jsxs)("div",{children:[_&&(0,l.jsx)(u.a,{}),(0,l.jsx)(v.rU,{to:k.current,children:"Go back"}),p&&(0,l.jsx)(d,{movie:p}),(0,l.jsxs)("ul",{children:[(0,l.jsx)("li",{children:(0,l.jsx)(v.OL,{to:"cast",children:"Cast"})}),(0,l.jsx)("li",{children:(0,l.jsx)(v.OL,{to:"reviews",children:"Reviews"})})]}),(0,l.jsx)(f.j3,{})]})}}}]);
//# sourceMappingURL=362.81791f5b.chunk.js.map