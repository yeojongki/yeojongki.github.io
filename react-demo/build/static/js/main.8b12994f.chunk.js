(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{12:function(e,t,n){"use strict";n.d(t,"a",function(){return d});var o=n(6),r=n(7),a=n(9),i=n(8),c=n(10),s=n(0),u=n.n(s),l=n(20),h=n.n(l),d=function(e){function t(){return Object(o.a)(this,t),Object(a.a)(this,Object(i.a)(t).apply(this,arguments))}return Object(c.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){var e=this.props.mouse;return u.a.createElement("img",{src:h.a,className:"App-logo",alt:"logo",style:{width:200,height:200,position:"absolute",left:e.x,top:e.y}})}}]),t}(u.a.Component)},20:function(e,t,n){e.exports=n.p+"static/media/logo.5d5d9eef.svg"},25:function(e,t,n){e.exports=n(41)},30:function(e,t,n){},31:function(e,t,n){},32:function(e,t,n){var o={"./hoc/index.js":43,"./renderProps/index.js":42};function r(e){var t=a(e);return n(t)}function a(e){if(!n.o(o,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return o[e]}r.keys=function(){return Object.keys(o)},r.resolve=a,e.exports=r,r.id=32},41:function(e,t,n){"use strict";n.r(t);var o=n(0),r=n.n(o),a=n(19),i=n.n(a),c=(n(30),n(31),n(24)),s=n(32),u=s.keys().map(function(e){return s(e).default}),l=n(21);var h=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(l.a,null,Object(c.a)(u)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(h,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},42:function(e,t,n){"use strict";n.r(t);var o=n(0),r=n.n(o),a=n(6),i=n(7),c=n(9),s=n(8),u=n(10),l=function(e){function t(){var e,n;Object(a.a)(this,t);for(var o=arguments.length,r=new Array(o),i=0;i<o;i++)r[i]=arguments[i];return(n=Object(c.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(r)))).state={x:0,y:0},n.handleMouseMove=function(e){n.setState({x:e.clientX,y:e.clientY})},n}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{style:{position:"relative",width:"100%",height:"100%"},onMouseMove:this.handleMouseMove},this.props.render(this.state))}}]),t}(r.a.Component),h=n(12);t.default={path:"/renderProps",exact:!0,component:function(){return r.a.createElement(l,{render:function(e){return r.a.createElement(h.a,{mouse:e})}})}}},43:function(e,t,n){"use strict";n.r(t);var o=n(6),r=n(7),a=n(9),i=n(8),c=n(10),s=n(0),u=n.n(s),l=function(e){return function(t){function n(){var e,t;Object(o.a)(this,n);for(var r=arguments.length,c=new Array(r),s=0;s<r;s++)c[s]=arguments[s];return(t=Object(a.a)(this,(e=Object(i.a)(n)).call.apply(e,[this].concat(c)))).state={x:0,y:0},t.handleMouseMove=function(e){t.setState({x:e.clientX,y:e.clientY})},t}return Object(c.a)(n,t),Object(r.a)(n,[{key:"render",value:function(){return u.a.createElement("div",{style:{position:"relative",width:"100%",height:"100%"},onMouseMove:this.handleMouseMove},u.a.createElement(e,Object.assign({},this.props,{mouse:this.state})))}}]),n}(u.a.Component)}(n(12).a);t.default={path:"/hoc",exact:!0,component:l}}},[[25,1,2]]]);
//# sourceMappingURL=main.8b12994f.chunk.js.map