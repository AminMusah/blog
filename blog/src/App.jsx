import Home from "./pages/Home";
import { Routes, Route } from "react-router-dom";
import Profile from "./pages/Profile";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Post from "./pages/Post";
import { useContext } from "react";
import UserProvider, { UserContext } from "./context/UserContext";

function App() {

  return (
    <UserProvider>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/post/:id" element={<Post />} />
      </Routes>
    </UserProvider>
  );
}

export default App;
