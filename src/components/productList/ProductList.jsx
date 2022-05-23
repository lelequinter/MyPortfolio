import React from "react";
import Product from "../product/Product";
import { products } from "../../data";
import "./productList.css";

const ProductList = () => {
  return (
    <div className="pl" id="projects">
      <div className="pl-texts">
        <h1 className="pl-title">Create & inspire.</h1>
        <p className="pl-desc">
          I'm a creative developer enthusiast of design that can make that your
          project looks good. Take a look at some of my projects.
        </p>
      </div>
      <div className="pl-list">
        {products.map((item) => (
          <Product key={item.id} img={item.img} link={item.link} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
