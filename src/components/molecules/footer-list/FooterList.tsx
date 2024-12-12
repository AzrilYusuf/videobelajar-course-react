import React, { useState, useEffect } from "react";
import type { FooterList } from "../../../interfaces/component.interface";
import Image from "../../atoms/Image";
import RightArrow from "../../../assets/svg/right-arrow.svg";
import "./FooterList.css";

const FooterList: React.FC<FooterList> = ({
  target,
  pChildren,
  id,
  ulChildren,
}) => {
  const [isActive, setIsActive] = useState(false);
  const [isMobile, setIsMobile] = useState(
    window.matchMedia("(max-width: 480px)").matches
  );

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.matchMedia("(max-width: 480px)").matches);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleStyle = () => {
    if (isMobile) {
      if (isActive) {
        return { maxHeight: "200px" };
      } else {
        return { maxHeight: "0" };
      }
    } else {
      return { maxHeight: "200px" };
    }
  };
  const toggleAccordion = () => {
    setIsActive((prev) => !prev);
  };

  return (
    <div className="footer-list">
      <p
        className={`accordion-header ${isActive && "active"}`}
        data-target={target}
        onClick={toggleAccordion}
      >
        {pChildren}
        <Image src={RightArrow} alt="Arrow" />
      </p>
      <ul id={id} className="accordion-content" style={handleStyle()}>
        {ulChildren}
      </ul>
    </div>
  );
};

export default FooterList;
