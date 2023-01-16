import { createContext, useState,useEffect } from "react";

export const UserContext = createContext();

const UserProvider = ({ children }) => {
  const [isAuth, setIsAuth] = useState(() => {
    const storedValue = localStorage.getItem('isAuth');
    return storedValue ? JSON.parse(storedValue) : false;
  });

  useEffect(() => {
    localStorage.setItem('isAuth', JSON.stringify(isAuth));
  }, [isAuth]);

  return (
    <UserContext.Provider value={{isAuth,setIsAuth}}>
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
