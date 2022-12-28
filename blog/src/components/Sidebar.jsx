import React from "react";
import HomeLineIcon from 'remixicon-react/HomeLineIcon'
import UserLineIcon from 'remixicon-react/UserLineIcon'
import MoreLineIcon from 'remixicon-react/MoreLineIcon'
import { Link } from "react-router-dom"




function Sidebar() {
  return (
    <div className="flex flex-col h-full p-4">
      <Link to="/" className="py-4 px-4 mx-auto flex items-center hover:bg-gray-100 mb-4 h-10 rounded-full cursor-pointer">
        <span><HomeLineIcon size={15}/></span>
        <span className="pl-4">home</span>
      </Link>
      <Link to="/profile" className="py-4 px-4 mx-auto flex items-center hover:bg-gray-100 mb-4 h-10 rounded-full cursor-pointer">
        <span><UserLineIcon  size={15}/></span>
        <span className="pl-4">profile</span>
      </Link>
      <div className="py-4 px-4 mx-auto flex items-center hover:bg-gray-100 mb-4 h-10 rounded-full cursor-pointer">
        <span><MoreLineIcon  size={15}/></span>
        <span className="pl-4">more</span>
      </div>
    </div>
  );
}

export default Sidebar;
