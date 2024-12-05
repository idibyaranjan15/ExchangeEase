import React from "react";
import { Link } from "react-router";

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-gray-800">
      <h1 className="text-6xl font-bold text-indigo-600">404</h1>
      <h2 className="text-2xl mt-4">Oops! Page Not Found</h2>
      <p className="text-lg mt-2 text-gray-600">
        Sorry, the page you're looking for doesn't exist.
      </p>
      <Link
        to="/"
        className="mt-6 px-6 py-3 bg-indigo-600 text-white rounded-md shadow-md hover:bg-indigo-700 transition"
      >
        Go to Homepage
      </Link>
    </div>
  );
};

export default NotFound;
