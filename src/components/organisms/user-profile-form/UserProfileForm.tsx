import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Image from "../../atoms/Image";
import Label from "../../atoms/Label";
import Input from "../../atoms/Input";
import Button from "../../atoms/Button";
import userImage from "../../../assets/img/user-profile-image.png";
import { UserProfile } from "../../../interfaces/component.interface";
import "./UserProfileForm.css";

const UserProfileForm = () => {
  const [values, setValues] = useState<UserProfile>(() => {
    const storedProfile = localStorage.getItem("profile");
    return storedProfile
      ? JSON.parse(storedProfile)
      : { fullname: "", email: "", phone_number: "", password: "" };
  });
  const [error, setError] = useState<string>("");
  const [message, setMessage] = useState<string>("");

  // To check if the user is logged in and set time for message and error
  const navigate = useNavigate();
  useEffect(() => {
    const isLoggedIn = localStorage.getItem("profile");
    if (!isLoggedIn) {
      navigate("/login");
    }
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
    <div className="user-profile-form">
      <div style={{ display: "flex", gap: "1.5em" }}>
        <Image src={userImage} alt="User profile image" />
        <div style={{ display: "flex", flexDirection: "column", gap: "0.4em" }}>
          <h3>{values.fullname}</h3>
          <p style={{ color: "hsl(0, 0%, 0%)" }}>{values.email}</p>
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
      {message && (
        <p
          style={{
            position: "absolute",
            color: "green",
            right: "20%",
            bottom: "54.5%",
            display: "block",
            transition: "1s ease display",
          }}
        >
          {message}
        </p>
      )}
      {error && (
        <p
          style={{
            position: "absolute",
            color: "red",
            right: "20%",
            bottom: "54.5%",
          }}
        >
          {error}
        </p>
      )}
      <Button
        type="submit"
        className="button auth-button-1 save-button"
        handleClick={handleSubmit}
      >
        Simpan
      </Button>
    </div>
  );
};

export default UserProfileForm;
