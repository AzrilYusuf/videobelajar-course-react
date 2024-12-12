import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import TitleForm from "../../molecules/title-form/TitleForm";
import InputForm from "../../molecules/input-form/InputForm";
import AuthButton from "../../molecules/auth-button/AuthButton";
import { FormTypes, UserProfile } from "../../../interfaces/interfaces";
import { useAuthStore } from "../../../stores/authStore.tsx";
import "./AuthForm.css";

const AuthForm: React.FC<{ title: string }> = ({ title }) => {
  const {
    fullname,
    email,
    phone_number,
    password,
    setFullname,
    setEmail,
    setPhoneNumber,
    setPassword,
    saveProfile,
    login,
  } = useAuthStore((state) => state);
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
    // console.log(profile);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (title === "register") {
      // * Register user
      // Check if all fields are filled
      if (
        !fullname ||
        !email ||
        !phone_number ||
        !password ||
        !confirm_password
      ) {
        setError("Semua data harus diisi!");
        return;
      }

      // Check if password and confirm password match
      if (password !== confirm_password) {
        setError("Password dan konfirmasi password harus sama!");
        return;
      }
      setError("");

      // Store the profile data in local storage (without confirm_password)
      saveProfile();
      navigate("/login");
    } else {
      // ** Login user
      const storedProfile = localStorage.getItem("userProfile");
      // Check if the user is registered
      if (storedProfile !== null) {
        const { email: storedEmail, password: storedPassword } =
          JSON.parse(storedProfile);
        // Check if the email and password match
        if (email !== storedEmail) {
          setError(
            "Tidak ada akun yang terdaftar, mohon daftar terlebih dahulu."
          );
          return;
        } else if (password !== storedPassword) {
          setError("Password yang Anda masukkan salah!");
        } else {
          login();
          navigate("/");
        }
      } else {
        setError(
          "Tidak ada akun yang terdaftar, mohon daftar terlebih dahulu."
        );
      }
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
          handleChange: setFullname,
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
          handleChange: setEmail,
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
          handleChange: setPhoneNumber,
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
          handleChange: setPassword,
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
          handleChange: setEmail,
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
          handleChange: setPassword,
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
        onSubmit={handleSubmit}
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
