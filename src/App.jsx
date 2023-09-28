import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import HomePage from "./pages/Home/HomePage";
import LoginPage from "./pages/Auth/LoginPage";
import SignupPage from "./pages/Auth/SignupPage";
import Layout from "./components/Layout/Layout";

{
  /* <img src="/images/bg-boost-desktop.svg" alt="" />
        <img src="/images/bg-boost-mobile.svg" alt="" />
        <img src="/images/bg-shorten-mobile.svg" alt="" />
        <img src="/images/icon-brand-recognition.svg" alt="" />
        <img src="/images/icon-detailed-records.svg" alt="" />
        <img src="/images/icon-fully-customizable.svg" alt="" />
        <img src="/images/icon-instagram.svg" alt="" />
        <img src="/images/icon-pinterest.svg" alt="" />
        <img src="/images/icon-twitter.svg" alt="" />
        <img src="/images/illustration-working.svg" alt="" />
        <img src="/images/logo.svg" alt="" /> */
}

function App() {
  return (
    <>
      <BrowserRouter basename="/short-link-react/">
        <Layout>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/signup" element={<SignupPage />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </>
  );
}

export default App;
