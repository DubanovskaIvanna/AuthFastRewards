import React, { useEffect, useState } from "react";

import backendService from "service/backend";

export const AuthContext = React.createContext();

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState();

  useEffect(() => {
    backendService.auth().onAuthStateChanged((data) => {
      console.log(data);
      setCurrentUser(data);
    });
  }, []);

  if (typeof currentUser === "undefined") {
    return "loading...";
  }

  return (
    <AuthContext.Provider value={{ currentUser }}>
      {children}
    </AuthContext.Provider>
  );
};
