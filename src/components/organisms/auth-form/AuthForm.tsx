import React, { useState } from "react";
import "./AuthForm.css";
import TitleForm from "../../molecules/title-form/TitleForm";
import InputForm from "../../molecules/input-form/InputForm";
import { FormTypes } from "../../../interfaces/interfaces";

interface FormValues {
  fullname: string;
  email: string;
  phone_number: string;
  password: string;
  confirm_password: string;
}

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

  let formType: FormTypes[] = [
    {
      htmlFor: "",
      labelValue: "",
      id: "",
      inputType: "",
      inputName: "",
      handleChange: handleInput,
    },
  ];

  const renderContent = (title: string) => {
    if (title === "register") {
      formType = [
        {
          htmlFor: "fullname",
          labelValue: "Nama Lengkap",
          id: "1",
          inputType: "text",
          inputName: "fullname",
          handleChange: handleInput,
        },
        {
          htmlFor: "email",
          labelValue: "E-mail",
          id: "2",
          inputType: "email",
          inputName: "email",
          handleChange: handleInput,
        },
        {
          htmlFor: "mobile",
          labelValue: "Nomor HP",
          id: "3",
          inputType: "text",
          inputName: "phone_number",
          handleChange: handleInput,
        },
        {
          htmlFor: "password",
          labelValue: "Password",
          id: "4",
          inputType: "password",
          inputName: "password",
          handleChange: handleInput,
        },
        {
          htmlFor: "confirm_password",
          labelValue: "Confirm Password",
          id: "5",
          inputType: "password",
          inputName: "confirm_password",
          handleChange: handleInput,
        },
      ];
    }
  };

  renderContent(title);

  return (
    <div className="register">
      <TitleForm title="register" />
      <div className="register-form">
        {/* <!-- Fullname input --> */}
        <InputForm
          htmlFor={formType[0].htmlFor}
          labelValue={formType[0].labelValue}
          id={formType[0].id}
          inputType={formType[0].inputType}
          inputName={formType[0].inputName}
          handleChange={handleInput}
        />

        {/* <!-- Email input --> */}
        <div style={{ display: "flex", flexDirection: "column" }}>
          <label htmlFor="email">
            E-mail <span className="red-color">&lowast;</span>
          </label>
          <input type="text" name="email" required />
        </div>

        {/* <!-- Mobile Phone number input --> */}
        <div style={{ display: "flex", flexDirection: "column" }}>
          <label htmlFor="mobile">
            Nomor HP <span className="red-color">&lowast;</span>
          </label>
          <div className="pnumber-select">
            <select id="phoneNumber" name="phone-number">
              <option value="1">+62</option>
              <option value="2">+63</option>
              <option value="3">+64</option>
              <option value="4">+65</option>
            </select>
            <input
              style={{ width: "100%" }}
              type="text"
              name="phoneNumber"
              required
            />
          </div>
        </div>

        {/* <!-- Password input --> */}
        <div style={{ display: "flex", flexDirection: "column" }}>
          <label htmlFor="password">
            Password <span className="red-color">&lowast;</span>
          </label>
          <div style={{ display: "flex", alignItems: "center" }}>
            <input
              type="password"
              name="password"
              id="password"
              required
              style={{ flex: "1" }}
            />
            <button
              type="button"
              id="togglePassword"
              style={{ marginLeft: "8px" }}
            >
              <svg
                width="22"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1 12C1 12 5 4 12 4C19 4 23 12 23 12"
                  stroke="#3A3541"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M1 12C1 12 5 20 12 20C19 20 23 12 23 12"
                  stroke="#3A3541"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <circle
                  cx="12"
                  cy="12"
                  r="3"
                  stroke="#3A3541"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* <!-- Confirm Password input --> */}
        <div style={{ display: "flex", flexDirection: "column" }}>
          <label htmlFor="confirm-password">
            Konfirmasi Password
            <span className="red-color">&lowast;</span>
          </label>
          <div style={{ display: "flex", alignItems: "center" }}>
            <input
              type="password"
              name="password"
              id="confirmPassword"
              required
              style={{ flex: "1" }}
            />
            <button
              type="button"
              id="toggleConfirmPassword"
              style={{ marginLeft: "8px" }}
            >
              <svg
                width="22"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1 12C1 12 5 4 12 4C19 4 23 12 23 12"
                  stroke="#3A3541"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M1 12C1 12 5 20 12 20C19 20 23 12 23 12"
                  stroke="#3A3541"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <circle
                  cx="12"
                  cy="12"
                  r="3"
                  stroke="#3A3541"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </button>
          </div>
          <a href="register.html" className="forgot-password">
            Lupa Password?
          </a>
        </div>
      </div>
      <div className="authentication-button">
        <button className="button register-button">
          <a href="./pages/login.html">Daftar</a>
        </button>
        <button type="submit" className="button login-button">
          <a href="./pages/login.html">Masuk</a>
        </button>
        <div className="line-container">
          <span className="text">atau</span>
        </div>
        <div style={{ width: "100%" }}>
          <button className="button google-button">
            <svg
              width="21"
              height="21"
              viewBox="0 0 21 21"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M20.4905 10.926C20.4905 10.0874 20.4224 9.47543 20.2752 8.84082H10.6992V12.6258H16.3201C16.2068 13.5664 15.5948 14.983 14.2349 15.9349L14.2159 16.0616L17.2436 18.4071L17.4534 18.4281C19.3798 16.6489 20.4905 14.0311 20.4905 10.926Z"
                fill="#4285F4"
              />
              <path
                d="M10.6992 20.8983C13.453 20.8983 15.7648 19.9917 17.4534 18.4279L14.2349 15.9347C13.3737 16.5353 12.2177 16.9546 10.6992 16.9546C8.00211 16.9546 5.71297 15.1754 4.89695 12.7163L4.77734 12.7265L1.62906 15.1629L1.58789 15.2774C3.26508 18.6091 6.71016 20.8983 10.6992 20.8983Z"
                fill="#34A853"
              />
              <path
                d="M4.89695 12.7164C4.68164 12.0818 4.55703 11.4018 4.55703 10.6993C4.55703 9.9966 4.68164 9.31668 4.88562 8.68207L4.87992 8.54691L1.69219 6.07129L1.58789 6.1209C0.896641 7.50348 0.5 9.05605 0.5 10.6993C0.5 12.3425 0.896641 13.895 1.58789 15.2775L4.89695 12.7164Z"
                fill="#FBBC05"
              />
              <path
                d="M10.6992 4.44367C12.6144 4.44367 13.9063 5.27094 14.6429 5.96227L17.5213 3.1518C15.7535 1.50859 13.453 0.5 10.6992 0.5C6.71016 0.5 3.26508 2.78914 1.58789 6.12086L4.88563 8.68203C5.71297 6.22289 8.00211 4.44367 10.6992 4.44367Z"
                fill="#EB4335"
              />
            </svg>
            Masuk dengan Google
          </button>
        </div>
      </div>
    </div>
  );
};

export default AuthForm;
