(this.webpackJsonpwidgets=this.webpackJsonpwidgets||[]).push([[0],{41:function(e,t,c){"use strict";c.r(t);var n=c(1),a=c.n(n),s=c(16),i=c.n(s),r=c(2),l=c(0),o=function(e){var t=e.items,c=Object(n.useState)(null),s=Object(r.a)(c,2),i=s[0],o=s[1],j=t.map((function(e,t){var c=t===i?"active":"";return Object(l.jsxs)(a.a.Fragment,{children:[Object(l.jsxs)("div",{onClick:function(){return function(e){o(e)}(t)},className:"title ".concat(c),children:[Object(l.jsx)("i",{className:"dropdown icon"}),e.title]}),Object(l.jsx)("div",{className:"content ".concat(c),children:Object(l.jsx)("p",{children:e.content})})]},e.title)}));return Object(l.jsxs)("div",{className:"ui styled accordion",children:[" ",j]})},j=c(4),u=c.n(j),d=c(5),b=c(6),O=c.n(b),h=function(){var e=Object(n.useState)("programming"),t=Object(r.a)(e,2),c=t[0],a=t[1],s=Object(n.useState)([]),i=Object(r.a)(s,2),o=i[0];i[1];console.log(o),Object(n.useEffect)((function(){}),[c]);var j=o.map((function(e){return Object(l.jsxs)("div",{className:"item",children:[Object(l.jsx)("div",{className:"right floated content"}),Object(l.jsx)("a",{className:"ui button",href:"http://en.wikipedia.org?curid=".concat(e.pageid),children:"Go"}),Object(l.jsxs)("div",{className:"content",children:[Object(l.jsx)("div",{className:"header",children:e.title}),Object(l.jsx)("span",{dangerouslySetInnerHTML:{__html:e.snippet}})]})]},e.pageid)}));return Object(l.jsxs)("div",{children:[Object(l.jsx)("div",{className:"ui form",children:Object(l.jsxs)("div",{className:"ui field",children:[Object(l.jsx)("label",{children:"Enter search term"}),Object(l.jsx)("input",{value:c,onChange:function(e){return a(e.target.value)},className:"input"})]})}),Object(l.jsx)("div",{className:"ui celled list",children:j})]})},m=function(e){var t=e.label,c=e.options,a=e.selected,s=e.onSelectedChange,i=Object(n.useState)(!1),o=Object(r.a)(i,2),j=o[0],u=o[1],d=Object(n.useRef)("");Object(n.useEffect)((function(){document.body.addEventListener("click",(function(e){console.log("inside",d.current),d.current.contains(e.target)||u(!1)}),{capture:!0})}),[]);var b=c.map((function(e){return e.value===a.value?null:Object(l.jsx)("div",{className:"item",onClick:function(){return s(e)},children:e.label},e.value)}));return Object(l.jsx)("div",{ref:d,className:"ui form",children:Object(l.jsxs)("div",{className:"field",children:[Object(l.jsx)("label",{className:"label",children:t}),Object(l.jsxs)("div",{onClick:function(){return u(!j)},className:"ui selection dropdown ".concat(j?"visible active":""),children:[Object(l.jsx)("i",{className:"dropdown icon"}),Object(l.jsxs)("div",{className:"text",children:[" ",a.label," "]}),Object(l.jsx)("div",{className:"menu ".concat(j?"visible transition":""),children:b})]})]})})},v=function(e){var t=e.language,c=e.text,a=Object(n.useState)(""),s=Object(r.a)(a,2),i=s[0],o=s[1],j=Object(n.useState)(c),b=Object(r.a)(j,2),h=b[0],m=b[1];return Object(n.useEffect)((function(){var e=setTimeout((function(){m(c)}),500);return function(){clearTimeout(e)}}),[c]),Object(n.useEffect)((function(){(function(){var e=Object(d.a)(u.a.mark((function e(){var c,n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,O.a.post("https://translation.googleapis.com/language/translate/v2",{},{params:{q:h,target:t.value,key:"AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM"}});case 2:c=e.sent,n=c.data,o(n.data.translations[0].translatedText);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[t,c]),Object(l.jsx)("div",{children:Object(l.jsx)("h1",{className:"ui header",children:i})})},f=[{label:"Afrikaans",value:"af"},{label:"Arabic",value:"ar"},{label:"Hindi",value:"hi"}],x=function(){var e=Object(n.useState)(f[0]),t=Object(r.a)(e,2),c=t[0],a=t[1],s=Object(n.useState)(""),i=Object(r.a)(s,2),o=i[0],j=i[1];return Object(l.jsxs)("div",{children:[Object(l.jsx)("div",{className:"ui form",children:Object(l.jsxs)("div",{className:"field",children:[Object(l.jsx)("label",{className:"label",children:"Enter text"}),Object(l.jsx)("input",{value:o,onChange:function(e){return j(e.target.value)}})]})}),Object(l.jsx)(m,{label:"Select a language",selected:c,onSelectedChange:a,options:f}),Object(l.jsx)("hr",{}),Object(l.jsx)("h3",{className:"ui header",children:"Output"}),Object(l.jsx)(v,{text:o,language:c})]})},p=function(e){var t=e.path,c=e.children,a=Object(n.useState)(window.location.pathname),s=Object(r.a)(a,2),i=s[0],l=s[1];return Object(n.useEffect)((function(){var e=function(){l(window.location.pathname)};return window.addEventListener("popstate",e),function(){window.removeEventListener("popstate",e)}}),[]),i===t?c:null},g=function(){return Object(l.jsxs)("div",{className:" ui secondary pointing menu",children:[Object(l.jsx)("a",{href:"/",className:"item",children:" Accordion"}),Object(l.jsx)("a",{href:"/list",className:"item",children:" Search"}),Object(l.jsx)("a",{href:"/dropdown",className:"item",children:" Dropdown"}),Object(l.jsx)("a",{href:"/translate",className:"item",children:" Translate"})]})},N=[{title:"What is react?",content:"React is a front end framework"},{title:"Why use React?",content:" It is a favourite among engineers"},{title:"How do you use React?",content:"By creating components"}],w=[{label:"The Colour Red",value:"red"},{label:"The Colour Green",value:"green"},{label:"The Colour Blue",value:"blue"}],S=function(){var e=Object(n.useState)(w[0]),t=Object(r.a)(e,2),c=t[0],a=t[1];return Object(l.jsxs)("div",{children:[Object(l.jsx)(g,{}),Object(l.jsx)(p,{path:"/",children:Object(l.jsx)(o,{items:N})}),Object(l.jsx)(p,{path:"/list",children:Object(l.jsx)(h,{})}),Object(l.jsx)(p,{path:"/dropdown",children:Object(l.jsx)(m,{label:"Selector a colour",options:w,selected:c,onSelectedChange:a})}),Object(l.jsx)(p,{path:"/translate",children:Object(l.jsx)(x,{})})]})};i.a.render(Object(l.jsx)(S,{}),document.querySelector("#root"))}},[[41,1,2]]]);
//# sourceMappingURL=main.76086df8.chunk.js.map