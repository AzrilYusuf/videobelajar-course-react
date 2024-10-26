import React from "react";
import Image from "../../atoms/Image";
import LinkedInIcon from "../../../assets/svg/linkedin-icon.svg";
import FacebookIcon from "../../../assets/svg/facebook-icon.svg";
import InstagramIcon from "../../../assets/svg/instagram-icon.svg";
import TwitterIcon from "../../../assets/svg/twitter-icon.svg";
import "./CopyrightSocial.css";

const CopyrightSocial: React.FC = () => {
  return (
    <div className="copyrights">
      <div>&#64;2024 Gerobak Sayur All Rights Reserved.</div>
      <div style={{ display: "flex", gap: "15px" }}>
        {/* <!-- LinkedIn --> */}
        <div className="footer-social">
          <Image src={LinkedInIcon} alt="LinkedIn icon" />
        </div>
        {/* <!-- Facebook --> */}
        <div className="footer-social">
          <Image src={FacebookIcon} alt="Facebook icon" />
        </div>
        {/* <!-- Instagram --> */}
        <div className="footer-social">
          <Image src={InstagramIcon} alt="Instagram icon" />
        </div>
        {/* <!-- Twitter --> */}
        <div className="footer-social">
          <Image src={TwitterIcon} alt="Twitter icon" />
        </div>
      </div>
    </div>
  );
};

export default CopyrightSocial;
