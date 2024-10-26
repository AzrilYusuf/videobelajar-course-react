import React from "react";
import { dataProduct } from "../../../utils/dataProduct";
import Card from "../../organisms/card/Card";
import "./Product.css";
import ProductMenu from "../../molecules/product-menu/ProductMenu";
import ProductTitle from "../../molecules/product-title/ProductTitle";

const Product: React.FC = () => {
  return (
    <section className="content">
      <ProductTitle />
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
