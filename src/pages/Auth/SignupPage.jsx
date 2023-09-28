import React, { useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"; // import first

import { useNavigate } from "react-router-dom";

const SignupPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  let isDisabled = true;
  if (username.length > 4 && password.length > 4) isDisabled = false;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setUsername("");
    setPassword("");
    navigate("/login");
    toast.success("Successfully registered!", {
      position: toast.POSITION.TOP_CENTER,
      autoClose: 200, // Close the toast after 2 seconds
    });
  };

  return (
    <>
      <div className="flex justify-center items-center h-[90vh] bg-white">
        <form className="flex flex-col" onSubmit={handleSubmit}>
          <h1 className=" text-3xl text-gray-600 font-bold mb-4">Singup</h1>

          <label htmlFor="" className="font-medium  text-xl text-gray-600">
            email address
          </label>
          <input
            type="text"
            placeholder="Username or Email"
            className="focus:outline-none focus:bg-white px-4 text-gray-600 py-2 rounded-full bg-white border border-gray-300 mb-4"
            name="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <label htmlFor="" className="font-medium  text-xl text-gray-600">
            Password
          </label>
          <input
            className="focus:outline-none focus:bg-white px-4 text-gray-600 py-2 rounded-full bg-white border border-gray-300 mb-4"
            type="password"
            name="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            disabled={isDisabled}
            className={`py-3 px-4 border ${
              isDisabled
                ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                : "border-primary-cyan cursor-pointer hover:bg-primary-cyan-hover"
            } duration-300 rounded-full`}
          >
            Register
          </button>
        </form>
      </div>
    </>
  );
};

export default SignupPage;
