import React from "react";
import { useNavigate } from "react-router-dom";
import Image from "../../atoms/Image";
import GoogleIcon from "../../../assets/svg/google-icon.svg";
import Button from "../../atoms/Button";

const AuthButton: React.FC<{ title: string }> = ({ title }) => {
  const navigate = useNavigate();

  const handleClick = (
    e: React.MouseEvent<HTMLButtonElement>,
    destination: string
  ) => {
    e.preventDefault();
    if (destination === "home") {
      navigate("/");
    } else if (destination === "login") {
      navigate("/login");
    } else if (destination === "register") {
      navigate("/register")
    }
  };

  let destination: { button1: string; button2: string } = {
    button1: "",
    button2: "",
  };
  
  const setDestination = (title: string) => {
    if (title === "register") {
      destination = {
        button1: "home",
        button2: "login",
      };
    } else if (title === "login") {
      destination = {
        button1: "home",
        button2: "register",
      };
    }
  };

  setDestination(title);

  return (
    <div className="auth-button">
      <Button
        type="submit"
        className="button auth-button-1"
        // handleClick={(e) => handleClick(e, destination.button1)}
      >
        {title === "register" ? "Daftar" : "Masuk"}
      </Button>
      <Button
        type="button"
        className="button auth-button-2"
        handleClick={(e) => handleClick(e, destination.button2)}
      >
        {title === "register" ? "Masuk" : "Daftar"}
      </Button>
      <div className="line-container">
        <span className="text">atau</span>
      </div>
      <div style={{ width: "100%" }}>
        <Button
          type="button"
          className="button google-button"
          handleClick={(e) => handleClick(e, "google")}
        >
          <Image src={GoogleIcon} alt="Google icon" />
          Masuk dengan Google
        </Button>
      </div>
    </div>
  );
};

export default AuthButton;
