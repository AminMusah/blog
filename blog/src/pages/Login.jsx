import { useState, useContext } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";
import production from "../../base";
import { UserContext } from "../context/UserContext";
import MiniLoader from "../components/MiniLoader";

function Login() {
  let { isAuth, setIsAuth } = useContext(UserContext);
  // console.log(auth)

  const location = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState("");

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      setLoading(true);
      const res = await axios.post(`${production}/api/login`, {
        email,
        password,
      });
      const token = res.data.token;
      const userId = res.data.user._id;
      localStorage.setItem("token", token);
      localStorage.setItem("user", userId);

      setIsAuth(true);
      res.data && location("/");
    } catch (err) {
      console.log(err);
      setLoading(false);
      setError(err.response.data.message);
    }
  };
  return (
    <div className="flex justify-center items-center h-screen  my-auto">
      <div class="area">
        <ul class="circles">
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </div>
      <div className="absolute p-6 rounded-lg shadow-lg bg-white max-w-sm ">
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
      ease-in-out flex items-center justify-center"
          >
            {loading ? <MiniLoader /> : ""}
            <span className="ml-2">Login</span>
          </button>
          <div className="flex items-center mt-3">
            {" "}
            <p className="text-xs"> Don't have an account? </p>{" "}
            <Link
              to="/register"
              className="text-xs text-blue-900 ml-[5px] font-bold"
            >
              Register
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
