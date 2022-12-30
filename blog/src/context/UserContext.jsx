import { createContext, useState,useEffect } from "react";

export const UserContext = createContext();

const UserProvider = ({ children }) => {
  const [user, setUser] = useState({ loggedIn: false });

  return (
    <UserContext.Provider value={{user}}>
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
