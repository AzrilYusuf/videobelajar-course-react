import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import TitleForm from "../../molecules/title-form/TitleForm";
import InputForm from "../../molecules/input-form/InputForm";
import AuthButton from "../../molecules/auth-button/AuthButton";
import {
  FormTypes,
  UserProfile,
} from "../../../interfaces/component.interface.tsx";
// import { useAuthStore } from "../../../stores/authStore.tsx";
import "./AuthForm.css";
import {
  checkUserByEmail,
  createUser,
  getUser,
} from "../../../services/user.service.ts";
import { AxiosError } from "axios";

const AuthForm: React.FC<{ title: string }> = ({ title }) => {
  const [values, setValues] = useState<UserProfile>({
    fullname: "",
    email: "",
    phone_number: "",
    password: "",
  });
  const [confirm_password, setConfirmPassword] = useState<string>("");
  const [error, setError] = useState<string>("");
  const navigate = useNavigate();

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    // Handle confirm password
    if (name === "confirm_password") {
      setConfirmPassword(value);
    } else {
      // Handle other inputs
      setValues({ ...values, [name]: value });
      // console.log(values);
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (title === "register") {
      //* Register user
      // Check if all fields are filled
      if (
        !values.fullname ||
        !values.email ||
        !values.phone_number ||
        !values.password ||
        !confirm_password
      ) {
        setError("Semua data harus diisi!");
        return;
      }

      // Check if password and confirm password match
      if (values.password !== confirm_password) {
        setError("Password dan konfirmasi password harus sama!");
        return;
      }
      setError("");

      try {
        //* Check wether the email is registered or not
        const responseEmail = await checkUserByEmail(values.email);
        // If email is registered then send error message
        if (responseEmail.status === 200) {
          setError("Email is registered.");
          throw new Error("Email is registered.");
        } else {
          const response = await createUser(values);
          console.log("Register success, response: ", response);
          navigate("/login");
        }
      } catch (error) {
        // Check if the error is an AxiosError
        if (error instanceof AxiosError) {
          // Log the error message
          console.error(
            error.response?.data?.message || "Registration failed."
          );
        } else {
          // Log the error if it wasn't an AxiosError
          console.error("An unexpected error occurred: ", error);
        }
      }
    } else {
      //* Login user
      // Ceck if all fields are filled
      if (!values.email || !values.password) {
        setError("Semua data harus diisi!");
        return;
      }

      try {
        //* Check wether the email is registered or not
        const responseEmail = await checkUserByEmail(values.email);
        if (responseEmail.status === 200) {
          const data = responseEmail.data.filter(
            (user: { email: string }) => user.email === values.email
          );
          // Make sure the email is valid
          if (data.length > 0) {
            const userData = await getUser(data[0].id);
            // Check the credential
            if (
              userData.data.email === values.email &&
              userData.data.password === values.password
            ) {
              // Store user's fullname and set isLoggedIn to true
              localStorage.setItem(
                "user",
                JSON.stringify(userData.data.fullname)
              );
              localStorage.setItem("isLoggedIn", "true");
              navigate("/");
            } else {
              setError("Password salah! Tolong masukkan password yang benar.");
              throw new Error(
                "Password is incorrect! Please input correct password."
              );
            }
          } else {
            setError("Email tidak terdaftar! Tolong daftar terlebih dahulu.");
            throw new Error("Email is not registered! Please register first.");
          }
        } else {
          setError("Email tidak terdaftar! Tolong daftar terlebih dahulu.");
          throw new Error("Email is not registered! Please register first.");
        }
      } catch (error) {
        // Check if the error is an AxiosError
        if (error instanceof AxiosError) {
          // Log the error message
          console.error(error.response?.data?.message || "Login failed.");
        } else {
          // Log the error if it wasn't an AxiosError
          console.error("An unexpected error occurred: ", error);
        }
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
          inputMode: "numeric",
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
            inputMode={form.inputMode}
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
