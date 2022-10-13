import { createContext, useState } from "react";
export const Authcontext = createContext();

const AuthContextProvider = ({ children }) => {
    const [isAuth, setIsAuth] = useState(false);
  
    const handleLogin = (body) => {
      fetch(`http://localhost:4000/User`, {
        method: "POST",
        body: JSON.stringify(body),
        headers: {
          "Content-Type": "application/json"
        }
      })
        .then(() => setIsAuth(true))
        .catch(() => setIsAuth(false));
    };
  
  
  
    return (
      <Authcontext.Provider value={{ isAuth, handleLogin }}>
        {children}
      </Authcontext.Provider>
    );
  };
  
  export default AuthContextProvider;
  