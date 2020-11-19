import React from "react";
import {
  BrowserRouter as Router,
  Route,
} from "react-router-dom";

import firebase from 'firebase/app';

import 'firebase/firestore';
import 'firebase/auth';

import Home from "./components/Home.js";
import Login from "./components/Login.js";
import SingUp from "./components/SingUp.js";
import { AuthProvider } from "./components/Auth.js";
import PrivateRoute from "./components/PrivateRoute.js";



firebase.initializeApp({
  apiKey: "AIzaSyAPNNHhRKbJP65WdWFf-t2-7Syr1-Ets3g",
  authDomain: "authfastrewards.firebaseapp.com",
  databaseURL: "https://authfastrewards.firebaseio.com",
  projectId: "authfastrewards",
  storageBucket: "authfastrewards.appspot.com",
  messagingSenderId: "951345793161",
  appId: "1:951345793161:web:e1430d2899a2f19225de58",
  measurementId: "G-7QHPXQKVZZ"

})

function App() {
  
  return (
    <AuthProvider>
      <Router>
        <div className="App">
          <PrivateRoute exact path="/" component={Home}/>
          {/* <Route  path ="/" exact component={Home}></Route> */}
          <Route  path ="/Login.js" component={Login}></Route>
          <Route  path ="/SingUp.js" component={SingUp}></Route>
          {/* <header className="App-header">
          <section>?{user ? <TrackTime/>:<SingIn/>}
          </section>
          <p>Let's Add Routing</p>
          </header> */}
        </div>
        
      </Router>
    </AuthProvider>
  );
}

export default App;
