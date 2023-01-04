import React from "react";
import SearchLineIcon from "remixicon-react/SearchLineIcon";
import MoreLineIcon from "remixicon-react/MoreLineIcon";
import LogoutBoxLineIcon from "remixicon-react/LogoutBoxLineIcon";
import LoginCircleLineIcon from "remixicon-react/LoginCircleLineIcon";
import Edit2LineIcon from "remixicon-react/Edit2LineIcon";
import { Link } from "react-router-dom";
import { useState, useContext } from "react";
import { UserContext } from "../context/UserContext";

function Header() {
  const [toggle, setToggle] = useState(false);

  let msg = useContext(UserContext);

  const handleLogout = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    msg = true
    window.location.replace("/login");
  };


  return (
    <div className="w-full border-b border-slate-100 fixed left-0 z-10 ">
      <div className="lg:w-2/3 mx-auto flex  justify-between py-6 lg:px-8 px-4 items-center h-[40px] bg-white z-20">
        <h1>
          <Link to="/">Blog.</Link>
        </h1>
        <div className="w-1/2 mx-auto h-[35px] flex items-center relative">
          <input
            type="text"
            className="container h-full rounded-full outline-none border border-gray-100 pl-12"
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
              }  bg-slate-200 mx-4 my-2 rounded-xl sidebar`}
            >
              <ul className="list-none flex flex-col">
                {msg.user.loggedIn ? (
                  <li className="font-normal cursor-pointer text-[10px] py-2 px-4 mx-auto flex justify-center items-center hover:bg-slate-100 w-full rounded-xl  ">
                    <a href="#" className="flex items-center">
                      <LogoutBoxLineIcon size={10} />
                      <span className="ml-2" onClick={handleLogout}>
                        Log out
                      </span>
                    </a>{" "}
                  </li>
                ) : (
                  <div>
                    <li className="font-normal cursor-pointer text-[10px] mb-4 py-2 px-4 mx-auto flex justify-center items-center hover:bg-slate-100 w-full rounded-xl  ">
                      <Link to="/register" className="flex items-center">
                        <Edit2LineIcon size={10} />
                        <span className="ml-2">Register</span>
                      </Link>{" "}
                    </li>
                    <li className="font-normal cursor-pointer text-[10px] mb-4 py-2 px-4 mx-auto flex justify-center items-center hover:bg-slate-100 w-full rounded-xl  ">
                      <Link to="/login" className="flex items-center">
                        <LoginCircleLineIcon size={10} />
                        <span className="ml-2">Login</span>
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
