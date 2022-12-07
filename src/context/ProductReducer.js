export const productReducer = (state, action) => {
  switch (action.type) {
    case "selectSize":
      return {
        ...state,
        selectedSize: action.payload,
      };
    case "selectColor":
      return {
        ...state,
        selectedColor: action.payload,
      };

    default:
      return state;
  }
};
