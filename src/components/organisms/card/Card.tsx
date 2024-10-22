import React from "react";
import Image from "../../atoms/Image";
import ratingIcon from "../../../assets/svg/rating.svg";
import { Cards } from "../../../interfaces/interfaces";
import "./Card.css";

const Card: React.FC<Cards> = ({
  image,
  title,
  description,
  tutorImage,
  tutorName,
  tutorPosition,
  rating,
  price,
}) => {
  return (
    <div className="card-container">
      <Image src={image} alt="Video thumbnail" style={{ width: "100%", height: "50%", borderRadius: "10px" }} />
      <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
      <div className="tutor">
        <Image
          src={tutorImage}
          alt="Tutor icon"
          style={{ width: "40px", height: "40px", borderRadius: "10px" }}
        />
        <div style={{ display: "flex", flexDirection: "column" }}>
          <h4>{tutorName}</h4>
          <p style={{ fontSize: "14px;" }}>{tutorPosition}</p>
        </div>
      </div>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div>
            <Image src={ratingIcon} alt="Rating product" />
          </div>
          <p
            style={{
              fontSize: "14px",
              color: "#333333ad",
              textDecoration: "underline",
            }}
          >
            {rating}
          </p>
        </div>
        <h2
          style={{ fontWeight: "600", lineHeight: "28.8px", color: "#3ecf4c" }}
        >
          {price}
        </h2>
      </div>
    </div>
  );
};

export default Card;
