import React, { useEffect } from "react";
import HomeLayout from "../components/templates/HomeLayout";
import Navbar from "../components/organisms/navbar/Navbar";
import Tagline from "../components/organisms/tagline/Tagline";
import Product from "../components/organisms/product/Product";
import Newsletter from "../components/organisms/newsletter/Newsletter";
import Footer from "../components/organisms/footer/Footer";
import "../styles/index.css";

const HomePage: React.FC = () => {
  useEffect(() => {
    document.title = "Home";
  });

  return (
    <HomeLayout>
      <Navbar title="home" />
      <Tagline />
      <Product />
      <Newsletter />
      <Footer />
    </HomeLayout>
  );
};

export default HomePage;
