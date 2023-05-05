import React from "react";
import HomeLineIcon from "remixicon-react/HomeLineIcon";
import UserLineIcon from "remixicon-react/UserLineIcon";
import MoreLineIcon from "remixicon-react/MoreLineIcon";
import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <div className="hidden z-30 flex-col fixed left-0 h-full p-4 lg:flex items-end pt-20">
      <Link
        to="/"
        className="py-4 px-4 flex items-center hover:text-[#161b22] mb-4 h-10 rounded-full cursor-pointer"
      >
        <span>
          <HomeLineIcon size={15} />
        </span>
        <span className="pl-4 ">Home</span>
      </Link>
      <Link
        to="/profile"
        className="py-4 px-4 flex items-center hover:text-[#161b22] mb-4 h-10 rounded-full cursor-pointer"
      >
        <span>
          <UserLineIcon size={15} />
        </span>
        <span className="pl-4">Profile</span>
      </Link>
      <div className="py-4 px-4 flex items-center hover:text-[#161b22] mb-4 h-10 rounded-full cursor-pointer">
        <span>
          <MoreLineIcon size={15} />
        </span>
        <span className="pl-4">More</span>
      </div>
    </div>
  );
}

export default Sidebar;
