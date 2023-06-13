import React, { createContext, useState } from 'react'
export const AuthContext= createContext();
export default function AuthcontextProvider({children}) {
    const [isLogged, setIsLogged]=useState(false)
    const login = () => {
        setIsLogged(true);
      };
    
      const logout = () => {
        setIsLogged(false);
      };
      return (
        <AuthContext.Provider value={{ isLogged, login, logout }}>
          {children}
        </AuthContext.Provider>
      );
}
