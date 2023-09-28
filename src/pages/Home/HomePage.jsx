import React from "react";
import Navbar from "../../components/Navbar/navbar";
import Header from "../../components/header/Header";
import Container from "../../components/Container";
import ShortLink from "../../components/shortLink/shortLink";
import Statics from "../../components/statics/Statics";
import Boost from "../../components/Boost/Boost";
import Footer from "../../components/Footer/Footer";
const HomePage = () => {
  return (
    <div>
      <Header />
      <ShortLink />
      <Statics />
      <Boost />
      <Footer />
    </div>
  );
};

export default HomePage;
