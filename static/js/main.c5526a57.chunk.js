(this.webpackJsonpnetflix=this.webpackJsonpnetflix||[]).push([[0],[,,,,,,,,,,,,function(e,t,n){},function(e,t,n){},,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var s=n(1),a=n(6),r=n.n(a),c=n(2),i=n.n(c),o=n(3),l=n(4),u=(n(12),"e2981e820f70ee56d277ed10dcb2fee6"),d=function(){var e=Object(o.a)(i.a.mark((function e(t){var n,s;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat("https://api.themoviedb.org/3").concat(t));case 2:return n=e.sent,e.next=5,n.json();case 5:return s=e.sent,e.abrupt("return",s);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),j={getHomeList:function(){var e=Object(o.a)(i.a.mark((function e(){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d("/discover/tv?with_network=213&language=pt-BR&api_key=".concat(u));case 2:return e.t0=e.sent,e.t1={slug:"originals",title:"Originais do Netflix",items:e.t0},e.next=6,d("/trending/all/week?language=pt-BR&api_key=".concat(u));case 6:return e.t2=e.sent,e.t3={slug:"trending",title:"Recomendados para Voc\xea",items:e.t2},e.next=10,d("/movie/top_rated?language=pt-BR&api_key=".concat(u));case 10:return e.t4=e.sent,e.t5={slug:"top rated",title:"Em Alta",items:e.t4},e.next=14,d("/discover/movie?with_genres=28&language=pt-BR&api_key=".concat(u));case 14:return e.t6=e.sent,e.t7={slug:"action",title:"A\xe7\xe3o",items:e.t6},e.next=18,d("/discover/movie?with_genres=35&language=pt-BR&api_key=".concat(u));case 18:return e.t8=e.sent,e.t9={slug:"comedy",title:"Com\xe9dia",items:e.t8},e.next=22,d("/discover/movie?with_genres=27&language=pt-BR&api_key=".concat(u));case 22:return e.t10=e.sent,e.t11={slug:"horror",title:"Terror",items:e.t10},e.next=26,d("/discover/movie?with_genres=10749&language=pt-BR&api_key=".concat(u));case 26:return e.t12=e.sent,e.t13={slug:"romance",title:"Romance",items:e.t12},e.next=30,d("/discover/movie?with_genres=99&language=pt-BR&api_key=".concat(u));case 30:return e.t14=e.sent,e.t15={slug:"documentary",title:"Document\xe1rio",items:e.t14},e.abrupt("return",[e.t1,e.t3,e.t5,e.t7,e.t9,e.t11,e.t13,e.t15]);case 33:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),getMovieInfo:function(){var e=Object(o.a)(i.a.mark((function e(t,n){var s;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(s={},!t){e.next=15;break}e.t0=n,e.next="movie"===e.t0?5:"tv"===e.t0?9:13;break;case 5:return e.next=7,d("/movie/".concat(t,"?language=pt-BR&api_key=").concat(u));case 7:case 11:return s=e.sent,e.abrupt("break",15);case 9:return e.next=11,d("/tv/".concat(t,"?language=pt-BR&api_key=").concat(u));case 13:return s=null,e.abrupt("break",15);case 15:return e.abrupt("return",s);case 16:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}()},m=(n(13),n(0)),f=function(e){var t=Object(s.useState)({}),n=Object(l.a)(t,2),a=n[0],r=n[1];return Object(s.useEffect)((function(){var e=function(){window.scrollY>10?r({background:"#141414"}):r({})};return window.addEventListener("scroll",e),function(){window.removeEventListener("scroll",e)}}),[]),Object(m.jsxs)("header",{style:a,children:[Object(m.jsx)("a",{className:"logo",href:"/",children:Object(m.jsx)("img",{className:"logo",src:"https://logodownload.org/wp-content/uploads/2014/10/netflix-logo-5.png"})}),Object(m.jsx)("a",{className:"user",href:"/",children:Object(m.jsx)("img",{className:"logo",src:"https://i.pinimg.com/originals/0d/dc/ca/0ddccae723d85a703b798a5e682c23c1.png"})})]})},p=(n(15),function(e){var t=e.movies,n=1;return Object(m.jsx)("section",{className:"featured--area",style:{backgroundSize:"cover",backgroundPosition:"center",backgroundImage:"url(https://image.tmdb.org/t/p/original".concat(t.backdrop_path,")")},children:Object(m.jsx)("div",{className:"featured--vertical",children:Object(m.jsx)("div",{className:"featured--horizontal",children:Object(m.jsx)("div",{className:"featured--info",children:Object(m.jsxs)("div",{children:[Object(m.jsx)("h1",{className:"featured--title",children:t.original_name}),Object(m.jsxs)("span",{class:"featured--data",children:[Object(m.jsx)("span",{className:"featured--average",children:t.vote_average+" pontos"}),Object(m.jsx)("span",{className:"featured--date",children:t.first_air_date.slice(0,4)}),Object(m.jsx)("span",{className:"featured--seasons",children:t.number_of_seasons>1?t.number_of_seasons+" temporadas":t.number_of_seasons+" temporada"})]}),Object(m.jsx)("p",{className:"featured--description",children:t.overview.slice(0,250)+"..."}),Object(m.jsxs)("div",{className:"featured--btn",children:[Object(m.jsx)("a",{className:"featured--watch",href:"",children:"\u25ba Assistir"}),Object(m.jsx)("a",{className:"featured--myList",href:"",children:"+ Minha lista"})]}),Object(m.jsxs)("div",{className:"featured--genres",children:[Object(m.jsx)("h5",{children:Object(m.jsx)("strong",{children:"G\xeaneros: "})}),Object(m.jsx)("span",{children:t.genres.map((function(e){return t.genres.length==n?e.name:(n++,e.name+", ")}))})]})]})})})})})}),b=(n(16),function(e){var t=e.movies;return Object(m.jsx)("section",{className:"movieList--content",children:t.map((function(e,t){return Object(m.jsxs)("div",{className:"movieList--area",children:[Object(m.jsx)("h2",{children:e.title}),Object(m.jsxs)("div",{className:"movieList--list",children:[Object(m.jsx)("div",{className:"movieList--left",children:Object(m.jsx)("i",{class:"fas fa-chevron-left"})}),Object(m.jsx)("div",{className:"movieList--right",children:Object(m.jsx)("i",{class:"fas fa-chevron-right"})}),e.items.results.map((function(e,t){return Object(m.jsx)("div",{className:"movieList--item",children:Object(m.jsx)("img",{src:"https://image.tmdb.org/t/p/w300".concat(e.poster_path)})},t)}))]})]},t)}))})}),g=(n(17),function(e){return Object(m.jsxs)("footer",{children:[Object(m.jsx)("span",{children:"Site desenvolvido para fins de estudo"}),Object(m.jsxs)("span",{children:["Direitos de imagem para ",Object(m.jsx)("strong",{children:"Netflix"})]}),Object(m.jsxs)("span",{children:["Dados pegados de ",Object(m.jsx)("strong",{children:"themoviedb.org"})]})]})}),h=function(){var e=Object(s.useState)([]),t=Object(l.a)(e,2),n=t[0],a=t[1],r=Object(s.useState)(null),c=Object(l.a)(r,2),u=c[0],d=c[1];return Object(s.useEffect)((function(){var e=function(){var e=Object(o.a)(i.a.mark((function e(t){var n,s,r,c,o;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.getHomeList();case 2:return n=e.sent,a(n),s=n.filter((function(e){return"originals"===e.slug})),r=Math.floor(Math.random()*(s[0].items.results.length-1)),c=s[0].items.results[r],e.next=9,t.getMovieInfo(c.id,"tv");case 9:o=e.sent,d(o);case 11:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();e(j)}),[]),Object(m.jsxs)("div",{children:[Object(m.jsx)(f,{}),Object(m.jsxs)("main",{children:[u&&Object(m.jsx)(p,{movies:u}),Object(m.jsx)(b,{movies:n})]}),Object(m.jsx)(g,{}),n.length<=0&&Object(m.jsx)("div",{className:"loading",children:Object(m.jsx)("img",{src:"https://media.filmelier.com/noticias/br/2020/03/Netflix_LoadTime.gif"})})]})};r.a.render(Object(m.jsx)("div",{children:Object(m.jsx)(h,{})}),document.getElementById("root"))}],[[18,1,2]]]);
//# sourceMappingURL=main.c5526a57.chunk.js.map