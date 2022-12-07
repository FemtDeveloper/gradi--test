import React, { useContext, useState } from "react";
import { useEffect } from "react";
import { ProductsContext } from "../../context/ProductContext";
import { ProductContext } from "../../context/ProductProvider";

import "./ColorAndSize.css";

const ColorAndSize = () => {
  const { variants } = useContext(ProductsContext);
  const { selectSize, selectColor } = useContext(ProductContext);

  const [color, setColor] = useState("Red");
  const [size, setSize] = useState(null);

  const filteredVariants = variants.filter(
    (variant) => variant.option1 === color
  );

  const handlerColor = (e) => {
    e.preventDefault();
    setColor(e.target.value);
  };
  const handleSize = (e) => {
    e.preventDefault();
    setSize(e.target.value);
  };
  useEffect(() => {
    selectSize(size);
    selectColor(color);
  }, [size, color, setColor, setSize]);

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
            {filteredVariants.length > 0 ? (
              filteredVariants.map((variant) => (
                <button
                  className="size-btn"
                  key={variant.id}
                  value={variant.option2}
                  onClick={handleSize}
                >
                  {variant.option2}
                </button>
              ))
            ) : (
              <h3>This color is not available in this moment</h3>
            )}
          </div>
        )}
      </div>
    </>
  );
};
export default ColorAndSize;
