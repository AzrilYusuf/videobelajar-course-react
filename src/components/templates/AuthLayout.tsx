import React from "react";
import Navbar from "../organisms/navbar/Navbar";
import { Outlet } from "react-router-dom";

const AuthLayout: React.FC = () => {
  return (
    <div className="auth-container">
      <Navbar />
      <section className="form-content">
        <Outlet />
      </section>
    </div>
  );
};

export default AuthLayout;
