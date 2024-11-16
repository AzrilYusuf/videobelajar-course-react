import React, { useState } from "react";
import { FormValues, FormTypes } from "../../../interfaces/interfaces";
import TitleForm from "../../molecules/title-form/TitleForm";
import InputForm from "../../molecules/input-form/InputForm";
import AuthButton from "../../molecules/auth-button/AuthButton";
import "./AuthForm.css";

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
      <div className={title === "register" ? "register-form" : "login-form"}>
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
            handleChange={handleInput}
            isRequired={form.isRequired}
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
