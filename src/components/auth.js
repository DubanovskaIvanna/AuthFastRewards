import React, { useEffect, useState} from "react";
import app from '../App.js';

export const AuthContext = React.createContext ();

export const AuthProvider = ({children}) => {
    const [currentUser, setCurrentUser] = useState(null);
    // const [pending, setPending] = useState(true);
  
    useEffect(() => {
      app.auth().onAuthStateChanged(setCurrentUser); 
    //   => {
    //     setCurrentUser(user)
    //     setPending(false)
    //   });
    }, []);
    return (
                <AuthContext.Provider
                    value={{
                        currentUser
                    }}
                >
                    {children}
                </AuthContext.Provider>    
            );
    // if(pending){
    //   return <>Loading...</>
    // }
    
       
};