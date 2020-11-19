import React from "react";

import backendService from "service/backend";

const Home = () => {
  return (
    <>
      <h1>Home</h1>
      <button onClick={() => backendService.auth().signOut()}>Sing out</button>
    </>
  );
};

export default Home;
