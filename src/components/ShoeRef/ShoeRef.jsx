import React, { useContext } from "react";
import { ProductsContext } from "../../context/ProductContext";
import "./ShoeRef.css";

const ShoeRef = () => {
  const { data } = useContext(ProductsContext);

  return (
    <>
      {!data ? (
        "loading"
      ) : (
        <div className="ref-container">
          <p className="brand">by Nike x ALIK</p>
          <p className="ref">{data.title}</p>
          <p className="price">
            $ {parseInt(data.price.toString().slice(0, -2)).toFixed(2)}{" "}
            <span>
              ${" "}
              {parseInt(
                data.variants[0].compare_at_price.toString().slice(0, -2)
              ).toFixed(2)}
            </span>
          </p>
          <hr />
        </div>
      )}
    </>
  );
};
export default ShoeRef;
