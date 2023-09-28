import React from "react";
import Navbar from "../Navbar/navbar";
import { ToastContainer, toast } from "react-toastify";

const Layout = ({ children }) => {
  return (
    <div>
      <header>
        <nav>
          <Navbar />
        </nav>
      </header>
      <main>{children}</main>
      <ToastContainer />
    </div>
  );
};

export default Layout;
