import React from "react";
import CompanyContact from "../../molecules/company-contact/CompanyContact";
import CompanyInfo from "../../molecules/company-info/CompanyInfo";
import CopyrightSocial from "../../molecules/copyright-social/CopyrightSocial";
import "./Footer.css";

const Footer: React.FC = () => {
  return (
    <footer>
      <div className="company">
        <CompanyContact />
        <CompanyInfo />
      </div>
      <div className="footer-divider"></div>
      <CopyrightSocial />
    </footer>
  );
};

export default Footer;
