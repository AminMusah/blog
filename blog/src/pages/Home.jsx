import React from "react";
import { useState,useEffect } from "react";
import Post from "../components/Posts";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import Widgets from "../components/Widgets";
import axios from 'axios'


function Home() {
  const [createPost, setCreatePost] = useState('')
  const [user, setUser] = useState("");

  const userId = localStorage.getItem("user");

  useEffect(() => {
    const getUser = async () => {
      const res = await axios.get(`/api/user/${userId}`);
      setUser(res.data.name);
    };
    getUser();
  }, []);

  const create = async (e) => {
    try {
      e.preventDefault();
      const res = await axios.post("/api/createpost", {
        name: user,
        post: createPost,
      });
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="flex w-full lg:w-2/3 lg:mx-auto">
      <Header/>
      <Sidebar />
      <section className="flex flex-col w-full border-x border-slate-100 p-2 pt-20">
        <div className="flex items-start ">
          <img src="/assets/360_F_346839683_6nAPzbhpSkIpb8pmAwufkC7c5eD7wYws.jpg" alt="" className="rounded-full h-8 w-8  mr-2" />
          <div className="flex justify-end items-end h-32 flex-col w-full">
            <input type="text" name="" id="" className="h-full w-full  outline-none rounded" placeholder="What's happening?" onChange={(e) => setCreatePost(e.target.value)}/>
            <button className="py-2 px-6 bg-slate-100 font-poppins font-medium text-[15px] text-primary outline-none mt-8 mb-6 rounded-[10px]" onClick={create}>Post</button>
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