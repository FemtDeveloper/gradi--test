import React, { useState } from "react";
import { useContext } from "react";
import { ProductContext } from "../../context/ProductProvider";
import "./Purchase.css";

const Purchase = () => {
  const price = 285;

  const [quantity, setQuantity] = useState(0);
  const [isInCart, setIsInCart] = useState(false);
  const [isFavorite, setisFavorite] = useState(false);

  const { selectedSize, selectedColor } = useContext(ProductContext);

  const addToCart = () => {
    setIsInCart(true);
    setTimeout(() => {
      setIsInCart(false);
    }, 5000);
  };
  const increaseQuantity = () => {
    setQuantity(quantity + 1);
  };
  const decreaseQuantity = () => {
    if (quantity > 0) {
      setQuantity(quantity - 1);
    } else {
      setQuantity(0);
    }
  };

  const addToFavorite = () => {
    setisFavorite(!isFavorite);
  };

  return (
    <>
      <div className="purchase-container">
        <p className="quantity">
          <span onClick={decreaseQuantity}>-</span> {quantity}{" "}
          <span onClick={increaseQuantity}>+</span>
        </p>
        <p className="total-price">
          Total Price: <span>$ {price * quantity}</span>{" "}
        </p>
      </div>

      <div className="btn-parent">
        {isInCart && (
          <p className="addedToCart">
            You has added {selectedColor} {selectedSize} to cart
          </p>
        )}

        <div className="button-container">
          <button
            className={isFavorite ? "fav-btn btn is-favorite" : "fav-btn btn"}
            onClick={addToFavorite}
          >
            {isFavorite ? "Remove from favorites" : "Add to favorite"}
          </button>
          <button
            className={isInCart ? "add-to-cart btn " : "add-to-cart btn"}
            onClick={addToCart}
          >
            Add to cart
          </button>
        </div>
      </div>
      <p className="description">
        The Matthew M. Williams x Nike Free Trainer 3 SP "Bred” is an
        ultra-modern revamp of the Free Troiner 3. Williams, the creative
        director at high-fashion label Alyx, brings his futuristic utilitarian
        aesthetic to the eye-cotching design. Signifying the
        "multi-functionality of our modern urban existence,” the shoe is made of
        the Free Trainer 3 upper, medial zipper, and detachable Vibram outsole.
        The avant-garde style can be worn as a minimal trainer or a heavy-duty
        boot.
      </p>
    </>
  );
};

export default Purchase;
