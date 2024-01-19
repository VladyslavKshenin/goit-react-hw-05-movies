"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[674],{713:function(t,e,n){n.d(e,{FE:function(){return o},Hx:function(){return l},Mc:function(){return p},uV:function(){return f},zo:function(){return i}});var r=n(861),a=n(757),c=n.n(a),s=n(340);s.Z.defaults.baseURL="https://api.themoviedb.org/3";var u="71a15f826d01e9200aa65bcc894c2455",i=function(){var t=(0,r.Z)(c().mark((function t(){var e,n;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s.Z.get("/trending/all/day?api_key=".concat(u));case 2:return e=t.sent,n=e.data.results,t.abrupt("return",n);case 5:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),o=function(){var t=(0,r.Z)(c().mark((function t(e){var n,r;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s.Z.get("/search/movie?query=".concat(e,"&api_key=").concat(u));case 2:return n=t.sent,r=n.data.results,t.abrupt("return",r);case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),p=function(){var t=(0,r.Z)(c().mark((function t(e){var n;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s.Z.get("/movie/".concat(e,"?api_key=").concat(u));case 2:return n=t.sent,t.abrupt("return",n.data);case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),f=function(){var t=(0,r.Z)(c().mark((function t(e){var n,r;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s.Z.get("/movie/".concat(e,"/credits?api_key=").concat(u));case 2:return n=t.sent,r=n.data.cast,t.abrupt("return",r);case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),l=function(){var t=(0,r.Z)(c().mark((function t(e){var n,r;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s.Z.get("/movie/".concat(e,"/reviews?api_key=").concat(u));case 2:return n=t.sent,r=n.data.results,t.abrupt("return",r);case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},510:function(t,e,n){n.d(e,{Z:function(){return o}});n(791);var r="MovieList_movies_list__T0E8P",a="MovieList_movies_list_container__g7g1H",c="MovieList_trending_movie_title__QiV2l",s=n(689),u=n(87),i=n(184),o=function(t){var e=t.items,n=(0,s.TH)();return(0,i.jsx)("ul",{className:r,children:e.map((function(t){var e=t.poster_path,r=t.name,s=t.title,o=t.id;return(0,i.jsx)("li",{children:(0,i.jsx)(u.rU,{to:"/movies/".concat(o),state:{from:n},children:(0,i.jsxs)("div",{className:a,children:[(0,i.jsx)("img",{src:e?"https://image.tmdb.org/t/p/w500/".concat(e):"https://via.placeholder.com/250x375.png?text=Image+Not+Found",alt:r||s,width:250,height:375}),(0,i.jsx)("p",{className:c,children:r||s})]})})},o)}))})}},674:function(t,e,n){n.r(e),n.d(e,{default:function(){return _}});var r=n(861),a=n(439),c=n(757),s=n.n(c),u=n(791),i="SearchForm_form__o80os",o="SearchForm_button_search__n+eHT",p="SearchForm_input__HOxJo",f=n(184),l=function(t){var e=t.onSubmit,n=(0,u.useState)(""),r=(0,a.Z)(n,2),c=r[0],s=r[1];return(0,f.jsxs)("form",{className:i,onSubmit:function(t){t.preventDefault(),e(c)},children:[(0,f.jsx)("input",{className:p,type:"text",autoComplete:"off",autoFocus:!0,placeholder:"Search movies",onChange:function(t){t.target.value,s(t.target.value.toLowerCase())},value:c}),(0,f.jsx)("button",{type:"submit",className:o,children:(0,f.jsx)("span",{className:"button-label",children:"Search"})})]})},h=n(713),v=n(510),m=n(87),d=n(639),_=function(){var t=(0,u.useState)(!1),e=(0,a.Z)(t,2),n=e[0],c=e[1],i=(0,u.useState)([]),o=(0,a.Z)(i,2),p=o[0],_=o[1],x=(0,m.lr)(),g=(0,a.Z)(x,2),w=g[0],b=g[1];return(0,u.useEffect)((function(){var t=w.get("search");function e(){return(e=(0,r.Z)(s().mark((function e(){var n;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,c(!0),e.next=4,(0,h.FE)(t);case 4:n=e.sent,_(n),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),window.alert("Oops! Something went wrong! Please try reloading this page!");case 11:return e.prev=11,c(!1),e.finish(11);case 14:case"end":return e.stop()}}),e,null,[[0,8,11,14]])})))).apply(this,arguments)}t&&function(){e.apply(this,arguments)}()}),[w]),(0,f.jsxs)(f.Fragment,{children:[n&&(0,f.jsx)(d.a,{}),(0,f.jsx)(l,{onSubmit:function(t){t&&b({search:t})}}),w&&(0,f.jsx)(v.Z,{items:p})]})}}}]);
//# sourceMappingURL=674.5108eb2f.chunk.js.map