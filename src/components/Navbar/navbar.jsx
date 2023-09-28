import React from "react";
import Container from "../Container";
import Auth from "./Auth";
import Logo from "./Logo";
import Menu from "./Menu";

const Navbar = () => {
  return (
    <div className="navbar bg-white" id="navbar">
      <Container>
        <div className="flex justify-between items-center py-4">
          {/* <div className="flex items-center "> */}
          <Logo />
          <Menu />
          {/* </div> */}
          <Auth />
        </div>
      </Container>
    </div>
  );
};

export default Navbar;
