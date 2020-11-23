import React, { useCallback } from "react";
import { Link } from "react-router-dom";

import backendService from "service/backend";

import "../App.css";

const Login = () => {
  const handleLogin = useCallback(async (event) => {
    event.preventDefault();
    const { email, password } = event.target.elements;
    try {
      await backendService
        .auth()
        .signInWithEmailAndPassword(email.value, password.value);
    } catch (error) {
      alert(error);
    }
  }, []);

  return (
    <div className="loginform">
      <h1 className="h1l">Login</h1>
      <form  onSubmit={handleLogin}>
        <label className="labl1">
          Email
          <input  className="inpl1" name="email" type="email" placeholder="Email" />
        </label>
        <label className="labl2">
          Password
          <input className="inpl2" name="password" type="password" placeholder="Password" />
        </label>
        <button className="btnl" type="submit">Log in</button>
      </form>
      <Link className="linkl" to="/signup">create account</Link>
    </div>
  );
};

export default Login;
