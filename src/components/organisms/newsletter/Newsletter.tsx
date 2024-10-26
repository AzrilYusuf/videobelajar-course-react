import React, { useState } from "react";
import "./Newsletter.css";
import NewsletterText from "../../molecules/newsletter-text/NewsletterText";
import Input from "../../atoms/Input";
import Button from "../../atoms/Button";

const Newsletter: React.FC = () => {
  const [value, setValue] = useState<string>();

  const handleEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
    console.log(value);
  };

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
  }

  return (
    <section className="newsletter-container">
      <div className="newsletter">
        <NewsletterText />
        <div className="newsletter-input">
          <Input
            type="email"
            name="email"
            placeholder="Masukkan Email mu"
            handleChange={(e) => handleEmail(e)}
          />
          <Button className="subscribe-button" handleClick={(e) => handleClick(e)}>
            Subscribe
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
