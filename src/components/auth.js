import React, { useEffect, useState } from "react";

import backendService from "service/backend";

export const AuthContext = React.createContext();

function whatHour() {
  let d = new Date();
  let n = d.getHours();//13
  // let m = d.getMinutes();//22
  // return console.log(n+":"+m);//fix with minutes
  return n;
} 

function timeForOneSession (d1,d2,logIntime,logOutTime){
  let x, y = 0;
  if( d1 !== d2){
    x= 24 - logIntime;
    y= x + logOutTime; 
  }else {
    y = logOutTime - logIntime;
  }
return y;
}

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState();

  useEffect(() => {
    backendService.auth().onAuthStateChanged((data) => {
      setCurrentUser(data);
    });
  }, []);

  backendService.auth().onAuthStateChanged((data) => {
    if (data){
      let logInHour = whatHour();
      let dfirst = Date();
      console.log('dfirst',dfirst);
      console.log('User Logged in:',currentUser);
      console.log('Log in Hour:', logInHour);
    }else {
      let logOutHour = whatHour();
      console.log('user logged out');
      let dsecond = Date();
      console.log('Log out hour:', logOutHour);
      console.log('dsecond',dsecond);
    //   let timeOne = timeForOneSession(dfirst,dsecond,logInHour,logOutHour);
    //   console.log('Our user:' + currentUser + 'were online -' + timeOne + ' hours.')
    }
  });

  if (typeof currentUser === "undefined") {
    return "loading...";
  }

  return (
    <AuthContext.Provider value={{ currentUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export default (whatHour,timeForOneSession);