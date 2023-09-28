import React from "react";
import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <div className="mr-12 text-4xl text-black font-medium cursor-pointer">
      <Link to={"/"}>Shortly</Link>
    </div>
  );
};

export default Logo;
