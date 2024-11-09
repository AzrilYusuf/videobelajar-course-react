import { useEffect } from "react";
import AuthForm from "../components/organisms/auth-form/AuthForm";

const RegisterPage: React.FC = () => {
  useEffect(() => {
    document.title = "Register";
  });

  return <AuthForm title="register" />;
};

export default RegisterPage;
