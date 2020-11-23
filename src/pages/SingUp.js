import React, { useCallback } from "react";
import { Link } from "react-router-dom";

import backendService from "service/backend";

import "../App.css";

const SignUp = () => {
  const handleSignUp = useCallback(async (event) => {
    event.preventDefault();
    const { email, password } = event.target.elements;
    try {
      await backendService
        .auth()
        .createUserWithEmailAndPassword(email.value, password.value);
    } catch (error) {
      alert(error);
    }
  }, []);

  return (
    <div className="loginform">
      <h1 className="h1l" >Sign up</h1>
      <form onSubmit={handleSignUp}>
        <label className="labl1" >
          Email
          <input className="inpl1" name="email" type="email" placeholder="Email" />
        </label>
        <label className="labl2" >
          Password
          <input className="inpl2" name="password" type="password" placeholder="Password" />
        </label>
        <button  className="btnl" type="submit">Sign Up</button>
      </form>
      <Link className="linkl" to="/login">go to login</Link>
    </div>
  );
};

export default SignUp;
