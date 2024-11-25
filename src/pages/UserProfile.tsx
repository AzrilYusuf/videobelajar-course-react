import React, { useEffect, useState } from "react";
import Image from "../components/atoms/Image";
import Input from "../components/atoms/Input";
import Label from "../components/atoms/Label";
import Button from "../components/atoms/Button";
import userIcon from "../assets/svg/user-icon-active.svg";
import userClass from "../assets/svg/user-class-nonactive.svg";
import userOrder from "../assets/svg/user-order-nonactive.svg";
import userImage from "../assets/img/user-profile-image.png";
import { UserProfile } from "../interfaces/interfaces";

const UserProfilePage: React.FC = () => {
  const [values, setValues] = useState<UserProfile>(() => {
    const storedProfile = localStorage.getItem("profile");
    return storedProfile
      ? JSON.parse(storedProfile)
      : { fullname: "", email: "", phone_number: "", password: "" };
  });
  const [error, setError] = useState<string>("");
  const [message, setMessage] = useState<string>("");

  useEffect(() => {
    if (message || error) {
      const timeout = setTimeout(() => {
        setMessage("");
        setError("");
      }, 2000);

      return () => clearTimeout(timeout);
    }
  }, [message, error]);

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValues({ ...values, [e.target.name]: e.target.value });
    console.log(values);
  };

  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    if (!values.fullname || !values.email || !values.phone_number) {
      setError("Semua data harus diisi!");
      return;
    }
    localStorage.setItem("profile", JSON.stringify(values));
    setMessage("Profil berhasil diubah!");
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
            justifyContent: "center",
            gap: "0.8em",
          }}
        >
          <div className="form-group">
            <Input
              id="fullname"
              type="text"
              name="fullname"
              className="form-control"
              value={values.fullname}
              handleChange={handleInput}
            />
            <Label htmlFor="fullname" className="form-label" isRequired={false}>
              Nama Lengkap
            </Label>
          </div>
          <div className="form-group">
            <Input
              id="email"
              type="email"
              name="email"
              className="form-control"
              value={values.email}
              handleChange={handleInput}
            />
            <Label htmlFor="email" className="form-label" isRequired={false}>
              E-Mail
            </Label>
          </div>
          <div className="form-group">
          <select id="phone" className="form-select" name="phone-number">
              <option value="1">+62</option>
              <option value="2">+63</option>
              <option value="3">+64</option>
              <option value="4">+65</option>
            </select>
          </div>
          <div className="form-group">
            <Input
              id="phone"
              type="tel"
              name="phone_number"
              className="form-control"
              value={values.phone_number}
              handleChange={handleInput}
            />
            <Label htmlFor="phone" className="form-label" isRequired={false}>
              No. Hp
            </Label>
          </div>
        </div>
        {message && <p style={{ position: "absolute", color: "green", right: "20%", bottom: "54.5%", display: "block", transition: "1s ease display" }}>{message}</p>}
        {error && <p style={{ position: "absolute", color: "red", right: "20%", bottom: "54.5%" }}>{error}</p>}
        <Button
          type="submit"
          className="button auth-button-1 save-button"
          handleClick={handleSubmit}
        >
          Simpan
        </Button>
      </div>
    </div>
  );
};

export default UserProfilePage;
