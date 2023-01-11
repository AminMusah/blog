import Home from "./pages/Home";
import { Routes, Route } from "react-router-dom";
import Profile from "./pages/Profile";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Post from "./pages/Post";
import { useContext } from "react";
import { UserContext } from "./context/UserContext";
import PageNotFound from "./pages/PageNotFound";

function App() {
  let {auth,setAuth} = useContext(UserContext)
  console.log(auth,'App')

  return (
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/" element={ auth ? <Home /> : <PageNotFound/> }/> */}
        <Route path="/profile" element={<Profile />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/post/:id" element={<Post />} />
      </Routes>
  );
}

export default App;
