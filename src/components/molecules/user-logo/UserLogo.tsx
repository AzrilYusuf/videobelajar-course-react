import React from "react";
import Avatar from "../../../assets/img/avatar.png";
import "./UserLogo.css";
import Image from "../../atoms/Image";

const UserLogo: React.FC = () => {
  return (
    <div className="user-logo">
      <p>Kategori</p>
      <Image
        src={Avatar}
        alt="user-logo"
        style={{ width: "44px", height: "44px", borderRadius: "10px" }}
      />
    </div>
  );
};

export default UserLogo;
