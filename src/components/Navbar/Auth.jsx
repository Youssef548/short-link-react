import React from "react";
import { Link } from "react-router-dom";

const Auth = () => {
  return (
    <div className="hidden md:flex md:gap-4">
      <Link
        to="/login"
        className="px-6 py-2 rounded-full text-gray-500 hover:text-black duration-300"
      >
        Login
      </Link>
      <Link
        to="/signup"
        className="font-medium px-6 py-2 rounded-full bg-primary-cyan hover:bg-primary-cyan-hover text-white duration-300"
      >
        Sign up
      </Link>
    </div>
  );
};

export default Auth;
