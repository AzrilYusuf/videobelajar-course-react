import React from "react";
import LogoImage from "../../../assets/svg/logo.svg";
import Image from "../../atoms/Image";
import "./Logo.css";

const Logo: React.FC = () => {
  return (
    <div className="logo">
        <Image src={LogoImage} alt="logo" />
    </div>
  );
};

export default Logo;
