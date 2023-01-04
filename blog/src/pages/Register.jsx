import axios from "axios";
import React from "react";
import { useState } from "react";
import { useLocation } from "react-router-dom";
import production from '../../base'

function Register() {
  const location = useLocation()
  const [name,setName] = useState("")
  const [email,setEmail] = useState("")
  const [password,setPassword] = useState("")
  const [error,setError] = useState("")

  const handleSubmit = async (e) => {
    try {
      e.preventDefault()
      const res = await axios.post(`${production}/api/register`, {
        name,email,password
      })
      res.data && window.location.replace('/login')
    } catch (err) {
      setError(err.response.data.message)
    }
  }

  return (
    <div className="flex justify-center items-center h-screen  my-auto">
      <div className=" p-6 rounded-lg shadow-lg bg-white max-w-sm ">
        <form onSubmit={handleSubmit}>
          <div className="form-group mb-6">
            <input
              type="text"
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
        focus:text-gray-700 focus:bg-white focus:border-slate-100 focus:outline-none"
             
              placeholder="Name"
              required
              onChange={e => setName(e.target.value)}
            />
          </div>
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
        focus:text-gray-700 focus:bg-white focus:border-slate-100 focus:outline-none"
             
              placeholder="Email address"
              required
              onChange={e => setEmail(e.target.value)}
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
        focus:text-gray-700 focus:bg-white focus:border-slate-100 focus:outline-none"
             
              placeholder="Password"
              required
              onChange={e => setPassword(e.target.value)}
            />
          </div>
          <div className="form-group form-check text-center mb-6">
            <input
              type="checkbox"
              className="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-700 checked:border-slate-100 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain mr-2 cursor-pointer"
             required

            />
            <label
              className="form-check-label inline-block text-gray-800"
              
            >
              I have read and agree to the terms
            </label>
            {error ? <div
              className="inline-block text-red-800 text-xs"
            >
              {error}
            </div> : '' }
           
          </div>
          <button
            type="submit"
            className="
      w-full
      px-6
      py-2.5
      
      text-black
      font-medium
      text-xs
      leading-tight
      uppercase
      rounded
      shadow-md
      hover:bg-blue-700 hover:shadow-lg
      focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0
      active:bg-blue-700 active:shadow-lg
      transition
      duration-150
      ease-in-out"
          >
            Register
          </button>
        </form>
      </div>
    </div>
  );
}

export default Register;
