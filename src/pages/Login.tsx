import { useEffect } from "react";
import Navbar from "../components/organisms/navbar/Navbar";
import AuthForm from "../components/organisms/auth-form/AuthForm";

const LoginPage: React.FC = () => {
  useEffect(() => {
    document.title = "Login";
  });

  return (
    <div className="auth-container">
      <Navbar />
      <section className="form-content">
        <AuthForm title="login" />
      </section>
    </div>
  );
};

export default LoginPage;
