import React, { useContext } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import "./CarouselSlide.css";
import { ProductContext } from "../../context/ProductContext";

export const CarouselSlide = () => {
  const { data } = useContext(ProductContext);

  return (
    <div className="carousel-container">
      {!data ? (
        "Loading"
      ) : (
        <Carousel>
          {data.images.map((image) => (
            <img src={image} alt="free trainer" key={image} />
          ))}
        </Carousel>
      )}
    </div>
  );
};
