(this.webpackJsonpauthfastrewards=this.webpackJsonpauthfastrewards||[]).push([[0],{45:function(e,t,a){"use strict";a.r(t);var n=a(3),r=a(1),s=a.n(r),c=a(25),i=a.n(c),u=a(21),o=a(4),j=a(26),l=(a(35),a(38),function(){return Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)("h1",{children:"Home"}),Object(n.jsx)("button",{onClick:function(){return y.auth().signOut()},children:"Sing out"})]})}),b=a(14),p=a.n(b),d=a(17),h=a(28),O=s.a.createContext(),m=function(e){var t=e.children,a=Object(r.useState)(null),s=Object(h.a)(a,2),c=s[0],i=s[1];return Object(r.useEffect)((function(){y.auth().onAuthStateChanged(i)}),[]),Object(n.jsx)(O.Provider,{value:{currentUser:c},children:t})},x=Object(o.f)((function(e){var t=e.history,a=Object(r.useCallback)(function(){var e=Object(d.a)(p.a.mark((function e(a){var n,r,s;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a.preventDefault(),n=a.target.elements,r=n.email,s=n.password,e.prev=2,e.next=5,y.auth().signInWithEmailAndPassword(r.value,s.value);case 5:t.push("/"),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(2),alert(e.t0);case 11:case"end":return e.stop()}}),e,null,[[2,8]])})));return function(t){return e.apply(this,arguments)}}(),[t]);return Object(r.useContext)(O).currentUser?Object(n.jsx)(o.a,{to:"/"}):Object(n.jsxs)("div",{children:[Object(n.jsx)("h1",{children:"Log in"}),Object(n.jsxs)("form",{onSubmit:a,children:[Object(n.jsxs)("label",{children:["Email",Object(n.jsx)("input",{name:"email",type:"email",placeholder:"Email"})]}),Object(n.jsxs)("label",{children:["Password",Object(n.jsx)("input",{name:"password",type:"password",placeholder:"Password"})]}),Object(n.jsx)("button",{type:"submit",children:"Log in"})]})]})})),f=Object(o.f)((function(e){var t=e.history,a=Object(r.useCallback)(function(){var e=Object(d.a)(p.a.mark((function e(a){var n,r,s;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a.preventDefault(),n=a.target.elements,r=n.email,s=n.password,e.prev=2,e.next=5,y.auth().createUserWithEmailAndPassword(r.value,s.value);case 5:t.push("/"),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(2),alert(e.t0);case 11:case"end":return e.stop()}}),e,null,[[2,8]])})));return function(t){return e.apply(this,arguments)}}(),[t]);return Object(n.jsxs)("div",{children:[Object(n.jsx)("h1",{children:"Sign up"}),Object(n.jsxs)("form",{onSubmit:a,children:[Object(n.jsxs)("label",{children:["Email",Object(n.jsx)("input",{name:"email",type:"email",placeholder:"Email"})]}),Object(n.jsxs)("label",{children:["Password",Object(n.jsx)("input",{name:"password",type:"password",placeholder:"Password"})]}),Object(n.jsx)("button",{type:"submit",children:"Sign Up"})]})]})})),v=a(18),w=a(29),g=function(e){var t=e.component,a=Object(w.a)(e,["component"]),s=Object(r.useContext)(O).currentUser;return Object(n.jsx)(o.b,Object(v.a)(Object(v.a)({},a),{},{render:function(e){return s?Object(n.jsx)(t,Object(v.a)({},e)):Object(n.jsx)(o.a,{to:"/login"})}}))};j.a.initializeApp({apiKey:"AIzaSyAPNNHhRKbJP65WdWFf-t2-7Syr1-Ets3g",authDomain:"authfastrewards.firebaseapp.com",databaseURL:"https://authfastrewards.firebaseio.com",projectId:"authfastrewards",storageBucket:"authfastrewards.appspot.com",messagingSenderId:"951345793161",appId:"1:951345793161:web:e1430d2899a2f19225de58",measurementId:"G-7QHPXQKVZZ"});var y=function(){return Object(n.jsx)(m,{children:Object(n.jsx)(u.a,{children:Object(n.jsxs)("div",{className:"App",children:[Object(n.jsx)(g,{exact:!0,path:"/",component:l}),Object(n.jsx)(o.b,{path:"/Login.js",component:x}),Object(n.jsx)(o.b,{path:"/SingUp.js",component:f})]})})})};i.a.render(Object(n.jsx)(s.a.StrictMode,{children:Object(n.jsx)(y,{})}),document.getElementById("root"))}},[[45,1,2]]]);
//# sourceMappingURL=main.345bb978.chunk.js.map