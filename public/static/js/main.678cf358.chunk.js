(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{15:function(e,t,a){},22:function(e,t,a){e.exports=a(56)},27:function(e,t,a){},30:function(e,t,a){},32:function(e,t,a){},48:function(e,t,a){},56:function(e,t,a){"use strict";a.r(t);var n=a(0),s=a.n(n),l=a(12),r=a.n(l),i=(a(27),a(15),a(30),a(3)),c=a(4),o=a(5),m=a(6),u=a(7),h=(a(32),a(20).initializeApp({apiKey:"AIzaSyD4pmMmxNFHmhQqFWp5MKEKaiJMDyx80r4",authDomain:"live-chat-12bab.firebaseapp.com",databaseURL:"https://live-chat-12bab.firebaseio.com",projectId:"live-chat-12bab",storageBucket:"",messagingSenderId:"641599993586"})),d=a(21),p=a(8),g=(a(48),function(e){function t(){return Object(i.a)(this,t),Object(o.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return s.a.createElement("div",{id:"Loadingsvg",className:"loading"},s.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32"},s.a.createElement("circle",{cx:"16",cy:"3",r:"2.98966"},s.a.createElement("animate",{attributeName:"r",values:"0;3;0;0",dur:"1s",repeatCount:"indefinite",begin:"0",keySplines:"0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8",calcMode:"spline"})),s.a.createElement("circle",{transform:"rotate(45 16 16)",cx:"16",cy:"3",r:"2.35306"},s.a.createElement("animate",{attributeName:"r",values:"0;3;0;0",dur:"1s",repeatCount:"indefinite",begin:"0.125s",keySplines:"0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8",calcMode:"spline"})),s.a.createElement("circle",{transform:"rotate(90 16 16)",cx:"16",cy:"3",r:"1.02615"},s.a.createElement("animate",{attributeName:"r",values:"0;3;0;0",dur:"1s",repeatCount:"indefinite",begin:"0.25s",keySplines:"0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8",calcMode:"spline"})),s.a.createElement("circle",{transform:"rotate(135 16 16)",cx:"16",cy:"3",r:"0"},s.a.createElement("animate",{attributeName:"r",values:"0;3;0;0",dur:"1s",repeatCount:"indefinite",begin:"0.375s",keySplines:"0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8",calcMode:"spline"})),s.a.createElement("circle",{transform:"rotate(180 16 16)",cx:"16",cy:"3",r:"0"},s.a.createElement("animate",{attributeName:"r",values:"0;3;0;0",dur:"1s",repeatCount:"indefinite",begin:"0.5s",keySplines:"0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8",calcMode:"spline"})),s.a.createElement("circle",{transform:"rotate(225 16 16)",cx:"16",cy:"3",r:"0"},s.a.createElement("animate",{attributeName:"r",values:"0;3;0;0",dur:"1s",repeatCount:"indefinite",begin:"0.625s",keySplines:"0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8",calcMode:"spline"})),s.a.createElement("circle",{transform:"rotate(270 16 16)",cx:"16",cy:"3",r:"0.372702"},s.a.createElement("animate",{attributeName:"r",values:"0;3;0;0",dur:"1s",repeatCount:"indefinite",begin:"0.75s",keySplines:"0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8",calcMode:"spline"})),s.a.createElement("circle",{transform:"rotate(315 16 16)",cx:"16",cy:"3",r:"1.44094"},s.a.createElement("animate",{attributeName:"r",values:"0;3;0;0",dur:"1s",repeatCount:"indefinite",begin:"0.875s",keySplines:"0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8",calcMode:"spline"})),s.a.createElement("circle",{transform:"rotate(180 16 16)",cx:"16",cy:"3",r:"0"},s.a.createElement("animate",{attributeName:"r",values:"0;3;0;0",dur:"1s",repeatCount:"indefinite",begin:"0.5s",keySplines:"0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8",calcMode:"spline"}))))}}]),t}(n.Component)),v=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(o.a)(this,Object(m.a)(t).call(this,e))).login=a.login.bind(Object(p.a)(Object(p.a)(a))),a.handleChange=a.handleChange.bind(Object(p.a)(Object(p.a)(a))),a.signup=a.signup.bind(Object(p.a)(Object(p.a)(a))),a.state={email:"",password:""},a}return Object(u.a)(t,e),Object(c.a)(t,[{key:"handleChange",value:function(e){this.setState(Object(d.a)({},e.target.name,e.target.value))}},{key:"convertMessage",value:function(e){return"The email address is badly formatted."===e?"\u0110\u1ecba ch\u1ec9 email b\u1ecb sai \u0111\u1ecbnh d\u1ea1ng !":"The password is invalid or the user does not have a password."===e?"M\u1eadt kh\u1ea9u kh\xf4ng h\u1ee3p l\u1ec7, vui l\xf2ng ki\u1ec3m tra l\u1ea1i m\u1eadt kh\u1ea9u !":void 0}},{key:"login",value:function(e){var t=this;e.preventDefault();var a=document.getElementById("Loadingsvg");a.className+=" is",h.auth().signInWithEmailAndPassword(this.state.email,this.state.password).then(function(e){}).catch(function(e){console.log(e),alert(t.convertMessage(e.message)),a.classList.remove("is")})}},{key:"signup",value:function(e){var t=this;e.preventDefault(),h.auth().createUserWithEmailAndPassword(this.state.email,this.state.password).then(function(e){var n=a(18),s=h.database().ref("/users"),l=JSON.stringify(e.user);l=JSON.parse(l),s.push({tokens:l.stsTokenManager.accessToken,email:t.state.email,ipAddress:n.address(),time:(new Date).toLocaleString()})}).then(function(e){console.log(e)}).catch(function(e){console.log(e)})}},{key:"render",value:function(){return s.a.createElement("main",{className:""},s.a.createElement("header",null,"Live Chat"),s.a.createElement("div",{className:"col-md-push-4 col-md-4 col-sm-6 col-xs-12"},s.a.createElement(g,null),s.a.createElement("form",{id:"formLogin"},s.a.createElement("div",{className:"hidden form-group"},s.a.createElement("ul",{className:"nav nav-tabs"},s.a.createElement("li",{className:"active"},s.a.createElement("a",{"data-toggle":"tab",href:"#home"},"\u0110\u0103ng nh\u1eadp")),s.a.createElement("li",null,s.a.createElement("a",{"data-toggle":"tab",href:"#menu1"},"\u0110\u0103ng k\xfd")))),s.a.createElement("div",{className:"form-group"},s.a.createElement("label",null,"\u0110\u1ecba ch\u1ec9 email"),s.a.createElement("input",{value:this.state.email,onChange:this.handleChange,type:"email",name:"email",className:"form-control",id:"email","aria-describedby":"emailHelp",placeholder:"Enter email"})),s.a.createElement("div",{className:"form-group"},s.a.createElement("label",null,"M\u1eadt kh\u1ea9u"),s.a.createElement("input",{value:this.state.password,onChange:this.handleChange,type:"password",name:"password",className:"form-control",id:"password",placeholder:"Password"})),s.a.createElement("div",{className:"form-group text-center"},s.a.createElement("button",{type:"submit",onClick:this.login,className:"btn btn-primary"},"\u0110\u0103ng nh\u1eadp"),s.a.createElement("button",{onClick:this.signup,style:{marginLeft:"25px"},className:"btn btn-success"},"\u0110\u0103ng k\xfd")))))}}]),t}(n.Component),b=a(13),f=a.n(b),E=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(o.a)(this,Object(m.a)(t).call(this,e))).scrollToBottom=function(){var e=a.refs.messageList,t=e.scrollHeight-e.clientHeight;r.a.findDOMNode(e).scrollTop=t>0?t:0},a.state={authenticated:!1,chatlist:[]},a}return Object(u.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){var e=this;h.database().ref("/chatlist").on("value",function(t){e.setData(t.val())})}},{key:"setData",value:function(e){var t=f()(e).keys().map(function(t){var a=f.a.clone(e[t]);return a.key=t,a}).value();this.setState({chatlist:t})}},{key:"componentDidUpdate",value:function(){this.scrollToBottom()}},{key:"render",value:function(){var e=h.auth().currentUser.email,t=this.state.chatlist.map(function(t,a){if(e)return s.a.createElement("div",{key:a,className:t.email===e?"currentMessenger":"card"},s.a.createElement("div",{className:"blockText"},s.a.createElement("b",{className:"name-key pull-left"}," ",t.email," - "),s.a.createElement("i",{className:"pull-left datetime"}," ",t.date),s.a.createElement("span",{className:"message"},t.message)),s.a.createElement("div",{className:"blockUser"},s.a.createElement("img",{alt:"test",src:"https://image-us.24h.com.vn/upload/1-2018/images/2018-03-25/1521987450-868-thuy-vi-3-1521984812-width650height813.jpg"})),s.a.createElement("span",{className:"textTime"},t.time))});return s.a.createElement("div",{className:"collection",ref:"messageList"},t)}}]),t}(n.Component);E.defaultProps={messageNodes:[]};var y=E,k=function(e){function t(){return Object(i.a)(this,t),Object(o.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(c.a)(t,[{key:"componentWillUnmount",value:function(){this.logout()}},{key:"logout",value:function(){h.auth().signOut()}},{key:"render",value:function(){return s.a.createElement("div",{className:"chat_top"},s.a.createElement("div",{className:"supportInfo"},s.a.createElement("div",{className:"spImg"},s.a.createElement("img",{alt:"test",src:"https://image-us.24h.com.vn/upload/1-2018/images/2018-03-25/1521987450-868-thuy-vi-3-1521984812-width650height813.jpg"})),s.a.createElement("div",{className:"spInfor"},s.a.createElement("p",{className:"spName"},"Chat Room\u25be  ",s.a.createElement("button",{onClick:this.logout},"\u0110\u0103ng xu\u1ea5t")),s.a.createElement("p",{className:"spHotLine"},localStorage.email)),s.a.createElement("p",{className:"logoNhanh"},s.a.createElement("img",{src:"https://www.gstatic.com/mobilesdk/160503_mobilesdk/logo/2x/firebase_28dp.png",alt:"logo"}))))}}]),t}(n.Component),N=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(o.a)(this,Object(m.a)(t).call(this,e))).onChange=a.onChange.bind(Object(p.a)(Object(p.a)(a))),a.onKeyup=a.onKeyup.bind(Object(p.a)(Object(p.a)(a))),a.state={chatlist:""},a}return Object(u.a)(t,e),Object(c.a)(t,[{key:"onChange",value:function(e){this.setState({chatlist:e.target.value})}},{key:"onKeyup",value:function(e){if(13===e.keyCode&&""!==e.target.value.trim()){e.preventDefault();var t=a(18),n=new Date;h.database().ref("/chatlist").push({message:e.target.value.trim(),date:n.toLocaleDateString(),time:n.toLocaleTimeString(),ipAddress:t.address(),email:localStorage.email}),this.setState({chatlist:""})}}},{key:"render",value:function(){return s.a.createElement("form",null,s.a.createElement("textarea",{className:"textarea",placeholder:"G\xf5 v\xe0o \u0111\xe2y v\xe0 nh\u1ea5n <enter>",cols:"100",onChange:this.onChange,onKeyUp:this.onKeyup,value:this.state.chatlist}))}}]),t}(n.Component),O=function(e){function t(){return Object(i.a)(this,t),Object(o.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return s.a.createElement("div",{className:"nChat"},s.a.createElement("div",{className:"chat_header"},s.a.createElement(k,null)),s.a.createElement("div",{className:"chat_body"},s.a.createElement("div",{className:"box_chat"},s.a.createElement(y,{db:h}))),s.a.createElement("div",{className:"chat_footer"},s.a.createElement(N,null)))}}]),t}(n.Component),j=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(o.a)(this,Object(m.a)(t).call(this,e))).state={user:{}},a}return Object(u.a)(t,e),Object(c.a)(t,[{key:"componentWillMount",value:function(){this.clear()}},{key:"componentDidMount",value:function(){this.authListener()}},{key:"clear",value:function(){this.setState({user:null}),localStorage.removeItem("user")}},{key:"authListener",value:function(){var e=this;h.auth().onAuthStateChanged(function(t){if(t){e.setState({user:t});var a=JSON.stringify(t);a=JSON.parse(a),localStorage.setItem("userid",t.uid),localStorage.setItem("email",t.email),localStorage.setItem("chatNhanhAuthenToken",a.stsTokenManager.accessToken)}else e.setState({user:null}),localStorage.removeItem("user")})}},{key:"render",value:function(){return s.a.createElement("div",null,this.state.user?s.a.createElement(O,null):s.a.createElement(v,null))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(s.a.createElement(j,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[22,2,1]]]);
//# sourceMappingURL=main.678cf358.chunk.js.map