import React, { useContext } from "react";
import { useState } from "react";
import { ProductsContext } from "../../context/ProductContext";
import "./Carousel.css";

const Carousel = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const { data } = useContext(ProductsContext);

  const handleDots = (index) => {
    setActiveIndex(index);
  };

  return (
    <>
      {!data ? (
        "Loading"
      ) : (
        <div className="main-carousel">
          <div
            className="image-container"
            style={{ transform: `translatex(${activeIndex * -25}%)` }}
          >
            {data.images.map((image) => (
              <img src={image} alt="free trainer" key={image} />
            ))}
          </div>
          <ul className="dots">
            {data.images.map((image, i) => (
              <li
                className={i === activeIndex ? "dot active" : "dot"}
                key={image}
                onClick={() => handleDots(i)}
              ></li>
            ))}
          </ul>
          <div className="thumbnails">
            {data.images.map((image, i) => (
              <img
                src={image}
                alt="free trainer"
                key={image}
                className="thumbnail"
                onClick={() => handleDots(i)}
                style={{
                  transform:
                    activeIndex !== 3
                      ? `translatex(${activeIndex * -45}%)`
                      : "translatex(0%)",
                  transition: "all 0.5s ease",
                }}
              />
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default Carousel;
