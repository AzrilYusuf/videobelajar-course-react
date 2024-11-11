import React from "react";
import Navbar from "../organisms/navbar/Navbar";
import { Outlet } from "react-router-dom";

const AuthLayout: React.FC = () => {
  return (
    <>
      <Navbar />
      <section className="auth-container">
        <Outlet />
      </section>
    </>
  );
};

export default AuthLayout;
