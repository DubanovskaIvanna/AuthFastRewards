import React from "react";
import { BrowserRouter as Router } from "react-router-dom";

import { AuthProvider } from "components/Auth";
import PrivateRoute from "components/PrivateRoute";
import PublicRoute from "components/PublicRoute";

import Home from "pages/Home";
import Login from "pages/Login";
import SingUp from "pages/SingUp";

import "./App.css";

function App() {
  return (
    <AuthProvider>
      <Router>
        <PrivateRoute exact path="/" component={Home} />
        <PublicRoute path="/login" component={Login} />
        <PublicRoute path="/signup" component={SingUp} />
      </Router>
    </AuthProvider>
  );
}

export default App;
