import { useEffect } from "react";
import Navbar from "../components/organisms/navbar/Navbar";
import AuthForm from "../components/organisms/auth-form/AuthForm";

const RegisterPage: React.FC = () => {
  useEffect(() => {
    document.title = "Register";
  });

  return (
    <div className="auth-container">
      <Navbar />
      <AuthForm />
    </div>
  );
};

export default RegisterPage;
