import React from "react";
import ColorAndSize from "../ColorAndSize";
import ShoeRef from "../ShoeRef/ShoeRef";
import Purchase from "../Purchase";
import "./ProductInfo.css";

const ProductInfo = () => {
  return (
    <div className="feature-container">
      <ShoeRef />
      <ColorAndSize />
      <Purchase />
    </div>
  );
};

export default ProductInfo;
