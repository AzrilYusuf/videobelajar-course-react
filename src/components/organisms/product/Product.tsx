import React from "react";
import { dataProduct } from "../../../utils/dataProduct";
import Card from "../../organisms/card/Card";
import "./Product.css";
import ProductMenu from "../../molecules/product-menu/ProductMenu";

const Product: React.FC = () => {
  return (
    <section className="content">
      <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
        <h1 style={{ fontSize: "32px" }}>
          Koleksi Video Pembelajaran Unggulan
        </h1>
        <p>Jelajahi Dunia Pengetahuan Melalui Pilihan Kami!</p>
      </div>
      <ProductMenu />
      <div className="price-list" id="priceList">
        {dataProduct.map((data) => {
          return (
            <Card
              key={data.id}
              image={data.image}
              title={data.title}
              description={data.description}
              tutorImage={data.tutorImage}
              tutorName={data.tutorName}
              tutorPosition={data.tutorPosition}
              rating={data.rating}
              price={data.price}
              id={data.id}
            />
          );
        })}
      </div>
    </section>
  );
};

export default Product;
