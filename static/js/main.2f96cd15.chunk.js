(this.webpackJsonpreact_tabs=this.webpackJsonpreact_tabs||[]).push([[0],{47:function(t,e,n){},48:function(t,e,n){"use strict";n.r(e);var a=n(11),c=n.n(a),s=n(29),i=n(30),r=n(31),b=n(36),o=n(0),l=n.n(o),d=n(52),u=n(53),j=n(1),h=function(t){var e=t.tabs,n=t.onSelectTab;return Object(j.jsx)(d.a,{id:"controlled-tab-example",className:"mb-3",onSelect:function(t){var a=e.find((function(e){return t===e.id}));n(a||e[0])},children:e.map((function(t){return Object(j.jsx)(u.a,{title:t.title,eventKey:t.id},t.id)}))})},f=(n(47),[{id:"tab-1",title:"Tab 1",content:"Some text 1"},{id:"tab-2",title:"Tab 2",content:"Some text 2"},{id:"tab-3",title:"Tab 3",content:"Some text 3"}]),T=function(t){Object(r.a)(n,t);var e=Object(b.a)(n);function n(){var t;Object(s.a)(this,n);for(var a=arguments.length,c=new Array(a),i=0;i<a;i++)c[i]=arguments[i];return(t=e.call.apply(e,[this].concat(c))).state={selectedTab:f[0]},t.onSelectTab=function(e){e!==t.state.selectedTab&&t.setState({selectedTab:e})},t}return Object(i.a)(n,[{key:"render",value:function(){return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsxs)("h1",{children:["Selected tab is"," ",this.state.selectedTab.title]}),Object(j.jsx)(h,{tabs:f,onSelectTab:this.onSelectTab}),this.state.selectedTab.content]})}}]),n}(l.a.Component);c.a.render(Object(j.jsx)(T,{}),document.getElementById("root"))}},[[48,1,2]]]);
//# sourceMappingURL=main.2f96cd15.chunk.js.map