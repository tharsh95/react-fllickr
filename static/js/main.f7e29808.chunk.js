(this.webpackJsonpflickr=this.webpackJsonpflickr||[]).push([[0],{25:function(e,t,c){},26:function(e,t,c){},45:function(e,t,c){},58:function(e,t,c){},59:function(e,t,c){},60:function(e,t,c){"use strict";c.r(t);var n=c(1),o=c.n(n),a=c(8),r=c.n(a),i=(c(25),c(3)),s=(c(26),c(5)),l=c.n(s),j=(c(45),c(4)),u=c.n(j),d=c(0);u.a.setAppElement("#root");var b=function(){var e=Object(n.useState)([]),t=Object(i.a)(e,2),c=t[0],o=t[1],a=Object(n.useState)(""),r=Object(i.a)(a,2),s=r[0],j=r[1],b=Object(n.useState)(!1),h=Object(i.a)(b,2),f=h[0],O=h[1];Object(n.useEffect)((function(){l.a.get("https://www.flickr.com/services/rest/?method=flickr.photos.getRecent&api_key=7dac89ea8f85859230ab7bd53e97ad60&format=json&nojsoncallback=1").then((function(e){return e.data.photos.photo})).then((function(e){var t=e.map((function(e){var t="https://live.staticflickr.com/".concat(e.server,"/").concat(e.id,"_").concat(e.secret,"_w.jpg");return Object(d.jsx)(d.Fragment,{children:t})}));o(t)}))}),[]);return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)("div",{className:"header",children:"Flickr"}),Object(d.jsx)("div",{className:"imgContainer",children:c.map((function(e,t){return Object(d.jsx)("img",{onClick:function(){return function(e,t){O(!0),j(e)}(e.props.children)},src:e.props.children,alt:t},t)}))}),Object(d.jsx)("div",{children:Object(d.jsx)(u.a,{isOpen:f,onRequestClose:function(){return O(!1)},style:{overlay:{backgroundColor:"grey"},content:{backgroundColor:"white",display:"grid",placeItems:"center"}},children:Object(d.jsx)("img",{id:"modalImg",src:s,alt:s},s)})})]})},h=(c(58),function(e){return Object(d.jsx)("div",{children:Object(d.jsxs)("div",{className:"navbar",children:[Object(d.jsx)("div",{className:"navHeader",children:"Search Photos"}),Object(d.jsxs)("div",{children:[Object(d.jsx)("input",{className:"searchInput",type:"text",name:"photo",onChange:e.onChange}),Object(d.jsx)("button",{onClick:e.onClick,children:"Search"})]})]})})}),f=(c(59),function(e){var t=Object(n.useState)(1),c=Object(i.a)(t,2),o=c[0],a=c[1],r=9,s=Object(n.useState)(""),j=Object(i.a)(s,2),b=j[0],f=j[1],O=Object(n.useState)([]),m=Object(i.a)(O,2),p=m[0],g=m[1],v=Object(n.useState)(""),x=Object(i.a)(v,2),k=x[0],C=x[1],w=Object(n.useState)(!1),S=Object(i.a)(w,2),y=S[0],F=S[1];function I(){l.a.get("https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=716e02262760b235130b0ab8066992cb&tags=".concat(b,"&safe_search=&per_page=").concat(r,"&page=").concat(o,"&format=json&nojsoncallback=1")).then((function(e){return e.data.photos.photo})).then((function(e){var t=e.map((function(e){var t="https://live.staticflickr.com/".concat(e.server,"/").concat(e.id,"_").concat(e.secret,"_w.jpg");return Object(d.jsx)("img",{onClick:function(){return _(t)},src:t,alt:e.owner},e.id)}));g(t)}))}var _=function(e){F(!0),C(e)};return window.onscroll=function(){window.innerHeight+document.documentElement.scrollTop>=document.documentElement.offsetHeight-5&&setTimeout((function(){r+=3,a((function(e){return e+1})),I()}),1e3)},Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)(h,{onChange:function(e){f(e.target.value)},onClick:I}),Object(d.jsxs)("div",{className:"searchContainer",children:[p,Object(d.jsx)(u.a,{isOpen:y,onRequestClose:function(){return F(!1)},style:{overlay:{backgroundColor:"grey"},content:{backgroundColor:"white",display:"grid",placeItems:"center"}},children:Object(d.jsx)("img",{id:"modalImg",src:k,alt:k},k)})]})]})});var O=function(){var e=Object(n.useState)(!0),t=Object(i.a)(e,2),c=t[0],o=t[1];return Object(d.jsxs)("div",{className:"App",children:[Object(d.jsx)("button",{onClick:function(){o(!c)},disabled:c,children:"Home"}),Object(d.jsx)("button",{onClick:function(){o(!c)},disabled:!c,children:"Search Images"}),!0===c?Object(d.jsx)(b,{}):Object(d.jsx)(f,{})]})},m=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,61)).then((function(t){var c=t.getCLS,n=t.getFID,o=t.getFCP,a=t.getLCP,r=t.getTTFB;c(e),n(e),o(e),a(e),r(e)}))};r.a.render(Object(d.jsx)(o.a.StrictMode,{children:Object(d.jsx)(O,{})}),document.getElementById("root")),m()}},[[60,1,2]]]);
//# sourceMappingURL=main.f7e29808.chunk.js.map