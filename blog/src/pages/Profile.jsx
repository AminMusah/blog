import React from "react";
import { useState, useEffect } from "react";
import Sidebar from "../components/Sidebar";
import axios from "axios";
import { useContext } from "react";
import { UserContext } from "../context/UserContext";
import Calendar2LineIcon from "remixicon-react/Calendar2LineIcon";
import DeleteBin5FillIcon from "remixicon-react/DeleteBin5FillIcon";
import QuillPenLineIcon from "remixicon-react/QuillPenLineIcon";
import Header from "../components/Header";
import production from "../../base";
import Loader from "../components/Loader";
import { Link } from "react-router-dom";

function Profile() {
  const { auth } = useContext(UserContext);
  const [post, setPost] = useState([]);
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState("");
  const [joinDate, setJoinDate] = useState("");
  const [userName, setSetUsername] = useState("");

  const userId = localStorage.getItem("user");

  useEffect(() => {
    const getUser = async () => {
      const res = await axios.get(`${production}/api/user/${userId}`);
      setSetUsername(res.data.name);
      setUser(res.data.name);
      setJoinDate(res.data.date);
    };
    getUser();
  }, []);

  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);
      const res = await axios.get(`${production}/api/posts`);
      res.data.length > 0 ? setLoading(false) : setLoading(true);
      setPost(res.data);
    };
    fetchPosts();
  }, []);

  const handleDelete = async () => {
    try {
      await axios.delete(`${production}/api/deletepost/${id}`, {
        data: { id: id },
      });
      window.location.replace("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex w-full lg:w-2/3 lg:mx-auto">
      <Header />
      <Sidebar />
      <div className="flex flex-col w-full border-x  z-20 p-2 pt-20">
        <div className="flex items-center justify-between">
          <div className="flex justify-center items-center flex-col">
            <img
              src="/assets/360_F_346839683_6nAPzbhpSkIpb8pmAwufkC7c5eD7wYws.jpg"
              alt=""
              className="w-32 h-32 rounded-full"
            />
            <div className="flex items-start flex-col">
              <span>{user}</span>
              <div className="flex items-center mt-2">
                <Calendar2LineIcon size={14} />
                <div className="ml-2">
                  <span className="text-xs">Joined </span>
                  <span className="text-xs">
                    {joinDate.toString().slice(0, 10)}
                  </span>
                </div>
              </div>
            </div>
          </div>
          <button className="font-normal cursor-pointer text-[10px] py-2 px-4 flex justify-center items-center text-white bg-[#1d2127] hover:bg-[#161b22] rounded-xl ">
            Edit profile
          </button>
        </div>
        <div className="mt-20 flex justify-center items-center w-full">
          {!loading ? (
            <div className="w-full">
              {post.map((post) => {
                if (post.name === userName) {
                  return (
                    <div
                      className="flex flex-col border p-3 rounded-xl mb-4"
                      key={post._id}
                    >
                      <div className="flex pb-2 justify-between relative">
                        <div className="flex pb-2">
                          <img
                            src="/assets/360_F_346839683_6nAPzbhpSkIpb8pmAwufkC7c5eD7wYws.jpg"
                            className="rounded-full h-8 w-8"
                            alt=""
                          />
                          <span className="ml-2">{post.name}</span>
                        </div>

                        {/* {post.name === user && (
                          // <div className="list-none flex">
                          //   <div className="font-normal cursor-pointer text-[10px] py-2 px-4 mx-auto flex justify-center items-center hover:bg-[#161b22] hover:text-white w-full rounded-3xl ">
                          //     <span className="flex items-center">
                          //       <QuillPenLineIcon size={10} />
                          //       <span className="ml-2">Edit</span>
                          //     </span>
                          //   </div>
                          //   <div
                          //     className="font-normal cursor-pointer text-[10px] py-2 px-4 mx-auto flex justify-center items-center hover:bg-[#161b22] hover:text-white w-full rounded-3xl "
                          //     onClick={handleDelete}
                          //   >
                          //     <span className="flex items-center">
                          //       <DeleteBin5FillIcon size={10} />
                          //       <span className="ml-2">Delete</span>
                          //     </span>
                          //   </div>
                          // </div>
                        )} */}
                      </div>
                      <Link to={`/post/${post._id}`}>
                        <p>{post.post}</p>
                        <span className="text-[8px]">
                          {new Date(post.date).toDateString()}
                        </span>
                      </Link>
                    </div>
                  );
                }
              })}
            </div>
          ) : (
            <Loader />
          )}
        </div>
      </div>
    </div>
  );
}

export default Profile;
