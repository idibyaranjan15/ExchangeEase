import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router";
import { toast } from "react-hot-toast";
const Signup = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const navigate = useNavigate();

  const handleSignup = async () => {
    try {
      const response = await axios.post(
        "http://localhost:8006/api/user/signup",
        {
          username,
          password,
          firstname,
          lastname,
        }
      );
      console.log(response.data);
      toast.success(response.data.message);
    } catch (error) {
      console.log(`Error fetching data`, error);
      toast.error(error.message);
    }
  };
  return (
    <div className="h-screen flex justify-center items-center bg-white text-black">
      <div className="w-full max-w-md px-6 py-8 bg-white shadow-lg rounded-lg">
        <h1 className="text-2xl font-bold text-center mb-6">Sign Up</h1>
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-1">Username</label>
            <input
              type="text"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black"
              placeholder="Enter your username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Password</label>
            <input
              type="password"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">First Name</label>
            <input
              type="text"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black"
              placeholder="Enter your first name"
              value={firstname}
              onChange={(e) => setFirstname(e.target.value)}
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Last Name</label>
            <input
              type="text"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black"
              placeholder="Enter your last name"
              value={lastname}
              onChange={(e) => setLastname(e.target.value)}
            />
          </div>
        </div>
        <div className="mt-6 text-center">
          <button
            className="w-full px-4 py-2 bg-black text-white rounded-md hover:bg-gray-800 transition"
            onClick={handleSignup}
          >
            Sign Up
          </button>
          <Link to="/signin" className="mt-4 text-sm text-gray-600">
            Already signed in?{" "}
            <a
              href="/signin"
              className="text-black font-medium hover:underline"
            >
              Sign In
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Signup;
