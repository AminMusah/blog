import { useEffect, useState } from "react";
import MoreLineIcon from "remixicon-react/MoreLineIcon";
import LogoutBoxLineIcon from "remixicon-react/LogoutBoxLineIcon";
import DeleteBin5FillIcon from "remixicon-react/DeleteBin5FillIcon";
import QuillPenLineIcon from "remixicon-react/QuillPenLineIcon";
import axios from "axios";
import { Link } from "react-router-dom";
import production from "../../base";


function Posts({loading, setLoading}) {
  const [posts, setPosts] = useState([]);
  const [toggle, setToggle] = useState(false);
  const [user, setUser] = useState("");

  const userId = localStorage.getItem("user");

  useEffect(() => {
    const getUser = async () => {
      const res = await axios.get(`${production}/api/user/${userId}`);
      setUser(res.data.name);
    };
    getUser();
  }, []);

  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true)
      const res = await axios.get(`${production}/api/posts`);
      console.log(res.data);
      res.data.length > 0 ? setLoading(false) : setLoading(true) 
      setPosts(res.data);
    };
    fetchPosts();
  }, []);

  const handleDelete = async () => {
    try {
      await axios.delete(`${production}/api/deletepost/${id}`, {data:{id:id}})
      window.location.replace('/')
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className="w-full">
      {posts.map((post) => {
        return (
          <div
            className="flex flex-col border border-slate-100 p-3 rounded-xl mb-4"
            key={post._id}
          >
            <div className="flex pb-2 justify-between relative">
              <div className="flex pb-2">
                <img
                  src="/assets/360_F_346839683_6nAPzbhpSkIpb8pmAwufkC7c5eD7wYws.jpg"
                  className="rounded-full h-8 w-8"
                  alt=""
                />
                <span>{post.name}</span>
              </div>

              {/* <button className="flex items-center justify-center w-9 h-9 hover:bg-slate-100 rounded-full" onClick={() => setToggle((prev) => !prev)}>
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
                      <li className="font-normal cursor-pointer text-[10px] py-2 px-4 mx-auto flex justify-center items-center hover:bg-slate-100 w-full rounded-3xl ">
                        <a href="#" className="flex items-center">
                          <QuillPenLineIcon size={10} />
                          <span className="ml-2">Edit</span>
                        </a>
                      </li>
                      <li className="font-normal cursor-pointer text-[10px] py-2 px-4 mx-auto flex justify-center items-center hover:bg-slate-100 w-full rounded-3xl ">
                        <a href="#" className="flex items-center">
                          <DeleteBin5FillIcon size={10} />
                          <span className="ml-2">Delete</span>
                        </a>
                      </li>
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
            <Link to={`/post/${post._id}`}>
              <p>{post.post}</p>
              <span className="text-[8px]">
                {new Date(post.date).toDateString()}
              </span>
            </Link>
          </div>
        );
      })}
    </div>
  );
}

export default Posts;
