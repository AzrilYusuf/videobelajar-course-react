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
      <h4 className="lato-font" style={{ fontSize: "18px", color: "hsl(220, 4%, 14%)" }}>
        Gali Potensi Anda Melalui Pembelajaran
        <br />
        Video di hariesok.id!
      </h4>
      <p style={{ color: "hsl(220, 4%, 14%)" }}>
        Jl. Usman Effendi No. 50 Lowokwaru, Malang
      </p>
      <p style={{ color: "hsl(220, 4%, 14%)" }}>&#43;62-877-7123-1234</p>
    </div>
  );
};

export default CompanyContact;
