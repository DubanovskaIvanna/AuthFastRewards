(this.webpackJsonpauthfastrewards=this.webpackJsonpauthfastrewards||[]).push([[0],{32:function(e,t,a){},40:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a(0),s=a.n(r),c=a(22),i=a.n(c),u=(a(32),a(18)),o=a(3),j=a(23),l=(a(33),j.a.initializeApp({apiKey:"AIzaSyAPNNHhRKbJP65WdWFf-t2-7Syr1-Ets3g",authDomain:"authfastrewards.firebaseapp.com",databaseURL:"https://authfastrewards.firebaseio.com",projectId:"authfastrewards",storageBucket:"authfastrewards.appspot.com",messagingSenderId:"951345793161",appId:"1:951345793161:web:e1430d2899a2f19225de58",measurementId:"G-7QHPXQKVZZ"})),b=function(){return Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)("h1",{children:"Home"}),Object(n.jsx)("button",{onClick:function(){return l.auth().signOut()},children:"Sing out"})]})},p=a(11),d=a.n(p),h=a(13),O=a(25),m=s.a.createContext(),x=function(e){var t=e.children,a=Object(r.useState)(null),s=Object(O.a)(a,2),c=s[0],i=s[1];return Object(r.useEffect)((function(){l.auth().onAuthStateChanged(i)}),[]),Object(n.jsx)(m.Provider,{value:{currentUser:c},children:t})},f=Object(o.f)((function(e){var t=e.history,a=Object(r.useCallback)(function(){var e=Object(h.a)(d.a.mark((function e(a){var n,r,s;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a.preventDefault(),n=a.target.elements,r=n.email,s=n.password,e.prev=2,e.next=5,l.auth().signInWithEmailAndPassword(r.value,s.value);case 5:t.push("/"),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(2),alert(e.t0);case 11:case"end":return e.stop()}}),e,null,[[2,8]])})));return function(t){return e.apply(this,arguments)}}(),[t]);return Object(r.useContext)(m).currentUser?Object(n.jsx)(o.a,{to:"/"}):Object(n.jsxs)("div",{children:[Object(n.jsx)("h1",{children:"Log in"}),Object(n.jsxs)("form",{onSubmit:a,children:[Object(n.jsxs)("label",{children:["Email",Object(n.jsx)("input",{name:"email",type:"email",placeholder:"Email"})]}),Object(n.jsxs)("label",{children:["Password",Object(n.jsx)("input",{name:"password",type:"password",placeholder:"Password"})]}),Object(n.jsx)("button",{type:"submit",children:"Log in"})]})]})})),v=Object(o.f)((function(e){var t=e.history,a=Object(r.useCallback)(function(){var e=Object(h.a)(d.a.mark((function e(a){var n,r,s;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a.preventDefault(),n=a.target.elements,r=n.email,s=n.password,e.prev=2,e.next=5,l.auth().createUserWithEmailAndPassword(r.value,s.value);case 5:t.push("/"),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(2),alert(e.t0);case 11:case"end":return e.stop()}}),e,null,[[2,8]])})));return function(t){return e.apply(this,arguments)}}(),[t]);return Object(n.jsxs)("div",{children:[Object(n.jsx)("h1",{children:"Sign up"}),Object(n.jsxs)("form",{onSubmit:a,children:[Object(n.jsxs)("label",{children:["Email",Object(n.jsx)("input",{name:"email",type:"email",placeholder:"Email"})]}),Object(n.jsxs)("label",{children:["Password",Object(n.jsx)("input",{name:"password",type:"password",placeholder:"Password"})]}),Object(n.jsx)("button",{type:"submit",children:"Sign Up"})]})]})})),w=a(14),g=a(26),y=function(e){var t=e.component,a=Object(g.a)(e,["component"]),s=Object(r.useContext)(m).currentUser;return Object(n.jsx)(o.b,Object(w.a)(Object(w.a)({},a),{},{render:function(e){return s?Object(n.jsx)(t,Object(w.a)({},e)):Object(n.jsx)(o.a,{to:"/login"})}}))};var S=function(){return Object(n.jsx)(x,{children:Object(n.jsx)(u.a,{children:Object(n.jsxs)("div",{className:"App",children:[Object(n.jsx)(y,{exact:!0,path:"/",component:b}),Object(n.jsx)(o.b,{path:"/Login.js",component:f}),Object(n.jsx)(o.b,{path:"/SingUp.js",component:v})]})})})};i.a.render(Object(n.jsx)(s.a.StrictMode,{children:Object(n.jsx)(S,{})}),document.getElementById("root"))}},[[40,1,2]]]);
//# sourceMappingURL=main.1f536fc4.chunk.js.map