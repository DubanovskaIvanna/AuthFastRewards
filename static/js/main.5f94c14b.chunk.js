(this.webpackJsonpauthfastrewards=this.webpackJsonpauthfastrewards||[]).push([[0],{39:function(e,t,n){},40:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n(0),c=n.n(r),s=n(23),i=n.n(s),o=n(10),u=n(26),j=n(24),l=(n(32),j.a.initializeApp({apiKey:"AIzaSyAPNNHhRKbJP65WdWFf-t2-7Syr1-Ets3g",authDomain:"authfastrewards.firebaseapp.com",databaseURL:"https://authfastrewards.firebaseio.com",projectId:"authfastrewards",storageBucket:"authfastrewards.appspot.com",messagingSenderId:"951345793161",appId:"1:951345793161:web:e1430d2899a2f19225de58",measurementId:"G-7QHPXQKVZZ"})),b=c.a.createContext(),d=function(e){var t=e.children,n=Object(r.useState)(),c=Object(u.a)(n,2),s=c[0],i=c[1];return Object(r.useEffect)((function(){l.auth().onAuthStateChanged((function(e){console.log(e),i(e)}))}),[]),"undefined"===typeof s?"loading...":Object(a.jsx)(b.Provider,{value:{currentUser:s},children:t})},p=n(11),h=n(16),O=n(3),x=function(e){var t=e.component,n=Object(h.a)(e,["component"]),c=Object(r.useContext)(b).currentUser;return Object(a.jsx)(O.b,Object(p.a)(Object(p.a)({},n),{},{render:function(e){return c?Object(a.jsx)(t,Object(p.a)({},e)):Object(a.jsx)(O.a,{to:"/login"})}}))},m=function(e){var t=e.component,n=Object(h.a)(e,["component"]),c=Object(r.useContext)(b).currentUser;return Object(a.jsx)(O.b,Object(p.a)(Object(p.a)({},n),{},{render:function(e){return c?Object(a.jsx)(O.a,{to:"/"}):Object(a.jsx)(t,Object(p.a)({},e))}}))},f=function(){return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)("h1",{children:"Home"}),Object(a.jsx)("button",{onClick:function(){return l.auth().signOut()},children:"Sing out"})]})},v=n(13),g=n.n(v),w=n(15),y=function(){var e=Object(r.useCallback)(function(){var e=Object(w.a)(g.a.mark((function e(t){var n,a,r;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),n=t.target.elements,a=n.email,r=n.password,e.prev=2,e.next=5,l.auth().signInWithEmailAndPassword(a.value,r.value);case 5:e.next=10;break;case 7:e.prev=7,e.t0=e.catch(2),alert(e.t0);case 10:case"end":return e.stop()}}),e,null,[[2,7]])})));return function(t){return e.apply(this,arguments)}}(),[]);return Object(a.jsxs)("div",{children:[Object(a.jsx)("h1",{children:"Log in"}),Object(a.jsxs)("form",{onSubmit:e,children:[Object(a.jsxs)("label",{children:["Email",Object(a.jsx)("input",{name:"email",type:"email",placeholder:"Email"})]}),Object(a.jsxs)("label",{children:["Password",Object(a.jsx)("input",{name:"password",type:"password",placeholder:"Password"})]}),Object(a.jsx)("button",{type:"submit",children:"Log in"})]}),Object(a.jsx)(o.b,{to:"/signup",children:"create account"})]})},S=function(){var e=Object(r.useCallback)(function(){var e=Object(w.a)(g.a.mark((function e(t){var n,a,r;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),n=t.target.elements,a=n.email,r=n.password,e.prev=2,e.next=5,l.auth().createUserWithEmailAndPassword(a.value,r.value);case 5:e.next=10;break;case 7:e.prev=7,e.t0=e.catch(2),alert(e.t0);case 10:case"end":return e.stop()}}),e,null,[[2,7]])})));return function(t){return e.apply(this,arguments)}}(),[]);return Object(a.jsxs)("div",{children:[Object(a.jsx)("h1",{children:"Sign up"}),Object(a.jsxs)("form",{onSubmit:e,children:[Object(a.jsxs)("label",{children:["Email",Object(a.jsx)("input",{name:"email",type:"email",placeholder:"Email"})]}),Object(a.jsxs)("label",{children:["Password",Object(a.jsx)("input",{name:"password",type:"password",placeholder:"Password"})]}),Object(a.jsx)("button",{type:"submit",children:"Sign Up"})]}),Object(a.jsx)(o.b,{to:"/login",children:"go to login"})]})};n(39);var k=function(){return Object(a.jsx)(d,{children:Object(a.jsxs)(o.a,{children:[Object(a.jsx)(x,{exact:!0,path:"/",component:f}),Object(a.jsx)(m,{path:"/login",component:y}),Object(a.jsx)(m,{path:"/signup",component:S})]})})};i.a.render(Object(a.jsx)(c.a.StrictMode,{children:Object(a.jsx)(k,{})}),document.getElementById("root"))}},[[40,1,2]]]);
//# sourceMappingURL=main.5f94c14b.chunk.js.map