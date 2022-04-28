import React, { useContext } from "react";
import { ProductContext } from "../../context/ProductContext";
import "./Carousel.css";

const Carousel = () => {
  const { data } = useContext(ProductContext);
  // const [index, setIndex] = useState(0);

  const mainCarousel = document.querySelector(".image-container");
  const thumbnails = document.querySelector(".thumbnails");
  const dot = document.querySelectorAll(".dot");
  const thumbnail = document.querySelectorAll(".thumbnail");

  dot.forEach((d, i) => {
    dot[i].addEventListener("click", () => {
      let position = i;
      let translate = position * -25;
      mainCarousel.style.transform = `translatex(${translate}%)`;
      dot.forEach((d, i) => {
        dot[i].classList.remove("active");
      });
      dot[i].classList.add("active");
    });
  });
  thumbnail.forEach((d, i) => {
    thumbnail[i].addEventListener("click", () => {
      let position = i;
      console.log(position);
      let translate = position * -25;
      mainCarousel.style.transform = `translatex(${translate}%)`;
      let translateThumbnails = position * -33;
      thumbnails.style.transform = `translatex(${translateThumbnails}%)`;
      if (translateThumbnails < -98) {
        translateThumbnails = 0;
        thumbnails.style.transform = `translatex(${translateThumbnails}%)`;
      }

      thumbnail.forEach((d, i) => {
        dot[i].classList.remove("active");
      });
      dot[i].classList.add("active");
    });
  });
  return (
    <>
      {!data ? (
        "Loading"
      ) : (
        <div className="main-carousel">
          <div className="image-container">
            {data.images.map((image) => (
              <img src={image} alt="free trainer" key={image} />
            ))}
          </div>
          <ul className="dots">
            {data.images.map((image) => (
              <li className="dot" key={image}></li>
            ))}
          </ul>
          <div className="thumbnails">
            {data.images.map((image) => (
              <img
                src={image}
                alt="free trainer"
                key={image}
                className="thumbnail"
              />
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default Carousel;
