import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../atoms/Button";
import "./Tagline.css";
import TaglineText from "../../molecules/tagline-text/TaglineText";

const Tagline: React.FC = () => {
    const navigate = useNavigate();
    const handleNavigate = (e: React.MouseEvent<HTMLButtonElement>) => {
        navigate("/");
        console.log(e);
    };

  return (
    <section className="tagline-container">
      <div className="tagline">
        <TaglineText />
        <Button
          type="button"
          className="success-button"
          handleClick={(e) => handleNavigate(e)}
        >
          Temukan Video Course untuk Dipelajari!
        </Button>
      </div>
    </section>
  );
};

export default Tagline;
