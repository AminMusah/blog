import { useState,useContext } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
import { UserContext } from "../context/UserContext";

function Login() {
  const location = useLocation();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  // let msg = useContext(UserContext);

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      const res = await axios.post("/api/login", {
        email,
        password,
      });
      const token = res.data.token;
      const userId = res.data.user._id;
      localStorage.setItem("token", token);
      localStorage.setItem("user", userId);
      // msg = true
      console.log(msg.user.loggedIn);
      res.data && window.location.replace("/");
    } catch (err) {
      console.log(err);
      setError(err.response.data.message);
    }
  };
  return (
    <div className="flex justify-center items-center h-screen  my-auto">
      <div className=" p-6 rounded-lg shadow-lg bg-white max-w-sm ">
        <form onSubmit={handleSubmit}>
          <div className="form-group mb-6">
            <input
              type="email"
              className="form-control block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
              placeholder="Email address"
              required
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="form-group mb-6">
            <input
              type="password"
              className="form-control block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
              placeholder="Password"
              required
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          {error ? (
            <div className="inline-block text-red-800 text-xs">{error}</div>
          ) : (
            ""
          )}

          <button
            type="submit"
            className="
      w-full
      px-6
      py-2.5
      bg-slate-100
      text-black
      font-medium
      text-xs
      leading-tight
      uppercase
      rounded
      shadow-md
      hover:bg-blue-700 hover:shadow-lg
      focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0
      active:bg-blue-800 active:shadow-lg
      transition
      duration-150
      ease-in-out"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
