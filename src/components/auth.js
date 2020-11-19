import React, { useEffect, useState} from "react";
import app from './app.js';

export const AuthContext = React.createContext ();

export const AuthProvider = ({children}) => {
    const [currentUser, setCurrentUser] = userState(null);

    userEffect(() => {
        app.auth().onAuthStateChanged(setCurrentUser);
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
};