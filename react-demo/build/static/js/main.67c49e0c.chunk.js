(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{110:function(e,t,n){"use strict";function a(e){var t=function(e){return e<10?"0"+e:e},n=Math.floor(e/60/60/24),a=Math.floor(e/60/60%60),r=Math.floor(e/60%60),c=Math.floor(e%60);return{days:t(n),hours:t(a),minutes:t(r),seconds:t(c)}}function r(e){return e.displayName||e.name||"Component"}n.d(t,"b",function(){return a}),n.d(t,"a",function(){return r})},127:function(e,t,n){e.exports=n.p+"static/media/logo.5d5d9eef.svg"},141:function(e,t,n){e.exports=n(278)},146:function(e,t,n){},147:function(e,t,n){},148:function(e,t,n){var a={"./decorators-hoc/index.js":285,"./error-boundaries/index.js":286,"./hoc/index.js":283,"./hooks/index.js":277,"./inheritance-inversion/index.js":156,"./lazy-suspense/index.js":157,"./modal-render-props/index.js":280,"./redux-saga/index.js":204,"./render-props/index.js":282,"./swipe-card/index.js":205,"./yearPicker/index.js":281};function r(e){var t=c(e);return n(t)}function c(e){if(!n.o(a,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return a[e]}r.keys=function(){return Object.keys(a)},r.resolve=c,e.exports=r,r.id=148},156:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a);t.default={path:"/inheritance-inversion",exact:!0,component:r.a.lazy(function(){return n.e(0).then(n.bind(null,289))})}},157:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a).a.lazy(function(){return n.e(1).then(n.bind(null,287))});t.default={path:"/lazy-suspense",exact:!0,component:r}},204:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a);t.default={path:"/redux-saga",exact:!0,component:r.a.lazy(function(){return Promise.all([n.e(7),n.e(3)]).then(n.bind(null,290))})}},205:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a);t.default={path:"/swipe-card",exact:!0,component:r.a.lazy(function(){return n.e(5).then(n.bind(null,288))})}},277:function(e,t,n){"use strict";n.r(t);var a=n(15),r=n(16),c=n(17),o=n(14),u=n(18),i=n(0),l=n.n(i),s=n(76),h=function(e){function t(){return Object(a.a)(this,t),Object(c.a)(this,Object(o.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){var e=this.props.route;return l.a.createElement("div",null,Object(s.a)(e.children))}}]),t}(l.a.Component),m=n(23);function d(e,t){switch(t.type){case"add":return{count:e.count+1};case"minus":return{count:e.count-1};default:return e}}var f=l.a.createContext();function p(e,t){switch(t.type){case"add":return{count:e.count+1};case"minus":return{count:e.count-1};default:return e}}var b=function(e){var t=Object(i.useReducer)(p,{count:0}),n=Object(m.a)(t,2),a=n[0],r=n[1];return l.a.createElement(f.Provider,{value:{state:a,dispatch:r}},e.children)};function v(){var e=Object(i.useContext)(f),t=e.state,n=e.dispatch;return l.a.createElement(l.a.Fragment,null,l.a.createElement("h1",null,t.count),l.a.createElement("button",{onClick:function(){return n({type:"add"})}},"+"),l.a.createElement("button",{onClick:function(){return n({type:"minus"})}},"-"))}function j(e){var t=e.count,n=Object(i.useMemo)(function(){return function(e){return console.log("child2 changeCount function"),"\u5b50\u7ec4\u4ef62\u6539\u53d8Count\u7684\u65b9\u6cd5"+e}(t)},[t]);return l.a.createElement(l.a.Fragment,null,"child count: ",n)}var O=Object(i.memo)(function(e){var t=e.onClickCallback,n=e.count;return console.log("child render"),l.a.createElement(l.a.Fragment,null,l.a.createElement("h1",null,"im child:",n),l.a.createElement("button",{onClick:t},"child btn"))});t.default={path:"/hooks",component:h,children:[{exact:!0,path:"/hooks/useState",component:function(){var e=Object(i.useState)(0),t=Object(m.a)(e,2),n=t[0],a=t[1];return l.a.createElement(l.a.Fragment,null,l.a.createElement("h1",null,n),l.a.createElement("button",{onClick:function(){a(n+1)}},"+"),l.a.createElement("button",{onClick:function(){setTimeout(function(){console.log(n)},2e3)}},"logCount"))}},{exact:!0,path:"/hooks/useReducer",component:function(){var e=Object(i.useReducer)(d,{count:0}),t=Object(m.a)(e,2),n=t[0],a=t[1];return l.a.createElement(l.a.Fragment,null,l.a.createElement("h1",null,n.count),l.a.createElement("button",{onClick:function(){return a({type:"add"})}},"+"),l.a.createElement("button",{onClick:function(){return a({type:"minus"})}},"-"))}},{exact:!0,path:"/hooks/useEffect",component:function(){var e=Object(i.useState)(0),t=Object(m.a)(e,2),n=t[0],a=t[1];return Object(i.useEffect)(function(){return document.title="you clicked ".concat(n," times"),function(){console.log("return func ",n),document.title="app"}},[n]),l.a.createElement(l.a.Fragment,null,l.a.createElement("p",null,"you clicked ",n," times"),l.a.createElement("button",{onClick:function(){return a(n+1)}},"+"))}},{exact:!0,path:"/hooks/useContext",component:function(){return l.a.createElement(b,null,l.a.createElement(v,null))}},{exact:!0,path:"/hooks/useRef",component:function(){var e=Object(i.useState)(0),t=Object(m.a)(e,2),n=t[0],a=t[1],r=Object(i.useRef)(n);return Object(i.useEffect)(function(){r.current=n,setTimeout(function(){console.log("You clicked ".concat(r.current," times"))},3e3)}),l.a.createElement("div",null,l.a.createElement("p",null,"You clicked ",n," times"),l.a.createElement("button",{onClick:function(){return a(n+1)}},"Click me"))}},{exact:!0,path:"/hooks/useMemo",component:function(){var e=Object(i.useState)(0),t=Object(m.a)(e,2),n=t[0],a=t[1],r=Object(i.useState)(+new Date),c=Object(m.a)(r,2),o=c[0],u=c[1];return l.a.createElement(l.a.Fragment,null,l.a.createElement("h1",null,"time:",o),l.a.createElement("button",{onClick:function(){return u(+new Date)}},"setTime"),l.a.createElement("button",{onClick:function(){return a(n+1)}},"+"),l.a.createElement(j,{count:n}))}},{exact:!0,path:"/hooks/useCallback",component:function(){var e=Object(i.useState)(0),t=Object(m.a)(e,2),n=t[0],a=t[1],r=Object(i.useState)("test"),c=Object(m.a)(r,2),o=c[0],u=c[1],s=Object(i.useCallback)(function(){return a(n+1)},[n]);return l.a.createElement(l.a.Fragment,null,l.a.createElement("h1",null,"name:",o),l.a.createElement("button",{onClick:function(){return u(o+"1")}},"+"),l.a.createElement(O,{onClickCallback:s,count:n}))}}]}},278:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(7),o=n.n(c),u=(n(146),n(147),n(76)),i=n(148),l=i.keys().map(function(e){return i(e).default}),s=n(136);var h=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(a.Suspense,{fallback:r.a.createElement("div",null,"Loading...")},r.a.createElement(s.a,null,Object(u.a)(l))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(h,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},280:function(e,t,n){"use strict";n.r(t);n(64);var a=n(35),r=n(0),c=n.n(r),o=(n(159),n(138)),u=function(e){var t=e.visible,n=e.handleHide;return c.a.createElement(o.a,{visible:t,title:"Hello",onOk:n,onCancel:n},"World!")},i=n(15),l=n(16),s=n(17),h=n(14),m=n(18),d=function(e){function t(){var e,n;Object(i.a)(this,t);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(n=Object(s.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(r)))).state={visible:!1},n.show=function(){n.setState({visible:!0})},n.hide=function(){n.setState({visible:!1})},n}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.state.visible;return(0,this.props.children)({visible:e,show:this.show,hide:this.hide})}}]),t}(c.a.Component);t.default={path:"/modal-render-props",exact:!0,component:function(){return c.a.createElement(d,null,function(e){return c.a.createElement("div",null,c.a.createElement(u,{visible:e.visible,handleHide:e.hide}),c.a.createElement(a.a,{type:"primary",onClick:e.show},"Click me!"))})}}},281:function(e,t,n){"use strict";n.r(t);n(64);var a=n(35),r=(n(284),n(61)),c=n(15),o=n(16),u=n(17),i=n(14),l=n(18),s=n(0),h=n.n(s),m=(n(279),n(137)),d=function(e){function t(){return Object(c.a)(this,t),Object(u.a)(this,Object(i.a)(t).apply(this,arguments))}return Object(l.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return h.a.createElement(m.a,Object.assign({},this.props,{format:"YYYY",mode:"year"}))}}]),t}(h.a.Component),f=function(e){function t(){var e,n;Object(c.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(u.a)(this,(e=Object(i.a)(t)).call.apply(e,[this].concat(r)))).state={open:!1,date:null},n.handleChange=function(e){n.setState({open:!1}),n.props.form.setFieldsValue({date:e})},n.handleOpenChange=function(e){n.setState({open:e})},n.handleReset=function(){n.props.form.resetFields()},n}return Object(l.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this.props.form,t=e.getFieldDecorator,n=(0,e.getFieldValue)("date");return h.a.createElement("div",{className:"App",style:{paddingTop:"150px"}},h.a.createElement(r.a,{layout:"inline"},h.a.createElement(r.a.Item,null,t("date",{})(h.a.createElement(d,{open:this.state.open,onOpenChange:this.handleOpenChange,onPanelChange:this.handleChange})),h.a.createElement("div",{style:{margin:"10px 0"}},"\u5f53\u524d\u65e5\u671f\uff1a",n?n.format("YYYY"):"\u672a\u9009\u62e9")),h.a.createElement(r.a.Item,null,h.a.createElement(a.a,{type:"primary",onClick:this.handleReset},"Reset"))))}}]),t}(h.a.Component),p=r.a.create({name:"datePickerDemo"})(f);t.default={path:"/antdYearPicker",exact:!0,component:p}},282:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(15),o=n(16),u=n(17),i=n(14),l=n(18),s=function(e){function t(){var e,n;Object(c.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(u.a)(this,(e=Object(i.a)(t)).call.apply(e,[this].concat(r)))).state={x:0,y:0},n.handleMouseMove=function(e){n.setState({x:e.clientX,y:e.clientY})},n}return Object(l.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{style:{position:"relative",width:"100%",height:"100%"},onMouseMove:this.handleMouseMove},this.props.render(this.state))}}]),t}(r.a.Component),h=n(75);t.default={path:"/render-props",exact:!0,component:function(){return r.a.createElement(s,{render:function(e){return r.a.createElement(h.a,{mouse:e})}})}}},283:function(e,t,n){"use strict";n.r(t);var a=n(15),r=n(16),c=n(17),o=n(14),u=n(18),i=n(0),l=n.n(i),s=function(e){return function(t){function n(){var e,t;Object(a.a)(this,n);for(var r=arguments.length,u=new Array(r),i=0;i<r;i++)u[i]=arguments[i];return(t=Object(c.a)(this,(e=Object(o.a)(n)).call.apply(e,[this].concat(u)))).state={x:0,y:0},t.handleMouseMove=function(e){t.setState({x:e.clientX,y:e.clientY})},t}return Object(u.a)(n,t),Object(r.a)(n,[{key:"render",value:function(){return l.a.createElement("div",{style:{position:"relative",width:"100%",height:"100%"},onMouseMove:this.handleMouseMove},l.a.createElement(e,Object.assign({},this.props,{mouse:this.state})))}}]),n}(l.a.Component)}(n(75).a);t.default={path:"/hoc",exact:!0,component:s}},285:function(e,t,n){"use strict";n.r(t);var a,r=n(139),c=n(15),o=n(16),u=n(17),i=n(14),l=n(18),s=n(0),h=n.n(s),m=n(110),d=["admin"];var f=function(e){var t=function(t){function n(){return Object(c.a)(this,n),Object(u.a)(this,Object(i.a)(n).apply(this,arguments))}return Object(l.a)(n,t),Object(o.a)(n,[{key:"render",value:function(){var t=this.props,n=t.visible,a=t.auth,c=Object(r.a)(t,["visible","auth"]);return!1===n||a&&-1===d.indexOf(a)?null:h.a.createElement(e,c)}}]),n}(s.Component);return t.displayName="HOC(".concat(Object(m.a)(e),")"),t}(a=function(e){function t(){return Object(c.a)(this,t),Object(u.a)(this,Object(i.a)(t).apply(this,arguments))}return Object(l.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return h.a.createElement("button",null,"AdminButton")}}]),t}(s.Component))||a,p=function(e){function t(){var e,n;Object(c.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(u.a)(this,(e=Object(i.a)(t)).call.apply(e,[this].concat(r)))).state={auth:"user"},n.toggleAuth=function(){n.setState({auth:"user"===n.state.auth?"admin":"user"})},n}return Object(l.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return h.a.createElement(h.a.Fragment,null,h.a.createElement("p",null,"now auth: ",this.state.auth),h.a.createElement("button",{onClick:this.toggleAuth},"toggle"),h.a.createElement(f,{auth:this.state.auth}))}}]),t}(h.a.Component);t.default={path:"/decorators-hoc",exact:!0,component:p}},286:function(e,t,n){"use strict";n.r(t);var a=n(15),r=n(16),c=n(17),o=n(14),u=n(18),i=n(0),l=n.n(i),s=Object(i.lazy)(function(){return n.e(1).then(n.bind(null,287))}),h=function(e){function t(){var e,n;Object(a.a)(this,t);for(var r=arguments.length,u=new Array(r),i=0;i<r;i++)u[i]=arguments[i];return(n=Object(c.a)(this,(e=Object(o.a)(t)).call.apply(e,[this].concat(u)))).state={hasError:!1},n}return Object(u.a)(t,e),Object(r.a)(t,[{key:"componentDidCatch",value:function(e){console.log("componentDidCatch",e)}},{key:"render",value:function(){return this.state.hasError?l.a.createElement("div",null,"something error..."):l.a.createElement(i.Suspense,{fallback:l.a.createElement("div",null,"Loading...")},l.a.createElement(s,{name:"error-boundaries"}))}}],[{key:"getDerivedStateFromError",value:function(e){return console.log("getDerivedStateFromError",e),{hasError:!0}}}]),t}(l.a.Component);t.default={path:"/error-boundaries",exact:!0,component:h}},75:function(e,t,n){"use strict";n.d(t,"a",function(){return m});var a=n(15),r=n(16),c=n(17),o=n(14),u=n(18),i=n(0),l=n.n(i),s=n(127),h=n.n(s),m=function(e){function t(){return Object(a.a)(this,t),Object(c.a)(this,Object(o.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){var e=this.props.mouse;return l.a.createElement("img",{src:h.a,className:"App-logo",alt:"logo",style:{width:200,height:200,position:"absolute",left:e.x,top:e.y}})}}]),t}(l.a.Component)}},[[141,4,6]]]);