import { useEffect } from "react";
import AuthForm from "../components/organisms/auth-form/AuthForm";

const LoginPage: React.FC = () => {
  useEffect(() => {
    document.title = "Login";
  });

  return <AuthForm title="login" />;
};

export default LoginPage;
