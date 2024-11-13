import React, { useState } from "react";
import Image from "../components/atoms/Image";
import Button from "../components/atoms/Button";
import userIcon from "../assets/svg/user-icon-active.svg";
import userClass from "../assets/svg/user-class-nonactive.svg";
import userOrder from "../assets/svg/user-order-nonactive.svg";
import userImage from "../assets/img/user-profile-image.png";
import { UserProfile } from "../interfaces/interfaces";

const UserProfilePage: React.FC = () => {
  const [values, setValues] = useState<UserProfile>({
    fullname: "Jennie Ruby Jane",
    email: "rubyjane@gmail.com",
    phone_number: "+6281234567890",
  });

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValues({ ...values, [e.target.name]: e.target.value });
    // console.log(values);
    // console.log(e.target.value);
  };

  return (
    <div className="user-profile">
      <div style={{ display: "flex", flexDirection: "column", gap: "1.5em" }}>
        <div
          style={{ display: "flex", flexDirection: "column", gap: "0.625em" }}
        >
          <h2>Ubah Profil</h2>
          <p>Ubah data diri Anda</p>
        </div>
        <ul className="profile-menu">
          <li className="active">
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
      <div className="user-profile-form">
        <div style={{ display: "flex", gap: "1.5em" }}>
          <Image src={userImage} alt="User profile image" />
          <div
            style={{ display: "flex", flexDirection: "column", gap: "0.4em" }}
          >
            <h3>Jennie Ruby Jane</h3>
            <p style={{ color: "hsl(0, 0%, 0%)" }}>rubyjane@gmail.com</p>
            <p style={{ color: "hsla(11, 92%, 55%, 1)", cursor: "pointer" }}>
              Ganti Foto Profil
            </p>
          </div>
        </div>
        <hr></hr>
        <div
          style={{
            display: "flex",
            justifyContent: "space-evenly",
            gap: "0.8em",
          }}
        >
          <div className="form-group">
            <input
              type="text"
              name="fullname"
              id="fullname"
              className="form-control"
              placeholder=""
              onChange={handleInput}
              required
            />
            <label htmlFor="fullname" className="form-label">
              Nama Lengkap
            </label>
          </div>
          <div className="form-group">
            <input
              type="email"
              name="email"
              id="email"
              className="form-control"
              placeholder=" "
              onChange={handleInput}
              required
            />
            <label htmlFor="email" className="form-label">
              E-Mail
            </label>
          </div>
          <div className="form-group">
            <input
              type="tel"
              name="phone_number"
              id="phone"
              className="form-control"
              placeholder=" "
              onChange={handleInput}
              required
            />
            <label htmlFor="phone" className="form-label">
              No. Hp
            </label>
          </div>
        </div>
        <Button
          type="submit"
          className="button auth-button-1 save-button"
          handleClick={(e) => console.log(e)}
        >
          Simpan
        </Button>
      </div>
    </div>
  );
};

export default UserProfilePage;
