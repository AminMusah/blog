import { createContext, useState,useEffect } from "react";

export const UserContext = createContext();

const UserProvider = ({ children }) => {
  const [auth, setAuth] = useState(false);

  return (
    <UserContext.Provider value={{auth,setAuth}}>
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
