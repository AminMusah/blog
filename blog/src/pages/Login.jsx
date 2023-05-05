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
    <div class="relative flex min-h-screen flex-col justify-center overflow-hidden bg-[#0d1117] py-6 sm:py-12">
      <div class="relative mx-auto w-full max-w-md bg-white px-6 pt-10 pb-8 shadow-xl ring-1 ring-gray-900/5 sm:rounded-xl sm:px-10">
        <div class="w-full">
          <div class="text-center">
            <h1 class="text-3xl font-semibold text-gray-900">Welcome back</h1>
            <p class="mt-2 text-gray-500">
              Sign in below to access your account
            </p>
          </div>
          <div class="mt-8">
            <form action="" class="group" onSubmit={handleSubmit}>
              <div class="mb-6">
                <label for="email" class="mb-2 block text-sm text-gray-600">
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="you@company.com"
                  class="w-full rounded-md border border-gray-300 px-3 py-2.5 placeholder-gray-300 shadow shadow-gray-100 focus:border-gray-500 focus:outline-none valid:[&:not(:placeholder-shown)]:border-green-500 [&:not(:placeholder-shown):not(:focus):invalid~span]:block invalid:[&:not(:placeholder-shown):not(:focus)]:border-red-400"
                  autocomplete="off"
                  required
                  pattern="[a-z0-9._+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div class="mb-6">
                <div class="mb-2 flex justify-between">
                  <label for="password" class="text-sm text-gray-600">
                    Password
                  </label>
                  {/* <a
                    href="#!"
                    tabindex="-1"
                    class="text-sm text-gray-400 hover:text-indigo-500 focus:text-indigo-500 focus:outline-none"
                  >
                    Forgot password?
                  </a> */}
                </div>
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="Your Password"
                  class="peer w-full rounded-md border border-gray-300 px-3 py-2.5 placeholder-gray-300 shadow shadow-gray-100 focus:border-gray-500 focus:outline-none valid:[&:not(:placeholder-shown)]:border-green-500 [&:not(:placeholder-shown):not(:focus):invalid~span]:block invalid:[&:not(:placeholder-shown):not(:focus)]:border-red-400"
                  pattern=".{6,}"
                  required
                  onChange={(e) => setPassword(e.target.value)}
                />
                {error ? (
                  <div className="mt-2 text-xs text-red-400">{error}</div>
                ) : (
                  ""
                )}
              </div>

              <button
                type="submit"
                className="mb-6 w-full flex items-center justify-center rounded-md px-3 py-3 h-12  bg-black focus:outline-none group-invalid:pointer-events-none group-invalid:bg-[#161b22]"
              >
                {loading ? (
                  <MiniLoader />
                ) : (
                  <div class="text-white">Sign in</div>
                )}
              </button>

              <p className="text-center text-sm text-gray-500">
                Don&#x27;t have an account yet?{" "}
                <Link
                  to="/register"
                  class="font-semibold text-black focus:text-black focus:underline focus:outline-none"
                >
                  Sign up
                </Link>
                .
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
