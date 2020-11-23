import React from "react";

import backendService from "service/backend";
// import clock from ".pictures/clock.png";
import "../App.css";

const Home = () => {
  return (
    <>
    <div className="loginformH1">
      <label id="lablh1" >
          Desctop
      </label>
      <img src="/clock.png" alt ="clock"/>
    </div>
    <div className="loginformH2">
      <label id="lablh2" >
          Mobile
      </label>
      <img src="/clock.png" alt ="clock"/>
    </div>
      <button className="btnh" onClick={() => backendService.auth().signOut()}>Log Out</button>
    </>
  );
};

export default Home;
