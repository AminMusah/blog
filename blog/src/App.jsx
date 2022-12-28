
import Home from "./components/Home"
import Header from "./components/Header"
import { Routes, Route, Link } from "react-router-dom"
import Profile from "./pages/Profile"
import Login from "./pages/Login"
import Register from "./pages/Register"
import Post from "./pages/Post"

function App() {
  return (
    <div className="">
      <Header/>
<Routes>
  <Route path="/" element={ <Home/>}/>
  <Route path="/profile" element={ <Profile/>}/>
  <Route path="/register" element={ <Register/>}/>
  <Route path="/login" element={ <Login/>}/>
  <Route path="/post/:id" element={<Post />} />
</Routes>
    </div>
  )
}

export default App
