(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{17:function(e,t,a){"use strict";var n=a(20),r=a(0),o=a.n(r);t.a=Object(n.a)({},o.a,{ID:o.a.oneOfType([o.a.string,o.a.number]).isRequired,component:o.a.oneOfType([o.a.string,o.a.func]),date:o.a.oneOfType([o.a.instanceOf(Date),o.a.string])})},19:function(e,t,a){"use strict";var n=a(20),r=a(8),o=a(1),c=a.n(o),i=(a(17),a(3)),l=a.n(i),s=a(40),u=function(e){var t=e.rounded,a=e.circle,o=e.src,i=e.size,s=e.tag,u=e.className,m=e.style,d=Object(r.a)(e,["rounded","circle","src","size","tag","className","style"]),p=l()({"rounded-circle":a,rounded:t},u);return c.a.createElement(s,Object.assign({src:o,style:Object(n.a)({width:i,height:i},m),className:p},d))};u.defaultProps={tag:"img",rounded:!1,circle:!0,size:40,src:a.n(s).a,style:{}},t.a=u},21:function(e,t,a){"use strict";var n,r=a(3),o=a.n(r),c=(n="cr",{create:function(e){var t=e;return"string"===typeof n&&(t="".concat(n,"-").concat(e)),{b:function(){for(var e=arguments.length,a=new Array(e),n=0;n<e;n++)a[n]=arguments[n];return o()(t,a)},e:function(e){for(var a=arguments.length,n=new Array(a>1?a-1:0),r=1;r<a;r++)n[r-1]=arguments[r];return o()("".concat(t,"__").concat(e),n)},m:function(e){for(var a=arguments.length,n=new Array(a>1?a-1:0),r=1;r<a;r++)n[r-1]=arguments[r];return o()("".concat(t,"--").concat(e),n)}}}});t.a=c},25:function(e,t,a){"use strict";t.a={base_api:"https://server.m-lugha.com/pci/api/v1/",secret:"4F8E1AA13916564CB84AC9B923E90DDE46B11148C2CE86998C9F1459728C625583E882DEB7FCCAD648B2940CEE6001D6E8689E3404864DD2552732322B1E9397",backend_media:"https://server.m-lugha.com",media_api:"https://apps.m-lugha.com",developer_page:"https://softbucket.io",developer_name:"softbucket.io",tinymcekey:"rkupw6dsoi853jngm7sd6a3ohten4dcgdtu3fc1o0954oceq"}},27:function(e,t,a){"use strict";a.d(t,"b",function(){return o}),a.d(t,"a",function(){return c});var n=a(1),r=Object(n.createContext)(),o=r.Provider,c=r.Consumer},37:function(e,t,a){e.exports=a.p+"static/media/logo_200.01b768d6.png"},39:function(e,t,a){e.exports=a.p+"static/media/sidebar-4.80d4a4e5.jpg"},40:function(e,t,a){e.exports=a.p+"static/media/100_1.4d6fffea.png"},41:function(e,t,a){"use strict";var n=a(1),r=a.n(n),o=a(84);t.a=function(e){var t=e.color,a=void 0===t?"primary":t;return r.a.createElement("div",{className:"cr-page-spinner"},r.a.createElement(o.a,{color:a}))}},42:function(e,t,a){"use strict";var n=a(8),r=a(1),o=a.n(r),c=a(17),i=a(3),l=a.n(i),s=a(96),u=a(97),m=a(98),d=a(99),p=a(100),f=a(19),h=function(e){var t=e.avatar,a=e.avatarSize,r=e.title,c=e.subtitle,i=e.text,h=e.children,g=e.className,b=Object(n.a)(e,["avatar","avatarSize","title","subtitle","text","children","className"]),v=l()("bg-gradient-theme",g);return o.a.createElement(s.a,Object.assign({inverse:!0,className:v},b),o.a.createElement(u.a,{className:"d-flex justify-content-center align-items-center flex-column"},o.a.createElement(f.a,{src:t,size:a,className:"mb-2"}),o.a.createElement(m.a,null,r),o.a.createElement(d.a,null,c),o.a.createElement(p.a,null,o.a.createElement("small",null,i))),h)};h.defaultProps={avatarSize:80};var g=h,b=a(101),v=a(91),E=function(e){var t=e.color,a=e.header,r=e.avatar,c=e.avatarSize,i=e.name,m=e.date,d=e.text,h=e.className,g=e.buttonProps,E=Object(n.a)(e,["color","header","avatar","avatarSize","name","date","text","className","buttonProps"]),y="bg-".concat(t),k=l()(y,h);return o.a.createElement(s.a,Object.assign({inverse:!0,className:k},E),a&&"string"===typeof a?o.a.createElement(b.a,{className:y},a):a,o.a.createElement(u.a,{className:"d-flex flex-wrap flex-column align-items-center justify-content-center"},o.a.createElement(f.a,{size:c,src:r}),o.a.createElement(p.a,{className:"text-center"},o.a.createElement("strong",{className:"d-block"},i),o.a.createElement("small",{className:"text-muted"},m)),o.a.createElement(p.a,{className:"text-center"},d),o.a.createElement(v.a,Object.assign({color:"primary"},g))))};E.defaultProps={color:"gradient-secondary",avatarSize:60};var y=a(104),k=a(105),w=a(102),O=a(103),S=a(88),x=a(89),N=a(90),j=(c.a.arrayOf(c.a.shape({id:c.a.ID,title:c.a.string,done:c.a.bool})),function(e){var t=e.todos,a=Object(n.a)(e,["todos"]);return o.a.createElement(w.a,Object.assign({flush:!0},a),t.map(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.id,a=e.title,n=e.done;return o.a.createElement(O.a,{key:t,className:"border-0"},o.a.createElement(S.a,{check:!0},o.a.createElement(x.a,{check:!0},o.a.createElement(N.a,{type:"checkbox",checked:n,readOnly:!0}),n?o.a.createElement("strike",null,a):o.a.createElement("span",null,a))))}),o.a.createElement(v.a,{block:!0},"Add"))});j.defaultProps={todos:[]};var C=j,P=a(48),z=function(e){var t=e.image,a=e.title,r=e.subtitle,c=e.todos,i=Object(n.a)(e,["image","title","subtitle","todos"]);return o.a.createElement(s.a,i,o.a.createElement("div",{className:"position-relative"},o.a.createElement(y.a,{src:t}),o.a.createElement(k.a,{className:"bg-dark",style:{opacity:.2}},o.a.createElement(m.a,{className:"text-white"},a),o.a.createElement(p.a,{className:"text-white"},r))),o.a.createElement(C,{todos:c}))};z.defaultProps={image:a.n(P).a,title:"Tasks",subtitle:"Due soon..."};a.d(t,"a",function(){return g})},47:function(e,t,a){e.exports=a.p+"static/media/logo_200.1e2a29d9.gif"},48:function(e,t,a){e.exports=a.p+"static/media/background_1920-2.c54eef50.jpg"},52:function(e,t,a){e.exports=a(83)},81:function(e,t,a){},83:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),o=a(22),c=a.n(o),i=a(9),l=a(10),s=a(12),u=a(11),m=a(13),d=a(37),p=a.n(d),f=a(87),h=a(88),g=a(89),b=a(90),v=a(91),E=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).changeAuthState=function(e){return function(t){t.preventDefault(),a.props.onChangeAuthState(e)}},a.handleSubmit=function(e){e.preventDefault()},a}return Object(m.a)(t,e),Object(l.a)(t,[{key:"renderButtonText",value:function(){var e=this.props.buttonText;return!e&&this.isLogin?"Login":!e&&this.isSignup?"Signup":e}},{key:"render",value:function(){var e=this.props,t=e.showLogo,a=e.usernameLabel,n=e.usernameInputProps,o=e.passwordLabel,c=e.passwordInputProps,i=e.confirmPasswordLabel,l=e.confirmPasswordInputProps,s=e.children,u=e.onLogoClick;return r.a.createElement(f.a,{onSubmit:this.handleSubmit},t&&r.a.createElement("div",{className:"text-center pb-4"},r.a.createElement("img",{src:p.a,className:"rounded",style:{width:60,height:60,cursor:"pointer"},alt:"logo",onClick:u})),r.a.createElement(h.a,null,r.a.createElement(g.a,{for:a},a),r.a.createElement(b.a,n)),r.a.createElement(h.a,null,r.a.createElement(g.a,{for:o},o),r.a.createElement(b.a,c)),this.isSignup&&r.a.createElement(h.a,null,r.a.createElement(g.a,{for:i},i),r.a.createElement(b.a,l)),r.a.createElement(h.a,{check:!0},r.a.createElement(g.a,{check:!0},r.a.createElement(b.a,{type:"checkbox"})," ",this.isSignup?"Agree the terms and policy":"Remember me")),r.a.createElement("hr",null),r.a.createElement(v.a,{size:"lg",className:"bg-gradient-theme-left border-0",block:!0,onClick:this.handleSubmit},this.renderButtonText()),r.a.createElement("div",{className:"text-center pt-1"},r.a.createElement("h6",null,"or"),r.a.createElement("h6",null,this.isSignup?r.a.createElement("a",{href:"#login",onClick:this.changeAuthState(y)},"Login"):r.a.createElement("a",{href:"#signup",onClick:this.changeAuthState(k)},"Signup"))),s)}},{key:"isLogin",get:function(){return this.props.authState===y}},{key:"isSignup",get:function(){return this.props.authState===k}}]),t}(r.a.Component),y="LOGIN",k="SIGNUP";E.defaultProps={authState:"LOGIN",showLogo:!0,usernameLabel:"Email",usernameInputProps:{type:"email",placeholder:"your@email.com"},passwordLabel:"Password",passwordInputProps:{type:"password",placeholder:"your password"},confirmPasswordLabel:"Confirm Password",confirmPasswordInputProps:{type:"password",placeholder:"confirm your password"},onLogoClick:function(){}};var w=E,O=a(0),S=a.n(O),x=a(32);x.a.initialize("UA-11560381-1");var N=function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){this.sendPageView(this.context.router.history.location),this.context.router.history.listen(this.sendPageView)}},{key:"sendPageView",value:function(e){x.a.set({page:e.pathname}),x.a.pageview(e.pathname)}},{key:"render",value:function(){return this.props.children}}]),t}(r.a.Component);N.contextTypes={router:S.a.object};var j=N,C=a(8),P=a(21),z=a(92),_=P.a.create("content"),D=function(e){var t=e.tag,a=e.className,n=Object(C.a)(e,["tag","className"]),o=_.b(a);return r.a.createElement(t,Object.assign({className:o},n))};D.defaultProps={tag:z.a};var A=D,B=a(93),L=a(94),I=a(95),T=function(e){return r.a.createElement("a",Object.assign({href:"https://github.com/reduction-admin/react-reduction",target:"_blank",rel:"noopener noreferrer"},e))},W=function(){var e=(new Date).getFullYear();return r.a.createElement(B.a,null,r.a.createElement(L.a,{navbar:!0},r.a.createElement(I.a,null,"\xa9 ",e," ","M-Lugha Web Portal"," ",r.a.createElement(T,{href:""},r.a.createElement("small",null,"By ","SoftBucket IO")))))},M=a(19),U=a(47),R=a.n(U),q=a(42),F=(a(17),a(106)),H=function(e){var t=e.notificationsData;return t&&t.length&&t.map(function(e){var t=e.id,a=e.avatar,n=e.message,o=e.date;return r.a.createElement(F.a,{key:t,className:"pb-2"},r.a.createElement(F.a,{left:!0,className:"align-self-center pr-3"},r.a.createElement(M.a,{tag:F.a,object:!0,src:a,alt:"Avatar"})),r.a.createElement(F.a,{body:!0,middle:!0,className:"align-self-center"},n),r.a.createElement(F.a,{right:!0,className:"align-self-center"},r.a.createElement("small",{className:"text-muted"},o)))})};H.defaultProps={notificationsData:[]};var G=a(7),J=a(27),V=a(20),Y=a(3),K=a.n(Y),Q=a(107),X={"top-right":{top:-3,right:-3},"top-left":{top:-3,left:-3},"bottom-left":{bottom:-3,left:-3},"bottom-right":{bottom:-3,right:-3}},Z={xs:{width:10,height:10},sm:{width:15,height:15},md:{width:20,height:20},lg:{width:25,height:25},xl:{width:30,height:30}},$=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.position,a=void 0===t?"bottom-right":t,n=e.size,o=void 0===n?"sm":n,c=e.style,i=void 0===c?{}:c,l=e.className,s=Object(C.a)(e,["position","size","style","className"]);return function(e){return function(t){var n=t.tag,c=void 0===n?"div":n,u=Object(C.a)(t,["tag"]);return r.a.createElement(c,{className:"d-inline-block position-relative"},r.a.createElement(e,u),r.a.createElement(Q.a,Object.assign({className:K()("position-absolute",l),style:Object(V.a)({},X[a],Z[o],{borderRadius:"50%",border:"2px solid #fff"},i)},s)))}}},ee=a(26),te=a.n(ee),ae=a(108),ne=a(112),re=a(109),oe=a(102),ce=a(103),ie=a(25),le=P.a.create("header"),se=($({size:"md",color:"primary",style:{top:-10,right:-10,display:"inline-flex",justifyContent:"center",alignItems:"center"},children:r.a.createElement("small",null,"5")})(G.j),function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={isOpenNotificationPopover:!1,isNotificationConfirmed:!1,isOpenUserCardPopover:!1},a.signOut=function(){te.a.removeItem(ie.a.secret).then(function(e){}).catch(function(e){}),window.location.href="/"},a.goTo=function(){window.location.href="/"},a.openProfile=function(){window.location.href="/"},a.toggleNotificationPopover=function(){a.setState({isOpenNotificationPopover:!a.state.isOpenNotificationPopover}),a.state.isNotificationConfirmed||a.setState({isNotificationConfirmed:!0})},a.toggleUserCardPopover=function(){a.setState({isOpenUserCardPopover:!a.state.isOpenUserCardPopover})},a.handleSidebarControlButton=function(e){e.preventDefault(),e.stopPropagation(),document.querySelector(".cr-sidebar").classList.toggle("cr-sidebar--open")},a}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this;this.state.isNotificationConfirmed;return r.a.createElement(J.a,null,function(t){return r.a.createElement(B.a,{light:!0,expand:!0,className:le.b("bg-white")},r.a.createElement(L.a,{navbar:!0},r.a.createElement("img",{src:R.a,width:"120",height:"70",className:"pr-2",alt:""})),r.a.createElement(L.a,{navbar:!0},r.a.createElement("h1",{className:"top-h1"},"M-lugha Account: ",t.state.user.email)),1==parseInt(t.state.user.is_active)&&r.a.createElement(L.a,{navbar:!0,className:le.e("nav-right")},r.a.createElement(I.a,null,r.a.createElement(ae.a,{id:"Popover2"},r.a.createElement(M.a,{onClick:e.toggleUserCardPopover,className:"can-click"})),r.a.createElement(ne.a,{placement:"bottom-end",isOpen:e.state.isOpenUserCardPopover,toggle:e.toggleUserCardPopover,target:"Popover2",className:"p-0 border-0",style:{minWidth:250}},r.a.createElement(re.a,{className:"p-0 border-light"},r.a.createElement(q.a,{title:t.state.user.account_name,subtitle:"Account: "+t.state.user.email,text:"Child account",className:"border-light"},r.a.createElement(oe.a,{flush:!0},r.a.createElement(ce.a,{tag:"button",action:!0,className:"border-light"},r.a.createElement(G.k,null)," Profile"),r.a.createElement(ce.a,{onClick:e.signOut,tag:"button",action:!0,className:"border-light"},r.a.createElement(G.g,null)," Signout"))))))))})}}]),t}(r.a.Component)),ue=a(115),me=a(49),de=a.n(me),pe={NotificationItem:{DefaultStyle:{display:"flex",justifyContent:"space-between",alignItems:"center",borderRadius:"4px",fontSize:"14px"},success:{borderTop:0,backgroundColor:"#45b649",WebkitBoxShadow:0,MozBoxShadow:0,boxShadow:0},error:{borderTop:0,backgroundColor:"#f85032",WebkitBoxShadow:0,MozBoxShadow:0,boxShadow:0},warning:{borderTop:0,backgroundColor:"#ffd700",WebkitBoxShadow:0,MozBoxShadow:0,boxShadow:0},info:{borderTop:0,background:"linear-gradient(to right, #6a82fb, #fc5c7d)",WebkitBoxShadow:0,MozBoxShadow:0,boxShadow:0}},Title:{DefaultStyle:{margin:0,padding:0,paddingRight:5,color:"#fff",display:"inline-flex",fontSize:20,fontWeight:"bold"}},MessageWrapper:{DefaultStyle:{display:"block",color:"#fff",width:"100%"}},Dismiss:{DefaultStyle:{display:"inline-flex",justifyContent:"center",alignItems:"center",fontFamily:"inherit",fontSize:20,color:"#f2f2f2",position:"relative",margin:0,padding:0,background:"none",borderRadius:0,opacity:1,width:20,height:20,textAlign:"initial",float:"none",top:"unset",right:"unset",lineHeight:"inherit"}},Action:{DefaultStyle:{background:"#fff",borderRadius:"2px",padding:"6px 20px",fontWeight:"bold",margin:"10px 0 0 0",border:0},success:{backgroundColor:"#45b649",color:"#fff"},error:{backgroundColor:"#f85032",color:"#fff"},warning:{backgroundColor:"#ffd700",color:"#fff"},info:{backgroundColor:"#00c9ff",color:"#fff"}},ActionWrapper:{DefaultStyle:{margin:0,padding:0}}},fe=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).handleContentClick=function(e){a.openSidebar("close")},a}return Object(m.a)(t,e),Object(l.a)(t,[{key:"componentWillReceiveProps",value:function(e){var t=e.breakpoint;t!==this.props.breakpoint&&this.checkBreakpoint(t)}},{key:"componentDidMount",value:function(){this.checkBreakpoint(this.props.breakpoint)}},{key:"checkBreakpoint",value:function(e){switch(e){case"xs":case"sm":case"md":return this.openSidebar("close");case"lg":case"xl":default:return this.openSidebar("open")}}},{key:"openSidebar",value:function(e){if("open"===e)return document.querySelector(".cr-sidebar").classList.add("cr-sidebar--open");document.querySelector(".cr-sidebar").classList.remove("cr-sidebar--open")}},{key:"render",value:function(){var e=this,t=this.props.children;return r.a.createElement("main",{className:"cr-app bg-light-custom"},r.a.createElement(Ee,null),r.a.createElement(A,{fluid:!0},r.a.createElement(se,null),t,r.a.createElement(W,null)),r.a.createElement(de.a,{dismissible:!1,ref:function(t){return e.notificationSystem=t},style:pe}))}}],[{key:"isSidebarOpen",value:function(){return document.querySelector(".cr-sidebar").classList.contains("cr-sidebar--open")}}]),t}(r.a.Component),he=a(28),ge=a(39),be=a.n(ge),ve=('url("'.concat(be.a,'")'),G.l,G.h,G.e,G.r,G.b,G.n,G.j,G.d,G.q,G.o,G.c,G.a,G.p,G.f,G.s,G.i,G.t,P.a.create("sidebar")),Ee=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={isOpenComponents:!0,isOpenContents:!0,isOpenPages:!0},a.handleClick=function(e){return function(){a.setState(function(t){var a=t["isOpen".concat(e)];return Object(he.a)({},"isOpen".concat(e),!a)})}},a}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement("aside",{className:ve.b()+" hidden-div","data-image":be.a},r.a.createElement("div",{className:ve.e("content")}))}}]),t}(r.a.Component),ye=a(41),ke=a(110),we=a(111),Oe=a(96),Se=(r.a.Component,a(50)),xe=a.n(Se),Ne=a(113),je=a(116),Ce=a(114),Pe=(a(81),a(82),r.a.lazy(function(){return Promise.all([a.e(0),a.e(7)]).then(a.bind(null,218))})),ze=r.a.lazy(function(){return a.e(6).then(a.bind(null,219))}),_e=r.a.lazy(function(){return Promise.all([a.e(0),a.e(8)]).then(a.bind(null,220))}),De=r.a.lazy(function(){return Promise.all([a.e(4),a.e(5)]).then(a.bind(null,224))}),Ae=r.a.lazy(function(){return Promise.all([a.e(0),a.e(9)]).then(a.bind(null,223))}),Be=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(s.a)(this,Object(u.a)(t).call(this,e))).switchStateHandler=function(e){a.setState({user:e.user,is_logged_in:e.is_logged_in})},a.state={user:{},is_logged_in:!1},te.a.getItem(ie.a.secret).then(function(e){if(null!==e){var t=JSON.parse(e);a.setState({user:t.data,is_logged_in:!0})}}).catch(function(e){a.setState({user:{},is_logged_in:!1}),console.log("from storage error",e)}),a}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement(Ne.a,{basename:"/".concat("https://apps.m-lugha.com".split("/").pop())},r.a.createElement(j,null,r.a.createElement(J.b,{value:{state:this.state,switchStateHandler:function(t){return e.switchStateHandler(t)}}},r.a.createElement(je.a,null,r.a.createElement(fe,{breakpoint:this.props.breakpoint},r.a.createElement(r.a.Suspense,{fallback:r.a.createElement(ye.a,null)},!this.state.is_logged_in&&r.a.createElement("div",null,r.a.createElement(ue.a,{exact:!0,path:"/",component:Pe}),r.a.createElement(ue.a,{exact:!0,path:"/new/account",component:ze}),r.a.createElement(ue.a,{exact:!0,path:"/new/account/pay",component:_e})),this.state.is_logged_in&&r.a.createElement("div",null,r.a.createElement(ue.a,{exact:!0,path:"/",component:De}),r.a.createElement(ue.a,{exact:!0,path:"/child/home/renew/account",component:Ae})))),r.a.createElement(Ce.a,{to:"/"})))))}}]),t}(r.a.Component),Le=xe()(function(e){var t=e.width;return t<575?{breakpoint:"xs"}:576<t&&t<767?{breakpoint:"sm"}:768<t&&t<991?{breakpoint:"md"}:992<t&&t<1199?{breakpoint:"lg"}:t>1200?{breakpoint:"xl"}:{breakpoint:"xs"}})(Be);c.a.render(r.a.createElement(Le,null),document.getElementById("root"))}},[[52,2,3]]]);
//# sourceMappingURL=main.29351a1d.chunk.js.map