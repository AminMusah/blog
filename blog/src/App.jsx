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
  let {isAuth} = useContext(UserContext)

  return (
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={ isAuth ? <Profile /> : <Login /> } />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/post/:id" element={isAuth ? <Post /> : <Login />} />
      </Routes>
  );
}

export default App;
