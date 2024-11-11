import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../organisms/navbar/Navbar";
import Footer from "../organisms/footer/Footer";

const HomeLayout: React.FC = () => {
  return (
    <>
      <Navbar title="home" />
      <Outlet />
      <Footer />
    </>
  );
};

export default HomeLayout;
