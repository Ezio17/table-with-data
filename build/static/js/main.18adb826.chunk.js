(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{15:function(e,t,a){},16:function(e,t,a){},17:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(3),c=a.n(r),i=(a(15),a(16),a(4)),o=a(5),s=a(7),u=a(6),h=a(1),m=a(8),d=[{id:1,name:"Play Station 4",price:500,quantity:3},{id:2,name:"iPhone XS",price:1e3,quantity:2},{id:3,name:"Samsung Galaxy S10",price:1e3,quantity:5}],E=function(e){return l.a.createElement("table",{className:"table"},l.a.createElement("thead",{className:"table__thead"},l.a.createElement("tr",{className:"table__title"},l.a.createElement("th",null,"ID"),l.a.createElement("th",null,"Name"),l.a.createElement("th",null,"Price"),l.a.createElement("th",null,"Quanity"))),l.a.createElement("tbody",{className:"table__tbody"},e.electronics.map(function(e){return l.a.createElement("tr",{key:e.id},l.a.createElement("td",null,e.id),l.a.createElement("td",null,e.name),l.a.createElement("td",null,e.price),l.a.createElement("td",null,e.quantity))})))},p=function(e){return l.a.createElement("div",{className:"search"},l.a.createElement("input",{className:"search__input",type:"text",placeholder:"search",value:e.search,onChange:e.handleChange}))},b=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(s.a)(this,Object(u.a)(t).call(this,e))).state={electronics:d,search:""},a.handleChange=a.handleChange.bind(Object(h.a)(a)),a}return Object(m.a)(t,e),Object(o.a)(t,[{key:"handleChange",value:function(e){this.setState({search:e.target.value})}},{key:"render",value:function(){var e=this,t=this.state.electronics.filter(function(t){return t.name.toLocaleLowerCase().replace(/\s+/g,"").includes(e.state.search.toLocaleLowerCase().replace(/\s+/g,""))});return l.a.createElement("main",null,l.a.createElement(p,{search:this.state.search,handleChange:this.handleChange}),l.a.createElement(E,{electronics:t}))}}]),t}(l.a.Component);var g=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement(b,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(l.a.createElement(g,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},9:function(e,t,a){e.exports=a(17)}},[[9,1,2]]]);
//# sourceMappingURL=main.18adb826.chunk.js.map