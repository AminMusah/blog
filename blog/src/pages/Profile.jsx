import React from "react";
import { useState, useEffect } from "react";
import Sidebar from "../components/Sidebar";
import axios from "axios";
import { useContext } from "react";
import { UserContext } from "../context/UserContext";
import Header from "../components/Header";
import production from "../../base";

function Profile() {
  const { auth } = useContext(UserContext)
  console.log(auth);

  const [user, setUser] = useState("");

  const userId = localStorage.getItem("user");

  useEffect(() => {
    const getUser = async () => {
      const res = await axios.get(`${production}/api/user/${userId}`);
      console.log(res.data);
      setUser(res.data.name);
    };
    getUser();
  }, []);

  return (
    <div className="flex">
      <Header/>
      <Sidebar />
      <div className="pt-20">profile : {user} </div>
    </div>
  );
}

export default Profile;
