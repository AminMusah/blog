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
import production from "../../base";

function Post({ loading, setLoading }) {
  const { id } = useParams();
  const [post, setPost] = useState("");
  const [toggle, setToggle] = useState(false);
  const [user, setUser] = useState("");
  const [update, setUpdate] = useState(false);
  const [newPost, setNewPost] = useState("");

  const userId = localStorage.getItem("user");

  useEffect(() => {
    const getUser = async () => {
      const res = await axios.get(`${production}/api/user/${userId}`);
      setUser(res.data.name);
    };
    getUser();
  }, []);

  useEffect(() => {
    const getPost = async () => {
      const res = await axios.get(`${production}/api/post/${id}`);
      setPost(res.data);
      setNewPost(res.data.post);
    };
    getPost();
  }, []);

  const handleDelete = async () => {
    try {
      await axios.delete(`${production}/api/deletepost/${id}`, {
        data: { id: id },
      });
      window.location.replace("/");
    } catch (error) {}
  };

  const handleUpdate = async () => {
    try {
      await axios.put(
        `${production}/api/updatepost/${id}`,
      {
          id: id,
          name: user.name,
          post: newPost,
        }
      );

      window.location.reload();
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="flex lg:w-5/6 lg:mx-auto">
      <Header />
      <Sidebar />
      <section className="flex flex-col w-full z-20 p-2 pt-20 sm:w-4/6 mx-auto">
        <div className="flex flex-col">
          <div className=" ">
            <div className="flex flex-col bg-[#999ef9] p-3 rounded-xl mb-4">
              <div className="flex pb-2 justify-between relative">
                <div className="flex pb-2 ">
                  <img
                    src="/assets/360_F_346839683_6nAPzbhpSkIpb8pmAwufkC7c5eD7wYws.jpg"
                    className="rounded-full h-8 w-8"
                    alt=""
                  />
                  <span className="pl-2">{post.name}</span>
                </div>

                {/* <button className="" onClick={() => setToggle((prev) => !prev)}>
                  <MoreLineIcon size={15} />
                </button> */}

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
                    <div
                      className="font-normal cursor-pointer text-[10px] py-2 px-4 mx-auto flex justify-center items-center hover:bg-[#999ef9]  w-full rounded-3xl "
                      onClick={() => {
                        setUpdate(true);
                      }}
                    >
                      <span className="flex items-center">
                        <QuillPenLineIcon size={10} />
                        <span className="ml-2">Edit</span>
                      </span>
                    </div>
                    <div
                      className="font-normal cursor-pointer text-[10px] py-2 px-4 mx-auto flex justify-center items-center hover:bg-[#999ef9]  w-full rounded-3xl "
                      onClick={handleDelete}
                    >
                      <span className="flex items-center">
                        <DeleteBin5FillIcon size={10} />
                        <span className="ml-2">Delete</span>
                      </span>
                    </div>
                  </div>
                )}
              </div>
              <div className="flex flex-col">
                {update ? (
                  <input
                    value={newPost}
                    className="h-16 p-2 bg-transparent border-0 outline-0"
                    autoFocus
                    onChange={(e) => setNewPost(e.target.value)}
                  />
                ) : (
                  <p>{post.post}</p>
                )}
                {update ? (
                  <button
                    className="font-normal cursor-pointer text-8 mb-4 py-2 px-4 mx-auto flex justify-center items-center border-[#9499fe] hover:border-[#999ef9] w-1/3 mt-4 rounded-3xl"
                    onClick={handleUpdate}
                  >
                    Update
                  </button>
                ) : (
                  ""
                )}
                <span className="text-xs mt-2">
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
