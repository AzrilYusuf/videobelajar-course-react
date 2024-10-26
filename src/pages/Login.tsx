import { useEffect } from "react";
import AuthLayout from "../components/templates/AuthLayout";
import AuthForm from "../components/organisms/auth-form/AuthForm";

const LoginPage: React.FC = () => {
  useEffect(() => {
    document.title = "Login";
  });

  return (
    <AuthLayout>
      <AuthForm title="login" />
    </AuthLayout>
  );
};

export default LoginPage;
