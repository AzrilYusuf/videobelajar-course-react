import React from "react";
import "./TitleForm.css";

const TitleForm: React.FC<{ title: string }> = ({ title }) => {
  let content: { title: string; body: string } = {
    title: "",
    body: "",
  };
  const renderContent = (title: string) => {
    if (title === "register") {
      content = {
        title: "Pendaftaran Akun",
        body: "Yuk, daftarkan akunmu sekarang juga!",
      };
    } else if (title === "login") {
      content = {
        title: "Masuk ke Akun",
        body: "Yuk, lanjutin belajarmu di videobelajar.",
      };
    }
  };
  renderContent(title);

  return (
    <div className="title-form">
      <h1>{content.title}</h1>
      <p>{content.body}</p>
    </div>
  );
};

export default TitleForm;
