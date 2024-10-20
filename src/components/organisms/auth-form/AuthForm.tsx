import React, { useState } from "react";
import "./AuthForm.css";
import TitleForm from "../../molecules/title-form/TitleForm";
import InputForm from "../../molecules/input-form/InputForm";
import AuthButton from "../../molecules/auth-button/AuthButton";
import { FormValues, FormTypes } from "../../../interfaces/interfaces";

const AuthForm: React.FC<{ title: string }> = ({ title }) => {
  const [values, setValues] = useState<FormValues>({
    fullname: "",
    email: "",
    phone_number: "",
    password: "",
    confirm_password: "",
  });

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValues({ ...values, [e.target.name]: e.target.value });
    // console.log(values);
    // console.log(e.target.value);
  };

  let formTypes: FormTypes[] = [
    {
      key: 1,
      htmlFor: "",
      labelValue: "",
      id: "",
      inputType: "",
      inputName: "",
      isSelect: false,
      toggleHide: false,
      handleChange: handleInput,
    },
  ];

  const renderContent = (title: string) => {
    if (title === "register") {
      formTypes = [
        {
          key: 1,
          htmlFor: "fullname",
          labelValue: "Nama Lengkap",
          id: "fullname",
          inputType: "text",
          inputName: "fullname",
          isSelect: false,
          toggleHide: false,
          handleChange: handleInput,
        },
        {
          key: 2,
          htmlFor: "email",
          labelValue: "E-mail",
          id: "email",
          inputType: "email",
          inputName: "email",
          isSelect: false,
          toggleHide: false,
          handleChange: handleInput,
        },
        {
          key: 3,
          htmlFor: "mobile",
          labelValue: "Nomor HP",
          id: "phoneNumber",
          inputType: "text",
          inputName: "phone_number",
          isSelect: true,
          toggleHide: false,
          handleChange: handleInput,
        },
        {
          key: 4,
          htmlFor: "password",
          labelValue: "Password",
          id: "password",
          inputType: "password",
          inputName: "password",
          isSelect: false,
          toggleHide: true,
          handleChange: handleInput,
        },
        {
          key: 5,
          htmlFor: "confirm_password",
          labelValue: "Confirm Password",
          id: "confirmPassword",
          inputType: "password",
          inputName: "confirm_password",
          isSelect: false,
          toggleHide: true,
          handleChange: handleInput,
        },
      ];
    } else if (title === "login") {
      formTypes = [
        {
          key: 1,
          htmlFor: "email",
          labelValue: "E-mail",
          id: "email",
          inputType: "email",
          inputName: "email",
          isSelect: false,
          toggleHide: false,
          handleChange: handleInput,
        },
        {
          key: 2,
          htmlFor: "password",
          labelValue: "Password",
          id: "password",
          inputType: "password",
          inputName: "password",
          isSelect: false,
          toggleHide: true,
          handleChange: handleInput,
        },
      ];
    }
  };

  renderContent(title);

  return (
    <div className={title === "register" ? "register" : "login"}>
      <TitleForm title={title} />
      <div className={title === "register" ? "register-form" : "login-form"}>
        {formTypes.map((form) => (
          <InputForm
            key={form.key}
            htmlFor={form.htmlFor}
            labelValue={form.labelValue}
            id={form.id}
            inputType={form.inputType}
            inputName={form.inputName}
            isSelect={form.isSelect}
            toggleHide={form.toggleHide}
            handleChange={handleInput}
          />
        ))}

        <a href="#register" className="forgot-password">
          Lupa Password?
        </a>
      </div>

      <AuthButton title={title === "register" ? "register" : "login"} />
    </div>
  );
};

export default AuthForm;
