import React from "react";
import Flip from "react-reveal/Flip";
import "./product.css";

const Product = ({ img }) => {
  return (
    <Flip bottom>
      <div className="p">
        <div className="p-browser">
          <div className="p-circle"></div>
          <div className="p-circle"></div>
          <div className="p-circle"></div>
        </div>
        <img src={img} alt="" className="p-img" />
      </div>
    </Flip>
  );
};

export default Product;
