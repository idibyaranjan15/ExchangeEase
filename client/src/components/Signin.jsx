import axios from "axios";
import React, { useState } from "react";
import { Link } from "react-router";
import { toast } from "react-hot-toast";

const Signin = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSignIn = async () => {
    try {
      const response = await axios.post(
        "http://localhost:8006/api/user/signin",
        {
          username,
          password,
        }
      );
      console.log(response.data);
      toast.success(response.data.message);
    } catch (error) {
      console.log(`Error in signin`, error);
    }
  };

  return (
    <div className="h-screen flex items-center justify-center bg-white text-black">
      <div className="w-full max-w-md px-6 py-8 bg-white shadow-md rounded-lg">
        <h1 className="text-2xl font-bold text-center mb-6">Sign In</h1>
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-1">Username</label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black"
              placeholder="Enter your username"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black"
              placeholder="Enter your password"
            />
          </div>
        </div>
        <div className="mt-6">
          <Link to="/dashboard">
            <button
              onClick={handleSignIn}
              className="w-full px-4 py-2 bg-black text-white rounded-md hover:bg-gray-800 transition"
            >
              Sign In
            </button>
          </Link>
        </div>
        <Link to="/">
          <div className="mt-4 text-center text-sm text-gray-600">
            Don't have an account?{" "}
            <button
              className="text-black font-medium hover:underline"
              onClick={() => {
                console.log("Navigate to Signup");
              }}
            >
              Sign Up
            </button>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Signin;
