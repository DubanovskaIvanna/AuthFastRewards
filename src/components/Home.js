import React from "react";
import app from "./app.js";

const Home = () => {
     return (
         <>
        <h1>Home</h1>
        <button onClick={() => app.auth().signOut()}>Sing out</button>
        </>
     )    
}

 export default Home;