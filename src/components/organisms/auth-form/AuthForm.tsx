import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import TitleForm from "../../molecules/title-form/TitleForm";
import InputForm from "../../molecules/input-form/InputForm";
import AuthButton from "../../molecules/auth-button/AuthButton";
import {
  // FormValues,
  FormTypes,
  UserProfile,
} from "../../../interfaces/interfaces";
import "./AuthForm.css";

const AuthForm: React.FC<{ title: string }> = ({ title }) => {
  const [profile, setProfile] = useState<UserProfile>(() => {
    const storedProfile = localStorage.getItem("profile");
    return storedProfile
      ? JSON.parse(storedProfile)
      : { fullname: "", email: "", phone_number: "", password: "" };
  });
  const [confirm_password, setConfirmPassword] = useState<string>("");
  const [error, setError] = useState<string>("");
  const navigate = useNavigate();

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
      const { name, value } = e.target;

      if (name === "confirm_password") {
        setConfirmPassword(value);
      } else {
        setProfile({
          ...profile,
          [e.target.name]: e.target.value,
        });
      }
    // }
    console.log(profile);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (title === "register") {
      if (profile.password !== confirm_password) {
        setError("Password harus sama!");
        return;
      }
      setError("");
  
      // Store the profile data in local storage (without confirm_password)
      localStorage.setItem("profile", JSON.stringify(profile));
      console.log("Profile stored: ",profile);
      navigate("/login");
    } else {
      const storedProfile = localStorage.getItem("profile");
      if (!storedProfile) {
        setError("Tidak ada akun yang terdaftar, mohon daftar terlebih dahulu.");
        console.log(error);
        return;
      }
      const registeredProfile = JSON.parse(storedProfile);
      
      // Validate email and password
      if (profile.email !== registeredProfile.email || profile.password !== registeredProfile.password) {
        setError("Email atau password salah!");
        console.log(error);
        return;
      }
      setError("");
      
      console.log("values", profile);
      console.log("registeredProfile", registeredProfile);
      navigate("/");
    }
  };

  let formTypes: FormTypes[] = [
    {
      key: 1,
      htmlFor: "",
      labelChildren: "",
      id: "",
      inputType: "",
      inputName: "",
      isSelect: false,
      toggleHide: false,
      handleChange: handleInput,
      isRequired: true,
    },
  ];

  const renderContent = (title: string) => {
    if (title === "register") {
      formTypes = [
        {
          key: 1,
          htmlFor: "fullname",
          labelChildren: "Nama Lengkap",
          id: "fullname",
          inputType: "text",
          inputName: "fullname",
          isSelect: false,
          toggleHide: false,
          handleChange: handleInput,
          isRequired: true,
        },
        {
          key: 2,
          htmlFor: "email",
          labelChildren: "E-mail",
          id: "email",
          inputType: "email",
          inputName: "email",
          isSelect: false,
          toggleHide: false,
          handleChange: handleInput,
          isRequired: true,
        },
        {
          key: 3,
          htmlFor: "mobile",
          labelChildren: "Nomor HP",
          id: "phoneNumber",
          inputType: "text",
          inputName: "phone_number",
          isSelect: true,
          toggleHide: false,
          handleChange: handleInput,
          isRequired: true,
        },
        {
          key: 4,
          htmlFor: "password",
          labelChildren: "Password",
          id: "password",
          inputType: "password",
          inputName: "password",
          isSelect: false,
          toggleHide: true,
          handleChange: handleInput,
          isRequired: true,
        },
        {
          key: 5,
          htmlFor: "confirm_password",
          labelChildren: "Confirm Password",
          id: "confirmPassword",
          inputType: "password",
          inputName: "confirm_password",
          isSelect: false,
          toggleHide: true,
          handleChange: handleInput,
          isRequired: true,
        },
      ];
    } else if (title === "login") {
      formTypes = [
        {
          key: 1,
          htmlFor: "email",
          labelChildren: "E-mail",
          id: "email",
          inputType: "email",
          inputName: "email",
          isSelect: false,
          toggleHide: false,
          handleChange: handleInput,
          isRequired: true,
        },
        {
          key: 2,
          htmlFor: "password",
          labelChildren: "Password",
          id: "password",
          inputType: "password",
          inputName: "password",
          isSelect: false,
          toggleHide: true,
          handleChange: handleInput,
          isRequired: true,
        },
      ];
    }
  };

  renderContent(title);

  return (
    <div className={title === "register" ? "register" : "login"}>
      <TitleForm title={title} />
      <form
        className={title === "register" ? "register-form" : "login-form"}
        onSubmit={(e) => handleSubmit(e)}
      >
        {formTypes.map((form) => (
          <InputForm
            key={form.key}
            htmlFor={form.htmlFor}
            labelChildren={form.labelChildren}
            id={form.id}
            inputType={form.inputType}
            inputName={form.inputName}
            isSelect={form.isSelect}
            toggleHide={form.toggleHide}
            handleChange={form.handleChange}
            isRequired={form.isRequired}
          />
        ))}

        <a href="#register" className="forgot-password">
          Lupa Password?
        </a>
        {error && <p style={{ color: "red" }}>&lowast; {error}</p>}
        <AuthButton title={title === "register" ? "register" : "login"} />
      </form>
    </div>
  );
};

export default AuthForm;
