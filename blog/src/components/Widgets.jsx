import React from "react";

function Widgets() {
  return (
    <div className="hidden lg:flex flex-col h-full p-4 pt-20">
      <div className="py-4 px-4 mx-auto flex justify-center  items-center hover:bg-gray-100 mb-4 h-10 rounded-full cursor-pointer">
        <span>icon</span>
        <span className="pl-8">home</span>
      </div>
      <div className="py-4 px-4 mx-auto flex justify-center  items-center hover:bg-gray-100 mb-4 h-10 rounded-full cursor-pointer">
        <span>icon</span>
        <span className="pl-8">profile</span>
      </div>
      <div className="py-4 px-4 mx-auto flex justify-center  items-center hover:bg-gray-100 mb-4 h-10 rounded-full cursor-pointer">
        <span>icon</span>
        <span className="pl-8">more</span>
      </div>
    </div>
  );
}

export default Widgets;
