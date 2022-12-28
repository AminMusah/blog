import React from "react";
import Post from "./Posts";
import Sidebar from "./Sidebar";
import Widgets from "./Widgets";


function Home() {
  return (
    <div className="flex w-5/6 mx-auto">
      
      <Sidebar />
      <section className="flex flex-col w-full border-x border-slate-100 p-2">
        <div className="flex items-start ">
          <img src="/assets/360_F_346839683_6nAPzbhpSkIpb8pmAwufkC7c5eD7wYws.jpg" alt="" className="rounded-full h-8 w-8  mr-2" />
          <div className="flex justify-end items-end h-32 flex-col w-full">
            <input type="text" name="" id="" className="h-full w-full  outline-none rounded" placeholder="What's happening?"/>
            <button className="py-2 px-6 bg-slate-100 font-poppins font-medium text-[15px] text-primary outline-none mt-8 mb-6 rounded-[10px]">Post</button>
          </div>
        </div>
        <div className="flex flex-col">
         <Post/>
        </div>
      </section>
      <Widgets/>
    </div>
  );
}

export default Home;
