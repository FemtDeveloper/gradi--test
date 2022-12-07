import { createContext } from "react";
import { useReducer } from "react";
import { productReducer } from "./ProductReducer";

export const ProductContext = createContext();

const initialState = {
  selectedSize: null,
  selectedColor: null,
};

export const ProductProvider = ({ children }) => {
  const [state, dispatch] = useReducer(productReducer, initialState);

  const selectSize = (size) => {
    dispatch({ type: "selectSize", payload: size });
  };
  const selectColor = (color) => {
    dispatch({ type: "selectColor", payload: color });
  };

  return (
    <ProductContext.Provider
      value={{
        ...state,

        // Methods
        selectColor,
        selectSize,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};
