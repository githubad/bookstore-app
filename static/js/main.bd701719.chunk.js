(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{16:function(e,t,n){e.exports=n(28)},26:function(e,t,n){},28:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),r=n(13),i=n.n(r),c=n(6),l=n(2);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));n(26);var s=n(3),u=n(4),p=n(7),b=n(5),h=n(8),d=function(e){return{type:"BOOK_SELECTED",payload:e}},m=function(e){function t(){return Object(s.a)(this,t),Object(p.a)(this,Object(b.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(u.a)(t,[{key:"renderList",value:function(){var e=this;return this.props.books.map(function(t){return o.a.createElement("li",{key:t.title,onClick:function(){return e.props.selectBook(t)},className:"list-group-item"},t.title)})}},{key:"render",value:function(){return o.a.createElement("ul",{className:"list-group col-sm-4"},this.renderList())}}]),t}(a.Component);var k=Object(c.b)(function(e){return{books:e.books}},function(e){return Object(l.b)({selectBook:d},e)})(m),f=function(e){function t(){return Object(s.a)(this,t),Object(p.a)(this,Object(b.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return this.props.book?o.a.createElement("div",null,o.a.createElement("h3",null,"Details for:"),o.a.createElement("div",null,"Title:",this.props.book.title),o.a.createElement("div",null,"Pages:",this.props.book.pages)):o.a.createElement("div",null,"Select a Book to Get Started!")}}]),t}(a.Component);var v=Object(c.b)(function(e){return{book:e.activeBook}})(f),O=function(e){function t(){return Object(s.a)(this,t),Object(p.a)(this,Object(b.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return o.a.createElement("div",null,o.a.createElement(k,null),o.a.createElement(v,null))}}]),t}(a.Component),j=Object(l.c)({books:function(){return[{title:"Javascript: The Weird Parts",pages:7},{title:"Adnan: You will make it happen!",pages:83},{title:"IT + Marketing is IMarketing",pages:763},{title:"Cool Things Take time to Happen",pages:78},{title:"At the end of the day",pages:13}]},activeBook:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"BOOK_SELECTED":return t.payload}return e}}),E=Object(l.a)()(l.d);i.a.render(o.a.createElement(c.a,{store:E(j)},o.a.createElement(O,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[16,2,1]]]);
//# sourceMappingURL=main.bd701719.chunk.js.map