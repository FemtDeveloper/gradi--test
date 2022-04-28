import React, { useContext, useState } from "react";
import { ProductContext } from "../../context/ProductContext";
import "./ColorAndSize.css";

const ColorAndSize = () => {
  const { data, variants } = useContext(ProductContext);

  const [color, setColor] = useState("Red");

  const filteredVariants = variants.filter(
    (variant) => variant.option1 === color
  );

  const handlerColor = (e) => {
    e.preventDefault();
    setColor(e.target.value);
  };
  return (
    <>
      <div className="color-container">
        <p>Color:</p>
        <form>
          <div className="color-outline">
            <button
              type="button"
              className="btn-red color-btn"
              value="Red"
              onClick={handlerColor}
            ></button>
          </div>
          <div className="color-outline">
            <button
              type="button"
              className="btn-black color-btn"
              value="Black"
              onClick={handlerColor}
            ></button>
          </div>
          <div className="color-outline">
            <button
              type="button"
              value="White"
              className="btn-white color-btn"
              onClick={handlerColor}
            ></button>
          </div>
        </form>
      </div>

      <div className="size-container">
        <p>Size:</p>
        {!filteredVariants ? (
          "loading..."
        ) : (
          <div className="sizes">
            {filteredVariants.map((variant) => (
              <button className="size-btn" key={variant.id}>
                {variant.option2}
              </button>
            ))}
          </div>
        )}
      </div>
    </>
  );
};
export default ColorAndSize;
