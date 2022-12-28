import React from "react";
import SearchLineIcon from "remixicon-react/SearchLineIcon";
import MoreLineIcon from "remixicon-react/MoreLineIcon";
import LogoutBoxLineIcon from "remixicon-react/LogoutBoxLineIcon";
import DeleteBin5FillIcon from "remixicon-react/DeleteBin5FillIcon";
import QuillPenLineIcon from "remixicon-react/QuillPenLineIcon";
import { Link } from "react-router-dom";
import { useState } from "react";

function Header() {
  const [toggle, setToggle] = useState(false);

  return (
    <div className="w-full border-b border-slate-100">
      <div className=" w-5/6 mx-auto flex  justify-between py-6 px-2 items-center h-[40px] ">
        <h1>
          <Link to="/">Blog.</Link>
        </h1>
        <div className="w-[70%] h-[35px] flex items-center relative">
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
        <nav className="flex items-center absolute top-10  right-[6rem]">
          <div className="flex items-center">
            <div
              className={`${
                toggle ? "flex" : "hidden"
              }  mx-4 my-2 rounded-xl sidebar`}
            >
              <ul className="list-none flex flex-col">
                <li className="font-normal cursor-pointer text-[10px] mb-4 py-2 px-4 mx-auto flex justify-center items-center hover:bg-slate-100 w-full rounded-3xl ">
                  <a href="#" className="flex items-center">
                    <QuillPenLineIcon size={10} />
                    <span className="ml-2">Edit</span>
                  </a>
                </li>
                <li className="font-normal cursor-pointer text-[10px] mb-4 py-2 px-4 mx-auto flex justify-center items-center hover:bg-slate-100 w-full rounded-3xl ">
                  <a href="#" className="flex items-center">
                    <DeleteBin5FillIcon size={10} />
                    <span className="ml-2">Delete</span>
                  </a>
                </li>
                <li className="font-normal cursor-pointer text-[10px] mb-4 py-2 px-4 mx-auto flex justify-center items-center hover:bg-slate-100 w-full rounded-3xl  ">
                  <a href="#" className="flex items-center">
                    <LogoutBoxLineIcon size={10} />
                    <span className="ml-2">Log out</span>
                  </a>{" "}
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
}

export default Header;
