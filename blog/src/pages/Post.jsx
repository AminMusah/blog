import axios from "axios";
import React, { useEffect, useState } from "react";
import MoreLineIcon from "remixicon-react/MoreLineIcon";
import LogoutBoxLineIcon from "remixicon-react/LogoutBoxLineIcon";
import DeleteBin5FillIcon from "remixicon-react/DeleteBin5FillIcon";
import QuillPenLineIcon from "remixicon-react/QuillPenLineIcon";
import { useParams } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import Widgets from "../components/Widgets";
import Header from "../components/Header";

function Post() {
  const { id } = useParams();
  const [post, setPost] = useState([]);
  const [toggle, setToggle] = useState(false);
  const [user, setUser] = useState("");

  const userId = localStorage.getItem("user");

  useEffect(() => {
    const getUser = async () => {
      const res = await axios.get(`/api/user/${userId}`);
      setUser(res.data.name);
    };
    getUser();
  }, []);

  useEffect(() => {
    const getPost = async () => {
      const res = await axios.get(`/api/post/${id}`);
      setPost(res.data);
    };
    getPost();
  }, []);

  const handleDelete = async () => {
    try {
      await axios.delete(`/api/deletepost/${id}`, {data:{id:id}})
      window.location.replace('/')
    } catch (error) {
      
    }
  }
  return (
    <div className="flex w-5/6 mx-auto">
      <Header/>
      <Sidebar />
      <section className="flex flex-col w-full border-x border-slate-100 p-2 pt-20">
        <div className="flex flex-col">
          <div>
            <div className="flex flex-col border border-slate-100 p-3 rounded-xl mb-4">
              <div className="flex pb-2 justify-between relative">
                <div className="flex pb-2 ">
                  <img
                    src="/assets/360_F_346839683_6nAPzbhpSkIpb8pmAwufkC7c5eD7wYws.jpg"
                    className="rounded-full h-8 w-8"
                    alt=""
                  />
                  <span>{post.name}</span>
                </div>

                <button className="" onClick={() => setToggle((prev) => !prev)}>
                  <MoreLineIcon size={15} />
                </button>

                {/* <nav className="flex items-center absolute top-8 right-[-2rem]">
                  <div className="flex items-center">
                    <div
                      className={`${
                        toggle ? "flex" : "hidden"
                      }  mx-4 my-2 rounded-xl sidebar`}
                    >
                      <ul className="list-none flex flex-col">
                        {post.name === user?.name && (
                          <div>
                            <li className="font-normal cursor-pointer text-[10px] mb-4 py-2 px-4 mx-auto flex justify-center items-center hover:bg-slate-100 w-full rounded-3xl ">
                              <a href="#" className="flex items-center">
                                <QuillPenLineIcon size={10} />
                                <span className="ml-2">Edit</span>
                              </a>
                            </li>
                            <li className="font-normal cursor-pointer text-[10px] mb-4 py-2 px-4 mx-auto flex justify-center items-center hover:bg-slate-100 w-full rounded-3xl " onClick={handleDelete}>
                              <a href="#" className="flex items-center">
                                <DeleteBin5FillIcon size={10} />
                                <span className="ml-2">Delete</span>
                              </a>
                            </li>
                          </div>
                        )}
                      </ul>
                    </div>
                  </div>
                </nav> */}
                {post.name === user && (
                <div className="list-none flex">
                  <div className="font-normal cursor-pointer text-[10px] py-2 px-4 mx-auto flex justify-center items-center hover:bg-slate-100 w-full rounded-3xl ">
                    <span  className="flex items-center">
                      <QuillPenLineIcon size={10} />
                      <span className="ml-2">Edit</span>
                    </span>
                  </div>
                  <div className="font-normal cursor-pointer text-[10px] py-2 px-4 mx-auto flex justify-center items-center hover:bg-slate-100 w-full rounded-3xl " onClick={handleDelete}>
                    <span className="flex items-center">
                      <DeleteBin5FillIcon size={10} />
                      <span className="ml-2">Delete</span>
                    </span>
                  </div>
                </div>
              )}
              </div>
              <div>
                <p>{post.post}</p>
                <span className="text-xs">
                  {new Date(post.date).toDateString()}
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Widgets />
    </div>
  );
}

export default Post;
