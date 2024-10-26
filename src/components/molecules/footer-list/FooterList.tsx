import React, { useState } from "react";
import type { FooterList } from "../../../interfaces/interfaces";
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

  const toggleAccordion = () => {
    setIsActive((prev) => !prev);
  };

  return (
    <div className="footer-list">
      <p
        className="accordion-header"
        data-target={target}
        onClick={toggleAccordion}
      >
        {pChildren}
        <Image src={RightArrow} alt="Arrow" />
      </p>
      <ul
        id={id}
        className="accordion-content"
        style={{ maxHeight: isActive ? "200px" : "0" }}
      >
        {ulChildren}
      </ul>
    </div>
  );
};

export default FooterList;
