import React from "react";
import Image from "../../atoms/Image";
import Logo from "../../../assets/svg/logo.svg";
import "./CompanyContact.css";

const CompanyContact: React.FC = () => {
  return (
    <div className="company-contact">
      <div>
        <Image src={Logo} alt="Logo" />
      </div>
      <h4 style={{ fontSize: "18px", color: "#222325" }}>
        Gali Potensi Anda Melalui Pembelajaran
        <br />
        Video di hariesok.id!
      </h4>
      <p style={{ color: "#222325" }}>
        Jl. Usman Effendi No. 50 Lowokwaru, Malang
      </p>
      <p style={{ color: "#222325" }}>&#43;62-877-7123-1234</p>
    </div>
  );
};

export default CompanyContact;
