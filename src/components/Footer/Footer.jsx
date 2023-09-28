import React from "react";
import Container from "../Container";
import Logo from "./Logo";
import Links from "./Links";
import SocialMedia from "./SocialMedia";

const Footer = () => {
  return (
    <div className="bg-[#232027] py-10">
      <Container>
        <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4">
          <Logo />
          <Links />
          <SocialMedia />
        </div>
      </Container>
    </div>
  );
};

export default Footer;
