import { useEffect } from "react";
import AuthLayout from "../components/templates/AuthLayout";
import AuthForm from "../components/organisms/auth-form/AuthForm";

const RegisterPage: React.FC = () => {
  useEffect(() => {
    document.title = "Register";
  });

  return (
    <AuthLayout>
      <AuthForm title="register" />
    </AuthLayout>
  );
};

export default RegisterPage;
