import React from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  Route,
} from "react-router-dom";

import Home from "./components/Home.js";
import Login from "./components/Login.js";
import SingUp from "./components/SingUp.js";
import { AuthProvider } from "./components/Auth.js";
import PrivateRoute from "./components/PrivateRoute.js";


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
