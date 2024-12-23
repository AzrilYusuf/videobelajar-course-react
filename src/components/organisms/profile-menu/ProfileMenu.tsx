import React from "react";
import { useNavigate } from "react-router-dom";
import Image from "../../atoms/Image";
import userIcon from "../../../assets/svg/user-icon-active.svg";
import userClass from "../../../assets/svg/user-class-nonactive.svg";
import userOrder from "../../../assets/svg/user-order-nonactive.svg";
import "./ProfileMenu.css";

const ProfileMenu: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "1.5em" }}>
      <div style={{ display: "flex", flexDirection: "column", gap: "0.625em" }}>
        <h2>Ubah Profil</h2>
        <p>Ubah data diri Anda</p>
      </div>
      <ul className="profile-menu">
        <li className="active" onClick={() => navigate("/user?tab=profile")}>
          <Image src={userIcon} alt="User icon" /> Profil Saya
        </li>
        <li>
          <Image src={userClass} alt="User class icon" /> Kelas Saya
        </li>
        <li>
          <Image src={userOrder} alt="User order icon" /> Pesanan Saya
        </li>
      </ul>
    </div>
  );
};

export default ProfileMenu;
