import React from "react";
import Logo from "../../molecules/logo/Logo";
import UserLogo from "../../molecules/user-logo/UserLogo";
import "./Navbar.css";

const Navbar: React.FC<{ title?: string }> = ({ title }) => {
  return (
    <nav className="navbar">
      <Logo />
      {title === "home" && <UserLogo />}
    </nav>
  );
};

export default Navbar;
