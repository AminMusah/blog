import React from "react";
import SearchLineIcon from "remixicon-react/SearchLineIcon";
import MoreLineIcon from "remixicon-react/MoreLineIcon";
import LogoutBoxLineIcon from "remixicon-react/LogoutBoxLineIcon";
import LoginCircleLineIcon from "remixicon-react/LoginCircleLineIcon";
import UserLineIcon from "remixicon-react/UserLineIcon";
import Edit2LineIcon from "remixicon-react/Edit2LineIcon";
import { Link } from "react-router-dom";
import { useState, useContext, useEffect } from "react";
import { UserContext } from "../context/UserContext";
import axios from "axios";
import production from "../../base";

function Header() {
  const [toggle, setToggle] = useState(false);
  const [user, setUser] = useState("");
  const userId = localStorage.getItem("user");

  let { isAuth, setIsAuth } = useContext(UserContext);

  useEffect(() => {
    const getUser = async () => {
      const res = await axios.get(`${production}/api/user/${userId}`);
      setUser(res.data.name);
    };
    getUser();
  }, [user]);

  const handleLogout = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    setIsAuth(false);
    localStorage.removeItem("isAuth", isAuth);

    window.location.replace("/login");
  };

  return (
    <div className="w-full z-30 border-b bg-white fixed left-0 ">
      <div className="lg:w-2/3 mx-auto flex  justify-between py-6 lg:px-8 px-4 items-center h-[40px] z-20">
        <h1>
          <Link to="/">Blog.</Link>
        </h1>

        <div className="w-1/2 mx-auto h-[35px] flex items-center relative">
          <input
            type="text"
            className="container h-full rounded-full bg-transparent outline-none border  pl-12"
          />
          <button className="absolute p-4  text-slate-500 ">
            <SearchLineIcon size={15} />
          </button>
        </div>
        <button className="" onClick={() => setToggle((prev) => !prev)}>
          <MoreLineIcon />
        </button>

        <nav className="flex items-center absolute top-10 lg:right-[15rem] right-2">
          <div className="flex items-center">
            <div
              className={`${
                toggle ? "flex" : "hidden"
              }  bg-black mx-4 my-3 rounded-xl sidebar`}
            >
              <ul className="list-none flex flex-col">
                {isAuth ? (
                  <div>
                    <li className="font-normal cursor-pointer text-[10px] py-2 px-4 mx-auto flex justify-center items-center hover:bg-[#0d1117] w-full rounded-xl  ">
                      <a href="#" className="flex items-center">
                        <LogoutBoxLineIcon size={10} color="white" />
                        <span
                          className="ml-2 text-white"
                          onClick={handleLogout}
                        >
                          Log out
                        </span>
                      </a>{" "}
                    </li>
                    <li className="font-normal cursor-pointer text-[10px] py-2 px-4 mx-auto flex justify-center items-center hover:bg-[#0d1117] w-full rounded-xl  ">
                      <Link to="/profile" className="flex items-center">
                        <UserLineIcon size={10} color="white" />
                        <span className="ml-2 text-white">Profile</span>
                      </Link>{" "}
                    </li>
                  </div>
                ) : (
                  <div>
                    <li className="font-normal cursor-pointer text-[10px] mb-4 py-2 px-4 mx-auto flex justify-center items-center hover:bg-[#0d1117] w-full rounded-xl  ">
                      <Link to="/register" className="flex items-center">
                        <Edit2LineIcon size={10} color="white" />
                        <span className="ml-2 text-white">Register</span>
                      </Link>{" "}
                    </li>
                    <li className="font-normal cursor-pointer text-[10px] mb-4 py-2 px-4 mx-auto flex justify-center items-center hover:bg-[#0d1117] w-full rounded-xl  ">
                      <Link to="/login" className="flex items-center">
                        <LoginCircleLineIcon size={10} color="white" />
                        <span className="ml-2 text-white">Login</span>
                      </Link>{" "}
                    </li>
                  </div>
                )}
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
}

export default Header;
