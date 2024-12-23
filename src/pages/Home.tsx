import React, { useEffect } from "react";
import Tagline from "../components/organisms/tagline/Tagline";
import Product from "../components/organisms/product/Product";
import Newsletter from "../components/organisms/newsletter/Newsletter";
import "../styles/index.css";

const HomePage: React.FC = () => {
  useEffect(() => {
    document.title = "Home";
  });

  return (
    <div className="home-container">
      <Tagline />
      <Product />
      <Newsletter />
    </div>
  );
};

export default HomePage;
